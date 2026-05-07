import { PlayCircle } from 'lucide-react';

export const VideoPlaceholder = () => {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-zinc-900 group shadow-2xl aspect-video max-w-5xl mx-auto my-24 border border-zinc-800">
      {/* Background Image / Thumbnail */}
      <img 
        src="https://images.unsplash.com/photo-1530906622963-8a60586a49c7?auto=format&fit=crop&q=80&w=1600" 
        alt="Video Thumbnail" 
        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-500"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
        <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 shadow-xl shadow-brand-accent/30 mb-6">
          <PlayCircle className="w-10 h-10 text-white ml-1" />
        </div>
        <h3 className="text-2xl md:text-4xl font-normal text-white mb-4 font-display">Ein Blick in unsere Halle</h3>
        <p className="text-zinc-300 max-w-xl text-sm md:text-base font-light">
          (Hier ist der perfekte Platz für ein hochwertiges Werkstatt-Video oder einen Imagefilm. Bewegtbild schafft das größte Vertrauen!)
        </p>
      </div>
    </div>
  );
};
