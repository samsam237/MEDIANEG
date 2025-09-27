'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Menu, X, Globe } from 'lucide-react';
import LogoWithText from '@/components/Logo/LogoWithText';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslation('common');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const switchLanguage = () => {
    const newLocale = router.locale === 'fr' ? 'en' : 'fr';
    router.push(router.asPath, router.asPath, { locale: newLocale });
  };

  const navigation = [
    { name: t('navigation.home'), href: '/', key: 'home' },
    { name: t('navigation.presentation'), href: '/presentation', key: 'presentation' },
    { name: t('navigation.actionPlan'), href: '/action-plan', key: 'actionPlan' },
    { name: t('navigation.contact'), href: '/contact', key: 'contact' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <LogoWithText 
            href="/"
            width={150}
            height={90}
            className="w-24 h-12 md:w-32 md:h-16"
            priority={true}
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Switch & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={switchLanguage}
              className="flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors duration-200"
              title={t('language.switch')}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{router.locale?.toUpperCase()}</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
