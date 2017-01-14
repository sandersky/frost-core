import reactComponent from '../mixins/react-component'

class FrostTextareaBase extends HTMLInputElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostTextarea extends reactComponent(FrostTextareaBase) {}
