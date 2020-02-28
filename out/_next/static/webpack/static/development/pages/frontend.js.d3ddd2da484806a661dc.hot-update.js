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

  var divStyle = function divStyle(e) {
    if (!e) {
      return {
        display: "none"
      };
    } else return {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    };
  };

  var menuToggle = function menuToggle(e) {
    if (!e) {
      setToggle(true);
    } else setToggle(false);
  };

  return __jsx("nav", {
    style: menuStyle(toggle),
    className: "jsx-2120202390" + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return menuToggle(toggle);
    },
    className: "jsx-2120202390" + " " + "menu-open",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
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
      lineNumber: 46
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
      lineNumber: 53
    },
    __self: this
  })), __jsx("div", {
    style: divStyle(toggle),
    className: "jsx-2120202390",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2120202390",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/frontend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2120202390",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Frontend")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/design",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2120202390",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Design")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/resume",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2120202390",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Resum\xE9")), __jsx("button", {
    onClick: function onClick() {
      return menuToggle(toggle);
    },
    className: "jsx-2120202390" + " " + "menu-close",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
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
      lineNumber: 76
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
      lineNumber: 83
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2120202390",
    __self: this
  }, ".menu.jsx-2120202390{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;height:100%;padding:0.5rem 0 0 0;z-index:5;}.menu-close.jsx-2120202390{position:relative;display:none;z-index:1;color:var(--accent-color-r);background-color:transparent;padding:0.25rem;font-size:1.2rem;margin:0 auto;}.menu-open.jsx-2120202390{display:none;background-color:var(--font-color);color:var(--font-color-inverted);position:absolute;left:-5rem;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);font-size:1.2rem;padding:0.5rem 0.65rem 1.1rem 0.65rem;}nav.jsx-2120202390 a.jsx-2120202390{color:var(--font-color);padding:0.25rem;font-size:1.2 rem;-webkit-transition:color 0.35s;transition:color 0.35s;margin-left:0;z-index:2;-webkit-text-decoration:none;text-decoration:none;}nav.jsx-2120202390 a.jsx-2120202390::after{content:\"\";display:table;height:1.7px;min-height:1.5px;width:1.25rem;background-color:var(--font-color);margin:0.2rem 0 0 0;-webkit-transition:0.25s;transition:0.25s;}nav.jsx-2120202390 a.jsx-2120202390:hover.jsx-2120202390:after{width:50%;-webkit-transition:0.25s;transition:0.25s;background-color:var(--accent-color-r);}nav.jsx-2120202390 a.jsx-2120202390:nth-child(n + 2){margin-bottom:8px;}nav.jsx-2120202390 a.jsx-2120202390:focus{background-color:var(--font-color);color:var(--font-color-inverted);border:solid 3px transparent;}nav.jsx-2120202390 a.jsx-2120202390:focus.jsx-2120202390:after{background-color:var(--font-color);}@media only screen and (max-width:1024px){.menu.jsx-2120202390{position:absolute;width:110vw;height:100vh;background-color:var(--font-color);padding:0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.menu-close.jsx-2120202390{display:block;margin-top:1.5rem;}.menu-open.jsx-2120202390{display:block;}nav.jsx-2120202390 a.jsx-2120202390{text-align:center;width:50%;color:var(--font-color-inverted);-webkit-text-decoration:underline;text-decoration:underline;}nav.jsx-2120202390 a.jsx-2120202390:nth-child(1){margin-top:0.5rem;}nav.jsx-2120202390 a.jsx-2120202390::after{width:0;background-color:transparent;}nav.jsx-2120202390 a.jsx-2120202390:hover.jsx-2120202390:after{width:0;background-color:transparent;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEcm9wYm94XFxDcmVhdGl2ZSBDbG91ZCBGaWxlc1xcX0hJXFxfUHJvamVjdHNcXE5leHQtV2Vic2l0ZVxcY29tcG9uZW50c1xcTWVudVxcTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RlMsQUFHMEIsQUFTSyxBQVdMLEFBV1csQUFVYixBQVdELEFBTVEsQUFJaUIsQUFNQSxBQUtmLEFBVUosQUFLQSxBQUlJLEFBT0EsQUFJVixBQUtBLFFBSnFCLEFBS0EsRUF4RGQsQ0FYSCxFQXJCcUIsQ0ErRGYsQUFLcEIsSUEvRWEsQUFpRGYsQUFlZ0IsQUFtQkYsQUFPWixNQXBFZ0IsQ0FXSCxHQW1Ec0IsRUFuQnBCLENBaEVMLENBMEVWLEdBdEJpQyxBQU1uQyxFQW9DRSxBQUtBLENBbEVpQixFQVhDLENBckJVLEVBZ0VTLEtBdERKLElBZ0NNLEdBVHpCLEdBWFMsR0E2REssT0EvQkMsQ0FuREEsQUFpQ00sS0E3Q2IsSUE0RVYsR0F0RE0sT0F1RE8sR0F2QjNCLE1BVUEsQ0FuRGtCLENBVUwsS0F1QlMsTUF0QkssRUFVWCxFQXBCRyxPQWlGakIsR0FoRGlCLEVBWlAsS0FwQkksS0FxQk8sU0FwQnZCLE9BZmEsV0FDQyxHQThDZCxTQTdDdUIsV0FrQ3ZCLENBeUN1QixTQTFFWCxDQXFCTyxTQXBCbkIsUUFxQndDLHNDQUN4Qyw0QkFvREUiLCJmaWxlIjoiRDpcXERyb3Bib3hcXENyZWF0aXZlIENsb3VkIEZpbGVzXFxfSElcXF9Qcm9qZWN0c1xcTmV4dC1XZWJzaXRlXFxjb21wb25lbnRzXFxNZW51XFxNZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XHJcblxyXG5jb25zdCBNZW51ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG1lbnVTdHlsZSA9IGUgPT4ge1xyXG4gICAgaWYgKCFlKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbGVmdDogXCIxMDB2d1wiLFxyXG4gICAgICAgIHRyYW5zaXRpb246IFwibGVmdCAuNXNcIlxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsZWZ0OiBcIi01dndcIixcclxuICAgICAgICB0cmFuc2l0aW9uOiBcImxlZnQgLjVzXCJcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBkaXZTdHlsZSA9IGUgPT4ge1xyXG4gICAgaWYgKCFlKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZGlzcGxheTogXCJub25lXCJcclxuICAgICAgfTtcclxuICAgIH0gZWxzZVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxyXG4gICAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1lbnVUb2dnbGUgPSBlID0+IHtcclxuICAgIGlmICghZSkge1xyXG4gICAgICBzZXRUb2dnbGUodHJ1ZSk7XHJcbiAgICB9IGVsc2Ugc2V0VG9nZ2xlKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJtZW51XCIgc3R5bGU9e21lbnVTdHlsZSh0b2dnbGUpfT5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtZW51LW9wZW5cIiBvbkNsaWNrPXsoKSA9PiBtZW51VG9nZ2xlKHRvZ2dsZSl9PlxyXG4gICAgICAgIE9wZW4gTWVudVxyXG4gICAgICAgIDxJY29uXHJcbiAgICAgICAgICB3PVwiMWVtXCJcclxuICAgICAgICAgIGg9XCIxZW1cIlxyXG4gICAgICAgICAgY29sb3I9XCJ2YXIoLS1mb250LWNvbG9yLWludmVydGVkKVwiXHJcbiAgICAgICAgICByb3RhdGU9XCJyb3RhdGUoMjcwKVwiXHJcbiAgICAgICAgICBsb2M9XCJsZWZ0U21hbGxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEljb25cclxuICAgICAgICAgIHc9XCIxZW1cIlxyXG4gICAgICAgICAgaD1cIjFlbVwiXHJcbiAgICAgICAgICBjb2xvcj1cInZhcigtLWZvbnQtY29sb3ItaW52ZXJ0ZWQpXCJcclxuICAgICAgICAgIHJvdGF0ZT1cInJvdGF0ZSg5MClcIlxyXG4gICAgICAgICAgbG9jPVwicmlnaHRTbWFsbFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxkaXYgc3R5bGU9e2RpdlN0eWxlKHRvZ2dsZSl9PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YT5Ib21lPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL2Zyb250ZW5kXCI+XHJcbiAgICAgICAgICA8YT5Gcm9udGVuZDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9kZXNpZ25cIj5cclxuICAgICAgICAgIDxhPkRlc2lnbjwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9yZXN1bWVcIj5cclxuICAgICAgICAgIDxhPlJlc3Vtw6k8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWVudS1jbG9zZVwiIG9uQ2xpY2s9eygpID0+IG1lbnVUb2dnbGUodG9nZ2xlKX0+XHJcbiAgICAgICAgICBDbG9zZSBNZW51XHJcbiAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICB3PVwiMWVtXCJcclxuICAgICAgICAgICAgaD1cIjFlbVwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwidmFyKC0tYWNjZW50LWNvbG9yLXIpXCJcclxuICAgICAgICAgICAgcm90YXRlPVwicm90YXRlKDI3MClcIlxyXG4gICAgICAgICAgICBsb2M9XCJsZWZ0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICB3PVwiMWVtXCJcclxuICAgICAgICAgICAgaD1cIjFlbVwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwidmFyKC0tYWNjZW50LWNvbG9yLXIpXCJcclxuICAgICAgICAgICAgcm90YXRlPVwicm90YXRlKDkwKVwiXHJcbiAgICAgICAgICAgIGxvYz1cInJpZ2h0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwIDAgMDtcclxuICAgICAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWVudS1jbG9zZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci1yKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAubWVudS1vcGVuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWludmVydGVkKTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAtNXJlbTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjY1cmVtIDEuMXJlbSAwLjY1cmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG5hdiBhIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMiByZW07XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMzVzO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG5hdiBhOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEuN3B4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxLjVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEuMjVyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAuMnJlbSAwIDAgMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4yNXM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbmF2IGE6aG92ZXI6YWZ0ZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjI1cztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLXIpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG5hdiBhOm50aC1jaGlsZChuICsgMikge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbmF2IGE6Zm9jdXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItaW52ZXJ0ZWQpO1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBuYXYgYTpmb2N1czphZnRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDExMHZ3O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWVudS1jbG9zZSB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWVudS1vcGVuIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmF2IGEge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWludmVydGVkKTtcclxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmF2IGE6bnRoLWNoaWxkICgxKSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYXYgYTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYXYgYTpob3ZlcjphZnRlciB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Dropbox\\\\Creative Cloud Files\\\\_HI\\\\_Projects\\\\Next-Website\\\\components\\\\Menu\\\\Menu.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=frontend.js.d3ddd2da484806a661dc.hot-update.js.map