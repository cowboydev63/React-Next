(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{392:function(e,n,t){__NEXT_REGISTER_PAGE("/",function(){return e.exports=t(393),{page:e.exports.default}})},393:function(e,n,t){"use strict";t.r(n);var r=t(29),o=t.n(r),i=t(0),a=t.n(i),u=t(3),c=t(67),l=t.n(c),s=t(89),p=t(88),f=t(56);function m(e,n,t,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void t(e)}u.done?n(c):Promise.resolve(c).then(r,o)}function b(e){return function(){var n=this,t=arguments;return new Promise(function(r,o){var i=e.apply(n,t);function a(e){m(i,r,o,a,u,"next",e)}function u(e){m(i,r,o,a,u,"throw",e)}a(void 0)})}}function d(){var e=x(["\n  color: #689f38;\n  cursor: pointer;\n  font-size: 18px;\n  margin-top: 10px;\n  text-decoration: none;\n"]);return d=function(){return e},e}function h(){var e=x(["\n  text-decoration: none;\n"]);return h=function(){return e},e}function v(){var e=x(["\n  color: #689f38;\n  cursor: pointer;\n  font-size: 18px;\n  margin-bottom: 6px;\n"]);return v=function(){return e},e}function g(){var e=x(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return g=function(){return e},e}function y(){var e=x(["\n  align-items: center;\n  display: flex;\n  font-size: 34px;\n  line-height: 1.15;\n  padding: 0 20px;\n\n  @media screen and (max-width: 768px) {\n    font-size: 30px;\n  }\n"]);return y=function(){return e},e}function x(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var w=u.b.h2(y()),E=u.b.div(g()),_=u.b.div(v()),O=u.b.a(h()),j=u.b.a(d()),P=function(e){var n=e.recentPosts,t=void 0===n?[]:n,r=e.tags,o=void 0===r?[]:r,i=e.postsCount;return a.a.createElement(s.a,null,a.a.createElement("title",null,"Bible Answers | Explaining and Defending the Christian Worldview"),a.a.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"http://schema.org","@type":"WebSite",url:"https://bibleanswers.io/",potentialAction:{"@type":"SearchAction",target:"https://bibleanswers.io/search?q={search_term_string}","query-input":"required name=search_term_string"}})}}),a.a.createElement(E,null,a.a.createElement(f.a,{style:{padding:0}},a.a.createElement(w,null,"Recent posts"),t.map(function(e){return a.a.createElement(O,{key:e.url,href:e.url},a.a.createElement(p.a,e))}),a.a.createElement("center",null,a.a.createElement(j,{href:"all-posts"},"All ",i," posts"))),a.a.createElement(f.a,{style:{width:"initial"}},a.a.createElement(w,{style:{padding:0}},"Tags"),a.a.createElement("ul",null,o.map(function(e){return a.a.createElement(O,{key:e.url,href:e.url},a.a.createElement("li",null,a.a.createElement(_,null,e.title," (",e.posts_count,")")))})),a.a.createElement(j,{href:"/posts-in-progress"},"Posts in progress"))))};P.getInitialProps=b(o.a.mark(function e(){var n,t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l()("http://bibleanswersapi.herokuapp.com/homefetch");case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.abrupt("return",{recentPosts:t.recent_posts,tags:t.tags,postsCount:t.posts_count});case 7:case"end":return e.stop()}},e,this)})),n.default=P},88:function(e,n,t){"use strict";var r=t(0),o=t.n(r),i=t(1),a=t.n(i),u=t(3),c=t(55);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,n){return!n||"object"!==l(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function b(){var e=x(["\n  height: 80px;\n  position: relative;\n"]);return b=function(){return e},e}function d(){var e=x(["\n  flex-shrink: 0;\n  height: 80px;\n  margin-left: 20px;\n  overflow: hidden;\n  width: 80px;\n"]);return d=function(){return e},e}function h(){var e=x(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 12px;\n  font-style: italic;\n  margin-top: 8px;\n"]);return h=function(){return e},e}function v(){var e=x(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 16px;\n  line-height: 20px;\n  margin-top: 5px;\n"]);return v=function(){return e},e}function g(){var e=x(["\n  color: rgba(0, 0, 0, 0.84);\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 25px;\n"]);return g=function(){return e},e}function y(){var e=x(["\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  padding: 10px 20px;\n  text-decoration: none;\n\n  &:hover {\n    background: #eee;\n  }\n"]);return y=function(){return e},e}function x(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var w=u.b.div(y()),E=u.b.div(g()),_=u.b.div(v()),O=u.b.div(h()),j=u.b.div(d()),P=Object(u.b)(c.AmpImg)(b()),z=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),p(this,f(n).apply(this,arguments))}var t,i,u;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(n,r["Component"]),t=n,(i=[{key:"render",value:function(){var e=this.props,n=e.date_added,t=e.image_url_small,r=e.subtitle,i=e.title;return o.a.createElement(w,null,o.a.createElement("div",null,o.a.createElement(E,null,i),o.a.createElement(_,null,r),o.a.createElement(O,null,n?a()(new Date(n)).format("MMM Do, YYYY"):null)),o.a.createElement(j,null,o.a.createElement(P,{specName:"default",src:t,width:"80",height:"80",alt:"AMP"})))}}])&&s(t.prototype,i),u&&s(t,u),n}();n.a=z}},[[392,1,0]]]);