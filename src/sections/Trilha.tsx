import React from 'react';
import { TrilhaModulos } from '../components/ui/TrilhaModulos.tsx';
import type { SiteContent } from '../content.ts';

export interface TrilhaProps {
  content: SiteContent['trilha'];
}

export const Trilha: React.FC<TrilhaProps> = ({ content }) => {
  if (!content.enabled) return null;

  return (
    <section id="trilha" className="py-20 sm:py-28 relative caderno-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span
            style={{
              color: 'var(--tema-color-accent-ink)',
              fontFamily: 'var(--tema-font-mono)',
            }}
            className="text-xs font-bold uppercase tracking-wider block mb-2"
          >
            Estrutura Pedagógica
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

        {/* Trilha de Módulos Signature Component */}
        <TrilhaModulos modulos={content.modulos} />
      </div>
    </section>
  );
};
