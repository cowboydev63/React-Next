(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{123:function(e,n,t){"use strict";var r=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.defaultHead=g,n.default=void 0;var i=r(t(34)),a=r(t(6)),o=r(t(7)),l=r(t(21)),u=r(t(22)),c=r(t(23)),f=r(t(12)),p=r(t(0)),s=r(t(28)),d=r(t(124)),m=function(e){function n(){return(0,a.default)(this,n),(0,l.default)(this,(0,u.default)(n).apply(this,arguments))}return(0,c.default)(n,e),(0,o.default)(n,[{key:"render",value:function(){return null}}]),n}(p.default.Component);(0,f.default)(m,"contextTypes",{headManager:s.default.object});var h="next-head";function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;return[p.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})]}var w=["name","httpEquiv","charSet","itemProp","property"],x=["article:tag","og:image","og:image:alt","og:image:width","og:image:height","og:image:type","og:image:secure_url","og:image:url"];var v=(0,d.default)(function(e){return e.map(function(e){return p.default.Children.toArray(e.props.children)}).reduce(function(e,n){return e.concat(n)},[]).reduce(function(e,n){return p.default.Fragment&&n.type===p.default.Fragment?e.concat(p.default.Children.toArray(n.props.children)):e.concat(n)},[]).reverse().concat(g("")).filter(Boolean).filter((n=new i.default,t=new i.default,r=new i.default,a={},function(e){if(e.key&&0===e.key.indexOf(".$")){if(n.has(e.key))return!1;n.add(e.key)}switch(e.type){case"title":case"base":if(t.has(e.type))return!1;t.add(e.type);break;case"meta":for(var o=0,l=w.length;o<l;o++){var u=w[o];if(e.props.hasOwnProperty(u))if("charSet"===u){if(r.has(u))return!1;r.add(u)}else{var c=e.props[u],f=a[u]||new i.default;if(f.has(c)&&-1===x.indexOf(c))return!1;f.add(c),a[u]=f}}}return!0})).reverse().map(function(e,n){var t=(e.props&&e.props.className?e.props.className+" ":"")+h,r=e.key||n;return p.default.cloneElement(e,{key:r,className:t})});var n,t,r,a},function(e){this.context&&this.context.headManager&&this.context.headManager.updateHead(e)},function(e){return e})(m);n.default=v},124:function(e,n,t){"use strict";var r=t(30),i=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n,t){if("function"!=typeof e)throw new Error("Expected reduceComponentsToState to be a function.");if("function"!=typeof n)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==t&&"function"!=typeof t)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var i,g=new d.default;function w(r){i=e((0,s.default)(g)),x.canUseDOM?n.call(r,i):t&&(i=t(i))}var x=function(e){function n(e){var t;return(0,a.default)(this,n),t=(0,o.default)(this,(0,l.default)(n).call(this,e)),n.canUseDOM||(g.add((0,f.default)((0,f.default)(t))),w((0,f.default)((0,f.default)(t)))),t}return(0,c.default)(n,e),(0,u.default)(n,null,[{key:"peek",value:function(){return i}},{key:"rewind",value:function(){if(n.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=i;return i=void 0,g.clear(),e}}]),(0,u.default)(n,[{key:"componentDidMount",value:function(){g.add(this),w(this)}},{key:"componentDidUpdate",value:function(){w(this)}},{key:"componentWillUnmount",value:function(){g.delete(this),w(this)}},{key:"render",value:function(){return m.default.createElement(r,null,this.props.children)}}]),n}(m.Component);return(0,p.default)(x,"canUseDOM","undefined"!=typeof window),(0,p.default)(x,"contextTypes",r.contextTypes),(0,p.default)(x,"displayName","SideEffect(".concat((0,h.getDisplayName)(r),")")),x}};var a=i(t(6)),o=i(t(21)),l=i(t(22)),u=i(t(7)),c=i(t(23)),f=i(t(68)),p=i(t(12)),s=i(t(125)),d=i(t(34)),m=r(t(0)),h=t(20)},125:function(e,n,t){var r=t(126),i=t(127),a=t(135);e.exports=function(e){return r(e)||i(e)||a()}},126:function(e,n,t){var r=t(55);e.exports=function(e){if(r(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}},127:function(e,n,t){var r=t(128),i=t(132);e.exports=function(e){if(i(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},128:function(e,n,t){e.exports=t(129)},129:function(e,n,t){t(19),t(130),e.exports=t(3).Array.from},130:function(e,n,t){"use strict";var r=t(18),i=t(5),a=t(27),o=t(90),l=t(91),u=t(49),c=t(131),f=t(54);i(i.S+i.F*!t(95)(function(e){Array.from(e)}),"Array",{from:function(e){var n,t,i,p,s=a(e),d="function"==typeof this?this:Array,m=arguments.length,h=m>1?arguments[1]:void 0,g=void 0!==h,w=0,x=f(s);if(g&&(h=r(h,m>2?arguments[2]:void 0,2)),null==x||d==Array&&l(x))for(t=new d(n=u(s.length));n>w;w++)c(t,w,g?h(s[w],w):s[w]);else for(p=x.call(s),t=new d;!(i=p.next()).done;w++)c(t,w,g?o(p,h,[i.value,w],!0):i.value);return t.length=w,t}})},131:function(e,n,t){"use strict";var r=t(15),i=t(41);e.exports=function(e,n,t){n in e?r.f(e,n,i(0,t)):e[n]=t}},132:function(e,n,t){e.exports=t(133)},133:function(e,n,t){t(33),t(19),e.exports=t(134)},134:function(e,n,t){var r=t(52),i=t(10)("iterator"),a=t(39);e.exports=t(3).isIterable=function(e){var n=Object(e);return void 0!==n[i]||"@@iterator"in n||a.hasOwnProperty(r(n))}},135:function(e,n){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},286:function(e,n,t){e.exports=t(123)},367:function(e,n,t){__NEXT_REGISTER_PAGE("/post",function(){return e.exports=t(382),{page:e.exports.default}})},382:function(e,n,t){"use strict";t.r(n);var r=t(8),i=t.n(r),a=t(0),o=t.n(a),l=t(286),u=t.n(l),c=t(2),f=t(29),p=t(24),s=t.n(p);function d(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n.writing h3 {\n  font-size: 34px;\n  line-height: 1.15;\n  margin: 0;\n  margin-top: 56px;\n}\n\n.writing h4 {\n  font-size: 26px;\n  line-height: 1.22;\n  margin: 0;\n  margin-top: 30px;\n}\n\n.writing h3 + p,\n.writing h3 + ol,\n.writing h3 + ul,\n.writing h3 + blockquote,\n.writing h4 + p,\n.writing h4 + ol,\n.writing h4 + ul,\n.writing h4 + blockquote {\n  margin-top: 8px;\n}\n\n.writing p,\n.writing ol,\n.writing ul,\n.writing blockquote {\n  font-size: 21px;\n  line-height: 1.58;\n  margin: 0;\n  margin-top: 29px;\n}\n\n.writing ol,\n.writing ul {\n  padding: 0 40px;\n}\n\n.writing li {\n  margin-bottom: 10px;\n}\n\n.writing li:last-child {\n  margin-bottom: 0;\n}\n\n.writing blockquote {\n  border-left: 3px solid rgba(0, 0, 0, .84);\n  font-style: italic;\n  left: -20px;\n  padding-left: 20px;\n  position: relative;\n}\n\n.writing .first {\n  margin-top: 8px;\n}\n\n.writing .nomargin {\n  margin-top: 0;\n}\n\n.writing .indent {\n  margin-left: 20px;\n}\n\n.writing .image {\n  margin-top: 29px;\n}\n\n.writing .image-left {\n  float: left;\n  margin-right: 20px;\n}\n\n.writing .image-right {\n  float: right;\n  margin-left: 20px;\n}\n\n.writing a {\n  color: #689f38;\n  text-decoration: none;\n}\n\n.writing .scripture {\n  color: #039BE5;\n}\n\n.writing .reference {\n  font-size: 14px;\n  margin-left: 2px;\n  position: relative;\n  top: -5px;\n}\n\n@media screen and (max-width: 768px) {\n  .writing h3 {\n    font-size: 30px;\n    margin-top: 28px;\n  }\n\n  .writing h4 {\n    font-size: 24px;\n    margin-top: 22px;\n  }\n\n  .writing p,\n  .writing ol {\n    font-size: 18px;\n    margin-top: 21px;\n  }\n\n  .writing blockquote {\n    font-size: 18px;\n    margin-top: 21px;\n  }\n\n  .writing .image {\n    margin-top: 21px;\n  }\n}\n"]);return d=function(){return e},e}var m=Object(c.a)(d()),h=t(25),g=t(13),w=t(1),x=t.n(w);function v(){var e=k(["\n  border-radius: 30px;\n  flex-shrink: 0;\n"]);return v=function(){return e},e}function b(){var e=k(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 16px;\n"]);return b=function(){return e},e}function y(){var e=k(["\n  font-size: 16px;\n  margin-bottom: 4px;\n"]);return y=function(){return e},e}function E(){var e=k(["\n  margin-left: 20px;\n"]);return E=function(){return e},e}function O(){var e=k(["\n  align-items: center;\n  display: flex;\n  margin-top: 20px;\n  max-width: 500px;\n"]);return O=function(){return e},e}function k(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var j=c.b.div(O()),z=c.b.div(E()),P=c.b.div(y()),_=c.b.div(b()),A=Object(c.b)(f.AmpImg)(v()),M=function(e){var n=e.date_added,t=e.image,r=e.name;return o.a.createElement(j,null,o.a.createElement(A,{specName:"default",src:t,width:"60",height:"60",alt:"AMP"}),o.a.createElement(z,null,o.a.createElement(P,null,r),n?o.a.createElement(_,null,x()(new Date(n)).format("MMM Do, YYYY")):o.a.createElement(_,null,"Not published yet")))};function N(){var e=B(["\n  display: block;\n  font-size: 35px;\n  letter-spacing: 0.6em;\n  text-align: center;\n"]);return N=function(){return e},e}function S(){var e=B(["\n  background-position: center;\n  width: 100%;\n"]);return S=function(){return e},e}function D(){var e=B(["\n  align-items: center;\n  display: flex;\n  margin-left: 20px;\n  max-height: 400px;\n  overflow: hidden;\n  width: calc(50% - 10px);\n\n  @media screen and (max-width: 1199px) {\n    margin-left: 0;\n    max-height: 500px;\n    order: -1;\n    width: 100%;\n  }\n"]);return D=function(){return e},e}function I(){var e=B(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 23px;\n  font-weight: 400;\n  line-height: 28px;\n  margin-bottom: 30px;\n\n  @media screen and (max-width: 1199px) {\n    font-size: 20px;\n    line-height: 24px;\n    margin-bottom: 10px;\n  }\n"]);return I=function(){return e},e}function C(){var e=B(["\n  font-size: 56px;\n  font-weight: 500;\n  line-height: 64px;\n  margin: 0;\n  margin-bottom: 16px;\n\n  @media screen and (max-width: 1199px) {\n    font-size: 36px;\n    font-weight: 500;\n    line-height: 40px;\n    margin-bottom: 8px;\n  }\n"]);return C=function(){return e},e}function T(){var e=B(["\n  margin-left: auto;\n  max-width: 552px;\n\n  @media screen and (max-width: 1199px) {\n    margin-left: 0;\n    max-width: none;\n    padding: 0;\n    width: 100%;\n  }\n"]);return T=function(){return e},e}function q(){var e=B(["\n  align-items: center;\n  display: flex;\n  width: calc(50% - 10px);\n\n  @media screen and (max-width: 1199px) {\n    margin: 30px auto 0;\n    max-width: 740px;\n    width: calc(100% - 40px);\n  }\n"]);return q=function(){return e},e}function Y(){var e=B(["\n  display: flex;\n  margin: 0 65px;\n\n  @media screen and (max-width: 1199px) {\n    flex-direction: column;\n    margin: 0;\n  }\n"]);return Y=function(){return e},e}function B(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var H=c.b.div(Y()),U=c.b.div(q()),J=c.b.div(T()),R=c.b.h1(C()),W=c.b.div(I()),F=c.b.div(D()),L=Object(c.b)(f.AmpImg)(S()),G=c.b.div(N()),X=function(e){var n=e.title,t=e.subtitle,r=e.image_url,i=e.date_added,a=e.user;return o.a.createElement(H,null,o.a.createElement(U,null,o.a.createElement(J,null,o.a.createElement(R,null,n),o.a.createElement(W,null,t||"Help us write this article!"),a?o.a.createElement(M,{date_added:i,image:a.image,name:a.name}):null,o.a.createElement(G,null,"..."))),o.a.createElement(F,null,o.a.createElement(L,{specName:"default",src:r||"https://i.imgur.com/SmPYB60.png",width:"1200",height:"400",layout:"responsive",alt:"AMP"})))},$=function(e){var n=e.description,t=e.title;return o.a.createElement("div",{className:"writing"},o.a.createElement("h3",null,t),o.a.createElement("p",{className:"first"},n),o.a.createElement("h3",null,"This article still needs to be written!"),o.a.createElement("p",{className:"first"},"Would you consider helping us write this article? If you would like to help others learn more about the Christian faith, as well as have an article be attributed to you as the author (with a link to your website, if you have one), simply send an email to"," ",o.a.createElement("strong",null,"cheng.c.michael@gmail.com"),", and we can provide you with more specific instructions for contributing!"))};function K(e,n,t,r,i,a,o){try{var l=e[a](o),u=l.value}catch(e){return void t(e)}l.done?n(u):Promise.resolve(u).then(r,i)}function Q(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  position: relative;\n  min-height: 2rem;\n"]);return Q=function(){return e},e}var V=Object(c.b)(f.AmpList)(Q()),Z=function(e){var n=e.post,t=e.slug;if(!n)return[o.a.createElement("h1",null,"Post not found"),o.a.createElement("div",null,o.a.createElement("a",{href:"https://bibleanswers.io"},"Bible Answers Home"))];var r=n.title,i=n.description,a=n.image_url,l=n.date_added,c=n.updated_at,p=n.html,s=n.published,d=l?new Date(l):new Date;return o.a.createElement(h.a,null,o.a.createElement(u.a,null,o.a.createElement("title",null,r," | Bible Answers"),o.a.createElement("meta",{name:"description",content:i}),o.a.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"http://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":"https://google.com/article"},headline:r,image:{"@type":"ImageObject",url:a,height:400,width:1200},datePublished:d,dateModified:new Date(c).toISOString(),author:{"@type":"Person",name:"Michael Cheng"},publisher:{"@type":"Organization",name:"Bible Answers",logo:{"@type":"ImageObject",url:"https://i.imgur.com/dJPxPY9.png"}},description:i})}})),o.a.createElement(m,null),o.a.createElement(X,n),o.a.createElement(g.a,null,s?o.a.createElement("div",{dangerouslySetInnerHTML:{__html:p}}):o.a.createElement($,{description:i,title:r}),o.a.createElement("div",{className:"writing"},o.a.createElement("h3",null,"Related posts"),o.a.createElement(V,{specName:"default",src:"https://bibleanswersapi.herokuapp.com/relatedposts/".concat(t),items:"items",layout:"fill"},o.a.createElement(f.Template,{specName:"default",type:"amp-mustache"},o.a.createElement("div",null,o.a.createElement("a",{href:"{{url}}",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("p",{className:"first"},"› ","{{title}}"))))))))};Z.getInitialProps=function(){var e,n=(e=i.a.mark(function e(n){var t,r,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query,e.next=3,s()("http://bibleanswersapi.herokuapp.com/posts/".concat(t.slug));case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,e.abrupt("return",{post:a,slug:t.slug});case 8:case"end":return e.stop()}},e,this)}),function(){var n=this,t=arguments;return new Promise(function(r,i){var a=e.apply(n,t);function o(e){K(a,r,i,o,l,"next",e)}function l(e){K(a,r,i,o,l,"throw",e)}o(void 0)})});return function(e){return n.apply(this,arguments)}}();n.default=Z}},[[367,1,0]]]);