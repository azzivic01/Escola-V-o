import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'neutral' | 'accent' | 'deco1' | 'deco2' | 'deco3';
  className?: string;
  isMono?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  className = '',
  isMono = false,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'accent':
        return {
          backgroundColor: 'color-mix(in srgb, var(--tema-color-accent) 12%, var(--tema-color-surface))',
          color: 'var(--tema-color-accent-ink)',
          borderColor: 'var(--tema-color-accent)',
        };
      case 'deco1':
        return {
          backgroundColor: 'color-mix(in srgb, var(--tema-color-deco-1) 25%, var(--tema-color-surface))',
          color: 'var(--tema-color-text)',
          borderColor: 'var(--tema-color-border)',
        };
      case 'deco2':
        return {
          backgroundColor: 'color-mix(in srgb, var(--tema-color-deco-2) 18%, var(--tema-color-surface))',
          color: 'var(--tema-color-text)',
          borderColor: 'var(--tema-color-border)',
        };
      case 'deco3':
        return {
          backgroundColor: 'color-mix(in srgb, var(--tema-color-deco-3) 20%, var(--tema-color-surface))',
          color: 'var(--tema-color-text)',
          borderColor: 'var(--tema-color-border)',
        };
      case 'neutral':
      default:
        return {
          backgroundColor: 'var(--tema-color-surface)',
          color: 'var(--tema-color-text)',
          borderColor: 'var(--tema-color-border)',
        };
    }
  };

  const style: React.CSSProperties = {
    ...getVariantStyles(),
    borderRadius: 'var(--tema-radius)',
    borderWidth: 'var(--tema-border-width)',
    borderStyle: 'solid',
    fontFamily: isMono ? 'var(--tema-font-mono)' : 'var(--tema-font-label)',
    letterSpacing: 'var(--tema-label-tracking)',
    textTransform: 'var(--tema-label-transform)' as React.CSSProperties['textTransform'],
  };

  return (
    <span
      style={style}
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold select-none ${className}`}
    >
      {children}
    </span>
  );
};
