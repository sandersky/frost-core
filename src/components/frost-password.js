import propTypesMixin from '../mixins/prop-types'

class FrostPasswordBase extends HTMLInputElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostPassword extends propTypesMixin(FrostPasswordBase) {}
