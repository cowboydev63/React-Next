(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{13:function(e,t,n){e.exports=n(58)},24:function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var a=new XMLHttpRequest;for(var i in a.open(t.method||"get",e,!0),t.headers)a.setRequestHeader(i,t.headers[i]);function o(){var e,t=[],n=[],r={};return a.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(a,i,o){t.push(i=i.toLowerCase()),n.push([i,o]),r[i]=(e=r[i])?e+","+o:o}),{ok:2==(a.status/100|0),status:a.status,statusText:a.statusText,url:a.responseURL,clone:o,text:function(){return Promise.resolve(a.responseText)},json:function(){return Promise.resolve(a.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([a.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}a.withCredentials="include"==t.credentials,a.onload=function(){n(o())},a.onerror=r,a.send(t.body||null)})}},25:function(e,t,n){e.exports=window.fetch||(window.fetch=n(24).default||n(24))},30:function(e,t,n){"use strict";n.d(t,"a",function(){return z}),n.d(t,"b",function(){return L});var r=n(3),a=n.n(r),i=n(0),o=n.n(i),s=n(1),l=n.n(s),c=n(2),u=n(6);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&m(e.prototype,t),n&&m(e,n),e}function x(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(){var e=_(["\n  height: 80px;\n  position: relative;\n"]);return y=function(){return e},e}function v(){var e=_(["\n  flex-shrink: 0;\n  height: 80px;\n  margin-left: 20px;\n  overflow: hidden;\n  width: 80px;\n"]);return v=function(){return e},e}function w(){var e=_(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 12px;\n  font-style: italic;\n  margin-top: 8px;\n"]);return w=function(){return e},e}function E(){var e=_(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 16px;\n  line-height: 20px;\n  margin-top: 5px;\n"]);return E=function(){return e},e}function j(){var e=_(["\n  color: rgba(0, 0, 0, 0.84);\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 25px;\n"]);return j=function(){return e},e}function k(){var e=_(["\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  padding: 10px 20px;\n  text-decoration: none;\n\n  &:hover {\n    background: #eee;\n  }\n"]);return k=function(){return e},e}function _(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var I=c.b.div(k()),O=c.b.div(j()),P=c.b.div(E()),N=c.b.div(w()),S=c.b.div(v()),T=Object(c.b)(u.AmpImg)(y()),z=function(e){function t(){return f(this,t),x(this,h(t).apply(this,arguments))}return b(t,i["Component"]),d(t,[{key:"render",value:function(){var e=this.props,t=e.date_added,n=e.image_url_small,r=e.subtitle,a=e.title;e.noAmp;return o.a.createElement(I,null,o.a.createElement("div",null,o.a.createElement(O,null,a),o.a.createElement(P,null,r),o.a.createElement(N,null,t?l()(new Date(t)).format("MMM Do, YYYY"):null)),o.a.createElement(S,null,o.a.createElement(T,{specName:"default",src:n,width:"80",height:"80",alt:"AMP"})))}}]),t}(),A=function(e){var t=e.children;return o.a.createElement("div",{className:"jsx-3189911355 list-item-container"},t," ",o.a.createElement(a.a,{styleId:"3189911355",css:[".list-item-container.jsx-3189911355{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:20px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;}",".list-item-container.jsx-3189911355:hover{background:#eee;}"]}))},C=function(e){var t=e.children;return o.a.createElement("div",{className:"jsx-2566256794 list-item-title"},t," ",o.a.createElement(a.a,{styleId:"2566256794",css:[".list-item-title.jsx-2566256794{color:rgba(0,0,0,0.84);font-size:20px;font-weight:600;line-height:25px;}"]}))},M=function(e){var t=e.children;return o.a.createElement("div",{className:"jsx-544464814 list-item-subtitle"},t," ",o.a.createElement(a.a,{styleId:"544464814",css:[".list-item-subtitle.jsx-544464814{color:rgba(0,0,0,0.54);font-size:16px;line-height:20px;margin-top:5px;}"]}))},R=function(e){var t=e.children;return o.a.createElement("div",{className:"jsx-1809973229 list-item-date"},t," ",o.a.createElement(a.a,{styleId:"1809973229",css:[".list-item-date.jsx-1809973229{color:rgba(0,0,0,0.54);font-size:12px;font-style:italic;margin-top:8px;}"]}))},Y=function(e){var t=e.children;return o.a.createElement("div",{className:"jsx-697107138 answer-image-container"},t," ",o.a.createElement(a.a,{styleId:"697107138",css:[".answer-image-container.jsx-697107138{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;height:80px;margin-left:20px;overflow:hidden;width:80px;}"]}))},L=function(e){function t(){return f(this,t),x(this,h(t).apply(this,arguments))}return b(t,i["Component"]),d(t,[{key:"render",value:function(){var e=this.props,t=e.date_added,n=e.image_url_small,r=e.subtitle,a=e.title;e.noAmp;return o.a.createElement(A,null,o.a.createElement("div",null,o.a.createElement(C,null,a),o.a.createElement(M,null,r),o.a.createElement(R,null,t?l()(new Date(t)).format("MMM Do, YYYY"):null)),o.a.createElement(Y,null,o.a.createElement("img",{src:n,alt:a,style:{height:80,width:80}})))}}]),t}()},575:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(598),{page:e.exports.default}})},598:function(e,t,n){"use strict";n.r(t);var r=n(13),a=n.n(r),i=n(3),o=n.n(i),s=n(0),l=n.n(s),c=n(25),u=n.n(c),p=n(9),f=n(30),m=function(){return l.a.createElement("div",{className:"jsx-1169056107 top-links"},l.a.createElement("a",{href:"/gospel",className:"jsx-1169056107"},"Gospel Summary"),l.a.createElement("a",{href:"/statement-of-faith",className:"jsx-1169056107"},"Statement of Faith"),l.a.createElement(o.a,{styleId:"1169056107",css:[".top-links.jsx-1169056107{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-top:10px;}","a.jsx-1169056107{color:rgba(0,0,0,0.54);margin-bottom:10px;margin-right:20px;-webkit-text-decoration:none;text-decoration:none;text-transform:uppercase;}","a.jsx-1169056107:last-child{margin-right:0;}"]}))},d=n(8);function x(e,t,n,r,a,i,o){try{var s=e[i](o),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,a)}function h(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var i=e.apply(t,n);function o(e){x(i,r,a,o,s,"next",e)}function s(e){x(i,r,a,o,s,"throw",e)}o(void 0)})}}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var g=function(e){var t=e.children;return l.a.createElement("div",{className:"jsx-4048152006 title"},t," ",l.a.createElement(o.a,{styleId:"4048152006",css:[".title.jsx-4048152006{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:34px;font-weight:bold;line-height:1.15;margin-top:20px;padding:0 20px;}","@media screen and (max-width:768px){.title.jsx-4048152006{font-size:30px;}}"]}))},y=function(e){var t=e.children;return l.a.createElement("div",{className:"jsx-3148850039 post-tags-container"},t," ",l.a.createElement(o.a,{styleId:"3148850039",css:[".post-tags-container.jsx-3148850039{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}"]}))},v=function(e){var t=e.children;return l.a.createElement("div",{className:"jsx-4045598409 tag-text"},t," ",l.a.createElement(o.a,{styleId:"4045598409",css:[".tag-text.jsx-4045598409{color:#689f38;cursor:pointer;font-size:18px;margin-bottom:6px;}"]}))},w=function(e){var t=e.children,n=e.href;return l.a.createElement("a",{href:n,className:"jsx-3076840257 link-tag"},t," ",l.a.createElement(o.a,{styleId:"3076840257",css:[".link-tag.jsx-3076840257{-webkit-text-decoration:none;text-decoration:none;}"]}))},E=function(e){var t=e.children,n=e.href;return l.a.createElement("a",{href:n,className:"jsx-1238150795 more-link"},t," ",l.a.createElement(o.a,{styleId:"1238150795",css:[".more-link.jsx-1238150795{color:#689f38;cursor:pointer;font-size:18px;margin-top:10px;-webkit-text-decoration:none;text-decoration:none;}"]}))},j=function(e){var t=e.recentPosts,n=void 0===t?[]:t,r=e.tags,a=void 0===r?[]:r,i=e.postsCount;return Object(s.useEffect)(function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://cse.google.com/cse.js?cx=002602022467339721509:o7qkawmakey";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t);var n=setInterval(function(){var e=document.getElementById("gsc-i-id1");e&&(e.placeholder="Search Bible Answers",clearInterval(n))},50)}),l.a.createElement(p.b,null,l.a.createElement("title",null,"Bible Answers | Explaining and Defending the Christian Worldview"),l.a.createElement(m,null),l.a.createElement(y,null,l.a.createElement(d.a,{style:{padding:0,width:"initial"}},l.a.createElement("div",{style:{marginTop:20}},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:"<gcse:searchbox></gcse:searchbox>"},style:{width:320,margin:"0 auto"}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:"<gcse:searchresults></gcse:searchresults>"},style:{margin:"0 auto"}})),l.a.createElement(g,null,"Recent posts"),n.map(function(e){return l.a.createElement(w,{key:e.url,href:e.url},l.a.createElement(f.b,b({},e,{noAmp:!0})))}),l.a.createElement("center",null,l.a.createElement(E,{href:"all-posts"},"All ",i," posts"))),l.a.createElement(d.a,null,l.a.createElement(g,{style:{padding:0}},"Tags"),l.a.createElement("ul",null,a.map(function(e){return l.a.createElement(w,{key:e.url,href:e.url},l.a.createElement("li",null,l.a.createElement(v,null,e.title," (",e.posts_count,")")))})),l.a.createElement(E,{href:"/posts-in-progress"},"Posts in progress"))))};j.getInitialProps=h(a.a.mark(function e(){var t,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u()("https://bibleanswersapi.herokuapp.com/homefetch");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",{recentPosts:n.recent_posts,tags:n.tags,postsCount:n.posts_count});case 7:case"end":return e.stop()}},e,this)}));t.default=j}},[[575,1,0]]]);