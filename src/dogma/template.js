import {isCharWhitespace} from '../utils/string'

const {isArray} = Array

/**
 * Determine if currentToken or other remaining tokens contain any
 * non-whitespace characters.
 * @param {String} currentToken - current token being parsed
 * @param {Number} start - index of where to resume parsing current token
 * @param {Array<Any>} tokens - remaining tokens to parse
 * @returns {Boolean} whether or not non-whitespace characters remain
 */
function containsNonWhitesapce ({currentToken, start, tokens}) {
  const pattern = /^\s*$/
  const isRemainingAllWhitespace = pattern.test(currentToken.slice(start))
  const doOtherTokensContainNonWhitespace = tokens
    .some((token) => typeof(token) !== 'string' || !pattern.test(token))

  return !isRemainingAllWhitespace || doOtherTokensContainNonWhitespace
}

/**
 * Insert processed substitution expressions into string literals from template
 * literal to have a single array of all pieces in the order they occur in the
 * template literal.
 * @param {Array<String>} strings - string literals from template literal
 * @param {Array<Any>} values - processed substitution expressions
 * @returns {Array<Any>} string literals with substitutions inserted
 */
function flattenTemplateLiteralArguments (strings, values) {
  if (!isArray(strings)) {
    throw new Error('t() should be called with a template literal')
  }

  const stringsWithValuesInserted = Array.from(strings)

  for (let i = values.length - 1; i !== -1; i--) {
    stringsWithValuesInserted.splice(i + 1, 0, values[i])
  }

  return stringsWithValuesInserted
}

/**
 * Jump to the first non-whitespace character when evaluating the string
 * literals and processed substitution evaluations of a template literal.
 * @param {Array<Any>} tokens - string literals with substitutions inserted
 * @returns {Object} token and index for first non-whitespace character
 */
function jumpToFirstNonWhitespaceChar (tokens) {
  let currentToken = tokens.splice(0, 1)[0]
  let start = 0

  while (currentToken.length > start && isCharWhitespace(currentToken[start])) {
    start += 1

    if (start === currentToken.length) {
      currentToken = tokens.splice(0, 1)[0]

      if (typeof currentToken !== 'string') {
        throw new Error(
          "Template literal shouldn't have a substitution that evaluates to a" +
          "type other than string before it's first opening element tag"
        )
      }
    }
  }

  return {
    currentToken,
    start
  }
}

function parseChildNodes ({currentToken, tokens, start}) {
  const childNodes = []

  // When no children and parent is actually just being closed
  if (currentToken[start] === '<' && currentToken[start + 1] === '/') {
    return {
      childNodes,
      end: start + 2
    }
  }

  // TODO: parse children
}

function parseElement ({allowSiblings, currentToken, start, tokens}) {
  const element = {
    localName: ''
  }

  // Get tag name (i.e. get "foo-bar" from <foo-bar baz="test">)
  while (
    !isCharWhitespace(currentToken[start]) &&
    currentToken[start] !== '>' &&
    currentToken[start] !== '/'
  ) {
    element.localName += currentToken[start]
    start += 1
  }

  // TODO: process whitespace

  // If element tag is inline (i.e. <foo-bar/> instead of <foo-bar></foo-bar>)
  if (currentToken[start] === '/') {
    if (currentToken[start + 1] !== '>') {
      throw new Error(`Missing > on closing tag "${element.localName}"`)
    }

    if (allowSiblings === false) {
      if (containsNonWhitesapce({currentToken, tokens, start: start + 2})) {
        throw new Error(
          `Element "${element.localName}" is not allowed to have any siblings`
        )
      }

      return element
    }
  }

  // If element tag is not inline (i.e. <foo></foo> instead of <foo/>)
  if (currentToken[start] === '>') {
    start += 1

    const {childNodes, end} = parseChildNodes({currentToken, tokens, start})

    const actualClosingTag = currentToken.slice(
      start,
      start + element.localName.length + 3
    )

    const expectedClosingTag = `</${element.localName}>`

    if (actualClosingTag !== expectedClosingTag) {
      throw new Error(
        `Expected "${actualClosingTag}" to be "${expectedClosingTag}"`
      )
    }

    start += expectedClosingTag.length

    if (allowSiblings === false) {
      if (containsNonWhitesapce({currentToken, tokens, start})) {
        throw new Error(
          `Element "${element.localName}" is not allowed to have any siblings`
        )
      }

      return element
    }
  }

  // TODO: decide what to do next
}

/**
 * Validate that first non-whitespace character is a "<" as we expect a template
 * to begin with an element.
 * @param {String} currentToken - first token that isn't all whitespace
 * @param {Number} start - index of 1st non-whitespace character in currentToken
 */
function validateFirstNonWhitespaceChar (currentToken, start) {
  if (currentToken === undefined) {
    throw new Error('Template literal must contain a root element')
  }

  if (currentToken[start] !== '<') {
    throw new Error(
      'Template literal should begin with an element (leading whitespace is ' +
      'allowed)'
    )
  }
}

/**
 * Validate tokens from flattened template literal arguments.
 * @param {Array<Any>} tokens - string literals with substitutions inserted
 */
function validateFlattenedTemplateLiteralArguments (tokens) {
  if (tokens.length === 0) {
    throw new Error('Call to t() should pass at least one token')
  }

  if (typeof tokens[0] !== 'string') {
    throw new Error('Template should begin with a string')
  }
}

/**
 * Process template literal into a virtual DOM
 * @param {Array<String>} strings - string literals from template literal
 * @param {Array<Any>} values - processed substitution expressions
 * @returns {Object} virtual DOM representation of template literal
 */
export default function (strings, ...values) {
  const tokens = flattenTemplateLiteralArguments(strings, values)
  validateFlattenedTemplateLiteralArguments(tokens)

  const {currentToken, start} = jumpToFirstNonWhitespaceChar(tokens)
  validateFirstNonWhitespaceChar(currentToken, start)

  return parseElement({
    allowSiblings: false,
    currentToken,
    start: start + 1,
    tokens
  })
}
