webpackHotUpdate("static\\development\\pages\\resume.js",{

/***/ "./components/Icon/Icon.js":
/*!*********************************!*\
  !*** ./components/Icon/Icon.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Icon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Dropbox\\Creative Cloud Files\\_HI\\_Projects\\Next-Website\\components\\Icon\\Icon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Icon(_ref) {
  var w = _ref.w,
      h = _ref.h,
      color = _ref.color,
      rotate = _ref.rotate,
      loc = _ref.loc,
      dx = _ref.dx,
      dy = _ref.dy;
  var distanceX = dx;
  var distanceY = dy;

  var style = function style() {
    if (loc === "left") {
      console.log(distanceX);
      return {
        position: "absolute",
        top: {
          distanceX: distanceX
        },
        left: {
          distanceY: distanceY
        }
      };
    }

    if (loc === "right") {
      return {
        position: "absolute",
        bottom: {
          dx: dx
        },
        right: {
          dy: dy
        }
      };
    }
  };

  return __jsx("svg", {
    width: w,
    height: h,
    viewBox: "0 0 100 100",
    style: style(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("path", {
    fill: "none",
    transform: rotate,
    style: {
      WebkitTransformOrigin: "50%50%",
      MsTransformOrigin: "50%50%",
      transformOrigin: "50%50%"
    },
    stroke: color,
    strokeWidth: "8",
    d: "M10 10L90 10 90 90",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=resume.js.9491cca79372d186f3e1.hot-update.js.map