import React from 'react';
import { motion } from 'motion/react';
import { useAppMotion } from './MotionContext.tsx';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
  ariaLabel,
}) => {
  const { isReducedMotion } = useAppMotion();

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--tema-color-accent)',
          color: 'var(--tema-color-on-accent)',
          border: 'var(--tema-border-width) solid var(--tema-color-accent)',
          boxShadow: '0 2px 0 var(--tema-color-accent-ink)',
        };
      case 'secondary':
        return {
          backgroundColor: 'var(--tema-color-surface)',
          color: 'var(--tema-color-text)',
          border: 'var(--tema-border-width) solid var(--tema-color-border)',
          boxShadow: 'none',
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          color: 'var(--tema-color-text)',
          border: 'var(--tema-border-width) solid transparent',
          boxShadow: 'none',
        };
    }
  };

  const baseStyle: React.CSSProperties = {
    ...getVariantStyles(),
    borderRadius: 'var(--tema-radius)',
    fontFamily: 'var(--tema-font-label)',
    textTransform: 'var(--tema-label-transform)' as React.CSSProperties['textTransform'],
    letterSpacing: 'var(--tema-label-tracking)',
    minHeight: '44px',
    minWidth: '44px',
    transitionDuration: 'var(--motion-duration-fast)',
    transitionTimingFunction: 'var(--motion-easing-base)',
  };

  const hoverAnimation = isReducedMotion
    ? {}
    : {
        y: -2,
        rotate: 1.5,
      };

  const tapAnimation = isReducedMotion
    ? {}
    : {
        y: 0,
        rotate: 0,
        scale: 0.98,
      };

  if (href) {
    return (
      <motion.a
        href={href}
        style={baseStyle}
        whileHover={hoverAnimation}
        whileTap={tapAnimation}
        transition={{
          duration: 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
        aria-label={ariaLabel}
        className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold cursor-pointer select-none no-underline ${className}`}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      style={baseStyle}
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
      transition={{
        duration: 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      aria-label={ariaLabel}
      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold cursor-pointer select-none ${className}`}
    >
      {children}
    </motion.button>
  );
};
