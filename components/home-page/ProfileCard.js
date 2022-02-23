import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { rightArticleAnimation } from "../animate/Animation";

export const ProfileCard = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={rightArticleAnimation}
      className="container ml-14 px-10 py-3 text-center md:text-left mt-5 xl:mt-0"
    >
      <div className="lg:flex md:justify-around px-2 py-7 bg-gray-50 shadow-2xl shadow-neutral-400 border-2">
        <div className="xl:flex xl:flex-col justify-center text-gray-700">
          <h5 className="text-2xl ml-3 md:mb-6 mb-3">My Profile</h5>
          <div className="mx-4 mb-5 font-bold">
            <p className="mt-2">Name</p>
            <p className="text-xl my-2">Yuta Nakamura</p>
            <p className="mt-2 ">Age</p>
            <p className="text-xl my-2 ">26</p>
            <p className="mt-2">E-mail</p>
            <p className="text-xl mt-2">n.you0611@gmail.com</p>
          </div>
        </div>
        <Image
          className="object-cover rounded-full"
          src="/image/profile.png"
          width={300}
          height={300}
        />
      </div>
    </motion.div>
  );
};
