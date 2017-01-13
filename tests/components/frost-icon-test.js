describe('frost-icon', function () {
  beforeEach(function () {
    this.element = document.createElement('frost-icon')
  })

  it('is a registered component', function () {
    expect(this.element).to.be.registeredAs('frost-icon')
  })
})
