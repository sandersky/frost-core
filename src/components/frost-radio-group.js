import {createComponent} from '../react'

class FrostRadioGroupBase extends HTMLInputElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostRadioGroup extends createComponent(FrostRadioGroupBase) {}
