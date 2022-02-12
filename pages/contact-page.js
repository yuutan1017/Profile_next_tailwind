import React from "react";
import Link from "next/link";
import axios from "axios";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

import Layout from "../components/Layout";
import { leftArrowAnimation } from "../components/animate/Animation";

export default function Contact() {
  
  const { register, handleSubmit, errors, reset } = useForm();

  async function onSubmitForm(values) {
    let config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    };

    try {
      const response = await axios(config);
      // console.log(response);
      reset();
    } catch (err) {}
  }

  return (
    <Layout>
      <div className="text-center bg-white shadow-2xl w-6/12 rounded font-sans max-w-3xl p-5 mt-5">
        <div className="container">
          <h1 className="text-3xl text-gray-700">Contact Form</h1>
        </div>

        <div className="m-5">
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <div className="m-4">
              <label className="text-gray-600 text-base">
                氏名
                <span className="text-xs text-red-500">(必須)</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="例）氏名"
                className={`w-full px-2 py-3 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 ${errors.name ? 'focus:ring-red-300' : null }`}
                ref={register({
                  required: {
                    value: true,
                    message: "※名前を入力して下さい。",
                  },
                })}
              />
              <div className="text-justify">
                <span className="font-bold text-red-400 text-sm py-2">
                  {errors?.name?.message}
                </span>
              </div>
            </div>

            <div className="m-4">
              <label className="text-gray-600 text-base">
                メールアドレス
                <span className="text-xs text-red-500">(必須)</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="例）your@example.com"
                className={`w-full px-2 py-3 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 ${errors.name ? 'focus:ring-red-300' : null }`}
                ref={register({
                  required: {
                    value: true,
                    message: "※メールアドレスを入力して下さい。",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: '※有効なメールアドレスである必要があります',
                  },
                })}
              />
              <div className="text-justify">
                <span className="font-bold text-red-400 text-sm py-2">
                  {errors?.email?.message}
                </span>
              </div>
            </div>

            <div className="m-4">
              <label className="block mb-2 text-sm text-gray-600">
                お問合せ内容
                <span className="text-xs text-red-500">(必須)</span>
              </label>
              <textarea
                name="message"
                rows="9"
                placeholder="お問い合わせ内容です"
                className={`w-full px-2 py-3 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 ${errors.name ? 'focus:ring-red-300' : null }`}
                ref={register({
                  required: {
                    value: true,
                    message: "※本文を入力して下さい。",
                  },
                  maxLength: {
                    value: 1000,
                    message: "※1000文字以内で入力して下さい。",
                  },
                })}
              ></textarea>
              <div className="text-justify">
                <span className="font-bold text-red-400 text-base">
                  {errors?.message?.message}
                </span>
              </div>
              <button
                type="submit"
                className="w-full mt-10 py-4 font-bold text-white bg-teal-400 rounded-md focus:bg-teal-100 focus:outline-none"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="justify-center flex mb-0 mt-8">
        <Link href="/portfolio-page">
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
      </div>
    </Layout>
  );
}
