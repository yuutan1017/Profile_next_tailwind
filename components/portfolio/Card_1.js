import React from "react";
import { motion } from "framer-motion";

import { portfolioAnimation_L } from "../animate/Animation";

export const Card_1 = () => {
  return (
    <motion.a
      href="/"
      initial="hidden"
      animate="visible"
      exit="exit"
      transition="spring"
      variants={portfolioAnimation_L}
      className="md:h-full md:w-3/12 bg-gray-100 md:mr-4 md:pb-24 pb-10 rounded-3xl text-center border-2 shadow-2xl md:mx-auto mx-7"
    >
      <img
        className="w-full h-40 object-top object-cover rounded-t-3xl"
        src="/image/taskController.png"
      />
      <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 my-5">
        Task Controller
      </h1>
      <p className="leading-relaxed px-5">
        フロントエンドはTypeScript + ReduxToolkitで、
        <br/>
        バックエンドはDjango RestFrameworkで作りました。
      </p>
    </motion.a>
  );
};
