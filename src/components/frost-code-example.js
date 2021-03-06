import Prism from 'prismjs'

import {createComponent} from '../dogma/component'
import t from '../dogma/template'
import {trimSuperfluousLeadingWhitespace} from '../dogma/utils/string'

class FrostCodeExample extends HTMLDivElement {
  componentWillMount () {
    this.setState({
      example: trimSuperfluousLeadingWhitespace(this.innerHTML)
    })
  }

  render () {
    const example = Prism.highlight(this.state.example, Prism.languages.html)
    const lang = 'language-html'

    return t`
      <div>
        <h4>Example</h4>
        ${this.state.example}
        <pre class="${lang}"><code class="${lang}">${example}</code></pre>
      </div>
    `
  }
}

export default createComponent(FrostCodeExample)
