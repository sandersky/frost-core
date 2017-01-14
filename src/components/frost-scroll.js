import {createComponent} from '../dogma'

class FrostScrollBase extends HTMLDivElement {
  get propTypes () {
    return {
    }
  }

  getDefaultProps () {
    return {
    }
  }
}

export default class FrostScroll extends createComponent(FrostScrollBase) {}
