import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { Building2, Target, Eye, Heart, CheckCircle, Sprout, Beef, Zap, Store } from 'lucide-react';

const Empresa = () => {
  const { t } = useLanguage();

  const highlights = [
    t.company.experience,
    t.company.team,
    t.company.expertise,
    t.company.focus,
    t.company.cost,
  ];

  const values = [
    t.company.value1,
    t.company.value2,
    t.company.value3,
    t.company.value4,
  ];

  const segments = [
    { icon: Sprout, title: t.company.segment1, items: t.company.segment1Items },
    { icon: Beef, title: t.company.segment2, items: t.company.segment2Items },
    { icon: Zap, title: t.company.segment3, items: t.company.segment3Items },
    { icon: Store, title: t.company.segment4, items: [] },
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
        <section className="pt-32 pb-20 bg-gradient-to-br from-green-pale via-background to-secondary relative overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="container-wide relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">
                  {t.company.subtitle}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8">
                <span className="text-gradient">{t.company.title}</span>
              </h1>
              <div className="space-y-4">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-medium mt-0.5 shrink-0" />
                    <p className="text-lg text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid md:grid-cols-3 gap-8">
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

              {/* Values */}
              <div className="bg-card rounded-2xl p-8 shadow-subtle border border-border">
                <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 uppercase tracking-wide">
                  {t.company.valuesTitle}
                </h3>
                <ul className="space-y-2">
                  {values.map((value, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-medium" />
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Segments */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
              {t.company.segmentsTitle}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {segments.map((segment, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 shadow-subtle text-center">
                  <segment.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-heading font-semibold mb-4">
                    {segment.title}
                  </h3>
                  {segment.items.length > 0 && (
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {segment.items.map((item, i) => (
                        <li key={i}>{item}</li>
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
