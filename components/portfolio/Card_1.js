import React from "react";
import { motion } from "framer-motion";

import { portfolioAnimation_L } from "../animate/Animation";

export const Card_1 = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      transition="spring"
      variants={portfolioAnimation_L}
      className="md:h-full md:w-3/12 bg-gray-100 md:mr-4 md:pb-24 pb-10 rounded-3xl text-center border-2 shadow-2xl md:mx-auto mx-7"
    >
      <img
        className="w-full h-40 object-center object-cover rounded-t-3xl"
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
  );
};
