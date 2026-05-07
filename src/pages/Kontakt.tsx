import { SEO } from '../components/SEO';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';

export const Kontakt = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // We normally would plug this into Formspree or similar
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <>
      <SEO 
        title="Kontakt & Termin anfragen" 
        description="Termin in der Reparaturgarage vereinbaren? Ruf an unter 06303 8090929 oder nutze unser Kontaktformular. Wir sind in Enkenbach-Alsenborn für dich da." 
        canonical="/kontakt" 
      />

      <div className="bg-brand-dark pb-32">
        <div className="w-full h-64 lg:h-96 relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2586.2996942095914!2d7.893259976865243!3d49.49915995537552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47960fa77d8a6efb%3A0xeaeea83d5a44ef69!2sTilsiter%20Str.%209%2C%2067677%20Enkenbach-Alsenborn!5e0!3m2!1sde!2sde!4v1715077271881!5m2!1sde!2sde" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
            className="opacity-90 mix-blend-luminosity grayscale hover:grayscale-0 hover:mix-blend-normal transition-all duration-700"
          ></iframe>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
           <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
              {/* Contact Info */}
              <div className="lg:w-2/5 bg-zinc-50 border-r border-zinc-100 flex flex-col">
                 <div className="h-48 w-full relative group overflow-hidden">
                   <img 
                     src="https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?auto=format&fit=crop&q=80&w=800" 
                     alt="Werkstatt Außen" 
                     className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-black/20" />
                 </div>
                 <div className="p-10 lg:p-14 flex-1">
                   <h2 className="text-3xl font-bold text-brand-dark mb-8">Lass uns reden.</h2>
                 
                 <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-accent/10 rounded-full flex items-center justify-center shrink-0">
                        <MapPin className="text-brand-accent w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-brand-dark mb-1">Werkstatt-Adresse</h4>
                        <p className="text-zinc-600 font-normal">Tilsiter Straße 9<br />67677 Enkenbach-Alsenborn</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-accent/10 rounded-full flex items-center justify-center shrink-0">
                        <Phone className="text-brand-accent w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-brand-dark mb-1">Telefon & WhatsApp</h4>
                        <p className="text-zinc-600 font-normal mb-1"><a href="tel:+4963038090929" className="hover:text-brand-accent transition-colors">+49 6303 - 8090929</a></p>
                        <p className="text-zinc-600 font-normal"><a href="https://wa.me/491632696960" className="hover:text-brand-accent transition-colors">0163 - 269 69 60 (WhatsApp)</a></p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-accent/10 rounded-full flex items-center justify-center shrink-0">
                        <Mail className="text-brand-accent w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-brand-dark mb-1">E-Mail Adresse</h4>
                        <p className="text-zinc-600 font-normal"><a href="mailto:info@diereparaturgarage.de" className="hover:text-brand-accent transition-colors">info@diereparaturgarage.de</a></p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-brand-accent/10 rounded-full flex items-center justify-center shrink-0">
                        <Clock className="text-brand-accent w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-brand-dark mb-1">Öffnungszeiten</h4>
                        <p className="text-zinc-600 font-normal">Mo - Fr: 08:00 - 18:00 Uhr<br />Sa: Nach Absprache</p>
                      </div>
                    </div>
                 </div>
              </div>

              {/* Contact Form */}
              <div className="lg:w-3/5 p-10 lg:p-14">
                 <h2 className="text-2xl font-bold text-brand-dark mb-2">Termin oder Rückruf anfragen</h2>
                 <p className="text-zinc-500 font-normal mb-8">Hinterlasse uns eine kurze Nachricht mit deinem Anliegen. Wir melden uns schnellstmöglich bei dir.</p>

                 {isSuccess ? (
                   <div className="bg-green-50 text-green-800 p-6 rounded-xl border border-green-200">
                     <h3 className="font-bold mb-2 text-lg">Danke für deine Nachricht!</h3>
                     <p className="font-normal">Wir haben deine Anfrage erhalten und werden uns in Kürze telefonisch oder per E-Mail bei dir melden.</p>
                   </div>
                 ) : (
                   <form onSubmit={handleSubmit} className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                         <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Name</label>
                         <input type="text" id="name" required className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 rounded-lg focus:outline-none focus:border-brand-accent focus:bg-white transition-colors" />
                       </div>
                       <div>
                         <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Telefonnummer</label>
                         <input type="tel" id="phone" required className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 rounded-lg focus:outline-none focus:border-brand-accent focus:bg-white transition-colors" />
                       </div>
                     </div>
                     
                     <div>
                       <label htmlFor="topic" className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">KFZ-Kennzeichen (optional)</label>
                       <input type="text" id="topic" className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 rounded-lg focus:outline-none focus:border-brand-accent focus:bg-white transition-colors" placeholder="z.B. KL-AB 123" />
                     </div>

                     <div>
                       <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Dein Anliegen</label>
                       <textarea id="message" rows={4} required className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 rounded-lg focus:outline-none focus:border-brand-accent focus:bg-white transition-colors" placeholder="Was können wir für dich tun?"></textarea>
                     </div>

                     <button 
                       type="submit" 
                       disabled={isSubmitting}
                       className="w-full bg-brand-accent text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors disabled:opacity-70"
                     >
                       {isSubmitting ? 'Wird gesendet...' : (
                         <>Nachricht senden <Send className="w-4 h-4" /></>
                       )}
                     </button>
                   </form>
                 )}
               </div>
            </div>
        </div>
      </div>
    </>
  );
};
