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
          lineNumber: 4
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
          lineNumber: 14
        },
        __self: this
      }, item[0], __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      })));
    });
    return linkList;
  }
};

var media = function media(param) {
  var mediaContainer = [];

  if (param) {
    param.forEach(function (item, index) {
      if (item[0] === "img") {
        mediaContainer.push(__jsx("img", {
          key: index,
          src: item[1],
          alt: item[2],
          srcSet: item[3].toString(),
          className: "project-img no-border",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
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
                lineNumber: 45
              },
              __self: this
            }, __jsx("source", {
              key: index,
              src: item[1],
              type: "video/mp4",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 51
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
                lineNumber: 57
              },
              __self: this
            }, __jsx("source", {
              key: index,
              src: item[1],
              type: "video/webm",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 63
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
                lineNumber: 69
              },
              __self: this
            }, __jsx("source", {
              key: index,
              src: item[1],
              type: "video/ogg",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              },
              __self: this
            })));
            break;

          default:
            break;
        }
      }
    });
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "Media"), __jsx("div", {
      className: "media-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, mediaContainer));
  }
};

function FrontendProjects(_ref) {
  var projectTitle = _ref.projectTitle,
      projectMedia = _ref.projectMedia,
      projectLink = _ref.projectLink,
      projectDate = _ref.projectDate,
      projectDesc = _ref.projectDesc,
      projectTech = _ref.projectTech;
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
  }, tech(projectTech))), media(projectMedia)));
}

/***/ })

})
//# sourceMappingURL=frontend.js.b7148570f81b59698f52.hot-update.js.map