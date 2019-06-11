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
    status: "selected",
    proposedTitle: "AL 2"
  }, {
    cId: "1002",
    cname: "Ajay Singh",
    pId: "102",
    pName: "Sunil",
    date: "25-Jun-2019",
    inFor: "SAL 1",
    status: "selected",
    proposedTitle: "AL 2"
  }, {
    cId: "1003",
    cname: "Ruchika Bhatia",
    pId: "103",
    pName: "Shelly",
    date: "25-Jun-2019",
    inFor: "SAL 1",
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
  }, post.status)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "align-middle"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    color: "link"
  }, post.proposedTitle)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/feedback?id=".concat(post.cId)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaEdit"], null))));
};

function Blog() {
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
  }, "h1.jsx-54248457,a.jsx-54248457{font-family:\"Arial\";}ul.jsx-54248457{padding:0;}li.jsx-54248457{list-style:none;margin:5px 0;}a.jsx-54248457{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-54248457:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdW5rdW1hcjgvUHJvamVjdHMvUmVhY3QvTmV4dEpTL0hpcmluZyBBcHAvSGlyaW5nQXBwL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlIa0IsQUFJK0IsQUFJVixBQUlNLEFBS0ssQUFLVCxVQWJkLEVBY0EsSUFWZSxJQVJmLFNBU0EscUJBSWEsV0FDYiIsImZpbGUiOiIvVXNlcnMvc3Vua3VtYXI4L1Byb2plY3RzL1JlYWN0L05leHRKUy9IaXJpbmcgQXBwL0hpcmluZ0FwcC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEJ1dHRvbiwgVGFibGUgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IHsgRmFFZGl0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cbmZ1bmN0aW9uIGdldFBvc3RzKCkge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGNJZDogXCIxMDAwMVwiLFxuICAgICAgY25hbWU6IFwiU3VuaWwgS3VtYXJcIixcbiAgICAgIHBJZDogXCIxMDFcIixcbiAgICAgIHBOYW1lOiBcIlNhaWxlc2hcIixcbiAgICAgIGRhdGU6IFwiMjUtSnVuLTIwMTlcIixcbiAgICAgIGluRm9yOiBcIlNBTCAxXCIsXG4gICAgICBzdGF0dXM6IFwic2VsZWN0ZWRcIixcbiAgICAgIHByb3Bvc2VkVGl0bGU6IFwiQUwgMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBjSWQ6IFwiMTAwMlwiLFxuICAgICAgY25hbWU6IFwiQWpheSBTaW5naFwiLFxuICAgICAgcElkOiBcIjEwMlwiLFxuICAgICAgcE5hbWU6IFwiU3VuaWxcIixcbiAgICAgIGRhdGU6IFwiMjUtSnVuLTIwMTlcIixcbiAgICAgIGluRm9yOiBcIlNBTCAxXCIsXG4gICAgICBzdGF0dXM6IFwic2VsZWN0ZWRcIixcbiAgICAgIHByb3Bvc2VkVGl0bGU6IFwiQUwgMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBjSWQ6IFwiMTAwM1wiLFxuICAgICAgY25hbWU6IFwiUnVjaGlrYSBCaGF0aWFcIixcbiAgICAgIHBJZDogXCIxMDNcIixcbiAgICAgIHBOYW1lOiBcIlNoZWxseVwiLFxuICAgICAgZGF0ZTogXCIyNS1KdW4tMjAxOVwiLFxuICAgICAgaW5Gb3I6IFwiU0FMIDFcIixcbiAgICAgIHN0YXR1czogXCJzZWxlY3RlZFwiLFxuICAgICAgcHJvcG9zZWRUaXRsZTogXCJBTCAyXCJcbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCwgaW5kZXggfSkgPT4gKFxuICA8dHI+XG4gICAgPHRoIHNjb3BlPVwicm93XCI+e2luZGV4ICsgMX08L3RoPlxuICAgIDx0ZD5cbiAgICAgIDxMaW5rIGhyZWY9e2AvZmVlZGJhY2s/aWQ9JHtwb3N0LmNJZH1gfT5cbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImxpbmtcIj57cG9zdC5jbmFtZX08L0J1dHRvbj5cbiAgICAgIDwvTGluaz5cbiAgICA8L3RkPlxuICAgIDx0ZD5cbiAgICAgIDxMaW5rIGhyZWY9e2AvcGFuZWw/aWQ9JHtwb3N0LnBJZH1gfT5cbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImxpbmtcIj57cG9zdC5wTmFtZX08L0J1dHRvbj5cbiAgICAgIDwvTGluaz5cbiAgICA8L3RkPlxuICAgIDx0ZD5cbiAgICAgIDxCdXR0b24gY29sb3I9XCJsaW5rXCI+e3Bvc3QuZGF0ZX08L0J1dHRvbj5cbiAgICA8L3RkPlxuXG4gICAgPHRkIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZVwiPlxuICAgICAgPHAgY29sb3I9XCJsaW5rXCI+e3Bvc3QuaW5Gb3J9PC9wPlxuICAgIDwvdGQ+XG4gICAgPHRkIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZVwiPlxuICAgICAgPHAgY29sb3I9XCJsaW5rXCI+e3Bvc3Quc3RhdHVzfTwvcD5cbiAgICA8L3RkPlxuICAgIDx0ZCBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGVcIj5cbiAgICAgIDxwIGNvbG9yPVwibGlua1wiPntwb3N0LnByb3Bvc2VkVGl0bGV9PC9wPlxuICAgIDwvdGQ+XG4gICAgPHRkPlxuICAgICAgPExpbmsgaHJlZj17YC9mZWVkYmFjaz9pZD0ke3Bvc3QuY0lkfWB9PlxuICAgICAgICA8RmFFZGl0IC8+XG4gICAgICA8L0xpbms+XG4gICAgPC90ZD5cbiAgPC90cj5cbik7XG5cbmZ1bmN0aW9uIEJsb2coKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxoMT5TY2hlZHVsZWQgQ2FuZGlkYXRlczwvaDE+XG4gICAgICA8VGFibGUgc2l6ZT1cInNtXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiYWxpZ24tdG9wXCIgc2NvcGU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgSURcbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYWxpZ24tdG9wXCI+XG4gICAgICAgICAgICAgIDxwIGNvbG9yPVwibGlua1wiPkNhbmRpZGF0ZSBOYW1lPC9wPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJhbGlnbi10b3BcIj5cbiAgICAgICAgICAgICAgPHAgY29sb3I9XCJsaW5rXCI+UGFuZWwgTmFtZTwvcD5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYWxpZ24tdG9wXCI+XG4gICAgICAgICAgICAgIDxwIGNvbG9yPVwibGlua1wiPkRhdGU8L3A+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImFsaWduLXRvcFwiPlxuICAgICAgICAgICAgICA8cCBjb2xvcj1cImxpbmtcIj5JbnRlcnZpZXdlZCBmb3I8L3A+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImFsaWduLXRvcFwiPlxuICAgICAgICAgICAgICA8cCBjb2xvcj1cImxpbmtcIj5TdGF0dXM8L3A+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImFsaWduLXRvcFwiPlxuICAgICAgICAgICAgICA8cCBjb2xvcj1cImxpbmtcIj5Qcm9wb3NlZCBUaXRsZTwvcD5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYWxpZ24tdG9wXCI+XG4gICAgICAgICAgICAgIDxwIGNvbG9yPVwibGlua1wiPkVkaXQ8L3A+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICB7Z2V0UG9zdHMoKS5tYXAoKHBvc3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8UG9zdExpbmsga2V5PXtwb3N0LmNJZH0gcG9zdD17cG9zdH0gaW5kZXg9e2luZGV4fSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC9UYWJsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEsXG4gICAgICAgIGEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XG4gICAgICAgIH1cblxuICAgICAgICB1bCB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihCbG9nKTtcbiJdfQ== */\n/*@ sourceURL=/Users/sunkumar8/Projects/React/NextJS/Hiring App/HiringApp/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Blog));

/***/ })

})
//# sourceMappingURL=index.js.393a094ede8c4f21b143.hot-update.js.map