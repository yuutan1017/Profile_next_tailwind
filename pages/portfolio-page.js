import React, { useState } from "react";

import Layout from "../components/main/Layout";
import { RightArrow } from "../components/arrow/RightArrow";
import { LeftArrow } from "../components/arrow/LeftArrow";
import { Modal } from "../components/portfolio/Modal";

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Layout>
      <button className="button" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      <br />
      <div className="container flex justify-center items-center">
        <LeftArrow title="/skills-page" />
        <RightArrow title="/contact-page" />
      </div>
    </Layout>
  );
}
