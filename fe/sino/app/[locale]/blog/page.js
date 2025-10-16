'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import useTranslation from '@/hooks/useTranslation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Blog({ params }) {
  const resolvedParams = React.use(params);
  const { locale } = resolvedParams || { locale: 'en' };
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Get current locale from pathname for localized links
  const pathname = usePathname();
  const segments = pathname.split('/');
  const currentLocale = segments[1] && ['en', 'zh'].includes(segments[1]) ? segments[1] : 'en';
  
  const getLocalizedPath = (path) => {
    return `/${currentLocale}${path}`;
  };

  const categories = [
    { id: 'all', label: t('blog.all'), count: 34 },
    { id: 'technology', label: t('blog.technology'), count: 8 },
    { id: 'investment', label: t('blog.investment'), count: 10 },
    { id: 'trade', label: t('blog.trade'), count: 8 },
    { id: 'analysis', label: t('blog.analysis'), count: 5 }
  ];

  const featuredPosts = [
    {
      id: 'tech-trends-2024',
      title: t('blog.techTrends2024'),
      excerpt: t('blog.techTrendsExcerpt'),
      author: t('blog.author1'),
      date: t('blog.december15'),
      readTime: "6 dk",
      category: t('blog.technology'),
      featured: true
    },
    {
      id: 'china-turkey-trade',
      title: t('blog.chinaTurkeyBridge'),
      excerpt: t('blog.bridgeExcerpt'),
      author: t('blog.author2'),
      date: t('blog.december10'),
      readTime: "6 dk",
      category: t('blog.trade'),
      featured: true
    }
  ];

  const allPosts = [
    {
      title: t('blog.startupRiskManagement'),
      excerpt: t('blog.startupRiskExcerpt'),
      author: t('blog.author3'),
      date: t('blog.december13'),
      readTime: "7K",
      category: t('blog.investment')
    },
    {
      title: t('blog.digitalTransformationLeadership'),
      excerpt: t('blog.digitalLeadershipExcerpt'),
      author: t('blog.author4'),
      date: t('blog.december11'),
      readTime: "5K",
      category: t('blog.technology')
    },
    {
      title: t('blog.turkishCompaniesGlobal'),
      excerpt: t('blog.turkishCompaniesExcerpt'),
      author: t('blog.author5'),
      date: t('blog.december8'),
      readTime: "4K",
      category: t('blog.analysis')
    },
    {
      title: t('blog.sustainableInvestmentTrends'),
      excerpt: t('blog.sustainableExcerpt'),
      author: t('blog.author6'),
      date: t('blog.december5'),
      readTime: "3K",
      category: t('blog.finance')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-purple-900 py-20 pt-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 to-purple-900/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('blog.title')}
          </h1>
          
          {/* Feature Icons */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t('blog.quickSupport')}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{t('blog.globalNetwork')}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{t('blog.expertTeam')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full font-medium transition-colors ${
                      activeCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-slate-600 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>

              {/* Featured Posts */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  {t('blog.featuredPosts')}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredPosts.map((post, index) => (
                    <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
                      <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 relative">
                        {index === 0 ? (
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-800 flex items-center justify-center">
                            <div className="text-white text-center">
                              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                            <div className="text-white text-center">
                              <div className="text-4xl mb-2">🇹🇷🇨🇳</div>
                              <div className="text-sm">{t('blog.chinaTurkey')}</div>
                            </div>
                          </div>
                        )}
                        <div className="absolute top-3 left-3">
                          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                            {t('blog.featured')}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-slate-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-slate-500">
                            <span className="font-medium">{post.author}</span>
                            <span className="mx-2">•</span>
                            <span>{post.date}</span>
                            <span className="mx-2">•</span>
                            <span>{post.readTime}</span>
                          </div>
                          <Link 
                            href={getLocalizedPath(`/blog/${post.id}`)}
                            className="text-slate-800 font-medium hover:text-blue-600 transition-colors flex items-center gap-1"
                          >
                            {t('blog.readMore')}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* All Posts */}
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {t('blog.allPosts')}
                </h2>
                <div className="space-y-6">
                  {allPosts.map((post, index) => (
                    <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
                            {index === 0 && <div className="text-2xl">💻</div>}
                            {index === 1 && <div className="text-2xl">👔</div>}
                            {index === 2 && <div className="text-2xl">🗺️</div>}
                            {index === 3 && <div className="text-2xl">🌱</div>}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-3">
                              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                              <span className="text-slate-500 text-sm">{post.author}</span>
                              <span className="text-slate-400">•</span>
                              <span className="text-slate-500 text-sm">{post.date}</span>
                              <span className="text-slate-400">•</span>
                              <span className="text-slate-500 text-sm">{post.readTime}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">
                              {post.title}
                            </h3>
                            <p className="text-slate-600 mb-4">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="bg-gray-100 text-slate-600 px-3 py-1 rounded-full text-sm">
                                {post.category}
                              </span>
                              <Link 
                                href={getLocalizedPath(`/blog/${post.id || 'startup-risk-management'}`)}
                                className="text-slate-800 font-medium hover:text-blue-600 transition-colors flex items-center gap-1"
                              >
                                {t('blog.readMore')}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-8">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    {t('blog.loadMore')}
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Newsletter */}
                <div className="bg-blue-600 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {t('blog.blogUpdates')}
                  </h3>
                  <p className="text-blue-100 mb-4">
                    {t('blog.blogUpdatesDesc')}
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder={t('blog.emailPlaceholder')}
                      className="w-full px-4 py-2 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-slate-800"
                    />
                    <button className="w-full bg-white text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                      {t('blog.subscribe')}
                    </button>
                  </div>
                </div>

                {/* Popular Posts */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>
                    </svg>
                    {t('blog.popularPosts')}
                  </h3>
                  <div className="space-y-4">
                    {[
                      { title: t('blog.startupRiskManagement'), date: t('blog.december13'), views: "2.1K" },
                      { title: t('blog.digitalTransformationLeadership'), date: t('blog.december11'), views: "1.8K" },
                      { title: t('blog.turkishCompaniesGlobal'), date: t('blog.december8'), views: "1.5K" },
                      { title: t('blog.sustainableInvestmentTrends'), date: t('blog.december5'), views: "1.2K" }
                    ].map((post, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-slate-600">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-slate-800 mb-1 line-clamp-2">
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.views}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Authors */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {t('blog.ourAuthors')}
                  </h3>
                  <div className="space-y-4">
                    {[
                      { name: t('blog.author1'), title: t('blog.techExpert'), posts: t('blog.articles') + " 120" },
                      { name: t('blog.author2'), title: t('blog.tradeExpert'), posts: t('blog.articles') + " 95" },
                      { name: t('blog.author3'), title: t('blog.investmentAdvisor'), posts: t('blog.articles') + " 78" }
                    ].map((author, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                          {author.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-800">{author.name}</h4>
                          <p className="text-sm text-slate-500">{author.title}</p>
                          <p className="text-xs text-slate-400">{author.posts}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    {t('blog.popularTags')}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      t('blog.tagTechnology'), 
                      t('blog.tagInvestment'), 
                      t('blog.tagTrade'), 
                      t('blog.tagAI'), 
                      t('blog.tagChina'), 
                      t('blog.tagTurkey'), 
                      t('blog.tagStartup'), 
                      t('blog.tagFintech'), 
                      t('blog.tagEcommerce'), 
                      t('blog.tagBlockchain'), 
                      t('blog.tagDigitalization'), 
                      t('blog.tagInnovation')
                    ].map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-slate-600 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

