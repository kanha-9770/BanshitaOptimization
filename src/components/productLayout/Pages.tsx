"use client";
import React from "react";
import Page1 from "@/components/productLayout/Page1";
// import Page2 from "@/components/productLayout/Page2";
import { notFound, useParams } from "next/navigation";
import {
  Page1Data,
  Page2Data,
} from "@/components/Constants/product/productLayout_data.json";

const Page = () => {
  const params = useParams() as Record<string, string | string[]> | null;

  if (!params || !params.id) {
    return notFound();
  }

  let machinename = "";

  if (Array.isArray(params.id)) {
    // Join array elements into a single string and normalize spaces
    machinename = decodeURIComponent(params.id.join(" "))
      .replace(/\+/g, " ")
      .trim();
  } else if (typeof params.id === "string") {
    // Decode and normalize the single string
    machinename = decodeURIComponent(params.id).replace(/\+/g, " ").trim();
  }

  if (!machinename) {
    return notFound();
  }

  // Helper function to normalize title for comparison
  const normalizeTitle = (title: string) =>
    title.toLowerCase().replace(/\s+/g, " ").trim();

  // Find the product by its normalized title
  const normalizedMachinename = normalizeTitle(machinename);

  const page1machine = Page1Data.data.find(
    (m) => normalizeTitle(m.title) === normalizedMachinename
  );
  const page2machine = Page2Data.data.find(
    (m) => normalizeTitle(m.title) === normalizedMachinename
  );

  if (!page1machine || !page2machine) {
    return notFound();
  }

  return (
    <>
      <Page1 page1machine={page1machine} />
      {/* <Page2 page2machine={page2machine} /> */}
    </>
  );
};

export default Page;
