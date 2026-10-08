import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Button } from './Button.tsx';
import { useAppMotion } from './MotionContext.tsx';

export interface PlanoItem {
  id: string;
  nome: string;
  precoMensal: string;
  precoAnual: string;
  periodoMensal: string;
  periodoAnual: string;
  descricao: string;
  destaque: boolean;
  beneficios: string[];
  action: {
    label: string;
    href: string;
  };
}

export interface PlanosProps {
  planos: PlanoItem[];
  opcoesPeriodo: {
    mensal: string;
    anual: string;
  };
}

export const Planos: React.FC<PlanosProps> = ({ planos, opcoesPeriodo }) => {
  const [isAnnual, setIsAnnual] = useState(false);
  const { isReducedMotion } = useAppMotion();

  return (
    <div className="flex flex-col items-center w-full">
      {/* Toggle Mensal / Anual */}
      <div
        style={{
          backgroundColor: 'color-mix(in srgb, var(--tema-color-border) 40%, var(--tema-color-surface))',
          borderRadius: 'var(--tema-radius)',
          borderWidth: 'var(--tema-border-width)',
          borderStyle: 'solid',
          borderColor: 'var(--tema-color-border)',
        }}
        className="inline-flex items-center p-1 mb-10"
        role="group"
        aria-label="Ciclo de cobrança"
      >
        <button
          type="button"
          onClick={() => setIsAnnual(false)}
          aria-pressed={!isAnnual}
          style={{
            backgroundColor: !isAnnual ? 'var(--tema-color-surface)' : 'transparent',
            color: !isAnnual ? 'var(--tema-color-text)' : 'var(--tema-color-text-muted)',
            borderRadius: 'calc(var(--tema-radius) - 4px)',
            boxShadow: !isAnnual ? '0 2px 4px color-mix(in srgb, var(--tema-color-text) 8%, transparent)' : 'none',
            fontFamily: 'var(--tema-font-label)',
            minHeight: '44px',
          }}
          className="px-4 py-2 text-xs sm:text-sm font-semibold cursor-pointer select-none transition-all duration-150"
        >
          {opcoesPeriodo.mensal}
        </button>

        <button
          type="button"
          onClick={() => setIsAnnual(true)}
          aria-pressed={isAnnual}
          style={{
            backgroundColor: isAnnual ? 'var(--tema-color-surface)' : 'transparent',
            color: isAnnual ? 'var(--tema-color-text)' : 'var(--tema-color-text-muted)',
            borderRadius: 'calc(var(--tema-radius) - 4px)',
            boxShadow: isAnnual ? '0 2px 4px color-mix(in srgb, var(--tema-color-text) 8%, transparent)' : 'none',
            fontFamily: 'var(--tema-font-label)',
            minHeight: '44px',
          }}
          className="px-4 py-2 text-xs sm:text-sm font-semibold cursor-pointer select-none transition-all duration-150 flex items-center gap-1.5"
        >
          <span>{opcoesPeriodo.anual}</span>
          <span
            style={{
              backgroundColor: 'var(--tema-color-deco-1)',
              color: 'var(--tema-color-text)',
              borderRadius: '6px',
              fontFamily: 'var(--tema-font-mono)',
            }}
            className="px-1.5 py-0.5 text-[10px] font-bold"
          >
            economize
          </span>
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl items-stretch">
        {planos.map((plano, idx) => {
          const price = isAnnual ? plano.precoAnual : plano.precoMensal;
          const period = isAnnual ? plano.periodoAnual : plano.periodoMensal;

          return (
            <motion.div
              key={plano.id}
              initial={isReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={isReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.3,
                delay: isReducedMotion ? 0 : idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                backgroundColor: 'var(--tema-color-surface)',
                borderWidth: 'var(--tema-border-width)',
                borderStyle: 'solid',
                borderColor: plano.destaque
                  ? 'var(--tema-color-accent)'
                  : 'var(--tema-color-border)',
                borderRadius: 'var(--tema-radius-lg)',
                boxShadow: plano.destaque
                  ? '0 8px 0 color-mix(in srgb, var(--tema-color-accent) 20%, transparent)'
                  : 'var(--tema-shadow-hard)',
              }}
              className={`relative flex flex-col p-6 sm:p-8 ${
                plano.destaque ? 'md:-translate-y-2' : ''
              }`}
            >
              {/* Highlight ribbon / tag */}
              {plano.destaque && (
                <div
                  style={{
                    backgroundColor: 'var(--tema-color-accent)',
                    color: 'var(--tema-color-on-accent)',
                    borderRadius: 'var(--tema-radius)',
                    fontFamily: 'var(--tema-font-label)',
                  }}
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-sm"
                >
                  Mais Escolhido
                </div>
              )}

              {/* Title & Desc */}
              <div className="mb-5">
                <h3
                  style={{
                    fontFamily: 'var(--tema-font-display)',
                    color: 'var(--tema-color-text)',
                  }}
                  className="text-xl font-bold tracking-tight mb-2"
                >
                  {plano.nome}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--tema-font-body)',
                    color: 'var(--tema-color-text-muted)',
                  }}
                  className="text-xs sm:text-sm leading-relaxed min-h-[40px]"
                >
                  {plano.descricao}
                </p>
              </div>

              {/* Price display with strictly [R$ —] */}
              <div
                style={{
                  borderTopWidth: 'var(--tema-border-width)',
                  borderTopStyle: 'dashed',
                  borderTopColor: 'var(--tema-color-border)',
                  borderBottomWidth: 'var(--tema-border-width)',
                  borderBottomStyle: 'dashed',
                  borderBottomColor: 'var(--tema-color-border)',
                }}
                className="py-4 my-2 flex items-baseline gap-2"
              >
                <span
                  style={{
                    fontFamily: 'var(--tema-font-mono)',
                    color: plano.destaque
                      ? 'var(--tema-color-accent-ink)'
                      : 'var(--tema-color-text)',
                  }}
                  className="text-3xl sm:text-4xl font-extrabold tracking-tight"
                >
                  {price}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--tema-font-label)',
                    color: 'var(--tema-color-text-muted)',
                  }}
                  className="text-xs sm:text-sm font-medium"
                >
                  {period}
                </span>
              </div>

              {/* Benefits list */}
              <ul className="flex-1 flex flex-col gap-3 my-6" role="list">
                {plano.beneficios.map((beneficio, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm font-medium"
                    style={{
                      color: 'var(--tema-color-text)',
                      fontFamily: 'var(--tema-font-body)',
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: plano.destaque
                          ? 'var(--tema-color-accent)'
                          : 'color-mix(in srgb, var(--tema-color-border) 50%, var(--tema-color-surface))',
                        color: plano.destaque
                          ? 'var(--tema-color-on-accent)'
                          : 'var(--tema-color-text)',
                      }}
                      className="shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5 text-[10px]"
                      aria-hidden="true"
                    >
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span>{beneficio}</span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <Button
                variant={plano.destaque ? 'primary' : 'secondary'}
                href={plano.action.href}
                className="w-full"
              >
                {plano.action.label}
              </Button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
