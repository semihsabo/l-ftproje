'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function useTranslation() {
  const pathname = usePathname();
  const [translations, setTranslations] = useState({});

  // Get current locale from pathname
  const segments = pathname.split('/');
  const currentLocale = segments[1] && ['en', 'zh', 'tr'].includes(segments[1]) ? segments[1] : 'en';

  useEffect(() => {
    // Load translations for current locale
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/locales/${currentLocale}/common.json`);
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error('Failed to load translations:', error);
        // Fallback to English
        const fallbackResponse = await fetch('/locales/en/common.json');
        const fallbackData = await fallbackResponse.json();
        setTranslations(fallbackData);
      }
    };

    loadTranslations();
  }, [currentLocale]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return { t, locale: currentLocale };
}

