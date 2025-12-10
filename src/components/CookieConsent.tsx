import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem('sa-intercom-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('sa-intercom-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleConfigure = () => {
    localStorage.setItem('sa-intercom-cookie-consent', 'configured');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:p-6 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-2xl bg-card border border-border rounded-2xl shadow-floating overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="bg-gradient-hero p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Cookie className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-primary-foreground">
                {t.cookies.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-muted-foreground mb-6">
            {t.cookies.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAccept}
              className="btn-primary flex-1 text-center"
            >
              {t.cookies.accept}
            </button>
            <button
              onClick={handleConfigure}
              className="btn-outline flex-1 text-center"
            >
              {t.cookies.configure}
            </button>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={handleConfigure}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
        >
          <X className="w-4 h-4 text-primary-foreground" />
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
