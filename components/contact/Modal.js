import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { backdropVariant, modalVariant } from "../animate/Animation";

export const Modal = ({isOpen, setIsOpen}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed grid place-items-center w-screen h-[110%] bg-gray-400/[.5]"
          variants={backdropVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="container flex flex-col p-16 w-2/6 items-center relative bg-neutral-50 shadow-2xl border-2 rounded-lg font-bold text-6xl"
            variants={modalVariant}
          >
            <h1>A R I G A T O ! !</h1>
            <div className="close" onClick={() => setIsOpen(false)}>
              <div></div>
              <div></div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
