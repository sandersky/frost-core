import {createComponent} from '../dogma'

class FrostTextareaBase extends HTMLInputElement {
  get propTypes () {
    return {
    }
  }

  getDefaultProps () {
    return {
    }
  }
}

export default class FrostTextarea extends createComponent(FrostTextareaBase) {}
