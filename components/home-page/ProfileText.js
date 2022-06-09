import React from "react";
import Link from "next/link";
import Image from "next/dist/client/image";
import { motion } from "framer-motion";

import { helloUser, leftArticleAnimation, rightArticleAnimation } from "../animate/Animation";

export const ProfileText = () => {
  return (
    <div className="flex overflow-y-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={rightArticleAnimation}
        className="m-auto ml-5"
      >
        <Image
          className="object-top object-cover rounded-full"
          src="/image/nuko.jpeg"
          alt="profile-image"
          width={320}
          height={320}
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={leftArticleAnimation}
        className="flex-row m-5 md:px-10 md:py-4"
      >
        <motion.h1
          className="text-center md:text-left title-font font-medium text-5xl py-3 mb-8 text-gray-900 "
          animate="visible"
          initial="hidden"
          variants={helloUser}
        >
          Thank you For Visiting!!
        </motion.h1>
        <div className="text-center md:text-left leading-loose text-xl">
          はじめまして。ユウタと申します。飲食店勤務5年目です。
          <br />
          趣味でプログラミングを始め、のめり込んでいくうちに仕事として携わっていきたいと思い、転職を決意。
          <br />
          直近ではフロントエンドを中心に勉強中です。
        </div>

        <div className="flex items-center  py-3 md:mt-4 overflow-y-hidden">
          <Link href="https://github.com/yuutan1017" passHref>
            <motion.img
              src="/icons/github_icon.png"
              className="w-14 h-14 items-cetnter cursor-pointer md:mr-10 md:ml-3"
              whileHover={{ scale: 1.5 }}
            />
          </Link>
          <Link href="/contact-page" passHref>
            <motion.img
              src="/icons/gmail.png"
              className="w-12 h-12 items-cetnter cursor-pointer mx-10"
              whileHover={{ scale: 1.5 }}
            />
          </Link>
          <Link href="/skills-page" passHref>
            <motion.img
              src="/icons/personal.png"
              className="w-12 h-12 items-center cursor-pointer md:mx-10"
              whileHover={{ scale: 1.5 }}
            />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
