export const categories = ['core', 'example'] as const

export type Category = (typeof categories)[number]

export const config: Record<Category, string> = {
  core: 'Authentication',
  example: 'Examples',
}
