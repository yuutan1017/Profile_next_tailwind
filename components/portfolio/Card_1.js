import React from "react";
import Link from "next/link";
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
      className="md:h-full md:w-3/12 bg-gray-100 md:mr-4 md:pb-5 pb-5 rounded-3xl text-center border-2 shadow-2xl md:mx-auto mx-7"
    >
      <a href="/" className="cursor-pointer">
        <img
          className="w-full h-40 object-top object-cover rounded-t-3xl"
          src="/image/taskController.png"
        />
      </a>
      <div className="pb-7">
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 my-5">
          Task Controller
        </h1>
        <p className="leading-relaxed">
          よくあるログイン機能付きCRUDアプリです。
          勉強がてら作りました。
          <br />
          フロントエンドはTypeScript + ReduxToolkit、
          <br />
          バックエンドはDjango RestFramework
        </p>
      </div>
      <Link href="https://github.com/yuutan1017/taskController">
        <motion.img
          src="/icons/github_icon.png"
          className="w-10 h-10 cursor-pointer mx-auto"
          whileHover={{ scale: 1.3 }}
        />
      </Link>
    </motion.div>
  );
};
