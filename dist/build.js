!function(t,e){"use strict";var n="default"in t?t.default:t;function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e;var a=function(e){if(void 0===e.initialState)throw new Error("No initialState specified for ".concat(e));return t.useReducer(function(t){return function(e,n){if("RESET"===n)return t.initialState;var r=t.states[e];if(void 0===r)throw new Error("No transitions defined for ".concat(e));if(r.constructor!==Object)throw new Error("Wrong transitions model: ".concat(r));var o=r[n];if(void 0===o)throw new Error("Unknown transition for action ".concat(n," in state ").concat(e));return o}}(e),e.initialState)},i={initialState:"notLoaded",states:{notLoaded:{LOAD:"loading"},loading:{SUCCESS:"loaded"},loaded:{LOAD_MORE:"loading"}}},u=function(){var e=r(a(i),2),o=e[0],u=e[1];switch(t.useEffect((function(){"loading"===o&&setTimeout((function(){return u("SUCCESS")}),500)}),[o,u]),o){case"notLoaded":return n.createElement("div",null,"Not loaded",n.createElement("button",{type:"submit",onClick:function(){return u("LOAD")}},"Load"));case"loading":return n.createElement("div",null,"Loading...");case"loaded":return n.createElement("div",null,"Loaded",n.createElement("button",{type:"submit",onClick:function(){return u("LOAD_MORE")}},"Load more"),n.createElement("button",{type:"submit",onClick:function(){return u("RESET")}},"Reset"));default:throw new Error("Cannot render state ".concat(o))}},c=document.getElementById("main");e.render(n.createElement(u,null),c)}(React,ReactDOM);
//# sourceMappingURL=build.js.map