"use client";
import React from "react";
import Page1 from "@/components/applicationLayout/Page1";
import { notFound, useParams } from "next/navigation";
import {
  Page1Data,
  Page2Data,
  Page3Data,
  Page4Data,
} from "@/components/Constants/application/applicationLayout_data.json";
import Page2 from "@/components/applicationLayout/Page2";
import Page3 from "@/components/applicationLayout/Page3";
import Page4 from "@/components/applicationLayout/Page4";
import Page5 from "@/components/applicationLayout/Page5";

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

  const page1product = Page1Data.icons.find(
    (m) => normalizeTitle(m.title) === normalizedProductname
  );
  const page2product = Page2Data.products.find(
    (m) => normalizeTitle(m.title) === normalizedProductname
  );
  const page3product = Page3Data.images.find(
    (m) => normalizeTitle(m.title) === normalizedProductname
  );
  const page4product = Page4Data.imageDescription.find(
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
