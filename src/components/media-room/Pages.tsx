import React from "react";
import Page1 from "@/components/media-room/Header";
import Page2 from "@/components/media-room/TrendingNews";
import Page3 from "@/components/media-room/LatestNews";
import Page4 from "@/components/media-room/MostRead";
import Filter from "@/components/media-room/Filter";

const Pages = () => {
  return (
    <>
      <Page1 />
      <div className="flex lg:px-0 px-[1rem]">
        <div className="w-[20%] px-[1.5rem] lg:block hidden">
          <Filter />
        </div>
        <div className="lg:w-[80%] w-full">
          <div className="lg:pr-[1.5rem] mb-6">
            <Page2 />
          </div>
          <div className="flex lg:flex-row flex-col lg:pr-[1.5rem] lg:space-x-4 mb-6">
            <Page3 />
            <Page4 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pages;
