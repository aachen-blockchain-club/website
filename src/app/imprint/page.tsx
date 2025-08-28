import CryptoBackground from "@/components/CryptoBackground";

export default function Imprint() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">
      <CryptoBackground />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 text-center">
            Impressum
          </h1>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Angaben gemäß § 5 TMG</h2>
              <div className="space-y-2 text-gray-300">
                <p><strong>Aachen Blockchain Club e.V.</strong></p>
                <p>c/o AStA RWTH Aachen</p>
                <p>Pontwall 3</p>
                <p>52062 Aachen</p>
                <p><strong>Vereinsregister:</strong> Amtsgericht Aachen, VR 6351</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Vertreten durch</h2>
              <div className="space-y-2 text-gray-300">
                <p>Den Vorstand des Aachen Blockchain Club e.V.</p>
                <p>(Vorstand im Sinne des § 26 BGB)</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Kontakt</h2>
              <div className="space-y-2 text-gray-300">
                <p><strong>E-Mail:</strong> <a href="mailto:info@aachen-blockchain.de" className="text-purple-400 hover:text-purple-300">info@aachen-blockchain.de</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <div className="space-y-2 text-gray-300">
                <p>Der Vorstand des Aachen Blockchain Club e.V., Anschrift wie oben.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Haftungsausschluss</h2>
              <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                <p>
                  <strong>Inhalte dieser Website:</strong> Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. 
                  Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
                  Nach den gesetzlichen Bestimmungen sind wir für eigene Inhalte verantwortlich, jedoch nicht verpflichtet, 
                  übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, 
                  die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                
                <p>
                  <strong>Externe Links:</strong> Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte 
                  wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. 
                  Zum Zeitpunkt der Verlinkung wurden die Seiten auf mögliche Rechtsverstöße überprüft. 
                  Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
                
                <p>
                  <strong>Urheberrecht:</strong> Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
                  unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung 
                  außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">EU-Streitschlichtung</h2>
              <div className="space-y-2 text-gray-300 text-sm leading-relaxed">
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                  <a 
                    href="https://ec.europa.eu/consumers/odr/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-purple-400 hover:text-purple-300"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>.
                </p>
                <p>
                  Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Datenschutz</h2>
              <div className="space-y-2 text-gray-300 text-sm leading-relaxed">
                <p>
                  Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. 
                  Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) 
                  erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre 
                  ausdrückliche Zustimmung nicht an Dritte weitergegeben.
                </p>
                <p>
                  Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) 
                  Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
