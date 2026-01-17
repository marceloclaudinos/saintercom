import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { CheckCircle, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/inteligencia-mercado.jpg';
import leafLogo from '@/assets/logo-folha-only.png';
import colorLeafLogo from '@/assets/logo-transparent-sem-texto.png';

const InteligenciaMercado = () => {
  const { t } = useLanguage();

  const benefits = [
    { label: t.intelligence.benefit1, value: '30%' },
    { label: t.intelligence.benefit2, value: '2x' },
    { label: t.intelligence.benefit3, value: '∞' },
    { label: t.intelligence.benefit4, value: '100%' },
  ];

  const araiSteps = [
    { step: '1', title: t.intelligence.step1, items: t.intelligence.step1Items },
    { step: '2', title: t.intelligence.step2, items: t.intelligence.step2Items },
    { step: '3', title: t.intelligence.step3, items: t.intelligence.step3Items },
    { step: '4', title: t.intelligence.step4, items: t.intelligence.step4Items },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero - Same height as Home */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image - Full coverage with lower position to show faces */}
          <div 
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: 'right 30% top 15%' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/60 to-background/30" />
          </div>
          
          
          <div className="container-wide relative z-10 pt-24">
            <div className="max-w-4xl">
              {/* Small leaf + S.A. Agribusiness Intelligence */}
              <div className="flex items-center mb-4">
                <img src={leafLogo} alt="" className="w-28 h-32 md:w-32 md:h-36 object-contain -mr-4" />
                <span className="text-xl md:text-2xl font-heading font-semibold text-primary">
                  {t.intelligence.subtitle}
                </span>
              </div>
              
              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <span className="text-gradient">{t.intelligence.title}</span>
              </h1>
              
              {/* Tagline */}
              <p className="text-xl md:text-2xl text-foreground font-heading font-medium mb-6">
                {t.intelligence.tagline}
              </p>
              
              {/* Main description */}
              <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl font-semibold">
                {t.intelligence.intro}
              </p>
            </div>
          </div>
        </section>

        {/* New Section - S.A. Agribusiness Intelligence */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <div className="flex items-center justify-center mb-8">
              <img src={leafLogo} alt="" className="w-28 h-32 md:w-32 md:h-36 object-contain -mr-4" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                {t.intelligence.subtitle}
              </h2>
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.intelligence.sectionDesc}
              </p>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="section-padding bg-background relative overflow-hidden">
          {/* Leaf Background */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
            <img src={leafLogo} alt="" className="w-96 h-auto" />
          </div>
          
          <div className="container-wide relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                {t.intelligence.araiTitle}
              </h2>
              <p className="text-muted-foreground text-lg">
                {t.intelligence.araiSubtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {araiSteps.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="bg-card rounded-2xl p-5 shadow-subtle h-full border border-border min-h-[130px] overflow-hidden">
                    {/* Horizontal layout: Leaf left, content right */}
                    <div className="flex items-center gap-3 h-full">
                      {/* Leaf with number - left-aligned */}
                      <div className="relative w-16 h-16 shrink-0">
                        <img src={leafLogo} alt="" className="w-16 h-16 object-contain" />
                        <span className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                          {phase.step}
                        </span>
                      </div>
                      {/* Title and items */}
                      <div className="flex-1 min-w-0 flex flex-col justify-center overflow-hidden">
                        <h3 className="text-lg font-heading font-bold mb-1 truncate">
                          {phase.title}
                        </h3>
                        <ul className="space-y-0.5">
                          {phase.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <CheckCircle className="w-3 h-3 text-green-medium shrink-0" />
                              <span className="truncate">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {index < araiSteps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-gradient-hero text-primary-foreground">
          <div className="container-wide">
            <div className="flex items-center justify-center mb-16">
              <img src={colorLeafLogo} alt="" className="w-28 h-32 md:w-32 md:h-36 object-contain -mr-4" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">
                {t.intelligence.benefitsTitle}
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className={`font-heading font-bold mb-3 ${benefit.value === '∞' ? 'text-6xl md:text-7xl' : 'text-5xl md:text-6xl'}`}>
                    {benefit.value}
                  </div>
                  <p className="text-primary-foreground/90 text-lg font-medium">
                    {benefit.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                {t.intelligence.projectsTitle}
              </h2>
              <p className="text-muted-foreground text-lg">
                {t.intelligence.projectsSubtitle}
              </p>
            </div>

            {/* First row - 2 columns */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Visão do Cliente & Relacionamento */}
              <div className="bg-card rounded-2xl p-8 shadow-subtle">
                <h3 className="text-xl font-heading font-semibold mb-6 text-primary">
                  {t.intelligence.project1Title}
                </h3>
                <h4 className="text-base font-medium mb-4 text-foreground">{t.intelligence.project1Subtitle}</h4>
                <ul className="space-y-3">
                  {t.intelligence.project1Items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-medium mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Brand Strategy & Posicionamento */}
              <div className="bg-card rounded-2xl p-8 shadow-subtle">
                <h3 className="text-xl font-heading font-semibold mb-6 text-primary">
                  {t.intelligence.project2Title}
                </h3>
                <h4 className="text-base font-medium mb-4 text-foreground">{t.intelligence.project2Subtitle}</h4>
                <ul className="space-y-3">
                  {t.intelligence.project2Items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-medium mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Second row - 2 columns */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Estratégia de Mercado & Go-to-Market */}
              <div className="bg-card rounded-2xl p-8 shadow-subtle">
                <h3 className="text-xl font-heading font-semibold mb-6 text-primary">
                  {t.intelligence.project3Title}
                </h3>
                <h4 className="text-base font-medium mb-4 text-foreground">{t.intelligence.project3Subtitle}</h4>
                <ul className="space-y-3">
                  {t.intelligence.project3Items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-medium mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inteligência Estratégica & Foresight */}
              <div className="bg-card rounded-2xl p-8 shadow-subtle">
                <h3 className="text-xl font-heading font-semibold mb-6 text-primary">
                  {t.intelligence.project4Title}
                </h3>
                <h4 className="text-base font-medium mb-4 text-foreground">{t.intelligence.project4Subtitle}</h4>
                <ul className="space-y-3">
                  {t.intelligence.project4Items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-medium mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Intermediate paragraph - Pesquisa de Mercado */}
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                {t.intelligence.researchTitle}
              </h3>
              <p className="text-muted-foreground text-lg">
                {t.intelligence.researchDesc}
              </p>
            </div>

            {/* Third row - 2 columns for research types */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Pesquisas Qualitativas */}
              <div className="bg-card rounded-2xl p-8 shadow-subtle">
                <h3 className="text-xl font-heading font-semibold mb-6">
                  {t.intelligence.qualitativeTitle}
                </h3>
                <ul className="space-y-3">
                  {t.intelligence.qualitativeItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-medium mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pesquisas Quantitativas */}
              <div className="bg-card rounded-2xl p-8 shadow-subtle">
                <h3 className="text-xl font-heading font-semibold mb-6">
                  {t.intelligence.quantitativeTitle}
                </h3>
                <ul className="space-y-3">
                  {t.intelligence.quantitativeItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-medium mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InteligenciaMercado;