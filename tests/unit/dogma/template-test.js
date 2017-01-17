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
      expect(t`<div\n/>`).to.eql(emptyDiv)
    })

    it('parses single inline element with mixed spacing before /', function () {
      expect(t`<div\n \t/>`).to.eql(emptyDiv)
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
        expect(t` <div\n/>`).to.eql(emptyDiv)
      })

      it('parses single inline element with mixed spacing before /', function () {
        expect(t` <div\n \t/>`).to.eql(emptyDiv)
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
        expect(t`\t<div\n/>`).to.eql(emptyDiv)
      })

      it('parses single inline element with mixed spacing before /', function () {
        expect(t`\t<div\n \t/>`).to.eql(emptyDiv)
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
        expect(t`\n<div\n/>`).to.eql(emptyDiv)
      })

      it('parses single inline element with mixed spacing before /', function () {
        expect(t`\n<div\n \t/>`).to.eql(emptyDiv)
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
        expect(t`\n \t<div\n/>`).to.eql(emptyDiv)
      })

      it('parses single inline element with mixed spacing before /', function () {
        expect(t`\n \t<div\n \t/>`).to.eql(emptyDiv)
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
        expect(t`<div\n/> `).to.eql(emptyDiv)
      })

      it('parses single inline element with mixed spacing before /', function () {
        expect(t`<div\n \t/> `).to.eql(emptyDiv)
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
        expect(t`<div\n/>\t`).to.eql(emptyDiv)
      })

      it('parses single inline element with mixed spacing before /', function () {
        expect(t`<div\n \t/>\t`).to.eql(emptyDiv)
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
        expect(t`<div\n/>\n`).to.eql(emptyDiv)
      })

      it('parses single inline element with mixed spacing before /', function () {
        expect(t`<div\n \t/>\n`).to.eql(emptyDiv)
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
        expect(t`<div\n/>\n \t`).to.eql(emptyDiv)
      })

      it('parses single inline element with mixed spacing before /', function () {
        expect(t`<div\n \t/>\n \t`).to.eql(emptyDiv)
      })

      it('parses single element with close tag', function () {
        expect(t`<div></div>\n \t`).to.eql(emptyDiv)
      })
    })

    it('throws error when missing close tag', function () {
      expect(() => {
        t`<div/`
      }).to.throw('Expected ">" after "/" for "div"')
    })

    it('throws error when open and close tags are different element', function () {
      expect(() => {
        t`<span></div>`
      }).to.throw('Expected "</div>" to be "</span>"')
    })

    it('throws error when empty', function () {
      expect(() => {
        t``
      }).to.throw('Template literal should be passed content')
    })

    it('throws error when root text node', function () {
      expect(() => {
        t`Test`
      }).to.throw(
        'Template literal should begin with an element (leading whitespace ' +
        'is allowed)'
      )
    })

    it('throws error when root sibling elements', function () {
      expect(() => {
        t`<div/><span/>`
      }).to.throw('Element "div" is not allowed to have any siblings')

      expect(() => {
        t`<div></div><span/>`
      }).to.throw('Element "div" is not allowed to have any siblings')

      expect(() => {
        t`<div/><span></span>`
      }).to.throw('Element "div" is not allowed to have any siblings')

      expect(() => {
        t`<div></div><span></span>`
      }).to.throw('Element "div" is not allowed to have any siblings')
    })

    it('throws error when root element and text node sibling', function () {
      expect(() => {
        t`<div/>Test`
      }).to.throw('Element "div" is not allowed to have any siblings')
    })

    it('throws error when root text node and element sibling', function () {
      expect(() => {
        t`Test<div/>`
      }).to.throw(
        'Template literal should begin with an element (leading whitespace ' +
        'is allowed)'
      )
    })

    it('throws error when boolean substitution before first element', function () {
      expect(() => {
        t`${true}<div/>`
      }).to.throw('Template should begin with a string')
    })

    it('throws error when function substitution before first element', function () {
      expect(() => {
        t`${() => {}}<div/>`
      }).to.throw('Template should begin with a string')
    })

    it('throws error when number substitution before first element', function () {
      expect(() => {
        t`${3}<div/>`
      }).to.throw('Template should begin with a string')
    })

    it('ignores null substitution before first element', function () {
      expect(t`${null}<div/>`).to.eql(emptyDiv)
    })

    it('ignores undefined substitution before first element', function () {
      expect(t`${undefined}<div/>`).to.eql(emptyDiv)
    })

    describe('parses element with single attribute', function () {
      it('when bolean attrubute', function () {
        expect(t`<input disabled/>`).to.eql({
          attributes: {
            disabled: true
          },
          childNodes: [],
          localName: 'input',
          nodeType: window.Node.ELEMENT_NODE
        })
      })

      it('when literal value in single quotes', function () {
        expect(t`<input disabled='disabled'/>`).to.eql({
          attributes: {
            disabled: 'disabled'
          },
          childNodes: [],
          localName: 'input',
          nodeType: window.Node.ELEMENT_NODE
        })
      })

      it('when literal value in single quotes with escaped single quote in value', function () {
        expect(t`<input data-test='foo\\'bar'/>`).to.eql({
          attributes: {
            'data-test': 'foo\'bar'
          },
          childNodes: [],
          localName: 'input',
          nodeType: window.Node.ELEMENT_NODE
        })
      })

      it('when literal value in double quotes', function () {
        expect(t`<input disabled="disabled"/>`).to.eql({
          attributes: {
            disabled: 'disabled'
          },
          childNodes: [],
          localName: 'input',
          nodeType: window.Node.ELEMENT_NODE
        })
      })

      it('when literal value in double quotes with escaped double quote in value', function () {
        expect(t`<input data-test="foo\\"bar"/>`).to.eql({
          attributes: {
            'data-test': 'foo"bar'
          },
          childNodes: [],
          localName: 'input',
          nodeType: window.Node.ELEMENT_NODE
        })
      })

      it('when literal value in no quotes', function () {
        expect(t`<input disabled=disabled/>`).to.eql({
          attributes: {
            disabled: 'disabled'
          },
          childNodes: [],
          localName: 'input',
          nodeType: window.Node.ELEMENT_NODE
        })
      })

      it('when value substitution in no quotes', function () {
        const value = 'disabled'

        expect(t`<input disabled=${value}/>`).to.eql({
          attributes: {
            disabled: 'disabled'
          },
          childNodes: [],
          localName: 'input',
          nodeType: window.Node.ELEMENT_NODE
        })
      })

      it('when value substitution in single quotes', function () {
        const value = 'disabled'

        expect(t`<input disabled='${value}'/>`).to.eql({
          attributes: {
            disabled: 'disabled'
          },
          childNodes: [],
          localName: 'input',
          nodeType: window.Node.ELEMENT_NODE
        })
      })

      it('when value substitution in double quotes', function () {
        const value = 'disabled'

        expect(t`<input disabled="${value}"/>`).to.eql({
          attributes: {
            disabled: 'disabled'
          },
          childNodes: [],
          localName: 'input',
          nodeType: window.Node.ELEMENT_NODE
        })
      })
    })

    describe('when element with single child', function () {
      it('parses single inline element child with no whitespace before /', function () {
        expect(t`<div><span/></div>`).to.eql({
          attributes: {},
          childNodes: [
            {
              attributes: {},
              childNodes: [],
              localName: 'span',
              nodeType: window.Node.ELEMENT_NODE
            }
          ],
          localName: 'div',
          nodeType: window.Node.ELEMENT_NODE
        })
      })

      it('parses single inline element child with space before /', function () {
        expect(t`<div><span /></div>`).to.eql({
          attributes: {},
          childNodes: [
            {
              attributes: {},
              childNodes: [],
              localName: 'span',
              nodeType: window.Node.ELEMENT_NODE
            }
          ],
          localName: 'div',
          nodeType: window.Node.ELEMENT_NODE
        })
      })

      it('parses single inline element child with tab before /', function () {
        expect(t`<div><span\t/></div>`).to.eql({
          attributes: {},
          childNodes: [
            {
              attributes: {},
              childNodes: [],
              localName: 'span',
              nodeType: window.Node.ELEMENT_NODE
            }
          ],
          localName: 'div',
          nodeType: window.Node.ELEMENT_NODE
        })
      })

      it('parses single inline element child with newline before /', function () {
        expect(t`<div><span\n/></div>`).to.eql({
          attributes: {},
          childNodes: [
            {
              attributes: {},
              childNodes: [],
              localName: 'span',
              nodeType: window.Node.ELEMENT_NODE
            }
          ],
          localName: 'div',
          nodeType: window.Node.ELEMENT_NODE
        })
      })

      it('parses single inline element child with mixed spacing before /', function () {
        expect(t`<div><span\n \t/></div>`).to.eql({
          attributes: {},
          childNodes: [
            {
              attributes: {},
              childNodes: [],
              localName: 'span',
              nodeType: window.Node.ELEMENT_NODE
            }
          ],
          localName: 'div',
          nodeType: window.Node.ELEMENT_NODE
        })
      })

      it('parses single element child with close tag', function () {
        expect(t`<div><span></span></div>`).to.eql({
          attributes: {},
          childNodes: [
            {
              attributes: {},
              childNodes: [],
              localName: 'span',
              nodeType: window.Node.ELEMENT_NODE
            }
          ],
          localName: 'div',
          nodeType: window.Node.ELEMENT_NODE
        })
      })

      it('parses text node child', function () {
        expect(t`<h1>Test</h1>`).to.eql({
          attributes: {},
          childNodes: [
            {
              nodeType: window.Node.TEXT_NODE,
              textContent: 'Test'
            }
          ],
          localName: 'h1',
          nodeType: window.Node.ELEMENT_NODE
        })
      })

      it('parses text node child from substitution', function () {
        const text = 'Test'

        expect(t`<h1>${text}</h1>`).to.eql({
          attributes: {},
          childNodes: [
            {
              nodeType: window.Node.TEXT_NODE,
              textContent: 'Test'
            }
          ],
          localName: 'h1',
          nodeType: window.Node.ELEMENT_NODE
        })
      })

      it('parses text node child from text plus substitution', function () {
        const text = 'st'

        expect(t`<h1>Te${text}</h1>`).to.eql({
          attributes: {},
          childNodes: [
            {
              nodeType: window.Node.TEXT_NODE,
              textContent: 'Test'
            }
          ],
          localName: 'h1',
          nodeType: window.Node.ELEMENT_NODE
        })
      })

      it('parses text node child from substitution plus text', function () {
        const text = 'Te'

        expect(t`<h1>${text}st</h1>`).to.eql({
          attributes: {},
          childNodes: [
            {
              nodeType: window.Node.TEXT_NODE,
              textContent: 'Test'
            }
          ],
          localName: 'h1',
          nodeType: window.Node.ELEMENT_NODE
        })
      })

      it('parses text node child from text plus substitution plus text', function () {
        const text = 'es'

        expect(t`<h1>T${text}t</h1>`).to.eql({
          attributes: {},
          childNodes: [
            {
              nodeType: window.Node.TEXT_NODE,
              textContent: 'Test'
            }
          ],
          localName: 'h1',
          nodeType: window.Node.ELEMENT_NODE
        })
      })
    })

    describe('when element with multiple children', function () {
      describe('when first child is inline element', function () {
        it('parses single inline element child with no whitespace before /', function () {
          expect(t`<div><input/><span/></div>`).to.eql({
            attributes: {},
            childNodes: [
              {
                attributes: {},
                childNodes: [],
                localName: 'input',
                nodeType: window.Node.ELEMENT_NODE
              },
              {
                attributes: {},
                childNodes: [],
                localName: 'span',
                nodeType: window.Node.ELEMENT_NODE
              }
            ],
            localName: 'div',
            nodeType: window.Node.ELEMENT_NODE
          })
        })

        it('parses single inline element child with space before /', function () {
          expect(t`<div><input/><span /></div>`).to.eql({
            attributes: {},
            childNodes: [
              {
                attributes: {},
                childNodes: [],
                localName: 'input',
                nodeType: window.Node.ELEMENT_NODE
              },
              {
                attributes: {},
                childNodes: [],
                localName: 'span',
                nodeType: window.Node.ELEMENT_NODE
              }
            ],
            localName: 'div',
            nodeType: window.Node.ELEMENT_NODE
          })
        })

        it('parses single inline element child with tab before /', function () {
          expect(t`<div><input/><span\t/></div>`).to.eql({
            attributes: {},
            childNodes: [
              {
                attributes: {},
                childNodes: [],
                localName: 'input',
                nodeType: window.Node.ELEMENT_NODE
              },
              {
                attributes: {},
                childNodes: [],
                localName: 'span',
                nodeType: window.Node.ELEMENT_NODE
              }
            ],
            localName: 'div',
            nodeType: window.Node.ELEMENT_NODE
          })
        })

        it('parses single inline element child with newline before /', function () {
          expect(t`<div><input/><span\n/></div>`).to.eql({
            attributes: {},
            childNodes: [
              {
                attributes: {},
                childNodes: [],
                localName: 'input',
                nodeType: window.Node.ELEMENT_NODE
              },
              {
                attributes: {},
                childNodes: [],
                localName: 'span',
                nodeType: window.Node.ELEMENT_NODE
              }
            ],
            localName: 'div',
            nodeType: window.Node.ELEMENT_NODE
          })
        })

        it('parses single inline element child with mixed spacing before /', function () {
          expect(t`<div><input/><span\n \t/></div>`).to.eql({
            attributes: {},
            childNodes: [
              {
                attributes: {},
                childNodes: [],
                localName: 'input',
                nodeType: window.Node.ELEMENT_NODE
              },
              {
                attributes: {},
                childNodes: [],
                localName: 'span',
                nodeType: window.Node.ELEMENT_NODE
              }
            ],
            localName: 'div',
            nodeType: window.Node.ELEMENT_NODE
          })
        })

        it('parses single element child with close tag', function () {
          expect(t`<div><input/><span></span></div>`).to.eql({
            attributes: {},
            childNodes: [
              {
                attributes: {},
                childNodes: [],
                localName: 'input',
                nodeType: window.Node.ELEMENT_NODE
              },
              {
                attributes: {},
                childNodes: [],
                localName: 'span',
                nodeType: window.Node.ELEMENT_NODE
              }
            ],
            localName: 'div',
            nodeType: window.Node.ELEMENT_NODE
          })
        })

        it('parses text node', function () {
          expect(t`<div><input/>Test</div>`).to.eql({
            attributes: {},
            childNodes: [
              {
                attributes: {},
                childNodes: [],
                localName: 'input',
                nodeType: window.Node.ELEMENT_NODE
              },
              {
                textContent: 'Test',
                nodeType: window.Node.TEXT_NODE
              }
            ],
            localName: 'div',
            nodeType: window.Node.ELEMENT_NODE
          })
        })
      })

      describe('when first child is element with close tag', function () {
        it('parses single inline element child with no whitespace before /', function () {
          expect(t`<div><em></em><span/></div>`).to.eql({
            attributes: {},
            childNodes: [
              {
                attributes: {},
                childNodes: [],
                localName: 'em',
                nodeType: window.Node.ELEMENT_NODE
              },
              {
                attributes: {},
                childNodes: [],
                localName: 'span',
                nodeType: window.Node.ELEMENT_NODE
              }
            ],
            localName: 'div',
            nodeType: window.Node.ELEMENT_NODE
          })
        })

        it('parses single inline element child with space before /', function () {
          expect(t`<div><em></em><span /></div>`).to.eql({
            attributes: {},
            childNodes: [
              {
                attributes: {},
                childNodes: [],
                localName: 'em',
                nodeType: window.Node.ELEMENT_NODE
              },
              {
                attributes: {},
                childNodes: [],
                localName: 'span',
                nodeType: window.Node.ELEMENT_NODE
              }
            ],
            localName: 'div',
            nodeType: window.Node.ELEMENT_NODE
          })
        })

        it('parses single inline element child with tab before /', function () {
          expect(t`<div><em></em><span\t/></div>`).to.eql({
            attributes: {},
            childNodes: [
              {
                attributes: {},
                childNodes: [],
                localName: 'em',
                nodeType: window.Node.ELEMENT_NODE
              },
              {
                attributes: {},
                childNodes: [],
                localName: 'span',
                nodeType: window.Node.ELEMENT_NODE
              }
            ],
            localName: 'div',
            nodeType: window.Node.ELEMENT_NODE
          })
        })

        it('parses single inline element child with newline before /', function () {
          expect(t`<div><em></em><span\n/></div>`).to.eql({
            attributes: {},
            childNodes: [
              {
                attributes: {},
                childNodes: [],
                localName: 'em',
                nodeType: window.Node.ELEMENT_NODE
              },
              {
                attributes: {},
                childNodes: [],
                localName: 'span',
                nodeType: window.Node.ELEMENT_NODE
              }
            ],
            localName: 'div',
            nodeType: window.Node.ELEMENT_NODE
          })
        })

        it('parses single inline element child with mixed spacing before /', function () {
          expect(t`<div><em></em><span\n \t/></div>`).to.eql({
            attributes: {},
            childNodes: [
              {
                attributes: {},
                childNodes: [],
                localName: 'em',
                nodeType: window.Node.ELEMENT_NODE
              },
              {
                attributes: {},
                childNodes: [],
                localName: 'span',
                nodeType: window.Node.ELEMENT_NODE
              }
            ],
            localName: 'div',
            nodeType: window.Node.ELEMENT_NODE
          })
        })

        it('parses single element child with close tag', function () {
          expect(t`<div><em></em><span></span></div>`).to.eql({
            attributes: {},
            childNodes: [
              {
                attributes: {},
                childNodes: [],
                localName: 'em',
                nodeType: window.Node.ELEMENT_NODE
              },
              {
                attributes: {},
                childNodes: [],
                localName: 'span',
                nodeType: window.Node.ELEMENT_NODE
              }
            ],
            localName: 'div',
            nodeType: window.Node.ELEMENT_NODE
          })
        })

        it('parses text node', function () {
          expect(t`<div><em></em>Test</div>`).to.eql({
            attributes: {},
            childNodes: [
              {
                attributes: {},
                childNodes: [],
                localName: 'em',
                nodeType: window.Node.ELEMENT_NODE
              },
              {
                textContent: 'Test',
                nodeType: window.Node.TEXT_NODE
              }
            ],
            localName: 'div',
            nodeType: window.Node.ELEMENT_NODE
          })
        })
      })

      describe('when first child is text node', function () {
        it('parses single inline element child with no whitespace before /', function () {
          expect(t`<div>Test<span/></div>`).to.eql({
            attributes: {},
            childNodes: [
              {
                textContent: 'Test',
                nodeType: window.Node.TEXT_NODE
              },
              {
                attributes: {},
                childNodes: [],
                localName: 'span',
                nodeType: window.Node.ELEMENT_NODE
              }
            ],
            localName: 'div',
            nodeType: window.Node.ELEMENT_NODE
          })
        })

        it('parses single inline element child with space before /', function () {
          expect(t`<div>Test<span /></div>`).to.eql({
            attributes: {},
            childNodes: [
              {
                textContent: 'Test',
                nodeType: window.Node.TEXT_NODE
              },
              {
                attributes: {},
                childNodes: [],
                localName: 'span',
                nodeType: window.Node.ELEMENT_NODE
              }
            ],
            localName: 'div',
            nodeType: window.Node.ELEMENT_NODE
          })
        })

        it('parses single inline element child with tab before /', function () {
          expect(t`<div>Test<span\t/></div>`).to.eql({
            attributes: {},
            childNodes: [
              {
                textContent: 'Test',
                nodeType: window.Node.TEXT_NODE
              },
              {
                attributes: {},
                childNodes: [],
                localName: 'span',
                nodeType: window.Node.ELEMENT_NODE
              }
            ],
            localName: 'div',
            nodeType: window.Node.ELEMENT_NODE
          })
        })

        it('parses single inline element child with newline before /', function () {
          expect(t`<div>Test<span\n/></div>`).to.eql({
            attributes: {},
            childNodes: [
              {
                textContent: 'Test',
                nodeType: window.Node.TEXT_NODE
              },
              {
                attributes: {},
                childNodes: [],
                localName: 'span',
                nodeType: window.Node.ELEMENT_NODE
              }
            ],
            localName: 'div',
            nodeType: window.Node.ELEMENT_NODE
          })
        })

        it('parses single inline element child with mixed spacing before /', function () {
          expect(t`<div>Test<span\n \t/></div>`).to.eql({
            attributes: {},
            childNodes: [
              {
                textContent: 'Test',
                nodeType: window.Node.TEXT_NODE
              },
              {
                attributes: {},
                childNodes: [],
                localName: 'span',
                nodeType: window.Node.ELEMENT_NODE
              }
            ],
            localName: 'div',
            nodeType: window.Node.ELEMENT_NODE
          })
        })

        it('parses single element child with close tag', function () {
          expect(t`<div>Test<span></span></div>`).to.eql({
            attributes: {},
            childNodes: [
              {
                textContent: 'Test',
                nodeType: window.Node.TEXT_NODE
              },
              {
                attributes: {},
                childNodes: [],
                localName: 'span',
                nodeType: window.Node.ELEMENT_NODE
              }
            ],
            localName: 'div',
            nodeType: window.Node.ELEMENT_NODE
          })
        })
      })
    })
  })
})
