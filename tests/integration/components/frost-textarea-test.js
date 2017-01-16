describe('frost-core / components / frost-textarea', function () {
  beforeEach(function () {
    this.element = document.createElement('frost-textarea')
  })

  it('is a registered component', function () {
    expect(this.element).to.be.registeredAs('frost-textarea')
  })
})
