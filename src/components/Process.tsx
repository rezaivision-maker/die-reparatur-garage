import { Calendar, Search, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from '../i18n/LanguageContext';

const icons = [Calendar, Search, CheckCircle2];

export const Process = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-accent tracking-[0.3em] uppercase text-sm mb-4 block font-heading">{t.process.tag}</span>
          <h2 className="text-4xl lg:text-5xl mb-4 font-display">{t.process.title}</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            {t.process.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0" />

          {t.process.steps.map((step: any, index: number) => {
            const Icon = icons[index];
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-zinc-800/50 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative z-10 hover:border-brand-accent/50 transition-colors"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-accent text-white font-black text-xl flex items-center justify-center rounded-xl shadow-lg transform rotate-[-5deg] font-heading">
                  0{index + 1}
                </div>
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-6 mt-4">
                  {Icon && <Icon className="w-6 h-6 text-brand-accent" />}
                </div>
                <h3 className="text-xl mb-3 font-display">{step.title}</h3>
                <p className="text-zinc-400 font-light leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
