import React from "react";
import heroImg from "../assets/slider-1.png";
const Herosection = () => {
  return (
    <section class="bg-[#1A1A23] flex items-center justify-center">
      <div className=" ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className=" text-[#FFFFFF] md:text-5xl">
              <span class="leading-normal">
                Discover Digital Art, <br />
                Collect and Sell Your <br />
                Specific NFTs.
              </span>
            </p>
            <p className="mb-8 leading-relaxed text-[#FFFFFF]">
              Partner with one of the world’s largest retailers to showcase your
              brand and products.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Get Started
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Create
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={heroImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
