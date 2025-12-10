import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { Handshake, Bot, Cog, Users, Gamepad2, Cpu, Sprout, ArrowRight } from 'lucide-react';

const Parcerias = () => {
  const { t } = useLanguage();

  const deliverables = [
    { icon: Bot, title: t.partnerships.deliver1Title, description: t.partnerships.deliver1Desc },
    { icon: Bot, title: t.partnerships.deliver2Title, description: t.partnerships.deliver2Desc },
    { icon: Cog, title: t.partnerships.deliver3Title, description: t.partnerships.deliver3Desc },
    { icon: Users, title: t.partnerships.deliver4Title, description: t.partnerships.deliver4Desc },
    { icon: Gamepad2, title: t.partnerships.deliver5Title, description: t.partnerships.deliver5Desc },
    { icon: Sprout, title: t.partnerships.deliver6Title, description: t.partnerships.deliver6Desc },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-green-pale via-background to-secondary relative overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-green-light/10 rounded-full blur-3xl" />
          <div className="container-wide relative z-10">
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
                {t.partnerships.tagline}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {t.partnerships.intro}
              </p>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
              {t.partnerships.deliverTitle}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deliverables.map((item, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 shadow-subtle card-hover border border-border">
                  <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
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
                {t.partnerships.roleDesc}
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
