import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  leftArrowAnimation,
  rightArrowAnimation,
} from "../components/animate/Animation";

import Layout from "../components/Layout";

export default function Portfolio() {
  return (
    <Layout>
      <div className="container flex m-8 justify-center">
        <Link href="/skills-page">
          <motion.svg
            animate="visible"
            initial="hidden"
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

        <Link href="/contact-page">
          <motion.svg
            animate="visible"
            initial="hidden"
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
      </div>
    </Layout>
  );
}
