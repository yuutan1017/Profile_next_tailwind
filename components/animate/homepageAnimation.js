export const helloUser = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1.4,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    y: "100%"
  }
}

export const rigthArticle = {
  visible: {
    opacity: 1,
    x: -50,
    transition: {
      duration: 1,
      delay: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    x: 200,
  },
};

export const leftArticle = {
  visible: {
    opacity: 1,
    x: 50,
    transition: {
      duration: 0.8,
    },
  },
  hidden: {
    opacity: 0,
    x: -200,
  },
};

export const rightArrow = {
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
  
}


