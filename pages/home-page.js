import React from "react";

import { Layout } from "../components/main/Layout";
import { ProfileText } from "../components/home-page/ProfileText";
import { ProfileCard } from "../components/home-page/ProfileCard";
import Skills from "./skills-page";
import Portfolio from "./portfolio-page";
import Contact from "./contact-page";

export default function HomePage() {
  return (
    <Layout>
      <div className="max-w-full">
        <section className="flex flex-col lg:flex-row justify-center lg:py-40 py-12">
          <ProfileText />
        </section>
        <section className="flex justify-center items-center mt-10">
          <Skills />
        </section>
        <section className="flex justify-center items-center mt-10">
          <Portfolio />
        </section>
        <section className="flex justify-center items-center mt-10 mb-20">
          <Contact />
        </section>
      </div>
    </Layout>
  );
}
