import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Lang = 'zh' | 'en';

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (zh: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'zh',
  toggleLang: () => {},
  t: (zh: string) => zh,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('zh');

  const toggleLang = () => setLang(prev => (prev === 'zh' ? 'en' : 'zh'));
  const t = (zh: string, en: string) => (lang === 'zh' ? zh : en);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
