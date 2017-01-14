import reactComponent from '../mixins/react-component'

class FrostRadioButtonBase extends HTMLInputElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostRadioButton extends reactComponent(FrostRadioButtonBase) {}
