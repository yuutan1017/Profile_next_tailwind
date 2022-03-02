import React from "react";

import { Layout } from "../components/main/Layout";
import { RightArrow } from "../components/arrow/RightArrow";
import { LeftArrow } from "../components/arrow/LeftArrow";

import { Card_1 } from "../components/portfolio/Card_1";
import { Card_2 } from "../components/portfolio/Card_2";

export default function Portfolio() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row md:py-24 py-10 w-full">
        <Card_1 />
        <Card_2 />
      </div> 
      <div className="container flex justify-center items-center">
        <LeftArrow title="/skills-page" />
        <RightArrow title="/contact-page" />
      </div>
    </Layout>
  );
}
