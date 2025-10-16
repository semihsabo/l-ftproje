import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getTranslations, createTranslationFunction } from '@/lib/translations';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Blog data - in a real app this would come from a CMS or database
const blogPosts = {
  'tech-trends-2024': {
    id: 'tech-trends-2024',
    title: '2024技术趋势：人工智能与商业世界',
    titleKey: 'blog.techTrends2024',
    excerpt: '关于人工智能技术在商业世界中创造的变革和未来机遇的综合分析。',
    excerptKey: 'blog.techTrendsExcerpt',
    content: `
      <h2>人工智能的崛起</h2>
      <p>2024年，人工智能技术正在以前所未有的速度改变着商业世界。从自动化流程到智能决策支持，AI正在重塑企业的运营方式。</p>
      
      <h3>主要趋势</h3>
      <ul>
        <li><strong>生成式AI</strong>：ChatGPT、Claude等工具正在改变内容创作和客户服务</li>
        <li><strong>机器学习</strong>：预测分析和个性化推荐系统</li>
        <li><strong>计算机视觉</strong>：图像识别和质量控制自动化</li>
        <li><strong>自然语言处理</strong>：智能客服和文档分析</li>
      </ul>
      
      <h3>商业应用</h3>
      <p>企业正在将AI集成到各个业务流程中，包括：</p>
      <ul>
        <li>客户关系管理优化</li>
        <li>供应链管理自动化</li>
        <li>财务分析和风险预测</li>
        <li>人力资源和人才招聘</li>
      </ul>
      
      <h3>未来展望</h3>
      <p>随着AI技术的不断发展，我们可以期待更多创新应用的出现。企业需要制定清晰的AI战略，确保技术投资能够带来实际价值。</p>
    `,
    author: 'Dr. Mehmet Yılmaz',
    date: '2024-12-15',
    readTime: '6 min',
    category: 'technology',
    categoryKey: 'blog.technology',
    image: '/api/placeholder/800/400',
    featured: true,
    tags: ['人工智能', '机器学习', '商业创新', '技术趋势']
  },
  'china-turkey-trade': {
    id: 'china-turkey-trade',
    title: '中土贸易桥梁：新机遇',
    titleKey: 'blog.chinaTurkeyBridge',
    excerpt: '我们详细探讨两国之间的贸易潜力和投资机会。',
    excerptKey: 'blog.bridgeExcerpt',
    content: `
      <h2>战略合作伙伴关系</h2>
      <p>中国和土耳其作为"一带一路"倡议的重要参与者，正在加强双边贸易和投资合作。两国在基础设施、能源、制造业等领域的合作潜力巨大。</p>
      
      <h3>贸易现状</h3>
      <ul>
        <li>双边贸易额持续增长</li>
        <li>中国对土耳其投资增加</li>
        <li>土耳其产品在中国市场的接受度提高</li>
        <li>电子商务和数字贸易快速发展</li>
      </ul>
      
      <h3>投资机会</h3>
      <p>主要投资领域包括：</p>
      <ul>
        <li><strong>基础设施</strong>：港口、铁路、机场建设</li>
        <li><strong>能源</strong>：可再生能源和传统能源项目</li>
        <li><strong>制造业</strong>：汽车、电子、纺织行业</li>
        <li><strong>服务业</strong>：金融、物流、旅游</li>
      </ul>
      
      <h3>挑战与机遇</h3>
      <p>尽管存在一些挑战，如文化差异和监管环境，但两国政府都在积极推动合作，为企业提供了良好的发展环境。</p>
    `,
    author: 'Ayşe Can',
    date: '2024-12-10',
    readTime: '5 min',
    category: 'trade',
    categoryKey: 'blog.trade',
    image: '/api/placeholder/800/400',
    featured: true,
    tags: ['中土贸易', '一带一路', '投资机会', '国际贸易']
  },
  'startup-risk-management': {
    id: 'startup-risk-management',
    title: '初创企业投资中的风险管理',
    titleKey: 'blog.startupRiskManagement',
    excerpt: '了解如何评估和管理初创项目中的风险因素。',
    excerptKey: 'blog.startupRiskExcerpt',
    content: `
      <h2>风险识别与评估</h2>
      <p>初创企业投资涉及多种风险，包括市场风险、技术风险、财务风险和运营风险。投资者需要建立完善的风险评估体系。</p>
      
      <h3>主要风险类型</h3>
      <ul>
        <li><strong>市场风险</strong>：市场需求不确定性和竞争压力</li>
        <li><strong>技术风险</strong>：技术可行性和知识产权保护</li>
        <li><strong>财务风险</strong>：现金流管理和融资需求</li>
        <li><strong>团队风险</strong>：核心团队稳定性和执行力</li>
      </ul>
      
      <h3>风险管理策略</h3>
      <p>有效的风险管理包括：</p>
      <ul>
        <li>多元化投资组合</li>
        <li>阶段性投资和里程碑管理</li>
        <li>尽职调查和持续监控</li>
        <li>退出策略规划</li>
      </ul>
      
      <h3>最佳实践</h3>
      <p>成功的风险管理者通常具备深厚的行业经验、敏锐的市场洞察力和强大的执行能力。建立长期合作关系和信任基础至关重要。</p>
    `,
    author: 'Can Derin',
    date: '2024-12-13',
    readTime: '7 min',
    category: 'investment',
    categoryKey: 'blog.investment',
    image: '/api/placeholder/800/400',
    featured: false,
    tags: ['风险管理', '初创企业', '投资策略', '创业']
  }
};

export default async function BlogDetail({ params }) {
  const resolvedParams = await params;
  const { locale, id } = resolvedParams || { locale: 'en', id: '' };
  const translations = await getTranslations(locale);
  const t = createTranslationFunction(translations);

  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">文章未找到</h1>
            <p className="text-slate-600 mb-8">您要查找的文章不存在或已被删除。</p>
            <Link 
              href={`/${locale}/blog`}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              返回博客
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span>{t(post.categoryKey)}</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {post.excerpt}
            </p>
            
            {/* Author and Meta Info */}
            <div className="flex items-center justify-center gap-6 text-slate-600">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-medium">{post.author}</div>
                  <div className="text-sm text-slate-500">作者</div>
                </div>
              </div>
              <div className="text-center">
                <div className="font-medium">{post.date}</div>
                <div className="text-sm text-slate-500">发布日期</div>
              </div>
              <div className="text-center">
                <div className="font-medium">{post.readTime}</div>
                <div className="text-sm text-slate-500">阅读时间</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-slate-500 text-center">
              <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-lg font-medium">文章配图</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-slate max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">相关标签</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">相关文章</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(blogPosts)
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  href={`/${locale}/blog/${relatedPost.id}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {t(relatedPost.categoryKey)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <span>{relatedPost.author}</span>
                      <span>{relatedPost.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}



