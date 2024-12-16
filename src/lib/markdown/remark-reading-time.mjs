import { toString } from 'mdast-util-to-string'
import getReadingTime from 'reading-time'

export function remarkReadingTime() {
  return function (tree, file) {
    const textOnPage = toString(tree)
    const readingTime = getReadingTime(textOnPage, { wordsPerMinute: 130 })
    file.data.astro.frontmatter.minutesRead = readingTime.text
  }
}
