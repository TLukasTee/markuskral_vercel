
import { Fragment } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'


import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

  import React from 'react';

const CustomLogo = () => 

        <div className='bg-white overflow-y-auto flex-column flex  '>

          <div className='mt-40'>
            <nav className="flex flex-1 flex-col"> 
              <ul role="list" className="flex flex-1 flex-col gap-y-7">

              <li>
                 <a href="{item.href}"  className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold" >
                          <HomeIcon
                            className="text-black group-hover:text-indigo-200 h-8 w-8 shrink-0"/>
                            
                            <span  className="text-black mt-2"> Übersicht</span>
                        </a>
                      </li>

              </ul>


            </nav>
          
          </div>
            
        </div>


     

;

export default CustomLogo;