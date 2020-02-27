webpackHotUpdate("static\\development\\pages\\design.js",{

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
var _jsxFileName = "D:\\Dropbox\\Creative Cloud Files\\_HI\\_Projects\\Next-Website\\components\\Menu\\Menu.js";


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
    className: "jsx-3194781635" + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return menuToggle(toggle);
    },
    className: "jsx-3194781635" + " " + "menu-open",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Open Menu"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3194781635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/frontend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3194781635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Frontend")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/design",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3194781635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Design")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/resume",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3194781635",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Resum\xE9")), __jsx("button", {
    onClick: function onClick() {
      return menuToggle(toggle);
    },
    className: "jsx-3194781635" + " " + "menu-close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Close Menu"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3194781635",
    __self: this
  }, ".menu.jsx-3194781635{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;height:100%;padding:0.5rem 0 0 0;}.menu-close.jsx-3194781635{display:none;z-index:1;color:var(--accent-color-r);background-color:transparent;padding:0.25rem;font-size:1.2rem;border-bottom-length:1rem;border-bottom-color:var(--accent-color-r);border-bottom-width:1px;border-bottom-style:solid;border-top:solid 1px var(--accent-color-r);}.menu-open.jsx-3194781635{display:none;background-color:var(--font-color);color:var(--font-color-inverted);position:absolute;left:-4.7rem;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);font-size:1.2rem;padding:0.5rem 0.5rem 1.1rem 0.5rem;}nav.jsx-3194781635 a.jsx-3194781635{color:var(--font-color);padding:0.25rem;font-size:1.2 rem;-webkit-transition:color 0.35s;transition:color 0.35s;margin-left:0;z-index:2;-webkit-text-decoration:none;text-decoration:none;}nav.jsx-3194781635 a.jsx-3194781635::after{content:\"\";display:table;height:1.7px;min-height:1.5px;width:1.25rem;background-color:var(--font-color);margin:0.2rem 0 0 0;-webkit-transition:0.25s;transition:0.25s;}nav.jsx-3194781635 a.jsx-3194781635:hover.jsx-3194781635:after{width:50%;-webkit-transition:0.25s;transition:0.25s;background-color:var(--accent-color-r);}nav.jsx-3194781635 a.jsx-3194781635:nth-child(n + 2){margin-bottom:8px;}nav.jsx-3194781635 a.jsx-3194781635:focus{background-color:var(--font-color);color:var(--font-color-inverted);border:solid 3px transparent;}nav.jsx-3194781635 a.jsx-3194781635:focus.jsx-3194781635:after{background-color:var(--font-color);}@media only screen and (max-width:1024px){.menu.jsx-3194781635{position:absolute;width:110vw;height:100vh;background-color:var(--font-color);padding:0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.menu-close.jsx-3194781635{display:block;margin-top:1.5rem;}.menu-open.jsx-3194781635{display:block;}nav.jsx-3194781635 a.jsx-3194781635{text-align:center;width:50%;color:var(--font-color-inverted);-webkit-text-decoration:underline;text-decoration:underline;}nav.jsx-3194781635 a.jsx-3194781635:nth-child(1){margin-top:0.5rem;}nav.jsx-3194781635 a.jsx-3194781635::after{width:0;background-color:transparent;}nav.jsx-3194781635 a.jsx-3194781635:hover.jsx-3194781635:after{width:0;background-color:transparent;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEcm9wYm94XFxDcmVhdGl2ZSBDbG91ZCBGaWxlc1xcX0hJXFxfUHJvamVjdHNcXE5leHQtV2Vic2l0ZVxcY29tcG9uZW50c1xcTWVudVxcTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRFMsQUFHMEIsQUFRQSxBQWdCQSxBQVdXLEFBVWIsQUFXRCxBQU1RLEFBSWlCLEFBTUEsQUFLZixBQVVKLEFBS0EsQUFJSSxBQU9BLEFBSVYsQUFLQSxRQUpxQixBQUtBLEVBeERkLENBWEgsRUFyQ0osQUFnQnlCLENBK0RmLEFBS3BCLElBOUJGLEFBZWdCLEFBbUJGLEFBT1osS0E5RjRCLENBMEJaLENBV0gsR0FtRHNCLEVBbkJwQixFQVVmLEdBdEJpQyxBQU1uQyxFQW9DRSxBQUtBLENBbEVpQixFQVhDLEdBMkNtQixLQXRESixHQWZKLENBK0NVLEdBVHpCLEdBWFMsR0E2REssT0EvQkMsQ0FsQk0sS0FqRGIsSUFnRlYsRUFyRUksQ0FlRSxPQXVETyxHQXZCM0IsS0E5Q21CLENBd0RuQixFQXpDZSxLQXVCTyxRQXRCSyxBQVVYLENBeEJZLFFBcUYxQixHQWhEaUIsRUFaUCxVQUNXLEdBekJxQixhQWQvQixXQUNDLEdBa0RkLFNBakR1QixNQWFHLEtBeUIxQixDQXlDdUIsU0E5RXZCLEdBeUJtQixNQVpTLFdBYVUsZUFYTyxxQkFZN0Msc0JBWEEsTUErREUiLCJmaWxlIjoiRDpcXERyb3Bib3hcXENyZWF0aXZlIENsb3VkIEZpbGVzXFxfSElcXF9Qcm9qZWN0c1xcTmV4dC1XZWJzaXRlXFxjb21wb25lbnRzXFxNZW51XFxNZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTWVudSA9ICgpID0+IHtcclxuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBtZW51U3R5bGUgPSBlID0+IHtcclxuICAgIGlmICghZSkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxlZnQ6IFwiMTAwdndcIixcclxuICAgICAgICB0cmFuc2l0aW9uOiBcIiBsZWZ0IC41c1wiXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxlZnQ6IFwiLTV2d1wiLFxyXG4gICAgICAgIHRyYW5zaXRpb246IFwibGVmdCAuNXNcIlxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1lbnVUb2dnbGUgPSBlID0+IHtcclxuICAgIGlmICghZSkge1xyXG4gICAgICBzZXRUb2dnbGUodHJ1ZSk7XHJcbiAgICB9IGVsc2Ugc2V0VG9nZ2xlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJtZW51XCIgc3R5bGU9e21lbnVTdHlsZSh0b2dnbGUpfT5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtZW51LW9wZW5cIiBvbkNsaWNrPXsoKSA9PiBtZW51VG9nZ2xlKHRvZ2dsZSl9PlxyXG4gICAgICAgIE9wZW4gTWVudVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YT5Ib21lPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvZnJvbnRlbmRcIj5cclxuICAgICAgICA8YT5Gcm9udGVuZDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPVwiL2Rlc2lnblwiPlxyXG4gICAgICAgIDxhPkRlc2lnbjwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPVwiL3Jlc3VtZVwiPlxyXG4gICAgICAgIDxhPlJlc3Vtw6k8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtZW51LWNsb3NlXCIgb25DbGljaz17KCkgPT4gbWVudVRvZ2dsZSh0b2dnbGUpfT5cclxuICAgICAgICBDbG9zZSBNZW51XHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMCAwIDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1lbnUtY2xvc2Uge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXIpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcblxyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlbmd0aDogMXJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXIpO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG5cclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHZhcigtLWFjY2VudC1jb2xvci1yKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWVudS1vcGVuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWludmVydGVkKTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAtNC43cmVtO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDAuNXJlbSAxLjFyZW0gMC41cmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG5hdiBhIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMiByZW07XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMzVzO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG5hdiBhOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuN3B4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxLjVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEuMjVyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAuMnJlbSAwIDAgMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4yNXM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbmF2IGE6aG92ZXI6YWZ0ZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjI1cztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXIpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG5hdiBhOm50aC1jaGlsZChuICsgMikge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbmF2IGE6Zm9jdXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItaW52ZXJ0ZWQpO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBuYXYgYTpmb2N1czphZnRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDExMHZ3O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWVudS1jbG9zZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWVudS1vcGVuIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmF2IGEge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWludmVydGVkKTtcclxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmF2IGE6bnRoLWNoaWxkICgxKSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYXYgYTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYXYgYTpob3ZlcjphZnRlciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Dropbox\\\\Creative Cloud Files\\\\_HI\\\\_Projects\\\\Next-Website\\\\components\\\\Menu\\\\Menu.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=design.js.4a79e506e18e5e5b84d3.hot-update.js.map