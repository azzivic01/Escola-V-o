import React from 'react';
import { useAppMotion } from './MotionContext.tsx';
import { motion, AnimatePresence } from 'motion/react';

export interface IndicadorModuloProps {
  currentModule: number;
  totalModules: number;
  isVisible: boolean;
}

export const IndicadorModulo: React.FC<IndicadorModuloProps> = ({
  currentModule,
  totalModules,
  isVisible,
}) => {
  const { isReducedMotion } = useAppMotion();

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-40 select-none pointer-events-auto"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence>
        <motion.div
          initial={isReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10, scale: 0.95 }}
          animate={isReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          exit={isReducedMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          style={{
            backgroundColor: 'var(--tema-color-surface)',
            borderColor: 'var(--tema-color-accent)',
            borderWidth: 'var(--tema-border-width)',
            borderStyle: 'solid',
            borderRadius: 'var(--tema-radius)',
            color: 'var(--tema-color-text)',
            boxShadow: '0 4px 16px color-mix(in srgb, var(--tema-color-accent) 18%, transparent)',
          }}
          className="flex items-center gap-3 px-4 py-2.5"
        >
          {/* Status Dot with pulse only when not reduced */}
          <div
            style={{
              backgroundColor: 'var(--tema-color-accent)',
            }}
            className="w-2.5 h-2.5 rounded-full shrink-0"
            aria-hidden="true"
          />

          <span
            style={{
              fontFamily: 'var(--tema-font-label)',
              fontSize: '13px',
              letterSpacing: 'var(--tema-label-tracking)',
            }}
            className="font-medium"
          >
            Você está no{' '}
            <strong
              style={{
                fontFamily: 'var(--tema-font-mono)',
                color: 'var(--tema-color-accent-ink)',
              }}
              className="font-semibold"
            >
              módulo {currentModule}
            </strong>{' '}
            de {totalModules}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
