import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Layout({ children, title = "Ylog" }) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-sans">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-blue-400 w-screen">
          <div className="flex items-center justify-center h-14 px-5 py-3">
            <Link href="/">
              <motion.button
                className="text-white py-2 px-5 rounded text-xl hover:bg-blue-500"
                whileHover={{ scale: 1.3 }}
              >
                Home
              </motion.button>
            </Link>
            <Link href="/profile-page">
              <motion.button
                className="text-white py-2 px-5 rounded text-xl hover:bg-blue-500"
                whileHover={{ scale: 1.3 }}
              >
                About
              </motion.button>
            </Link>
            <Link href="/skills-page">
              <motion.button
                className="text-white py-2 px-5 rounded text-xl hover:bg-blue-500"
                whileHover={{ scale: 1.3 }}
              >
                Skills
              </motion.button>
            </Link>
            <Link href="/contact-page">
              <motion.button
                className="text-white py-2 px-5 rounded text-xl hover:bg-blue-500"
                whileHover={{ scale: 1.3 }}
              >
                Contact
              </motion.button>
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen from-teal-400 bg-white">
        {children}
      </main>
      <footer className="w-full h-10 flex justify-center items-center border-t-4 bg-blue-100">
        <a className="flex items-center">copyright@2022 yuutan</a>
      </footer>
    </div>
  );
}
