!function(){function n(n){return n&&n.__esModule?n.default:n}var t,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(n){return n&&n.constructor===Symbol?"symbol":typeof n};var r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=f||l||Function("return this")(),d=Object.prototype.toString,m=Math.max,v=Math.min,p=function(){return s.Date.now()};function y(t){var e=void 0===t?"undefined":n(o)(t);return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":n(o)(t))||function(n){return!!n&&"object"==typeof n}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var f=c.test(t);return f||u.test(t)?a(t.slice(2),f?2:8):i.test(t)?NaN:+t}t=function(n,t,e){var o,r,i,c,u,a,f=0,l=!1,s=!1,d=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function b(t){var e=o,i=r;return o=r=void 0,f=t,c=n.apply(i,e)}function h(n){return f=n,u=setTimeout(T,t),l?b(n):c}function j(n){var e=n-a;return void 0===a||e>=t||e<0||s&&n-f>=i}function T(){var n=p();if(j(n))return I(n);u=setTimeout(T,function(n){var e=t-(n-a);return s?v(e,i-(n-f)):e}(n))}function I(n){return u=void 0,d&&o?b(n):(o=r=void 0,c)}function E(){var n=p(),e=j(n);if(o=arguments,r=this,a=n,e){if(void 0===u)return h(a);if(s)return u=setTimeout(T,t),b(a)}return void 0===u&&(u=setTimeout(T,t)),c}return t=g(t)||0,y(e)&&(l=!!e.leading,i=(s="maxWait"in e)?m(g(e.maxWait)||0,t):i,d="trailing"in e?!!e.trailing:d),E.cancel=function(){void 0!==u&&clearTimeout(u),f=0,o=a=r=u=void 0},E.flush=function(){return void 0===u?c:I(p())},E};var b=n(t)((function(){var n=document.getElementById("countryInput").value.trim();if(""===n){return void(document.getElementById("countryInfo").innerHTML="")}var t="".concat("https://restcountries.com/v3.1/name/").concat(n);fetch(t).then((function(n){return n.json()})).then(h).catch((function(n){console.error("Error ocured:",n)}))}),300);function h(n){var t,e=document.getElementById("countryInfo");if(Array.isArray(n)&&n.length>0)if(n.length>10)e.innerHTML="Too many matches found. Please enter a more specific name.";else if(1===n.length){var o=n[0];t=o,document.getElementById("countryInfo").innerHTML="\n          <h2>".concat(t.name.common,"</h2>\n          <p>Capital: ").concat(t.capital[0],"</p>\n          <p>Population: ").concat(t.population,"</p>\n          <p>Languages: ").concat(Object.values(t.languages)?Object.values(t.languages).join(", "):"No information",'</p>\n          <img src="').concat(t.flags.svg,'" alt="Country flag ').concat(t.name.common,'">\n        ')}else e.innerHTML="Found countries:",n.forEach((function(n){e.innerHTML+="\n                <div>\n                  <p>".concat(n.name.common,'</p>\n                  <img src="').concat(n.flags.svg,'" alt="Country flag ').concat(n.name.common,'">\n                </div>\n              ')}));else e.innerHTML="Unable to find country."}document.getElementById("countryInput").addEventListener("input",b)}();
//# sourceMappingURL=index.9a65b4c7.js.map