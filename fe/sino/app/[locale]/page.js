'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from '@/store/slices/servicesSlice';

export default function Home({ params }) {
  const dispatch = useDispatch();
  const { services, loading: servicesLoading, error: servicesError } = useSelector(state => state.services);
  const [locale, setLocale] = useState('en');

  // Fetch services on component mount
  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  // Get locale from params
  useEffect(() => {
    const getLocale = async () => {
      const resolvedParams = await params;
      setLocale(resolvedParams?.locale || 'en');
    };
    getLocale();
  }, [params]);
  
  // Translation function with multiple languages
  const t = (key) => {
    const translations = {
      en: {
        'hero.title': 'Take Your Business',
        'hero.titleHighlight': 'To The Top',
        'hero.subtitle': 'From technology trends to investment strategies, everything you need for sustainable growth in global markets.',
        'hero.exploreServices': 'Explore Services',
        'hero.experience': 'With our 15+ years of experience and 500+ successful projects, we prepare your business for the future.',
        'services.viewAllServices': 'View All Services',
        'services.techTrends': 'New Trend Technologies',
        'services.techDesc': 'Integrate developing technologies like AI, blockchain, IoT, and metaverse into your business to gain a competitive advantage.',
        'services.machineInvestment': 'Machine & Equipment Investment',
        'services.chineseInvestors': 'Chinese Investors',
        'services.importServices': 'Import Services',
        'services.processManagement': 'Process Management',
        'services.foreignTrade': 'Foreign Trade Intelligence',
        'services.riskManagement': 'Risk Management',
        'services.sectorAnalysis': 'Sector Analysis',
        'services.successRate': 'Success Rate',
        'services.efficiency': 'Efficiency Increase',
        'services.countryAnalysis': 'Country Analysis',
        'transforming.title': 'Transforming Businesses Through Strategic Vision',
        'transforming.desc1': 'We provide comprehensive strategic consulting services that help businesses identify growth opportunities, optimize operations, and navigate complex market dynamics.',
        'transforming.desc2': 'Our team of experts combines deep industry knowledge with innovative thinking to deliver solutions that drive sustainable growth and competitive advantage.',
        'transforming.projects': 'Projects Completed',
        'transforming.countries': 'Countries Served',
        'cta.title': 'Ready to Transform Your Business?',
        'cta.subtitle': "Let's discuss how our strategic consulting services can help you achieve your business objectives and unlock new growth opportunities.",
        'cta.button': 'Schedule a Consultation',
        'stats.clients': 'Clients',
        'stats.managed': 'Managed Relationships',
        'stats.countries': 'Country Experience',
        'stats.experience': 'Years Experience'
      },
      zh: {
        'hero.title': '引领您的企业',
        'hero.titleHighlight': '迈向巅峰',
        'hero.subtitle': '从技术趋势到投资策略，为您提供全球市场可持续增长所需的一切。',
        'hero.exploreServices': '探索服务',
        'hero.experience': '凭借我们15年以上的经验和500多个成功项目，我们为您的企业未来做好准备。',
        'services.viewAllServices': '查看所有服务',
        'services.techTrends': '新趋势技术',
        'services.techDesc': '将人工智能、区块链、物联网和元宇宙等新兴技术集成到您的业务中，以获得竞争优势。',
        'services.machineInvestment': '机械设备投资',
        'services.chineseInvestors': '中国投资者',
        'services.importServices': '进口服务',
        'services.processManagement': '流程管理',
        'services.foreignTrade': '外贸情报',
        'services.riskManagement': '风险管理',
        'services.sectorAnalysis': '行业分析',
        'services.successRate': '成功率',
        'services.efficiency': '效率提升',
        'services.countryAnalysis': '国家分析',
        'transforming.title': '通过战略愿景转变企业',
        'transforming.desc1': '我们提供全面的战略咨询服务，帮助企业识别增长机会、优化运营并驾驭复杂的市场动态。',
        'transforming.desc2': '我们的专家团队将深厚的行业知识与创新思维相结合，提供推动可持续增长和竞争优势的解决方案。',
        'transforming.projects': '完成项目',
        'transforming.countries': '服务国家',
        'cta.title': '准备转变您的业务吗？',
        'cta.subtitle': '让我们讨论我们的战略咨询服务如何帮助您实现业务目标并释放新的增长机会。',
        'cta.button': '安排咨询',
        'stats.clients': '客户',
        'stats.managed': '管理关系',
        'stats.countries': '国家经验',
        'stats.experience': '年经验'
      },
      tr: {
        'hero.title': 'İşinizi',
        'hero.titleHighlight': 'Zirveye Taşıyın',
        'hero.subtitle': 'Teknoloji trendlerinden yatırım stratejilerine kadar, küresel pazarlarda sürdürülebilir büyüme için ihtiyacınız olan her şey.',
        'hero.exploreServices': 'Hizmetleri Keşfet',
        'hero.experience': '15 yıllık deneyimimiz ve 500\'den fazla başarılı projemizle işinizi geleceğe hazırlıyoruz.',
        'services.viewAllServices': 'Tüm Hizmetleri Görüntüle',
        'services.techTrends': 'Yeni Trend Teknolojiler',
        'services.techDesc': 'AI, blockchain, IoT ve metaverse gibi gelişen teknolojileri işletmenize entegre ederek rekabet avantajı sağlayın.',
        'services.machineInvestment': 'Makine & Ekipman Yatırımı',
        'services.chineseInvestors': 'Çinli Yatırımcılar',
        'services.importServices': 'İthalat Hizmetleri',
        'services.processManagement': 'Süreç Yönetimi',
        'services.foreignTrade': 'Dış Ticaret İstihbaratı',
        'services.riskManagement': 'Risk Yönetimi',
        'services.sectorAnalysis': 'Sektör Analizi',
        'services.successRate': 'Başarı Oranı',
        'services.efficiency': 'Verimlilik Artışı',
        'services.countryAnalysis': 'Ülke Analizi',
        'transforming.title': 'Stratejik Vizyonla İşletmeleri Dönüştürme',
        'transforming.desc1': 'İşletmelerin büyüme fırsatlarını belirlemesine, operasyonlarını optimize etmesine ve karmaşık pazar dinamiklerini yönetmesine yardımcı olan kapsamlı stratejik danışmanlık hizmetleri sunuyoruz.',
        'transforming.desc2': 'Uzman ekibimiz, derin endüstri bilgisi ile yenilikçi düşünceyi birleştirerek sürdürülebilir büyüme ve rekabet avantajı sağlayan çözümler sunar.',
        'transforming.projects': 'Tamamlanan Proje',
        'transforming.countries': 'Hizmet Verilen Ülke',
        'cta.title': 'İşletmenizi Dönüştürmeye Hazır mısınız?',
        'cta.subtitle': 'Stratejik danışmanlık hizmetlerimizin iş hedeflerinize ulaşmanıza ve yeni büyüme fırsatlarını kilitlemenize nasıl yardımcı olabileceğini tartışalım.',
        'cta.button': 'Danışmanlık Randevusu Al',
        'stats.clients': 'Müşteri',
        'stats.managed': 'Yönetilen İlişki',
        'stats.countries': 'Ülke Deneyimi',
        'stats.experience': 'Yıl Tecrübe'
      }
    };
    return translations[locale]?.[key] || translations.en[key] || key;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Services Overlay */}
      <section className="relative h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-business-meeting.jpg"
            alt="Professional business meeting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/60 to-slate-900/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Hero Text */}
              <div className="text-white space-y-8">
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    {t('hero.title')}<br />
                    <span className="text-purple-400">{t('hero.titleHighlight')}</span>
                  </h1>
                  <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                    {t('hero.subtitle')}
                  </p>
                </div>
                
                <button className="bg-white text-slate-800 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 text-lg">
                  {t('hero.exploreServices')}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <p className="text-gray-300 text-lg">
                  {t('hero.experience')}
                </p>
              </div>

              {/* Right Side - Service Cards */}
              <div className="space-y-6">
                {/* Main Service Card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{t('services.techTrends')}</h3>
                        <p className="text-gray-300 text-sm">{t('services.techDesc')}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-yellow-400 text-slate-800 px-3 py-1 rounded-full text-sm font-bold">95%</div>
                      <div className="text-gray-300 text-xs mt-1">{t('services.successRate')}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-300">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">AI & Machine Learning</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">IoT Integration</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Blockchain Solutions</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm">Digital Transformation</span>
                    </div>
                  </div>
                </div>

                {/* Side Service Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        </svg>
                      </div>
                      <h4 className="text-white font-semibold">{t('services.machineInvestment')}</h4>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">Industrial machinery and equipment investment</p>
                    <button className="text-blue-400 text-sm hover:text-blue-300 transition-colors">Detailed Information</button>
                  </div>

                  <div className="bg-gradient-to-br from-purple-700/50 to-blue-700/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-white font-semibold">{t('services.chineseInvestors')}</h4>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">Chinese investors business meeting</p>
                    <button className="text-purple-400 text-sm hover:text-purple-300 transition-colors">Detailed Information</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
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
          
          {/* Services Grid */}
          {!servicesLoading && !servicesError && services && services.length > 0 && (
            <div className="space-y-8">
              {/* Top Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-right">
                    <div className="text-3xl font-bold">150+</div>
                    <div className="text-sm text-white/70">Successful Import</div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold">{t('services.importServices')}</h4>
                  </div>
                  <p className="text-white/80 mb-4">Trend yakalama ve bayilik ilişkileri ile bugünkü ithalat operasyonları</p>
                  <div className="flex gap-2">
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">Trend Analizi</span>
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">Tedarikçi İlişkileri</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-right">
                    <div className="text-3xl font-bold">40%</div>
                    <div className="text-sm text-white/70">{t('services.efficiency')}</div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold">{t('services.processManagement')}</h4>
                  </div>
                  <p className="text-white/80 mb-4">Operasyonel verimliliği artıran kapsamlı süreç yönetimi çözümleri</p>
                  <div className="flex gap-2">
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">Süreç Optimizasyonu</span>
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">Verimlilik Analizi</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-right">
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-sm text-white/70">{t('services.countryAnalysis')}</div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold">{t('services.foreignTrade')}</h4>
                  </div>
                  <p className="text-white/80 mb-4">Küresel ticaret fırsatları ve pazar analizi</p>
                  <div className="flex gap-2">
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">Pazar Analizi</span>
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">Ticaret Fırsatları</span>
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 text-white relative overflow-hidden">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold">{t('services.riskManagement')}</h4>
                  </div>
                  <p className="text-white/80 mb-4">Kapsamlı risk değerlendirme ve yönetim stratejileri</p>
                  <button className="bg-white text-red-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                    Detailed Information
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold">{t('services.sectorAnalysis')}</h4>
                  </div>
                  <p className="text-white/80 mb-4">Endüstri analizi ve rekabet istihbaratı</p>
                  <button className="bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                    Detailed Information
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* View All Services Button */}
              <div className="text-center">
                <button className="bg-slate-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors flex items-center gap-2 mx-auto">
                  {t('services.viewAllServices')}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Transforming Businesses Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-slate-900">{t('transforming.title')}</h2>
              
              <div className="space-y-6 text-slate-600">
                <p className="text-lg leading-relaxed">
                  {t('transforming.desc1')}
                </p>
                <p className="text-lg leading-relaxed">
                  {t('transforming.desc2')}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                  <div className="text-slate-600">{t('transforming.projects')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-slate-600">{t('transforming.countries')}</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl h-96 overflow-hidden shadow-lg">
                <Image
                  src="/about-business-meeting.jpg"
                  alt="Professional business meeting with strategic consultation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-medium mb-1">Strategic Consultation</p>
                  <p className="text-sm opacity-90">Modern workspace for business transformation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">{t('cta.title')}</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {t('cta.subtitle')}
          </p>
          <button className="bg-white text-slate-800 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg">
            {t('cta.button')}
          </button>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">{t('stats.clients')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">B2B+</div>
              <div className="text-gray-300">{t('stats.managed')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">{t('stats.countries')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-300">{t('stats.experience')}</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}