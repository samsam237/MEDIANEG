'use client';

import { useTranslation } from 'next-i18next';
import { 
  TrendingUp, 
  Globe, 
  Target, 
  MapPin
} from 'lucide-react';

const GrowthSection = () => {
  const { t } = useTranslation('common');

  const achievements = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: '500+',
      label: t('growth.achievements.projects'),
      color: 'primary'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: '20+',
      label: t('growth.achievements.countries'),
      color: 'secondary'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      number: 'CEMAC',
      label: t('growth.achievements.cemac'),
      color: 'accent'
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: '🇨🇲',
      label: t('growth.achievements.cameroon'),
      color: 'primary'
    }
  ];


  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary-50',
        iconBg: 'bg-primary-600',
        border: 'border-primary-200',
        text: 'text-primary-700',
        hoverBorder: 'hover:border-primary-300'
      },
      secondary: {
        bg: 'bg-secondary-50',
        iconBg: 'bg-secondary-600',
        border: 'border-secondary-200',
        text: 'text-secondary-700',
        hoverBorder: 'hover:border-secondary-300'
      },
      accent: {
        bg: 'bg-accent-50',
        iconBg: 'bg-accent-600',
        border: 'border-accent-200',
        text: 'text-accent-700',
        hoverBorder: 'hover:border-accent-300'
      },
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-cocoa-50 to-coffee-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-cocoa-600 font-semibold text-lg uppercase tracking-wide mb-4" data-aos="fade-up">
            {t('growth.sectionTitle')}
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-coffee-900 mb-6" data-aos="fade-up" data-aos-delay="200">
            {t('growth.title')}
          </h2>
          <p className="text-xl text-coffee-700 max-w-4xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="400">
            {t('growth.description')}
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const colors = getColorClasses(achievement.color);

            return (
              <div key={index} className="text-center" data-aos="zoom-in" data-aos-delay={`${600 + (index * 100)}`}>
                <div className={`${colors.bg} rounded-2xl p-6 shadow-lg border ${colors.border} hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                  <div className={`${colors.iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white hover:scale-110 transition-transform duration-300`}>
                    {achievement.icon}
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-coffee-900 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-coffee-600 font-medium">
                    {achievement.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>


        {/* CEMAC Focus */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-cocoa-200" data-aos="fade-up" data-aos-delay="600">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-coffee-900 mb-4">
              {t('growth.cemacFocus')}
            </h3>
            <p className="text-lg text-coffee-700 max-w-4xl mx-auto leading-relaxed mb-6">
              {t('growth.cemacDescription')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-cocoa-100 text-cocoa-800 px-4 py-2 rounded-full text-sm font-medium">
                🇨🇲 Cameroun
              </span>
              <span className="bg-coffee-100 text-coffee-800 px-4 py-2 rounded-full text-sm font-medium">
                🇬🇦 Gabon
              </span>
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                🇹🇩 Tchad
              </span>
              <span className="bg-secondary-100 text-secondary-800 px-4 py-2 rounded-full text-sm font-medium">
                🇨🇫 Centrafrique
              </span>
              <span className="bg-accent-100 text-accent-800 px-4 py-2 rounded-full text-sm font-medium">
                🇬🇶 Guinée Équatoriale
              </span>
              <span className="bg-cocoa-100 text-cocoa-800 px-4 py-2 rounded-full text-sm font-medium">
                🇨🇬 Congo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
