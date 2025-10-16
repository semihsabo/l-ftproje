'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import useTranslation from '@/hooks/useTranslation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation();

  // Get current locale from pathname
  const segments = pathname.split('/');
  const currentLocale = segments[1] && ['en', 'zh'].includes(segments[1]) ? segments[1] : 'en';

  const isActive = (path) => {
    if (path === '/') {
      return pathname === `/${currentLocale}` || pathname === '/';
    }
    return pathname.startsWith(`/${currentLocale}${path}`);
  };

  const getLocalizedPath = (path) => {
    return `/${currentLocale}${path}`;
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={getLocalizedPath('/')} className="text-2xl font-bold text-slate-800">
              SCENORIA
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href={getLocalizedPath('/')} 
              className={`font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-600' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t('nav.home')}
            </Link>
            <Link 
              href={getLocalizedPath('/services')} 
              className={`font-medium transition-colors ${
                isActive('/services') 
                  ? 'text-blue-600' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t('nav.services')}
            </Link>
            <Link 
              href={getLocalizedPath('/about')} 
              className={`font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-blue-600' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t('nav.about')}
            </Link>
            <Link 
              href={getLocalizedPath('/blog')} 
              className={`font-medium transition-colors ${
                isActive('/blog') 
                  ? 'text-blue-600' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t('nav.insights')}
            </Link>
            <Link 
              href={getLocalizedPath('/contact')} 
              className={`font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-blue-600' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t('nav.contact')}
            </Link>
          </nav>
          
          {/* Language Switcher & CTA Button */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link 
              href={getLocalizedPath('/contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              {t('nav.getConsultation')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href={getLocalizedPath('/')} 
                className={`font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-blue-600' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t('nav.home')}
              </Link>
              <Link 
                href={getLocalizedPath('/services')} 
                className={`font-medium transition-colors ${
                  isActive('/services') 
                    ? 'text-blue-600' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t('nav.services')}
              </Link>
              <Link 
                href={getLocalizedPath('/about')} 
                className={`font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-blue-600' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t('nav.about')}
              </Link>
              <Link 
                href={getLocalizedPath('/blog')} 
                className={`font-medium transition-colors ${
                  isActive('/blog') 
                    ? 'text-blue-600' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t('nav.insights')}
              </Link>
              <Link 
                href={getLocalizedPath('/contact')} 
                className={`font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-blue-600' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t('nav.contact')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

