import React from 'react';
import { EyeOff, Eye } from 'lucide-react';
import { useAppMotion } from '../components/ui/MotionContext.tsx';
import type { SiteContent } from '../content.ts';

export interface RodapeProps {
  content: SiteContent['rodape'];
}

export const Rodape: React.FC<RodapeProps> = ({ content }) => {
  const { isReducedMotion, toggleReducedMotion } = useAppMotion();

  if (!content.enabled) return null;

  return (
    <footer
      id="rodape"
      style={{
        backgroundColor: 'var(--tema-color-surface)',
        borderTopWidth: 'var(--tema-border-width)',
        borderTopStyle: 'solid',
        borderTopColor: 'var(--tema-color-border)',
      }}
      className="pt-16 pb-12 w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[var(--tema-color-border)]">
          {/* Brand info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a
              href="/"
              style={{
                fontFamily: 'var(--tema-font-display)',
                color: 'var(--tema-color-text)',
              }}
              className="text-2xl font-extrabold tracking-tight mb-3 flex items-center gap-1.5 focus-visible:rounded"
            >
              <span>{content.marca}</span>
              <span
                style={{
                  backgroundColor: 'var(--tema-color-accent)',
                }}
                className="w-2 h-2 rounded-full inline-block"
                aria-hidden="true"
              />
            </a>

            <p
              style={{
                fontFamily: 'var(--tema-font-body)',
                color: 'var(--tema-color-text-muted)',
              }}
              className="text-sm leading-relaxed max-w-sm mb-6"
            >
              {content.descricao}
            </p>

            {/* Accessible Toggle for Reduced Motion */}
            <button
              type="button"
              onClick={toggleReducedMotion}
              aria-pressed={isReducedMotion}
              style={{
                backgroundColor: isReducedMotion
                  ? 'color-mix(in srgb, var(--tema-color-accent) 15%, var(--tema-color-surface))'
                  : 'var(--tema-color-surface)',
                borderColor: isReducedMotion
                  ? 'var(--tema-color-accent)'
                  : 'var(--tema-color-border)',
                borderWidth: 'var(--tema-border-width)',
                borderStyle: 'solid',
                borderRadius: 'var(--tema-radius)',
                color: isReducedMotion
                  ? 'var(--tema-color-accent-ink)'
                  : 'var(--tema-color-text)',
                fontFamily: 'var(--tema-font-label)',
                minHeight: '44px',
              }}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold cursor-pointer hover:bg-slate-50 transition-colors"
            >
              {isReducedMotion ? (
                <>
                  <Eye size={15} aria-hidden="true" />
                  <span>{content.animacoesReduzidasLabel}</span>
                </>
              ) : (
                <>
                  <EyeOff size={15} aria-hidden="true" />
                  <span>{content.reduzirAnimacoesLabel}</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3
              style={{
                fontFamily: 'var(--tema-font-label)',
                color: 'var(--tema-color-text)',
              }}
              className="text-xs font-bold uppercase tracking-wider mb-4"
            >
              Navegação
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {content.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: 'var(--tema-font-body)',
                      color: 'var(--tema-color-text-muted)',
                    }}
                    className="text-sm hover:text-[var(--tema-color-text)] hover:underline transition-colors focus-visible:rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional Data Markers */}
          <div className="md:col-span-4">
            <h3
              style={{
                fontFamily: 'var(--tema-font-label)',
                color: 'var(--tema-color-text)',
              }}
              className="text-xs font-bold uppercase tracking-wider mb-4"
            >
              Dados Institucionais
            </h3>
            <div
              style={{
                fontFamily: 'var(--tema-font-mono)',
                color: 'var(--tema-color-text-muted)',
              }}
              className="flex flex-col gap-2 text-xs"
            >
              <div>
                <span className="font-semibold text-slate-700">Registro:</span>{' '}
                <span>{content.cnpj}</span>
              </div>
              <div>
                <span className="font-semibold text-slate-700">Atendimento:</span>{' '}
                <span>{content.contato}</span>
              </div>
              <div>
                <span className="font-semibold text-slate-700">Endereço:</span>{' '}
                <span>{content.endereco}</span>
              </div>
              <div>
                <span className="font-semibold text-slate-700">Horário:</span>{' '}
                <span>{content.horario}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p
            style={{
              fontFamily: 'var(--tema-font-body)',
              color: 'var(--tema-color-text-muted)',
            }}
          >
            © {new Date().getFullYear()} {content.marca}. Todos os direitos reservados.
          </p>

          <span
            style={{
              fontFamily: 'var(--tema-font-mono)',
              color: 'var(--tema-color-text-muted)',
            }}
            className="text-[11px]"
          >
            Educação prática para adultos sem fórmulas mágicas.
          </span>
        </div>
      </div>
    </footer>
  );
};
