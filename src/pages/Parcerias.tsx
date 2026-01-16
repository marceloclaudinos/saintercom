import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { Handshake, MessageSquare, DollarSign } from 'lucide-react';
import leafLogo from '@/assets/logo-transparent-sem-texto.png';
import heroImage from '@/assets/parcerias-agro.png';
import logoCentrus from '@/assets/parceiros/logo-centrus.jpg';
import logoSelfinancial from '@/assets/selfinancial-logo.jpg';

const Parcerias = () => {
  const { t } = useLanguage();

  const partners = [
    { 
      icon: MessageSquare, 
      title: t.partnerships.centrusTitle, 
      subtitle: t.partnerships.centrusSubtitle,
      logo: logoCentrus,
      description: t.partnerships.centrusDesc,
      items: t.partnerships.centrusItems,
      cta: t.partnerships.centrusCta,
      link: '#'
    },
    { 
      icon: DollarSign, 
      title: t.partnerships.selfinancialTitle, 
      subtitle: t.partnerships.selfinancialSubtitle,
      logo: logoSelfinancial,
      description: t.partnerships.selfinancialDesc,
      items: t.partnerships.selfinancialItems,
      cta: t.partnerships.selfinancialCta,
      link: '#'
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
            <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/60 to-background/30" />
          </div>
          
          <div className="container-wide relative z-10 pt-24">
            <div className="max-w-4xl">
              {/* Small leaf + S.A. Business Partner */}
              <div className="flex items-center mb-4">
                <img src={leafLogo} alt="" className="w-28 h-32 md:w-32 md:h-36 object-contain -mr-4" />
                <span className="text-xl md:text-2xl font-heading font-semibold text-primary">
                  {t.partnerships.subtitle}
                </span>
              </div>
              
              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <span className="text-gradient">{t.partnerships.title}</span>
              </h1>
              
              {/* Tagline */}
              <p className="text-xl md:text-2xl text-foreground font-heading font-medium mb-6">
                {t.partnerships.tagline}
              </p>
              
              {/* Main description */}
              <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl font-semibold">
                {t.partnerships.intro}
              </p>
            </div>
          </div>
        </section>

        {/* New Section - S.A. Business Partner */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <div className="flex items-center justify-center mb-8">
              <img src={leafLogo} alt="" className="w-28 h-32 md:w-32 md:h-36 object-contain -mr-4" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                {t.partnerships.subtitle}
              </h2>
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.partnerships.sectionDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
              {t.partnerships.partnersTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {partners.map((partner, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-subtle border border-border">
                  {/* Partner Logo */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-white flex items-center justify-center p-2">
                      <img 
                        src={partner.logo} 
                        alt={partner.title} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-semibold">
                        {partner.title}
                      </h3>
                      <p className="text-primary font-medium">
                        {partner.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {partner.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {partner.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-medium mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground italic border-t border-border pt-4">
                    {partner.cta}
                  </p>
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

export default Parcerias;