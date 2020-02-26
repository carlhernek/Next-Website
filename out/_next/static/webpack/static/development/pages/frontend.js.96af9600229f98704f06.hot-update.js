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
    className: "jsx-303275406" + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return menuToggle(toggle);
    },
    className: "jsx-303275406" + " " + "menu-open",
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
    className: "jsx-303275406",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/frontend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-303275406",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Frontend")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/design",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-303275406",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Design")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/resume",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-303275406",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Resum\xE9")), __jsx("button", {
    onClick: function onClick() {
      return menuToggle(toggle);
    },
    className: "jsx-303275406" + " " + "menu-close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Close Menu"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "303275406",
    __self: this
  }, ".menu.jsx-303275406{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;height:100%;padding:0.5rem 0 0 0;}.menu-close.jsx-303275406{display:none;z-index:1;color:var(--accent-color);background-color:transparent;padding:0.25rem;font-size:1.2rem;border-top:solid 1px var(--accent-color);border-bottom:solid 1px var(--accent-color);}.menu-open.jsx-303275406{display:none;background-color:var(--font-color);color:var(--font-color-inverted);position:absolute;left:-4.7rem;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);font-size:1.2rem;padding:0.5rem 0.5rem 1.1rem 0.5rem;}nav.jsx-303275406 a.jsx-303275406{color:var(--font-color);padding:0.25rem;font-size:1.2 rem;-webkit-transition:color 0.35s;transition:color 0.35s;margin-left:0;z-index:2;-webkit-text-decoration:none;text-decoration:none;}nav.jsx-303275406 a.jsx-303275406::after{content:\"\";display:table;height:1.5px;min-height:1.5px;width:1.25rem;background-color:var(--font-color);margin:0.2rem 0 0 0;-webkit-transition:0.25s;transition:0.25s;}nav.jsx-303275406 a.jsx-303275406:hover.jsx-303275406:after{width:100%;-webkit-transition:0.5s;transition:0.5s;}nav.jsx-303275406 a.jsx-303275406:nth-child(n + 2){margin-bottom:8px;}nav.jsx-303275406 a.jsx-303275406:focus{background-color:var(--font-color);color:var(--font-color-inverted);border:solid 3px transparent;}nav.jsx-303275406 a.jsx-303275406:focus.jsx-303275406:after{background-color:var(--font-color);}@media only screen and (max-width:1024px){.menu.jsx-303275406{position:absolute;width:110vw;height:100vh;background-color:var(--font-color);padding:0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.menu-close.jsx-303275406{display:block;margin-top:1.5rem;}.menu-open.jsx-303275406{display:block;}nav.jsx-303275406 a.jsx-303275406{text-align:center;width:50%;color:var(--font-color-inverted);-webkit-text-decoration:underline;text-decoration:underline;}nav.jsx-303275406 a.jsx-303275406:nth-child(1){margin-top:0.5rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEcm9wYm94XFxDcmVhdGl2ZSBDbG91ZCBGaWxlc1xcX0hJXFxfU2Nob29sUHJvamVjdHNcXE5leHQtV2Vic2l0ZVxcY29tcG9uZW50c1xcTWVudVxcTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRFMsQUFHMEIsQUFRQSxBQVdBLEFBV1csQUFVYixBQVdBLEFBS08sQUFJaUIsQUFNQSxBQUtmLEFBVUosQUFLQSxBQUlJLEFBT0EsV0F4RE4sQUFXRSxFQTNDTixBQVd5QixDQThEZixBQUtwQixJQTlCRixBQWVnQixBQW1CRixBQU9aLEtBeEYwQixDQXFCVixDQVdILEdBa0RzQixFQW5CcEIsRUFVZixHQXRCaUMsQUFNbkMsR0F4Qm1CLEVBWEMsR0EwQ21CLEtBckRKLENBVkosRUEwQy9CLElBVGdCLEdBWFMsR0E0REssT0EvQkMsQ0FqQk0sS0E1Q2IsSUFXTixBQStESixHQXJETSxPQXNETyxNQS9EUixHQWtEbkIsRUF4Q2UsS0F1Qk8sT0FoQ3FCLENBVWhCLEFBVVgsU0E0RGQsR0EvQ2lCLEVBWlAsVUFDVyxnQkFsQ1YsQUFhaUMsV0FaaEMsR0E2Q2QsU0E1Q3VCLFdBaUN2QixDQXdDdUIsU0F4RXZCLEFBV0EsR0FTbUIsaUJBQ21CLG9DQUN0Qyw0QkFtREUiLCJmaWxlIjoiRDpcXERyb3Bib3hcXENyZWF0aXZlIENsb3VkIEZpbGVzXFxfSElcXF9TY2hvb2xQcm9qZWN0c1xcTmV4dC1XZWJzaXRlXFxjb21wb25lbnRzXFxNZW51XFxNZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTWVudSA9ICgpID0+IHtcclxuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBtZW51U3R5bGUgPSBlID0+IHtcclxuICAgIGlmICghZSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxlZnQ6IFwiMTAwdndcIixcclxuICAgICAgICB0cmFuc2l0aW9uOiBcIiBsZWZ0IC41c1wiXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxlZnQ6IFwiLTV2d1wiLFxyXG4gICAgICAgIHRyYW5zaXRpb246IFwibGVmdCAuNXNcIlxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1lbnVUb2dnbGUgPSBlID0+IHtcclxuICAgIGlmICghZSkge1xyXG4gICAgICBzZXRUb2dnbGUodHJ1ZSk7XHJcbiAgICB9IGVsc2Ugc2V0VG9nZ2xlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJtZW51XCIgc3R5bGU9e21lbnVTdHlsZSh0b2dnbGUpfT5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtZW51LW9wZW5cIiBvbkNsaWNrPXsoKSA9PiBtZW51VG9nZ2xlKHRvZ2dsZSl9PlxyXG4gICAgICAgIE9wZW4gTWVudVxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGE+SG9tZTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPVwiL2Zyb250ZW5kXCI+XHJcbiAgICAgICAgPGE+RnJvbnRlbmQ8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9kZXNpZ25cIj5cclxuICAgICAgICA8YT5EZXNpZ248L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9yZXN1bWVcIj5cclxuICAgICAgICA8YT5SZXN1bcOpPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWVudS1jbG9zZVwiIG9uQ2xpY2s9eygpID0+IG1lbnVUb2dnbGUodG9nZ2xlKX0+XHJcbiAgICAgICAgQ2xvc2UgTWVudVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMCAwIDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1lbnUtY2xvc2Uge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggdmFyKC0tYWNjZW50LWNvbG9yKTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWFjY2VudC1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1lbnUtb3BlbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1pbnZlcnRlZCk7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogLTQuN3JlbTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMS4xcmVtIDAuNXJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBuYXYgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjIgcmVtO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjM1cztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBuYXYgYTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjVweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMS41cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLjI1cmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjJyZW0gMCAwIDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMjVzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG5hdiBhOmhvdmVyOmFmdGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbmF2IGE6bnRoLWNoaWxkKG4gKyAyKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBuYXYgYTpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1pbnZlcnRlZCk7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG5hdiBhOmZvY3VzOmFmdGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTEwdnc7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tZW51LWNsb3NlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tZW51LW9wZW4ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYXYgYSB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItaW52ZXJ0ZWQpO1xyXG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYXYgYTpudGgtY2hpbGQgKDEpIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Dropbox\\\\Creative Cloud Files\\\\_HI\\\\_SchoolProjects\\\\Next-Website\\\\components\\\\Menu\\\\Menu.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=frontend.js.96af9600229f98704f06.hot-update.js.map