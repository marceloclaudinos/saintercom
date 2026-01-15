import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/i18n/LanguageContext';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import leafLogo from '@/assets/logo-sa-intercom-transparent.png';
import saIntercomLogo from '@/assets/logo-transparent-SA-Intercom.png';
import whatsappIcon from '@/assets/whatsapp-icon.jpg';

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
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contato via Site - ${formData.company || formData.name}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\n` +
      `E-mail: ${formData.email}\n` +
      `Telefone: ${formData.phone || 'Não informado'}\n` +
      `Empresa: ${formData.company || 'Não informada'}\n\n` +
      `Mensagem:\n${formData.message}`
    );
    
    // Open email client with form data
    window.location.href = `mailto:marcelo.claudino@saintercom.com.br?subject=${subject}&body=${body}`;
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1000));
    
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
    { icon: MapPin, label: 'São Paulo, SP - Brasil', isImage: false },
    { icon: Mail, label: 'contato@saintercom.com.br', href: 'mailto:contato@saintercom.com.br', isImage: false },
    { icon: whatsappIcon, label: '+55 11 99605-9833', href: 'https://api.whatsapp.com/send?phone=5511996059833', isImage: true },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-green-pale via-background to-secondary relative overflow-hidden">
          {/* Leaf Logo Background */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
            <img src={leafLogo} alt="" className="w-64 h-auto" />
          </div>
          
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
                <form action="https://formspree.io/f/mwvewvrj" method="POST" className="space-y-6">
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
                <div className="flex items-center gap-6">
                  {/* Contact Info */}
                  <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center shrink-0 overflow-hidden">
                          {item.isImage ? (
                            <img src={item.icon as string} alt="" className="w-6 h-6 object-contain" />
                          ) : (
                            <item.icon className="w-5 h-5 text-primary-foreground" />
                          )}
                        </div>
                        <div>
                          {item.href ? (
                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-base hover:text-primary transition-colors">
                              {item.label}
                            </a>
                          ) : (
                            <p className="text-base">{item.label}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Logo */}
                  <img 
                    src={saIntercomLogo} 
                    alt="S.A. Intercom" 
                    className="h-24 w-auto shrink-0"
                  />
                </div>


                {/* D-U-N-S Section */}
                <div className="mt-8 p-6 bg-card rounded-2xl border border-border">
                  <h3 className="text-lg font-heading font-semibold mb-4">
                    Registro Internacional D-U-N-S®
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    A S.A. Intercom possui identificação global D-U-N-S®, utilizada mundialmente por empresas e instituições para processos de compliance, auditoria e qualificação de fornecedores.
                  </p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p><strong>S.A. Intercom</strong> – Santos & Santos Consultoria e Assessoria Empresarial Ltda.</p>
                    <p>CNPJ: 08.343.129/0001-04</p>
                    <p>D-U-N-S® Number: 898675456</p>
                    <p className="text-xs mt-2 italic">Registro internacional corporativo mantido pela Dun & Bradstreet.</p>
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
