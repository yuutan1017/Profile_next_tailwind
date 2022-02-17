export const pageTransition = {
  hidden: { opacity: 0, x: -200, y: 0 },
  visible: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};


export const helloUser = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 1,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    y: "100%",
  },
};

export const rightArticle = {
  visible: {
    opacity: 1,
    x: -55,
    y: -10,
    transition: {
      duration: 0.8,
      delay: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    x: 55,
    y: -200,
  },
};

export const leftArticle = {
  visible: {
    opacity: 1,
    x: 45,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
  hidden: {
    opacity: 0,
    x: -45,
    y: 200,
  },
};

export const rightArrowAnimation = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 1.4,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export const leftArrowAnimation = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 1.1,
    },
  },
  hidden: {
    opacity: 0,
  },
};
