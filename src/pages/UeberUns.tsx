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
            <div className="grid grid-cols-12 gap-4">
              {/* Main Team Photo */}
              <div className="col-span-12 md:col-span-10 rounded-3xl overflow-hidden shadow-2xl relative group">
                <img 
                  src="/images/team.png" 
                  alt="Das Team der Reparaturgarage" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 aspect-[16/10]"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-brand-accent/90 text-white text-[10px] font-bold uppercase rounded backdrop-blur-md">
                    {language === 'de' ? 'Das Team' : 'The Team'}
                  </span>
                </div>
              </div>

              {/* Boss Portrait (Staggered) */}
              <div className="col-span-8 md:col-span-6 -mt-12 md:-mt-24 ml-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative group z-30">
                <img 
                  src="/images/chef.png" 
                  alt="Wishnu Pranatyo - Inhaber & KFZ-Meister" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 aspect-square"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-brand-dark/80 backdrop-blur-md text-white">
                  <p className="font-bold text-sm leading-tight">Wishnu Pranatyo</p>
                  <p className="text-[10px] text-brand-accent font-bold uppercase tracking-tighter">
                    {language === 'de' ? 'Inhaber & KFZ-Meister' : 'Owner & Master Mechanic'}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-accent/5 rounded-full blur-3xl" />
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
