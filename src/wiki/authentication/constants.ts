export const categories = ['core', 'example'] as const

export type Category = (typeof categories)[number]

export const categoryDisplay: Record<Category, string> = {
  core: 'Authentication',
  example: 'Examples',
}
