import {trimSuperfluousLeadingWhitespace} from '../../../../src/dogma/utils/string'

describe('dogma / utils / string', function () {
  it('exports trimSuperfluousLeadingWhitespace', function () {
    expect(typeof trimSuperfluousLeadingWhitespace).to.equal('function')
  })
})
