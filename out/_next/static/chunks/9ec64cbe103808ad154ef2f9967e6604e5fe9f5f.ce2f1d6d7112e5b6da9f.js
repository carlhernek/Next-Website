(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+iuc":function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),e.exports=n("WEpk").Set},"/0+H":function(e,t,n){"use strict";var r=n("hfKm"),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r(t,"__esModule",{value:!0});var o=i(n("q1tI")),s=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,o=e.hasQuery;return n||i&&(void 0!==o&&o)}t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(s.AmpStateContext))}},"/h46":function(e,t,n){n("cHUd")("Map")},"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},"2PDY":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=o.cssRules();return o.flush(),e},t.default=void 0;var r,i=n("q1tI");var o=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),s=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return o.computeId(t,n)})).join(" ")};var i=r.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){o.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&o.remove(this.prevProps),o.add(this.props),this.prevProps=this.props),null},r}(i.Component);t.default=s},"8Kt/":function(e,t,n){"use strict";var r=n("ttDY"),i=n("hfKm"),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};i(t,"__esModule",{value:!0});var s=o(n("q1tI")),a=o(n("Xuae")),u=n("lwAK"),c=n("FYa8"),l=n("/0+H");function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function h(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=f;var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=s.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(h,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new r,t=new r,n=new r,i={};return function(o){var s=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?s=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?s=!1:t.add(o.type);break;case"meta":for(var u=0,c=d.length;u<c;u++){var l=d[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?s=!1:n.add(l);else{var f=o.props[l],h=i[l]||new r;h.has(f)?s=!1:(h.add(f),i[l]=h)}}}return s}}()).reverse().map((function(e,t){var n=e.key||t;return s.default.cloneElement(e,{key:n})}))}var m=a.default();function v(e){var t=e.children;return s.default.createElement(u.AmpStateContext.Consumer,null,(function(e){return s.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return s.default.createElement(m,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:l.isInAmpMode(e)},t)}))}))}v.rewind=m.rewind,t.default=v},"8iia":function(e,t,n){var r=n("QMMT"),i=n("RRc/");e.exports=function(e){return function(){if(r(this)!=e)throw TypeError(e+"#toJSON isn't generic");return i(this)}}},"8oxB":function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"===typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u,c=[],l=!1,f=-1;function h(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&d())}function d(){if(!l){var e=a(h);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},B9jh:function(e,t,n){"use strict";var r=n("Wu5q"),i=n("n3ko");e.exports=n("raTm")("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return r.def(i(this,"Set"),e=0===e?0:e,e)}},r)},IP1Z:function(e,t,n){"use strict";var r=n("2faE"),i=n("rr1i");e.exports=function(e,t,n){t in e?r.f(e,t,i(0,n)):e[t]=n}},Iryi:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI"),i=n.n(r).a.createElement;function o(){return i("style",{jsx:!0},"\n        h1:first-of-type {\n          margin: 0.5rem 0;\n          background-color: black;\n          color: white;\n          padding: 0.5rem 0.75rem;\n        }\n\n        li {\n          font-size: 0.75rem;\n        }\n\n        a {\n          font-size: 0.75rem;\n          color: black;\n        }\n\n        .project-card {\n          border-left: solid 7px black;\n          padding-left: 0.5rem;\n        }\n\n        .project-img {\n          object-fit: cover;\n          height: 13rem;\n          width: 13rem;\n          margin: 0 0.75rem 0.75rem 0;\n        }\n\n        .project-vid {\n          width: 26rem;\n          margin: 0 0.75rem 0.75rem 0;\n        }\n\n        @media only screen and (orientation: portrait) {\n          .project-img {\n            object-fit: contain;\n            width: 100%;\n            height: auto;\n            margin: 0 0 0.75rem 0;\n          }\n\n          .project-vid {\n            width: 100%;\n            min-width: 100%;\n            margin: 0 0 0.75rem 0;\n          }\n        }\n\n        .media-container {\n          display: flex;\n          flex-wrap: wrap;\n        }\n\n        @media only screen and (max-width: 1024px) {\n          h1:first-of-type {\n            margin: 0.5rem 0;\n          }\n        }\n      ")}},LX0d:function(e,t,n){e.exports=n("UDep")},MX0m:function(e,t,n){e.exports=n("3niX")},PQJW:function(e,t,n){var r=n("d04V"),i=n("yLu3");e.exports=function(e){if(i(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},"RRc/":function(e,t,n){var r=n("oioR");e.exports=function(e,t){var n=[];return r(e,!1,n.push,n,t),n}},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=o(n("9kyW")),i=o(n("bVZc"));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,o=t.optimizeForSpeed,s=void 0!==o&&o,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var o=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=o,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var i=String(n),o=t+i;return e[o]||(e[o]="jsx-"+(0,r.default)(t+"-"+i)),e[o]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var i=n+r;return t[i]||(t[i]=r.replace(e,n)),t[i]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,i=e.id;if(r){var o=this.computeId(i,r);return{styleId:o,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(o,e)})):[this.computeSelector(o,n)]}}return{styleId:this.computeId(i),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=s},TbGu:function(e,t,n){var r=n("fGSI"),i=n("PQJW"),o=n("2PDY");e.exports=function(e){return r(e)||i(e)||o()}},UDep:function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),e.exports=n("WEpk").Map},"V+O7":function(e,t,n){n("aPfg")("Set")},VJsP:function(e,t,n){"use strict";var r=n("2GTP"),i=n("Y7ZC"),o=n("JB68"),s=n("sNwI"),a=n("NwJ3"),u=n("tEej"),c=n("IP1Z"),l=n("fNZA");i(i.S+i.F*!n("TuGD")((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,i,f,h=o(e),d="function"==typeof this?this:Array,p=arguments.length,m=p>1?arguments[1]:void 0,v=void 0!==m,y=0,_=l(h);if(v&&(m=r(m,p>2?arguments[2]:void 0,2)),void 0==_||d==Array&&a(_))for(n=new d(t=u(h.length));t>y;y++)c(n,y,v?m(h[y],y):h[y]);else for(f=_.call(h),n=new d;!(i=f.next()).done;y++)c(n,y,v?s(f,m,[i.value,y],!0):i.value);return n.length=y,n}})},Wu5q:function(e,t,n){"use strict";var r=n("2faE").f,i=n("oVml"),o=n("XJU/"),s=n("2GTP"),a=n("EXMj"),u=n("oioR"),c=n("MPFp"),l=n("UO39"),f=n("TJWN"),h=n("jmDH"),d=n("6/1s").fastKey,p=n("n3ko"),m=h?"_s":"size",v=function(e,t){var n,r=d(t);if("F"!==r)return e._i[r];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,c){var l=e((function(e,r){a(e,l,t,"_i"),e._t=t,e._i=i(null),e._f=void 0,e._l=void 0,e[m]=0,void 0!=r&&u(r,n,e[c],e)}));return o(l.prototype,{clear:function(){for(var e=p(this,t),n=e._i,r=e._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];e._f=e._l=void 0,e[m]=0},delete:function(e){var n=p(this,t),r=v(n,e);if(r){var i=r.n,o=r.p;delete n._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),n._f==r&&(n._f=i),n._l==r&&(n._l=o),n[m]--}return!!r},forEach:function(e){p(this,t);for(var n,r=s(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!v(p(this,t),e)}}),h&&r(l.prototype,"size",{get:function(){return p(this,t)[m]}}),l},def:function(e,t,n){var r,i,o=v(e,t);return o?o.v=n:(e._l=o={i:i=d(t,!0),k:t,v:n,p:r=e._l,n:void 0,r:!1},e._f||(e._f=o),r&&(r.n=o),e[m]++,"F"!==i&&(e._i[i]=o)),e},getEntry:v,setStrong:function(e,t,n){c(e,t,(function(e,n){this._t=p(e,t),this._k=n,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?l(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,l(1))}),n?"entries":"values",!n,!0),f(t)}}},XLbu:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},Xuae:function(e,t,n){"use strict";var r=n("/HRN"),i=n("ZDA2"),o=n("/+P4"),s=n("K47E"),a=n("WaGi"),u=n("N9n2"),c=n("TbGu"),l=n("ttDY");n("hfKm")(t,"__esModule",{value:!0});var f=n("q1tI"),h=!1;t.default=function(){var e,t=new l;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(c){function l(e){var a;return r(this,l),a=i(this,o(l).call(this,e)),h&&(t.add(s(a)),n(s(a))),a}return u(l,c),a(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(f.Component)}},YFqc:function(e,t,n){e.exports=n("cTJO")},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(e){var t=void 0===e?{}:e,n=t.name,o=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,u=void 0===a?r:a,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;s(i(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#"+o+"-deleted-rule____{}",s("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,o,a,u=e.prototype;return u.setOptimizeForSpeed=function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(s(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(a){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];s(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,n){t&&s(i(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(r,n):o.appendChild(r),r},t=e,(o=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,o),a&&n(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=o}).call(this,n("8oxB"))},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),i=n("WaGi"),o=n("ZDA2"),s=n("/+P4"),a=n("N9n2"),u=n("LX0d"),c=n("KI45"),l=n("5Uuq");t.__esModule=!0,t.default=void 0;var f,h=n("CxY0"),d=l(n("q1tI")),p=c(n("nOHt")),m=n("g/15");function v(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var y=new u,_=window.IntersectionObserver,g={};function w(){return f||(_?f=new _((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var b=function(e){function t(e){var n;return r(this,t),(n=o(this,s(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(i,o){if(r&&i===t&&o===n)return r;var s=e(i,o);return t=i,n=o,r=s,s}}((function(e,t){return{href:v(e),as:t?v(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,i=t.target;if("A"!==r||!(i&&"_self"!==i||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=n.formatUrls(n.props.href,n.props.as),s=o.href,a=o.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var u=window.location.pathname;s=(0,h.resolve)(u,s),a=a?(0,h.resolve)(u,a):s,e.preventDefault();var c=n.props.scroll;null==c&&(c=a.indexOf("#")<0),p.default[n.props.replace?"replace":"push"](s,a,{shallow:n.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return a(t,e),i(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href;return(0,h.resolve)(e,t)}},{key:"handleRef",value:function(e){var t=this,n=g[this.getHref()];this.p&&_&&e&&e.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var e=this.getHref();p.default.prefetch(e),g[e]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,i=n.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var o=d.Children.only(t),s={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch()},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(s.href=i||r),d.default.cloneElement(o,s)}}]),t}(d.Component);t.default=b},d04V:function(e,t,n){e.exports=n("0tVQ")},dL40:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},dVTT:function(e,t,n){n("aPfg")("Map")},fGSI:function(e,t,n){var r=n("p0XB");e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},g33z:function(e,t,n){"use strict";var r=n("Wu5q"),i=n("n3ko");e.exports=n("raTm")("Map",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(e){var t=r.getEntry(i(this,"Map"),e);return t&&t.v},set:function(e,t){return r.def(i(this,"Map"),0===e?0:e,t)}},r,!0)},k3ls:function(e,t,n){"use strict";var r=n("MX0m"),i=n.n(r),o=n("q1tI"),s=n.n(o),a=n("YFqc"),u=n.n(a),c=s.a.createElement,l=function(){return c("nav",{className:"jsx-479083334"},c(u.a,{href:"/"},c("a",{className:"jsx-479083334"},"Home")),c(u.a,{href:"/frontend"},c("a",{className:"jsx-479083334"},"Frontend")),c(u.a,{href:"/design"},c("a",{className:"jsx-479083334"},"Design")),c(u.a,{href:"/resume"},c("a",{className:"jsx-479083334"},"Resum\xe9")),c(i.a,{id:"479083334"},["nav.jsx-479083334{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;height:100%;}","nav.jsx-479083334 a.jsx-479083334{color:white;background-color:black;padding:0.25rem;font-size:1rem;-webkit-transition:color 0.35s;transition:color 0.35s;margin-left:0;}","nav.jsx-479083334 a.jsx-479083334:nth-child(n + 2){margin-top:0.5rem;}","nav.jsx-479083334 a.jsx-479083334:focus{background-color:white;color:black;}","@media only screen and (max-width:1024px){nav.jsx-479083334 a.jsx-479083334{padding:0.5rem;margin:0.125rem 0.5rem;}nav.jsx-479083334 a.jsx-479083334:nth-child(1){margin-top:1rem;}}","nav.jsx-479083334 a.jsx-479083334:hover{background-color:white;color:black;-webkit-transition:color 0.35s;transition:color 0.35s;}","@media only screen and (orientation:portrait){nav.jsx-479083334 a.jsx-479083334{padding:1.5rem 0.5rem;}}","@media only screen and (max-width:2014px){nav.jsx-479083334 a.jsx-479083334:nth-child(1){margin-top:0.5rem;}}"]))},f=n("8Kt/"),h=n.n(f),d=s.a.createElement;t.a=function(e){return d("div",{className:"jsx-1704667741 container"},d(h.a,null,d("title",{className:"jsx-1704667741"},"It just works"),d("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width",className:"jsx-1704667741"}),d("link",{href:"https://fonts.googleapis.com/css?family=Raleway&display=swap",rel:"stylesheet",className:"jsx-1704667741"})),d(l,null),e.children,d(i.a,{id:"1704667741"},[":root{font-size:2vh;}","#__next{margin:0;padding:0;}","body{margin:0;padding:0;overflow:hidden;}",'h1,h2,h3,h4{font-family:"Raleway";display:table;}',"h4{margin-bottom:0.45rem;color:blue;}",'p,a{font-family:"Raleway";}','ul{font-family:"Raleway";list-style-type:none;margin:0;padding:0;}',"#__next{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100vw;height:100vh;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".page{margin-left:1rem;padding-right:1.5rem;overflow-y:scroll;overflow-x:hidden;-webkit-scrollbar-width:thin;-moz-scrollbar-width:thin;-ms-scrollbar-width:thin;scrollbar-width:thin;-webkit-scrollbar-color:black white;-moz-scrollbar-color:black white;-ms-scrollbar-color:black white;scrollbar-color:black white;}",".page::-webkit-scrollbar{width:8px;}",".page::-webkit-scrollbar-track{background:transparent;}",".page::-webkit-scrollbar-thumb{background-color:black;border:none;}",".container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:30rem;width:1024px;background-color:white;}",".container *{border:solid 3px transparent;}",".no-border{border:none;}",".no-margin-top{margin-top:0;}",":focus{border:solid 3px black;}","@media only screen and (max-width:1024px){.page{margin-left:0;}.container{height:100vh;width:100vw;}}","@media only screen and (max-width:1024px) and (orientation:landscape){:root{font-size:2vw;}}"]))}},lwAK:function(e,t,n){"use strict";var r=n("hfKm"),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var o=i(n("q1tI"));t.AmpStateContext=o.createContext({})},ttDY:function(e,t,n){e.exports=n("+iuc")},xvv9:function(e,t,n){n("cHUd")("Set")}}]);