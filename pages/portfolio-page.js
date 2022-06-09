import React from "react";

import { Card_1 } from "../components/portfolio/Card_1";
import { Card_2 } from "../components/portfolio/Card_2";

export default function Portfolio() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:py-24 py-10 w-full">
        <Card_1 />
        <Card_2 />
      </div> 
    </>
  );
}
