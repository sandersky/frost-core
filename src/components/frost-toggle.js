import {createComponent} from '../dogma'

class FrostToggleBase extends HTMLInputElement {
  get propTypes () {
    return {
    }
  }

  getDefaultProps () {
    return {
    }
  }
}

export default class FrostToggle extends createComponent(FrostToggleBase) {}
