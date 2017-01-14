import propTypesMixin from '../mixins/prop-types'

class FrostSelectBase extends HTMLSelectElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostSelect extends propTypesMixin(FrostSelectBase) {}
