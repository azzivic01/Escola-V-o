import React from 'react';
import { motion } from 'motion/react';
import { useAppMotion } from './MotionContext.tsx';

export interface ChecklistItem {
  id: string;
  texto: string;
  grifo: string;
}

export interface ChecklistAprenderProps {
  itens: ChecklistItem[];
  className?: string;
}

export const ChecklistAprender: React.FC<ChecklistAprenderProps> = ({
  itens,
  className = '',
}) => {
  const { isReducedMotion } = useAppMotion();

  return (
    <ul className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`} role="list">
      {itens.map((item, index) => {
        // Split text around the grifo phrase
        const parts = item.texto.split(item.grifo);
        const hasGrifo = parts.length > 1;

        return (
          <motion.li
            key={item.id}
            initial={isReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            whileInView={isReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.3,
              delay: isReducedMotion ? 0 : index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              backgroundColor: 'var(--tema-color-surface)',
              borderWidth: 'var(--tema-border-width)',
              borderStyle: 'solid',
              borderColor: 'var(--tema-color-border)',
              borderRadius: 'var(--tema-radius)',
            }}
            className="p-4 sm:p-5 flex items-start gap-3.5 shadow-sm"
          >
            {/* SVG animated check */}
            <div
              style={{
                backgroundColor: 'color-mix(in srgb, var(--tema-color-accent) 10%, var(--tema-color-surface))',
                borderRadius: '8px',
                border: '1.5px solid var(--tema-color-accent)',
              }}
              className="shrink-0 w-8 h-8 flex items-center justify-center mt-0.5"
              aria-hidden="true"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--tema-color-accent-ink)"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  d="M20 6L9 17L4 12"
                  initial={isReducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: isReducedMotion ? 0.1 : 0.45,
                    delay: isReducedMotion ? 0 : index * 0.08 + 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              </svg>
            </div>

            {/* Item text with animated highlighter underneath */}
            <div
              style={{
                fontFamily: 'var(--tema-font-body)',
                color: 'var(--tema-color-text)',
              }}
              className="text-sm sm:text-base leading-relaxed flex-1 font-medium"
            >
              {hasGrifo ? (
                <>
                  {parts[0]}
                  <span className="relative inline-block font-semibold">
                    <span className="relative z-10">{item.grifo}</span>
                    <motion.span
                      aria-hidden="true"
                      initial={isReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: isReducedMotion ? 0.1 : 0.5,
                        delay: isReducedMotion ? 0 : index * 0.08 + 0.3,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      style={{
                        backgroundColor: 'var(--tema-color-deco-1)',
                        transformOrigin: '0% 50%',
                      }}
                      className="absolute inset-x-0 bottom-0.5 h-[55%] -z-0 opacity-80 rounded-sm"
                    />
                  </span>
                  {parts[1]}
                </>
              ) : (
                <span>{item.texto}</span>
              )}
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
};
