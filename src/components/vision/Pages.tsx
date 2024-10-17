import React from "react";
import Page1 from "@/components/vision/Header";
const Page2 = dynamic(() => import("@/components/vision/Cards"));
import dynamic from "next/dynamic";

const Pages = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Page1 />
        <Page2 />
      </div>
    </>
  );
};

export default Pages;
