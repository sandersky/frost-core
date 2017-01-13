describe('frost-scroll', function () {
  beforeEach(function () {
    this.element = document.createElement('frost-scroll')
  })

  it('is a registered component', function () {
    expect(this.element).to.be.registeredAs('frost-scroll')
  })
})
