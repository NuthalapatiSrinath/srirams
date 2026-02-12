// Optimized motion configuration for better performance
// Reduces motion complexity for smoother rendering

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -100px 0px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "0px 0px -100px 0px" },
  transition: { duration: 0.5 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "0px 0px -100px 0px" },
  transition: { duration: 0.4, ease: "easeOut" },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "0px 0px -100px 0px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const slideInRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "0px 0px -100px 0px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

// Stagger children animation
export const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: "0px 0px -50px 0px" },
  transition: { staggerChildren: 0.1 },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};
