import { BookOpenIcon, CurrencyEuroIcon, MagnifyingGlassIcon, ScaleIcon } from '@heroicons/react/24/outline';

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

export default async function wertermittlung() {
 return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-red-600">Antiquitäten-Bewertung und Begutachtung</h2>
          <p className={`${tub.className} mt-2 text-4xl font-[700]  tracking-tight text-gray-900 sm:text-5xl`}>
          Möchten Sie herausfinden, wie viel Ihr  Antiquitätenobjekt wert ist?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Wir stehen Ihnen zur Verfügung, um eine professionelle Begutachtung durchzuführen.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
         
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
