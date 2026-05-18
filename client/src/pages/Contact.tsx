import { useTranslation } from '@/contexts/I18nContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { submitContactForm } from '@/services/formspree';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      toast.success(t('contact.contactForm.successMessage'));
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error(t('contact.contactForm.errorMessage'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-foreground to-foreground/80 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('contact.title')}</h1>
          <p className="text-lg text-gray-300">{t('contact.subtitle')}</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">{t('contact.contactInfo.title')}</h2>

              <div className="space-y-6">
                {/* Address */}
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <MapPin size={24} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2">Helsinki, Finlande</h3>
                      <p className="text-muted-foreground">{t('contact.contactInfo.address')}</p>
                    </div>
                  </div>
                </Card>

                {/* Email */}
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <Mail size={24} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2">{t('footer.email')}</h3>
                      <a
                        href="mailto:allianzfinanzas0@gmail.com"
                        className="text-accent hover:underline"
                      >
                        allianzfinanzas0@gmail.com
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Phone */}
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-4">
                    <Phone size={24} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-2">{t('footer.phone')}</h3>
                      <a href="tel:+358457396157" className="text-accent hover:underline block mb-2">
                        +358 45 73966157
                      </a>
                      <p className="text-sm text-muted-foreground">{t('contact.contactInfo.whatsapp')}</p>
                    </div>
                  </div>
                </Card>

                {/* WhatsApp CTA */}
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open('https://wa.me/358457396157', '_blank')}
                >
                  <MessageSquare className="mr-2" size={20} />
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">{t('contact.contactForm.title')}</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.contactForm.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder={t('contact.contactForm.name')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.contactForm.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder={t('contact.contactForm.email')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.contactForm.subject')}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder={t('contact.contactForm.subject')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('contact.contactForm.message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder={t('contact.contactForm.message')}
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  {isLoading ? 'Envoi...' : t('contact.contactForm.submit')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
