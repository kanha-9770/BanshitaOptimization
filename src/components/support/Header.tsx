import React from "react";
import Image from "next/image";
import data from "@/components/Constants/support/support_data.json";
import Arrow from "../../../public/assets/Support/RedirectionArrowImg.svg";

const Header = () => {
  return (
    <>
      <div className="w-full h-full bg-white mt-14 py-4 px-12 flex justify-center font-poppins">
        <div className="lg:w-1/2">
          <h1 className="bg-gradient-to-r from-[#483d73] to-red-700 bg-clip-text text-transparent lg:h-[7rem] h-[3rem] lg:w-[12rem] lg:text-5xl text-4xl font-medium mb-2">
            {data.Support[0]?.Header.title}
          </h1>
          <p className="text-center lg:text-left">{data.Support[0]?.Header.description}</p>
        </div>
        <div className="w-1/2 lg:block hidden">
          <Image
            src={data.Support[0]?.Header.img}
            alt={"Parts"}
            width={400}
            height={400}
            priority
            className="float-right w-[16rem]"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-10 lg:px-14 px-8 py-8">
        {data.Support[0]?.Header.cards.map((item, idx) => (
          <div
            key={idx}
            className="relative flex flex-col justify-center items-center bg-white rounded-xl py-10 space-y-16 hover:shadow-2xl shadow-xl hover:scale-80 transition-all duration-300 group"
          >
            <h2 className="group-hover:text-[#483d73] text-black text-3xl font-semibold">
              {item.title}
            </h2>
            <Image
              src={item.img}
              alt={"Parts"}
              width={400}
              height={400}
              className="w-[10rem]"
            />
            <div className="absolute bottom-2 right-2 group-hover:bg-[#483d7359] p-2 rounded-full transition-all duration-300">
              <Image
                src={Arrow}
                alt={"ReDirection Arrow"}
                width={400}
                height={400}
                className="w-[1.5rem]"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Header;
