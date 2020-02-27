webpackHotUpdate("static\\development\\pages\\frontend.js",{

/***/ "./components/Projects/FrontendProjects.js":
/*!*************************************************!*\
  !*** ./components/Projects/FrontendProjects.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FrontendProjects; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon/Icon */ "./components/Icon/Icon.js");
var _jsxFileName = "D:\\Dropbox\\Creative Cloud Files\\_HI\\_Projects\\Next-Website\\components\\Projects\\FrontendProjects.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var tech = function tech(param) {
  var techList = [];

  if (param) {
    param.forEach(function (item, index) {
      return techList.push(__jsx("li", {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, item));
    });
    return techList;
  }
};

var links = function links(param) {
  var linkList = [];

  if (param) {
    param.forEach(function (item, index) {
      return linkList.push(__jsx("a", {
        key: index,
        href: item[1],
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, item[0], __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      })));
    });
    return linkList;
  }
};

var media = function media(param, load) {
  var mediaContainer = [];

  if (param) {
    param.forEach(function (item, index) {
      if (item[0] === "img") {
        mediaContainer.push(__jsx("img", {
          key: index,
          src: item[1],
          alt: item[2],
          srcSet: item[3],
          className: "project-img no-border",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }));
      }

      if (item[0] === "vid") {
        switch (item[2]) {
          case "mp4":
            mediaContainer.push(__jsx("video", {
              className: "project-vid no-border",
              autoPlay: "true",
              muted: "true",
              loop: "true",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 48
              },
              __self: this
            }, __jsx("source", {
              key: index,
              src: item[1],
              type: "video/mp4",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 54
              },
              __self: this
            })));
            break;

          case "webm":
            mediaContainer.push(__jsx("video", {
              className: "project-vid no-border",
              autoPlay: "true",
              muted: "true",
              loop: "true",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              },
              __self: this
            }, __jsx("source", {
              key: index,
              src: item[1],
              type: "video/webm",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              },
              __self: this
            })));
            break;

          case "ogg":
            mediaContainer.push(__jsx("video", {
              className: "project-vid no-border",
              autoPlay: "true",
              muted: "true",
              loop: "true",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              },
              __self: this
            }, __jsx("source", {
              key: index,
              src: item[1],
              type: "video/ogg",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 78
              },
              __self: this
            })));
            break;

          default:
            break;
        }
      }
    });
    if (load) return __jsx("div", {
      className: "media-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, mediaContainer);
  }
};

function FrontendProjects(_ref) {
  var projectTitle = _ref.projectTitle,
      projectMedia = _ref.projectMedia,
      projectLink = _ref.projectLink,
      projectDate = _ref.projectDate,
      projectDesc = _ref.projectDesc,
      projectTech = _ref.projectTech;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      load = _useState[0],
      setLoad = _useState[1];

  if (projectMedia) {
    return __jsx("div", {
      className: "project-card no-border",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, projectTitle), __jsx("div", {
      className: "no-border",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx("div", {
      className: "no-border",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, "Links"), links(projectLink), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, "Project Description"), __jsx("ul", {
      className: "no-border",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, projectDate), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, projectDesc)), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, "Made With"), __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, tech(projectTech))), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, "Media"), __jsx("button", {
      className: "load-button",
      onClick: function onClick() {
        return setLoad(true);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, "Load Media", __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      w: "1em",
      h: "1em",
      color: "var(--font-color)",
      rotate: "rotate(270)",
      loc: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }), __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
      w: "1em",
      h: "1em",
      color: "var(--font-color)",
      rotate: "rotate(90)",
      loc: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    })), media(projectMedia, load))));
  } else {
    return __jsx("div", {
      className: "project-card no-border",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, projectTitle), __jsx("div", {
      className: "no-border",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, __jsx("div", {
      className: "no-border",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, "Links"), links(projectLink), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, "Project Description"), __jsx("ul", {
      className: "no-border",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, projectDate), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, projectDesc)), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, "Made With"), __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, tech(projectTech)))));
  }
}

/***/ })

})
//# sourceMappingURL=frontend.js.76e7c771a272e1a58bd5.hot-update.js.map