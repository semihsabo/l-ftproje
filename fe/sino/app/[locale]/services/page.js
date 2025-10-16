'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Services({ params }) {
  const [locale, setLocale] = useState('en');

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
        'services.newTrendTech': 'New Trend Technologies',
        'services.newTrendTechDesc': 'Transform your business operations with comprehensive process management solutions.',
        'services.techEvaluation': 'Technology Evaluation',
        'services.digitalTransformation': 'Digital Transformation',
        'services.innovationStrategy': 'Innovation Strategy',
        'services.techImplementation': 'Technology Implementation',
        'services.technology': 'Technology',
        'services.machineEquipmentInv': 'Machine & Equipment Investment',
        'services.machineEquipmentDesc': 'Industrial investment decisions for expert analysis and feasibility studies.',
        'services.investmentAnalysis': 'Investment Analysis',
        'services.equipmentEvaluation': 'Equipment Evaluation',
        'services.roiOptimization': 'ROI Optimization',
        'services.supplierSelection': 'Supplier Selection',
        'services.investment': 'Investment',
        'services.chineseInvestorServices': 'Chinese Investor Services',
        'services.chineseInvestorDesc': 'Special consultancy for entering the Chinese market and investment opportunities.',
        'services.marketEntry': 'Market Entry',
        'services.investmentGuidance': 'Investment Guidance',
        'services.culturalBridge': 'Cultural Bridge',
        'services.regulatoryCompliance': 'Regulatory Compliance',
        'services.international': 'International',
        'services.importServices': 'Import Services',
        'services.importServicesDesc': 'Catching trends and dealership relations, end-to-end import operations.',
        'services.trendAnalysis': 'Trend Analysis',
        'services.supplierRelations': 'Supplier Relations',
        'services.logisticsOptimization': 'Logistics Optimization',
        'services.customsClearance': 'Customs Clearance',
        'services.trade': 'Trade',
        'services.processManagement': 'Process Management',
        'services.processManagementDesc': 'Comprehensive process management that increases operational efficiency. Key solutions.',
        'services.processOptimization': 'Process Optimization',
        'services.efficiencyAnalysis': 'Efficiency Analysis',
        'services.workflowDesign': 'Workflow Design',
        'services.performanceMetrics': 'Performance Metrics',
        'services.operations': 'Operations',
        'services.foreignTradeIntelligence': 'Foreign Trade Intelligence',
        'services.foreignTradeDesc': 'Detailed intelligence providing competitive advantage in global markets.',
        'services.marketIntelligence': 'Market Intelligence',
        'services.competitiveAnalysis': 'Competitive Analysis',
        'services.tradeOpportunities': 'Trade Opportunities',
        'services.riskAssessment': 'Risk Assessment',
        'services.intelligence': 'Intelligence',
        'services.viewAllServices': 'View All Services',
        'services.getStarted': 'Get Started',
        'services.expertSolutions': 'Expert Solutions',
        'services.transformBusiness': 'Transform Your Business',
        'services.transformDescription': 'Comprehensive solutions for sustainable growth and competitive advantage.',
        'services.needCustomSolutions': 'Need Custom Solutions?',
        'services.customSolutionsDesc': 'We provide tailored solutions to meet your specific business requirements and challenges.',
        'services.freeConsultation': 'Free Consultation',
        'services.downloadBrochure': 'Download Brochure',
        'services.viewDetails': 'View Details',
        'services.chineseInvestors': 'Chinese Investor Services',
        'services.chineseInvestorsDesc': 'Special consultancy for entering the Chinese market and investment opportunities.',
        'services.marketEntryStrategy': 'Market Entry Strategy',
        'services.investorRelations': 'Investor Relations',
        'services.culturalConsulting': 'Cultural Consulting',
        'services.partnershipDevelopment': 'Partnership Development',
        'services.importStrategy': 'Import Strategy',
        'services.marketResearch': 'Market Research',
        'services.riskManagement': 'Risk Management',
        'services.riskManagementDesc': 'Strategies for identifying, assessing, and mitigating business risks.',
        'services.riskAnalysis': 'Risk Analysis',
        'services.complianceManagement': 'Compliance Management',
        'services.businessContinuity': 'Business Continuity',
        'services.insuranceOptimization': 'Insurance Optimization',
        'services.risk': 'Risk'
      },
      zh: {
        'services.newTrendTech': '新趋势技术',
        'services.newTrendTechDesc': '通过全面的流程管理解决方案转变您的业务运营。',
        'services.techEvaluation': '技术评估',
        'services.digitalTransformation': '数字化转型',
        'services.innovationStrategy': '创新策略',
        'services.techImplementation': '技术实施',
        'services.technology': '技术',
        'services.machineEquipmentInv': '机械设备投资',
        'services.machineEquipmentDesc': '工业投资决策的专家分析和可行性研究。',
        'services.investmentAnalysis': '投资分析',
        'services.equipmentEvaluation': '设备评估',
        'services.roiOptimization': '投资回报率优化',
        'services.supplierSelection': '供应商选择',
        'services.investment': '投资',
        'services.chineseInvestorServices': '中国投资者服务',
        'services.chineseInvestorDesc': '进入中国市场和投资机会的专业咨询。',
        'services.marketEntry': '市场进入',
        'services.investmentGuidance': '投资指导',
        'services.culturalBridge': '文化桥梁',
        'services.regulatoryCompliance': '法规合规',
        'services.international': '国际',
        'services.importServices': '进口服务',
        'services.importServicesDesc': '捕捉趋势和代理关系，端到端进口运营。',
        'services.trendAnalysis': '趋势分析',
        'services.supplierRelations': '供应商关系',
        'services.logisticsOptimization': '物流优化',
        'services.customsClearance': '清关',
        'services.trade': '贸易',
        'services.processManagement': '流程管理',
        'services.processManagementDesc': '提高运营效率的综合流程管理。关键解决方案。',
        'services.processOptimization': '流程优化',
        'services.efficiencyAnalysis': '效率分析',
        'services.workflowDesign': '工作流设计',
        'services.performanceMetrics': '性能指标',
        'services.operations': '运营',
        'services.foreignTradeIntelligence': '外贸情报',
        'services.foreignTradeDesc': '在全球市场提供竞争优势的详细情报。',
        'services.marketIntelligence': '市场情报',
        'services.competitiveAnalysis': '竞争分析',
        'services.tradeOpportunities': '贸易机会',
        'services.riskAssessment': '风险评估',
        'services.intelligence': '情报',
        'services.viewAllServices': '查看所有服务',
        'services.getStarted': '立即开始',
        'services.expertSolutions': '专家解决方案',
        'services.transformBusiness': '转变您的业务',
        'services.transformDescription': '为可持续增长和竞争优势提供综合解决方案。',
        'services.needCustomSolutions': '需要定制解决方案？',
        'services.customSolutionsDesc': '我们提供量身定制的解决方案，满足您的特定业务需求和挑战。',
        'services.freeConsultation': '免费咨询',
        'services.downloadBrochure': '下载手册',
        'services.viewDetails': '查看详情',
        'services.chineseInvestors': '中国投资者服务',
        'services.chineseInvestorsDesc': '进入中国市场和投资机会的专业咨询。',
        'services.marketEntryStrategy': '市场进入策略',
        'services.investorRelations': '投资者关系',
        'services.culturalConsulting': '文化咨询',
        'services.partnershipDevelopment': '合作伙伴发展',
        'services.importStrategy': '进口策略',
        'services.marketResearch': '市场研究',
        'services.riskManagement': '风险管理',
        'services.riskManagementDesc': '识别、评估和减轻业务风险的策略。',
        'services.riskAnalysis': '风险分析',
        'services.complianceManagement': '合规管理',
        'services.businessContinuity': '业务连续性',
        'services.insuranceOptimization': '保险优化',
        'services.risk': '风险'
      },
      tr: {
        'services.newTrendTech': 'Yeni Trend Teknolojiler',
        'services.newTrendTechDesc': 'Kapsamlı süreç yönetimi çözümleri ile iş operasyonlarınızı dönüştürün.',
        'services.techEvaluation': 'Teknoloji Değerlendirmesi',
        'services.digitalTransformation': 'Dijital Dönüşüm',
        'services.innovationStrategy': 'İnovasyon Stratejisi',
        'services.techImplementation': 'Teknoloji Uygulaması',
        'services.technology': 'Teknoloji',
        'services.machineEquipmentInv': 'Makine & Ekipman Yatırımı',
        'services.machineEquipmentDesc': 'Sanayi yatırım kararları için uzman analiz ve fizibilite çalışmaları.',
        'services.investmentAnalysis': 'Yatırım Analizi',
        'services.equipmentEvaluation': 'Ekipman Değerlendirmesi',
        'services.roiOptimization': 'ROI Optimizasyonu',
        'services.supplierSelection': 'Tedarikçi Seçimi',
        'services.investment': 'Yatırım',
        'services.chineseInvestorServices': 'Çinli Yatırımcı Hizmetleri',
        'services.chineseInvestorDesc': 'Çin pazarına giriş ve yatırım fırsatları için özel danışmanlık.',
        'services.marketEntry': 'Pazar Girişi',
        'services.investmentGuidance': 'Yatırım Rehberliği',
        'services.culturalBridge': 'Kültürel Köprü',
        'services.regulatoryCompliance': 'Düzenleyici Uyumluluk',
        'services.international': 'Uluslararası',
        'services.importServices': 'İthalat Hizmetleri',
        'services.importServicesDesc': 'Trend yakalama ve bayilik ilişkileri ile baştan sona ithalat operasyonları.',
        'services.trendAnalysis': 'Trend Analizi',
        'services.supplierRelations': 'Tedarikçi İlişkileri',
        'services.logisticsOptimization': 'Lojistik Optimizasyonu',
        'services.customsClearance': 'Gümrük İşlemleri',
        'services.trade': 'Ticaret',
        'services.processManagement': 'Süreç Yönetimi',
        'services.processManagementDesc': 'Operasyonel verimliliği artıran kapsamlı süreç yönetimi. Anahtar çözümler.',
        'services.processOptimization': 'Süreç Optimizasyonu',
        'services.efficiencyAnalysis': 'Verimlilik Analizi',
        'services.workflowDesign': 'İş Akışı Tasarımı',
        'services.performanceMetrics': 'Performans Metrikleri',
        'services.operations': 'Operasyonlar',
        'services.foreignTradeIntelligence': 'Dış Ticaret İstihbaratı',
        'services.foreignTradeDesc': 'Küresel pazarlarda rekabet avantajı sağlayan detaylı istihbarat.',
        'services.marketIntelligence': 'Pazar İstihbaratı',
        'services.competitiveAnalysis': 'Rekabet Analizi',
        'services.tradeOpportunities': 'Ticaret Fırsatları',
        'services.riskAssessment': 'Risk Değerlendirmesi',
        'services.intelligence': 'İstihbarat',
        'services.viewAllServices': 'Tüm Hizmetleri Görüntüle',
        'services.getStarted': 'Hemen Başla',
        'services.expertSolutions': 'Uzman Çözümler',
        'services.transformBusiness': 'İşinizi Dönüştürün',
        'services.transformDescription': 'Sürdürülebilir büyüme ve rekabet avantajı için kapsamlı çözümler.',
        'services.needCustomSolutions': 'Özel Çözümler mi Gerekiyor?',
        'services.customSolutionsDesc': 'Spesifik iş gereksinimlerinizi ve zorluklarınızı karşılamak için özel çözümler sunuyoruz.',
        'services.freeConsultation': 'Ücretsiz Danışmanlık',
        'services.downloadBrochure': 'Broşür İndir',
        'services.viewDetails': 'Detayları Görüntüle',
        'services.chineseInvestors': 'Çinli Yatırımcı Hizmetleri',
        'services.chineseInvestorsDesc': 'Çin pazarına giriş ve yatırım fırsatları için özel danışmanlık.',
        'services.marketEntryStrategy': 'Pazar Giriş Stratejisi',
        'services.investorRelations': 'Yatırımcı İlişkileri',
        'services.culturalConsulting': 'Kültürel Danışmanlık',
        'services.partnershipDevelopment': 'Ortaklık Geliştirme',
        'services.importStrategy': 'İthalat Stratejisi',
        'services.marketResearch': 'Pazar Araştırması',
        'services.riskManagement': 'Risk Yönetimi',
        'services.riskManagementDesc': 'İş risklerini belirleme, değerlendirme ve azaltma stratejileri.',
        'services.riskAnalysis': 'Risk Analizi',
        'services.complianceManagement': 'Uyumluluk Yönetimi',
        'services.businessContinuity': 'İş Sürekliliği',
        'services.insuranceOptimization': 'Sigorta Optimizasyonu',
        'services.risk': 'Risk'
      }
    };
    return translations[locale]?.[key] || translations.en[key] || key;
  };
  const services = [
    {
      id: 'new-trend-technology',
      title: t('services.newTrendTech'),
      description: t('services.newTrendTechDesc'),
      features: [t('services.techEvaluation'), t('services.digitalTransformation'), t('services.innovationStrategy'), t('services.techImplementation')],
      gradient: "from-blue-50 to-purple-50",
      iconBg: "bg-blue-500",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      category: t('services.technology'),
      buttonColor: "bg-gradient-to-r from-blue-500 to-purple-500"
    },
    {
      id: 'machinery-equipment-investment',
      title: t('services.machineEquipmentInv'),
      description: t('services.machineEquipmentDesc'),
      features: [t('services.investmentAnalysis'), t('services.equipmentEvaluation'), t('services.roiOptimization'), t('services.supplierSelection')],
      gradient: "from-gray-50 to-gray-100",
      iconBg: "bg-gray-600",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
      category: t('services.investment'),
      buttonColor: "bg-gray-600"
    },
    {
      id: 'chinese-investors',
      title: t('services.chineseInvestors'),
      description: t('services.chineseInvestorsDesc'),
      features: [t('services.marketEntryStrategy'), t('services.investorRelations'), t('services.culturalConsulting'), t('services.partnershipDevelopment')],
      gradient: "from-green-50 to-green-100",
      iconBg: "bg-green-500",
      icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      category: t('services.international'),
      buttonColor: "bg-green-500"
    },
    {
      id: 'import-services',
      title: t('services.importServices'),
      description: t('services.importServicesDesc'),
      features: [t('services.trendAnalysis'), t('services.supplierRelations'), t('services.marketResearch'), t('services.importStrategy')],
      gradient: "from-green-50 to-green-100",
      iconBg: "bg-green-600",
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
      category: t('services.trade'),
      buttonColor: "bg-green-600"
    },
    {
      id: 'process-management',
      title: t('services.processManagement'),
      description: t('services.processManagementDesc'),
      features: [t('services.processOptimization'), t('services.workflowDesign'), t('services.efficiencyAnalysis'), t('services.qualityManagement')],
      gradient: "from-purple-50 to-purple-100",
      iconBg: "bg-purple-500",
      icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
      category: t('services.operation'),
      buttonColor: "bg-purple-500"
    },
    {
      id: 'risk-management-consulting',
      title: t('services.riskManagementConsulting'),
      description: t('services.riskManagementDesc'),
      features: [t('services.riskAssessment'), t('services.mitigationStrategies'), t('services.compliance'), t('services.crisisManagement')],
      gradient: "from-red-50 to-red-100",
      iconBg: "bg-red-500",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      category: t('services.risk'),
      buttonColor: "bg-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 pt-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Expert Solutions Button */}
          <div className="mb-8">
            <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 mx-auto">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              {t('services.expertSolutions')}
            </button>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
            {t('services.transformBusiness')}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t('services.transformDescription')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`bg-gradient-to-br ${service.gradient} rounded-2xl p-8 text-slate-800 relative overflow-hidden group hover:scale-105 transition-transform duration-300 shadow-lg`}>
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${service.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                    </svg>
                  </div>
                  
                  {/* Category Tag */}
                  <div className="mb-4">
                    <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      {service.category}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">{service.title}</h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className={`w-2 h-2 ${service.iconBg} rounded-full flex-shrink-0`}></div>
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <Link 
                    href={`/${locale}/services/${service.id}`}
                    className={`${service.buttonColor} text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300 w-full flex items-center justify-center gap-2`}
                  >
                    {t('services.viewDetails')}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            {/* Icon */}
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              {t('services.needCustomSolutions')}
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {t('services.customSolutionsDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                {t('services.freeConsultation')}
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                {t('services.downloadBrochure')}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

