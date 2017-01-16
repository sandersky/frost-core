describe('frost-core / components / frost-text', function () {
  beforeEach(function () {
    this.element = document.createElement('frost-text')
  })

  it('is a registered component', function () {
    expect(this.element).to.be.registeredAs('frost-text')
  })
})
