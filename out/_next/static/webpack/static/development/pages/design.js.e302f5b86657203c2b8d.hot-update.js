webpackHotUpdate("static\\development\\pages\\design.js",{

/***/ "./components/Menu/Menu.js":
/*!*********************************!*\
  !*** ./components/Menu/Menu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Dropbox\\Creative Cloud Files\\_HI\\_Projects\\Next-Website\\components\\Menu\\Menu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Menu = function Menu() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      toggle = _useState[0],
      setToggle = _useState[1];

  var menuStyle = function menuStyle(e) {
    if (!e) {
      __jsx("style", {
        jsx: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, "\n          .menu {\n            display: flex;\n            flex-direction: column;\n            width: auto;\n            height: 100%;\n          }\n\n          .toggle {\n            display: none;\n            position: absolute;\n            height: 100vh;\n            width: 100vw;\n            background-color: transparent;\n            z-index: 1;\n          }\n\n          nav a {\n            color: white;\n            background-color: black;\n            padding: 0.25rem;\n            font-size: 1rem;\n            transition: color 0.35s;\n            margin-left: 0;\n            z-index: 2;\n          }\n\n          nav a:nth-child(n + 2) {\n            margin-top: 0.5rem;\n          }\n\n          nav a:focus {\n            background-color: white;\n            color: black;\n          }\n\n          @media only screen and (max-width: 1024px) {\n            .menu {\n              position: absolute;\n              width: 100vw;\n              height: 100vh;\n              background-color: white;\n              justify-content: center;\n            }\n\n            .toggle {\n              display: block;\n            }\n\n            nav a {\n              text-align: center;\n            }\n\n            nav a:nth-child (1) {\n              margin-top: 1rem;\n            }\n          }\n\n          nav a:hover {\n            background-color: white;\n            color: black;\n            transition: color 0.35s;\n          }\n\n          @media only screen and (orientation: portrait) {\n            nav a {\n              padding: 1.5rem 0.5rem;\n            }\n          }\n\n          @media only screen and (max-width: 1024px) {\n            nav a:nth-child (1) {\n              margin-top: 0.5rem;\n            }\n          }\n        ");

      return {
        top: "3rem",
        left: "3rem",
        transition: ".5s"
      };
    } else {
      return {
        top: 0,
        left: 0,
        transition: ".5s"
      };
    }
  };

  var menuToggle = function menuToggle(e) {
    if (!e) {
      setToggle(true);
    } else setToggle(false);
  };

  return __jsx("nav", {
    className: "menu",
    style: menuStyle(toggle),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("button", {
    className: "toggle",
    onClick: function onClick() {
      return menuToggle(toggle);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "ss"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/frontend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Frontend")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/design",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "Design")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/resume",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "Resum\xE9")));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=design.js.e302f5b86657203c2b8d.hot-update.js.map