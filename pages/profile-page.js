import Layout from "../components/Layout";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <Layout title="Profile">
      {/* <motion.div 
        className="bg-gray-50 text-center shadow-2xl p-8 w-96 rounded"
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 1.5,
          times: [0, 0.7, 1]
        }}
        initial={{
          opacity: 0.1
        }}
      >
        <div className="object-center">
          <p className="font-bold">Profile</p>
        </div>
        <div className="flex justify-center mt-4">
          <Image
            className="rounded-full"
            src="/demo3.jpg"
            width={120}
            height={120}
            alt="Avater"
          />
        </div>
        <div className="mt-4">
          <p className="font-bold">Name</p>
          <p className="text-xs mt-2 text-gray-800">Yuta Nakamura</p>
          <p className="font-bold mt-2">Age</p>
          <p className="text-xs mt-2 text-gray-800">26</p>
          <p className="font-bold mt-2">E-mail</p>
          <p className="text-xs mt-2 text-gray-800">n.you0611@gmail.com</p>
          <p className="font-bold mt-2">Phone</p>
          <p className="text-xs mt-2 text-gray-800">080-1503-6453</p>
          <p className="font-bold mt-5">Links</p>
        </div>
        <div className="mt-2 flex justify-around">
          <motion.a
            href="https://github.com/yuutan1017"
            target="_blank"

            whileHover={{scale: 1.5}}
          >
            <svg
              className="w-8 h-8 items-center text-gray-500"
              fill="currentColor"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
            </svg>
          </motion.a>
          <Link href="/contact-page">
            <motion.img 
              src="https://img.icons8.com/color/48/000000/gmail--v2.png" 
              className="w-8 h-8 items-cetnter cursor-pointer"
              whileHover={{scale: 1.5}}
            />
          </Link>
          <Link href="/skills-page">
            <motion.img 
              src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-skills-business-and-management-kiranshastry-solid-kiranshastry-9.png"
              className="w-8 h-8 items-center cursor-pointer"
              whileHover={{scale: 1.5}}
            />
          </Link>
        </div>
      </motion.div> */}

      <div class="flex flex-col items-center bg-white rounded-lg border shadow-2xl md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 px-4">
        <img
          class="object-cover w-full h-96 rounded-full md:h-auto md:w-60 md:rounded-full md:rounded-full mx-3"
          src="/demo3.jpg"
        />
        <div class="flex flex-col justify-center p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            My Profile
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            _____________________________________________
          </p>
          <div className="mx-4 mb-5 text-center">
            <p className="font-bold mt-2 text-white">Name</p>
            <p className="text-xs text-white my-2">Yuta Nakamura</p>
            <p className="font-bold mt-2 text-white">Age</p>
            <p className="text-xs text-white my-2">26</p>
            <p className="font-bold mt-2 text-white">E-mail</p>
            <p className="text-xs text-white my-2">n.you0611@gmail.com</p>
            <p className="font-bold mt-2 text-white">Phone</p>
            <p className="text-xs text-white my-2">080-1503-6453</p>
            <p className="font-bold mt-5 text-white">Links</p>
          </div>

          <div className="mt-2 flex justify-around">
            <motion.a
              href="https://github.com/yuutan1017"
              target="_blank"
              whileHover={{ scale: 1.5 }}
            >
              <svg
                className="w-8 h-8 items-center text-gray-500"
                fill="currentColor"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </motion.a>
            <Link href="/contact-page">
              <motion.img
                src="https://img.icons8.com/color/48/000000/gmail--v2.png"
                className="w-8 h-8 items-cetnter cursor-pointer"
                whileHover={{ scale: 1.5 }}
              />
            </Link>
            <Link href="/skills-page">
              <motion.img
                src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-skills-business-and-management-kiranshastry-solid-kiranshastry-9.png"
                className="w-8 h-8 items-center cursor-pointer"
                whileHover={{ scale: 1.5 }}
              />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
