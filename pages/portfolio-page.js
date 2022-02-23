import React from "react";
import { motion } from "framer-motion";

import Layout from "../components/main/Layout";
import { RightArrow } from "../components/arrow/RightArrow";
import { LeftArrow } from "../components/arrow/LeftArrow";
import {
  portfolioAnimation_L,
  portfolioAnimation_R,
} from "../components/animate/Animation";

export default function Portfolio() {
  return (
    <Layout>
      <div className="flex items-center justify-center mb-8 p-10">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={portfolioAnimation_L}
          class="h-full w-1/3 bg-gray-100 mr-4 pb-24 rounded-3xl text-center border-2 shadow-2xl"
        >
          <img
            className="w-full h-40 object-center object-cover"
            src="/image/profile.png"
          />
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 my-5">
            注文フォーム
          </h1>
          <p className="leading-relaxed">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={portfolioAnimation_R}
          class="h-full w-1/3 bg-gray-100 ml-4 pb-24 rounded-3xl text-center border-2 shadow-2xl"
        >
          <img
            className="w-full h-40 object-center object-cover"
            src="/image/profile.png"
          />
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 my-5">
            ランダムタスク
          </h1>
          <p className="leading-relaxed">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
        </motion.div>
      </div>
      <div className="container flex justify-center items-center">
        <LeftArrow title="/skills-page" />
        <RightArrow title="/contact-page" />
      </div>
    </Layout>
  );
}
