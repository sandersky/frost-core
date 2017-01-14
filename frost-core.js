/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(5), __webpack_require__(6), __webpack_require__(9), __webpack_require__(10), __webpack_require__(11), __webpack_require__(12), __webpack_require__(20), __webpack_require__(13), __webpack_require__(14), __webpack_require__(15), __webpack_require__(16), __webpack_require__(17), __webpack_require__(18), __webpack_require__(19)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require('./components/frost-button'), require('./components/frost-checkbox'), require('./components/frost-code-example'), require('./components/frost-code-examples'), require('./components/frost-icon'), require('./components/frost-link'), require('./components/frost-password'), require('./components/frost-radio-button'), require('./components/frost-radio-group'), require('./components/frost-scroll'), require('./components/frost-select'), require('./components/frost-text'), require('./components/frost-textarea'), require('./components/frost-toggle'), require('document-register-element'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.frostButton, global.frostCheckbox, global.frostCodeExample, global.frostCodeExamples, global.frostIcon, global.frostLink, global.frostPassword, global.frostRadioButton, global.frostRadioGroup, global.frostScroll, global.frostSelect, global.frostText, global.frostTextarea, global.frostToggle, global.documentRegisterElement);
	    global.index = mod.exports;
	  }
	})(this, function (exports, _frostButton, _frostCheckbox, _frostCodeExample, _frostCodeExamples, _frostIcon, _frostLink, _frostPassword, _frostRadioButton, _frostRadioGroup, _frostScroll, _frostSelect, _frostText, _frostTextarea, _frostToggle) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.FrostToggle = exports.FrostTextarea = exports.FrostText = exports.FrostSelect = exports.FrostScroll = exports.FrostRadioGroup = exports.FrostRadioButton = exports.FrostPassword = exports.FrostLink = exports.FrostIcon = exports.FrostCodeExamples = exports.FrostCodeExample = exports.FrostCheckbox = exports.FrostButton = undefined;

	  var _frostButton2 = _interopRequireDefault(_frostButton);

	  var _frostCheckbox2 = _interopRequireDefault(_frostCheckbox);

	  var _frostCodeExample2 = _interopRequireDefault(_frostCodeExample);

	  var _frostCodeExamples2 = _interopRequireDefault(_frostCodeExamples);

	  var _frostIcon2 = _interopRequireDefault(_frostIcon);

	  var _frostLink2 = _interopRequireDefault(_frostLink);

	  var _frostPassword2 = _interopRequireDefault(_frostPassword);

	  var _frostRadioButton2 = _interopRequireDefault(_frostRadioButton);

	  var _frostRadioGroup2 = _interopRequireDefault(_frostRadioGroup);

	  var _frostScroll2 = _interopRequireDefault(_frostScroll);

	  var _frostSelect2 = _interopRequireDefault(_frostSelect);

	  var _frostText2 = _interopRequireDefault(_frostText);

	  var _frostTextarea2 = _interopRequireDefault(_frostTextarea);

	  var _frostToggle2 = _interopRequireDefault(_frostToggle);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  var componentMapping = {
	    'frost-button': _frostButton2.default,
	    'frost-checkbox': _frostCheckbox2.default,
	    'frost-code-example': _frostCodeExample2.default,
	    'frost-code-examples': _frostCodeExamples2.default,
	    'frost-icon': _frostIcon2.default,
	    'frost-link': _frostLink2.default,
	    'frost-password': _frostPassword2.default,
	    'frost-radio-button': _frostRadioButton2.default,
	    'frost-radio-group': _frostRadioGroup2.default,
	    'frost-scroll': _frostScroll2.default,
	    'frost-select': _frostSelect2.default,
	    'frost-text': _frostText2.default,
	    'frost-textarea': _frostTextarea2.default,
	    'frost-toggle': _frostToggle2.default
	  };

	  // Register components in browser
	  // Include polyfill for document.registerElement()
	  Object.keys(componentMapping).forEach(function (tagName) {
	    var componentClass = componentMapping[tagName];
	    document.registerElement(tagName, componentClass);
	  });

	  exports.FrostButton = _frostButton2.default;
	  exports.FrostCheckbox = _frostCheckbox2.default;
	  exports.FrostCodeExample = _frostCodeExample2.default;
	  exports.FrostCodeExamples = _frostCodeExamples2.default;
	  exports.FrostIcon = _frostIcon2.default;
	  exports.FrostLink = _frostLink2.default;
	  exports.FrostPassword = _frostPassword2.default;
	  exports.FrostRadioButton = _frostRadioButton2.default;
	  exports.FrostRadioGroup = _frostRadioGroup2.default;
	  exports.FrostScroll = _frostScroll2.default;
	  exports.FrostSelect = _frostSelect2.default;
	  exports.FrostText = _frostText2.default;
	  exports.FrostTextarea = _frostTextarea2.default;
	  exports.FrostToggle = _frostToggle2.default;
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require('../react'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.react);
	    global.frostButton = mod.exports;
	  }
	})(this, function (exports, _react) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.sizes = exports.priorities = undefined;

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }

	  var priorities = exports.priorities = ['primary', 'secondary', 'tertiary'];

	  var sizes = exports.sizes = ['large', 'medium', 'small'];

	  var FrostButtonBase = function (_HTMLButtonElement) {
	    _inherits(FrostButtonBase, _HTMLButtonElement);

	    function FrostButtonBase() {
	      _classCallCheck(this, FrostButtonBase);

	      return _possibleConstructorReturn(this, (FrostButtonBase.__proto__ || Object.getPrototypeOf(FrostButtonBase)).apply(this, arguments));
	    }

	    _createClass(FrostButtonBase, [{
	      key: 'getDefaultProps',
	      value: function getDefaultProps() {
	        return {
	          priority: 'tertiary',
	          size: 'medium'
	        };
	      }
	    }, {
	      key: 'propTypes',
	      get: function get() {
	        return {
	          priority: _react.PropTypes.oneOf(priorities),
	          size: _react.PropTypes.oneOf(sizes)
	        };
	      }
	    }]);

	    return FrostButtonBase;
	  }(HTMLButtonElement);

	  var FrostButton = function (_createComponent) {
	    _inherits(FrostButton, _createComponent);

	    function FrostButton() {
	      _classCallCheck(this, FrostButton);

	      return _possibleConstructorReturn(this, (FrostButton.__proto__ || Object.getPrototypeOf(FrostButton)).apply(this, arguments));
	    }

	    return FrostButton;
	  }((0, _react.createComponent)(FrostButtonBase));

	  exports.default = FrostButton;
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(3), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require('./component'), require('./prop-types'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.component, global.propTypes);
	    global.index = mod.exports;
	  }
	})(this, function (exports, _component, _propTypes) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  Object.defineProperty(exports, 'createComponent', {
	    enumerable: true,
	    get: function () {
	      return _component.createComponent;
	    }
	  });
	  Object.defineProperty(exports, 'PropTypes', {
	    enumerable: true,
	    get: function () {
	      return _propTypes.PropTypes;
	    }
	  });
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require('./prop-types'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.propTypes);
	    global.component = mod.exports;
	  }
	})(this, function (exports, _propTypes) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.createComponent = createComponent;

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }

	  var assign = Object.assign,
	      keys = Object.keys;


	  function getNewState(incomingState, state) {
	    var newState = {};

	    keys(state).forEach(function (key) {
	      if (key in incomingState) {
	        return;
	      }

	      newState[key] = state[key];
	    });

	    keys(incomingState).forEach(function (key) {
	      newState[key] = incomingState[key];
	    });

	    return newState;
	  }

	  function createComponent(superclass) {
	    return function (_superclass) {
	      _inherits(_class, _superclass);

	      function _class() {
	        _classCallCheck(this, _class);

	        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	      }

	      _createClass(_class, [{
	        key: 'createdCallback',
	        value: function createdCallback() {
	          var _this2 = this;

	          this.props = _propTypes.getInitialProps.call(this);
	          this.state = {};

	          if (this.propTypes) {
	            _propTypes.validatePropTypes.call(this);
	          }

	          if (this.getDefaultProps) {
	            _propTypes.applyDefaults.call(this, this.getDefaultProps());
	          }

	          this.setState = function (incomingState) {
	            var newState = getNewState(incomingState, _this2.state);
	            var prevState = _this2.state;

	            if (typeof _this2.componentWillUpdate === 'function') {
	              _this2.componentWillUpdate(_this2.props, newState);
	            }

	            assign(_this2.state, newState);

	            if (typeof _this2.render === 'function') {
	              _this2.render();
	            }

	            if (typeof _this2.componentDidUpdate === 'function') {
	              _this2.componentDidUpdate(_this2.props, prevState);
	            }
	          };

	          if (typeof this.componentWillMount === 'function') {
	            this.componentWillMount();
	          }

	          if (typeof this.render === 'function') {
	            this.innerHTML = this.render();
	          }
	        }
	      }, {
	        key: 'attachedCallback',
	        value: function attachedCallback() {
	          if (typeof this.componentDidMount === 'function') {
	            this.componentDidMount();
	          }
	        }
	      }, {
	        key: 'attributeChangedCallback',
	        value: function attributeChangedCallback(key, oldValue, newValue) {
	          var newProps = assign({}, this.props); // Create shallow clone of props
	          var prevProps = this.props;

	          newProps[key] = newValue;
	          this.props = newProps;

	          if (typeof this.render === 'function') {
	            this.render();
	          }

	          if (typeof this.componentDidUpdate === 'function') {
	            this.componentDidUpdate(prevProps, this.state);
	          }
	        }
	      }, {
	        key: 'detachedCallback',
	        value: function detachedCallback() {
	          if (typeof this.componentWillUnmount === 'function') {
	            this.componentWillUnmount();
	          }
	        }
	      }]);

	      return _class;
	    }(superclass);
	  }
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports);
	    global.propTypes = mod.exports;
	  }
	})(this, function (exports) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.applyDefaults = applyDefaults;
	  exports.getInitialProps = getInitialProps;
	  exports.validatePropTypes = validatePropTypes;

	  function _defineProperty(obj, key, value) {
	    if (key in obj) {
	      Object.defineProperty(obj, key, {
	        value: value,
	        enumerable: true,
	        configurable: true,
	        writable: true
	      });
	    } else {
	      obj[key] = value;
	    }

	    return obj;
	  }

	  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	  };

	  var assign = Object.assign,
	      keys = Object.keys;


	  /**
	   * Apply default property values to unset properties
	   * @param {Object} defaults - property defaults
	   */
	  function applyDefaults(defaults) {
	    var _this = this;

	    keys(defaults).forEach(function (key) {
	      if (!_this.props[key]) {
	        var value = defaults[key];
	        _this.props[key] = value; // Make sure property is on props for life cycle hooks
	        _this.setAttribute(key, value); // Make sure property is set in DOM for CSS selectors
	      }
	    });
	  }

	  /**
	   * Get initial values of properties passed in by consumer
	   * @returns {Object} initial property values
	   */
	  function getInitialProps() {
	    var _this2 = this;

	    if (_typeof(this.propTypes) !== 'object') {
	      return {};
	    }

	    return keys(this.propTypes).reduce(function (props, key) {
	      return assign(props, _defineProperty({}, key, _this2.getAttribute(key)));
	    }, {});
	  }

	  function isValuePresent(_ref) {
	    var key = _ref.key,
	        value = _ref.value,
	        required = _ref.required;

	    if (value !== null) {
	      return true;
	    }

	    if (required) {
	      throw new Error('propType "' + key + '" is required but not present');
	    }

	    return false;
	  }

	  function validatePropTypes() {
	    var _this3 = this;

	    keys(this.propTypes).forEach(function (key) {
	      var validator = _this3.propTypes[key];

	      if (typeof validator !== 'function') {
	        throw new Error('propType "' + key + '" is not a function as expected.');
	      }

	      validator({
	        key: key,
	        value: _this3.getAttribute(key)
	      });
	    });
	  }

	  var PropTypes = exports.PropTypes = {
	    oneOf: function oneOf(possibilities) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      return function (_ref2) {
	        var key = _ref2.key,
	            value = _ref2.value;

	        if (!isValuePresent({ key: key, value: value, required: options.required })) {
	          return;
	        }

	        var valid = possibilities.some(function (possibility) {
	          return possibility === value;
	        });

	        if (!valid) {
	          var expected = possibilities.map(function (possibility) {
	            return '\t* ' + possibility;
	          }).join('\n');

	          throw new Error('propType "' + key + '" was given value "' + value + '" which does not match' + (' one of the expected values:\n\n' + expected + '\n'));
	        }
	      };
	    },
	    string: function string() {
	      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	      return function (_ref3) {
	        var key = _ref3.key,
	            value = _ref3.value;

	        if (!isValuePresent({ key: key, value: value, required: options.required })) {
	          return;
	        }

	        var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

	        if (type !== 'string') {
	          var vowels = ['a', 'e', 'i', 'o', 'u'];
	          var determiner = vowels.indexOf(type[0]) === -1 ? 'a' : 'an';

	          throw new Error('propType "' + key + '" was given ' + determiner + ' ' + type + ' when it expected' + 'a string');
	        }
	      };
	    }
	  };
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require('../react'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.react);
	    global.frostCheckbox = mod.exports;
	  }
	})(this, function (exports, _react) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }

	  var FrostCheckboxBase = function (_HTMLInputElement) {
	    _inherits(FrostCheckboxBase, _HTMLInputElement);

	    function FrostCheckboxBase() {
	      _classCallCheck(this, FrostCheckboxBase);

	      return _possibleConstructorReturn(this, (FrostCheckboxBase.__proto__ || Object.getPrototypeOf(FrostCheckboxBase)).apply(this, arguments));
	    }

	    _createClass(FrostCheckboxBase, [{
	      key: 'getDefaultProps',
	      value: function getDefaultProps() {
	        return {};
	      }
	    }, {
	      key: 'propTypes',
	      get: function get() {
	        return {};
	      }
	    }]);

	    return FrostCheckboxBase;
	  }(HTMLInputElement);

	  var FrostCheckbox = function (_createComponent) {
	    _inherits(FrostCheckbox, _createComponent);

	    function FrostCheckbox() {
	      _classCallCheck(this, FrostCheckbox);

	      return _possibleConstructorReturn(this, (FrostCheckbox.__proto__ || Object.getPrototypeOf(FrostCheckbox)).apply(this, arguments));
	    }

	    return FrostCheckbox;
	  }((0, _react.createComponent)(FrostCheckboxBase));

	  exports.default = FrostCheckbox;
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(7), __webpack_require__(2), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require('prismjs'), require('../react'), require('../utils/text'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.prismjs, global.react, global.text);
	    global.frostCodeExample = mod.exports;
	  }
	})(this, function (exports, _prismjs, _react, _text) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  var _prismjs2 = _interopRequireDefault(_prismjs);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      default: obj
	    };
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }

	  var FrostCodeExampleBase = function (_HTMLDivElement) {
	    _inherits(FrostCodeExampleBase, _HTMLDivElement);

	    function FrostCodeExampleBase() {
	      _classCallCheck(this, FrostCodeExampleBase);

	      return _possibleConstructorReturn(this, (FrostCodeExampleBase.__proto__ || Object.getPrototypeOf(FrostCodeExampleBase)).apply(this, arguments));
	    }

	    _createClass(FrostCodeExampleBase, [{
	      key: 'componentWillMount',
	      value: function componentWillMount() {
	        this.setState({
	          example: (0, _text.trimSuperfluousLeadingWhitespace)(this.innerHTML)
	        });
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var example = _prismjs2.default.highlight(this.state.example, _prismjs2.default.languages.html);
	        var lang = 'language-html';

	        return '\n      <h4>Example</h4>\n      ' + this.state.example + '\n      <pre class="' + lang + '"><code class="' + lang + '">' + example + '</code></pre>\n    ';
	      }
	    }]);

	    return FrostCodeExampleBase;
	  }(HTMLDivElement);

	  var FrostCodeExample = function (_createComponent) {
	    _inherits(FrostCodeExample, _createComponent);

	    function FrostCodeExample() {
	      _classCallCheck(this, FrostCodeExample);

	      return _possibleConstructorReturn(this, (FrostCodeExample.__proto__ || Object.getPrototypeOf(FrostCodeExample)).apply(this, arguments));
	    }

	    return FrostCodeExample;
	  }((0, _react.createComponent)(FrostCodeExampleBase));

	  exports.default = FrostCodeExample;
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports !== "undefined") {
			factory(module);
		} else {
			var mod = {
				exports: {}
			};
			factory(mod);
			global.prism = mod.exports;
		}
	})(this, function (module) {
		'use strict';

		/* **********************************************
	      Begin prism-core.js
	 ********************************************** */

		var _self = typeof window !== 'undefined' ? window // if in browser
		: typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self // if in worker
		: {} // if in node js
		;

		/**
	  * Prism: Lightweight, robust, elegant syntax highlighting
	  * MIT license http://www.opensource.org/licenses/mit-license.php/
	  * @author Lea Verou http://lea.verou.me
	  */

		var Prism = function () {

			// Private helper vars
			var lang = /\blang(?:uage)?-(\w+)\b/i;
			var uniqueId = 0;

			var _ = _self.Prism = {
				util: {
					encode: function encode(tokens) {
						if (tokens instanceof Token) {
							return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
						} else if (_.util.type(tokens) === 'Array') {
							return tokens.map(_.util.encode);
						} else {
							return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
						}
					},

					type: function type(o) {
						return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
					},

					objId: function objId(obj) {
						if (!obj['__id']) {
							Object.defineProperty(obj, '__id', { value: ++uniqueId });
						}
						return obj['__id'];
					},

					// Deep clone a language definition (e.g. to extend it)
					clone: function clone(o) {
						var type = _.util.type(o);

						switch (type) {
							case 'Object':
								var clone = {};

								for (var key in o) {
									if (o.hasOwnProperty(key)) {
										clone[key] = _.util.clone(o[key]);
									}
								}

								return clone;

							case 'Array':
								// Check for existence for IE8
								return o.map && o.map(function (v) {
									return _.util.clone(v);
								});
						}

						return o;
					}
				},

				languages: {
					extend: function extend(id, redef) {
						var lang = _.util.clone(_.languages[id]);

						for (var key in redef) {
							lang[key] = redef[key];
						}

						return lang;
					},

					/**
	     * Insert a token before another token in a language literal
	     * As this needs to recreate the object (we cannot actually insert before keys in object literals),
	     * we cannot just provide an object, we need anobject and a key.
	     * @param inside The key (or language id) of the parent
	     * @param before The key to insert before. If not provided, the function appends instead.
	     * @param insert Object with the key/value pairs to insert
	     * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
	     */
					insertBefore: function insertBefore(inside, before, insert, root) {
						root = root || _.languages;
						var grammar = root[inside];

						if (arguments.length == 2) {
							insert = arguments[1];

							for (var newToken in insert) {
								if (insert.hasOwnProperty(newToken)) {
									grammar[newToken] = insert[newToken];
								}
							}

							return grammar;
						}

						var ret = {};

						for (var token in grammar) {

							if (grammar.hasOwnProperty(token)) {

								if (token == before) {

									for (var newToken in insert) {

										if (insert.hasOwnProperty(newToken)) {
											ret[newToken] = insert[newToken];
										}
									}
								}

								ret[token] = grammar[token];
							}
						}

						// Update references in other language definitions
						_.languages.DFS(_.languages, function (key, value) {
							if (value === root[inside] && key != inside) {
								this[key] = ret;
							}
						});

						return root[inside] = ret;
					},

					// Traverse a language definition with Depth First Search
					DFS: function DFS(o, callback, type, visited) {
						visited = visited || {};
						for (var i in o) {
							if (o.hasOwnProperty(i)) {
								callback.call(o, i, o[i], type || i);

								if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
									visited[_.util.objId(o[i])] = true;
									_.languages.DFS(o[i], callback, null, visited);
								} else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
									visited[_.util.objId(o[i])] = true;
									_.languages.DFS(o[i], callback, i, visited);
								}
							}
						}
					}
				},
				plugins: {},

				highlightAll: function highlightAll(async, callback) {
					var env = {
						callback: callback,
						selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
					};

					_.hooks.run("before-highlightall", env);

					var elements = env.elements || document.querySelectorAll(env.selector);

					for (var i = 0, element; element = elements[i++];) {
						_.highlightElement(element, async === true, env.callback);
					}
				},

				highlightElement: function highlightElement(element, async, callback) {
					// Find language
					var language,
					    grammar,
					    parent = element;

					while (parent && !lang.test(parent.className)) {
						parent = parent.parentNode;
					}

					if (parent) {
						language = (parent.className.match(lang) || [, ''])[1].toLowerCase();
						grammar = _.languages[language];
					}

					// Set language on the element, if not present
					element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

					// Set language on the parent, for styling
					parent = element.parentNode;

					if (/pre/i.test(parent.nodeName)) {
						parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
					}

					var code = element.textContent;

					var env = {
						element: element,
						language: language,
						grammar: grammar,
						code: code
					};

					_.hooks.run('before-sanity-check', env);

					if (!env.code || !env.grammar) {
						if (env.code) {
							env.element.textContent = env.code;
						}
						_.hooks.run('complete', env);
						return;
					}

					_.hooks.run('before-highlight', env);

					if (async && _self.Worker) {
						var worker = new Worker(_.filename);

						worker.onmessage = function (evt) {
							env.highlightedCode = evt.data;

							_.hooks.run('before-insert', env);

							env.element.innerHTML = env.highlightedCode;

							callback && callback.call(env.element);
							_.hooks.run('after-highlight', env);
							_.hooks.run('complete', env);
						};

						worker.postMessage(JSON.stringify({
							language: env.language,
							code: env.code,
							immediateClose: true
						}));
					} else {
						env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

						_.hooks.run('before-insert', env);

						env.element.innerHTML = env.highlightedCode;

						callback && callback.call(element);

						_.hooks.run('after-highlight', env);
						_.hooks.run('complete', env);
					}
				},

				highlight: function highlight(text, grammar, language) {
					var tokens = _.tokenize(text, grammar);
					return Token.stringify(_.util.encode(tokens), language);
				},

				tokenize: function tokenize(text, grammar, language) {
					var Token = _.Token;

					var strarr = [text];

					var rest = grammar.rest;

					if (rest) {
						for (var token in rest) {
							grammar[token] = rest[token];
						}

						delete grammar.rest;
					}

					tokenloop: for (var token in grammar) {
						if (!grammar.hasOwnProperty(token) || !grammar[token]) {
							continue;
						}

						var patterns = grammar[token];
						patterns = _.util.type(patterns) === "Array" ? patterns : [patterns];

						for (var j = 0; j < patterns.length; ++j) {
							var pattern = patterns[j],
							    inside = pattern.inside,
							    lookbehind = !!pattern.lookbehind,
							    greedy = !!pattern.greedy,
							    lookbehindLength = 0,
							    alias = pattern.alias;

							if (greedy && !pattern.pattern.global) {
								// Without the global flag, lastIndex won't work
								var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
								pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
							}

							pattern = pattern.pattern || pattern;

							// Don’t cache length as it changes during the loop
							for (var i = 0, pos = 0; i < strarr.length; pos += strarr[i].length, ++i) {

								var str = strarr[i];

								if (strarr.length > text.length) {
									// Something went terribly wrong, ABORT, ABORT!
									break tokenloop;
								}

								if (str instanceof Token) {
									continue;
								}

								pattern.lastIndex = 0;

								var match = pattern.exec(str),
								    delNum = 1;

								// Greedy patterns can override/remove up to two previously matched tokens
								if (!match && greedy && i != strarr.length - 1) {
									pattern.lastIndex = pos;
									match = pattern.exec(text);
									if (!match) {
										break;
									}

									var from = match.index + (lookbehind ? match[1].length : 0),
									    to = match.index + match[0].length,
									    k = i,
									    p = pos;

									for (var len = strarr.length; k < len && p < to; ++k) {
										p += strarr[k].length;
										// Move the index i to the element in strarr that is closest to from
										if (from >= p) {
											++i;
											pos = p;
										}
									}

									/*
	         * If strarr[i] is a Token, then the match starts inside another Token, which is invalid
	         * If strarr[k - 1] is greedy we are in conflict with another greedy pattern
	         */
									if (strarr[i] instanceof Token || strarr[k - 1].greedy) {
										continue;
									}

									// Number of tokens to delete and replace with the new match
									delNum = k - i;
									str = text.slice(pos, p);
									match.index -= pos;
								}

								if (!match) {
									continue;
								}

								if (lookbehind) {
									lookbehindLength = match[1].length;
								}

								var from = match.index + lookbehindLength,
								    match = match[0].slice(lookbehindLength),
								    to = from + match.length,
								    before = str.slice(0, from),
								    after = str.slice(to);

								var args = [i, delNum];

								if (before) {
									args.push(before);
								}

								var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);

								args.push(wrapped);

								if (after) {
									args.push(after);
								}

								Array.prototype.splice.apply(strarr, args);
							}
						}
					}

					return strarr;
				},

				hooks: {
					all: {},

					add: function add(name, callback) {
						var hooks = _.hooks.all;

						hooks[name] = hooks[name] || [];

						hooks[name].push(callback);
					},

					run: function run(name, env) {
						var callbacks = _.hooks.all[name];

						if (!callbacks || !callbacks.length) {
							return;
						}

						for (var i = 0, callback; callback = callbacks[i++];) {
							callback(env);
						}
					}
				}
			};

			var Token = _.Token = function (type, content, alias, matchedStr, greedy) {
				this.type = type;
				this.content = content;
				this.alias = alias;
				// Copy of the full string this token was created from
				this.length = (matchedStr || "").length | 0;
				this.greedy = !!greedy;
			};

			Token.stringify = function (o, language, parent) {
				if (typeof o == 'string') {
					return o;
				}

				if (_.util.type(o) === 'Array') {
					return o.map(function (element) {
						return Token.stringify(element, language, o);
					}).join('');
				}

				var env = {
					type: o.type,
					content: Token.stringify(o.content, language, parent),
					tag: 'span',
					classes: ['token', o.type],
					attributes: {},
					language: language,
					parent: parent
				};

				if (env.type == 'comment') {
					env.attributes['spellcheck'] = 'true';
				}

				if (o.alias) {
					var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
					Array.prototype.push.apply(env.classes, aliases);
				}

				_.hooks.run('wrap', env);

				var attributes = Object.keys(env.attributes).map(function (name) {
					return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
				}).join(' ');

				return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';
			};

			if (!_self.document) {
				if (!_self.addEventListener) {
					// in Node.js
					return _self.Prism;
				}
				// In worker
				_self.addEventListener('message', function (evt) {
					var message = JSON.parse(evt.data),
					    lang = message.language,
					    code = message.code,
					    immediateClose = message.immediateClose;

					_self.postMessage(_.highlight(code, _.languages[lang], lang));
					if (immediateClose) {
						_self.close();
					}
				}, false);

				return _self.Prism;
			}

			//Get current script and highlight
			var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

			if (script) {
				_.filename = script.src;

				if (document.addEventListener && !script.hasAttribute('data-manual')) {
					if (document.readyState !== "loading") {
						if (window.requestAnimationFrame) {
							window.requestAnimationFrame(_.highlightAll);
						} else {
							window.setTimeout(_.highlightAll, 16);
						}
					} else {
						document.addEventListener('DOMContentLoaded', _.highlightAll);
					}
				}
			}

			return _self.Prism;
		}();

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = Prism;
		}

		// hack for components to work correctly in node.js
		if (typeof global !== 'undefined') {
			global.Prism = Prism;
		}

		/* **********************************************
	      Begin prism-markup.js
	 ********************************************** */

		Prism.languages.markup = {
			'comment': /<!--[\w\W]*?-->/,
			'prolog': /<\?[\w\W]+?\?>/,
			'doctype': /<!DOCTYPE[\w\W]+?>/i,
			'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
			'tag': {
				pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
				inside: {
					'tag': {
						pattern: /^<\/?[^\s>\/]+/i,
						inside: {
							'punctuation': /^<\/?/,
							'namespace': /^[^\s>\/:]+:/
						}
					},
					'attr-value': {
						pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
						inside: {
							'punctuation': /[=>"']/
						}
					},
					'punctuation': /\/?>/,
					'attr-name': {
						pattern: /[^\s>\/]+/,
						inside: {
							'namespace': /^[^\s>\/:]+:/
						}
					}

				}
			},
			'entity': /&#?[\da-z]{1,8};/i
		};

		// Plugin to make entity title show the real entity, idea by Roman Komarov
		Prism.hooks.add('wrap', function (env) {

			if (env.type === 'entity') {
				env.attributes['title'] = env.content.replace(/&amp;/, '&');
			}
		});

		Prism.languages.xml = Prism.languages.markup;
		Prism.languages.html = Prism.languages.markup;
		Prism.languages.mathml = Prism.languages.markup;
		Prism.languages.svg = Prism.languages.markup;

		/* **********************************************
	      Begin prism-css.js
	 ********************************************** */

		Prism.languages.css = {
			'comment': /\/\*[\w\W]*?\*\//,
			'atrule': {
				pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
				inside: {
					'rule': /@[\w-]+/
					// See rest below
				}
			},
			'url': /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
			'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
			'string': {
				pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
				greedy: true
			},
			'property': /(\b|\B)[\w-]+(?=\s*:)/i,
			'important': /\B!important\b/i,
			'function': /[-a-z0-9]+(?=\()/i,
			'punctuation': /[(){};:]/
		};

		Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);

		if (Prism.languages.markup) {
			Prism.languages.insertBefore('markup', 'tag', {
				'style': {
					pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
					lookbehind: true,
					inside: Prism.languages.css,
					alias: 'language-css'
				}
			});

			Prism.languages.insertBefore('inside', 'attr-value', {
				'style-attr': {
					pattern: /\s*style=("|').*?\1/i,
					inside: {
						'attr-name': {
							pattern: /^\s*style/i,
							inside: Prism.languages.markup.tag.inside
						},
						'punctuation': /^\s*=\s*['"]|['"]\s*$/,
						'attr-value': {
							pattern: /.+/i,
							inside: Prism.languages.css
						}
					},
					alias: 'language-css'
				}
			}, Prism.languages.markup.tag);
		}

		/* **********************************************
	      Begin prism-clike.js
	 ********************************************** */

		Prism.languages.clike = {
			'comment': [{
				pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
				lookbehind: true
			}, {
				pattern: /(^|[^\\:])\/\/.*/,
				lookbehind: true
			}],
			'string': {
				pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
				greedy: true
			},
			'class-name': {
				pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
				lookbehind: true,
				inside: {
					punctuation: /(\.|\\)/
				}
			},
			'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
			'boolean': /\b(true|false)\b/,
			'function': /[a-z0-9_]+(?=\()/i,
			'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
			'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
			'punctuation': /[{}[\];(),.:]/
		};

		/* **********************************************
	      Begin prism-javascript.js
	 ********************************************** */

		Prism.languages.javascript = Prism.languages.extend('clike', {
			'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
			'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
			// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
			'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
			'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/
		});

		Prism.languages.insertBefore('javascript', 'keyword', {
			'regex': {
				pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
				lookbehind: true,
				greedy: true
			}
		});

		Prism.languages.insertBefore('javascript', 'string', {
			'template-string': {
				pattern: /`(?:\\\\|\\?[^\\])*?`/,
				greedy: true,
				inside: {
					'interpolation': {
						pattern: /\$\{[^}]+\}/,
						inside: {
							'interpolation-punctuation': {
								pattern: /^\$\{|\}$/,
								alias: 'punctuation'
							},
							rest: Prism.languages.javascript
						}
					},
					'string': /[\s\S]+/
				}
			}
		});

		if (Prism.languages.markup) {
			Prism.languages.insertBefore('markup', 'tag', {
				'script': {
					pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
					lookbehind: true,
					inside: Prism.languages.javascript,
					alias: 'language-javascript'
				}
			});
		}

		Prism.languages.js = Prism.languages.javascript;

		/* **********************************************
	      Begin prism-file-highlight.js
	 ********************************************** */

		(function () {
			if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
				return;
			}

			self.Prism.fileHighlight = function () {

				var Extensions = {
					'js': 'javascript',
					'py': 'python',
					'rb': 'ruby',
					'ps1': 'powershell',
					'psm1': 'powershell',
					'sh': 'bash',
					'bat': 'batch',
					'h': 'c',
					'tex': 'latex'
				};

				if (Array.prototype.forEach) {
					// Check to prevent error in IE8
					Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
						var src = pre.getAttribute('data-src');

						var language,
						    parent = pre;
						var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
						while (parent && !lang.test(parent.className)) {
							parent = parent.parentNode;
						}

						if (parent) {
							language = (pre.className.match(lang) || [, ''])[1];
						}

						if (!language) {
							var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
							language = Extensions[extension] || extension;
						}

						var code = document.createElement('code');
						code.className = 'language-' + language;

						pre.textContent = '';

						code.textContent = 'Loading…';

						pre.appendChild(code);

						var xhr = new XMLHttpRequest();

						xhr.open('GET', src, true);

						xhr.onreadystatechange = function () {
							if (xhr.readyState == 4) {

								if (xhr.status < 400 && xhr.responseText) {
									code.textContent = xhr.responseText;

									Prism.highlightElement(code);
								} else if (xhr.status >= 400) {
									code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
								} else {
									code.textContent = '✖ Error: File does not exist or is empty';
								}
							}
						};

						xhr.send(null);
					});
				}
			};

			document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);
		})();
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports);
	    global.text = mod.exports;
	  }
	})(this, function (exports) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports.trimSuperfluousLeadingWhitespace = trimSuperfluousLeadingWhitespace;
	  /**
	   * Trim superfluous leading whitespace from text so all content is shifted to
	   * left edge when renderered in a <pre> tag. Essentially the same thing as
	   * pressing Shift + Tab multiple times in a modern text editor to get the
	   * content next to the left gutter.
	   * @param {String} text - text to trim
	   * @returns {String} trimmed text
	   */
	  function trimSuperfluousLeadingWhitespace(text) {
	    var lines = text.split('\n');

	    var trimCount = lines.map(function (line) {
	      return line.match(/(\s+)[^\s]/);
	    }) // Find leading whitespace
	    .filter(function (matches) {
	      return matches !== null;
	    }) // Filter out lines w/o leading whitepsace
	    .map(function (matches) {
	      return matches[1];
	    }) // Get leading whitespace (ignoring 1st non whitespace character)
	    .map(function (leadingWhitespace) {
	      return leadingWhitespace.length;
	    }) // Get count of leading whitespace chars
	    .reduce(function (a, b) {
	      return Math.min(a, b);
	    }, Infinity); // Get superfluous leading whitespace count

	    return lines.map(function (line) {
	      return line.substring(trimCount);
	    }) // Remove superfluous leading whitespace from every line
	    .join('\n').trim();
	  }
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require('../react'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.react);
	    global.frostCodeExamples = mod.exports;
	  }
	})(this, function (exports, _react) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }

	  var FrostCodeExamplesBase = function (_HTMLDivElement) {
	    _inherits(FrostCodeExamplesBase, _HTMLDivElement);

	    function FrostCodeExamplesBase() {
	      _classCallCheck(this, FrostCodeExamplesBase);

	      return _possibleConstructorReturn(this, (FrostCodeExamplesBase.__proto__ || Object.getPrototypeOf(FrostCodeExamplesBase)).apply(this, arguments));
	    }

	    return FrostCodeExamplesBase;
	  }(HTMLDivElement);

	  var FrostCodeExamples = function (_createComponent) {
	    _inherits(FrostCodeExamples, _createComponent);

	    function FrostCodeExamples() {
	      _classCallCheck(this, FrostCodeExamples);

	      return _possibleConstructorReturn(this, (FrostCodeExamples.__proto__ || Object.getPrototypeOf(FrostCodeExamples)).apply(this, arguments));
	    }

	    return FrostCodeExamples;
	  }((0, _react.createComponent)(FrostCodeExamplesBase));

	  exports.default = FrostCodeExamples;
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require('../react'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.react);
	    global.frostIcon = mod.exports;
	  }
	})(this, function (exports, _react) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }

	  var FrostIconBase = function (_HTMLElement) {
	    _inherits(FrostIconBase, _HTMLElement);

	    function FrostIconBase() {
	      _classCallCheck(this, FrostIconBase);

	      return _possibleConstructorReturn(this, (FrostIconBase.__proto__ || Object.getPrototypeOf(FrostIconBase)).apply(this, arguments));
	    }

	    _createClass(FrostIconBase, [{
	      key: 'getDefaultProps',
	      value: function getDefaultProps() {
	        return {};
	      }
	    }, {
	      key: 'propTypes',
	      get: function get() {
	        return {};
	      }
	    }]);

	    return FrostIconBase;
	  }(HTMLElement);

	  var FrostIcon = function (_createComponent) {
	    _inherits(FrostIcon, _createComponent);

	    function FrostIcon() {
	      _classCallCheck(this, FrostIcon);

	      return _possibleConstructorReturn(this, (FrostIcon.__proto__ || Object.getPrototypeOf(FrostIcon)).apply(this, arguments));
	    }

	    return FrostIcon;
	  }((0, _react.createComponent)(FrostIconBase));

	  exports.default = FrostIcon;
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require('../react'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.react);
	    global.frostLink = mod.exports;
	  }
	})(this, function (exports, _react) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }

	  var FrostLinkBase = function (_HTMLAnchorElement) {
	    _inherits(FrostLinkBase, _HTMLAnchorElement);

	    function FrostLinkBase() {
	      _classCallCheck(this, FrostLinkBase);

	      return _possibleConstructorReturn(this, (FrostLinkBase.__proto__ || Object.getPrototypeOf(FrostLinkBase)).apply(this, arguments));
	    }

	    _createClass(FrostLinkBase, [{
	      key: 'getDefaultProps',
	      value: function getDefaultProps() {
	        return {};
	      }
	    }, {
	      key: 'propTypes',
	      get: function get() {
	        return {};
	      }
	    }]);

	    return FrostLinkBase;
	  }(HTMLAnchorElement);

	  var FrostLink = function (_createComponent) {
	    _inherits(FrostLink, _createComponent);

	    function FrostLink() {
	      _classCallCheck(this, FrostLink);

	      return _possibleConstructorReturn(this, (FrostLink.__proto__ || Object.getPrototypeOf(FrostLink)).apply(this, arguments));
	    }

	    return FrostLink;
	  }((0, _react.createComponent)(FrostLinkBase));

	  exports.default = FrostLink;
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require('../react'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.react);
	    global.frostPassword = mod.exports;
	  }
	})(this, function (exports, _react) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }

	  var FrostPasswordBase = function (_HTMLInputElement) {
	    _inherits(FrostPasswordBase, _HTMLInputElement);

	    function FrostPasswordBase() {
	      _classCallCheck(this, FrostPasswordBase);

	      return _possibleConstructorReturn(this, (FrostPasswordBase.__proto__ || Object.getPrototypeOf(FrostPasswordBase)).apply(this, arguments));
	    }

	    _createClass(FrostPasswordBase, [{
	      key: 'getDefaultProps',
	      value: function getDefaultProps() {
	        return {};
	      }
	    }, {
	      key: 'propTypes',
	      get: function get() {
	        return {};
	      }
	    }]);

	    return FrostPasswordBase;
	  }(HTMLInputElement);

	  var FrostPassword = function (_createComponent) {
	    _inherits(FrostPassword, _createComponent);

	    function FrostPassword() {
	      _classCallCheck(this, FrostPassword);

	      return _possibleConstructorReturn(this, (FrostPassword.__proto__ || Object.getPrototypeOf(FrostPassword)).apply(this, arguments));
	    }

	    return FrostPassword;
	  }((0, _react.createComponent)(FrostPasswordBase));

	  exports.default = FrostPassword;
	});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require('../react'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.react);
	    global.frostRadioGroup = mod.exports;
	  }
	})(this, function (exports, _react) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }

	  var FrostRadioGroupBase = function (_HTMLInputElement) {
	    _inherits(FrostRadioGroupBase, _HTMLInputElement);

	    function FrostRadioGroupBase() {
	      _classCallCheck(this, FrostRadioGroupBase);

	      return _possibleConstructorReturn(this, (FrostRadioGroupBase.__proto__ || Object.getPrototypeOf(FrostRadioGroupBase)).apply(this, arguments));
	    }

	    _createClass(FrostRadioGroupBase, [{
	      key: 'getDefaultProps',
	      value: function getDefaultProps() {
	        return {};
	      }
	    }, {
	      key: 'propTypes',
	      get: function get() {
	        return {};
	      }
	    }]);

	    return FrostRadioGroupBase;
	  }(HTMLInputElement);

	  var FrostRadioGroup = function (_createComponent) {
	    _inherits(FrostRadioGroup, _createComponent);

	    function FrostRadioGroup() {
	      _classCallCheck(this, FrostRadioGroup);

	      return _possibleConstructorReturn(this, (FrostRadioGroup.__proto__ || Object.getPrototypeOf(FrostRadioGroup)).apply(this, arguments));
	    }

	    return FrostRadioGroup;
	  }((0, _react.createComponent)(FrostRadioGroupBase));

	  exports.default = FrostRadioGroup;
	});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require('../react'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.react);
	    global.frostScroll = mod.exports;
	  }
	})(this, function (exports, _react) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }

	  var FrostScrollBase = function (_HTMLDivElement) {
	    _inherits(FrostScrollBase, _HTMLDivElement);

	    function FrostScrollBase() {
	      _classCallCheck(this, FrostScrollBase);

	      return _possibleConstructorReturn(this, (FrostScrollBase.__proto__ || Object.getPrototypeOf(FrostScrollBase)).apply(this, arguments));
	    }

	    _createClass(FrostScrollBase, [{
	      key: 'getDefaultProps',
	      value: function getDefaultProps() {
	        return {};
	      }
	    }, {
	      key: 'propTypes',
	      get: function get() {
	        return {};
	      }
	    }]);

	    return FrostScrollBase;
	  }(HTMLDivElement);

	  var FrostScroll = function (_createComponent) {
	    _inherits(FrostScroll, _createComponent);

	    function FrostScroll() {
	      _classCallCheck(this, FrostScroll);

	      return _possibleConstructorReturn(this, (FrostScroll.__proto__ || Object.getPrototypeOf(FrostScroll)).apply(this, arguments));
	    }

	    return FrostScroll;
	  }((0, _react.createComponent)(FrostScrollBase));

	  exports.default = FrostScroll;
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require('../react'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.react);
	    global.frostSelect = mod.exports;
	  }
	})(this, function (exports, _react) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }

	  var FrostSelectBase = function (_HTMLSelectElement) {
	    _inherits(FrostSelectBase, _HTMLSelectElement);

	    function FrostSelectBase() {
	      _classCallCheck(this, FrostSelectBase);

	      return _possibleConstructorReturn(this, (FrostSelectBase.__proto__ || Object.getPrototypeOf(FrostSelectBase)).apply(this, arguments));
	    }

	    _createClass(FrostSelectBase, [{
	      key: 'getDefaultProps',
	      value: function getDefaultProps() {
	        return {};
	      }
	    }, {
	      key: 'propTypes',
	      get: function get() {
	        return {};
	      }
	    }]);

	    return FrostSelectBase;
	  }(HTMLSelectElement);

	  var FrostSelect = function (_createComponent) {
	    _inherits(FrostSelect, _createComponent);

	    function FrostSelect() {
	      _classCallCheck(this, FrostSelect);

	      return _possibleConstructorReturn(this, (FrostSelect.__proto__ || Object.getPrototypeOf(FrostSelect)).apply(this, arguments));
	    }

	    return FrostSelect;
	  }((0, _react.createComponent)(FrostSelectBase));

	  exports.default = FrostSelect;
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require('../react'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.react);
	    global.frostText = mod.exports;
	  }
	})(this, function (exports, _react) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }

	  var FrostTextBase = function (_HTMLInputElement) {
	    _inherits(FrostTextBase, _HTMLInputElement);

	    function FrostTextBase() {
	      _classCallCheck(this, FrostTextBase);

	      return _possibleConstructorReturn(this, (FrostTextBase.__proto__ || Object.getPrototypeOf(FrostTextBase)).apply(this, arguments));
	    }

	    _createClass(FrostTextBase, [{
	      key: 'getDefaultProps',
	      value: function getDefaultProps() {
	        return {};
	      }
	    }, {
	      key: 'propTypes',
	      get: function get() {
	        return {};
	      }
	    }]);

	    return FrostTextBase;
	  }(HTMLInputElement);

	  var FrostText = function (_createComponent) {
	    _inherits(FrostText, _createComponent);

	    function FrostText() {
	      _classCallCheck(this, FrostText);

	      return _possibleConstructorReturn(this, (FrostText.__proto__ || Object.getPrototypeOf(FrostText)).apply(this, arguments));
	    }

	    return FrostText;
	  }((0, _react.createComponent)(FrostTextBase));

	  exports.default = FrostText;
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require('../react'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.react);
	    global.frostTextarea = mod.exports;
	  }
	})(this, function (exports, _react) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }

	  var FrostTextareaBase = function (_HTMLInputElement) {
	    _inherits(FrostTextareaBase, _HTMLInputElement);

	    function FrostTextareaBase() {
	      _classCallCheck(this, FrostTextareaBase);

	      return _possibleConstructorReturn(this, (FrostTextareaBase.__proto__ || Object.getPrototypeOf(FrostTextareaBase)).apply(this, arguments));
	    }

	    _createClass(FrostTextareaBase, [{
	      key: 'getDefaultProps',
	      value: function getDefaultProps() {
	        return {};
	      }
	    }, {
	      key: 'propTypes',
	      get: function get() {
	        return {};
	      }
	    }]);

	    return FrostTextareaBase;
	  }(HTMLInputElement);

	  var FrostTextarea = function (_createComponent) {
	    _inherits(FrostTextarea, _createComponent);

	    function FrostTextarea() {
	      _classCallCheck(this, FrostTextarea);

	      return _possibleConstructorReturn(this, (FrostTextarea.__proto__ || Object.getPrototypeOf(FrostTextarea)).apply(this, arguments));
	    }

	    return FrostTextarea;
	  }((0, _react.createComponent)(FrostTextareaBase));

	  exports.default = FrostTextarea;
	});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require('../react'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.react);
	    global.frostToggle = mod.exports;
	  }
	})(this, function (exports, _react) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }

	  var FrostToggleBase = function (_HTMLInputElement) {
	    _inherits(FrostToggleBase, _HTMLInputElement);

	    function FrostToggleBase() {
	      _classCallCheck(this, FrostToggleBase);

	      return _possibleConstructorReturn(this, (FrostToggleBase.__proto__ || Object.getPrototypeOf(FrostToggleBase)).apply(this, arguments));
	    }

	    _createClass(FrostToggleBase, [{
	      key: 'getDefaultProps',
	      value: function getDefaultProps() {
	        return {};
	      }
	    }, {
	      key: 'propTypes',
	      get: function get() {
	        return {};
	      }
	    }]);

	    return FrostToggleBase;
	  }(HTMLInputElement);

	  var FrostToggle = function (_createComponent) {
	    _inherits(FrostToggle, _createComponent);

	    function FrostToggle() {
	      _classCallCheck(this, FrostToggle);

	      return _possibleConstructorReturn(this, (FrostToggle.__proto__ || Object.getPrototypeOf(FrostToggle)).apply(this, arguments));
	    }

	    return FrostToggle;
	  }((0, _react.createComponent)(FrostToggleBase));

	  exports.default = FrostToggle;
	});

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(module);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod);
	    global.documentRegisterElementNode = mod.exports;
	  }
	})(this, function (module) {
	  'use strict';

	  /*!
	  
	  Copyright (C) 2014-2016 by Andrea Giammarchi - @WebReflection
	  
	  Permission is hereby granted, free of charge, to any person obtaining a copy
	  of this software and associated documentation files (the "Software"), to deal
	  in the Software without restriction, including without limitation the rights
	  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	  copies of the Software, and to permit persons to whom the Software is
	  furnished to do so, subject to the following conditions:
	  
	  The above copyright notice and this permission notice shall be included in
	  all copies or substantial portions of the Software.
	  
	  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	  THE SOFTWARE.
	  
	  */
	  // global window Object
	  // optional polyfill info
	  //    'auto' used by default, everything is feature detected
	  //    'force' use the polyfill even if not fully needed
	  function installCustomElements(window, polyfill) {
	    'use strict';

	    // DO NOT USE THIS FILE DIRECTLY, IT WON'T WORK
	    // THIS IS A PROJECT BASED ON A BUILD SYSTEM
	    // THIS FILE IS JUST WRAPPED UP RESULTING IN
	    // build/document-register-element.node.js

	    var document = window.document,
	        Object = window.Object;

	    var htmlClass = function (info) {
	      // (C) Andrea Giammarchi - @WebReflection - MIT Style
	      var catchClass = /^[A-Z]+[a-z]/,
	          filterBy = function filterBy(re) {
	        var arr = [],
	            tag;
	        for (tag in register) {
	          if (re.test(tag)) arr.push(tag);
	        }
	        return arr;
	      },
	          add = function add(Class, tag) {
	        tag = tag.toLowerCase();
	        if (!(tag in register)) {
	          register[Class] = (register[Class] || []).concat(tag);
	          register[tag] = register[tag.toUpperCase()] = Class;
	        }
	      },
	          register = (Object.create || Object)(null),
	          htmlClass = {},
	          i,
	          section,
	          tags,
	          Class;
	      for (section in info) {
	        for (Class in info[section]) {
	          tags = info[section][Class];
	          register[Class] = tags;
	          for (i = 0; i < tags.length; i++) {
	            register[tags[i].toLowerCase()] = register[tags[i].toUpperCase()] = Class;
	          }
	        }
	      }
	      htmlClass.get = function get(tagOrClass) {
	        return typeof tagOrClass === 'string' ? register[tagOrClass] || (catchClass.test(tagOrClass) ? [] : '') : filterBy(tagOrClass);
	      };
	      htmlClass.set = function set(tag, Class) {
	        return catchClass.test(tag) ? add(tag, Class) : add(Class, tag), htmlClass;
	      };
	      return htmlClass;
	    }({
	      "collections": {
	        "HTMLAllCollection": ["all"],
	        "HTMLCollection": ["forms"],
	        "HTMLFormControlsCollection": ["elements"],
	        "HTMLOptionsCollection": ["options"]
	      },
	      "elements": {
	        "Element": ["element"],
	        "HTMLAnchorElement": ["a"],
	        "HTMLAppletElement": ["applet"],
	        "HTMLAreaElement": ["area"],
	        "HTMLAttachmentElement": ["attachment"],
	        "HTMLAudioElement": ["audio"],
	        "HTMLBRElement": ["br"],
	        "HTMLBaseElement": ["base"],
	        "HTMLBodyElement": ["body"],
	        "HTMLButtonElement": ["button"],
	        "HTMLCanvasElement": ["canvas"],
	        "HTMLContentElement": ["content"],
	        "HTMLDListElement": ["dl"],
	        "HTMLDataElement": ["data"],
	        "HTMLDataListElement": ["datalist"],
	        "HTMLDetailsElement": ["details"],
	        "HTMLDialogElement": ["dialog"],
	        "HTMLDirectoryElement": ["dir"],
	        "HTMLDivElement": ["div"],
	        "HTMLDocument": ["document"],
	        "HTMLElement": ["element", "abbr", "address", "article", "aside", "b", "bdi", "bdo", "cite", "code", "command", "dd", "dfn", "dt", "em", "figcaption", "figure", "footer", "header", "i", "kbd", "mark", "nav", "noscript", "rp", "rt", "ruby", "s", "samp", "section", "small", "strong", "sub", "summary", "sup", "u", "var", "wbr"],
	        "HTMLEmbedElement": ["embed"],
	        "HTMLFieldSetElement": ["fieldset"],
	        "HTMLFontElement": ["font"],
	        "HTMLFormElement": ["form"],
	        "HTMLFrameElement": ["frame"],
	        "HTMLFrameSetElement": ["frameset"],
	        "HTMLHRElement": ["hr"],
	        "HTMLHeadElement": ["head"],
	        "HTMLHeadingElement": ["h1", "h2", "h3", "h4", "h5", "h6"],
	        "HTMLHtmlElement": ["html"],
	        "HTMLIFrameElement": ["iframe"],
	        "HTMLImageElement": ["img"],
	        "HTMLInputElement": ["input"],
	        "HTMLKeygenElement": ["keygen"],
	        "HTMLLIElement": ["li"],
	        "HTMLLabelElement": ["label"],
	        "HTMLLegendElement": ["legend"],
	        "HTMLLinkElement": ["link"],
	        "HTMLMapElement": ["map"],
	        "HTMLMarqueeElement": ["marquee"],
	        "HTMLMediaElement": ["media"],
	        "HTMLMenuElement": ["menu"],
	        "HTMLMenuItemElement": ["menuitem"],
	        "HTMLMetaElement": ["meta"],
	        "HTMLMeterElement": ["meter"],
	        "HTMLModElement": ["del", "ins"],
	        "HTMLOListElement": ["ol"],
	        "HTMLObjectElement": ["object"],
	        "HTMLOptGroupElement": ["optgroup"],
	        "HTMLOptionElement": ["option"],
	        "HTMLOutputElement": ["output"],
	        "HTMLParagraphElement": ["p"],
	        "HTMLParamElement": ["param"],
	        "HTMLPictureElement": ["picture"],
	        "HTMLPreElement": ["pre"],
	        "HTMLProgressElement": ["progress"],
	        "HTMLQuoteElement": ["blockquote", "q", "quote"],
	        "HTMLScriptElement": ["script"],
	        "HTMLSelectElement": ["select"],
	        "HTMLShadowElement": ["shadow"],
	        "HTMLSlotElement": ["slot"],
	        "HTMLSourceElement": ["source"],
	        "HTMLSpanElement": ["span"],
	        "HTMLStyleElement": ["style"],
	        "HTMLTableCaptionElement": ["caption"],
	        "HTMLTableCellElement": ["td", "th"],
	        "HTMLTableColElement": ["col", "colgroup"],
	        "HTMLTableElement": ["table"],
	        "HTMLTableRowElement": ["tr"],
	        "HTMLTableSectionElement": ["thead", "tbody", "tfoot"],
	        "HTMLTemplateElement": ["template"],
	        "HTMLTextAreaElement": ["textarea"],
	        "HTMLTimeElement": ["time"],
	        "HTMLTitleElement": ["title"],
	        "HTMLTrackElement": ["track"],
	        "HTMLUListElement": ["ul"],
	        "HTMLUnknownElement": ["unknown", "vhgroupv", "vkeygen"],
	        "HTMLVideoElement": ["video"]
	      },
	      "nodes": {
	        "Attr": ["node"],
	        "Audio": ["audio"],
	        "CDATASection": ["node"],
	        "CharacterData": ["node"],
	        "Comment": ["#comment"],
	        "Document": ["#document"],
	        "DocumentFragment": ["#document-fragment"],
	        "DocumentType": ["node"],
	        "HTMLDocument": ["#document"],
	        "Image": ["img"],
	        "Option": ["option"],
	        "ProcessingInstruction": ["node"],
	        "ShadowRoot": ["#shadow-root"],
	        "Text": ["#text"],
	        "XMLDocument": ["xml"]
	      }
	    });

	    // passed at runtime, configurable
	    // via nodejs module
	    if (!polyfill) polyfill = 'auto';

	    var
	    // V0 polyfill entry
	    REGISTER_ELEMENT = 'registerElement',


	    // IE < 11 only + old WebKit for attributes + feature detection
	    EXPANDO_UID = '__' + REGISTER_ELEMENT + (window.Math.random() * 10e4 >> 0),


	    // shortcuts and costants
	    ADD_EVENT_LISTENER = 'addEventListener',
	        ATTACHED = 'attached',
	        CALLBACK = 'Callback',
	        DETACHED = 'detached',
	        EXTENDS = 'extends',
	        ATTRIBUTE_CHANGED_CALLBACK = 'attributeChanged' + CALLBACK,
	        ATTACHED_CALLBACK = ATTACHED + CALLBACK,
	        CONNECTED_CALLBACK = 'connected' + CALLBACK,
	        DISCONNECTED_CALLBACK = 'disconnected' + CALLBACK,
	        CREATED_CALLBACK = 'created' + CALLBACK,
	        DETACHED_CALLBACK = DETACHED + CALLBACK,
	        ADDITION = 'ADDITION',
	        MODIFICATION = 'MODIFICATION',
	        REMOVAL = 'REMOVAL',
	        DOM_ATTR_MODIFIED = 'DOMAttrModified',
	        DOM_CONTENT_LOADED = 'DOMContentLoaded',
	        DOM_SUBTREE_MODIFIED = 'DOMSubtreeModified',
	        PREFIX_TAG = '<',
	        PREFIX_IS = '=',


	    // valid and invalid node names
	    validName = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
	        invalidNames = ['ANNOTATION-XML', 'COLOR-PROFILE', 'FONT-FACE', 'FONT-FACE-SRC', 'FONT-FACE-URI', 'FONT-FACE-FORMAT', 'FONT-FACE-NAME', 'MISSING-GLYPH'],


	    // registered types and their prototypes
	    types = [],
	        protos = [],


	    // to query subnodes
	    query = '',


	    // html shortcut used to feature detect
	    documentElement = document.documentElement,


	    // ES5 inline helpers || basic patches
	    indexOf = types.indexOf || function (v) {
	      for (var i = this.length; i-- && this[i] !== v;) {}
	      return i;
	    },


	    // other helpers / shortcuts
	    OP = Object.prototype,
	        hOP = OP.hasOwnProperty,
	        iPO = OP.isPrototypeOf,
	        defineProperty = Object.defineProperty,
	        empty = [],
	        gOPD = Object.getOwnPropertyDescriptor,
	        gOPN = Object.getOwnPropertyNames,
	        gPO = Object.getPrototypeOf,
	        sPO = Object.setPrototypeOf,


	    // jshint proto: true
	    hasProto = !!Object.__proto__,


	    // V1 helpers
	    fixGetClass = false,
	        DRECEV1 = '__dreCEv1',
	        customElements = window.customElements,
	        usableCustomElements = polyfill !== 'force' && !!(customElements && customElements.define && customElements.get && customElements.whenDefined),
	        Dict = Object.create || Object,
	        Map = window.Map || function Map() {
	      var K = [],
	          V = [],
	          i;
	      return {
	        get: function get(k) {
	          return V[indexOf.call(K, k)];
	        },
	        set: function set(k, v) {
	          i = indexOf.call(K, k);
	          if (i < 0) V[K.push(k) - 1] = v;else V[i] = v;
	        }
	      };
	    },
	        Promise = window.Promise || function (fn) {
	      var notify = [],
	          done = false,
	          p = {
	        'catch': function _catch() {
	          return p;
	        },
	        'then': function then(cb) {
	          notify.push(cb);
	          if (done) setTimeout(resolve, 1);
	          return p;
	        }
	      };
	      function resolve(value) {
	        done = true;
	        while (notify.length) {
	          notify.shift()(value);
	        }
	      }
	      fn(resolve);
	      return p;
	    },
	        justCreated = false,
	        constructors = Dict(null),
	        waitingList = Dict(null),
	        nodeNames = new Map(),
	        secondArgument = String,


	    // used to create unique instances
	    create = Object.create || function Bridge(proto) {
	      // silly broken polyfill probably ever used but short enough to work
	      return proto ? (Bridge.prototype = proto, new Bridge()) : this;
	    },


	    // will set the prototype if possible
	    // or copy over all properties
	    setPrototype = sPO || (hasProto ? function (o, p) {
	      o.__proto__ = p;
	      return o;
	    } : gOPN && gOPD ? function () {
	      function setProperties(o, p) {
	        for (var key, names = gOPN(p), i = 0, length = names.length; i < length; i++) {
	          key = names[i];
	          if (!hOP.call(o, key)) {
	            defineProperty(o, key, gOPD(p, key));
	          }
	        }
	      }
	      return function (o, p) {
	        do {
	          setProperties(o, p);
	        } while ((p = gPO(p)) && !iPO.call(p, o));
	        return o;
	      };
	    }() : function (o, p) {
	      for (var key in p) {
	        o[key] = p[key];
	      }
	      return o;
	    }),


	    // DOM shortcuts and helpers, if any

	    MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
	        HTMLElementPrototype = (window.HTMLElement || window.Element || window.Node).prototype,
	        IE8 = !iPO.call(HTMLElementPrototype, documentElement),
	        safeProperty = IE8 ? function (o, k, d) {
	      o[k] = d.value;
	      return o;
	    } : defineProperty,
	        isValidNode = IE8 ? function (node) {
	      return node.nodeType === 1;
	    } : function (node) {
	      return iPO.call(HTMLElementPrototype, node);
	    },
	        targets = IE8 && [],
	        attachShadow = HTMLElementPrototype.attachShadow,
	        cloneNode = HTMLElementPrototype.cloneNode,
	        dispatchEvent = HTMLElementPrototype.dispatchEvent,
	        getAttribute = HTMLElementPrototype.getAttribute,
	        hasAttribute = HTMLElementPrototype.hasAttribute,
	        removeAttribute = HTMLElementPrototype.removeAttribute,
	        setAttribute = HTMLElementPrototype.setAttribute,


	    // replaced later on
	    createElement = document.createElement,
	        patchedCreateElement = createElement,


	    // shared observer for all attributes
	    attributesObserver = MutationObserver && {
	      attributes: true,
	      characterData: true,
	      attributeOldValue: true
	    },


	    // useful to detect only if there's no MutationObserver
	    DOMAttrModified = MutationObserver || function (e) {
	      doesNotSupportDOMAttrModified = false;
	      documentElement.removeEventListener(DOM_ATTR_MODIFIED, DOMAttrModified);
	    },


	    // will both be used to make DOMNodeInserted asynchronous
	    asapQueue,
	        asapTimer = 0,


	    // internal flags
	    setListener = false,
	        doesNotSupportDOMAttrModified = true,
	        dropDomContentLoaded = true,


	    // needed for the innerHTML helper
	    notFromInnerHTMLHelper = true,


	    // optionally defined later on
	    onSubtreeModified,
	        callDOMAttrModified,
	        getAttributesMirror,
	        observer,
	        observe,


	    // based on setting prototype capability
	    // will check proto or the expando attribute
	    // in order to setup the node once
	    patchIfNotAlready,
	        patch;

	    // only if needed
	    if (!(REGISTER_ELEMENT in document)) {

	      if (sPO || hasProto) {
	        patchIfNotAlready = function patchIfNotAlready(node, proto) {
	          if (!iPO.call(proto, node)) {
	            setupNode(node, proto);
	          }
	        };
	        patch = setupNode;
	      } else {
	        patchIfNotAlready = function patchIfNotAlready(node, proto) {
	          if (!node[EXPANDO_UID]) {
	            node[EXPANDO_UID] = Object(true);
	            setupNode(node, proto);
	          }
	        };
	        patch = patchIfNotAlready;
	      }

	      if (IE8) {
	        doesNotSupportDOMAttrModified = false;
	        (function () {
	          var descriptor = gOPD(HTMLElementPrototype, ADD_EVENT_LISTENER),
	              addEventListener = descriptor.value,
	              patchedRemoveAttribute = function patchedRemoveAttribute(name) {
	            var e = new CustomEvent(DOM_ATTR_MODIFIED, { bubbles: true });
	            e.attrName = name;
	            e.prevValue = getAttribute.call(this, name);
	            e.newValue = null;
	            e[REMOVAL] = e.attrChange = 2;
	            removeAttribute.call(this, name);
	            dispatchEvent.call(this, e);
	          },
	              patchedSetAttribute = function patchedSetAttribute(name, value) {
	            var had = hasAttribute.call(this, name),
	                old = had && getAttribute.call(this, name),
	                e = new CustomEvent(DOM_ATTR_MODIFIED, { bubbles: true });
	            setAttribute.call(this, name, value);
	            e.attrName = name;
	            e.prevValue = had ? old : null;
	            e.newValue = value;
	            if (had) {
	              e[MODIFICATION] = e.attrChange = 1;
	            } else {
	              e[ADDITION] = e.attrChange = 0;
	            }
	            dispatchEvent.call(this, e);
	          },
	              onPropertyChange = function onPropertyChange(e) {
	            // jshint eqnull:true
	            var node = e.currentTarget,
	                superSecret = node[EXPANDO_UID],
	                propertyName = e.propertyName,
	                event;
	            if (superSecret.hasOwnProperty(propertyName)) {
	              superSecret = superSecret[propertyName];
	              event = new CustomEvent(DOM_ATTR_MODIFIED, { bubbles: true });
	              event.attrName = superSecret.name;
	              event.prevValue = superSecret.value || null;
	              event.newValue = superSecret.value = node[propertyName] || null;
	              if (event.prevValue == null) {
	                event[ADDITION] = event.attrChange = 0;
	              } else {
	                event[MODIFICATION] = event.attrChange = 1;
	              }
	              dispatchEvent.call(node, event);
	            }
	          };
	          descriptor.value = function (type, handler, capture) {
	            if (type === DOM_ATTR_MODIFIED && this[ATTRIBUTE_CHANGED_CALLBACK] && this.setAttribute !== patchedSetAttribute) {
	              this[EXPANDO_UID] = {
	                className: {
	                  name: 'class',
	                  value: this.className
	                }
	              };
	              this.setAttribute = patchedSetAttribute;
	              this.removeAttribute = patchedRemoveAttribute;
	              addEventListener.call(this, 'propertychange', onPropertyChange);
	            }
	            addEventListener.call(this, type, handler, capture);
	          };
	          defineProperty(HTMLElementPrototype, ADD_EVENT_LISTENER, descriptor);
	        })();
	      } else if (!MutationObserver) {
	        documentElement[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED, DOMAttrModified);
	        documentElement.setAttribute(EXPANDO_UID, 1);
	        documentElement.removeAttribute(EXPANDO_UID);
	        if (doesNotSupportDOMAttrModified) {
	          onSubtreeModified = function onSubtreeModified(e) {
	            var node = this,
	                oldAttributes,
	                newAttributes,
	                key;
	            if (node === e.target) {
	              oldAttributes = node[EXPANDO_UID];
	              node[EXPANDO_UID] = newAttributes = getAttributesMirror(node);
	              for (key in newAttributes) {
	                if (!(key in oldAttributes)) {
	                  // attribute was added
	                  return callDOMAttrModified(0, node, key, oldAttributes[key], newAttributes[key], ADDITION);
	                } else if (newAttributes[key] !== oldAttributes[key]) {
	                  // attribute was changed
	                  return callDOMAttrModified(1, node, key, oldAttributes[key], newAttributes[key], MODIFICATION);
	                }
	              }
	              // checking if it has been removed
	              for (key in oldAttributes) {
	                if (!(key in newAttributes)) {
	                  // attribute removed
	                  return callDOMAttrModified(2, node, key, oldAttributes[key], newAttributes[key], REMOVAL);
	                }
	              }
	            }
	          };
	          callDOMAttrModified = function callDOMAttrModified(attrChange, currentTarget, attrName, prevValue, newValue, action) {
	            var e = {
	              attrChange: attrChange,
	              currentTarget: currentTarget,
	              attrName: attrName,
	              prevValue: prevValue,
	              newValue: newValue
	            };
	            e[action] = attrChange;
	            onDOMAttrModified(e);
	          };
	          getAttributesMirror = function getAttributesMirror(node) {
	            for (var attr, name, result = {}, attributes = node.attributes, i = 0, length = attributes.length; i < length; i++) {
	              attr = attributes[i];
	              name = attr.name;
	              if (name !== 'setAttribute') {
	                result[name] = attr.value;
	              }
	            }
	            return result;
	          };
	        }
	      }

	      // set as enumerable, writable and configurable
	      document[REGISTER_ELEMENT] = function registerElement(type, options) {
	        upperType = type.toUpperCase();
	        if (!setListener) {
	          // only first time document.registerElement is used
	          // we need to set this listener
	          // setting it by default might slow down for no reason
	          setListener = true;
	          if (MutationObserver) {
	            observer = function (attached, detached) {
	              function checkEmAll(list, callback) {
	                for (var i = 0, length = list.length; i < length; callback(list[i++])) {}
	              }
	              return new MutationObserver(function (records) {
	                for (var current, node, newValue, i = 0, length = records.length; i < length; i++) {
	                  current = records[i];
	                  if (current.type === 'childList') {
	                    checkEmAll(current.addedNodes, attached);
	                    checkEmAll(current.removedNodes, detached);
	                  } else {
	                    node = current.target;
	                    if (notFromInnerHTMLHelper && node[ATTRIBUTE_CHANGED_CALLBACK] && current.attributeName !== 'style') {
	                      newValue = getAttribute.call(node, current.attributeName);
	                      if (newValue !== current.oldValue) {
	                        node[ATTRIBUTE_CHANGED_CALLBACK](current.attributeName, current.oldValue, newValue);
	                      }
	                    }
	                  }
	                }
	              });
	            }(executeAction(ATTACHED), executeAction(DETACHED));
	            observe = function observe(node) {
	              observer.observe(node, {
	                childList: true,
	                subtree: true
	              });
	              return node;
	            };
	            observe(document);
	            if (attachShadow) {
	              HTMLElementPrototype.attachShadow = function () {
	                return observe(attachShadow.apply(this, arguments));
	              };
	            }
	          } else {
	            asapQueue = [];
	            document[ADD_EVENT_LISTENER]('DOMNodeInserted', onDOMNode(ATTACHED));
	            document[ADD_EVENT_LISTENER]('DOMNodeRemoved', onDOMNode(DETACHED));
	          }

	          document[ADD_EVENT_LISTENER](DOM_CONTENT_LOADED, onReadyStateChange);
	          document[ADD_EVENT_LISTENER]('readystatechange', onReadyStateChange);

	          HTMLElementPrototype.cloneNode = function (deep) {
	            var node = cloneNode.call(this, !!deep),
	                i = getTypeIndex(node);
	            if (-1 < i) patch(node, protos[i]);
	            if (deep) loopAndSetup(node.querySelectorAll(query));
	            return node;
	          };
	        }

	        if (-2 < indexOf.call(types, PREFIX_IS + upperType) + indexOf.call(types, PREFIX_TAG + upperType)) {
	          throwTypeError(type);
	        }

	        if (!validName.test(upperType) || -1 < indexOf.call(invalidNames, upperType)) {
	          throw new Error('The type ' + type + ' is invalid');
	        }

	        var constructor = function constructor() {
	          return extending ? document.createElement(nodeName, upperType) : document.createElement(nodeName);
	        },
	            opt = options || OP,
	            extending = hOP.call(opt, EXTENDS),
	            nodeName = extending ? options[EXTENDS].toUpperCase() : upperType,
	            upperType,
	            i;

	        if (extending && -1 < indexOf.call(types, PREFIX_TAG + nodeName)) {
	          throwTypeError(nodeName);
	        }

	        i = types.push((extending ? PREFIX_IS : PREFIX_TAG) + upperType) - 1;

	        query = query.concat(query.length ? ',' : '', extending ? nodeName + '[is="' + type.toLowerCase() + '"]' : nodeName);

	        constructor.prototype = protos[i] = hOP.call(opt, 'prototype') ? opt.prototype : create(HTMLElementPrototype);

	        loopAndVerify(document.querySelectorAll(query), ATTACHED);

	        return constructor;
	      };

	      document.createElement = patchedCreateElement = function patchedCreateElement(localName, typeExtension) {
	        var is = getIs(typeExtension),
	            node = is ? createElement.call(document, localName, secondArgument(is)) : createElement.call(document, localName),
	            name = '' + localName,
	            i = indexOf.call(types, (is ? PREFIX_IS : PREFIX_TAG) + (is || name).toUpperCase()),
	            setup = -1 < i;
	        if (is) {
	          node.setAttribute('is', is = is.toLowerCase());
	          if (setup) {
	            setup = isInQSA(name.toUpperCase(), is);
	          }
	        }
	        notFromInnerHTMLHelper = !document.createElement.innerHTMLHelper;
	        if (setup) patch(node, protos[i]);
	        return node;
	      };
	    }

	    function ASAP() {
	      var queue = asapQueue.splice(0, asapQueue.length);
	      asapTimer = 0;
	      while (queue.length) {
	        queue.shift().call(null, queue.shift());
	      }
	    }

	    function loopAndVerify(list, action) {
	      for (var i = 0, length = list.length; i < length; i++) {
	        verifyAndSetupAndAction(list[i], action);
	      }
	    }

	    function loopAndSetup(list) {
	      for (var i = 0, length = list.length, node; i < length; i++) {
	        node = list[i];
	        patch(node, protos[getTypeIndex(node)]);
	      }
	    }

	    function executeAction(action) {
	      return function (node) {
	        if (isValidNode(node)) {
	          verifyAndSetupAndAction(node, action);
	          loopAndVerify(node.querySelectorAll(query), action);
	        }
	      };
	    }

	    function getTypeIndex(target) {
	      var is = getAttribute.call(target, 'is'),
	          nodeName = target.nodeName.toUpperCase(),
	          i = indexOf.call(types, is ? PREFIX_IS + is.toUpperCase() : PREFIX_TAG + nodeName);
	      return is && -1 < i && !isInQSA(nodeName, is) ? -1 : i;
	    }

	    function isInQSA(name, type) {
	      return -1 < query.indexOf(name + '[is="' + type + '"]');
	    }

	    function onDOMAttrModified(e) {
	      var node = e.currentTarget,
	          attrChange = e.attrChange,
	          attrName = e.attrName,
	          target = e.target,
	          addition = e[ADDITION] || 2,
	          removal = e[REMOVAL] || 3;
	      if (notFromInnerHTMLHelper && (!target || target === node) && node[ATTRIBUTE_CHANGED_CALLBACK] && attrName !== 'style' && (e.prevValue !== e.newValue ||
	      // IE9, IE10, and Opera 12 gotcha
	      e.newValue === '' && (attrChange === addition || attrChange === removal))) {
	        node[ATTRIBUTE_CHANGED_CALLBACK](attrName, attrChange === addition ? null : e.prevValue, attrChange === removal ? null : e.newValue);
	      }
	    }

	    function onDOMNode(action) {
	      var executor = executeAction(action);
	      return function (e) {
	        asapQueue.push(executor, e.target);
	        if (asapTimer) clearTimeout(asapTimer);
	        asapTimer = setTimeout(ASAP, 1);
	      };
	    }

	    function onReadyStateChange(e) {
	      if (dropDomContentLoaded) {
	        dropDomContentLoaded = false;
	        e.currentTarget.removeEventListener(DOM_CONTENT_LOADED, onReadyStateChange);
	      }
	      loopAndVerify((e.target || document).querySelectorAll(query), e.detail === DETACHED ? DETACHED : ATTACHED);
	      if (IE8) purge();
	    }

	    function patchedSetAttribute(name, value) {
	      // jshint validthis:true
	      var self = this;
	      setAttribute.call(self, name, value);
	      onSubtreeModified.call(self, { target: self });
	    }

	    function setupNode(node, proto) {
	      setPrototype(node, proto);
	      if (observer) {
	        observer.observe(node, attributesObserver);
	      } else {
	        if (doesNotSupportDOMAttrModified) {
	          node.setAttribute = patchedSetAttribute;
	          node[EXPANDO_UID] = getAttributesMirror(node);
	          node[ADD_EVENT_LISTENER](DOM_SUBTREE_MODIFIED, onSubtreeModified);
	        }
	        node[ADD_EVENT_LISTENER](DOM_ATTR_MODIFIED, onDOMAttrModified);
	      }
	      if (node[CREATED_CALLBACK] && notFromInnerHTMLHelper) {
	        node.created = true;
	        node[CREATED_CALLBACK]();
	        node.created = false;
	      }
	    }

	    function purge() {
	      for (var node, i = 0, length = targets.length; i < length; i++) {
	        node = targets[i];
	        if (!documentElement.contains(node)) {
	          length--;
	          targets.splice(i--, 1);
	          verifyAndSetupAndAction(node, DETACHED);
	        }
	      }
	    }

	    function throwTypeError(type) {
	      throw new Error('A ' + type + ' type is already registered');
	    }

	    function verifyAndSetupAndAction(node, action) {
	      var fn,
	          i = getTypeIndex(node);
	      if (-1 < i) {
	        patchIfNotAlready(node, protos[i]);
	        i = 0;
	        if (action === ATTACHED && !node[ATTACHED]) {
	          node[DETACHED] = false;
	          node[ATTACHED] = true;
	          i = 1;
	          if (IE8 && indexOf.call(targets, node) < 0) {
	            targets.push(node);
	          }
	        } else if (action === DETACHED && !node[DETACHED]) {
	          node[ATTACHED] = false;
	          node[DETACHED] = true;
	          i = 1;
	        }
	        if (i && (fn = node[action + CALLBACK])) fn.call(node);
	      }
	    }

	    // V1 in da House!
	    function CustomElementRegistry() {}

	    CustomElementRegistry.prototype = {
	      constructor: CustomElementRegistry,
	      // a workaround for the stubborn WebKit
	      define: usableCustomElements ? function (name, Class, options) {
	        if (options) {
	          CERDefine(name, Class, options);
	        } else {
	          var NAME = name.toUpperCase();
	          constructors[NAME] = {
	            constructor: Class,
	            create: [NAME]
	          };
	          nodeNames.set(Class, NAME);
	          customElements.define(name, Class);
	        }
	      } : CERDefine,
	      get: usableCustomElements ? function (name) {
	        return customElements.get(name) || get(name);
	      } : get,
	      whenDefined: usableCustomElements ? function (name) {
	        return Promise.race([customElements.whenDefined(name), whenDefined(name)]);
	      } : whenDefined
	    };

	    function CERDefine(name, Class, options) {
	      var is = options && options[EXTENDS] || '',
	          CProto = Class.prototype,
	          proto = create(CProto),
	          attributes = Class.observedAttributes || empty,
	          definition = { prototype: proto };
	      // TODO: is this needed at all since it's inherited?
	      // defineProperty(proto, 'constructor', {value: Class});
	      safeProperty(proto, CREATED_CALLBACK, {
	        value: function value() {
	          if (justCreated) justCreated = false;else if (!this[DRECEV1]) {
	            this[DRECEV1] = true;
	            new Class(this);
	            if (CProto[CREATED_CALLBACK]) CProto[CREATED_CALLBACK].call(this);
	            var info = constructors[nodeNames.get(Class)];
	            if (!usableCustomElements || info.create.length > 1) {
	              notifyAttributes(this);
	            }
	          }
	        }
	      });
	      safeProperty(proto, ATTRIBUTE_CHANGED_CALLBACK, {
	        value: function value(name) {
	          if (-1 < indexOf.call(attributes, name)) CProto[ATTRIBUTE_CHANGED_CALLBACK].apply(this, arguments);
	        }
	      });
	      if (CProto[CONNECTED_CALLBACK]) {
	        safeProperty(proto, ATTACHED_CALLBACK, {
	          value: CProto[CONNECTED_CALLBACK]
	        });
	      }
	      if (CProto[DISCONNECTED_CALLBACK]) {
	        safeProperty(proto, DETACHED_CALLBACK, {
	          value: CProto[DISCONNECTED_CALLBACK]
	        });
	      }
	      if (is) definition[EXTENDS] = is;
	      name = name.toUpperCase();
	      constructors[name] = {
	        constructor: Class,
	        create: is ? [is, secondArgument(name)] : [name]
	      };
	      nodeNames.set(Class, name);
	      document[REGISTER_ELEMENT](name.toLowerCase(), definition);
	      whenDefined(name);
	      waitingList[name].r();
	    }

	    function get(name) {
	      var info = constructors[name.toUpperCase()];
	      return info && info.constructor;
	    }

	    function getIs(options) {
	      return typeof options === 'string' ? options : options && options.is || '';
	    }

	    function notifyAttributes(self) {
	      var callback = self[ATTRIBUTE_CHANGED_CALLBACK],
	          attributes = callback ? self.attributes : empty,
	          i = attributes.length,
	          attribute;
	      while (i--) {
	        attribute = attributes[i]; // || attributes.item(i);
	        callback.call(self, attribute.name || attribute.nodeName, null, attribute.value || attribute.nodeValue);
	      }
	    }

	    function whenDefined(name) {
	      name = name.toUpperCase();
	      if (!(name in waitingList)) {
	        waitingList[name] = {};
	        waitingList[name].p = new Promise(function (resolve) {
	          waitingList[name].r = resolve;
	        });
	      }
	      return waitingList[name].p;
	    }

	    function polyfillV1() {
	      if (customElements) delete window.customElements;
	      defineProperty(window, 'customElements', {
	        configurable: true,
	        value: new CustomElementRegistry()
	      });
	      defineProperty(window, 'CustomElementRegistry', {
	        configurable: true,
	        value: CustomElementRegistry
	      });
	      for (var patchClass = function patchClass(name) {
	        var Class = window[name];
	        if (Class) {
	          window[name] = function CustomElementsV1(self) {
	            var info, isNative;
	            if (!self) self = this;
	            if (!self[DRECEV1]) {
	              justCreated = true;
	              info = constructors[nodeNames.get(self.constructor)];
	              isNative = usableCustomElements && info.create.length === 1;
	              self = isNative ? Reflect.construct(Class, empty, info.constructor) : document.createElement.apply(document, info.create);
	              self[DRECEV1] = true;
	              justCreated = false;
	              if (!isNative) notifyAttributes(self);
	            }
	            return self;
	          };
	          window[name].prototype = Class.prototype;
	          try {
	            Class.prototype.constructor = window[name];
	          } catch (WebKit) {
	            fixGetClass = true;
	            defineProperty(Class, DRECEV1, { value: window[name] });
	          }
	        }
	      }, Classes = htmlClass.get(/^HTML[A-Z]*[a-z]/), i = Classes.length; i--; patchClass(Classes[i])) {}
	      document.createElement = function (name, options) {
	        var is = getIs(options);
	        return is ? patchedCreateElement.call(this, name, secondArgument(is)) : patchedCreateElement.call(this, name);
	      };
	    }

	    // if customElements is not there at all
	    if (!customElements || polyfill === 'force') polyfillV1();else {
	      // if available test extends work as expected
	      try {
	        (function (DRE, options, name) {
	          options[EXTENDS] = 'a';
	          DRE.prototype = create(HTMLAnchorElement.prototype);
	          DRE.prototype.constructor = DRE;
	          window.customElements.define(name, DRE, options);
	          if (getAttribute.call(document.createElement('a', { is: name }), 'is') !== name || usableCustomElements && getAttribute.call(new DRE(), 'is') !== name) {
	            throw options;
	          }
	        })(function DRE() {
	          return Reflect.construct(HTMLAnchorElement, [], DRE);
	        }, {}, 'document-register-element-a');
	      } catch (o_O) {
	        // or force the polyfill if not
	        // and keep internal original reference
	        polyfillV1();
	      }
	    }

	    try {
	      createElement.call(document, 'a', 'a');
	    } catch (FireFox) {
	      secondArgument = function secondArgument(is) {
	        return { is: is };
	      };
	    }
	  }

	  module.exports = installCustomElements;
	  installCustomElements(global);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== "undefined") {
	    factory(exports, require('../react'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, global.react);
	    global.frostRadioButton = mod.exports;
	  }
	})(this, function (exports, _react) {
	  'use strict';

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  var _createClass = function () {
	    function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) defineProperties(Constructor, staticProps);
	      return Constructor;
	    };
	  }();

	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }

	  var FrostRadioButtonBase = function (_HTMLInputElement) {
	    _inherits(FrostRadioButtonBase, _HTMLInputElement);

	    function FrostRadioButtonBase() {
	      _classCallCheck(this, FrostRadioButtonBase);

	      return _possibleConstructorReturn(this, (FrostRadioButtonBase.__proto__ || Object.getPrototypeOf(FrostRadioButtonBase)).apply(this, arguments));
	    }

	    _createClass(FrostRadioButtonBase, [{
	      key: 'getDefaultProps',
	      value: function getDefaultProps() {
	        return {};
	      }
	    }, {
	      key: 'propTypes',
	      get: function get() {
	        return {};
	      }
	    }]);

	    return FrostRadioButtonBase;
	  }(HTMLInputElement);

	  var FrostRadioButton = function (_createComponent) {
	    _inherits(FrostRadioButton, _createComponent);

	    function FrostRadioButton() {
	      _classCallCheck(this, FrostRadioButton);

	      return _possibleConstructorReturn(this, (FrostRadioButton.__proto__ || Object.getPrototypeOf(FrostRadioButton)).apply(this, arguments));
	    }

	    return FrostRadioButton;
	  }((0, _react.createComponent)(FrostRadioButtonBase));

	  exports.default = FrostRadioButton;
	});

/***/ }
/******/ ]);