(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/images/logo.jpg":
/*!*****************************!*\
  !*** ./src/images/logo.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/logo.jpg";

/***/ }),

/***/ "./src/utils/cloud.js":
/*!****************************!*\
  !*** ./src/utils/cloud.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMenu = exports.searchMd = exports.getMd = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getMd = exports.getMd = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(name) {
    var res, data;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _taroWeapp2.default.cloud.callFunction({ name: 'getMd', data: { name: name } });

          case 3:
            res = _context.sent;
            data = res.result.data[0].base64;
            return _context.abrupt('return', data);

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](0);

            console.log(_context.t0);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 8]]);
  }));

  return function getMd(_x) {
    return _ref.apply(this, arguments);
  };
}();

var searchMd = exports.searchMd = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(value) {
    var data, res;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = void 0;

            if (!(value === '')) {
              _context2.next = 5;
              break;
            }

            data = [];
            _context2.next = 15;
            break;

          case 5:
            _context2.prev = 5;
            _context2.next = 8;
            return _taroWeapp2.default.cloud.callFunction({ name: 'searchMd', data: { value: value } });

          case 8:
            res = _context2.sent;

            data = res.result.data;
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2['catch'](5);

            console.log(_context2.t0);

          case 15:
            return _context2.abrupt('return', data);

          case 16:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[5, 12]]);
  }));

  return function searchMd(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var getMenu = exports.getMenu = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
    var res, data;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _taroWeapp2.default.cloud.callFunction({ name: 'getMenu' });

          case 3:
            res = _context3.sent;
            data = res.result.data;
            return _context3.abrupt('return', data);

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3['catch'](0);

            console.log(_context3.t0);

          case 11:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined, [[0, 8]]);
  }));

  return function getMenu() {
    return _ref3.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/utils/data.js":
/*!***************************!*\
  !*** ./src/utils/data.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var menuList = exports.menuList = [{
  title: '博客',
  key: 'index'
}, {
  title: '秘籍',
  key: 'cheats'
}, {
  title: '关于',
  key: 'about'
}];

var cheatsList = exports.cheatsList = [{
  title: 'CSS3'
}, {
  title: 'JavaScript'
}, {
  title: 'ES6'
}, {
  title: 'React'
}, {
  title: 'TypeScript'
}, {
  title: 'NodeJS'
}];

/***/ })

}]);