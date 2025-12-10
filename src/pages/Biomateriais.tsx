import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { Leaf, CheckCircle, Sprout, TrendingUp, Network } from 'lucide-react';

const Biomateriais = () => {
  const { t } = useLanguage();

  const services = [
    t.biomaterials.service1,
    t.biomaterials.service2,
    t.biomaterials.service3,
    t.biomaterials.service4,
    t.biomaterials.service5,
    t.biomaterials.service6,
  ];

  const pillars = [
    {
      icon: Sprout,
      title: t.biomaterials.pillar1Title,
      description: t.biomaterials.pillar1Desc,
    },
    {
      icon: TrendingUp,
      title: t.biomaterials.pillar2Title,
      description: t.biomaterials.pillar2Desc,
    },
    {
      icon: Network,
      title: t.biomaterials.pillar3Title,
      description: t.biomaterials.pillar3Desc,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-green-pale via-background to-secondary relative overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-green-medium/10 rounded-full blur-3xl" />
          <div className="container-wide relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
                <Leaf className="w-4 h-4 text-green-medium" />
                <span className="text-sm font-medium text-muted-foreground">
                  {t.biomaterials.subtitle}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <span className="text-gradient">{t.biomaterials.title}</span>
              </h1>
              <p className="text-2xl text-green-medium font-heading font-medium mb-6">
                {t.biomaterials.tagline}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {t.biomaterials.intro}
              </p>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t.biomaterials.description}
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
              {t.biomaterials.servicesTitle}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-subtle flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-medium/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-medium" />
                  </div>
                  <p className="text-foreground">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="section-padding bg-gradient-hero text-primary-foreground">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
              {t.biomaterials.pillarsTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6">
                    <pillar.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-primary-foreground/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background">
          <div className="container-wide text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
                S.A. Intercom – Transformando inovação em valor real para o agronegócio
              </h2>
              <p className="text-muted-foreground mb-8">
                Combinamos 30 anos de experiência no setor agro, relacionamentos e Novas Tecnologias de materiais de resíduos agrícolas, posicionando soluções inovadoras de forma estratégica.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Biomateriais;
