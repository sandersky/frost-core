describe('frost-core / components / frost-link', function () {
  beforeEach(function () {
    this.element = document.createElement('frost-link')
  })

  it('is a registered component', function () {
    expect(this.element).to.be.registeredAs('frost-link')
  })
})
