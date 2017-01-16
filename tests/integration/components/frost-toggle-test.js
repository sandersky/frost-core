describe('frost-core / components / frost-toggle', function () {
  beforeEach(function () {
    this.element = document.createElement('frost-toggle')
  })

  it('is a registered component', function () {
    expect(this.element).to.be.registeredAs('frost-toggle')
  })
})
