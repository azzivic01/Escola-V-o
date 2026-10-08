import React from 'react';
import { Button } from '../components/ui/Button.tsx';
import type { SiteContent } from '../content.ts';

export interface CtaFinalProps {
  content: SiteContent['ctafinal'];
}

export const CtaFinal: React.FC<CtaFinalProps> = ({ content }) => {
  if (!content.enabled) return null;

  return (
    <section id="ctafinal" className="py-20 sm:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          style={{
            backgroundColor: 'var(--tema-color-surface)',
            borderWidth: 'var(--tema-border-width)',
            borderStyle: 'solid',
            borderColor: 'var(--tema-color-accent)',
            borderRadius: 'var(--tema-radius-lg)',
            boxShadow: '0 8px 0 color-mix(in srgb, var(--tema-color-accent) 22%, transparent)',
          }}
          className="p-8 sm:p-14 text-center relative overflow-hidden caderno-grid"
        >
          {/* Subtle decorative post-it tag in corner */}
          <div
            style={{
              backgroundColor: 'var(--tema-color-deco-1)',
              fontFamily: 'var(--tema-font-mono)',
              color: 'var(--tema-color-text)',
            }}
            className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider mb-6 rounded-sm shadow-xs -rotate-1"
          >
            Sua vez de começar
          </div>

          <h2
            style={{
              fontFamily: 'var(--tema-font-display)',
              color: 'var(--tema-color-text)',
            }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 max-w-3xl mx-auto"
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
          </h2>

          <p
            style={{
              fontFamily: 'var(--tema-font-body)',
              color: 'var(--tema-color-text-muted)',
            }}
            className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-9"
          >
            {content.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" href={content.primaryAction.href}>
              {content.primaryAction.label}
            </Button>
            <Button variant="secondary" href={content.secondaryAction.href}>
              {content.secondaryAction.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
