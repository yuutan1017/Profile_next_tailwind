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
      className="text-center md:mr-16"
    >
      <div className="flex md:flex-row-reverse flex-col-reverse justify-around border-2 border-emerald-100 px-10 py-6 m-8 bg-white shadow-xl">
        <div className="text-gray-700 md:ml-5">
          <h5 className="text-2xl md:mb-6 mt-4 mb-3">My Profile</h5>
          <div className="mx-4 mb-5 font-bold">
            <p className="mt-2">Name</p>
            <p className="text-xl my-2">Yuta Nakamura</p>
            <p className="mt-2 ">Age</p>
            <p className="text-xl my-2 ">26</p>
            <p className="mt-2">E-mail</p>
            <p className="text-xl mt-2">n.you0611@ymail.ne.jp</p>
          </div>
        </div>
        <div className="md:mr-10 md:mt-2">
          <Image
            className="object-top object-cover rounded-full"
            src="/image/nuko.jpeg"
            alt="profile-image"
            width={300}
            height={300}
          />
        </div>
      </div>
    </motion.div>
  );
};
