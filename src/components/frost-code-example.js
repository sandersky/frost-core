import {PropTypes, createComponent} from '../react'

const htmlCharReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#039;'
}

class FrostCodeExampleBase extends HTMLDivElement {
  get propTypes () {
    return {
      title: PropTypes.string({required: true})
    }
  }

  componentWillMount () {
    this.setState({
      example: this.innerHTML
    })
  }

  getEscapedHtml (unsafe) {
      return unsafe
        .split('')
        .map((char) => htmlCharReplacements[char] || char)
        .join('')
   }

  render () {
    const escapedExample = this.getEscapedHtml(this.state.example)

    return `
      <strong>${this.props.title}</string>
      ${this.state.example}
      <pre>${escapedExample}</pre>
    `
  }
}

export default class FrostCodeExample extends createComponent(FrostCodeExampleBase) {}
