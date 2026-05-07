import { SEO } from '../components/SEO';

export const Impressum = () => {
  return (
    <>
      <SEO 
        title="Impressum" 
        description="Impressum der Reparatur Garage in Enkenbach-Alsenborn." 
        canonical="/impressum" 
      />
      <div className="bg-brand-gray min-h-screen py-24">
        <div className="max-w-3xl mx-auto px-6 bg-white p-10 lg:p-16 rounded-3xl shadow-sm border border-zinc-200">
          <h1 className="text-4xl font-bold text-brand-dark mb-10">Impressum</h1>
          
          <div className="space-y-8 text-zinc-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">Informationspflicht laut § 5 TMG</h2>
              <p><strong>Die Reparaturgarage</strong></p>
              <p>Inhaber: Wishnu Pranatyo</p>
              <p>Tilsiter Straße 9</p>
              <p>67677 Enkenbach-Alsenborn</p>
              <p>Deutschland</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">Kontakt</h2>
              <p>Telefon: +49 6303 - 8090929</p>
              <p>E-Mail: <a href="mailto:info@diereparaturgarage.de" className="text-brand-accent hover:underline">info@diereparaturgarage.de</a></p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">Zusätzliche Informationen</h2>
              <p>UID-Nummer: DE1913132521</p>
              <p>Berufsbezeichnung: KFZ-Meister</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">EU-Streitschlichtung</h2>
              <p>
                Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die Online-Streitbeilegungsplattform (OS-Plattform) informieren. Verbraucher haben die Möglichkeit, Beschwerden an die Online Streitbeilegungsplattform der Europäischen Kommission unter <a href="http://ec.europa.eu/odr" className="text-brand-accent hover:underline" target="_blank" rel="noopener noreferrer">http://ec.europa.eu/odr</a> zu richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb in unserem Impressum.
              </p>
              <p className="mt-4">
                Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder verpflichtet sind, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">Haftung für Inhalte dieser Website</h2>
              <p>
                Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns korrekte und aktuelle Informationen bereitzustellen. Laut Telemediengesetz (TMG) §7 (1) sind wir als Diensteanbieter für eigene Informationen, die wir zur Nutzung bereitstellen, nach den allgemeinen Gesetzen verantwortlich. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Webseite übernehmen, speziell für jene die seitens Dritter bereitgestellt wurden. Als Diensteanbieter im Sinne der §§ 8 bis 10 sind wir nicht verpflichtet, die von ihnen übermittelten oder gespeicherten Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="mt-4">
                Unsere Verpflichtungen zur Entfernung von Informationen oder zur Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen aufgrund von gerichtlichen oder behördlichen Anordnungen bleiben auch im Falle unserer Nichtverantwortlichkeit nach den §§ 8 bis 10 unberührt. Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitte wir Sie uns umgehend zu kontaktieren, damit wir die rechtswidrigen Inhalte entfernen können. Sie finden die Kontaktdaten im Impressum.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">Haftung für Links auf dieser Website</h2>
              <p>
                Unsere Webseite enthält Links zu anderen Webseiten für deren Inhalt wir nicht verantwortlich sind. Haftung für verlinkte Websites besteht für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links sofort entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden.
              </p>
              <p className="mt-4">
                Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitte wir Sie uns zu kontaktieren.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-dark mb-4">Urheberrechtshinweis</h2>
              <p>
                Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht der Bundesrepublik Deutschland. Bitte fragen Sie uns bevor Sie die Inhalte dieser Website verbreiten, vervielfältigen oder verwerten wie zum Beispiel auf anderen Websites erneut veröffentlichen. Falls notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen. Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht verletzen, bitten wir Sie uns zu kontaktieren.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
