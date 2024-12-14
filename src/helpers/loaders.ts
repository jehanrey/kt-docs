import { getCollection } from 'astro:content'

import { groupBy } from './groupBy'

export const getCategorizedAuthCollection = async () => {
  const sortedAuthCollection = (await getCollection('authentication')).sort(
    (a, b) => {
      return a.data.order - b.data.order
    },
  )
  return groupBy(
    sortedAuthCollection.map(({ id, data }) => ({ id, ...data })),
    'category',
  )
}
