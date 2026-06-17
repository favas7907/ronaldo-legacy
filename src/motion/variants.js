export const PREMIUM_EASE = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay, ease: PREMIUM_EASE },
  }),
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, delay, ease: PREMIUM_EASE },
  }),
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay, ease: PREMIUM_EASE },
  }),
}

export const slideReveal = {
  hidden: { opacity: 0, x: -24 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, delay, ease: PREMIUM_EASE },
  }),
}

export const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: PREMIUM_EASE },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.4, ease: PREMIUM_EASE },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

export const cardHover = {
  rest: { y: 0, rotateX: 0, rotateY: 0 },
  hover: {
    y: -8,
    transition: { duration: 0.4, ease: PREMIUM_EASE },
  },
}
