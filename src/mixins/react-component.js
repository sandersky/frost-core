function applyDefaults (defaults) {
  Object.keys(defaults)
    .forEach((key) => {
      if (this.getAttribute(key) === null) {
        this.setAttribute(key, defaults[key])
      }
    })
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

function getProps () {
  if (typeof this.propTypes !== 'object') {
    return {}
  }

  const props = {}

  Object.keys(this.propTypes).forEach((key) => {
    props[key] = this.getAttribute(key)
  })

  return props
}

function isValuePresent ({key, value, required}) {
  if (value !== null) {
    return true
  }

  if (required) {
    throw new Error(`propType "${key}" is required but not present`)
  }

  return false
}

function validatePropTypes () {
  Object.keys(this.propTypes).forEach((key) => {
    const validator = this.propTypes[key]

    if (typeof validator !== 'function') {
      throw new Error(`propType "${key}" is not a function as expected.`)
    }

    validator({
      key,
      value: this.getAttribute(key)
    })
  })
}

export const PropTypes = {
  oneOf (possibilities, options = {}) {
    return function ({key, value}) {
      if (!isValuePresent({key, value, required: options.required})) {
        return
      }

      const valid = possibilities.some((possibility) => {
        return possibility === value
      })

      if (!valid) {
        const expected = possibilities
          .map((possibility) => `\t* ${possibility}`)
          .join('\n')

        throw new Error(
          `propType "${key}" was given value "${value}" which does not match` +
          ` one of the expected values:\n\n${expected}\n`)
      }
    }
  },

  string (options = {}) {
    return function ({key, value}) {
      if (!isValuePresent({key, value, required: options.required})) {
        return
      }

      const type = typeof value

      if (type !== 'string') {
        const vowels = ['a', 'e', 'i', 'o', 'u']
        const determiner = vowels.indexOf(type[0]) === -1 ? 'a' : 'an'

        debugger
        throw new Error(
          `propType "${key}" was given ${determiner} ${type} when it expected` +
          `a string`
        )
      }
    }
  }
}

const reactComponent = (superclass) => class extends superclass {
  createdCallback () {
    this.props = getProps.call(this)
    this.state = {}

    this.setState = (incomingState) => {
      const newState = getNewState(incomingState, this.state)

      if (typeof this.componentWillUpdate === 'function') {
        this.componentWillUpdate(newState)
      }

      Object.assign(this.state, newState)

      if (typeof this.render === 'function') {
        this.render()
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
    this.props[key] = newValue

    if (typeof this.render === 'function') {
      this.render()
    }
  }

  detachedCallback () {
    if (typeof this.componentWillUnmount === 'function') {
      this.componentWillUnmount()
    }
  }
}

export default reactComponent
