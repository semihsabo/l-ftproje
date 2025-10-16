'use client';

import { usePathname } from 'next/navigation';

export default function Error({ error, reset }) {
  const pathname = usePathname();
  
  // Get locale from pathname
  const segments = pathname.split('/');
  const locale = segments[1] && ['en', 'zh', 'tr'].includes(segments[1]) ? segments[1] : 'en';

  // Translation function
  const t = (key) => {
    const translations = {
      en: {
        'error.title': 'An Error Occurred',
        'error.message': 'Sorry, an unexpected error occurred. Please try refreshing the page.',
        'error.refresh': 'Refresh Page'
      },
      zh: {
        'error.title': '发生错误',
        'error.message': '抱歉，发生了意外错误。请尝试刷新页面。',
        'error.refresh': '刷新页面'
      },
      tr: {
        'error.title': 'Bir Hata Oluştu',
        'error.message': 'Üzgünüz, beklenmeyen bir hata oluştu. Lütfen sayfayı yenilemeyi deneyin.',
        'error.refresh': 'Sayfayı Yenile'
      }
    };
    return translations[locale]?.[key] || translations.en[key] || key;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('error.title')}</h2>
        <p className="text-gray-600 mb-6">
          {t('error.message')}
        </p>
        <button
          onClick={reset}
          className="bg-slate-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-700 transition-colors"
        >
          {t('error.refresh')}
        </button>
      </div>
    </div>
  );
}

