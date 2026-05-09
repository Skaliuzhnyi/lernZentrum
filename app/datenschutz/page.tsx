import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Bad Camberger Lernzentrum",
  description: "Umfassender Einblick in den Datenschutz bei Bad Camberger Lernzentrum. Erfahren Sie mehr über Datenverarbeitung und Ihre Rechte.",
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen pt-16 pb-24 bg-[#fafaf8]">
      <div className="max-w-4xl mx-auto px-5 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a3a5c] mb-12">
          Datenschutzerklärung
        </h1>

        <div className="prose prose-slate prose-headings:text-[#1a3a5c] prose-a:text-[#1a3a5c] prose-a:underline hover:prose-a:no-underline max-w-none space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4">1. Datenschutz auf einen Blick</h2>

            <h3 className="text-xl font-semibold mt-8 mb-3">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem
              Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">Datenerfassung auf dieser Website</h3>

            <h4 className="text-lg font-semibold mt-6 mb-2">
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </h4>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
              Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser
              Datenschutzerklärung entnehmen.
            </p>

            <h4 className="text-lg font-semibold mt-6 mb-2">Wie erfassen wir Ihre Daten?</h4>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei
              kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p>
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
              durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B.
              Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser
              Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>

            <h4 className="text-lg font-semibold mt-6 mb-2">Wofür nutzen wir Ihre Daten?</h4>
            <p>
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
              gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet
              werden.
            </p>

            <h4 className="text-lg font-semibold mt-6 mb-2">
              Welche Rechte haben Sie bezüglich Ihrer Daten?
            </h4>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
              Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein
              Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
              Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
              jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten
              Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
              verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu.
            </p>
            <p>
              Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns
              wenden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4">
              2. Hosting und Content Delivery Networks (CDN)
            </h2>
            <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>

            <h3 className="text-xl font-semibold mt-8 mb-3">Squarespace</h3>
            <p>
              Anbieter ist die Squarespace Ireland Ltd., Le Pole House, Ship Street Great, Dublin 8,
              Irland (nachfolgend Squarespace).
            </p>
            <p>
              Squarespace ist ein Tool zum Erstellen und zum Hosten von Websites. Wenn Sie unsere
              Website besuchen, werden Ihre Daten auf den Servern von Squarespace verarbeitet. Die
              Verwendung von Squarespace erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4">
              3. Allgemeine Hinweise und Pflichtinformationen
            </h2>

            <h3 className="text-xl font-semibold mt-8 mb-3">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
              behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">Hinweis zur verantwortlichen Stelle</h3>
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p>
              <br />
              Bad Camberger Lernzentrum
              <br />
              Janina Plambeck
              <br />
              Bahnhofstraße 28
              <br />
              65520 Bad Camberg
              <br />
              <br />
              <a href="tel:+490643437417">Telefon: +49 (064) 34 37 417</a>
              <br />
              <a href="mailto:info@badcamberger-lernzentrum.de">
                E-Mail: info@badcamberger-lernzentrum.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4">4. Datenerfassung auf dieser Website</h2>

            <h3 className="text-xl font-semibold mt-8 mb-3">Cookies</h3>
            <p>
              Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete
              und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend
              für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf
              Ihrem Endgerät gespeichert.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-3">Kommunikation via WhatsApp</h3>
            <p>
              Für die Kommunikation mit unseren Kunden nutzen wir unter anderem den
              Instant-Messaging-Dienst WhatsApp. Anbieter ist die WhatsApp Ireland Limited, 4 Grand
              Canal Square, Grand Canal Harbour, Dublin 2, Irland.
            </p>
            <p>
              Die Kommunikation erfolgt über eine Ende-zu-Ende-Verschlüsselung (Peer-to-Peer). Der
              Einsatz von WhatsApp erfolgt auf Grundlage unseres berechtigten Interesses an einer
              möglichst schnellen und effektiven Kommunikation mit Kunden (Art. 6 Abs. 1 lit. f
              DSGVO).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4">5. Analyse-Tools und Werbung</h2>

            <h3 className="text-xl font-semibold mt-8 mb-3">Google Analytics</h3>
            <p>
              Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist
              die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p>
              Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der Websitebesucher
              zu analysieren. Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung
              nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit
              widerrufbar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4">6. Plugins und Tools</h2>

            <h3 className="text-xl font-semibold mt-8 mb-3">Google Maps</h3>
            <p>
              Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland
              Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p>
              Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu
              speichern. Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden
              Darstellung unserer Online-Angebote (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4">7. Audio- und Videokonferenzen</h2>

            <h3 className="text-xl font-semibold mt-8 mb-3">Microsoft Teams</h3>
            <p>
              Wir nutzen Microsoft Teams. Anbieter ist die Microsoft Ireland Operations Limited, One
              Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Irland.
            </p>
            <p>
              Details zur Datenverarbeitung entnehmen Sie der Datenschutzerklärung von Microsoft
              Teams:{' '}
              <a
                href="https://privacy.microsoft.com/de-de/privacystatement"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://privacy.microsoft.com/de-de/privacystatement
              </a>
            </p>
          </section>

          <div className="mt-16 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500">
              Quelle:{' '}
              <a href="https://www.e-recht24.de" target="_blank" rel="noopener noreferrer">
                eRecht24
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
