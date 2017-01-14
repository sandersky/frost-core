import {createComponent} from '../dogma'

class FrostIconBase extends HTMLElement {
  get propTypes () {
    return {
    }
  }

  getDefaultProps () {
    return {
    }
  }
}

export default class FrostIcon extends createComponent(FrostIconBase) {}
