"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Logo from "../../../public/assets/Logo.png";
import userGuideData from "@/components/Constants/user-guide/user-guide_data.json";

export function UserGuide() {
  const data = userGuideData.UserGuide[0]["user-guide"];
  const cards = data.cards;
  const categories = data.categories;
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false); //first Modal state
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  const [isModalOpen, setIsModalOpen] = useState(false); //first Modal state

  // Function to open the modal
  const handleOpenFilter = () => {
    setIsFilterModalOpen(true); // Close the modal
  };

  // Function to close the modal
  const handleCloseFilter = () => {
    setIsFilterModalOpen(false); // Close the modal
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleOpenModal = () => {
    setActive(null); // Set active to null

    // Create a promise to introduce a delay
    new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 700); // Delay for 300ms (you can adjust this time)
    }).then(() => {
      setIsModalOpen(true); // Open the modal after the delay
    });
  };

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <div className="w-full font-regular font-poppins bg-white pt-4 flex flex-col">
        <div className="w-full px-10 flex-col">
          <h1 className="lg:text-5xl text-3xl mb-2">
            {/* Display the first word */}
            <span className="font-medium text-[#483d73] block">
              {data.title.split(" ")[0]}
            </span>

            {/* Display the second and third words together */}
            <span className="font-semibold text-black">
              {data.title.split(" ").slice(1, 3).join(" ")}
            </span>
          </h1>

          <p className="text-base lg:w-[40%] w-full text-black mb-8">
            {data.description}
          </p>
        </div>

        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.15, ease: "easeInOut" },
              }} // Faster and smoother
              exit={{
                opacity: 0,
                transition: { duration: 0.001, ease: "easeInOut" },
              }} // Reduced exit duration
              className="fixed inset-0 bg-black/70 z-20 h-full w-full"
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0 lg:px-[30%] lg:mt-14 px-10 lg:py-5 py-10 grid place-items-center z-20">
              <motion.button
                key={`${active.title}-${active.index}`}
                layout
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15, ease: "easeInOut" },
                }} // Reduced animation time
                exit={{
                  opacity: 0,
                  transition: { duration: 0.001, ease: "easeInOut" },
                }} // Faster exit
                className="flex absolute top-20 right-12 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                ✖
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${active.index}-${id}`}
                ref={ref}
                className="w-full lg:h-[80vh] flex flex-col items-center bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden"
              >
                <motion.div
                  layoutId={`image-${active.title}-${active.index}-${id}`}
                >
                  <Image
                    priority
                    width={200}
                    height={200}
                    src={active.src}
                    alt={active.title}
                    className="w-max lg:h-[45vh]"
                  />
                </motion.div>

                <div className="h-[35vh]">
                  <div className="flex justify-between items-start p-4 h-[10vh] mb-2">
                    <div>
                      <motion.h3
                        layoutId={`title-${active.title}-${active.index}-${id}`}
                        className="font-bold text-neutral-700 dark:text-neutral-200"
                        animate={{
                          transition: { duration: 0.15, ease: "easeInOut" },
                        }} // Smooth transition
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${active.index}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400 font-medium"
                        animate={{
                          transition: { duration: 0.15, ease: "easeInOut" },
                        }} // Smooth transition
                      >
                        {active.description}
                      </motion.p>
                    </div>

                    <motion.a
                      layoutId={`button-${active.title}-${active.index}-${id}`}
                      onClick={handleOpenModal}
                      target="_blank"
                      className="flex cursor-pointer items-center lg:px-4 py-2 px-3 text-sm rounded-full lg:font-bold font-semibold bg-[#483d78] text-white"
                      animate={{
                        transition: { duration: 0.15, ease: "easeInOut" },
                      }} // Smooth transition
                    >
                      {active.ctaText}
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                      >
                        <path
                          d="M52 32C52.4183 32 56 28.4183 56 24C56 19.5817 52.4183 16 48 16C47.1524 16 46.3354 16.0955 45.5656 16.2758C43.5061 12.6805 39.5471 10 35 10C29.4772 10 25 14.4772 25 20C25 20.0651 25.0004 20.1301 25.0013 20.195C20.4146 20.7047 17 24.417 17 29C17 33.4183 20.5817 37 27 37H40Z"
                          fill="none"
                          stroke="white"
                          stroke-width="3"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M36 18V32"
                          stroke="white"
                          stroke-width="3"
                          stroke-linecap="round"
                        />
                        <path
                          d="M30 28L36 33L42 28"
                          stroke="white"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </motion.a>
                  </div>
                  <div className="relative px-4 h-[22vh] pb-2 overflow-y-scroll scrollbar">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15, ease: "easeInOut" },
                      }} // Faster and smoother
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.001, ease: "easeInOut" },
                      }} // Faster exit
                      className="text-center lg:text-md text-sm"
                    >
                      {active.content}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>

        <ul className="w-full bg-[#f5f5f5] bgLines bg-grid-black/[0.2] mx-auto pr-10 py-8 relative z-0 flex">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#f5f5f5] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-10"></div>

          <div className="lg:w-[20%] px-10 border-r-2 lg:block hidden bg-[#f5f5f5]">
            <p className="mb-2 font-poppins invisible lg:visible">
              {data.filter}
            </p>

            {/* Search Field */}
            <div className="flex rounded-[1rem]  bg-white overflow-hidden">
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
              {categories.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
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
                    className="mr-1"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-[80%] space-y-4 pl-10">
            <div className="bg-white w-full h-[3rem] lg:hidden rounded-lg flex items-center px-4 relative">
              <p className="text-xl font-normal">{data.filter}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="w-6 h-6 absolute right-4"
                onClick={handleOpenFilter}
              >
                <line x1="4" y1="6" x2="16" y2="6" />
                <line x1="8" y1="11" x2="20" y2="11" />
                <line x1="4" y1="16" x2="16" y2="16" />
                <circle cx="18" cy="6" r="2" />
                <circle cx="6" cy="11" r="2" />
                <circle cx="18" cy="16" r="2" />
              </svg>
            </div>

            {cards.map((card, index) => (
              <>
                <motion.div
                  layoutId={`card-${card.title}-${index}-${id}`}
                  key={`${card.title}-${index}`}
                  onClick={() => setActive({ ...card, index })} // Pass index when setting active
                  className="p-5 flex flex-col lg:flex-row bg-white justify-center items-center border-[0.1rem] border-[#f5f5f5] hover:border-[#483d73] rounded-xl cursor-pointer"
                >
                  <div className="flex lg:w-[45%] w-full lg:border-r-2 border-[#5d5d5e] gap-4 flex-col md:flex-row items-center">
                    <motion.div layoutId={`image-${card.title}-${index}-${id}`}>
                      <Image
                        width={400}
                        height={400}
                        src={card.src}
                        alt={card.title}
                        className="h-full w-full lg:w-14 lg:h-14 rounded-lg object-cover object-top bg-[#f5f5f5]"
                      />
                    </motion.div>
                    <div className="flex flex-col justify-center">
                      <motion.h3
                        layoutId={`title2-${card.title2}-${index}-${id}`}
                        className="font-normal text-[#5d5d5e] dark:text-neutral-200 text-center md:text-left"
                      >
                        {card.title2}
                      </motion.h3>
                      <motion.p
                        layoutId={`description2-${card.description2}-${index}-${id}`}
                        className="text-black text-xl mb-4 md:mb-0 dark:text-neutral-400 font-semibold text-center md:text-left"
                      >
                        {card.description2}
                      </motion.p>
                    </div>
                  </div>
                  <div className="lg:w-[55%] w-full flex flex-col lg:flex-row lg:justify-start justify-center items-center relative">
                    <div className="lg:ml-10">
                      <motion.h3
                        layoutId={`title-${card.title}-${index}-${id}`}
                        className="font-normal text-[#5d5d5e] dark:text-neutral-200 text-center md:text-left"
                      >
                        {card.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${card.description}-${index}-${id}`}
                        className="text-black text-xl mb-4 md:mb-0 dark:text-neutral-400 font-semibold text-center md:text-left"
                      >
                        {card.description}
                      </motion.p>
                    </div>
                    <motion.button
                      layoutId={`button-${card.title2}-${index}-${id}`}
                      className="lg:absolute lg:right-2 lg:my-0 my-2 px-4 py-2 bg-[#483d78] text-white rounded-full font-bold text-sm flex items-center space-x-2"
                    >
                      <span>{card.ctaText}</span>
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 54"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                      >
                        <path
                          d="M52 32C52.4183 32 56 28.4183 56 24C56 19.5817 52.4183 16 48 16C47.1524 16 46.3354 16.0955 45.5656 16.2758C43.5061 12.6805 39.5471 10 35 10C29.4772 10 25 14.4772 25 20C25 20.0651 25.0004 20.1301 25.0013 20.195C20.4146 20.7047 17 24.417 17 29C17 33.4183 20.5817 37 27 37H40Z"
                          fill="none"
                          stroke="white"
                          stroke-width="3"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M36 18V32"
                          stroke="white"
                          stroke-width="3"
                          stroke-linecap="round"
                        />
                        <path
                          d="M30 28L36 33L42 28"
                          stroke="white"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
                {/* Modal for Form Submission */}
                {isModalOpen && (
                  <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur flex justify-center items-center z-50 lg:px-0 px-4 ">
                    <div className="bg-white relative rounded-lg lg:w-[50rem] lg:h-[28rem] shadow-xl font-poppins font-regular flex  items-center justify-center">
                      <div className="w-1/2 bg-[#f5f5f5] rounded-l-lg h-[28rem] lg:flex flex-col items-center justify-center hidden relative">
                        <Image
                          src={Logo}
                          alt="Logo"
                          width={1000}
                          height={1000}
                          className="h-max w-16 absolute left-2 top-3"
                        />
                        <Image
                          src={card.src}
                          alt="Logo"
                          width={1000}
                          height={1000}
                          className=""
                        />
                        <div className="flex items-center font-normal text-xs text-black absolute bottom-7 left-2">
                          <p className="mr-2">{card.title2}</p>
                          <p>{card.description2}</p>
                        </div>
                        <div className="flex items-center font-normal text-xs text-black absolute bottom-2 left-2">
                          <p className="mr-2">{card.title}</p>
                          <p>{card.description}</p>
                        </div>
                      </div>
                      <div className="lg:w-1/2 flex flex-col items-center justify-center px-8 lg:py-0 py-8">
                        <h2 className="text-2xl font-bold mb-3 text-center w-full">
                          {data.title}
                        </h2>
                        <p className="text-center w-full mb-4 font-regular text-sm">
                          {data.formDescription}
                        </p>
                        <form className="w-full">
                          {/* Form Fields */}
                          <div className="mb-2 space-y-1">
                            <label
                              htmlFor="name"
                              className="text-lg font-medium"
                            >
                              {data.name}
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
                              {data.email}
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
                              {data.phone}
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
                              {data.submit}
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
              </>
            ))}
          </div>
        </ul>
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
                    {data.cancel}
                  </button>
                </div>
                <div className="flex justify-center items-center w-[50%] mb-[0.5rem] font-poppins font-medium">
                  <button className="text-red-700">
                    {data.apply}
                  </button>
                </div>
              </div>

              <div className="h-[22rem] mt-4 p-[1rem] bg-[#f5f5f5] rounded-lg">
                {/* By Category */}
                <div className="h-[14rem] overflow-y-scroll scrollbar-hide">
                  {categories.map((item, index) => (
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
