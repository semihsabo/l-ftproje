'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from '@/store/slices/servicesSlice';

export default function Home({ params }) {
  const dispatch = useDispatch();
  const { services, loading: servicesLoading, error: servicesError } = useSelector(state => state.services);

  // Fetch services on component mount
  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  // Simple translation function for demo
  const t = (key) => {
    const translations = {
      'hero.title': 'Take Your Business',
      'hero.titleHighlight': 'To The Top',
      'hero.subtitle': 'From technology trends to investment strategies, everything you need for sustainable growth in global markets.',
      'hero.exploreServices': 'Explore Services',
      'hero.experience': 'With our 15+ years of experience and 500+ successful projects, we prepare your business for the future.',
      'services.viewAllServices': 'View All Services'
    };
    return translations[key] || key;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-20 pt-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  {t('hero.title')}<br />
                  <span className="text-purple-600">{t('hero.titleHighlight')}</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  {t('hero.subtitle')}
                </p>
              </div>
              
              <button className="bg-white border border-slate-300 text-slate-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 flex items-center gap-2">
                {t('hero.exploreServices')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="rounded-xl h-80 mb-6 relative overflow-hidden bg-gradient-to-br from-slate-100 to-purple-100">
              <Image
                src="/hero-business-meeting.jpg"
                alt="Professional business meeting with team collaboration"
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600 p-8 bg-gradient-to-br from-slate-100 to-purple-100">
                <div className="text-6xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold mb-2 text-slate-800">Professional Workspace</h3>
                <p className="text-center opacity-80">Strategic Business Consultation Environment</p>
              </div>
            </div>
            
            <p className="text-slate-600 text-base mb-6">
              {t('hero.experience')}
            </p>
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
          {!servicesLoading && !servicesError && services && services.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Large Card */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-slate-800 to-purple-900 rounded-2xl p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0">
                    <img 
                      src="/tech-consulting-analytics.jpg" 
                      alt="Technology consulting and data analysis"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 to-purple-900/80"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold">{services[0]?.title || 'Technology Consulting'}</h3>
                    </div>
                    
                    <p className="text-white/90 mb-6 leading-relaxed">
                      {services[0]?.description || 'Strategic technology consulting for digital transformation'}
                    </p>
                    
                    <div className="flex gap-4">
                      <button className="bg-white text-slate-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                        {t('services.viewAllServices')}
                      </button>
                      <button className="border border-white text-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-slate-800 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side Cards */}
              <div className="space-y-6">
                {/* Second Service */}
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
                      <h4 className="text-xl font-bold">{services[1]?.title || 'Investment Advisory'}</h4>
                    </div>
                    <p className="text-white/80 text-sm mb-4">
                      {services[1]?.description || 'Expert guidance for global investment strategies'}
                    </p>
                    <button className="bg-white text-slate-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                      {t('services.viewAllServices')}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Third Service */}
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
                      <h4 className="text-xl font-bold">{services[2]?.title || 'Market Analysis'}</h4>
                    </div>
                    <p className="text-white/80 text-sm mb-4">
                      {services[2]?.description || 'In-depth market research and competitive intelligence'}
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
          )}
          
          {/* View All Services Button */}
          {!servicesLoading && !servicesError && services && services.length > 0 && (
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

      <Footer />
    </div>
  );
}