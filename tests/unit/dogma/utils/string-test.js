import {
  WHITESPACE_CHARS,
  isCharWhitespace,
  trimSuperfluousLeadingWhitespace
} from '../../../../src/dogma/utils/string'

describe('dogma / utils / string', function () {
  it('exports WHITESPACE_CHARS', function () {
    expect(WHITESPACE_CHARS).to.eql([' ', '\n', '\t'])
  })

  it('exports isCharWhitespace', function () {
    expect(typeof isCharWhitespace).to.equal('function')
  })

  it('exports trimSuperfluousLeadingWhitespace', function () {
    expect(typeof trimSuperfluousLeadingWhitespace).to.equal('function')
  })
})
