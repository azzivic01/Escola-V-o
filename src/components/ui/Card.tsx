import React from 'react';
import { motion } from 'motion/react';
import { useAppMotion } from './MotionContext.tsx';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  featured?: boolean;
  decoAccent?: 'none' | 'deco1' | 'deco2' | 'deco3' | 'accent';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  index = 0,
  featured = false,
  decoAccent = 'none',
}) => {
  const { isReducedMotion } = useAppMotion();

  const getBorderColor = () => {
    if (featured) return 'var(--tema-color-accent)';
    switch (decoAccent) {
      case 'deco1':
        return 'var(--tema-color-deco-1)';
      case 'deco2':
        return 'var(--tema-color-deco-2)';
      case 'deco3':
        return 'var(--tema-color-deco-3)';
      case 'accent':
        return 'var(--tema-color-accent)';
      default:
        return 'var(--tema-color-border)';
    }
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: 'var(--tema-color-surface)',
    borderWidth: 'var(--tema-border-width)',
    borderStyle: 'solid',
    borderColor: getBorderColor(),
    borderRadius: 'var(--tema-radius-lg)',
    boxShadow: featured
      ? '0 6px 0 color-mix(in srgb, var(--tema-color-accent) 25%, transparent)'
      : 'var(--tema-shadow-hard)',
  };

  return (
    <motion.div
      style={cardStyle}
      initial={isReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      whileInView={isReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.3, // --motion-duration-base
        delay: isReducedMotion ? 0 : index * 0.08, // --motion-stagger 80ms
        ease: [0.16, 1, 0.3, 1], // --motion-easing-cinematic
      }}
      className={`relative p-6 sm:p-7 flex flex-col ${className}`}
    >
      {children}
    </motion.div>
  );
};
