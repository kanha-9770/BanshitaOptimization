"use client";
import React, { useState } from "react";
import data from "@/components/Constants/maintainance/maintainance_data.json";
import Image from "next/image";
import MainImg from "../../../public/assets/Maintainance/MaintainanceSvg.svg";
import CheckListImg from "../../../public/assets/Maintainance/MaintainanceCheckList.png";
import FormSvg from "../../../public/assets/Maintainance/FormSVG.svg";
import Logo from "../../../public/assets/Maintainance/WhiteLOGO.png";

const Header = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false); //filter Modal state
  const [isModalOpen, setIsModalOpen] = useState(false); //Download Modal state

  // Function to open filter modal
  const handleOpenFilter = () => {
    setIsFilterModalOpen(true); // open the modal
  };

  // Function to close filter modal
  const handleCloseFilter = () => {
    setIsFilterModalOpen(false); // Close the modal
  };

  // Function to close download modal
  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  // Function to open download modal
  const handleOpenModal = () => {
    setIsModalOpen(true); // open the modal
  };

  return (
    <>
      <div className="w-full h-full mt-14 py-8 px-10 flex justify-center font-poppins">
        <div className="lg:w-1/2">
          <h1 className="font-semibold lg:text-5xl text-4xl text-[#483d73] mb-4 lg:text-left text-center">
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
      <div className="w-full h-full bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1.5px),linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1.5px)] bg-[length:100%_0.8rem,0.8rem_100%] bg-white pb-4 font-poppins">
        <div>
          <div className="w-full h-full px-6 py-4 flex items-center space-x-4 bg-white">
            <Image
              src={MainImg}
              alt={"SVG"}
              width={400}
              height={400}
              priority
              className="w-[4rem]"
            />
            <div className="w-full h-full overflow-x-hidden scrollbar-hide lg:flex lg:justify-center">
              <div className="flex lg:grid lg:grid-cols-6 lg:gap-5 lg:space-x-0 space-x-6 w-max">
                {data.Maintainance[0]?.Header.points.map((item, idx) => (
                  <div key={idx} className="flex space-x-2 w-max">
                    <p className="text-lg font-medium">{item.number}</p>
                    <h3 className="text-lg font-medium text-center lg:w-[10rem]">
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex px-4 md:space-x-4">
            <div className="md:w-[18%] p-4 md:block hidden mt-4 bg-white rounded-2xl shadow-2xl">
              <p className="mb-4 font-poppins invisible md:visible text-lg font-medium">
                {data.Maintainance[0]?.Header.filter}
              </p>

              {/* Search Field */}
              <div className="flex rounded-lg text-sm  border border-black overflow-hidden">
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full py-[0.3rem] px-3 outline-none bg-transparent text-black font-poppins"
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
              <div className="mt-3 md:h-full h-[14rem] md:overflow-auto overflow-y-scroll scrollbar-custom scrollbar">
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

            <div className="md:w-[82%] w-full mt-4">
              <div className="bg-white shadow-xl w-full rounded-xl px-4 py-2 flex lg:flex-row flex-col relative">
                <h3 className="text-[#464545] font-medium lg:text-2xl text-[1rem] lg:mb-0 mb-4 lg:text-left text-center">
                  {data.Maintainance[0]?.Header.download}
                </h3>
                <div className="flex items-center space-x-3">
                  <div
                    className="lg:hidden flex items-center bg-black rounded-lg px-2 py-1"
                    onClick={handleOpenFilter}
                  >
                    <h3 className="font-medium mr-2 text-white">
                      {data.Maintainance[0]?.Header.filter}
                    </h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="w-6 h-6 stroke-white"
                    >
                      <line x1="4" y1="6" x2="16" y2="6" />
                      <line x1="8" y1="11" x2="20" y2="11" />
                      <line x1="4" y1="16" x2="16" y2="16" />
                      <circle cx="18" cy="6" r="2" />
                      <circle cx="6" cy="11" r="2" />
                      <circle cx="18" cy="16" r="2" />
                    </svg>
                  </div>
                  {/* Search Field */}
                  <div className="flex rounded-lg text-sm  border border-black overflow-hidden lg:absolute right-4">
                    <button className="ml-2" aria-label="Search">
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
                    <input
                      type="search"
                      placeholder="Search..."
                      className="w-full py-[0.3rem] px-3 outline-none bg-transparent text-black font-poppins"
                    />
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-4 lg:gap-x-24  md:gap-x-16 gap-y-4 px-6">
                {data.Maintainance[0]?.Header.cards.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-t from-[#f5f5f5] group hover:shadow-2xl transition-all duration-300 to-white rounded-t-xl rounded-b-3xl pt-6 relative shadow-xl"
                  >
                    <div className="h-[6rem] overflow-y-hidden">
                      <div className="h-full overflow-y-auto scrollbar">
                        <h3 className="text-md font-medium text-white bg-[#9e9c9c] p-3 w-[75%]">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center justify-center min-h-[15rem] max-h-full mb-10">
                      <h4 className="text-[#483d73] font-bold -rotate-90 text-sm">
                        {data.Maintainance[0]?.Header.maintainance}
                      </h4>
                      <Image
                        src={item.img}
                        alt={"SVG"}
                        width={400}
                        height={400}
                        priority
                        className="w-[10rem]"
                      />
                    </div>
                    <button
                      onClick={handleOpenModal}
                      className="border border-black transition-all duration-300 lg:group-hover:bg-black lg:bg-white bg-black py-1 rounded-full w-full absolute bottom-0"
                    >
                      <p className="text-lg font-medium lg:text-black text-white transition-all duration-300 lg:group-hover:text-white text-center w-full">
                        {item.button}
                      </p>
                      <div className="absolute -bottom-[0.3rem] -right-2 border-2 w-12 h-12 lg:bg-white bg-[#483d73] lg:border-black border-white rounded-full flex items-center justify-center lg:group-hover:border-white lg:group-hover:bg-[#483d73] transition-all duration-300">
                        <svg
                          viewBox="-0.4 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-10 h-10"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              d="M12 12V19M12 19L9.75 16.6667M12 19L14.25 16.6667M6.6 17.8333C4.61178 17.8333 3 16.1917 3 14.1667C3 12.498 4.09438 11.0897 5.59198 10.6457C5.65562 10.6268 5.7 10.5675 5.7 10.5C5.7 7.46243 8.11766 5 11.1 5C14.0823 5 16.5 7.46243 16.5 10.5C16.5 10.5582 16.5536 10.6014 16.6094 10.5887C16.8638 10.5306 17.1284 10.5 17.4 10.5C19.3882 10.5 21 12.1416 21 14.1667C21 16.1917 19.3882 17.8333 17.4 17.8333"
                              stroke="current color"
                              className="lg:group-hover:stroke-white lg:stroke-black stroke-white transition-all duration-300"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    </button>
                    {/* Modal for Download */}
                    {isModalOpen && (
                      <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur flex justify-center items-center z-50 lg:px-0 px-4 ">
                        <div className="bg-white relative rounded-lg lg:w-[50rem] lg:h-[28rem] shadow-xl font-poppins font-regular flex  items-center justify-center">
                          <div className="w-1/2 bg-[#f5f5f5] overflow-hidden rounded-l-lg h-[28rem] lg:flex flex-col hidden relative">
                            <div className="bg-[#483d73] w-full  px-4 py-2 relative">
                              <Image
                                src={Logo}
                                alt="Logo"
                                width={1000}
                                height={1000}
                                className="h-max w-12 mb-1"
                              />
                              <h3 className="text-white font-medium text-md">
                                {item.title}
                              </h3>
                              <h3 className="text-white font-medium text-sm">
                                {data.Maintainance[0]?.Header.checkListTitle}
                              </h3>
                              <Image
                                src={FormSvg}
                                alt="SVG"
                                width={1000}
                                height={1000}
                                className="w-16 absolute -right-2 top-3"
                              />
                            </div>
                            <div className="flex items-center justify-center">
                              <Image
                                src={CheckListImg}
                                alt="SVG"
                                width={1000}
                                height={1000}
                                className="w-[22rem] -mt-1"
                              />
                            </div>
                            <div className="bg-[#483d73] w-full absolute bottom-0 py-1">
                              <h3 className="text-white text-xs text-center">
                                {data.Maintainance[0]?.Header.footer}
                              </h3>
                            </div>
                          </div>
                          <div className="lg:w-1/2 flex flex-col items-center justify-center px-8 lg:py-0 py-8">
                            <h2 className="text-2xl font-bold mb-3 text-center w-full">
                              {data.Maintainance[0]?.Header.formTitle}
                            </h2>
                            <p className="text-center w-full mb-4 font-regular text-sm">
                              {data.Maintainance[0]?.Header.formDescription}
                            </p>
                            <form className="w-full">
                              {/* Form Fields */}
                              <div className="mb-2 space-y-1">
                                <label
                                  htmlFor="name"
                                  className="text-lg font-medium"
                                >
                                  {data.Maintainance[0]?.Header.name}
                                </label>
                                <input
                                  type="text"
                                  required
                                  placeholder="Your Full Name"
                                  className="bg-[#f5f5f5] rounded-md w-full text-lg p-2 outline-none"
                                />
                              </div>
                              <div className="mb-2 space-y-1">
                                <label
                                  htmlFor="email"
                                  className="text-lg font-medium"
                                >
                                  {data.Maintainance[0]?.Header.email}
                                </label>
                                <input
                                  type="email"
                                  required
                                  placeholder="Your Email"
                                  className="bg-[#f5f5f5] rounded-md w-full text-lg p-2 outline-none"
                                />
                              </div>
                              <div className="mb-2 space-y-1">
                                <label
                                  htmlFor="phone"
                                  className="text-lg font-medium"
                                >
                                  {data.Maintainance[0]?.Header.phone}
                                </label>
                                <input
                                  type="number"
                                  required
                                  placeholder="Your Phone Number"
                                  className="bg-[#f5f5f5] rounded-md w-full text-lg p-2 outline-none"
                                />
                              </div>
                              <div className="flex justify-center mt-5">
                                <button
                                  type="submit"
                                  className="text-lg font-medium bg-black lg:hover:bg-[#483d73] text-white w-full p-2 rounded-md"
                                  onClick={handleCloseModal}
                                >
                                  {data.Maintainance[0]?.Header.submit}
                                </button>
                              </div>
                              <div
                                onClick={handleCloseModal}
                                className="absolute top-1 right-2 text-2xl cursor-pointer"
                              >
                                ✖
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Filter Modal in Mobile */}
        {isFilterModalOpen && (
          <div className="fixed inset-0 bg-[#f5f5f5] bg-opacity-50 backdrop-blur z-50 flex items-center justify-center lg:mt-14">
            <div className="bg-white lg:w-[30%] w-full h-[28rem] mx-[1rem] p-[1rem] rounded-lg shadow-lg">
              <div className="w-full h-[3rem] flex items-center border-b-2 border-solid border-[#E6E7E6]">
                <div className="flex justify-center items-center h-full w-[50%] border-r-2 border-solid border-[#E6E7E6] mb-[0.5rem] font-poppins font-medium">
                  <button
                    onClick={handleCloseFilter}
                    className="text-[#838282]"
                  >
                    {data.Maintainance[0]?.Header.cancel}
                  </button>
                </div>
                <div className="flex justify-center items-center w-[50%] mb-[0.5rem] font-poppins font-medium">
                  <button className="text-red-700">
                    {data.Maintainance[0]?.Header.apply}
                  </button>
                </div>
              </div>

              <div className="h-[22rem] mt-4 p-[1rem] bg-[#f5f5f5] rounded-lg">
                {/* By Category */}
                <div className="h-[14rem] overflow-y-scroll scrollbar-hide">
                  {data.Maintainance[0]?.Header.categories.map(
                    (item, index) => (
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
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;