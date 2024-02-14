import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'Markus Kral Antiquitaeten',
  title: 'Markus Kral Antiquitaeten',
  description: 'Stöbern Sie in unseren einzigartigen Sammlungen von Antiquitäten.',
  url: 'https://www.antiquitaeten-kral.at/',
  images: [
    {
      url: 'https://antiquitaeten-kral.at/_next/static/media/Aussen.e9b10188.svg',
    },
  ],
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
