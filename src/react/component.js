import {
  applyDefaults,
  getProps,
  validatePropTypes
} from './prop-types'

function cloneProps (props) {
  const clone = {}

  Object.keys(props).forEach((key) => {
    clone[key] = props[key]
  })

  return clone
}

function getNewState (incomingState, state) {
  const newState = {}

  Object.keys(state).forEach((key) => {
    if (key in incomingState) {
      return
    }

    newState[key] = state[key]
  })

  Object.keys(incomingState).forEach((key) => {
    newState[key] = incomingState[key]
  })

  return newState
}

export function createComponent (superclass) {
  return class extends superclass {
    createdCallback () {
      this.props = getProps.call(this)
      this.state = {}

      this.setState = (incomingState) => {
        const newState = getNewState(incomingState, this.state)
        const prevState = this.state

        if (typeof this.componentWillUpdate === 'function') {
          this.componentWillUpdate(this.props, newState)
        }

        Object.assign(this.state, newState)

        if (typeof this.render === 'function') {
          this.render()
        }

        if (typeof this.componentDidUpdate === 'function') {
          this.componentDidUpdate(this.props, prevState)
        }
      }

      if (this.propTypes) {
        validatePropTypes.call(this)
      }

      if (this.getDefaultProps) {
        applyDefaults.call(this, this.getDefaultProps())
      }

      if (typeof this.componentWillMount === 'function') {
        this.componentWillMount()
      }

      if (typeof this.render === 'function') {
        this.innerHTML = this.render()
      }
    }

    attachedCallback () {
      if (typeof this.componentDidMount === 'function') {
        this.componentDidMount()
      }
    }

    attributeChangedCallback (key, oldValue, newValue) {
      const newProps = cloneProps(this.props)
      const prevProps = this.props

      newProps[key] = newValue
      this.props = newProps

      if (typeof this.render === 'function') {
        this.render()
      }

      if (typeof this.componentDidUpdate === 'function') {
        this.componentDidUpdate(prevProps, this.state)
      }
    }

    detachedCallback () {
      if (typeof this.componentWillUnmount === 'function') {
        this.componentWillUnmount()
      }
    }
  }
}
