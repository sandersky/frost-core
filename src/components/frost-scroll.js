import propTypesMixin from '../mixins/prop-types'

class FrostScrollBase extends HTMLDivElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostScroll extends propTypesMixin(FrostScrollBase) {}
