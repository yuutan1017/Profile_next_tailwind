import React from "react";
import Head from "next/head";

import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center min-h-screen text-gray-600 font-sans bg-gradient-to-r from-white via-yellow-50 to-teal-200">
      <Head>
        <link rel="icon" href="/image/YLogIcon.png" />
        <title>YLog</title>
      </Head>

      <Header />

      <main className="flex flex-col flex-auto justify-center items-center w-screen">
        {children}
      </main>

      <Footer />
    </div>
  );
};
