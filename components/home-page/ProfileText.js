import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { helloUser, leftArticleAnimation } from "../animate/Animation";

export const ProfileText = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={leftArticleAnimation}
      className="flex flex-wrap mb-auto m-4 xl:px-10 xl:py-4 sm:"
    >
      <div className="sm:w-full sm:mb-6 sm:mr-10 mr-0">
        <motion.h1
          className="title-font font-medium text-4xl mb-10 text-gray-900"
          animate="visible"
          initial="hidden"
          variants={helloUser}
        >
          Thank you For Visiting!!
        </motion.h1>
        <div className="leading-relaxed text-xl">
          はじめまして。ユウタと申します。飲食店勤務5年目です。
          <br />
          趣味でプログラミングを始め、のめり込んでいくうちに仕事として携わっていきたいと思い、転職を決意。
          <br />
          直近ではフロントエンドを中心に勉強中です。
        </div>
      </div>

      <div className="flex items-center md:justify-around xl:m-auto">
        <Link href="https://github.com/yuutan1017">
          <motion.img
            src="/icons/github_icon.png"
            className="w-14 h-14 items-cetnter cursor-pointer md:mx-10"
            whileHover={{ scale: 1.5 }}
          />
        </Link>
        <Link href="/contact-page">
          <motion.img
            src="/image/gmail.png"
            className="w-12 h-12 items-cetnter cursor-pointer mx-10"
            whileHover={{ scale: 1.5 }}
          />
        </Link>
        <Link href="/skills-page">
          <motion.img
            src="/image/personal.png"
            className="w-12 h-12 items-center cursor-pointer md:mx-10"
            whileHover={{ scale: 1.5 }}
          />
        </Link>
      </div>
    </motion.div>
  );
};
