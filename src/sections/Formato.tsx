import React from 'react';
import { Card } from '../components/ui/Card.tsx';
import { Video, MessageSquare, FileText } from 'lucide-react';
import type { SiteContent } from '../content.ts';

export interface FormatoProps {
  content: SiteContent['formato'];
}

export const Formato: React.FC<FormatoProps> = ({ content }) => {
  if (!content.enabled) return null;

  const getIcon = (id: string) => {
    switch (id) {
      case 'formato-aulas':
        return <Video size={22} className="text-[var(--tema-color-accent-ink)]" aria-hidden="true" />;
      case 'formato-comunidade':
        return <MessageSquare size={22} className="text-[var(--tema-color-accent-ink)]" aria-hidden="true" />;
      case 'formato-material':
      default:
        return <FileText size={22} className="text-[var(--tema-color-accent-ink)]" aria-hidden="true" />;
    }
  };

  return (
    <section id="formato" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span
            style={{
              color: 'var(--tema-color-accent-ink)',
              fontFamily: 'var(--tema-font-mono)',
            }}
            className="text-xs font-bold uppercase tracking-wider block mb-2"
          >
            Dinâmica de Estudos
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

        {/* Grid with 3 Format Blocks and Photo Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 3 Blocks */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {content.blocos.map((bloco, idx) => (
              <Card key={bloco.id} index={idx} className="gap-3">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div
                      style={{
                        backgroundColor: 'color-mix(in srgb, var(--tema-color-accent) 12%, var(--tema-color-surface))',
                        borderRadius: 'var(--tema-radius)',
                        borderColor: 'var(--tema-color-accent)',
                      }}
                      className="w-10 h-10 flex items-center justify-center border shrink-0"
                    >
                      {getIcon(bloco.id)}
                    </div>
                    <h3
                      style={{
                        fontFamily: 'var(--tema-font-display)',
                        color: 'var(--tema-color-text)',
                      }}
                      className="text-lg font-bold"
                    >
                      {bloco.titulo}
                    </h3>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--tema-font-mono)',
                      backgroundColor: 'color-mix(in srgb, var(--tema-color-deco-1) 30%, var(--tema-color-surface))',
                      borderColor: 'var(--tema-color-border)',
                      borderRadius: 'var(--tema-radius)',
                    }}
                    className="px-2.5 py-1 text-xs font-semibold border"
                  >
                    {bloco.marcador}
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: 'var(--tema-font-body)',
                    color: 'var(--tema-color-text-muted)',
                  }}
                  className="text-sm leading-relaxed"
                >
                  {bloco.descricao}
                </p>
              </Card>
            ))}
          </div>

          {/* Photo Visual (3rd photo, only used here) */}
          <div className="lg:col-span-5">
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
              <div className="aspect-16/9 rounded-xl overflow-hidden bg-slate-100">
                <img
                  src={content.image.src}
                  alt={content.image.alt}
                  loading="lazy"
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
                  ambiente.foco / rotina
                </span>
                <span
                  style={{
                    fontFamily: 'var(--tema-font-mono)',
                    color: 'var(--tema-color-accent-ink)',
                  }}
                  className="font-medium"
                >
                  sem correria
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
