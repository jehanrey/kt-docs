import { twMerge } from 'tailwind-merge'

type Condition = null | undefined | boolean | (() => boolean)
type ClassTuple = [string, Condition]

const parseClassNames = (...args: Array<undefined | string | ClassTuple>) => {
  const parsed = args
    .map((block) => {
      if (typeof block === 'undefined') return false
      if (typeof block === 'string') return block
      const [className, condition] = block
      if (typeof condition === 'function' ? condition() : condition)
        return className
      return false
    })
    .filter(Boolean)
  return twMerge(parsed.join(' '))
}

export { parseClassNames }
