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
    className: "jsx-2729837258" + " " + "no-border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2729837258" + " " + "design-project-thumbnail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return setToggle("design-project-modal");
    },
    className: "jsx-2729837258" + " " + "open-modal",
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
    className: "jsx-2729837258",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2729837258" + " " + (toggle || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return setToggle("design-project-modal-hidden");
    },
    className: "jsx-2729837258" + " " + "close-modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
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
      lineNumber: 38
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
      lineNumber: 45
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2729837258" + " " + "modal-content no-border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "modal content goes here")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2729837258",
    __self: this
  }, ".open-modal.jsx-2729837258{position:absolute;color:var(--font-color);background-color:var(--accent-color-b);padding:0.25rem;margin:0 0 1rem 0.5rem;font-size:1.2rem;cursor:pointer;bottom:1rem;right:1rem;}.open-modal.jsx-2729837258:focus{border:solid 3px transparent;background-color:var(--font-color);color:var(--font-color-inverted);}.open-modal.jsx-2729837258:hover{border:solid 3px transparent;background-color:var(--font-color);color:var(--font-color-inverted);}.close-modal.jsx-2729837258{position:fixed;color:var(--font-color);background-color:var(--accent-color-b);padding:0.25rem;margin:0 0 1rem 0.5rem;font-size:1.2rem;cursor:pointer;}.close-modal.jsx-2729837258:focus{border:solid 3px transparent;background-color:var(--font-color);color:var(--font-color-inverted);}.close-modal.jsx-2729837258:hover{border:solid 3px transparent;background-color:var(--font-color);color:var(--font-color-inverted);}.design-project-thumbnail.jsx-2729837258{position:relative;width:18rem;height:18rem;margin:1rem;}.design-project-thumbnail.jsx-2729837258 img.jsx-2729837258{object-fit:contain;width:18rem;height:18rem;box-shadow:0.5rem 0.5rem 0px 0px var(--accent-color-r);}.design-project-modal.jsx-2729837258{position:fixed;height:100vh;width:100vw;top:0;left:0;z-index:7;background-color:var(--font-color-inverted);overflow:scroll;}.design-project-modal-hidden.jsx-2729837258{display:none;}@media only screen and (orientation:portrait){.design-project-thumbnail.jsx-2729837258{position:relative;width:18rem;height:18rem;margin:1rem;}.design-project-thumbnail.jsx-2729837258 img.jsx-2729837258{width:100%;height:auto;}}@media only screen and (max-width:1024px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEcm9wYm94XFxDcmVhdGl2ZSBDbG91ZCBGaWxlc1xcX0hJXFxfUHJvamVjdHNcXE5leHQtV2Vic2l0ZVxcY29tcG9uZW50c1xcUHJvamVjdHNcXERlc2lnblByb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEa0IsQUFHNkIsQUFZVyxBQU1BLEFBTWQsQUFVYyxBQU1BLEFBTVgsQUFPQyxBQU9KLEFBV0YsQUFLTyxBQU9QLFdBQ0MsRUFaaEIsRUEvQzBCLEFBb0NYLEdBNURXLEFBOENaLEFBOEJFLENBdkJGLElBK0JaLEtBdkJZLENBakR1QixBQU1BLEFBZ0JBLEFBTUEsQ0FPdEIsQUE4QkUsQ0F2QkYsUUE3QjBCLENBcUNqQyxFQTdEaUMsQ0ErQzNCLEFBOEJFLENBdkJ5QyxFQVFoRCxPQUNHLEVBZlosQUE4QkUsUUFkNEMsQ0FwRFgsQUFNQSxBQWdCQSxBQU1BLGNBZmpCLEdBeEJBLGFBeUJPLEdBeEJBLEFBV3pCLEFBTUEsQUFnQkEsQUFNQSxFQWNBLFFBVWtCLFVBdENDLEdBeEJBLEdBK0RuQixXQXRDaUIsR0F4QkEsWUF5QmpCLEdBeEJjLFlBQ0QsV0FDYiIsImZpbGUiOiJEOlxcRHJvcGJveFxcQ3JlYXRpdmUgQ2xvdWQgRmlsZXNcXF9ISVxcX1Byb2plY3RzXFxOZXh0LVdlYnNpdGVcXGNvbXBvbmVudHNcXFByb2plY3RzXFxEZXNpZ25Qcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJY29uIGZyb20gXCIuLi9JY29uL0ljb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlc2lnblByb2plY3RzKHByb3BzKSB7XHJcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKFwiZGVzaWduLXByb2plY3QtbW9kYWwtaGlkZGVuXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuby1ib3JkZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNpZ24tcHJvamVjdC10aHVtYm5haWxcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvcGVuLW1vZGFsXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZShcImRlc2lnbi1wcm9qZWN0LW1vZGFsXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFNob3cgUHJvamVjdFxyXG4gICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgdz1cIjFlbVwiXHJcbiAgICAgICAgICAgIGg9XCIxZW1cIlxyXG4gICAgICAgICAgICBjb2xvcj1cInZhcigtLWZvbnQtY29sb3IpXCJcclxuICAgICAgICAgICAgcm90YXRlPVwicm90YXRlKDI3MClcIlxyXG4gICAgICAgICAgICBsb2M9XCJsZWZ0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICB3PVwiMWVtXCJcclxuICAgICAgICAgICAgaD1cIjFlbVwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwidmFyKC0tZm9udC1jb2xvcilcIlxyXG4gICAgICAgICAgICByb3RhdGU9XCJyb3RhdGUoOTApXCJcclxuICAgICAgICAgICAgbG9jPVwicmlnaHRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8aW1nPjwvaW1nPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RvZ2dsZX0+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2UtbW9kYWxcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKFwiZGVzaWduLXByb2plY3QtbW9kYWwtaGlkZGVuXCIpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICB3PVwiMWVtXCJcclxuICAgICAgICAgICAgaD1cIjFlbVwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwidmFyKC0tZm9udC1jb2xvcilcIlxyXG4gICAgICAgICAgICByb3RhdGU9XCJyb3RhdGUoMjcwKVwiXHJcbiAgICAgICAgICAgIGxvYz1cImxlZnRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgIHc9XCIxZW1cIlxyXG4gICAgICAgICAgICBoPVwiMWVtXCJcclxuICAgICAgICAgICAgY29sb3I9XCJ2YXIoLS1mb250LWNvbG9yKVwiXHJcbiAgICAgICAgICAgIHJvdGF0ZT1cInJvdGF0ZSg5MClcIlxyXG4gICAgICAgICAgICBsb2M9XCJyaWdodFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnQgbm8tYm9yZGVyXCI+bW9kYWwgY29udGVudCBnb2VzIGhlcmU8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAub3Blbi1tb2RhbCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItYik7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwLjVyZW07XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIGJvdHRvbTogMXJlbTtcclxuICAgICAgICAgIHJpZ2h0OiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm9wZW4tbW9kYWw6Zm9jdXMge1xyXG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWludmVydGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5vcGVuLW1vZGFsOmhvdmVyIHtcclxuICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1pbnZlcnRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2xvc2UtbW9kYWwge1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLWIpO1xyXG4gICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMC41cmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2xvc2UtbW9kYWw6Zm9jdXMge1xyXG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWludmVydGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jbG9zZS1tb2RhbDpob3ZlciB7XHJcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItaW52ZXJ0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlc2lnbi1wcm9qZWN0LXRodW1ibmFpbCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB3aWR0aDogMThyZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IDE4cmVtO1xyXG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlc2lnbi1wcm9qZWN0LXRodW1ibmFpbCBpbWcge1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICAgIHdpZHRoOiAxOHJlbTtcclxuICAgICAgICAgIGhlaWdodDogMThyZW07XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwLjVyZW0gMC41cmVtIDBweCAwcHggdmFyKC0tYWNjZW50LWNvbG9yLXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlc2lnbi1wcm9qZWN0LW1vZGFsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgei1pbmRleDogNztcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3ItaW52ZXJ0ZWQpO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXNpZ24tcHJvamVjdC1tb2RhbC1oaWRkZW4ge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gICAgICAgICAgLmRlc2lnbi1wcm9qZWN0LXRodW1ibmFpbCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDE4cmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE4cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmRlc2lnbi1wcm9qZWN0LXRodW1ibmFpbCBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=D:\\\\Dropbox\\\\Creative Cloud Files\\\\_HI\\\\_Projects\\\\Next-Website\\\\components\\\\Projects\\\\DesignProjects.js */"));
}

/***/ })

})
//# sourceMappingURL=design.js.b562939ba01377a3e53f.hot-update.js.map