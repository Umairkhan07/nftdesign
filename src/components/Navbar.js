import React from "react";
import { searchIcon, themeIcon, notificationIcon } from "../assets/asstsfile";
import { HiChevronDown } from "react-icons/hi";
const Navbar = () => {
  return (
    <div className="w-[1400px]">
      <div className="w-full flex  justify-between ">
        <div className="flex items-center justify-center">
          <div>
            <div className="flex items-center justify-center ">
              <div className="bg-[#00A5FF] text-white text-2xl h-[35px] w-[35px] font-bold flex items-center justify-center rounded-sm ">
                N
              </div>
              <div>
                <h1 className="text-white ml-1 font-bold  text-2xl">nuron</h1>
              </div>
            </div>
          </div>
          <div className="ml-4 mr-4 bg-[#313138] w-[1px] h-[40px] border-solid"></div>
          <div>
            <ul className="ml-4 flex space-x-6 items-center justify-center text-[#9C9C9D] h-[100px]">
              <div className="group">
                <li className="pb-9 pt-9 flex space-x-1 items-center justify-center">
                  <div>Home</div>
                  <HiChevronDown />
                </li>
                <div className="relative hidden  group-hover:block ">
                  <ul className="absolute top-0 -left-4 bg-[#1A1A23] text-[#ACACAC] w-[260px] h-auto group-hover:block space-y-2 pb-3 rounded-bl-md rounded-br-md">
                    <li className="ml-3 mt-2">Home Page - 1</li>
                    <li className="ml-3 mt-2">Home Page - 2</li>
                    <li className="ml-3 mt-2">Home Page - 3</li>
                    <li className="ml-3 mt-2">Home Page - 4</li>
                    <li className="ml-3 mt-2">Home Page - 5</li>
                    <li className="ml-3 mt-2">Home Page - 6</li>
                    <li className="ml-3 mt-2">Home Page - 7</li>
                    <li className="ml-3 mt-2">Home Page - 8</li>
                    <li className="ml-3 mt-2">Home Page - 9</li>
                    <li className="ml-3 mt-2">Home Page - 10</li>
                    <li className="ml-3 mt-2">Home Page - 11</li>
                    <li className="ml-3 mt-2">Home Page - 12</li>
                  </ul>
                </div>
              </div>
              <li>About</li>
              <div className="group">
                <li className="pb-9 pt-9 flex items-center justify-center space-x-1">
                  <div>Explore</div>
                  <HiChevronDown />
                </li>
                <div className="relative hidden group-hover:block ">
                  <ul className="absolute top-0 bg-[#1A1A23] text-[#ACACAC] w-[250px] h-auto group-hover:block space-y-2 pb-3 rounded-bl-md rounded-br-md">
                    <li className="ml-3 mt-2">Home Page - 1</li>
                    <li className="ml-3 mt-2">Home Page - 2 </li>
                    <li className="ml-3 mt-2">Home Page - 3 </li>
                    <li className="ml-3 mt-2">Home Page - 4 </li>
                    <li className="ml-3 mt-2">Home Page - 5 </li>
                  </ul>
                </div>
              </div>
              <div className="group">
                <li className="pb-9 pt-9 flex items-center justify-center space-x-1">
                  <div>Pages</div>
                  <HiChevronDown />
                </li>
                <div className="relative  hidden group-hover:block">
                  <div className="absolute lg:block top-0 -left-[410px] bg-[#1A1A23] text-[#9C9C9D]  h-auto group-hover:block pb-3 w-[1400px]">
                    <div className="flex w-full pl-10 pr-10 pb-2 space-x-2 mx-auto justify-between items-center mt-6">
                      <div className="flex justify-between w-[260px] ">
                        <h1>Create NFT </h1>
                        <h1>@</h1>
                      </div>
                      <div className="flex justify-between w-[260px] ">
                        <h1>Log In </h1>
                        <h1>@</h1>
                      </div>
                      <div className="flex justify-between w-[260px] ">
                        <h1>Product</h1>
                        <h1>@</h1>
                      </div>
                      <div className="flex justify-between w-[260px] ">
                        <h1>About Us </h1>
                        <h1>@</h1>
                      </div>
                    </div>
                    <div className="flex w-full pl-10 pr-10 pb-2 space-x-6 mx-auto justify-between items-center">
                      <div className="flex justify-between w-[260px] ">
                        <h1>Upload Type</h1>
                        <h1>@</h1>
                      </div>
                      <div className="flex justify-between w-[260px] ">
                        <h1>Registration </h1>
                        <h1>@</h1>
                      </div>
                      <div className="flex justify-between w-[260px] ">
                        <h1>Product Details</h1>
                        <h1>@</h1>
                      </div>
                      <div className="flex justify-between w-[260px] ">
                        <h1>Contact</h1>
                        <h1>@</h1>
                      </div>
                    </div>
                    <div className="flex w-full pl-10 pr-10 pb-2 space-x-6 mx-auto justify-between items-center">
                      <div className="flex justify-between w-[260px] ">
                        <h1>Activity</h1>
                        <h1>@</h1>
                      </div>
                      <div className="flex justify-between w-[260px] ">
                        <h1>Forget Password </h1>
                        <h1>@</h1>
                      </div>
                      <div className="flex justify-between w-[260px] ">
                        <h1>NFT Ranking</h1>
                        <h1>@</h1>
                      </div>
                      <div className="flex justify-between w-[260px] ">
                        <h1>Support/FAQ</h1>
                        <h1>@</h1>
                      </div>
                    </div>
                    <div className="flex w-full pl-10 pr-10 pb-2 space-x-6 mx-auto justify-between items-center">
                      <div className="flex justify-between w-[260px] ">
                        <h1>Creators</h1>
                        <h1>@</h1>
                      </div>
                      <div className="flex justify-between w-[260px] ">
                        <h1>Aurthor/Profile(User) </h1>
                        <h1>@</h1>
                      </div>
                      <div className="flex justify-between w-[260px] ">
                        <h1>Edit Profile</h1>
                        <h1>@</h1>
                      </div>
                      <div className="flex justify-between w-[260px] ">
                        <h1>Terms & Condition</h1>
                        <h1>@</h1>
                      </div>
                    </div>
                    <div className="flex w-full pl-10 pr-10 pb-2 space-x-6 mx-auto justify-between items-center">
                      <div className="flex justify-between w-[260px] ">
                        <h1>Our Collection</h1>
                        <h1>@</h1>
                      </div>
                      <div className="flex justify-between w-[260px] ">
                        <h1>Connect to Wallet </h1>
                        <h1>@</h1>
                      </div>
                      <div className="flex justify-between w-[260px] ">
                        <h1>Blog Details</h1>
                        <h1>@</h1>
                      </div>
                      <div className="flex justify-between w-[260px] ">
                        <h1>Coming Soon</h1>
                        <h1>@</h1>
                      </div>
                    </div>
                    <div className="flex w-full pl-10 pr-10 pb-2 space-x-6 mx-auto justify-between items-center">
                      <div className="flex justify-between w-[260px] ">
                        <h1>Upcoming Projects</h1>
                        <h1>@</h1>
                      </div>
                      <div className="flex justify-between w-[260px] ">
                        <h1>Privacy Policy </h1>
                        <h1>@</h1>
                      </div>
                      <div className="flex justify-between w-[260px] ">
                        <h1>404</h1>
                        <h1>@</h1>
                      </div>
                      <div className="flex justify-between w-[260px] ">
                        <h1>Maintenance</h1>
                        <h1>@</h1>
                      </div>
                    </div>
                    <div className="flex w-full pl-10 pr-10 pb-2 space-x-6 mx-auto justify-between items-center">
                      <div className="flex justify-between w-[260px] ">
                        <h1>Create Collection</h1>
                        <h1>@</h1>
                      </div>
                      <div className="flex justify-between w-[260px] ">
                        <h1>Newsletter </h1>
                        <h1>@</h1>
                      </div>
                      <div className="flex justify-between w-[260px] ">
                        <h1>Forum & Community</h1>
                        <h1>@</h1>
                      </div>
                      <div className="flex justify-between w-[260px] ">
                        <h1>Forum Details</h1>
                        <h1>@</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group">
                <li className="pb-9 pt-9 flex items-center justify-center space-x-1">
                  <div>Blog</div>
                  <HiChevronDown />
                </li>
                <div className="relative hidden group-hover:block ">
                  <ul className="absolute top-0 left-4 bg-[#1A1A23] text-[#ACACAC] w-[260px] h-auto group-hover:block space-y-2 pb-3 rounded-bl-md rounded-br-md">
                    <li className="ml-3 mt-2">Blog Single Column</li>
                    <li className="ml-3 mt-2">Blog Two Column</li>
                    <li className="ml-3 mt-2">Blog Three Column</li>
                    <li className="ml-3 mt-2">Blog Four Column</li>
                    <li className="ml-3 mt-2">Blog Five Column</li>
                  </ul>
                </div>
              </div>

              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div>
            <label className="flex">
              <input
                type="text"
                placeholder="Search here"
                className="bg-[#1A1A23] border border-gray-500 rounded-md h-[40px] w-[230px] text-white p-4 text-sm"
              />

              <div className="relative">
                <div className="absolute flex items-center justify-center right-4 top-3">
                  {searchIcon}
                </div>
              </div>
            </label>
          </div>
          <div className="text-white w-[130px] bg-sky-800 h-[40px] p-2 flex items-center justify-center rounded-md ml-2">
            <h1>Wallet connect</h1>
          </div>

          <div className="w-[40px] h-[40px] rounded-full  flex items-center justify-center ml-2 border border-gray-500">
            {notificationIcon}
            <div className="relative">
              <span class="absolute bottom-1  -right-4 rounded-full bg-[#00A5FF] w-5 h-5  p-2 m-0  flex items-center justify-center text-white font-mono text-xs  leading-tight text-center">
                5
              </span>
            </div>
          </div>
          <div className="w-[40px] h-[40px] rounded-full bg-[#1D1D2A] border border-gray-500 flex items-center justify-center ml-2">
            {themeIcon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
