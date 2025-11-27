'use client';
import { motion } from 'framer-motion';

const AnimatedCard = ({ children, className = "", hover = true, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay }}
      whileHover={hover ? {
        y: -10,
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        transition: { duration: 0.3 }
      } : {}}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
