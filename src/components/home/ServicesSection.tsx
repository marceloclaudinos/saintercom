import { Link } from 'react-router-dom';
import { ArrowRight, BrainCircuit, Recycle, Handshake } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: BrainCircuit,
      title: t.nav.intelligence,
      subtitle: t.nav.intelligenceSub,
      description: t.services?.intelligenceDesc || 'Combinamos a expertise profunda de quem conhece o campo com IA para entregar projetos de Pesquisa e Inteligência de Mercado com excelência, agilidade e valor.',
      link: '/inteligencia-mercado',
      gradient: 'from-green-dark to-green-primary',
    },
    {
      icon: Recycle,
      title: t.nav.biomaterials,
      subtitle: t.nav.biomaterialsSub,
      description: t.services?.biomaterialsDesc || 'Desenvolvimento de mercado para soluções sustentáveis e bioeconomia. Conexão entre inovação, ciência e impacto real no campo.',
      link: '/biomateriais',
      gradient: 'from-green-primary to-green-medium',
    },
    {
      icon: Handshake,
      title: t.nav.partnerships,
      subtitle: t.nav.partnershipsSub,
      description: t.services?.partnershipsDesc || 'Conexão com soluções emergentes, plataformas de produtividade e parceiros globais em IA.',
      link: '/parcerias',
      gradient: 'from-green-medium to-green-light',
    },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
            {t.services?.sectionTitle || 'Onde atuamos para o Agronegócio'}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group block"
            >
              <div className="h-full bg-card rounded-2xl overflow-hidden shadow-subtle hover:shadow-floating transition-all duration-500 card-hover">
                {/* Header */}
                <div className={`p-8 bg-gradient-to-br ${service.gradient}`}>
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary-foreground uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mt-1">
                    {service.subtitle}
                  </p>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-muted-foreground leading-relaxed line-clamp-4 mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    <span>Saiba mais</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
