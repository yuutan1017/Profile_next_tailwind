import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <header>
      <nav className="w-screen">
        <div className="flex items-center h-14 sm:px-10 sm:ml-auto py-6 text-slate-900">
          <Image src="/image/YLogIcon.png" width={45} height={45} />
          <Link href="/">
            <a className="text-2xl font-bold my-2 ml-2">YLog</a>
          </Link>
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
