import React from "react";

const testimonials = [
  {
    name: "Sebastian",
    role: "Travel Enthusiast",
    image: "/images/t1.png",
    review:
      "I had no idea which cities to explore in Rajasthan, this website helped me find the perfect place to start my journey",
  },
  {
    name: "Emma",
    role: "Food Blogger",
    image: "/images/t2.png",
    review:
      "Planning my next food trip in South India was confusing but this website made it easy by recommending the best cities",
  },
  {
    name: "Alexander",
    role: "Adventure Seeker",
    image: "/images/t3.png",
    review:
      "I wanted to visit the most exciting places in Uttarakhand and this website guided me to the perfect city",
  },
];

function Testimonials() {
  return (
    <div className="bg-black py-16 px-6 pt-16 -mt-8">
      <h2 className="text-white text-center text-2xl sm:text-3xl font-bold mb-18">
        TESTIMONIALS
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-xl flex flex-col items-center text-center relative mx-auto max-w-sm ${
              index === 2 ? "sm:col-span-2 md:col-span-1" : ""
            }`}
          >
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white rounded-full flex justify-center items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full border border-gray-300"
              />
            </div>
            <div className="mt-3">
              <h3 className="font-semibold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>

              <div className="flex justify-center my-2">
                <img src="/images/star.png" alt="Stars" className="w-24" />
              </div>
              <p className="text-gray-700 text-sm px-4">{testimonial.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;