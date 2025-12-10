import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Language } from '@/i18n/translations';
import logo from '@/assets/logo-sa-intercom.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: t.nav.home },
    { path: '/inteligencia-mercado', label: t.nav.intelligence, sub: t.nav.intelligenceSub },
    { path: '/biomateriais', label: t.nav.biomaterials, sub: t.nav.biomaterialsSub },
    { path: '/parcerias', label: t.nav.partnerships, sub: t.nav.partnershipsSub },
    { path: '/empresa', label: t.nav.company },
    { path: '/contato', label: t.nav.contact },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'pt', label: 'PT', flag: '🇧🇷' },
    { code: 'en', label: 'EN', flag: '🇺🇸' },
    { code: 'es', label: 'ES', flag: '🇪🇸' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-effect shadow-elevated py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="S.A. Intercom"
              className="h-12 md:h-14 transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-3 group ${
                  location.pathname === item.path ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                <div className="flex flex-col items-center">
                  <span className="text-xs font-heading font-semibold tracking-wider uppercase transition-colors group-hover:text-primary">
                    {item.label}
                  </span>
                  {item.sub && (
                    <span className="text-[10px] font-body text-muted-foreground font-light mt-0.5">
                      {item.sub}
                    </span>
                  )}
                </div>
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">
                  {languages.find(l => l.code === language)?.flag}
                </span>
              </button>
              
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-floating overflow-hidden z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-secondary transition-colors ${
                        language === lang.code ? 'bg-secondary text-primary' : ''
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 px-4 rounded-lg transition-colors animate-slide-up ${
                  location.pathname === item.path
                    ? 'bg-secondary text-primary'
                    : 'hover:bg-secondary'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-sm font-heading font-semibold tracking-wider uppercase">
                  {item.label}
                </span>
                {item.sub && (
                  <span className="block text-xs text-muted-foreground font-light mt-0.5">
                    {item.sub}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
