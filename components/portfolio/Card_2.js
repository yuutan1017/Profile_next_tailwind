import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { portfolioAnimation_R } from "../animate/Animation";

export const Card_2 = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      transition="spring"
      variants={portfolioAnimation_R}
      className="md:h-full md:w-3/12 bg-gray-100 md:ml-4 md:pb-24 pb-10 rounded-3xl text-center border-2 shadow-2xl md:mx-auto mx-7 mt-5 md:mt-0"
    >
      <Image
        className="w-full h-40 object-top object-cover rounded-t-3xl"
        src="/image/nuko.jpeg"
        alt="portfolio"
        width={800}
        height={300}
      />
      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 my-5">
        準備中
      </h1>
      <p className="leading-relaxed px-5">
        Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
        microdosing tousled waistcoat.
      </p>
    </motion.div>
  );
};
