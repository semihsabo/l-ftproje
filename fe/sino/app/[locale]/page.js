'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home({ params }) {
  const [locale, setLocale] = useState('en');

  // Get locale from params
  useEffect(() => {
    const getLocale = async () => {
  const resolvedParams = await params;
      setLocale(resolvedParams?.locale || 'en');
    };
    getLocale();
  }, [params]);

  // Simple translation function
  const t = (key) => {
    const translations = {
      en: {
        'hero.title': 'Take Your Business',
        'hero.titleHighlight': 'To The Top',
        'hero.subtitle': 'From technology trends to investment strategies, everything you need for sustainable growth in global markets.',
        'hero.exploreServices': 'Explore Services'
      },
      zh: {
        'hero.title': '引领您的企业',
        'hero.titleHighlight': '迈向巅峰',
        'hero.subtitle': '从技术趋势到投资策略，为您提供全球市场可持续增长所需的一切。',
        'hero.exploreServices': '探索服务'
      },
      tr: {
        'hero.title': 'İşinizi',
        'hero.titleHighlight': 'Zirveye Taşıyın',
        'hero.subtitle': 'Teknoloji trendlerinden yatırım stratejilerine kadar, küresel pazarlarda sürdürülebilir büyüme için ihtiyacınız olan her şey.',
        'hero.exploreServices': 'Hizmetleri Keşfet'
      }
    };
    return translations[locale]?.[key] || translations.en[key] || key;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-4">
              {t('hero.title')}{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                    {t('hero.titleHighlight')}
                  </span>
                </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
                {t('hero.subtitle')}
              </p>
            <a
              href={`/${locale}/services`}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-lg"
            >
                {t('hero.exploreServices')}
              <svg className="ml-3 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}