describe('frost-core / components / frost-code-example', function () {
  beforeEach(function () {
    this.element = document.createElement('frost-code-example')
  })

  it('is a registered component', function () {
    expect(this.element).to.be.registeredAs('frost-code-example')
  })
})
