import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { rightArrowAnimation } from "../animate/Animation";

export const RightArrow = props => {
  return (
    <Link href={`${props.title}`} passHref>
      <motion.svg
        animate="visible"
        initial="hidden"
        exit="exit"
        variants={rightArrowAnimation}
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
          d="M13 5l7 7-7 7M5 5l7 7-7 7"
        />
      </motion.svg>
    </Link>
  );
};
