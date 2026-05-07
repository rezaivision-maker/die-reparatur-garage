import { SEO } from '../components/SEO';
import { Wrench, Gauge, Car, ShieldCheck, Zap, Bike } from 'lucide-react';
import { Link } from 'react-router-dom';
import { VideoPlaceholder } from '../components/VideoPlaceholder';
import { useTranslation } from '../i18n/LanguageContext';

const ServiceItem = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string, key?: any }) => (
  <div className="flex flex-col sm:flex-row gap-6 p-8 bg-white rounded-2xl border border-zinc-200 shadow-md transition-all hover:shadow-lg hover:border-brand-accent/30 relative overflow-hidden group">
     <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
       <Icon className="w-24 h-24" />
     </div>
     <div className="w-14 h-14 bg-zinc-100/80 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-colors relative z-10">
        <Icon className="w-6 h-6 text-brand-accent group-hover:text-white" />
     </div>
     <div className="relative z-10">
        <h3 className="text-xl font-bold mb-3 text-brand-dark">{title}</h3>
        <p className="text-zinc-700 font-normal leading-relaxed">{desc}</p>
     </div>
  </div>
);

const icons = [Gauge, Wrench, Car, Zap, ShieldCheck, Bike];

export const Leistungen = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t.nav.services} 
        description={t.services.subtitle} 
        canonical="/leistungen" 
      />

      <div className="bg-brand-dark text-white py-24 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-brand-dark/95 z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-4 block">{t.services.tag}</span>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8">
            {t.services.title} <span className="text-brand-accent italic">{t.services.italic}</span>
          </h1>
          <p className="text-lg text-zinc-300 max-w-2xl font-light">
            Als <span className="text-brand-accent font-bold">KFZ-Meisterbetrieb</span> decken wir das komplette Leistungsspektrum ab. Von der günstigen Wartung bis zur US-Umrüstung.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {t.services.items.map((item: any, i: number) => (
             <ServiceItem 
               key={i}
               icon={icons[i]}
               title={item.title}
               desc={item.desc}
             />
           ))}
        </div>

        <VideoPlaceholder />

        <div className="mt-16 bg-brand-accent rounded-2xl p-10 lg:p-16 text-center text-white relative overflow-hidden shadow-xl shadow-brand-accent/20">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">{t.services.notListed.title}</h2>
            <p className="mb-8 font-light max-w-xl mx-auto">
              {t.services.notListed.desc}
            </p>
            <Link to="/kontakt" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-dark text-white font-bold rounded-lg hover:bg-zinc-800 transition-colors shadow-lg shadow-black/20">
              {t.services.notListed.cta} <Zap className="w-4 h-4 text-brand-accent" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
