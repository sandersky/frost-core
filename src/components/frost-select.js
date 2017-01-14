import {createComponent} from '../react'

class FrostSelectBase extends HTMLSelectElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostSelect extends createComponent(FrostSelectBase) {}
