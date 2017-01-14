import reactComponent from '../mixins/react-component'

class FrostToggleBase extends HTMLInputElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostToggle extends reactComponent(FrostToggleBase) {}
