import { useTranslation } from '@/contexts/I18nContext';
import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const TEAM_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663670070938/o4gumxWho5vK3gUcsVXnRv/team-professional-FYHm3VUhM2dZRr35rPgwnS.webp';

export default function About() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: t('about.team.ceo.name'),
      position: t('about.team.ceo.position'),
      bio: t('about.team.ceo.bio'),
      icon: '👨‍💼',
    },
    {
      name: t('about.team.cfo.name'),
      position: t('about.team.cfo.position'),
      bio: t('about.team.cfo.bio'),
      icon: '👩‍💼',
    },
    {
      name: t('about.team.coo.name'),
      position: t('about.team.coo.position'),
      bio: t('about.team.coo.bio'),
      icon: '👨‍💼',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-foreground to-foreground/80 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about.title')}</h1>
          <p className="text-lg text-gray-300 max-w-2xl">{t('about.introduction')}</p>
          <p className="text-accent font-bold mt-4">{t('about.headquarters')}</p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('about.mission.title')}</h3>
              <p className="text-muted-foreground">{t('about.mission.description')}</p>
            </Card>

            {/* Vision */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔭</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('about.vision.title')}</h3>
              <p className="text-muted-foreground">{t('about.vision.description')}</p>
            </Card>

            {/* Values */}
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{t('about.values.title')}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>{t('about.values.transparency')}</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>{t('about.values.innovation')}</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>{t('about.values.trust')}</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>{t('about.values.excellence')}</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">{t('about.team.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow text-center">
                <div className="text-6xl mb-4">{member.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-accent font-bold mb-4">{member.position}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <img
            src={TEAM_IMAGE}
            alt="Zenith Finance Team"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}
