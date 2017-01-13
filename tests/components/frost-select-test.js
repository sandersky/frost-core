describe('frost-select', function () {
  beforeEach(function () {
    this.element = document.createElement('frost-select')
  })

  it('is a registered component', function () {
    expect(this.element).to.be.registeredAs('frost-select')
  })
})
