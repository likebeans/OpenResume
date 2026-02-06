import { createContext, useContext, useState, type ReactNode } from 'react';

export type ScrollMode = 'default' | 'snap' | 'fullpage' | 'cinematic';

interface ScrollModeContextType {
  mode: ScrollMode;
  setMode: (mode: ScrollMode) => void;
}

const ScrollModeContext = createContext<ScrollModeContextType | undefined>(undefined);

export const ScrollModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ScrollMode>('default');

  return (
    <ScrollModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ScrollModeContext.Provider>
  );
};

export const useScrollMode = () => {
  const context = useContext(ScrollModeContext);
  if (!context) {
    throw new Error('useScrollMode must be used within a ScrollModeProvider');
  }
  return context;
};
