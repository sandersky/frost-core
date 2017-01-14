import {createComponent} from '../dogma'

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
