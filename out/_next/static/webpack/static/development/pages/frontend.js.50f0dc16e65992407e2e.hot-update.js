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

  var divClass = function divClass(e) {
    if (!e) {
      return "link-container-toggled";
    } else {
      return "link-container";
    }
  };

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
      lineNumber: 37
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return menuToggle(toggle);
    },
    className: "jsx-1220162372" + " " + "menu-open",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
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
      lineNumber: 40
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
      lineNumber: 47
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1220162372" + " " + (divClass(toggle) || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1220162372",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/frontend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1220162372",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Frontend")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/design",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1220162372",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Design")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/resume",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1220162372",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Resum\xE9")), __jsx("button", {
    onClick: function onClick() {
      return menuToggle(toggle);
    },
    className: "jsx-1220162372" + " " + "menu-close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
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
      lineNumber: 70
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
      lineNumber: 77
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1220162372",
    __self: this
  }, ".menu.jsx-1220162372{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;height:100%;padding:0.5rem 0 0 0;z-index:5;}.menu-close.jsx-1220162372{position:relative;display:none;z-index:1;color:var(--accent-color-r);background-color:transparent;padding:0.25rem;font-size:1.2rem;margin:0 auto;}.menu-open.jsx-1220162372{display:none;background-color:var(--font-color);color:var(--font-color-inverted);position:absolute;left:-5rem;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);font-size:1.2rem;padding:0.5rem 0.65rem 1.1rem 0.65rem;}nav.jsx-1220162372 a.jsx-1220162372{color:var(--font-color);padding:0.25rem;font-size:1.2 rem;-webkit-transition:color 0.35s;transition:color 0.35s;margin-left:0;z-index:2;-webkit-text-decoration:none;text-decoration:none;}nav.jsx-1220162372 a.jsx-1220162372::after{content:\"\";display:table;height:1.7px;min-height:1.5px;width:1.25rem;background-color:var(--font-color);margin:0.2rem 0 0 0;-webkit-transition:0.25s;transition:0.25s;}nav.jsx-1220162372 a.jsx-1220162372:hover.jsx-1220162372:after{width:50%;-webkit-transition:0.25s;transition:0.25s;background-color:var(--accent-color-r);}nav.jsx-1220162372 a.jsx-1220162372:nth-child(n + 2){margin-bottom:8px;}nav.jsx-1220162372 a.jsx-1220162372:focus{background-color:var(--font-color);color:var(--font-color-inverted);border:solid 3px transparent;}nav.jsx-1220162372 a.jsx-1220162372:focus.jsx-1220162372:after{background-color:var(--font-color);}@media only screen and (max-width:1024px){.menu.jsx-1220162372{position:absolute;width:110vw;height:100vh;background-color:var(--font-color);padding:0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.menu-close.jsx-1220162372{display:block;margin-top:1.5rem;}.menu-open.jsx-1220162372{display:block;}nav.jsx-1220162372 a.jsx-1220162372{text-align:center;width:50%;color:var(--font-color-inverted);-webkit-text-decoration:underline;text-decoration:underline;}nav.jsx-1220162372 a.jsx-1220162372:nth-child(1){margin-top:0.5rem;}nav.jsx-1220162372 a.jsx-1220162372::after{width:0;background-color:transparent;}nav.jsx-1220162372 a.jsx-1220162372:hover.jsx-1220162372:after{width:0;background-color:transparent;}nav.jsx-1220162372 a.jsx-1220162372:focus .menu.jsx-1220162372{left:-5vw;-webkit-transition:left 0.5s;transition:left 0.5s;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEcm9wYm94XFxDcmVhdGl2ZSBDbG91ZCBGaWxlc1xcX0hJXFxfUHJvamVjdHNcXE5leHQtV2Vic2l0ZVxcY29tcG9uZW50c1xcTWVudVxcTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRlMsQUFHMEIsQUFTSyxBQVdMLEFBV1csQUFVYixBQVdELEFBTVEsQUFJaUIsQUFNQSxBQUtmLEFBVUosQUFLQSxBQUlJLEFBT0EsQUFJVixBQUtBLEFBS0UsUUFUbUIsQUFLQSxFQXhEZCxBQTZETSxDQXhFVCxFQXJCcUIsQ0ErRGYsQUFLcEIsSUEvRWEsQUFpRGYsQUFlZ0IsQUFtQkYsQUFPWixNQXBFZ0IsQ0FXSCxHQW1Ec0IsRUFuQnBCLENBaEVMLENBMEVWLEdBdEJpQyxBQU1uQyxFQW9DRSxBQUtBLENBbEVpQixFQVhDLENBckJVLEVBZ0VTLEtBdERKLElBZ0NNLEdBVHpCLEdBWFMsRUFpRnZCLENBcEI0QixPQS9CQyxDQW5EQSxBQWlDTSxLQTdDYixJQTRFVixHQXRETSxPQXVETyxHQXZCM0IsTUFVQSxDQW5Ea0IsQ0FVTCxLQXVCUyxNQXRCSyxFQVVYLEVBcEJHLE9BaUZqQixHQWhEaUIsRUFaUCxLQXBCSSxLQXFCTyxTQXBCdkIsT0FmYSxXQUNDLEdBOENkLFNBN0N1QixXQWtDdkIsQ0F5Q3VCLFNBMUVYLENBcUJPLFNBcEJuQixRQXFCd0Msc0NBQ3hDLDRCQW9ERSIsImZpbGUiOiJEOlxcRHJvcGJveFxcQ3JlYXRpdmUgQ2xvdWQgRmlsZXNcXF9ISVxcX1Byb2plY3RzXFxOZXh0LVdlYnNpdGVcXGNvbXBvbmVudHNcXE1lbnVcXE1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuXHJcbmNvbnN0IE1lbnUgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgZGl2Q2xhc3MgPSBlID0+IHtcclxuICAgIGlmICghZSkge1xyXG4gICAgICByZXR1cm4gXCJsaW5rLWNvbnRhaW5lci10b2dnbGVkXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJsaW5rLWNvbnRhaW5lclwiO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1lbnVTdHlsZSA9IGUgPT4ge1xyXG4gICAgaWYgKCFlKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbGVmdDogXCIxMDB2d1wiLFxyXG4gICAgICAgIHRyYW5zaXRpb246IFwibGVmdCAuNXNcIlxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsZWZ0OiBcIi01dndcIixcclxuICAgICAgICB0cmFuc2l0aW9uOiBcImxlZnQgLjVzXCJcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBtZW51VG9nZ2xlID0gZSA9PiB7XHJcbiAgICBpZiAoIWUpIHtcclxuICAgICAgc2V0VG9nZ2xlKHRydWUpO1xyXG4gICAgfSBlbHNlIHNldFRvZ2dsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibWVudVwiIHN0eWxlPXttZW51U3R5bGUodG9nZ2xlKX0+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWVudS1vcGVuXCIgb25DbGljaz17KCkgPT4gbWVudVRvZ2dsZSh0b2dnbGUpfT5cclxuICAgICAgICBPcGVuIE1lbnVcclxuICAgICAgICA8SWNvblxyXG4gICAgICAgICAgdz1cIjFlbVwiXHJcbiAgICAgICAgICBoPVwiMWVtXCJcclxuICAgICAgICAgIGNvbG9yPVwidmFyKC0tZm9udC1jb2xvci1pbnZlcnRlZClcIlxyXG4gICAgICAgICAgcm90YXRlPVwicm90YXRlKDI3MClcIlxyXG4gICAgICAgICAgbG9jPVwibGVmdFNtYWxsXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJY29uXHJcbiAgICAgICAgICB3PVwiMWVtXCJcclxuICAgICAgICAgIGg9XCIxZW1cIlxyXG4gICAgICAgICAgY29sb3I9XCJ2YXIoLS1mb250LWNvbG9yLWludmVydGVkKVwiXHJcbiAgICAgICAgICByb3RhdGU9XCJyb3RhdGUoOTApXCJcclxuICAgICAgICAgIGxvYz1cInJpZ2h0U21hbGxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17ZGl2Q2xhc3ModG9nZ2xlKX0+PC9kaXY+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGE+SG9tZTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8TGluayBocmVmPVwiL2Zyb250ZW5kXCI+XHJcbiAgICAgICAgPGE+RnJvbnRlbmQ8L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9kZXNpZ25cIj5cclxuICAgICAgICA8YT5EZXNpZ248L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9yZXN1bWVcIj5cclxuICAgICAgICA8YT5SZXN1bcOpPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWVudS1jbG9zZVwiIG9uQ2xpY2s9eygpID0+IG1lbnVUb2dnbGUodG9nZ2xlKX0+XHJcbiAgICAgICAgQ2xvc2UgTWVudVxyXG4gICAgICAgIDxJY29uXHJcbiAgICAgICAgICB3PVwiMWVtXCJcclxuICAgICAgICAgIGg9XCIxZW1cIlxyXG4gICAgICAgICAgY29sb3I9XCJ2YXIoLS1hY2NlbnQtY29sb3ItcilcIlxyXG4gICAgICAgICAgcm90YXRlPVwicm90YXRlKDI3MClcIlxyXG4gICAgICAgICAgbG9jPVwibGVmdFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SWNvblxyXG4gICAgICAgICAgdz1cIjFlbVwiXHJcbiAgICAgICAgICBoPVwiMWVtXCJcclxuICAgICAgICAgIGNvbG9yPVwidmFyKC0tYWNjZW50LWNvbG9yLXIpXCJcclxuICAgICAgICAgIHJvdGF0ZT1cInJvdGF0ZSg5MClcIlxyXG4gICAgICAgICAgbG9jPVwicmlnaHRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwIDAgMDtcclxuICAgICAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWVudS1jbG9zZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci1yKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWVudS1vcGVuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWludmVydGVkKTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAtNXJlbTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjY1cmVtIDEuMXJlbSAwLjY1cmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG5hdiBhIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMiByZW07XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMzVzO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG5hdiBhOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuN3B4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxLjVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEuMjVyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAuMnJlbSAwIDAgMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4yNXM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbmF2IGE6aG92ZXI6YWZ0ZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjI1cztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXIpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG5hdiBhOm50aC1jaGlsZChuICsgMikge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbmF2IGE6Zm9jdXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItaW52ZXJ0ZWQpO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBuYXYgYTpmb2N1czphZnRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDExMHZ3O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWVudS1jbG9zZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWVudS1vcGVuIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmF2IGEge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWludmVydGVkKTtcclxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmF2IGE6bnRoLWNoaWxkICgxKSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYXYgYTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYXYgYTpob3ZlcjphZnRlciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hdiBhOmZvY3VzIC5tZW51IHtcclxuICAgICAgICAgICAgICBsZWZ0OiAtNXZ3O1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGxlZnQgMC41cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcclxuIl19 */\n/*@ sourceURL=D:\\\\Dropbox\\\\Creative Cloud Files\\\\_HI\\\\_Projects\\\\Next-Website\\\\components\\\\Menu\\\\Menu.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=frontend.js.50f0dc16e65992407e2e.hot-update.js.map