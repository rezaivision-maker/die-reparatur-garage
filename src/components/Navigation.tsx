import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useTranslation();

  const links = [
    { name: t.nav.start, path: '/' },
    { name: t.nav.services, path: '/leistungen' },
    { name: t.nav.about, path: '/ueber-uns' },
    { name: t.nav.faq, path: '/faq' },
    { name: t.nav.contact, path: '/kontakt' },
  ];

  return (
    <header className="sticky top-0 w-full z-[100] bg-brand-dark text-white border-b-4 border-brand-accent shadow-xl">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between relative">
        
        {/* LEFT: Logo Section */}
        <Link 
          to="/" 
          className="flex items-center gap-2 sm:gap-3 shrink-0 z-[110]" 
          onClick={() => setIsOpen(false)}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-accent rounded-sm flex items-center justify-center rotate-45 border-2 border-white shadow-lg shrink-0">
            <span className="text-white font-black text-xl sm:text-2xl -rotate-45">R</span>
          </div>
          <div className="flex flex-col leading-none">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-normal tracking-wide text-white uppercase truncate max-w-[150px] sm:max-w-none font-heading">
              REPARATUR GARAGE
            </h1>
            <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.1em] text-brand-accent font-bold mt-1">
              {language === 'de' ? 'Meisterbetrieb' : 'Master Mechanic'}
            </p>
          </div>
        </Link>
        
        {/* CENTER: Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-base xl:text-lg font-normal uppercase tracking-wider text-zinc-300 font-heading">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`hover:text-white transition-colors relative py-2 ${location.pathname === link.path ? 'text-white' : ''}`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent"
                />
              )}
            </Link>
          ))}
        </div>

        {/* RIGHT: Action Area (Always Visible) */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          
          {/* Language Switcher */}
          <div className="flex items-center bg-zinc-900 border border-white/10 rounded-full p-1 shadow-2xl">
            <button 
              onClick={() => setLanguage('de')}
              className={`px-2 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-black transition-all ${language === 'de' ? 'bg-brand-accent text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              DE
            </button>
            <button 
              onClick={() => setLanguage('en')}
              className={`px-2 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-black transition-all ${language === 'en' ? 'bg-brand-accent text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              EN
            </button>
          </div>

          {/* Desktop Call/CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+4963038090929" className="text-brand-accent hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
            </a>
            <Link 
              to="/kontakt"
              className="px-4 py-2 bg-brand-accent text-white font-normal uppercase text-sm skew-x-[-10deg] hover:bg-white hover:text-brand-dark transition-all transform font-heading"
            >
              <div className="skew-x-[10deg] tracking-wider">{t.nav.cta}</div>
            </Link>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button 
            className="lg:hidden p-2 text-white hover:text-brand-accent transition-colors z-[120]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-brand-dark/98 backdrop-blur-xl z-[105] lg:hidden"
            />
            {/* Menu Content */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-brand-dark border-l border-white/5 z-[110] shadow-2xl lg:hidden flex flex-col p-10 pt-32"
            >
              <div className="flex flex-col gap-8">
                {links.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link 
                      to={link.path} 
                      onClick={() => setIsOpen(false)}
                      className={`text-5xl font-normal uppercase tracking-wide transition-colors font-heading ${location.pathname === link.path ? 'text-brand-accent' : 'text-white hover:text-brand-accent'}`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-auto mb-10 space-y-6">
                <div className="h-[1px] w-full bg-white/10" />
                <a href="tel:+4963038090929" className="flex items-center gap-4 text-xl font-bold text-white group">
                  <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  +49 6303 8090929
                </a>
                <Link 
                  to="/kontakt"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-5 bg-brand-accent text-white font-normal uppercase text-center rounded-xl shadow-lg hover:bg-white hover:text-brand-dark transition-all font-heading text-2xl tracking-wider"
                >
                  {t.nav.cta}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
