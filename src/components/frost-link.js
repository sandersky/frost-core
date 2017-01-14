import reactComponent from '../mixins/react-component'

class FrostLinkBase extends HTMLAnchorElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostLink extends reactComponent(FrostLinkBase) {}
