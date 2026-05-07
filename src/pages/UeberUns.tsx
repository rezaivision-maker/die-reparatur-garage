import { SEO } from '../components/SEO';
import { Target, Heart, Wrench } from 'lucide-react';
import { ImageGallery } from '../components/ImageGallery';
import { useTranslation } from '../i18n/LanguageContext';

export const UeberUns = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO 
        title={t.nav.about} 
        description={t.about.p1} 
        canonical="/ueber-uns" 
      />

      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-4 block">{t.about.tag}</span>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-brand-dark">
              {t.about.title} <br /> <span className="text-brand-accent italic">{t.about.italic}</span>
            </h1>
            <div className="space-y-6 text-zinc-700 font-normal text-lg leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-zinc-100 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&q=80&w=1200" 
                  alt="Wishnu Pranatyo & Team" 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
             </div>
             <div className="absolute -bottom-8 -left-8 bg-brand-dark text-white p-8 rounded-2xl shadow-xl max-w-sm hidden md:block z-20">
               <p className="font-bold text-xl mb-2">{t.about.badgeTitle}</p>
               <p className="text-sm font-light text-zinc-300">{t.about.badgeDesc}</p>
             </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-brand-gray border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 text-brand-accent">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-brand-dark">{t.about.mission.title}</h3>
                <p className="text-zinc-700 font-normal">{t.about.mission.desc}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 text-brand-accent">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-brand-dark">{t.about.passion.title}</h3>
                <p className="text-zinc-700 font-normal">{t.about.passion.desc}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 text-brand-accent">
                  <Wrench className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-brand-dark">{t.about.quality.title}</h3>
                <p className="text-zinc-700 font-normal">{t.about.quality.desc}</p>
              </div>
           </div>
        </div>
      </div>

      <ImageGallery />
    </>
  );
};
