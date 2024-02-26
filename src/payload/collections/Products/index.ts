import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { Archive } from '../../blocks/ArchiveBlock'
import { CallToAction } from '../../blocks/CallToAction'
import { Content } from '../../blocks/Content'
import { MediaBlock } from '../../blocks/MediaBlock'
import { slugField } from '../../fields/slug'
import { populateArchiveBlock } from '../../hooks/populateArchiveBlock'
import { checkUserPurchases } from './access/checkUserPurchases'
import { beforeProductChange } from './hooks/beforeChange'
import { deleteProductFromCarts } from './hooks/deleteProductFromCarts'
import { revalidateProduct } from './hooks/revalidateProduct'
import { ProductSelect } from './ui/ProductSelect'

const Products: CollectionConfig = {
  slug: 'products',
  
  labels: {
    singular: 'Antiquität',
    plural: 'Antiquitäten',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'stripeProductID', '_status'],
    preview: doc => {
      return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/preview?url=${encodeURIComponent(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/products/${doc.slug}`,
      )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
    },
  },
  hooks: {
    beforeChange: [beforeProductChange],
    afterChange: [revalidateProduct],
    afterRead: [populateArchiveBlock],
  },
  versions: {
    drafts: true,
    maxPerDoc: 5,

  },
  access: {
    read: () => true,
    create: admins,
    update: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'title',
      label: 'Name der Antiquität',
      type: 'text',
      required: true,
      
    },
    {
      name: 'categories',
      type: 'relationship',
      label: 'Kategorien',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'relatedProducts',
      label: 'Ähnliche Objekte: ( z.B.: "Weiteres Gemälde von Albrecht Dürer" )',
      type: 'relationship',
      relationTo: 'products',
      hidden: true,
      hasMany: true,
      filterOptions: ({ id }) => {
        return {
          id: {
            not_in: [id],
          },
        }
      },
    },
    {
              
      name: 'layout',
      type: 'blocks',
      hidden: true,
      required: false,
      blocks: [CallToAction, Content, MediaBlock, Archive],
    },
    {
      name: 'publishedOn',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      
      hooks: {
       
      },
    },
    {
      type: 'tabs',
      hidden: true,
      tabs: [
        
        {
          label: 'Product Details',
          hidden: true,
          fields: [
            {
              name: 'stripeProductID',
              label: 'Stripe Product',
              type: 'text',
              hidden: true,
              admin: {
                hidden: true,
                components: {
                  Field: ProductSelect,
                  
                },
              },
            },
            {
              name: 'priceJSON',
              label: 'Price JSON',
              type: 'textarea',
              admin: {
                readOnly: true,
                hidden: true,
                rows: 10,
              },
            },
            {
              name: 'enablePaywall',
              label: 'Enable Paywall',
              type: 'checkbox',
              hidden: true,
            },
            {
              name: 'paywall',
              label: 'Paywall',
              type: 'blocks',
              hidden: true,
              access: {
                read: checkUserPurchases,
              },
              blocks: [CallToAction, Content, MediaBlock, Archive],
            },
          ],
        },
      ],
    },
 
    
    slugField(),
    {
      name: 'skipSync',
      label: 'Skip Sync',
      type: 'checkbox',
      admin: {
        position: 'sidebar',
        readOnly: true,
        hidden: true,
      },
    },
  ],
}

export default Products
