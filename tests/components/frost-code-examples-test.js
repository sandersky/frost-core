describe('frost-code-examples', function () {
  beforeEach(function () {
    this.element = document.createElement('frost-code-examples')
  })

  it('is a registered component', function () {
    expect(this.element).to.be.registeredAs('frost-code-examples')
  })
})
