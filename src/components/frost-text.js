import propTypesMixin from '../mixins/prop-types'

class FrostTextBase extends HTMLInputElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostText extends propTypesMixin(FrostTextBase) {}
