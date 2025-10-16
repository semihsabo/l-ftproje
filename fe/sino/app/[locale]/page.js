'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

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

  // Translation function with all content
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
        'services.newTech': 'New Trend Technologies',
        'services.newTechDesc': 'Integrate developing technologies like AI, blockchain, IoT, and metaverse into your business to gain a competitive advantage.',
        'services.aiMachineLearning': 'AI & Machine Learning',
        'services.iotIntegration': 'IoT Integration',
        'services.blockchainSolutions': 'Blockchain Solutions',
        'services.digitalTransformation': 'Digital Transformation',
        'services.successRate': 'Success Rate',
        'services.popularService': 'Popular Service',
        'services.machineInvestment': 'Machine & Equipment Investment',
        'services.machineDesc': 'Expert analysis and feasibility studies for industrial investment decisions.',
        'services.chineseInvestors': 'Chinese Investors',
        'services.chineseDesc': 'Special consultancy for entering the Chinese market and investment opportunities.',
        'services.importServices': 'Import Services',
        'services.importDesc': 'Catching trends and dealership relations, end-to-end import operations.',
        'services.successfulImports': 'Successful Imports',
        'services.trendAnalysis': 'Trend Analysis',
        'services.supplierRelations': 'Supplier Relations',
        'services.processManagement': 'Process Management',
        'services.processDesc': 'Comprehensive process management solutions that increase operational efficiency.',
        'services.efficiencyIncrease': 'Efficiency Increase',
        'services.processOptimization': 'Process Optimization',
        'services.efficiencyAnalysis': 'Efficiency Analysis',
        'services.riskManagement': 'Risk Management',
        'services.riskDesc': 'Strategies for identifying, assessing, and mitigating business risks.',
        'services.riskAnalysis': 'Risk Analysis',
        'services.sectorAnalysis': 'Sector Analysis',
        'services.sectorAnalysisDesc': 'In-depth sector and market research.',
        'services.marketResearch': 'Market Research',
        'services.foreignTradeIntelligence': 'Foreign Trade Intelligence',
        'services.foreignTradeDesc': 'Detailed intelligence providing competitive advantage in global markets.',
        'services.countryAnalysis': 'Country Analysis',
        'services.viewAllServices': 'View All Services',
        'transforming.title': 'Transforming Businesses Through Strategic Vision',
        'transforming.subtitle1': 'At SCENORIA, we believe in empowering businesses to thrive in a rapidly evolving global landscape. Our strategic consulting services are designed to unlock new growth opportunities, optimize operations, and navigate complex market dynamics with confidence.',
        'transforming.subtitle2': 'With a deep understanding of various industries and a proven track record of success, we partner with our clients to develop tailored solutions that drive sustainable value. From market entry strategies to digital transformation roadmaps, our expertise ensures your business is prepared for the future.',
        'transforming.projectsCompleted': 'Projects Completed',
        'transforming.countriesServed': 'Countries Served',
        'cta.title': 'Ready to Transform Your Business?',
        'cta.subtitle': 'Let\'s discuss how our strategic consulting services can help you achieve your business objectives and unlock new growth opportunities.',
        'cta.scheduleConsultation': 'Schedule a Consultation',
        'stats.customers': 'Customers',
        'stats.assetsManaged': 'Assets Managed',
        'stats.countryExperience': 'Country Experience',
        'stats.yearsExperience': 'Years of Experience',
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
        'services.newTech': '新兴技术趋势',
        'services.newTechDesc': '将人工智能、区块链、物联网和元宇宙等新兴技术融入您的业务，以获得竞争优势。',
        'services.aiMachineLearning': '人工智能与机器学习',
        'services.iotIntegration': '物联网集成',
        'services.blockchainSolutions': '区块链解决方案',
        'services.digitalTransformation': '数字化转型',
        'services.successRate': '成功率',
        'services.popularService': '热门服务',
        'services.machineInvestment': '机械设备投资',
        'services.machineDesc': '为工业投资决策提供专家分析和可行性研究。',
        'services.chineseInvestors': '中国投资者',
        'services.chineseDesc': '为进入中国市场和投资机会提供专业咨询。',
        'services.importServices': '进口服务',
        'services.importDesc': '通过捕捉趋势和经销商关系，提供端到端的进口运营。',
        'services.successfulImports': '成功进口',
        'services.trendAnalysis': '趋势分析',
        'services.supplierRelations': '供应商关系',
        'services.processManagement': '流程管理',
        'services.processDesc': '提供全面的流程管理解决方案，提高运营效率。',
        'services.efficiencyIncrease': '效率提升',
        'services.processOptimization': '流程优化',
        'services.efficiencyAnalysis': '效率分析',
        'services.riskManagement': '风险管理',
        'services.riskDesc': '识别、评估和减轻业务风险的策略。',
        'services.riskAnalysis': '风险分析',
        'services.sectorAnalysis': '行业分析',
        'services.sectorAnalysisDesc': '深入的行业和市场研究。',
        'services.marketResearch': '市场研究',
        'services.foreignTradeIntelligence': '外贸情报',
        'services.foreignTradeDesc': '提供详细情报，在全球市场中获得竞争优势。',
        'services.countryAnalysis': '国家分析',
        'services.viewAllServices': '查看所有服务',
        'transforming.title': '以战略愿景赋能企业转型',
        'transforming.subtitle1': '在SCENORIA，我们致力于帮助企业在快速变化的全球环境中蓬勃发展。我们的战略咨询服务旨在开启新的增长机遇，优化运营，并自信地驾驭复杂的市场动态。',
        'transforming.subtitle2': '凭借对各行业的深刻理解和成功的经验，我们与客户合作开发量身定制的解决方案，以驱动可持续价值。从市场进入策略到数字化转型路线图，我们的专业知识确保您的企业为未来做好准备。',
        'transforming.projectsCompleted': '已完成项目',
        'transforming.countriesServed': '服务国家',
        'cta.title': '准备好改变您的业务了吗？',
        'cta.subtitle': '让我们讨论我们的战略咨询服务如何帮助您实现业务目标并开启新的增长机遇。',
        'cta.scheduleConsultation': '安排咨询',
        'stats.customers': '客户',
        'stats.assetsManaged': '管理资产',
        'stats.countryExperience': '国家经验',
        'stats.yearsExperience': '年经验',
      },
      tr: {
        'hero.title': 'İşinizi',
        'hero.titleHighlight': 'Zirveye Taşıyın',
        'hero.subtitle': 'Teknoloji trendlerinden yatırım stratejilerine kadar, küresel pazarlarda sürdürülebilir büyüme için ihtiyacınız olan her şey.',
        'hero.exploreServices': 'Hizmetleri Keşfet',
        'hero.experience': '15 yılı aşkın tecrübemiz ve 500\'den fazla başarılı projemizle işinizi geleceğe hazırlıyoruz.',
        'hero.expertTeam': 'Uzman Ekip',
        'hero.innovativeSolutions': 'Yenilikçi Çözümler',
        'hero.globalNetwork': 'Küresel Ağ',
        'services.newTech': 'Yeni Trend Teknolojiler',
        'services.newTechDesc': 'AI, blockchain, IoT ve metaverse gibi gelişen teknolojileri işletmenize entegre ederek rekabet avantajı sağlayın.',
        'services.aiMachineLearning': 'AI & Makine Öğrenimi',
        'services.iotIntegration': 'IoT Entegrasyonu',
        'services.blockchainSolutions': 'Blockchain Çözümleri',
        'services.digitalTransformation': 'Dijital Dönüşüm',
        'services.successRate': 'Başarı Oranı',
        'services.popularService': 'Popüler Hizmet',
        'services.machineInvestment': 'Makine & Ekipman Yatırımı',
        'services.machineDesc': 'Sanayii yatırım kararları için uzman analiz ve fizibilite çalışmaları.',
        'services.chineseInvestors': 'Çinli Yatırımcılar',
        'services.chineseDesc': 'Çin pazarına giriş ve yatırım fırsatları için özel danışmanlık.',
        'services.importServices': 'İthalat Hizmetleri',
        'services.importDesc': 'Trend yakalama ve bayilik ilişkileri ile baştan sona ithalat operasyonları.',
        'services.successfulImports': 'Başarılı İthalat',
        'services.trendAnalysis': 'Trend Analizi',
        'services.supplierRelations': 'Tedarikçi İlişkileri',
        'services.processManagement': 'Süreç Yönetimi',
        'services.processDesc': 'Operasyonel verimliliği artıran kapsamlı süreç yönetimi çözümleri.',
        'services.efficiencyIncrease': 'Verimlilik Artışı',
        'services.processOptimization': 'Süreç Optimizasyonu',
        'services.efficiencyAnalysis': 'Verimlilik Analizi',
        'services.riskManagement': 'Risk Yönetimi',
        'services.riskDesc': 'İş risklerini belirleme, değerlendirme ve azaltma stratejileri.',
        'services.riskAnalysis': 'Risk Analizi',
        'services.sectorAnalysis': 'Sektör Analizi',
        'services.sectorAnalysisDesc': 'Derinlemesine sektör ve pazar araştırmaları.',
        'services.marketResearch': 'Pazar Araştırması',
        'services.foreignTradeIntelligence': 'Dış Ticaret İstihbaratı',
        'services.foreignTradeDesc': 'Küresel pazarlarda rekabet avantajı sağlayan detaylı istihbarat.',
        'services.countryAnalysis': 'Ülke Analizi',
        'services.viewAllServices': 'Tüm Hizmetleri Görüntüle',
        'transforming.title': 'Stratejik Vizyonla İşletmeleri Dönüştürme',
        'transforming.subtitle1': 'SCENORIA olarak, hızla gelişen küresel ortamda işletmelerin başarılı olmasını sağlamaya inanıyoruz. Stratejik danışmanlık hizmetlerimiz, yeni büyüme fırsatlarının kilidini açmak, operasyonları optimize etmek ve karmaşık pazar dinamiklerini güvenle yönetmek için tasarlanmıştır.',
        'transforming.subtitle2': 'Çeşitli sektörlere ilişkin derinlemesine anlayışımız ve kanıtlanmış başarı geçmişimizle, sürdürülebilir değer sağlayan özel çözümler geliştirmek için müşterilerimizle ortaklık kuruyoruz. Pazar giriş stratejilerinden dijital dönüşüm yol haritalarına kadar uzmanlığımız, işletmenizin geleceğe hazır olmasını sağlar.',
        'transforming.projectsCompleted': 'Tamamlanan Projeler',
        'transforming.countriesServed': 'Hizmet Verilen Ülkeler',
        'cta.title': 'İşletmenizi Dönüştürmeye Hazır mısınız?',
        'cta.subtitle': 'Stratejik danışmanlık hizmetlerimizin iş hedeflerinize ulaşmanıza ve yeni büyüme fırsatlarının kilidini açmanıza nasıl yardımcı olabileceğini tartışalım.',
        'cta.scheduleConsultation': 'Danışmanlık Randevusu Al',
        'stats.customers': 'Müşteri',
        'stats.assetsManaged': 'Yönetilen Varlık',
        'stats.countryExperience': 'Ülke Deneyimi',
        'stats.yearsExperience': 'Yıllık Tecrübe',
      }
    };
    return translations[locale]?.[key] || translations.en[key] || key;
  };

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

          {/* Vertical lines */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 bottom-0 left-1/4 w-px bg-gray-300"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-300"></div>
            <div className="absolute top-0 bottom-0 left-3/4 w-px bg-gray-300"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-4">
                {t('hero.title')}{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                  {t('hero.titleHighlight')}
                </span>
                <span className="block w-2/3 h-2 bg-gradient-to-r from-purple-600 to-blue-600 mt-4 rounded-full"></span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-md">
                {t('hero.subtitle')}
              </p>
              <Link
                href={`/${locale}/services`}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-lg"
              >
                {t('hero.exploreServices')}
                <svg className="ml-3 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Right Image and Features */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500 ease-in-out">
                <Image
                  src="/hero-business-meeting.jpg"
                  alt="Professional business meeting with team collaboration"
                  width={800}
                  height={500}
                  layout="responsive"
                  objectFit="cover"
                  className="rounded-2xl"
                  priority
                />
              </div>
              <div className="mt-8 text-center text-slate-600 text-lg font-medium">
                {t('hero.experience')}
              </div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl mb-2">👥</div>
                  <p className="text-sm font-medium text-slate-700">{t('hero.expertTeam')}</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl mb-2">💡</div>
                  <p className="text-sm font-medium text-slate-700">{t('hero.innovativeSolutions')}</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl mb-2">🌐</div>
                  <p className="text-sm font-medium text-slate-700">{t('hero.globalNetwork')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center text-slate-900 mb-12">
            {t('services.viewAllServices')}
          </h2>

          {/* Top Row: 1 Large Card + 2 Small Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Large Card: New Trend Technologies */}
            <div className="lg:col-span-2 bg-gradient-to-br from-slate-800 to-purple-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 opacity-30">
                <Image
                  src="/tech-consulting-analytics.jpg"
                  alt="Technology consulting and data analysis"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 bg-yellow-500 text-slate-800 px-3 py-1 rounded-full text-sm font-medium">
                {t('services.popularService')}
              </div>
              <div className="absolute top-4 right-28 bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                95% {t('services.successRate')}
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
                  <Link href={`/${locale}/services`} className="bg-white text-slate-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    {t('services.viewAllServices')}
                  </Link>
                  <Link href={`/${locale}/services/1`} className="border border-white text-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-slate-800 transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Two Small Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg">
                <div className="absolute inset-0 opacity-30">
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
                  <Link href={`/${locale}/services/2`} className="bg-white text-slate-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                    Detailed Information
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-700 to-blue-700 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg">
                <div className="absolute inset-0 opacity-30">
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
                  <Link href={`/${locale}/services/3`} className="bg-white text-slate-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
                    Detailed Information
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Row: 3 Medium Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Import Services */}
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 opacity-30">
                <Image
                  src="/import-services-port.jpg"
                  alt="Import services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                150+ {t('services.successfulImports')}
              </div>
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-3">{t('services.importServices')}</h4>
                <p className="text-white/80 text-sm mb-4">
                  {t('services.importDesc')}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">{t('services.trendAnalysis')}</span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">{t('services.supplierRelations')}</span>
                </div>
              </div>
            </div>

            {/* Process Management */}
            <div className="bg-gradient-to-br from-purple-800 to-blue-800 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 opacity-30">
                <Image
                  src="/hero-data-analysis.jpg"
                  alt="Process management"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                40% {t('services.efficiencyIncrease')}
              </div>
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-3">{t('services.processManagement')}</h4>
                <p className="text-white/80 text-sm mb-4">
                  {t('services.processDesc')}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">{t('services.processOptimization')}</span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">{t('services.efficiencyAnalysis')}</span>
                </div>
              </div>
            </div>

            {/* Foreign Trade Intelligence */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 opacity-30">
                <Image
                  src="/globe.svg"
                  alt="Foreign trade"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute top-4 right-4 bg-yellow-500 text-slate-800 px-3 py-1 rounded-full text-sm font-medium">
                50+ {t('services.countryAnalysis')}
              </div>
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-3">{t('services.foreignTradeIntelligence')}</h4>
                <p className="text-white/80 text-sm mb-4">
                  {t('services.foreignTradeDesc')}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">{t('services.marketResearch')}</span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">{t('services.countryAnalysis')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: 3 Small Cards (Risk, Sector, Foreign Trade) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Risk Management */}
            <div className="bg-gradient-to-br from-red-600 to-rose-600 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/80 to-rose-600/80"></div>
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
                  {t('services.riskDesc')}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">{t('services.riskAnalysis')}</span>
                </div>
              </div>
            </div>

            {/* Sector Analysis */}
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg">
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
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">{t('services.marketResearch')}</span>
                </div>
              </div>
            </div>

            {/* Foreign Trade Intelligence (repeated for 3rd card) */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-6 text-white relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-cyan-600/80"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21v-8m0 0V3m0 8h8m-8 0H4" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold">{t('services.foreignTradeIntelligence')}</h4>
                </div>
                <p className="text-white/80 text-sm mb-4">
                  {t('services.foreignTradeDesc')}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">{t('services.countryAnalysis')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href={`/${locale}/services`} className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-800 hover:bg-slate-700 transition-colors duration-300 shadow-lg">
              {t('services.viewAllServices')}
              <svg className="ml-3 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Transforming Businesses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
                {t('transforming.title')}
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                {t('transforming.subtitle1')}
              </p>
              <p className="text-lg text-slate-600 mb-8">
                {t('transforming.subtitle2')}
              </p>
              <div className="flex space-x-8">
                <div className="text-center">
                  <p className="text-5xl font-bold text-blue-600">500+</p>
                  <p className="text-lg text-slate-600">{t('transforming.projectsCompleted')}</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-purple-600">50+</p>
                  <p className="text-lg text-slate-600">{t('transforming.countriesServed')}</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/about-business-meeting.jpg"
                alt="Business meeting"
                width={800}
                height={500}
                layout="responsive"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-lg opacity-90 mb-10">
            {t('cta.subtitle')}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            {t('cta.scheduleConsultation')}
            <svg className="ml-3 -mr-1 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div>
              <p className="text-6xl font-extrabold text-blue-600 mb-2">500+</p>
              <p className="text-xl text-slate-700">{t('stats.customers')}</p>
            </div>
            <div>
              <p className="text-6xl font-extrabold text-purple-600 mb-2">1.2B+</p>
              <p className="text-xl text-slate-700">{t('stats.assetsManaged')}</p>
            </div>
            <div>
              <p className="text-6xl font-extrabold text-green-600 mb-2">50+</p>
              <p className="text-xl text-slate-700">{t('stats.countryExperience')}</p>
            </div>
            <div>
              <p className="text-6xl font-extrabold text-red-600 mb-2">15+</p>
              <p className="text-xl text-slate-700">{t('stats.yearsExperience')}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}