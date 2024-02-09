import React, { Fragment } from 'react'
import Link from 'next/link'

import { Product } from '../../../payload/payload-types'
import { AddToCartButton } from '../../_components/AddToCartButton'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'
import { Message } from '../../_components/Message'
import { Price } from '../../_components/Price'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

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
            <a href="/kontakt"> 
             <button
               type="button"
               className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
             >
               Anfragen

             </button>
</a>

           </div>



         </div>


       </div>
     </div>
   </div>
   </Fragment>
  )
}
