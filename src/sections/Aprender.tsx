import React from 'react';
import { ChecklistAprender } from '../components/ui/ChecklistAprender.tsx';
import type { SiteContent } from '../content.ts';

export interface AprenderProps {
  content: SiteContent['aprender'];
}

export const Aprender: React.FC<AprenderProps> = ({ content }) => {
  if (!content.enabled) return null;

  return (
    <section
      id="aprender"
      className="py-20 sm:py-28 relative"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--tema-color-bg) 60%, var(--tema-color-surface))',
        borderTopWidth: 'var(--tema-border-width)',
        borderBottomWidth: 'var(--tema-border-width)',
        borderTopStyle: 'solid',
        borderBottomStyle: 'solid',
        borderColor: 'var(--tema-color-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span
            style={{
              color: 'var(--tema-color-accent-ink)',
              fontFamily: 'var(--tema-font-mono)',
            }}
            className="text-xs font-bold uppercase tracking-wider block mb-2"
          >
            Conteúdo e Habilidades
          </span>

          <h2
            style={{
              fontFamily: 'var(--tema-font-display)',
              color: 'var(--tema-color-text)',
            }}
            className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-4"
          >
            {content.title.before}{' '}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">{content.title.highlight}</span>
              <span
                aria-hidden="true"
                style={{ backgroundColor: 'var(--tema-color-deco-1)' }}
                className="absolute inset-x-[-4px] bottom-1 h-[40%] -z-0 rounded-xs opacity-90"
              />
            </span>{' '}
            {content.title.after}
          </h2>

          <p
            style={{
              fontFamily: 'var(--tema-font-body)',
              color: 'var(--tema-color-text-muted)',
            }}
            className="text-base sm:text-lg leading-relaxed"
          >
            {content.description}
          </p>
        </div>

        {/* Animated Drawing Checklist */}
        <ChecklistAprender itens={content.itens} />
      </div>
    </section>
  );
};
