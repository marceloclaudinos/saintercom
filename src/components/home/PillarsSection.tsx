import { Lightbulb, Leaf, Cpu } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const PillarsSection = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Lightbulb,
      title: t.pillars.intelligence.title,
      description: t.pillars.intelligence.description,
      color: 'from-green-dark to-green-primary',
    },
    {
      icon: Leaf,
      title: t.pillars.sustainability.title,
      description: t.pillars.sustainability.description,
      color: 'from-green-primary to-green-medium',
    },
    {
      icon: Cpu,
      title: t.pillars.technology.title,
      description: t.pillars.technology.description,
      color: 'from-green-medium to-green-light',
    },
  ];

  return (
    <section className="section-padding bg-gradient-subtle">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            {t.pillars.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.pillars.subtitle}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 shadow-subtle hover:shadow-elevated transition-all duration-500 card-hover overflow-hidden"
            >
              {/* Gradient Accent */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${pillar.color}`}
              />

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <pillar.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
