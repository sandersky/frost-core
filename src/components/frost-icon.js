import propTypesMixin from '../mixins/prop-types'

class FrostIconBase extends HTMLElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostIcon extends propTypesMixin(FrostIconBase) {}
