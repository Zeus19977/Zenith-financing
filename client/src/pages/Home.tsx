import { useTranslation } from '@/contexts/I18nContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663670070938/o4gumxWho5vK3gUcsVXnRv/hero-finance-business-fSoCNPU2g7Hv9yNTgorkP7.webp';
const SUCCESS_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663670070938/o4gumxWho5vK3gUcsVXnRv/success-growth-ZuVK6Ht8sb3Vea29zNgLLt.webp';
const TEAM_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663670070938/o4gumxWho5vK3gUcsVXnRv/team-professional-FYHm3VUhM2dZRr35rPgwnS.webp';

export default function Home() {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: t('home.testimonials.testimonial1.name'),
      country: t('home.testimonials.testimonial1.country'),
      amount: t('home.testimonials.testimonial1.amount'),
      text: t('home.testimonials.testimonial1.text'),
    },
    {
      name: t('home.testimonials.testimonial2.name'),
      country: t('home.testimonials.testimonial2.country'),
      amount: t('home.testimonials.testimonial2.amount'),
      text: t('home.testimonials.testimonial2.text'),
    },
    {
      name: t('home.testimonials.testimonial3.name'),
      country: t('home.testimonials.testimonial3.country'),
      amount: t('home.testimonials.testimonial3.amount'),
      text: t('home.testimonials.testimonial3.text'),
    },
    {
      name: t('home.testimonials.testimonial4.name'),
      country: t('home.testimonials.testimonial4.country'),
      amount: t('home.testimonials.testimonial4.amount'),
      text: t('home.testimonials.testimonial4.text'),
    },
    {
      name: t('home.testimonials.testimonial5.name'),
      country: t('home.testimonials.testimonial5.country'),
      amount: t('home.testimonials.testimonial5.amount'),
      text: t('home.testimonials.testimonial5.text'),
    },
    {
      name: t('home.testimonials.testimonial6.name'),
      country: t('home.testimonials.testimonial6.country'),
      amount: t('home.testimonials.testimonial6.amount'),
      text: t('home.testimonials.testimonial6.text'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t('home.hero.title')}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            {t('home.hero.subtitle')}
          </p>
          <Link href="/form">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              {t('home.hero.cta')} <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">{t('home.services.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('home.services.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { key: 'personalLoan', icon: '💰' },
              { key: 'projectFinancing', icon: '🏗️' },
              { key: 'nonRefundable', icon: '🎁' },
              { key: 'businessSupport', icon: '🚀' },
            ].map((service) => (
              <Card key={service.key} className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t(`home.services.${service.key}.title`)}
                </h3>
                <p className="text-muted-foreground">
                  {t(`home.services.${service.key}.description`)}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-foreground text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">5000+</div>
              <p className="text-gray-300">{t('home.stats.clients')}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">10+</div>
              <p className="text-gray-300">{t('home.stats.experience')}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <p className="text-gray-300">{t('home.stats.approval')}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">15</div>
              <p className="text-gray-300">{t('home.stats.countries')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">{t('home.testimonials.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('home.testimonials.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                  </div>
                </div>
                <p className="text-accent font-bold mb-3">{testimonial.amount}</p>
                <p className="text-muted-foreground italic">\"{testimonial.text}\"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">{t('home.howItWorks.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('home.howItWorks.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', key: 'step1' },
              { step: '2', key: 'step2' },
              { step: '3', key: 'step3' },
            ].map((item, index) => (
              <div key={item.key} className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 text-center">
                    {t(`home.howItWorks.${item.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-center">
                    {t(`home.howItWorks.${item.key}.description`)}
                  </p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 -right-4 text-accent text-3xl">
                    <ArrowRight />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{t('home.hero.title')}</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('home.hero.subtitle')}
          </p>
          <Link href="/form">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              {t('home.hero.cta')} <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
