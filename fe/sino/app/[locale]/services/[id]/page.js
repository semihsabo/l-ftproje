'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ServiceDetail({ params }) {
  const [locale, setLocale] = useState('en');
  const [id, setId] = useState('');

  // Get locale and id from params
  useEffect(() => {
    const getParams = async () => {
  const resolvedParams = await params;
      setLocale(resolvedParams?.locale || 'en');
      setId(resolvedParams?.id || '');
    };
    getParams();
  }, [params]);

  // Translation function
  const t = (key) => {
    const translations = {
      en: {
        'services.newTrendTech': 'New Trend Technologies',
        'services.newTrendTechDesc': 'Transform your business operations with comprehensive process management solutions.',
        'services.technology': 'Technology',
        'services.viewAllServices': 'View All Services',
        'services.getStarted': 'Get Started',
        'serviceDetail.getStartedToday': 'Get Started Today',
        'serviceDetail.viewAllServices': 'View All Services',
        'serviceDetail.serviceIllustration': 'Service Illustration',
        'serviceDetail.keyFeatures': 'Key Features',
        'serviceDetail.ourProvenProcess': 'Our Proven Process',
        'serviceDetail.provenProcessDesc': 'We follow a systematic approach to deliver exceptional results for every project.',
        'serviceDetail.step': 'Step',
        'serviceDetail.whatOurClientsSay': 'What Our Clients Say',
        'serviceDetail.readyToGetStarted': 'Ready to Get Started?',
        'serviceDetail.contactExperts': 'Contact our experts to discuss your project requirements and get a customized solution.',
        'serviceDetail.startYourProject': 'Start Your Project',
        'serviceDetail.serviceNotFound': 'Service Not Found',
        'serviceDetail.serviceNotFoundDesc': 'The service you are looking for could not be found.',
        'serviceDetail.backToServices': 'Back to Services',
        'services.machineEquipmentInv': 'Machinery & Equipment Investment',
        'services.machineEquipmentDesc': 'Expert analysis and feasibility studies for industrial investment decisions.',
        'services.investment': 'Investment',
        'services.international': 'International',
        'services.trade': 'Trade',
        'services.operation': 'Operation',
        'services.risk': 'Risk',
        'services.investmentAnalysis': 'Investment Analysis',
        'services.investmentAnalysisDesc': 'Comprehensive analysis of investment opportunities and market conditions',
        'services.equipmentEvaluation': 'Equipment Evaluation',
        'services.equipmentEvaluationDesc': 'Technical assessment and performance analysis of equipment options',
        'services.roiOptimization': 'ROI Optimization',
        'services.roiOptimizationDesc': 'Maximize return on investment through strategic planning',
        'services.supplierSelection': 'Supplier Selection',
        'services.supplierSelectionDesc': 'Identify and evaluate reliable suppliers and manufacturers',
        'services.riskManagementConsulting': 'Risk Management Consulting',
        'services.aiMachineLearning': 'AI & Machine Learning',
        'services.aiMachineLearningDesc': 'Implement cutting-edge AI solutions for business optimization',
        'services.blockchainSolutions': 'Blockchain Solutions',
        'services.blockchainSolutionsDesc': 'Secure and transparent blockchain implementations',
        'services.iotIntegration': 'IoT Integration',
        'services.iotIntegrationDesc': 'Connect and optimize your devices and systems',
        'services.digitalTransformation': 'Digital Transformation',
        'services.digitalTransformationDesc': 'Complete digital overhaul of business processes',
        'services.technologyAssessment': 'Technology Assessment',
        'services.technologyAssessmentDesc': 'We begin with a comprehensive evaluation of your current technology infrastructure and identify areas for improvement.',
        'services.trendAnalysis': 'Trend Analysis',
        'services.trendAnalysisDesc': 'Our experts research and analyze emerging technologies relevant to your industry and business needs.',
        'services.solutionDesign': 'Solution Design',
        'services.solutionDesignDesc': 'We design customized technology solutions that align with your strategic objectives and budget constraints.',
        'services.implementation': 'Implementation',
        'services.implementationDesc': 'Our team provides hands-on support during the implementation phase to ensure smooth deployment.',
        'services.optimization': 'Optimization',
        'services.optimizationDesc': 'We continuously monitor and optimize your technology solutions for maximum performance and ROI.',
        'testimonials.ahmetQuote': 'Their technology consulting transformed our entire digital infrastructure. The results exceeded our expectations.',
        'testimonials.mariaQuote': 'The AI implementation they provided has increased our efficiency by 40%. Highly recommended!'
      },
      zh: {
        'services.newTrendTech': '新趋势技术',
        'services.newTrendTechDesc': '通过全面的流程管理解决方案转变您的业务运营。',
        'services.technology': '技术',
        'services.viewAllServices': '查看所有服务',
        'services.getStarted': '立即开始',
        'serviceDetail.getStartedToday': '立即开始',
        'serviceDetail.viewAllServices': '查看所有服务',
        'serviceDetail.serviceIllustration': '服务插图',
        'serviceDetail.keyFeatures': '主要特性',
        'serviceDetail.ourProvenProcess': '我们经过验证的流程',
        'serviceDetail.provenProcessDesc': '我们遵循系统化的方法，为每个项目提供卓越的结果。',
        'serviceDetail.step': '步骤',
        'serviceDetail.whatOurClientsSay': '客户评价',
        'serviceDetail.readyToGetStarted': '准备开始了吗？',
        'serviceDetail.contactExperts': '联系我们的专家，讨论您的项目需求并获得定制解决方案。',
        'serviceDetail.startYourProject': '开始您的项目',
        'serviceDetail.serviceNotFound': '服务未找到',
        'serviceDetail.serviceNotFoundDesc': '您查找的服务未找到。',
        'serviceDetail.backToServices': '返回服务',
        'services.machineEquipmentInv': '机械设备投资',
        'services.machineEquipmentDesc': '为工业投资决策提供专家分析和可行性研究。',
        'services.investment': '投资',
        'services.international': '国际',
        'services.trade': '贸易',
        'services.operation': '运营',
        'services.risk': '风险',
        'services.investmentAnalysis': '投资分析',
        'services.investmentAnalysisDesc': '投资机会和市场条件的综合分析',
        'services.equipmentEvaluation': '设备评估',
        'services.equipmentEvaluationDesc': '设备选项的技术评估和性能分析',
        'services.roiOptimization': '投资回报优化',
        'services.roiOptimizationDesc': '通过战略规划最大化投资回报',
        'services.supplierSelection': '供应商选择',
        'services.supplierSelectionDesc': '识别和评估可靠的供应商和制造商',
        'services.riskManagementConsulting': '风险管理咨询',
        'services.aiMachineLearning': '人工智能与机器学习',
        'services.aiMachineLearningDesc': '实施尖端AI解决方案以实现业务优化',
        'services.blockchainSolutions': '区块链解决方案',
        'services.blockchainSolutionsDesc': '安全透明的区块链实施',
        'services.iotIntegration': '物联网集成',
        'services.iotIntegrationDesc': '连接和优化您的设备和系统',
        'services.digitalTransformation': '数字化转型',
        'services.digitalTransformationDesc': '业务流程的完整数字化改造',
        'services.technologyAssessment': '技术评估',
        'services.technologyAssessmentDesc': '我们从全面评估您当前的技术基础设施开始，并识别改进领域。',
        'services.trendAnalysis': '趋势分析',
        'services.trendAnalysisDesc': '我们的专家研究和分析与您的行业和业务需求相关的新兴技术。',
        'services.solutionDesign': '解决方案设计',
        'services.solutionDesignDesc': '我们设计符合您战略目标和预算限制的定制技术解决方案。',
        'services.implementation': '实施',
        'services.implementationDesc': '我们的团队在实施阶段提供实际支持，确保顺利部署。',
        'services.optimization': '优化',
        'services.optimizationDesc': '我们持续监控和优化您的技术解决方案，以获得最大性能和投资回报。',
        'testimonials.ahmetQuote': '他们的技术咨询彻底改变了我们的数字基础设施。结果超出了我们的期望。',
        'testimonials.mariaQuote': '他们提供的AI实施将我们的效率提高了40%。强烈推荐！'
      },
      tr: {
        'services.newTrendTech': 'Yeni Trend Teknolojiler',
        'services.newTrendTechDesc': 'Kapsamlı süreç yönetimi çözümleri ile iş operasyonlarınızı dönüştürün.',
        'services.technology': 'Teknoloji',
        'services.viewAllServices': 'Tüm Hizmetleri Görüntüle',
        'services.getStarted': 'Hemen Başla',
        'serviceDetail.getStartedToday': 'Bugün Başla',
        'serviceDetail.viewAllServices': 'Tüm Hizmetleri Görüntüle',
        'serviceDetail.serviceIllustration': 'Hizmet İllüstrasyonu',
        'serviceDetail.keyFeatures': 'Temel Özellikler',
        'serviceDetail.ourProvenProcess': 'Kanıtlanmış Sürecimiz',
        'serviceDetail.provenProcessDesc': 'Her proje için olağanüstü sonuçlar sunmak için sistematik bir yaklaşım izliyoruz.',
        'serviceDetail.step': 'Adım',
        'serviceDetail.whatOurClientsSay': 'Müşterilerimiz Ne Diyor',
        'serviceDetail.readyToGetStarted': 'Başlamaya Hazır mısınız?',
        'serviceDetail.contactExperts': 'Proje gereksinimlerinizi görüşmek ve özel çözüm almak için uzmanlarımızla iletişime geçin.',
        'serviceDetail.startYourProject': 'Projenizi Başlatın',
        'serviceDetail.serviceNotFound': 'Hizmet Bulunamadı',
        'serviceDetail.serviceNotFoundDesc': 'Aradığınız hizmet bulunamadı.',
        'serviceDetail.backToServices': 'Hizmetlere Dön',
        'services.machineEquipmentInv': 'Makine & Ekipman Yatırımı',
        'services.machineEquipmentDesc': 'Sanayii yatırım kararları için uzman analiz ve fizibilite çalışmaları.',
        'services.investment': 'Yatırım',
        'services.international': 'Uluslararası',
        'services.trade': 'Ticaret',
        'services.operation': 'Operasyon',
        'services.risk': 'Risk',
        'services.investmentAnalysis': 'Yatırım Analizi',
        'services.investmentAnalysisDesc': 'Yatırım fırsatları ve pazar koşullarının kapsamlı analizi',
        'services.equipmentEvaluation': 'Ekipman Değerlendirmesi',
        'services.equipmentEvaluationDesc': 'Ekipman seçeneklerinin teknik değerlendirmesi ve performans analizi',
        'services.roiOptimization': 'Yatırım Getirisi Optimizasyonu',
        'services.roiOptimizationDesc': 'Stratejik planlama ile yatırım getirisini maksimize edin',
        'services.supplierSelection': 'Tedarikçi Seçimi',
        'services.supplierSelectionDesc': 'Güvenilir tedarikçileri ve üreticileri belirleyin ve değerlendirin',
        'services.riskManagementConsulting': 'Risk Yönetimi Danışmanlığı',
        'services.aiMachineLearning': 'AI & Makine Öğrenimi',
        'services.aiMachineLearningDesc': 'İş optimizasyonu için en son teknoloji AI çözümleri uygulayın',
        'services.blockchainSolutions': 'Blockchain Çözümleri',
        'services.blockchainSolutionsDesc': 'Güvenli ve şeffaf blockchain uygulamaları',
        'services.iotIntegration': 'IoT Entegrasyonu',
        'services.iotIntegrationDesc': 'Cihazlarınızı ve sistemlerinizi bağlayın ve optimize edin',
        'services.digitalTransformation': 'Dijital Dönüşüm',
        'services.digitalTransformationDesc': 'İş süreçlerinin tam dijital dönüşümü',
        'services.technologyAssessment': 'Teknoloji Değerlendirmesi',
        'services.technologyAssessmentDesc': 'Mevcut teknoloji altyapınızın kapsamlı değerlendirmesi ile başlıyoruz ve iyileştirme alanlarını belirliyoruz.',
        'services.trendAnalysis': 'Trend Analizi',
        'services.trendAnalysisDesc': 'Uzmanlarımız, sektörünüz ve iş ihtiyaçlarınızla ilgili gelişen teknolojileri araştırır ve analiz eder.',
        'services.solutionDesign': 'Çözüm Tasarımı',
        'services.solutionDesignDesc': 'Stratejik hedefleriniz ve bütçe kısıtlarınızla uyumlu özel teknoloji çözümleri tasarlıyoruz.',
        'services.implementation': 'Uygulama',
        'services.implementationDesc': 'Ekibimiz, sorunsuz dağıtım sağlamak için uygulama aşamasında pratik destek sağlar.',
        'services.optimization': 'Optimizasyon',
        'services.optimizationDesc': 'Maksimum performans ve yatırım getirisi için teknoloji çözümlerinizi sürekli izliyor ve optimize ediyoruz.',
        'testimonials.ahmetQuote': 'Teknoloji danışmanlıkları tüm dijital altyapımızı dönüştürdü. Sonuçlar beklentilerimizi aştı.',
        'testimonials.mariaQuote': 'Sağladıkları AI uygulaması verimliliğimizi %40 artırdı. Kesinlikle tavsiye ederim!'
      }
    };
    return translations[locale]?.[key] || translations.en[key] || key;
  };

  // Services data - in a real app this would come from a CMS or database
  const servicesData = {
    'new-trend-technology': {
      id: 'new-trend-technology',
      title: t('services.newTrendTech'),
      titleKey: 'services.newTrendTech',
      description: t('services.newTrendTechDesc'),
      descriptionKey: 'services.newTrendTechDesc',
    icon: 'tech',
    category: 'technology',
    categoryKey: 'services.technology',
    image: '/api/placeholder/800/600',
    heroImage: '/api/placeholder/1200/500',
    content: `
      <h2>Technology Innovation at Its Finest</h2>
      <p>In today's rapidly evolving digital landscape, staying ahead of technology trends is crucial for business success. Our comprehensive technology consulting services help you navigate the complex world of emerging technologies and make informed decisions that drive growth.</p>
      
      <h3>Our Approach</h3>
      <p>We combine deep technical expertise with business acumen to deliver technology solutions that align with your strategic objectives. Our process includes:</p>
      <ul>
        <li><strong>Technology Assessment:</strong> Comprehensive evaluation of current systems and infrastructure</li>
        <li><strong>Trend Analysis:</strong> In-depth research on emerging technologies relevant to your industry</li>
        <li><strong>Implementation Planning:</strong> Detailed roadmaps for technology adoption and integration</li>
        <li><strong>Performance Optimization:</strong> Continuous monitoring and improvement of technology solutions</li>
      </ul>
      
      <h3>Key Technologies We Cover</h3>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <h4>Artificial Intelligence & Machine Learning</h4>
          <ul>
            <li>Predictive Analytics</li>
            <li>Natural Language Processing</li>
            <li>Computer Vision</li>
            <li>Automated Decision Making</li>
          </ul>
        </div>
        <div>
          <h4>Blockchain Solutions</h4>
          <ul>
            <li>Smart Contracts</li>
            <li>Supply Chain Transparency</li>
            <li>Digital Identity</li>
            <li>Cryptocurrency Integration</li>
          </ul>
        </div>
        <div>
          <h4>IoT Integration</h4>
          <ul>
            <li>Sensor Networks</li>
            <li>Real-time Monitoring</li>
            <li>Predictive Maintenance</li>
            <li>Smart City Solutions</li>
          </ul>
        </div>
        <div>
          <h4>Digital Transformation</h4>
          <ul>
            <li>Cloud Migration</li>
            <li>Process Automation</li>
            <li>Customer Experience Enhancement</li>
            <li>Data-Driven Decision Making</li>
          </ul>
        </div>
      </div>
      
      <h3>Benefits</h3>
      <ul>
        <li>Increased operational efficiency through automation</li>
        <li>Enhanced customer experience with innovative solutions</li>
        <li>Reduced costs through optimized processes</li>
        <li>Competitive advantage through early technology adoption</li>
        <li>Future-proofed business operations</li>
      </ul>
    `,
    features: [
      { title: t('services.aiMachineLearning'), description: t('services.aiMachineLearningDesc') },
      { title: t('services.blockchainSolutions'), description: t('services.blockchainSolutionsDesc') },
      { title: t('services.iotIntegration'), description: t('services.iotIntegrationDesc') },
      { title: t('services.digitalTransformation'), description: t('services.digitalTransformationDesc') }
    ],
    process: [
      { step: 1, title: t('services.technologyAssessment'), description: t('services.technologyAssessmentDesc') },
      { step: 2, title: t('services.trendAnalysis'), description: t('services.trendAnalysisDesc') },
      { step: 3, title: t('services.solutionDesign'), description: t('services.solutionDesignDesc') },
      { step: 4, title: t('services.implementation'), description: t('services.implementationDesc') },
      { step: 5, title: t('services.optimization'), description: t('services.optimizationDesc') }
    ],
    testimonials: [
      { name: 'Ahmet Yılmaz', company: 'TechCorp', quote: t('testimonials.ahmetQuote') },
      { name: 'Maria Rodriguez', company: 'InnovateLabs', quote: t('testimonials.mariaQuote') }
    ]
  },
  'machinery-equipment-investment': {
    id: 'machinery-equipment-investment',
    title: t('services.machineEquipmentInv'),
    titleKey: 'services.machineEquipmentInv',
    description: t('services.machineEquipmentDesc'),
    descriptionKey: 'services.machineEquipmentDesc',
    icon: 'investment',
    category: 'investment',
    categoryKey: 'services.investment',
    image: '/api/placeholder/800/600',
    heroImage: '/api/placeholder/1200/500',
    content: `
      <h2>Strategic Machinery & Equipment Investment</h2>
      <p>Making the right machinery and equipment investments is critical for industrial success. Our expert consultants help you navigate complex investment decisions with data-driven insights and strategic planning.</p>
      
      <h3>Investment Analysis Framework</h3>
      <p>We employ a comprehensive framework to evaluate machinery and equipment investments:</p>
      <ul>
        <li><strong>Technical Evaluation:</strong> Assessment of equipment specifications and performance metrics</li>
        <li><strong>Financial Analysis:</strong> ROI calculations, payback periods, and cost-benefit analysis</li>
        <li><strong>Market Research:</strong> Supplier analysis and market trend evaluation</li>
        <li><strong>Risk Assessment:</strong> Identification and mitigation of investment risks</li>
      </ul>
      
      <h3>Key Investment Areas</h3>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <h4>Industrial Machinery</h4>
          <ul>
            <li>Manufacturing Equipment</li>
            <li>Production Lines</li>
            <li>Quality Control Systems</li>
            <li>Automation Solutions</li>
          </ul>
        </div>
        <div>
          <h4>Technology Infrastructure</h4>
          <ul>
            <li>IT Hardware</li>
            <li>Network Equipment</li>
            <li>Security Systems</li>
            <li>Data Storage Solutions</li>
          </ul>
        </div>
        <div>
          <h4>Specialized Equipment</h4>
          <ul>
            <li>Laboratory Instruments</li>
            <li>Testing Equipment</li>
            <li>Measurement Tools</li>
            <li>Diagnostic Devices</li>
          </ul>
        </div>
        <div>
          <h4>Maintenance & Support</h4>
          <ul>
            <li>Preventive Maintenance</li>
            <li>Training Programs</li>
            <li>Technical Support</li>
            <li>Warranty Management</li>
          </ul>
        </div>
      </div>
      
      <h3>Investment Benefits</h3>
      <ul>
        <li>Optimized equipment selection based on technical and financial criteria</li>
        <li>Reduced investment risks through comprehensive analysis</li>
        <li>Improved ROI through strategic planning and implementation</li>
        <li>Access to best-in-class suppliers and manufacturers</li>
        <li>Long-term cost savings through efficient operations</li>
      </ul>
    `,
    features: [
      { title: t('services.investmentAnalysis'), description: t('services.investmentAnalysisDesc') },
      { title: t('services.equipmentEvaluation'), description: t('services.equipmentEvaluationDesc') },
      { title: t('services.roiOptimization'), description: t('services.roiOptimizationDesc') },
      { title: t('services.supplierSelection'), description: t('services.supplierSelectionDesc') }
    ],
    process: [
      { step: 1, title: 'Investment Assessment', description: 'We evaluate your current equipment portfolio and identify investment opportunities.' },
      { step: 2, title: 'Market Research', description: 'Our team researches available equipment options and supplier capabilities.' },
      { step: 3, title: 'Financial Analysis', description: 'We perform detailed ROI calculations and financial projections for each option.' },
      { step: 4, title: 'Selection & Procurement', description: 'We assist with equipment selection and procurement processes.' },
      { step: 5, title: 'Implementation Support', description: 'We provide ongoing support during installation and optimization phases.' }
    ],
    testimonials: [
      { name: 'Engin Kaya', company: 'Manufacturing Plus', quote: 'Their investment analysis saved us over $2M in equipment costs while improving our production efficiency.' },
      { name: 'Sarah Johnson', company: 'Industrial Solutions', quote: 'The ROI optimization strategies they provided exceeded our expectations by 25%.' }
    ]
  },
  'chinese-investors': {
    id: 'chinese-investors',
    title: t('services.chineseInvestors'),
    titleKey: 'services.chineseInvestors',
    description: t('services.chineseInvestorsDesc'),
    descriptionKey: 'services.chineseInvestorsDesc',
    icon: 'international',
    category: 'international',
    categoryKey: 'services.international',
    image: '/api/placeholder/800/600',
    heroImage: '/api/placeholder/1200/500',
    content: `
      <h2>Bridging Chinese Investment Opportunities</h2>
      <p>China's growing economy and expanding global reach present unique opportunities for international investment. Our specialized services help Chinese investors navigate foreign markets while providing local expertise and cultural insights.</p>
      
      <h3>Investment Facilitation Services</h3>
      <p>We provide comprehensive support for Chinese investors looking to expand globally:</p>
      <ul>
        <li><strong>Market Entry Strategy:</strong> Strategic planning for entering new international markets</li>
        <li><strong>Cultural Consulting:</strong> Understanding local business practices and cultural nuances</li>
        <li><strong>Regulatory Compliance:</strong> Navigating complex international regulations and requirements</li>
        <li><strong>Partnership Development:</strong> Building strategic alliances with local partners</li>
      </ul>
      
      <h3>Key Investment Sectors</h3>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <h4>Technology & Innovation</h4>
          <ul>
            <li>AI and Machine Learning</li>
            <li>E-commerce Platforms</li>
            <li>Fintech Solutions</li>
            <li>Digital Infrastructure</li>
          </ul>
        </div>
        <div>
          <h4>Manufacturing & Industry</h4>
          <ul>
            <li>Automotive Components</li>
            <li>Electronics Manufacturing</li>
            <li>Industrial Automation</li>
            <li>Renewable Energy</li>
          </ul>
        </div>
        <div>
          <h4>Real Estate & Infrastructure</h4>
          <ul>
            <li>Commercial Properties</li>
            <li>Industrial Facilities</li>
            <li>Infrastructure Projects</li>
            <li>Logistics Centers</li>
          </ul>
        </div>
        <div>
          <h4>Consumer Markets</h4>
          <ul>
            <li>Retail Expansion</li>
            <li>Food & Beverage</li>
            <li>Fashion & Lifestyle</li>
            <li>Healthcare Services</li>
          </ul>
        </div>
      </div>
      
      <h3>Strategic Advantages</h3>
      <ul>
        <li>Deep understanding of Chinese business culture and practices</li>
        <li>Extensive network of local partners and service providers</li>
        <li>Comprehensive knowledge of international regulations and compliance</li>
        <li>Proven track record in cross-border investment facilitation</li>
        <li>Bilingual expertise for seamless communication</li>
      </ul>
    `,
    features: [
      { title: 'Market Entry Strategy', description: 'Strategic planning for successful international market entry' },
      { title: 'Cultural Bridge', description: 'Cultural consulting and local business practice guidance' },
      { title: 'Regulatory Compliance', description: 'Expert guidance on international regulations and requirements' },
      { title: 'Investment Facilitation', description: 'End-to-end support for cross-border investment processes' }
    ],
    process: [
      { step: 1, title: 'Market Research', description: 'We conduct comprehensive research on target markets and investment opportunities.' },
      { step: 2, title: 'Strategy Development', description: 'We develop customized market entry strategies based on your investment goals.' },
      { step: 3, title: 'Partnership Building', description: 'We facilitate connections with local partners and service providers.' },
      { step: 4, title: 'Implementation Support', description: 'We provide ongoing support during the investment implementation process.' },
      { step: 5, title: 'Performance Monitoring', description: 'We monitor investment performance and provide optimization recommendations.' }
    ],
    testimonials: [
      { name: 'Li Wei', company: 'China Investment Group', quote: 'Their cultural expertise and local knowledge were invaluable in our European expansion.' },
      { name: 'Chen Ming', company: 'Global Ventures', quote: 'The regulatory guidance they provided saved us months of compliance work.' }
    ]
  },
  'import-services': {
    id: 'import-services',
    title: 'Import Services',
    titleKey: 'services.importServices',
    description: 'Comprehensive import consulting with advanced trend analysis and strategic dealership management. We help you identify profitable import opportunities and build strong supplier relationships.',
    descriptionKey: 'services.importServicesDesc',
    icon: 'trade',
    category: 'trade',
    categoryKey: 'services.trade',
    image: '/api/placeholder/800/600',
    heroImage: '/api/placeholder/1200/500',
    content: `
      <h2>Strategic Import Solutions</h2>
      <p>Navigate the complex world of international trade with our comprehensive import consulting services. We help businesses identify profitable import opportunities, establish strong supplier relationships, and optimize their import operations.</p>
      
      <h3>Import Consulting Services</h3>
      <p>Our import services cover the entire spectrum of international trade:</p>
      <ul>
        <li><strong>Market Research:</strong> In-depth analysis of target markets and product demand</li>
        <li><strong>Supplier Identification:</strong> Finding reliable and cost-effective suppliers worldwide</li>
        <li><strong>Trend Analysis:</strong> Identifying emerging market trends and opportunities</li>
        <li><strong>Dealership Management:</strong> Building and maintaining strategic partnerships</li>
      </ul>
      
      <h3>Key Import Sectors</h3>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <h4>Consumer Goods</h4>
          <ul>
            <li>Electronics and Technology</li>
            <li>Fashion and Apparel</li>
            <li>Home and Garden Products</li>
            <li>Health and Beauty</li>
          </ul>
        </div>
        <div>
          <h4>Industrial Products</h4>
          <ul>
            <li>Machinery and Equipment</li>
            <li>Raw Materials</li>
            <li>Automotive Parts</li>
            <li>Construction Materials</li>
          </ul>
        </div>
        <div>
          <h4>Specialized Items</h4>
          <ul>
            <li>Medical Devices</li>
            <li>Food and Beverages</li>
            <li>Textiles and Fabrics</li>
            <li>Chemical Products</li>
          </ul>
        </div>
        <div>
          <h4>Digital Products</h4>
          <ul>
            <li>Software Solutions</li>
            <li>Digital Services</li>
            <li>Online Platforms</li>
            <li>E-commerce Tools</li>
          </ul>
        </div>
      </div>
      
      <h3>Strategic Advantages</h3>
      <ul>
        <li>Access to global supplier networks and market intelligence</li>
        <li>Reduced import costs through strategic sourcing</li>
        <li>Compliance with international trade regulations</li>
        <li>Risk mitigation through supplier diversification</li>
        <li>Scalable import solutions for business growth</li>
      </ul>
    `,
    features: [
      { title: 'Trend Analysis', description: 'Advanced market trend analysis for profitable import opportunities' },
      { title: 'Dealership Management', description: 'Strategic partnership development and management' },
      { title: 'Supplier Networks', description: 'Access to verified global supplier networks' },
      { title: 'Market Intelligence', description: 'Comprehensive market research and competitive analysis' }
    ],
    process: [
      { step: 1, title: 'Market Assessment', description: 'We analyze target markets and identify import opportunities.' },
      { step: 2, title: 'Supplier Research', description: 'Our team researches and verifies potential suppliers worldwide.' },
      { step: 3, title: 'Partnership Development', description: 'We facilitate introductions and partnership negotiations.' },
      { step: 4, title: 'Implementation Support', description: 'We provide ongoing support for import operations and logistics.' },
      { step: 5, title: 'Performance Optimization', description: 'We monitor and optimize import processes for maximum efficiency.' }
    ],
    testimonials: [
      { name: 'David Kim', company: 'Global Imports Ltd', quote: 'Their import consulting services helped us expand into 5 new markets within 6 months.' },
      { name: 'Anna Petrova', company: 'EuroTrade Solutions', quote: 'The supplier network they provided reduced our costs by 30% while improving quality.' }
    ]
  },
  'process-management': {
    id: 'process-management',
    title: 'Process Management',
    titleKey: 'services.processManagement',
    description: 'Transform your business operations with comprehensive process management solutions. We streamline workflows, eliminate inefficiencies, and implement best practices for optimal performance.',
    descriptionKey: 'services.processManagementDesc',
    icon: 'operation',
    category: 'operation',
    categoryKey: 'services.operation',
    image: '/api/placeholder/800/600',
    heroImage: '/api/placeholder/1200/500',
    content: `
      <h2>Optimized Business Processes</h2>
      <p>Transform your business operations with our comprehensive process management solutions. We help organizations streamline workflows, eliminate inefficiencies, and implement best practices for optimal performance and sustainable growth.</p>
      
      <h3>Process Optimization Framework</h3>
      <p>Our systematic approach to process management includes:</p>
      <ul>
        <li><strong>Process Mapping:</strong> Visual documentation of current business processes</li>
        <li><strong>Gap Analysis:</strong> Identification of inefficiencies and improvement opportunities</li>
        <li><strong>Workflow Design:</strong> Creation of optimized process flows and procedures</li>
        <li><strong>Performance Metrics:</strong> Implementation of KPI tracking and monitoring systems</li>
      </ul>
      
      <h3>Key Process Areas</h3>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <h4>Operational Processes</h4>
          <ul>
            <li>Supply Chain Management</li>
            <li>Production Planning</li>
            <li>Quality Control</li>
            <li>Inventory Management</li>
          </ul>
        </div>
        <div>
          <h4>Administrative Processes</h4>
          <ul>
            <li>Document Management</li>
            <li>Approval Workflows</li>
            <li>Resource Allocation</li>
            <li>Performance Reviews</li>
          </ul>
        </div>
        <div>
          <h4>Customer-Facing Processes</h4>
          <ul>
            <li>Order Processing</li>
            <li>Customer Service</li>
            <li>Sales Management</li>
            <li>Support Ticketing</li>
          </ul>
        </div>
        <div>
          <h4>Strategic Processes</h4>
          <ul>
            <li>Strategic Planning</li>
            <li>Budget Management</li>
            <li>Risk Assessment</li>
            <li>Change Management</li>
          </ul>
        </div>
      </div>
      
      <h3>Process Benefits</h3>
      <ul>
        <li>Increased operational efficiency and productivity</li>
        <li>Reduced costs through process optimization</li>
        <li>Improved quality and consistency in operations</li>
        <li>Enhanced customer satisfaction and service delivery</li>
        <li>Better compliance with industry standards and regulations</li>
      </ul>
    `,
    features: [
      { title: 'Process Optimization', description: 'Systematic improvement of business processes for maximum efficiency' },
      { title: 'Performance Metrics', description: 'Comprehensive KPI tracking and performance monitoring systems' },
      { title: 'Workflow Design', description: 'Custom workflow solutions tailored to your business needs' },
      { title: 'Continuous Improvement', description: 'Ongoing process refinement and optimization strategies' }
    ],
    process: [
      { step: 1, title: 'Process Assessment', description: 'We analyze your current processes and identify improvement opportunities.' },
      { step: 2, title: 'Gap Analysis', description: 'We identify inefficiencies and bottlenecks in your operations.' },
      { step: 3, title: 'Solution Design', description: 'We design optimized processes and workflow solutions.' },
      { step: 4, title: 'Implementation', description: 'We implement new processes with change management support.' },
      { step: 5, title: 'Monitoring & Optimization', description: 'We monitor performance and continuously optimize processes.' }
    ],
    testimonials: [
      { name: 'Michael Chen', company: 'Manufacturing Solutions', quote: 'Process optimization increased our efficiency by 45% and reduced operational costs significantly.' },
      { name: 'Sarah Williams', company: 'Service Excellence Inc', quote: 'The workflow redesign they provided transformed our customer service operations completely.' }
    ]
  },
  'risk-management-consulting': {
    id: 'risk-management-consulting',
    title: 'Risk Management Consulting',
    titleKey: 'services.riskManagementConsulting',
    description: 'Strategic risk management consulting to identify, assess, and mitigate business risks. We develop comprehensive risk frameworks and contingency plans for business continuity.',
    descriptionKey: 'services.riskManagementDesc',
    icon: 'risk',
    category: 'risk',
    categoryKey: 'services.risk',
    image: '/api/placeholder/800/600',
    heroImage: '/api/placeholder/1200/500',
    content: `
      <h2>Comprehensive Risk Management</h2>
      <p>Protect your business from potential threats with our strategic risk management consulting services. We help organizations identify, assess, and mitigate risks while developing comprehensive frameworks for business continuity and resilience.</p>
      
      <h3>Risk Management Framework</h3>
      <p>Our comprehensive approach to risk management includes:</p>
      <ul>
        <li><strong>Risk Identification:</strong> Systematic identification of potential business risks</li>
        <li><strong>Risk Assessment:</strong> Quantitative and qualitative analysis of risk impact and probability</li>
        <li><strong>Mitigation Strategies:</strong> Development of effective risk mitigation and control measures</li>
        <li><strong>Contingency Planning:</strong> Creation of business continuity and disaster recovery plans</li>
      </ul>
      
      <h3>Key Risk Categories</h3>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <h4>Operational Risks</h4>
          <ul>
            <li>Supply Chain Disruptions</li>
            <li>Technology Failures</li>
            <li>Human Resources</li>
            <li>Process Inefficiencies</li>
          </ul>
        </div>
        <div>
          <h4>Financial Risks</h4>
          <ul>
            <li>Market Volatility</li>
            <li>Credit and Liquidity</li>
            <li>Currency Fluctuations</li>
            <li>Interest Rate Changes</li>
          </ul>
        </div>
        <div>
          <h4>Strategic Risks</h4>
          <ul>
            <li>Competitive Threats</li>
            <li>Market Changes</li>
            <li>Regulatory Changes</li>
            <li>Reputation Management</li>
          </ul>
        </div>
        <div>
          <h4>Compliance Risks</h4>
          <ul>
            <li>Regulatory Compliance</li>
            <li>Legal Obligations</li>
            <li>Industry Standards</li>
            <li>Data Protection</li>
          </ul>
        </div>
      </div>
      
      <h3>Risk Management Benefits</h3>
      <ul>
        <li>Enhanced business resilience and continuity planning</li>
        <li>Reduced financial losses through proactive risk mitigation</li>
        <li>Improved decision-making with comprehensive risk insights</li>
        <li>Better compliance with regulatory requirements</li>
        <li>Increased stakeholder confidence and trust</li>
      </ul>
    `,
    features: [
      { title: 'Risk Assessment', description: 'Comprehensive identification and analysis of business risks' },
      { title: 'Mitigation Strategies', description: 'Effective risk mitigation and control measure implementation' },
      { title: 'Contingency Planning', description: 'Business continuity and disaster recovery plan development' },
      { title: 'Compliance Management', description: 'Regulatory compliance and risk monitoring systems' }
    ],
    process: [
      { step: 1, title: 'Risk Identification', description: 'We systematically identify all potential risks to your business.' },
      { step: 2, title: 'Risk Analysis', description: 'We assess the impact and probability of identified risks.' },
      { step: 3, title: 'Strategy Development', description: 'We develop comprehensive risk mitigation strategies.' },
      { step: 4, title: 'Implementation', description: 'We implement risk controls and monitoring systems.' },
      { step: 5, title: 'Review & Update', description: 'We continuously review and update risk management strategies.' }
    ],
    testimonials: [
      { name: 'Robert Johnson', company: 'SecureCorp', quote: 'Their risk management framework helped us avoid major losses during market volatility.' },
      { name: 'Lisa Zhang', company: 'Financial Services Group', quote: 'The compliance management system they implemented saved us from regulatory penalties.' }
    ]
  }
  };

  const service = servicesData[id];

  if (!service) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">{t('serviceDetail.serviceNotFound')}</h1>
            <p className="text-slate-600 mb-8">{t('serviceDetail.serviceNotFoundDesc')}</p>
            <Link 
              href={`/${locale}/services`}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              {t('serviceDetail.backToServices')}
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span>{t(service.categoryKey)}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href={`/${locale}/contact`}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  {t('serviceDetail.getStartedToday')}
                </Link>
                <Link 
                  href={`/${locale}/services`}
                  className="border border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-medium hover:bg-slate-50 transition-colors"
                >
                  {t('serviceDetail.viewAllServices')}
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-slate-500 text-center">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <p className="text-lg font-medium">{t('serviceDetail.serviceIllustration')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">{t('serviceDetail.keyFeatures')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-slate max-w-none text-slate-800">
            <div 
              className="text-slate-800 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-800 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-slate-800 [&>h3]:mb-3 [&>h4]:text-lg [&>h4]:font-semibold [&>h4]:text-slate-800 [&>h4]:mb-2 [&>p]:text-slate-700 [&>p]:mb-4 [&>li]:text-slate-700 [&>li]:mb-2 [&>strong]:text-slate-800 [&>strong]:font-semibold [&_.grid]:grid [&_.grid-cols-2]:grid-cols-2 [&_.gap-4]:gap-4"
              dangerouslySetInnerHTML={{ __html: service.content }} 
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">{t('serviceDetail.ourProvenProcess')}</h2>
          <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            {t('serviceDetail.provenProcessDesc')}
          </p>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 transform -translate-y-1/2 hidden lg:block"></div>
            <div className="grid lg:grid-cols-5 gap-8">
              {service.process.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white border-4 border-slate-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-2xl font-bold text-slate-800">{step.step}</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{t('serviceDetail.step')} 0{step.step}: {step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">{t('serviceDetail.whatOurClientsSay')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {service.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                    <p className="text-slate-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-slate-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">{t('serviceDetail.readyToGetStarted')}</h2>
          <p className="text-xl text-blue-100 mb-8">
            {t('serviceDetail.contactExperts')}
          </p>
          <Link 
            href={`/${locale}/contact`}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-slate-50 transition-colors inline-block"
          >
            {t('serviceDetail.startYourProject')}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
