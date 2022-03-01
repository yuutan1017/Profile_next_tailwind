import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <header>
      <nav className="w-screen">
        <div className="flex items-center h-14 sm:px-10 sm:ml-auto py-3 text-slate-900">
          <Image src="/image/YLog.png" width={60} height={60} />
          <a className="text-xl font-bold mb-2">YLog</a>
          <div className="ml-auto md:space-x-3 sm:inline-block hidden">
            <Link href="/">
              <motion.button
                className="py-2 md:px-5 rounded text-xl"
                whileHover={{ scale: 1.3 }}
              >
                Home
              </motion.button>
            </Link>
            <Link href="/skills-page">
              <motion.button
                className="py-2 px-5 rounded text-xl"
                whileHover={{ scale: 1.3 }}
              >
                Skills
              </motion.button>
            </Link>
            <Link href="/portfolio-page">
              <motion.button
                className="py-2 md:px-5 rounded text-xl"
                whileHover={{ scale: 1.3 }}
              >
                Portfolio
              </motion.button>
            </Link>
            <Link href="/contact-page">
              <motion.button
                className="py-2 px-5 rounded text-xl"
                whileHover={{ scale: 1.3 }}
              >
                Contact
              </motion.button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
