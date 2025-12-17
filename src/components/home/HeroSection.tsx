import { useLanguage } from '@/i18n/LanguageContext';
import heroImage from '@/assets/home-hero.jpg';
import leafLogo from '@/assets/logo-sa-intercom-transparent.png';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
      </div>
      
      {/* Background Leaf Logo */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
        <img
          src={leafLogo}
          alt=""
          className="w-96 h-auto"
        />
      </div>

      <div className="container-wide relative z-10 pt-24">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight mb-8 animate-slide-up">
            <span className="text-gradient">O Agro</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-foreground mb-4 animate-slide-up delay-100">
            Insights Inteligentes,
          </h2>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-foreground mb-8 animate-slide-up delay-200">
            Decisões Sustentáveis
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6 animate-slide-up delay-300">
            {t.hero.subtitle}
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl animate-slide-up delay-400">
            Assumimos os desafios dos nossos clientes como nossos, desenvolvendo projetos e soluções sob medida que impulsionam negócios e fortalecem decisões estratégicas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
