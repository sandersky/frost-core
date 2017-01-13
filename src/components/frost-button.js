export default class FrostButton extends HTMLButtonElement {
  createdCallback () {
    const text = this.getAttribute('text')

    if (text) {
      this.prepend(text)
    }
  }
}
