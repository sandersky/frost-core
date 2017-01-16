describe('frost-core / components / frost-checkbox', function () {
  beforeEach(function () {
    this.element = document.createElement('frost-checkbox')
  })

  it('is a registered component', function () {
    expect(this.element).to.be.registeredAs('frost-checkbox')
  })
})
