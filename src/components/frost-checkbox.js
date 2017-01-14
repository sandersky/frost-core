import {createComponent} from '../react'

class FrostCheckboxBase extends HTMLInputElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostCheckbox extends createComponent(FrostCheckboxBase) {}
