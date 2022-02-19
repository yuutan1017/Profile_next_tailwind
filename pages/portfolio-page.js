import React from "react";

import Layout from "../components/main/Layout";
import { RightArrow } from "../components/arrow/RightArrow";
import { LeftArrow } from "../components/arrow/LeftArrow";

export default function Portfolio() {
  return (
    <div>
      <Layout>
        <div className="container flex justify-center items-center">
          <LeftArrow title="/skills-page" />
          <RightArrow title="/contact-page" />
        </div>
      </Layout>
    </div>
  );
}
