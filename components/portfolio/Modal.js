import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import { backdropVariant, modalVariant } from "../animate/Animation";

export const Modal = ({isOpen, setIsOpen}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          variants={backdropVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="modal-container"
            variants={modalVariant}
          >
            <h1>Modal Header</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              reprehenderit dolores iure facilis libero repellendus pariatur,
              totam voluptate magnam dolorem assumenda soluta. Repellendus
              praesentium, ducimus corporis ab odio dignissimos quam?
            </p>
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
