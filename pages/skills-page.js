import React, { useState } from "react";
import ProgressBar from "react-customizable-progressbar";

import Layout from "../components/Layout";

export default function Skills() {
  const [progress, setProgress] = useState(77);

  return (
    <Layout>
      <div className="flex flex-wrap justify-center">
        <ProgressBar
          className="mx-6"
          radius={100}
          progress={progress}
          strokeWidth={20}
          strokeColor="#3572A5"
          strokeLinecap="round"
          trackStrokeWidth={20}
        >
          <div className="flex align-center justify-center text-2xl">
            python
          </div>
          <div className="flex align-center justify-center absolute top-0 w-full h-full font-thin text-4xl select-none items-center">
            <div>{progress}%</div>
          </div>
        </ProgressBar>

        <ProgressBar
          className="mx-6"
          radius={100}
          progress={progress}
          strokeWidth={20}
          strokeColor="#4F5D95"
          strokeLinecap="round"
          trackStrokeWidth={20}
        >
          <div className="flex align-center justify-center text-2xl">
            PHP
          </div>
          <div className="flex align-center justify-center absolute top-0 w-full h-full font-thin text-4xl select-none items-center">
            <div>{progress}%</div>
          </div>
        </ProgressBar>

        <ProgressBar
          className="mx-6"
          radius={100}
          progress={progress}
          strokeWidth={20}
          strokeColor="#f1e05a"
          strokeLinecap="round"
          trackStrokeWidth={20}
        >
          <div className="flex align-center justify-center text-2xl">
            javascript
          </div>
          <div className="flex align-center justify-center absolute top-0 w-full h-full font-thin text-4xl select-none items-center">
            <div>{progress}%</div>
          </div>
        </ProgressBar>
      </div>
    </Layout>
  );
}
