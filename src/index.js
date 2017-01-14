import FrostButton from './components/frost-button'
import FrostCheckbox from './components/frost-checkbox'
import FrostCodeExample from './components/frost-code-example'
import FrostCodeExamples from './components/frost-code-examples'
import FrostIcon from './components/frost-icon'
import FrostLink from './components/frost-link'
import FrostPassword from './components/frost-password'
import FrostRadioButton from './components/frost-radio-button'
import FrostRadioGroup from './components/frost-radio-group'
import FrostScroll from './components/frost-scroll'
import FrostSelect from './components/frost-select'
import FrostText from './components/frost-text'
import FrostTextarea from './components/frost-textarea'
import FrostToggle from './components/frost-toggle'

const componentMapping = {
  'frost-button': FrostButton,
  'frost-checkbox': FrostCheckbox,
  'frost-code-example': FrostCodeExample,
  'frost-code-examples': FrostCodeExamples,
  'frost-icon': FrostIcon,
  'frost-link': FrostLink,
  'frost-password': FrostPassword,
  'frost-radio-button': FrostRadioButton,
  'frost-radio-group': FrostRadioGroup,
  'frost-scroll': FrostScroll,
  'frost-select': FrostSelect,
  'frost-text': FrostText,
  'frost-textarea': FrostTextarea,
  'frost-toggle': FrostToggle
}

// Register components in browser
Object.keys(componentMapping)
  .forEach((tagName) => {
    const componentClass = componentMapping[tagName]
    document.registerElement(tagName, componentClass)
  })

export {
  FrostButton,
  FrostCheckbox,
  FrostCodeExample,
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
}
