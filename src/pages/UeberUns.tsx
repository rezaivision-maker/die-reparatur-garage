import { SEO } from '../components/SEO';
import { Target, Heart, Wrench } from 'lucide-react';

export const UeberUns = () => {
  return (
    <>
      <SEO 
        title="Über die Reparaturgarage & KFZ-Meister Wishnu Pranatyo" 
        description="Lerne die Gesichter hinter der Reparaturgarage kennen. Inhabergeführt, ehrlich, pfälzisch. Wir sind deine Meisterwerkstatt in Enkenbach-Alsenborn." 
        canonical="/ueber-uns" 
      />

      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-4 block">Unsere Geschichte</span>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-brand-dark">
              Mehr als nur <br /> <span className="text-brand-accent italic">Schrauber.</span>
            </h1>
            <div className="space-y-6 text-zinc-700 font-normal text-lg leading-relaxed">
              <p>
                Die Reparaturgarage wurde aus einer klaren Vision heraus gegründet: Wir wollten eine Werkstatt in Enkenbach-Alsenborn schaffen, in der sich Kunden wieder ehrlich beraten fühlen. Keine Massenabfertigung, kein Fachchinesisch, das niemand versteht, sondern direkte Kommunikation und sauberes Handwerk.
              </p>
              <p>
                Als Inhaber und geprüfter KFZ-Meister stehe ich, Wishnu Pranatyo, persönlich für die Qualität unserer Arbeit ein. Mein Team und ich vereinen langjährige Erfahrung in der Automobilbranche mit einer echten, tief verwurzelten Leidenschaft für Motoren – egal ob auf vier oder auf zwei Rädern.
              </p>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-zinc-100 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&q=80&w=1200" 
                  alt="Wishnu Pranatyo & Team" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
             </div>
             <div className="absolute -bottom-8 -left-8 bg-brand-dark text-white p-8 rounded-2xl shadow-xl max-w-sm hidden md:block z-20">
               <p className="font-bold text-xl mb-2">KFZ-Meisterbetrieb</p>
               <p className="text-sm font-light text-zinc-300">Offiziell eingetragen und zertifiziert. Für dein sicheres Gefühl auf der Straße.</p>
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
                <h3 className="text-xl font-bold mb-4 text-brand-dark">Unsere Mission</h3>
                <p className="text-zinc-700 font-normal">Reparieren statt nur wild Teile zu tauschen. Wir suchen nach der besten Lösung für dich und deinen Geldbeutel.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 text-brand-accent">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-brand-dark">Echte Leidenschaft</h3>
                <p className="text-zinc-700 font-normal">Wir lieben Autos und Motorräder. Und wir behandeln jedes Kundenfahrzeug so, als wäre es unser eigenes.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 text-brand-accent">
                  <Wrench className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-brand-dark">Meister-Qualität</h3>
                <p className="text-zinc-700 font-normal">Fundierte Ausbildung, ständige Weiterbildung und modernstes Equipment sichern unseren hohen Standard.</p>
              </div>
           </div>
        </div>
      </div>
    </>
  );
};
