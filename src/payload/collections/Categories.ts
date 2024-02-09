import type { CollectionConfig } from 'payload/types'

const Categories: CollectionConfig = {
  slug: 'categories',
  labels: {
    singular: 'Kategorien',
    plural: 'Kategorien',
  },
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,

  },
  fields: [
    {
     
      name: 'title',
      label: 'Kategorienname',
      type: 'text',
    },
  ],
}

export default Categories
