describe('frost-button', function () {
  let element

  beforeEach(function () {
    element = document.createElement('frost-button')
  })

  it('is a registered component', function () {
    expect(element).to.be.registeredAs('frost-button')
  })

  describe('when initialized with text and no children', function () {
    beforeEach(function () {
      const container = document.createElement('div')
      container.innerHTML = '<frost-button text="Click Me!" />'
      element = container.children[0]
    })

    it('renders expected innerHTML', function () {
      expect(element.innerHTML).to.equal('Click Me!')
    })
  })

  describe('when initialized with text and children', function () {
    beforeEach(function () {
      const container = document.createElement('div')
      container.innerHTML = '<frost-button text="Click Me!"><div></div></frost-button>'
      element = container.children[0]
    })

    it('renders expected innerHTML', function () {
      expect(element.innerHTML).to.equal('Click Me!<div></div>')
    })
  })
})
