import {createComponent} from '../react'

class FrostToggleBase extends HTMLInputElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostToggle extends createComponent(FrostToggleBase) {}
