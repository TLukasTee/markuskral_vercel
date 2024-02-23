'use client'
import { Montserrat, Playfair } from "next/font/google";
import Image from "next/image";
import './global.css';

import AQ_2 from './images/hero_antiqs/AQ_.svg';
import AQ_3 from './images/hero_antiqs/AQ_Gemaelde.svg';
import AQ_4 from './images/hero_antiqs/AQ_Geschirr.svg';
import AQ_1 from './images/hero_antiqs/AQ_Uhr.svg';
import AQ_5 from './images/hero_antiqs/AQ_Uhrenstatue.svg';
import AQ_6 from './images/hero_antiqs/AQ_Gemaelde3.svg';
import AQ_7 from './images/hero_antiqs/AQ_Uhr2.svg';
import AQ_8 from './images/hero_antiqs/AQ_Moebel2.svg';
import logoEbay from './images/logo/Logo (3).svg';
import logoWillhaben from './images/logo/Logo (1).svg';
import logoPorc from './images/logo/Logo (4).svg';
import MarkusKral from './images/MArkusKrala.svg';
import InnenRaum1 from './images/Vorstellungsbilder/InnenRaum1.svg';
import InnenRaum2 from './images/Vorstellungsbilder/InnenRaum2.svg';
import InnenRaum3 from './images/Vorstellungsbilder/InnenRaum3.svg';
import WV from './images/Vorstellungsbilder/VW.svg';
import { BuildingOffice2Icon, EnvelopeIcon, UserCircleIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Aussen from './images/Vorstellungsbilder/Aussen.svg';
import Bares from './images/test2.svg';
import SchrankWV from './images/Vorstellungsbilder/Schrank.svg';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import { useEffect } from 'react';


import Logo1 from './images/logo/Logo (1).svg';
import Logo2 from './images/logo/Logo (3).svg';
import Logo3 from './images/logo/Logo (4).svg';


const inter = Montserrat({
  weight: '400',
  subsets: ['latin'], 
});

const tub = Playfair({  weight: '400',
subsets: ['latin'], });
const perks = [
  {
    name: 'Instant Delivery',

    description:
      'Get your assets delivered to your email in seconds and download them right away.',
  },
  {
    name: 'Guaranteed Quality',

    description:
      'Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.',
  },
  {
    name: 'For the Planet',

    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
]

const testimonials = [
  {
    body: 'Super Sortiment, faire Preise',
    author: {
      name: '__Durri',
      handle: 'Vor 2 Tagen',
      imageUrl:
        '',
    },
  },
  {
    body: 'Sehr gutes Antiquitätengeschäft.',
    author: {
      name: 'M O',
      handle: 'vor 2 Wochen',
      imageUrl:
        '',
    },
  },
  {
    body: 'Herr Kral ist sehr freundlich und kompetent. Einfach zum Weiterempfehlen. Super   danke Markus.',
    author: {
      name: 'Denise Bauer',
      handle: 'Vor einem Jahr',
      imageUrl:
        '',
    },
  },
  {
    body: 'Super netter Händler mit fairen Preisen. Kann ich nur weiterempfehlen. Gerne wieder.',
    author: {
      name: 'Robert Wurm',
      handle: 'Vor 2 Jahren',
      imageUrl:
        '',
    },
  },
  {
    body: 'Großartiges Angebot an Antiquitäten zu absolut fairen Preisen.  Kaufe sehr gerne bei Markus Kral!',
    author: {
      name: 'Monika Stieblo',
      handle: 'Vor 3 Wochen',
      imageUrl:
        '',
    },
  },
  {
    body: ' Bin sehr zufrieden mit meinem Gemälde das ich gekauft habe und genauso zufrieden mit den netten Händlern.  Nur zum weiterempfehlen !',
    author: {
      name: 'Aydin Sarcevic',
      handle: 'Vor 1 Monat',
      imageUrl:
        '',
    },
  },
  {
    body: ' Top antiquitäten ! Empfehlenswert . Top preise',
    author: {
      name: 'Amin Nawraz',
      handle: 'Vor 1 Monat',
      imageUrl:
        '',
    },
  },
  // More testimonials...
]



export default function Home() {
  useEffect(() => {
    AOS.init({
      // hier kannst du Einstellungen vornehmen (optional)
      duration: 1000, // Dauer der Animationen in Millisekunden
    });
  }, []);
  return (
    <>
    
      <div className="relative isolate">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0}  fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[10/10] w-[50.0625rem] bg-gradient-to-tr from-[#ffff] to-[#fff] opacity-10"
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>

          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-28">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl" data-aos="fade-right">
                <h1 className={`mx-auto max-w-4xl   mb-8 font-display ${inter.className} font-medium tracking-tight text-slate-900  lg:text-6xl  md:text-[50px]  sm:text-[41px] text-[41px]`}>
                ANTIQUITÄTEN <br></br><span className={`relative text-red-500    ${tub.className} lg:text-7xl md:text-6xl  sm:text-5xl text-5xl  font-extralight tracking-tight`}>MARKUS KRAL </span> </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                  Stöbern Sie in unseren einzigartigen Sammlungen von Antiquitäten aus verschiedenen Epochen und Stilen.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="/schauraum"
                      title="Markus Kral Antiquitaeten | Schauraum "
                      className="rounded-md bg-red-600 px-6 py-5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 tracking-widest  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      ZU DEN ANTIQUITÄTEN
                    </a>
                    
                  </div>
                </div>
                <a href="/schauraum"  title="Markus Kral | Schauraum">
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto 2xl:w-44 xl:w-44 lg:w-44  md:w-44 sm:w-44  w-36 flex-none space-y-8 pt-32  sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80 ">
              
                    <div className="relative" data-aos="flip-left"  data-aos-easing="ease-out-cubic"   data-aos-duration="2000">
                      <Image
                        src={AQ_1}
                        alt="Markus Kral Antiquitäten | Schmuckstück "
                        className="aspect-[2/3] w-full rounded-xl bg-neutral-50  object-fit p-5 shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto 2xl:w-44 xl:w-44 lg:w-44  md:w-44 sm:w-44  w-36 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                      <Image
                       src={AQ_6}
                       alt="Markus Kral Antiquitäten | Schmuckstück "
                        className="aspect-[2/3] w-full rounded-xl bg-neutral-100 object-fit p-3 shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative" data-aos="flip-left"  data-aos-easing="ease-out-cubic"    data-aos-duration="2000">
                      <Image
                        src={AQ_8}
                        alt="Markus Kral Antiquitäten | Schmuckstück "
                        className="aspect-[2/3] w-full rounded-xl  bg-neutral-100 object-fit p-0 shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className=" 2xl:w-44 xl:w-44 lg:w-44  md:w-44 sm:w-44 w-36 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative" data-aos="flip-left"  data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                      <Image
                        src={AQ_7}
                        alt="Markus Kral Antiquitäten | Schmuckstück "
                        className="aspect-[2/3] w-full rounded-xl  bg-neutral-100 object-fit p-2 shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative" data-aos="flip-left"  data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                      <Image
                         src={AQ_4}
                         alt="Markus Kral Antiquitäten | Schmuckstück "
                        className="aspect-[2/3] w-full rounded-xl  bg-neutral-100 object-fit  p-2 shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>
     

       
 
    

      <section className=''>
      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
             
               <Image
                        src={MarkusKral}
                        alt="Markus Kral Antiquitäten | Markus Kral"
                        className="absolute inset-0 h-full w-full object-cover "
                      />
              <div className="absolute inset-0 bg-gray-50 mix-blend-multiply" />
              <div
                className="absolute  transform-gpu blur-7xl"
                aria-hidden="true"
              >
                <div
                  className="aspect-[100/100] w-[68.5625rem] bg-gradient-to-tr from-[#363532] to-[#363532] opacity-50"
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                />
              </div>
              <figure className="relative isolate">
                
                <blockquote className="mt-6 text-xl font-semibold leading-8 text-white h-72">
                
                </blockquote>
               
              </figure>

              
            </div>
            <figcaption className="mt-6 text-base leading-6 text-black-300">
                  <strong className="font-bold  text-black">Markus Kral,</strong> Geschäftsführer
                </figcaption>
          </div>
          
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-red-600">MARKUS KRAL ANTIQUIÄTEN</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Leidenschaft für Antiquitäten und Expertise
              </h2>
              <div className="max-w-xl text-lg">
                <p className="mt-6">
                Als Inhaber und leidenschaftlicher Antiquitätenliebhaber, 
                bin ich stolz darauf, unser Antiquitätengeschäft in Hörsching zu führen. 
                In meiner langjährigen Karriere als Antiquitätenhändler habe ich eine tiefe Wertschätzung für Objekte entwickelt, die sowohl historischen als auch kulturellen Wert besitzen. 
               
                </p>
           
              
                <p className="mt-8">
                   
                    Ich freue mich darauf, Sie in unserem Geschäft willkommen zu heißen und Ihnen die faszinierende Welt der Antiquitäten näherzubringen.
                  </p>
                  
              </div>
              <div className="mt-8 flex items-center gap-4">
                  <div className="flex-none">
                    <Image
                      src={Bares}
                      alt="Markus Kral Antiquitäten | Zu Bares für Rares"
                      className="aspect-[5/5] w-[10rem] max-w-none rounded-3xl p-5 object-fit"
                      
                    />
                 </div>
                <p className="flex-grow"> Seit 2019 bin ich Teil der österreichischen Show 'Bares für Rares'  und darf meine Begeisterung für Antiquitäten mit einem breiteren Publikum  teilen. </p> 
                </div>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
             
             
            
            </dl>
          
          </div>
        </div>
      </div>
    </div>
      </section>
      <section> 



<div className="bg-red-800 py-24 sm:py-12">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 className="text-center text-lg font-semibold leading-8 text-white">
      Unsere Antiquitaeten finden Sie auch hier!
    </h2>
    <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
     <a   title="Markus Kral | Zu Ebay"  href="https://www.ebay.at/str/antikesmarkuskral"> 
      <Image
    
        className="col-span-2 max-h-20 w-full object-contain lg:col-span-1  tranis transition grayscale hover:grayscale-0 duration-150 hover:duration-150 ease-in-out"
        src={logoEbay}
        alt="Markus Kral Antiquitäten | Zu Ebay"
    
      />
      </a>
      <a   title="Markus Kral | Zu Willhaben" href="https://www.willhaben.at/iad/kaufen-und-verkaufen/webshop/marktplatz?orgId=26755305"> 
      <Image
    
        className="col-span-2 max-h-20 w-full object-contain lg:col-span-1 grayscale hover:grayscale-0 duration-150 hover:duration-150 ease-in-out"
        src={logoWillhaben}
        alt="Markus Kral Antiquitäten | Zu Willhaben"

     
      />
      </a>
      <a   title="Markus Kral | Zu Proantic"  href="https://www.proantic.com/en/galerie/antiquitaten-markus-kral/"> 
      <Image
    
        className="col-span-2 max-h-20 w-full object-contain lg:col-span-1 grayscale hover:grayscale-0 duration-150 hover:duration-150 ease-in-out"
        src={logoPorc}
        alt="Markus Kral Antiquitäten | Zu Proantic"
   
      />
      </a>
     
    </div>
  </div>
</div>

</section>

      <section> 
      <div className="overflow-hidden bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Willkommen in unserer Welt der Antiquitäten</h3>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            <strong>   Seit 1988 </strong> sind wir stolz darauf, eine breite Palette von    <strong>    Antiquitäten </strong> anzubieten, die von Möbeln aus verschiedenen Stilepochen bis hin zu antiken Kachelöfen, Bildern, Lampen, Uhren und Kleinkunst reicht. 
            
            
            
            </p>
            <p className="mt-6 text-lg leading-7 text-gray-600">
            Mit einer  Ausstellungsfläche von   <strong>  2000 Quadratmetern </strong>  bieten wir
             unseren Kunden ein inspirierendes Erlebnis, bei dem sie echte Schätze entdecken können.

            </p>
           
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                src={Aussen}
                alt="Markus Kral Antiquitäten | Aussenbereich"
                className="aspect-[8/5] w-[37rem] max-w-none rounded-3xl bg-white object-cover "
              />
            </div>
            <div className=" contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
            
              <div className="hidden lg:block order-first flex w-64 flex-none justify-end lg:w-auto">
                <Image
                  src={SchrankWV}
                  alt="Markus Kral Antiquitäten | Schrank"
                  className="aspect-[9/7] w-[23rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  src={InnenRaum1}
                  alt="Markus Kral Antiquitäten | Innenbereich"
                  className="aspect-[8/7] w-[27rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  src={WV}
                  alt="Markus Kral Antiquitäten | VW Bus"
                  className="aspect-[6/7] w-[23rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


      </section>
      <section>
    

    <div className="bg-neutral-100 py-24 sm:py-32">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-black/50 px-6 py-16  ring-red-600 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <Image
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              src={Aussen}
              alt="Markus Kral Antiquitäten | Aussenbereich"
            />
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl uppercase">Kontaktieren Sie uns!</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
              Kontaktieren Sie uns jetzt, um unsere Antiquitäten genauer zu erkunden oder um eine Begutachtung in Anspruch zu nehmen. Wir freuen uns darauf, Sie bei uns willkommen zu heißen!

              </p>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
              >
              
              </ul>
              <div className="mt-10 flex">
              <a
              title="Markus Kral | Kontaktforumlar"
              href="/kontakt"
              className="rounded-md bg-red-600 text-white tracking-widest uppercase px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
                 Zum Kontaktformular
            </a>
            <a href="tel:+43664 2418949" className="text-sm font-semibold leading-6 text-white"        title="Markus Kral | Anrufen">
            <dt className="flex-none m-2">
                  
                <PhoneIcon className="h-7 w-6 text-red-600" aria-hidden="true" />
              </dt>
            </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>
      </div>
    </div>
      </section>
      <section>

      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-red-600">UNSERE ZUFRIEDENEN KUNDEN</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Was unsere Kunden sagen.
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-gray-50 p-8 text-lg leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                   <UserCircleIcon className="w-10 h-10"/>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                     
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-12 ">

              <a target="_blank" title="Markus Kral | Rezensionen" href="https://www.google.com/search?kgmid=/g/1tdl0crq&hl=de-AT&q=Antiquit%C3%A4ten+Markus+Kral&kgs=25be8bd4b11ac65a&shndl=17&shem=losc&source=sh/x/kp/osrp/m5/1#lrd=0x477393879ab0ff0b:0xddd6923ad06b9be5,3,,,," className="bg-red-600 px-4 py-2 text-white rounded-md ">

                Weitere Rezensionen ansehen
              </a>
              </div>
      </div>

    
    </div>

        
      </section>
    </>
  )
}