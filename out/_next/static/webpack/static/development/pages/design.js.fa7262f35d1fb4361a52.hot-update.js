webpackHotUpdate("static\\development\\pages\\design.js",{

/***/ "./components/Projects/DesignProjects.js":
/*!***********************************************!*\
  !*** ./components/Projects/DesignProjects.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DesignProjects; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon/Icon */ "./components/Icon/Icon.js");
var _jsxFileName = "D:\\Dropbox\\Creative Cloud Files\\_HI\\_Projects\\Next-Website\\components\\Projects\\DesignProjects.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function DesignProjects(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("design-project-modal-hidden"),
      toggle = _useState[0],
      setToggle = _useState[1];

  return __jsx("div", {
    className: "jsx-2697818168" + " " + "no-border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2697818168" + " " + "design-project-thumbnail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return setToggle("design-project-modal");
    },
    className: "jsx-2697818168" + " " + "open-modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Show Project", __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    w: "1em",
    h: "1em",
    color: "var(--font-color)",
    rotate: "rotate(270)",
    loc: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    w: "1em",
    h: "1em",
    color: "var(--font-color)",
    rotate: "rotate(90)",
    loc: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), __jsx("img", {
    src: "https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_70,w_512/v1582198505/Website/Img/logi_zqrfef.png",
    alt: "",
    srcSet: "",
    className: "jsx-2697818168" + " " + "white-border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2697818168" + " " + (toggle || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return setToggle("design-project-modal-hidden");
    },
    className: "jsx-2697818168" + " " + "close-modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Close", __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    w: "1em",
    h: "1em",
    color: "var(--font-color)",
    rotate: "rotate(270)",
    loc: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    w: "1em",
    h: "1em",
    color: "var(--font-color)",
    rotate: "rotate(90)",
    loc: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2697818168" + " " + "modal-content no-border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "modal content goes here")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2697818168",
    __self: this
  }, ".open-modal.jsx-2697818168{position:absolute;color:var(--font-color);background-color:var(--accent-color-b);padding:0.25rem;margin:0 0 1rem 0.5rem;font-size:1.2rem;cursor:pointer;bottom:1rem;right:1rem;}.open-modal.jsx-2697818168:focus{border:solid 3px transparent;background-color:var(--font-color);color:var(--font-color-inverted);}.open-modal.jsx-2697818168:hover{border:solid 3px transparent;background-color:var(--font-color);color:var(--font-color-inverted);}.close-modal.jsx-2697818168{position:fixed;color:var(--font-color);background-color:var(--accent-color-b);padding:0.25rem;margin:0 0 1rem 0.5rem;font-size:1.2rem;cursor:pointer;}.close-modal.jsx-2697818168:focus{border:solid 3px transparent;background-color:var(--font-color);color:var(--font-color-inverted);}.close-modal.jsx-2697818168:hover{border:solid 3px transparent;background-color:var(--font-color);color:var(--font-color-inverted);}.design-project-thumbnail.jsx-2697818168{position:relative;width:18rem;height:18rem;margin:1rem;}.design-project-thumbnail.jsx-2697818168 img.jsx-2697818168{object-fit:cover;width:18rem;height:18rem;box-shadow:0.5rem 0.5rem 0px 0px var(--accent-color-r);}.design-project-modal.jsx-2697818168{position:fixed;height:100vh;width:100vw;top:0;left:0;z-index:7;background-color:var(--font-color-inverted);overflow:scroll;}.design-project-modal-hidden.jsx-2697818168{display:none;}@media only screen and (orientation:portrait){.design-project-thumbnail.jsx-2697818168{width:90%;height:auto;min-height:5rem;}.design-project-thumbnail.jsx-2697818168 img.jsx-2697818168{width:90%;height:auto;min-height:5rem;}}@media only screen and (max-width:1024px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEcm9wYm94XFxDcmVhdGl2ZSBDbG91ZCBGaWxlc1xcX0hJXFxfUHJvamVjdHNcXE5leHQtV2Vic2l0ZVxcY29tcG9uZW50c1xcUHJvamVjdHNcXERlc2lnblByb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREa0IsQUFHNkIsQUFZVyxBQU1BLEFBTWQsQUFVYyxBQU1BLEFBTVgsQUFPRCxBQU9GLEFBV0YsQUFLRCxBQU1BLFVBTEUsQUFNQSxHQVhoQixFQS9DMEIsQUFvQ1gsRUFQRCxDQXJEWSxBQThDWixJQStCTSxBQU1BLE1BdEJOLENBakR1QixBQU1BLEFBZ0JBLEFBTUEsQUFjdEIsQ0FQQSxRQStCYixBQU1BLENBM0R1QyxDQXFDakMsRUE3RGlDLEFBc0RnQixDQVAzQyxHQWVMLE9BQ0csRUFmWixRQWdCOEMsQ0FwRFgsQUFNQSxBQWdCQSxBQU1BLGNBZmpCLEdBeEJBLGFBeUJPLEdBeEJBLEFBV3pCLEFBTUEsQUFnQkEsQUFNQSxBQWNBLFVBVWtCLFVBdENDLEdBeEJBLEdBK0RuQixXQXRDaUIsR0F4QkEsWUF5QmpCLEdBeEJjLFlBQ0QsV0FDYiIsImZpbGUiOiJEOlxcRHJvcGJveFxcQ3JlYXRpdmUgQ2xvdWQgRmlsZXNcXF9ISVxcX1Byb2plY3RzXFxOZXh0LVdlYnNpdGVcXGNvbXBvbmVudHNcXFByb2plY3RzXFxEZXNpZ25Qcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlc2lnblByb2plY3RzKHByb3BzKSB7XHJcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKFwiZGVzaWduLXByb2plY3QtbW9kYWwtaGlkZGVuXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuby1ib3JkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNpZ24tcHJvamVjdC10aHVtYm5haWxcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvcGVuLW1vZGFsXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZShcImRlc2lnbi1wcm9qZWN0LW1vZGFsXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFNob3cgUHJvamVjdFxyXG4gICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgdz1cIjFlbVwiXHJcbiAgICAgICAgICAgIGg9XCIxZW1cIlxyXG4gICAgICAgICAgICBjb2xvcj1cInZhcigtLWZvbnQtY29sb3IpXCJcclxuICAgICAgICAgICAgcm90YXRlPVwicm90YXRlKDI3MClcIlxyXG4gICAgICAgICAgICBsb2M9XCJsZWZ0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICB3PVwiMWVtXCJcclxuICAgICAgICAgICAgaD1cIjFlbVwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwidmFyKC0tZm9udC1jb2xvcilcIlxyXG4gICAgICAgICAgICByb3RhdGU9XCJyb3RhdGUoOTApXCJcclxuICAgICAgICAgICAgbG9jPVwicmlnaHRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3aGl0ZS1ib3JkZXJcIlxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vY2FybGhlcm5lay9pbWFnZS91cGxvYWQvZl9hdXRvLHFfNzAsd181MTIvdjE1ODIxOTg1MDUvV2Vic2l0ZS9JbWcvbG9naV96cXJmZWYucG5nXCJcclxuICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICBzcmNTZXQ9XCJcIlxyXG4gICAgICAgID48L2ltZz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0b2dnbGV9PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlLW1vZGFsXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZShcImRlc2lnbi1wcm9qZWN0LW1vZGFsLWhpZGRlblwiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgdz1cIjFlbVwiXHJcbiAgICAgICAgICAgIGg9XCIxZW1cIlxyXG4gICAgICAgICAgICBjb2xvcj1cInZhcigtLWZvbnQtY29sb3IpXCJcclxuICAgICAgICAgICAgcm90YXRlPVwicm90YXRlKDI3MClcIlxyXG4gICAgICAgICAgICBsb2M9XCJsZWZ0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICB3PVwiMWVtXCJcclxuICAgICAgICAgICAgaD1cIjFlbVwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwidmFyKC0tZm9udC1jb2xvcilcIlxyXG4gICAgICAgICAgICByb3RhdGU9XCJyb3RhdGUoOTApXCJcclxuICAgICAgICAgICAgbG9jPVwicmlnaHRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50IG5vLWJvcmRlclwiPm1vZGFsIGNvbnRlbnQgZ29lcyBoZXJlPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLm9wZW4tbW9kYWwge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLWIpO1xyXG4gICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMC41cmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBib3R0b206IDFyZW07XHJcbiAgICAgICAgICByaWdodDogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5vcGVuLW1vZGFsOmZvY3VzIHtcclxuICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1pbnZlcnRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAub3Blbi1tb2RhbDpob3ZlciB7XHJcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItaW52ZXJ0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNsb3NlLW1vZGFsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci1iKTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDAuNXJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNsb3NlLW1vZGFsOmZvY3VzIHtcclxuICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1pbnZlcnRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2xvc2UtbW9kYWw6aG92ZXIge1xyXG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWludmVydGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXNpZ24tcHJvamVjdC10aHVtYm5haWwge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgd2lkdGg6IDE4cmVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxOHJlbTtcclxuICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXNpZ24tcHJvamVjdC10aHVtYm5haWwgaW1nIHtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgd2lkdGg6IDE4cmVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxOHJlbTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAuNXJlbSAwLjVyZW0gMHB4IDBweCB2YXIoLS1hY2NlbnQtY29sb3Itcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGVzaWduLXByb2plY3QtbW9kYWwge1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB6LWluZGV4OiA3O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvci1pbnZlcnRlZCk7XHJcbiAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlc2lnbi1wcm9qZWN0LW1vZGFsLWhpZGRlbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgICAgICAuZGVzaWduLXByb2plY3QtdGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1cmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5kZXNpZ24tcHJvamVjdC10aHVtYm5haWwgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=D:\\\\Dropbox\\\\Creative Cloud Files\\\\_HI\\\\_Projects\\\\Next-Website\\\\components\\\\Projects\\\\DesignProjects.js */"));
}

/***/ })

})
//# sourceMappingURL=design.js.fa7262f35d1fb4361a52.hot-update.js.map