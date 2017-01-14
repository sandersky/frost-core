import propTypesMixin from '../mixins/prop-types'

class FrostLinkBase extends HTMLAnchorElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostLink extends propTypesMixin(FrostLinkBase) {}
