"use client";
import React, { useEffect, useRef } from "react";
import { Page1Data } from "@/Components/Constants/application/application_data.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page1: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const borderRef = useRef<HTMLDivElement | null>(null);
  const gradientRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.to(".page1-div", {
      scrollTrigger: {
        trigger: ".page1-h1",
        start: "top top+=1",
        end: "+=100",
        scrub: true,
      },
      height: "6.5rem",
      backdropFilter: "blur(120px)",
      background: "transparent",
      fontWeight: "300",
      paddingTop: "2.8rem",
      paddingLeft: "1.5rem",
      ease: "power1.out",
    });
    gsap.to(".page1-h1", {
      scrollTrigger: {
        trigger: ".page1-h1",
        start: "top top+=1",
        end: "+=100",
        scrub: true,
      },
      height: "6.5rem",
      fontSize: "2rem",
      color: "#424242",
      paddingTop: "2.8rem",
      paddingLeft: "1.5rem",
      ease: "power1.out",
    });
  }, []);

  useEffect(() => {
    if (borderRef.current) {
      gsap.fromTo(
        borderRef.current,
        { width: "2%" },
        {
          width: "12%",
          ease: "none",
          scrollTrigger: {
            trigger: carouselRef.current,
            start: "50% 50%",
            end: "140% 60%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    // Animate the gradient on page load, no scroll needed
    if (gradientRef.current) {
      gsap.fromTo(
        gradientRef.current,
        { backgroundSize: "0% 100%" },
        {
          backgroundSize: "100% 100%",
          duration: 1,
          ease: "power1.out",
        }
      );
    }
  }, []);

  return (
    <>
      <div className="font-regular font-poppins">
        <div className="lg:h-[10rem] h-[7rem] w-full bg-white lg:fixed relative z-10 page1-div font-bold">
          <h1 className="absolute lg:-bottom-[0.6rem] -bottom-[0.3rem] left-3 lg:text-[5.1rem] text-[2.5rem] page1-h1  bg-gradient-to-r from-[#483d73] to-red-700  bg-clip-text text-transparent">
            {Page1Data.applicaion}
          </h1>
        </div>
        <div
          className="w-full lg:py-[4rem] py-[4vh] relative lg:top-[10rem] flex flex-col items-center justify-center"
          ref={carouselRef}
        >
          <div className="lg:mb-[2rem] mb-[1rem]">
            <h2 className="lg:text-[2.8rem] text-[1.4rem] font-medium text-[#483d73]">
              {Page1Data.title.split(" ").slice(0, -3).join(" ")}{" "}
              <span
                ref={gradientRef}
                className="bg-gradient-to-r from-transparent to-[#a397d3] text-[#483d73] px-1 rounded-[0.5rem] bg-[length:0%_100%] bg-left bg-no-repeat"
              >
                {Page1Data.title.split(" ").slice(-3).join(" ")}
              </span>
            </h2>
          </div>
          <div className="w-[88%]">
            <p className="text-center lg:text-[1rem] text-sm">
              {Page1Data.paragraph}
            </p>
          </div>
          <div
            className="border-t-[0.2rem] border-solid border-red-700 w-[10rem] mt-[1rem]"
            ref={borderRef}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Page1;
