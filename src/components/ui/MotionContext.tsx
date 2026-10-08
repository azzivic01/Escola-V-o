import React, { createContext, useContext, useEffect, useState } from 'react';

interface MotionContextType {
  isReducedMotion: boolean;
  toggleReducedMotion: () => void;
}

const MotionContext = createContext<MotionContextType>({
  isReducedMotion: false,
  toggleReducedMotion: () => {},
});

export const MotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userDisabledMotion, setUserDisabledMotion] = useState(false);
  const [systemReducedMotion, setSystemReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setSystemReducedMotion(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setSystemReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const isReducedMotion = systemReducedMotion || userDisabledMotion;

  const toggleReducedMotion = () => {
    setUserDisabledMotion((prev) => !prev);
  };

  return (
    <MotionContext.Provider value={{ isReducedMotion, toggleReducedMotion }}>
      {children}
    </MotionContext.Provider>
  );
};

export const useAppMotion = () => useContext(MotionContext);
