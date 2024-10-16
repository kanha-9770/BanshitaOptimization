import React from "react";
import Page1 from "@/components/product/ProductPage1";
import dynamic from "next/dynamic";
const Page2=dynamic(()=>import("@/components/product/ProductPage2"));

const ProductPages = () => {
  return (
    <>
      <Page1 />
      <Page2 />
    </>
  );
};

export default ProductPages;
