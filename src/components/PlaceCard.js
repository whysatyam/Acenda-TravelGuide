import React from "react";
import { useRouter } from "next/router";
import HeartLike from "./HeartLike";

const toKebabCase = (str) => str.toLowerCase().replace(/\s+/g, "-");

function PlaceCard({ place, state }) {
  const router = useRouter();

  const capitalizeFirst = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const handleClick = () => {
    const placeName = toKebabCase(place.name);
    router.push(`/places/${encodeURIComponent(placeName)}`);
  };

  return (
    <div className="relative z-10 cursor-pointer" onClick={handleClick}>
      <HeartLike place={place} />

      <div
        className="group relative h-48 bg-cover bg-center rounded-md overflow-hidden z-0"
        style={{ backgroundImage: `url(${place.src})` }}
      >
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 flex items-end p-3 rounded-md z-10">
          <h2 className="text-white text-lg font-semibold">{place.name}</h2>
        </div>

        <div className="absolute top-3.5 left-3 hidden group-hover:flex flex-col gap-1 z-10">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-md px-3 py-1 text-white text-xs font-medium">
            Type - {capitalizeFirst(state?.type)}
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-md px-3 py-1 text-white text-xs font-medium">
            Cost - {capitalizeFirst(state?.cost)}
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-md px-3 py-1 text-white text-xs font-medium">
            Crowd - {capitalizeFirst(state?.crowd)}
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-md px-3 py-1 text-white text-xs font-medium">
            Safety - {capitalizeFirst(state?.safety)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceCard;
