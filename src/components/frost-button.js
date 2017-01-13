export const priorities = [
  'large',
  'medium',
  'small'
]

export default class FrostButton extends HTMLButtonElement {
  createdCallback () {
    const priority = this.getAttribute('priority')

    if (!priority) {
      this.setAttribute('priority', 'medium')
    } else if (priorities.indexOf(priority) === -1) {
      throw new Error(
        `Invalid priority "${priority}" for frost-button. Expected one of: ${priorities.join(', ')}`
      )
    }
  }
}
