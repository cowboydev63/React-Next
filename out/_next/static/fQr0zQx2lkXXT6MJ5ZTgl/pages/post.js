(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{123:function(n,e,t){"use strict";var r=t(4);Object.defineProperty(e,"__esModule",{value:!0}),e.defaultHead=h,e.default=void 0;var i=r(t(34)),a=r(t(6)),o=r(t(7)),l=r(t(21)),u=r(t(22)),c=r(t(23)),f=r(t(12)),p=r(t(0)),d=r(t(28)),s=r(t(124)),m=function(n){function e(){return(0,a.default)(this,e),(0,l.default)(this,(0,u.default)(e).apply(this,arguments))}return(0,c.default)(e,n),(0,o.default)(e,[{key:"render",value:function(){return null}}]),e}(p.default.Component);(0,f.default)(m,"contextTypes",{headManager:d.default.object});var g="next-head";function h(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;return[p.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:n})]}var x=["name","httpEquiv","charSet","itemProp","property"],w=["article:tag","og:image","og:image:alt","og:image:width","og:image:height","og:image:type","og:image:secure_url","og:image:url"];var v=(0,s.default)(function(n){return n.map(function(n){return p.default.Children.toArray(n.props.children)}).reduce(function(n,e){return n.concat(e)},[]).reduce(function(n,e){return p.default.Fragment&&e.type===p.default.Fragment?n.concat(p.default.Children.toArray(e.props.children)):n.concat(e)},[]).reverse().concat(h("")).filter(Boolean).filter((e=new i.default,t=new i.default,r=new i.default,a={},function(n){if(n.key&&0===n.key.indexOf(".$")){if(e.has(n.key))return!1;e.add(n.key)}switch(n.type){case"title":case"base":if(t.has(n.type))return!1;t.add(n.type);break;case"meta":for(var o=0,l=x.length;o<l;o++){var u=x[o];if(n.props.hasOwnProperty(u))if("charSet"===u){if(r.has(u))return!1;r.add(u)}else{var c=n.props[u],f=a[u]||new i.default;if(f.has(c)&&-1===w.indexOf(c))return!1;f.add(c),a[u]=f}}}return!0})).reverse().map(function(n,e){var t=(n.props&&n.props.className?n.props.className+" ":"")+g,r=n.key||e;return p.default.cloneElement(n,{key:r,className:t})});var e,t,r,a},function(n){this.context&&this.context.headManager&&this.context.headManager.updateHead(n)},function(n){return n})(m);e.default=v},124:function(n,e,t){"use strict";var r=t(30),i=t(4);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(n,e,t){if("function"!=typeof n)throw new Error("Expected reduceComponentsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==t&&"function"!=typeof t)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var i,h=new s.default;function x(r){i=n((0,d.default)(h)),w.canUseDOM?e.call(r,i):t&&(i=t(i))}var w=function(n){function e(n){var t;return(0,a.default)(this,e),t=(0,o.default)(this,(0,l.default)(e).call(this,n)),e.canUseDOM||(h.add((0,f.default)((0,f.default)(t))),x((0,f.default)((0,f.default)(t)))),t}return(0,c.default)(e,n),(0,u.default)(e,null,[{key:"peek",value:function(){return i}},{key:"rewind",value:function(){if(e.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var n=i;return i=void 0,h.clear(),n}}]),(0,u.default)(e,[{key:"componentDidMount",value:function(){h.add(this),x(this)}},{key:"componentDidUpdate",value:function(){x(this)}},{key:"componentWillUnmount",value:function(){h.delete(this),x(this)}},{key:"render",value:function(){return m.default.createElement(r,null,this.props.children)}}]),e}(m.Component);return(0,p.default)(w,"canUseDOM","undefined"!=typeof window),(0,p.default)(w,"contextTypes",r.contextTypes),(0,p.default)(w,"displayName","SideEffect(".concat((0,g.getDisplayName)(r),")")),w}};var a=i(t(6)),o=i(t(21)),l=i(t(22)),u=i(t(7)),c=i(t(23)),f=i(t(68)),p=i(t(12)),d=i(t(125)),s=i(t(34)),m=r(t(0)),g=t(20)},125:function(n,e,t){var r=t(126),i=t(127),a=t(135);n.exports=function(n){return r(n)||i(n)||a()}},126:function(n,e,t){var r=t(55);n.exports=function(n){if(r(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}},127:function(n,e,t){var r=t(128),i=t(132);n.exports=function(n){if(i(Object(n))||"[object Arguments]"===Object.prototype.toString.call(n))return r(n)}},128:function(n,e,t){n.exports=t(129)},129:function(n,e,t){t(19),t(130),n.exports=t(3).Array.from},130:function(n,e,t){"use strict";var r=t(18),i=t(5),a=t(27),o=t(90),l=t(91),u=t(49),c=t(131),f=t(54);i(i.S+i.F*!t(95)(function(n){Array.from(n)}),"Array",{from:function(n){var e,t,i,p,d=a(n),s="function"==typeof this?this:Array,m=arguments.length,g=m>1?arguments[1]:void 0,h=void 0!==g,x=0,w=f(d);if(h&&(g=r(g,m>2?arguments[2]:void 0,2)),null==w||s==Array&&l(w))for(t=new s(e=u(d.length));e>x;x++)c(t,x,h?g(d[x],x):d[x]);else for(p=w.call(d),t=new s;!(i=p.next()).done;x++)c(t,x,h?o(p,g,[i.value,x],!0):i.value);return t.length=x,t}})},131:function(n,e,t){"use strict";var r=t(15),i=t(41);n.exports=function(n,e,t){e in n?r.f(n,e,i(0,t)):n[e]=t}},132:function(n,e,t){n.exports=t(133)},133:function(n,e,t){t(33),t(19),n.exports=t(134)},134:function(n,e,t){var r=t(52),i=t(10)("iterator"),a=t(39);n.exports=t(3).isIterable=function(n){var e=Object(n);return void 0!==e[i]||"@@iterator"in e||a.hasOwnProperty(r(e))}},135:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},286:function(n,e,t){n.exports=t(123)},367:function(n,e,t){__NEXT_REGISTER_PAGE("/post",function(){return n.exports=t(382),{page:n.exports.default}})},382:function(n,e,t){"use strict";t.r(e);var r=t(8),i=t.n(r),a=t(0),o=t.n(a),l=t(286),u=t.n(l),c=t(2),f=t(29),p=t(24),d=t.n(p);function s(){var n=function(n,e){e||(e=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n.writing h3 {\n  font-size: 34px;\n  line-height: 1.15;\n  margin: 0;\n  margin-top: 56px;\n}\n\n.writing h4 {\n  font-size: 26px;\n  line-height: 1.22;\n  margin: 0;\n  margin-top: 30px;\n}\n\n.writing h3 + p,\n.writing h3 + ol,\n.writing h3 + ul,\n.writing h3 + blockquote,\n.writing h4 + p,\n.writing h4 + ol,\n.writing h4 + ul,\n.writing h4 + blockquote {\n  margin-top: 8px;\n}\n\n.writing p,\n.writing ol,\n.writing ul,\n.writing blockquote {\n  font-size: 21px;\n  line-height: 1.58;\n  margin: 0;\n  margin-top: 29px;\n}\n\n.writing ol,\n.writing ul {\n  padding: 0 40px;\n}\n\n.writing li {\n  margin-bottom: 10px;\n}\n\n.writing li:last-child {\n  margin-bottom: 0;\n}\n\n.writing blockquote {\n  border-left: 3px solid rgba(0, 0, 0, .84);\n  font-style: italic;\n  left: -20px;\n  padding-left: 20px;\n  position: relative;\n}\n\n.writing .first {\n  margin-top: 8px;\n}\n\n.writing .nomargin {\n  margin-top: 0;\n}\n\n.writing .indent {\n  margin-left: 20px;\n}\n\n.writing .image {\n  margin-top: 29px;\n}\n\n.writing .image-left {\n  float: left;\n  margin-right: 20px;\n}\n\n.writing .image-right {\n  float: right;\n  margin-left: 20px;\n}\n\n.writing a {\n  color: #689f38;\n  text-decoration: none;\n}\n\n.writing .scripture {\n  color: #039BE5;\n}\n\n.writing .reference {\n  font-size: 14px;\n  margin-left: 2px;\n  position: relative;\n  top: -5px;\n}\n\n@media screen and (max-width: 768px) {\n  .writing h3 {\n    font-size: 30px;\n    margin-top: 28px;\n  }\n\n  .writing h4 {\n    font-size: 24px;\n    margin-top: 22px;\n  }\n\n  .writing p,\n  .writing ol {\n    font-size: 18px;\n    margin-top: 21px;\n  }\n\n  .writing blockquote {\n    font-size: 18px;\n    margin-top: 21px;\n  }\n\n  .writing .image {\n    margin-top: 21px;\n  }\n}\n"]);return s=function(){return n},n}var m=Object(c.a)(s()),g=t(25),h=t(13),x=t(1),w=t.n(x);function v(){var n=k(["\n  border-radius: 30px;\n  flex-shrink: 0;\n"]);return v=function(){return n},n}function b(){var n=k(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 16px;\n"]);return b=function(){return n},n}function y(){var n=k(["\n  font-size: 16px;\n  margin-bottom: 4px;\n"]);return y=function(){return n},n}function E(){var n=k(["\n  margin-left: 20px;\n"]);return E=function(){return n},n}function O(){var n=k(["\n  align-items: center;\n  display: flex;\n  margin-top: 20px;\n  max-width: 500px;\n"]);return O=function(){return n},n}function k(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var j=c.b.div(O()),z=c.b.div(E()),P=c.b.div(y()),_=c.b.div(b()),A=Object(c.b)(f.AmpImg)(v()),M=function(n){var e=n.date_added,t=n.image,r=n.name;return o.a.createElement(j,null,o.a.createElement(A,{specName:"default",src:t,width:"60",height:"60",alt:"AMP"}),o.a.createElement(z,null,o.a.createElement(P,null,r),e?o.a.createElement(_,null,w()(new Date(e)).format("MMM Do, YYYY")):o.a.createElement(_,null,"Not published yet")))};function S(){var n=B(["\n  display: block;\n  font-size: 35px;\n  letter-spacing: 0.6em;\n  text-align: center;\n"]);return S=function(){return n},n}function N(){var n=B(["\n  background-position: center;\n  width: 100%;\n"]);return N=function(){return n},n}function D(){var n=B(["\n  align-items: center;\n  display: flex;\n  margin-left: 20px;\n  max-height: 400px;\n  overflow: hidden;\n  width: calc(50% - 10px);\n\n  @media screen and (max-width: 1199px) {\n    margin-left: 0;\n    max-height: 500px;\n    order: -1;\n    width: 100%;\n  }\n"]);return D=function(){return n},n}function I(){var n=B(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 23px;\n  font-weight: 400;\n  line-height: 28px;\n  margin-bottom: 30px;\n\n  @media screen and (max-width: 1199px) {\n    font-size: 20px;\n    line-height: 24px;\n    margin-bottom: 10px;\n  }\n"]);return I=function(){return n},n}function C(){var n=B(["\n  font-size: 56px;\n  font-weight: 500;\n  line-height: 64px;\n  margin: 0;\n  margin-bottom: 16px;\n\n  @media screen and (max-width: 1199px) {\n    font-size: 36px;\n    font-weight: 500;\n    line-height: 40px;\n    margin-bottom: 8px;\n  }\n"]);return C=function(){return n},n}function T(){var n=B(["\n  margin-left: auto;\n  max-width: 552px;\n\n  @media screen and (max-width: 1199px) {\n    margin-left: 0;\n    max-width: none;\n    padding: 0;\n    width: 100%;\n  }\n"]);return T=function(){return n},n}function q(){var n=B(["\n  align-items: center;\n  display: flex;\n  width: calc(50% - 10px);\n\n  @media screen and (max-width: 1199px) {\n    margin: 30px auto 0;\n    max-width: 740px;\n    width: calc(100% - 40px);\n  }\n"]);return q=function(){return n},n}function Y(){var n=B(["\n  display: flex;\n  margin: 0 65px;\n\n  @media screen and (max-width: 1199px) {\n    flex-direction: column;\n    margin: 0;\n  }\n"]);return Y=function(){return n},n}function B(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var H=c.b.div(Y()),U=c.b.div(q()),J=c.b.div(T()),R=c.b.h1(C()),F=c.b.div(I()),L=c.b.div(D()),W=Object(c.b)(f.AmpImg)(N()),G=c.b.div(S()),X=function(n){var e=n.title,t=n.subtitle,r=n.image_url,i=n.date_added,a=n.user,l=void 0===a?{}:a;return o.a.createElement(H,null,o.a.createElement(U,null,o.a.createElement(J,null,o.a.createElement(R,null,e),o.a.createElement(F,null,t||"Help us write this article!"),o.a.createElement(M,{date_added:i,image:l.image,name:l.name}),o.a.createElement(G,null,"..."))),o.a.createElement(L,null,o.a.createElement(W,{specName:"default",src:r||"https://i.imgur.com/SmPYB60.png",width:"1200",height:"400",layout:"responsive",alt:"AMP"})))};function $(n,e,t,r,i,a,o){try{var l=n[a](o),u=l.value}catch(n){return void t(n)}l.done?e(u):Promise.resolve(u).then(r,i)}function K(){var n=function(n,e){e||(e=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n  position: relative;\n  min-height: 2rem;\n"]);return K=function(){return n},n}var Q=Object(c.b)(f.AmpList)(K()),V=function(n){var e=n.post,t=n.slug;if(!e)return[o.a.createElement("h1",null,"Post not found"),o.a.createElement("div",null,o.a.createElement("a",{href:"https://bibleanswers.io"},"Bible Answers Home"))];var r=e.title,i=e.description,a=e.image_url,l=e.date_added,c=e.updated_at,p=e.html,d=l?new Date(l):new Date;return o.a.createElement(g.a,null,o.a.createElement(u.a,null,o.a.createElement("title",null,r," | Bible Answers"),o.a.createElement("meta",{name:"description",content:i}),o.a.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"http://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":"https://google.com/article"},headline:r,image:{"@type":"ImageObject",url:a,height:400,width:1200},datePublished:d,dateModified:new Date(c).toISOString(),author:{"@type":"Person",name:"Michael Cheng"},publisher:{"@type":"Organization",name:"Bible Answers",logo:{"@type":"ImageObject",url:"https://i.imgur.com/dJPxPY9.png"}},description:i})}})),o.a.createElement(m,null),o.a.createElement(X,e),o.a.createElement(h.a,null,o.a.createElement("div",{dangerouslySetInnerHTML:{__html:p}}),o.a.createElement("div",{className:"writing"},o.a.createElement("h3",null,"Related posts"),o.a.createElement(Q,{specName:"default",src:"https://bibleanswersapi.herokuapp.com/relatedposts/".concat(t),items:"items",layout:"fill"},o.a.createElement(f.Template,{specName:"default",type:"amp-mustache"},o.a.createElement("div",null,o.a.createElement("a",{href:"{{url}}",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("p",{className:"first"},"› ","{{title}}"))))))))};V.getInitialProps=function(){var n,e=(n=i.a.mark(function n(e){var t,r,a;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query,n.next=3,d()("http://bibleanswersapi.herokuapp.com/posts/".concat(t.slug));case 3:return r=n.sent,n.next=6,r.json();case 6:return a=n.sent,n.abrupt("return",{post:a,slug:t.slug});case 8:case"end":return n.stop()}},n,this)}),function(){var e=this,t=arguments;return new Promise(function(r,i){var a=n.apply(e,t);function o(n){$(a,r,i,o,l,"next",n)}function l(n){$(a,r,i,o,l,"throw",n)}o(void 0)})});return function(n){return e.apply(this,arguments)}}();e.default=V}},[[367,1,0]]]);