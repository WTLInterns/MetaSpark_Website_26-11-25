'use client';
import { motion } from 'framer-motion';

const FloatingElement = ({ children, className = "", duration = 3, delay = 0 }) => {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
