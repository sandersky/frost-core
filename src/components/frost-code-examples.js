import {PropTypes, createComponent} from '../react'
import {scrollIntoView} from '../utils/animation'

function getSectionHeaders (examples) {
  const container = document.createElement('div')
  container.innerHTML = examples

  return Array.from(container.children)
    .filter((node) => node.tagName.toLowerCase() === 'section')
    .map((section) => {
      const headers = Array.from(section.children)
        .filter((node) => node.tagName.toLowerCase() === 'header')
        .map((header) => header.textContent)

      return headers.length === 0 ? null : headers[0]
    })
    .filter((header) => header !== null)
}

class FrostCodeExamplesBase extends HTMLDivElement {
  componentWillMount () {
    this.setState({
      examples: this.innerHTML
    })
  }

  render () {
    const listItems = getSectionHeaders(this.state.examples)
      .map((header) => {
        return `<li><a href="#">${header}</a></li>`
      })
      .join('')

    return `
      <ul data-name="scroll-spy">
        ${listItems}
      </ul>
      <div data-name="examples">${this.state.examples}</div>
    `
  }

  componentDidUpdate () {
    this.querySelectorAll('[data-name="scroll-spy"] a').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()

        const headerText = e.target.textContent
        const headerElements = this.querySelectorAll('section > header:first-of-type')

        for (let i = 0; i < headerElements.length; i++) {
          const headerElement = headerElements[i]

          if (headerElement.textContent === headerText) {
            scrollIntoView(headerElement.parentNode)
            return
          }
        }
      })
    })
  }
}

export default class FrostCodeExamples extends createComponent(FrostCodeExamplesBase) {}
