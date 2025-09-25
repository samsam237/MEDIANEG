import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Globe, Shield, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const { t } = useTranslation('common');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    '/images/backgrounds/hero-business-meeting.jpg',
    '/images/backgrounds/hero-africa-business.jpg',
    '/images/backgrounds/hero-mediation-handshake.jpg',
    '/images/backgrounds/hero-africa-landscape.jpg',
    '/images/backgrounds/hero-construction-industry.jpg',
    '/images/backgrounds/hero-agriculture-farming.jpg',
    '/images/backgrounds/hero-technology-innovation.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change d'image toutes les 5 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Overlay */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundAttachment: 'fixed'
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gray-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-8" data-aos="fade-up" data-aos-delay="200">
            <div className="w-32 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl animate-pulse-soft border border-white/20">
              <img 
                src="/logo.svg" 
                alt="MEDIANEG International" 
                className="w-28 h-12 object-contain filter brightness-0 invert"
              />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" data-aos="fade-up" data-aos-delay="400">
            {t('home.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-4 font-light" data-aos="fade-up" data-aos-delay="600">
            {t('home.subtitle')}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="800">
            {t('home.tagline')}
          </p>

          {/* Feature Cards */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 max-w-6xl mx-auto border border-white/20" data-aos="fade-up" data-aos-delay="1000">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="1200">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t('home.overview.global')}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {t('home.overview.globalDesc')}
                </p>
              </div>
              <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="1400">
                <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t('home.overview.trusted')}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {t('home.overview.trustedDesc')}
                </p>
              </div>
              <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay="1600">
                <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {t('home.overview.growth')}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {t('home.overview.growthDesc')}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center" data-aos="fade-up" data-aos-delay="1800">
            <Link 
              href="/presentation" 
              className="btn-primary inline-flex items-center justify-center space-x-3 text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-bounce-soft"
            >
              <span>{t('home.learnMore')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/contact" 
              className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 hover:border-white/50 font-medium py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center space-x-3 text-lg backdrop-blur-sm hover:scale-105"
            >
              <span>{t('home.getInTouch')}</span>
              <MessageCircle className="w-5 h-5" />
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" data-aos="fade-up" data-aos-delay="2000">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center hover:border-white/80 transition-colors duration-300">
                <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
