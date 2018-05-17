var pageComponent =
webpackJsonppageComponent([2],{

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

__webpack_require__(16);

var _step_4Soy = __webpack_require__(291);

var _step_4Soy2 = _interopRequireDefault(_step_4Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var adzbC = function (_Component) {
  _inherits(adzbC, _Component);

  function adzbC() {
    _classCallCheck(this, adzbC);

    return _possibleConstructorReturn(this, (adzbC.__proto__ || Object.getPrototypeOf(adzbC)).apply(this, arguments));
  }

  return adzbC;
}(_metalComponent2.default);

;

_metalSoy2.default.register(adzbC, _step_4Soy2.default);

exports.default = adzbC;

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.adzbC = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from step_4.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace adzbC.
   * @public
   */

  goog.module('adzbC.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias2 = _metalSoy2.default.getTemplate('ElectricCode.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('tutorial.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?),
   *    elementClasses: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param695 = function param695() {
      ie_open('h2');
      var dyn37 = opt_data.page.title;
      if (typeof dyn37 == 'function') dyn37();else if (dyn37 != null) itext(dyn37);
      ie_close('h2');
      ie_open('p');
      itext('First, we will create a mock of Func.');
      ie_close('p');
      $templateAlias2({ code: 'Func mock = (Func)T.mock(Func.class);', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Then we will establish the mocking method behavior. We can mock by returning a value.');
      ie_close('p');
      $templateAlias2({ code: 'T.when(mock.run(0)).thenReturn(0);\n// When mock calls \'run\' with 0, return 0', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Or we can mock by throwing an exception.');
      ie_close('p');
      $templateAlias2({ code: 'T.when(mock.run(0)).thenThrow(new T.TestException(\'test\'));\n// When mock calls \'run\' with 0, throw the exception', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Or we can mock by using a Func as an answer.');
      ie_close('p');
      $templateAlias2({ code: 'T.when(mock.run(0)).thenAnswer(R.inc);\n// When mock calls \'run\' with 0, apply the answer Func to the arguments\n// and return the result', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Besides, we can use argument matcher to capture method invocation more precisely.');
      ie_close('p');
      $templateAlias2({ code: 'T.when(mock.run(T.anyBoolean(R.isNotNull))).thenReturn(0);\n// When mock calls \'run\' with any Boolean that is not null, return 0', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Finally, let\'s verify the mocks.');
      ie_close('p');
      $templateAlias2({ code: 'mock.run(0);\n\nT.verify(mock, \'run\').toHaveBeenCalled();', mode: 'javascript' }, null, opt_ijData);
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param695 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'adzbC.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var adzbC = function (_Component) {
  _inherits(adzbC, _Component);

  function adzbC() {
    _classCallCheck(this, adzbC);

    return _possibleConstructorReturn(this, (adzbC.__proto__ || Object.getPrototypeOf(adzbC)).apply(this, arguments));
  }

  return adzbC;
}(_metalComponent2.default);

_metalSoy2.default.register(adzbC, templates);
exports.adzbC = adzbC;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[290]);