webpackHotUpdate("static\\development\\pages\\frontend.js",{

/***/ "./components/Projects/Projects.js":
/*!*****************************************!*\
  !*** ./components/Projects/Projects.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Dropbox\\Creative Cloud Files\\_HI\\_Projects\\Next-Website\\components\\Projects\\Projects.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Projects(_ref) {
  var projectTitle = _ref.projectTitle,
      projectDate = _ref.projectDate,
      projectDesc = _ref.projectDesc,
      projectTech = _ref.projectTech;
  var techList = [];
  projectTech.forEach(function (item) {
    return techList.push(__jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, item));
  });
  return __jsx("div", {
    className: "no-border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, projectTitle), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("span", {
    "class": "date",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, projectDate), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), projectDesc), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("lh", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Built with"), techList));
}

/***/ })

})
//# sourceMappingURL=frontend.js.489b38956b8f6154f957.hot-update.js.map