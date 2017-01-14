import propTypesMixin from '../mixins/prop-types'

class FrostRadioGroupBase extends HTMLInputElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostRadioGroup extends propTypesMixin(FrostRadioGroupBase) {}
