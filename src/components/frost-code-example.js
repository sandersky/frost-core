import Prism from 'prismjs'

import {PropTypes, createComponent} from '../react'

class FrostCodeExampleBase extends HTMLDivElement {
  get propTypes () {
    return {
      title: PropTypes.string({required: true})
    }
  }

  componentWillMount () {
    const lines = this.innerHTML.split('\n')

    const trimCount = lines
      .map((line) => line.match(/(\s+)[^\s]/))
      .filter((matches) => matches !== null)
      .map((matches) => matches[1])
      .map((leadingWhitespace) => leadingWhitespace.length)
      .reduce((a, b) => Math.min(a, b), Infinity)

    const trimmedLines = lines
      .map((line) => line.substring(trimCount))

    this.setState({
      example: trimmedLines.join('\n').trim()
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
