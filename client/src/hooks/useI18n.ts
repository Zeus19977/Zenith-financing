import { useEffect, useState } from 'react';

export type Language = 'fr' | 'en' | 'es' | 'de' | 'nl' | 'it' | 'fi' | 'ro' | 'pt' | 'sv' | 'ru' | 'pl';

interface Translations {
  [key: string]: any;
}

export function useI18n() {
  const [language, setLanguage] = useState<Language>('fr');
  const [translations, setTranslations] = useState<Translations>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage && ['fr', 'en', 'es', 'de', 'nl', 'it', 'fi', 'ro', 'pt', 'sv', 'ru', 'pl'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/locales/${language}.json`);
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error(`Failed to load translations for ${language}:`, error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [language]);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string, defaultValue: string = key): string => {
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return defaultValue;
      }
    }

    return typeof value === 'string' ? value : defaultValue;
  };

  return {
    language,
    changeLanguage,
    t,
    isLoading,
    translations,
  };
}
