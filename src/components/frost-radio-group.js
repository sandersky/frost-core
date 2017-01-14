import reactComponent from '../mixins/react-component'

class FrostRadioGroupBase extends HTMLInputElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostRadioGroup extends reactComponent(FrostRadioGroupBase) {}
