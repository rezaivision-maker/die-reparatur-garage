import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Bekomme ich vor der Reparatur einen Kostenvoranschlag?",
    answer: "Ja, absolut. Nachdem wir dein Fahrzeug begutachtet haben, besprechen wir die notwendigen Maßnahmen und du erhältst einen transparenten Kostenvoranschlag. Bei uns gibt es keine bösen Überraschungen auf der Rechnung."
  },
  {
    question: "Repariert ihr auch Fremdmarken oder nur bestimmte Hersteller?",
    answer: "Als freie KFZ-Meisterwerkstatt reparieren und warten wir Fahrzeuge aller gängigen Marken nach Herstellervorgaben. Ein besonderer Schwerpunkt liegt zudem auf der Umrüstung und Wartung von US-Fahrzeugen."
  },
  {
    question: "Bleibt meine Herstellergarantie bei einer Inspektion erhalten?",
    answer: "Ja! Wir führen alle Inspektionen und Wartungsarbeiten exakt nach den Vorgaben der jeweiligen Fahrzeughersteller durch. Dadurch bleibt deine volle Herstellergarantie gesetzlich in vollem Umfang erhalten."
  }
];

export const MiniFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs mb-4 block">Noch Fragen?</span>
          <h2 className="text-4xl font-bold text-brand-dark mb-4">Häufige Kundenfragen</h2>
          <p className="text-zinc-600">Wir legen Wert auf Transparenz. Hier sind die wichtigsten Antworten vor deinem ersten Besuch.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-colors ${
                openIndex === index ? 'border-brand-accent/30 bg-brand-accent/5' : 'border-zinc-200 bg-white hover:border-zinc-300'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className="font-bold text-brand-dark pr-8">{faq.question}</span>
                <span className="shrink-0 text-brand-accent">
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-zinc-600 font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
