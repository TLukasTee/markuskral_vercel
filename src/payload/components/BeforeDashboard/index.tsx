import React from 'react'
import { Link } from 'react-router-dom'
import { Banner } from 'payload/components'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, ArrowRightIcon } from '@heroicons/react/20/solid'

import { SeedButton } from './SeedButton'

import './index.scss'
import '../../../tailwind.css'
const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
   
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <p className="text-lg font-semibold leading-8 tracking-tight text-red-600">Hallo Herr Kral</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Anleitung zum Produkthochladen</h1>
        <p className="mt-6 text-xl leading-8 text-gray-700">
      Unser System ermöglicht es Ihnen, je nach Ihren Bedürfnissen und dem aktuellen Stand Ihrer Kollektion, neue Antiquitätenobjekte hinzuzufügen oder vorhandene zu entfernen.
         Dieser Prozess ist speziell darauf ausgerichtet, Ihnen maximale Flexibilität und Kontrolle über Ihre Sammlung zu geben!      </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
       
        <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
         
          <ul role="list" className="mt-8 max-w-xl space-y-3 text-gray-600">
            <li className="flex gap-x-3">
              <ArrowRightIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900"> Links im Navigationsmenü "Produkte" anklicken</strong> 
              </span>
            </li>
            <li className="flex gap-x-3">
              <ArrowRightIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900"> Klicken Sie auf "Neues Produkt" erstellen</strong> 
              </span>
            </li>
            <li className="flex gap-x-3">
              <ArrowRightIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien
                vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
              </span>
            </li>
          </ul>
          
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Sie brauchen Hilfe? Kein Problem.</h2>
          <p className="mt-6">
              Senden Sie uns einfach per Whatsapp eine Nachricht an      <span className="text-black text-red-600 hover:text-red-500  text-md font-semibold"> +43 670 2024825 </span> und wir werden uns schnellstmöglichmit Ihnen in Verbindung setzen!
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BeforeDashboard
