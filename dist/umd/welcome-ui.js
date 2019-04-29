!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react"),require("prop-types"),require("styled-components"),require("lodash.get"),require("lodash.merge"),require("lodash.concat")):"function"==typeof define&&define.amd?define(["exports","react","prop-types","styled-components","lodash.get","lodash.merge","lodash.concat"],e):e((n=n||self).JungleUI={},n.React,n.PropTypes,n.styled,n.get,n.merge,n.concat)}(this,function(n,e,t,r,o,i,a){"use strict";var c="default"in e?e.default:e,s="default"in r?r.default:r;function l(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function u(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function f(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.forEach(function(e){u(n,e,t[e])})}return n}function d(n){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function m(n,e){return(m=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function h(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function p(n,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function g(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function b(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function w(n){return function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}o=o&&o.hasOwnProperty("default")?o.default:o,i=i&&i.hasOwnProperty("default")?i.default:i,a=a&&a.hasOwnProperty("default")?a.default:a;var y=function(n,e,t){return parseInt(n.substring(e,t),16)};function x(){var n=g(["\n      font-family: ",";\n      font-size: ",";\n      font-weight: ",";\n      text-transform: ",";\n      letter-spacing: ",";\n    "]);return x=function(){return n},n}var v={};v.rgba=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(n){var t=e[e.length-1],r=e.slice(0,-1),i=o(n,["theme","color"].concat(w(r)))||e[0];return"rgba(".concat(function(n){if(n&&function(n){return/(^[0-9a-fA-F]{6}$)|(^[0-9a-fA-F]{3}$)/.test(n)}(n=n.replace("#","")))return 3===n.length&&(n="".concat(n[0]).concat(n[0]).concat(n[1]).concat(n[1]).concat(n[2]).concat(n[2])),"".concat(function(n){return y(n,0,2)}(n),", ").concat(function(n){return y(n,2,4)}(n),", ").concat(function(n){return y(n,4,6)}(n))}(i),", ").concat(t,")")}},v.centeredContainerWidth=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(n){var t=n.width||e.length&&[].concat(e)||"lg";return o(n,a(["theme","centeredContainerWidth"],t))}},v.textStyles=function(n){return function(e){var t=e.theme,a=t.fontFamily,c=t.fontSize,s=t.fontWeight,l=t.letterSpacing,u={family:a.texts,size:"inherit",weight:"inherit",transform:"none",spacing:"none"},f=o(e,["theme","text",n]);if(f){var d=f.family,m=f.size,h=f.weight,p=f.transform,g=f.spacing;u=i(u,{family:a[d],size:c[m],weight:s[h],transform:p,spacing:l[g]})}return r.css(x(),u.family,u.size,u.weight,u.transform,u.spacing)}};var F=function(n){var e=Object.keys(n).reduce(function(e,t){return f({},e,u({},t,function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return function(e){e.theme||(e=f({},e,{theme:n}));var i=o(e,["theme",t].concat(r));return"development"===process.env.NODE_ENV&&void 0===i&&console.warn("".concat(t,"[").concat([].concat(r),"] is not available in this theme")),i}}))},{});return f({},e,v)},k=v.rgba,E=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.defaultFontSize,t=void 0===e?50:e,r=n.defaultFontFamily,o=void 0===r?"Arial":r,a=n.headingFontFamily,c=void 0===a?"Times":a,s=h(n,["defaultFontSize","defaultFontFamily","headingFontFamily"]),l=function(n){return"".concat(n/t,"em")},u=function(n){return"".concat(n/t,"rem")},f=function(n){var e="em"===n?l:u;return{html:"".concat(t,"px"),body:e(16),xs:e(11),sm:e(13),default:e(14),md:e(16),mdlg:e(18),lg:e(19),xl:e(22),xxl:e(32),xxxl:e(50)}},d={colors:{primary:"#333333",secondary:"#999999",success:"#00FFFF",danger:"#FF0000",warning:"#FFFF00",info:"#999999",light:"#EEEEEE",dark:"#222222",white:"#FFFFFF",text:{primary:"#333333",secondary:"#999999",success:"#00FFFF",danger:"#FF0000",warning:"#FFFF00",info:"#999999",light:"#EEEEEE",dark:"#222222",white:"#FFFFFF"},bg:{primary:"#333333",secondary:"#999999",success:"#00FFFF",danger:"#FF0000",warning:"#FFFF00",info:"#999999",light:"#EEEEEE",dark:"#222222",white:"#FFFFFF"}},palette:{},text:{hint:{size:"xs",weight:"regular"},label:{size:"sm",weight:"medium"},input:{size:"sm",weight:"regular"},badge:{size:"sm",weight:"bold"},button:{size:"xs",weight:"bold",transform:"uppercase",spacing:"md"}},borderWidth:{input:"1px"}};return d.fontSize=f("rem"),d.fontSizeEm=f("em"),d.letterSpacing={sm:"0.5px",md:"1px",lg:"2px"},d.padding={xxs:u(8),xs:u(10),sm:u(12),md:u(15)},d.gutter={xxxs:u(1.6),xxs:u(4.8),xs:u(10),sm:u(12),md:u(15),lg:u(24),mdx2:u(32),xl:u(50),xxl:u(64),xxxl:u(110)},d.fontFamily={texts:o,headings:c,icons:"Material-design-iconic-font"},d.fontWeight={regular:"400",medium:"500",bold:"600",black:"700"},d.transition={sm:"all .2s cubic-bezier(0.41, 0.094, 0.54, 0.07)",md:"all .3s cubic-bezier(0.41, 0.094, 0.54, 0.07)",lg:"all 1s cubic-bezier(0.41, 0.094, 0.54, 0.07)"},d.centeredContainerWidth={sm:u(640),md:u(896),mdlg:u(1029),lg:u(1248),movies:{md:u(1024)}},d.ratio={"720p":1280/720},d.shareButtonSize={sm:16,md:32,lg:46},d.toggleSize={sm:u(16),md:u(22),lg:u(42)},d.roundedButtonSize={xs:u(19),sm:u(26),md:u(35),lg:u(70)},d.buttonIconWidth=u(46),d.modalSize={xs:u(480),sm:u(640),md:u(800),lg:u(960)},d.radius={sm:"3px",md:"6px",lg:"10px"},d.boxShadow={xs:"0 1px 2px rgba(0,0,0,.1)",sm:"0 2px 2px rgba(0,0,0,.1)",md:"0 3px 10px rgba(0,0,0,.08)",lg:"0 4px 15px rgba(0,0,0,.2)",xl:"0 8px 20px rgba(0,0,0,.2)",xxl:"0 20px 50px rgba(0,0,0,.7)"},d.breakpoint={widescreen:"1650px",mediumscreen:"1300px",smallscreen:"1100px",tablet:"900px",mobile:"670px"},d.checkboxSize={desktop:u(16),mobile:u(22)},d.fonts={},i(d,s)},j=E(),O=f({},F(j));function z(){var n=g(["\n  transition: ",";\n\n  &:hover {\n    transform: translate3d(0, -5px, 0);\n    box-shadow: ",";\n  }\n"]);return z=function(){return n},n}function S(){var n=g(["\n    display: none;\n  "]);return S=function(){return n},n}function A(){var n=g(["\n  ",";\n"]);return A=function(){return n},n}function P(){var n=g(["\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n\n  &::after {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: ",";\n    content: ' ';\n  }\n"]);return P=function(){return n},n}function q(){var n=g(["\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n"]);return q=function(){return n},n}function B(){var n=g(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);return B=function(){return n},n}function C(){var n=g(["\n    @media (max-width: ",") {\n      ",";\n    }\n  "]);return C=function(){return n},n}function D(){var n=g(["\n    @media print {\n      ",";\n    }\n  "]);return D=function(){return n},n}var T=function(){return r.css(D(),r.css.apply(void 0,arguments))},_=function(){return r.css(C(),function(n){return n.theme.breakpoint.mobile},r.css.apply(void 0,arguments))};r.css(B()),r.css(q()),r.css(P(),k("black",.5)),r.css(A(),T(S())),r.css(z(),function(n){return n.theme.transition.md},function(n){return n.theme.boxShadow.articleThumbHover});function W(){var n=g(["\n  ",";\n"]);return W=function(){return n},n}function I(){var n=g(["\n      transform: translateY(2px);\n    "]);return I=function(){return n},n}function H(){var n=g(["\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  align-self: ",";\n  justify-content: ",";\n  width: auto;\n  text-align: ",";\n  ",";\n  white-space: nowrap;\n  cursor: pointer;\n  outline: none;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: ",";\n  box-shadow: ",";\n  appearance: none;\n  overflow: hidden;\n  transition: ",";\n  line-height: 1rem;\n\n  &:active {\n    transform: translateY(2px);\n    box-shadow: 0 0 4px ",";\n  }\n\n  &::before {\n    background: ",";\n  }\n\n  &:hover {\n    ","\n  }\n\n  &[disabled] {\n    color: ",";\n    background-color: ",";\n    pointer-events: none;\n  }\n\n  ",";\n  ",";\n  ",";\n\n  ",";\n"]);return H=function(){return n},n}function N(){var n=g(["\n  overflow: visible;\n\n  &::before {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    content: ' ';\n    background: inherit;\n    opacity: 0.1;\n    border-radius: 50%;\n    transform-origin: center;\n  }\n"]);return N=function(){return n},n}function R(){var n=g(["\n  width: 100%;\n  &:not(:last-child) {\n    margin-bottom: ",";\n  }\n"]);return R=function(){return n},n}function Y(){var n=g(["\n    padding: "," ",";\n  "]);return Y=function(){return n},n}function $(){var n=g(["\n      padding: ",";\n    "]);return $=function(){return n},n}function G(){var n=g(["\n    padding: "," ",";\n\n    ",";\n  "]);return G=function(){return n},n}function J(){var n=g(["\n    padding: "," ",";\n  "]);return J=function(){return n},n}function M(){var n=g(["\n    color: ",";\n    background: ",";\n    border-color: ",";\n\n    &::before {\n      background: ",";\n    }\n\n    svg path {\n      fill: ",";\n    }\n  "]);return M=function(){return n},n}var U=O.boxShadow,V=O.colors,K=O.padding,L=O.gutter,Q=O.radius,X=O.rgba,Z=O.textStyles,nn=O.transition,en=function(n,e,t){return r.css(M(),V("text",n),V("bg",e),V("bg",t),X(e,.05),V(n))},tn={primary:en("white","primary","primary"),secondary:en("secondary","white","secondary"),tertiary:en("white","secondary","secondary"),disabled:en("dark","light","light"),"primary-warning":en("white","warning","warning"),"secondary-warning":en("warning","white","warning"),"primary-danger":en("white","danger","danger"),"secondary-danger":en("danger","white","danger")};var rn={sm:r.css(J(),K("xxs"),K("xs")),md:r.css(G(),K("xs"),K("sm"),_($(),K("md"))),lg:r.css(Y(),K("sm"),K("md"))};var on=r.css(R(),L("lg")),an=(r.css(N()),r.css(H(),function(n){return n.alignself||null},function(n){return n.align||"center"},function(n){return n.align||"center"},Z("button"),function(n){return n.radius||Q("md")},function(n){return n.shadow||U("buttons")},nn("sm"),X("black",.2),X("white",.05),_(I()),V("white"),V("light"),function(n){return e=n.size,n.rounded,rn[e]||rn.md;var e},function(n){return e=n.variant,tn[e]||tn.primary;var e},function(n){return"full"===n.span?on:null},function(n){return n.styles})),cn=s.button(W(),an),sn=function(n){function t(){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,d(t).apply(this,arguments))}var r,o,i;return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&m(n,e)}(t,e.PureComponent),r=t,(o=[{key:"render",value:function(){return c.createElement(cn,this.props,this.props.children)}}])&&l(r.prototype,o),i&&l(r,i),t}();function ln(){var n=g(["\n  html,\n  body,\n  div,\n  span,\n  applet,\n  object,\n  iframe,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  a,\n  abbr,\n  acronym,\n  address,\n  big,\n  cite,\n  code,\n  del,\n  dfn,\n  em,\n  img,\n  ins,\n  kbd,\n  q,\n  s,\n  samp,\n  small,\n  strike,\n  strong,\n  sub,\n  sup,\n  tt,\n  var,\n  b,\n  u,\n  i,\n  center,\n  dl,\n  dt,\n  dd,\n  ol,\n  ul,\n  li,\n  fieldset,\n  form,\n  label,\n  legend,\n  table,\n  caption,\n  tbody,\n  tfoot,\n  thead,\n  tr,\n  th,\n  td,\n  article,\n  aside,\n  canvas,\n  details,\n  embed,\n  figure,\n  figcaption,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  output,\n  ruby,\n  section,\n  summary,\n  time,\n  mark,\n  audio,\n  video {\n    min-width: 0;\n    min-height: 0;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n  article,\n  aside,\n  details,\n  figcaption,\n  figure,\n  footer,\n  header,\n  hgroup,\n  menu,\n  nav,\n  section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  ol,\n  ul {\n    list-style: none;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    text-decoration: none;\n  }\n  img {\n    overflow: hidden;\n  }\n  input {\n    appearance: none;\n    &::-webkit-search-cancel-button {\n      display: none;\n    }\n  }\n  :focus {\n    outline: none;\n  }\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  html {\n    height: 100%;\n  }\n  body {\n    min-height: 100%;\n    padding-top: 1px;\n    margin-top: -1px;\n  }\n"]);return ln=function(){return n},n}sn.propTypes={variant:t.oneOf(["primary","secondary","tertiary","disabled","primary-warning","secondary-warning","primary-danger","secondary-danger"]),size:t.oneOf(["auto","sm","md","lg"]),span:t.oneOf(["full","half"]),radius:t.string},sn.defaultProps={variant:"primary",size:"auto",span:"auto"};var un=r.css(ln());function fn(){var n=g(["\n  ","\n\n  ","\n\n  html {\n    font-size: ",";\n  }\n\n  body, button, input, select, textarea {\n    font-family: ",";\n    -webkit-font-smoothing: antialiased;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-family: ",";\n  }\n\n  h1, h2, h3{\n    line-height: 1.3;\n  }\n\n  h4, h5, h6, p, li{\n    line-height: 1.4;\n  }\n\n  ::selection {\n    background-color: ",";\n    color: ",";\n  }\n\n  ","\n"]);return fn=function(){return n},n}function dn(){var n=g(["\n  @media (max-width: 1200px) {\n    html {\n      font-size: 14px;\n    }\n  }\n\n  @media (max-width: 1300px) and (max-height: 700px) {\n    html {\n      font-size: 14px;\n    }\n  }\n\n  @media (max-width: 600px) {\n    html {\n      font-size: 16px;\n    }\n  }\n"]);return dn=function(){return n},n}var mn=r.css(dn()),hn={richblack:"#050506",smokyblack:"#0B0B0D",licorice:"#101013",eerieblack:"#16161A",moodyblack:"#1B1C20",raisinblack:"#212227",charcoal:"#26272E",gunmetal:"#2C2D34",metal:"#31333B",onyx:"#373942",darkliver:"#4B4D55",granite:"#5F6067",battleship:"#73747B",steel:"#87888D",silverchalice:"#AFAFB3",silver:"#C3C3C6",timberwolf:"#D7D7D9",isabelline:"#EEEEEE",snow:"#F9F9F9",white:"#FFFFFF",iceberg:"#71A6DE",lightcyan:"#E1F0FF",pastelorange:"#FFAF51",lemonchiffon:"#FFF2E3",seafoamblue:"#00C29A",carribeangreen:"#66C8AB",pastelmint:"#E3F8F4",alabamacrimson:"#F35454",mistryrose:"#FEE6E6",linkedin:"#0077B5"},pn={colors:{primary:hn.seafoamblue,secondary:hn.cadet,danger:hn.alabamacrimson,success:hn.seafoamblue,warning:hn.pastelorange,info:hn.carribeangreen,light:hn.isabelline,dark:hn.charcoal,white:hn.white,text:{primary:hn.seafoamblue,secondary:hn.battleship,tertiary:hn.steel,quaternary:hn.silverchalice,danger:hn.alabamacrimson,success:hn.seafoamblue,warning:hn.pastelorange,info:hn.carribeangreen,light:hn.isabelline,dark:hn.charcoal,white:hn.white},bg:{primary:hn.seafoamblue,secondary:hn.cadet,tertiary:hn.timberwolf,danger:hn.alabamacrimson,success:hn.seafoamblue,warning:hn.pastelorange,info:hn.carribeangreen,light:hn.isabelline,dark:hn.charcoal,white:hn.white},border:{primary:hn.timberwolf}},palette:hn,defaultFontSize:16,defaultFontFamily:"welcomeweb",headingFontFamily:"welcomeweb",fonts:{welcomeweb:[{url:"https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-regular",weight:"400",extensions:["woff2","woff","ttf"]},{url:"https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-medium",weight:"500",extensions:["woff2","woff","ttf"]},{url:"https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-bold",weight:"600",extensions:["woff2","woff","ttf"]},{url:"https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-black",weight:"700",extensions:["woff2","woff","ttf"]},{url:"https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-regularitalic",weight:"400",style:"italic",extensions:["woff2","woff","ttf"]},{url:"https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-mediumitalic",weight:"500",style:"italic",extensions:["woff2","woff","ttf"]},{url:"https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-bolditalic",weight:"600",style:"italic",extensions:["woff2","woff","ttf"]},{url:"https://cdn.welcometothejungle.co/common/assets/fonts/welcomeweb-blackitalic",weight:"700",style:"italic",extensions:["woff2","woff","ttf"]}]}};n.Button=sn,n.createHelpers=F,n.createTheme=function(n){return j=E(n)},n.getBaseStyles=function(n){return r.createGlobalStyle(fn(),un,function(n){return Object.entries(n.fonts).map(function(n){var e=b(n,2),t=e[0];return e[1].map(function(n){return function(n,e){return"\n    @font-face {\n      font-family: '".concat(n,"';\n      src: ").concat(function(n){return n.extensions.map(function(e){return function(n,e){return"url('".concat(n,".").concat(e,"') format('").concat("ttf"===e?"truetype":e,"')")}(n.url,e)}).join(", ")}(e),";\n      ").concat(e.weight?"font-weight: ".concat(e.weight,";"):"","\n      ").concat(e.style?"font-style: ".concat(e.style,";"):"","\n      font-display: fallback;\n    }\n  ")}(t,n)}).join("")}).join("")}(n),n.fontSize.html,[n.fontFamily.texts,"sans-serif"].join(", "),[n.fontFamily.headings,n.fontFamily.texts,"serif"].join(", "),n.colors.primary,n.colors.white,mn)},n.welcomeTheme=pn});
