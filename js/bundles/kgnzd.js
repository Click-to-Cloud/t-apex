var pageComponent =
webpackJsonppageComponent([12],{

/***/ 288:
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

var _predicatesSoy = __webpack_require__(289);

var _predicatesSoy2 = _interopRequireDefault(_predicatesSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var kgnzd = function (_Component) {
  _inherits(kgnzd, _Component);

  function kgnzd() {
    _classCallCheck(this, kgnzd);

    return _possibleConstructorReturn(this, (kgnzd.__proto__ || Object.getPrototypeOf(kgnzd)).apply(this, arguments));
  }

  return kgnzd;
}(_metalComponent2.default);

;

_metalSoy2.default.register(kgnzd, _predicatesSoy2.default);

exports.default = kgnzd;

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.kgnzd = undefined;

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

  // This file was automatically generated from predicates.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace kgnzd.
   * @public
   */

  goog.module('kgnzd.incrementaldom');

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

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param409 = function param409() {
      ie_open('h6');
      var dyn31 = opt_data.page.description;
      if (typeof dyn31 == 'function') dyn31();else if (dyn31 != null) itext(dyn31);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('What are Argument Predicates?');
      ie_close('h2');
      ie_open('p');
      itext('Argument predicates are used during establishing method behavior to capture method invocations more precisely.');
      ie_close('p');
      ie_open('p');
      itext('For example,');
      ie_close('p');
      $templateAlias2({ code: 'T.when(mock.run(T.anyBoolean(R.isNotNull))).thenReturn(0);\n// When mock calls \'run\' with any Boolean that is not null, return 0', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('This mock method of \'run\' will only get triggered when a Boolean that is not null is passed in.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('How to Use Argument Predicates');
      ie_close('h2');
      ie_open('p');
      itext('We can choose appropriate argument predicates according to the parameter type and our needs.');
      ie_close('p');
      ie_open('p');
      itext('Let\'s say we want to use argument predicates in this method.');
      ie_close('p');
      $templateAlias2({ code: 'mock.setItem(Integer, String)', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('We can establish the method behavior without using argument predicates like this:');
      ie_close('p');
      $templateAlias2({ code: 'T.when(mock.setItem(0, \'a\')).thenReturn(null);', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Or we can introduce one at the first parameter.');
      ie_close('p');
      $templateAlias2({ code: 'T.when(mock.setItem(T.anyInteger(0), T.anyString(\'a\'))).thenReturn(null);', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      ie_open('strong');
      itext('Note');
      ie_close('strong');
      itext(' that if we use argument predicates in any of the parameters, we need to apply them to all of the parameters.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Argument Predicates Usage');
      ie_close('h2');
      ie_open('p');
      itext('We can use argument predicates to represent any object of a specific type, like:');
      ie_close('p');
      $templateAlias2({ code: 'T.when(mock.run(T.anyBoolean())).thenReturn(0);', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('This gets triggered whenever a Boolean is passed in.');
      ie_close('p');
      ie_open('p');
      itext('Or we can use argument predicates to represent an object with the specific value, like:');
      ie_close('p');
      $templateAlias2({ code: 'T.when(mock.run(T.anyBoolean(true))).thenReturn(0);', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('This gets triggered only when ');
      ie_open('code');
      itext('true');
      ie_close('code');
      itext(' is passed in.');
      ie_close('p');
      ie_open('p');
      itext('Or we can use argument predicates to check according to some Funcs, like:');
      ie_close('p');
      $templateAlias2({ code: 'T.when(mock.run(T.anyBoolean(R.isNotNull))).thenReturn(0);', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('This gets triggered only when a not-null Boolean is passed in.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Argument Predicate Types');
      ie_close('h2');
      ie_open('p');
      itext('Here is a list of the argument predicate types that we can use in T.apex.');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('any(...)');
      ie_close('td');
      ie_open('td');
      itext('Matches any Object');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('anyBoolean(...)');
      ie_close('td');
      ie_open('td');
      itext('Matches any Boolean');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('anyInteger(...)');
      ie_close('td');
      ie_open('td');
      itext('Matches any Integer');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('anyLong(...)');
      ie_close('td');
      ie_open('td');
      itext('Matches any Long');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('anyDouble(...)');
      ie_close('td');
      ie_open('td');
      itext('Matches any Double');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('anyDecimal(...)');
      ie_close('td');
      ie_open('td');
      itext('Matches any Decimal');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('anyString(...)');
      ie_close('td');
      ie_open('td');
      itext('Matches any String');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('anyList(...)');
      ie_close('td');
      ie_open('td');
      itext('Matches any List<Object>');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('anySet(...)');
      ie_close('td');
      ie_open('td');
      itext('Matches any Set<String>');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('anyMap(...)');
      ie_close('td');
      ie_open('td');
      itext('Matches any Map<String, Object>');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('anySObject(...)');
      ie_close('td');
      ie_open('td');
      itext('Matches any SObject');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('anyDate(...)');
      ie_close('td');
      ie_open('td');
      itext('Matches any Date');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('anyTime(...)');
      ie_close('td');
      ie_open('td');
      itext('Matches any Time');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('anyDatetime(...)');
      ie_close('td');
      ie_open('td');
      itext('Matches any Datetime');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param409 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'kgnzd.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var kgnzd = function (_Component) {
  _inherits(kgnzd, _Component);

  function kgnzd() {
    _classCallCheck(this, kgnzd);

    return _possibleConstructorReturn(this, (kgnzd.__proto__ || Object.getPrototypeOf(kgnzd)).apply(this, arguments));
  }

  return kgnzd;
}(_metalComponent2.default);

_metalSoy2.default.register(kgnzd, templates);
exports.kgnzd = kgnzd;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[288]);