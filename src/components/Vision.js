import React from "react";
import game from "../assets/game.png";
const Vision = () => {
  return (
    <div>
      <section class="text-gray-600 body-font w-full h-[600px] flex items-center justify-center">
        <div class="container w-[1400px] mx-auto flex px-5 py-24 md:flex-row flex-col items-center  ">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={game}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
              <br class="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p class="mb-8 leading-relaxed">
              The Mapbox Vision SDK describes every curb, lane, street sign, and
              road hazard it sees as data. Developers use the SDK's AI-powered
              semantic segmentation, object detection, and classification to
              deliver precise navigation guidance, display driver assistance
              alerts, and detect and map road incidents.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Get Started
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Play
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
