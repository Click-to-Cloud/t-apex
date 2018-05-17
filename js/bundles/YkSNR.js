var pageComponent =
webpackJsonppageComponent([16],{

/***/ 280:
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

var _indexSoy = __webpack_require__(281);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YkSNR = function (_Component) {
  _inherits(YkSNR, _Component);

  function YkSNR() {
    _classCallCheck(this, YkSNR);

    return _possibleConstructorReturn(this, (YkSNR.__proto__ || Object.getPrototypeOf(YkSNR)).apply(this, arguments));
  }

  return YkSNR;
}(_metalComponent2.default);

;

_metalSoy2.default.register(YkSNR, _indexSoy2.default);

exports.default = YkSNR;

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.YkSNR = undefined;

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

  // This file was automatically generated from index.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace YkSNR.
   * @public
   */

  goog.module('YkSNR.incrementaldom');

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
    var param315 = function param315() {
      ie_open('h6');
      var dyn27 = opt_data.page.description;
      if (typeof dyn27 == 'function') dyn27();else if (dyn27 != null) itext(dyn27);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Behavior Driven Development(BDD) Style Assertion');
      ie_close('h2');
      ie_open('p');
      itext('T.apex favors a BDD-style assertion like this:');
      ie_close('p');
      $templateAlias2({ code: 'T.expect(result).toBe(true);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Matchers');
      ie_close('h2');
      ie_open('p');
      itext('Here is a list of matchers used in T.apex.');
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
      itext('toBe(Object)');
      ie_close('td');
      ie_open('td');
      itext('Check equality');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('toEqual(Object)');
      ie_close('td');
      ie_open('td');
      itext('Check equality');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('toMatch(String)');
      ie_close('td');
      ie_open('td');
      itext('Check string pattern matching');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('toBeNull()');
      ie_close('td');
      ie_open('td');
      itext('Check null');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('toBeTrue()');
      ie_close('td');
      ie_open('td');
      itext('Check True');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('toBeFalse()');
      ie_close('td');
      ie_open('td');
      itext('Check False');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('toContain(Object)');
      ie_close('td');
      ie_open('td');
      itext('Check containing');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('toBeLessThan(Object)');
      ie_close('td');
      ie_open('td');
      itext('Check less than');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('toBeGreaterThan(Object)');
      ie_close('td');
      ie_open('td');
      itext('Check greater than');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Negate Matchers');
      ie_close('h2');
      ie_open('p');
      itext('Here is how we negate the matchers.');
      ie_close('p');
      $templateAlias2({ code: 'T.expect(result).never.toBe(null);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Manual Failing');
      ie_close('h2');
      ie_open('p');
      itext('Here is how we manually fail the test.');
      ie_close('p');
      $templateAlias2({ code: 'T.fail(\'Should fail here\');', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Asymmetric Matchers');
      ie_close('h2');
      ie_open('p');
      itext('Asymmetric matchers are a group of matchers that implements ');
      ie_open('code');
      itext('T.IMatcher');
      ie_close('code');
      itext(', which usually contains asymmetric equality checking logic.');
      ie_close('p');
      ie_open('p');
      itext('Here is how we use the asymmetric matchers.');
      ie_close('p');
      $templateAlias2({ code: 'T.expect(result).toEqual(T.objectOfAny(String.class));', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Here is a list of the asymmetric matchers provided by T.apex.');
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
      itext('objectOfAny(Type)');
      ie_close('td');
      ie_open('td');
      itext('Matches any object of given Type');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('objectOfAnything()');
      ie_close('td');
      ie_open('td');
      itext('Matches anything but null');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('mapContaining(Map<String, Object>)');
      ie_close('td');
      ie_open('td');
      itext('Contains all the key-value pairs');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('listContaining(List<Object>)');
      ie_close('td');
      ie_open('td');
      itext('Contains all elements from the list');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('Custom Asymmetric Matchers');
      ie_close('h2');
      ie_open('p');
      itext('We can also implement our custom asymmetric matchers.');
      ie_close('p');
      $templateAlias2({ code: 'public class CustomMatcher implements IMatcher {\n    private String word;\n\n    public CustomMatcher(String word) {\n        this.word = word;\n    }\n\n    public String getMessage(Object other) {\n        return \'Custom matcher fails\';\n    }\n\n    public Boolean matches(Object other) {\n        return this.word == other;\n    }\n}\n\nT.expect(result).toEqual(new CustomMatcher(\'word\'));', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param315 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'YkSNR.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var YkSNR = function (_Component) {
  _inherits(YkSNR, _Component);

  function YkSNR() {
    _classCallCheck(this, YkSNR);

    return _possibleConstructorReturn(this, (YkSNR.__proto__ || Object.getPrototypeOf(YkSNR)).apply(this, arguments));
  }

  return YkSNR;
}(_metalComponent2.default);

_metalSoy2.default.register(YkSNR, templates);
exports.YkSNR = YkSNR;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[280]);