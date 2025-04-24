import React from "react";

const brands = [
  "/images/partnerOne.png",
  "/images/partnerTwo.png",
  "/images/partnerThree.png",
  "/images/partnerFour.png",
];

const logos = [...brands, ...brands, ...brands];

function Partners() {
  return (
    <div className="overflow-hidden bg-white pt-4 py-10">
      <h2 className="text-center text-3xl font-bold mb-6">OUR PARTNERS</h2>
      <div className="relative w-full pt-5">
        <div className="flex items-center whitespace-nowrap animate-scroll">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="Brand Logo" className="h-16 mx-6" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;