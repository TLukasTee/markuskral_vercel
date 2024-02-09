import React from 'react';

import { Link } from 'react-router-dom'
import { Banner } from 'payload/components'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, ArrowRightIcon } from '@heroicons/react/20/solid'


import '../../tailwind.css'
const baseClass = 'before-dashboard'
const customDashboard = () => 


<div className=""> 

<div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-48 ">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-full grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-full lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-full lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-full">
              <p className="text-4xl font-semibold leading-7 text-red-600">Hallo Herr Kral!</p>
              <p className="mt-6 text-2xl leading-9 text-gray-700">
              Wir freuen uns, Ihnen eine einfache und effiziente Möglichkeit anzubieten, mit der Sie Ihre Sammlung von Antiquitäten selbst verwalten können. <br /> Unser System ermöglicht es Ihnen,
               je nach Ihren Bedürfnissen und dem aktuellen Stand Ihrer Kollektion, neue Antiquitätenobjekte hinzuzufügen oder vorhandene zu entfernen. 
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Anleitung zur Verwaltung:</h1>
         
            </div>
          </div>
        </div>
       
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-full lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-full text-2xl leading-9 text-gray-700 lg:max-w-full">
           
              <ul role="list" className="space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ArrowRightIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Zugriff auf die Sammlung "Antiquitäten": </strong> <br /> Wählen Sie in der Navigationsleiste unter dem Punkt <strong className='tracking-wide'>"Sammlungen" </strong>  die Option "Antiquitäten" aus. Anschließend erhalten Sie eine Übersicht über die bereits hochgeladenen Produkte.
                    </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Erstellen eines neuen Antiquitätseintrag </strong> <br /> Klicken Sie neben der Option <strong className='tracking-wide'> "Antiquitäten" </strong>auf  <strong className='tracking-wide'>"Neu erstellen".  </strong> Daraufhin öffnet sich ein Fenster, in dem Sie die Details Ihrer Antiquität erfassen und ein entsprechendes Bild hochladen können. Rechts im Fenster haben Sie die Möglichkeit, die passende Kategorie für das Objekt auszuwählen.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Veröffentlichung der Änderungen </strong> <br />
                    Sobald Sie alle erforderlichen Informationen eingegeben haben, bestätigen Sie diese durch Klicken auf <strong className='tracking-wide'> "ÄNDERUNGEN VERÖFFENTLICHEN"  </strong> am oberen Rand. Nach erfolgreicher Eingabe erhalten Sie eine Benachrichtigung, dass das Produkt erfolgreich hochgeladen wurde, und können die Veröffentlichung auf Ihrer Website überprüfen.
                  </span>
                </li>
              </ul>
             
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Sie brauchen Hilfe? Kein Problem.</h2>
              <p className="mt-6">
               Senden Sie uns einfache eine Whatsapp Nachricht an <strong> +436702024825 </strong> und wir werden uns schnellstmöglich um Sie kümmern! 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

</div>
;

export default customDashboard;