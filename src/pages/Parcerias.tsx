import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { Handshake, Cpu, ArrowRight, MessageSquare, DollarSign } from 'lucide-react';
import leafLogo from '@/assets/logo-sa-intercom-transparent.png';
import heroImage from '@/assets/parcerias-agro.png';
import logoCentrus from '@/assets/logo-centrus-ai.png';
import logoSelfinancial from '@/assets/selfinancial-logo.jpg';

const Parcerias = () => {
  const { t } = useLanguage();

  const partners = [
    { 
      icon: MessageSquare, 
      title: 'IA Centrus', 
      subtitle: 'Agentes Conversacionais com IA',
      logo: logoCentrus,
      description: 'Desenvolvimento de agentes conversacionais avançados, integrados a:',
      items: [
        'Atendimento ao cliente',
        'WhatsApp empresarial',
        'SAC e suporte técnico',
        'Automação de vendas e processos',
        'Bots de voz e texto em linguagem natural',
      ],
      cta: 'A S.A. Intercom conecta empresas do Agro a soluções conversacionais preparadas para escalar atendimento, reduzir custos e melhorar experiência do cliente.',
      link: '#'
    },
    { 
      icon: DollarSign, 
      title: 'IASelfinancial', 
      subtitle: 'Inteligência Financeira & Open Finance',
      logo: logoSelfinancial,
      description: 'Plataforma de inteligência financeira baseada em Open Finance e Inteligência Artificial, voltada à educação financeira, análise de comportamento e automação de decisões, integrada a:',
      items: [
        'Educação financeira digital e personalizada',
        'Automação de recomendações financeiras',
        'Integração segura com dados bancários (Open Finance)',
        'Agentes conversacionais financeiros com IA',
      ],
      cta: 'A S.A. Intercom conecta empresas do Agro à Selfinancial, viabilizando a compreensão do comportamento financeiro de produtores, apoiando estratégias de relacionamento bancário e decisões mais sustentáveis, orientadas por dados.',
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
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
          </div>
          
          {/* Leaf Logo - Top right, smaller */}
          <div className="absolute right-8 top-28 opacity-15 pointer-events-none">
            <img src={leafLogo} alt="" className="w-32 h-auto" />
          </div>
          
          <div className="container-wide relative z-10 pt-24">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
                <Handshake className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">
                  {t.partnerships.subtitle}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <span className="text-gradient">{t.partnerships.title}</span>
              </h1>
              <p className="text-2xl text-primary font-heading font-medium mb-6">
                Consultoria & Business Partner em IA para o Agronegócio
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                A S.A. Intercom atua como interface estratégica entre empresas parceiras e empresas do agronegócio, apoiando a incorporação de tecnologias emergentes, inteligência artificial, transformação digital e novos modelos de gestão nas organizações do setor.
              </p>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
              Nossos Parceiros
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

        {/* Role */}
        <section className="section-padding bg-gradient-hero text-primary-foreground">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto text-center">
              <Cpu className="w-16 h-16 mx-auto mb-8 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                {t.partnerships.roleTitle}
              </h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
                Somos o elo entre empresas parceiras de conhecimento, inovação e impacto, levando para o agronegócio soluções que reduzem custos, aumentam eficiência e elevam a competitividade.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                {['Conectamos tecnologia ao agro', 'Parceiros globais validados', 'IA para acelerar decisões', 'Projetos reais e escaláveis'].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full">
                    <ArrowRight className="w-4 h-4" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Parcerias;