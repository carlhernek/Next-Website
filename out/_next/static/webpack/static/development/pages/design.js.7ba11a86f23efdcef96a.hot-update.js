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
    src: "https://res.cloudinary.com/carlhernek/image/upload/f_auto,q_70,w_512/v1582198505/Website/Img/logi_zqrfef.png",
    alt: "",
    srcSet: "",
    className: "jsx-1823678825" + " " + "white-border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1823678825" + " " + (toggle || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("button", {
    onClick: function onClick() {
      return setToggle("design-project-modal-hidden");
    },
    className: "jsx-1823678825" + " " + "close-modal",
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
    className: "jsx-1823678825" + " " + "modal-content no-border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "modal content goes here")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1823678825",
    __self: this
  }, ".open-modal.jsx-1823678825{position:absolute;color:var(--font-color);background-color:var(--accent-color-b);padding:0.25rem;margin:0 0 1rem 0.5rem;font-size:1.2rem;cursor:pointer;bottom:1rem;right:1rem;}.open-modal.jsx-1823678825:focus{border:solid 3px transparent;background-color:var(--font-color);color:var(--font-color-inverted);}.open-modal.jsx-1823678825:hover{border:solid 3px transparent;background-color:var(--font-color);color:var(--font-color-inverted);}.close-modal.jsx-1823678825{position:fixed;color:var(--font-color);background-color:var(--accent-color-b);padding:0.25rem;margin:0 0 1rem 0.5rem;font-size:1.2rem;cursor:pointer;}.close-modal.jsx-1823678825:focus{border:solid 3px transparent;background-color:var(--font-color);color:var(--font-color-inverted);}.close-modal.jsx-1823678825:hover{border:solid 3px transparent;background-color:var(--font-color);color:var(--font-color-inverted);}.design-project-thumbnail.jsx-1823678825{position:relative;width:18rem;height:18rem;margin:1rem;}.design-project-thumbnail.jsx-1823678825 img.jsx-1823678825{object-fit:contain;width:18rem;height:18rem;box-shadow:0.5rem 0.5rem 0px 0px var(--accent-color-r);}.design-project-modal.jsx-1823678825{position:fixed;height:100vh;width:100vw;top:0;left:0;z-index:7;background-color:var(--font-color-inverted);overflow:scroll;}.design-project-modal-hidden.jsx-1823678825{display:none;}@media only screen and (orientation:portrait){.design-project-thumbnail.jsx-1823678825{width:90%;height:auto;min-height:5rem;}.design-project-thumbnail.jsx-1823678825 img.jsx-1823678825{width:90%;height:auto;min-height:5rem;}}@media only screen and (max-width:1024px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEcm9wYm94XFxDcmVhdGl2ZSBDbG91ZCBGaWxlc1xcX0hJXFxfUHJvamVjdHNcXE5leHQtV2Vic2l0ZVxcY29tcG9uZW50c1xcUHJvamVjdHNcXERlc2lnblByb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREa0IsQUFHNkIsQUFZVyxBQU1BLEFBTWQsQUFVYyxBQU1BLEFBTVgsQUFPQyxBQU9KLEFBV0YsQUFLRCxBQU1BLFVBTEUsQUFNQSxHQVhoQixFQS9DMEIsQUFvQ1gsR0E1RFcsQUE4Q1osQ0FPQSxHQXdCTSxBQU1BLE1BdEJOLENBakR1QixBQU1BLEFBZ0JBLEFBTUEsQ0FPdEIsQ0FPQSxPQXdCYixBQU1BLENBM0R1QyxDQXFDakMsRUE3RGlDLENBK0MzQixDQU8yQyxFQVFoRCxPQUNHLEVBZlosUUFnQjhDLENBcERYLEFBTUEsQUFnQkEsQUFNQSxjQWZqQixHQXhCQSxhQXlCTyxHQXhCQSxBQVd6QixBQU1BLEFBZ0JBLEFBTUEsRUFjQSxRQVVrQixVQXRDQyxHQXhCQSxHQStEbkIsV0F0Q2lCLEdBeEJBLFlBeUJqQixHQXhCYyxZQUNELFdBQ2IiLCJmaWxlIjoiRDpcXERyb3Bib3hcXENyZWF0aXZlIENsb3VkIEZpbGVzXFxfSElcXF9Qcm9qZWN0c1xcTmV4dC1XZWJzaXRlXFxjb21wb25lbnRzXFxQcm9qZWN0c1xcRGVzaWduUHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vSWNvbi9JY29uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXNpZ25Qcm9qZWN0cyhwcm9wcykge1xyXG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShcImRlc2lnbi1wcm9qZWN0LW1vZGFsLWhpZGRlblwiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibm8tYm9yZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzaWduLXByb2plY3QtdGh1bWJuYWlsXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwib3Blbi1tb2RhbFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUoXCJkZXNpZ24tcHJvamVjdC1tb2RhbFwiKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBTaG93IFByb2plY3RcclxuICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgIHc9XCIxZW1cIlxyXG4gICAgICAgICAgICBoPVwiMWVtXCJcclxuICAgICAgICAgICAgY29sb3I9XCJ2YXIoLS1mb250LWNvbG9yKVwiXHJcbiAgICAgICAgICAgIHJvdGF0ZT1cInJvdGF0ZSgyNzApXCJcclxuICAgICAgICAgICAgbG9jPVwibGVmdFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgdz1cIjFlbVwiXHJcbiAgICAgICAgICAgIGg9XCIxZW1cIlxyXG4gICAgICAgICAgICBjb2xvcj1cInZhcigtLWZvbnQtY29sb3IpXCJcclxuICAgICAgICAgICAgcm90YXRlPVwicm90YXRlKDkwKVwiXHJcbiAgICAgICAgICAgIGxvYz1cInJpZ2h0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwid2hpdGUtYm9yZGVyXCJcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2NhcmxoZXJuZWsvaW1hZ2UvdXBsb2FkL2ZfYXV0byxxXzcwLHdfNTEyL3YxNTgyMTk4NTA1L1dlYnNpdGUvSW1nL2xvZ2lfenFyZmVmLnBuZ1wiXHJcbiAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgc3JjU2V0PVwiXCJcclxuICAgICAgICA+PC9pbWc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dG9nZ2xlfT5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjbG9zZS1tb2RhbFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGUoXCJkZXNpZ24tcHJvamVjdC1tb2RhbC1oaWRkZW5cIil9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgIHc9XCIxZW1cIlxyXG4gICAgICAgICAgICBoPVwiMWVtXCJcclxuICAgICAgICAgICAgY29sb3I9XCJ2YXIoLS1mb250LWNvbG9yKVwiXHJcbiAgICAgICAgICAgIHJvdGF0ZT1cInJvdGF0ZSgyNzApXCJcclxuICAgICAgICAgICAgbG9jPVwibGVmdFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgdz1cIjFlbVwiXHJcbiAgICAgICAgICAgIGg9XCIxZW1cIlxyXG4gICAgICAgICAgICBjb2xvcj1cInZhcigtLWZvbnQtY29sb3IpXCJcclxuICAgICAgICAgICAgcm90YXRlPVwicm90YXRlKDkwKVwiXHJcbiAgICAgICAgICAgIGxvYz1cInJpZ2h0XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudCBuby1ib3JkZXJcIj5tb2RhbCBjb250ZW50IGdvZXMgaGVyZTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5vcGVuLW1vZGFsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvci1iKTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDAuNXJlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgcmlnaHQ6IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAub3Blbi1tb2RhbDpmb2N1cyB7XHJcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItaW52ZXJ0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm9wZW4tbW9kYWw6aG92ZXIge1xyXG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAzcHggdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWludmVydGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jbG9zZS1tb2RhbCB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3ItYik7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwLjVyZW07XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jbG9zZS1tb2RhbDpmb2N1cyB7XHJcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItaW52ZXJ0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNsb3NlLW1vZGFsOmhvdmVyIHtcclxuICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1pbnZlcnRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGVzaWduLXByb2plY3QtdGh1bWJuYWlsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHdpZHRoOiAxOHJlbTtcclxuICAgICAgICAgIGhlaWdodDogMThyZW07XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGVzaWduLXByb2plY3QtdGh1bWJuYWlsIGltZyB7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgICAgd2lkdGg6IDE4cmVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxOHJlbTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAuNXJlbSAwLjVyZW0gMHB4IDBweCB2YXIoLS1hY2NlbnQtY29sb3Itcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGVzaWduLXByb2plY3QtbW9kYWwge1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB6LWluZGV4OiA3O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvci1pbnZlcnRlZCk7XHJcbiAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlc2lnbi1wcm9qZWN0LW1vZGFsLWhpZGRlbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbiAgICAgICAgICAuZGVzaWduLXByb2plY3QtdGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1cmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5kZXNpZ24tcHJvamVjdC10aHVtYm5haWwgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=D:\\\\Dropbox\\\\Creative Cloud Files\\\\_HI\\\\_Projects\\\\Next-Website\\\\components\\\\Projects\\\\DesignProjects.js */"));
}

/***/ })

})
//# sourceMappingURL=design.js.7ba11a86f23efdcef96a.hot-update.js.map