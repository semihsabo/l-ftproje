'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getTranslations, createTranslationFunction } from '@/lib/translations';
import { useServices } from '@/hooks/useAPI';

export default function Home({ params }) {
  const [locale, setLocale] = useState('en');
  const [translations, setTranslations] = useState({});
  const { services, loading: servicesLoading, error: servicesError } = useServices();

  useEffect(() => {
    const initTranslations = async () => {
      const resolvedParams = await params;
      const currentLocale = resolvedParams?.locale || 'en';
      setLocale(currentLocale);
      const trans = await getTranslations(currentLocale);
      setTranslations(trans);
    };
    initTranslations();
  }, [params]);

  const t = createTranslationFunction(translations);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-20 pt-32 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          {/* Horizontal lines - more visible like in Figma */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-0 right-0 h-px bg-gray-300"></div>
            <div className="absolute top-40 left-0 right-0 h-px bg-gray-300"></div>
            <div className="absolute top-60 left-0 right-0 h-px bg-gray-300"></div>
            <div className="absolute top-80 left-0 right-0 h-px bg-gray-300"></div>
            <div className="absolute top-96 left-0 right-0 h-px bg-gray-300"></div>
            <div className="absolute bottom-40 left-0 right-0 h-px bg-gray-300"></div>
            <div className="absolute bottom-20 left-0 right-0 h-px bg-gray-300"></div>
          </div>
          
          {/* Gradient circles - more visible like in Figma */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-purple-100 rounded-full opacity-25 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-2xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="relative">
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-blue-800">{t('hero.title')}</span>
                  <br />
                  <span className="text-purple-600 relative">
                    {t('hero.titleHighlight')}
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-purple-600"></div>
                  </span>
                </h1>
              </div>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              
              <button className="bg-white border border-slate-300 text-slate-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 flex items-center gap-2">
                {t('hero.exploreServices')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Right Content - Card */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                {/* Professional Business Meeting Image - Figma Style */}
                <div className="rounded-xl h-80 mb-6 relative overflow-hidden bg-gradient-to-br from-slate-100 to-purple-100">
                  <Image 
                    src="/hero-business-meeting.jpg" 
                    alt="Professional business meeting with team collaboration"
                    fill
                    className="object-cover rounded-xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                  {/* Fallback content when image fails */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600 p-8 bg-gradient-to-br from-slate-100 to-purple-100">
                    <div className="text-6xl mb-4">🏢</div>
                    <h3 className="text-2xl font-bold mb-2 text-slate-800">Professional Workspace</h3>
                    <p className="text-center opacity-80">Strategic Business Consultation Environment</p>
                  </div>
                </div>
                
                <p className="text-slate-600 text-base mb-6">
                  {t('hero.experience')}
                </p>
                
                {/* Features */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17C15.24 5.06 14.32 5 13.4 5H10.6C9.68 5 8.76 5.06 7.83 5.17L10.5 2.5L9 1L3 7V9H5V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V9H21ZM17 20H7V9H17V20Z"/>
                      </svg>
                    </div>
                    <p className="text-sm text-slate-600 font-medium">{t('features.expertTeam')}</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21Z"/>
                      </svg>
                    </div>
                    <p className="text-sm text-slate-600 font-medium">{t('features.innovativeSolutions')}</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                      </svg>
                    </div>
                    <p className="text-sm text-slate-600 font-medium">{t('features.globalNetwork')}</p>
                  </div>
                </div>
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-50 -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Loading State */}
          {servicesLoading && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
              <p className="mt-2 text-slate-600">Loading services...</p>
            </div>
          )}
          
          {/* Error State */}
          {servicesError && (
            <div className="text-center py-8">
              <p className="text-red-600">Error loading services: {servicesError}</p>
            </div>
          )}
          
          {/* Services Content */}
          {!servicesLoading && !servicesError && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Large Card */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-slate-800 to-purple-900 rounded-2xl p-8 text-white relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="/tech-consulting-analytics.jpg" 
                    alt="Technology consulting and data analysis"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 to-purple-900/80"></div>
                </div>
                <div className="absolute top-4 right-4 bg-yellow-500 text-slate-800 px-3 py-1 rounded-full text-sm font-medium">
                  {t('services.popularService')}
                </div>
                <div className="absolute top-4 right-40 bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                  {t('services.successRate')}
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold">{t('services.newTech')}</h3>
                  </div>
                  
                  <p className="text-white/90 mb-6 leading-relaxed">
                    {t('services.newTechDesc')}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/90">{t('services.aiMachineLearning')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/90">{t('services.iotIntegration')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/90">{t('services.blockchainSolutions')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/90">{t('services.digitalTransformation')}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="bg-white text-slate-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      {t('services.viewAllServices')}
                    </button>
                    <button className="border border-white text-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-slate-800 transition-colors">
                      {t('footer.technologyConsulting')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side Cards */}
            <div className="space-y-6">
              {/* Machine & Equipment Investment */}
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0">
                  <img 
                    src="/machinery-investment-factory.jpg" 
                    alt="Industrial machinery and equipment investment"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700/80 to-slate-800/80"></div>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold">{t('services.machineInvestment')}</h4>
                  </div>
                  <p className="text-white/80 text-sm mb-4">
                    {t('services.machineInvestmentDesc')}
                  </p>
                  <button className="bg-white text-slate-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                    {t('services.viewAllServices')}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Chinese Investors */}
              <div className="bg-gradient-to-br from-purple-800 to-blue-800 rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0">
                  <img 
                    src="/chinese-investors-meeting.jpg" 
                    alt="Chinese investors business meeting"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-800/80 to-blue-800/80"></div>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold">{t('services.chineseInvestors')}</h4>
                  </div>
                  <p className="text-white/80 text-sm mb-4">
                    {t('services.chineseInvestorsDesc')}
                  </p>
                  <button className="bg-white text-slate-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                    {t('services.viewAllServices')}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Row Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {/* Import Services */}
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute inset-0">
                <img 
                  src="/import-services-port.jpg" 
                  alt="Import services and port logistics"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700/80 to-slate-800/80"></div>
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">150+</div>
                    <div className="text-xs text-white/70">{t('services.importServices')}</div>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">{t('services.importServices')}</h4>
                <p className="text-white/80 text-sm mb-4">
                  {t('services.importServicesDesc')}
                </p>
                <div className="flex gap-2">
                  <button className="bg-white text-slate-800 px-3 py-1 rounded text-xs font-medium hover:bg-gray-100 transition-colors">
                    {t('services.viewAllServices')}
                  </button>
                  <button className="border border-white text-white px-3 py-1 rounded text-xs font-medium hover:bg-white hover:text-slate-800 transition-colors">
                    {t('services.viewAllServices')}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Process Management */}
            <div className="bg-gradient-to-br from-purple-800 to-blue-800 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-800/80 to-blue-800/80"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">40%</div>
                    <div className="text-xs text-white/70">{t('services.processManagement')}</div>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">{t('services.processManagement')}</h4>
                <p className="text-white/80 text-sm mb-4">
                  {t('services.processManagementDesc')}
                </p>
                <div className="flex gap-2">
                  <button className="bg-white text-slate-800 px-3 py-1 rounded text-xs font-medium hover:bg-gray-100 transition-colors">
                    {t('services.viewAllServices')}
                  </button>
                  <button className="border border-white text-white px-3 py-1 rounded text-xs font-medium hover:bg-white hover:text-slate-800 transition-colors">
                    {t('services.viewAllServices')}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Risk Management */}
            <div className="bg-gradient-to-br from-red-600 to-pink-600 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/80 to-pink-600/80"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold">{t('services.riskManagement')}</h4>
                </div>
                <p className="text-white/80 text-sm mb-4">
                  {t('services.riskManagementDesc')}
                </p>
                <button className="bg-white text-red-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                  {t('services.viewAllServices')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Sector Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-blue-600/80"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold">{t('services.sectorAnalysis')}</h4>
                </div>
                <p className="text-white/80 text-sm mb-4">
                  {t('services.sectorAnalysisDesc')}
                </p>
                <button className="bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                  {t('services.viewAllServices')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Foreign Trade Intelligence */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/80 to-emerald-600/80"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold">{t('services.foreignTrade')}</h4>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-xs text-white/70">{t('services.foreignTrade')}</div>
                  </div>
                </div>
                <p className="text-white/80 text-sm">
                  {t('services.foreignTradeDesc')}
                </p>
              </div>
            </div>
          </div>
          
          {/* View All Services Button */}
          <div className="text-center mt-12">
            <button className="bg-slate-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors flex items-center gap-2 mx-auto">
              {t('services.viewAllServices')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          )}
        </div>
      </section>

      {/* Transforming Businesses Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                {t('about.title')}
              </h2>
              
              <div className="space-y-6 text-slate-600">
                <p className="text-lg leading-relaxed">
                  {t('about.description1')}
                </p>
                <p className="text-lg leading-relaxed">
                  {t('about.description2')}
                </p>
              </div>
              
              {/* Statistics */}
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-slate-800 mb-2">500+</div>
                  <div className="text-slate-600">{t('about.projectsCompleted')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-slate-800 mb-2">50+</div>
                  <div className="text-slate-600">{t('about.countriesServed')}</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-slate-500 text-center">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <p className="text-lg font-medium">{t('about.businessMeeting')}</p>
                  <p className="text-sm">{t('about.strategicConsultation')}</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-50 -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-30 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            {t('cta.description')}
          </p>
          <button className="bg-white text-slate-800 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg">
            {t('cta.scheduleConsultation')}
          </button>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">{t('stats.happyCustomers')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">₺2B+</div>
              <div className="text-white/80">{t('stats.managedInvestment')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">{t('stats.countryExperience')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-white/80">{t('stats.yearsExperience')}</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
