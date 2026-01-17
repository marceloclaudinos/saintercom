import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { CheckCircle, Sprout, TrendingUp, Handshake } from 'lucide-react';
import heroImage from '@/assets/biomateriais-agro-new.png';
import leafLogo from '@/assets/logo-folha-only-new.png';

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
      icon: Handshake,
      title: t.biomaterials.pillar3Title,
      description: t.biomaterials.pillar3Desc,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero - Same height as Home */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image - Full coverage */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
          </div>
          
          {/* Leaf Logo - Top right, smaller */}
          <div className="absolute right-8 top-28 opacity-15 pointer-events-none">
            <img src={leafLogo} alt="" className="w-32 h-auto" />
          </div>
          
          <div className="container-wide relative z-10 pt-24">
            <div className="max-w-4xl">
              {/* Small leaf + S.A. Sustainability - Same style as InteligenciaMercado */}
              <div className="flex items-center mb-4">
                <img src={leafLogo} alt="" className="w-28 h-32 md:w-32 md:h-36 object-contain -mr-4" />
                <span className="text-xl md:text-2xl font-heading font-semibold text-primary">
                  {t.biomaterials.subtitle}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <span className="text-gradient">{t.biomaterials.title}</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground font-heading font-medium mb-6">
                {t.biomaterials.tagline}
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl font-semibold">
                {t.biomaterials.intro}
              </p>
            </div>
          </div>
        </section>

        {/* S.A. Sustainability Section - Same style as InteligenciaMercado */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <div className="flex items-center justify-center mb-8">
              <img src={leafLogo} alt="" className="w-28 h-32 md:w-32 md:h-36 object-contain -mr-4" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                {t.biomaterials.subtitle}
              </h2>
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.biomaterials.sectionDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Pillars - Now comes after S.A. Sustainability */}
        <section className="section-padding bg-gradient-hero text-primary-foreground">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              {t.biomaterials.pillarsTitle}
            </h2>
            <p className="text-primary-foreground/80 text-center max-w-3xl mx-auto mb-16 text-lg">
              {t.biomaterials.pillarsSubtitle}
            </p>
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

        {/* Services - Now comes after Pillars */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              {t.biomaterials.servicesTitle}
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16 text-lg">
              {t.biomaterials.servicesSubtitle}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-subtle flex items-start gap-4 border border-border">
                  <div className="w-10 h-10 rounded-full bg-green-medium/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-medium" />
                  </div>
                  <p className="text-foreground text-base md:text-lg">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary/30 relative overflow-hidden">
          {/* Large leaf background on left side */}
          <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
            <img src={leafLogo} alt="" className="w-80 md:w-96 h-auto" />
          </div>
          
          <div className="container-wide text-center relative z-10">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
                {t.biomaterials.ctaTitle}
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                {t.biomaterials.ctaDesc}
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