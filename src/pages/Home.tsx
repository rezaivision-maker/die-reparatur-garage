import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Settings, ShieldCheck, Wrench, Gauge, Car, Zap, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Reviews } from '../components/Reviews';

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
  {
    url: "https://images.unsplash.com/photo-1620959419133-c2152dc3625f?auto=format&fit=crop&q=80&w=800",
    label: "Meisterqualität",
    desc: "Geprüftes Handwerk nach Herstellervorgaben."
  },
  {
    url: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800",
    label: "Modernste Technik",
    desc: "Präzise Diagnose für alle Fahrzeugmarken."
  },
  {
    url: "https://images.unsplash.com/photo-1619642751034-765dfdf7c162?auto=format&fit=crop&q=80&w=800",
    label: "Full Service",
    desc: "Von der Inspektion bis zur US-Umrüstung."
  }
];

export const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <SEO 
        title="KFZ Meisterwerkstatt in Enkenbach-Alsenborn" 
        description="Die Reparaturgarage von KFZ-Meister Wishnu Pranatyo. Professionelle Autoreparatur, Inspektion und US-Umrüstung in Enkenbach-Alsenborn. Fair, ehrlich, meisterhaft." 
        canonical="/" 
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-dark text-white pt-12 pb-32 lg:py-40">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1619642751034-765dfdf7c162?auto=format&fit=crop&q=80&w=2600')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-linear-to-r from-brand-dark via-brand-dark/95 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/20 mb-8 backdrop-blur-sm">
              <span className="flex w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase">KFZ Meisterbetrieb Enkenbach-Alsenborn</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              Meisterhafter <span className="text-brand-accent italic">Service.</span> <br /> Ohne Kompromisse.
            </h1>
            
            <p className="text-lg text-zinc-300 font-light leading-relaxed max-w-xl mb-12">
              Willkommen in der Reparaturgarage. Bei Inhaber und KFZ-Meister Wishnu Pranatyo bekommst du ehrliches Handwerk, transparente Preise und absolute Zuverlässigkeit für dein Auto und Zweirad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/kontakt" className="px-8 py-4 bg-brand-accent text-white font-bold text-center rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-brand-accent/20 flex items-center justify-center gap-2">
                Termin vereinbaren <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/leistungen" className="px-8 py-4 bg-white/5 border border-white/20 text-white font-bold text-center rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                Unsere Leistungen
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-16 flex items-center gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-3xl font-black text-white">15+</p>
                <p className="text-xs text-zinc-400 uppercase tracking-widest mt-1">Jahre Expertise</p>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div>
                <p className="text-3xl font-black text-white">100%</p>
                <p className="text-xs text-zinc-400 uppercase tracking-widest mt-1">Stammkunden Quote</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 0.2 }}
             className="hidden lg:block relative"
          >
             <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border-8 border-brand-dark shadow-2xl relative z-10 bg-zinc-800">
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
                      alt={heroImages[currentImage].label} 
                      className="w-full h-full object-cover scale-105"
                    />
                    
                    <div className="absolute inset-0 bg-linear-to-t from-brand-dark/90 via-brand-dark/30 to-transparent p-10 flex flex-col justify-end">
                       <motion.div 
                         initial={{ y: 20, opacity: 0 }}
                         animate={{ y: 0, opacity: 1 }}
                         transition={{ delay: 0.5 }}
                         className="flex items-center gap-3 mb-2"
                       >
                         <ShieldCheck className="w-6 h-6 text-brand-accent" />
                         <span className="text-sm font-bold uppercase tracking-widest">{heroImages[currentImage].label}</span>
                       </motion.div>
                       <motion.p 
                         initial={{ y: 20, opacity: 0 }}
                         animate={{ y: 0, opacity: 1 }}
                         transition={{ delay: 0.7 }}
                         className="font-light text-zinc-300"
                       >
                         {heroImages[currentImage].desc}
                       </motion.p>
                    </div>
                  </motion.div>
                </AnimatePresence>
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
               title="Reparaturen" 
               desc="Fachgerechte Instandsetzung aller Marken. Von Bremsen bis zum Fahrwerk – wir machen dein Auto fit." 
             />
             <FeatureCard 
               icon={Gauge} 
               title="Inspektion" 
               desc="Wartung exakt nach Herstellervorgaben, damit auch im Garantiefall alles reibungslos bleibt." 
             />
             <FeatureCard 
               icon={Car} 
               title="US-Fahrzeuge" 
               desc="Professionelle Umrüstung von US-Importen für den europäischen Markt inkl. aller notwendigen Gutachten." 
             />
             <FeatureCard 
               icon={Settings} 
               title="Diagnostik" 
               desc="Fehlerspeicher auslesen und modernste Fehlerdiagnose, bevor wir auf gut Glück Teile tauschen." 
             />
          </div>
        </div>
      </section>

      {/* USP / Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
              <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-4 block">Die Garage</span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-8 text-brand-dark">
                Dein Auto. <br /> In Meisterhand.
              </h2>
              <div className="space-y-6 text-zinc-700 font-normal text-lg leading-relaxed">
                <p>
                  Wir sind keine unpersönliche Kette, bei der du nur eine Nummer bist. Die Reparaturgarage ist ein inhabergeführter Betrieb im Herzen von Enkenbach-Alsenborn. Wenn du bei uns dein Auto abgibst, sprichst du direkt mit dem KFZ-Meister.
                </p>
                <p>
                  Wishnu Pranatyo und sein Team reparieren nicht nur, sondern suchen immer nach der sinnvollsten und wirtschaftlichsten Lösung für dein Fahrzeug. Keine versteckten Kosten, keine unnötigen Reparaturen – nur ehrliches Handwerk.
                </p>
              </div>
              <ul className="mt-8 space-y-4">
                 {[
                   'Persönliche Beratung vom KFZ-Meister',
                   'Transparente Kostenvoranschläge',
                   'Modernste Diagnose-Werkzeuge',
                   'Spezialisiert auf KFZ & Zweiräder'
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-brand-dark font-bold">
                     <ShieldCheck className="w-5 h-5 text-brand-accent shrink-0" />
                     {item}
                   </li>
                 ))}
              </ul>
              <div className="mt-10">
                <Link to="/ueber-uns" className="text-brand-accent font-bold inline-flex items-center gap-2 hover:text-orange-600 transition-colors">
                  Mehr über uns erfahren <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
           </div>
           <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                 <div className="rounded-2xl w-full h-64 mt-10 overflow-hidden bg-zinc-100 border border-zinc-200 relative group flex items-center justify-center">
                    {/* PLACEHOLDER: WERKSTATT INNENANSICHT */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-400 z-10 p-6 text-center group-hover:bg-zinc-800 group-hover:text-white transition-colors">
                      <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
                      <span className="text-xs font-bold uppercase tracking-wider">Werkstatt Innenansicht</span>
                    </div>
                    {/* Optional: Add image src here later */}
                    <img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=600" alt="Werkstatt 1" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-10 transition-opacity" />
                 </div>
                 <div className="rounded-2xl w-full h-64 overflow-hidden bg-zinc-100 border border-zinc-200 relative group flex items-center justify-center">
                    {/* PLACEHOLDER: TEAM / WISHNU */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-400 z-10 p-6 text-center group-hover:bg-zinc-800 group-hover:text-white transition-colors">
                      <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
                      <span className="text-xs font-bold uppercase tracking-wider">Bild von Wishnu / Team</span>
                    </div>
                    {/* Optional: Add image src here later */}
                    <img src="https://images.unsplash.com/photo-1544641113-f9d22fa97950?auto=format&fit=crop&q=80&w=600" alt="Werkstatt 2" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-10 transition-opacity" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <Reviews />

      {/* Testimonial / CTA Split */}
      <section className="bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 border-l border-r border-white/5">
           <div className="p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-white/5">
              <Zap className="w-10 h-10 text-brand-accent mb-8" />
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 italic">"Wishnu weiß genau was er tut. Die einzige Werkstatt, der ich voll vertraue."</h3>
              <p className="text-zinc-400 uppercase tracking-widest text-xs font-bold">— Markus T., Enkenbach-Alsenborn</p>
           </div>
           <div className="p-12 lg:p-24 flex flex-col justify-center bg-white/5">
              <h3 className="text-3xl font-bold mb-4">Bereit für den Service?</h3>
              <p className="text-zinc-400 mb-8">Schreib uns dein Anliegen oder ruf direkt an. Wir finden schnell einen Termin für dich.</p>
              <Link to="/kontakt" className="px-8 py-4 bg-brand-accent text-white font-bold text-center rounded-lg hover:bg-orange-600 transition-colors w-max">
                Jetzt Termin anfragen
              </Link>
           </div>
        </div>
      </section>
    </>
  );
};
