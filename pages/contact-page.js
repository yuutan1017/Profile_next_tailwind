import React from "react";

import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-white text-center shadow-2xl shadow-slate-500 p-2 w-6/12 rounded font-sans my-5 ml-auto mr-auto max-w-3xl">
        <div class="container">
          <div class=" mx-auto bg-white p-2 rounded-md shadow-sm">
            <div class="text-center">
              <h1 class="text-2xl text-gray-700">Contact Form</h1>
            </div>
            <div class="m-5">
              <form>
                <div class="mb-3">
                  <label for="name" class="block mb-2 text-sm text-gray-600">
                    氏名
                    <span class="text-xs text-red-500">(必須)</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="例）氏名"
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="block mb-2 text-sm text-gray-600">
                    メールアドレス
                    <span class="text-xs text-red-500">(必須)</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="例）your@example.com"
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div class="mb-3">
                  <label for="phone" class="text-sm text-gray-600">
                    電話番号
                  </label>
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="例）000-0000-000"
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  />
                </div>
                <div class="mb-3">
                  <label for="message" class="block mb-2 text-sm text-gray-600">
                    お問合せ内容
                    <span class="text-xs text-red-500">(必須)</span>
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    name="message"
                    placeholder="お問い合わせ内容です"
                    class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <button
                    type="submit"
                    class="w-full px-1 py-4 font-bold text-white bg-teal-400 rounded-md focus:bg-teal-100 focus:outline-none"
                  >
                    送信する
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
