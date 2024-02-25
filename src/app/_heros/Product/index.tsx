'use client'
import React, { Fragment, useState  } from 'react'
import Link from 'next/link'

import { Product } from '../../../payload/payload-types'
import { AddToCartButton } from '../../_components/AddToCartButton'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'
import { Message } from '../../_components/Message'
import { Price } from '../../_components/Price'
import RichText from '../../_components/RichText'
import { Montserrat, Playfair } from "next/font/google";
import classes from './index.module.scss'


const inter = Montserrat({
  weight: '400',
  subsets: ['latin'], 
});

const tub = Playfair({  weight: '400',
subsets: ['latin'], });
export const ProductHero: React.FC<{
  product: Product
}> = ({ product }) => {
  const {
    id,
    stripeProductID,
    title,
    categories,
    meta: { image: metaImage, description } = {},
  } = product
  const [isSideoverOpen, setIsSideoverOpen] = useState(false);

  // Funktion, um das Sideover zu öffnen
  const handleOpenSideover = () => {
    setIsSideoverOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Funktion, um das Sideover zu schließen
  const handleCloseSideover = () => {
    setIsSideoverOpen(false);
    document.body.style.overflow = 'visible';
  };

  const phoneInput = document.getElementById('phone');
if (phoneInput) {
  (phoneInput as HTMLInputElement).addEventListener('input', function(e) {
    const target = e.target as HTMLInputElement;

    var value = target.value;
    var pattern = /\+(49|43|41)\s?[1-9][0-9\s\-]{5,}/; // Beispiel für ein deutsches Telefonnummernformat
  
    if (!pattern.test(value)) {
      target.setCustomValidity("Bitte eine gültige deutsche Telefonnummer eingeben. Beispiel: +49 123 456789");
    } else {
      target.setCustomValidity("");
    }
  });
} else {
  console.error('Das Element mit der ID "phone" wurde nicht gefunden.');
}


  return (

    
  
    <Fragment>

    <div className="bg-white">
     <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
       {/* Product */}
       <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
         {/* Product image */}
         <div className="lg:col-span-4 lg:row-end-1">
           <div className="aspect-auto overflow-hidden rounded-lg bg-gray-50">

               <div className={classes.mediaWrapper}>
                 {!metaImage && <div className={classes.placeholder}>Kein Bild verfügbar</div>}
                 {metaImage && typeof metaImage !== 'string' && (
                   <Media imgClassName={classes.image} resource={metaImage} fill />
                 )}
               </div>


           </div>
         </div>

         {/* Product details */}
         <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
           <div className="flex flex-col-reverse">
             <div className="mt-4">
             <div >
                 {categories?.map((category, index) => {
                   if (typeof category === 'object' && category !== null) {
                     const { title: categoryTitle } = category

                     const titleToUse = categoryTitle || 'Untitled category'

                     const isLast = index === categories.length - 1

                     return (
                       <Fragment key={index}>
                         {titleToUse}
                         {!isLast && <Fragment>, &nbsp;</Fragment>}
                       </Fragment>
                     )
                   }

                   return null
                 })}
               </div>
               <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mt-2"> {title}</h1>


             </div>

             <div>
               <h3 className="sr-only">Reviews</h3>

               <p className="sr-only">2 out of 5 stars</p>
             </div>
           </div>

           <p className={classes.description}>
             {`${description ? `${description} ` : ''}`}

           </p>



           <div className="text-xl tracking-tight text-gray-900 hidden"> <Price product={product} button={false} /></div>


           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
          <button
            type="button"
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            onClick={handleOpenSideover}
          >
            Anfragen
          </button>
        </div>



         </div>


       </div>
     </div>
     {isSideoverOpen && (
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              {/* Hintergrundoverlay */}
              <div
                className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                onClick={handleCloseSideover}
              ></div>
              
              {/* Panel */}
              <section className="absolute inset-y-0  max-w-full flex">
           
                <div className="w-screen max-w-full">
                  <div className="h-full flex flex-col bg-gray-100 shadow-xl overflow-y-scroll">
                    <div className="px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-end">
                    
                       
                       
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            onClick={handleCloseSideover}
                            className="bg-white rounded-md text-gray-400 hover:text-gray-500 px-4 py-2 hover:bg-red-500 hover:text-white"
                          >
                         
                            {/* Hier Icon für Schließen einfügen oder Text verwenden */}
                            Bestellung abrechen
                          </button>
                        </div>
                      </div>
                      <div className='flex justify-center'>
                        <h1 className={`   mb-8 font-display ${inter.className} font-medium tracking-tight text-slate-900  lg:text-4xl  md:text-[20px]  sm:text-[41px] text-[41px]`}>
                        ANTIQUITÄTEN <br></br><span className={`relative text-red-500    ${tub.className} lg:text-[42px] md:text-4xl  sm:text-5xl text-5xl  font-extralight tracking-tight`}>MARKUS KRAL </span> </h1>
                                  
                           </div>
                           <h2 className="flex justify-center text-lg">
                          Bestellanfrage für das Objekt <strong className='mx-1'>  {product.title}   </strong>
                        </h2>
                        
                       
                        <div className="bg-gray-100">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Checkout</h2>

        <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16" action="https://submit-form.com/Ohy4WxhUq">
        <input type="hidden" name="_email.from" value="Markus Kral Antqiuitäten | Neue Bestellanfrage" />
        <input type="hidden" name="_email.subject" value="Neue Bestellanfrage!" />

        <input
          type="hidden"
          name="_redirect"
          value="https://antiquitaeten-kral.at/bestellbestaetigung"
        />
          <div>
            <div>
              <h2 className="text-xl font-medium text-gray-900">Kontakt Information</h2>

              <div className="mt-4">
                <label htmlFor="email-address" className="block text-base font-medium  text-gray-700">
                  Email 
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email-address"
                    name="email-address"
                    autoComplete="email"
                    className="block w-full rounded-md py-2 px-3 lg:text-base border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                  />
                </div>
              </div>
            </div>

            <input  
            
                    type="hidden"
                    id="email-address"
                    name="product-type"
                    autoComplete="email"
                    className="block w-full rounded-md py-2 px-3 lg:text-base border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    value={product.title}
                    required
                  />
            <div className="mt-10 border-t border-gray-200 pt-10">
              <h2 className="text-lg font-medium text-gray-900">Adresse</h2>

              <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <label htmlFor="first-name" className="block text-base font-medium text-gray-700">
                    Vorname
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md py-2 px-3 lg:text-base border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
              />
                  </div>
                </div>

                <div>
                  <label htmlFor="last-name" className="block text-base font-medium text-gray-700">
                    Nachname
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md py-2 px-3 lg:text-base border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                      />
                  </div>
                </div>

              
                <div className="sm:col-span-2">
                  <label htmlFor="address" className="block text-base font-medium text-gray-700">
                    Straße
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="address"
                      id="address"
                      autoComplete="street-address"
                      className="block w-full rounded-md py-2 px-3 lg:text-base border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                  />
                  </div>
                </div>

              

              

                <div>
                  <label htmlFor="country" className="block text-base font-medium text-gray-700">
                    Land
                  </label>
                  <div className="mt-1">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md py-2 px-3 lg:text-base border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                   >
                      <option>Österreich</option>
                      <option>Deutschland</option>
                      <option>Schweiz</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="region" className="block text-base font-medium text-gray-700">
                   Stadt / Ort
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      autoComplete="address-level1"
                      className="block w-full rounded-md py-2 px-3 lg:text-base border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                  />
                  </div>
                </div>

                <div>
                  <label htmlFor="postal-code" className="block text-base font-medium text-gray-700">
                    Postleitzahl
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autoComplete="postal-code"
                      className="block w-full rounded-md py-2 px-3 lg:text-base border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="block text-base font-medium text-gray-700">
                    Telefonnummer
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      pattern="\+(49|43|41)\s?[1-9][0-9\s\-]{5,}" title="Bitte eine gültige Telefonnummer eingeben. Beispiel: +49 123 456789"
                      autoComplete="tel"
                      className="block w-full rounded-md py-2 px-3 lg:text-base border-gray-300  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

         

            {/* Payment */}
          
          </div>

          {/* Order summary */}
          <div className="mt-10 lg:mt-0">
            <h2 className="text-lg font-medium text-gray-900">Zusammenfassung</h2>

            <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="flex justify-between divide-gray-200  bg-gray-50 px-8 py-4">
              
              <div className=" rounded-lg">

          
                          {product.title} 


                          </div>
                          <h4 className="text-lg font-medium text-gray-700 hover:text-gray-800">
                            XY€  
                          </h4>
         
               
              </div>
              

              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <button
                  type="submit"
                  className="w-full rounded-md border border-transparent bg-red-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Anfrage Bestätigen
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
                    
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
   </div>
   </Fragment>
  )
}


/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon, TrashIcon } from '@heroicons/react/20/solid'

const products = [
  {
    id: 1,
    title: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Black',
    size: 'Large',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  // More products...
]
const deliveryMethods = [
  { id: 1, title: 'Standard', turnaround: '4–10 business days', price: '$5.00' },
  { id: 2, title: 'Express', turnaround: '2–5 business days', price: '$16.00' },
]
const paymentMethods = [
  { id: 'credit-card', title: 'Credit card' },
  { id: 'paypal', title: 'PayPal' },
  { id: 'etransfer', title: 'eTransfer' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

