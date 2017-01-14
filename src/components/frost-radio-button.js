import {createComponent} from '../react'

class FrostRadioButtonBase extends HTMLInputElement {
  get propTypes () {
    return {
    }
  }

  getDefaultProps () {
    return {
    }
  }
}

export default class FrostRadioButton extends createComponent(FrostRadioButtonBase) {}
