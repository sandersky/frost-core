chai.Assertion.addMethod('registeredAs', function (tagName) {
  return new chai.Assertion(this._obj.constructor.name).to.equal(tagName)
})
