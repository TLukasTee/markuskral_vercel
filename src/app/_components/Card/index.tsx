'use client'

import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'

import { Product } from '../../../payload/payload-types'
import { Media } from '../Media'
import { Price } from '../Price'

import classes from './index.module.scss'

const priceFromJSON = (priceJSON): string => {
  let price = ''

  if (priceJSON) {
    try {
      const parsed = JSON.parse(priceJSON)?.data[0]
      const priceValue = parsed.unit_amount
      const priceType = parsed.type
      price = `${parsed.currency === 'usd' ? '$' : ''}${(priceValue / 100).toFixed(2)}`
      if (priceType === 'recurring') {
        price += `/${
          parsed.recurring.interval_count > 1
            ? `${parsed.recurring.interval_count} ${parsed.recurring.interval}`
            : parsed.recurring.interval
        }`
      }
    } catch (e) {
      console.error(`Cannot parse priceJSON`) // eslint-disable-line no-console
    }
  }

  return price
}
const SkeletonLoader = () => (
  <div className="animate-pulse">
    <div className="bg-gray-300 h-72 w-full rounded-2xl"></div>
    <div className="mt-4 space-y-3">
      <div className="h-4 bg-gray-300 rounded"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
    </div>
  </div>
)

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  showCategories?: boolean
  hideImagesOnMobile?: boolean
  title?: string
  relationTo?: 'products'
  doc?: Product
}> = props => {
  const {
    showCategories,
    title: titleFromProps,
    doc,
    doc: { slug, title, categories, meta, priceJSON } = {},
    className,
  } = props

  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/products/${slug}`

  const [
    price, // eslint-disable-line no-unused-vars
    setPrice,
  ] = useState(() => priceFromJSON(priceJSON))

  useEffect(() => {
    setPrice(priceFromJSON(priceJSON))
  }, [priceJSON])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // Hier simulieren wir das Laden der Daten
    const timer = setTimeout(() => setLoading(false), 2000) // 2 Sekunden Ladezeit
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <SkeletonLoader />
  }
  return (
    <div key="{product.id}">
      <div className="relative">
        <div className="relative h-72 w-full overflow-hidden rounded-lg">
          <div className={classes.mediaWrapper}>
            {!metaImage && <div className={classes.placeholder}>Kein Bild verfügbar</div>}
            {metaImage && typeof metaImage !== 'string' && (
              <Media imgClassName={classes.image} resource={metaImage} fill />
            )}
          </div>
        </div>
        <div className="relative mt-4">
          <div className="text-sm font-medium text-gray-900">
            {titleToUse && (
              <h3 className={classes.title}>
                <Link href={href} className={classes.titleLink}>
                  {titleToUse}
                </Link>
              </h3>
            )}
          </div>
          {description && (
            <p className={`mt-1 text-sm text-gray-500 ${classes.description}`}>
              {sanitizedDescription}
            </p>
          )}
        </div>
        <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-0"
          />
        </div>
      </div>
      <div className="mt-6">
        <a
          href={href}
          className="relative flex items-center justify-center rounded-md border border-transparent bg-red-600 text-white px-8 py-2 text-sm font-bold  hover:bg-red-500"
        >
          Objekt betrachten <span className="sr-only"> </span>
        </a>
      </div>
    </div>
  )
}
