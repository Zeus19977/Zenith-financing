import React, { createContext, useContext, ReactNode } from 'react';
import { useI18n, type Language } from '@/hooks/useI18n';

export type { Language };

interface I18nContextType {
  language: Language;
  changeLanguage: (language: Language) => void;
  t: (key: string, defaultValue?: string) => string;
  isLoading: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export type { I18nContextType };

export function I18nProvider({ children }: { children: ReactNode }) {
  const i18n = useI18n();

  return (
    <I18nContext.Provider value={i18n}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within I18nProvider');
  }
  return context;
}

export { I18nContext };
