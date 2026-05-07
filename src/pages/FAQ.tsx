import { SEO } from '../components/SEO';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-zinc-200 rounded-2xl bg-white overflow-hidden transition-all shadow-sm">
      <button 
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-normal text-brand-dark lg:text-lg font-display">{question}</span>
        <ChevronDown className={`w-5 h-5 text-brand-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div 
        className={`px-6 text-zinc-700 font-normal leading-relaxed transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {answer}
      </div>
    </div>
  );
};

export const FAQ = () => {
  return (
    <>
      <SEO 
        title="FAQ - Häufige Fragen" 
        description="Hast du Fragen zu Terminen, Ersatzteilen oder Fahrzeugmarken? Hier findest du die Antworten der Reparaturgarage Enkenbach-Alsenborn." 
        canonical="/faq" 
      />

      <div className="py-24 bg-brand-gray min-h-[80vh]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-4 block">Häufige Fragen</span>
            <h1 className="text-5xl lg:text-7xl font-normal tracking-wide text-brand-dark mb-4 font-heading uppercase leading-[1]">
              Gut zu wissen.
            </h1>
            <p className="text-zinc-600 font-normal text-lg">
              Die wichtigsten Antworten rund um den Werkstattbesuch.
            </p>
          </div>

          <div className="space-y-4">
            <FaqItem 
              question="Muss ich vorher immer einen Termin machen?"
              answer="Für größere Reparaturen, Inspektionen und US-Umrüstungen benötigen wir zwingend einen Termin, um die Hebebühnen und Mechaniker einplanen zu können. Bei akuten Pannen oder kurzen Checks (z.B. Lämpchen tauschen) kannst du versuchen kurzfristig anzurufen – wir geben unser Bestes, dir schnell zu helfen."
            />
            <FaqItem 
              question="Repariert ihr alle Fahrzeugmarken?"
              answer="Ja. Als freie Meisterwerkstatt sind wir markenunabhängig und haben das nötige Equipment (Auslesegeräte, Spezialwerkzeuge), um Fahrzeuge nahezu aller Hersteller fachgerecht zu reparieren – egal ob asiatische, europäische oder US-amerikanische Modelle."
            />
            <FaqItem 
              question="Bleibt meine Herstellergarantie bei einer Inspektion erhalten?"
              answer="Dank der Gruppenfreistellungsverordnung (GVO) der EU bleibt deine volle Herstellergarantie erhalten, wenn wir die Inspektion an deinem Fahrzeug durchführen. Wir arbeiten streng nach Herstellervorgaben und dokumentieren alle Schritte."
            />
            <FaqItem 
              question="Bietet ihr bei Reparaturen auch einen Ersatzwagen an?"
              answer="Aktuell haben wir einen begrenzten Pool an Werkstattersatzwagen. Bitte frage bei der Terminvereinbarung direkt danach, damit wir prüfen können, ob für deinen Zeitraum ein Fahrzeug verfügbar ist."
            />
            <FaqItem 
              question="Kann ich meine eigenen Ersatzteile mitbringen?"
              answer="Wir verbauen ausschließlich Ersatzteile in Erstausrüsterqualität, die wir über unsere verifizierten Großhändler beziehen. Dies tun wir aus Gründen der Gewährleistung und Sicherheit. Eigenes Öl oder eigene mitgebrachte Ersatzteile verbauen wir in der Regel nicht, da wir für Fehler in der Materialqualität der mitgebrachten Teile haftbar gemacht werden könnten."
            />
            <FaqItem 
              question="Was genau macht ihr bei der US-Umrüstung?"
              answer="Importierte US-Fahrzeuge entsprechen oft nicht der deutschen StVZO. Wir kümmern uns um den Umbau von Beleuchtungsanlagen (Blinker, Nebelschlussleuchte etc.), Tacho-Anpassungen, Abgasmessungen und besorgen die erforderlichen Datenblätter für eine erfolgreiche Einzelabnahme durch den TÜV/DEKRA."
            />
          </div>

          <div className="mt-16 text-center">
            <p className="text-zinc-600 font-normal mb-4">Deine Frage war nicht dabei?</p>
            <Link to="/kontakt" className="text-brand-accent font-bold hover:text-orange-600 transition-colors underline underline-offset-4">
              Zum Kontaktformular
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
