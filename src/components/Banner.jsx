import React from "react";
import Image from "next/image";


const Banner = () => {
    return(
        <div className="bg-[url('https://i.pinimg.com/1200x/8a/fe/83/8afe83b98f339de4c1dd34fde26a86d0.jpg')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Find Your Next Read
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Discover your next favorite book with our personalized recommendations.
          </p>

          <div className="flex gap-4">
            <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:opacity-90">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Banner;