import React from "react";
import { Box } from "@/components/Constants/genuine-parts/genuineParts_data.json";
import Image from "next/image";

const Page3 = () => {
  return (
    <>
      <div className="bg-white mt-28 w-full h-full px-8 py-10 font-regular font-poppins lg:block hidden">
        <div className="grid lg:grid-cols-3 gap-10 rounded-lg">
          {Box.box.map((item, idx) => (
            <div key={idx} className="bg-[#f5f5f5] rounded-lg p-4">
              <div className="w-full">
                <Image
                  src={item.img}
                  alt={""}
                  width={400}
                  height={400}
                  className="w-full rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl text-center font-semibold my-2">
                  {item.title}
                </h3>
                <p className="text-sm text-center text-[#9e9c9c] pb-[4rem]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page3;
