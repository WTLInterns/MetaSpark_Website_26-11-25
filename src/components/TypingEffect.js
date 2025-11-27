'use client';
import { useState, useEffect } from 'react';

const TypingEffect = ({ 
  texts, 
  className = "", 
  speed = 100, 
  deletingSpeed = 50, 
  pauseTime = 2000,
  cursor = '|',
  showCursor = true 
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    const handleTyping = () => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        } else {
          setIsPaused(true);
        }
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isPaused ? pauseTime : isDeleting ? deletingSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, speed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {currentText}
      {showCursor && <span className="animate-pulse">{cursor}</span>}
    </span>
  );
};

export default TypingEffect;
