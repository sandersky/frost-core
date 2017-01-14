import {isCharWhitespace} from '../utils/string'

function getTemplateSegments (tokens, variables) {
  const segments = Array.from(tokens)

  for (let i = variables.length - 1; i !== -1; i--) {
    segments.splice(i + 1, 0, variables[i])
  }

  return segments
}

function parseTag ({start, text}) {
  const node = {
    tag: ''
  }

  // Get tag name (i.e. get "foo-bar" from <foo-bar baz="test">)
  while (
    !isCharWhitespace(text[start]) &&
    text[start] !== '>' &&
    text[start] !== '/'
  ) {
    node.tag += text[start]
    start += 1
  }

  if (text[start] === '/') {
    if (text[start + 1] !== '>') {
      throw new Error(`Missing > on closing tag "${node.tag}"`)
    }

    return {
      end: start + 2, // Index of last node character in text
      node
    }
  }

  //
}

function parseTagAttributes ({start, text}) {
  //
}

export default function (tokens, ...variables) {
  const segments = getTemplateSegments(tokens, variables)
}
