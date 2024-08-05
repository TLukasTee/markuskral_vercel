import { BookOpenIcon, CurrencyEuroIcon, MagnifyingGlassIcon, ScaleIcon, WrenchIcon } from '@heroicons/react/24/outline';

import { Montserrat, Playfair } from "next/font/google";

const inter = Montserrat({  weight: '400',
subsets: ['latin'], display: 'swap', adjustFontFallback: false });

const tub = Playfair({  weight: ['400', '500', '600', '700'],
subsets: ['latin'], display: 'swap', adjustFontFallback: false });

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

export default async function restaurierung() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
    
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-lg font-semibold leading-8 tracking-tight text-red-600">Restaurierung</p>
          <h1 className={`${tub.className} font-[600] mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl`}>Wiederherstellung von Schönheit und Geschichte</h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">
          Unsere Leidenschaft gilt der kunstvollen Restaurierung von antiken Möbelstücken. Wir setzen uns dafür ein, die Schönheit und Geschichte jedes Stücks wiederherzustellen und es in neuem Glanz erstrahlen zu lassen.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <svg
              className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M0.5 0V200M200 0.5L0 0.499983" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" strokeWidth={0} fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" />
            </svg>
            <figure className="border-l border-red-600 pl-8">
              <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                <p>
                  “Die Vergangenheit atmet in jedem Stück, und durch sorgfältige Restaurierung geben wir diesen alten Geschichten ein neues Kapitel, in dem sie weiterleben können..”
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
              
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900">Markus Kral</div>
                  <div className="text-gray-600">Geschäftsführer</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
       
            <ul role="list" className="mt-8 max-w-xl space-y-11 text-gray-600 ">
              <li className="flex gap-x-3 leading-8">
                <WrenchIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                <span>
                  <strong  className={`${tub.className} font-[700 ] tracking-widest text-gray-900 text-3xl`}>MÖBEL</strong><br></br> Möbelstücke aus Ihrem Besitz oder unrestaurierte Möbelstücke aus unserem Sortiment können Sie in unserer Werkstatt restaurieren lassen.

                </span>
              </li>
              <li className="flex gap-x-3 leading-8">
                <WrenchIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                <span>
                  <strong className={`${tub.className} font-[700] tracking-widest text-gray-900 text-3xl`}>SCHELLACKPOLITUR</strong> <br></br>Bei der Schellackpolitur handelt es sich um eine Oberflächenveredelung, die in der Zeit des Biedermeiers aufkam.
                </span>
              </li>
             
            </ul>
            <p className="mt-8">
            Kontaktieren Sie uns, um die Möglichkeiten der Möbelrestaurierung zu besprechen und Ihre Schätze in neuem Glanz erstrahlen zu lassen.
            </p>
          
         
          </div>
          
        </div>
      </div>
      <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Direkt anrufen & Termin vereinbaren!</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                
                  <div className="mt-1">
               
                    <a  className="font-semibold text-red-600 hover:text-red-400"  href="tel:+436642418949">+43 664 2418949</a>
               
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Auch gerne per Mail!</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a className="font-semibold text-red-600 hover:text-red-400" href="mailto:office@antiquitaeten-kral.at">
                      office@antiquitaeten-kral.at
                      </a>
                    </dd>
                  </div>
                
                </dl>
              </div>
           
        
            </div>
      </div>
    </div>
    </div>
  )
}
