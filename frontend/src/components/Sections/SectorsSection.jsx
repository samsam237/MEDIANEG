import { useTranslation } from 'next-i18next';
import { 
  Sprout, 
  Package, 
  Factory, 
  TrendingUp, 
  Globe, 
  Zap 
} from 'lucide-react';

const SectorsSection = () => {
  const { t } = useTranslation('common');

  const sectors = [
    {
      icon: <Sprout className="w-12 h-12" />,
      title: t('sectors.agricultural'),
      description: 'Accompagnement des producteurs agricoles dans leurs négociations commerciales et l\'accès aux marchés internationaux',
      image: '/images/backgrounds/hero-agriculture-farming.jpg',
      features: [
        'Négociation de contrats d\'exportation',
        'Certification et qualité',
        'Financement agricole',
        'Technologies modernes'
      ],
      color: 'secondary'
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: t('sectors.rawMaterials'),
      description: 'Commercialisation et négociation des matières premières avec une expertise des marchés internationaux',
      image: '/images/backgrounds/hero-construction-industry.jpg',
      features: [
        'Analyse des marchés mondiaux',
        'Négociation de prix',
        'Logistique et transport',
        'Contrats à long terme'
      ],
      color: 'primary'
    },
    {
      icon: <Factory className="w-12 h-12" />,
      title: t('sectors.manufactured'),
      description: 'Développement de la transformation locale et accès aux technologies de production modernes',
      image: '/images/backgrounds/hero-technology-innovation.jpg',
      features: [
        'Transfert de technologies',
        'Formation industrielle',
        'Partenariats techniques',
        'Innovation et R&D'
      ],
      color: 'accent'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Commerce International',
      description: 'Facilitation des échanges commerciaux entre l\'Afrique et le reste du monde',
      image: '/images/backgrounds/hero-africa-business.jpg',
      features: [
        'Accords commerciaux',
        'Conformité réglementaire',
        'Réseaux de distribution',
        'Intelligence économique'
      ],
      color: 'secondary'
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Développement Durable',
      description: 'Promotion de pratiques commerciales responsables et durables',
      image: '/images/backgrounds/hero-africa-landscape.jpg',
      features: [
        'Commerce équitable',
        'Impact environnemental',
        'Responsabilité sociale',
        'Objectifs de développement'
      ],
      color: 'primary'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Innovation Digitale',
      description: 'Intégration des technologies numériques dans les processus commerciaux',
      image: '/images/backgrounds/hero-mediation-handshake.jpg',
      features: [
        'Plateformes digitales',
        'E-commerce',
        'Blockchain et traçabilité',
        'Intelligence artificielle'
      ],
      color: 'accent'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary-50',
        iconBg: 'bg-primary-600',
        border: 'border-primary-200',
        hoverBorder: 'hover:border-primary-300',
        text: 'text-primary-700'
      },
      secondary: {
        bg: 'bg-secondary-50',
        iconBg: 'bg-secondary-600',
        border: 'border-secondary-200',
        hoverBorder: 'hover:border-secondary-300',
        text: 'text-secondary-700'
      },
      accent: {
        bg: 'bg-accent-50',
        iconBg: 'bg-accent-600',
        border: 'border-accent-200',
        hoverBorder: 'hover:border-accent-300',
        text: 'text-accent-700'
      }
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold text-lg uppercase tracking-wide mb-4" data-aos="fade-up">
            Secteurs d'Activité
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" data-aos="fade-up" data-aos-delay="200">
            {t('sectors.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="400">
            {t('sectors.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {sectors.map((sector, index) => {
            const colors = getColorClasses(sector.color);
            
            return (
              <div 
                key={index} 
                className={`${colors.bg} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border ${colors.border} ${colors.hoverBorder} transform hover:scale-105`}
                data-aos="zoom-in"
                data-aos-delay={`${600 + (index * 100)}`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Icon */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {sector.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {sector.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {sector.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {sector.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 ${colors.text.replace('text-', 'bg-')} rounded-full mr-3 flex-shrink-0`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="1200">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Une approche transversale
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Notre expertise s'étend à tous les secteurs économiques, avec une approche intégrée 
              qui combine médiation, négociation et intelligence économique pour maximiser vos opportunités.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
