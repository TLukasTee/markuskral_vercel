'use client'
import { BookOpenIcon, CurrencyEuroIcon, MagnifyingGlassIcon, ScaleIcon } from '@heroicons/react/24/outline';

import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { Montserrat, Playfair } from "next/font/google";
import { useState } from 'react';


const inter = Montserrat({  weight: '400',
subsets: ['latin'], });

const tub = Playfair({  weight: ['400', '500', '600', '700'],
subsets: ['latin'], });

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
const handleFormSubmit = async (event) => {
  event.preventDefault();

  // Extract form data: 
  const formData = new FormData(event.target);
  const formObject = Object.fromEntries(formData.entries());

  // Send the data to your API route
  try {
    const response = await fetch('/api/sendResendMail', { // Adjust route name if needed
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(formObject)
    });

    if (response.ok) {
      // Success message
      console.log('Email sent successfully!'); 
    } else {
      // Error handling
      console.error('Error sending email:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
export default async function kontakt() {
  return (
    <div className="relative isolate bg-white mt-24">
    <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
            <svg
              className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                  width={200}
                  height={200}
                  x="100%"
                  y={-1}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M130 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" strokeWidth={0} fill="white" />
              <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
              </svg>
              <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
            </svg>
          </div>
          <h2 className={`${tub.className} text-6xl font-bold tracking-tight text-gray-900`}>Kontaktieren Sie uns</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Wir freuen uns darauf, von Ihnen zu hören. Bitte füllen Sie das folgende Formular aus, um uns Ihre Fragen, Anliegen oder Feedback mitzuteilen. Unser Team steht Ihnen gerne zur Verfügung.
          </p>
          <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Address</span>
                <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd>
              Margaritenstr. 1, 
                <br />
                4063 Hörsching
              </dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Telephone</span>
                <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd>
                <a className="hover:text-gray-900" href="tel:+43664 2418949">
                  +43 664 2418949
                </a>
              </dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Email</span>
                <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
              </dt>
              <dd>
                <a className="hover:text-gray-900" href="mailto:anfrage@antiquitaeten-kral.at">
                anfrage@antiquitaeten-kral.at
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div> 
      
              <form
           onSubmit={handleFormSubmit}
        >
          <label>

            <input type="email" name="email"/>
          </label>
          <label>
            Your message:
            <textarea name="message"></textarea>
          </label>

          <button type="submit">Send</button>
        </form>
            
    </div>
  </div>
  )
}
