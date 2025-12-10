import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-pale via-background to-secondary" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-green-light/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Leaf Pattern SVG */}
      <svg
        className="absolute right-0 top-1/4 w-64 h-64 text-primary/5"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50 5 C20 25, 10 60, 50 95 C90 60, 80 25, 50 5" />
      </svg>
      <svg
        className="absolute left-10 bottom-1/4 w-48 h-48 text-green-medium/5"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50 5 C20 25, 10 60, 50 95 C90 60, 80 25, 50 5" />
      </svg>

      <div className="container-wide relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-medium animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Made for humans. Powered by AI.
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight mb-8 animate-slide-up">
            <span className="text-gradient">{t.hero.slogan.split(':')[0]}:</span>
            <br />
            <span className="text-foreground">{t.hero.slogan.split(':')[1]}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up delay-200">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
            <Link to="/inteligencia-mercado" className="btn-primary flex items-center gap-2 group">
              {t.hero.cta}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contato" className="btn-secondary">
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
