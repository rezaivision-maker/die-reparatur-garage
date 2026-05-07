import { SEO } from '../components/SEO';
import { Wrench, Gauge, Car, ShieldCheck, Zap, Bike } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceItem = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="flex gap-6 p-8 bg-white rounded-2xl border border-zinc-200 shadow-md transition-all hover:shadow-lg hover:border-brand-accent/30 relative overflow-hidden group">
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

export const Leistungen = () => {
  return (
    <>
      <SEO 
        title="Leistungen & KFZ-Service" 
        description="Unsere Leistungen in Enkenbach-Alsenborn: Inspektion, Bremsen-Service, Diagnose, Autoglas und unsere Spezialität: US-Fahrzeug Umrüstung." 
        canonical="/leistungen" 
      />

      <div className="bg-brand-dark text-white py-24 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-brand-dark/95 z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-4 block">Unser Service</span>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8">
            Was wir <span className="text-brand-accent italic">können.</span>
          </h1>
          <p className="text-lg text-zinc-300 max-w-2xl font-light">
            Als Meisterbetrieb decken wir das komplette Leistungsspektrum rund um dein Fahrzeug ab. Von der einfachen Wartung bis zum komplexen Umbau – mit Handwerkerehre und modernster Technik.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <ServiceItem 
             icon={Gauge}
             title="Inspektion nach Herstellervorgaben"
             desc="Die regelmäßige Wartung ist das A und O für ein langes Autoleben. Wir führen Inspektionen exakt nach den Vorgaben der Hersteller durch. Das bedeutet: Voller Erhalt aller Garantie- und Gewährleistungsansprüche, auch bei Neuwagen."
           />
           <ServiceItem 
             icon={Wrench}
             title="Reparaturen & Instandsetzung"
             desc="Zahnriemenwechsel, Kupplungstausch, Bremsen erneuern oder Auspuffanlagen schweißen – wir reparieren mechanische und elektronische Schäden aller Fahrzeugmarken schnell und zuverlässig."
           />
           <ServiceItem 
             icon={Car}
             title="US-Fahrzeuge & Import-Umrüstungen"
             desc="Du hast dir einen Traum aus Übersee erfüllt? Wir kümmern uns um die nötige Umrüstung für den europäischen Markt (Lichtanlage, Tachoanpassung, etc.) und begleiten die Fahrzeugabnahme bis zum Gutachten."
           />
           <ServiceItem 
             icon={Zap}
             title="Fehlerdiagnose & Elektrik"
             desc="Wenn die Motorkontrollleuchte brennt, beginnt unsere Arbeit. Mit unseren modernen Diagnosegeräten lesen wir Fehler präzise aus, bevor wir auf Verdacht teure Teile austauschen."
           />
           <ServiceItem 
             icon={ShieldCheck}
             title="HU/AU & Fahrwerk-Service"
             desc="Wir machen dein Auto TÜV-fertig und führen notwendige Vorab-Checks durch. Auch beim Thema Fahrwerk (Einbau, Vermessung, Einstellung) sind wir dein kompetenter Ansprechpartner."
           />
           <ServiceItem 
             icon={Bike}
             title="Zweirad-Service & Reparatur"
             desc="Als passionierte Motorradfahrer bieten wir auch einen umfassenden Service für Zweiräder an. Vom Reifenwechsel bis zur Vergaser-Synchronisation – Maschinen sind bei uns in besten Händen."
           />
        </div>

        <div className="mt-16 bg-brand-accent rounded-2xl p-10 lg:p-16 text-center text-white relative overflow-hidden shadow-xl shadow-brand-accent/20">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Dein Anliegen ist nicht aufgelistet?</h2>
            <p className="mb-8 font-light max-w-xl mx-auto">
              Kein Problem. Ruf uns einfach an oder schreib uns eine Nachricht. Sehr wahrscheinlich können wir dir trotzdem schnell und kompetent weiterhelfen.
            </p>
            <Link to="/kontakt" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-dark text-white font-bold rounded-lg hover:bg-zinc-800 transition-colors shadow-lg shadow-black/20">
              Jetzt Kontakt aufnehmen <Zap className="w-4 h-4 text-brand-accent" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
