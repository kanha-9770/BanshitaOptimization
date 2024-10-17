"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Page3Data } from "../Constants/application/applicationLayout_data.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Page3Props {
  page3product: {
    image: { img: string }[];
  };
}

const Page3: React.FC<Page3Props> = ({ page3product }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    page3product.image[0].img // Set the first image as the default selected image
  );
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const borderRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (borderRef.current) {
      gsap.fromTo(
        borderRef.current,
        { width: "10%" },
        {
          width: "95%",
          ease: "none",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "-60% 80%",
            end: "85% 85%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <>
      <div className="w-full lg:mt-[6rem] mt-[4rem] font-poppins">
        <div
          ref={borderRef}
          className="border-t-[0.1rem] border-solid border-[#6f6f6f] w-[10%] lg:mx-[2rem] mx-[1rem]"
        ></div>
        <div className="flex lg:flex-row flex-col lg:py-[6rem] py-[1rem] px-[1rem] lg:static relative">
          <div className="lg:w-[18rem] lg:pt-[2rem] lg:relative">
            <div className="flex flex-col lg:items-center lg:justify-center">
              <h2 className="lg:text-[2.2rem] text-[1.5rem] lg:text-center font-semibold lg:mb-[1rem]">
                <span className="text-[#483d73]">
                  {Page3Data?.title.trim().replace(/\s+\S+$/, "")}
                </span>{" "}
                <span className="text-red-700">
                  {Page3Data?.title.trim().match(/\S+$/)}
                </span>
              </h2>
              <p className="text-black lg:w-[70%] lg:text-center mb-[1rem] lg:text-[1rem] text-[0.8rem]">
                {Page3Data.description}
              </p>
            </div>
            <button
              className="absolute lg:bottom-[2.5rem] lg:left-[4rem] right-16 -bottom-8"
              onClick={scrollLeft}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="lg:w-6 w-5 lg:h-6 h-5"
              >
                <circle
                  cx="32"
                  cy="32"
                  r="32"
                  className="fill-[#cccaca] hover:fill-red-700 cursor-pointer"
                />
                <path
                  d="M39 20 L27 32 L39 44"
                  className="stroke-white stroke-[4px] fill-none stroke-linecap-round stroke-linejoin-round "
                />
              </svg>
            </button>
            <button
              className="absolute lg:bottom-[2.5rem] lg:right-[4rem] right-4 -bottom-8"
              onClick={scrollRight}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                className="lg:w-6 w-5 lg:h-6 h-5"
              >
                <circle
                  cx="32"
                  cy="32"
                  r="32"
                  className="fill-[#cccaca] hover:fill-red-700 cursor-pointer"
                />
                <path
                  d="M25 20 L37 32 L25 44"
                  className="stroke-white stroke-[4px] fill-none stroke-linecap-round stroke-linejoin-round "
                />
              </svg>
            </button>
          </div>

          {/* Display selected image in mobile view */}
          <div className="w-full h-[12.5rem] mb-[1rem] lg:hidden px-[0.2rem]">
            <Image
              src={selectedImage!}
              alt="Selected image"
              width={400}
              height={400}
              className="w-full h-full rounded-[0.5rem]"
            />
          </div>

          <div className="lg:w-[78%] flex items-center overflow-hidden px-[0.2rem]">
            <div
              className="w-full overflow-auto scrollbar-hide"
              ref={carouselRef}
            >
              <div className="w-max flex items-center justify-center space-x-2 lg:space-x-4">
                {page3product.image.map((item, idx) => (
                  <div
                    key={idx}
                    className={`bg-white lg:w-[22rem] lg:h-[22rem] lg:rounded-[1rem] rounded-[0.5rem] flex items-center justify-center overflow-hidden cursor-pointer ${
                      selectedImage === item.img
                        ? "lg:border-none border-2 border-red-700"
                        : "border-none"
                    }`}
                    onClick={() => setSelectedImage(item.img)}
                  >
                    <Image
                      src={item.img}
                      alt={`Image ${idx + 1}`}
                      width={400}
                      height={400}
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page3;
