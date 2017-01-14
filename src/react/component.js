import {
  applyDefaults,
  getInitialProps,
  validatePropTypes
} from './prop-types'

const {assign, keys} = Object

function getNewState (incomingState, state) {
  const newState = {}

  keys(state).forEach((key) => {
    if (key in incomingState) {
      return
    }

    newState[key] = state[key]
  })

  keys(incomingState).forEach((key) => {
    newState[key] = incomingState[key]
  })

  return newState
}

export function createComponent (superclass) {
  return class extends superclass {
    createdCallback () {
      this.props = getInitialProps.call(this)
      this.state = {}

      if (this.propTypes) {
        validatePropTypes.call(this)
      }

      if (this.getDefaultProps) {
        applyDefaults.call(this, this.getDefaultProps())
      }

      this.setState = (incomingState) => {
        const newState = getNewState(incomingState, this.state)
        const prevState = this.state

        if (typeof this.componentWillUpdate === 'function') {
          this.componentWillUpdate(this.props, newState)
        }

        assign(this.state, newState)

        if (typeof this.render === 'function') {
          this.render()
        }

        if (typeof this.componentDidUpdate === 'function') {
          setTimeout(
            this.componentDidUpdate.bind(this, this.props, prevState),
            0
          )
        }
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
      const newProps = assign({}, this.props) // Create shallow clone of props
      const prevProps = this.props

      newProps[key] = newValue
      this.props = newProps

      if (typeof this.render === 'function') {
        this.render()
      }

      if (typeof this.componentDidUpdate === 'function') {
        setTimeout(
          this.componentDidUpdate.bind(this, prevProps, this.state),
          0
        )
      }
    }

    detachedCallback () {
      if (typeof this.componentWillUnmount === 'function') {
        this.componentWillUnmount()
      }
    }
  }
}
