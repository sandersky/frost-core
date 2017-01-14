import {createComponent} from '../react'

class FrostIconBase extends HTMLElement {
  getDefaultProps () {
    return {
    }
  }
}

export default class FrostIcon extends createComponent(FrostIconBase) {}
