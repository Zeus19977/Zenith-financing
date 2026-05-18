import { useTranslation } from '@/contexts/I18nContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { toast } from 'sonner';
import { submitFinancingForm } from '@/services/formspree';
import { COUNTRY_CODES, COUNTRIES } from '@/data/countries';

export default function FinancingForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+33',
    phone: '',
    country: 'France',
    address: '',
    profession: '',
    monthlyIncome: '',
    desiredAmount: '',
    repaymentDuration: '',
    durationUnit: 'months',
    financingType: 'personalLoan',
    projectDescription: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = e.target.value;
    setFormData(prev => {
      const newData = { ...prev, country: selectedCountry };
      
      // Find the country code for the selected country
      const countryCode = COUNTRY_CODES.find(cc => cc.country === selectedCountry)?.code;
      if (countryCode) {
        newData.countryCode = countryCode;
      }
      
      return newData;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await submitFinancingForm({
        fullName: formData.fullName,
        email: formData.email,
        phone: `${formData.countryCode}${formData.phone}`,
        country: formData.country,
        address: formData.address,
        profession: formData.profession,
        monthlyIncome: formData.monthlyIncome,
        desiredAmount: formData.desiredAmount,
        repaymentDuration: formData.repaymentDuration,
        durationUnit: formData.durationUnit,
        financingType: formData.financingType,
        projectDescription: formData.projectDescription,
      });

      toast.success(t('form.successMessage'));
      setSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          countryCode: '+33',
          phone: '',
          country: 'France',
          address: '',
          profession: '',
          monthlyIncome: '',
          desiredAmount: '',
          repaymentDuration: '',
          durationUnit: 'months',
          financingType: 'personalLoan',
          projectDescription: '',
        });
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error(t('form.errorMessage'));
    } finally {
      setIsLoading(false);
    }
  };

  // Check if repayment duration is required
  const isNonRefundable = formData.financingType === 'nonRefundable';

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="p-12 text-center max-w-md">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-3xl font-bold text-foreground mb-4">{t('form.title')}</h1>
          <p className="text-lg text-muted-foreground">{t('form.successMessage')}</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-foreground to-foreground/80 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('form.title')}</h1>
          <p className="text-lg text-gray-300">{t('form.subtitle')}</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('form.fullName')} *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder={t('form.fullName')}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('form.email')} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder={t('form.email')}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('form.phone')} *
                </label>
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent w-24"
                  >
                    {COUNTRY_CODES.map((cc, idx) => (
                      <option key={`${cc.code}-${idx}`} value={cc.code}>
                        {cc.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="123456789"
                  />
                </div>
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('form.country')} *
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleCountryChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  {COUNTRIES.map(country => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('form.address')} *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder={t('form.address')}
                />
              </div>

              {/* Profession */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('form.profession')} *
                </label>
                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder={t('form.profession')}
                />
              </div>

              {/* Monthly Income */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('form.monthlyIncome')} *
                </label>
                <input
                  type="number"
                  name="monthlyIncome"
                  value={formData.monthlyIncome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="5000"
                />
              </div>

              {/* Desired Amount */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('form.desiredAmount')} *
                </label>
                <input
                  type="number"
                  name="desiredAmount"
                  value={formData.desiredAmount}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="50000"
                />
              </div>

              {/* Financing Type */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('form.financingType')} *
                </label>
                <select
                  name="financingType"
                  value={formData.financingType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="personalLoan">{t('form.personalLoan')}</option>
                  <option value="projectFinancing">{t('form.projectFinancing')}</option>
                  <option value="nonRefundable">{t('form.nonRefundable')}</option>
                  <option value="other">{t('form.other')}</option>
                </select>
              </div>

              {/* Repayment Duration - Only show if not non-refundable */}
              {!isNonRefundable && (
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('form.repaymentDuration')} *
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      name="repaymentDuration"
                      value={formData.repaymentDuration}
                      onChange={handleChange}
                      required
                      className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="12"
                    />
                    <select
                      name="durationUnit"
                      value={formData.durationUnit}
                      onChange={handleChange}
                      className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="months">{t('form.months')}</option>
                      <option value="years">{t('form.years')}</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Project Description */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('form.projectDescription')} *
                </label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder={t('form.projectDescription')}
                ></textarea>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                {isLoading ? 'Envoi...' : t('form.submit')}
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}
