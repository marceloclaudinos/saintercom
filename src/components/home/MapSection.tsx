import { useLanguage } from '@/i18n/LanguageContext';
import mapaLatam from '@/assets/mapa-latam-globe.png';

const MapSection = () => {
  const { t } = useLanguage();

  const stats = [
    { value: t.map.stat1, label: t.map.stat1Label },
    { value: t.map.stat2, label: t.map.stat2Label },
    { value: t.map.stat3, label: t.map.stat3Label },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)),transparent_50%)]" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              {t.map.title}
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              {t.map.subtitle}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-secondary border border-border"
                >
                  <div className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="relative overflow-visible">
            <div className="relative animate-float">
              <img
                src={mapaLatam}
                alt="Latin America Map"
                className="w-full max-w-sm mx-auto object-contain"
              />
            </div>

            {/* Decorative circle */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border-2 border-dashed border-primary/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
