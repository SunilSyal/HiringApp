webpackHotUpdate("static/development/pages/feedback.js",{

/***/ "./components/feedback.js":
/*!********************************!*\
  !*** ./components/feedback.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _templates_sample__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../templates/sample */ "./templates/sample.js");
/* harmony import */ var _templates_rating__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../templates/rating */ "./templates/rating.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");













var FeedbackClass =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(FeedbackClass, _React$Component);

  function FeedbackClass(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FeedbackClass);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FeedbackClass).call(this, props));
    _this.getFeedbackList = _this.getFeedbackList.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FeedbackClass, [{
    key: "getFeedbackList",
    value: function getFeedbackList() {
      return [{
        title: "HTML | RWD | Templating",
        id: "html"
      }, {
        title: "CSS preprocessors",
        id: "CSS"
      }, {
        title: "Javascript",
        id: "js"
      }, {
        title: "OOPs",
        id: "oops"
      }];
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Form"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        className: "row mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        className: "col-md-3 col-sm-12"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        for: "cName"
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        type: "text",
        name: "name",
        id: "cName",
        disabled: this.props.router.query.id,
        placeholder: "with a placeholder",
        value: this.props.router.query.id,
        onChange: this.props.handleChange
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        className: "col-md-3 col-sm-12"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        for: "designation"
      }, "Interview for level"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        type: "select",
        name: "select",
        id: "designation"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", null, "AL 1"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", null, "AL 2"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", null, "SAL 1"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", null, "SAL 2"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        className: "col-md-3 col-sm-12"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        for: "status"
      }, "Status"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        type: "select",
        name: "status",
        id: "status"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", null, "To be interviewed"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", null, "Feedback awaited"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", null, "Selected"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", null, "Rejected"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        className: "col-md-3 col-sm-12"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        for: "selectedTitle"
      }, "Selected As"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        type: "select",
        name: "selectedTitle",
        id: "selectedTitle"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", null, "AL 1"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", null, "AL 2"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", null, "SAL 1"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", null, "SAL 2")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        className: "row mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        className: "col-md-3 col-sm-12"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        for: "panel"
      }, "Panel"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        type: "select",
        name: "panel",
        id: "panel",
        disabled: this.props.router.query.id
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", null, "Sailesh Raghvan"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", null, "Sunil Syal"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", null, "Ajay Singh")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        className: "row mb-3"
      }, this.getFeedbackList().map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
          className: "col-xs-12 col-sm-6"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_templates_rating__WEBPACK_IMPORTED_MODULE_10__["default"], {
          title: item.title,
          id: item.id
        }));
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        className: "row "
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        className: "col-xs-12 col-sm-6"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        className: "col-xs-12"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        for: "panel"
      }, "Panel"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        type: "select",
        name: "panel",
        id: "panel",
        disabled: this.props.router.query.id
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", null, "Sailesh Raghvan"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", null, "Sunil Syal"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("option", null, "Ajay Singh"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        className: "col-xs-12 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        for: "feedback",
        className: "sr-only"
      }, "Feedback"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        type: "textarea",
        name: "feedback",
        id: "feedback"
      })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], {
        className: "col-xs-12 mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        for: "feedback"
      }, "Feedback"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        type: "textarea",
        name: "feedback",
        id: "feedback"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Label"], {
        for: "exampleFile"
      }, "File"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Input"], {
        type: "file",
        name: "file",
        id: "exampleFile"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["FormText"], {
        color: "muted"
      }, "This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], null, "Submit"), this.props.router.query.id ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_templates_sample__WEBPACK_IMPORTED_MODULE_9__["default"], this.props) : null);
    }
  }]);

  return FeedbackClass;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var Feedback = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(FeedbackClass);
/* harmony default export */ __webpack_exports__["default"] = (Feedback);

/***/ })

})
//# sourceMappingURL=feedback.js.3cdf114e9a7c09cc8afd.hot-update.js.map