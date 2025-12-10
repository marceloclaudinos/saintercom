import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import logo from '@/assets/logo-sa-intercom.png';
import dunsLogo from '@/assets/duns-certificate.jpeg';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="S.A. Intercom"
              className="h-16 mb-6 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              O Agro conectado ao futuro: Insights Inteligentes, Decisões Sustentáveis.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 uppercase tracking-wider">
              {t.nav.home}
            </h4>
            <nav className="flex flex-col gap-3">
              <Link to="/inteligencia-mercado" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                {t.nav.intelligence}
              </Link>
              <Link to="/biomateriais" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                {t.nav.biomaterials}
              </Link>
              <Link to="/parcerias" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                {t.nav.partnerships}
              </Link>
              <Link to="/empresa" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                {t.nav.company}
              </Link>
              <Link to="/contato" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                {t.nav.contact}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 uppercase tracking-wider">
              {t.nav.contact}
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-green-light" />
                <span className="text-primary-foreground/80 text-sm">
                  São Paulo, SP - Brasil
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-light" />
                <a href="mailto:contato@saintercom.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  contato@saintercom.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-light" />
                <a href="tel:+5511999999999" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  +55 11 99999-9999
                </a>
              </div>
            </div>
          </div>

          {/* D-U-N-S Certification */}
          <div className="flex flex-col items-center lg:items-end">
            <img
              src={dunsLogo}
              alt="D-U-N-S Registered"
              className="h-20 mb-4 rounded-lg"
            />
            <p className="text-primary-foreground/80 text-xs text-center lg:text-right">
              {t.footer.dunsNumber}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} S.A. Intercom. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
              {t.footer.privacy}
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
