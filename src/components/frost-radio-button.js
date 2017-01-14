import {createComponent} from '../react'

class FrostRadioButtonBase extends HTMLInputElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostRadioButton extends createComponent(FrostRadioButtonBase) {}
