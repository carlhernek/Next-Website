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
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icon/Icon */ "./components/Icon/Icon.js");
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
        transition: "left .5s"
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
    className: "jsx-1220162372" + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return menuToggle(toggle);
    },
    className: "jsx-1220162372" + " " + "menu-open",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Open Menu", __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    w: "1em",
    h: "1em",
    color: "var(--font-color-inverted)",
    rotate: "rotate(270)",
    loc: "leftSmall",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    w: "1em",
    h: "1em",
    color: "var(--font-color-inverted)",
    rotate: "rotate(90)",
    loc: "rightSmall",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1220162372",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/frontend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1220162372",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Frontend")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/design",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1220162372",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Design")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/resume",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1220162372",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Resum\xE9")), __jsx("button", {
    onClick: function onClick() {
      return menuToggle(toggle);
    },
    className: "jsx-1220162372" + " " + "menu-close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Close Menu", __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    w: "1em",
    h: "1em",
    color: "var(--accent-color-r)",
    rotate: "rotate(270)",
    loc: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    w: "1em",
    h: "1em",
    color: "var(--accent-color-r)",
    rotate: "rotate(90)",
    loc: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1220162372",
    __self: this
  }, ".menu.jsx-1220162372{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;height:100%;padding:0.5rem 0 0 0;z-index:5;}.menu-close.jsx-1220162372{position:relative;display:none;z-index:1;color:var(--accent-color-r);background-color:transparent;padding:0.25rem;font-size:1.2rem;margin:0 auto;}.menu-open.jsx-1220162372{display:none;background-color:var(--font-color);color:var(--font-color-inverted);position:absolute;left:-5rem;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);font-size:1.2rem;padding:0.5rem 0.65rem 1.1rem 0.65rem;}nav.jsx-1220162372 a.jsx-1220162372{color:var(--font-color);padding:0.25rem;font-size:1.2 rem;-webkit-transition:color 0.35s;transition:color 0.35s;margin-left:0;z-index:2;-webkit-text-decoration:none;text-decoration:none;}nav.jsx-1220162372 a.jsx-1220162372::after{content:\"\";display:table;height:1.7px;min-height:1.5px;width:1.25rem;background-color:var(--font-color);margin:0.2rem 0 0 0;-webkit-transition:0.25s;transition:0.25s;}nav.jsx-1220162372 a.jsx-1220162372:hover.jsx-1220162372:after{width:50%;-webkit-transition:0.25s;transition:0.25s;background-color:var(--accent-color-r);}nav.jsx-1220162372 a.jsx-1220162372:nth-child(n + 2){margin-bottom:8px;}nav.jsx-1220162372 a.jsx-1220162372:focus{background-color:var(--font-color);color:var(--font-color-inverted);border:solid 3px transparent;}nav.jsx-1220162372 a.jsx-1220162372:focus.jsx-1220162372:after{background-color:var(--font-color);}@media only screen and (max-width:1024px){.menu.jsx-1220162372{position:absolute;width:110vw;height:100vh;background-color:var(--font-color);padding:0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.menu-close.jsx-1220162372{display:block;margin-top:1.5rem;}.menu-open.jsx-1220162372{display:block;}nav.jsx-1220162372 a.jsx-1220162372{text-align:center;width:50%;color:var(--font-color-inverted);-webkit-text-decoration:underline;text-decoration:underline;}nav.jsx-1220162372 a.jsx-1220162372:nth-child(1){margin-top:0.5rem;}nav.jsx-1220162372 a.jsx-1220162372::after{width:0;background-color:transparent;}nav.jsx-1220162372 a.jsx-1220162372:hover.jsx-1220162372:after{width:0;background-color:transparent;}nav.jsx-1220162372 a.jsx-1220162372:focus .menu.jsx-1220162372{left:-5vw;-webkit-transition:left 0.5s;transition:left 0.5s;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEcm9wYm94XFxDcmVhdGl2ZSBDbG91ZCBGaWxlc1xcX0hJXFxfUHJvamVjdHNcXE5leHQtV2Vic2l0ZVxcY29tcG9uZW50c1xcTWVudVxcTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RVMsQUFHMEIsQUFTSyxBQVdMLEFBV1csQUFVYixBQVdELEFBTVEsQUFJaUIsQUFNQSxBQUtmLEFBVUosQUFLQSxBQUlJLEFBT0EsQUFJVixBQUtBLEFBS0UsUUFUbUIsQUFLQSxFQXhEZCxBQTZETSxDQXhFVCxFQXJCcUIsQ0ErRGYsQUFLcEIsSUEvRWEsQUFpRGYsQUFlZ0IsQUFtQkYsQUFPWixNQXBFZ0IsQ0FXSCxHQW1Ec0IsRUFuQnBCLENBaEVMLENBMEVWLEdBdEJpQyxBQU1uQyxFQW9DRSxBQUtBLENBbEVpQixFQVhDLENBckJVLEVBZ0VTLEtBdERKLElBZ0NNLEdBVHpCLEdBWFMsRUFpRnZCLENBcEI0QixPQS9CQyxDQW5EQSxBQWlDTSxLQTdDYixJQTRFVixHQXRETSxPQXVETyxHQXZCM0IsTUFVQSxDQW5Ea0IsQ0FVTCxLQXVCUyxNQXRCSyxFQVVYLEVBcEJHLE9BaUZqQixHQWhEaUIsRUFaUCxLQXBCSSxLQXFCTyxTQXBCdkIsT0FmYSxXQUNDLEdBOENkLFNBN0N1QixXQWtDdkIsQ0F5Q3VCLFNBMUVYLENBcUJPLFNBcEJuQixRQXFCd0Msc0NBQ3hDLDRCQW9ERSIsImZpbGUiOiJEOlxcRHJvcGJveFxcQ3JlYXRpdmUgQ2xvdWQgRmlsZXNcXF9ISVxcX1Byb2plY3RzXFxOZXh0LVdlYnNpdGVcXGNvbXBvbmVudHNcXE1lbnVcXE1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuXHJcbmNvbnN0IE1lbnUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgbWVudVN0eWxlID0gZSA9PiB7XHJcbiAgICBpZiAoIWUpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsZWZ0OiBcIjEwMHZ3XCIsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogXCJsZWZ0IC41c1wiXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxlZnQ6IFwiLTV2d1wiLFxyXG4gICAgICAgIHRyYW5zaXRpb246IFwibGVmdCAuNXNcIlxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1lbnVUb2dnbGUgPSBlID0+IHtcclxuICAgIGlmICghZSkge1xyXG4gICAgICBzZXRUb2dnbGUodHJ1ZSk7XHJcbiAgICB9IGVsc2Ugc2V0VG9nZ2xlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJtZW51XCIgc3R5bGU9e21lbnVTdHlsZSh0b2dnbGUpfT5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtZW51LW9wZW5cIiBvbkNsaWNrPXsoKSA9PiBtZW51VG9nZ2xlKHRvZ2dsZSl9PlxyXG4gICAgICAgIE9wZW4gTWVudVxyXG4gICAgICAgIDxJY29uXHJcbiAgICAgICAgICB3PVwiMWVtXCJcclxuICAgICAgICAgIGg9XCIxZW1cIlxyXG4gICAgICAgICAgY29sb3I9XCJ2YXIoLS1mb250LWNvbG9yLWludmVydGVkKVwiXHJcbiAgICAgICAgICByb3RhdGU9XCJyb3RhdGUoMjcwKVwiXHJcbiAgICAgICAgICBsb2M9XCJsZWZ0U21hbGxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEljb25cclxuICAgICAgICAgIHc9XCIxZW1cIlxyXG4gICAgICAgICAgaD1cIjFlbVwiXHJcbiAgICAgICAgICBjb2xvcj1cInZhcigtLWZvbnQtY29sb3ItaW52ZXJ0ZWQpXCJcclxuICAgICAgICAgIHJvdGF0ZT1cInJvdGF0ZSg5MClcIlxyXG4gICAgICAgICAgbG9jPVwicmlnaHRTbWFsbFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxhPkhvbWU8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9mcm9udGVuZFwiPlxyXG4gICAgICAgIDxhPkZyb250ZW5kPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvZGVzaWduXCI+XHJcbiAgICAgICAgPGE+RGVzaWduPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvcmVzdW1lXCI+XHJcbiAgICAgICAgPGE+UmVzdW3DqTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1lbnUtY2xvc2VcIiBvbkNsaWNrPXsoKSA9PiBtZW51VG9nZ2xlKHRvZ2dsZSl9PlxyXG4gICAgICAgIENsb3NlIE1lbnVcclxuICAgICAgICA8SWNvblxyXG4gICAgICAgICAgdz1cIjFlbVwiXHJcbiAgICAgICAgICBoPVwiMWVtXCJcclxuICAgICAgICAgIGNvbG9yPVwidmFyKC0tYWNjZW50LWNvbG9yLXIpXCJcclxuICAgICAgICAgIHJvdGF0ZT1cInJvdGF0ZSgyNzApXCJcclxuICAgICAgICAgIGxvYz1cImxlZnRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEljb25cclxuICAgICAgICAgIHc9XCIxZW1cIlxyXG4gICAgICAgICAgaD1cIjFlbVwiXHJcbiAgICAgICAgICBjb2xvcj1cInZhcigtLWFjY2VudC1jb2xvci1yKVwiXHJcbiAgICAgICAgICByb3RhdGU9XCJyb3RhdGUoOTApXCJcclxuICAgICAgICAgIGxvYz1cInJpZ2h0XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMCAwIDA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1lbnUtY2xvc2Uge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3Itcik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1lbnUtb3BlbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1pbnZlcnRlZCk7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogLTVyZW07XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMC42NXJlbSAxLjFyZW0gMC42NXJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBuYXYgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjIgcmVtO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjM1cztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBuYXYgYTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjdweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMS41cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLjI1cmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjJyZW0gMCAwIDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMjVzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG5hdiBhOmhvdmVyOmFmdGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4yNXM7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci1yKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBuYXYgYTpudGgtY2hpbGQobiArIDIpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG5hdiBhOmZvY3VzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWludmVydGVkKTtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbmF2IGE6Zm9jdXM6YWZ0ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMTB2dztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1lbnUtY2xvc2Uge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1lbnUtb3BlbiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hdiBhIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1pbnZlcnRlZCk7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hdiBhOm50aC1jaGlsZCAoMSkge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmF2IGE6OmFmdGVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmF2IGE6aG92ZXI6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYXYgYTpmb2N1cyAubWVudSB7XHJcbiAgICAgICAgICAgICAgbGVmdDogLTV2dztcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuNXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Dropbox\\\\Creative Cloud Files\\\\_HI\\\\_Projects\\\\Next-Website\\\\components\\\\Menu\\\\Menu.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=frontend.js.f518b881627e3fdf1845.hot-update.js.map