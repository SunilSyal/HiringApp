webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_candidate_row__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/candidate-row */ "./components/candidate-row.js");



















var Candidates =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(Candidates, _React$Component);

  function Candidates(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Candidates);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Candidates).call(this, props));
    _this.state = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, props);
    _this.getPosts = _this.getPosts.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Candidates, [{
    key: "getPosts",
    value: function getPosts() {
      return this.state.data;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", null, "Scheduled Candidates"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_14__["Table"], {
        size: "sm"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("th", {
        className: "align-top",
        scope: "row"
      }, "ID"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        className: "align-top"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        color: "link"
      }, "Candidate Name")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        className: "align-top"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        color: "link"
      }, "Panel Name")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        className: "align-top"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        color: "link"
      }, "Date")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        className: "align-top"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        color: "link"
      }, "Interviewed for")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        className: "align-top"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        color: "link"
      }, "Framework")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        className: "align-top"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        color: "link"
      }, "Status")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        className: "align-top"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        color: "link"
      }, "Proposed Title")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
        className: "align-top"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        color: "link"
      }, "Edit"))), this.getPosts().map(function (post, index) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_candidate_row__WEBPACK_IMPORTED_MODULE_17__["default"], {
          key: post._id,
          post: post,
          index: index
        });
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, baseUrl, params, res, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                baseUrl = req ? "".concat(req.protocol, "://").concat(req.get("Host")) : "";
                params = {
                  query: {
                    cName: "Ajay Kumar"
                  }
                };
                _context.next = 5;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_16___default()(baseUrl + "/api/pipeline", {
                  method: "post",
                  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(params),
                  headers: {
                    "Content-type": "application/json"
                  }
                });

              case 5:
                res = _context.sent;
                _context.next = 8;
                return res.json();

              case 8:
                data = _context.sent;
                return _context.abrupt("return", {
                  data: data
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Candidates;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_13__["withRouter"])(Candidates));

/***/ })

})
//# sourceMappingURL=index.js.3982f66e2d77829600a4.hot-update.js.map