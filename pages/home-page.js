import React from "react";

import Layout from "../components/main/Layout";
import { ProfileText } from "../components/home-page/ProfileText";
import { ProfileCard } from "../components/home-page/ProfileCard";
import { RightArrow } from "../components/arrow/RightArrow";


export default function HomePage() {
  return (
    <Layout>
      <div className="container md:py-24 md:mx-auto md:flex py-12">

        <ProfileText />

        <ProfileCard />

      </div>
      <div className="container flex justify-center items-center">
          <RightArrow title="/skills-page" />
      </div>
    </Layout>
  );
}
