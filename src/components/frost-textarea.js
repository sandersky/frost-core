import propTypesMixin from '../mixins/prop-types'

class FrostTextareaBase extends HTMLInputElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostTextarea extends propTypesMixin(FrostTextareaBase) {}
