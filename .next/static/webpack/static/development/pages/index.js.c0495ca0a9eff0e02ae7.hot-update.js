webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");








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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    scope: "row"
  }, index + 1), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/feedback?id=".concat(post.cId)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    color: "link"
  }, post.cname))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/panel?id=".concat(post.pId)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    color: "link"
  }, post.pName))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    color: "link"
  }, post.date)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "align-middle"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    color: "link"
  }, post.inFor)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "align-middle"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    color: "link"
  }, post.framework)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "align-middle"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    color: "link"
  }, post.status)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "align-middle"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    color: "link"
  }, post.proposedTitle)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/feedback?id=".concat(post.cId)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaEdit"], null))));
};

function Candidates() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-54248457"
  }, "Scheduled Candidates"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Table"], {
    size: "sm"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
    className: "jsx-54248457"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-54248457"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    scope: "row",
    className: "jsx-54248457" + " " + "align-top"
  }, "ID"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-54248457" + " " + "align-top"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    color: "link",
    className: "jsx-54248457"
  }, "Candidate Name")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-54248457" + " " + "align-top"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    color: "link",
    className: "jsx-54248457"
  }, "Panel Name")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-54248457" + " " + "align-top"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    color: "link",
    className: "jsx-54248457"
  }, "Date")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-54248457" + " " + "align-top"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    color: "link",
    className: "jsx-54248457"
  }, "Interviewed for")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-54248457" + " " + "align-top"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    color: "link",
    className: "jsx-54248457"
  }, "Framework")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-54248457" + " " + "align-top"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    color: "link",
    className: "jsx-54248457"
  }, "Status")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-54248457" + " " + "align-top"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    color: "link",
    className: "jsx-54248457"
  }, "Proposed Title")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-54248457" + " " + "align-top"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    color: "link",
    className: "jsx-54248457"
  }, "Edit"))), getPosts().map(function (post, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PostLink, {
      key: post.cId,
      post: post,
      index: index
    });
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "54248457"
  }, "h1.jsx-54248457,a.jsx-54248457{font-family:\"Arial\";}ul.jsx-54248457{padding:0;}li.jsx-54248457{list-style:none;margin:5px 0;}a.jsx-54248457{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-54248457:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW5rdW1hcjgvUHJvamVjdHMvUmVhY3QvTmV4dEpTL0hpcmluZyBBcHAvSGlyaW5nQXBwL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRIa0IsQUFJK0IsQUFJVixBQUlNLEFBS0ssQUFLVCxVQWJkLEVBY0EsSUFWZSxJQVJmLFNBU0EscUJBSWEsV0FDYiIsImZpbGUiOiIvVXNlcnMvc3Vua3VtYXI4L1Byb2plY3RzL1JlYWN0L05leHRKUy9IaXJpbmcgQXBwL0hpcmluZ0FwcC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEJ1dHRvbiwgVGFibGUgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IHsgRmFFZGl0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cbmZ1bmN0aW9uIGdldFBvc3RzKCkge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGNJZDogXCIxMDAwMVwiLFxuICAgICAgY25hbWU6IFwiU3VuaWwgS3VtYXJcIixcbiAgICAgIHBJZDogXCIxMDFcIixcbiAgICAgIHBOYW1lOiBcIlNhaWxlc2hcIixcbiAgICAgIGRhdGU6IFwiMjUtSnVuLTIwMTlcIixcbiAgICAgIGluRm9yOiBcIlNBTCAxXCIsXG4gICAgICBmcmFtZXdvcms6IFwiQ29yZSBYVFwiLFxuICAgICAgc3RhdHVzOiBcInNlbGVjdGVkXCIsXG4gICAgICBwcm9wb3NlZFRpdGxlOiBcIkFMIDJcIlxuICAgIH0sXG4gICAge1xuICAgICAgY0lkOiBcIjEwMDJcIixcbiAgICAgIGNuYW1lOiBcIkFqYXkgU2luZ2hcIixcbiAgICAgIHBJZDogXCIxMDJcIixcbiAgICAgIHBOYW1lOiBcIlN1bmlsXCIsXG4gICAgICBkYXRlOiBcIjI1LUp1bi0yMDE5XCIsXG4gICAgICBpbkZvcjogXCJTQUwgMVwiLFxuICAgICAgZnJhbWV3b3JrOiBcIkNvcmUgWFRcIixcbiAgICAgIHN0YXR1czogXCJzZWxlY3RlZFwiLFxuICAgICAgcHJvcG9zZWRUaXRsZTogXCJBTCAyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGNJZDogXCIxMDAzXCIsXG4gICAgICBjbmFtZTogXCJSdWNoaWthIEJoYXRpYVwiLFxuICAgICAgcElkOiBcIjEwM1wiLFxuICAgICAgcE5hbWU6IFwiU2hlbGx5XCIsXG4gICAgICBkYXRlOiBcIjI1LUp1bi0yMDE5XCIsXG4gICAgICBpbkZvcjogXCJTQUwgMVwiLFxuICAgICAgZnJhbWV3b3JrOiBcIkNvcmUgWFRcIixcbiAgICAgIHN0YXR1czogXCJzZWxlY3RlZFwiLFxuICAgICAgcHJvcG9zZWRUaXRsZTogXCJBTCAyXCJcbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCwgaW5kZXggfSkgPT4gKFxuICA8dHI+XG4gICAgPHRoIHNjb3BlPVwicm93XCI+e2luZGV4ICsgMX08L3RoPlxuICAgIDx0ZD5cbiAgICAgIDxMaW5rIGhyZWY9e2AvZmVlZGJhY2s/aWQ9JHtwb3N0LmNJZH1gfT5cbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImxpbmtcIj57cG9zdC5jbmFtZX08L0J1dHRvbj5cbiAgICAgIDwvTGluaz5cbiAgICA8L3RkPlxuICAgIDx0ZD5cbiAgICAgIDxMaW5rIGhyZWY9e2AvcGFuZWw/aWQ9JHtwb3N0LnBJZH1gfT5cbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImxpbmtcIj57cG9zdC5wTmFtZX08L0J1dHRvbj5cbiAgICAgIDwvTGluaz5cbiAgICA8L3RkPlxuICAgIDx0ZD5cbiAgICAgIDxCdXR0b24gY29sb3I9XCJsaW5rXCI+e3Bvc3QuZGF0ZX08L0J1dHRvbj5cbiAgICA8L3RkPlxuXG4gICAgPHRkIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZVwiPlxuICAgICAgPHAgY29sb3I9XCJsaW5rXCI+e3Bvc3QuaW5Gb3J9PC9wPlxuICAgIDwvdGQ+XG5cbiAgICA8dGQgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlXCI+XG4gICAgICA8cCBjb2xvcj1cImxpbmtcIj57cG9zdC5mcmFtZXdvcmt9PC9wPlxuICAgIDwvdGQ+XG5cbiAgICA8dGQgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlXCI+XG4gICAgICA8cCBjb2xvcj1cImxpbmtcIj57cG9zdC5zdGF0dXN9PC9wPlxuICAgIDwvdGQ+XG4gICAgPHRkIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZVwiPlxuICAgICAgPHAgY29sb3I9XCJsaW5rXCI+e3Bvc3QucHJvcG9zZWRUaXRsZX08L3A+XG4gICAgPC90ZD5cbiAgICA8dGQ+XG4gICAgICA8TGluayBocmVmPXtgL2ZlZWRiYWNrP2lkPSR7cG9zdC5jSWR9YH0+XG4gICAgICAgIDxGYUVkaXQgLz5cbiAgICAgIDwvTGluaz5cbiAgICA8L3RkPlxuICA8L3RyPlxuKTtcblxuZnVuY3Rpb24gQ2FuZGlkYXRlcygpIHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGgxPlNjaGVkdWxlZCBDYW5kaWRhdGVzPC9oMT5cbiAgICAgIDxUYWJsZSBzaXplPVwic21cIj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJhbGlnbi10b3BcIiBzY29wZT1cInJvd1wiPlxuICAgICAgICAgICAgICBJRFxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJhbGlnbi10b3BcIj5cbiAgICAgICAgICAgICAgPHAgY29sb3I9XCJsaW5rXCI+Q2FuZGlkYXRlIE5hbWU8L3A+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImFsaWduLXRvcFwiPlxuICAgICAgICAgICAgICA8cCBjb2xvcj1cImxpbmtcIj5QYW5lbCBOYW1lPC9wPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJhbGlnbi10b3BcIj5cbiAgICAgICAgICAgICAgPHAgY29sb3I9XCJsaW5rXCI+RGF0ZTwvcD5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYWxpZ24tdG9wXCI+XG4gICAgICAgICAgICAgIDxwIGNvbG9yPVwibGlua1wiPkludGVydmlld2VkIGZvcjwvcD5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYWxpZ24tdG9wXCI+XG4gICAgICAgICAgICAgIDxwIGNvbG9yPVwibGlua1wiPkZyYW1ld29yazwvcD5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYWxpZ24tdG9wXCI+XG4gICAgICAgICAgICAgIDxwIGNvbG9yPVwibGlua1wiPlN0YXR1czwvcD5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYWxpZ24tdG9wXCI+XG4gICAgICAgICAgICAgIDxwIGNvbG9yPVwibGlua1wiPlByb3Bvc2VkIFRpdGxlPC9wPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJhbGlnbi10b3BcIj5cbiAgICAgICAgICAgICAgPHAgY29sb3I9XCJsaW5rXCI+RWRpdDwvcD5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cblxuICAgICAgICAgIHtnZXRQb3N0cygpLm1hcCgocG9zdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxQb3N0TGluayBrZXk9e3Bvc3QuY0lkfSBwb3N0PXtwb3N0fSBpbmRleD17aW5kZXh9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSxcbiAgICAgICAgYSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKENhbmRpZGF0ZXMpO1xuIl19 */\n/*@ sourceURL=/Users/sunkumar8/Projects/React/NextJS/Hiring App/HiringApp/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Candidates));

/***/ })

})
//# sourceMappingURL=index.js.c0495ca0a9eff0e02ae7.hot-update.js.map