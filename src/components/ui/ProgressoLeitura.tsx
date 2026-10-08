import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { useAppMotion } from './MotionContext.tsx';

export const ProgressoLeitura: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const { isReducedMotion } = useAppMotion();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      role="progressbar"
      aria-label="Progresso de leitura da página"
      aria-valuemin={0}
      aria-valuemax={100}
      style={{
        backgroundColor: 'color-mix(in srgb, var(--tema-color-border) 40%, transparent)',
      }}
      className="fixed top-0 left-0 right-0 z-50 h-1 pointer-events-none"
    >
      <motion.div
        style={{
          scaleX: isReducedMotion ? scrollYProgress : scaleX,
          transformOrigin: '0% 50%',
          backgroundColor: 'var(--tema-color-accent)',
        }}
        className="w-full h-full"
      />
    </div>
  );
};
