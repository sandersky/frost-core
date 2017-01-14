import {createComponent} from '../dogma'

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
