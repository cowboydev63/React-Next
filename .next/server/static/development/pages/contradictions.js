module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Author.js":
/*!******************************!*\
  !*** ./components/Author.js ***!
  \******************************/
/*! exports provided: AmpAuthorComponent, AuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmpAuthorComponent", function() { return AmpAuthorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorComponent", function() { return AuthorComponent; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-amphtml */ "react-amphtml");
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_amphtml__WEBPACK_IMPORTED_MODULE_4__);


function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 30px;\n  flex-shrink: 0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 16px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  margin-bottom: 4px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  margin-top: 20px;\n  max-width: 500px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var AmpAuthor = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject());
var AmpAuthorInfo = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject2());
var AmpAuthorName = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject3());
var AmpAuthorDate = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject4());
var StyledAmpImage = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(react_amphtml__WEBPACK_IMPORTED_MODULE_4__["AmpImg"])(_templateObject5());

var AmpAuthorComponent = function AmpAuthorComponent(_ref) {
  var date_added = _ref.date_added,
      image = _ref.image,
      name = _ref.name;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpAuthor, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledAmpImage, {
    specName: "default",
    src: image,
    width: "60",
    height: "60",
    alt: "AMP"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpAuthorInfo, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpAuthorName, null, name), date_added ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpAuthorDate, null, moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date(date_added)).format("MMM Do, YYYY")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpAuthorDate, null, "Not published yet")));
};

var AuthorComponent = function AuthorComponent(_ref2) {
  var date_added = _ref2.date_added,
      image = _ref2.image,
      name = _ref2.name;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2530676027" + " " + "author"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: image,
    className: "jsx-2530676027" + " " + "image"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2530676027" + " " + "author-info"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2530676027" + " " + "author-name"
  }, name), date_added ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2530676027" + " " + "author-date"
  }, moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date(date_added)).format("MMM Do, YYYY")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2530676027" + " " + "author-date"
  }, "Not published yet")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2530676027",
    css: ".author.jsx-2530676027{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:20px;max-width:500px;}.author-info.jsx-2530676027{margin-left:20px;}.author-name.jsx-2530676027{font-size:16px;margin-bottom:4px;}.author-date.jsx-2530676027{color:rgba(0,0,0,0.54);font-size:16px;}.image.jsx-2530676027{border-radius:30px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;height:60px;width:60px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9BdXRob3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0VrQixBQUc4QixBQU9GLEFBSUYsQUFLVyxBQUtQLGVBVEQsRUFKcEIsRUFjZ0IsSUFMQyxVQUpqQixLQUtBLHFDQUtjLFlBQ0QsTUF2QkUsS0F3QmYscUVBdkJrQixnQkFDQSxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWwuY2hlbmcvY29kZS9uZXh0LWJpYmxlYW5zd2Vycy9jb21wb25lbnRzL0F1dGhvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCAqIGFzIEFtcCBmcm9tIFwicmVhY3QtYW1waHRtbFwiO1xuXG5jb25zdCBBbXBBdXRob3IgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuYDtcblxuY29uc3QgQW1wQXV0aG9ySW5mbyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuYDtcblxuY29uc3QgQW1wQXV0aG9yTmFtZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuYDtcblxuY29uc3QgQW1wQXV0aG9yRGF0ZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBmb250LXNpemU6IDE2cHg7XG5gO1xuXG5jb25zdCBTdHlsZWRBbXBJbWFnZSA9IHN0eWxlZChBbXAuQW1wSW1nKWBcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZmxleC1zaHJpbms6IDA7XG5gO1xuXG5jb25zdCBBbXBBdXRob3JDb21wb25lbnQgPSAoeyBkYXRlX2FkZGVkLCBpbWFnZSwgbmFtZSB9KSA9PiAoXG4gIDxBbXBBdXRob3I+XG4gICAgPFN0eWxlZEFtcEltYWdlXG4gICAgICBzcGVjTmFtZT1cImRlZmF1bHRcIlxuICAgICAgc3JjPXtpbWFnZX1cbiAgICAgIHdpZHRoPVwiNjBcIlxuICAgICAgaGVpZ2h0PVwiNjBcIlxuICAgICAgYWx0PVwiQU1QXCJcbiAgICAvPlxuICAgIDxBbXBBdXRob3JJbmZvPlxuICAgICAgPEFtcEF1dGhvck5hbWU+e25hbWV9PC9BbXBBdXRob3JOYW1lPlxuICAgICAge2RhdGVfYWRkZWQgPyAoXG4gICAgICAgIDxBbXBBdXRob3JEYXRlPlxuICAgICAgICAgIHttb21lbnQobmV3IERhdGUoZGF0ZV9hZGRlZCkpLmZvcm1hdChcIk1NTSBEbywgWVlZWVwiKX1cbiAgICAgICAgPC9BbXBBdXRob3JEYXRlPlxuICAgICAgKSA6IChcbiAgICAgICAgPEFtcEF1dGhvckRhdGU+Tm90IHB1Ymxpc2hlZCB5ZXQ8L0FtcEF1dGhvckRhdGU+XG4gICAgICApfVxuICAgIDwvQW1wQXV0aG9ySW5mbz5cbiAgPC9BbXBBdXRob3I+XG4pO1xuXG5jb25zdCBBdXRob3JDb21wb25lbnQgPSAoeyBkYXRlX2FkZGVkLCBpbWFnZSwgbmFtZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3JcIj5cbiAgICAgIDxpbWcgc3JjPXtpbWFnZX0gY2xhc3NOYW1lPVwiaW1hZ2VcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3ItaW5mb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhvci1uYW1lXCI+e25hbWV9PC9kaXY+XG4gICAgICAgIHtkYXRlX2FkZGVkID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yLWRhdGVcIj5cbiAgICAgICAgICAgIHttb21lbnQobmV3IERhdGUoZGF0ZV9hZGRlZCkpLmZvcm1hdChcIk1NTSBEbywgWVlZWVwiKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhvci1kYXRlXCI+Tm90IHB1Ymxpc2hlZCB5ZXQ8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5hdXRob3Ige1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aG9yLWluZm8ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGhvci1uYW1lIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGhvci1kYXRlIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW1hZ2Uge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgeyBBbXBBdXRob3JDb21wb25lbnQsIEF1dGhvckNvbXBvbmVudCB9O1xuIl19 */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/Author.js */"
  }));
};



/***/ }),

/***/ "./components/Container.js":
/*!*********************************!*\
  !*** ./components/Container.js ***!
  \*********************************/
/*! exports provided: AmpContainer, Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmpContainer", function() { return AmpContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.84);\n  margin: 0;\n  overflow-x: auto;\n  padding: 0;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());

var AmpContainer = function AmpContainer(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledContainer, null, children);
};

var Container = function Container(_ref2) {
  var children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1997678190" + " " + "container"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1997678190",
    css: ".container.jsx-1997678190{color:rgba(0,0,0,0.84);margin:0;padding:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9Db250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJnQixBQUdtQyx1QkFDakIsU0FDQyxVQUMrQyxzREFDM0QiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWwuY2hlbmcvY29kZS9uZXh0LWJpYmxlYW5zd2Vycy9jb21wb25lbnRzL0NvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IFN0eWxlZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODQpO1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbmA7XG5cbmNvbnN0IEFtcENvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPFN0eWxlZENvbnRhaW5lcj57Y2hpbGRyZW59PC9TdHlsZWRDb250YWluZXI+XG4pO1xuXG5jb25zdCBDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAge2NoaWxkcmVufVxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODQpO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IHsgQW1wQ29udGFpbmVyLCBDb250YWluZXIgfTtcbiJdfQ== */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/Container.js */"
  }));
};



/***/ }),

/***/ "./components/ReadingContainer.js":
/*!****************************************!*\
  !*** ./components/ReadingContainer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      style = _ref.style;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _objectSpread({
      margin: "0 auto 20px",
      maxWidth: 740,
      padding: "0 20px",
      width: "calc(100% - 40px)"
    }, style)
  }, children);
});

/***/ }),

/***/ "./components/TitleSection.js":
/*!************************************!*\
  !*** ./components/TitleSection.js ***!
  \************************************/
/*! exports provided: AmpTitleSection, TitleSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmpTitleSection", function() { return AmpTitleSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleSection", function() { return TitleSection; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-amphtml */ "react-amphtml");
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_amphtml__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Author__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Author */ "./components/Author.js");


function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n\n  @media screen and (max-width: 1199px) {\n    display: block;\n    font-size: 35px;\n    letter-spacing: 0.6em;\n    text-align: center;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  background-position: center;\n  width: 100%;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  margin-left: 20px;\n  max-height: 400px;\n  overflow: hidden;\n  width: calc(50% - 10px);\n\n  @media screen and (max-width: 1199px) {\n    margin-left: 0;\n    max-height: 500px;\n    order: -1;\n    width: 100%;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 23px;\n  font-weight: 400;\n  line-height: 28px;\n  margin-bottom: 30px;\n\n  @media screen and (max-width: 1199px) {\n    font-size: 20px;\n    line-height: 24px;\n    margin-bottom: 10px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 56px;\n  font-weight: 500;\n  line-height: 64px;\n  margin: 0;\n  margin-bottom: 16px;\n\n  @media screen and (max-width: 1199px) {\n    font-size: 36px;\n    font-weight: 500;\n    line-height: 40px;\n    margin-bottom: 8px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-left: auto;\n  max-width: 552px;\n\n  @media screen and (max-width: 1199px) {\n    margin-left: 0;\n    max-width: none;\n    padding: 0;\n    width: 100%;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  width: calc(50% - 10px);\n\n  @media screen and (max-width: 1199px) {\n    margin: 30px auto 0;\n    max-width: 740px;\n    width: calc(100% - 40px);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 0 65px;\n\n  @media screen and (max-width: 1199px) {\n    flex-direction: column;\n    margin: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var AmpTitleSectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var AmpTitleInfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2());
var AmpTitleInfo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3());
var AmpTitleText = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1(_templateObject4());
var AmpSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject5());
var AmpCoverImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject6());
var StyledAmpImg = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(react_amphtml__WEBPACK_IMPORTED_MODULE_3__["AmpImg"])(_templateObject7());
var AmpDivider = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject8());

var AmpTitleSection = function AmpTitleSection(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      image_url = _ref.image_url,
      date_added = _ref.date_added,
      user = _ref.user;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpTitleSectionContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpTitleInfoContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpTitleInfo, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpTitleText, null, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpSubtitle, null, subtitle || "Help us write this article!"), user ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Author__WEBPACK_IMPORTED_MODULE_4__["AmpAuthorComponent"], {
    date_added: date_added,
    image: user.image,
    name: user.name
  }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpDivider, null, "..."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpCoverImageContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledAmpImg, {
    specName: "default",
    src: image_url || "https://i.imgur.com/SmPYB60.png",
    width: "1200",
    height: "400",
    layout: "responsive",
    alt: "AMP"
  })));
};

var TitleSectionContainer = function TitleSectionContainer(_ref2) {
  var children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3214516492" + " " + "title-section"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3214516492",
    css: ".title-section.jsx-3214516492{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 65px;}@media screen and (max-width:1199px){.title-section.jsx-3214516492{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUlnQixBQUdzQixBQU1XLDBFQUxWLElBTUgsU0FDWCxDQU5GIiwiZmlsZSI6Ii9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgQW1wIGZyb20gXCJyZWFjdC1hbXBodG1sXCI7XG5cbmltcG9ydCB7IEFtcEF1dGhvckNvbXBvbmVudCwgQXV0aG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vQXV0aG9yXCI7XG5cbmNvbnN0IEFtcFRpdGxlU2VjdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCA2NXB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm9Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW46IDMwcHggYXV0byAwO1xuICAgIG1heC13aWR0aDogNzQwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm8gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWF4LXdpZHRoOiA1NTJweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgQW1wVGl0bGVUZXh0ID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDU2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBTdWJ0aXRsZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBDb3ZlckltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBvcmRlcjogLTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEFtcEltZyA9IHN0eWxlZChBbXAuQW1wSW1nKWBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IEFtcERpdmlkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBub25lO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZVNlY3Rpb24gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlX3VybCwgZGF0ZV9hZGRlZCwgdXNlciB9KSA9PiAoXG4gIDxBbXBUaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICAgPEFtcFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgIDxBbXBUaXRsZUluZm8+XG4gICAgICAgIDxBbXBUaXRsZVRleHQ+e3RpdGxlfTwvQW1wVGl0bGVUZXh0PlxuICAgICAgICA8QW1wU3VidGl0bGU+e3N1YnRpdGxlIHx8IFwiSGVscCB1cyB3cml0ZSB0aGlzIGFydGljbGUhXCJ9PC9BbXBTdWJ0aXRsZT5cblxuICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICA8QW1wQXV0aG9yQ29tcG9uZW50XG4gICAgICAgICAgICBkYXRlX2FkZGVkPXtkYXRlX2FkZGVkfVxuICAgICAgICAgICAgaW1hZ2U9e3VzZXIuaW1hZ2V9XG4gICAgICAgICAgICBuYW1lPXt1c2VyLm5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgPEFtcERpdmlkZXI+Li4uPC9BbXBEaXZpZGVyPlxuICAgICAgPC9BbXBUaXRsZUluZm8+XG4gICAgPC9BbXBUaXRsZUluZm9Db250YWluZXI+XG4gICAgPEFtcENvdmVySW1hZ2VDb250YWluZXI+XG4gICAgICA8U3R5bGVkQW1wSW1nXG4gICAgICAgIHNwZWNOYW1lPVwiZGVmYXVsdFwiXG4gICAgICAgIHNyYz17aW1hZ2VfdXJsIHx8IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9TbVBZQjYwLnBuZ1wifVxuICAgICAgICB3aWR0aD1cIjEyMDBcIlxuICAgICAgICBoZWlnaHQ9XCI0MDBcIlxuICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgYWx0PVwiQU1QXCJcbiAgICAgIC8+XG4gICAgPC9BbXBDb3ZlckltYWdlQ29udGFpbmVyPlxuICA8L0FtcFRpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbik7XG5cbmNvbnN0IFRpdGxlU2VjdGlvbkNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1zZWN0aW9uXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS1zZWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luOiAwIDY1cHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAudGl0bGUtc2VjdGlvbiB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgVGl0bGVJbmZvQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWluZm8tY29udGFpbmVyXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS1pbmZvLWNvbnRhaW5lciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLWluZm8tY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46IDMwcHggYXV0byAwO1xuICAgICAgICAgIG1heC13aWR0aDogNzQwcHg7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlSW5mbyA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1pbmZvXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS1pbmZvIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1heC13aWR0aDogNTUycHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAudGl0bGUtaW5mbyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgVGl0bGVUZXh0ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXRleHRcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnRpdGxlLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDU2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAudGl0bGUtdGV4dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFN1YnRpdGxlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBDb3ZlckltYWdlQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyLWltYWdlLWNvbnRhaW5lclwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY292ZXItaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5jb3Zlci1pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIG9yZGVyOiAtMTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBEaXZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXJcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmRpdmlkZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLmRpdmlkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC42ZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlU2VjdGlvbiA9ICh7IHRpdGxlLCBzdWJ0aXRsZSwgaW1hZ2VfdXJsLCBkYXRlX2FkZGVkLCB1c2VyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VGl0bGVTZWN0aW9uQ29udGFpbmVyPlxuICAgICAgPFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgICAgPFRpdGxlSW5mbz5cbiAgICAgICAgICA8VGl0bGVUZXh0Pnt0aXRsZX08L1RpdGxlVGV4dD5cbiAgICAgICAgICA8U3VidGl0bGU+e3N1YnRpdGxlIHx8IFwiSGVscCB1cyB3cml0ZSB0aGlzIGFydGljbGUhXCJ9PC9TdWJ0aXRsZT5cblxuICAgICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgICAgPEF1dGhvckNvbXBvbmVudFxuICAgICAgICAgICAgICBkYXRlX2FkZGVkPXtkYXRlX2FkZGVkfVxuICAgICAgICAgICAgICBpbWFnZT17dXNlci5pbWFnZX1cbiAgICAgICAgICAgICAgbmFtZT17dXNlci5uYW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIDxEaXZpZGVyPi4uLjwvRGl2aWRlcj5cbiAgICAgICAgPC9UaXRsZUluZm8+XG4gICAgICA8L1RpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgIDxDb3ZlckltYWdlQ29udGFpbmVyPlxuICAgICAgICA8aW1nIHNyYz17aW1hZ2VfdXJsfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0gLz5cbiAgICAgIDwvQ292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICA8L1RpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IEFtcFRpdGxlU2VjdGlvbiwgVGl0bGVTZWN0aW9uIH07XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/TitleSection.js */"
  }));
};

var TitleInfoContainer = function TitleInfoContainer(_ref3) {
  var children = _ref3.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2927809135" + " " + "title-info-container"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2927809135",
    css: ".title-info-container.jsx-2927809135{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:calc(50% - 10px);}@media screen and (max-width:1199px){.title-info-container.jsx-2927809135{margin:30px auto 0;max-width:740px;width:calc(100% - 40px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEpnQixBQUc0QixBQU9FLG1CQUNILGdCQUNRLHdCQUMxQixrQ0FUYSwwRUFDVSx1QkFDekIiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWwuY2hlbmcvY29kZS9uZXh0LWJpYmxlYW5zd2Vycy9jb21wb25lbnRzL1RpdGxlU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgKiBhcyBBbXAgZnJvbSBcInJlYWN0LWFtcGh0bWxcIjtcblxuaW1wb3J0IHsgQW1wQXV0aG9yQ29tcG9uZW50LCBBdXRob3JDb21wb25lbnQgfSBmcm9tIFwiLi9BdXRob3JcIjtcblxuY29uc3QgQW1wVGl0bGVTZWN0aW9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDY1cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbmA7XG5cbmNvbnN0IEFtcFRpdGxlSW5mb0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIG1hcmdpbjogMzBweCBhdXRvIDA7XG4gICAgbWF4LXdpZHRoOiA3NDBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gIH1cbmA7XG5cbmNvbnN0IEFtcFRpdGxlSW5mbyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXgtd2lkdGg6IDU1MnB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZVRleHQgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogNTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cbmA7XG5cbmNvbnN0IEFtcFN1YnRpdGxlID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IEFtcENvdmVySW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgIG9yZGVyOiAtMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkQW1wSW1nID0gc3R5bGVkKEFtcC5BbXBJbWcpYFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuY29uc3QgQW1wRGl2aWRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjZlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbmA7XG5cbmNvbnN0IEFtcFRpdGxlU2VjdGlvbiA9ICh7IHRpdGxlLCBzdWJ0aXRsZSwgaW1hZ2VfdXJsLCBkYXRlX2FkZGVkLCB1c2VyIH0pID0+IChcbiAgPEFtcFRpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbiAgICA8QW1wVGl0bGVJbmZvQ29udGFpbmVyPlxuICAgICAgPEFtcFRpdGxlSW5mbz5cbiAgICAgICAgPEFtcFRpdGxlVGV4dD57dGl0bGV9PC9BbXBUaXRsZVRleHQ+XG4gICAgICAgIDxBbXBTdWJ0aXRsZT57c3VidGl0bGUgfHwgXCJIZWxwIHVzIHdyaXRlIHRoaXMgYXJ0aWNsZSFcIn08L0FtcFN1YnRpdGxlPlxuXG4gICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgIDxBbXBBdXRob3JDb21wb25lbnRcbiAgICAgICAgICAgIGRhdGVfYWRkZWQ9e2RhdGVfYWRkZWR9XG4gICAgICAgICAgICBpbWFnZT17dXNlci5pbWFnZX1cbiAgICAgICAgICAgIG5hbWU9e3VzZXIubmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cblxuICAgICAgICA8QW1wRGl2aWRlcj4uLi48L0FtcERpdmlkZXI+XG4gICAgICA8L0FtcFRpdGxlSW5mbz5cbiAgICA8L0FtcFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICA8QW1wQ292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgIDxTdHlsZWRBbXBJbWdcbiAgICAgICAgc3BlY05hbWU9XCJkZWZhdWx0XCJcbiAgICAgICAgc3JjPXtpbWFnZV91cmwgfHwgXCJodHRwczovL2kuaW1ndXIuY29tL1NtUFlCNjAucG5nXCJ9XG4gICAgICAgIHdpZHRoPVwiMTIwMFwiXG4gICAgICAgIGhlaWdodD1cIjQwMFwiXG4gICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICBhbHQ9XCJBTVBcIlxuICAgICAgLz5cbiAgICA8L0FtcENvdmVySW1hZ2VDb250YWluZXI+XG4gIDwvQW1wVGl0bGVTZWN0aW9uQ29udGFpbmVyPlxuKTtcblxuY29uc3QgVGl0bGVTZWN0aW9uQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXNlY3Rpb25cIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnRpdGxlLXNlY3Rpb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW46IDAgNjVweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC50aXRsZS1zZWN0aW9uIHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZUluZm9Db250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtaW5mby1jb250YWluZXJcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnRpdGxlLWluZm8tY29udGFpbmVyIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAudGl0bGUtaW5mby1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbjogMzBweCBhdXRvIDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiA3NDBweDtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgVGl0bGVJbmZvID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWluZm9cIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnRpdGxlLWluZm8ge1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiA1NTJweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC50aXRsZS1pbmZvIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZVRleHQgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtdGV4dFwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogNTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDY0cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC50aXRsZS10ZXh0IHtcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgU3VidGl0bGUgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAuc3VidGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IENvdmVySW1hZ2VDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY292ZXItaW1hZ2UtY29udGFpbmVyXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb3Zlci1pbWFnZS1jb250YWluZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLmNvdmVyLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgICAgICAgb3JkZXI6IC0xO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IERpdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuZGl2aWRlciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjZlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgVGl0bGVTZWN0aW9uID0gKHsgdGl0bGUsIHN1YnRpdGxlLCBpbWFnZV91cmwsIGRhdGVfYWRkZWQsIHVzZXIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxUaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICAgICA8VGl0bGVJbmZvQ29udGFpbmVyPlxuICAgICAgICA8VGl0bGVJbmZvPlxuICAgICAgICAgIDxUaXRsZVRleHQ+e3RpdGxlfTwvVGl0bGVUZXh0PlxuICAgICAgICAgIDxTdWJ0aXRsZT57c3VidGl0bGUgfHwgXCJIZWxwIHVzIHdyaXRlIHRoaXMgYXJ0aWNsZSFcIn08L1N1YnRpdGxlPlxuXG4gICAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgICA8QXV0aG9yQ29tcG9uZW50XG4gICAgICAgICAgICAgIGRhdGVfYWRkZWQ9e2RhdGVfYWRkZWR9XG4gICAgICAgICAgICAgIGltYWdlPXt1c2VyLmltYWdlfVxuICAgICAgICAgICAgICBuYW1lPXt1c2VyLm5hbWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgPERpdmlkZXI+Li4uPC9EaXZpZGVyPlxuICAgICAgICA8L1RpdGxlSW5mbz5cbiAgICAgIDwvVGl0bGVJbmZvQ29udGFpbmVyPlxuICAgICAgPENvdmVySW1hZ2VDb250YWluZXI+XG4gICAgICAgIDxpbWcgc3JjPXtpbWFnZV91cmx9IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fSAvPlxuICAgICAgPC9Db3ZlckltYWdlQ29udGFpbmVyPlxuICAgIDwvVGl0bGVTZWN0aW9uQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IHsgQW1wVGl0bGVTZWN0aW9uLCBUaXRsZVNlY3Rpb24gfTtcbiJdfQ== */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/TitleSection.js */"
  }));
};

var TitleInfo = function TitleInfo(_ref4) {
  var children = _ref4.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1249011680" + " " + "title-info"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1249011680",
    css: ".title-info.jsx-1249011680{margin-left:auto;max-width:552px;}@media screen and (max-width:1199px){.title-info.jsx-1249011680{margin-left:0;max-width:none;padding:0;width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0tnQixBQUcwQixBQU1ELGNBQ0MsR0FORCxZQU9KLElBTmQsTUFPZSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgQW1wIGZyb20gXCJyZWFjdC1hbXBodG1sXCI7XG5cbmltcG9ydCB7IEFtcEF1dGhvckNvbXBvbmVudCwgQXV0aG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vQXV0aG9yXCI7XG5cbmNvbnN0IEFtcFRpdGxlU2VjdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCA2NXB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm9Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW46IDMwcHggYXV0byAwO1xuICAgIG1heC13aWR0aDogNzQwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm8gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWF4LXdpZHRoOiA1NTJweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgQW1wVGl0bGVUZXh0ID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDU2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBTdWJ0aXRsZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBDb3ZlckltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBvcmRlcjogLTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEFtcEltZyA9IHN0eWxlZChBbXAuQW1wSW1nKWBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IEFtcERpdmlkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBub25lO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZVNlY3Rpb24gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlX3VybCwgZGF0ZV9hZGRlZCwgdXNlciB9KSA9PiAoXG4gIDxBbXBUaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICAgPEFtcFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgIDxBbXBUaXRsZUluZm8+XG4gICAgICAgIDxBbXBUaXRsZVRleHQ+e3RpdGxlfTwvQW1wVGl0bGVUZXh0PlxuICAgICAgICA8QW1wU3VidGl0bGU+e3N1YnRpdGxlIHx8IFwiSGVscCB1cyB3cml0ZSB0aGlzIGFydGljbGUhXCJ9PC9BbXBTdWJ0aXRsZT5cblxuICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICA8QW1wQXV0aG9yQ29tcG9uZW50XG4gICAgICAgICAgICBkYXRlX2FkZGVkPXtkYXRlX2FkZGVkfVxuICAgICAgICAgICAgaW1hZ2U9e3VzZXIuaW1hZ2V9XG4gICAgICAgICAgICBuYW1lPXt1c2VyLm5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgPEFtcERpdmlkZXI+Li4uPC9BbXBEaXZpZGVyPlxuICAgICAgPC9BbXBUaXRsZUluZm8+XG4gICAgPC9BbXBUaXRsZUluZm9Db250YWluZXI+XG4gICAgPEFtcENvdmVySW1hZ2VDb250YWluZXI+XG4gICAgICA8U3R5bGVkQW1wSW1nXG4gICAgICAgIHNwZWNOYW1lPVwiZGVmYXVsdFwiXG4gICAgICAgIHNyYz17aW1hZ2VfdXJsIHx8IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9TbVBZQjYwLnBuZ1wifVxuICAgICAgICB3aWR0aD1cIjEyMDBcIlxuICAgICAgICBoZWlnaHQ9XCI0MDBcIlxuICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgYWx0PVwiQU1QXCJcbiAgICAgIC8+XG4gICAgPC9BbXBDb3ZlckltYWdlQ29udGFpbmVyPlxuICA8L0FtcFRpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbik7XG5cbmNvbnN0IFRpdGxlU2VjdGlvbkNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1zZWN0aW9uXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS1zZWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luOiAwIDY1cHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAudGl0bGUtc2VjdGlvbiB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgVGl0bGVJbmZvQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWluZm8tY29udGFpbmVyXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS1pbmZvLWNvbnRhaW5lciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLWluZm8tY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46IDMwcHggYXV0byAwO1xuICAgICAgICAgIG1heC13aWR0aDogNzQwcHg7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlSW5mbyA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1pbmZvXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS1pbmZvIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1heC13aWR0aDogNTUycHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAudGl0bGUtaW5mbyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgVGl0bGVUZXh0ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXRleHRcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnRpdGxlLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDU2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAudGl0bGUtdGV4dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFN1YnRpdGxlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBDb3ZlckltYWdlQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyLWltYWdlLWNvbnRhaW5lclwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY292ZXItaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5jb3Zlci1pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIG9yZGVyOiAtMTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBEaXZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXJcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmRpdmlkZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLmRpdmlkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC42ZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlU2VjdGlvbiA9ICh7IHRpdGxlLCBzdWJ0aXRsZSwgaW1hZ2VfdXJsLCBkYXRlX2FkZGVkLCB1c2VyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VGl0bGVTZWN0aW9uQ29udGFpbmVyPlxuICAgICAgPFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgICAgPFRpdGxlSW5mbz5cbiAgICAgICAgICA8VGl0bGVUZXh0Pnt0aXRsZX08L1RpdGxlVGV4dD5cbiAgICAgICAgICA8U3VidGl0bGU+e3N1YnRpdGxlIHx8IFwiSGVscCB1cyB3cml0ZSB0aGlzIGFydGljbGUhXCJ9PC9TdWJ0aXRsZT5cblxuICAgICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgICAgPEF1dGhvckNvbXBvbmVudFxuICAgICAgICAgICAgICBkYXRlX2FkZGVkPXtkYXRlX2FkZGVkfVxuICAgICAgICAgICAgICBpbWFnZT17dXNlci5pbWFnZX1cbiAgICAgICAgICAgICAgbmFtZT17dXNlci5uYW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIDxEaXZpZGVyPi4uLjwvRGl2aWRlcj5cbiAgICAgICAgPC9UaXRsZUluZm8+XG4gICAgICA8L1RpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgIDxDb3ZlckltYWdlQ29udGFpbmVyPlxuICAgICAgICA8aW1nIHNyYz17aW1hZ2VfdXJsfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0gLz5cbiAgICAgIDwvQ292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICA8L1RpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IEFtcFRpdGxlU2VjdGlvbiwgVGl0bGVTZWN0aW9uIH07XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/TitleSection.js */"
  }));
};

var TitleText = function TitleText(_ref5) {
  var children = _ref5.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2529258625" + " " + "title-text"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2529258625",
    css: ".title-text.jsx-2529258625{font-size:56px;font-weight:500;line-height:64px;margin:0;margin-bottom:16px;}@media screen and (max-width:1199px){.title-text.jsx-2529258625{font-size:36px;font-weight:500;line-height:40px;margin-bottom:8px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb01nQixBQUd3QixBQVNFLGVBUkQsQUFTRSxnQkFSRCxBQVNFLGlCQVJWLEFBU1csU0FSRCxTQVNuQixVQVJGIiwiZmlsZSI6Ii9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgQW1wIGZyb20gXCJyZWFjdC1hbXBodG1sXCI7XG5cbmltcG9ydCB7IEFtcEF1dGhvckNvbXBvbmVudCwgQXV0aG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vQXV0aG9yXCI7XG5cbmNvbnN0IEFtcFRpdGxlU2VjdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCA2NXB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm9Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW46IDMwcHggYXV0byAwO1xuICAgIG1heC13aWR0aDogNzQwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm8gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWF4LXdpZHRoOiA1NTJweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgQW1wVGl0bGVUZXh0ID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDU2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBTdWJ0aXRsZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBDb3ZlckltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBvcmRlcjogLTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEFtcEltZyA9IHN0eWxlZChBbXAuQW1wSW1nKWBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IEFtcERpdmlkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBub25lO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZVNlY3Rpb24gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlX3VybCwgZGF0ZV9hZGRlZCwgdXNlciB9KSA9PiAoXG4gIDxBbXBUaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICAgPEFtcFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgIDxBbXBUaXRsZUluZm8+XG4gICAgICAgIDxBbXBUaXRsZVRleHQ+e3RpdGxlfTwvQW1wVGl0bGVUZXh0PlxuICAgICAgICA8QW1wU3VidGl0bGU+e3N1YnRpdGxlIHx8IFwiSGVscCB1cyB3cml0ZSB0aGlzIGFydGljbGUhXCJ9PC9BbXBTdWJ0aXRsZT5cblxuICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICA8QW1wQXV0aG9yQ29tcG9uZW50XG4gICAgICAgICAgICBkYXRlX2FkZGVkPXtkYXRlX2FkZGVkfVxuICAgICAgICAgICAgaW1hZ2U9e3VzZXIuaW1hZ2V9XG4gICAgICAgICAgICBuYW1lPXt1c2VyLm5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgPEFtcERpdmlkZXI+Li4uPC9BbXBEaXZpZGVyPlxuICAgICAgPC9BbXBUaXRsZUluZm8+XG4gICAgPC9BbXBUaXRsZUluZm9Db250YWluZXI+XG4gICAgPEFtcENvdmVySW1hZ2VDb250YWluZXI+XG4gICAgICA8U3R5bGVkQW1wSW1nXG4gICAgICAgIHNwZWNOYW1lPVwiZGVmYXVsdFwiXG4gICAgICAgIHNyYz17aW1hZ2VfdXJsIHx8IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9TbVBZQjYwLnBuZ1wifVxuICAgICAgICB3aWR0aD1cIjEyMDBcIlxuICAgICAgICBoZWlnaHQ9XCI0MDBcIlxuICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgYWx0PVwiQU1QXCJcbiAgICAgIC8+XG4gICAgPC9BbXBDb3ZlckltYWdlQ29udGFpbmVyPlxuICA8L0FtcFRpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbik7XG5cbmNvbnN0IFRpdGxlU2VjdGlvbkNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1zZWN0aW9uXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS1zZWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luOiAwIDY1cHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAudGl0bGUtc2VjdGlvbiB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgVGl0bGVJbmZvQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWluZm8tY29udGFpbmVyXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS1pbmZvLWNvbnRhaW5lciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLWluZm8tY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46IDMwcHggYXV0byAwO1xuICAgICAgICAgIG1heC13aWR0aDogNzQwcHg7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlSW5mbyA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1pbmZvXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS1pbmZvIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1heC13aWR0aDogNTUycHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAudGl0bGUtaW5mbyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgVGl0bGVUZXh0ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXRleHRcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnRpdGxlLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDU2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAudGl0bGUtdGV4dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFN1YnRpdGxlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBDb3ZlckltYWdlQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyLWltYWdlLWNvbnRhaW5lclwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY292ZXItaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5jb3Zlci1pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIG9yZGVyOiAtMTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBEaXZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXJcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmRpdmlkZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLmRpdmlkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC42ZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlU2VjdGlvbiA9ICh7IHRpdGxlLCBzdWJ0aXRsZSwgaW1hZ2VfdXJsLCBkYXRlX2FkZGVkLCB1c2VyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VGl0bGVTZWN0aW9uQ29udGFpbmVyPlxuICAgICAgPFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgICAgPFRpdGxlSW5mbz5cbiAgICAgICAgICA8VGl0bGVUZXh0Pnt0aXRsZX08L1RpdGxlVGV4dD5cbiAgICAgICAgICA8U3VidGl0bGU+e3N1YnRpdGxlIHx8IFwiSGVscCB1cyB3cml0ZSB0aGlzIGFydGljbGUhXCJ9PC9TdWJ0aXRsZT5cblxuICAgICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgICAgPEF1dGhvckNvbXBvbmVudFxuICAgICAgICAgICAgICBkYXRlX2FkZGVkPXtkYXRlX2FkZGVkfVxuICAgICAgICAgICAgICBpbWFnZT17dXNlci5pbWFnZX1cbiAgICAgICAgICAgICAgbmFtZT17dXNlci5uYW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIDxEaXZpZGVyPi4uLjwvRGl2aWRlcj5cbiAgICAgICAgPC9UaXRsZUluZm8+XG4gICAgICA8L1RpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgIDxDb3ZlckltYWdlQ29udGFpbmVyPlxuICAgICAgICA8aW1nIHNyYz17aW1hZ2VfdXJsfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0gLz5cbiAgICAgIDwvQ292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICA8L1RpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IEFtcFRpdGxlU2VjdGlvbiwgVGl0bGVTZWN0aW9uIH07XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/TitleSection.js */"
  }));
};

var Subtitle = function Subtitle(_ref6) {
  var children = _ref6.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3750299911" + " " + "subtitle"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3750299911",
    css: ".subtitle.jsx-3750299911{color:rgba(0,0,0,0.54);font-size:23px;font-weight:400;line-height:28px;margin-bottom:30px;}@media screen and (max-width:1199px){.subtitle.jsx-3750299911{font-size:20px;line-height:24px;margin-bottom:10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNE5nQixBQUdtQyxBQVNULGVBQ0UsUUFUSixTQVVNLE1BVEwsYUFVaEIsR0FUaUIsaUJBQ0UsbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgQW1wIGZyb20gXCJyZWFjdC1hbXBodG1sXCI7XG5cbmltcG9ydCB7IEFtcEF1dGhvckNvbXBvbmVudCwgQXV0aG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vQXV0aG9yXCI7XG5cbmNvbnN0IEFtcFRpdGxlU2VjdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCA2NXB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm9Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW46IDMwcHggYXV0byAwO1xuICAgIG1heC13aWR0aDogNzQwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm8gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWF4LXdpZHRoOiA1NTJweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgQW1wVGl0bGVUZXh0ID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDU2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBTdWJ0aXRsZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBDb3ZlckltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBvcmRlcjogLTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEFtcEltZyA9IHN0eWxlZChBbXAuQW1wSW1nKWBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IEFtcERpdmlkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBub25lO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZVNlY3Rpb24gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlX3VybCwgZGF0ZV9hZGRlZCwgdXNlciB9KSA9PiAoXG4gIDxBbXBUaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICAgPEFtcFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgIDxBbXBUaXRsZUluZm8+XG4gICAgICAgIDxBbXBUaXRsZVRleHQ+e3RpdGxlfTwvQW1wVGl0bGVUZXh0PlxuICAgICAgICA8QW1wU3VidGl0bGU+e3N1YnRpdGxlIHx8IFwiSGVscCB1cyB3cml0ZSB0aGlzIGFydGljbGUhXCJ9PC9BbXBTdWJ0aXRsZT5cblxuICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICA8QW1wQXV0aG9yQ29tcG9uZW50XG4gICAgICAgICAgICBkYXRlX2FkZGVkPXtkYXRlX2FkZGVkfVxuICAgICAgICAgICAgaW1hZ2U9e3VzZXIuaW1hZ2V9XG4gICAgICAgICAgICBuYW1lPXt1c2VyLm5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgPEFtcERpdmlkZXI+Li4uPC9BbXBEaXZpZGVyPlxuICAgICAgPC9BbXBUaXRsZUluZm8+XG4gICAgPC9BbXBUaXRsZUluZm9Db250YWluZXI+XG4gICAgPEFtcENvdmVySW1hZ2VDb250YWluZXI+XG4gICAgICA8U3R5bGVkQW1wSW1nXG4gICAgICAgIHNwZWNOYW1lPVwiZGVmYXVsdFwiXG4gICAgICAgIHNyYz17aW1hZ2VfdXJsIHx8IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9TbVBZQjYwLnBuZ1wifVxuICAgICAgICB3aWR0aD1cIjEyMDBcIlxuICAgICAgICBoZWlnaHQ9XCI0MDBcIlxuICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgYWx0PVwiQU1QXCJcbiAgICAgIC8+XG4gICAgPC9BbXBDb3ZlckltYWdlQ29udGFpbmVyPlxuICA8L0FtcFRpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbik7XG5cbmNvbnN0IFRpdGxlU2VjdGlvbkNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1zZWN0aW9uXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS1zZWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luOiAwIDY1cHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAudGl0bGUtc2VjdGlvbiB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgVGl0bGVJbmZvQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWluZm8tY29udGFpbmVyXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS1pbmZvLWNvbnRhaW5lciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLWluZm8tY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46IDMwcHggYXV0byAwO1xuICAgICAgICAgIG1heC13aWR0aDogNzQwcHg7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlSW5mbyA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1pbmZvXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS1pbmZvIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1heC13aWR0aDogNTUycHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAudGl0bGUtaW5mbyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgVGl0bGVUZXh0ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXRleHRcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnRpdGxlLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDU2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAudGl0bGUtdGV4dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFN1YnRpdGxlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBDb3ZlckltYWdlQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyLWltYWdlLWNvbnRhaW5lclwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY292ZXItaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5jb3Zlci1pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIG9yZGVyOiAtMTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBEaXZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXJcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmRpdmlkZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLmRpdmlkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC42ZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlU2VjdGlvbiA9ICh7IHRpdGxlLCBzdWJ0aXRsZSwgaW1hZ2VfdXJsLCBkYXRlX2FkZGVkLCB1c2VyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VGl0bGVTZWN0aW9uQ29udGFpbmVyPlxuICAgICAgPFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgICAgPFRpdGxlSW5mbz5cbiAgICAgICAgICA8VGl0bGVUZXh0Pnt0aXRsZX08L1RpdGxlVGV4dD5cbiAgICAgICAgICA8U3VidGl0bGU+e3N1YnRpdGxlIHx8IFwiSGVscCB1cyB3cml0ZSB0aGlzIGFydGljbGUhXCJ9PC9TdWJ0aXRsZT5cblxuICAgICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgICAgPEF1dGhvckNvbXBvbmVudFxuICAgICAgICAgICAgICBkYXRlX2FkZGVkPXtkYXRlX2FkZGVkfVxuICAgICAgICAgICAgICBpbWFnZT17dXNlci5pbWFnZX1cbiAgICAgICAgICAgICAgbmFtZT17dXNlci5uYW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIDxEaXZpZGVyPi4uLjwvRGl2aWRlcj5cbiAgICAgICAgPC9UaXRsZUluZm8+XG4gICAgICA8L1RpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgIDxDb3ZlckltYWdlQ29udGFpbmVyPlxuICAgICAgICA8aW1nIHNyYz17aW1hZ2VfdXJsfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0gLz5cbiAgICAgIDwvQ292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICA8L1RpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IEFtcFRpdGxlU2VjdGlvbiwgVGl0bGVTZWN0aW9uIH07XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/TitleSection.js */"
  }));
};

var CoverImageContainer = function CoverImageContainer(_ref7) {
  var children = _ref7.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2130314682" + " " + "cover-image-container"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2130314682",
    css: ".cover-image-container.jsx-2130314682{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:20px;max-height:400px;overflow:hidden;width:calc(50% - 10px);}@media screen and (max-width:1199px){.cover-image-container.jsx-2130314682{margin-left:0;max-height:500px;-webkit-order:-1;-ms-flex-order:-1;order:-1;width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbVBnQixBQUc0QixBQVVILGNBQ0csaUJBQ1IsNENBQ0UsV0FDYixPQWJhLDBFQUNJLGlCQUNBLGlCQUNELGdCQUNPLHVCQUN6QiIsImZpbGUiOiIvVXNlcnMvbWljaGFlbC5jaGVuZy9jb2RlL25leHQtYmlibGVhbnN3ZXJzL2NvbXBvbmVudHMvVGl0bGVTZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCAqIGFzIEFtcCBmcm9tIFwicmVhY3QtYW1waHRtbFwiO1xuXG5pbXBvcnQgeyBBbXBBdXRob3JDb21wb25lbnQsIEF1dGhvckNvbXBvbmVudCB9IGZyb20gXCIuL0F1dGhvclwiO1xuXG5jb25zdCBBbXBUaXRsZVNlY3Rpb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgNjVweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuYDtcblxuY29uc3QgQW1wVGl0bGVJbmZvQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcbiAgICBtYXgtd2lkdGg6IDc0MHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgfVxuYDtcblxuY29uc3QgQW1wVGl0bGVJbmZvID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1heC13aWR0aDogNTUycHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IEFtcFRpdGxlVGV4dCA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiA1NnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogNjRweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuYDtcblxuY29uc3QgQW1wU3VidGl0bGUgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcblxuY29uc3QgQW1wQ292ZXJJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgb3JkZXI6IC0xO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRBbXBJbWcgPSBzdHlsZWQoQW1wLkFtcEltZylgXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5jb25zdCBBbXBEaXZpZGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogbm9uZTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuYDtcblxuY29uc3QgQW1wVGl0bGVTZWN0aW9uID0gKHsgdGl0bGUsIHN1YnRpdGxlLCBpbWFnZV91cmwsIGRhdGVfYWRkZWQsIHVzZXIgfSkgPT4gKFxuICA8QW1wVGl0bGVTZWN0aW9uQ29udGFpbmVyPlxuICAgIDxBbXBUaXRsZUluZm9Db250YWluZXI+XG4gICAgICA8QW1wVGl0bGVJbmZvPlxuICAgICAgICA8QW1wVGl0bGVUZXh0Pnt0aXRsZX08L0FtcFRpdGxlVGV4dD5cbiAgICAgICAgPEFtcFN1YnRpdGxlPntzdWJ0aXRsZSB8fCBcIkhlbHAgdXMgd3JpdGUgdGhpcyBhcnRpY2xlIVwifTwvQW1wU3VidGl0bGU+XG5cbiAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgPEFtcEF1dGhvckNvbXBvbmVudFxuICAgICAgICAgICAgZGF0ZV9hZGRlZD17ZGF0ZV9hZGRlZH1cbiAgICAgICAgICAgIGltYWdlPXt1c2VyLmltYWdlfVxuICAgICAgICAgICAgbmFtZT17dXNlci5uYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIDxBbXBEaXZpZGVyPi4uLjwvQW1wRGl2aWRlcj5cbiAgICAgIDwvQW1wVGl0bGVJbmZvPlxuICAgIDwvQW1wVGl0bGVJbmZvQ29udGFpbmVyPlxuICAgIDxBbXBDb3ZlckltYWdlQ29udGFpbmVyPlxuICAgICAgPFN0eWxlZEFtcEltZ1xuICAgICAgICBzcGVjTmFtZT1cImRlZmF1bHRcIlxuICAgICAgICBzcmM9e2ltYWdlX3VybCB8fCBcImh0dHBzOi8vaS5pbWd1ci5jb20vU21QWUI2MC5wbmdcIn1cbiAgICAgICAgd2lkdGg9XCIxMjAwXCJcbiAgICAgICAgaGVpZ2h0PVwiNDAwXCJcbiAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgIGFsdD1cIkFNUFwiXG4gICAgICAvPlxuICAgIDwvQW1wQ292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgPC9BbXBUaXRsZVNlY3Rpb25Db250YWluZXI+XG4pO1xuXG5jb25zdCBUaXRsZVNlY3Rpb25Db250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtc2VjdGlvblwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtc2VjdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbjogMCA2NXB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLXNlY3Rpb24ge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlSW5mb0NvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1pbmZvLWNvbnRhaW5lclwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtaW5mby1jb250YWluZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC50aXRsZS1pbmZvLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDc0MHB4O1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZUluZm8gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtaW5mb1wiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtaW5mbyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDU1MnB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLWluZm8ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlVGV4dCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS10ZXh0XCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiA1NnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogNjRweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLXRleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBTdWJ0aXRsZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuc3VidGl0bGUge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgQ292ZXJJbWFnZUNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb3Zlci1pbWFnZS1jb250YWluZXJcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvdmVyLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAuY292ZXItaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICBvcmRlcjogLTE7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgRGl2aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZVNlY3Rpb24gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlX3VybCwgZGF0ZV9hZGRlZCwgdXNlciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFRpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgIDxUaXRsZUluZm9Db250YWluZXI+XG4gICAgICAgIDxUaXRsZUluZm8+XG4gICAgICAgICAgPFRpdGxlVGV4dD57dGl0bGV9PC9UaXRsZVRleHQ+XG4gICAgICAgICAgPFN1YnRpdGxlPntzdWJ0aXRsZSB8fCBcIkhlbHAgdXMgd3JpdGUgdGhpcyBhcnRpY2xlIVwifTwvU3VidGl0bGU+XG5cbiAgICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICAgIDxBdXRob3JDb21wb25lbnRcbiAgICAgICAgICAgICAgZGF0ZV9hZGRlZD17ZGF0ZV9hZGRlZH1cbiAgICAgICAgICAgICAgaW1hZ2U9e3VzZXIuaW1hZ2V9XG4gICAgICAgICAgICAgIG5hbWU9e3VzZXIubmFtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICA8RGl2aWRlcj4uLi48L0RpdmlkZXI+XG4gICAgICAgIDwvVGl0bGVJbmZvPlxuICAgICAgPC9UaXRsZUluZm9Db250YWluZXI+XG4gICAgICA8Q292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlX3VybH0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IC8+XG4gICAgICA8L0NvdmVySW1hZ2VDb250YWluZXI+XG4gICAgPC9UaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgeyBBbXBUaXRsZVNlY3Rpb24sIFRpdGxlU2VjdGlvbiB9O1xuIl19 */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/TitleSection.js */"
  }));
};

var Divider = function Divider(_ref8) {
  var children = _ref8.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1611578801" + " " + "divider"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1611578801",
    css: ".divider.jsx-1611578801{display:none;}@media screen and (max-width:1199px){.divider.jsx-1611578801{display:block;font-size:35px;-webkit-letter-spacing:0.6em;-moz-letter-spacing:0.6em;-ms-letter-spacing:0.6em;letter-spacing:0.6em;text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNFFnQixBQUdzQixBQUtHLGFBSmxCLENBS21CLGVBQ00scUdBQ0gsa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgQW1wIGZyb20gXCJyZWFjdC1hbXBodG1sXCI7XG5cbmltcG9ydCB7IEFtcEF1dGhvckNvbXBvbmVudCwgQXV0aG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vQXV0aG9yXCI7XG5cbmNvbnN0IEFtcFRpdGxlU2VjdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCA2NXB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm9Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW46IDMwcHggYXV0byAwO1xuICAgIG1heC13aWR0aDogNzQwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm8gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWF4LXdpZHRoOiA1NTJweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgQW1wVGl0bGVUZXh0ID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDU2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBTdWJ0aXRsZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBDb3ZlckltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBvcmRlcjogLTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEFtcEltZyA9IHN0eWxlZChBbXAuQW1wSW1nKWBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IEFtcERpdmlkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBub25lO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZVNlY3Rpb24gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlX3VybCwgZGF0ZV9hZGRlZCwgdXNlciB9KSA9PiAoXG4gIDxBbXBUaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICAgPEFtcFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgIDxBbXBUaXRsZUluZm8+XG4gICAgICAgIDxBbXBUaXRsZVRleHQ+e3RpdGxlfTwvQW1wVGl0bGVUZXh0PlxuICAgICAgICA8QW1wU3VidGl0bGU+e3N1YnRpdGxlIHx8IFwiSGVscCB1cyB3cml0ZSB0aGlzIGFydGljbGUhXCJ9PC9BbXBTdWJ0aXRsZT5cblxuICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICA8QW1wQXV0aG9yQ29tcG9uZW50XG4gICAgICAgICAgICBkYXRlX2FkZGVkPXtkYXRlX2FkZGVkfVxuICAgICAgICAgICAgaW1hZ2U9e3VzZXIuaW1hZ2V9XG4gICAgICAgICAgICBuYW1lPXt1c2VyLm5hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgPEFtcERpdmlkZXI+Li4uPC9BbXBEaXZpZGVyPlxuICAgICAgPC9BbXBUaXRsZUluZm8+XG4gICAgPC9BbXBUaXRsZUluZm9Db250YWluZXI+XG4gICAgPEFtcENvdmVySW1hZ2VDb250YWluZXI+XG4gICAgICA8U3R5bGVkQW1wSW1nXG4gICAgICAgIHNwZWNOYW1lPVwiZGVmYXVsdFwiXG4gICAgICAgIHNyYz17aW1hZ2VfdXJsIHx8IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9TbVBZQjYwLnBuZ1wifVxuICAgICAgICB3aWR0aD1cIjEyMDBcIlxuICAgICAgICBoZWlnaHQ9XCI0MDBcIlxuICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgYWx0PVwiQU1QXCJcbiAgICAgIC8+XG4gICAgPC9BbXBDb3ZlckltYWdlQ29udGFpbmVyPlxuICA8L0FtcFRpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbik7XG5cbmNvbnN0IFRpdGxlU2VjdGlvbkNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1zZWN0aW9uXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS1zZWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luOiAwIDY1cHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAudGl0bGUtc2VjdGlvbiB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgVGl0bGVJbmZvQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWluZm8tY29udGFpbmVyXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS1pbmZvLWNvbnRhaW5lciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLWluZm8tY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46IDMwcHggYXV0byAwO1xuICAgICAgICAgIG1heC13aWR0aDogNzQwcHg7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlSW5mbyA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1pbmZvXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS1pbmZvIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1heC13aWR0aDogNTUycHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAudGl0bGUtaW5mbyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgVGl0bGVUZXh0ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXRleHRcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnRpdGxlLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDU2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAudGl0bGUtdGV4dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFN1YnRpdGxlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBDb3ZlckltYWdlQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyLWltYWdlLWNvbnRhaW5lclwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY292ZXItaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5jb3Zlci1pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIG9yZGVyOiAtMTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBEaXZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXJcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmRpdmlkZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLmRpdmlkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC42ZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlU2VjdGlvbiA9ICh7IHRpdGxlLCBzdWJ0aXRsZSwgaW1hZ2VfdXJsLCBkYXRlX2FkZGVkLCB1c2VyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VGl0bGVTZWN0aW9uQ29udGFpbmVyPlxuICAgICAgPFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgICAgPFRpdGxlSW5mbz5cbiAgICAgICAgICA8VGl0bGVUZXh0Pnt0aXRsZX08L1RpdGxlVGV4dD5cbiAgICAgICAgICA8U3VidGl0bGU+e3N1YnRpdGxlIHx8IFwiSGVscCB1cyB3cml0ZSB0aGlzIGFydGljbGUhXCJ9PC9TdWJ0aXRsZT5cblxuICAgICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgICAgPEF1dGhvckNvbXBvbmVudFxuICAgICAgICAgICAgICBkYXRlX2FkZGVkPXtkYXRlX2FkZGVkfVxuICAgICAgICAgICAgICBpbWFnZT17dXNlci5pbWFnZX1cbiAgICAgICAgICAgICAgbmFtZT17dXNlci5uYW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIDxEaXZpZGVyPi4uLjwvRGl2aWRlcj5cbiAgICAgICAgPC9UaXRsZUluZm8+XG4gICAgICA8L1RpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgIDxDb3ZlckltYWdlQ29udGFpbmVyPlxuICAgICAgICA8aW1nIHNyYz17aW1hZ2VfdXJsfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0gLz5cbiAgICAgIDwvQ292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICA8L1RpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IEFtcFRpdGxlU2VjdGlvbiwgVGl0bGVTZWN0aW9uIH07XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/TitleSection.js */"
  }));
};

var TitleSection = function TitleSection(_ref9) {
  var title = _ref9.title,
      subtitle = _ref9.subtitle,
      image_url = _ref9.image_url,
      date_added = _ref9.date_added,
      user = _ref9.user;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleSectionContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleInfoContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleInfo, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleText, null, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Subtitle, null, subtitle || "Help us write this article!"), user ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Author__WEBPACK_IMPORTED_MODULE_4__["AuthorComponent"], {
    date_added: date_added,
    image: user.image,
    name: user.name
  }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Divider, null, "..."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CoverImageContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: image_url,
    style: {
      width: "100%"
    }
  })));
};



/***/ }),

/***/ "./constants/contradictions/1-2-corinthians.js":
/*!*****************************************************!*\
  !*** ./constants/contradictions/1-2-corinthians.js ***!
  \*****************************************************/
/*! exports provided: corinthians1, corinthians2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "corinthians1", function() { return corinthians1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "corinthians2", function() { return corinthians2; });
var corinthians1 = {
  book: "1 Corinthians",
  answers: [{
    bookVerses: "1:19",
    see: ["proverbs", "4:7"]
  }, {
    bookVerses: "8:5",
    see: ["genesis", "1:26"]
  }, {
    bookVerses: "14:33",
    see: ["genesis", "11:8-9"]
  }, {
    bookVerses: "15:3-5",
    see: ["matthew", "28:9"]
  }, {
    bookVerses: "15:3-5",
    question: "Did Paul receive the gospel from man?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "15:22",
    see: ["exodus", "20:5"]
  }, {
    bookVerses: "15:29",
    question: "What is baptism for the dead?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
var corinthians2 = {
  book: "2 Corinthians",
  answers: [{
    bookVerses: "5:8",
    question: "Is there a waiting period between dying and going to heaven?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};


/***/ }),

/***/ "./constants/contradictions/1-2-kings.js":
/*!***********************************************!*\
  !*** ./constants/contradictions/1-2-kings.js ***!
  \***********************************************/
/*! exports provided: kings1, kings2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kings1", function() { return kings1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kings2", function() { return kings2; });
var kings1 = {
  book: "1 Kings",
  answers: [{
    bookVerses: "4:26",
    question: "How many stalls of horses did Solomon have, 4,000 or 40,000?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "5:16",
    question: "How many supervisors did Solomon have, 3,300 or 3,600?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "7:26",
    question: "How many baths could be held, 2,000 or 3,000?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "22:22",
    question: "Was it wrong for God to send a lying spirit?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
var kings2 = {
  book: "2 Kings",
  answers: [{
    bookVerses: "2:11",
    see: ["genesis", "5:24"]
  }, {
    bookVerses: "2:23-24",
    question: "Was it immoral for God to kill 42 lads for saying Elisha was bald?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "8:26",
    question: "How old was Ahaziah when he began to rule?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "24:8",
    question: "How old was Jehoiachin when he became king?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "24:8 (2)",
    question: "How long did Jehoiachin rule over Jerusalem?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};


/***/ }),

/***/ "./constants/contradictions/acts.js":
/*!******************************************!*\
  !*** ./constants/contradictions/acts.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var acts = {
  book: "Acts",
  answers: [{
    bookVerses: "1:13-14",
    see: ["matthew", "10:2-4"]
  }, {
    bookVerses: "1:16-19",
    see: ["matthew", "27:3-8"]
  }, {
    bookVerses: "1:18",
    see: ["matthew", "27:7"]
  }, {
    bookVerses: "2:38",
    question: "Are we saved by faith or by baptism?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "5:29",
    question: "Should we obey God's law or human law?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "7:2",
    see: ["genesis", "17:1"]
  }, {
    bookVerses: "9:3-4",
    question: "When Paul saw the light, did everyone fall to the ground?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "9:7",
    question: "Did the men with Pal hear the voice?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "10:36",
    see: ["matthew", "10:34"]
  }, {
    bookVerses: "13:39",
    see: ["matthew", "12:31"]
  }, {
    bookVerses: "22:9",
    see: ["acts", "9:7"]
  }, {
    bookVerses: "22:16",
    see: ["acts", "2:38"]
  }, {
    bookVerses: "26:13-14",
    see: ["acts", "9:3-4"]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (acts);

/***/ }),

/***/ "./constants/contradictions/deuteronomy.js":
/*!*************************************************!*\
  !*** ./constants/contradictions/deuteronomy.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var deuteronomy = {
  book: "Deuteronomy",
  answers: [{
    bookVerses: "2:32-33",
    see: ["numbers", "31:15-18"]
  }, {
    bookVerses: "5:8",
    see: ["exodus", "20:4-5"]
  }, {
    bookVerses: "5:9",
    see: ["exodus", "20:5"]
  }, {
    bookVerses: "5:12",
    see: ["exodus", "20:8"]
  }, {
    bookVerses: "6:4",
    see: ["genesis", "1:26"]
  }, {
    bookVerses: "17:1",
    question: "Why did God only accept animals without a blemish for sacrifices?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "21:18-21",
    question: "Was it immoral for God to command the stoning of a rebellious son?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "22:5",
    question: "Is it wrong for a man to wear women's clothing, and vice versa?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "22:13-21",
    question: "Was it immoral for God to command the stoning of a woman who was not a virgin?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "24:16",
    see: ["exodus", "20:5"]
  }, {
    bookVerses: "27:15",
    see: ["exodus", "20:4-5"]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (deuteronomy);

/***/ }),

/***/ "./constants/contradictions/exodus.js":
/*!********************************************!*\
  !*** ./constants/contradictions/exodus.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var exodus = {
  book: "Exodus",
  answers: [{
    bookVerses: "6:2-3",
    see: ["genesis", "17:1"]
  }, {
    bookVerses: "9:1-7",
    question: "Did all of Egypt's livestock die?",
    quickAnswer: "<p>There are at least five possible explanations:</p>\n  \n      <ol>\n        <li>\"All\" may not refer to every single animal (see Matthew 3:5, Mark 1:5).</li>\n        <li>The Egyptians gained livestock between verses 1-7 and verses 18-21.</li>\n        <li>Only livestock \"in the field\" were killed, so some livestock survived.</li>\n        <li>Verses 1-7 do not mention one important animal: the goat. It is possible that goats were not killed in verses 1-7.</li>\n        <li>In verses 19-20, those who \"feared the word of the Lord\" were warned about the coming plague. Perhaps some were warned during the plague in verses 1-7 also.</li>\n      </ol>",
    fullPost: "/answers/did-all-of-egypts-livestock-die",
    allPassages: [{
      heading: "All of the livestock died",
      passages: [{
        passage: "Exodus 9:1-7",
        text: "9 Then the Lord said to Moses, \u201CGo in to Pharaoh and say to him, \u2018Thus says the Lord, the God of the Hebrews, \u201CLet my people go, that they may serve me. 2 For if you refuse to let them go and still hold them, 3 behold, the hand of the Lord will fall with a very severe plague upon your livestock that are in the field, the horses, the donkeys, the camels, the herds, and the flocks. 4 But the Lord will make a distinction between the livestock of Israel and the livestock of Egypt, so that nothing of all that belongs to the people of Israel shall die.\u201D 5 And the Lord set a time, saying, \u201CTomorrow the Lord will do this thing in the land.\u201D 6 And the next day the Lord did this thing. <strong>All the livestock of the Egyptians died</strong>, but not one of the livestock of the people of Israel died. 7 And Pharaoh sent, and behold, not one of the livestock of Israel was dead. But the heart of Pharaoh was hardened, and he did not let the people go."
      }]
    }, {
      heading: "Not all of the livestock died",
      passages: [{
        passage: "Exodus 9:18-21",
        text: "18 Behold, about this time tomorrow I will cause very heavy hail to fall, such as never has been in Egypt from the day it was founded until now. 19 <strong>Now therefore send, get your livestock and all that you have in the field into safe shelter, for every man and beast that is in the field and is not brought home will die when the hail falls on them</strong>.\u201D 20 Then whoever feared the word of the Lord among the servants of Pharaoh hurried his slaves and his livestock into the houses, 21 but whoever did not pay attention to the word of the Lord left his slaves and his livestock in the field."
      }]
    }]
  }, {
    bookVerses: "9:18-21",
    see: ["exodus", "9:1-7"]
  }, {
    bookVerses: "15:3",
    question: "Is God a God of peace or a God of war?",
    quickAnswer: "<p>God's ultimate plan is peace, but there is a spiritual war that must be fought before full peace arrives. Thus, God is both a God of peace and a God of war. There is simply no contradiction between these passages.</p>",
    fullPost: "/answers/is-god-god-peace-war",
    allPassages: [{
      heading: "God is a God of peace",
      passages: [{
        passage: "Isaiah 2:4",
        text: "He shall judge between the nations, and shall decide disputes for many peoples; and they shall beat their swords into plowshares, and their spears into pruning hooks; neither shall they learn war anymore."
      }, {
        passage: "Romans 15:33",
        text: "May the God of peace be with you all. Amen."
      }]
    }, {
      heading: "God is a God of war",
      passages: [{
        passage: "Exodus 15:3",
        text: "The Lord is a man of war; the Lord is his name."
      }, {
        passage: "Joel 3:9-10",
        text: "Proclaim this among the nations: Consecrate for war; stir up the mighty men. Let all the men of war draw near; let them come up. Beat your plowshares into swords, and your pruning hooks into spears; let the weak say, \"I am a warrior.\""
      }]
    }]
  }, {
    bookVerses: "20:4-5",
    question: "Is it a sin to make graven images?",
    quickAnswer: "<p>The types of graven, or \"carved,\" images that are sinful to make are ones that are made to be worshipped. The golden cherubin were not made to be worshipped, so they are not \"images.\"</p>",
    fullPost: "/answers/is-it-sin-make-graven-images",
    allPassages: [{
      heading: "Should not make graven images",
      passages: [{
        passage: "Exodus 20:4-5",
        text: "4 \u201CYou shall not make for yourself a carved image, or any likeness of anything that is in heaven above, or that is in the earth beneath, or that is in the water under the earth. 5 You shall not bow down to them or serve them, for I the Lord your God am a jealous God, visiting the iniquity of the fathers on the children to the third and the fourth generation of those who hate me."
      }, {
        passage: "Leviticus 26:1",
        text: "\"You shall not make idols for yourselves or erect an image or pillar, and you shall not set up a figured stone in your land to bow down to it, for I am the Lord your God.\""
      }, {
        passage: "Deuteronomy 5:8",
        text: "\"You shall not make for yourself a carved image, or any likeness of anything that is in heaven above, or that is on the earth beneath, or that is in the water under the earth.\""
      }, {
        passage: "Deuteronomy 27:15",
        text: "\"\u2018Cursed be the man who makes a carved or cast metal image, an abomination to the Lord, a thing made by the hands of a craftsman, and sets it up in secret.\u2019 And all the people shall answer and say, \u2018Amen.\u2019\""
      }]
    }, {
      heading: "Make graven images",
      passages: [{
        passage: "Exodus 25:18",
        text: "And you shall make two cherubim of gold; of hammered work shall you make them, on the two ends of the mercy seat."
      }, {
        passage: "Exodus 37:7-8",
        text: "7 And he made two cherubim of gold. He made them of hammered work on the two ends of the mercy seat, 8 one cherub on the one end, and one cherub on the other end. Of one piece with the mercy seat he made the cherubim on its two ends."
      }]
    }]
  }, {
    bookVerses: "20:5",
    question: "Do sons bear the sins of their fathers?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "20:8",
    question: "Do we still need to keep the Sabbath?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "20:12",
    question: "Should we call anyone \"father\" besides God?",
    quickAnswer: "<p>We should not attribute to anyone authority that only belongs to God. There is a difference between calling our earthly parent \"father\" and giving excessive reverence to a spiritual leader.</p>",
    fullPost: "/answers/should-we-call-anyone-father-besides-god",
    allPassages: [{
      heading: "Call someone \"father\"",
      passages: [{
        passage: "Exodus 20:12",
        text: "\"Honor your father and your mother, that your days may be long in the land that the Lord your God is giving you.\""
      }]
    }, {
      heading: "Call no one \"father\"",
      passages: [{
        passage: "Matthew 23:8-10",
        text: "8 But you are not to be called rabbi, for you have one teacher, and you are all brothers. 9 And call no man your father on earth, for you have one Father, who is in heaven. 10 Neither be called instructors, for you have one instructor, the Christ."
      }]
    }]
  }, {
    bookVerses: "20:24",
    question: "Did God speak about sacrifices at the Exodus?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "21:20-21",
    question: "Was it wrong for slaves to be property in the Old Testament?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "23:12",
    see: ["exodus", "20:8"]
  }, {
    bookVerses: "24:9-11",
    see: ["genesis", "17:1"]
  }, {
    bookVerses: "25:18",
    see: ["exodus", "20:4-5"]
  }, {
    bookVerses: "31:15",
    see: ["exodus", "20:8"]
  }, {
    bookVerses: "32:14",
    see: ["genesis", "6:6-7"]
  }, {
    bookVerses: "33:20",
    see: ["genesis", "17:1"]
  }, {
    bookVerses: "34:6-7",
    see: ["exodus", "20:5"]
  }, {
    bookVerses: "37:7-8",
    see: ["exodus", "20:4-5"]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (exodus);

/***/ }),

/***/ "./constants/contradictions/galatians-titus.js":
/*!*****************************************************!*\
  !*** ./constants/contradictions/galatians-titus.js ***!
  \*****************************************************/
/*! exports provided: galatians, ephesians, colossians, thessalonians1, thessalonians2, timothy1, titus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "galatians", function() { return galatians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ephesians", function() { return ephesians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colossians", function() { return colossians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thessalonians1", function() { return thessalonians1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thessalonians2", function() { return thessalonians2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timothy1", function() { return timothy1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titus", function() { return titus; });
var galatians = {
  book: "Galatians",
  answers: [{
    bookVerses: "1:11-12",
    see: ["1 corinthians", "15:3-5"]
  }, {
    bookVerses: "2:16",
    see: ["matthew", "19:16-21"]
  }, {
    bookVerses: "4:22",
    see: ["genesis", "22:2"]
  }, {
    bookVerses: "6:2, 5",
    question: "Do we bear our own burdens?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
var ephesians = {
  book: "Ephesians",
  answers: [{
    bookVerses: "2:8-9",
    see: ["matthew", "19:16-21"]
  }, {
    bookVerses: "2:8-9",
    see: ["acts", "2:38"]
  }, {
    bookVerses: "2:14-15",
    see: ["matthew", "5:17"]
  }]
};
var colossians = {
  book: "Colossians",
  answers: [{
    bookVerses: "1:15-17",
    see: ["isaiah", "44:24"]
  }, {
    bookVerses: "2:16",
    see: ["exodus", "20:8"]
  }]
};
var thessalonians1 = {
  book: "1 Thessalonians",
  answers: [{
    bookVerses: "4:16-17",
    see: ["2 corinthians", "5:8"]
  }]
};
var thessalonians2 = {
  book: "2 Thessalonians",
  answers: [{
    bookVerses: "2:11",
    question: "Was it wrong for God to send a deluding influence on people so they would not be saved?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
var timothy1 = {
  book: "1 Timothy",
  answers: [{
    bookVerses: "6:15-16",
    see: ["genesis", "17:1"]
  }]
};
var titus = {
  book: "Titus",
  answers: [{
    bookVerses: "1:2",
    see: ["1 kings", "22:22"]
  }, {
    bookVerses: "2:13-14",
    see: ["matthew", "12:31"]
  }]
};


/***/ }),

/***/ "./constants/contradictions/genesis.js":
/*!*********************************************!*\
  !*** ./constants/contradictions/genesis.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var genesis = {
  book: "Genesis",
  answers: [{
    bookVerses: "1&ndash;2",
    question: "Do Genesis 1 and 2 present contradictory creation accounts?",
    allPassages: [{
      passage: "Genesis 1",
      text: ["11 And God said, \u201C<strong>Let the earth sprout vegetation, plants yielding seed, and fruit trees bearing fruit in which is their seed, each according to its kind, on the earth...</strong>\u201D 13 And there was evening and there was morning, the third day.", "24 And God said, \u201C<strong>Let the earth bring forth living creatures according to their kinds\u2014livestock and creeping things and beasts of the earth according to their kinds...</strong>\u201D", "26 Then God said, \u201C<strong>Let us make man in our image, after our likeness.</strong>\u201D"]
    }, {
      passage: "Genesis 2",
      text: ["5 <strong>When no bush of the field was yet in the land and no small plant of the field had yet sprung up\u2014for the Lord God had not caused it to rain on the land, and there was no man to work the ground</strong>, 6 and a mist was going up from the land and was watering the whole face of the ground\u2014 7 <strong>then the Lord God formed the man of dust from the ground and breathed into his nostrils the breath of life, and the man became a living creature</strong>. 8 And the Lord God planted a garden in Eden, in the east, and there he put the man whom he had formed. 9 <strong>And out of the ground the Lord God made to spring up every tree that is pleasant to the sight and good for food</strong>. The tree of life was in the midst of the garden, and the tree of the knowledge of good and evil...", "18 Then the Lord God said, \u201CIt is not good that the man should be alone; I will make him a helper fit for him.\u201D 19 <strong>Now out of the ground the Lord God had formed every beast of the field and every bird of the heavens</strong> and brought them to the man to see what he would call them."]
    }]
  }, {
    bookVerses: "1:26",
    question: "Are there one or many Gods?",
    quickAnswer: '<p>The doctrine of the Trinity teaches that there is one God who exists in three persons. "God" and "person" are not the same thing, so there is no contradiction. The plural pronouns in Genesis could either be referring to the Trinity, or they could be a "royal we," which is sometimes used for monarchs.</p>',
    fullPost: "/answers/are-there-one-many-gods",
    allPassages: [{
      heading: "There is one God",
      passages: [{
        passage: "Deuteronomy 6:4",
        text: "4 “Hear, O Israel: The Lord our God, the Lord is one"
      }, {
        passage: "Isaiah 43:10",
        text: "10 \u201CYou are my witnesses,\u201D declares the Lord, \u201Cand my servant whom I have chosen, that you may know and believe me and understand that I am he. Before me no god was formed, nor shall there be any after me."
      }, {
        passage: "Isaiah 44:6",
        text: "6 Thus says the Lord, the King of Israel and his Redeemer, the Lord of hosts: \u201CI am the first and I am the last; besides me there is no god."
      }, {
        passage: "Isaiah 44:8",
        text: "8 Fear not, nor be afraid; have I not told you from of old and declared it? And you are my witnesses! Is there a God besides me? There is no Rock; I know not any.\u201D"
      }]
    }, {
      heading: "There are many Gods",
      passages: [{
        passage: "Genesis 1:26",
        text: "26 Then God said, \u201CLet us make man in our image, after our likeness. And let them have dominion over the fish of the sea and over the birds of the heavens and over the livestock and over all the earth and over every creeping thing that creeps on the earth.\u201D"
      }, {
        passage: "Genesis 3:22",
        text: "22 Then the Lord God said, \u201CBehold, the man has become like one of us in knowing good and evil. Now, lest he reach out his hand and take also of the tree of life and eat, and live forever\u2014\u201D"
      }, {
        passage: "Genesis 11:7",
        text: "7 Come, let us go down and there confuse their language, so that they may not understand one another's speech.\u201D"
      }, {
        passage: "1 Corinthians 8:5",
        text: "5 For although there may be so-called gods in heaven or on earth\u2014as indeed there are many \u201Cgods\u201D and many \u201Clords\u201D\u2014"
      }, {
        passage: "1 John 5:8",
        text: "8 the Spirit and the water and the blood; and these three agree."
      }]
    }]
  }, {
    bookVerses: "3:9",
    question: "Does God asking Adam, \"Where are you?\", mean that God doesn't know everything?",
    quickAnswer: "<p>God simply asked a question that He already knew the answer to. This is often done to teach something. So, God asking adam, \"Where are you,\" does not mean that God is not omniscient.</p>",
    fullPost: "/answers/genesis-3-9-gods-omniscience",
    allPassages: [{
      passage: "Genesis 3:9",
      text: "9 But the Lord God called to the man and said to him, \u201CWhere are you?\u201D"
    }]
  }, {
    bookVerses: "3:16",
    question: "Was it wrong for God to multiply the pain of women in childbearing?",
    quickAnswer: "<ol>\n      <li>Adam and Eve sinned, and one consequence of sin is pain.</li>\n      <li>Adam, as the \"head\" of all mankind, represented the entire human race in his sin. This is the doctrine of original sin.</li>\n      <li>We have no grounds upon which to call the doctrine of original sin unfair.</li>\n    </ol>",
    fullPost: "/answers/genesis-3-16-pain-women-child-bearing",
    allPassages: [{
      passage: "Genesis 3:16",
      text: "16 To the woman he said, \u201CI will surely multiply your pain in childbearing; in pain you shall bring forth children. Your desire shall be contrary to[a] your husband, but he shall rule over you.\u201D"
    }]
  }, {
    bookVerses: "3:22",
    see: ["genesis", "1:26"]
  }, {
    bookVerses: "4:17",
    question: "Where did Cain get his wife?",
    quickAnswer: "<p>Cain's wife was one of his sisters. God did not prohibit sexual relations with one's close relative until Leviticus 18:6. One purpose of incest laws was to protect people from birth defects, but Cain lived during an early time when the genetic pool was still very pure.</p>",
    fullPost: "/answers/genesis-4-17-cain-wife",
    allPassages: [{
      passage: "Genesis 4:16-17",
      text: "Then Cain went away from the presence of the Lord and settled in the land of Nod, east of Eden. Cain knew his wife, and she conceived and bore Enoch. When he built a city, he called the name of the city after the name of his son, Enoch."
    }]
  }, {
    bookVerses: "5:1-31",
    question: "Did people live hundreds of years in Genesis?",
    quickAnswer: "<p>Adam, as the first human created and as one created without sin, likely had such an uncorrupted body and genetic constitution that he, and his descendants after him for some time, was able to live hundreds of years.</p>",
    fullPost: "/answers/did-people-live-hundreds-years-genesis-5",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "5:24",
    question: "Did anyone ascend to heaven before Jesus?",
    quickAnswer: "<p>The \"heaven\" that Enoch and Elijah were taken up into is different from the \"heaven\" that Jesus ascended to. Believers will not experience the fullness of heaven until Jesus returns and they receive a resurrected body.</p>",
    fullPost: "/answers/did-anyone-ascend-heaven-before-jesus",
    allPassages: [{
      heading: "Enoch and Elijah ascended to heaven",
      passages: [{
        passage: "Genesis 5:24",
        text: "Enoch walked with God, and he was not,[a] for God took him."
      }, {
        passage: "2 Kings 2:11",
        text: "And as they still went on and talked, behold, chariots of fire and horses of fire separated the two of them. And Elijah went up by a whirlwind into heaven."
      }, {
        passage: "Hebrews 11:5",
        text: "By faith Enoch was taken up so that he should not see death, and he was not found, because God had taken him. Now before he was taken he was commended as having pleased God."
      }]
    }, {
      heading: "Only Jesus has ascended to heaven",
      passages: [{
        passage: "John 3:13",
        text: "No one has ascended into heaven except he who descended from heaven, the Son of Man."
      }]
    }]
  }, {
    bookVerses: "6:2-5",
    question: "Who were the \"sons of God\" in Genesis 6?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "6:6-7",
    question: "Does God change His mind?",
    quickAnswer: "<p>No. When it appears that God is changing His mind in the Bible, the Bible is utilizing anthropomorphism, or the attribution of human traits, emotions, or intentions to non-human entities. This is done to help explain God in language we can more easily understand.</p>",
    fullPost: "/answers/does-god-change-his-mind",
    allPassages: [{
      heading: "God does not change",
      passages: [{
        passage: "Malachi 3:6",
        text: "For I the Lord do not change; therefore you, O children of Jacob, are not consumed."
      }]
    }, {
      heading: "God changes His mind",
      passages: [{
        passage: "Genesis 6:6-7",
        text: "And the Lord regretted that he had made man on the earth, and it grieved him to his heart. So the Lord said, \"I will blot out man whom I have created from the face of the land, man and animals and creeping things and birds of the heavens, for I am sorry that I have made them.\""
      }, {
        passage: "Exodus 32:14",
        text: "And the Lord relented from the disaster that he had spoken of bringing on his people."
      }, {
        passage: "Jonah 3:10",
        text: "When God saw what they did, how they turned from their evil way, God relented of the disaster that he had said he would do to them, and he did not do it."
      }]
    }]
  }, {
    bookVerses: "6:19-20",
    question: "How many of each kind did Noah bring into the ark, two, seven, or fourteen?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "7:1",
    question: "Is anyone righteous/blameless, or have all sinned?",
    quickAnswer: "<p>People who were described as \"righteous\" or \"blameless\" in the Bible, such as Job, Noah, Zacharias, and Elizabeth, were still sinners who needed to be saved by Jesus' atoning work. They were believers who trusted in the coming messiah for their salvation, and who were faithful in obeying God's commandments.</p>",
    fullPost: "/answers/is-anyone-righteous-have-all-sinned",
    allPassages: [{
      heading: "All have sinned",
      passages: [{
        passage: "Romans 3:23",
        text: "for all have sinned and fall short of the glory of God"
      }, {
        passage: "Romans 3:10",
        text: "None is righteous, no, not one"
      }, {
        passage: "Psalm 14:3",
        text: "They have all turned aside; together they have become corrupt; there is none who does good, not even one."
      }]
    }, {
      heading: "Some are righteous or blameless",
      passages: [{
        passage: "Job 1:1",
        text: "There was a man in the land of Uz whose name was Job, and that man was blameless and upright, one who feared God and turned away from evil."
      }, {
        passage: "Genesis 7:1",
        text: "Then the Lord said to Noah, \u201CGo into the ark, you and all your household, for I have seen that you are righteous before me in this generation."
      }, {
        passage: "Luke 1:6",
        text: "And they were both righteous before God, walking blamelessly in all the commandments and statutes of the Lord."
      }]
    }]
  }, {
    bookVerses: "7:2-3",
    see: ["genesis", "6:19-20"]
  }, {
    bookVerses: "11:8-9",
    question: "If God is not the author of confusion, then what about the Tower of Babel?",
    quickAnswer: "<p>The two passages are completely different contexts. 1 Corinthians 14:33 is referring to God not being the author of confusion in terms of order within the church, and Genesis 11:7-9 is about God creating confusion as judgment for the people's pride and sin. The phrase \"author of confusion\" in 1 Corinthians 14:33 is restricted to a particular context that does not apply to Genesis 11:7-9.</p>",
    fullPost: "/answers/god-author-confusion-babel",
    allPassages: [{
      heading: "God is not the author of confusion",
      passages: [{
        passage: "1 Corinthians 14:33",
        text: "For God is not a God of confusion but of peace..."
      }]
    }, {
      heading: "God creates confusion at the Tower of Babel",
      passages: [{
        passage: "Genesis 11:7-9",
        text: "\"Come, let us go down and there confuse their language, so that they may not understand one another's speech.\" So the Lord dispersed them from there over the face of all the earth, and they left off building the city. Therefore its name was called Babel, because there the Lord confused the language of all the earth. And from there the Lord dispersed them over the face of all the earth."
      }]
    }]
  }, {
    bookVerses: "17:1",
    question: "Has anyone seen God?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "18:1",
    see: ["genesis", "17:1"]
  }, {
    bookVerses: "19:8",
    question: "Was Lot righteous? Wasn't it wrong for Lot to give his daughters to the crowd of men?",
    quickAnswer: "<p>There is no contradiction because two things can be true at the same time: 1) Lot sinned in giving his daughters to the crowd of men (Genesis 19:8), and 2) generally speaking, Lot was overall a righteous man (2 Peter 2:7).</p>",
    fullPost: "/answers/was-lot-righteous-gave-daughters-to-crowd-men",
    allPassages: [{
      heading: "Lot gives his daughters to the crowd of men",
      passages: [{
        passage: "Genesis 19:8",
        text: "Behold, I have two daughters who have not known any man. Let me bring them out to you, and do to them as you please. Only do nothing to these men, for they have come under the shelter of my roof."
      }]
    }, {
      heading: "Lot is righteous",
      passages: [{
        passage: "2 Peter 2:7",
        text: "...and if he rescued righteous Lot, greatly distressed by the sensual conduct of the wicked..."
      }]
    }]
  }, {
    bookVerses: "22:1",
    question: "Does God tempt people?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "22:1-2",
    question: "Was it wrong for God to command Abraham to kill his son Isaac?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "22:2",
    question: "Did Abraham have one son or two sons?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "37:28",
    question: "Who sold Joseph, the Midianites or the Ishmaelites?",
    quickAnswer: "<p>In these passages, Ishmaelites and Midianites are referring to the same group of people, so there is no contradiction.</p>",
    fullPost: "/answers/who-bought-joseph-ishmaelites-midianites",
    allPassages: [{
      heading: "The Ishmaelites bought Joseph",
      passages: [{
        passage: "Genesis 37:28",
        text: "Then Midianite traders passed by. And they drew Joseph up and lifted him out of the pit, and sold him to the Ishmaelites for twenty shekels of silver. They took Joseph to Egypt."
      }, {
        passage: "Genesis 39:1",
        text: "Now Joseph had been brought down to Egypt, and Potiphar, an officer of Pharaoh, the captain of the guard, an Egyptian, had bought him from the Ishmaelites who had brought him down there."
      }]
    }, {
      heading: "The Midianites bought Joseph",
      passages: [{
        passage: "Genesis 37:36",
        text: "Meanwhile the Midianites had sold him in Egypt to Potiphar, an officer of Pharaoh, the captain of the guard."
      }]
    }]
  }, {
    bookVerses: "37:36",
    see: ["genesis", "37:28"]
  }, {
    bookVerses: "38:9",
    question: "Was it wrong for God to kill a man for \"wasting [his] semen on the ground\"?",
    quickAnswer: "<p>All sin deserves death and hell, so God is doing nothing wrong when He puts Onan to death for refusing to obey His command to further the line of his brother Er, who, we might note, was also put to death by God for his wickedness.</p>\n  \n      <p>Furthermore, Onan's sin would have been considered much more serious in Israel's culture than what we might think of his sin today.</p>",
    fullPost: "/answers/why-did-god-kill-man-spilling-seed",
    allPassages: [{
      passage: "Genesis 38:6-10",
      text: "6 And Judah took a wife for Er his firstborn, and her name was Tamar. 7 But Er, Judah's firstborn, was wicked in the sight of the Lord, and the Lord put him to death. 8 Then Judah said to Onan, \u201CGo in to your brother's wife and perform the duty of a brother-in-law to her, and raise up offspring for your brother.\u201D 9 But Onan knew that the offspring would not be his. So whenever he went in to his brother's wife he would waste the semen on the ground, so as not to give offspring to his brother. 10 And what he did was wicked in the sight of the Lord, and he put him to death also."
    }]
  }, {
    bookVerses: "39:1",
    see: ["genesis", "37:28"]
  }, {
    bookVerses: "47:31",
    question: "Did Jacob worship at the head of the bed or leaning on a staff?",
    quickAnswer: "<p>Both statements are true at the same time. At the head of the bed, Jacob leaned on his staff and worshipped. There is simply no contradiction here.</p>",
    fullPost: "/answers/did-jacob-worship-head-bed-or-leaning-staff",
    allPassages: [{
      heading: "Jacob worshipped at the head of the bed",
      passages: [{
        passage: "Genesis 47:31",
        text: "And he said, \u201CSwear to me\u201D; and he swore to him. Then Israel bowed himself upon the head of his bed."
      }]
    }, {
      heading: "Jacob worshipped leaning on a staff",
      passages: [{
        passage: "Hebrews 11:21",
        text: "By faith Jacob, when dying, blessed each of the sons of Joseph, bowing in worship over the head of his staff."
      }]
    }]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (genesis);

/***/ }),

/***/ "./constants/contradictions/hebrews-jude.js":
/*!**************************************************!*\
  !*** ./constants/contradictions/hebrews-jude.js ***!
  \**************************************************/
/*! exports provided: hebrews, james, peter1, peter2, john1, jude */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hebrews", function() { return hebrews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "james", function() { return james; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "peter1", function() { return peter1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "peter2", function() { return peter2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "john1", function() { return john1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jude", function() { return jude; });
var hebrews = {
  book: "Hebrews",
  answers: [{
    bookVerses: "11:5",
    see: ["genesis", "5:24"]
  }, {
    bookVerses: "11:17",
    see: ["genesis", "22:2"]
  }, {
    bookVerses: "11:21",
    see: ["genesis", "47:31"]
  }]
};
var james = {
  book: "James",
  answers: [{
    bookVerses: "1:13",
    see: ["genesis", "22:1"]
  }, {
    bookVerses: "2:24",
    see: ["matthew", "19:16-21"]
  }]
};
var peter1 = {
  book: "1 Peter",
  answers: [{
    bookVerses: "2:12",
    see: ["matthew", "5:16"]
  }, {
    bookVerses: "2:13",
    see: ["acts", "5:29"]
  }, {
    bookVerses: "2:16",
    see: ["matthew", "19:16-21"]
  }, {
    bookVerses: "3:21",
    see: ["acts", "2:38"]
  }]
};
var peter2 = {
  book: "2 Peter",
  answers: [{
    bookVerses: "3:10",
    see: ["psalms", "104:5"]
  }]
};
var john1 = {
  book: "1 John",
  answers: [{
    bookVerses: "1:9",
    see: ["matthew", "12:31"]
  }, {
    bookVerses: "3:9",
    question: "Can a true Christian sin?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "3:13",
    see: ["genesis", "5:24"]
  }, {
    bookVerses: "3:15",
    see: ["luke", "14:26"]
  }, {
    bookVerses: "4:7-8",
    see: ["psalms", "5:5"]
  }, {
    bookVerses: "5:7-8",
    see: ["genesis", "1:26"]
  }, {
    bookVerses: "5:18",
    see: ["1 john", "3:9"]
  }]
};
var jude = {
  book: "Jude",
  answers: [{
    bookVerses: "14",
    question: "Should the book of Enoch be in the Bible, since Jude quotes it?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};


/***/ }),

/***/ "./constants/contradictions/index.js":
/*!*******************************************!*\
  !*** ./constants/contradictions/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _genesis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./genesis */ "./constants/contradictions/genesis.js");
/* harmony import */ var _exodus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exodus */ "./constants/contradictions/exodus.js");
/* harmony import */ var _leviticus_numbers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leviticus-numbers */ "./constants/contradictions/leviticus-numbers.js");
/* harmony import */ var _deuteronomy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deuteronomy */ "./constants/contradictions/deuteronomy.js");
/* harmony import */ var _judges_2_samuel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./judges-2-samuel */ "./constants/contradictions/judges-2-samuel.js");
/* harmony import */ var _1_2_kings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./1-2-kings */ "./constants/contradictions/1-2-kings.js");
/* harmony import */ var _job_song_solomon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./job-song-solomon */ "./constants/contradictions/job-song-solomon.js");
/* harmony import */ var _isaiah__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./isaiah */ "./constants/contradictions/isaiah.js");
/* harmony import */ var _jeremiah_malachi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./jeremiah-malachi */ "./constants/contradictions/jeremiah-malachi.js");
/* harmony import */ var _matthew__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./matthew */ "./constants/contradictions/matthew.js");
/* harmony import */ var _mark__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mark */ "./constants/contradictions/mark.js");
/* harmony import */ var _luke__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./luke */ "./constants/contradictions/luke.js");
/* harmony import */ var _john__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./john */ "./constants/contradictions/john.js");
/* harmony import */ var _acts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./acts */ "./constants/contradictions/acts.js");
/* harmony import */ var _romans__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./romans */ "./constants/contradictions/romans.js");
/* harmony import */ var _1_2_corinthians__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./1-2-corinthians */ "./constants/contradictions/1-2-corinthians.js");
/* harmony import */ var _galatians_titus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./galatians-titus */ "./constants/contradictions/galatians-titus.js");
/* harmony import */ var _hebrews_jude__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hebrews-jude */ "./constants/contradictions/hebrews-jude.js");


















var CONTRADICTIONS = [_genesis__WEBPACK_IMPORTED_MODULE_0__["default"], _exodus__WEBPACK_IMPORTED_MODULE_1__["default"], _leviticus_numbers__WEBPACK_IMPORTED_MODULE_2__["leviticus"], _leviticus_numbers__WEBPACK_IMPORTED_MODULE_2__["numbers"], _deuteronomy__WEBPACK_IMPORTED_MODULE_3__["default"], _judges_2_samuel__WEBPACK_IMPORTED_MODULE_4__["judges"], _judges_2_samuel__WEBPACK_IMPORTED_MODULE_4__["samuel1"], _judges_2_samuel__WEBPACK_IMPORTED_MODULE_4__["samuel2"], _1_2_kings__WEBPACK_IMPORTED_MODULE_5__["kings1"], _1_2_kings__WEBPACK_IMPORTED_MODULE_5__["kings2"], _job_song_solomon__WEBPACK_IMPORTED_MODULE_6__["job"], _job_song_solomon__WEBPACK_IMPORTED_MODULE_6__["psalms"], _job_song_solomon__WEBPACK_IMPORTED_MODULE_6__["proverbs"], _job_song_solomon__WEBPACK_IMPORTED_MODULE_6__["ecclesiastes"], _job_song_solomon__WEBPACK_IMPORTED_MODULE_6__["songOfSolomon"], _isaiah__WEBPACK_IMPORTED_MODULE_7__["default"], _jeremiah_malachi__WEBPACK_IMPORTED_MODULE_8__["jeremiah"], _jeremiah_malachi__WEBPACK_IMPORTED_MODULE_8__["lamentations"], _jeremiah_malachi__WEBPACK_IMPORTED_MODULE_8__["ezekiel"], _jeremiah_malachi__WEBPACK_IMPORTED_MODULE_8__["hosea"], _jeremiah_malachi__WEBPACK_IMPORTED_MODULE_8__["joel"], _jeremiah_malachi__WEBPACK_IMPORTED_MODULE_8__["jonah"], _jeremiah_malachi__WEBPACK_IMPORTED_MODULE_8__["zechariah"], _jeremiah_malachi__WEBPACK_IMPORTED_MODULE_8__["malachi"], _matthew__WEBPACK_IMPORTED_MODULE_9__["default"], _mark__WEBPACK_IMPORTED_MODULE_10__["default"], _luke__WEBPACK_IMPORTED_MODULE_11__["default"], _john__WEBPACK_IMPORTED_MODULE_12__["default"], _acts__WEBPACK_IMPORTED_MODULE_13__["default"], _romans__WEBPACK_IMPORTED_MODULE_14__["default"], _1_2_corinthians__WEBPACK_IMPORTED_MODULE_15__["corinthians1"], _1_2_corinthians__WEBPACK_IMPORTED_MODULE_15__["corinthians2"], _galatians_titus__WEBPACK_IMPORTED_MODULE_16__["galatians"], _galatians_titus__WEBPACK_IMPORTED_MODULE_16__["ephesians"], _galatians_titus__WEBPACK_IMPORTED_MODULE_16__["colossians"], _galatians_titus__WEBPACK_IMPORTED_MODULE_16__["thessalonians1"], _galatians_titus__WEBPACK_IMPORTED_MODULE_16__["thessalonians2"], _galatians_titus__WEBPACK_IMPORTED_MODULE_16__["timothy1"], _galatians_titus__WEBPACK_IMPORTED_MODULE_16__["titus"], _hebrews_jude__WEBPACK_IMPORTED_MODULE_17__["hebrews"], _hebrews_jude__WEBPACK_IMPORTED_MODULE_17__["james"], _hebrews_jude__WEBPACK_IMPORTED_MODULE_17__["peter1"], _hebrews_jude__WEBPACK_IMPORTED_MODULE_17__["peter2"], _hebrews_jude__WEBPACK_IMPORTED_MODULE_17__["john1"], _hebrews_jude__WEBPACK_IMPORTED_MODULE_17__["jude"]];
/* harmony default export */ __webpack_exports__["default"] = (CONTRADICTIONS);

/***/ }),

/***/ "./constants/contradictions/isaiah.js":
/*!********************************************!*\
  !*** ./constants/contradictions/isaiah.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isaiah = {
  book: "Isaiah",
  answers: [{
    bookVerses: "2:4",
    see: ["exodus", "15:3"]
  }, {
    bookVerses: "7:14",
    question: "Is Isaiah 7:14 not a prophecy because the Hebrew translation is maiden, not virgin?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "13:15-16",
    question: "Was it wrong for the Bible to say that houses will be plundered and wives ravished?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "43:10",
    see: ["genesis", "1:26"]
  }, {
    bookVerses: "44:6",
    see: ["genesis", "1:26"]
  }, {
    bookVerses: "44:8",
    see: ["genesis", "1:26"]
  }, {
    bookVerses: "44:24",
    question: "Is God or Jesus the creator of all things?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "45:7",
    see: ["psalms", "145:9"]
  }, {
    bookVerses: "45:7",
    question: "Does God create evil?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "65:17",
    see: ["psalms", "104:5"]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (isaiah);

/***/ }),

/***/ "./constants/contradictions/jeremiah-malachi.js":
/*!******************************************************!*\
  !*** ./constants/contradictions/jeremiah-malachi.js ***!
  \******************************************************/
/*! exports provided: jeremiah, lamentations, ezekiel, hosea, joel, jonah, zechariah, malachi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jeremiah", function() { return jeremiah; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lamentations", function() { return lamentations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ezekiel", function() { return ezekiel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hosea", function() { return hosea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joel", function() { return joel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jonah", function() { return jonah; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zechariah", function() { return zechariah; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "malachi", function() { return malachi; });
var jeremiah = {
  book: "Jeremiah",
  answers: [{
    bookVerses: "7:22",
    see: ["exodus", "20:24"]
  }, {
    bookVerses: "18:11",
    see: ["psalms", "145:9"]
  }, {
    bookVerses: "22:28-30",
    question: "Did Coniah have children",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "33:27",
    see: ["judges", "1:19"]
  }]
};
var lamentations = {
  book: "Lamentations",
  answers: [{
    bookVerses: "3:38",
    see: ["psalms", "145:9"]
  }]
};
var ezekiel = {
  book: "Ezekiel",
  answers: [{
    bookVerses: "18:20",
    see: ["exodus", "20:5"]
  }, {
    bookVerses: "20:25-26",
    see: ["psalms", "145:9"]
  }]
};
var hosea = {
  book: "Hosea",
  answers: [{
    bookVerses: "9:15",
    see: ["psalms", "5:5"]
  }]
};
var joel = {
  book: "Joel",
  answers: [{
    bookVerses: "3:9-10",
    see: ["exodus", "15:3"]
  }]
};
var jonah = {
  book: "Jonah",
  answers: [{
    bookVerses: "3:4, 10",
    question: "Did God destroy Nineveh?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "3:10",
    see: ["genesis", "6:6-7"]
  }]
};
var zechariah = {
  book: "Zechariah",
  answers: [{
    bookVerses: "9:9",
    question: "Were one or two animals brought to Jesus?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
var malachi = {
  book: "Malachi",
  answers: [{
    bookVerses: "3:6",
    see: ["genesis", "6:6-7"]
  }]
};


/***/ }),

/***/ "./constants/contradictions/job-song-solomon.js":
/*!******************************************************!*\
  !*** ./constants/contradictions/job-song-solomon.js ***!
  \******************************************************/
/*! exports provided: job, psalms, proverbs, ecclesiastes, songOfSolomon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "job", function() { return job; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "psalms", function() { return psalms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proverbs", function() { return proverbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ecclesiastes", function() { return ecclesiastes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "songOfSolomon", function() { return songOfSolomon; });
var job = {
  book: "Job",
  answers: [{
    bookVerses: "1:1",
    see: ["genesis", "7:1"]
  }, {
    bookVerses: "1:1,12",
    question: "If Job was blameless, why did God allow Satan to afflict him?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "1:21",
    question: "Do Job 1:21 and Ecclesiastes 5:15 teach reincarnation?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
var psalms = {
  book: "Psalms",
  answers: [{
    bookVerses: "5:5",
    question: "Does God love or hate people?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "11:5",
    see: ["psalms", "5:5"]
  }, {
    bookVerses: "14:1",
    question: "Can we call someone a fool?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "14:3",
    see: ["genesis", "7:1"]
  }, {
    bookVerses: "104:5",
    question: "Does the earth abide forever?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "137:9",
    question: "Was it wrong for the psalmist to talk about killing children?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "145:9",
    question: "Is God good or bad to people?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
var proverbs = {
  book: "Proverbs",
  answers: [{
    bookVerses: "4:7",
    question: "Should we acquire wisdom?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "6:16-19",
    see: ["psalms", "5:5"]
  }]
};
var ecclesiastes = {
  book: "Ecclesiastes",
  answers: [{
    bookVerses: "1:4",
    see: ["psalms", "104:5"]
  }, {
    bookVerses: "5:15",
    see: ["job", "1:21"]
  }]
};
var songOfSolomon = {
  book: "Song of Solomon",
  answers: [{
    bookVerses: "8:8",
    question: "Does Song of Solomon 8:8 promote child marriage?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};


/***/ }),

/***/ "./constants/contradictions/john.js":
/*!******************************************!*\
  !*** ./constants/contradictions/john.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var john = {
  book: "John",
  answers: [{
    bookVerses: "1:18",
    see: ["genesis", "17:1"]
  }, {
    bookVerses: "1:19-21",
    see: ["matthew", "11:13-14"]
  }, {
    bookVerses: "1:27-40",
    see: ["mark", "1:7-13"]
  }, {
    bookVerses: "1:29-34",
    see: ["matthew", "11:2-3"]
  }, {
    bookVerses: "1:42-43",
    see: ["matthew", "4:18-19"]
  }, {
    bookVerses: "3:13",
    see: ["genesis", "5:24"]
  }, {
    bookVerses: "3:16",
    see: ["psalms", "5:5"]
  }, {
    bookVerses: "5:31",
    question: "Was Jesus' witness of Himself true?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "5:37",
    see: ["genesis", "17:1"]
  }, {
    bookVerses: "6:46",
    see: ["genesis", "17:1"]
  }, {
    bookVerses: "7:8, 10",
    question: "Did Jesus lie about going up to the feast?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "8:14",
    see: ["john", "5:31"]
  }, {
    bookVerses: "13:38",
    see: ["matthew", "26:34-35"]
  }, {
    bookVerses: "14:27",
    see: ["matthew", "10:34"]
  }, {
    bookVerses: "16:33",
    see: ["matthew", "10:34"]
  }, {
    bookVerses: "17:3",
    see: ["genesis", "1:26"]
  }, {
    bookVerses: "18:12",
    see: ["matthew", "26:47"]
  }, {
    bookVerses: "18:19, 24",
    see: ["matthew", "26:57"]
  }, {
    bookVerses: "18:20",
    question: "Did Jesus lie about only speaking in synagogues and the temple?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "18:20",
    question: "Did Jesus never say anything in secret?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "19:2, 5",
    see: ["matthew", "27:28, 31"]
  }, {
    bookVerses: "19:14-16",
    see: ["mark", "15:25"]
  }, {
    bookVerses: "19:17",
    see: ["matthew", "27:31-32"]
  }, {
    bookVerses: "19:19-20",
    see: ["matthew", "27:37"]
  }, {
    bookVerses: "19:25",
    see: ["matthew", "27:55-56"]
  }, {
    bookVerses: "19:30",
    see: ["matthew", "27:46"]
  }, {
    bookVerses: "20:1",
    see: ["matthew", "28:1-2"]
  }, {
    bookVerses: "20:1",
    see: ["matthew", "12:40"]
  }, {
    bookVerses: "20:1-2, 12",
    see: ["matthew", "28:2"]
  }, {
    bookVerses: "20:12-13",
    see: ["matthew", "28:2-5"]
  }, {
    bookVerses: "20:13",
    see: ["matthew", "28:6-7"]
  }, {
    bookVerses: "20:14",
    see: ["matthew", "28:9"]
  }, {
    bookVerses: "20:18",
    see: ["matthew", "28:8"]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (john);

/***/ }),

/***/ "./constants/contradictions/judges-2-samuel.js":
/*!*****************************************************!*\
  !*** ./constants/contradictions/judges-2-samuel.js ***!
  \*****************************************************/
/*! exports provided: judges, samuel1, samuel2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "judges", function() { return judges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "samuel1", function() { return samuel1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "samuel2", function() { return samuel2; });
var judges = {
  book: "Judges",
  answers: [{
    bookVerses: "1:19",
    question: "Was God not able to drive out the inhabitants of the valley in Judges 1:19?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "21:10",
    question: "Was it wrong for the Israelites to kill the people of Gilead?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
var samuel1 = {
  book: "1 Samuel",
  answers: [{
    bookVerses: "15:2-3",
    see: ["numbers", "31:15-18"]
  }, {
    bookVerses: "16:19-23",
    question: "Did Saul know who David was?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "17:50",
    question: "Who killed Goliath, David or Elhanan?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "17:55-58",
    see: ["1 samuel", "16:19-23"]
  }, {
    bookVerses: "31:4",
    question: "Who killed Saul, Saul or the Amalekite?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
var samuel2 = {
  book: "2 Samuel",
  answers: [{
    bookVerses: "1:8-10",
    see: ["1 samuel", "31:4"]
  }, {
    bookVerses: "6:23",
    question: "Did Michal have any children?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "8:4",
    question: "How many horsemen did David capture, 1,700 or 7,000?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "10:18",
    question: "How many charioteers were killed, 700 or 7,000?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "21:8",
    see: ["2 samuel", "6:23"]
  }, {
    bookVerses: "21:19",
    see: ["1 samuel", "17:50"]
  }, {
    bookVerses: "24:1",
    question: "Who incited David to number Israel, God or Satan?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "24:9",
    question: "How many fighting men were there in Israel and Judah?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "24:13",
    question: "How many years of famine were threatened to David, seven or three?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};


/***/ }),

/***/ "./constants/contradictions/leviticus-numbers.js":
/*!*******************************************************!*\
  !*** ./constants/contradictions/leviticus-numbers.js ***!
  \*******************************************************/
/*! exports provided: leviticus, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leviticus", function() { return leviticus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
var leviticus = {
  book: "Leviticus",
  answers: [{
    bookVerses: "11:5-6",
    question: "Do the badger and the rabbit chew the cud?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "11:13=19",
    question: "Is the bat a bird?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "25:44",
    question: "Was it wrong for God to give laws about buying slaves?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "26:1",
    see: ["exodus", "20:4-5"]
  }, {
    bookVerses: "26:2",
    see: ["exodus", "20:8"]
  }]
};
var numbers = {
  book: "Numbers",
  answers: [{
    bookVerses: "12:6-8",
    see: ["genesis", "17:1"]
  }, {
    bookVerses: "15:32",
    question: "Was it wrong for a man to be killed for gathering sticks on the Sabbath?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "23:19",
    question: "If God is not a man, can Jesus be God?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "31:15-18",
    question: "Was it immoral for the Israelites to destroy all the people, including women and children, in the cities they captured?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "31:17-18",
    question: "Was it immoral for God to leave only the virgins alive in Numbers 31:17-18?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};


/***/ }),

/***/ "./constants/contradictions/luke.js":
/*!******************************************!*\
  !*** ./constants/contradictions/luke.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var luke = {
  book: "Luke",
  answers: [{
    bookVerses: "1:5-6",
    see: ["genesis", "7:1"]
  }, {
    bookVerses: "3:23",
    see: ["matthew", "1:16"]
  }, {
    bookVerses: "4:5-9",
    see: ["matthew", "4:5-8"]
  }, {
    bookVerses: "5:27",
    see: ["matthew", "9:9"]
  }, {
    bookVerses: "6:12-16",
    see: ["matthew", "10:2-4"]
  }, {
    bookVerses: "7:2-10",
    see: ["matthew", "8:5-13"]
  }, {
    bookVerses: "7:18-22",
    see: ["matthew", "11:2-3"]
  }, {
    bookVerses: "8:26-27",
    see: ["matthew", "8:28"]
  }, {
    bookVerses: "8:26-27",
    see: ["matthew", "8:28 (2)"]
  }, {
    bookVerses: "9:3",
    see: ["matthew", "10:9-10"]
  }, {
    bookVerses: "9:28",
    see: ["matthew", "17:1"]
  }, {
    bookVerses: "11:1-4",
    see: ["matthew", "6:9-13"]
  }, {
    bookVerses: "13:19",
    see: ["matthew", "13:31"]
  }, {
    bookVerses: "14:26",
    question: "Should we hate others?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "18:35",
    see: ["matthew", "20:29-30"]
  }, {
    bookVerses: "19:30",
    see: ["zechariah", "9:9"]
  }, {
    bookVerses: "19:45",
    question: "Did Jesus cleanse the Temple on the first or second day?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "22:34",
    see: ["matthew", "26:34-35"]
  }, {
    bookVerses: "22:36",
    see: ["matthew", "10:34"]
  }, {
    bookVerses: "23:26",
    see: ["matthew", "27:31-32"]
  }, {
    bookVerses: "23:38",
    see: ["matthew", "27:37"]
  }, {
    bookVerses: "23:46",
    see: ["matthew", "27:46"]
  }, {
    bookVerses: "22:47",
    see: ["matthew", "26:47"]
  }, {
    bookVerses: "22:60-62",
    see: ["matthew", "26:34-35"]
  }, {
    bookVerses: "23:49",
    see: ["matthew", "27:55-56"]
  }, {
    bookVerses: "24:1",
    see: ["matthew", "12:40"]
  }, {
    bookVerses: "24:1-2",
    see: ["matthew", "28:1-2"]
  }, {
    bookVerses: "24:2-6",
    see: ["matthew", "28:2-5"]
  }, {
    bookVerses: "24:4",
    see: ["matthew", "28:2"]
  }, {
    bookVerses: "24:5-7",
    see: ["matthew", "28:6-7"]
  }, {
    bookVerses: "24:9",
    see: ["matthew", "28:8"]
  }, {
    bookVerses: "24:15-18",
    see: ["matthew", "28:9"]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (luke);

/***/ }),

/***/ "./constants/contradictions/mark.js":
/*!******************************************!*\
  !*** ./constants/contradictions/mark.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var mark = {
  book: "Mark",
  answers: [{
    bookVerses: "1:7-13",
    question: "What did Jesus do after being baptized by John the Baptist?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "2:14",
    see: ["matthew", "9:9"]
  }, {
    bookVerses: "3:13-19",
    see: ["matthew", "10:2-4"]
  }, {
    bookVerses: "3:29",
    see: ["matthew", "12:31"]
  }, {
    bookVerses: "4:30",
    see: ["matthew", "13:31"]
  }, {
    bookVerses: "5:1-2",
    see: ["matthew", "8:28"]
  }, {
    bookVerses: "5:1-2 (2)",
    see: ["matthew", "8:28 (2)"]
  }, {
    bookVerses: "5:23",
    see: ["matthew", "9:18"]
  }, {
    bookVerses: "6:8",
    see: ["matthew", "10:9-10"]
  }, {
    bookVerses: "9:2",
    see: ["matthew", "17:1"]
  }, {
    bookVerses: "9:50",
    see: ["matthew", "10:34"]
  }, {
    bookVerses: "11:2-7",
    see: ["zechariah", "9:9"]
  }, {
    bookVerses: "10:35-37",
    see: ["matthew", "20:20-21"]
  }, {
    bookVerses: "10:46-47",
    see: ["matthew", "20:29-30"]
  }, {
    bookVerses: "11:11-12, 15-16",
    question: "On which day did Jesus cleanse the Temple?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "11:14, 20",
    see: ["matthew", "21:19"]
  }, {
    bookVerses: "13:32",
    see: ["matthew", "24:36"]
  }, {
    bookVerses: "14:30",
    see: ["matthew", "26:34-35"]
  }, {
    bookVerses: "14:43",
    see: ["matthew", "26:47"]
  }, {
    bookVerses: "15:16, 20",
    see: ["matthew", "27:28, 31"]
  }, {
    bookVerses: "15:20-21",
    see: ["matthew", "27:31-32"]
  }, {
    bookVerses: "15:23",
    see: ["matthew", "27:34"]
  }, {
    bookVerses: "15:25",
    question: "At what hour was Jesus crucified?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "15:26",
    see: ["matthew", "27:37"]
  }, {
    bookVerses: "15:34",
    see: ["matthew", "27:46"]
  }, {
    bookVerses: "15:40",
    see: ["matthew", "27:55-56"]
  }, {
    bookVerses: "16:1-4",
    see: ["matthew", "28:1-2"]
  }, {
    bookVerses: "16:2",
    see: ["matthew", "12:40"]
  }, {
    bookVerses: "16:5",
    see: ["matthew", "28:2"]
  }, {
    bookVerses: "16:5-6",
    see: ["matthew", "28:2-5"]
  }, {
    bookVerses: "16:6-7",
    see: ["matthew", "28:6-7"]
  }, {
    bookVerses: "16:8",
    see: ["matthew", "28:8"]
  }, {
    bookVerses: "16:9",
    see: ["matthew", "28:9"]
  }, {
    bookVerses: "16:9-20",
    question: "Is the ending of Mark part of the Bible?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (mark);

/***/ }),

/***/ "./constants/contradictions/matthew.js":
/*!*********************************************!*\
  !*** ./constants/contradictions/matthew.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var matthew = {
  book: "Matthew",
  answers: [{
    bookVerses: "1:16",
    question: "Are Matthew and Luke's genealogies contradictory?",
    quickAnswer: "<p>Matthew and Luke clearly have different objectives with their genealogies, so we should expect differences. Here are two possible explanations for the differences:</p>\n \n      <ol>\n         <li>Luke's genealogy may be tracing Jesus' lineage through Mary</li>\n         <li>Matthew's may be a biological genealogy, while Luke's may be a legal genealogy</li>\n       </ol>",
    fullPost: "/answers/matthew-luke-genealogy",
    allPassages: [{
      heading: "Matthew's genealogy",
      passages: [{
        passage: "Matthew 1:6",
        text: "and <strong>Jacob the father of Joseph</strong> the husband of Mary, of whom Jesus was born, who is called Christ."
      }, {
        passage: "Matthew 1:16",
        text: "and <strong>Jacob the father of Joseph</strong> the husband of Mary, of whom Jesus was born, who is called Christ."
      }]
    }, {
      heading: "Luke's genealogy",
      passages: [{
        passage: "Luke 3:23",
        text: "Jesus, when he began his ministry, was about thirty years of age, being the son (as was supposed) of <strong>Joseph, the son of Heli</strong>..."
      }, {
        passage: "Luke 3:31",
        text: "the son of Melea, the son of Menna, the son of Mattatha, the son of <strong>Nathan, the son of David</strong>..."
      }]
    }]
  }, {
    bookVerses: "2:23",
    question: "Did the Old Testament prophesy that Jesus would come from Nazareth?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "4:5-8",
    question: "Where did the devil take Jesus first?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "4:18-19",
    question: "Where did Jesus first meet Simon Peter and Andrew?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "5:16",
    question: "Should we let our good works be seen?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "5:17",
    question: "Did Jesus abolish the Law?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "5:22",
    question: "Can we call someone a fool?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "6:1-4",
    see: ["matthew", "5:16"]
  }, {
    bookVerses: "6:9-13",
    question: "Who did Jesus say the Lord's Prayer to?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "8:5-13",
    question: "Who brought the Centurion's request to Jesus?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "8:28",
    question: "How many men came out to meet Jesus in Gerasene?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "8:28 (2)",
    question: "Did Jesus meet the demoniacs in Gerasene or Gaderene?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "9:9",
    question: "Was the tax collector named Matthew or Levi?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "9:18",
    question: "Was Jairus's daughter alive or dead when he came to Jesus?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "10:2-4",
    question: "Why are the lists of disciples different?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "10:9-10",
    question: "Did Jesus tell His disciples to take a staff?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "10:34",
    question: "Did Jesus come to bring peace?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "11:2-3",
    question: "When did John find out that Jesus was the Messiah?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "11:13-14",
    question: "Was John the Baptist Elijah?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "12:31",
    question: "Is there a sin that cannot be forgiven?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "12:40",
    question: "How long was Jesus buried in the tomb?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "13:31",
    question: "Is the mustard seed the smallest of all seeds?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "17:1",
    question: "After how many days did Jesus take the three up the mountain?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "19:16-21",
    question: "Are we saved by grace or works?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "20:20-21",
    question: "Who requested to sit beside Jesus in His kingdom?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "20:29-30",
    question: "How many blind men did Jesus meet when he left Jericho?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "21:2-7",
    see: ["zechariah", "9:9"]
  }, {
    bookVerses: "21:12",
    question: "Did Jesus cleanse the Temple once or twice?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "21:19",
    question: "Did the tree that Jesus cursed wither immediately or overnight?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "23:3-5",
    see: ["matthew", "5:16"]
  }, {
    bookVerses: "23:9",
    see: ["exodus", "20:12"]
  }, {
    bookVerses: "23:17",
    see: ["psalms", "14:1"]
  }, {
    bookVerses: "24:36",
    question: "If Jesus and the Holy Spirit are God, then why do they not know the hour of Jesus' return?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "25:31-46",
    see: ["matthew", "19:16-21"]
  }, {
    bookVerses: "26:34-35",
    question: "Did the rooster crow once or twice before Peter's third denial?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "26:74-75",
    see: ["matthew", "26:34-35"]
  }, {
    bookVerses: "26:47",
    question: "Who arrested Jesus?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "26:57",
    question: "Who did Jesus see first when He was arrested, Annas or Caiaphas?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "27:3-8",
    question: "How did Judas die, by hanging or falling?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "27:7",
    question: "Who bought the Potter's Field, Judas or the Jews?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "27:28, 31",
    question: "Was Jesus' robe scarlet or purple?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "27:31-32",
    question: "Who carried Jesus' cross, Jesus or Simon of Cyrene?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "27:34",
    question: "Was the vinegar given to Jesus mingled with gall or myrrh?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "27:37",
    question: "What was written on the sign of the cross?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "27:46",
    question: "What were Jesus' last words on the cross?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "27:55-56",
    question: "Were the women close or far from the cross?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "28:1",
    see: ["matthew", "12:40"]
  }, {
    bookVerses: "28:1-2",
    question: "When was the stone rolled away from the tomb? Did an earthquake occur?",
    quickAnswer: "<p>The stone was rolled away before the women arrived at the tomb. \"had occurred\" may be a better translation of the passage, and the purpose of the passage would be to explain the lack of guards at the tomb when the women arrived.</p>",
    fullPost: "/answers/when-stone-rolled-away",
    allPassages: [{
      heading: "Stone rolled away after the women arrived?",
      passages: [{
        passage: "Matthew 28:1-5 NASB",
        text: "Now after the Sabbath, as it began to dawn toward the first day of the week, Mary Magdalene and the other Mary came to look at the grave. And behold, <strong>a severe earthquake had occurred, for an angel of the Lord descended from heaven and came and rolled away the stone and sat upon it</strong>. And his appearance was like lightning, and his clothing as white as snow. The guards shook for fear of him and became like dead men. The angel said to the women, \"Do not be afraid; for I know that you are looking for Jesus who has been crucified.\""
      }]
    }, {
      heading: "Stone rolled away before the women arrived",
      passages: [{
        passage: "Mark 16:3-4",
        text: "And they were saying to one another, \"Who will roll away the stone for us from the entrance of the tomb?\" And looking up, <strong>they saw that the stone had been rolled back</strong>&mdash;it was very large."
      }, {
        passage: "Luke 24:2",
        text: "And they found the stone rolled away from the tomb</strong>..."
      }, {
        passage: "John 20:1",
        text: "Now on the first day of the week Mary Magdalene came to the tomb early, while it was still dark, and <strong>saw that the stone had been taken away from the tomb</strong>."
      }]
    }]
  }, {
    bookVerses: "28:2-5",
    question: "Were the angels sitting or standing in the tomb?",
    quickAnswer: "<p>It would be reasonable to believe that the angels were sitting when the women entered the tomb, and then stood up after that. The angel in Matthew was sitting on the stone before the women arrived at the tomb, and had moved into the tomb by the time the women arrived at the tomb.</p>",
    fullPost: "/answers/were-angels-sitting-standing",
    allPassages: [{
      heading: "Sitting on the stone",
      passages: [{
        passage: "Matthew 28:2-5",
        text: "And behold, there was a great earthquake, for an angel of the Lord descended from heaven and came and rolled back the stone <strong>and sat on it</strong>. His appearance was like lightning, and his clothing white as snow. And for fear of him the guards trembled and became like dead men. But the angel said to the women, \"Do not be afraid, for I know that you seek Jesus who was crucified.\""
      }]
    }, {
      heading: "Sitting in the tomb",
      passages: [{
        passage: "Mark 16:5-6",
        text: "And entering the tomb, they saw a young man sitting on the right side, dressed in a white robe, and they were alarmed. And he said to them, \"Do not be alarmed. You seek Jesus of Nazareth, who was crucified. He has risen; he is not here. See the place where they laid him.\""
      }, {
        passage: "John 20:12-13",
        text: "And she saw two angels in white, <strong>sitting where the body of Jesus had lain, one at the head and one at the feet</strong>. They said to her, \"Woman, why are you weeping?\" She said to them, \"They have taken away my Lord, and I do not know where they have laid him.\""
      }]
    }, {
      heading: "Standing in the tomb",
      passages: [{
        passage: "Luke 24:2-6",
        text: "And they found the stone rolled away from the tomb, but when <strong>they went in</strong> they did not find the body of the Lord Jesus. While they were perplexed about this, behold, <strong>two men stood by them</strong> in dazzling apparel. And as they were frightened and bowed their faces to the ground, the men said to them, \u201CWhy do you seek the living among the dead?"
      }]
    }]
  }, {
    bookVerses: "28:2",
    question: "How many angels were at the tomb? Were they angels or men?",
    quickAnswer: "There were two angels who looked like men. Matthew does not say that there was only one angel, and Mark does not say that there was only one man. Angels oftentime appeared in the form of men (Genesis 18:1\u20132; Daniel 9:21).",
    fullPost: "/answers/how-many-angels-tomb",
    allPassages: [{
      heading: "One angel",
      passages: [{
        passage: "Matthew 28:2-5",
        text: "And behold, there was a great earthquake, for <strong>an angel</strong> of the Lord descended from heaven and came and rolled back the stone and sat on it. <strong>His</strong> appearance was like lightning, and <strong>his</strong> clothing white as snow. And for fear of <strong>him</strong> the guards trembled and became like dead men. But <strong>the angel</strong> said to the women, \"Do not be afraid, for I know that you seek Jesus who was crucified.\""
      }]
    }, {
      heading: "One man",
      passages: [{
        passage: "Mark 16:5-6",
        text: "And entering the tomb, they saw <strong>a young man</strong> sitting on the right side, dressed in a white robe, and they were alarmed. And <strong>he</strong> said to them, \"Do not be alarmed. You seek Jesus of Nazareth, who was crucified. He has risen; he is not here. See the place where they laid him.\""
      }]
    }, {
      heading: "Luke 24:4-6",
      passages: [{
        passage: "Two men",
        text: "While they were perplexed about this, behold, <strong>two men</strong> stood by them in dazzling apparel. And as they were frightened and bowed their faces to the ground, <strong>the men</strong> said to them, \u201CWhy do you seek the living among the dead?"
      }]
    }, {
      heading: "Two angels",
      passages: [{
        passage: "John 20:12-13",
        text: "And she saw <strong>two angels</strong> in white, sitting where the body of Jesus had lain, one at the head and one at the feet. <strong>They</strong> said to her, \"Woman, why are you weeping?\" She said to <strong>them</strong>, \"They have taken away my Lord, and I do not know where they have laid him.\""
      }]
    }]
  }, {
    bookVerses: "28:8",
    question: "Did the women tell anyone what happened at the tomb?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "28:9",
    question: "Who did Jesus appear to first after the resurrection?",
    quickAnswer: "<p>Here is one possible order for Jesus' appearances:</p>\n  \n      <ol>\n        <li>Jesus first appeared to Mary Magdelene alone at the tomb.</li>\n        <li>Jesus then appeared to the rest of the women when they were traveling back to Bethany.</li>\n        <li>Or, vice versa</li>\n      </ol>",
    fullPost: "/answers/jesus-appear-first",
    allPassages: [{
      heading: "Jesus appeared first to the group of women",
      passages: [{
        passage: "Matthew 28:8-9",
        text: "So <strong>they</strong> [the women] departed quickly from the tomb with fear and great joy, and ran to tell his disciples. And behold, <strong>Jesus met them</strong> and said, \"Greetings!\" And they came up and took hold of his feet and worshiped him."
      }]
    }, {
      heading: "Jesus appeared first to Mary alone",
      passages: [{
        passage: "John 20:2-14",
        text: "<p>So she [Mary Magdelene] ran and went to Simon Peter and the other disciple, the one whom Jesus loved, and said to them, \"They have taken the Lord out of the tomb, and we do not know where they have laid him.\" So Peter went out with the other disciple, and they were going toward the tomb... Then the disciples went back to their homes.</p>\n\n              <p>But Mary stood weeping outside the tomb, and as she wept she stooped to look into the tomb. And she saw two angels in white, sitting where the body of Jesus had lain, one at the head and one at the feet. They said to her, \"Woman, why are you weeping?\" She said to them, \"They have taken away my Lord, and I do not know where they have laid him.\" Having said this, <strong>she turned around and saw Jesus standing</strong>, but she did not know that it was Jesus.</p>"
      }]
    }]
  }, {
    bookVerses: "28:6-7",
    question: "What did the angels tell Mary at the empty tomb?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (matthew);

/***/ }),

/***/ "./constants/contradictions/romans.js":
/*!********************************************!*\
  !*** ./constants/contradictions/romans.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var romans = {
  book: "Romans",
  answers: [{
    bookVerses: "3:10",
    see: ["genesis", "7:1"]
  }, {
    bookVerses: "3:20, 28",
    see: ["matthew", "19:16-21"]
  }, {
    bookVerses: "5:1",
    see: ["acts", "2:38"]
  }, {
    bookVerses: "5:8",
    see: ["psalms", "5:5"]
  }, {
    bookVerses: "9:17",
    question: "Was it wrong for God to harden Pharoah's heart?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "13:1",
    see: ["acts", "5:29"]
  }, {
    bookVerses: "15:33",
    see: ["exodus", "15:3"]
  }, {
    bookVerses: "14:5",
    see: ["exodus", "20:8"]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (romans);

/***/ }),

/***/ "./pages/contradictions.js":
/*!*********************************!*\
  !*** ./pages/contradictions.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_writing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/writing */ "./utils/writing.js");
/* harmony import */ var _constants_contradictions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/contradictions */ "./constants/contradictions/index.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var _components_TitleSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TitleSection */ "./components/TitleSection.js");
/* harmony import */ var _components_ReadingContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ReadingContainer */ "./components/ReadingContainer.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function renderPassage(passage, index) {
  var text = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isArray"])(passage.text) ? passage.text.map(function (paragraph, index1) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: index1,
      className: "first",
      dangerouslySetInnerHTML: {
        __html: Object(_utils_writing__WEBPACK_IMPORTED_MODULE_5__["boldNumbers"])(paragraph)
      }
    });
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "first",
    dangerouslySetInnerHTML: {
      __html: Object(_utils_writing__WEBPACK_IMPORTED_MODULE_5__["boldNumbers"])(passage.text)
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    key: index
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("blockquote", {
    className: index === 0 ? "first" : ""
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, passage.passage), text));
}

function renderLink(_ref) {
  var index = _ref.index,
      book = _ref.book,
      bookVerses = _ref.bookVerses,
      count = _ref.count,
      question = _ref.question;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    key: index,
    style: {
      marginTop: 6
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#".concat(book, "_").concat(bookVerses),
    id: "top_".concat(book, "_").concat(bookVerses),
    dangerouslySetInnerHTML: {
      __html: "".concat(count, ") ").concat(bookVerses, " - ").concat(question)
    }
  }));
}

function renderAnswer(_ref2) {
  var index = _ref2.index,
      book = _ref2.book,
      bookVerses = _ref2.bookVerses,
      foundBookVerses = _ref2.foundBookVerses,
      question = _ref2.question,
      allPassages = _ref2.allPassages,
      quickAnswer = _ref2.quickAnswer,
      fullPost = _ref2.fullPost,
      count = _ref2.count,
      hideDetails = _ref2.hideDetails,
      toggleDetail = _ref2.toggleDetail;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    key: index,
    style: {
      border: "3px solid rgba(0, 0, 0, .54)",
      borderBottom: 0,
      borderLeft: 0,
      borderRight: 0,
      marginTop: 20
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#top",
    style: {
      display: "inline-block",
      marginTop: 20
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaChevronUp"], null), " Top"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#".concat(book),
    id: "".concat(book, "_").concat(bookVerses),
    style: {
      display: "inline-block",
      marginLeft: 20,
      marginTop: 20
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaChevronUp"], null), " ", book), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "nomargin",
    dangerouslySetInnerHTML: {
      __html: "".concat(count, ") ").concat(bookVerses, " - ").concat(question)
    }
  }), foundBookVerses ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "first"
  }, "Same as", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, book, " ", foundBookVerses, " - ", question)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "nomargin",
    onClick: toggleDetail,
    style: {
      color: "#039BE5",
      fontSize: 16,
      cursor: "pointer"
    }
  }, hideDetails ? "Show " : "Hide ", " answer")) : null, hideDetails ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "first"
  }, "Quick answer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: quickAnswer
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Full post:", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: fullPost,
    target: "_blank"
  }, question)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Passages"), allPassages.map(function (passageGroup, index) {
    if (passageGroup.heading !== undefined) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: index
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: index === 0 ? "first" : ""
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, passageGroup.heading)), passageGroup.passages.map(function (passage, index1) {
        return renderPassage(passage, index1);
      }));
    }

    return renderPassage(passageGroup, index);
  })));
}

var BibleContradictions = function BibleContradictions() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      details = _useState2[0],
      setDetails = _useState2[1];

  var linkCount = 0;
  var answerCount = 0;
  var image_url = "https://i.imgur.com/faAmDhY.png";
  var description = "Explanations for every alleged \"contradiction\" in the Bible, including passages, quick answer, and a link to a fuller post for each alleged Bible \"contradiction.\"";
  var date_added = "2018-11-26";
  var updated_at = "2018-11-26";
  var numbers = _constants_contradictions__WEBPACK_IMPORTED_MODULE_6__["default"].reduce(function (result, book) {
    book.answers.forEach(function (answer) {
      if (!answer.see) {
        result.total++;
      }

      if (!answer.quickAnswer && !answer.see) {
        result.noQuickAnswer++;
      }

      if (!answer.fullPost && !answer.see) {
        result.noFullPost++;
      }
    });
    return result;
  }, {
    total: 0,
    noQuickAnswer: 0,
    noFullPost: 0
  });
  var pageTitle = "\"Contradictions\" in the Bible: Every alleged biblical \"contradiction\" explained";
  var datePublished = new Date(date_added);
  var matthewIndex = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"])(_constants_contradictions__WEBPACK_IMPORTED_MODULE_6__["default"], function (book) {
    return book.book === "Matthew";
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_7__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-1032469568"
  }, pageTitle, " | Bible Answers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: description,
    className: "jsx-1032469568"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:url",
    content: "https://bibleanswers.io/tags/contradictions",
    className: "jsx-1032469568"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:title",
    content: pageTitle,
    className: "jsx-1032469568"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:description",
    content: description,
    className: "jsx-1032469568"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:image",
    content: image_url,
    className: "jsx-1032469568"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify({
        "@context": "http://schema.org",
        "@type": "Article",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://google.com/article"
        },
        headline: pageTitle,
        image: {
          "@type": "ImageObject",
          url: image_url,
          height: 400,
          width: 1200
        },
        datePublished: datePublished,
        dateModified: new Date(updated_at).toISOString(),
        author: {
          "@type": "Person",
          name: "Michael Cheng"
        },
        publisher: {
          "@type": "Organization",
          name: "Bible Answers",
          logo: {
            "@type": "ImageObject",
            url: "https://i.imgur.com/dJPxPY9.png"
          }
        },
        description: description
      })
    },
    className: "jsx-1032469568"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TitleSection__WEBPACK_IMPORTED_MODULE_8__["TitleSection"], {
    title: pageTitle,
    subtitle: "Explanations for every alleged \"contradiction\" in the Bible",
    image_url: image_url,
    date_added: date_added,
    user: {
      name: "Michael Cheng",
      image: "https://i.imgur.com/8aN31Dn.png"
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ReadingContainer__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1032469568" + " " + "writing"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "top",
    style: {
      color: "rgba(0, 0, 0, .84)"
    },
    className: "jsx-1032469568"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1032469568"
  }, "Table of contents")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1032469568"
  }, "Overview"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1032469568" + " " + "first"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#introduction",
    className: "jsx-1032469568"
  }, "1. Introduction")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1032469568" + " " + "first"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#faqs",
    className: "jsx-1032469568"
  }, "2. Frequently asked questions")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1032469568"
  }, "Old Testament"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1032469568" + " " + "table-contents-container"
  }, _constants_contradictions__WEBPACK_IMPORTED_MODULE_6__["default"].slice(0, matthewIndex).map(function (book) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: book.book,
      className: "jsx-1032469568" + " " + "table-contents-item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#".concat(book.book),
      className: "jsx-1032469568"
    }, book.book, " (", book.answers.length, ")"));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1032469568"
  }, "New Testament"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1032469568" + " " + "table-contents-container"
  }, _constants_contradictions__WEBPACK_IMPORTED_MODULE_6__["default"].slice(matthewIndex).map(function (book) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: book.book,
      className: "jsx-1032469568" + " " + "table-contents-item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#".concat(book.book),
      className: "jsx-1032469568"
    }, book.book, " (", book.answers.length, ")"));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1032469568"
  }, "Work in progress"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1032469568"
  }, "This page is still a work in progress. Please check back to see updates!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1032469568" + " " + "first"
  }, "Total explanations: ", numbers.total), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1032469568" + " " + "first"
  }, "Quick answers remaining: ", numbers.noQuickAnswer), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1032469568" + " " + "first"
  }, "Full post remaining: ", numbers.noFullPost), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1032469568"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "introduction",
    className: "jsx-1032469568" + " " + "link-target"
  }, "Introduction")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1032469568"
  }, "Opponents of the Bible claim that it contains numerous irreconcilable contradictions. However, none of the \"alleged\" contradictions in the Bible are truly irreconcilable."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1032469568"
  }, "The purpose of this page is to provide possible explanations for every alleged \"contradiction\" in the Bible."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1032469568"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "faqs",
    className: "jsx-1032469568" + " " + "link-target"
  }, "Frequently asked questions")), _constants_contradictions__WEBPACK_IMPORTED_MODULE_6__["default"].map(function (book) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: book.book,
      className: "jsx-1032469568"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#top",
      id: book.book,
      style: {
        display: "flex",
        alignItems: "center",
        marginTop: 28
      },
      className: "jsx-1032469568"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaChevronUp"], null), "\xA0Top"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      key: book.book,
      style: {
        borderBottom: "1px solid rgba(0, 0, 0, .54)"
      },
      className: "jsx-1032469568" + " " + "nomargin"
    }, book.book), book.answers.map(function (answer, index) {
      linkCount++;

      if (answer.see) {
        var foundBook = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["find"])(_constants_contradictions__WEBPACK_IMPORTED_MODULE_6__["default"], function (book) {
          return book.book.toLowerCase() === answer.see[0];
        });
        var foundAnswer = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["find"])(foundBook.answers, function (answerData) {
          return answerData.bookVerses === answer.see[1];
        });
        return renderLink({
          index: index,
          book: book.book,
          bookVerses: answer.bookVerses,
          question: foundAnswer.question,
          count: linkCount
        });
      }

      return renderLink(_objectSpread({
        index: index,
        book: book.book
      }, answer, {
        count: linkCount
      }));
    }), book.answers.map(function (answer, index) {
      answerCount++;

      if (answer.see) {
        var foundBook = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["find"])(_constants_contradictions__WEBPACK_IMPORTED_MODULE_6__["default"], function (book) {
          return book.book.toLowerCase() === answer.see[0];
        });
        var foundAnswer = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["find"])(foundBook.answers, function (answerData) {
          return answerData.bookVerses === answer.see[1];
        });
        var detailsKey = "".concat(book.book, "_").concat(answer.bookVerses);
        var hideDetails = !details[detailsKey];
        return renderAnswer(_objectSpread({
          index: index,
          book: book.book
        }, foundAnswer, {
          foundBookVerses: foundAnswer.bookVerses,
          bookVerses: answer.bookVerses,
          count: answerCount,
          hideDetails: hideDetails,
          toggleDetail: function toggleDetail() {
            setDetails(_objectSpread({}, details, _defineProperty({}, detailsKey, !details[detailsKey])));
          }
        }));
      }

      return renderAnswer(_objectSpread({
        index: index,
        book: book.book
      }, answer, {
        count: answerCount
      }));
    }));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1032469568",
    css: ".writing h3{font-size:34px;line-height:1.15;margin:0;margin-top:56px;}.writing h4{font-size:26px;line-height:1.22;margin:0;margin-top:30px;}.writing p,.writing ol,.writing ul,.writing blockquote{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}p:first-child,.writing h3+p,.writing h3+ol,.writing h3+ul,.writing h3+blockquote,.writing h4+p,.writing h4+ol,.writing h4+ul,.writing h4+blockquote{margin-top:8px;}.writing ol,.writing ul{padding:0 40px;}.writing li{margin-bottom:10px;}.writing li:last-child{margin-bottom:0;}.writing blockquote{border-left:3px solid rgba(0,0,0,0.84);font-style:italic;left:-20px;padding-left:20px;position:relative;}.writing .first{margin-top:8px;}.writing .nomargin{margin-top:0;}.writing .indent{margin-left:20px;}.writing .image{margin-top:29px;}.writing .image-left{float:left;margin-right:20px;}.writing .image-right{float:right;margin-left:20px;}.writing a{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}.writing .reference{font-size:14px;margin-left:2px;position:relative;top:-5px;}.divider{display:block;font-size:35px;-webkit-letter-spacing:0.6em;-moz-letter-spacing:0.6em;-ms-letter-spacing:0.6em;letter-spacing:0.6em;text-align:center;}@media screen and (max-width:768px){.writing h3{font-size:30px;margin-top:28px;}.writing h4{font-size:24px;margin-top:22px;}.writing p,.writing ol{font-size:18px;margin-top:21px;}.writing blockquote{font-size:18px;margin-top:21px;}.writing .image{margin-top:21px;}}.table-contents-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.table-contents-item{font-size:16px;margin-top:10px;width:150px;}.writing .link-target{color:rgba(0,0,0,0.84);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvcGFnZXMvY29udHJhZGljdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcWJ5QixBQUcwQixBQU9BLEFBVUEsQUFlQSxBQUtBLEFBSUksQUFJSCxBQUkwQixBQVEzQixBQUlGLEFBSUksQUFJRCxBQUlMLEFBS0MsQUFLRSxBQUtDLEFBT0QsQUFRRyxBQUtBLEFBTUEsQUFLQSxBQUtDLEFBS0wsQUFLRSxBQU1XLFdBbEVSLENBS0QsQ0FqQm5CLENBc0J1QixBQVlOLENBL0ZFLEFBT0EsQUFVQSxBQWVuQixBQUtBLEFBb0JBLEFBK0JrQixBQWVFLEFBS0EsQUFNQSxBQUtBLEFBZUYsQ0F6RmxCLEFBd0JBLEFBdURFLENBM0RGLEVBeEJBLElBbUdBLE1BbEVBLEFBS0EsQUFpQnVCLEVBUEgsQUFlbEIsQUFLQSxBQU1BLEFBS0EsQUFlWSxDQXRJSCxBQU9BLEFBVUEsT0ErQlMsRUEvQ0YsQUFPQSxBQVVBLEVBcUhsQixNQTlDVyxRQXZGWCxBQU9BLEFBVUEsQUE4QmEsQ0F5Q2IsTUFQQSxJQWpDb0IsTUE4RUgsWUE3RUcsa0JBQ3BCLDBCQTRDb0IsQ0FpQ3BCLGlCQWhDQSIsImZpbGUiOiIvVXNlcnMvbWljaGFlbC5jaGVuZy9jb2RlL25leHQtYmlibGVhbnN3ZXJzL3BhZ2VzL2NvbnRyYWRpY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBGYUNoZXZyb25VcCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgZmluZCwgZmluZEluZGV4LCBpc0FycmF5IH0gZnJvbSBcImxvZGFzaFwiO1xuXG5pbXBvcnQgeyBib2xkTnVtYmVycyB9IGZyb20gXCIuLi91dGlscy93cml0aW5nXCI7XG5pbXBvcnQgQ09OVFJBRElDVElPTlMgZnJvbSBcIi4uL2NvbnN0YW50cy9jb250cmFkaWN0aW9uc1wiO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBUaXRsZVNlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UaXRsZVNlY3Rpb25cIjtcbmltcG9ydCBSZWFkaW5nQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1JlYWRpbmdDb250YWluZXJcIjtcblxuZnVuY3Rpb24gcmVuZGVyUGFzc2FnZShwYXNzYWdlLCBpbmRleCkge1xuICBjb25zdCB0ZXh0ID0gaXNBcnJheShwYXNzYWdlLnRleHQpID8gKFxuICAgIHBhc3NhZ2UudGV4dC5tYXAoKHBhcmFncmFwaCwgaW5kZXgxKSA9PiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGtleT17aW5kZXgxfVxuICAgICAgICBjbGFzc05hbWU9XCJmaXJzdFwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBib2xkTnVtYmVycyhwYXJhZ3JhcGgpXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICkpXG4gICkgOiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwiZmlyc3RcIlxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgX19odG1sOiBib2xkTnVtYmVycyhwYXNzYWdlLnRleHQpXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgPGJsb2NrcXVvdGUgY2xhc3NOYW1lPXtpbmRleCA9PT0gMCA/IFwiZmlyc3RcIiA6IFwiXCJ9PlxuICAgICAgICA8c3Ryb25nPntwYXNzYWdlLnBhc3NhZ2V9PC9zdHJvbmc+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9ibG9ja3F1b3RlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJMaW5rKHsgaW5kZXgsIGJvb2ssIGJvb2tWZXJzZXMsIGNvdW50LCBxdWVzdGlvbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17eyBtYXJnaW5Ub3A6IDYgfX0+XG4gICAgICA8YVxuICAgICAgICBocmVmPXtgIyR7Ym9va31fJHtib29rVmVyc2VzfWB9XG4gICAgICAgIGlkPXtgdG9wXyR7Ym9va31fJHtib29rVmVyc2VzfWB9XG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBgJHtjb3VudH0pICR7Ym9va1ZlcnNlc30gLSAke3F1ZXN0aW9ufWBcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFuc3dlcih7XG4gIGluZGV4LFxuICBib29rLFxuICBib29rVmVyc2VzLFxuICBmb3VuZEJvb2tWZXJzZXMsXG4gIHF1ZXN0aW9uLFxuICBhbGxQYXNzYWdlcyxcbiAgcXVpY2tBbnN3ZXIsXG4gIGZ1bGxQb3N0LFxuICBjb3VudCxcbiAgaGlkZURldGFpbHMsXG4gIHRvZ2dsZURldGFpbFxufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGtleT17aW5kZXh9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBib3JkZXI6IFwiM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjU0KVwiLFxuICAgICAgICBib3JkZXJCb3R0b206IDAsXG4gICAgICAgIGJvcmRlckxlZnQ6IDAsXG4gICAgICAgIGJvcmRlclJpZ2h0OiAwLFxuICAgICAgICBtYXJnaW5Ub3A6IDIwXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxhIGhyZWY9e2AjdG9wYH0gc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgbWFyZ2luVG9wOiAyMCB9fT5cbiAgICAgICAgPEZhQ2hldnJvblVwIC8+IFRvcFxuICAgICAgPC9hPlxuICAgICAgPGFcbiAgICAgICAgaHJlZj17YCMke2Jvb2t9YH1cbiAgICAgICAgaWQ9e2Ake2Jvb2t9XyR7Ym9va1ZlcnNlc31gfVxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCBtYXJnaW5MZWZ0OiAyMCwgbWFyZ2luVG9wOiAyMCB9fVxuICAgICAgPlxuICAgICAgICA8RmFDaGV2cm9uVXAgLz4ge2Jvb2t9XG4gICAgICA8L2E+XG4gICAgICA8aDNcbiAgICAgICAgY2xhc3NOYW1lPVwibm9tYXJnaW5cIlxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgIF9faHRtbDogYCR7Y291bnR9KSAke2Jvb2tWZXJzZXN9IC0gJHtxdWVzdGlvbn1gXG4gICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICB7Zm91bmRCb29rVmVyc2VzID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZpcnN0XCI+XG4gICAgICAgICAgICBTYW1lIGFze1wiIFwifVxuICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAge2Jvb2t9IHtmb3VuZEJvb2tWZXJzZXN9IC0ge3F1ZXN0aW9ufVxuICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJub21hcmdpblwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEZXRhaWx9XG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjMDM5QkU1XCIsIGZvbnRTaXplOiAxNiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtoaWRlRGV0YWlscyA/IGBTaG93IGAgOiBgSGlkZSBgfSBhbnN3ZXJcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICB7aGlkZURldGFpbHMgPyBudWxsIDogKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmaXJzdFwiPlF1aWNrIGFuc3dlcjwvaDQ+XG4gICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHF1aWNrQW5zd2VyIH19IC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIEZ1bGwgcG9zdDp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17ZnVsbFBvc3R9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAge3F1ZXN0aW9ufVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aDQ+UGFzc2FnZXM8L2g0PlxuICAgICAgICAgIHthbGxQYXNzYWdlcy5tYXAoKHBhc3NhZ2VHcm91cCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChwYXNzYWdlR3JvdXAuaGVhZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17aW5kZXggPT09IDAgPyBcImZpcnN0XCIgOiBcIlwifT5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57cGFzc2FnZUdyb3VwLmhlYWRpbmd9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICB7cGFzc2FnZUdyb3VwLnBhc3NhZ2VzLm1hcCgocGFzc2FnZSwgaW5kZXgxKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJQYXNzYWdlKHBhc3NhZ2UsIGluZGV4MSk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlbmRlclBhc3NhZ2UocGFzc2FnZUdyb3VwLCBpbmRleCk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgQmlibGVDb250cmFkaWN0aW9ucyA9ICgpID0+IHtcbiAgbGV0IFtkZXRhaWxzLCBzZXREZXRhaWxzXSA9IHVzZVN0YXRlKHt9KTtcblxuICBsZXQgbGlua0NvdW50ID0gMDtcbiAgbGV0IGFuc3dlckNvdW50ID0gMDtcblxuICBjb25zdCBpbWFnZV91cmwgPSBcImh0dHBzOi8vaS5pbWd1ci5jb20vZmFBbURoWS5wbmdcIjtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBgRXhwbGFuYXRpb25zIGZvciBldmVyeSBhbGxlZ2VkIFwiY29udHJhZGljdGlvblwiIGluIHRoZSBCaWJsZSwgaW5jbHVkaW5nIHBhc3NhZ2VzLCBxdWljayBhbnN3ZXIsIGFuZCBhIGxpbmsgdG8gYSBmdWxsZXIgcG9zdCBmb3IgZWFjaCBhbGxlZ2VkIEJpYmxlIFwiY29udHJhZGljdGlvbi5cImA7XG4gIGNvbnN0IGRhdGVfYWRkZWQgPSBcIjIwMTgtMTEtMjZcIjtcbiAgY29uc3QgdXBkYXRlZF9hdCA9IFwiMjAxOC0xMS0yNlwiO1xuXG4gIGNvbnN0IG51bWJlcnMgPSBDT05UUkFESUNUSU9OUy5yZWR1Y2UoXG4gICAgKHJlc3VsdCwgYm9vaykgPT4ge1xuICAgICAgYm9vay5hbnN3ZXJzLmZvckVhY2goYW5zd2VyID0+IHtcbiAgICAgICAgaWYgKCFhbnN3ZXIuc2VlKSB7XG4gICAgICAgICAgcmVzdWx0LnRvdGFsKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFuc3dlci5xdWlja0Fuc3dlciAmJiAhYW5zd2VyLnNlZSkge1xuICAgICAgICAgIHJlc3VsdC5ub1F1aWNrQW5zd2VyKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFuc3dlci5mdWxsUG9zdCAmJiAhYW5zd2VyLnNlZSkge1xuICAgICAgICAgIHJlc3VsdC5ub0Z1bGxQb3N0Kys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG4gICAge1xuICAgICAgdG90YWw6IDAsXG4gICAgICBub1F1aWNrQW5zd2VyOiAwLFxuICAgICAgbm9GdWxsUG9zdDogMFxuICAgIH1cbiAgKTtcblxuICBjb25zdCBwYWdlVGl0bGUgPSBgXCJDb250cmFkaWN0aW9uc1wiIGluIHRoZSBCaWJsZTogRXZlcnkgYWxsZWdlZCBiaWJsaWNhbCBcImNvbnRyYWRpY3Rpb25cIiBleHBsYWluZWRgO1xuXG4gIGNvbnN0IGRhdGVQdWJsaXNoZWQgPSBuZXcgRGF0ZShkYXRlX2FkZGVkKTtcblxuICBjb25zdCBtYXR0aGV3SW5kZXggPSBmaW5kSW5kZXgoXG4gICAgQ09OVFJBRElDVElPTlMsXG4gICAgYm9vayA9PiBib29rLmJvb2sgPT09IFwiTWF0dGhld1wiXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cGFnZVRpdGxlfSB8IEJpYmxlIEFuc3dlcnM8L3RpdGxlPlxuXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6dXJsXCJcbiAgICAgICAgICBjb250ZW50PXtgaHR0cHM6Ly9iaWJsZWFuc3dlcnMuaW8vdGFncy9jb250cmFkaWN0aW9uc2B9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtwYWdlVGl0bGV9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2ltYWdlX3VybH0gLz5cblxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL2xkK2pzb25cIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICBfX2h0bWw6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgXCJAY29udGV4dFwiOiBcImh0dHA6Ly9zY2hlbWEub3JnXCIsXG4gICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJBcnRpY2xlXCIsXG4gICAgICAgICAgICAgIG1haW5FbnRpdHlPZlBhZ2U6IHtcbiAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiV2ViUGFnZVwiLFxuICAgICAgICAgICAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly9nb29nbGUuY29tL2FydGljbGVcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBoZWFkbGluZTogcGFnZVRpdGxlLFxuICAgICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJJbWFnZU9iamVjdFwiLFxuICAgICAgICAgICAgICAgIHVybDogaW1hZ2VfdXJsLFxuICAgICAgICAgICAgICAgIGhlaWdodDogNDAwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMjAwXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRhdGVQdWJsaXNoZWQ6IGRhdGVQdWJsaXNoZWQsXG4gICAgICAgICAgICAgIGRhdGVNb2RpZmllZDogbmV3IERhdGUodXBkYXRlZF9hdCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICAgYXV0aG9yOiB7XG4gICAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiTWljaGFlbCBDaGVuZ1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHB1Ymxpc2hlcjoge1xuICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJpYmxlIEFuc3dlcnNcIixcbiAgICAgICAgICAgICAgICBsb2dvOiB7XG4gICAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiSW1hZ2VPYmplY3RcIixcbiAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL2kuaW1ndXIuY29tL2RKUHhQWTkucG5nXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8VGl0bGVTZWN0aW9uXG4gICAgICAgIHRpdGxlPXtwYWdlVGl0bGV9XG4gICAgICAgIHN1YnRpdGxlPXtgRXhwbGFuYXRpb25zIGZvciBldmVyeSBhbGxlZ2VkIFwiY29udHJhZGljdGlvblwiIGluIHRoZSBCaWJsZWB9XG4gICAgICAgIGltYWdlX3VybD17aW1hZ2VfdXJsfVxuICAgICAgICBkYXRlX2FkZGVkPXtkYXRlX2FkZGVkfVxuICAgICAgICB1c2VyPXt7XG4gICAgICAgICAgbmFtZTogXCJNaWNoYWVsIENoZW5nXCIsXG4gICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS84YU4zMURuLnBuZ1wiXG4gICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICA8UmVhZGluZ0NvbnRhaW5lcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cml0aW5nXCI+XG4gICAgICAgICAgPGEgaWQ9XCJ0b3BcIiBzdHlsZT17eyBjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIC44NClcIiB9fT5cbiAgICAgICAgICAgIDxoMz5UYWJsZSBvZiBjb250ZW50czwvaDM+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGg0Pk92ZXJ2aWV3PC9oND5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3RcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9e2AjaW50cm9kdWN0aW9uYH0+MS4gSW50cm9kdWN0aW9uPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3RcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9e2AjZmFxc2B9PjIuIEZyZXF1ZW50bHkgYXNrZWQgcXVlc3Rpb25zPC9hPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGg0Pk9sZCBUZXN0YW1lbnQ8L2g0PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1jb250ZW50cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIHtDT05UUkFESUNUSU9OUy5zbGljZSgwLCBtYXR0aGV3SW5kZXgpLm1hcChib29rID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWNvbnRlbnRzLWl0ZW1cIiBrZXk9e2Jvb2suYm9va30+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtgIyR7Ym9vay5ib29rfWB9PlxuICAgICAgICAgICAgICAgICAgICB7Ym9vay5ib29rfSAoe2Jvb2suYW5zd2Vycy5sZW5ndGh9KVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aDQ+TmV3IFRlc3RhbWVudDwvaDQ+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWNvbnRlbnRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge0NPTlRSQURJQ1RJT05TLnNsaWNlKG1hdHRoZXdJbmRleCkubWFwKGJvb2sgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtY29udGVudHMtaXRlbVwiIGtleT17Ym9vay5ib29rfT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AjJHtib29rLmJvb2t9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtib29rLmJvb2t9ICh7Ym9vay5hbnN3ZXJzLmxlbmd0aH0pXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxoMz5Xb3JrIGluIHByb2dyZXNzPC9oMz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFRoaXMgcGFnZSBpcyBzdGlsbCBhIHdvcmsgaW4gcHJvZ3Jlc3MuIFBsZWFzZSBjaGVjayBiYWNrIHRvIHNlZVxuICAgICAgICAgICAgdXBkYXRlcyFcbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmaXJzdFwiPlRvdGFsIGV4cGxhbmF0aW9uczoge251bWJlcnMudG90YWx9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZpcnN0XCI+XG4gICAgICAgICAgICBRdWljayBhbnN3ZXJzIHJlbWFpbmluZzoge251bWJlcnMubm9RdWlja0Fuc3dlcn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlyc3RcIj5GdWxsIHBvc3QgcmVtYWluaW5nOiB7bnVtYmVycy5ub0Z1bGxQb3N0fTwvcD5cblxuICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgIDxhIGlkPVwiaW50cm9kdWN0aW9uXCIgY2xhc3NOYW1lPVwibGluay10YXJnZXRcIj5cbiAgICAgICAgICAgICAgSW50cm9kdWN0aW9uXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9oMz5cblxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgT3Bwb25lbnRzIG9mIHRoZSBCaWJsZSBjbGFpbSB0aGF0IGl0IGNvbnRhaW5zIG51bWVyb3VzXG4gICAgICAgICAgICBpcnJlY29uY2lsYWJsZSBjb250cmFkaWN0aW9ucy4gSG93ZXZlciwgbm9uZSBvZiB0aGUgXCJhbGxlZ2VkXCJcbiAgICAgICAgICAgIGNvbnRyYWRpY3Rpb25zIGluIHRoZSBCaWJsZSBhcmUgdHJ1bHkgaXJyZWNvbmNpbGFibGUuXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBUaGUgcHVycG9zZSBvZiB0aGlzIHBhZ2UgaXMgdG8gcHJvdmlkZSBwb3NzaWJsZSBleHBsYW5hdGlvbnMgZm9yXG4gICAgICAgICAgICBldmVyeSBhbGxlZ2VkIFwiY29udHJhZGljdGlvblwiIGluIHRoZSBCaWJsZS5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8aDM+XG4gICAgICAgICAgICA8YSBpZD1cImZhcXNcIiBjbGFzc05hbWU9XCJsaW5rLXRhcmdldFwiPlxuICAgICAgICAgICAgICBGcmVxdWVudGx5IGFza2VkIHF1ZXN0aW9uc1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICB7Q09OVFJBRElDVElPTlMubWFwKGJvb2sgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2Jvb2suYm9va30+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AjdG9wYH1cbiAgICAgICAgICAgICAgICAgIGlkPXtib29rLmJvb2t9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAyOFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8RmFDaGV2cm9uVXAgLz5cbiAgICAgICAgICAgICAgICAgICZuYnNwO1RvcFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgICAgIGtleT17Ym9vay5ib29rfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm9tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC41NClcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtib29rLmJvb2t9XG4gICAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICAgIHtib29rLmFuc3dlcnMubWFwKChhbnN3ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICBsaW5rQ291bnQrKztcblxuICAgICAgICAgICAgICAgICAgaWYgKGFuc3dlci5zZWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm91bmRCb29rID0gZmluZChDT05UUkFESUNUSU9OUywgYm9vayA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJvb2suYm9vay50b0xvd2VyQ2FzZSgpID09PSBhbnN3ZXIuc2VlWzBdO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3VuZEFuc3dlciA9IGZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgZm91bmRCb29rLmFuc3dlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgYW5zd2VyRGF0YSA9PiBhbnN3ZXJEYXRhLmJvb2tWZXJzZXMgPT09IGFuc3dlci5zZWVbMV1cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyTGluayh7XG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgYm9vazogYm9vay5ib29rLFxuICAgICAgICAgICAgICAgICAgICAgIGJvb2tWZXJzZXM6IGFuc3dlci5ib29rVmVyc2VzLFxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiBmb3VuZEFuc3dlci5xdWVzdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudDogbGlua0NvdW50XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyTGluayh7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBib29rOiBib29rLmJvb2ssXG4gICAgICAgICAgICAgICAgICAgIC4uLmFuc3dlcixcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IGxpbmtDb3VudFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICB7Ym9vay5hbnN3ZXJzLm1hcCgoYW5zd2VyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgYW5zd2VyQ291bnQrKztcblxuICAgICAgICAgICAgICAgICAgaWYgKGFuc3dlci5zZWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm91bmRCb29rID0gZmluZChcbiAgICAgICAgICAgICAgICAgICAgICBDT05UUkFESUNUSU9OUyxcbiAgICAgICAgICAgICAgICAgICAgICBib29rID0+IGJvb2suYm9vay50b0xvd2VyQ2FzZSgpID09PSBhbnN3ZXIuc2VlWzBdXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm91bmRBbnN3ZXIgPSBmaW5kKFxuICAgICAgICAgICAgICAgICAgICAgIGZvdW5kQm9vay5hbnN3ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgIGFuc3dlckRhdGEgPT4gYW5zd2VyRGF0YS5ib29rVmVyc2VzID09PSBhbnN3ZXIuc2VlWzFdXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsc0tleSA9IGAke2Jvb2suYm9va31fJHthbnN3ZXIuYm9va1ZlcnNlc31gO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhpZGVEZXRhaWxzID0gIWRldGFpbHNbZGV0YWlsc0tleV07XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlckFuc3dlcih7XG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgYm9vazogYm9vay5ib29rLFxuICAgICAgICAgICAgICAgICAgICAgIC4uLmZvdW5kQW5zd2VyLFxuICAgICAgICAgICAgICAgICAgICAgIGZvdW5kQm9va1ZlcnNlczogZm91bmRBbnN3ZXIuYm9va1ZlcnNlcyxcbiAgICAgICAgICAgICAgICAgICAgICBib29rVmVyc2VzOiBhbnN3ZXIuYm9va1ZlcnNlcyxcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudDogYW5zd2VyQ291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgaGlkZURldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlRGV0YWlsKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXRhaWxzS2V5XTogIWRldGFpbHNbZGV0YWlsc0tleV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJBbnN3ZXIoe1xuICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgYm9vazogYm9vay5ib29rLFxuICAgICAgICAgICAgICAgICAgICAuLi5hbnN3ZXIsXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiBhbnN3ZXJDb3VudFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JlYWRpbmdDb250YWluZXI+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC53cml0aW5nIGgzIHtcbiAgICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBoNCB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjIyO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgcCxcbiAgICAgICAgLndyaXRpbmcgb2wsXG4gICAgICAgIC53cml0aW5nIHVsLFxuICAgICAgICAud3JpdGluZyBibG9ja3F1b3RlIHtcbiAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI5cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwOmZpcnN0LWNoaWxkLFxuICAgICAgICAud3JpdGluZyBoMyArIHAsXG4gICAgICAgIC53cml0aW5nIGgzICsgb2wsXG4gICAgICAgIC53cml0aW5nIGgzICsgdWwsXG4gICAgICAgIC53cml0aW5nIGgzICsgYmxvY2txdW90ZSxcbiAgICAgICAgLndyaXRpbmcgaDQgKyBwLFxuICAgICAgICAud3JpdGluZyBoNCArIG9sLFxuICAgICAgICAud3JpdGluZyBoNCArIHVsLFxuICAgICAgICAud3JpdGluZyBoNCArIGJsb2NrcXVvdGUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIG9sLFxuICAgICAgICAud3JpdGluZyB1bCB7XG4gICAgICAgICAgcGFkZGluZzogMCA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgbGkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBsaTpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgYmxvY2txdW90ZSB7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuODQpO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICBsZWZ0OiAtMjBweDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLmZpcnN0IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAubm9tYXJnaW4ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAuaW5kZW50IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5pbWFnZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjlweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5pbWFnZS1sZWZ0IHtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAuaW1hZ2UtcmlnaHQge1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIGEge1xuICAgICAgICAgIGNvbG9yOiAjNjg5ZjM4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5yZWZlcmVuY2Uge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjZlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIC53cml0aW5nIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndyaXRpbmcgaDQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAud3JpdGluZyBwLFxuICAgICAgICAgIC53cml0aW5nIG9sIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndyaXRpbmcgYmxvY2txdW90ZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53cml0aW5nIC5pbWFnZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50YWJsZS1jb250ZW50cy1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRhYmxlLWNvbnRlbnRzLWl0ZW0ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5saW5rLXRhcmdldCB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NCk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJpYmxlQ29udHJhZGljdGlvbnM7XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/pages/contradictions.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BibleContradictions);

/***/ }),

/***/ "./utils/writing.js":
/*!**************************!*\
  !*** ./utils/writing.js ***!
  \**************************/
/*! exports provided: boldNumbers, textRef, renderRefs, getModifiedContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boldNumbers", function() { return boldNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textRef", function() { return textRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderRefs", function() { return renderRefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModifiedContent", function() { return getModifiedContent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function boldNumbers(text) {
  var splitText = text.split(" ");
  var mappedText = splitText.map(function (word) {
    if (parseInt(word) < 100) {
      return "<strong>".concat(word, "</strong>");
    }

    return word;
  });
  return mappedText.join(" ");
}
function textRef(number) {
  return "<span class=\"superscript\"><a class=\"reference\" href=\"#footnote-".concat(number, "\" id=\"text-").concat(number, "\">[").concat(number, "]</a></span>");
}
function renderRefs(references) {
  return "\n    <h4>References</h4>\n\n    <ol class=\"first\">\n      ".concat(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["map"])(references, function (reference, number) {
    return "<li><a class=\"reference-arrow\" href=\"#text-".concat(number, "\" id=\"footnote-").concat(number, "\">^</a> ").concat(reference, "</li>");
  }).join(" "), "\n    </ol>\n  ");
}
function getModifiedContent(post) {
  return getContentWithReferences(post.html, post.references || "");
}

function getContentWithReferences(content, references) {
  if (!references) {
    return content;
  }

  var matches = content.match(/\[[0-9]+\]/g);

  if (matches) {
    content = matches.reduce(function (result, match, index) {
      var number = index + 1;
      return result.replace(match, "<span class=\"superscript\"><a href=\"#footnote-".concat(number, "\" id=\"text-").concat(number, "\">[").concat(number, "]</a></span>"));
    }, content);
  }

  return "\n    ".concat(content, "\n\n    <div class=\"writing\">\n      <h4>References</h4>\n\n      <ol class=\"first\">\n        ").concat(references.split("\n").map(function (reference, index) {
    var number = index + 1;
    return "<li><a class=\"reference-arrow\" href=\"#text-".concat(number, "\" id=\"footnote-").concat(number, "\">^</a> ").concat(reference, "</li>");
  }).join("\n"), "\n      </ol>\n    </div>\n  ");
}

/***/ }),

/***/ 4:
/*!***************************************!*\
  !*** multi ./pages/contradictions.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/contradictions.js */"./pages/contradictions.js");


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-amphtml":
/*!********************************!*\
  !*** external "react-amphtml" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-amphtml");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=contradictions.js.map