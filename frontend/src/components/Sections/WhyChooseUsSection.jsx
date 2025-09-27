import { useTranslation } from 'next-i18next';
import { 
  Target, 
  Globe, 
  Shield, 
  Users, 
  Award,
  Clock,
  Heart,
  TrendingUp
} from 'lucide-react';

const WhyChooseUsSection = () => {
  const { t } = useTranslation('common');

  const advantages = [
    {
      icon: <Target className="w-8 h-8" />,
      title: t('whyChooseUs.expertise.title'),
      description: t('whyChooseUs.expertise.description'),
      color: 'primary'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('whyChooseUs.network.title'),
      description: t('whyChooseUs.network.description'),
      color: 'secondary'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('whyChooseUs.approach.title'),
      description: t('whyChooseUs.approach.description'),
      color: 'accent'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('whyChooseUs.support.title'),
      description: t('whyChooseUs.support.description'),
      color: 'primary'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t('whyChooseUs.excellence.title'),
      description: t('whyChooseUs.excellence.description'),
      color: 'secondary'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: t('whyChooseUs.reactivity.title'),
      description: t('whyChooseUs.reactivity.description'),
      color: 'accent'
    }
  ];

  const stats = [
    {
      number: '500+',
      label: t('stats.projectsInProgress'),
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      number: '20+',
      label: t('stats.clientsInCountries'),
      icon: <Globe className="w-6 h-6" />
    },
    {
      number: '95%',
      label: t('whyChooseUs.stats.successRate'),
      icon: <Award className="w-6 h-6" />
    },
    {
      number: '1+',
      label: t('stats.rapidGrowth'),
      icon: <Heart className="w-6 h-6" />
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary-50',
        iconBg: 'bg-primary-600',
        border: 'border-primary-200',
        text: 'text-primary-700'
      },
      secondary: {
        bg: 'bg-secondary-50',
        iconBg: 'bg-secondary-600',
        border: 'border-secondary-200',
        text: 'text-secondary-700'
      },
      accent: {
        bg: 'bg-accent-50',
        iconBg: 'bg-accent-600',
        border: 'border-accent-200',
        text: 'text-accent-700'
      }
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold text-lg uppercase tracking-wide mb-4" data-aos="fade-up">
            {t('whyChooseUs.advantage')}
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" data-aos="fade-up" data-aos-delay="200">
            {t('whyChooseUs.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="400">
            {t('whyChooseUs.subtitle')}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-aos="zoom-in" data-aos-delay={`${600 + (index * 100)}`}>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 hover:scale-105">
                <div className="text-primary-600 mb-3 flex justify-center hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const colors = getColorClasses(advantage.color);
            
            return (
              <div 
                key={index} 
                className={`${colors.bg} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${colors.border} transform hover:scale-105`}
                data-aos="fade-up"
                data-aos-delay={`${1000 + (index * 100)}`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {advantage.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Preview */}
        {/*<div className="mt-16" data-aos="fade-up" data-aos-delay="1600">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('testimonials.title')}
              </h3>
              <p className="text-gray-600">
                {t('testimonials.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center" data-aos="fade-right" data-aos-delay="1800">
                <div className="bg-primary-50 rounded-xl p-6 mb-4 hover:bg-primary-100 transition-colors duration-300">
                  <p className="text-gray-700 italic leading-relaxed">
                    "{t('testimonials.martinLibam.quote')}"
                  </p>
                </div>
                <div className="font-semibold text-gray-900">{t('testimonials.martinLibam.name')}</div>
                <div className="text-sm text-gray-600">{t('testimonials.martinLibam.company')}</div>
              </div>
              
              <div className="text-center" data-aos="fade-left" data-aos-delay="2000">
                <div className="bg-secondary-50 rounded-xl p-6 mb-4 hover:bg-secondary-100 transition-colors duration-300">
                  <p className="text-gray-700 italic leading-relaxed">
                    "{t('testimonials.cameroonContact1.quote')}"
                  </p>
                </div>
                <div className="font-semibold text-gray-900">{t('testimonials.cameroonContact1.name')}</div>
                <div className="text-sm text-gray-600">{t('testimonials.cameroonContact1.company')}</div>
              </div>
            </div>
          </div>
        </div>-->*/}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
