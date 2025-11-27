'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxBackground = ({ children, className = "", speed = 0.5 }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 300]);

  return (
    <motion.div
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxBackground;
