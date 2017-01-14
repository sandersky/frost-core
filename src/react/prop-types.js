const {assign, keys} = Object

/**
 * Apply default property values to unset properties
 * @param {Object} defaults - property defaults
 */
export function applyDefaults (defaults) {
  keys(defaults)
    .forEach((key) => {
      if (!this.props[key]) {
        const value = defaults[key]
        this.props[key] = value // Make sure property is on props for life cycle hooks
        this.setAttribute(key, value) // Make sure property is set in DOM for CSS selectors
      }
    })
}

/**
 * Get initial values of properties passed in by consumer
 * @returns {Object} initial property values
 */
export function getInitialProps () {
  if (typeof this.propTypes !== 'object') {
    return {}
  }

  return keys(this.propTypes)
    .reduce((props, key) => assign(props, {[key]: this.getAttribute(key)}), {})
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

export function validatePropTypes () {
  keys(this.propTypes).forEach((key) => {
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

        throw new Error(
          `propType "${key}" was given ${determiner} ${type} when it expected` +
          `a string`
        )
      }
    }
  }
}
