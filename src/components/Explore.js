import Link from "next/link";
import React from "react";

function Explore() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white text-center px-6 sm:px-10 py-10 explore-bg">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 w-full max-w-5xl">
        <h1 className="text-5xl font-bold">EXPLORE GOA</h1>
        <p className="mt-4">
          Stunning beaches vibrant nightlife from scenic sunsets to lively
          markets it offers endless adventures
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 2xl:gap-6">
          <div className="flex flex-col items-center">
            <img
              src="/images/g1.jpg"
              alt="Calangute"
              className="w-full max-w-sm sm:max-w-xs lg:max-w-sm 2xl:max-w-md aspect-[4/3] object-cover rounded-lg"
            />
            <p className="mt-2 text-lg font-semibold">Calangute Beach</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/g2.jpg"
              alt="Palolem"
              className="w-full max-w-sm sm:max-w-xs lg:max-w-sm 2xl:max-w-md aspect-[4/3] object-cover rounded-lg"
            />
            <p className="mt-2 text-lg font-semibold">Palolem Beach</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/g3.jpg"
              alt="Baga"
              className="w-full max-w-sm sm:max-w-xs lg:max-w-sm 2xl:max-w-md aspect-[4/3] object-cover rounded-lg"
            />
            <p className="mt-2 text-lg font-semibold">Baga Beach</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/g4.jpg"
              alt="Arambol"
              className="w-full max-w-sm sm:max-w-xs lg:max-w-sm 2xl:max-w-md aspect-[4/3] object-cover rounded-lg"
            />
            <p className="mt-2 text-lg font-semibold">Arambol Beach</p>
          </div>
        </div>
        <Link href="/places">
          <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full cursor-pointer hover:bg-gray-200">
            See All →
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Explore;
