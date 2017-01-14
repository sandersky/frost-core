import {createComponent} from '../react'

class FrostLinkBase extends HTMLAnchorElement {
  get propTypes () {
    return {
    }
  }

  getDefaultProps () {
    return {
    }
  }
}

export default class FrostLink extends createComponent(FrostLinkBase) {}
