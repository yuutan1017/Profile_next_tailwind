import React from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

import Layout from "../components/main/Layout";
import { contactAnimation } from "../components/animate/Animation";
import { LeftArrow } from "../components/arrow/LeftArrow";

export default function Contact() {
  const { register, handleSubmit, errors, reset } = useForm();

  async function onSubmitForm(values) {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    const response = await axios(config);
    // console.log(response);
    reset();
  }

  return (
    <Layout>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={contactAnimation}
        className="md:w-7/12 md:p-5 text-center bg-white shadow-2xl w-11/12 rounded font-sans max-w-3xl mt-7">
        <div className="container m-3">
          <h1 className="text-3xl text-gray-700">Contact Form</h1>
        </div>

        <div className="md:m-4">
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <div className="mx-4 mt-6">
              <label className="text-gray-600 text-base">
                氏名
                <span className="text-xs text-red-500">(必須)</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="例）氏名"
                className={`w-full px-2 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 ${
                  errors.name ? "focus:ring-red-300" : null
                }`}
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

            <div className="mt-6 mx-4">
              <label className="text-gray-600 text-base">
                メールアドレス
                <span className="text-xs text-red-500">(必須)</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="例）your@example.com"
                className={`w-full px-2 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 ${
                  errors.name ? "focus:ring-red-300" : null
                }`}
                ref={register({
                  required: {
                    value: true,
                    message: "※メールアドレスを入力して下さい。",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "※有効なメールアドレスである必要があります",
                  },
                })}
              />
              <div className="text-justify">
                <span className="font-bold text-red-400 text-sm py-2">
                  {errors?.email?.message}
                </span>
              </div>
            </div>

            <div className="mt-6 mx-4">
              <label className="block mb-2 text-sm text-gray-600">
                お問合せ内容
                <span className="text-xs text-red-500">(必須)</span>
              </label>
              <textarea
                name="message"
                rows="9"
                placeholder="お問い合わせ内容です"
                className={`w-full px-2 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 ${
                  errors.name ? "focus:ring-red-300" : null
                }`}
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
                className="w-full md:mt-6 md:my-0 my-3 py-4 font-bold
                 text-white bg-teal-400 rounded-md focus:bg-teal-100 focus:outline-none"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </motion.div>

      <div className="container justify-center flex mb-0 mt-8">
        <LeftArrow title="/portfolio-page" />
      </div>
    </Layout>
  );
}
