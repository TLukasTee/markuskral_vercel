import { BookOpenIcon, CurrencyEuroIcon, MagnifyingGlassIcon, ScaleIcon, WrenchIcon } from '@heroicons/react/24/outline';

import { Montserrat, Playfair } from "next/font/google";

const inter = Montserrat({  weight: '400',
subsets: ['latin'], });

const tub = Playfair({  weight: ['400', '500', '600', '700'],
subsets: ['latin'], });

const features = [
  {
    name: 'Objektidentifikation und -prüfung',
    description:
      'Unsere Experten identifizieren Ihr Antiquitätenobjekt und überprüfen seine Echtheit und Herkunft.',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Zustandsbewertung',
    description:
      'Wir bewerten den aktuellen Zustand Ihres Antiquitätenstücks, einschließlich eventueller Schäden oder Verschleiß.',
    icon: ScaleIcon,
  },
  {
    name: 'Historische Recherche',
    description:
      'Unsere Experten recherchieren die Geschichte und den Hintergrund Ihres Antiquitätenobjekts, um seinen kulturellen und historischen Wert zu ermitteln.',
    icon: BookOpenIcon,
  },
  {
    name: 'Wertbestimmung und Schätzung',
    description:
      'Basierend auf den gesammelten Informationen führen wir eine professionelle Bewertung durch und geben Ihnen eine Schätzung des Werts Ihres Antiquitätenstücks.',
    icon: CurrencyEuroIcon,
  },
]

export default async function impressum() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
    
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-lg font-semibold leading-8 tracking-tight text-red-600">Impressum</p>
          <p className="mt-6 text-xl leading-8 text-gray-700">
          Angaben gemäß § 5 TMG: <br/>

            Markus Kral <br/>
           
            Margeritenstraße 1 <br/>
            4063 Hörschingt <br/>
            Österreich <br/>

            Kontakt: <br/>

            Telefon: 07221 73 811 <br/>
            E-Mail: office@​antiquitaeten-kral.at
          </p>
        </div>
        
      </div>
      <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">

        <p className='lg:p-0 p-12'>
        <strong className='text-lg'>Haftungsausschluss:</strong><br/><br/>

        <strong>Haftung für Inhalte</strong><br/><br/>
Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
<br/><br/>
<strong> Haftung für Links</strong><br/>
Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
<br/><br/>
<strong>Urheberrecht</strong><br/>
Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
<br/><br/>
<strong>Datenschutz</strong><br/>
Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.  
        </p> 
     
      </div>
    </div>
    </div>
  )
}
