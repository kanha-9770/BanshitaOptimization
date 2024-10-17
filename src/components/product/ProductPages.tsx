import React from "react";
import Page1 from "@/components/product/Header";
import dynamic from "next/dynamic";
const Page2=dynamic(()=>import("@/components/product/ProductCatalouge"));

const ProductPages = () => {
  return (
    <>
      <Page1 />
      <Page2 />
    </>
  );
};

export default ProductPages;
