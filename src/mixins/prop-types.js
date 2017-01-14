function applyDefaults (defaults) {
  Object.keys(defaults)
    .forEach((key) => {
      if (this.getAttribute(key) === null) {
        this.setAttribute(key, defaults[key])
      }
    })
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
  oneOf (possibilities, options) {
    options = options || {}

    return function ({key, value}) {
      if (value === null && options.required !== true) {
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
  }
}

const propTypesMixin = (superclass) => class extends superclass {
  createdCallback () {
    if (this.propTypes) {
      validatePropTypes.call(this)
    }

    if (this.getDefaultProps) {
      applyDefaults.call(this, this.getDefaultProps())
    }
  }
}

export default propTypesMixin
