import React, { useEffect, useState, useMemo, useRef } from "react";
import Select from "react-select";
import Spinner from "./Spinner";
import PlaceCard from "./PlaceCard";
import Image from "next/image";

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i + 0, i + size));
  }
  return result;
};

const FilterSelect = ({ options, onChange, placeholder, isMulti = false }) => (
  <div className="p-2 lg:p-4 bg-white rounded-lg">
    <Select
      options={options}
      onChange={onChange}
      placeholder={placeholder}
      isMulti={isMulti}
      isClearable={!isMulti}
      className="mt-1"
      styles={{
        menu: (base) => ({
          ...base,
          zIndex: 999
        })
      }}
    />
  </div>
);

const getFilterValues = (type, value) => {
  const valueMappings = {
    cost: {
      "low-medium": ["low", "medium"],
      "medium-high": ["medium", "high"]
    },
    safety: {
      "safe-moderate": ["safe", "moderate"],
      "moderate-risky": ["moderate", "risky"]
    }
  };

  return valueMappings[type]?.[value[0]] || value;
};

function PlacesDirectory({ data }) {
  const [filters, setFilters] = useState({
    type: [],
    cost: [],
    crowd: [],
    safety: [],
  });
  const [displayedPlaces, setDisplayedPlaces] = useState([]);
  const [index, setIndex] = useState(0);
  const observerRef = useRef();

  const allPlaces = useMemo(
    () =>
      data.states.flatMap((state) =>
        state.places.map((place) => ({
          ...place,
          type: state.type,
          cost: state.cost,
          crowd: state.crowd,
          safety: state.safety,
          stateName: state.name,
        }))
      ),
    [data]
  );

  const applyFilters = useMemo(() => {
    let result = [...allPlaces];
    Object.entries(filters).forEach(([key, value]) => {
      if (value.length > 0) {
        const filterValues = getFilterValues(key, value);
        result = result.filter((place) => filterValues.includes(place[key]));
      }
    });
    return result;
  }, [filters, allPlaces]);

  const filteredChunks = useMemo(
    () => chunkArray(applyFilters, 10),
    [applyFilters]
  );

  useEffect(() => {
    setDisplayedPlaces(filteredChunks[0] || []);
    setIndex(1);
  }, [filteredChunks]);

  const loadMore = () => {
    if (index < filteredChunks.length) {
      setDisplayedPlaces((prev) => [...prev, ...filteredChunks[index]]);
      setIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            loadMore();
          });
        }
      },
      { threshold: 1.0 }
    );

    const currentObserver = observerRef.current;
    if (currentObserver) observer.observe(currentObserver);

    return () => {
      if (currentObserver) observer.unobserve(currentObserver);
    };
  }, [filteredChunks, index]);

  const handleSelectChange = (selectedOption, category) => {
    const value = selectedOption ? [selectedOption.value] : [];
    setFilters((prev) => ({ ...prev, [category]: value }));
  };

  const handleTypeChange = (selectedOptions) => {
    const values = selectedOptions
      ? selectedOptions.map((opt) => opt.value)
      : [];
    setFilters((prev) => ({ ...prev, type: values }));
  };

  const filterOptions = {
    type: [
      { value: "city", label: "City" },
      { value: "mountains", label: "Mountains" },
      { value: "beaches", label: "Beaches" },
    ],
    cost: [
      { value: "low-medium", label: "Low to Medium" },
      { value: "medium-high", label: "Medium to High" },
    ],
    crowd: [
      { value: "quiet", label: "Quiet" },
      { value: "moderate", label: "Moderate" },
      { value: "crowded", label: "Crowded" },
    ],
    safety: [
      { value: "safe-moderate", label: "Safe to Moderate" },
      { value: "moderate-risky", label: "Moderate to Risky" },
    ],
  };

  return (
    <div className="relative w-full">
      <div className="relative w-full h-[300px] flex items-center justify-center">
        <Image
          src="/images/exploreTwo.png"
          alt="Explore Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          loading="eager"
        />
        <h1 className="text-white max-[390px]:text-4xl text-5xl font-bold uppercase text-center relative z-10">
          DESTINATIONS
        </h1>
      </div>

      <div className="w-full bg-white mt-2 px-4 lg:px-2 lg:mt-1">
        <div className="grid grid-cols-1 min-[380px]:grid-cols-2 lg:grid-cols-4">
          <FilterSelect
            options={filterOptions.type}
            onChange={handleTypeChange}
            placeholder="Select Type"
            isMulti
          />
          <FilterSelect
            options={filterOptions.cost}
            onChange={(option) => handleSelectChange(option, "cost")}
            placeholder="Select Cost"
          />
          <FilterSelect
            options={filterOptions.crowd}
            onChange={(option) => handleSelectChange(option, "crowd")}
            placeholder="Select Crowd"
          />
          <FilterSelect
            options={filterOptions.safety}
            onChange={(option) => handleSelectChange(option, "safety")}
            placeholder="Select Safety"
          />
        </div>
      </div>

      <div className="grid max-[425px]:grid-cols-1 min-[426px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-6 -mt-3 lg:-mt-4">
        {displayedPlaces.map((place, i) => {
          const placeState = data.states.find(state => 
            state.places.some(p => p.name === place.name)
          );
          return (
            <PlaceCard key={i} place={place} state={placeState} />
          );
        })}
      </div>

      {applyFilters.length === 0 && (
        <div className="w-full text-center py-20 pt-0">
          <p className="text-xl text-gray-600 font-medium">NO RESULTS</p>
        </div>
      )}

      {index < filteredChunks.length && (
        <div className="flex justify-center items-center py-10">
          <Spinner />
        </div>
      )}

      {index < filteredChunks.length && (
        <div ref={observerRef} className="text-center py-10"></div>
      )}
    </div>
  );
}

export default PlacesDirectory;