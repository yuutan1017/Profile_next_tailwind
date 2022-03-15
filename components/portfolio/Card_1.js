import React from "react";
import Link from "next/link";
import Image from "next/image";
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
      <Link href="/" passHref>
        <a className="cursor-pointer">
          <Image
            className="object-top object-cover rounded-t-3xl"
            src="/image/taskController.png"
            alt="taskController"
            width={800}
            height={300}
          />
        </a>
      </Link>
      <div className="pb-7">
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 my-5">
          Task Controller
        </h1>
        <p className="leading-relaxed">
          よくあるログイン機能付きCRUDアプリです。 勉強がてら作りました。
          <br />
          フロントエンドはTypeScript + ReduxToolkit、
          <br />
          バックエンドはDjango RestFramework
        </p>
      </div>
      <Link href="https://github.com/yuutan1017/taskController" passHref>
        <motion.img
          src="/icons/github_icon.png"
          className="w-10 h-10 cursor-pointer mx-auto"
          whileHover={{ scale: 1.3 }}
        />
      </Link>
    </motion.div>
  );
};
