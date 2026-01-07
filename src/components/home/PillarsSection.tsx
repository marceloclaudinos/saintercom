import { useLanguage } from '@/i18n/LanguageContext';
import leafLogo from '@/assets/logo-folha-transparent.png';

import pilarIcon from '@/assets/pilar_home.png';

const LeafDecoration = () => (
  <img 
    src={leafLogo} 
    alt="" 
    className="w-8 h-8 object-contain absolute -top-2 -right-2 opacity-60"
  />
);

const PillarsSection = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      title: t.pillars.intelligence.title,
      description: t.pillars.intelligence.description,
      color: 'from-green-dark to-green-primary',
      hasLeaf: false,
    },
    {
      title: t.pillars.sustainability.title,
      description: t.pillars.sustainability.description,
      color: 'from-green-primary to-green-medium',
      hasLeaf: true,
    },
    {
      title: t.pillars.technology.title,
      description: t.pillars.technology.description,
      color: 'from-green-medium to-green-light',
      hasLeaf: false,
    },
  ];

  return (
    <section className="section-padding bg-gradient-subtle relative overflow-hidden">
      {/* Background Leaf */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <img src={leafLogo} alt="" className="w-[500px] h-auto" />
      </div>
      
      <div className="container-wide relative z-10">
        {/* Section Header with Leaf */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-center mb-4">
            <img 
              src={leafLogo} 
              alt="" 
              className="w-28 h-32 md:w-32 md:h-36 object-contain -mr-4"
            />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              {t.pillars.title}
            </h2>
          </div>
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

              {/* Leaf decoration for middle pillar */}
              {pillar.hasLeaf && <LeafDecoration />}

              {/* Pillar Icon */}
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <img src={pilarIcon} alt="" className="w-16 h-16 object-contain" />
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
