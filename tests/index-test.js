import {
  FrostButton,
  FrostCheckbox,
  FrostCodeExample,
  FrostCodeExamples,
  FrostIcon,
  FrostLink,
  FrostPassword,
  FrostRadioButton,
  FrostRadioGroup,
  FrostScroll,
  FrostSelect,
  FrostText,
  FrostTextarea,
  FrostToggle
} from '../src/index'

import FrostButtonComponent from '../src/components/frost-button'
import FrostCheckboxComponent from '../src/components/frost-checkbox'
import FrostCodeExampleComponent from '../src/components/frost-code-example'
import FrostCodeExamplesComponent from '../src/components/frost-code-examples'
import FrostIconComponent from '../src/components/frost-icon'
import FrostLinkComponent from '../src/components/frost-link'
import FrostPasswordComponent from '../src/components/frost-password'
import FrostRadioButtonComponent from '../src/components/frost-radio-button'
import FrostRadioGroupComponent from '../src/components/frost-radio-group'
import FrostScrollComponent from '../src/components/frost-scroll'
import FrostSelectComponent from '../src/components/frost-select'
import FrostTextComponent from '../src/components/frost-text'
import FrostTextareaComponent from '../src/components/frost-textarea'
import FrostToggleComponent from '../src/components/frost-toggle'

describe('frost-core', function () {
  it('exports FrostButton', function () {
    expect(FrostButton).to.equal(FrostButtonComponent)
  })

  it('exports FrostCheckbox', function () {
    expect(FrostCheckbox).to.equal(FrostCheckboxComponent)
  })

  it('exports FrostCodeExample', function () {
    expect(FrostCodeExample).to.equal(FrostCodeExampleComponent)
  })

  it('exports FrostCodeExamples', function () {
    expect(FrostCodeExamples).to.equal(FrostCodeExamplesComponent)
  })

  it('exports FrostIcon', function () {
    expect(FrostIcon).to.equal(FrostIconComponent)
  })

  it('exports FrostLink', function () {
    expect(FrostLink).to.equal(FrostLinkComponent)
  })

  it('exports FrostPassword', function () {
    expect(FrostPassword).to.equal(FrostPasswordComponent)
  })

  it('exports FrostRadioButton', function () {
    expect(FrostRadioButton).to.equal(FrostRadioButtonComponent)
  })

  it('exports FrostRadioGroup', function () {
    expect(FrostRadioGroup).to.equal(FrostRadioGroupComponent)
  })

  it('exports FrostScroll', function () {
    expect(FrostScroll).to.equal(FrostScrollComponent)
  })

  it('exports FrostSelect', function () {
    expect(FrostSelect).to.equal(FrostSelectComponent)
  })

  it('exports FrostText', function () {
    expect(FrostText).to.equal(FrostTextComponent)
  })

  it('exports FrostTextarea', function () {
    expect(FrostTextarea).to.equal(FrostTextareaComponent)
  })

  it('exports FrostToggle', function () {
    expect(FrostToggle).to.equal(FrostToggleComponent)
  })
})
