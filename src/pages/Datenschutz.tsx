import { SEO } from '../components/SEO';

export const Datenschutz = () => {
  return (
    <>
      <SEO 
        title="Datenschutz" 
        description="Datenschutzerklärung der Reparatur Garage in Enkenbach-Alsenborn." 
        canonical="/datenschutz" 
      />
      <div className="bg-brand-gray min-h-screen py-24">
        <div className="max-w-3xl mx-auto px-6 bg-white p-10 lg:p-16 rounded-3xl shadow-sm border border-zinc-200">
          <h1 className="text-5xl lg:text-7xl font-normal text-brand-dark mb-10 font-heading uppercase leading-[1]">Datenschutzerklärung</h1>
          
          <div className="space-y-8 text-zinc-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-normal text-brand-dark mb-4 font-display">Einleitung und Überblick</h2>
              <p>
                Wir haben diese Datenschutzerklärung verfasst, um Ihnen gemäß der Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679 und anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen Daten (kurz Daten) wir als Verantwortliche – und die von uns beauftragten Auftragsverarbeiter (z. B. Provider) – verarbeiten, zukünftig verarbeiten werden und welche rechtmäßigen Möglichkeiten Sie haben. Kurz gesagt: Wir informieren Sie umfassend über Daten, die wir über Sie verarbeiten.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-brand-dark mb-4 font-display">Verantwortliche Stelle</h2>
              <p>Sollten Sie Fragen zum Datenschutz haben, finden Sie nachfolgend die Kontaktdaten der verantwortlichen Person bzw. Stelle:</p>
              <p className="mt-4"><strong>Die Reparaturgarage</strong></p>
              <p>Tilsiter Straße 9</p>
              <p>67677 Enkenbach-Alsenborn</p>
              <p>Vertretungsberechtigt: Wishnu Pranatyo</p>
              <p>E-Mail: <a href="mailto:info@diereparaturgarage.de" className="text-brand-accent hover:underline">info@diereparaturgarage.de</a></p>
              <p>Telefon: +49 6303 - 8090929</p>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-brand-dark mb-4 font-display">Anwendungsbereich</h2>
              <p>
                Diese Datenschutzerklärung gilt für alle von uns im Unternehmen verarbeiteten personenbezogenen Daten und für alle personenbezogenen Daten, die von uns beauftragte Firmen (Auftragsverarbeiter) verarbeiten. Mit personenbezogenen Daten meinen wir Informationen im Sinne des Art. 4 Nr. 1 DSGVO wie zum Beispiel Name, E-Mail-Adresse und postalische Anschrift einer Person.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-brand-dark mb-4 font-display">Rechte laut Datenschutz-Grundverordnung</h2>
              <p>Laut Artikel 13 DSGVO stehen Ihnen die folgenden Rechte zu, damit es zu einer fairen und transparenten Verarbeitung von Daten kommt:</p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Sie haben laut Artikel 15 DSGVO ein Auskunftsrecht darüber, ob wir Daten von Ihnen verarbeiten.</li>
                <li>Sie haben laut Artikel 16 DSGVO ein Recht auf Berichtigung der Daten.</li>
                <li>Sie haben laut Artikel 17 DSGVO das Recht auf Löschung („Recht auf Vergessenwerden“).</li>
                <li>Sie haben laut Artikel 18 DSGVO das Recht auf Einschränkung der Verarbeitung.</li>
                <li>Sie haben laut Artikel 19 DSGVO das Recht auf Datenübertragbarkeit.</li>
                <li>Sie haben laut Artikel 21 DSGVO ein Widerspruchsrecht.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-brand-dark mb-4 font-display">Kommunikation (Telefon, E-Mail, Online-Formulare)</h2>
              <p>
                Wenn Sie mit uns Kontakt aufnehmen und per Telefon, E-Mail oder Online-Formular kommunizieren, kann es zur Verarbeitung personenbezogener Daten kommen. Die Daten werden für die Abwicklung und Bearbeitung Ihrer Frage und des damit zusammenhängenden Geschäftsvorgangs verarbeitet. Die Daten werden so lange gespeichert bzw. so lange es das Gesetz vorschreibt.
              </p>
              <p className="mt-4"><strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. b DSGVO (Vertrag), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen).</p>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-brand-dark mb-4 font-display">Webhosting & Cookies</h2>
              <p>
                Wenn Sie heutzutage Websites besuchen, werden gewisse Informationen – auch personenbezogene Daten – automatisch erstellt und gespeichert, so auch auf dieser Website. Unser Webserver speichert in der Regel automatisch Daten wie die IP-Adresse, Browserversion, Datum und Uhrzeit in sogenannten Webserver-Logfiles. In der Regel werden diese Daten zwei Wochen gespeichert und danach automatisch gelöscht.
              </p>
              <p className="mt-4">
                Unsere Website verwendet zudem gegebenenfalls HTTP-Cookies, um grundlegende Funktionen sicherzustellen oder (im Falle von Drittanbietern wie Google Maps) Dienste einzubinden. Sie haben jederzeit die Möglichkeit, Cookies in Ihrem Browser zu löschen oder zu deaktivieren.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-brand-dark mb-4 font-display">Google Maps</h2>
              <p>
                Wir benützen auf unserer Website Google Maps der Firma Google Inc. Mit Google Maps können wir Ihnen Standorte besser zeigen und damit unser Service an Ihre Bedürfnisse anpassen. Durch die Verwendung von Google Maps werden Daten an Google übertragen und auf den Google-Servern gespeichert, wozu insbesondere IP-Adresse und Standortdaten gehören können.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
