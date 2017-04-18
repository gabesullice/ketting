!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e,r){"use strict";function n(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function o(t,e,r){if(t&&u.isObject(t)&&t instanceof n)return t;var o=new n;return o.parse(t,e,r),o}function s(t){return u.isString(t)&&(t=o(t)),t instanceof n?t.format():n.prototype.format.call(t)}function i(t,e){return o(t,!1,!0).resolve(e)}function h(t,e){return t?o(t,!1,!0).resolveObject(e):e}var a=r(8),u=r(12);e.parse=o,e.resolve=i,e.resolveObject=h,e.format=s,e.Url=n;var c=/^([a-z0-9.+-]+:)/i,f=/:[0-9]*$/,l=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,p=["<",">",'"',"`"," ","\r","\n","\t"],d=["{","}","|","\\","^","`"].concat(p),y=["'"].concat(d),m=["%","/","?",";","#"].concat(y),b=["/","?","#"],v={javascript:!0,"javascript:":!0},g={javascript:!0,"javascript:":!0},w={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},A=r(11);n.prototype.parse=function(t,e,r){if(!u.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var n=t.indexOf("?"),o=-1!==n&&n<t.indexOf("#")?"?":"#",s=t.split(o);s[0]=s[0].replace(/\\/g,"/"),t=s.join(o);var i=t;if(i=i.trim(),!r&&1===t.split("#").length){var h=l.exec(i);if(h)return this.path=i,this.href=i,this.pathname=h[1],h[2]?(this.search=h[2],this.query=e?A.parse(this.search.substr(1)):this.search.substr(1)):e&&(this.search="",this.query={}),this}var f=c.exec(i);if(f){f=f[0];var p=f.toLowerCase();this.protocol=p,i=i.substr(f.length)}if(r||f||i.match(/^\/\/[^@\/]+@[^@\/]+/)){var d="//"===i.substr(0,2);!d||f&&g[f]||(i=i.substr(2),this.slashes=!0)}if(!g[f]&&(d||f&&!w[f])){for(var x=-1,j=0;j<b.length;j++){var O=i.indexOf(b[j]);-1!==O&&(-1===x||O<x)&&(x=O)}var _,T;T=-1===x?i.lastIndexOf("@"):i.lastIndexOf("@",x),-1!==T&&(_=i.slice(0,T),i=i.slice(T+1),this.auth=decodeURIComponent(_)),x=-1;for(var j=0;j<m.length;j++){var O=i.indexOf(m[j]);-1!==O&&(-1===x||O<x)&&(x=O)}-1===x&&(x=i.length),this.host=i.slice(0,x),i=i.slice(x),this.parseHost(),this.hostname=this.hostname||"";var E="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!E)for(var P=this.hostname.split(/\./),j=0,U=P.length;j<U;j++){var R=P[j];if(R&&!R.match(/^[+a-z0-9A-Z_-]{0,63}$/)){for(var I="",B=0,C=R.length;B<C;B++)R.charCodeAt(B)>127?I+="x":I+=R[B];if(!I.match(/^[+a-z0-9A-Z_-]{0,63}$/)){var k=P.slice(0,j),q=P.slice(j+1),S=R.match(/^([+a-z0-9A-Z_-]{0,63})(.*)$/);S&&(k.push(S[1]),q.unshift(S[2])),q.length&&(i="/"+q.join(".")+i),this.hostname=k.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),E||(this.hostname=a.toASCII(this.hostname));var F=this.port?":"+this.port:"",D=this.hostname||"";this.host=D+F,this.href+=this.host,E&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==i[0]&&(i="/"+i))}if(!v[p])for(var j=0,U=y.length;j<U;j++){var L=y[j];if(-1!==i.indexOf(L)){var N=encodeURIComponent(L);N===L&&(N=escape(L)),i=i.split(L).join(N)}}var H=i.indexOf("#");-1!==H&&(this.hash=i.substr(H),i=i.slice(0,H));var M=i.indexOf("?");if(-1!==M?(this.search=i.substr(M),this.query=i.substr(M+1),e&&(this.query=A.parse(this.query)),i=i.slice(0,M)):e&&(this.search="",this.query={}),i&&(this.pathname=i),w[p]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var F=this.pathname||"",$=this.search||"";this.path=F+$}return this.href=this.format(),this},n.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var e=this.protocol||"",r=this.pathname||"",n=this.hash||"",o=!1,s="";this.host?o=t+this.host:this.hostname&&(o=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(o+=":"+this.port)),this.query&&u.isObject(this.query)&&Object.keys(this.query).length&&(s=A.stringify(this.query));var i=this.search||s&&"?"+s||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||w[e])&&!1!==o?(o="//"+(o||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):o||(o=""),n&&"#"!==n.charAt(0)&&(n="#"+n),i&&"?"!==i.charAt(0)&&(i="?"+i),r=r.replace(/[?#]/g,function(t){return encodeURIComponent(t)}),i=i.replace("#","%23"),e+o+r+i+n},n.prototype.resolve=function(t){return this.resolveObject(o(t,!1,!0)).format()},n.prototype.resolveObject=function(t){if(u.isString(t)){var e=new n;e.parse(t,!1,!0),t=e}for(var r=new n,o=Object.keys(this),s=0;s<o.length;s++){var i=o[s];r[i]=this[i]}if(r.hash=t.hash,""===t.href)return r.href=r.format(),r;if(t.slashes&&!t.protocol){for(var h=Object.keys(t),a=0;a<h.length;a++){var c=h[a];"protocol"!==c&&(r[c]=t[c])}return w[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(t.protocol&&t.protocol!==r.protocol){if(!w[t.protocol]){for(var f=Object.keys(t),l=0;l<f.length;l++){var p=f[l];r[p]=t[p]}return r.href=r.format(),r}if(r.protocol=t.protocol,t.host||g[t.protocol])r.pathname=t.pathname;else{for(var d=(t.pathname||"").split("/");d.length&&!(t.host=d.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==d[0]&&d.unshift(""),d.length<2&&d.unshift(""),r.pathname=d.join("/")}if(r.search=t.search,r.query=t.query,r.host=t.host||"",r.auth=t.auth,r.hostname=t.hostname||t.host,r.port=t.port,r.pathname||r.search){var y=r.pathname||"",m=r.search||"";r.path=y+m}return r.slashes=r.slashes||t.slashes,r.href=r.format(),r}var b=r.pathname&&"/"===r.pathname.charAt(0),v=t.host||t.pathname&&"/"===t.pathname.charAt(0),A=v||b||r.host&&t.pathname,x=A,j=r.pathname&&r.pathname.split("/")||[],d=t.pathname&&t.pathname.split("/")||[],O=r.protocol&&!w[r.protocol];if(O&&(r.hostname="",r.port=null,r.host&&(""===j[0]?j[0]=r.host:j.unshift(r.host)),r.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===d[0]?d[0]=t.host:d.unshift(t.host)),t.host=null),A=A&&(""===d[0]||""===j[0])),v)r.host=t.host||""===t.host?t.host:r.host,r.hostname=t.hostname||""===t.hostname?t.hostname:r.hostname,r.search=t.search,r.query=t.query,j=d;else if(d.length)j||(j=[]),j.pop(),j=j.concat(d),r.search=t.search,r.query=t.query;else if(!u.isNullOrUndefined(t.search)){if(O){r.hostname=r.host=j.shift();var _=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@");_&&(r.auth=_.shift(),r.host=r.hostname=_.shift())}return r.search=t.search,r.query=t.query,u.isNull(r.pathname)&&u.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!j.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var T=j.slice(-1)[0],E=(r.host||t.host||j.length>1)&&("."===T||".."===T)||""===T,P=0,U=j.length;U>=0;U--)T=j[U],"."===T?j.splice(U,1):".."===T?(j.splice(U,1),P++):P&&(j.splice(U,1),P--);if(!A&&!x)for(;P--;P)j.unshift("..");!A||""===j[0]||j[0]&&"/"===j[0].charAt(0)||j.unshift(""),E&&"/"!==j.join("/").substr(-1)&&j.push("");var R=""===j[0]||j[0]&&"/"===j[0].charAt(0);if(O){r.hostname=r.host=R?"":j.length?j.shift():"";var _=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@");_&&(r.auth=_.shift(),r.host=r.hostname=_.shift())}return A=A||r.host&&j.length,A&&!R&&j.unshift(""),j.length?r.pathname=j.join("/"):(r.pathname=null,r.path=null),u.isNull(r.pathname)&&u.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=t.auth||r.auth,r.slashes=r.slashes||t.slashes,r.href=r.format(),r},n.prototype.parseHost=function(){var t=this.host,e=f.exec(t);e&&(e=e[0],":"!==e&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},function(t,e,r){r(15),t.exports=self.fetch.bind(self)},function(t,e,r){var n=r(0),o=r(7),s=r(16),i=function(t,e){void 0===e&&(e={}),e.resolveWithFullResponse=!0,e.headers||(e.headers={}),e.headers["User-Agent"]||(e.headers["User-Agent"]="Restl/"+s.version),e.headers.Accept||(e.headers.Accept="application/hal+json, application/json"),e.json=!0,this.request=request.defaults(e),this.bookMark=t};i.prototype={resourceCache:{},getResource:function(t){return void 0===t&&(t=""),t=n.resolve(this.bookMark,t),this.resourceCache[t]||(this.resourceCache[t]=new o(this,t)),this.resourceCache[t]},follow:function(t){return this.getResource().follow(t)}},t.exports=i},function(t,e,r){"use strict";var n=function(t,e){var r=new Promise(t,e);return r.follow=function(t){return this.then(function(e){return e.follow(t)})},r.followAll=function(t){return this.then(function(e){return e.followAll(t)})},r};t.exports=n},function(t,e,r){"use strict";r(1);var n=r(2);t.exports=function(t,e){return new n(t,e)}},function(t,e){var r=function(t,e,r){this.rel=t,this.href=e,this.type=r};t.exports=r},function(t,e,r){var n=r(5),o=r(0),s=function(t,e,r){this.uri=t,this.contentType=e,this.body=r,this.links=[],this.embedded={},void 0!==this.body._links&&i(this),void 0!==this.body._embedded&&h(this),delete this.body._links,delete this.body._embedded},i=function(t){for(var e in t.body._links){var r=t.body._links[e];Array.isArray(r)||(r=[r]);for(var s in r)t.links.push(new n(e,o.resolve(t.uri,r[s].href),r[s].type))}},h=function(t){for(var e in t.body._embedded){var r=t.body._embedded[e];Array.isArray(r)||(r=[r]);for(var s in r){var i=o.resolve(t.uri,r[s]._links.self.href);t.links.push(new n(e,i)),t.embedded[i]=r[s]}}};t.exports=s},function(t,e,r){"use strict";var n=r(6),o=r(0),s=r(3);r(1);var i=function(t,e){this.client=t,this.uri=e,this.rep=null};i.prototype={get:function(){return this.representation().then(function(t){return t.body})},put:function(t){return this.fetch(this.uri,{method:"PUT",body:JSON.stringify(t)}).then(function(){return this.repr=null,null}.bind(this))},delete:function(t){return this.request({method:"DELETE",uri:this.uri,body:t}).then(function(){return null})},post:function(t){return this.request({method:"POST",uri:this.uri,body:t}).then(function(t){if(t.headers.location)return this.client.getResource(o.resolve(this.uri,t.headers.location))}.bind(this))},refresh:function(){var t;return this.fetch(this.uri,{method:"GET"}).then(function(e){if(t=e,t.ok)return t.json();throw new Error("HTTP error: "+t.statusCode)}).then(function(e){this.repr=new n(this.uri,t.headers["content-type"],e);for(var r in this.repr.embedded){this.client.getResource(r).repr=new n(r,t.headers["content-type"],this.repr.embedded[r])}return this.repr.body}.bind(this))},links:function(t){return this.representation().then(function(e){return t?e.links.filter(function(e){return e.rel===t}):e.links})},follow:function(t){return new s(function(e,r){this.links(t).then(function(r){if(0===r.length)throw new Error("Relation with type "+t+" not found on resource "+this.uri);var n=this.client.getResource(r[0].href);e(n)}.bind(this)).catch(function(t){r(t)})}.bind(this))},followAll:function(t){return this.links(t).then(function(t){return t.map(function(t){return this.client.getResource(t.href)}.bind(this))}.bind(this))},representation:function(){return this.repr?Promise.resolve(this.repr):this.refresh().then(function(){return this.repr}.bind(this))},fetch:function(t,e){return"string"==typeof t?t=o.resolve(this.uri,t):t.url=o.resolve(this.uri,t.url),fetch(t,e)},request:function(t){var e=this.uri;return t.uri?e=o.resolve(e,t.uri):t.url&&(e=o.resolve(e,t.url),delete t.url),t.uri=e,this.client.request(t)}},t.exports=i},function(t,e,r){(function(t,n){var o;!function(s){function i(t){throw new RangeError(B[t])}function h(t,e){for(var r=t.length,n=[];r--;)n[r]=e(t[r]);return n}function a(t,e){var r=t.split("@"),n="";return r.length>1&&(n=r[0]+"@",t=r[1]),t=t.replace(I,"."),n+h(t.split("."),e).join(".")}function u(t){for(var e,r,n=[],o=0,s=t.length;o<s;)e=t.charCodeAt(o++),e>=55296&&e<=56319&&o<s?(r=t.charCodeAt(o++),56320==(64512&r)?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),o--)):n.push(e);return n}function c(t){return h(t,function(t){var e="";return t>65535&&(t-=65536,e+=q(t>>>10&1023|55296),t=56320|1023&t),e+=q(t)}).join("")}function f(t){return t-48<10?t-22:t-65<26?t-65:t-97<26?t-97:A}function l(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function p(t,e,r){var n=0;for(t=r?k(t/_):t>>1,t+=k(t/e);t>C*j>>1;n+=A)t=k(t/C);return k(n+(C+1)*t/(t+O))}function d(t){var e,r,n,o,s,h,a,u,l,d,y=[],m=t.length,b=0,v=E,g=T;for(r=t.lastIndexOf(P),r<0&&(r=0),n=0;n<r;++n)t.charCodeAt(n)>=128&&i("not-basic"),y.push(t.charCodeAt(n));for(o=r>0?r+1:0;o<m;){for(s=b,h=1,a=A;o>=m&&i("invalid-input"),u=f(t.charCodeAt(o++)),(u>=A||u>k((w-b)/h))&&i("overflow"),b+=u*h,l=a<=g?x:a>=g+j?j:a-g,!(u<l);a+=A)d=A-l,h>k(w/d)&&i("overflow"),h*=d;e=y.length+1,g=p(b-s,e,0==s),k(b/e)>w-v&&i("overflow"),v+=k(b/e),b%=e,y.splice(b++,0,v)}return c(y)}function y(t){var e,r,n,o,s,h,a,c,f,d,y,m,b,v,g,O=[];for(t=u(t),m=t.length,e=E,r=0,s=T,h=0;h<m;++h)(y=t[h])<128&&O.push(q(y));for(n=o=O.length,o&&O.push(P);n<m;){for(a=w,h=0;h<m;++h)(y=t[h])>=e&&y<a&&(a=y);for(b=n+1,a-e>k((w-r)/b)&&i("overflow"),r+=(a-e)*b,e=a,h=0;h<m;++h)if(y=t[h],y<e&&++r>w&&i("overflow"),y==e){for(c=r,f=A;d=f<=s?x:f>=s+j?j:f-s,!(c<d);f+=A)g=c-d,v=A-d,O.push(q(l(d+g%v,0))),c=k(g/v);O.push(q(l(c,0))),s=p(r,b,n==o),r=0,++n}++r,++e}return O.join("")}function m(t){return a(t,function(t){return U.test(t)?d(t.slice(4).toLowerCase()):t})}function b(t){return a(t,function(t){return R.test(t)?"xn--"+y(t):t})}var v=("object"==typeof e&&e&&e.nodeType,"object"==typeof t&&t&&t.nodeType,"object"==typeof n&&n);var g,w=2147483647,A=36,x=1,j=26,O=38,_=700,T=72,E=128,P="-",U=/^xn--/,R=/[^\x20-\x7E]/,I=/[\x2E\u3002\uFF0E\uFF61]/g,B={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},C=A-x,k=Math.floor,q=String.fromCharCode;g={version:"1.4.1",ucs2:{decode:u,encode:c},decode:d,encode:y,toASCII:b,toUnicode:m},void 0!==(o=function(){return g}.call(e,r,e,t))&&(t.exports=o)}()}).call(e,r(14)(t),r(13))},function(t,e,r){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,r,s){e=e||"&",r=r||"=";var i={};if("string"!=typeof t||0===t.length)return i;t=t.split(e);var h=1e3;s&&"number"==typeof s.maxKeys&&(h=s.maxKeys);var a=t.length;h>0&&a>h&&(a=h);for(var u=0;u<a;++u){var c,f,l,p,d=t[u].replace(/\+/g,"%20"),y=d.indexOf(r);y>=0?(c=d.substr(0,y),f=d.substr(y+1)):(c=d,f=""),l=decodeURIComponent(c),p=decodeURIComponent(f),n(i,l)?o(i[l])?i[l].push(p):i[l]=[i[l],p]:i[l]=p}return i};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},function(t,e,r){"use strict";function n(t,e){if(t.map)return t.map(e);for(var r=[],n=0;n<t.length;n++)r.push(e(t[n],n));return r}var o=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,r,h){return e=e||"&",r=r||"=",null===t&&(t=void 0),"object"==typeof t?n(i(t),function(i){var h=encodeURIComponent(o(i))+r;return s(t[i])?n(t[i],function(t){return h+encodeURIComponent(o(t))}).join(e):h+encodeURIComponent(o(t[i]))}).join(e):h?encodeURIComponent(o(h))+r+encodeURIComponent(o(t)):""};var s=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},i=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}},function(t,e,r){"use strict";e.decode=e.parse=r(9),e.encode=e.stringify=r(10)},function(t,e,r){"use strict";t.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"==typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){!function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function r(t){return"string"!=typeof t&&(t=String(t)),t}function n(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return b.iterable&&(e[Symbol.iterator]=function(){return e}),e}function o(t){this.map={},t instanceof o?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function s(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function i(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function h(t){var e=new FileReader,r=i(e);return e.readAsArrayBuffer(t),r}function a(t){var e=new FileReader,r=i(e);return e.readAsText(t),r}function u(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}function c(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function f(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(b.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(b.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(b.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(b.arrayBuffer&&b.blob&&g(t))this._bodyArrayBuffer=c(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!b.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!w(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=c(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):b.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},b.blob&&(this.blob=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?s(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(h)}),this.text=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return a(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(u(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},b.formData&&(this.formData=function(){return this.text().then(d)}),this.json=function(){return this.text().then(JSON.parse)},this}function l(t){var e=t.toUpperCase();return A.indexOf(e)>-1?e:t}function p(t,e){e=e||{};var r=e.body;if(t instanceof p){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new o(t.headers)),this.method=t.method,this.mode=t.mode,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new o(e.headers)),this.method=l(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function d(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function y(t){var e=new o;return t.split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e}function m(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new o(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var b={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(b.arrayBuffer)var v=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],g=function(t){return t&&DataView.prototype.isPrototypeOf(t)},w=ArrayBuffer.isView||function(t){return t&&v.indexOf(Object.prototype.toString.call(t))>-1};o.prototype.append=function(t,n){t=e(t),n=r(n);var o=this.map[t];this.map[t]=o?o+","+n:n},o.prototype.delete=function(t){delete this.map[e(t)]},o.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},o.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},o.prototype.set=function(t,n){this.map[e(t)]=r(n)},o.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},o.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),n(t)},o.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),n(t)},o.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),n(t)},b.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var A=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];p.prototype.clone=function(){return new p(this,{body:this._bodyInit})},f.call(p.prototype),f.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},m.error=function(){var t=new m(null,{status:0,statusText:""});return t.type="error",t};var x=[301,302,303,307,308];m.redirect=function(t,e){if(-1===x.indexOf(e))throw new RangeError("Invalid status code");return new m(null,{status:e,headers:{location:t}})},t.Headers=o,t.Request=p,t.Response=m,t.fetch=function(t,e){return new Promise(function(r,n){var o=new p(t,e),s=new XMLHttpRequest;s.onload=function(){var t={status:s.status,statusText:s.statusText,headers:y(s.getAllResponseHeaders()||"")};t.url="responseURL"in s?s.responseURL:t.headers.get("X-Request-URL");var e="response"in s?s.response:s.responseText;r(new m(e,t))},s.onerror=function(){n(new TypeError("Network request failed"))},s.ontimeout=function(){n(new TypeError("Network request failed"))},s.open(o.method,o.url,!0),"include"===o.credentials&&(s.withCredentials=!0),"responseType"in s&&b.blob&&(s.responseType="blob"),o.headers.forEach(function(t,e){s.setRequestHeader(e,t)}),s.send(void 0===o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},function(t,e){t.exports={name:"restl",version:"0.1.2",description:"Opiniated HAL client.",main:"lib/index.js",scripts:{test:"eslint lib/ && nyc mocha"},repository:{type:"git",url:"git+https://github.com/evert/restl.git"},keywords:["rest","hypermedia","client","http","hateoas","hal"],author:"Evert Pot",license:"MIT",bugs:{url:"https://github.com/evert/restl/issues"},homepage:"https://github.com/evert/restl#readme",dependencies:{"isomorphic-fetch":"^2.2.1","node-fetch":"^1.6.3",request:"^2.79.0","request-promise-any":"^1.0.3"},devDependencies:{chai:"^3.5.0",eslint:"^3.15.0",koa:"^2.2.0","koa-logger":"^2.0.1","koa-path-match":"^2.0.0",mocha:"^3.2.0",webpack:"^2.4.1",nyc:"^10.2.0"}}}]);