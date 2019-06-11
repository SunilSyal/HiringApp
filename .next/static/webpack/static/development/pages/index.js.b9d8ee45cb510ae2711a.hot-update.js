webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/string-hash/index.js":
false,

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
false,

/***/ "./node_modules/styled-jsx/dist/style.js":
false,

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
false,

/***/ "./node_modules/styled-jsx/style.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");







function getPosts() {
  return [{
    cId: "10001",
    cname: "Sunil Kumar",
    pId: "101",
    pName: "Sailesh",
    date: "25-Jun-2019",
    inFor: "SAL 1",
    framework: "Core XT",
    status: "selected",
    proposedTitle: "AL 2"
  }, {
    cId: "1002",
    cname: "Ajay Singh",
    pId: "102",
    pName: "Sunil",
    date: "25-Jun-2019",
    inFor: "SAL 1",
    framework: "Core XT",
    status: "selected",
    proposedTitle: "AL 2"
  }, {
    cId: "1003",
    cname: "Ruchika Bhatia",
    pId: "103",
    pName: "Shelly",
    date: "25-Jun-2019",
    inFor: "SAL 1",
    framework: "Core XT",
    status: "selected",
    proposedTitle: "AL 2"
  }];
}

var PostLink = function PostLink(_ref) {
  var post = _ref.post,
      index = _ref.index;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    scope: "row"
  }, index + 1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/feedback?id=".concat(post.cId)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    color: "link"
  }, post.cname))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/panel?id=".concat(post.pId)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    color: "link"
  }, post.pName))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    color: "link"
  }, post.date)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "align-middle"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    color: "link"
  }, post.inFor)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "align-middle"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    color: "link"
  }, post.framework)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "align-middle"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    color: "link"
  }, post.status)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "align-middle"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    color: "link"
  }, post.proposedTitle)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/feedback?id=".concat(post.cId)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaEdit"], null))));
};

function Candidates() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Scheduled Candidates"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Table"], {
    size: "sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "align-top",
    scope: "row"
  }, "ID"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "align-top"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    color: "link"
  }, "Candidate Name")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "align-top"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    color: "link"
  }, "Panel Name")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "align-top"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    color: "link"
  }, "Date")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "align-top"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    color: "link"
  }, "Interviewed for")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "align-top"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    color: "link"
  }, "Framework")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "align-top"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    color: "link"
  }, "Status")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "align-top"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    color: "link"
  }, "Proposed Title")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "align-top"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    color: "link"
  }, "Edit"))), getPosts().map(function (post, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostLink, {
      key: post.cId,
      post: post,
      index: index
    });
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Candidates));

/***/ })

})
//# sourceMappingURL=index.js.b9d8ee45cb510ae2711a.hot-update.js.map