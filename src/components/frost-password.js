import {createComponent} from '../react'

class FrostPasswordBase extends HTMLInputElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostPassword extends createComponent(FrostPasswordBase) {}
