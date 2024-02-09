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
import Logo_Red from '../../images/Logos/Logo_MarkusKral.svg';

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
        <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image className="h-16 w-auto" src={Logo_Red} alt="" />
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
          <a href="/" className={`flex items-center gap-x-1 ${tub.className}  text-md font-semibold leading-6 text-gray-900 outline-none border-none tracking-widest`}>
              ÜBERSICHT
            </a>

          <Popover className="relative">
        
           
            <Popover.Button className={`flex items-center gap-x-1 ${tub.className}  text-md font-semibold leading-6 text-gray-900 outline-none border-none tracking-widest`}>
            SCHAURAUM
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>
   
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-red-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className= {`${tub.className} block font-bold  text-lg  text-gray-900`}>
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 divide-x divide-gray-900/5 bg-red-500">
              
                    <a
                        href="/schauraum"
                      className={`relative text-red-500    ${tub.className} text-base font-semibold tracking-tight flex items-center justify-center gap-x-2.5 p-3 text-md font-semibold leading-6 text-white tracking-widest uppercase  hover:bg-red-600`}
                    >
                    
                      Gesamtübersicht
                    </a>
              
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

         
          <a href="/wertermittlung" className={`flex items-center gap-x-1 ${tub.className}  text-md font-semibold leading-6 text-gray-900 outline-none border-none tracking-widest`}>
            WERTERMITTLUNG
          </a>

          <a href="/restaurierung" className={`flex items-center gap-x-1 ${tub.className}  text-md font-semibold leading-6 text-gray-900 outline-none border-none tracking-widest`}>
             RESTAURIERUNG
          </a>

         
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/kontakt" className={`"tracking-widest rounded-md bg-red-600 ${tub.className} tracking-widest px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"`}>
            KONTAKT
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
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
              <a href="/" className={`flex items-center gap-x-1 ${tub.className}  text-md font-semibold leading-6 text-gray-900 outline-none border-none tracking-widest`}>
              ÜBERSICHT
            </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className={`flex w-full items-center justify-between ${tub.className}  rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50`}>
                        SCHAURAUM
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <a
                  href="/wertermittlung"
                  className={`-mx-3 block rounded-lg px-3 ${tub.className}  py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50`}
                >
                  WERTERMITTLUNG
                </a>
                <a
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
