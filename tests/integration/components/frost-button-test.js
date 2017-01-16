describe('frost-core / components / frost-button', function () {
  beforeEach(function () {
    this.element = document.createElement('frost-button')
  })

  it('is a registered component', function () {
    expect(this.element).to.be.registeredAs('frost-button')
  })
})
