import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { CheckCircle, TrendingUp, Zap, Award, Users, Search, BarChart3, Building2, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/inteligencia-mercado.jpg';
import leafLogo from '@/assets/logo-sa-intercom-transparent.png';

const InteligenciaMercado = () => {
  const { t } = useLanguage();

  const benefits = [
    { icon: TrendingUp, label: t.intelligence.benefit1, value: '30%' },
    { icon: Zap, label: t.intelligence.benefit2, value: '2x' },
    { icon: Users, label: t.intelligence.benefit3, value: '∞' },
    { icon: Award, label: t.intelligence.benefit4, value: '100%' },
  ];

  const araiSteps = [
    { step: '1', title: 'Planejamento', subtitle: 'Pré-Aprovação', items: ['Briefing Inicial (NLP Analysis)', 'Design da Proposta (AIRD)', 'Design do Instrumento (Narrative AI)'] },
    { step: '2', title: 'Coleta de Dados', subtitle: 'Aprovação', items: ['Briefing Aprofundado (NLP Analysis)', 'Coleta Secundária (Scraping)'] },
    { step: '3', title: 'Tratamento & Modelagem', subtitle: 'Execução', items: ['Coleta Primária (AI-powered)', 'Modelagem (Feature Engineering)'] },
    { step: '4', title: 'Entrega Final', subtitle: 'Apresentação', items: ['Análise & Insights (AI-Driven)', 'Tratamento (ETL e Data Lake)', 'Entrega de Resultados (AI-Results)'] },
  ];

  const projects = [
    {
      icon: Users,
      title: 'Gestão de Relacionamento com Clientes',
      items: ['Funil de Vendas', 'Voz do cliente – Produtor (VOCs - B2C)', 'QFD Agroindústria (VOCs - B2B)', 'Programas de Fidelização (Benchmarking)', 'Mapeamento do Potencial de Consultores (VPC)'],
    },
    {
      icon: Search,
      title: 'Estudos de Mercado / GTM - Go to Market',
      items: ['Sizing de Mercado', 'Tendências e Forecast', 'Análise Competitiva', 'Segmentação de Mercado', 'Estratégias de entrada em novas regiões', 'Mapeamento de potencial de vendas – VPM Predict Geo'],
    },
    {
      icon: Building2,
      title: 'Pesquisa de Mercado',
      items: ['Focus Group', 'Pesquisa em Profundidade (IDIs)', 'Cliente oculto (Mystery shopping)', 'Lançamento de Novos Produtos', 'Satisfação de Clientes - (NPS)', 'Tracking de Preços'],
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
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: 'right 30% top 20%' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
          </div>
          
          {/* Leaf Logo - Top right, smaller */}
          <div className="absolute right-8 top-28 opacity-15 pointer-events-none">
            <img src={leafLogo} alt="" className="w-32 h-auto" />
          </div>
          
          <div className="container-wide relative z-10 pt-24">
            <div className="max-w-4xl">
              {/* Small leaf + S.A. Agribusiness Intelligence */}
              <div className="flex items-center gap-3 mb-4">
                <img src={leafLogo} alt="" className="w-10 h-auto" />
                <span className="text-xl md:text-2xl font-heading font-semibold text-primary">
                  S.A. Agribusiness Intelligence
                </span>
              </div>
              
              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <span className="text-gradient">INTELIGÊNCIA DE MERCADO</span>
              </h1>
              
              {/* Tagline */}
              <p className="text-xl md:text-2xl text-primary font-heading font-medium mb-6">
                Made for humans. Powered by AI.
              </p>
              
              {/* Main description - bold black */}
              <p className="text-lg md:text-xl text-foreground font-semibold leading-relaxed max-w-3xl">
                Unimos experiência real de campo com tecnologia de Inteligência Artificial para desenvolver Projetos de <span className="text-primary font-bold">Pesquisa e Inteligência de Mercado</span>, entregando análises completas, rápidas e com excelente custo-benefício.
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
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Metodologia ARAI
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
                    <h3 className="text-lg font-heading font-semibold mb-1">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-primary mb-4">{phase.subtitle}</p>
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
                    <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-primary" />
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
                Exemplos de Projetos que Desenvolvemos
              </h2>
              <p className="text-muted-foreground text-lg">
                Inteligência de Mercado, IA e Consultoria Sênior para apoiar decisões estratégicas no Agronegócio.
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