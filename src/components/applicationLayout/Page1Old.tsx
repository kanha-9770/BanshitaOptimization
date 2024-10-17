"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Page1Data } from "../Constants/application/applicationLayout_data.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Product = {
  image: string;
  title: string;
};

type Page1Props = {
  page1product?: Product;
};

const Page1: React.FC<Page1Props> = ({ page1product }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const heightRef = useRef<HTMLDivElement | null>(null);
  const marginRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const fontsizeRefs = useRef<HTMLDivElement[]>([]);

  // Scroll left and right in the carousel
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

  // Title resize on scroll
  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { height: "17vh", fontSize: "4.8rem" },
        {
          height: "8vh",
          fontSize: "2.2rem",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "40% 10%",
            end: "140% 20%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  // Height change on scroll
  useEffect(() => {
    if (heightRef.current) {
      gsap.fromTo(
        heightRef.current,
        { height: "38vh" },
        {
          height: "20vh",
          scrollTrigger: {
            trigger: heightRef.current,
            start: "45% 20%",
            end: "85% 30%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  // Margin change on scroll
  useEffect(() => {
    if (marginRef.current) {
      gsap.fromTo(
        marginRef.current,
        { marginTop: "15vh" },
        {
          marginTop: "5vh",
          scrollTrigger: {
            trigger: marginRef.current,
            start: "top 20%",
            end: "90% 30%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  // Image div height change on scroll
  useEffect(() => {
    imageRefs.current.forEach((imageRef) => {
      if (imageRef) {
        gsap.fromTo(
          imageRef,
          { height: "11vh" },
          {
            height: "8vh",
            scrollTrigger: {
              trigger: imageRef,
              start: "0% 20%",
              end: "110% 30%",
              scrub: true,
            },
          }
        );
      }
    });
  }, []);

  // Paragraph font-size change on scroll
  useEffect(() => {
    fontsizeRefs.current.forEach((fontsizeRef) => {
      if (fontsizeRef) {
        gsap.fromTo(
          fontsizeRef,
          { fontSize: "1rem" },
          {
            fontSize: "0.5rem",
            scrollTrigger: {
              trigger: fontsizeRef,
              start: "-80% 30%",
              end: "80% 40%",
              scrub: true,
            },
          }
        );
      }
    });
  }, []);

  return (
    <>
      <div className="w-full z-20 fixed">
        <div
          className="w-full h-[38vh] bg-white relative top-[7vh] flex flex-col items-center"
          ref={heightRef}
        >
          <div
            className="h-[17vh] w-full bg-white absolute text-[4.8rem] shadow-xl shadow-[#f2f2f2]"
            ref={titleRef}
          >
            <h1 className="ml-[0.8vw] font-bold">
              <span className="text-[#9e9c9c]">
                {page1product?.title.trim().replace(/\s+\S+$/, "")}
              </span>{" "}
              <span className="text-[#483d73]">
                {page1product?.title.trim().match(/\S+$/)}
              </span>
            </h1>
          </div>

          <div className="w-[82vw] mt-[15vh] overflow-hidden" ref={marginRef}>
            <button
              className="text-[#3a2a79] text-[2.5rem] absolute bottom-[7vh] left-4 hover:text-[#9e9c9c]"
              onClick={scrollLeft}
            >
              {/* <IoIosArrowBack /> */}
            </button>
            <button
              className="text-[#3a2a79] text-[2.5rem] absolute bottom-[7vh] right-4 hover:text-[#9e9c9c]"
              onClick={scrollRight}
            >
              {/* <IoIosArrowForward /> */}
            </button>
            <div
              className="flex justify-center items-center overflow-auto w-full scrollbar-hide"
              ref={carouselRef}
            >
              <div className="w-max mt-[4vh] flex justify-center pl-[60vw]">
                {Page1Data.icons.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col mx-[2vw] w-[8vw] items-center"
                  >
                    <div
                      className="h-[11vh]"
                      // ref={(el) => (imageRefs.current[idx] = el!)}
                    >
                      <Image
                        className="h-full"
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                    <p
                      className="text-center text-[#9e9c9c] hover:text-[#483d73] hover:font-semibold font-poppins text-[1rem]"
                      // ref={(el) => (fontsizeRefs.current[idx] = el!)}
                    >
                      {item.title}
                    </p>
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

export default Page1;
