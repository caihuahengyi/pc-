!function(n,t,r){var e,i="1.3.5",a="//auto.alicdn.com/up/kirov/",o=864e5,c=10,u="//pointman.alibaba.com",f=!!n.addEventListener,s=t.head||t.getElementsByTagName("head")[0];!function(e){function i(n){return"string"==typeof n}function a(n){return"function"==typeof n}function o(n,t){for(var r=0,e=n.length;e>r&&t(n[r],r)!==!1;r++);}function c(n,t){for(var r=[],e=0,i=n.length;i>e;e++)r[e]=t(n[e]);return r}function u(n,t){for(var r=0,e=n.length;e>r;r++)if(n[r]===t)return r;return-1}function v(n,t){for(var r in n)R.call(n,r)&&t(n[r],r)}function l(n,t,r){f?n.addEventListener(t,r):n.attachEvent("on"+t,r)}function p(n,t,r){f?n.removeEventListener(t,r):n.detachEvent("on"+t,r)}function h(n,t,r){if(!n)return!1;var e=n[t];if(!e)return!1;var i=r(e);return f||(i._str=e+""),i._raw=e,n[t]=i,!0}function d(n){if(!n||n==t)return"";var r=n.tagName,e=n.id;i(e)&&e&&(r+="#"+e);var a=n.className;"string"==typeof a&&(a=a.split(/\s/)[0],a&&(r+="."+a));var o=d(n.parentNode);return o?o+">"+r:r}function g(n){switch(n.tagName){case"LINK":return n.getAttribute("href");case"OBJECT":var t=n.getAttribute("data");if(t)return t;for(var r=n.getElementsByTagName("PARAM"),e=0;e<r.length;e++){var i=r[e];if(/^src$|^movie$/i.test(i.name))return i.value}return null;default:return n.getAttribute("src")}}function m(n,r){if(r)t.write('<script src="'+n+'"></script>');else{var e=t.createElement("script");e.src=n,s.appendChild(e)}}function y(n){var t;try{throw new Error("")}catch(r){t=r.stack}if(!t)return"";var e=t.split("\n");/Error/.test(e[0])&&e.shift(),e=e.slice(n+1);var i=location.href,a=i.split(location.pathname)[0];return e=c(e,function(n){return n.replace(/^@|^\s*at\s*/,"").replace(i,"ME").replace(a,"")}),e.join("\n").trim()}function w(n){if(n){var t=n.match(j);if(t){var r=t[1];return M.test(r)&&(r=r.split("@").pop().split(":")[0]),r}}}function b(n){return/^(\d+\.)+\d+$/.test(n)}function E(n){if(b(n))return n;var t=S.test(n)?-3:-2,r=n.split(".");return r.slice(t).join(".")}function A(n){var t=[];return v(n,function(n,r){t.push(encodeURIComponent(r)+"="+encodeURIComponent(n))}),t.join("&")}function N(n){var t={};return o(n.split("&"),function(n){var r=n.split("="),e=decodeURIComponent(r[0]),i=decodeURIComponent(r[1]);t[e]=i}),t}function _(n,t,r){var e=c(n,function(n){var e=n.replace(/\W/g,"\\$&");return t&&(e="^"+e),r&&(e+="$"),e});return new RegExp(e.join("|"))}function k(n){var t=4294967295*Math.random()>>>0;return n?t%n:t}function L(n){return Math.random()<n}function C(n,t,r){if("apply"in t)return t.apply(n,r);switch(r.length){case 0:return t();case 1:return t(r[0]);case 2:return t(r[0],r[1]);default:return t(r[0],r[2],r[3])}}function D(n){if(T)return T.stringify(n);var t=[];return v(n,function(n,e){if(n!==r){switch(typeof n){case"string":n=I(n);break;case"object":n=n&&D(n)}t.push(I(e)+":"+n)}}),"{"+t.join(",")+"}"}function I(n){return'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"'}e.a=i,e.b=a,e.c=Array.isArray||function(n){return n instanceof Array},e.d=o,e.e=c,e.f=u;var R=Object.prototype.hasOwnProperty;e.g=v,e.i=l,e.j=p,e.k=h,h(Function.prototype,"toString",function(n){return function(){return f?n.apply(this._raw||this,arguments):this._str||n.apply(this,arguments)}}),e.l=d,e.m=g,e.n=m,e.o=y;var j=/^\s*(?:https?:)?\/{2,}([^\/\?\#\\]+)/i,M=/[@:]/;e.p=w,e.q=b;var S=/\.com\.cn$|\.com\.hk$/;e.r=E,e.s=A,e.t=N,e.u=_,e.v=Date.now||function(){return+new Date},e.z=k,e.A=L,e.B=C;var T=n.JSON;e.C=D}(e||(e={}));var v;!function(r){function i(n){for(var t=0,r=0,e=n.length;e>r;r++)t=(t<<5)-t+n.charCodeAt(r),t>>>=0;return t}function a(t){var r=t.parentNode;r&&r.removeChild(t),n.performance&&performance.clearResourceTimings()}function o(n){var t=n.tagName;if(v[t]){var r=e.m(n);if(r){var o=e.p(r);if(o){o=e.r(o);var c=l[o];c||(c=l[o]=i(o)),c in p&&(s[r]=!0,a(n))}}}}function c(n){e.d(n,function(n){var t=n.addedNodes;e.d(t,function(n){1==n.nodeType&&o(n)})})}function u(){if(n.MutationObserver){var r=new MutationObserver(c);r.observe(t,{childList:!0,subtree:!0})}}function f(){if("http:"==location.protocol){var n="__adblk__";s=t[n],s||(s=t[n]={}),u()}}var s,v={SCRIPT:1,LINK:1,IFRAME:1},l={},p={705811353:1,3220653981:1,576436746:1,2419216076:1,1799790739:1,3199788265:1,2038838657:1,171256861:1};r.D=f}(v||(v={}));var l;!function(t){function r(){var t;try{t=n.localStorage}catch(r){}return t||{}}function i(n){return u[n]}function a(n,t){try{return u[n]=t,!0}catch(r){return!1}}function o(n){try{return delete u[n],!0}catch(t){return!1}}function c(n){e.g(u,n)}var u=r();t.F=i,t.G=a,t.H=o,t.I=c}(l||(l={}));var p;!function(r){function i(){if(n==top)return"";try{return top.location.href}catch(t){return"blocked"}}function a(){if(!n.opener)return"";try{return opener.location.href}catch(t){return"cross-origin"}}function o(){return{w:screen.width,h:screen.height}}function c(){return{w:screen.availWidth,h:screen.availHeight}}function f(){var n=screen.availLeft,t=screen.availTop;return null==n&&(n=t=-1),{x:n,y:t}}function s(){var t=n.outerWidth,r=n.outerHeight;return null==t&&(t=r=-1),{w:t,h:r}}function v(){var t=n.screenX,r=n.screenY;return null==t&&(t=n.screenLeft,r=n.screenTop),{x:t,y:r}}function l(){return n.devicePixelRatio||-1}function p(){var r=n.innerWidth,e=n.innerHeight;if(null==r){var i=t.documentElement;r=i.clientWidth,e=i.clientHeight}return{w:r,h:e}}function h(){var r=n.pageXOffset,e=n.pageYOffset;if(null==r){var i=t.body;i?(r=i.scrollLeft,e=i.scrollTop):r=e=-1}return{x:r,y:e}}function d(n){var r=y[n];if(r){var e=t.createElement("iframe");e.src=u+"/pt_sender.html#"+n,e.name=r,e.style.display="none",t.body.appendChild(e),g(n)}}function g(n){delete y[n]}function m(){var n={time:(new Date).toLocaleString(),lang:navigator.language,ua:navigator.userAgent,screen:{size:o(),asize:c(),apos:f()},win:{size:s(),pos:v()},page:{zoom:l(),size:p(),scroll:h()},doc:{url:location.href,topUrl:i(),openerUrl:a(),charset:t.characterSet,refer:t.referrer,history:history.length}},r=e.C(n),u=t.documentElement.outerHTML,d=e.z();return y[d]=r+"\n"+u,d}var y={};r.J=d,r.K=g,r.L=m}(p||(p={}));var h;!function(n){function t(n){l.G(h+n,e.v()+"")}function r(n){var t=+l.F(h+n);return t>0}function a(){var n=e.v();l.I(function(t,r){if(d.test(r)){var e=n-+t;(e>o||0>e)&&l.H(r)}})}function f(){a()}function s(n){return r(n)?void 0:(t(n),!0)}function v(n){if(c!=g){g++;var t=p.L();n.app=y.N("app"),n.ver=i,n.snapid=t;var r=y.N("args");r&&(n.ext_arg=r);var a=location.hash;a&&(n.url_hash=a.substr(1));u+"/pointman?"+e.s(n),new Image}}var h="__R_",d=/^__R_/,g=0;n.D=f,n.M=s,n.J=v}(h||(h={}));var d;!function(r){function i(){for(var n=i;n.caller;)n=n.caller;return n.arguments[0]}function a(){var t=n.event||i();return t?t.target||t.srcElement:null}function o(n,r){var i=t.currentScript;i||(i=a()),i&&!i.tagName&&(i=null);var o=2,c=e.o(o),u=e.l(i),f=c||u||r;if(h.M("DLG_"+f)){var s={type:"winfun",keyword:n,code:r.substr(0,200),stack:c.substr(0,1e3),path:u};h.J(s)}}function c(n){var r=t.cookie;return r&&n.indexOf(r)>=0&&(n="cookie"),v.test(n)?n:""}function u(t){e.k(n,t,function(n){return function(r,i){var a=c(r+"");return a&&o(t,a),e.B(this,n,arguments)}})}function f(){u("alert"),u("confirm"),u("prompt"),u("print")}function s(n){v=n.warning,v&&f()}var v;r.D=s}(d||(d={}));var g;!function(n){"use strict";function r(n,t,r){var i=e.l(r);h.M("ON_"+i)&&h.J({type:"onevent",keyword:t,code:n.substr(0,200),path:i})}function i(n,t){for(var r=n.length,i=0;t>i;i++){var a=i+e.z(r-i),o=n[i];n[i]=n[a],n[a]=o}}function a(n){if(!n)return[];var t=n.fix,r=n.opt;if(!e.c(t)||!e.c(r))return[];var a=r.length;return a>0&&(a=e.z(a),i(r,a),t=t.concat(r.slice(0,a))),t}function o(n){}function c(n){if(!n)return o;var t,r=+n.limit||0,i=a(n.key);return i&&i.length>0&&(t=e.u(i)),function(n){return r>0&&n.length>r?!0:!(!t||!t.test(n))}}function u(n,t,e){var i=n._k;i||(i=n._k=++b);var a=i<<8|e;if(!(a in w)&&(w[a]=!0,1==n.nodeType)){if(n[t]){var o=n.getAttribute(t);o&&(m(o)&&r(o,t,n),y(o)&&(n[t]=null))}if("onclick"==t&&"A"==n.tagName){var c=n;if(/script/.test(c.protocol)){var o=c.href.split(":")[1];m(o)&&r(o,"href",n),y(o)&&(c.href="javascript:void 0:void 0:void(0)")}}var f=n.parentElement;f&&u(f,t,e)}}function s(n,r){t.addEventListener(n.substr(2),function(t){u(t.target,n,r)},!0)}function v(){var n=t.querySelectorAll(g);e.d(n,function(n){var t=n.attributes;e.d(t,function(t){var r=t.name;if(/^on./.test(r)){var e=E[r];e&&u(n,r,e)}})})}function l(){var n=[],r=1;for(var e in t)/^on./.test(e)&&(s(e,r),E[e]=r,r++,n.push("["+e+"]"));r>1&&(g=n.join(","),setInterval(v,2e3))}function p(n){f&&(d=n,l())}var d,g,m=function(n){return(m=c(d.warn))(n)},y=function(n){return(y=c(d.deny))(n)},w={},b=0,E={};n.D=p}(g||(g={}));var m;!function(n){"use strict";function r(n,r,i){var a="";e.d(n,function(n){e.q(n)||(n="*."+n),a+=" http://"+n+" https://"+n});var o="default-src 'self' 'unsafe-inline' 'unsafe-eval' "+i+" data: about: blob: "+a+"; frame-src *; connect-src *";if(e.A(r)){var c=y.N("app");o+="; report-uri "+u+"/csp?app="+c}var f=t.createElement("meta");f.httpEquiv="Content-Security-Policy",f.content=o,s.appendChild(f)}function i(n){if(f){var t=n.trust.split(","),i=location.hostname;t.push(i);var a=e.f(t,"root");a>=0&&(t[a]=e.r(i));var o=+n.warn;if(isNaN(o)&&(o=1),!/AliApp|WindVane/.test(navigator.userAgent)){var c=+n.deny||0;if(e.A(c)){var u=n.protocol||"";r(t,o,u)}}}}n.D=i}(m||(m={}));var y;!function(r){function i(){var n=t.currentScript;if(!n){var r=t.scripts;n=r[r.length-1]}var i=n.src,a=i.split("#")[1]||i.split("?")[1];a&&(s=e.t(a));var o=n.attributes;e.d(o,function(n){s[n.name]=n.value})}function o(n){return s[n]}function c(n){l||(l=!0,e.g(n,function(n,t){var r=+n.sample;if(e.A(r)){var i=p[t];if(i)try{i.D(n.param)}catch(a){}}}))}function u(){i();var r=o("app");if(r){n[f]={init:c},h.D(),v.D();var u=a+r+".js",s=!0;"complete"==t.readyState&&(s=!1),e.n(u,s)}}var f="Pointman",s={};r.N=o;var l,p={dialog:d,inline:g,csp:m};u()}(y||(y={}))}(window,document);