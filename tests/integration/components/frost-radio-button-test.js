describe('frost-core / components / frost-radio-button', function () {
  beforeEach(function () {
    this.element = document.createElement('frost-radio-button')
  })

  it('is a registered component', function () {
    expect(this.element).to.be.registeredAs('frost-radio-button')
  })
})
