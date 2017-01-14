import {createComponent} from '../react'

class FrostCheckboxBase extends HTMLInputElement {
  get propTypes () {
    return {
    }
  }

  getDefaultProps () {
    return {
    }
  }
}

export default class FrostCheckbox extends createComponent(FrostCheckboxBase) {}
