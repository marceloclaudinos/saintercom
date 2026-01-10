import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import logo from '@/assets/logo-folha-transparent.png';
import dunsLogo from '@/assets/duns-certificate.jpeg';
import { Linkedin, Mail, MapPin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1 flex flex-col items-center">
            <img
              src={logo}
              alt="S.A. Intercom"
              className="h-32 w-auto mb-4 ml-4"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4 text-center lg:text-left">
              O Agro conectado ao futuro: Insights Inteligentes, Decisões Sustentáveis.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/sa-intercom/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/sa_intecom"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCb-iCiGwNf4EMDCmmqyvTqQ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4 uppercase tracking-wider">
              {t.nav.home}
            </h4>
            <nav className="flex flex-col gap-2">
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
            <h4 className="font-heading font-semibold text-base mb-4 uppercase tracking-wider">
              {t.nav.contact}
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-green-light" />
                <span className="text-primary-foreground/80 text-sm">
                  São Paulo, SP - Brasil
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-green-light" />
                <a href="mailto:contato@saintercom.com.br" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  contato@saintercom.com.br
                </a>
              </div>
            </div>
          </div>

          {/* D-U-N-S Certification */}
          <div className="flex flex-col items-center lg:items-end">
            <img
              src={dunsLogo}
              alt="D-U-N-S Registered"
              className="h-16 mb-3 rounded-lg"
            />
            <p className="text-primary-foreground/80 text-xs text-center lg:text-right">
              {t.footer.dunsNumber}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-4 flex items-center justify-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} S.A. Intercom. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
