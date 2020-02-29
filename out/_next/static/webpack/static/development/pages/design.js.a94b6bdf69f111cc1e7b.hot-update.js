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
    className: "jsx-1823678825" + " " + "no-border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1823678825" + " " + "design-project-thumbnail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return setToggle("design-project-modal");
    },
    className: "jsx-1823678825" + " " + "open-modal",
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
    className: "jsx-1823678825",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1823678825" + " " + (toggle || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return setToggle("design-project-modal-hidden");
    },
    className: "jsx-1823678825" + " " + "close-modal",
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
    className: "jsx-1823678825" + " " + "modal-content no-border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "modal content goes here")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1823678825",
    __self: this
  }, ".open-modal.jsx-1823678825{position:absolute;color:var(--font-color);background-color:var(--accent-color-b);padding:0.25rem;margin:0 0 1rem 0.5rem;font-size:1.2rem;cursor:pointer;bottom:1rem;right:1rem;}.open-modal.jsx-1823678825:focus{border:solid 3px transparent;background-color:var(--font-color);color:var(--font-color-inverted);}.open-modal.jsx-1823678825:hover{border:solid 3px transparent;background-color:var(--font-color);color:var(--font-color-inverted);}.close-modal.jsx-1823678825{position:fixed;color:var(--font-color);background-color:var(--accent-color-b);padding:0.25rem;margin:0 0 1rem 0.5rem;font-size:1.2rem;cursor:pointer;}.close-modal.jsx-1823678825:focus{border:solid 3px transparent;background-color:var(--font-color);color:var(--font-color-inverted);}.close-modal.jsx-1823678825:hover{border:solid 3px transparent;background-color:var(--font-color);color:var(--font-color-inverted);}.design-project-thumbnail.jsx-1823678825{position:relative;width:18rem;height:18rem;margin:1rem;}.design-project-thumbnail.jsx-1823678825 img.jsx-1823678825{object-fit:contain;width:18rem;height:18rem;box-shadow:0.5rem 0.5rem 0px 0px var(--accent-color-r);}.design-project-modal.jsx-1823678825{position:fixed;height:100vh;width:100vw;top:0;left:0;z-index:7;background-color:var(--font-color-inverted);overflow:scroll;}.design-project-modal-hidden.jsx-1823678825{display:none;}@media only screen and (orientation:portrait){.design-project-thumbnail.jsx-1823678825{width:90%;height:auto;min-height:5rem;}.design-project-thumbnail.jsx-1823678825 img.jsx-1823678825{width:90%;height:auto;min-height:5rem;}}@media only screen and (max-width:1024px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEcm9wYm94XFxDcmVhdGl2ZSBDbG91ZCBGaWxlc1xcX0hJXFxfUHJvamVjdHNcXE5leHQtV2Vic2l0ZVxcY29tcG9uZW50c1xcUHJvamVjdHNcXERlc2lnblByb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEa0IsQUFHNkIsQUFZVyxBQU1BLEFBTWQsQUFVYyxBQU1BLEFBTVgsQUFPQyxBQU9KLEFBV0YsQUFLRCxBQU1BLFVBTEUsQUFNQSxHQVhoQixFQS9DMEIsQUFvQ1gsR0E1RFcsQUE4Q1osQ0FPQSxHQXdCTSxBQU1BLE1BdEJOLENBakR1QixBQU1BLEFBZ0JBLEFBTUEsQ0FPdEIsQ0FPQSxPQXdCYixBQU1BLENBM0R1QyxDQXFDakMsRUE3RGlDLENBK0MzQixDQU8yQyxFQVFoRCxPQUNHLEVBZlosUUFnQjhDLENBcERYLEFBTUEsQUFnQkEsQUFNQSxjQWZqQixHQXhCQSxhQXlCTyxHQXhCQSxBQVd6QixBQU1BLEFBZ0JBLEFBTUEsRUFjQSxRQVVrQixVQXRDQyxHQXhCQSxHQStEbkIsV0F0Q2lCLEdBeEJBLFlBeUJqQixHQXhCYyxZQUNELFdBQ2IiLCJmaWxlIjoiRDpcXERyb3Bib3hcXENyZWF0aXZlIENsb3VkIEZpbGVzXFxfSElcXF9Qcm9qZWN0c1xcTmV4dC1XZWJzaXRlXFxjb21wb25lbnRzXFxQcm9qZWN0c1xcRGVzaWduUHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXNpZ25Qcm9qZWN0cyhwcm9wcykge1xyXG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShcImRlc2lnbi1wcm9qZWN0LW1vZGFsLWhpZGRlblwiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibm8tYm9yZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzaWduLXByb2plY3QtdGh1bWJuYWlsXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwib3Blbi1tb2RhbFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUoXCJkZXNpZ24tcHJvamVjdC1tb2RhbFwiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBTaG93IFByb2plY3RcclxuICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgIHc9XCIxZW1cIlxyXG4gICAgICAgICAgICBoPVwiMWVtXCJcclxuICAgICAgICAgICAgY29sb3I9XCJ2YXIoLS1mb250LWNvbG9yKVwiXHJcbiAgICAgICAgICAgIHJvdGF0ZT1cInJvdGF0ZSgyNzApXCJcclxuICAgICAgICAgICAgbG9jPVwibGVmdFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgdz1cIjFlbVwiXHJcbiAgICAgICAgICAgIGg9XCIxZW1cIlxyXG4gICAgICAgICAgICBjb2xvcj1cInZhcigtLWZvbnQtY29sb3IpXCJcclxuICAgICAgICAgICAgcm90YXRlPVwicm90YXRlKDkwKVwiXHJcbiAgICAgICAgICAgIGxvYz1cInJpZ2h0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGltZz48L2ltZz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0b2dnbGV9PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlLW1vZGFsXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZShcImRlc2lnbi1wcm9qZWN0LW1vZGFsLWhpZGRlblwiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgdz1cIjFlbVwiXHJcbiAgICAgICAgICAgIGg9XCIxZW1cIlxyXG4gICAgICAgICAgICBjb2xvcj1cInZhcigtLWZvbnQtY29sb3IpXCJcclxuICAgICAgICAgICAgcm90YXRlPVwicm90YXRlKDI3MClcIlxyXG4gICAgICAgICAgICBsb2M9XCJsZWZ0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICB3PVwiMWVtXCJcclxuICAgICAgICAgICAgaD1cIjFlbVwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwidmFyKC0tZm9udC1jb2xvcilcIlxyXG4gICAgICAgICAgICByb3RhdGU9XCJyb3RhdGUoOTApXCJcclxuICAgICAgICAgICAgbG9jPVwicmlnaHRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50IG5vLWJvcmRlclwiPm1vZGFsIGNvbnRlbnQgZ29lcyBoZXJlPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLm9wZW4tbW9kYWwge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yLWIpO1xyXG4gICAgICAgICAgcGFkZGluZzogMC4yNXJlbTtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMC41cmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBib3R0b206IDFyZW07XHJcbiAgICAgICAgICByaWdodDogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5vcGVuLW1vZGFsOmZvY3VzIHtcclxuICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1pbnZlcnRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAub3Blbi1tb2RhbDpob3ZlciB7XHJcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItaW52ZXJ0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNsb3NlLW1vZGFsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci1iKTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDAuNXJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNsb3NlLW1vZGFsOmZvY3VzIHtcclxuICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1pbnZlcnRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2xvc2UtbW9kYWw6aG92ZXIge1xyXG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWludmVydGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXNpZ24tcHJvamVjdC10aHVtYm5haWwge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgd2lkdGg6IDE4cmVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxOHJlbTtcclxuICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXNpZ24tcHJvamVjdC10aHVtYm5haWwgaW1nIHtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgICB3aWR0aDogMThyZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IDE4cmVtO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMC41cmVtIDAuNXJlbSAwcHggMHB4IHZhcigtLWFjY2VudC1jb2xvci1yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXNpZ24tcHJvamVjdC1tb2RhbCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHotaW5kZXg6IDc7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWludmVydGVkKTtcclxuICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGVzaWduLXByb2plY3QtbW9kYWwtaGlkZGVuIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgICAgICAgIC5kZXNpZ24tcHJvamVjdC10aHVtYm5haWwge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDVyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmRlc2lnbi1wcm9qZWN0LXRodW1ibmFpbCBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=D:\\\\Dropbox\\\\Creative Cloud Files\\\\_HI\\\\_Projects\\\\Next-Website\\\\components\\\\Projects\\\\DesignProjects.js */"));
}

/***/ })

})
//# sourceMappingURL=design.js.a94b6bdf69f111cc1e7b.hot-update.js.map