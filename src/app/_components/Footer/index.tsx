import Link from 'next/link';

import { Footer } from '../../../payload/payload-types';
import { fetchFooter } from '../../_api/fetchGlobals';
import MaxWidthWrapper from '../../custom_components/MaxWidthWrapper';

import { EnvelopeIcon, LockClosedIcon, PhoneIcon } from '@heroicons/react/24/solid';
export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the footer without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  const navItems = footer?.navItems || []

  return (
    <footer className=' flex-grow-0 z-0'>
    <MaxWidthWrapper>
      <div className='border-t'>
     
          <div className='pb-8 pt-16'>
            <div className='flex justify-center'>
              
            </div>
          </div>
  
          <div>
            <div className='relative flex items-center px-6 py-6 sm:py-8 lg:mt-0'>
              <div className='absolute inset-0 overflow-hidden rounded-lg'>
                <div
                  aria-hidden='true'
                  className='absolute  inset-0'
                />
              </div>

              <div className='text-center relative mx-auto max-w-sm'>
                <h3 className='font-semibold text-gray-900'>
                Vergangene Eleganz für die Zukunft bewahren
                </h3>
                <p className='mt-2 text-sm text-muted-foreground'>
                Bei uns finden Sie zeitlose Schätze und bewährte Eleganz für Ihr Zuhause.                  
                </p>
             
          
              </div>
            </div>
          </div>
     
      </div>

      <div className='py-10 md:flex md:items-center md:justify-between'>
        <div className='text-center md:text-left'>
        <p className='my-5 text-sm text-muted-foreground flex w-full  rounded-lg  text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
          <EnvelopeIcon className='w-auto h-5 mr-5'/> office@​antiquitaeten-kral.at
          </p>
          <p className='my-5 text-sm text-muted-foreground flex w-full rounded-lg  text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
            <PhoneIcon  className='w-auto h-5 mr-5'/> 07221 73 811
          </p>
          <p className='text-sm text-muted-foreground'>
            &copy; {new Date().getFullYear()} Markus Kral Antiquitäten
          </p>
        
        </div>

        <div className='mt-12 flex items-center justify-center md:mt-0'>
          <div className='flex space-x-8'>
            <Link
              href='/impressum'
              className='text-sm text-muted-foreground hover:text-gray-600 px-2  py-2 '>
              Impressum
            </Link>
            <Link
              href='#'
              className='text-sm text-muted-foreground hover:text-gray-600 px-2  py-2 '>
              Datenschutzerklärung
            </Link>
            <Link title="Markus Kral Antiquitäten | Übersicht" href='https://www.antiquitaeten-kral.at/admin'
                  className='text-sm text-muted-foreground hover:text-gray-600 bg-red-300 hover:bg-red-300 font-semibold  px-2  py-2 border-2 border-white rounded-full'>
                    <LockClosedIcon className='w-4 h-4'/>
              </Link>
           
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  </footer>
  )
}
