// src/hooks/useHorizontalScroll.js
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const useHorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return { ref: targetRef, x };
};

