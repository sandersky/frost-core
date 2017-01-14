import {createComponent} from '../dogma'

class FrostPasswordBase extends HTMLInputElement {
  get propTypes () {
    return {
    }
  }

  getDefaultProps () {
    return {
    }
  }
}

export default class FrostPassword extends createComponent(FrostPasswordBase) {}
