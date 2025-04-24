import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PlaceCard from "./PlaceCard";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

function LikedPlaces() {
  const likedItems = useSelector((state) => state.liked.likedItems);
  const [statesData, setStatesData] = useState(null);

  useEffect(() => {
    const fetchStates = async () => {
      const res = await fetch(`${baseURL}/api/places`);
      const data = await res.json();
      setStatesData(data);
    };
    fetchStates();
  }, []);

  return (
    <div className="w-full">
      <div className="exploreTwo-bg w-full h-[300px] flex items-center justify-center">
        <h1 className="text-white max-[390px]:text-4xl text-5xl font-bold uppercase text-center">
          FAVOURITES
        </h1>
      </div>

      {likedItems.length === 0 ? (
        <div className="flex items-center justify-center min-h-[34.5vh]">
          <p className="text-center text-gray-500 text-lg font-medium">
            NO FAVOURITES YET
          </p>
        </div>
      ) : (
        <div className="mx-auto m-3 mr-3 ml-3">
          <ul className="grid max-[425px]:grid-cols-1 min-[426px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {likedItems.map((place, index) => {
              const placeState = statesData?.states.find(state => 
                state.places.some(p => p.name === place.name)
              );
              return (
                <li key={index} className="p-3">
                  <PlaceCard place={place} state={placeState} />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default LikedPlaces;