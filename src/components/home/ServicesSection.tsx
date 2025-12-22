import { Link } from 'react-router-dom';
import { Lightbulb, Recycle, Handshake, ArrowRight, Leaf } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Lightbulb,
      title: t.nav.intelligence,
      subtitle: t.nav.intelligenceSub,
      description: t.services?.intelligenceDesc || 'Combinamos a expertise profunda de quem conhece o campo com IA para entregar projetos de Pesquisa e Inteligência de Mercado com excelência, agilidade e valor.',
      badge: null,
      link: '/inteligencia-mercado',
    },
    {
      icon: Recycle,
      title: t.nav.biomaterials,
      subtitle: t.nav.biomaterialsSub,
      description: t.services?.biomaterialsDesc || 'Desenvolvimento de mercado para soluções sustentáveis e bioeconomia. Conexão entre inovação, ciência e impacto real no campo.',
      badge: 'Biomateriais do Agro',
      link: '/biomateriais',
    },
    {
      icon: Handshake,
      title: t.nav.partnerships,
      subtitle: t.nav.partnershipsSub,
      description: t.services?.partnershipsDesc || 'Conexão com soluções emergentes, plataformas de produtividade e parceiros globais em IA.',
      badge: 'Parcerias no Agro',
      link: '/parcerias',
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
            <div
              key={index}
              className="group block relative"
            >
              {/* Decorative Leaves - Top Left */}
              <div className="absolute -top-3 -left-3 flex items-center gap-1 z-10">
                <Leaf className="w-5 h-5 text-primary rotate-[-30deg]" />
                <Leaf className="w-4 h-4 text-primary/70 rotate-[15deg]" />
              </div>

              <div className="h-full bg-card rounded-2xl overflow-hidden shadow-subtle hover:shadow-floating transition-all duration-500 card-hover border-t-4 border-primary">
                {/* Badge */}
                {service.badge && (
                  <div className="absolute top-16 right-4 z-10">
                    <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>
                )}

                {/* Icon Area */}
                <div className="p-6 pb-4 flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Leaf className="w-5 h-5 text-primary/60" />
                    <Leaf className="w-6 h-6 text-primary rotate-12" />
                  </div>
                </div>

                {/* Title Area */}
                <div className="px-6 pb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Leaf className="w-4 h-4 text-primary" />
                    <h3 className="text-lg font-heading font-bold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-primary text-sm font-medium flex items-center gap-1">
                    <Leaf className="w-3 h-3" />
                    {service.subtitle}
                  </p>
                </div>

                {/* Content */}
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center justify-center w-full py-3 px-4 border border-border rounded-lg text-foreground font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group/btn"
                  >
                    <span>Saiba Mais</span>
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
