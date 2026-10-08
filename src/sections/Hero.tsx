import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button.tsx';
import { Badge } from '../components/ui/Badge.tsx';
import { useAppMotion } from '../components/ui/MotionContext.tsx';
import type { SiteContent } from '../content.ts';

export interface HeroProps {
  content: SiteContent['hero'];
}

export const Hero: React.FC<HeroProps> = ({ content }) => {
  const { isReducedMotion } = useAppMotion();

  if (!content.enabled) return null;

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 caderno-grid"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Kicker */}
            <div className="mb-4 inline-flex items-center gap-2">
              <span
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--tema-color-accent) 12%, var(--tema-color-surface))',
                  borderColor: 'var(--tema-color-accent)',
                  color: 'var(--tema-color-accent-ink)',
                  fontFamily: 'var(--tema-font-mono)',
                  borderRadius: 'var(--tema-radius)',
                }}
                className="px-3 py-1 text-xs font-semibold uppercase tracking-wider border"
              >
                {content.kicker}
              </span>
            </div>

            {/* Single <h1> for the entire page */}
            <h1
              style={{
                fontFamily: 'var(--tema-font-display)',
                color: 'var(--tema-color-text)',
              }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6 text-balance"
            >
              {content.title.before}{' '}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10">{content.title.highlight}</span>
                <span
                  aria-hidden="true"
                  style={{ backgroundColor: 'var(--tema-color-deco-1)' }}
                  className="absolute inset-x-[-4px] bottom-1 h-[40%] -z-0 rounded-xs opacity-90"
                />
              </span>
              {content.title.after}
            </h1>

            {/* Description */}
            <p
              style={{
                fontFamily: 'var(--tema-font-body)',
                color: 'var(--tema-color-text-muted)',
              }}
              className="text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl"
            >
              {content.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Button variant="primary" href={content.primaryAction.href}>
                {content.primaryAction.label}
              </Button>
              <Button variant="secondary" href={content.secondaryAction.href}>
                <span>{content.secondaryAction.label}</span>
                <ArrowDown size={16} aria-hidden="true" />
              </Button>
            </div>

            {/* Etiquetas fileira (post-it / etiquetas style) */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-dashed border-[var(--tema-color-border)] w-full">
              <span
                style={{
                  fontFamily: 'var(--tema-font-label)',
                  color: 'var(--tema-color-text-muted)',
                }}
                className="text-xs font-semibold mr-1"
              >
                Informações da turma:
              </span>
              {content.etiquetas.map((etiqueta, idx) => {
                const variants: Array<'deco1' | 'deco2' | 'deco3'> = ['deco1', 'deco2', 'deco3'];
                return (
                  <Badge
                    key={idx}
                    variant={variants[idx % variants.length]}
                    isMono
                  >
                    {etiqueta}
                  </Badge>
                );
              })}
            </div>
          </div>

          {/* Right Column: Hero Photo & Decorative Stationery Frame */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={isReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
              animate={isReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Tape deco at top */}
              <div
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--tema-color-deco-1) 85%, transparent)',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                }}
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 rotate-[-2deg] z-20 pointer-events-none rounded-xs border border-amber-300/60"
                aria-hidden="true"
              />

              {/* Photo Card with crisp border and solid shadow */}
              <div
                style={{
                  backgroundColor: 'var(--tema-color-surface)',
                  borderWidth: 'var(--tema-border-width)',
                  borderStyle: 'solid',
                  borderColor: 'var(--tema-color-border)',
                  borderRadius: 'var(--tema-radius-lg)',
                  boxShadow: '0 8px 0 color-mix(in srgb, var(--tema-color-border) 80%, transparent)',
                }}
                className="p-3 sm:p-4 overflow-hidden"
              >
                <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src={content.image.src}
                    alt={content.image.alt}
                    loading="eager"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="pt-3 px-1 flex items-center justify-between text-xs">
                  <span
                    style={{
                      fontFamily: 'var(--tema-font-mono)',
                      color: 'var(--tema-color-text-muted)',
                    }}
                  >
                    caderno.vão / percurso.01
                  </span>
                  <span
                    style={{
                      color: 'var(--tema-color-accent-ink)',
                      fontFamily: 'var(--tema-font-mono)',
                    }}
                    className="font-semibold flex items-center gap-1"
                  >
                    <Sparkles size={12} aria-hidden="true" />
                    <span>passo a passo</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
