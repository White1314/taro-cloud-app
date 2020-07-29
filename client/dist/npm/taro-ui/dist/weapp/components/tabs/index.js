(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/taro-ui/dist/weapp/components/tabs/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx?taro&type=script&parse=COMPONENT&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _component = __webpack_require__(/*! ../../common/component */ "./node_modules/taro-ui/dist/weapp/common/component.tsx");

var _component2 = _interopRequireDefault(_component);

var _utils = __webpack_require__(/*! ../../common/utils */ "./node_modules/taro-ui/dist/weapp/common/utils.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ENV = _taroWeapp2.default.getEnv();
var MIN_DISTANCE = 100;
var MAX_INTERVAL = 10;

var AtTabs = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtTabs, _AtComponent);

  function AtTabs() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtTabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtTabs.__proto__ || Object.getPrototypeOf(AtTabs)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "loopArray10", "tabList", "rootCls", "scroll", "_tabId", "scrollX", "scrollY", "_scrollLeft", "_scrollTop", "_scrollIntoView", "swipeable", "tabDirection", "current", "customStyle", "className", "height", "animated", "children"], _this.updateState = function (idx) {
      if (_this.props.scroll) {
        // 标签栏滚动
        switch (ENV) {
          case _taroWeapp2.default.ENV_TYPE.WEAPP:
          case _taroWeapp2.default.ENV_TYPE.ALIPAY:
          case _taroWeapp2.default.ENV_TYPE.SWAN:
            {
              var index = Math.max(idx - 1, 0);
              _this.setState({
                _scrollIntoView: "tab" + index
              });
              break;
            }
          case _taroWeapp2.default.ENV_TYPE.WEB:
            {
              var _index = Math.max(idx - 1, 0);
              var prevTabItem = _this.tabHeaderRef.childNodes[_index];
              prevTabItem && _this.setState({
                _scrollTop: prevTabItem.offsetTop,
                _scrollLeft: prevTabItem.offsetLeft
              });
              break;
            }
          default:
            {
              console.warn('AtTab 组件在该环境还未适配');
              break;
            }
        }
      }
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtTabs, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AtTabs.prototype.__proto__ || Object.getPrototypeOf(AtTabs.prototype), '_constructor', this).call(this, props);

      this.state = {
        _scrollLeft: 0,
        _scrollTop: 0,
        _scrollIntoView: ''
      };
      this._tabId = (0, _utils.isTest)() ? 'tabs-AOTU2018' : (0, _utils.uuid)();
      // 触摸时的原点
      this._touchDot = 0;
      // 定时器
      this._timer = null;
      // 滑动时间间隔
      this._interval = 0;
      // 是否已经在滑动
      this._isMoving = false;
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'handleClick',
    value: function handleClick(index, event) {
      this.props.onClick(index, event);
    }
  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart(e) {
      var _this2 = this;

      var _props = this.props,
          swipeable = _props.swipeable,
          tabDirection = _props.tabDirection;

      if (!swipeable || tabDirection === 'vertical') {
        return;
      } // 获取触摸时的原点
      this._touchDot = e.touches[0].pageX;
      // 使用js计时器记录时间
      this._timer = setInterval(function () {
        _this2._interval++;
      }, 100);
    }
  }, {
    key: 'handleTouchMove',
    value: function handleTouchMove(e) {
      var _props2 = this.props,
          swipeable = _props2.swipeable,
          tabDirection = _props2.tabDirection,
          current = _props2.current,
          tabList = _props2.tabList;

      if (!swipeable || tabDirection === 'vertical') {
        return;
      }var touchMove = e.touches[0].pageX;
      var moveDistance = touchMove - this._touchDot;
      var maxIndex = tabList.length;
      if (!this._isMoving && this._interval < MAX_INTERVAL && this._touchDot > 20) {
        // 向左滑动
        if (current + 1 < maxIndex && moveDistance <= -100) {
          this._isMoving = true;
          this.handleClick(current + 1, e);
          // 向右滑动
        } else if (current - 1 >= 0 && moveDistance >= MIN_DISTANCE) {
          this._isMoving = true;
          this.handleClick(current - 1, e);
        }
      }
    }
  }, {
    key: 'handleTouchEnd',
    value: function handleTouchEnd() {
      var _props3 = this.props,
          swipeable = _props3.swipeable,
          tabDirection = _props3.tabDirection;

      if (!swipeable || tabDirection === 'vertical') {
        return;
      }clearInterval(this._timer);
      this._interval = 0;
      this._isMoving = false;
    }
  }, {
    key: 'getTabHeaderRef',
    value: function getTabHeaderRef() {
      if (ENV === _taroWeapp2.default.ENV_TYPE.WEB) {
        this.tabHeaderRef = document.getElementById(this._tabId);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.scroll !== this.props.scroll) {
        this.getTabHeaderRef();
      }
      if (nextProps.current !== this.props.current) {
        this.updateState(nextProps.current);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getTabHeaderRef();
      this.updateState(this.props.current);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.tabHeaderRef = null;
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _classNames;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      var _tabId = this._tabId;
      var _props4 = this.__props,
          customStyle = _props4.customStyle,
          className = _props4.className,
          height = _props4.height,
          tabDirection = _props4.tabDirection,
          animated = _props4.animated,
          tabList = _props4.tabList,
          scroll = _props4.scroll,
          current = _props4.current;
      var _state = this.__state,
          _scrollLeft = _state._scrollLeft,
          _scrollTop = _state._scrollTop,
          _scrollIntoView = _state._scrollIntoView;

      var heightStyle = { height: height };
      var underlineStyle = {
        height: tabDirection === 'vertical' ? tabList.length * 100 + "%" : '1PX',
        width: tabDirection === 'horizontal' ? tabList.length * 100 + "%" : '1PX'
      };
      var bodyStyle = {};
      var transformStyle = "translate3d(0px, -" + current * 100 + "%, 0px)";
      if (tabDirection === 'horizontal') {
        transformStyle = "translate3d(-" + current * 100 + "%, 0px, 0px)";
      }
      Object.assign(bodyStyle, {
        transform: transformStyle,
        '-webkit-transform': transformStyle
      });
      if (!animated) {
        bodyStyle.transition = 'unset';
      }

      var rootCls = (0, _classnames2.default)((_classNames = {
        'at-tabs': true,
        'at-tabs--scroll': scroll
      }, _defineProperty(_classNames, "at-tabs--" + tabDirection, true), _defineProperty(_classNames, "at-tabs--" + ENV, true), _classNames), className);
      var scrollX = tabDirection === 'horizontal';
      var scrollY = tabDirection === 'vertical';
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)(this.mergeStyle(heightStyle, customStyle));
      var anonymousState__temp2 = scroll ? (0, _taroWeapp.internal_inline_style)(heightStyle) : null;
      var anonymousState__temp3 = (0, _taroWeapp.internal_inline_style)(this.mergeStyle(bodyStyle, heightStyle));
      var anonymousState__temp4 = (0, _taroWeapp.internal_inline_style)(underlineStyle);
      var loopArray10 = tabList.map(function (item, idx) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var itemCls = (0, _classnames2.default)({
          'at-tabs__item': true,
          'at-tabs__item--active': current === idx
        });
        return {
          itemCls: itemCls,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        loopArray10: loopArray10,
        tabList: tabList,
        rootCls: rootCls,
        scroll: scroll,
        _tabId: _tabId,
        scrollX: scrollX,
        scrollY: scrollY
      });
      return this.__state;
    }
  }]);

  return AtTabs;
}(_component2.default), _class.$$events = ["handleClick", "handleTouchStart", "handleTouchEnd", "handleTouchMove"], _class.$$componentPath = "node_modules/taro-ui/dist/weapp/components/tabs/index", _temp2);


AtTabs.defaultProps = {
  customStyle: '',
  className: '',
  tabDirection: 'horizontal',
  height: '',
  current: 0,
  swipeable: true,
  scroll: false,
  animated: true,
  tabList: [],
  onClick: function onClick() {}
};
AtTabs.propTypes = {
  customStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  className: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]),
  height: _propTypes2.default.string,
  tabDirection: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  current: _propTypes2.default.number,
  swipeable: _propTypes2.default.bool,
  scroll: _propTypes2.default.bool,
  animated: _propTypes2.default.bool,
  tabList: _propTypes2.default.array,
  onClick: _propTypes2.default.func
};
exports.default = AtTabs;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AtTabs));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\Program\\taro\\taro-cloud-app-master\\client\\node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx?taro&type=template&parse=COMPONENT&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:/Program/taro/taro-cloud-app-master/client/node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "npm/taro-ui/dist/weapp/components/tabs/index.wxml";

/***/ }),

/***/ "./node_modules/taro-ui/dist/weapp/common/utils.ts":
/*!*********************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/common/utils.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delayGetScrollOffset = exports.delayGetClientRect = exports.handleTouchScroll = exports.pxTransform = exports.isTest = exports.initTestEnv = exports.getEventDetail = exports.uuid = exports.delayQuerySelector = exports.delay = undefined;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ENV = _taroWeapp2.default.getEnv();
function delay() {
  var delayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;

  return new Promise(function (resolve) {
    if ([_taroWeapp2.default.ENV_TYPE.WEB, _taroWeapp2.default.ENV_TYPE.SWAN].includes(ENV)) {
      setTimeout(function () {
        resolve();
      }, delayTime);
      return;
    }
    resolve();
  });
}
function delayQuerySelector(self, selectorStr) {
  var delayTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;

  var $scope = ENV === _taroWeapp2.default.ENV_TYPE.WEB ? self : self.$scope;
  var selector = _taroWeapp2.default.createSelectorQuery().in($scope);
  return new Promise(function (resolve) {
    delay(delayTime).then(function () {
      selector.select(selectorStr).boundingClientRect().exec(function (res) {
        resolve(res);
      });
    });
  });
}
function delayGetScrollOffset(_ref) {
  var _ref$delayTime = _ref.delayTime,
      delayTime = _ref$delayTime === undefined ? 500 : _ref$delayTime;

  return new Promise(function (resolve) {
    delay(delayTime).then(function () {
      _taroWeapp2.default.createSelectorQuery().selectViewport().scrollOffset().exec(function (res) {
        resolve(res);
      });
    });
  });
}
function delayGetClientRect(_ref2) {
  var self = _ref2.self,
      selectorStr = _ref2.selectorStr,
      _ref2$delayTime = _ref2.delayTime,
      delayTime = _ref2$delayTime === undefined ? 500 : _ref2$delayTime;

  var $scope = ENV === _taroWeapp2.default.ENV_TYPE.WEB || ENV === _taroWeapp2.default.ENV_TYPE.SWAN ? self : self.$scope;
  var selector = _taroWeapp2.default.createSelectorQuery().in($scope);
  return new Promise(function (resolve) {
    delay(delayTime).then(function () {
      selector.select(selectorStr).boundingClientRect().exec(function (res) {
        resolve(res);
      });
    });
  });
}
function uuid() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;

  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var value = [];
  var i = 0;
  radix = radix || chars.length;
  if (len) {
    // Compact form
    for (i = 0; i < len; i++) {
      value[i] = chars[0 | Math.random() * radix];
    }
  } else {
    // rfc4122, version 4 form
    var r = void 0;
    // rfc4122 requires these characters
    /* eslint-disable-next-line */
    value[8] = value[13] = value[18] = value[23] = '-';
    value[14] = '4';
    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!value[i]) {
        r = 0 | Math.random() * 16;
        value[i] = chars[i === 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  return value.join('');
}
function getEventDetail(event) {
  var detail = void 0;
  switch (ENV) {
    case _taroWeapp2.default.ENV_TYPE.WEB:
      detail = {
        pageX: event.pageX,
        pageY: event.pageY,
        clientX: event.clientX,
        clientY: event.clientY,
        offsetX: event.offsetX,
        offsetY: event.offsetY,
        x: event.x,
        y: event.y
      };
      break;
    case _taroWeapp2.default.ENV_TYPE.WEAPP:
      detail = {
        pageX: event.touches[0].pageX,
        pageY: event.touches[0].pageY,
        clientX: event.touches[0].clientX,
        clientY: event.touches[0].clientY,
        offsetX: event.target.offsetLeft,
        offsetY: event.target.offsetTop,
        x: event.target.x,
        y: event.target.y
      };
      break;
    case _taroWeapp2.default.ENV_TYPE.ALIPAY:
      detail = {
        pageX: event.target.pageX,
        pageY: event.target.pageY,
        clientX: event.target.clientX,
        clientY: event.target.clientY,
        offsetX: event.target.offsetLeft,
        offsetY: event.target.offsetTop,
        x: event.target.x,
        y: event.target.y
      };
      break;
    case _taroWeapp2.default.ENV_TYPE.SWAN:
      detail = {
        pageX: event.changedTouches[0].pageX,
        pageY: event.changedTouches[0].pageY,
        clientX: event.target.clientX,
        clientY: event.target.clientY,
        offsetX: event.target.offsetLeft,
        offsetY: event.target.offsetTop,
        x: event.detail.x,
        y: event.detail.y
      };
      break;
    default:
      detail = {
        pageX: 0,
        pageY: 0,
        clientX: 0,
        clientY: 0,
        offsetX: 0,
        offsetY: 0,
        x: 0,
        y: 0
      };
      console.warn('getEventDetail暂未支持该环境');
      break;
  }
  return detail;
}
function initTestEnv() {}
function isTest() {
  return false;
}
var scrollTop = 0;
function handleTouchScroll(flag) {
  if (ENV !== _taroWeapp2.default.ENV_TYPE.WEB) {
    return;
  }
  if (flag) {
    scrollTop = document.documentElement.scrollTop;
    // 使body脱离文档流
    document.body.classList.add('at-frozen');
    // 把脱离文档流的body拉上去！否则页面会回到顶部！
    document.body.style.top = -scrollTop + 'px';
  } else {
    document.body.style.top = null;
    document.body.classList.remove('at-frozen');
    document.documentElement.scrollTop = scrollTop;
  }
}
function pxTransform(size) {
  if (!size) return '';
  return _taroWeapp2.default.pxTransform(size);
}
exports.delay = delay;
exports.delayQuerySelector = delayQuerySelector;
exports.uuid = uuid;
exports.getEventDetail = getEventDetail;
exports.initTestEnv = initTestEnv;
exports.isTest = isTest;
exports.pxTransform = pxTransform;
exports.handleTouchScroll = handleTouchScroll;
exports.delayGetClientRect = delayGetClientRect;
exports.delayGetScrollOffset = delayGetScrollOffset;

/***/ }),

/***/ "./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx":
/*!*******************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx?taro&type=script&parse=COMPONENT&":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx?taro&type=template&parse=COMPONENT&":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_dist_cjs_js_name_path_name_wxml_context_D_Program_taro_taro_cloud_app_master_client_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../file-loader/dist/cjs.js?name=[path][name].wxml&context=D:/Program/taro/taro-cloud-app-master/client/node_modules&outputPath=npm!../../../../../@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../../@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--4-0!./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\Program\\taro\\taro-cloud-app-master\\client\\node_modules&outputPath=npm!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_dist_cjs_js_name_path_name_wxml_context_D_Program_taro_taro_cloud_app_master_client_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_dist_cjs_js_name_path_name_wxml_context_D_Program_taro_taro_cloud_app_master_client_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_dist_cjs_js_name_path_name_wxml_context_D_Program_taro_taro_cloud_app_master_client_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_dist_cjs_js_name_path_name_wxml_context_D_Program_taro_taro_cloud_app_master_client_node_modules_outputPath_npm_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_4_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./node_modules/taro-ui/dist/weapp/components/tabs/index.tsx","runtime","vendors"]]]);