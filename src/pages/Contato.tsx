import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contato = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: t.contact.success,
      description: '',
    });
    
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    { icon: MapPin, label: 'São Paulo, SP - Brasil' },
    { icon: Mail, label: 'contato@saintercom.com', href: 'mailto:contato@saintercom.com' },
    { icon: Phone, label: '+55 11 99999-9999', href: 'tel:+5511999999999' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-green-pale via-background to-secondary relative overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-green-light/10 rounded-full blur-3xl" />
          <div className="container-wide relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <span className="text-gradient">{t.contact.title}</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                {t.contact.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section-padding bg-background">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <div className="bg-card rounded-2xl p-8 shadow-subtle border border-border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t.contact.name}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t.contact.email}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t.contact.phone}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t.contact.company}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.contact.message}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {t.contact.submit}
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center">
                <div className="space-y-8">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        {item.href ? (
                          <a href={item.href} className="text-lg hover:text-primary transition-colors">
                            {item.label}
                          </a>
                        ) : (
                          <p className="text-lg">{item.label}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-secondary rounded-2xl">
                  <h3 className="text-lg font-heading font-semibold mb-4">
                    Nosso Escritório
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    São Paulo, SP - Brasil
                  </p>
                  <p className="text-muted-foreground mb-2">
                    + Labs de IA na Califórnia (Berkeley)
                  </p>
                  <div className="flex items-center gap-2 text-sm text-green-medium mt-4">
                    <CheckCircle className="w-4 h-4" />
                    <span>Atendimento em toda América Latina</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;
