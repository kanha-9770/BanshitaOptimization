"use client";
import React from "react";
import Page1 from "@/components/applicationLayout/Header";
import { notFound, useParams } from "next/navigation";
import {
  Header,
  ScrollableComponent,
  ProductGallery,
  RelatedMachines,
} from "@/components/Constants/application/applicationLayout_data.json";
import Page2 from "@/components/applicationLayout/ScrollableComponent";
const Page3=dynamic(()=>import("@/components/applicationLayout/ProductsGallery"));
const Page4=dynamic(()=>import("@/components/applicationLayout/RelatedMachines"));
const Page5=dynamic(()=>import("@/components/applicationLayout/FAQ"));
import dynamic from "next/dynamic";

const Pages = () => {
  const params = useParams() as Record<string, string | string[]> | null;

  if (!params || !params.id) {
    return notFound();
  }

  let productname = "";

  if (Array.isArray(params.id)) {
    // Join array elements into a single string and normalize spaces
    productname = decodeURIComponent(params.id.join(" "))
      .replace(/\+/g, " ")
      .trim();
  } else if (typeof params.id === "string") {
    // Decode and normalize the single string
    productname = decodeURIComponent(params.id).replace(/\+/g, " ").trim();
  }

  if (!productname) {
    return notFound();
  }

  // Helper function to normalize title for comparison
  const normalizeTitle = (title: string) =>
    title.toLowerCase().replace(/\s+/g, " ").trim();

  // Find the product by its normalized title
  const normalizedProductname = normalizeTitle(productname);

  const page1product = Header.icons.find(
    (m) => normalizeTitle(m.title) === normalizedProductname
  );
  const page2product = ScrollableComponent.products.find(
    (m) => normalizeTitle(m.title) === normalizedProductname
  );
  const page3product = ProductGallery.images.find(
    (m) => normalizeTitle(m.title) === normalizedProductname
  );
  const page4product = RelatedMachines.imageDescription.find(
    (m) => normalizeTitle(m.title) === normalizedProductname
  );

  if (!page1product || !page2product || !page3product || !page4product) {
    return notFound();
  }

  return (
    <>
      <Page1 page1product={page1product} />
      <Page2 page2product={page2product} />
      <Page4 page4product={page4product} />
      <Page3 page3product={page3product} />
      <Page5 />
    </>
  );
};

export default Pages;
