'use client';

import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';
import LogoWithText from '@/components/Logo/LogoWithText';

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div>
            <div className="mb-4">
              <LogoWithText 
                href="/"
                width={100}
                height={50}
              />
            </div>
            <p className="text-gray-300 text-sm">
              {t('footer.organization')}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact.title')}</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Grand-Rue 1A, 2000 Neuchâtel, Suisse</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:contact@medianeg.org" className="hover:text-primary-400 transition-colors">
                  contact@medianeg.org
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+41582010612" className="hover:text-primary-400 transition-colors">
                  +41 (58) 201 0612
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <nav className="space-y-2">
              <Link href="/" className="block text-sm text-gray-300 hover:text-primary-400 transition-colors">
                {t('navigation.home')}
              </Link>
              <Link href="/presentation" className="block text-sm text-gray-300 hover:text-primary-400 transition-colors">
                {t('navigation.presentation')}
              </Link>
              <Link href="/action-plan" className="block text-sm text-gray-300 hover:text-primary-400 transition-colors">
                {t('navigation.actionPlan')}
              </Link>
              <Link href="/contact" className="block text-sm text-gray-300 hover:text-primary-400 transition-colors">
                {t('navigation.contact')}
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {t('footer.organization')}. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
