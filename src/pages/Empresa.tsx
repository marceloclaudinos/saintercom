import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { Target, Eye, CheckCircle, Store, Tractor, Sprout, Calendar, Users, Building2, Focus, Award } from 'lucide-react';
import heroImage from '@/assets/empresa-hero.jpeg';
import leafLogo from '@/assets/logo-sa-intercom-transparent.png';
import energiaIcon from '@/assets/energia-icon.png';
import boiIcon from '@/assets/boi-icon.png';

const Empresa = () => {
  const { t } = useLanguage();

  const highlights = [
    { icon: Calendar, title: t.company.experience, description: t.company.experienceDesc },
    { icon: Users, title: t.company.team, description: t.company.teamDesc },
    { icon: Building2, title: t.company.expertise, description: t.company.expertiseDesc },
    { icon: Focus, title: t.company.focus, description: t.company.focusDesc },
    { icon: Award, title: t.company.cost, description: t.company.costDesc },
  ];

  const segments = [
    { icon: Sprout, title: t.company.segment1Title, items: t.company.segment1Items },
    { icon: Tractor, title: t.company.segment2Title, items: t.company.segment2Items },
    { iconImage: boiIcon, title: t.company.segment3Title, items: t.company.segment3Items },
    { iconImage: energiaIcon, title: t.company.segment4Title, items: t.company.segment4Items },
    { icon: Store, title: t.company.segment5Title, items: t.company.segment5Items },
  ];

  const valueBlocks = [
    { title: t.company.valueBlock1Title, desc: t.company.valueBlock1Desc },
    { title: t.company.valueBlock2Title, desc: t.company.valueBlock2Desc },
    { title: t.company.valueBlock3Title, desc: t.company.valueBlock3Desc },
    { title: t.company.valueBlock4Title, desc: t.company.valueBlock4Desc },
  ];

  const whyUs = [
    t.company.why1,
    t.company.why2,
    t.company.why3,
    t.company.why4,
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/60 to-background/30" />
          </div>
          
          <div className="container-wide relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8">
                <span className="text-gradient">{t.company.title}</span>
              </h1>
              <div className="space-y-5">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <item.icon className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="text-base font-semibold text-foreground">{item.title}</p>
                      <p className="text-sm text-foreground font-semibold">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Mission */}
              <div className="bg-card rounded-2xl p-8 shadow-subtle border border-border">
                <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 uppercase tracking-wide">
                  {t.company.missionTitle}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.company.mission}
                </p>
              </div>

              {/* Vision */}
              <div className="bg-card rounded-2xl p-8 shadow-subtle border border-border">
                <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 uppercase tracking-wide">
                  {t.company.visionTitle}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.company.vision}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Blocks */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              {t.company.valuesTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {valueBlocks.map((block, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-subtle">
                  <h3 className="text-lg font-heading font-semibold text-primary mb-2">
                    {block.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {block.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Segments */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
              {t.company.segmentsTitle}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {segments.map((segment, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 shadow-subtle text-center">
                  {segment.iconImage ? (
                    <img src={segment.iconImage} alt={segment.title} className="w-12 h-12 mx-auto mb-4 object-contain" />
                  ) : (
                    <segment.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  )}
                  <h3 className="text-base font-heading font-semibold mb-4">
                    {segment.title}
                  </h3>
                  {segment.items.length > 0 && (
                    <ul className="text-sm text-muted-foreground space-y-1 text-left">
                      {segment.items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="section-padding bg-gradient-hero text-primary-foreground">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
              {t.company.whyTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {whyUs.map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-primary-foreground/10 rounded-xl p-6">
                  <CheckCircle className="w-6 h-6 shrink-0" />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Empresa;