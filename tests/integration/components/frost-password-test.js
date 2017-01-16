describe('frost-core / components / frost-password', function () {
  beforeEach(function () {
    this.element = document.createElement('frost-password')
  })

  it('is a registered component', function () {
    expect(this.element).to.be.registeredAs('frost-password')
  })
})
