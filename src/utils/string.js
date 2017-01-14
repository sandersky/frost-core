export const WHITESPACE_CHARS = [' ', '\n', '\t']

export function isCharWhitespace (char) {
  return WHITESPACE_CHARS.indexOf(char) !== -1
}

/**
 * Trim superfluous leading whitespace from text so all content is shifted to
 * left edge when renderered in a <pre> tag. Essentially the same thing as
 * pressing Shift + Tab multiple times in a modern text editor to get the
 * content next to the left gutter.
 * @param {String} text - text to trim
 * @returns {String} trimmed text
 */
export function trimSuperfluousLeadingWhitespace (text) {
  const lines = text.split('\n')

  const trimCount = lines
    .map((line) => line.match(/(\s+)[^\s]/)) // Find leading whitespace
    .filter((matches) => matches !== null) // Filter out lines w/o leading whitepsace
    .map((matches) => matches[1]) // Get leading whitespace (ignoring 1st non whitespace character)
    .map((leadingWhitespace) => leadingWhitespace.length) // Get count of leading whitespace chars
    .reduce((a, b) => Math.min(a, b), Infinity) // Get superfluous leading whitespace count

  return lines
    .map((line) => line.substring(trimCount)) // Remove superfluous leading whitespace from every line
    .join('\n').trim()
}
