import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { 
  Users2, 
  Target, 
  Users, 
  TrendingUp, 
  Globe, 
  Hand,
  Search,
  FileText,
  Shield,
  ArrowRight
} from 'lucide-react';

const ServicesSection = () => {
  const { t } = useTranslation('common');

  const services = [
    {
      icon: <Hand className="w-8 h-8" />,
      title: t('services.mediation.title'),
      description: t('services.mediation.description'),
      features: t('services.mediation.features', { returnObjects: true }),
      color: 'primary'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: t('services.negotiation.title'),
      description: t('services.negotiation.description'),
      features: t('services.negotiation.features', { returnObjects: true }),
      color: 'secondary'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: t('services.sourcing.title'),
      description: t('services.sourcing.description'),
      features: t('services.sourcing.features', { returnObjects: true }),
      color: 'accent'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: t('services.intelligence.title'),
      description: t('services.intelligence.description'),
      features: t('services.intelligence.features', { returnObjects: true }),
      color: 'primary'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t('services.support.title'),
      description: t('services.support.description'),
      features: t('services.support.features', { returnObjects: true }),
      color: 'secondary'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Consulting Stratégique',
      description: 'Accompagnement personnalisé pour vos projets d\'expansion internationale',
      features: [
        'Analyse de marché approfondie',
        'Stratégies d\'implantation',
        'Formation des équipes',
        'Suivi et évaluation'
      ],
      color: 'accent'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary-50',
        iconBg: 'bg-primary-100',
        iconColor: 'text-primary-600',
        border: 'border-primary-200',
        hoverBorder: 'hover:border-primary-300',
        dot: 'bg-primary-500'
      },
      secondary: {
        bg: 'bg-secondary-50',
        iconBg: 'bg-secondary-100',
        iconColor: 'text-secondary-600',
        border: 'border-secondary-200',
        hoverBorder: 'hover:border-secondary-300',
        dot: 'bg-secondary-500'
      },
      accent: {
        bg: 'bg-accent-50',
        iconBg: 'bg-accent-100',
        iconColor: 'text-accent-600',
        border: 'border-accent-200',
        hoverBorder: 'hover:border-accent-300',
        dot: 'bg-accent-500'
      }
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold text-lg uppercase tracking-wide mb-4" data-aos="fade-up">
            {t('services.sectionTitle')}
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" data-aos="fade-up" data-aos-delay="200">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="400">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            
            return (
              <div 
                key={index} 
                className={`${colors.bg} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${colors.border} ${colors.hoverBorder} transform hover:scale-105`}
                data-aos="fade-up"
                data-aos-delay={`${600 + (index * 100)}`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${colors.iconBg} rounded-2xl flex items-center justify-center ${colors.iconColor} mb-6 hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    {t('services.keyFeatures')}
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 ${colors.dot} rounded-full mr-3 flex-shrink-0`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Link */}
              <Link
                href="/presentation"
                className={`inline-flex items-center space-x-2 text-${service.color}-600 hover:text-${service.color}-700 font-medium transition-colors duration-200`}
              >
                <span>{t('services.learnMore')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="1200">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('services.cta.title')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('services.cta.subtitle')}
            </p>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
            >
              <span>{t('services.cta.button')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
