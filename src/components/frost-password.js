import reactComponent from '../mixins/react-component'

class FrostPasswordBase extends HTMLInputElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostPassword extends reactComponent(FrostPasswordBase) {}
