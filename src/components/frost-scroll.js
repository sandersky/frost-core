import {createComponent} from '../react'

class FrostScrollBase extends HTMLDivElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostScroll extends createComponent(FrostScrollBase) {}
