import propTypesMixin from '../mixins/prop-types'

class FrostRadioButtonBase extends HTMLInputElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostRadioButton extends propTypesMixin(FrostRadioButtonBase) {}
