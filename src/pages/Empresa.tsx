import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { Building2, Target, Eye, Heart, CheckCircle, Sprout, Beef, Zap, Store, Tractor } from 'lucide-react';
import heroImage from '@/assets/empresa-hero.jpeg';
import leafLogo from '@/assets/logo-sa-intercom-transparent.png';

const Empresa = () => {
  const { t } = useLanguage();

  const highlights = [
    '30+ anos de experiência em Inteligência de Mercado Agro',
    'Equipe sênior: Agrônomos, Estatísticos, Consultores Especialistas, AI Specialist',
    'Empresa com expertise em IA - Escritório em São Paulo + Labs de IA na Califórnia (Berkeley)',
    'Foco exclusivo: Agronegócio na América Latina',
    'Estrutura enxuta e Processos eficientes, focados na análise e na Qualidade da informação',
  ];

  const values = [
    t.company.value1,
    t.company.value2,
    t.company.value3,
    t.company.value4,
  ];

  const segments = [
    { icon: Sprout, title: 'Agricultura & Insumos', items: ['Proteção de Cultivos', 'Fertilizantes & Nutrição Vegetal', 'Sementes & Biotecnologia Agrícola'] },
    { icon: Beef, title: 'Animal Health & Nutrition', items: ['Saúde e Nutrição', 'Pecuária de Corte', 'Aves, Suínos e Pets'] },
    { icon: Zap, title: 'Energia & Recursos Naturais', items: ['Biocombustíveis', 'Operações Agrícolas'] },
    { icon: Tractor, title: 'Máquinas Agrícolas', items: ['Máquinas e Implementos Agrícolas', 'Agricultura de Precisão'] },
    { icon: Store, title: 'Canais, Mercado & Ecossistema Agro', items: ['Cooperativas e Revendas Agropecuárias', 'Traders e Operadores', 'Prestadores de Serviços Agrícolas'] },
  ];

  const whyUs = [
    'Inteligência de mercado com profundidade e experiência sênior',
    'Conexão estratégica com empresas inovadoras',
    'Consultores que conhecem o campo e o cliente',
    'Entregas rápidas, completas e voltadas para resultados',
  ];

  const valueBlocks = [
    { title: 'S.A. Intelligence — Excelência Analítica', desc: 'Atuamos com profundidade analítica, visão estratégica e qualidade da informação.' },
    { title: 'S.A. Sustainability — Sustentabilidade com Viabilidade', desc: 'Conectamos bioeconomia, biomassa e soluções sustentáveis escaláveis no agronegócio.' },
    { title: 'S.A. Business Partner — Conexões que Geram Transformação', desc: 'Atuamos como elo estratégico entre empresas inovadoras, adoção de novas tecnologias, IA e práticas modernas de sustentabilidade.' },
    { title: 'Valor Transversal — Ética, Governança e Confiança', desc: 'Operamos com ética, transparência, governança de dados de clientes, parceiros e ao mercado.' },
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
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
          </div>
          
          {/* Leaf Logo Background */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
            <img src={leafLogo} alt="" className="w-64 h-auto" />
          </div>
          
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

        {/* Values Blocks */}
        <section className="section-padding bg-secondary/30">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
              Valores
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
                  <segment.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-base font-heading font-semibold mb-4">
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
