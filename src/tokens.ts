export const tokens = {
  colors: {
    bg: '#F6F4FF',
    surface: '#FFFFFF',
    border: '#DAD4F5',
    text: '#1A1633',
    textMuted: '#5A5478',
    accent: '#5B3DF5',
    accentInk: '#4A2DE0',
    onAccent: '#FFFFFF',
    deco1: '#FFD23F',
    deco2: '#FF6B57',
    deco3: '#2EC4B6',
  },
  fonts: {
    display: "'Sora', sans-serif",
    body: "'Figtree', sans-serif",
    label: "'Figtree', sans-serif",
    mono: "'Fira Code', monospace",
  },
  shape: {
    radius: '12px',
    radiusLg: '24px',
    borderWidth: '2px',
    shadowHard: 'none',
  },
  typography: {
    labelTransform: 'none',
    labelTracking: '0.02em',
    displayTransform: 'none',
  },
  motion: {
    durationFast: '150ms',
    durationBase: '300ms',
    durationSlow: '700ms',
    durationCinematic: '1000ms',
    easingBase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easingCinematic: 'cubic-bezier(0.16, 1, 0.3, 1)',
    stagger: '80ms',
  },
} as const;

export type ThemeTokens = typeof tokens;
