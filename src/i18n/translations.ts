
export type Language = 'de' | 'en';

export const translations = {
  de: {
    nav: {
      start: 'Startseite',
      services: 'Leistungen',
      about: 'Über Uns',
      faq: 'FAQ',
      contact: 'Kontakt',
      cta: 'Werkstatt-Termin'
    },
    hero: {
      badge: 'KFZ Meisterbetrieb Enkenbach-Alsenborn • Kaiserslautern',
      title1: 'Meisterhafter',
      title2: 'Service.',
      title3: 'Ohne Kompromisse.',
      subtitle: 'Willkommen in der Reparaturgarage. Bei Inhaber und KFZ-Meister Wishnu Pranatyo bekommst du ehrliches Handwerk, transparente Preise und absolute Zuverlässigkeit.',
      cta1: 'Termin vereinbaren',
      cta2: 'Unsere Leistungen',
      stats: {
        expertise: 'Meister seit 2011',
        loyalty: 'Werkstatt seit 2017',
        rating: 'Top Google Rating'
      },
      slides: [
        { label: "Meisterqualität", desc: "Modernste Technik & jahrelange Erfahrung" },
        { label: "Präzision", desc: "Exakte Diagnose für maximale Sicherheit" },
        { label: "Handwerk", desc: "Sorgfalt bei jedem Handgriff" },
        { label: "Motorradwerkstatt", desc: "Professionelle Wartung & Service" },
        { label: "US-Car Spezialist", desc: "Dein Partner für amerikanische Träume" },
        { label: "Unser Team", desc: "Echte Leidenschaft für dein Fahrzeug" }
      ]
    },
    garage: {
      tag: 'Die Garage',
      title: 'Dein Auto. In Meisterhand.',
      p1: 'Wir sind keine unpersönliche Kette, bei der du nur eine Nummer bist. Die Reparaturgarage ist ein inhabergeführter KFZ-Meisterbetrieb im Herzen von Enkenbach-Alsenborn.',
      p2: 'Wishnu Pranatyo und sein Team suchen immer nach der sinnvollsten und preiswertesten Lösung für dein Fahrzeug. Ehrliches Handwerk für PKW und Zweiräder.',
      features: [
        'Persönliche Beratung vom KFZ-Meister',
        'Transparente Kostenvoranschläge',
        'Modernste Diagnose-Werkzeuge',
        'Spezialisiert auf KFZ & Zweiräder'
      ],
      more: 'Mehr über uns erfahren'
    },
    contact: {
      title: 'Lass uns reden.',
      formTitle: 'Termin oder Rückruf anfragen',
      formSubtitle: 'Hinterlasse uns eine Nachricht. Wir öffnen direkt WhatsApp für dich.',
      name: 'Name',
      phone: 'Telefonnummer',
      plate: 'KFZ-Kennzeichen (optional)',
      message: 'Dein Anliegen',
      send: 'Anfrage via WhatsApp senden',
      success: 'WhatsApp wird geöffnet...',
      successDesc: 'Sollte sich WhatsApp nicht automatisch öffnen, klicke bitte erneut.',
      back: 'Zurück zum Formular'
    },
    services: {
      tag: 'Unser Service',
      title: 'Was wir',
      italic: 'können.',
      subtitle: 'Als KFZ-Meisterbetrieb decken wir das komplette Leistungsspektrum ab. Von der günstigen Wartung bis zur US-Umrüstung.',
      items: [
        {
          title: 'Inspektion nach Herstellervorgaben',
          desc: 'Die regelmäßige Wartung ist das A und O für ein langes Autoleben. Wir führen Inspektionen exakt nach den Vorgaben der Hersteller durch.'
        },
        {
          title: 'Reparaturen & Instandsetzung',
          desc: 'Zahnriemenwechsel, Kupplungstausch, Bremsen erneuern oder Auspuffanlagen schweißen – wir reparieren mechanische und elektronische Schäden.'
        },
        {
          title: 'US-Fahrzeuge & Umrüstungen',
          desc: 'Dein Spezialist für US-Cars im Raum Kaiserslautern. Wir kümmern uns um die nötige Umrüstung für den europäischen Markt.'
        },
        {
          title: 'Fehlerdiagnose & Elektrik',
          desc: 'Mit modernen Diagnosegeräten lesen wir Fehler präzise aus, bevor wir auf Verdacht teure Teile austauschen.'
        },
        {
          title: 'HU/AU & Fahrwerk-Service',
          desc: 'Wir machen dein Auto TÜV-fertig und führen notwendige Vorab-Checks durch. Kompetente Fahrwerk-Einstellung.'
        },
        {
          title: 'Motorradwerkstatt & Service',
          desc: 'Vom Reifenwechsel bis zur Vergaser-Synchronisation – Motorräder sind bei uns in besten Händen.'
        }
      ],
      notListed: {
        title: 'Dein Anliegen ist nicht aufgelistet?',
        desc: 'Kein Problem. Ruf uns einfach an oder schreib uns eine Nachricht. Wir helfen dir kompetent weiter.',
        cta: 'Jetzt Kontakt aufnehmen'
      }
    },
    about: {
      tag: 'Unsere Geschichte',
      title: 'Mehr als nur',
      italic: 'Schrauber.',
      p1: 'Die Reparaturgarage wurde aus einer klaren Vision heraus gegründet: Wir wollten eine Autowerkstatt für Enkenbach-Alsenborn, Kaiserslautern und Mehlingen schaffen, in der sich Kunden wieder ehrlich beraten fühlen.',
      p2: 'Als Inhaber und geprüfter KFZ-Meister stehe ich persönlich für die Qualität unserer Arbeit ein. Mein Team und ich vereinen Erfahrung mit Leidenschaft – egal ob PKW, US-Import oder Motorrad.',
      badgeTitle: 'KFZ-Meisterbetrieb',
      badgeDesc: 'Offiziell eingetragen und zertifiziert. Für dein sicheres Gefühl auf der Straße.',
      mission: {
        title: 'Unsere Mission',
        desc: 'Reparieren statt nur wild Teile zu tauschen. Wir suchen nach der besten Lösung für dich und deinen Geldbeutel.'
      },
      passion: {
        title: 'Echte Leidenschaft',
        desc: 'Wir lieben was wir tun. Jedes Fahrzeug wird mit der gleichen Sorgfalt behandelt, als wäre es unser eigenes.'
      },
      quality: {
        title: 'Höchste Qualität',
        desc: 'Wir verwenden nur hochwertige Ersatzteile und arbeiten streng nach Herstellervorgaben.'
      }
    },
    reviews: {
      tag: 'Kundenstimmen',
      title: 'Das sagen unsere Kunden',
      subtitle: 'Ehrliches Feedback ist uns wichtig. Hier sind einige unserer neuesten Google-Rezensionen von zufriedenen Fahrzeugbesitzern.',
      cta: 'Alle Rezensionen auf Google lesen'
    },
    process: {
      tag: 'Der Ablauf',
      title: 'In 3 Schritten zurück auf die Straße',
      subtitle: 'Werkstattbesuche müssen nicht kompliziert sein. Bei uns weißt du immer genau, woran du bist.',
      steps: [
        {
          title: '1. Termin & Annahme',
          desc: 'Schnelle Terminvergabe. Wir besprechen dein Problem persönlich am Fahrzeug.'
        },
        {
          title: '2. Transparente Diagnose',
          desc: 'Wir prüfen genau und klären dich auf, BEVOR wir Teile tauschen. Ehrliche Kosten.'
        },
        {
          title: '3. Fachgerechte Reparatur',
          desc: 'Zügige Umsetzung nach Herstellervorgaben. Abholung ohne versteckte Kosten.'
        }
      ]
    },
    faq: {
      tag: 'Noch Fragen?',
      title: 'Häufige Kundenfragen',
      subtitle: 'Wir legen Wert auf Transparenz. Hier sind die wichtigsten Antworten vor deinem ersten Besuch.',
      items: [
        {
          q: 'Bekomme ich vor der Reparatur einen Kostenvoranschlag?',
          a: 'Ja, absolut. Nachdem wir dein Fahrzeug begutachtet haben, besprechen wir die notwendigen Maßnahmen und du erhältst einen transparenten Kostenvoranschlag.'
        },
        {
          q: 'Repariert ihr auch Fremdmarken?',
          a: 'Als freie KFZ-Meisterwerkstatt reparieren und warten wir Fahrzeuge aller gängigen Marken nach Herstellervorgaben. Auch US-Fahrzeuge.'
        },
        {
          q: 'Bleibt meine Herstellergarantie erhalten?',
          a: 'Ja! Wir führen alle Inspektionen exakt nach Herstellervorgaben durch. Dadurch bleibt deine volle Herstellergarantie erhalten.'
        }
      ]
    }
  },
  en: {
    nav: {
      start: 'Home',
      services: 'Services',
      about: 'About Us',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Book Appointment'
    },
    hero: {
      badge: 'Master Mechanic Shop Enkenbach-Alsenborn • Kaiserslautern',
      title1: 'Master',
      title2: 'Quality.',
      title3: 'No Compromises.',
      subtitle: 'Expert auto repair you can trust. Owner Wishnu Pranatyo offers master mechanic expertise, honest advice, and fair pricing.',
      cta1: 'Schedule Appointment',
      cta2: 'Our Services',
      stats: {
        expertise: 'Master since 2011',
        loyalty: 'Garage since 2017',
        rating: 'Top Google Rating'
      },
      slides: [
        { label: "Master Quality", desc: "State-of-the-art tech & years of experience" },
        { label: "Precision", desc: "Exact diagnostics for maximum safety" },
        { label: "Craftsmanship", desc: "Care in every single movement" },
        { label: "Motorcycle Workshop", desc: "Professional maintenance & service" },
        { label: "US-Car Specialist", desc: "Your partner for American dreams" },
        { label: "Our Team", desc: "Real passion for your vehicle" }
      ]
    },
    garage: {
      tag: 'The Garage',
      title: 'Your Car. In Master Hands.',
      p1: 'We are not an impersonal chain where you are just a number. The Repair Garage is an owner-managed master mechanic shop in the heart of Enkenbach-Alsenborn.',
      p2: 'Wishnu Pranatyo and his team always look for the most sensible and cost-effective solution for your vehicle. Honest craftsmanship for cars and motorcycles.',
      features: [
        'Personal consultation from the master mechanic',
        'Transparent cost estimates',
        'State-of-the-art diagnostic tools',
        'Specialized in cars & motorcycles'
      ],
      more: 'Learn more about us'
    },
    contact: {
      title: 'Let\'s talk.',
      formTitle: 'Request Appointment or Callback',
      formSubtitle: 'Leave us a message. We will open WhatsApp directly for you.',
      name: 'Name',
      phone: 'Phone Number',
      plate: 'License Plate (optional)',
      message: 'Your Request',
      send: 'Send via WhatsApp',
      success: 'Opening WhatsApp...',
      successDesc: 'If WhatsApp does not open automatically, please click again.',
      back: 'Back to Form'
    },
    services: {
      tag: 'Our Services',
      title: 'What we',
      italic: 'can do.',
      subtitle: 'As a master mechanic shop, we cover the complete range of services. From affordable maintenance to US vehicle conversions.',
      items: [
        {
          title: 'Inspection per Manufacturer Specs',
          desc: 'Regular maintenance is key to a long car life. We perform inspections exactly according to manufacturer guidelines.'
        },
        {
          title: 'Repairs & Restoration',
          desc: 'Timing belt changes, clutch replacement, brake renewal, or exhaust welding – we repair mechanical and electronic issues.'
        },
        {
          title: 'US Vehicles & Conversions',
          desc: 'Your specialist for US cars in the Kaiserslautern area. We handle the necessary conversion for the European market.'
        },
        {
          title: 'Diagnostics & Electrical',
          desc: 'With modern diagnostic tools, we read faults precisely before we swap expensive parts on a hunch.'
        },
        {
          title: 'HU/AU & Suspension Service',
          desc: 'We get your car ready for inspection (TÜV) and perform necessary pre-checks. Competent suspension tuning.'
        },
        {
          title: 'Motorcycle Workshop & Service',
          desc: 'From tire changes to carburetor synchronization – motorcycles are in best hands with us.'
        }
      ],
      notListed: {
        title: 'Is your request not listed?',
        desc: 'No problem. Just call us or send us a message. Most likely we can help you quickly and competently.',
        cta: 'Contact us now'
      }
    },
    about: {
      tag: 'Our Story',
      title: 'More than just',
      italic: 'Mechanics.',
      p1: 'The Repair Garage was founded with a clear vision: We wanted to create a car workshop for Enkenbach-Alsenborn, Kaiserslautern and Mehlingen where customers feel honestly advised.',
      p2: 'As owner and certified master mechanic, I, Wishnu Pranatyo, personally stand for the quality of our work. My team and I combine experience with passion.',
      badgeTitle: 'Master Mechanic Shop',
      badgeDesc: 'Officially registered and certified. For your safe feeling on the road.',
      mission: {
        title: 'Our Mission',
        desc: 'Repairing instead of just wildly swapping parts. We look for the best solution for you and your wallet.'
      },
      passion: {
        title: 'Real Passion',
        desc: 'We love what we do. Every vehicle is treated with the same care as if it were our own.'
      },
      quality: {
        title: 'Highest Quality',
        desc: 'We use only high-quality spare parts and work strictly according to manufacturer specifications.'
      }
    },
    reviews: {
      tag: 'Testimonials',
      title: 'What our customers say',
      subtitle: 'Honest feedback is important to us. Here are some of our latest Google reviews from satisfied vehicle owners.',
      cta: 'Read all reviews on Google'
    },
    process: {
      tag: 'The Process',
      title: 'In 3 steps back on the road',
      subtitle: 'Workshop visits don\'t have to be complicated. With us, you always know where you stand.',
      steps: [
        {
          title: '1. Appointment & Drop-off',
          desc: 'Quick scheduling. We discuss your issue personally at the vehicle.'
        },
        {
          title: '2. Transparent Diagnosis',
          desc: 'We check carefully and inform you BEFORE we swap parts. Honest costs.'
        },
        {
          title: '3. Professional Repair',
          desc: 'Quick implementation per manufacturer specs. Pickup without hidden costs.'
        }
      ]
    },
    faq: {
      tag: 'Any Questions?',
      title: 'Common Customer Questions',
      subtitle: 'We value transparency. Here are the most important answers before your first visit.',
      items: [
        {
          q: 'Do I get a cost estimate before the repair?',
          a: 'Yes, absolutely. After we have inspected your vehicle, we discuss the necessary measures and you receive a transparent estimate.'
        },
        {
          q: 'Do you repair other brands?',
          a: 'As an independent master workshop, we repair and maintain vehicles of all common brands according to manufacturer specs. Also US cars.'
        },
        {
          q: 'Does my manufacturer warranty remain?',
          a: 'Yes! We perform all inspections exactly according to manufacturer guidelines. This ensures your full manufacturer warranty remains.'
        }
      ]
    }
  }
};
