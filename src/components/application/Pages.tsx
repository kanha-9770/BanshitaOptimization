"use client";
import React, { useEffect, useState } from "react";
import Page1 from "@/components/application/Header";
import Page2 from "@/components/application/SelectProduct";
import Page3 from "@/components/application/Technology";
import Page4 from "@/components/application/CustomizedProjects";
import { SelectProduct } from "@/components/Constants/application/application_data.json";

export interface Product {
  img: string;
  title: string;
  description: string;
  image: string;
}

const Pages = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product>(SelectProduct.products[0]);

  // Function to update the selected product
  const updateData = (newData: Product) => {
    setSelectedProduct(newData);
    console.log("selected product",selectedProduct);
    
  };

  return (
    <>
      <Page1 />
      <Page2 selectedProduct={selectedProduct} updateData={updateData} />
      <Page3 selectedProduct={selectedProduct} />
      <Page4 selectedProduct={selectedProduct} />
    </>
  );
};

export default Pages;
