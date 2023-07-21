export const scaleUp = {
  initial: {
    scale: 0.5,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.25,
      staggerChildren: 0.5,
    },
  },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: {
      duration: 0.75,
    },
  },
};

export const click = {
  show: {
    scale: 0.75,
    transition: { duration: 0.25 },
  },
};
