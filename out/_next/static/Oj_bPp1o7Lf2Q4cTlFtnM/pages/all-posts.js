(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{383:function(n,e,t){__NEXT_REGISTER_PAGE("/all-posts",function(){return n.exports=t(384),{page:n.exports.default}})},384:function(n,e,t){"use strict";t.r(e);var r=t(29),o=t.n(r),a=t(0),i=t.n(a),u=t(3),c=t(67),l=t.n(c),s=t(89),p=t(56),f=t(88);function d(n,e,t,r,o,a,i){try{var u=n[a](i),c=u.value}catch(n){return void t(n)}u.done?e(c):Promise.resolve(c).then(r,o)}function m(){var n=w(["\n  border: 1px solid rgba(0, 0, 0, 0.54);\n  border-radius: 3px;\n  font-size: 16px;\n  margin: 0 10px 10px 0;\n  padding: 5px 10px;\n  width: 150px;\n"]);return m=function(){return n},n}function b(){var n=w(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 8px;\n  padding: 0 20px;\n"]);return b=function(){return n},n}function h(){var n=w(["\n  color: #689f38;\n  text-decoration: none;\n"]);return h=function(){return n},n}function x(){var n=w(["\n  display: block;\n  font-size: 35px;\n  letter-spacing: 0.6em;\n  text-align: center;\n"]);return x=function(){return n},n}function g(){var n=w(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 23px;\n  font-weight: 400;\n  line-height: 28px;\n  margin-bottom: 30px;\n\n  @media screen and (max-width: 1199px) {\n    font-size: 20px;\n    line-height: 24px;\n    margin-bottom: 10px;\n  }\n"]);return g=function(){return n},n}function v(){var n=w(["\n  font-size: 26px;\n  line-height: 1.22;\n  margin: 0;\n  margin-top: 30px;\n  padding: 0 20px;\n\n  @media screen and (max-width: 768px) {\n    font-size: 24px;\n    margin-top: 22px;\n  }\n"]);return v=function(){return n},n}function y(){var n=w(["\n  align-items: center;\n  display: flex;\n  font-size: 34px;\n  line-height: 1.15;\n\n  @media screen and (max-width: 768px) {\n    font-size: 30px;\n  }\n"]);return y=function(){return n},n}function w(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var E=u.b.h1(y()),_=u.b.h2(v()),O=u.b.div(g()),j=u.b.div(x()),z=u.b.a(h()),k=u.b.div(b()),P=u.b.div(m()),A=function(n){var e=n.tags,t=void 0===e?[]:e,r=n.posts_count,o="".concat(r," Bible Questions and Answers | Bible Answers");return i.a.createElement(s.a,null,i.a.createElement("title",null,o),i.a.createElement("meta",{type:"description",content:"All ".concat(r," of Bible Answers's questions and answers. Learn about and defend the Bible with these questions and answers about a wide range of categories.")}),i.a.createElement(p.a,{style:{marginBottom:0}},i.a.createElement(E,null,r," Bible Questions and Answers"),i.a.createElement(O,null,"Browse all of our questions and answers"),i.a.createElement(j,null,"...")),i.a.createElement("a",{id:"top"},i.a.createElement(_,null,"Tags")),i.a.createElement(k,null,t.map(function(n){return i.a.createElement(z,{key:n.url,href:"#".concat(n.url)},i.a.createElement(P,null,n.title," (",n.posts.length,")"))})),i.a.createElement("br",null),i.a.createElement(p.a,{style:{padding:0}},t.map(function(n){return i.a.createElement("div",{key:n.url},i.a.createElement("a",{id:n.url},i.a.createElement(_,null,n.title," (",n.posts.length,")"," ",i.a.createElement(z,{href:"#top",style:{fontSize:13}},"Back to top"))),n.posts.map(function(n){return i.a.createElement(z,{href:n.url,key:n.url},i.a.createElement(f.a,n))}))})))};A.getInitialProps=function(){var n,e=(n=o.a.mark(function n(e){var t,r;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.query,n.next=3,l()("http://bibleanswersapi.herokuapp.com/tags_for_all_posts");case 3:return t=n.sent,n.next=6,t.json();case 6:return r=n.sent,n.abrupt("return",{tags:r.tags,posts_count:r.posts_count});case 8:case"end":return n.stop()}},n,this)}),function(){var e=this,t=arguments;return new Promise(function(r,o){var a=n.apply(e,t);function i(n){d(a,r,o,i,u,"next",n)}function u(n){d(a,r,o,i,u,"throw",n)}i(void 0)})});return function(n){return e.apply(this,arguments)}}(),e.default=A},88:function(n,e,t){"use strict";var r=t(0),o=t.n(r),a=t(1),i=t.n(a),u=t(3),c=t(55);function l(n){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function s(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function p(n,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function f(n){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function d(n,e){return(d=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function m(){var n=y(["\n  height: 80px;\n  position: relative;\n"]);return m=function(){return n},n}function b(){var n=y(["\n  flex-shrink: 0;\n  height: 80px;\n  margin-left: 20px;\n  overflow: hidden;\n  width: 80px;\n"]);return b=function(){return n},n}function h(){var n=y(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 12px;\n  font-style: italic;\n  margin-top: 8px;\n"]);return h=function(){return n},n}function x(){var n=y(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 16px;\n  line-height: 20px;\n  margin-top: 5px;\n"]);return x=function(){return n},n}function g(){var n=y(["\n  color: rgba(0, 0, 0, 0.84);\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 25px;\n"]);return g=function(){return n},n}function v(){var n=y(["\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  padding: 10px 20px;\n  text-decoration: none;\n\n  &:hover {\n    background: #eee;\n  }\n"]);return v=function(){return n},n}function y(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var w=u.b.div(v()),E=u.b.div(g()),_=u.b.div(x()),O=u.b.div(h()),j=u.b.div(b()),z=Object(u.b)(c.AmpImg)(m()),k=function(n){function e(){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,f(e).apply(this,arguments))}var t,a,u;return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&d(n,e)}(e,r["Component"]),t=e,(a=[{key:"render",value:function(){var n=this.props,e=n.date_added,t=n.image_url_small,r=n.subtitle,a=n.title;return o.a.createElement(w,null,o.a.createElement("div",null,o.a.createElement(E,null,a),o.a.createElement(_,null,r),o.a.createElement(O,null,e?i()(new Date(e)).format("MMM Do, YYYY"):null)),o.a.createElement(j,null,o.a.createElement(z,{specName:"default",src:t,width:"80",height:"80",alt:"AMP"})))}}])&&s(t.prototype,a),u&&s(t,u),e}();e.a=k}},[[383,1,0]]]);