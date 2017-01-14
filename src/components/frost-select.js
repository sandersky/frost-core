import {createComponent} from '../react'

class FrostSelectBase extends HTMLSelectElement {
  get propTypes () {
    return {
    }
  }

  getDefaultProps () {
    return {
    }
  }
}

export default class FrostSelect extends createComponent(FrostSelectBase) {}
