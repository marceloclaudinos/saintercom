import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { CheckCircle, TrendingUp, Zap, Award, Users, Search, BarChart3, Building2 } from 'lucide-react';

const InteligenciaMercado = () => {
  const { t } = useLanguage();

  const benefits = [
    { icon: TrendingUp, label: t.intelligence.benefit1, value: '30%' },
    { icon: Zap, label: t.intelligence.benefit2, value: '2x' },
    { icon: Users, label: t.intelligence.benefit3, value: '∞' },
    { icon: Award, label: t.intelligence.benefit4, value: '100%' },
  ];

  const araiSteps = [
    { step: '1', title: 'Pré-Aprovação', items: ['Briefing Inicial (NLP Analysis)', 'Design da Proposta (AIRD)'] },
    { step: '2', title: 'Aprovação', items: ['Briefing Aprofundado (NLP Analysis)', 'Design do Instrumento de Coleta'] },
    { step: '3', title: 'Execução', items: ['Coleta Primária (AI-powered)', 'Coleta Secundária (RAG)', 'Processamento de Dados (ML)'] },
    { step: '4', title: 'Apresentação', items: ['Análise & Insights (AI-Driven)', 'Apresentação (AI-Results)'] },
  ];

  const projects = [
    {
      icon: Users,
      title: t.intelligence.project1Title,
      items: t.intelligence.project1Items,
    },
    {
      icon: Search,
      title: t.intelligence.project2Title,
      items: t.intelligence.project2Items,
    },
    {
      icon: Building2,
      title: t.intelligence.project3Title,
      items: t.intelligence.project3Items,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-green-pale via-background to-secondary relative overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-green-light/10 rounded-full blur-3xl" />
          <div className="container-wide relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
                <BarChart3 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">
                  {t.intelligence.subtitle}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <span className="text-gradient">{t.intelligence.title}</span>
              </h1>
              <p className="text-2xl text-primary font-heading font-medium mb-6">
                {t.intelligence.tagline}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {t.intelligence.intro}
              </p>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                {t.intelligence.araiTitle}
              </h2>
              <p className="text-muted-foreground text-lg">
                {t.intelligence.araiDescription}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {araiSteps.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="bg-card rounded-2xl p-6 shadow-subtle h-full border border-border">
                    <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold text-xl mb-4">
                      {phase.step}
                    </div>
                    <h3 className="text-lg font-heading font-semibold mb-4">
                      {phase.title}
                    </h3>
                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-medium mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {index < araiSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-gradient-hero text-primary-foreground">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
              {t.intelligence.benefitsTitle}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-heading font-bold mb-2">
                    {benefit.value}
                  </div>
                  <p className="text-primary-foreground/80">
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

            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-subtle card-hover">
                  <project.icon className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-xl font-heading font-semibold mb-6">
                    {project.title}
                  </h3>
                  <ul className="space-y-3">
                    {project.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-medium mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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

export default InteligenciaMercado;
