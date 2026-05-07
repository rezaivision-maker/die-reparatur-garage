import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Settings, ShieldCheck, Wrench, Gauge, Car, Zap, Image as ImageIcon, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Reviews } from '../components/Reviews';
import { Process } from '../components/Process';
import { MiniFAQ } from '../components/MiniFAQ';
import { ImageGallery } from '../components/ImageGallery';
import { useTranslation } from '../i18n/LanguageContext';

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="bg-white p-8 rounded-2xl shadow-md border border-zinc-200 hover:shadow-lg transition-shadow group relative overflow-hidden">
    <div className="absolute top-0 right-0 p-4 opacity-5">
      <Icon className="w-24 h-24" />
    </div>
    <div className="w-14 h-14 bg-zinc-100 text-brand-dark rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors relative z-10">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-brand-dark relative z-10">{title}</h3>
    <p className="text-zinc-700 font-normal leading-relaxed text-sm relative z-10">
      {desc}
    </p>
  </div>
);

const heroImages = [
  { url: "/images/hero-3.png" },
  { url: "/images/hero-1.png" },
  { url: "/images/hero-2.png" }
];

export const Home = () => {
  const { language, t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentImage]);

  const nextSlide = () => setCurrentImage((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  return (
    <>
      <SEO 
        title={t.hero.badge} 
        description={t.hero.subtitle} 
        canonical="/" 
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-dark text-white pt-12 pb-32 lg:py-40 min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-3.png" 
            alt="Die Reparatur Garage" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-brand-dark via-brand-dark/80 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-brand-dark via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/20 mb-8 backdrop-blur-sm">
              <span className="flex w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase">{t.hero.badge}</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              {t.hero.title1} <span className="text-brand-accent italic">{t.hero.title2}</span> <br /> {t.hero.title3}
            </h1>
            
            <p className="text-lg text-zinc-300 font-light leading-relaxed max-w-xl mb-12">
              Willkommen in der Reparaturgarage. Bei Inhaber und <span className="text-brand-accent font-bold">KFZ-Meisterbetrieb</span> Wishnu Pranatyo bekommst du ehrliches Handwerk, transparente Preise und absolute Zuverlässigkeit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/kontakt" className="px-8 py-4 bg-brand-accent text-white font-bold text-center rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-brand-accent/20 flex items-center justify-center gap-2">
                {t.hero.cta1} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/leistungen" className="px-8 py-4 bg-white/5 border border-white/20 text-white font-bold text-center rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                {t.hero.cta2}
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-accent/20 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <p className="text-lg font-black text-white leading-none">{t.hero.stats.expertise.split(' ')[t.hero.stats.expertise.split(' ').length - 1]}</p>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest mt-1">
                    {t.hero.stats.expertise.replace(t.hero.stats.expertise.split(' ')[t.hero.stats.expertise.split(' ').length - 1], '').trim()}
                  </p>
                </div>
              </div>

              <div className="hidden sm:block w-[1px] h-10 bg-white/10" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-accent/20 rounded-full flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <p className="text-lg font-black text-white leading-none">{t.hero.stats.loyalty.split(' ')[t.hero.stats.loyalty.split(' ').length - 1]}</p>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest mt-1">
                    {t.hero.stats.loyalty.replace(t.hero.stats.loyalty.split(' ')[t.hero.stats.loyalty.split(' ').length - 1], '').trim()}
                  </p>
                </div>
              </div>

              <div className="hidden sm:block w-[1px] h-10 bg-white/10" />

              <div>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-accent fill-brand-accent" />
                  ))}
                </div>
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest">{t.hero.stats.rating}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 0.2 }}
             className="hidden lg:block relative"
          >
             <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border-8 border-brand-dark shadow-2xl relative z-10 bg-zinc-800 group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={heroImages[currentImage].url} 
                      alt={t.hero.slides[currentImage].label} 
                      className="w-full h-full object-cover scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-linear-to-t from-brand-dark/90 via-brand-dark/30 to-transparent p-10 flex flex-col justify-end">
                       <div className="absolute top-8 left-8 z-20">
                         {/* Badge removed for cleaner look */}
                       </div>
                       <motion.div 
                         initial={{ y: 20, opacity: 0 }}
                         animate={{ y: 0, opacity: 1 }}
                         transition={{ delay: 0.5 }}
                         className="flex items-center gap-3 mb-2"
                       >
                         <ShieldCheck className="w-6 h-6 text-brand-accent" />
                         <span className="text-sm font-bold uppercase tracking-widest">{t.hero.slides[currentImage].label}</span>
                       </motion.div>
                       <motion.p 
                         initial={{ y: 20, opacity: 0 }}
                         animate={{ y: 0, opacity: 1 }}
                         transition={{ delay: 0.7 }}
                         className="font-light text-zinc-300"
                       >
                         {t.hero.slides[currentImage].desc}
                       </motion.p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 z-20"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 z-20"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Navigation Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {heroImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === currentImage ? 'bg-brand-accent w-6' : 'bg-white/40 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-accent/20 rounded-full blur-3xl z-0" />
          </motion.div>
        </div>
      </section>

      {/* Services Quick-Grid */}
      <section className="py-24 relative z-20 -mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             <FeatureCard 
               icon={Wrench} 
               title={language === 'de' ? 'Reparaturen' : 'Repairs'} 
               desc={language === 'de' ? 'Fachgerechte Instandsetzung aller Marken. Von Bremsen bis zum Fahrwerk – wir machen dein Auto fit.' : 'Professional repair of all brands. From brakes to suspension – we get your car ready.'} 
             />
             <FeatureCard 
               icon={Gauge} 
               title={language === 'de' ? 'Inspektion' : 'Inspection'} 
               desc={language === 'de' ? 'Wartung exakt nach Herstellervorgaben, damit auch im Garantiefall alles reibungslos bleibt.' : 'Maintenance exactly according to manufacturer specs, ensuring everything stays smooth even for warranty cases.'} 
             />
             <FeatureCard 
               icon={Car} 
               title={language === 'de' ? 'US-Fahrzeuge' : 'US Vehicles'} 
               desc={language === 'de' ? 'Professionelle Umrüstung von US-Importen für den europäischen Markt inkl. aller notwendigen Gutachten.' : 'Professional conversion of US imports for the European market including all necessary certificates.'} 
             />
             <FeatureCard 
               icon={Settings} 
               title={language === 'de' ? 'Diagnostik' : 'Diagnostics'} 
               desc={language === 'de' ? 'Fehlerspeicher auslesen und modernste Fehlerdiagnose, bevor wir auf gut Glück Teile tauschen.' : 'Reading fault memory and state-of-the-art diagnostics before we swap parts on a hunch.'} 
             />
          </div>
        </div>
      </section>

      {/* USP / Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
              <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-4 block">{t.garage.tag}</span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-8 text-brand-dark">
                {t.garage.title.split('.')[0]}. <br /> {t.garage.title.split('.')[1]}
              </h2>
              <div className="space-y-6 text-zinc-700 font-normal text-lg leading-relaxed">
                <p>{t.garage.p1}</p>
                <p>{t.garage.p2}</p>
              </div>
              <ul className="mt-8 space-y-4">
                 {t.garage.features.map((item: string, i: number) => (
                   <li key={i} className="flex items-center gap-3 text-brand-dark font-bold">
                     <ShieldCheck className="w-5 h-5 text-brand-accent shrink-0" />
                     {item}
                   </li>
                 ))}
              </ul>
              <div className="mt-10">
                <Link to="/ueber-uns" className="text-brand-accent font-bold inline-flex items-center gap-2 hover:text-orange-600 transition-colors">
                  {t.garage.more} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
           </div>

           <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                 <div className="rounded-2xl w-full h-64 overflow-hidden bg-zinc-100 border border-zinc-200 relative group flex items-center justify-center shadow-md">
                    <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200" alt="Werkstatt Außenansicht" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-2 py-1 bg-brand-accent/90 text-white text-[10px] font-bold uppercase rounded backdrop-blur-sm">
                        {language === 'de' ? 'Platzhalter' : 'Placeholder'}: {language === 'de' ? 'Außenaufnahme' : 'Exterior Shot'}
                      </span>
                    </div>
                 </div>
                 <div className="rounded-2xl w-full h-64 overflow-hidden bg-zinc-100 border border-zinc-200 relative group flex items-center justify-center shadow-md">
                    <img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=600" alt="Werkstatt Innenansicht" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-2 py-1 bg-brand-accent/90 text-white text-[10px] font-bold uppercase rounded backdrop-blur-sm">
                        {language === 'de' ? 'Platzhalter' : 'Placeholder'}: {language === 'de' ? 'Halle & Bühne' : 'Garage & Lift'}
                      </span>
                    </div>
                 </div>
                 <div className="rounded-2xl w-full h-64 overflow-hidden bg-zinc-100 border border-zinc-200 relative group flex items-center justify-center shadow-md">
                    <img src="https://images.unsplash.com/photo-1544641113-f9d22fa97950?auto=format&fit=crop&q=80&w=600" alt="Der Meister bei der Arbeit" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-2 py-1 bg-brand-accent/90 text-white text-[10px] font-bold uppercase rounded backdrop-blur-sm">
                        {language === 'de' ? 'Platzhalter' : 'Placeholder'}: {language === 'de' ? 'Meister Wishnu' : 'Master Wishnu'}
                      </span>
                    </div>
                 </div>
                 <div className="rounded-2xl w-full h-64 overflow-hidden bg-zinc-100 border border-zinc-200 relative group flex items-center justify-center shadow-md">
                    <img src="https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&q=80&w=600" alt="Das Team" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-2 py-1 bg-brand-accent/90 text-white text-[10px] font-bold uppercase rounded backdrop-blur-sm">
                        {language === 'de' ? 'Platzhalter' : 'Placeholder'}: {language === 'de' ? 'Das Team' : 'The Team'}
                      </span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3-Step Process Section */}
      <Process />

      {/* Image Gallery */}
      <ImageGallery />

      {/* Google Reviews Section */}
      <Reviews />

      {/* FAQ Section */}
      <MiniFAQ />

      {/* Testimonial / CTA Split */}
      <section className="bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 border-l border-r border-white/5">
           <div className="p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-white/5">
              <Zap className="w-10 h-10 text-brand-accent mb-8" />
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 italic">"Sehr gute Werkstatt. Freundlichkeit und Service werden groß geschrieben. Kann man jederzeit weiter empfehlen."</h3>
              <p className="text-zinc-400 uppercase tracking-widest text-xs font-bold">— Marita Zoeller, Google Rezension</p>
           </div>
           <div className="p-12 lg:p-24 flex flex-col justify-center bg-white/5">
              <h3 className="text-3xl font-bold mb-4">{language === 'de' ? 'Bereit für den Service?' : 'Ready for Service?'}</h3>
              <p className="text-zinc-400 mb-8">{language === 'de' ? 'Schreib uns dein Anliegen oder ruf direkt an. Wir finden schnell einen Termin für dich.' : 'Tell us your request or call us directly. We will find an appointment for you quickly.'}</p>
              <Link to="/kontakt" className="px-8 py-4 bg-brand-accent text-white font-bold text-center rounded-lg hover:bg-orange-600 transition-colors w-max">
                {language === 'de' ? 'Jetzt Termin anfragen' : 'Request Appointment Now'}
              </Link>
           </div>
        </div>
      </section>
    </>
  );
};
