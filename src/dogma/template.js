import {isCharWhitespace} from '../utils/string'

const {isArray} = Array

function getTemplateSegments (tokens, variables) {
  if (!isArray(tokens)) {
    throw new Error('t() should be called with a template string')
  }

  const segments = Array.from(tokens)

  for (let i = variables.length - 1; i !== -1; i--) {
    segments.splice(i + 1, 0, variables[i])
  }

  return segments
}

function parseNode ({allowSiblings, currentToken, start, tokens}) {
  const node = {
    tag: ''
  }

  // Get tag name (i.e. get "foo-bar" from <foo-bar baz="test">)
  while (
    !isCharWhitespace(currentToken[start]) &&
    currentToken[start] !== '>' &&
    currentToken[start] !== '/'
  ) {
    node.tag += currentToken[start]
    start += 1
  }

  if (currentToken[start] === '/') {
    if (currentToken[start + 1] !== '>') {
      throw new Error(`Missing > on closing tag "${node.tag}"`)
    }

    // TODO: decide what to do next based on allowSiblings option
  }

  // TODO: decide what to do next
}

function validateTemplateStringTokens (tokens) {
  if (tokens.length === 0) {
    throw new Error('Call to t() should pass at least one token')
  }

  if (typeof tokens[0] !== 'string') {
    throw new Error('Template should begin with a string')
  }
}

export default function (tokens, ...variables) {
  tokens = getTemplateSegments(tokens, variables)

  validateTemplateStringTokens(tokens)

  let currentToken = tokens.splice(0, 1)[0]
  let start = 0

  while (currentToken.length > start && isCharWhitespace(currentToken[start])) {
    start += 1

    if (start === currentToken.length) {
      currentToken = tokens.splice(0, 1)[0]
    }
  }

  if (currentToken === undefined) {
    throw new Error('Template string must contain a root node')
  }

  if (currentToken[start] !== '<') {
    throw new Error('Template should start with a node')
  }

  return parseNode({
    allowSiblings: false,
    currentToken,
    start: start + 1,
    tokens
  })
}
