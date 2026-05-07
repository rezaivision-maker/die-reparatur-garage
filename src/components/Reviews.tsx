import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Marita Zoeller",
    rating: 5,
    text: "Sehr gute Werkstatt. Freundlichkeit und Service werden groß geschrieben. Kann man jederzeit weiter empfehlen.",
    date: "vor 1 Jahr"
  },
  {
    name: "Benjamin Eyrisch",
    rating: 5,
    text: "Kann man guten Gewissens weiterempfehlen!! Top Preis Leistung!! Tolles Team, Kompetent, Schnell und kurzfristig! Wer woanders hingeht ist selber Schuld!",
    date: "vor 2 Jahren"
  },
  {
    name: "zitrusfrucht orange",
    rating: 5,
    text: "Sehr kompetentes, nettes Team. Super Preis Leistungsverhältnis. Wir sind seit den Anfangsschuhen dabei und sind immer sehr Zufrieden.",
    date: "vor 3 Jahren"
  },
  {
    name: "A M",
    rating: 5,
    text: "Super nettes Team mit Top Preis-/Leistungsverhältnis. Im Vergleich zu vielen anderen Werkstätten hat man hier definitiv das Gefühl, dass sie ihre Arbeit gerne machen.",
    date: "vor 1 Jahr"
  }
];

export const Reviews = () => {
  return (
    <section className="py-24 bg-brand-gray overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-zinc-200 mb-4"
          >
            <Star className="w-4 h-4 text-brand-accent fill-brand-accent" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-dark">Kundenstimmen</span>
          </motion.div>
          <h2 className="text-4xl font-bold text-brand-dark mb-4">Das sagen unsere Kunden</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Ehrliches Feedback ist uns wichtig. Hier sind einige unserer neuesten Google-Rezensionen von zufriedenen Fahrzeugbesitzern.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-zinc-100 -z-0" />
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-accent fill-brand-accent" />
                ))}
              </div>
              <p className="text-zinc-700 italic mb-6 relative z-10 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between relative z-10">
                <span className="font-bold text-brand-dark">{review.name}</span>
                <span className="text-xs text-zinc-400 uppercase tracking-widest">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://www.google.com/maps?cid=9606822264627035685" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-accent font-bold hover:underline"
          >
            Alle Rezensionen auf Google lesen
          </a>
        </div>
      </div>
    </section>
  );
};
