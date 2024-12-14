import { getCollection } from 'astro:content'

import { categories } from '@/wiki/authentication/constants'

import { groupBy } from './groupBy'

export const getCategorizedAuthCollection = async () => {
  const sortedAuthCollection = (await getCollection('authentication')).sort(
    (a, b) => {
      const categoryIndex = (category: string) =>
        categories.findIndex((c) => c === category)
      if (categoryIndex(a.data.category) > categoryIndex(b.data.category))
        return 1
      if (categoryIndex(b.data.category) > categoryIndex(a.data.category))
        return -1
      return a.data.order - b.data.order
    },
  )
  return groupBy(
    sortedAuthCollection.map(({ id, data }) => ({ id, ...data })),
    'category',
  )
}
