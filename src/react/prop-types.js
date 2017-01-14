export function applyDefaults (defaults) {
  Object.keys(defaults)
    .forEach((key) => {
      if (this.getAttribute(key) === null) {
        this.setAttribute(key, defaults[key])
      }
    })
}

export function getProps () {
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

export function validatePropTypes () {
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

        throw new Error(
          `propType "${key}" was given ${determiner} ${type} when it expected` +
          `a string`
        )
      }
    }
  }
}
