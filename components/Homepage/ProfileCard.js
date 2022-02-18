import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { rightArticle } from "../animate/Animation";

export const ProfileCard = () => {
  return (
    <motion.div
      className="container ml-14 px-10 text-center md:text-left mt-5 xl:mt-0"
      animate="visible"
      initial="hidden"
      exit="exit"
      variants={rightArticle}
    >
      <div className="md:flex md:justify-around px-2 py-7 bg-gray-50 shadow-xl shadow-gray-500 ">
        <div className="lg:flex lg:flex-col justify-center text-gray-700">
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
