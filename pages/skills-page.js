import React, { useState } from "react";
import { motion } from "framer-motion";

import Layout from "../components/main/Layout";

import Lan_skills from "../components/skills-page/LanguageSkills";
import Others_skills from "../components/skills-page/OthersSkills";
import { RightArrow } from "../components/arrow/RightArrow";
import { LeftArrow } from "../components/arrow/LeftArrow";

import { skillsAnimation } from "../components/animate/Animation";

export default function Skills() {
  const [openTab, setOpenTab] = useState(1);
  return (
    <Layout>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={skillsAnimation}
        className="flex flex-wrap mt-8 mx-10">
        <div className="w-full">
          <ul
            className="flex mb-1 list-none flex-wrap pt-2 pb-2"
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
      </motion.div>

      <div className="container flex m-4 justify-center">

        <LeftArrow title="/" />
        <RightArrow title="/portfolio-page" />
        
      </div>
    </Layout>
  );
}
