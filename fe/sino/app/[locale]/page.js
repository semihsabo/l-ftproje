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
        'hero.expertTeam': 'Expert Team',
        'hero.innovativeSolutions': 'Innovative Solutions',
        'hero.globalNetwork': 'Global Network',
        'services.viewAllServices': 'View All Services',
        'services.techTrends': 'New Trend Technologies',
        'services.techDesc': 'Integrate developing technologies like AI, blockchain, IoT, and metaverse into your business to gain a competitive advantage.',
        'services.machineInvestment': 'Machine & Equipment Investment',
        'services.machineDesc': 'Industrial investment decisions for expert analysis and feasibility studies.',
        'services.chineseInvestors': 'Chinese Investors',
        'services.chineseDesc': 'Special consultancy for entering the Chinese market and investment opportunities.',
        'services.importServices': 'Import Services',
        'services.importDesc': 'Catching trends and dealership relations, end-to-end import operations.',
        'services.processManagement': 'Process Management',
        'services.processDesc': 'Comprehensive process management that increases operational efficiency. Key solutions.',
        'services.foreignTrade': 'Foreign Trade Intelligence',
        'services.foreignDesc': 'Detailed intelligence providing competitive advantage in global markets.',
        'services.riskManagement': 'Risk Management',
        'services.riskDesc': 'Strategies for identifying, assessing, and mitigating business risks.',
        'services.sectorAnalysis': 'Sector Analysis',
        'services.sectorDesc': 'In-depth sector and market research.',
        'services.successRate': 'Success Rate',
        'services.efficiency': 'Efficiency Increase',
        'services.countryAnalysis': 'Country Analysis',
        'services.successfulImport': 'Successful Import',
        'transforming.title': 'Transforming Businesses Through Strategic Vision',
        'transforming.desc1': 'We provide comprehensive strategic consulting services that help businesses identify growth opportunities, optimize operations, and navigate complex market dynamics.',
        'transforming.desc2': 'Our team of experts combines deep industry knowledge with innovative thinking to deliver solutions that drive sustainable growth and competitive advantage.',
        'transforming.projects': 'Projects Completed',
        'transforming.countries': 'Countries Served',
        'cta.title': 'Ready to Transform Your Business?',
        'cta.subtitle': "Let's discuss how our strategic consulting services can help you achieve your business objectives and unlock new growth opportunities.",
        'cta.button': 'Schedule a Consultation',
        'stats.clients': 'Clients',
        'stats.managed': 'Assets Under Management',
        'stats.countries': 'Country Experience',
        'stats.experience': 'Years of Experience'
      },
      zh: {
        'hero.title': '引领您的企业',
        'hero.titleHighlight': '迈向巅峰',
        'hero.subtitle': '从技术趋势到投资策略，为您提供全球市场可持续增长所需的一切。',
        'hero.exploreServices': '探索服务',
        'hero.experience': '凭借我们15年以上的经验和500多个成功项目，我们为您的企业未来做好准备。',
        'hero.expertTeam': '专家团队',
        'hero.innovativeSolutions': '创新解决方案',
        'hero.globalNetwork': '全球网络',
        'services.viewAllServices': '查看所有服务',
        'services.techTrends': '新趋势技术',
        'services.techDesc': '将人工智能、区块链、物联网和元宇宙等新兴技术集成到您的业务中，以获得竞争优势。',
        'services.machineInvestment': '机械设备投资',
        'services.machineDesc': '工业投资决策的专家分析和可行性研究。',
        'services.chineseInvestors': '中国投资者',
        'services.chineseDesc': '进入中国市场和投资机会的专业咨询。',
        'services.importServices': '进口服务',
        'services.importDesc': '捕捉趋势和代理关系，端到端进口运营。',
        'services.processManagement': '流程管理',
        'services.processDesc': '提高运营效率的综合流程管理。关键解决方案。',
        'services.foreignTrade': '外贸情报',
        'services.foreignDesc': '在全球市场提供竞争优势的详细情报。',
        'services.riskManagement': '风险管理',
        'services.riskDesc': '识别、评估和缓解业务风险的策略。',
        'services.sectorAnalysis': '行业分析',
        'services.sectorDesc': '深入的行业和市场研究。',
        'services.successRate': '成功率',
        'services.efficiency': '效率提升',
        'services.countryAnalysis': '国家分析',
        'services.successfulImport': '成功进口',
        'transforming.title': '通过战略愿景转变企业',
        'transforming.desc1': '我们提供全面的战略咨询服务，帮助企业识别增长机会、优化运营并驾驭复杂的市场动态。',
        'transforming.desc2': '我们的专家团队将深厚的行业知识与创新思维相结合，提供推动可持续增长和竞争优势的解决方案。',
        'transforming.projects': '完成项目',
        'transforming.countries': '服务国家',
        'cta.title': '准备转变您的业务吗？',
        'cta.subtitle': '让我们讨论我们的战略咨询服务如何帮助您实现业务目标并释放新的增长机会。',
        'cta.button': '安排咨询',
        'stats.clients': '客户',
        'stats.managed': '管理资产',
        'stats.countries': '国家经验',
        'stats.experience': '年经验'
      },
      tr: {
        'hero.title': 'İşinizi',
        'hero.titleHighlight': 'Zirveye Taşıyın',
        'hero.subtitle': 'Teknoloji trendlerinden yatırım stratejilerine kadar, küresel pazarlarda sürdürülebilir büyüme için ihtiyacınız olan her şey.',
        'hero.exploreServices': 'Hizmetleri Keşfet',
        'hero.experience': '15 yıllık deneyimimiz ve 500\'den fazla başarılı projemizle işinizi geleceğe hazırlıyoruz.',
        'hero.expertTeam': 'Uzman Ekip',
        'hero.innovativeSolutions': 'Yenilikçi Çözümler',
        'hero.globalNetwork': 'Küresel Ağ',
        'services.viewAllServices': 'Tüm Hizmetleri Görüntüle',
        'services.techTrends': 'Yeni Trend Teknolojiler',
        'services.techDesc': 'AI, blockchain, IoT ve metaverse gibi gelişen teknolojileri işletmenize entegre ederek rekabet avantajı sağlayın.',
        'services.machineInvestment': 'Makine & Ekipman Yatırımı',
        'services.machineDesc': 'Sanayi yatırım kararları için uzman analiz ve fizibilite çalışmaları.',
        'services.chineseInvestors': 'Çinli Yatırımcılar',
        'services.chineseDesc': 'Çin pazarına giriş ve yatırım fırsatları için özel danışmanlık.',
        'services.importServices': 'İthalat Hizmetleri',
        'services.importDesc': 'Trend yakalama ve bayilik ilişkileri ile baştan sona ithalat operasyonları.',
        'services.processManagement': 'Süreç Yönetimi',
        'services.processDesc': 'Operasyonel verimliliği artıran kapsamlı süreç yönetimi. Anahtar çözümler.',
        'services.foreignTrade': 'Dış Ticaret İstihbaratı',
        'services.foreignDesc': 'Küresel pazarlarda rekabet avantajı sağlayan detaylı istihbarat.',
        'services.riskManagement': 'Risk Yönetimi',
        'services.riskDesc': 'İş risklerini belirleme, değerlendirme ve azaltma stratejileri.',
        'services.sectorAnalysis': 'Sektör Analizi',
        'services.sectorDesc': 'Derinlemesine sektör ve pazar araştırmaları.',
        'services.successRate': 'Başarı Oranı',
        'services.efficiency': 'Verimlilik Artışı',
        'services.countryAnalysis': 'Ülke Analizi',
        'services.successfulImport': 'Başarılı İthalat',
        'transforming.title': 'Stratejik Vizyonla İşletmeleri Dönüştürme',
        'transforming.desc1': 'İşletmelerin büyüme fırsatlarını belirlemesine, operasyonlarını optimize etmesine ve karmaşık pazar dinamiklerini yönetmesine yardımcı olan kapsamlı stratejik danışmanlık hizmetleri sunuyoruz.',
        'transforming.desc2': 'Uzman ekibimiz, derin endüstri bilgisi ile yenilikçi düşünceyi birleştirerek sürdürülebilir büyüme ve rekabet avantajı sağlayan çözümler sunar.',
        'transforming.projects': 'Tamamlanan Proje',
        'transforming.countries': 'Hizmet Verilen Ülke',
        'cta.title': 'İşletmenizi Dönüştürmeye Hazır mısınız?',
        'cta.subtitle': 'Stratejik danışmanlık hizmetlerimizin iş hedeflerinize ulaşmanıza ve yeni büyüme fırsatlarını kilitlemenize nasıl yardımcı olabileceğini tartışalım.',
        'cta.button': 'Danışmanlık Randevusu Al',
        'stats.clients': 'Müşteri',
        'stats.managed': 'Yönetilen Varlık',
        'stats.countries': 'Ülke Deneyimi',
        'stats.experience': 'Yıllık Tecrübe'
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Hero Text */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  {t('hero.title')}<br />
                  <span className="text-purple-600 relative">
                    {t('hero.titleHighlight')}
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-purple-600"></div>
                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                  {t('hero.subtitle')}
                </p>
              </div>
              
              <button className="bg-white border border-slate-300 text-slate-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 flex items-center gap-2">
                {t('hero.exploreServices')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <p className="text-slate-600 text-lg">
                {t('hero.experience')}
              </p>

              {/* Feature Cards */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-800">{t('hero.expertTeam')}</h3>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-800">{t('hero.innovativeSolutions')}</h3>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-800">{t('hero.globalNetwork')}</h3>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="rounded-2xl h-96 overflow-hidden shadow-lg">
                <Image
                  src="/hero-business-meeting.jpg"
                  alt="Professional business meeting with team collaboration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
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
          
          {/* Services Grid */}
          {!servicesLoading && !servicesError && services && services.length > 0 && (
            <div className="space-y-8">
              {/* Top Row - Large Card + 2 Small Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Large Main Card */}
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 text-white relative overflow-hidden h-full">
                    {/* Background Image */}
                    <div className="absolute inset-0 opacity-20">
                      <Image
                        src="/tech-consulting-analytics.jpg"
                        alt="Technology consulting"
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="absolute top-4 right-4 text-right">
                        <div className="bg-yellow-400 text-slate-800 px-3 py-1 rounded-full text-sm font-bold">95%</div>
                        <div className="text-white/70 text-xs mt-1">{t('services.successRate')}</div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4">{t('services.techTrends')}</h3>
                      <p className="text-white/90 mb-6 text-sm leading-relaxed">
                        {t('services.techDesc')}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2 text-white/80">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">AI & Machine Learning</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/80">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">IoT Integration</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/80">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Blockchain Solutions</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/80">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">Digital Transformation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Two Small Cards */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <Image
                        src="/machinery-investment-factory.jpg"
                        alt="Industrial machinery"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative z-10">
                      <h4 className="text-xl font-bold mb-3">{t('services.machineInvestment')}</h4>
                      <p className="text-white/80 text-sm mb-4">
                        {t('services.machineDesc')}
                      </p>
                      <button className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
                        Detailed Information
                      </button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-700 to-blue-700 rounded-2xl p-6 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <Image
                        src="/chinese-investors-meeting.jpg"
                        alt="Chinese investors"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative z-10">
                      <h4 className="text-xl font-bold mb-3">{t('services.chineseInvestors')}</h4>
                      <p className="text-white/80 text-sm mb-4">
                        {t('services.chineseDesc')}
                      </p>
                      <button className="text-purple-400 text-sm hover:text-purple-300 transition-colors">
                        Detailed Information
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Row - 3 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-6 text-white relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-right">
                    <div className="text-2xl font-bold">150+</div>
                    <div className="text-xs text-white/70">{t('services.successfulImport')}</div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold">{t('services.importServices')}</h4>
                  </div>
                  <p className="text-white/80 text-sm mb-4">
                    {t('services.importDesc')}
                  </p>
                  <div className="flex gap-2">
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">Trend Analizi</span>
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">Tedarikçi İlişkileri</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-right">
                    <div className="text-2xl font-bold">40%</div>
                    <div className="text-xs text-white/70">{t('services.efficiency')}</div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold">{t('services.processManagement')}</h4>
                  </div>
                  <p className="text-white/80 text-sm mb-4">
                    {t('services.processDesc')}
                  </p>
                  <div className="flex gap-2">
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">Süreç Optimizasyonu</span>
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">Verimlilik Analizi</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-6 text-white relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-right">
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-xs text-white/70">{t('services.countryAnalysis')}</div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold">{t('services.foreignTrade')}</h4>
                  </div>
                  <p className="text-white/80 text-sm mb-4">
                    {t('services.foreignDesc')}
                  </p>
                  <div className="flex gap-2">
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">Pazar Analizi</span>
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">Ticaret Fırsatları</span>
                  </div>
                </div>
              </div>

              {/* Bottom Row - 3 Small Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-6 text-white relative overflow-hidden">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold">{t('services.riskManagement')}</h4>
                  </div>
                  <p className="text-white/80 text-sm mb-4">
                    {t('services.riskDesc')}
                  </p>
                  <div className="flex gap-2">
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">Risk Analizi</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 text-white relative overflow-hidden">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold">{t('services.sectorAnalysis')}</h4>
                  </div>
                  <p className="text-white/80 text-sm mb-4">
                    {t('services.sectorDesc')}
                  </p>
                  <div className="flex gap-2">
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">Pazar Araştırması</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-6 text-white relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-right">
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-xs text-white/70">{t('services.countryAnalysis')}</div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold">{t('services.foreignTrade')}</h4>
                  </div>
                  <p className="text-white/80 text-sm mb-4">
                    {t('services.foreignDesc')}
                  </p>
                  <div className="flex gap-2">
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">Pazar Analizi</span>
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs">Ticaret Fırsatları</span>
                  </div>
                </div>
              </div>

              {/* View All Services Button */}
              <div className="text-center">
                <button className="bg-slate-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors flex items-center gap-2 mx-auto">
                  {t('services.viewAllServices')}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
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
              <div className="text-4xl font-bold text-white mb-2">1.2B+</div>
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