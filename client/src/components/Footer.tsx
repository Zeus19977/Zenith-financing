import { useTranslation } from '@/contexts/I18nContext';
import { Link } from 'wouter';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

const LOGO_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663670070938/o4gumxWho5vK3gUcsVXnRv/zenith-finance-logo-KBT9XXiq6CnYsn7QRyqDCC.webp';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-foreground text-white mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <img src={LOGO_URL} alt="Zenith Finance" className="h-12 w-auto brightness-0 invert" />
            <p className="text-sm text-gray-300">
              {t('common.tagline')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent transition-colors">
                  {t('header.home')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent transition-colors">
                  {t('header.about')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  {t('header.contact')}
                </Link>
              </li>
              <li>
                <Link href="/form" className="text-gray-300 hover:text-accent transition-colors">
                  {t('form.title')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">{t('footer.company')}</h4>
            <ul className="space-y-3">
              <li className="flex gap-2 text-gray-300">
                <MapPin size={20} className="flex-shrink-0 text-accent" />
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex gap-2 text-gray-300">
                <Mail size={20} className="flex-shrink-0 text-accent" />
                <a href="mailto:allianzfinanzas0@gmail.com" className="hover:text-accent transition-colors">
                  allianzfinanzas0@gmail.com
                </a>
              </li>
              <li className="flex gap-2 text-gray-300">
                <Phone size={20} className="flex-shrink-0 text-accent" />
                <a href="tel:+358457396157" className="hover:text-accent transition-colors">
                  +358 45 73966157
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
