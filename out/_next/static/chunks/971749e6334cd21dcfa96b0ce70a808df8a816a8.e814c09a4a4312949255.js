(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+iuc":function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),e.exports=n("WEpk").Set},"/0+H":function(e,t,n){"use strict";var r=n("hfKm"),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r(t,"__esModule",{value:!0});var i=o(n("q1tI")),s=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery;return n||o&&(void 0!==i&&i)}t.isInAmpMode=a,t.useAmp=function(){return a(i.default.useContext(s.AmpStateContext))}},"/h46":function(e,t,n){n("cHUd")("Map")},"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},"2PDY":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var r,o=n("q1tI");var i=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),s=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return i.computeId(t,n)})).join(" ")};var o=r.prototype;return o.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},o.componentWillUnmount=function(){i.remove(this.props)},o.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},r}(o.Component);t.default=s},"8Kt/":function(e,t,n){"use strict";var r=n("ttDY"),o=n("hfKm"),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};o(t,"__esModule",{value:!0});var s=i(n("q1tI")),a=i(n("Xuae")),c=n("lwAK"),l=n("FYa8"),u=n("/0+H");function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=f;var h=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=s.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new r,t=new r,n=new r,o={};return function(i){var s=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var a=i.key.slice(i.key.indexOf("$")+1);e.has(a)?s=!1:e.add(a)}switch(i.type){case"title":case"base":t.has(i.type)?s=!1:t.add(i.type);break;case"meta":for(var c=0,l=h.length;c<l;c++){var u=h[c];if(i.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?s=!1:n.add(u);else{var f=i.props[u],d=o[u]||new r;d.has(f)?s=!1:(d.add(f),o[u]=d)}}}return s}}()).reverse().map((function(e,t){var n=e.key||t;return s.default.cloneElement(e,{key:n})}))}var m=a.default();function v(e){var t=e.children;return s.default.createElement(c.AmpStateContext.Consumer,null,(function(e){return s.default.createElement(l.HeadManagerContext.Consumer,null,(function(n){return s.default.createElement(m,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:u.isInAmpMode(e)},t)}))}))}v.rewind=m.rewind,t.default=v},"8iia":function(e,t,n){var r=n("QMMT"),o=n("RRc/");e.exports=function(e){return function(){if(r(this)!=e)throw TypeError(e+"#toJSON isn't generic");return o(this)}}},"8oxB":function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"===typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c,l=[],u=!1,f=-1;function d(){u&&c&&(u=!1,c.length?l=c.concat(l):f=-1,l.length&&h())}function h(){if(!u){var e=a(d);u=!0;for(var t=l.length;t;){for(c=l,l=[];++f<t;)c&&c[f].run();f=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||u||a(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},B9jh:function(e,t,n){"use strict";var r=n("Wu5q"),o=n("n3ko");e.exports=n("raTm")("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return r.def(o(this,"Set"),e=0===e?0:e,e)}},r)},HXcA:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("MX0m"),o=n.n(r),i=n("q1tI"),s=n.n(i).a.createElement;function a(){return s("div",{className:"jsx-4251133003"},s("h3",{className:"jsx-4251133003"},"Footer"),s(o.a,{id:"4251133003"},["div.jsx-4251133003{height:5vh;margin:7vh 0;}"]))}},IP1Z:function(e,t,n){"use strict";var r=n("2faE"),o=n("rr1i");e.exports=function(e,t,n){t in e?r.f(e,t,o(0,n)):e[t]=n}},Iryi:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),o=n.n(r).a.createElement;function i(){return o("style",{jsx:!0},'\n        h1 {\n          font-size: 2.5rem;\n          margin: 0 0 0.5rem 0;\n          color: var(--font-color);\n        }\n\n        h1::after {\n          position: relative;\n          display: block;\n          content: "";\n          height: 1.7rem;\n          width: 100%;\n          background-color: var(--accent-color-b);\n          left: 1rem;\n          top: -1.6rem;\n          z-index: -1;\n        }\n\n        h2 {\n          font-size: 1.9rem;\n          margin: 1.5rem 0 0.3rem 0;\n        }\n\n        .h2-styled::after {\n          position: relative;\n          display: block;\n          content: "";\n          height: 1.5rem;\n          width: 100%;\n          background-color: var(--accent-color-o);\n          left: 0.75rem;\n          top: -1.3rem;\n          z-index: -1;\n        }\n\n        h3 {\n          font-size: 1.7rem;\n        }\n\n        h4 {\n          font-size: 1.5rem;\n        }\n\n        p {\n          font-size: 1.2rem;\n          line-height: 1.6rem;\n        }\n\n        ul {\n          display: table;\n          margin-right: 1rem;\n        }\n\n        li {\n          font-size: 1.2rem;\n          display: table;\n          line-height: 1.6rem;\n        }\n\n        a {\n          font-size: 1.2rem;\n          color: var(--link-color);\n        }\n\n        .project-card {\n          position: relative;\n          padding: 0 0.25rem 1rem 0.25rem;\n          margin: 1rem 0;\n          background-color: var(--font-color-opacity);\n        }\n\n        .project-img {\n          object-fit: cover;\n          height: 13rem;\n          width: 13rem;\n          margin: 0 0.75rem 0.75rem 0;\n        }\n\n        .project-vid {\n          width: 26rem;\n          margin: 0 0.75rem 0.75rem 0;\n        }\n\n        .media-container {\n          display: flex;\n          flex-wrap: wrap;\n        }\n\n        .column-card {\n          display: flex;\n        }\n\n        .hide {\n          display: none;\n        }\n\n        .load-button {\n          position: relative;\n          color: var(--font-color);\n          background-color: transparent;\n          padding: 0.25rem;\n          font-size: 1.2rem;\n        }\n\n        @media only screen and (orientation: portrait) {\n          .project-img {\n            object-fit: contain;\n            width: 100%;\n            height: auto;\n            margin: 0 0 0.75rem 0;\n          }\n\n          .project-vid {\n            width: 100%;\n            min-width: 100%;\n            margin: 0 0 0.75rem 0;\n          }\n\n          .media-container {\n            flex-direction: column;\n            flex-wrap: nowrap;\n          }\n\n          .column-card {\n            flex-direction: column;\n          }\n        }\n\n        @media only screen and (max-width: 1024px) {\n          h1:first-of-type {\n            margin: 1.5rem 0;\n          }\n        }\n\n        @media only screen and (max-width: 756px) {\n          h2 {\n            font-size: 1.5rem;\n          }\n\n          h3 {\n            font-size: 1.4rem;\n          }\n\n          h4 {\n            font-size: 1.3rem;\n          }\n\n          .h2-styled::after {\n            left: 0.575rem;\n            top: -0.975rem;\n            height: 1.2rem;\n          }\n        }\n      ')}},LX0d:function(e,t,n){e.exports=n("UDep")},MX0m:function(e,t,n){e.exports=n("3niX")},PQJW:function(e,t,n){var r=n("d04V"),o=n("yLu3");e.exports=function(e){if(o(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},"RRc/":function(e,t,n){var r=n("oioR");e.exports=function(e,t){var n=[];return r(e,!1,n.push,n,t),n}},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=i(n("9kyW")),o=i(n("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,s=void 0!==i&&i,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;this._sheet=r||new o.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,o=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=o.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=i,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var o=String(n),i=t+o;return e[i]||(e[i]="jsx-"+(0,r.default)(t+"-"+o)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var o=n+r;return t[o]||(t[o]=r.replace(e,n)),t[o]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,o=e.id;if(r){var i=this.computeId(o,r);return{styleId:i,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,n)]}}return{styleId:this.computeId(o),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=s},TbGu:function(e,t,n){var r=n("fGSI"),o=n("PQJW"),i=n("2PDY");e.exports=function(e){return r(e)||o(e)||i()}},UDep:function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),e.exports=n("WEpk").Map},"V+O7":function(e,t,n){n("aPfg")("Set")},VJsP:function(e,t,n){"use strict";var r=n("2GTP"),o=n("Y7ZC"),i=n("JB68"),s=n("sNwI"),a=n("NwJ3"),c=n("tEej"),l=n("IP1Z"),u=n("fNZA");o(o.S+o.F*!n("TuGD")((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,o,f,d=i(e),h="function"==typeof this?this:Array,p=arguments.length,m=p>1?arguments[1]:void 0,v=void 0!==m,g=0,y=u(d);if(v&&(m=r(m,p>2?arguments[2]:void 0,2)),void 0==y||h==Array&&a(y))for(n=new h(t=c(d.length));t>g;g++)l(n,g,v?m(d[g],g):d[g]);else for(f=y.call(d),n=new h;!(o=f.next()).done;g++)l(n,g,v?s(f,m,[o.value,g],!0):o.value);return n.length=g,n}})},Wu5q:function(e,t,n){"use strict";var r=n("2faE").f,o=n("oVml"),i=n("XJU/"),s=n("2GTP"),a=n("EXMj"),c=n("oioR"),l=n("MPFp"),u=n("UO39"),f=n("TJWN"),d=n("jmDH"),h=n("6/1s").fastKey,p=n("n3ko"),m=d?"_s":"size",v=function(e,t){var n,r=h(t);if("F"!==r)return e._i[r];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,l){var u=e((function(e,r){a(e,u,t,"_i"),e._t=t,e._i=o(null),e._f=void 0,e._l=void 0,e[m]=0,void 0!=r&&c(r,n,e[l],e)}));return i(u.prototype,{clear:function(){for(var e=p(this,t),n=e._i,r=e._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];e._f=e._l=void 0,e[m]=0},delete:function(e){var n=p(this,t),r=v(n,e);if(r){var o=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),n._f==r&&(n._f=o),n._l==r&&(n._l=i),n[m]--}return!!r},forEach:function(e){p(this,t);for(var n,r=s(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!v(p(this,t),e)}}),d&&r(u.prototype,"size",{get:function(){return p(this,t)[m]}}),u},def:function(e,t,n){var r,o,i=v(e,t);return i?i.v=n:(e._l=i={i:o=h(t,!0),k:t,v:n,p:r=e._l,n:void 0,r:!1},e._f||(e._f=i),r&&(r.n=i),e[m]++,"F"!==o&&(e._i[o]=i)),e},getEntry:v,setStrong:function(e,t,n){l(e,t,(function(e,n){this._t=p(e,t),this._k=n,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?u(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,u(1))}),n?"entries":"values",!n,!0),f(t)}}},XLbu:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},Xuae:function(e,t,n){"use strict";var r=n("/HRN"),o=n("ZDA2"),i=n("/+P4"),s=n("K47E"),a=n("WaGi"),c=n("N9n2"),l=n("TbGu"),u=n("ttDY");n("hfKm")(t,"__esModule",{value:!0});var f=n("q1tI"),d=!1;t.default=function(){var e,t=new u;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(l){function u(e){var a;return r(this,u),a=o(this,i(u).call(this,e)),d&&(t.add(s(a)),n(s(a))),a}return c(u,l),a(u,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(u,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),u}(f.Component)}},YFqc:function(e,t,n){e.exports=n("cTJO")},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,n=t.name,i=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,c=void 0===a?r:a,l=t.isBrowser,u=void 0===l?"undefined"!==typeof window:l;s(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",s("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,i,a,c=e.prototype;return c.setOptimizeForSpeed=function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(s(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(a){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];s(o,"old rule at index `"+e+"` not found"),o.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,n){t&&s(o(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,i),a&&n(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,n("8oxB"))},cTJO:function(e,t,n){"use strict";var r=n("/HRN"),o=n("WaGi"),i=n("ZDA2"),s=n("/+P4"),a=n("N9n2"),c=n("LX0d"),l=n("KI45"),u=n("5Uuq");t.__esModule=!0,t.default=void 0;var f,d=n("CxY0"),h=u(n("q1tI")),p=l(n("nOHt")),m=n("g/15");function v(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var g=new c,y=window.IntersectionObserver,_={};function b(){return f||(y?f=new y((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var w=function(e){function t(e){var n;return r(this,t),(n=i(this,s(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var s=e(o,i);return t=o,n=i,r=s,s}}((function(e,t){return{href:v(e),as:t?v(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),s=i.href,a=i.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var c=window.location.pathname;s=(0,d.resolve)(c,s),a=a?(0,d.resolve)(c,a):s,e.preventDefault();var l=n.props.scroll;null==l&&(l=a.indexOf("#")<0),p.default[n.props.replace?"replace":"push"](s,a,{shallow:n.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return a(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href;return(0,d.resolve)(e,t)}},{key:"handleRef",value:function(e){var t=this,n=_[this.getHref()];this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(e,t){var n=b();return n?(n.observe(e),g.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var e=this.getHref();p.default.prefetch(e),_[e]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=h.default.createElement("a",null,t));var i=h.Children.only(t),s={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch()},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=o||r),h.default.cloneElement(i,s)}}]),t}(h.Component);t.default=w},d04V:function(e,t,n){e.exports=n("0tVQ")},dL40:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},dVTT:function(e,t,n){n("aPfg")("Map")},fGSI:function(e,t,n){var r=n("p0XB");e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},g33z:function(e,t,n){"use strict";var r=n("Wu5q"),o=n("n3ko");e.exports=n("raTm")("Map",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(e){var t=r.getEntry(o(this,"Map"),e);return t&&t.v},set:function(e,t){return r.def(o(this,"Map"),0===e?0:e,t)}},r,!0)},k3ls:function(e,t,n){"use strict";var r=n("MX0m"),o=n.n(r),i=n("q1tI"),s=n.n(i),a=n("YFqc"),c=n.n(a),l=n("xjXq"),u=s.a.createElement,f=function(){var e,t=Object(i.useState)(!1),n=t[0],r=t[1],s=function(e){r(!e)};return u("nav",{style:(e=n,e?{left:"-5vw",transition:"left .5s"}:{left:"100vw",transition:" left .5s"}),className:"jsx-2120202390 menu"},u("button",{onClick:function(){return s(n)},className:"jsx-2120202390 menu-open"},"Open Menu",u(l.a,{w:"1em",h:"1em",color:"var(--font-color-inverted)",rotate:"rotate(270)",loc:"leftSmall"}),u(l.a,{w:"1em",h:"1em",color:"var(--font-color-inverted)",rotate:"rotate(90)",loc:"rightSmall"})),u(c.a,{href:"/"},u("a",{className:"jsx-2120202390"},"Home")),u(c.a,{href:"/frontend"},u("a",{className:"jsx-2120202390"},"Frontend")),u(c.a,{href:"/design"},u("a",{className:"jsx-2120202390"},"Design")),u(c.a,{href:"/resume"},u("a",{className:"jsx-2120202390"},"Resum\xe9")),u("button",{onClick:function(){return s(n)},className:"jsx-2120202390 menu-close"},"Close Menu",u(l.a,{w:"1em",h:"1em",color:"var(--accent-color-r)",rotate:"rotate(270)",loc:"left"}),u(l.a,{w:"1em",h:"1em",color:"var(--accent-color-r)",rotate:"rotate(90)",loc:"right"})),u(o.a,{id:"2120202390"},[".menu.jsx-2120202390{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;height:100%;padding:0.5rem 0 0 0;z-index:5;}",".menu-close.jsx-2120202390{position:relative;display:none;z-index:1;color:var(--accent-color-r);background-color:transparent;padding:0.25rem;font-size:1.2rem;margin:0 auto;}",".menu-open.jsx-2120202390{display:none;background-color:var(--font-color);color:var(--font-color-inverted);position:absolute;left:-5rem;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);font-size:1.2rem;padding:0.5rem 0.65rem 1.1rem 0.65rem;}","nav.jsx-2120202390 a.jsx-2120202390{color:var(--font-color);padding:0.25rem;font-size:1.2 rem;-webkit-transition:color 0.35s;transition:color 0.35s;margin-left:0;z-index:2;-webkit-text-decoration:none;text-decoration:none;}",'nav.jsx-2120202390 a.jsx-2120202390::after{content:"";display:table;height:1.7px;min-height:1.5px;width:1.25rem;background-color:var(--font-color);margin:0.2rem 0 0 0;-webkit-transition:0.25s;transition:0.25s;}',"nav.jsx-2120202390 a.jsx-2120202390:hover.jsx-2120202390:after{width:50%;-webkit-transition:0.25s;transition:0.25s;background-color:var(--accent-color-r);}","nav.jsx-2120202390 a.jsx-2120202390:nth-child(n + 2){margin-bottom:8px;}","nav.jsx-2120202390 a.jsx-2120202390:focus{background-color:var(--font-color);color:var(--font-color-inverted);border:solid 3px transparent;}","nav.jsx-2120202390 a.jsx-2120202390:focus.jsx-2120202390:after{background-color:var(--font-color);}","@media only screen and (max-width:1024px){.menu.jsx-2120202390{position:absolute;width:110vw;height:100vh;background-color:var(--font-color);padding:0;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.menu-close.jsx-2120202390{display:block;margin-top:1.5rem;}.menu-open.jsx-2120202390{display:block;}nav.jsx-2120202390 a.jsx-2120202390{text-align:center;width:50%;color:var(--font-color-inverted);-webkit-text-decoration:underline;text-decoration:underline;}nav.jsx-2120202390 a.jsx-2120202390:nth-child(1){margin-top:0.5rem;}nav.jsx-2120202390 a.jsx-2120202390::after{width:0;background-color:transparent;}nav.jsx-2120202390 a.jsx-2120202390:hover.jsx-2120202390:after{width:0;background-color:transparent;}}"]))},d=n("8Kt/"),h=n.n(d),p=s.a.createElement;t.a=function(e){return p("div",{className:"jsx-2198926153 container"},p(h.a,null,p("title",{className:"jsx-2198926153"},"It just works"),p("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width",className:"jsx-2198926153"}),p("link",{href:"https://fonts.googleapis.com/css?family=Inconsolata|Montserrat:500,600,700&display=swap",rel:"stylesheet",className:"jsx-2198926153"})),p(f,null),e.children,p(o.a,{id:"2198926153"},[":root{font-size:2vh;--font-color:#1f2121;--font-color-inverted:#f3f3f3;--font-color-opacity:#f5f5f5d8;--font-color-opacity-alt:#4a4a4a8e;--accent-color-r:hsl(0,93%,73%);--accent-color-b:hsla(177,100%,50%,0.2);--accent-color-o:hsla(39,100%,69%,0.7);--accent-color-g:hsla(80,77%,67%,0.2);--link-color:#3f77f7;}","#__next{margin:0;padding:0;}","body{height:100vh;width:100vw;margin:0;padding:0;overflow:hidden;color:var(--font-color);background:radial-gradient( circle at 69% 86%, rgba(165,165,165,0.06) 0%, rgba(165,165,165,0.06) 25%, rgba(193,193,193,0.06) 25%, rgba(193,193,193,0.06) 50%, rgba(221,221,221,0.06) 50%, rgba(221,221,221,0.06) 75%, rgba(249,249,249,0.06) 75%, rgba(249,249,249,0.06) 100% ), radial-gradient( circle at 49% 76%, rgba(129,129,129,0.06) 0%, rgba(129,129,129,0.06) 25%, rgba(164,164,164,0.06) 25%, rgba(164,164,164,0.06) 50%, rgba(200,200,200,0.06) 50%, rgba(200,200,200,0.06) 75%, rgba(235,235,235,0.06) 75%, rgba(235,235,235,0.06) 100% ), radial-gradient( circle at 22% 64%, rgba(173,173,173,0.06) 0%, rgba(173,173,173,0.06) 25%, rgba(119,119,119,0.06) 25%, rgba(119,119,119,0.06) 50%, rgba(64,64,64,0.06) 50%, rgba(64,64,64,0.06) 75%, rgba(10,10,10,0.06) 75%, rgba(10,10,10,0.06) 100% ), linear-gradient(307deg,rgb(255,255,255),rgb(255,255,255));}",'h1,h2{font-family:"Montserrat";font-weight:700;display:table;}','h3,h4{font-family:"Montserrat";font-weight:600;display:table;margin:1.2rem 0 0.3rem 0;}',"h4{font-weight:500;margin-bottom:0.45rem;}",'button,p,a{font-family:"Inconsolata";}','ul{font-family:"Inconsolata";list-style-type:none;margin:0;padding:0;}',"#__next{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100vw;height:100vh;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".page{margin-left:2rem;padding:0 1.5rem 0 0;overflow-y:scroll;overflow-x:hidden;-webkit-scrollbar-width:thin;-moz-scrollbar-width:thin;-ms-scrollbar-width:thin;scrollbar-width:thin;-webkit-scrollbar-color:var(--font-color) transparent;-moz-scrollbar-color:var(--font-color) transparent;-ms-scrollbar-color:var(--font-color) transparent;scrollbar-color:var(--font-color) transparent;}",".page::-webkit-scrollbar{width:8px;}",".page::-webkit-scrollbar-track{background:transparent;}",".page::-webkit-scrollbar-thumb{background-color:var(--font-color);border:none;}",".container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:70vh;width:1024px;overflow:hidden;}",".container *{border:solid 3px transparent;}",".no-border{border:none;}",".no-margin-top{margin-top:0;}",".lone-child-wrap{magin:0 0 0 0.25rem;}",":focus{border:solid 3px var(--font-color);}","@media only screen and (max-width:1024px){.page{padding:0 4.5rem 0 1.5rem;margin:0;}.container{height:100vh;width:100vw;position:fixed;}}","@media only screen and (max-width:1024px) and (orientation:landscape){:root{font-size:2vw;}}"]))}},lwAK:function(e,t,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var i=o(n("q1tI"));t.AmpStateContext=i.createContext({})},ttDY:function(e,t,n){e.exports=n("+iuc")},xjXq:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI"),o=n.n(r).a.createElement;function i(e){var t=e.w,n=e.h,r=e.color,i=e.rotate,s=e.loc;return o("svg",{"aria-hidden":"true",width:t,height:n,viewBox:"0 0 100 100",style:"leftSmall"===s?{position:"absolute",top:"0.05em",left:"0em"}:"rightSmall"===s?{position:"absolute",bottom:"0.475em",right:"0em"}:"left"===s?{position:"absolute",top:"-.2em",left:"-.5em"}:"right"===s?{position:"absolute",bottom:"-.3em",right:"-.6em"}:void 0},o("path",{fill:"none",transform:i,style:{WebkitTransformOrigin:"50%50%",MsTransformOrigin:"50%50%",transformOrigin:"50%50%"},stroke:r,strokeWidth:"8",d:"M10 10L90 10 90 90"}))}},xvv9:function(e,t,n){n("cHUd")("Set")}}]);