describe('frost-radio-group', function () {
  beforeEach(function () {
    this.element = document.createElement('frost-radio-group')
  })

  it('is a registered component', function () {
    expect(this.element).to.be.registeredAs('frost-radio-group')
  })
})
