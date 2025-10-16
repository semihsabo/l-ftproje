import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getTranslations, createTranslationFunction } from '@/lib/translations';
import Link from 'next/link';

export default async function Services({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams || { locale: 'en' };
  const translations = await getTranslations(locale);
  const t = createTranslationFunction(translations);
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

