import propTypesMixin from '../mixins/prop-types'

class FrostCheckboxBase extends HTMLInputElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostCheckbox extends propTypesMixin(FrostCheckboxBase) {}
