import { Link } from 'react-router-dom';
import { BarChart3, Leaf, Handshake, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: BarChart3,
      title: t.nav.intelligence,
      subtitle: t.nav.intelligenceSub,
      description: t.intelligence.intro,
      link: '/inteligencia-mercado',
      gradient: 'from-green-dark to-green-primary',
    },
    {
      icon: Leaf,
      title: t.nav.biomaterials,
      subtitle: t.nav.biomaterialsSub,
      description: t.biomaterials.intro,
      link: '/biomateriais',
      gradient: 'from-green-primary to-green-medium',
    },
    {
      icon: Handshake,
      title: t.nav.partnerships,
      subtitle: t.nav.partnershipsSub,
      description: t.partnerships.intro,
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
                  <service.icon className="w-12 h-12 text-primary-foreground mb-4" />
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
