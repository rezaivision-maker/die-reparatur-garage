import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export const Navigation = () => {
  const location = useLocation();

  const links = [
    { name: 'Startseite', path: '/' },
    { name: 'Leistungen', path: '/leistungen' },
    { name: 'Über Uns', path: '/ueber-uns' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-brand-dark text-white border-b-4 border-brand-accent shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-brand-accent rounded-sm flex items-center justify-center rotate-45 border-2 border-white shadow-[0_0_15px_rgba(234,88,12,0.4)]">
            <span className="text-white font-black text-2xl -rotate-45">R</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-black italic tracking-tighter leading-none text-white">
              REPARATUR GARAGE
            </h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-accent font-bold">
              Meisterbetrieb KFZ & Zweirad
            </p>
          </div>
        </Link>
        
        <div className="hidden lg:flex items-center gap-8 text-[12px] font-bold uppercase tracking-widest text-zinc-300">
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

        <div className="hidden md:flex gap-4">
          <a href="tel:+4963038090929" className="flex items-center gap-2 text-sm font-bold opacity-80 hover:opacity-100 transition-opacity">
            <Phone className="w-4 h-4 text-brand-accent" />
            +49 6303 - 8090929
          </a>
          <Link 
            to="/kontakt"
            className="px-6 py-2 bg-brand-accent text-white font-black uppercase text-xs skew-x-[-12px] hover:bg-white hover:text-brand-dark transition-all transform hover:scale-105 shadow-md shadow-brand-accent/20 block"
          >
            <div className="skew-x-[12px]">Werkstatt-Termin</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};
