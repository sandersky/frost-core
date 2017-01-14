import {createComponent} from '../dogma'

class FrostTextBase extends HTMLInputElement {
  get propTypes () {
    return {
    }
  }

  getDefaultProps () {
    return {
    }
  }
}

export default class FrostText extends createComponent(FrostTextBase) {}
