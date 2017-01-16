import {isCharWhitespace} from './utils/string'

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
    .some((token) => typeof token !== 'string' || !pattern.test(token))

  return !isRemainingAllWhitespace || doOtherTokensContainNonWhitespace
}

function endOfCurrentToken ({currentToken, start}) {
  return start === currentToken.length
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

function getNextToken (tokens) {
  return tokens.splice(0, 1)[0]
}

/**
 * Jump to the first non-whitespace character when evaluating the string
 * literals and processed substitution evaluations of a template literal.
 * @param {Array<Any>} tokens - string literals with substitutions inserted
 * @returns {Object} token and index for first non-whitespace character
 */
function jumpToFirstNonWhitespaceChar (tokens) {
  let currentToken = getNextToken(tokens)
  let start = 0

  while (currentToken.length > start && isCharWhitespace(currentToken[start])) {
    start += 1

    if (endOfCurrentToken({currentToken, start})) {
      currentToken = getNextToken(tokens)

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

function moreToParse ({currentToken, start, tokens}) {
  return tokens.length !== 0 || start < currentToken.length
}

function nextCharIsPartOfElementName ({currentToken, start}) {
  return (
    !isCharWhitespace(currentToken[start]) &&
    currentToken[start] !== '>' &&
    currentToken[start] !== '/'
  )
}

function notEndOfElementAttributeName ({currentToken, start}) {
  return (
    notEndOfElementTag({currentToken, start}) &&
    currentToken[start] !== '='
  )
}

function notEndOfElementAttributeValue ({currentToken, start}) {
  return (
    !isCharWhitespace(currentToken[start]) &&
    notEndOfElementTag({currentToken, start})
  )
}

function notEndOfElementTag ({currentToken, start}) {
  return ['/', '>'].indexOf(currentToken[start]) === -1
}

function parseChildNodes ({currentToken, start, tokens}) {
  const childNodes = []

  // While there is still template left to parse
  while (moreToParse({currentToken, start, tokens})) {
    // When entering an open or close element tag
    if (currentToken[start] === '<') {
      // When no children and parent is actually just being closed
      if (currentToken[start + 1] === '/') {
        return {
          childNodes,
          newCurrentToken: currentToken,
          newStart: start
        }
      }

      // When element is a new child element
      const {element, newCurrentToken, newStart} = parseElement({
        currentToken,
        start: start + 1,
        tokens
      })

      childNodes.push(element)

      currentToken = newCurrentToken
      start = newStart
    } else {
      const {newCurrentToken, newStart, textNode} = parseTextNode({
        currentToken,
        start,
        tokens
      })

      childNodes.push(textNode)

      currentToken = newCurrentToken
      start = newStart
    }
  }

  return {
    childNodes,
    newCurrentToken: null,
    newStart: null
  }
}

function parseElement ({allowSiblings, currentToken, start, tokens}) {
  const {elementName, newStart} = parseElementName({currentToken, start})
  const element = {
    localName: elementName,
    nodeType: window.Node.ELEMENT_NODE
  }

  start = newStart

  const {
    attributes,
    newCurrentToken: postAttributesCurrentToken,
    newStart: postAttributesStart
  } = parseElementAttributes({currentToken, start, tokens})

  element.attributes = attributes
  currentToken = postAttributesCurrentToken
  start = postAttributesStart

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

      return {
        element,
        newCurrentToken: null,
        newStart: null
      }
    }
  }

  // If element tag is not inline (i.e. <foo></foo> instead of <foo/>)
  if (currentToken[start] === '>') {
    start += 1

    const {childNodes, newCurrentToken, newStart} = parseChildNodes({
      currentToken,
      tokens,
      start
    })

    element.childNodes = childNodes
    currentToken = newCurrentToken
    start = newStart

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
    }

    return {
      element,
      newCurrentToken: currentToken,
      newStart: start
    }
  }

  return {
    element,
    newCurrentToken: currentToken,
    newStart: start
  }
}

function parseElementAttributeName ({currentToken, start, tokens}) {
  // Ignore whitespace until we reach an attribute or closing of the tag
  while (isCharWhitespace(currentToken[start])) start += 1

  const attributeNameStart = start

  // Scan ahead until we reach end of element attribute name
  while (notEndOfElementAttributeName({currentToken, start})) start += 1

  if (attributeNameStart < start) {
    return {
      name: currentToken.slice(attributeNameStart, start),
      newCurrentToken: currentToken,
      newStart: start
    }
  }

  return {
    newCurrentToken: currentToken,
    newStart: start
  }
}

function parseElementAttributeValue ({currentToken, start, tokens}) {
  let quote = null

  if (['"', "'"].indexOf(currentToken[start]) !== -1) {
    quote = currentToken[start]
    start += 1
  }

  if (endOfCurrentToken({currentToken, start})) {
    currentToken = getNextToken(tokens)
    start = 0
  }

  let attributeValueStart = start
  let value = ''

  if (quote) {
    let escapeNext = false

    while (currentToken[start] !== quote || escapeNext === true) {
      escapeNext = (currentToken[start] === '\\' ? !escapeNext : false)
      start += 1

      if (endOfCurrentToken({currentToken, start})) {
        value += currentToken.slice(attributeValueStart, start)
        attributeValueStart = 0
        currentToken = getNextToken(tokens)
        start = 0
      }
    }
  } else {
    while (notEndOfElementAttributeValue({currentToken, start})) start += 1
  }

  if (attributeValueStart < start) {
    value += currentToken.slice(attributeValueStart, start)
  }

  if (value) {
    return {
      newCurrentToken: currentToken,
      newStart: start,
      value
    }
  }

  return {
    newCurrentToken: currentToken,
    newStart: start
  }
}

function parseElementAttributes ({currentToken, start, tokens}) {
  const attributes = {}

  while (notEndOfElementTag({currentToken, start})) {
    start += 1

    const {name, newCurrentToken, newStart} = parseElementAttributeName({
      currentToken,
      start,
      tokens
    })

    currentToken = newCurrentToken
    start = newStart

    if (name && currentToken[start] === '=') {
      const {
        newCurrentToken: postValueToken,
        newStart: postValueStart,
        value
      } = parseElementAttributeValue({currentToken, start: start + 1, tokens})

      attributes[name] = value
      currentToken = postValueToken
      start = postValueStart
    }

    if (endOfCurrentToken({currentToken, start})) {
      currentToken = getNextToken(tokens)
      start = 0
    }
  }

  return {
    attributes,
    newCurrentToken: currentToken,
    newStart: start
  }
}

function parseElementName ({currentToken, start, tokens}) {
  const elementNameStart = start

  // Scan ahead until we reach the end of the tag name
  while (nextCharIsPartOfElementName({currentToken, start})) start += 1

  return {
    elementName: currentToken.slice(elementNameStart, start),
    newStart: start
  }
}

function parseTextNode ({currentToken, start, tokens}) {
  const textNode = {
    nodeType: window.Node.TEXT_NODE_TYPE,
    textContent: ''
  }

  let subStringStart = start

  // While there is still template left to parse
  while (moreToParse({currentToken, start, tokens})) {
    // When entering an element tag (means text node is complete)
    if (currentToken[start] === '<') {
      // If we've parsed text in the current token make sure to add it to the
      // textContents of our textNode.
      if (start !== 0) {
        textNode.textContent += currentToken.slice(subStringStart, start)
      }

      return {
        textNode,
        newCurrentToken: currentToken,
        newStart: start
      }
    }

    // If we reached the end of the current token move on to the next one but
    // first update the textContents of our textNode to include all of the text
    // contents we just parsed in the current token.
    if (endOfCurrentToken({currentToken, start})) {
      textNode.textContent += currentToken.slice(subStringStart, start)
      currentToken = getNextToken(tokens)
      start = 0
      subStringStart = 0
    } else {
      start += 1
    }
  }

  return {
    textNode,
    newCurrentToken: null,
    newStart: null
  }
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
  }).element
}
