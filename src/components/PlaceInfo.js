import React from "react";
import { useRouter } from "next/router";
import PlaceCard from "./PlaceCard";
import HeartLike from "./HeartLike";

function PlaceInfo({ place, state }) {
  const router = useRouter();
  const { placeName } = router.query;

  const formatTitle = (str) =>
    str
      ?.split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  const otherPlaces = state.places.filter((p) => p.name !== place.name);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[40vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${place?.src})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold text-center px-4">
            {formatTitle(placeName)}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-black/30 z-0"></div>
            <img
              src={place?.src}
              alt={place?.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0.5 right-1.5 z-10">
              <HeartLike place={place} />
            </div>
          </div>

          <div className="w-full h-auto lg:h-[400px]">
            <div className="h-full bg-white rounded-xl shadow-xl p-4 sm:p-6 flex flex-col justify-center">
              <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                  About {formatTitle(placeName)}
                </h2>
                <p className="text-base sm:text-lg text-gray-600">
                  {place?.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <InfoBox label="State" value={state?.name} />
                <InfoBox label="State Tag" value={state?.tag} />
                <InfoBox label="Cost" value={state?.cost} />
                <InfoBox label="Safety" value={state?.safety} />
                <InfoBox label="Type" value={state?.type} />
                <InfoBox label="Crowd" value={state?.crowd} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
            Other Popular Places in {state?.name}
          </h2>
          <div className="mt-[-4px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {otherPlaces.map((otherPlace) => (
              <div key={otherPlace.name} className="w-full">
                <PlaceCard place={otherPlace} state={state} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoBox({ label, value }) {
  const capitalizeFirstLetter = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const fieldsToCapitalize = ["Cost", "Safety", "Type", "Crowd"];
  const displayValue = fieldsToCapitalize.includes(label)
    ? capitalizeFirstLetter(value)
    : value;

  return (
    <div className="bg-gray-50 rounded-lg p-2 sm:p-3 border border-gray-200">
      <h3 className="text-xs sm:text-sm text-gray-600 font-medium">{label}</h3>
      <p className="text-sm sm:text-base font-semibold mt-1">{displayValue}</p>
    </div>
  );
}

export default PlaceInfo;