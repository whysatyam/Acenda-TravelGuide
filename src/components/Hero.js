import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative h-[60vh] md:h-screen flex items-end justify-center">
      <Image
        src="/images/backgroundtop.png"
        alt="Background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        loading="eager"
      />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white w-[90%] md:w-3/4 lg:w-2/3 xl:w-1/2 h-auto p-4 md:p-10 rounded-xl shadow-xl text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-[#008cc0]">
          Good Morning
        </h1>
        <p className="text-black mt-2 md:mt-3 text-base md:text-lg">
          Explore beautiful places in India with Acenda
        </p>
      </div>
    </div>
  );
}

export default Hero;
