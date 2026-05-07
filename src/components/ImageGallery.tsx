import { motion } from 'motion/react';
import { Camera } from 'lucide-react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?auto=format&fit=crop&q=80&w=800",
    title: "US-Car Spezialist",
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-2"
  },
  {
    url: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=80&w=800",
    title: "Detailarbeit",
    colSpan: "col-span-1",
    rowSpan: "row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1530906358829-e84b2769270f?auto=format&fit=crop&q=80&w=800",
    title: "Moderne Diagnose",
    colSpan: "col-span-1",
    rowSpan: "row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&q=80&w=800",
    title: "Reifenservice",
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-1"
  }
];

export const ImageGallery = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-4 block">Einblicke</span>
            <h2 className="text-4xl font-bold text-brand-dark mb-4">Unsere Werkstatt</h2>
            <p className="text-zinc-600 max-w-xl">
              Modernstes Equipment trifft auf echtes Handwerk. Ein Blick hinter die Kulissen unserer täglichen Arbeit.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-2 text-zinc-400 bg-zinc-50 px-4 py-2 rounded-full border border-zinc-200">
            <Camera className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Premium Galerie</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative rounded-3xl overflow-hidden group shadow-md ${img.colSpan} ${img.rowSpan}`}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white font-bold tracking-wide">{img.title}</span>
                <div className="w-8 h-1 bg-brand-accent mt-3 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
