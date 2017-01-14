import {merge, toDom} from 'skatejs-dom-diff'

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

function updateDOM (source) {
  if (!source) {
    return
  }

  const target = this.render()
  merge(source, target)
}

export function createComponent (superclass) {
  return class extends superclass {
    createdCallback () {
      let rootNode, tree

      this.props = getInitialProps.call(this)
      this.state = {}

      this.attributeChangedCallback = (key, oldValue, newValue) => {
        const newProps = assign({}, this.props) // Create shallow clone of props
        const prevProps = this.props

        newProps[key] = newValue
        this.props = newProps

        if (typeof this.render === 'function') {
          updateDOM.call(this, tree)
        }

        if (typeof this.componentDidUpdate === 'function') {
          setTimeout(
            this.componentDidUpdate.bind(this, prevProps, this.state),
            0
          )
        }
      }

      this.setState = (incomingState) => {
        const newState = getNewState(incomingState, this.state)
        const prevState = this.state

        if (typeof this.componentWillUpdate === 'function') {
          this.componentWillUpdate(this.props, newState)
        }

        assign(this.state, newState)

        if (typeof this.render === 'function') {
          updateDOM.call(this, tree)
        }

        if (typeof this.componentDidUpdate === 'function') {
          setTimeout(
            this.componentDidUpdate.bind(this, this.props, prevState),
            0
          )
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
        tree = this.render()
        rootNode = toDom(tree)
      }
    }

    attachedCallback () {
      if (typeof this.componentDidMount === 'function') {
        this.componentDidMount()
      }
    }

    detachedCallback () {
      if (typeof this.componentWillUnmount === 'function') {
        this.componentWillUnmount()
      }
    }
  }
}
