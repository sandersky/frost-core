import {createComponent} from '../react'

class FrostLinkBase extends HTMLAnchorElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostLink extends createComponent(FrostLinkBase) {}
