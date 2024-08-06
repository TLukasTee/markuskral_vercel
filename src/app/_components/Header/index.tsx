'use client'
{
  /* eslint-disable @next/next/no-img-element */
}


import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import {
  Bars3Icon,
  CalendarDaysIcon,
  Cog8ToothIcon,
  HomeIcon,
  PhotoIcon,
  WrenchScrewdriverIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { IoDiamondOutline } from "react-icons/io5";
import { RiHourglass2Fill } from "react-icons/ri";

import { GiPorcelainVase } from "react-icons/gi";

import { Lora } from "next/font/google";
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { Header } from '../../../payload/payload-types';
import Logo_Red from '../../images/Logos/LogoKral2.svg';

const service = [
  { name: 'Montage', description: 'Professionelle Montage und Wartung', href: '/products?category=ui_kits', icon: Cog8ToothIcon },
  { name: 'Felgenreperatur', description: 'Von  Schönheitsreparaturen bis hin zu umfangreichen Restaurierungen!', href: 'products?category=icons', icon: WrenchScrewdriverIcon },

]

const products = [
  { name: 'Gemälde', description: 'Originale Kunstwerke aus verschiedenen Epochen und Stilen.', href: '/gemaelde', icon: PhotoIcon },
  { name: 'Uhren', description: 'Antike Zeitmesser, darunter Taschenuhren und Wanduhren.', href: '/uhren', icon: RiHourglass2Fill },
  { name: 'Möbel', description: 'Historische und stilvolle Möbelstücke für Ihr Zuhause.', href: '/moebel', icon: HomeIcon },
  { name: 'Schmuck', description: 'Hochwertiger antiker Schmuck und Accessoires.', href: '/schmuck', icon: IoDiamondOutline },
  { name: 'Kleinantiquitäten', description: ' Kleine Sammlerstücke und Objekte von historischem Wert.', href: '/kleinantiquitaeten', icon: GiPorcelainVase },

]


const callsToAction = [
  { name: 'Gesamtübersicht', href: '/schauraum', icon: CalendarDaysIcon },
 
]
const company = [
  { name: 'About us', href: '#' },
  { name: 'Careers', href: '#' },
  { name: 'Support', href: '#' },
  { name: 'Press', href: '#' },
  { name: 'Blog', href: '#' },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const tub = Lora({  weight: ['400'],
subsets: ['latin'], });
export  function Header() {
  let header: Header | null = null
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

 

  return (
    <>
     <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
        <a href="/" className="-m-1.5 p-1.5" title="Markus Kral | Start">
            <span className="sr-only"> Markus Kral</span>
            <Image className="h-12 w-auto" src={Logo_Red} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a href="/" title="Markus Kral | Start" className={`flex items-center gap-x-1 ${tub.className}  text-md font-bold leading-6 text-gray-900 outline-none border-none tracking-widest`}>
              ÜBERSICHT
            </a>

          <a href="/wertermittlung" title="Markus Kral Antiquitäten | Wertermittlung" className={`flex items-center gap-x-1 ${tub.className}  text-md font-bold leading-6 text-gray-900 outline-none border-none tracking-widest`}>
            WERTERMITTLUNG
          </a>

          <a href="/restaurierung"  title="Markus Kral Antiquitäten | Restaurierung" className={`flex items-center gap-x-1 ${tub.className}  text-md font-bold leading-6 text-gray-900 outline-none border-none tracking-widest`}>
             RESTAURIERUNG
          </a>

         
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/kontakt"  title="Markus Kral Antiquitäten | Kontakt"  className={`"tracking-widest rounded-md bg-red-600 ${tub.className} tracking-widest px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"`}>
            KONTAKT
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5" title="Markus Kral Antiquitäten | Mobile">
              <span className="sr-only">Markus KRal</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <a href="/" title="Markus Kral Antiquitäten | Übersicht" className={`flex items-center gap-x-1 ${tub.className}  text-md font-semibold leading-6 text-gray-900 outline-none border-none tracking-widest`}>
              ÜBERSICHT
            </a>
       

                <a title="Markus Kral Antiquitäten | Wertermittlung"
                  href="/wertermittlung"
                  className={`-mx-3 block rounded-lg px-3 ${tub.className}  py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50`}
                >
                  WERTERMITTLUNG
                </a>
                <a title="Markus Kral Antiquitäten | Restaurierung"
                  href="/restaurierung"
                  className={`-mx-3 block rounded-lg px-3 ${tub.className} py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50`}
                >
                  RESTAURIERUNG
                </a>

             
              </div>
           
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
    </>
  )
}
