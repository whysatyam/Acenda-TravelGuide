import React from "react";

function Choose() {
  return (
    <div className="text-center py-10 mt-25">
      <h2 className="text-3xl font-bold text-black mb-5">WHY CHOOSE US?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-20">
        <div className="bg-white p-6 rounded-lg text-center">
          <img
            src="/images/choose.png"
            alt="cost"
            className="mx-auto mb-4 w-16 h-16"
          />
          <h3 className="text-lg font-semibold text-black">Location&apos;s Cost</h3>
          <p className="text-black mt-2">
            We recommend locations based on Cost, Lower costs help you stay within budget
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg text-center">
          <img
            src="/images/choose.png"
            alt="safety"
            className="mx-auto mb-4 w-16 h-16"
          />
          <h3 className="text-lg font-semibold text-black">Location&apos;s Safety</h3>
          <p className="text-black mt-2">
            We recommend locations based on Safety, Your well being is our top priority
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg text-center">
          <img
            src="/images/choose.png"
            alt="type"
            className="mx-auto mb-4 w-16 h-16"
          />
          <h3 className="text-lg font-semibold text-black">Location&apos;s Type</h3>
          <p className="text-black mt-2">
            We recommend locations based on Type, Find places that match preferences
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg text-center">
          <img
            src="/images/choose.png"
            alt="crowd"
            className="mx-auto mb-4 w-16 h-16"
          />
          <h3 className="text-lg font-semibold text-black">Location&apos;s Crowd</h3>
          <p className="text-black mt-2">
            We recommend locations based on Crowd, Choose lively or peaceful spots
          </p>
        </div>
      </div>
    </div>
  );
}

export default Choose;