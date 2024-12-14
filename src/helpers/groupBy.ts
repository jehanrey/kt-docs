export const groupBy = <T extends Record<string, unknown>>(
  arr: Array<T>,
  key: keyof T,
) => {
  const keys = new Set<string | number | symbol>()
  return arr.reduce(
    (acc, curr) => {
      const currentKey = curr[key] as string | number | symbol
      if (!keys.has(currentKey)) {
        keys.add(currentKey)
        return {
          ...acc,
          [currentKey]: [curr],
        }
      }
      return {
        ...acc,
        [currentKey]: [...acc[currentKey], curr],
      }
    },
    {} as Record<string | number | symbol, Array<T>>,
  )
}
