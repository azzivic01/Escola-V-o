import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Card } from '../components/ui/Card.tsx';
import type { SiteContent } from '../content.ts';

export interface ParaQuemProps {
  content: SiteContent['paraquem'];
}

export const ParaQuem: React.FC<ParaQuemProps> = ({ content }) => {
  if (!content.enabled) return null;

  return (
    <section id="paraquem" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span
            style={{
              color: 'var(--tema-color-accent-ink)',
              fontFamily: 'var(--tema-font-mono)',
            }}
            className="text-xs font-bold uppercase tracking-wider block mb-2"
          >
            Alinhamento inicial
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
            </span>
            {content.title.after}
          </h2>

          <p
            style={{
              fontFamily: 'var(--tema-font-body)',
              color: 'var(--tema-color-text-muted)',
            }}
            className="text-base sm:text-lg leading-relaxed"
          >
            {content.subtitle}
          </p>
        </div>

        {/* 2 Column Comparison: Para quem é vs Para quem não é */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Col 1: Para quem é */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5 pb-2 border-b border-[var(--tema-color-border)]">
              <span
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--tema-color-deco-3) 25%, var(--tema-color-surface))',
                  color: 'var(--tema-color-text)',
                  borderColor: 'var(--tema-color-deco-3)',
                }}
                className="w-7 h-7 rounded-full flex items-center justify-center border font-bold text-sm"
                aria-hidden="true"
              >
                ✓
              </span>
              <h3
                style={{
                  fontFamily: 'var(--tema-font-display)',
                  color: 'var(--tema-color-text)',
                }}
                className="text-xl font-bold tracking-tight"
              >
                Para quem este curso é ideal
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              {content.paraQuem.map((item, idx) => (
                <Card
                  key={idx}
                  index={idx}
                  decoAccent="deco3"
                  className="gap-2"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[var(--tema-color-deco-3)]"
                      aria-hidden="true"
                    />
                    <h4
                      style={{
                        fontFamily: 'var(--tema-font-display)',
                        color: 'var(--tema-color-text)',
                      }}
                      className="text-base font-bold"
                    >
                      {item.title}
                    </h4>
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--tema-font-body)',
                      color: 'var(--tema-color-text-muted)',
                    }}
                    className="text-sm leading-relaxed pl-7"
                  >
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          {/* Col 2: Para quem NÃO é */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5 pb-2 border-b border-[var(--tema-color-border)]">
              <span
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--tema-color-deco-2) 20%, var(--tema-color-surface))',
                  color: 'var(--tema-color-text)',
                  borderColor: 'var(--tema-color-deco-2)',
                }}
                className="w-7 h-7 rounded-full flex items-center justify-center border font-bold text-sm"
                aria-hidden="true"
              >
                ✕
              </span>
              <h3
                style={{
                  fontFamily: 'var(--tema-font-display)',
                  color: 'var(--tema-color-text)',
                }}
                className="text-xl font-bold tracking-tight"
              >
                Para quem este curso não é indicado
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              {content.paraQuemNao.map((item, idx) => (
                <Card
                  key={idx}
                  index={idx + 3}
                  decoAccent="deco2"
                  className="gap-2"
                >
                  <div className="flex items-center gap-2.5">
                    <XCircle
                      size={18}
                      className="shrink-0 text-[var(--tema-color-deco-2)]"
                      aria-hidden="true"
                    />
                    <h4
                      style={{
                        fontFamily: 'var(--tema-font-display)',
                        color: 'var(--tema-color-text)',
                      }}
                      className="text-base font-bold"
                    >
                      {item.title}
                    </h4>
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--tema-font-body)',
                      color: 'var(--tema-color-text-muted)',
                    }}
                    className="text-sm leading-relaxed pl-7"
                  >
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
