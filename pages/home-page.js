import React from "react";

import { Layout } from "../components/main/Layout";
import { ProfileText } from "../components/home-page/ProfileText";
import { ProfileCard } from "../components/home-page/ProfileCard";
import { RightArrow } from "../components/arrow/RightArrow";

export default function HomePage() {
  return (
    <Layout>
      <div className="sm:container sm:px-10">
        <div className="md:flex md:py-24 py-6">
          <ProfileText />

          <ProfileCard />
        </div>
        <div className="flex justify-center items-center">
          <RightArrow title="/skills-page" />
        </div>
      </div>
    </Layout>
  );
}
