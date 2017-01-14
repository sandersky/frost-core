import Prism from 'prismjs'

import {PropTypes, createComponent} from '../react'
import {trimSuperfluousLeadingWhitespace} from '../utils/text'

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
