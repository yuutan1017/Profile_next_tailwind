
export const helloUser = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
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
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    x: 200,
    y: -200,
  },
  exit: {
    opacity: 0,
    x: -200,
    y: 200,
    transition: {
      duration: 0.6
    }
  },
};

export const leftArticle = {
  visible: {
    opacity: 1,
    x: 55,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
  hidden: {
    opacity: 0,
    x: -200,
    y: 200,
  },
  exit: {
    opacity: 0,
    x: 200,
    y: -200,
    transition: {
      duration: 0.6,
      delay: 0.2
    }
  },
};

export const rightArrowAnimation = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 1,
    },
  },
  hidden: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
  }
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
  exit: {
    opacity: 0,
  }
};
