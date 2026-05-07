import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';

const reviews = [
  {
    name: "Marita Zoeller",
    rating: 5,
    text: "Sehr gute Werkstatt. Freundlichkeit und Service werden groß geschrieben. Kann man jederzeit weiter empfehlen.",
    date: { de: "vor 1 Jahr", en: "1 year ago" }
  },
  {
    name: "Benjamin Eyrisch",
    rating: 5,
    text: "Kann man guten Gewissens weiterempfehlen!! Top Preis Leistung!! Tolles Team, Kompetent, Schnell und kurzfristig! Wer woanders hingeht ist selber Schuld!",
    date: { de: "vor 2 Jahren", en: "2 years ago" }
  },
  {
    name: "zitrusfrucht orange",
    rating: 5,
    text: "Sehr kompetentes, nettes Team. Super Preis Leistungsverhältnis. Wir sind seit den Anfangsschuhen dabei und sind immer sehr Zufrieden.",
    date: { de: "vor 3 Jahren", en: "3 years ago" }
  },
  {
    name: "A M",
    rating: 5,
    text: "Super nettes Team mit Top Preis-/Leistungsverhältnis. Im Vergleich zu vielen anderen Werkstätten hat man hier definitiv das Gefühl, dass sie ihre Arbeit gerne machen.",
    date: { de: "vor 1 Jahr", en: "1 year ago" }
  }
];

export const Reviews = () => {
  const { language, t } = useTranslation();

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
            <span className="text-sm tracking-[0.3em] uppercase text-brand-dark font-heading">{t.reviews.tag}</span>
          </motion.div>
          <h2 className="text-4xl font-normal text-brand-dark mb-4 font-display">{t.reviews.title}</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            {t.reviews.subtitle}
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
                <span className="text-xs text-zinc-400 uppercase tracking-widest">{language === 'de' ? review.date.de : review.date.en}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://www.google.com/maps/place/Die+Reparatur+Garage/@49.492377,7.8920896,17z/data=!3m1!4b1!4m6!3m5!1s0x47961517433613bb:0x49a5bf9b0c36469d!8m2!3d49.4923735!4d7.8946645!16s%2Fg%2F11f3sgtpbj?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-accent font-bold hover:underline"
          >
            {t.reviews.cta}
          </a>
        </div>
      </div>
    </section>
  );
};
