import React from "react";

import Layout from "../components/main/Layout";
import { ProfileText } from "../components/Homepage/ProfileText";
import { ProfileCard } from "../components/Homepage/ProfileCard";
import { RightArrow } from "../components/arrow/RightArrow";


export default function HomePage() {
  return (
    <Layout>
      <div className="container md:py-24 md:mx-auto md:flex py-12">

        <ProfileText />

        <ProfileCard />

      </div>
      <div className="flex justify-center items-center">
        <div className="mx-5 cursor-pointer">
          <RightArrow title="/skills-page" />
        </div>
      </div>
    </Layout>
  );
}
