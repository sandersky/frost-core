import Prism from 'prismjs'

import {PropTypes, createComponent} from '../react'

/**
 * Trim superfluous leading whitespace from text so all content is shifted to
 * left edge when renderered in a <pre> tag. Essentially the same thing as
 * pressing Shift + Tab multiple times in a modern text editor to get the
 * content next to the left gutter.
 * @param {String} text - text to trim
 * @returns {String} trimmed text
 */
function trimSuperfluousLeadingWhitespace (text) {
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

class FrostCodeExampleBase extends HTMLDivElement {
  get propTypes () {
    return {
      title: PropTypes.string({required: true})
    }
  }

  componentWillMount () {
    this.setState({
      example: trimSuperfluousLeadingWhitespace(this.innerHTML)
    })
  }

  render () {
    const example = Prism.highlight(this.state.example, Prism.languages.html)
    const lang = 'language-html'

    return `
      <h4>${this.props.title}</h4>
      ${this.state.example}
      <h5>Source Code</h5>
      <pre class="${lang}"><code class="${lang}">${example}</code></pre>
    `
  }
}

export default class FrostCodeExample extends createComponent(FrostCodeExampleBase) {}
