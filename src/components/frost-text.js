import {createComponent} from '../react'

class FrostTextBase extends HTMLInputElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostText extends createComponent(FrostTextBase) {}
