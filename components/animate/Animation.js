
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

export const rightArticleAnimation = {
  visible: {
    opacity: 1,
    x: -55,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.6,
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

export const leftArticleAnimation = {
  visible: {
    opacity: 1,
    x: 55,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.4
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

export const skillsAnimation = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.8,
    }
  },
  hidden: {
    opacity: 0,
    y: -200,
  },
  exit: {
    opacity: 0,
    x: -300,
    transition: {
      duration: 0.7,
    }
  }
}

export const portfolioAnimation = {
  visible: {},
  hidden: {},
  exit: {}
}

export const contactAnimation = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.8
    }
  },
  hidden: {
    opacity: 0,
    y: 200,
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      duration: 0.7,
    }
  }
}

export const rightArrowAnimation = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: 1,
    },
  },
  hidden: {
    opacity: 0,
    x: 100,
  },
  exit: {
    opacity: 0,
    x: 200,
    transition: {
      duration: 0.7,
    }
  }
};

export const leftArrowAnimation = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: 1,
    },
  },
  hidden: {
    opacity: 0.1,
    x: -100,
  },
  exit: {
    opacity: 0,
    x: -200,
    transition: {
      duration: 0.7,
    }
  }
};
