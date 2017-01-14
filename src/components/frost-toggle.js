import propTypesMixin from '../mixins/prop-types'

class FrostToggleBase extends HTMLInputElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostToggle extends propTypesMixin(FrostToggleBase) {}
