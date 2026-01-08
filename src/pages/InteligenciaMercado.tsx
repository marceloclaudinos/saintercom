import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { CheckCircle, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/inteligencia-mercado.jpg';
import leafLogo from '@/assets/logo-folha-only.png';

const InteligenciaMercado = () => {
  const { t } = useLanguage();

  const benefits = [
    { label: 'Redução de Custo', value: '30%' },
    { label: 'Entrega Mais Rápida', value: '2x' },
    { label: 'Escalabilidade', value: '∞' },
    { label: 'Qualidade', value: '100%' },
  ];

  const araiSteps = [
    { step: '1', title: 'Planejamento', items: ['Briefing Aprofundado (NLP Analysis)', 'Design do Instrumento (Narrative AI)'] },
    { step: '2', title: 'Coleta de Dados', items: ['Coleta Primária (AI-powered)', 'Coleta Secundária (Scraping)'] },
    { step: '3', title: 'Tratamento & Modelagem', items: ['Tratamento (ETL & Data Lake)', 'Modelagem (Feature Engineering)'] },
    { step: '4', title: 'Entrega Final', items: ['Análise & Insights (AI-Driven)', 'Entrega de Resultados (AI-Results)'] },
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
          
          {/* Leaf Logo - Top right, smaller */}
          <div className="absolute right-8 top-28 opacity-15 pointer-events-none">
            <img src={leafLogo} alt="" className="w-32 h-auto" />
          </div>
          
          <div className="container-wide relative z-10 pt-24">
            <div className="max-w-4xl">
              {/* Small leaf + S.A. Agribusiness Intelligence */}
              <div className="flex items-center mb-4">
                <img src={leafLogo} alt="" className="w-28 h-32 md:w-32 md:h-36 object-contain -mr-4" />
                <span className="text-xl md:text-2xl font-heading font-semibold text-primary">
                  S.A. Agribusiness Intelligence
                </span>
              </div>
              
              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <span className="text-gradient">INTELIGÊNCIA DE MERCADO</span>
              </h1>
              
              {/* Tagline */}
              <p className="text-xl md:text-2xl text-foreground font-heading font-medium mb-6">
                Made for humans. Powered by AI.
              </p>
              
              {/* Main description */}
              <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-3xl">
                Combinamos a expertise profunda de quem conhece o campo com a I.A. para entregar projetos de Pesquisa e Inteligência de Mercado com excelência, agilidade e valor.
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
                S.A. Agribusiness Intelligence
              </h2>
            </div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Esta unidade de negócio da S.A. Intercom, trabalha para transformar informações do mercado em insights práticos, ajudando empresas a entenderem melhor seus clientes, competidores, riscos e oportunidades no agro. Cada projeto de pesquisa e inteligência de mercado combina a visão humana de consultores experientes com ferramentas modernas de IA, garantindo precisão, agilidade e compreensão profunda do setor.
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
                Fases de um Projeto de Pesquisa e Inteligência de Mercado
              </h2>
              <p className="text-muted-foreground text-xl md:text-2xl">
                (com a Metodologia ARAI)
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {araiSteps.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="bg-card rounded-2xl p-6 shadow-subtle h-full border border-border">
                    {/* Leaf with number */}
                    <div className="relative w-20 h-20 mb-4">
                      <img src={leafLogo} alt="" className="w-20 h-20 object-contain" />
                      <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                        {phase.step}
                      </span>
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
            <div className="flex items-center justify-center gap-3 mb-16">
              <img src={leafLogo} alt="" className="w-10 h-auto -mr-2 brightness-0 invert" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">
                Benefícios e Diferenciais
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl md:text-6xl font-heading font-bold mb-3">
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
                Exemplos de Projetos que Desenvolvemos
              </h2>
              <p className="text-muted-foreground text-lg">
                Unimos Inteligência de Mercado, I.A. e Consultoria Sênior para apoiar decisões estratégicas no Agronegócio.
              </p>
            </div>

            {/* First row - 2 columns */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Gestão de Relacionamento com Clientes */}
              <div className="bg-card rounded-2xl p-8 shadow-subtle">
                <h3 className="text-xl font-heading font-semibold mb-6">
                  Gestão de Relacionamento com Clientes
                </h3>
                <ul className="space-y-3">
                  {['Funil de Vendas', 'Voz do cliente – Produtor (VOCs – B2C)', 'QFD Agroindústria (VOCs – B2B)', 'Programas de Fidelização (Benchmarking)', 'Mapeamento do Potencial de Consultores (VPC)'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-medium mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Posicionamento e Branding */}
              <div className="bg-card rounded-2xl p-8 shadow-subtle">
                <h3 className="text-xl font-heading font-semibold mb-6">
                  Posicionamento e Branding
                </h3>
                <ul className="space-y-3">
                  {['Teste de Conceito', 'Precificação (PSM, BPTO, Conjoint)', 'Avaliação da percepção e imagem da marca (brand equity)', 'Reposicionamento de produtos e soluções agro (Value Map)', 'ROI de Feiras (Retorno sobre o Investimento em Feiras)'].map((item, i) => (
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
              {/* Estudos de Mercado / GTM */}
              <div className="bg-card rounded-2xl p-8 shadow-subtle">
                <h3 className="text-xl font-heading font-semibold mb-6">
                  Estudos de Mercado / GTM - Go to Market
                </h3>
                <ul className="space-y-3">
                  {['Dimensionamento e Identificação de nichos de mercados potenciais', 'Estratégias de entrada em novas regiões', 'Avaliação de Canais e estrutura de Distribuição', 'Monitoramento Regional de demanda por insumos', 'Análise da concorrência regional em insumos e maquinário', 'Mapeamento de potencial de vendas – VPM Predict Geo'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-medium mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Consultoria Estratégica */}
              <div className="bg-card rounded-2xl p-8 shadow-subtle">
                <h3 className="text-xl font-heading font-semibold mb-6">
                  Consultoria Estratégica
                </h3>
                <ul className="space-y-3">
                  {['Diagnóstico competitivo de setores', 'Construção de Cenários', 'Validação de conceitos e inovações agro', 'Estudos de viabilidade para novos negócios agrícolas', 'Inteligência Preditiva de Vendas', 'Estruturação de inteligência de mercado interna'].map((item, i) => (
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
                Pesquisa de Mercado
              </h3>
              <p className="text-muted-foreground text-lg">
                Também realizamos pesquisas de mercado (qualitativas e quantitativas), com foco em lançamentos, performance de produto, satisfação do produto e canais de distribuição. Exemplos:
              </p>
            </div>

            {/* Third row - 2 columns for research types */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Pesquisas Qualitativas */}
              <div className="bg-card rounded-2xl p-8 shadow-subtle">
                <h3 className="text-xl font-heading font-semibold mb-6">
                  Pesquisas Qualitativas
                </h3>
                <ul className="space-y-3">
                  {['Focus Group', 'Pesquisa em Profundidade (IDIs)', 'Cliente oculto (Mystery shopping)', 'Café da manhã com produtores'].map((item, i) => (
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
                  Pesquisas Quantitativas
                </h3>
                <ul className="space-y-3">
                  {['Lançamento de Novos Produtos', 'Satisfação de Clientes - (NPS)', 'Tracking de Preços', 'Estudo em Distribuidores', 'Pesquisa Relâmpago'].map((item, i) => (
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