import reactComponent from '../mixins/react-component'

class FrostScrollBase extends HTMLDivElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostScroll extends reactComponent(FrostScrollBase) {}
