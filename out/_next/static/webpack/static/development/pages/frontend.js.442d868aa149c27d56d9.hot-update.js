webpackHotUpdate("static\\development\\pages\\frontend.js",{

/***/ "./components/Menu/Menu.js":
/*!*********************************!*\
  !*** ./components/Menu/Menu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Dropbox\\Creative Cloud Files\\_HI\\_SchoolProjects\\Next-Website\\components\\Menu\\Menu.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Menu = function Menu() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      toggle = _useState[0],
      setToggle = _useState[1];

  var menuStyle = function menuStyle(e) {
    if (!e) {
      return {
        left: "100vw",
        transition: " left .5s"
      };
    } else {
      return {
        left: "-5vw",
        transition: "left .5s"
      };
    }
  };

  var menuToggle = function menuToggle(e) {
    if (!e) {
      setToggle(true);
    } else setToggle(false);
  };

  return __jsx("nav", {
    style: menuStyle(toggle),
    className: "jsx-2841941408" + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return menuToggle(toggle);
    },
    className: "jsx-2841941408" + " " + "menu-open",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Open Menu"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2841941408",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Home", __jsx("span", {
    className: "jsx-2841941408",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/frontend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2841941408",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Frontend")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/design",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2841941408",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Design")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/resume",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2841941408",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Resum\xE9")), __jsx("button", {
    onClick: function onClick() {
      return menuToggle(toggle);
    },
    className: "jsx-2841941408" + " " + "menu-close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Close Menu"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2841941408",
    __self: this
  }, ".menu.jsx-2841941408{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;height:100%;padding:0.5rem 0 0 0;}.menu-close.jsx-2841941408{display:none;z-index:1;color:var(--accent-color);background-color:transparent;padding:0.25rem;font-size:1.2rem;border-top:solid 1px var(--accent-color);border-bottom:solid 1px var(--accent-color);}.menu-open.jsx-2841941408{display:none;background-color:var(--font-color);color:var(--font-color-inverted);position:absolute;left:-4.7rem;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);font-size:1.2rem;padding:0.5rem 0.5rem 1.1rem 0.5rem;}nav.jsx-2841941408 a.jsx-2841941408{clear:both;float:left;color:var(--font-color);padding:0.25rem;font-size:1.2 rem;-webkit-transition:color 0.35s;transition:color 0.35s;margin-left:0;z-index:2;-webkit-text-decoration:none;text-decoration:none;}nav.jsx-2841941408 a.jsx-2841941408 span.jsx-2841941408::after{content:\"\";display:table;height:1.5px;min-height:1.5px;width:1.25rem;background-color:var(--font-color);margin:0.2rem 0 0 0;-webkit-transition:0.25s;transition:0.25s;}nav.jsx-2841941408 a.jsx-2841941408:hover span.jsx-2841941408:after{width:100%;-webkit-transition:0.5s;transition:0.5s;}nav.jsx-2841941408 a.jsx-2841941408:nth-child(n + 2){margin-bottom:8px;}nav.jsx-2841941408 a.jsx-2841941408:focus{background-color:var(--font-color);color:var(--font-color-inverted);border:solid 3px transparent;}nav.jsx-2841941408 a.jsx-2841941408:focus.jsx-2841941408:after{background-color:var(--font-color);}@media only screen and (max-width:1024px){.menu.jsx-2841941408{position:absolute;width:110vw;height:100vh;background-color:var(--font-color);padding:0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.menu-close.jsx-2841941408{display:block;margin-top:1.5rem;}.menu-open.jsx-2841941408{display:block;}nav.jsx-2841941408 a.jsx-2841941408{text-align:center;width:50%;color:var(--font-color-inverted);-webkit-text-decoration:underline;text-decoration:underline;}nav.jsx-2841941408 a.jsx-2841941408:nth-child(1){margin-top:0.5rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEcm9wYm94XFxDcmVhdGl2ZSBDbG91ZCBGaWxlc1xcX0hJXFxfU2Nob29sUHJvamVjdHNcXE5leHQtV2Vic2l0ZVxcY29tcG9uZW50c1xcTWVudVxcTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRFMsQUFHMEIsQUFRQSxBQVdBLEFBV0YsQUFZQSxBQVdBLEFBS08sQUFJaUIsQUFNQSxBQUtmLEFBVUosQUFLQSxBQUlJLEFBT0EsV0FwRVQsQUFZRyxBQVdFLEVBN0NOLEFBV3lCLENBZ0VmLEFBS3BCLElBOUJGLEFBZWdCLEFBbUJGLEFBT1osSUFwRXdCLENBdEJFLEVBa0NiLEdBa0RzQixFQW5CcEIsRUFVZixHQXRCaUMsQUFNbkMsR0F4Qm1CLEtBK0JvQixHQTNDckIsRUFaaUIsQ0FWSixFQTRDL0IsSUFUZ0IsTUFpRGMsQ0E3RFYsTUE4QlcsQ0FqQk0sS0E5Q2IsSUFXTixBQWlFSixFQTFDVyxDQWJMLE9Bd0RPLE1BakVSLEdBb0RuQixFQTFDZSxLQXlCTyxPQWxDcUIsQ0FVaEIsU0F3RXpCLEdBL0NpQixVQWJILGNBQ0osSUFuQ0MsQUFhaUMsTUF1QnZCLEtBbkNULEdBK0NkLFNBOUN1QixZQTJFQSxTQTFFdkIsQUFXQSxHQVNtQixTQWNuQixRQWJzQyxvQ0FDdEMsNEJBcURFIiwiZmlsZSI6IkQ6XFxEcm9wYm94XFxDcmVhdGl2ZSBDbG91ZCBGaWxlc1xcX0hJXFxfU2Nob29sUHJvamVjdHNcXE5leHQtV2Vic2l0ZVxcY29tcG9uZW50c1xcTWVudVxcTWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE1lbnUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgbWVudVN0eWxlID0gZSA9PiB7XHJcbiAgICBpZiAoIWUpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsZWZ0OiBcIjEwMHZ3XCIsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogXCIgbGVmdCAuNXNcIlxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsZWZ0OiBcIi01dndcIixcclxuICAgICAgICB0cmFuc2l0aW9uOiBcImxlZnQgLjVzXCJcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBtZW51VG9nZ2xlID0gZSA9PiB7XHJcbiAgICBpZiAoIWUpIHtcclxuICAgICAgc2V0VG9nZ2xlKHRydWUpO1xyXG4gICAgfSBlbHNlIHNldFRvZ2dsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibWVudVwiIHN0eWxlPXttZW51U3R5bGUodG9nZ2xlKX0+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWVudS1vcGVuXCIgb25DbGljaz17KCkgPT4gbWVudVRvZ2dsZSh0b2dnbGUpfT5cclxuICAgICAgICBPcGVuIE1lbnVcclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxhPlxyXG4gICAgICAgICAgSG9tZTxzcGFuPjwvc3Bhbj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9mcm9udGVuZFwiPlxyXG4gICAgICAgIDxhPkZyb250ZW5kPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvZGVzaWduXCI+XHJcbiAgICAgICAgPGE+RGVzaWduPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvcmVzdW1lXCI+XHJcbiAgICAgICAgPGE+UmVzdW3DqTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1lbnUtY2xvc2VcIiBvbkNsaWNrPXsoKSA9PiBtZW51VG9nZ2xlKHRvZ2dsZSl9PlxyXG4gICAgICAgIENsb3NlIE1lbnVcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDAgMCAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tZW51LWNsb3NlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHZhcigtLWFjY2VudC1jb2xvcik7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB2YXIoLS1hY2NlbnQtY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tZW51LW9wZW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItaW52ZXJ0ZWQpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IC00LjdyZW07XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtIDEuMXJlbSAwLjVyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbmF2IGEge1xyXG4gICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjIgcmVtO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjM1cztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBuYXYgYSBzcGFuOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuNXB4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxLjVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEuMjVyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAuMnJlbSAwIDAgMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4yNXM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbmF2IGE6aG92ZXIgc3BhbjphZnRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG5hdiBhOm50aC1jaGlsZChuICsgMikge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbmF2IGE6Zm9jdXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItaW52ZXJ0ZWQpO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBuYXYgYTpmb2N1czphZnRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDExMHZ3O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWVudS1jbG9zZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWVudS1vcGVuIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmF2IGEge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWludmVydGVkKTtcclxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmF2IGE6bnRoLWNoaWxkICgxKSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51O1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Dropbox\\\\Creative Cloud Files\\\\_HI\\\\_SchoolProjects\\\\Next-Website\\\\components\\\\Menu\\\\Menu.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=frontend.js.442d868aa149c27d56d9.hot-update.js.map