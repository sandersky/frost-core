import {createComponent} from '../react'

class FrostRadioGroupBase extends HTMLInputElement {
  get propTypes () {
    return {
    }
  }

  getDefaultProps () {
    return {
    }
  }
}

export default class FrostRadioGroup extends createComponent(FrostRadioGroupBase) {}
