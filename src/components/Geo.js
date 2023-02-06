import React from "react";
import mobiless from "../assets/mobiless.png";

const Geo = () => {
  return (
    <div className="bg-[#0E0F12] w-full flex justify-center h-[900px]">
      <div className="w-[1400px] flex flex-col-reverse md:flex-row items-center justify-center ">
        <div className="w-1/2 ">
          <img src={mobiless} alt="" />
        </div>

        <div className="lg:w-1/2 ">
          <div className="w-full h-full flex  items-end justify-end">
            <div className="flex flex-col items-start justify-start space-y-6">
              <div>
                <h1 className="text-white text-5xl">Search</h1>
              </div>
              <div>
                <p className="text-[#808795]  ">
                  Search and geocoding is tied to everything we build — <br />
                  maps, navigation, AR — and underlies every app that helps
                  humans explore their world.
                </p>
              </div>
              <div>
                <div className="w-[160px] rounded-3xl p-2 mt-2 border-white border flex items-center justify-center">
                  <div className=" text-white font-medium text-normal">
                    Discover Seacrh
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Geo;
