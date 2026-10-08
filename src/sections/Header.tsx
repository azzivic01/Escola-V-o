import React from 'react';
import { Button } from '../components/ui/Button.tsx';
import type { SiteContent } from '../content.ts';

export interface HeaderProps {
  content: SiteContent['header'];
}

export const Header: React.FC<HeaderProps> = ({ content }) => {
  if (!content.enabled) return null;

  return (
    <>
      <a
        href="#conteudo-principal"
        style={{
          backgroundColor: 'var(--tema-color-accent)',
          color: 'var(--tema-color-on-accent)',
          fontFamily: 'var(--tema-font-label)',
          borderRadius: 'var(--tema-radius)',
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:shadow-md text-sm font-semibold"
      >
        Pular para o conteúdo principal
      </a>

      <header
        id="header"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--tema-color-bg) 88%, transparent)',
          borderBottomWidth: 'var(--tema-border-width)',
          borderBottomStyle: 'solid',
          borderBottomColor: 'var(--tema-color-border)',
          backdropFilter: 'blur(8px)',
        }}
        className="sticky top-0 z-40 w-full"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-6">
          {/* Zone 1: Single text wordmark */}
          <a
            href="/"
            style={{
              fontFamily: 'var(--tema-font-display)',
              color: 'var(--tema-color-text)',
            }}
            className="text-xl sm:text-2xl font-extrabold tracking-tight shrink-0 flex items-center gap-1.5 focus-visible:rounded"
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

          {/* Zone 2: 4-6 nav links */}
          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-7 text-sm font-medium"
            style={{ fontFamily: 'var(--tema-font-label)' }}
          >
            {content.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  color: 'var(--tema-color-text)',
                  letterSpacing: 'var(--tema-label-tracking)',
                }}
                className="hover:underline underline-offset-4 decoration-2 decoration-[var(--tema-color-accent)] transition-colors whitespace-nowrap focus-visible:rounded"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <Button variant="primary" href={content.primaryAction.href}>
              {content.primaryAction.label}
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};
