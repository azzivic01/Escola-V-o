import React from 'react';
import { Accordion } from '../components/ui/Accordion.tsx';
import type { SiteContent } from '../content.ts';

export interface FaqProps {
  content: SiteContent['faq'];
}

export const Faq: React.FC<FaqProps> = ({ content }) => {
  if (!content.enabled) return null;

  const accordionItems = content.perguntas.map((p) => ({
    id: p.id,
    title: p.pergunta,
    content: <p className="leading-relaxed">{p.resposta}</p>,
  }));

  return (
    <section id="faq" className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span
            style={{
              color: 'var(--tema-color-accent-ink)',
              fontFamily: 'var(--tema-font-mono)',
            }}
            className="text-xs font-bold uppercase tracking-wider block mb-2"
          >
            Tire Suas Dúvidas
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
            className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            {content.description}
          </p>
        </div>

        {/* 6 FAQs Accordion */}
        <Accordion items={accordionItems} defaultOpenId="faq-requisitos" />
      </div>
    </section>
  );
};
