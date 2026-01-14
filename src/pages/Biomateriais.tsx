import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { CheckCircle, Sprout, TrendingUp, Handshake } from 'lucide-react';
import heroImage from '@/assets/biomateriais-agro-new.png';
import leafLogo from '@/assets/logo-folha-only-new.png';

const Biomateriais = () => {
  const { t } = useLanguage();

  const services = [
    'Identificar e priorizar bioprodutos com alto potencial de mercado',
    'Mapear cadeias produtivas, rotas comerciais e compradores estratégicos',
    'Estruturar modelos de parceria e apoiar a captação de recursos e investimentos',
    'Analisar competitividade, riscos e barreiras técnicas, regulatórias e comerciais',
    'Atuar na concepção, estruturação e construção de unidades industriais',
    'Definir estratégias de posicionamento às necessidades concretas do agronegócio',
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
                  S.A. Sustainability
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <span className="text-gradient">{t.biomaterials.title}</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground font-heading font-medium mb-6">
                {t.biomaterials.tagline}
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl font-semibold">
                Nosso olhar estratégico se volta para novos materiais, tecnologias e soluções sustentáveis capazes de transformar resíduos, melhorar a eficiência produtiva e abrir novas fronteiras de valor no agro.
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
                S.A. Sustainability
              </h2>
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A S.A. Sustainability, unidade de negócios da S.A. Intercom, combina mais de 30 anos de experiência no agronegócio, inteligência de mercado e parcerias estratégicas para impulsionar soluções inovadoras e sustentáveis no agro.
              </p>
            </div>
          </div>
        </section>

        {/* Pillars - Now comes after S.A. Sustainability */}
        <section className="section-padding bg-gradient-hero text-primary-foreground">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
              Nossos Três Focos de Atuação
            </h2>
            <p className="text-primary-foreground/80 text-center max-w-3xl mx-auto mb-16 text-lg">
              Apoio estratégico e financeiro à criação de novas tecnologias e soluções de materiais, alinhados à agenda ESG.
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
              Como Apoiamos Nossos Parceiros
            </h2>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-16 text-lg">
              Unimos conhecimento de mercado, recursos e investimentos para transformar inovação em negócios viáveis no agro. Atuamos junto aos nossos parceiros para:
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
        <section className="section-padding bg-secondary/30">
          <div className="container-wide text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">
                S.A. Intercom – Transformando inovação em valor real para o agronegócio
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Combinamos 30 anos de experiência no setor agro, relacionamentos e novas tecnologias de materiais de resíduos agrícolas, posicionando soluções inovadoras de forma estratégica.
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
