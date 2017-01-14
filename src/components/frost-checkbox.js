import reactComponent from '../mixins/react-component'

class FrostCheckboxBase extends HTMLInputElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostCheckbox extends reactComponent(FrostCheckboxBase) {}
