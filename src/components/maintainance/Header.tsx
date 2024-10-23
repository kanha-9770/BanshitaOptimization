import React from "react";
import data from "@/components/Constants/maintainance/maintainance_data.json";
import Image from "next/image";
import MainImg from "../../../public/assets/Maintainance/MaintainanceSvg.svg";

const Header = () => {
  return (
    <>
      <div className="w-full h-full mt-14 py-8 px-10 flex justify-center font-poppins">
        <div className="lg:w-1/2">
          <h1 className="font-semibold lg:text-5xl text-4xl  mb-4">
            {data.Maintainance[0]?.Header.title}
          </h1>
          <p className="text-center lg:text-left">
            {data.Maintainance[0]?.Header.description}
          </p>
        </div>
        <div className="w-1/2 lg:block hidden">
          <Image
            src={data.Maintainance[0]?.Header.img}
            alt={"Machine"}
            width={400}
            height={400}
            priority
            className="float-right w-[16rem]"
          />
        </div>
      </div>
      <div className="w-full h-full bg-white">
        <div className="">
          <div className="w-full h-full pl-6 pr-2 py-4 flex items-center space-x-4">
            <Image
              src={MainImg}
              alt={"SVG"}
              width={400}
              height={400}
              priority
              className="w-[4rem]"
            />
            <div className="w-full h-full overflow-x-hidden scrollbar-hide">
              <div className="flex space-x-6 w-max">
                {data.Maintainance[0]?.Header.points.map((item, idx) => (
                  <div key={idx} className="flex space-x-2 w-max">
                    <p className="text-lg font-medium">{item.number}</p>
                    <h3 className="text-lg font-medium text-center">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex px-4">
            <div className="lg:w-[20%] p-6 lg:block hidden mt-4 bg-white rounded-2xl shadow-2xl">
              <p className="mb-2 font-poppins invisible lg:visible">Filter</p>

              {/* Search Field */}
              <div className="flex rounded-[1rem]  bg-[#f5f5f5] overflow-hidden">
                <input
                  type="search"
                  placeholder="Search"
                  className="w-full py-[0.3rem] px-[1rem] outline-none bg-transparent text-black font-poppins"
                />
                <button className="mr-[0.8rem]" aria-label="Search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-search"
                  >
                    <circle cx="10" cy="10" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
              </div>

              {/* By Category */}
              <div className="mt-3 lg:h-full h-[14rem] lg:overflow-auto overflow-y-scroll scrollbar-custom scrollbar">
                {data.Maintainance[0]?.Header.categories.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <label
                      className="font-poppins my-[0.2rem]"
                      htmlFor={item.title}
                    >
                      {item.title}
                    </label>
                    <input
                      type="checkbox"
                      id={item.title}
                      name={item.title}
                      value={item.title}
                      className="mr-1 accent-[#483d73]"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-[80%]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
