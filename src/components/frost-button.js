import {PropTypes, createComponent} from '../react'

export const priorities = [
  'primary',
  'secondary',
  'tertiary'
]

export const sizes = [
  'large',
  'medium',
  'small'
]

class FrostButtonBase extends HTMLButtonElement {
  get propTypes () {
    return {
      priority: PropTypes.oneOf(priorities),
      size: PropTypes.oneOf(sizes)
    }
  }

  getDefaultProps () {
    return {
      priority: 'tertiary',
      size: 'medium'
    }
  }
}

export default class FrostButton extends createComponent(FrostButtonBase) {}
