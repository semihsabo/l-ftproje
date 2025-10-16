import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getTranslations, createTranslationFunction } from '@/lib/translations';

export default async function About({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams || { locale: 'en' };
  const translations = await getTranslations(locale);
  const t = createTranslationFunction(translations);
  const team = [
    {
      name: t('about.teamMember1Name'),
      position: t('about.teamMember1Position'),
      expertise: t('about.teamMember1Expertise'),
      experience: t('about.teamMember1Experience'),
      image: "👨‍💼",
      description: t('about.teamMember1Description')
    },
    {
      name: t('about.teamMember2Name'),
      position: t('about.teamMember2Position'),
      expertise: t('about.teamMember2Expertise'),
      experience: t('about.teamMember2Experience'),
      image: "👩‍💼",
      description: t('about.teamMember2Description')
    },
    {
      name: t('about.teamMember3Name'),
      position: t('about.teamMember3Position'),
      expertise: t('about.teamMember3Expertise'),
      experience: t('about.teamMember3Experience'),
      image: "👨‍🎓",
      description: t('about.teamMember3Description')
    },
    {
      name: t('about.teamMember4Name'),
      position: t('about.teamMember4Position'),
      expertise: t('about.teamMember4Expertise'),
      experience: t('about.teamMember4Experience'),
      image: "👩‍💻",
      description: t('about.teamMember4Description')
    }
  ];

  const values = [
    {
      title: t('about.innovation'),
      description: t('about.innovationDesc'),
      icon: "💡"
    },
    {
      title: t('about.reliability'),
      description: t('about.reliabilityDesc'),
      icon: "🤝"
    },
    {
      title: t('about.excellence'),
      description: t('about.excellenceDesc'),
      icon: "⭐"
    },
    {
      title: t('about.globalVision'),
      description: t('about.globalVisionDesc'),
      icon: "🌍"
    }
  ];

  const milestones = [
    {
      year: "2009",
      title: t('about.establishment'),
      description: t('about.establishmentDesc')
    },
    {
      year: "2012",
      title: t('about.firstMajorProject'),
      description: t('about.firstMajorProjectDesc')
    },
    {
      year: "2015",
      title: t('about.internationalExpansion'),
      description: t('about.internationalExpansionDesc')
    },
    {
      year: "2018",
      title: t('about.technologyInvestment'),
      description: t('about.technologyInvestmentDesc')
    },
    {
      year: "2021",
      title: t('about.fiveHundredProjects'),
      description: t('about.fiveHundredProjectsDesc')
    },
    {
      year: "2024",
      title: t('about.today'),
      description: t('about.todayDesc')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-purple-900 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
                {t('about.ourStory')}
              </h2>
              <div className="space-y-6 text-slate-600">
                <p className="text-lg leading-relaxed">
                  {t('about.storyDescription1')}
                </p>
                <p className="text-lg leading-relaxed">
                  {t('about.storyDescription2')}
                </p>
                <p className="text-lg leading-relaxed">
                  {t('about.storyDescription3')}
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl h-96 overflow-hidden shadow-lg">
              <Image 
                src="/about-business-meeting.jpg" 
                alt="Professional business meeting with strategic consultation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              {/* Text overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-medium mb-1">{t('about.companyOffice')}</p>
                <p className="text-sm opacity-90">{t('about.modernWorkspace')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              {t('about.ourValues')}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('about.valuesDescription')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              {t('about.ourTeam')}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('about.teamDescription')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-2">{member.position}</p>
                <p className="text-sm text-slate-500 mb-3">{member.expertise} • {member.experience}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              {t('about.ourJourney')}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('about.journeyDescription')}
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-purple-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{milestone.title}</h3>
                      <p className="text-slate-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t('about.numbersTitle')}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('about.numbersDescription')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">{t('about.completedProjects')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">{t('about.countriesServed')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-white/80">{t('about.yearsExperience')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">100+</div>
              <div className="text-white/80">{t('about.happyClients')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
            {t('about.joinTeamTitle')}
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            {t('about.joinTeamDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-slate-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors">
              {t('about.careerOpportunities')}
            </button>
            <button className="border-2 border-slate-800 text-slate-800 px-8 py-3 rounded-lg font-medium hover:bg-slate-800 hover:text-white transition-colors">
              {t('about.contactUs')}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

