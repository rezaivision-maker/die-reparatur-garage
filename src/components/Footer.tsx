import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';

export const Footer = () => {
  const { language, t } = useTranslation();

  return (
    <footer className="bg-brand-dark border-t-4 border-zinc-800 pt-24 pb-12 text-zinc-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20 text-sm">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <h3 className="text-3xl font-normal tracking-wide leading-none text-white uppercase font-heading">DIE REPARATUR GARAGE</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] text-brand-accent font-bold mt-2">Inh. Wishnu Pranatyo</p>
            </div>
            <p className="leading-relaxed opacity-80">
              {language === 'de' 
                ? 'Deine inhabergeführte Kfz-Meisterwerkstatt in Enkenbach-Alsenborn. Ehrlich, direkt, kompromisslos in der Qualität.' 
                : 'Your owner-managed master mechanic shop in Enkenbach-Alsenborn. Honest, direct, uncompromising in quality.'}
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/die_reparatur_garage/" target="_blank" rel="noopener noreferrer" className="p-2 border border-zinc-700 rounded-lg hover:border-brand-accent hover:text-brand-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/diereparaturgarage" target="_blank" rel="noopener noreferrer" className="p-2 border border-zinc-700 rounded-lg hover:border-brand-accent hover:text-brand-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black uppercase text-brand-accent tracking-[0.2em] mb-6">Navigation</h4>
            <ul className="space-y-3 font-bold uppercase tracking-wider text-[11px]">
              <li><Link to="/" className="hover:text-white transition-colors">{t.nav.start}</Link></li>
              <li><Link to="/leistungen" className="hover:text-white transition-colors">{t.nav.services}</Link></li>
              <li><Link to="/ueber-uns" className="hover:text-white transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">{t.nav.faq}</Link></li>
              <li><Link to="/kontakt" className="hover:text-white transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-black uppercase text-brand-accent tracking-[0.2em] mb-6">{language === 'de' ? 'Werkstatt' : 'The Garage'}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                <span>Tilsiter Straße 9<br/>67677 Enkenbach-Alsenborn</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                <a href="tel:+4963038090929" className="hover:text-white transition-colors">+49 6303 - 8090929</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                <a href="mailto:info@diereparaturgarage.de" className="hover:text-white transition-colors">info@diereparaturgarage.de</a>
              </li>
            </ul>
          </div>

          {/* Open Hours */}
          <div>
            <h4 className="text-xs font-black uppercase text-brand-accent tracking-[0.2em] mb-6">{language === 'de' ? 'Öffnungszeiten' : 'Opening Hours'}</h4>
            <ul className="space-y-3">
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>{language === 'de' ? 'Mo. - Fr.' : 'Mon - Fri'}</span>
                <span className="font-bold text-white">08:00 - 18:00</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>{language === 'de' ? 'Samstag' : 'Saturday'}</span>
                <span className="text-brand-accent">{language === 'de' ? 'Nach Absprache' : 'By appointment'}</span>
              </li>
              <li className="flex justify-between border-zinc-800 pt-1 text-zinc-500 line-through">
                <span>{language === 'de' ? 'Sonntag' : 'Sunday'}</span>
                <span>{language === 'de' ? 'Geschlossen' : 'Closed'}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub Footer */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
            © {new Date().getFullYear()} Die Reparatur Garage • {language === 'de' ? 'Meisterbetrieb KFZ' : 'Master Mechanic Shop'}
          </p>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
