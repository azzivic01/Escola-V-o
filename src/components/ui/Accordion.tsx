import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useAppMotion } from './MotionContext.tsx';

export interface AccordionItemData {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenId?: string;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenId,
  className = '',
}) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || null);
  const { isReducedMotion } = useAppMotion();

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`flex flex-col gap-3.5 ${className}`}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const headingId = `accordion-heading-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div
            key={item.id}
            style={{
              backgroundColor: 'var(--tema-color-surface)',
              borderWidth: 'var(--tema-border-width)',
              borderStyle: 'solid',
              borderColor: isOpen ? 'var(--tema-color-accent)' : 'var(--tema-color-border)',
              borderRadius: 'var(--tema-radius)',
              transitionDuration: 'var(--motion-duration-fast)',
            }}
            className="overflow-hidden"
          >
            <button
              id={headingId}
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              style={{
                fontFamily: 'var(--tema-font-body)',
                color: 'var(--tema-color-text)',
                minHeight: '44px',
              }}
              className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold text-base sm:text-lg cursor-pointer"
            >
              <span>{item.title}</span>
              <span
                style={{
                  color: isOpen ? 'var(--tema-color-accent-ink)' : 'var(--tema-color-text-muted)',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transitionDuration: 'var(--motion-duration-base)',
                  transitionTimingFunction: 'var(--motion-easing-cinematic)',
                }}
                className="shrink-0 flex items-center justify-center w-7 h-7"
                aria-hidden="true"
              >
                <ChevronDown size={20} />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  initial={isReducedMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                  animate={isReducedMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                  exit={isReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="overflow-hidden"
                >
                  <div
                    style={{
                      borderTopWidth: 'var(--tema-border-width)',
                      borderTopStyle: 'dashed',
                      borderTopColor: 'var(--tema-color-border)',
                      color: 'var(--tema-color-text)',
                    }}
                    className="p-5 pt-4 text-sm sm:text-base leading-relaxed"
                  >
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
