'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import useTranslation from '@/hooks/useTranslation';

export default function Footer() {
  // Simple translation function
  const t = (key) => {
    const translations = {
      'footer.technologyConsulting': 'Technology Consulting',
      'footer.investmentAdvisory': 'Investment Advisory',
      'footer.marketAnalysis': 'Market Analysis',
      'footer.riskManagement': 'Risk Management',
      'footer.processOptimization': 'Process Optimization',
      'footer.internationalTrade': 'International Trade',
      'footer.companyName': 'SCENORIA',
      'footer.tagline': 'Strategic Business Consulting',
      'footer.description': 'Transforming businesses through strategic vision and innovative solutions.',
      'footer.quickLinks': 'Quick Links',
      'footer.services': 'Services',
      'footer.about': 'About',
      'footer.insights': 'Insights',
      'footer.contact': 'Contact',
      'footer.contactInfo': 'Contact Info',
      'footer.email': 'Email',
      'footer.phone': 'Phone',
      'footer.address': 'Address',
      'footer.copyright': '© 2024 SCENORIA. All rights reserved.',
      'footer.privacyPolicy': 'Privacy Policy',
      'footer.termsOfService': 'Terms of Service'
    };
    return translations[key] || key;
  };
  const pathname = usePathname();
  
  // Get current locale from pathname
  const segments = pathname.split('/');
  const currentLocale = segments[1] && ['en', 'zh'].includes(segments[1]) ? segments[1] : 'en';
  
  const getLocalizedPath = (path) => {
    return `/${currentLocale}${path}`;
  };
  return (
    <footer className="bg-gradient-to-br from-slate-800 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Scenoria</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2 text-white/80">
              <li><Link href={getLocalizedPath('/services')} className="hover:text-white transition-colors">{t('footer.technologyConsulting')}</Link></li>
              <li><Link href={getLocalizedPath('/services')} className="hover:text-white transition-colors">{t('footer.investmentAdvisory')}</Link></li>
              <li><Link href={getLocalizedPath('/services')} className="hover:text-white transition-colors">{t('footer.marketAnalysis')}</Link></li>
              <li><Link href={getLocalizedPath('/services')} className="hover:text-white transition-colors">{t('footer.riskManagement')}</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-white/80">
              <li><Link href={getLocalizedPath('/about')} className="hover:text-white transition-colors">{t('footer.aboutUs')}</Link></li>
              <li><Link href={getLocalizedPath('/blog')} className="hover:text-white transition-colors">{t('footer.insights')}</Link></li>
              <li><Link href={getLocalizedPath('/contact')} className="hover:text-white transition-colors">{t('footer.contact')}</Link></li>
              <li><Link href={getLocalizedPath('/careers')} className="hover:text-white transition-colors">{t('footer.careers')}</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-2 text-white/80">
              <p>{t('contact.emailAddress')}</p>
              <p>{t('contact.phoneNumber')}</p>
              <p>{t('footer.address')}</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            {t('footer.rightsReserved')}
          </p>
          <p className="text-white/60 text-sm mt-4 md:mt-0">
            {t('footer.poweredBy')}
          </p>
        </div>
      </div>
    </footer>
  );
}

