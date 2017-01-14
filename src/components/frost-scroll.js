import {createComponent} from '../react'

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
