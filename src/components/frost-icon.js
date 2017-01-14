import reactComponent from '../mixins/react-component'

class FrostIconBase extends HTMLElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostIcon extends reactComponent(FrostIconBase) {}
