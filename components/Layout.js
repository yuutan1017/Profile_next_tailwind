import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Layout({ children, title = "Ylog" }) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-sans">
      <Head>
        <link rel="icon" href="/YLog.ico" />
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gradient-to-r from-white via-yellow-50 to-teal-200 w-screen">
          <div className="flex items-center h-12 px-10 pl-20 py-3 text-slate-900">
            <Image className="" src="/YLogIcon.png" width={60} height={60} />
            <a className="text-xl font-bold">YLog</a>
            <div className="ml-auto space-x-3">
              <Link href="/">
                <motion.button
                  className="py-2 px-5 rounded text-xl"
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
                  className="py-2 px-5 rounded text-xl"
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
      <main className="flex flex-1 justify-center items-center flex-col w-screen bg-gradient-to-r from-white via-yellow-50 to-teal-200">
        {children}
      </main>
      <footer className="w-full h-10 flex justify-center items-center bg-gradient-to-r from-white via-yellow-50 to-teal-200">
        <a className="flex items-center">copyright@2022 yuutan</a>
      </footer>
    </div>
  );
}
