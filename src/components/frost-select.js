import reactComponent from '../mixins/react-component'

class FrostSelectBase extends HTMLSelectElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostSelect extends reactComponent(FrostSelectBase) {}
