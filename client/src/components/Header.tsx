import { useTranslation } from '@/contexts/I18nContext';
import type { Language } from '@/contexts/I18nContext';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const LANGUAGES: { code: Language; name: string; flag: string }[] = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'fi', name: 'Suomi', flag: '🇫🇮' },
  { code: 'ro', name: 'Română', flag: '🇷🇴' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
];

const LOGO_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663670070938/o4gumxWho5vK3gUcsVXnRv/zenith-finance-logo-KBT9XXiq6CnYsn7QRyqDCC.webp';

export default function Header() {
  const { language, changeLanguage, t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const currentLanguage = LANGUAGES.find(l => l.code === language);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={LOGO_URL} alt="Zenith Finance" className="h-10 w-auto" />
            <span className="hidden sm:inline font-bold text-lg text-foreground">Zenith Finance</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-accent transition-colors">
              {t('header.home')}
            </Link>
            <Link href="/about" className="text-foreground hover:text-accent transition-colors">
              {t('header.about')}
            </Link>
            <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
              {t('header.contact')}
            </Link>
          </nav>

          {/* Right Side: Language Selector & CTA */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-sm"
              >
                <span>{currentLanguage?.flag}</span>
                <span className="hidden sm:inline text-xs">{currentLanguage?.code.toUpperCase()}</span>
              </button>

              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-border rounded-lg shadow-lg py-2 z-50">
                  {LANGUAGES.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setLanguageMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-muted transition-colors flex items-center gap-2 ${
                        language === lang.code ? 'bg-accent/10 text-accent' : ''
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span className="text-sm">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link href="/form">
              <Button className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground">
                {t('header.applyButton')}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            <Link href="/" className="text-foreground hover:text-accent transition-colors">
              {t('header.home')}
            </Link>
            <Link href="/about" className="text-foreground hover:text-accent transition-colors">
              {t('header.about')}
            </Link>
            <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
              {t('header.contact')}
            </Link>
            <Link href="/form">
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                {t('header.applyButton')}
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
