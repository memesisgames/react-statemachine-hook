import{useReducer as t}from"react";var r=function(r){if(void 0===r.initialState)throw new Error("No initialState specified for ".concat(r));return t(function(t){return function(r,n){if("RESET"===n)return t.initialState;var o=t.states[r];if(void 0===o)throw new Error("No transitions defined for ".concat(r));if(o.constructor!==Object)throw new Error("Wrong transitions model: ".concat(o));var i=o[n];if(void 0===i)throw new Error("Unknown transition for action ".concat(n," in state ").concat(r));return i}}(r),r.initialState)};export{r as useStateMachine};
//# sourceMappingURL=index.js.map
