webpackHotUpdate("static\\development\\pages\\frontend.js",{

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
      loc = _ref.loc;

  var style = function style() {
    if (loc === "leftSmall") {
      return {
        position: "absolute",
        top: "0.05em",
        left: "0em"
      };
    }

    if (loc === "rightSmall") {
      return {
        position: "absolute",
        bottom: "0.475em",
        right: "0em"
      };
    }

    if (loc === "left") {
      return {
        position: "absolute",
        top: "-.3rem",
        left: "-.6rem"
      };
    }

    if (loc === "right") {
      return {
        position: "absolute",
        bottom: "-.3rem",
        right: "-.6rem"
      };
    }
  };

  return __jsx("svg", {
    "aria-hidden": "true",
    width: w,
    height: h,
    viewBox: "0 0 100 100",
    style: style(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
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
      lineNumber: 41
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=frontend.js.40676b9caa387433bd32.hot-update.js.map