import Prism from 'prismjs'

import {createComponent} from '../react'
import {trimSuperfluousLeadingWhitespace} from '../utils/text'

class FrostCodeExampleBase extends HTMLDivElement {
  componentWillMount () {
    this.setState({
      example: trimSuperfluousLeadingWhitespace(this.innerHTML)
    })
  }

  render () {
    const example = Prism.highlight(this.state.example, Prism.languages.html)
    const lang = 'language-html'

    return `
      <h4>Example</h4>
      ${this.state.example}
      <pre class="${lang}"><code class="${lang}">${example}</code></pre>
    `
  }
}

export default class FrostCodeExample extends createComponent(FrostCodeExampleBase) {}
