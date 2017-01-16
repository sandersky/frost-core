import {createComponent} from '../dogma/component'
import {PropTypes} from '../dogma/prop-types'

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

class FrostButton extends HTMLButtonElement {
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

export default createComponent(FrostButton)
