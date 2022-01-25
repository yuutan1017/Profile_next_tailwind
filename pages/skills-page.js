import React, { useState } from "react";
import ProgressBar from "react-customizable-progressbar";

import Layout from "../components/Layout";

export default function Skills() {
  const progress = 77;

  return (
    <Layout>
      <div className="flex flex-wrap justify-center">

        <div className="basis-64 shrink-0 grow-0 py-2 px-4 rounded-md m-5">
          <div className="flex justify-between align-center py-2 px-1 mb-3 font-nomal color-[#666]" > 
            <p className="">python</p>
          </div>
          <ProgressBar
            radius={100}
            progress={progress}
            strokeWidth={20}
            strokeColor="#3572A5"
            strokeLinecap="round"
            trackStrokeWidth={20}
          >
            <div className="flex align-center justify-center absolute top-0 w-full h-full font-thin text-4xl select-none items-center">
              <div>{progress}%</div>
            </div>
          </ProgressBar>
        </div>


        <div className="basis-64 shrink-0 grow-0 py-2 px-4 rounded-md m-5">
          <div className="flex justify-between align-center py-2 px-1 mb-3 font-nomal color-[#666]" > 
            <p>PHP</p>
          </div>
          <ProgressBar
            radius={100}
            progress={progress}
            strokeWidth={20}
            strokeColor="#4F5D95"
            strokeLinecap="round"
            trackStrokeWidth={20}
          >
            <div className="flex align-center justify-center absolute top-0 w-full h-full font-thin text-4xl select-none items-center">
              <div>{progress}%</div>
            </div>
          </ProgressBar>
        </div>


        <div className="basis-64 shrink-0 grow-0 py-2 px-4 rounded-md m-5">
          <div className="flex justify-between align-center py-2 px-1 mb-3 font-nomal color-[#666]" > 
            <p>Ruby</p>
          </div>
          <ProgressBar
            radius={100}
            progress={progress}
            strokeWidth={20}
            strokeColor="#701516"
            strokeLinecap="round"
            trackStrokeWidth={20}
          >

            <div className="flex align-center justify-center absolute top-0 w-full h-full font-thin text-4xl select-none items-center">
              <div>{progress}%</div>
            </div>
          </ProgressBar>
        </div>


        <div className="basis-64 shrink-0 grow-0 py-2 px-4 rounded-md m-5">
          <div className="flex justify-between align-center py-2 px-1 mb-3 font-nomal color-[#666]" > 
            <p>javascript</p>
          </div>
          <ProgressBar
            radius={100}
            progress={progress}
            strokeWidth={20}
            strokeColor="#f1e05a"
            strokeLinecap="round"
            trackStrokeWidth={20}
          >

            <div className="flex align-center justify-center absolute top-0 w-full h-full font-thin text-4xl select-none items-center">
              <div>{progress}%</div>
            </div>
          </ProgressBar>
        </div>


        <div className="basis-64 shrink-0 grow-0 py-2 px-4 rounded-md m-5">
          <div className="flex justify-between align-center py-2 px-1 mb-3 font-nomal color-[#666]" > 
            <p>HTML</p>
          </div>
          <ProgressBar
            radius={100}
            progress={progress}
            strokeWidth={20}
            strokeColor="#e44b23"
            strokeLinecap="round"
            trackStrokeWidth={20}
          >

            <div className="flex align-center justify-center absolute top-0 w-full h-full font-thin text-4xl select-none items-center">
              <div>{progress}%</div>
            </div>
          </ProgressBar>
        </div>

        <div className="basis-64 shrink-0 grow-0 py-2 px-4 rounded-md m-5">
          <div className="flex justify-between align-center py-2 px-1 mb-3 font-nomal color-[#666]" > 
            <p>CSS</p>
          </div>
          <ProgressBar
            radius={100}
            progress={progress}
            strokeWidth={20}
            strokeColor="#563d7c"
            strokeLinecap="round"
            trackStrokeWidth={20}
          >

            <div className="flex align-center justify-center absolute top-0 w-full h-full font-thin text-4xl select-none items-center">
              <div>{progress}%</div>
            </div>
          </ProgressBar>
        </div>


      </div>
    </Layout>
  );
}
