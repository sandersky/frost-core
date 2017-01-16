import t from '../../../src/dogma/template'

const emptyDiv = Object.freeze({
  attributes: {},
  childNodes: [],
  localName: 'div',
  nodeType: window.Node.ELEMENT_NODE
})

describe('dogma / template', function () {
  describe('default export', function () {
    it('is a function', function () {
      expect(typeof t).to.equal('function')
    })

    it('parses single inline element with no whitespace before /', function () {
      expect(t`<div/>`).to.eql(emptyDiv)
    })

    it('parses single inline element with space before /', function () {
      expect(t`<div />`).to.eql(emptyDiv)
    })

    it('parses single inline element with tab before /', function () {
      expect(t`<div\t/>`).to.eql(emptyDiv)
    })

    it('parses single inline element with newline before /', function () {
      expect(t`<div\tn/>`).to.eql(emptyDiv)
    })

    it('parses single inline element with mixed spacing before /', function () {
      expect(t`<div\n \tn/>`).to.eql(emptyDiv)
    })

    it('parses single element with close tag', function () {
      expect(t`<div></div>`).to.eql(emptyDiv)
    })

    describe('when leading space', function () {
      it('parses single inline element with no whitespace before /', function () {
        expect(t` <div/>`).to.eql(emptyDiv)
      })

      it('parses single inline element with space before /', function () {
        expect(t` <div />`).to.eql(emptyDiv)
      })

      it('parses single inline element with tab before /', function () {
        expect(t` <div\t/>`).to.eql(emptyDiv)
      })

      it('parses single inline element with newline before /', function () {
        expect(t` <div\tn/>`).to.eql(emptyDiv)
      })

      it('parses single inline element with mixed spacing before /', function () {
        expect(t` <div\n \tn/>`).to.eql(emptyDiv)
      })

      it('parses single element with close tag', function () {
        expect(t` <div></div>`).to.eql(emptyDiv)
      })
    })

    describe('when leading tab', function () {
      it('parses single inline element with no whitespace before /', function () {
        expect(t`\t<div/>`).to.eql(emptyDiv)
      })

      it('parses single inline element with space before /', function () {
        expect(t`\t<div />`).to.eql(emptyDiv)
      })

      it('parses single inline element with tab before /', function () {
        expect(t`\t<div\t/>`).to.eql(emptyDiv)
      })

      it('parses single inline element with newline before /', function () {
        expect(t`\t<div\tn/>`).to.eql(emptyDiv)
      })

      it('parses single inline element with mixed spacing before /', function () {
        expect(t`\t<div\n \tn/>`).to.eql(emptyDiv)
      })

      it('parses single element with close tag', function () {
        expect(t`\t<div></div>`).to.eql(emptyDiv)
      })
    })

    describe('when leading newline', function () {
      it('parses single inline element with no whitespace before /', function () {
        expect(t`\n<div/>`).to.eql(emptyDiv)
      })

      it('parses single inline element with space before /', function () {
        expect(t`\n<div />`).to.eql(emptyDiv)
      })

      it('parses single inline element with tab before /', function () {
        expect(t`\n<div\t/>`).to.eql(emptyDiv)
      })

      it('parses single inline element with newline before /', function () {
        expect(t`\n<div\tn/>`).to.eql(emptyDiv)
      })

      it('parses single inline element with mixed spacing before /', function () {
        expect(t`\n<div\n \tn/>`).to.eql(emptyDiv)
      })

      it('parses single element with close tag', function () {
        expect(t`\n<div></div>`).to.eql(emptyDiv)
      })
    })

    describe('when leading mixed spacing', function () {
      it('parses single inline element with no whitespace before /', function () {
        expect(t`\n \t<div/>`).to.eql(emptyDiv)
      })

      it('parses single inline element with space before /', function () {
        expect(t`\n \t<div />`).to.eql(emptyDiv)
      })

      it('parses single inline element with tab before /', function () {
        expect(t`\n \t<div\t/>`).to.eql(emptyDiv)
      })

      it('parses single inline element with newline before /', function () {
        expect(t`\n \t<div\tn/>`).to.eql(emptyDiv)
      })

      it('parses single inline element with mixed spacing before /', function () {
        expect(t`\n \t<div\n \tn/>`).to.eql(emptyDiv)
      })

      it('parses single element with close tag', function () {
        expect(t`\n \t<div></div>`).to.eql(emptyDiv)
      })
    })

    describe('when trailing space', function () {
      it('parses single inline element with no whitespace before /', function () {
        expect(t`<div/> `).to.eql(emptyDiv)
      })

      it('parses single inline element with space before /', function () {
        expect(t`<div /> `).to.eql(emptyDiv)
      })

      it('parses single inline element with tab before /', function () {
        expect(t`<div\t/> `).to.eql(emptyDiv)
      })

      it('parses single inline element with newline before /', function () {
        expect(t`<div\tn/> `).to.eql(emptyDiv)
      })

      it('parses single inline element with mixed spacing before /', function () {
        expect(t`<div\n \tn/> `).to.eql(emptyDiv)
      })

      it('parses single element with close tag', function () {
        expect(t`<div></div> `).to.eql(emptyDiv)
      })
    })

    describe('when trailing tab', function () {
      it('parses single inline element with no whitespace before /', function () {
        expect(t`<div/>\t`).to.eql(emptyDiv)
      })

      it('parses single inline element with space before /', function () {
        expect(t`<div />\t`).to.eql(emptyDiv)
      })

      it('parses single inline element with tab before /', function () {
        expect(t`<div\t/>\t`).to.eql(emptyDiv)
      })

      it('parses single inline element with newline before /', function () {
        expect(t`<div\tn/>\t`).to.eql(emptyDiv)
      })

      it('parses single inline element with mixed spacing before /', function () {
        expect(t`<div\n \tn/>\t`).to.eql(emptyDiv)
      })

      it('parses single element with close tag', function () {
        expect(t`<div></div>\t`).to.eql(emptyDiv)
      })
    })

    describe('when trailing newline', function () {
      it('parses single inline element with no whitespace before /', function () {
        expect(t`<div/>\n`).to.eql(emptyDiv)
      })

      it('parses single inline element with space before /', function () {
        expect(t`<div />\n`).to.eql(emptyDiv)
      })

      it('parses single inline element with tab before /', function () {
        expect(t`<div\t/>\n`).to.eql(emptyDiv)
      })

      it('parses single inline element with newline before /', function () {
        expect(t`<div\tn/>\n`).to.eql(emptyDiv)
      })

      it('parses single inline element with mixed spacing before /', function () {
        expect(t`<div\n \tn/>\n`).to.eql(emptyDiv)
      })

      it('parses single element with close tag', function () {
        expect(t`<div></div>\n`).to.eql(emptyDiv)
      })
    })

    describe('when trailing mixed spacing', function () {
      it('parses single inline element with no whitespace before /', function () {
        expect(t`<div/>\n \t`).to.eql(emptyDiv)
      })

      it('parses single inline element with space before /', function () {
        expect(t`<div />\n \t`).to.eql(emptyDiv)
      })

      it('parses single inline element with tab before /', function () {
        expect(t`<div\t/>\n \t`).to.eql(emptyDiv)
      })

      it('parses single inline element with newline before /', function () {
        expect(t`<div\tn/>\n \t`).to.eql(emptyDiv)
      })

      it('parses single inline element with mixed spacing before /', function () {
        expect(t`<div\n \tn/>\n \t`).to.eql(emptyDiv)
      })

      it('parses single element with close tag', function () {
        expect(t`<div></div>\n \t`).to.eql(emptyDiv)
      })
    })
  })
})
