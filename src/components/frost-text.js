import reactComponent from '../mixins/react-component'

class FrostTextBase extends HTMLInputElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostText extends reactComponent(FrostTextBase) {}
