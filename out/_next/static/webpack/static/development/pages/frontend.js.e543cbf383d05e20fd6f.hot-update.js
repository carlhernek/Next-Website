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
    className: "jsx-2574440148" + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return menuToggle(toggle);
    },
    className: "jsx-2574440148" + " " + "menu-open",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
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
    className: "jsx-2574440148",
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
    className: "jsx-2574440148",
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
    className: "jsx-2574440148",
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
    className: "jsx-2574440148",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Resum\xE9")), __jsx("button", {
    onClick: function onClick() {
      return menuToggle(toggle);
    },
    className: "jsx-2574440148" + " " + "menu-close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Close Menu", __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    w: "3rem",
    h: "3rem",
    color: "var(--accent-color-r)",
    rotate: "rotate(270)",
    loc: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    w: "3rem",
    h: "3rem",
    color: "var(--accent-color-r)",
    rotate: "rotate(90)",
    loc: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2574440148",
    __self: this
  }, ".menu.jsx-2574440148{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;height:100%;padding:0.5rem 0 0 0;z-index:5;}.menu-close.jsx-2574440148{position:relative;display:none;z-index:1;color:var(--accent-color-r);background-color:transparent;padding:0.25rem;font-size:1.2rem;border-top:solid 1px var(--accent-color-r);border-bottom:solid 1px var(--accent-color-r);}.menu-open.jsx-2574440148{display:none;background-color:var(--font-color);color:var(--font-color-inverted);position:absolute;left:-4.7rem;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);font-size:1.2rem;padding:0.5rem 0.5rem 1.1rem 0.5rem;}nav.jsx-2574440148 a.jsx-2574440148{color:var(--font-color);padding:0.25rem;font-size:1.2 rem;-webkit-transition:color 0.35s;transition:color 0.35s;margin-left:0;z-index:2;-webkit-text-decoration:none;text-decoration:none;}nav.jsx-2574440148 a.jsx-2574440148::after{content:\"\";display:table;height:1.7px;min-height:1.5px;width:1.25rem;background-color:var(--font-color);margin:0.2rem 0 0 0;-webkit-transition:0.25s;transition:0.25s;}nav.jsx-2574440148 a.jsx-2574440148:hover.jsx-2574440148:after{width:50%;-webkit-transition:0.25s;transition:0.25s;background-color:var(--accent-color-r);}nav.jsx-2574440148 a.jsx-2574440148:nth-child(n + 2){margin-bottom:8px;}nav.jsx-2574440148 a.jsx-2574440148:focus{background-color:var(--font-color);color:var(--font-color-inverted);border:solid 3px transparent;}nav.jsx-2574440148 a.jsx-2574440148:focus.jsx-2574440148:after{background-color:var(--font-color);}@media only screen and (max-width:1024px){.menu.jsx-2574440148{position:absolute;width:110vw;height:100vh;background-color:var(--font-color);padding:0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.menu-close.jsx-2574440148{display:block;margin-top:1.5rem;}.menu-open.jsx-2574440148{display:block;}nav.jsx-2574440148 a.jsx-2574440148{text-align:center;width:50%;color:var(--font-color-inverted);-webkit-text-decoration:underline;text-decoration:underline;}nav.jsx-2574440148 a.jsx-2574440148:nth-child(1){margin-top:0.5rem;}nav.jsx-2574440148 a.jsx-2574440148::after{width:0;background-color:transparent;}nav.jsx-2574440148 a.jsx-2574440148:hover.jsx-2574440148:after{width:0;background-color:transparent;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEcm9wYm94XFxDcmVhdGl2ZSBDbG91ZCBGaWxlc1xcX0hJXFxfUHJvamVjdHNcXE5leHQtV2Vic2l0ZVxcY29tcG9uZW50c1xcTWVudVxcTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRFMsQUFHMEIsQUFTSyxBQVlMLEFBV1csQUFVYixBQVdELEFBTVEsQUFJaUIsQUFNQSxBQUtmLEFBVUosQUFLQSxBQUlJLEFBT0EsQUFJVixBQUtBLFFBSnFCLEFBS0EsRUF4RGQsQ0FYSCxFQXJCcUIsQ0ErRGYsQUFLcEIsSUFoRmEsQUFrRGYsQUFlZ0IsQUFtQkYsQUFPWixNQXBFZ0IsQ0FXSCxHQW1Ec0IsRUFuQnBCLENBakVMLENBMkVWLEdBdEJpQyxBQU1uQyxFQW9DRSxBQUtBLENBbEVpQixFQVhDLENBdEJVLEVBaUVTLEtBdERKLElBZ0NNLEdBVHpCLEdBWFMsR0E2REssT0EvQkMsQ0FwREEsQUFrQ00sS0E5Q2IsSUE2RVYsR0F0RE0sT0F1RE8sR0F2QjNCLE1BVUEsQ0FwRGtCLENBV0gsS0F1Qk8sUUF0QkssQUFVWCxFQXJCRyxPQWtGakIsR0FoRGlCLEVBWlAsS0FyQmlDLEtBc0J0QixnQkFwQ1YsV0FDQyxHQStDZCxRQWpDZ0QsQ0FiekIsV0FtQ3ZCLENBeUN1QixTQTNFWCxHQXNCTyxPQXJCbkIsVUFzQnNDLElBVnRDLGdDQVdBLDRCQW9ERSIsImZpbGUiOiJEOlxcRHJvcGJveFxcQ3JlYXRpdmUgQ2xvdWQgRmlsZXNcXF9ISVxcX1Byb2plY3RzXFxOZXh0LVdlYnNpdGVcXGNvbXBvbmVudHNcXE1lbnVcXE1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuXHJcbmNvbnN0IE1lbnUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgbWVudVN0eWxlID0gZSA9PiB7XHJcbiAgICBpZiAoIWUpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsZWZ0OiBcIjEwMHZ3XCIsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogXCIgbGVmdCAuNXNcIlxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsZWZ0OiBcIi01dndcIixcclxuICAgICAgICB0cmFuc2l0aW9uOiBcImxlZnQgLjVzXCJcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBtZW51VG9nZ2xlID0gZSA9PiB7XHJcbiAgICBpZiAoIWUpIHtcclxuICAgICAgc2V0VG9nZ2xlKHRydWUpO1xyXG4gICAgfSBlbHNlIHNldFRvZ2dsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibWVudVwiIHN0eWxlPXttZW51U3R5bGUodG9nZ2xlKX0+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWVudS1vcGVuXCIgb25DbGljaz17KCkgPT4gbWVudVRvZ2dsZSh0b2dnbGUpfT5cclxuICAgICAgICBPcGVuIE1lbnVcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGE+SG9tZTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPVwiL2Zyb250ZW5kXCI+XHJcbiAgICAgICAgPGE+RnJvbnRlbmQ8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9kZXNpZ25cIj5cclxuICAgICAgICA8YT5EZXNpZ248L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9yZXN1bWVcIj5cclxuICAgICAgICA8YT5SZXN1bcOpPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWVudS1jbG9zZVwiIG9uQ2xpY2s9eygpID0+IG1lbnVUb2dnbGUodG9nZ2xlKX0+XHJcbiAgICAgICAgQ2xvc2UgTWVudVxyXG4gICAgICAgIDxJY29uXHJcbiAgICAgICAgICB3PVwiM3JlbVwiXHJcbiAgICAgICAgICBoPVwiM3JlbVwiXHJcbiAgICAgICAgICBjb2xvcj1cInZhcigtLWFjY2VudC1jb2xvci1yKVwiXHJcbiAgICAgICAgICByb3RhdGU9XCJyb3RhdGUoMjcwKVwiXHJcbiAgICAgICAgICBsb2M9XCJsZWZ0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJY29uXHJcbiAgICAgICAgICB3PVwiM3JlbVwiXHJcbiAgICAgICAgICBoPVwiM3JlbVwiXHJcbiAgICAgICAgICBjb2xvcj1cInZhcigtLWFjY2VudC1jb2xvci1yKVwiXHJcbiAgICAgICAgICByb3RhdGU9XCJyb3RhdGUoOTApXCJcclxuICAgICAgICAgIGxvYz1cInJpZ2h0XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDAgMCAwO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tZW51LWNsb3NlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXIpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCB2YXIoLS1hY2NlbnQtY29sb3Itcik7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB2YXIoLS1hY2NlbnQtY29sb3Itcik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1lbnUtb3BlbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1pbnZlcnRlZCk7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogLTQuN3JlbTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMS4xcmVtIDAuNXJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBuYXYgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjIgcmVtO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjM1cztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBuYXYgYTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLjdweDtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogMS41cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxLjI1cmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjJyZW0gMCAwIDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMjVzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG5hdiBhOmhvdmVyOmFmdGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4yNXM7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci1yKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBuYXYgYTpudGgtY2hpbGQobiArIDIpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG5hdiBhOmZvY3VzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWludmVydGVkKTtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbmF2IGE6Zm9jdXM6YWZ0ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMTB2dztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1lbnUtY2xvc2Uge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1lbnUtb3BlbiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hdiBhIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1pbnZlcnRlZCk7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hdiBhOm50aC1jaGlsZCAoMSkge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmF2IGE6OmFmdGVyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmF2IGE6aG92ZXI6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51O1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Dropbox\\\\Creative Cloud Files\\\\_HI\\\\_Projects\\\\Next-Website\\\\components\\\\Menu\\\\Menu.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=frontend.js.e543cbf383d05e20fd6f.hot-update.js.map