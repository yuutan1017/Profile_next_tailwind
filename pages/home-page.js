import React from "react";

import { Layout } from "../components/main/Layout";
import { ProfileText } from "../components/home-page/ProfileText";
import { ProfileCard } from "../components/home-page/ProfileCard";
import { RightArrow } from "../components/arrow/RightArrow";

export default function HomePage() {
  return (
    <Layout>
      <div className="max-w-full">
        <div className="shrink-0 flex flex-col md:flex-row justify-center md:py-24 py-12">
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
