import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import Layout from "../components/Layout";
import {
  rightArrow,
  leftArrow,
} from "../components/animate/workspageAnimation";
import Lan_skills from "../components/LanguageSkills";
import Others_skills from "../components/OthersSkills";

export default function Skills() {
  const [openTab, setOpenTab] = useState(1);
  return (
    <Layout>
      <div className="flex flex-wrap mt-8">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4"
            role="tablist"
          >
            <li className="mr-auto last:mr-0 text-center flex-auto">
              <a
                className={
                  "text-xs font-bold px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-teal-400"
                    : "text-gray-600 bg-gray-100")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                言語・フレームワーク・ライブラリ
              </a>
            </li>
            <li className="ml-auto last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-teal-400"
                    : "text-gray-600 bg-gray-100")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                その他
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 bg-gray-100 w-full mb-6 shadow-2xl rounded">
            <div className="px-6 py-6 flex-auto">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <Lan_skills />
              </div>

              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <Others_skills />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex m-8 justify-center">
        <Link href="/home-page">
          <motion.svg
            animate="visible"
            initial="hidden"
            variants={leftArrow}
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 cursor-pointer mx-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            />
          </motion.svg>
        </Link>
        
        <Link href="/portfolio-page">
          <motion.svg
            animate="visible"
            initial="hidden"
            variants={rightArrow}
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 cursor-pointer mx-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </motion.svg>
        </Link>
      </div>
    </Layout>
  );
}
