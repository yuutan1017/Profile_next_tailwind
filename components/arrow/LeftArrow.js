import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { leftArrowAnimation } from "../animate/Animation";

export const LeftArrow = props => {
  return (
    <Link href={`${props.title}`} passHref>
      <motion.svg
        animate="visible"
        initial="hidden"
        exit="exit"
        variants={leftArrowAnimation}
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 cursor-pointer mx-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
          d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
        />
      </motion.svg>
    </Link>
  );
};
