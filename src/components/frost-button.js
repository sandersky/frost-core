import propTypesMixin, {PropTypes} from '../mixins/prop-types'

export const priorities = [
  'large',
  'medium',
  'small'
]

class FrostButtonBase extends HTMLButtonElement {
  get propTypes () {
    return {
      priority: PropTypes.oneOf(priorities)
    }
  }

  getDefaultProps () {
    return {
      priority: 'medium'
    }
  }
}

export default class FrostButton extends propTypesMixin(FrostButtonBase) {}
