import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'motion/react';
import { Check, ChevronDown, Clock, BookOpen } from 'lucide-react';
import { useAppMotion } from './MotionContext.tsx';
import { IndicadorModulo } from './IndicadorModulo.tsx';

export interface ModuloItem {
  numero: number;
  titulo: string;
  resumo: string;
  duracao: string;
  aulas: string[];
}

export interface TrilhaModulosProps {
  modulos: ModuloItem[];
}

export const TrilhaModulos: React.FC<TrilhaModulosProps> = ({ modulos }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isReducedMotion } = useAppMotion();

  // Scroll tracking across the trail container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 70%'],
  });

  const [activeThresholds, setActiveThresholds] = useState<boolean[]>([
    true,
    false,
    false,
    false,
    false,
  ]);
  const [currentModuleNumber, setCurrentModuleNumber] = useState<number>(1);
  const [isSectionVisible, setIsSectionVisible] = useState<boolean>(false);
  const [openModules, setOpenModules] = useState<Record<number, boolean>>({
    1: true,
  });

  // Thresholds for each of the 5 modules along the scroll progression
  const thresholds = [0.05, 0.25, 0.48, 0.7, 0.9];

  useEffect(() => {
    if (isReducedMotion) {
      setActiveThresholds([true, true, true, true, true]);
      return;
    }

    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const newActive = thresholds.map((t) => latest >= t);
      // Ensure first is active once in view
      if (latest > 0) newActive[0] = true;
      setActiveThresholds(newActive);

      // Determine active module index for the polite indicator
      let activeIdx = 1;
      for (let i = thresholds.length - 1; i >= 0; i--) {
        if (latest >= thresholds[i]) {
          activeIdx = i + 1;
          break;
        }
      }
      setCurrentModuleNumber((prev) => (prev !== activeIdx ? activeIdx : prev));
    });

    return () => unsubscribe();
  }, [scrollYProgress, isReducedMotion]);

  const toggleModuleOpen = (numero: number) => {
    setOpenModules((prev) => ({
      ...prev,
      [numero]: !prev[numero],
    }));
  };

  return (
    <div
      ref={containerRef}
      className="relative my-8"
      onMouseEnter={() => setIsSectionVisible(true)}
    >
      {/* Intersection observer trigger for indicator */}
      <motion.div
        onViewportEnter={() => setIsSectionVisible(true)}
        onViewportLeave={() => setIsSectionVisible(false)}
        viewport={{ amount: 0.1 }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Floating indicator */}
      <IndicadorModulo
        currentModule={currentModuleNumber}
        totalModules={modulos.length}
        isVisible={isSectionVisible}
      />

      <div className="relative max-w-4xl mx-auto pl-4 sm:pl-16">
        {/* Continuous Road Line SVG */}
        <div
          className="absolute left-7 sm:left-[51px] top-8 bottom-8 w-1 pointer-events-none -translate-x-1/2"
          aria-hidden="true"
        >
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 4 100"
            fill="none"
          >
            {/* Dashed baseline road */}
            <line
              x1="2"
              y1="0"
              x2="2"
              y2="100"
              stroke="var(--tema-color-border)"
              strokeWidth="3"
              strokeDasharray="4 4"
            />
            {/* Animated solid road */}
            <motion.line
              x1="2"
              y1="0"
              x2="2"
              y2="100"
              stroke="var(--tema-color-accent)"
              strokeWidth="3"
              style={{
                pathLength: isReducedMotion ? 1 : scrollYProgress,
              }}
            />
          </svg>
        </div>

        {/* Milestones and Cards */}
        <div className="flex flex-col gap-10 sm:gap-14">
          {modulos.map((modulo, idx) => {
            const isLit = isReducedMotion ? true : activeThresholds[idx];
            const isOpen = Boolean(openModules[modulo.numero]);
            const headingId = `modulo-heading-${modulo.numero}`;
            const panelId = `modulo-panel-${modulo.numero}`;

            return (
              <div
                key={modulo.numero}
                className="relative flex items-start gap-4 sm:gap-8 group"
              >
                {/* Milestone Node */}
                <div className="relative shrink-0 z-10 flex flex-col items-center">
                  <motion.button
                    type="button"
                    onClick={() => toggleModuleOpen(modulo.numero)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    aria-label={`Módulo ${modulo.numero}: ${modulo.titulo}. Clique para alternar detalhes.`}
                    whileHover={
                      isReducedMotion
                        ? {}
                        : {
                            scale: 1.08,
                          }
                    }
                    whileTap={isReducedMotion ? {} : { scale: 0.95 }}
                    animate={
                      isReducedMotion
                        ? {}
                        : {
                            scale: isLit ? [1, 1.15, 1] : 1,
                          }
                    }
                    transition={{
                      type: 'spring',
                      stiffness: 220,
                      damping: 25,
                    }}
                    style={{
                      backgroundColor: isLit
                        ? 'var(--tema-color-accent)'
                        : 'var(--tema-color-surface)',
                      borderColor: isLit
                        ? 'var(--tema-color-accent)'
                        : 'var(--tema-color-border)',
                      borderWidth: 'var(--tema-border-width)',
                      borderStyle: 'solid',
                      color: isLit
                        ? 'var(--tema-color-on-accent)'
                        : 'var(--tema-color-text)',
                      borderRadius: '50%',
                      boxShadow: isLit
                        ? '0 0 0 5px color-mix(in srgb, var(--tema-color-accent) 22%, transparent)'
                        : 'none',
                      minWidth: '44px',
                      minHeight: '44px',
                      width: '46px',
                      height: '46px',
                      fontFamily: 'var(--tema-font-mono)',
                    }}
                    className="flex items-center justify-center font-bold text-sm cursor-pointer select-none transition-colors duration-200"
                  >
                    {isLit ? (
                      <span className="flex items-center justify-center">
                        <Check size={18} strokeWidth={3} />
                      </span>
                    ) : (
                      <span>{modulo.numero}</span>
                    )}
                  </motion.button>

                  <span
                    style={{
                      fontFamily: 'var(--tema-font-mono)',
                      color: isLit
                        ? 'var(--tema-color-accent-ink)'
                        : 'var(--tema-color-text-muted)',
                    }}
                    className="mt-1 text-[11px] font-semibold tracking-wider uppercase"
                  >
                    M0{modulo.numero}
                  </span>
                </div>

                {/* Module Card alongside */}
                <div
                  style={{
                    backgroundColor: 'var(--tema-color-surface)',
                    borderWidth: 'var(--tema-border-width)',
                    borderStyle: 'solid',
                    borderColor: isLit
                      ? 'var(--tema-color-accent)'
                      : 'var(--tema-color-border)',
                    borderRadius: 'var(--tema-radius-lg)',
                    boxShadow: isLit
                      ? '0 6px 0 color-mix(in srgb, var(--tema-color-accent) 20%, transparent)'
                      : 'var(--tema-shadow-hard)',
                    transitionDuration: 'var(--motion-duration-base)',
                  }}
                  className="flex-1 p-5 sm:p-7 overflow-hidden transition-colors"
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span
                        style={{
                          backgroundColor: isLit
                            ? 'color-mix(in srgb, var(--tema-color-accent) 15%, var(--tema-color-surface))'
                            : 'color-mix(in srgb, var(--tema-color-border) 35%, var(--tema-color-surface))',
                          color: isLit
                            ? 'var(--tema-color-accent-ink)'
                            : 'var(--tema-color-text-muted)',
                          fontFamily: 'var(--tema-font-mono)',
                          borderRadius: 'var(--tema-radius)',
                        }}
                        className="px-2.5 py-0.5 text-xs font-semibold"
                      >
                        Etapa 0{modulo.numero}
                      </span>

                      <div
                        style={{
                          color: 'var(--tema-color-text-muted)',
                          fontFamily: 'var(--tema-font-mono)',
                        }}
                        className="flex items-center gap-1.5 text-xs font-medium"
                      >
                        <Clock size={13} aria-hidden="true" />
                        <span>Duração: {modulo.duracao}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      id={headingId}
                      onClick={() => toggleModuleOpen(modulo.numero)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      style={{
                        color: 'var(--tema-color-accent-ink)',
                        fontFamily: 'var(--tema-font-label)',
                        minHeight: '44px',
                      }}
                      className="self-start sm:self-auto inline-flex items-center gap-1.5 text-xs font-semibold cursor-pointer px-2 py-1 rounded hover:underline"
                    >
                      <span>{isOpen ? 'Ocultar aulas' : 'Ver aulas'}</span>
                      <span
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transitionDuration: 'var(--motion-duration-fast)',
                        }}
                        className="inline-block"
                        aria-hidden="true"
                      >
                        <ChevronDown size={15} />
                      </span>
                    </button>
                  </div>

                  {/* Title & 2-line summary */}
                  <h3
                    style={{
                      fontFamily: 'var(--tema-font-display)',
                      color: 'var(--tema-color-text)',
                    }}
                    className="text-lg sm:text-xl font-bold tracking-tight mb-2"
                  >
                    {modulo.titulo}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--tema-font-body)',
                      color: 'var(--tema-color-text-muted)',
                    }}
                    className="text-sm sm:text-base leading-relaxed"
                  >
                    {modulo.resumo}
                  </p>

                  {/* Accordion content: list of lessons */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={headingId}
                        initial={
                          isReducedMotion ? { opacity: 1 } : { height: 0, opacity: 0 }
                        }
                        animate={
                          isReducedMotion
                            ? { opacity: 1 }
                            : { height: 'auto', opacity: 1 }
                        }
                        exit={
                          isReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }
                        }
                        transition={{
                          duration: 0.25,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div
                          style={{
                            borderTopWidth: 'var(--tema-border-width)',
                            borderTopStyle: 'dashed',
                            borderTopColor: 'var(--tema-color-border)',
                          }}
                          className="mt-4 pt-4 flex flex-col gap-2.5"
                        >
                          <span
                            style={{
                              fontFamily: 'var(--tema-font-label)',
                              color: 'var(--tema-color-text)',
                            }}
                            className="text-xs font-bold uppercase tracking-wider block"
                          >
                            Aulas deste módulo:
                          </span>

                          <ul className="flex flex-col gap-2" role="list">
                            {modulo.aulas.map((aula, aIdx) => (
                              <li
                                key={aIdx}
                                style={{
                                  backgroundColor:
                                    'color-mix(in srgb, var(--tema-color-bg) 65%, var(--tema-color-surface))',
                                  borderColor: 'var(--tema-color-border)',
                                  borderWidth: '1px',
                                  borderStyle: 'solid',
                                  borderRadius: 'var(--tema-radius)',
                                }}
                                className="flex items-center gap-2.5 px-3 py-2 text-xs sm:text-sm font-medium"
                              >
                                <span
                                  style={{
                                    color: 'var(--tema-color-accent-ink)',
                                    fontFamily: 'var(--tema-font-mono)',
                                  }}
                                  className="font-semibold shrink-0"
                                >
                                  {modulo.numero}.{aIdx + 1}
                                </span>
                                <BookOpen
                                  size={14}
                                  className="shrink-0 text-slate-400"
                                  aria-hidden="true"
                                />
                                <span className="leading-snug">{aula}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
