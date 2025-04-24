import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email.trim()) return;
    toast.success("You are now Subscribed", { position: "top-center" });
    setEmail("");
  };

  return (
    <div className="w-full flex items-center justify-center px-6 sm:px-12 py-16">
      <div className="bg-gray-100 rounded-2xl flex flex-col lg:flex-row items-center lg:items-stretch gap-8 p-6 sm:p-12 max-w-5xl w-full shadow-md">
        <Toaster />
        <img
          src="/images/newsletter.png"
          alt="Newsletter"
          className="w-full max-w-xs sm:max-w-sm lg:max-w-md object-cover rounded-2xl"
        />
        <div className="flex flex-col justify-center w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-xl sm:text-4xl font-bold text-gray-900">
            Get special offers, <br /> and more from ACENDA
          </h2>
          <div className="mt-6 relative w-full">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 pr-28"
            />
            <button
              onClick={handleSubscribe}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#008cc0] text-white font-semibold px-5 py-2 rounded-full hover:bg-blue-600"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
