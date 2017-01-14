import {createComponent} from '../react'

class FrostTextareaBase extends HTMLInputElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostTextarea extends createComponent(FrostTextareaBase) {}
