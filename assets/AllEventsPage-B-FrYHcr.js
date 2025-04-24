import{j as P,g as mn,R as Se}from"./index-CQB3LBWA.js";import{N as dn}from"./NavBar-D9YcDF19.js";import{u as pn}from"./useFetch-BT62Cf31.js";import{E as gn}from"./EventItem-BscRmUUA.js";import{r as hn}from"./index-Chjiymov.js";import"./Button-CwHSLpnx.js";import"./react-GbyFrLOH.js";import"./useTicketStore-C9UOzREF.js";function bn({events:t}){return P.jsx("ul",{className:"event-list",children:t.map((e,n)=>P.jsx(gn,{event:e},n))})}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function yn(t,e,n){return(e=xn(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function qt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?qt(Object(n),!0).forEach(function(a){yn(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):qt(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function vn(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function xn(t){var e=vn(t,"string");return typeof e=="symbol"?e:e+""}const Qt=()=>{};let Dt={},Ee={},Ie=null,Ce={mark:Qt,measure:Qt};try{typeof window<"u"&&(Dt=window),typeof document<"u"&&(Ee=document),typeof MutationObserver<"u"&&(Ie=MutationObserver),typeof performance<"u"&&(Ce=performance)}catch{}const{userAgent:Jt=""}=Dt.navigator||{},j=Dt,h=Ee,Zt=Ie,tt=Ce;j.document;const M=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",Ne=~Jt.indexOf("MSIE")||~Jt.indexOf("Trident/");var An=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,wn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Te={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},kn={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},_e=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],A="classic",ot="duotone",On="sharp",Pn="sharp-duotone",Fe=[A,ot,On,Pn],Sn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},En={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},In=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Cn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Nn=["fak","fa-kit","fakd","fa-kit-duotone"],te={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Tn=["kit"],_n={kit:{"fa-kit":"fak"}},Fn=["fak","fakd"],Mn={kit:{fak:"fa-kit"}},ee={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ln=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],jn=["fak","fa-kit","fakd","fa-kit-duotone"],Rn={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Dn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},zn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},vt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Yn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],xt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Ln,...Yn],Un=["solid","regular","light","thin","duotone","brands"],Me=[1,2,3,4,5,6,7,8,9,10],Wn=Me.concat([11,12,13,14,15,16,17,18,19,20]),Hn=[...Object.keys(zn),...Un,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",et.GROUP,et.SWAP_OPACITY,et.PRIMARY,et.SECONDARY].concat(Me.map(t=>"".concat(t,"x"))).concat(Wn.map(t=>"w-".concat(t))),Gn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const _="___FONT_AWESOME___",At=16,Le="fa",je="svg-inline--fa",Y="data-fa-i2svg",wt="data-fa-pseudo-element",Xn="data-fa-pseudo-element-pending",zt="data-prefix",Yt="data-icon",ne="fontawesome-i2svg",$n="async",Bn=["HTML","HEAD","STYLE","SCRIPT"],Re=(()=>{try{return!0}catch{return!1}})();function J(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[A]}})}const De=o({},Te);De[A]=o(o(o(o({},{"fa-duotone":"duotone"}),Te[A]),te.kit),te["kit-duotone"]);const Vn=J(De),kt=o({},Cn);kt[A]=o(o(o(o({},{duotone:"fad"}),kt[A]),ee.kit),ee["kit-duotone"]);const ae=J(kt),Ot=o({},vt);Ot[A]=o(o({},Ot[A]),Mn.kit);const Ut=J(Ot),Pt=o({},Dn);Pt[A]=o(o({},Pt[A]),_n.kit);J(Pt);const Kn=An,ze="fa-layers-text",qn=wn,Qn=o({},Sn);J(Qn);const Jn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],dt=kn,Zn=[...Tn,...Hn],V=j.FontAwesomeConfig||{};function ta(t){var e=h.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ea(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}h&&typeof h.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=ea(ta(n));r!=null&&(V[a]=r)});const Ye={styleDefault:"solid",familyDefault:A,cssPrefix:Le,replacementClass:je,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};V.familyPrefix&&(V.cssPrefix=V.familyPrefix);const X=o(o({},Ye),V);X.autoReplaceSvg||(X.observeMutations=!1);const c={};Object.keys(Ye).forEach(t=>{Object.defineProperty(c,t,{enumerable:!0,set:function(e){X[t]=e,K.forEach(n=>n(c))},get:function(){return X[t]}})});Object.defineProperty(c,"familyPrefix",{enumerable:!0,set:function(t){X.cssPrefix=t,K.forEach(e=>e(c))},get:function(){return X.cssPrefix}});j.FontAwesomeConfig=c;const K=[];function na(t){return K.push(t),()=>{K.splice(K.indexOf(t),1)}}const L=At,C={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function aa(t){if(!t||!M)return;const e=h.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=h.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=i)}return h.head.insertBefore(e,a),t}const ra="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function q(){let t=12,e="";for(;t-- >0;)e+=ra[Math.random()*62|0];return e}function $(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Wt(t){return t.classList?$(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Ue(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ia(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Ue(t[n]),'" '),"").trim()}function lt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Ht(t){return t.size!==C.size||t.x!==C.x||t.y!==C.y||t.rotate!==C.rotate||t.flipX||t.flipY}function sa(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),u={transform:"".concat(i," ").concat(s," ").concat(l)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:u,path:f}}function oa(t){let{transform:e,width:n=At,height:a=At,startCentered:r=!1}=t,i="";return r&&Ne?i+="translate(".concat(e.x/L-n/2,"em, ").concat(e.y/L-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/L,"em), calc(-50% + ").concat(e.y/L,"em)) "):i+="translate(".concat(e.x/L,"em, ").concat(e.y/L,"em) "),i+="scale(".concat(e.size/L*(e.flipX?-1:1),", ").concat(e.size/L*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var la=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function We(){const t=Le,e=je,n=c.cssPrefix,a=c.replacementClass;let r=la;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(a))}return r}let re=!1;function pt(){c.autoAddCss&&!re&&(aa(We()),re=!0)}var fa={mixout(){return{dom:{css:We,insertCss:pt}}},hooks(){return{beforeDOMElementCreation(){pt()},beforeI2svg(){pt()}}}};const F=j||{};F[_]||(F[_]={});F[_].styles||(F[_].styles={});F[_].hooks||(F[_].hooks={});F[_].shims||(F[_].shims=[]);var N=F[_];const He=[],Ge=function(){h.removeEventListener("DOMContentLoaded",Ge),rt=1,He.map(t=>t())};let rt=!1;M&&(rt=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),rt||h.addEventListener("DOMContentLoaded",Ge));function ca(t){M&&(rt?setTimeout(t,0):He.push(t))}function Z(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Ue(t):"<".concat(e," ").concat(ia(n),">").concat(a.map(Z).join(""),"</").concat(e,">")}function ie(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var gt=function(e,n,a,r){var i=Object.keys(e),s=i.length,l=n,u,f,m;for(a===void 0?(u=1,m=e[i[0]]):(u=0,m=a);u<s;u++)f=i[u],m=l(m,e[f],f,e);return m};function ua(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function St(t){const e=ua(t);return e.length===1?e[0].toString(16):null}function ma(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function se(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Et(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=se(e);typeof N.hooks.addPack=="function"&&!a?N.hooks.addPack(t,se(e)):N.styles[t]=o(o({},N.styles[t]||{}),r),t==="fas"&&Et("fa",e)}const{styles:Q,shims:da}=N,Xe=Object.keys(Ut),pa=Xe.reduce((t,e)=>(t[e]=Object.keys(Ut[e]),t),{});let Gt=null,$e={},Be={},Ve={},Ke={},qe={};function ga(t){return~Zn.indexOf(t)}function ha(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!ga(r)?r:null}const Qe=()=>{const t=a=>gt(Q,(r,i,s)=>(r[s]=gt(i,a,{}),r),{});$e=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=i}),a)),Be=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=i}),a)),qe=t((a,r,i)=>{const s=r[2];return a[i]=i,s.forEach(l=>{a[l]=i}),a});const e="far"in Q||c.autoFetchSvg,n=gt(da,(a,r)=>{const i=r[0];let s=r[1];const l=r[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(a.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ve=n.names,Ke=n.unicodes,Gt=ft(c.styleDefault,{family:c.familyDefault})};na(t=>{Gt=ft(t.styleDefault,{family:c.familyDefault})});Qe();function Xt(t,e){return($e[t]||{})[e]}function ba(t,e){return(Be[t]||{})[e]}function z(t,e){return(qe[t]||{})[e]}function Je(t){return Ve[t]||{prefix:null,iconName:null}}function ya(t){const e=Ke[t],n=Xt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function R(){return Gt}const Ze=()=>({prefix:null,iconName:null,rest:[]});function va(t){let e=A;const n=Xe.reduce((a,r)=>(a[r]="".concat(c.cssPrefix,"-").concat(r),a),{});return Fe.forEach(a=>{(t.includes(n[a])||t.some(r=>pa[a].includes(r)))&&(e=a)}),e}function ft(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=A}=e,a=Vn[n][t];if(n===ot&&!t)return"fad";const r=ae[n][t]||ae[n][a],i=t in N.styles?t:null;return r||i||null}function xa(t){let e=[],n=null;return t.forEach(a=>{const r=ha(c.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function oe(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function ct(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=xt.concat(jn),i=oe(t.filter(g=>r.includes(g))),s=oe(t.filter(g=>!xt.includes(g))),l=i.filter(g=>(a=g,!_e.includes(g))),[u=null]=l,f=va(i),m=o(o({},xa(s)),{},{prefix:ft(u,{family:f})});return o(o(o({},m),Oa({values:t,family:f,styles:Q,config:c,canonical:m,givenPrefix:a})),Aa(n,a,m))}function Aa(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const i=e==="fa"?Je(r):{},s=z(a,r);return r=i.iconName||s||r,a=i.prefix||a,a==="far"&&!Q.far&&Q.fas&&!c.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const wa=Fe.filter(t=>t!==A||t!==ot),ka=Object.keys(vt).filter(t=>t!==A).map(t=>Object.keys(vt[t])).flat();function Oa(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:i={},config:s={}}=t,l=n===ot,u=e.includes("fa-duotone")||e.includes("fad"),f=s.familyDefault==="duotone",m=a.prefix==="fad"||a.prefix==="fa-duotone";if(!l&&(u||f||m)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&wa.includes(n)&&(Object.keys(i).find(p=>ka.includes(p))||s.autoFetchSvg)){const p=In.get(n).defaultShortPrefixId;a.prefix=p,a.iconName=z(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=R()||"fas"),a}class Pa{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=o(o({},this.definitions[i]||{}),r[i]),Et(i,r[i]);const s=Ut[A][i];s&&Et(s,r[i]),Qe()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:s,icon:l}=a[r],u=l[2];e[i]||(e[i]={}),u.length>0&&u.forEach(f=>{typeof f=="string"&&(e[i][f]=l)}),e[i][s]=l}),e}}let le=[],W={};const G={},Sa=Object.keys(G);function Ea(t,e){let{mixoutsTo:n}=e;return le=t,W={},Object.keys(G).forEach(a=>{Sa.indexOf(a)===-1&&delete G[a]}),le.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(s=>{n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(s=>{W[s]||(W[s]=[]),W[s].push(i[s])})}a.provides&&a.provides(G)}),n}function It(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(W[t]||[]).forEach(s=>{e=s.apply(null,[e,...a])}),e}function U(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(W[t]||[]).forEach(i=>{i.apply(null,n)})}function D(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return G[t]?G[t].apply(null,e):void 0}function Ct(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||R();if(e)return e=z(n,e)||e,ie(tn.definitions,n,e)||ie(N.styles,n,e)}const tn=new Pa,Ia=()=>{c.autoReplaceSvg=!1,c.observeMutations=!1,U("noAuto")},Ca={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return M?(U("beforeI2svg",t),D("pseudoElements2svg",t),D("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;c.autoReplaceSvg===!1&&(c.autoReplaceSvg=!0),c.observeMutations=!0,ca(()=>{Ta({autoReplaceSvgRoot:e}),U("watch",t)})}},Na={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:z(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ft(t[0]);return{prefix:n,iconName:z(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(c.cssPrefix,"-"))>-1||t.match(Kn))){const e=ct(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||R(),iconName:z(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=R();return{prefix:e,iconName:z(e,t)||t}}}},O={noAuto:Ia,config:c,dom:Ca,parse:Na,library:tn,findIconDefinition:Ct,toHtml:Z},Ta=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=h}=t;(Object.keys(N.styles).length>0||c.autoFetchSvg)&&M&&c.autoReplaceSvg&&O.dom.i2svg({node:e})};function ut(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Z(n))}}),Object.defineProperty(t,"node",{get:function(){if(!M)return;const n=h.createElement("div");return n.innerHTML=t.html,n.children}}),t}function _a(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:s}=t;if(Ht(s)&&n.found&&!a.found){const{width:l,height:u}=n,f={x:l/u/2,y:.5};r.style=lt(o(o({},i),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Fa(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const s=i===!0?"".concat(e,"-").concat(c.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:o(o({},r),{},{id:s}),children:a}]}]}function $t(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:s,title:l,maskId:u,titleId:f,extra:m,watchable:g=!1}=t,{width:p,height:y}=n.found?n:e,k=Fn.includes(a),S=[c.replacementClass,r?"".concat(c.cssPrefix,"-").concat(r):""].filter(E=>m.classes.indexOf(E)===-1).filter(E=>E!==""||!!E).concat(m.classes).join(" ");let b={children:[],attributes:o(o({},m.attributes),{},{"data-prefix":a,"data-icon":r,class:S,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(y)})};const x=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(p/y*16*.0625,"em")}:{};g&&(b.attributes[Y]=""),l&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(f||q())},children:[l]}),delete b.attributes.title);const v=o(o({},b),{},{prefix:a,iconName:r,main:e,mask:n,maskId:u,transform:i,symbol:s,styles:o(o({},x),m.styles)}),{children:w,attributes:T}=n.found&&e.found?D("generateAbstractMask",v)||{children:[],attributes:{}}:D("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=w,v.attributes=T,s?Fa(v):_a(v)}function fe(t){const{content:e,width:n,height:a,transform:r,title:i,extra:s,watchable:l=!1}=t,u=o(o(o({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(u[Y]="");const f=o({},s.styles);Ht(r)&&(f.transform=oa({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const m=lt(f);m.length>0&&(u.style=m);const g=[];return g.push({tag:"span",attributes:u,children:[e]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function Ma(t){const{content:e,title:n,extra:a}=t,r=o(o(o({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=lt(a.styles);i.length>0&&(r.style=i);const s=[];return s.push({tag:"span",attributes:r,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:ht}=N;function Nt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(c.cssPrefix,"-").concat(dt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(dt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(c.cssPrefix,"-").concat(dt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const La={found:!1,width:512,height:512};function ja(t,e){!Re&&!c.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Tt(t,e){let n=e;return e==="fa"&&c.styleDefault!==null&&(e=R()),new Promise((a,r)=>{if(n==="fa"){const i=Je(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&ht[e]&&ht[e][t]){const i=ht[e][t];return a(Nt(i))}ja(t,e),a(o(o({},La),{},{icon:c.showMissingIcons&&t?D("missingIconAbstract")||{}:{}}))})}const ce=()=>{},_t=c.measurePerformance&&tt&&tt.mark&&tt.measure?tt:{mark:ce,measure:ce},B='FA "6.7.2"',Ra=t=>(_t.mark("".concat(B," ").concat(t," begins")),()=>en(t)),en=t=>{_t.mark("".concat(B," ").concat(t," ends")),_t.measure("".concat(B," ").concat(t),"".concat(B," ").concat(t," begins"),"".concat(B," ").concat(t," ends"))};var Bt={begin:Ra,end:en};const nt=()=>{};function ue(t){return typeof(t.getAttribute?t.getAttribute(Y):null)=="string"}function Da(t){const e=t.getAttribute?t.getAttribute(zt):null,n=t.getAttribute?t.getAttribute(Yt):null;return e&&n}function za(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(c.replacementClass)}function Ya(){return c.autoReplaceSvg===!0?at.replace:at[c.autoReplaceSvg]||at.replace}function Ua(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function Wa(t){return h.createElement(t)}function nn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Ua:Wa}=e;if(typeof t=="string")return h.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(nn(i,{ceFn:n}))}),a}function Ha(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const at={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(nn(n),e)}),e.getAttribute(Y)===null&&c.keepOriginalSource){let n=h.createComment(Ha(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Wt(e).indexOf(c.replacementClass))return at.replace(t);const a=new RegExp("".concat(c.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((s,l)=>(l===c.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>Z(i)).join(`
`);e.setAttribute(Y,""),e.innerHTML=r}};function me(t){t()}function an(t,e){const n=typeof e=="function"?e:nt;if(t.length===0)n();else{let a=me;c.mutateApproach===$n&&(a=j.requestAnimationFrame||me),a(()=>{const r=Ya(),i=Bt.begin("mutate");t.map(r),i(),n()})}}let Vt=!1;function rn(){Vt=!0}function Ft(){Vt=!1}let it=null;function de(t){if(!Zt||!c.observeMutations)return;const{treeCallback:e=nt,nodeCallback:n=nt,pseudoElementsCallback:a=nt,observeMutationsRoot:r=h}=t;it=new Zt(i=>{if(Vt)return;const s=R();$(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!ue(l.addedNodes[0])&&(c.searchPseudoElements&&a(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&c.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&ue(l.target)&&~Jn.indexOf(l.attributeName))if(l.attributeName==="class"&&Da(l.target)){const{prefix:u,iconName:f}=ct(Wt(l.target));l.target.setAttribute(zt,u||s),f&&l.target.setAttribute(Yt,f)}else za(l.target)&&n(l.target)})}),M&&it.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ga(){it&&it.disconnect()}function Xa(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),s=i[0],l=i.slice(1);return s&&l.length>0&&(a[s]=l.join(":").trim()),a},{})),n}function $a(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=ct(Wt(t));return r.prefix||(r.prefix=R()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ba(r.prefix,t.innerText)||Xt(r.prefix,St(t.innerText))),!r.iconName&&c.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ba(t){const e=$(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return c.autoA11y&&(n?e["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(a||q()):(e["aria-hidden"]="true",e.focusable="false")),e}function Va(){return{iconName:null,title:null,titleId:null,prefix:null,transform:C,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function pe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=$a(t),i=Ba(t),s=It("parseNodeAttributes",{},t);let l=e.styleParser?Xa(t):[];return o({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:C,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:i}},s)}const{styles:Ka}=N;function sn(t){const e=c.autoReplaceSvg==="nest"?pe(t,{styleParser:!1}):pe(t);return~e.extra.classes.indexOf(ze)?D("generateLayersText",t,e):D("generateSvgReplacementMutation",t,e)}function qa(){return[...Nn,...xt]}function ge(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!M)return Promise.resolve();const n=h.documentElement.classList,a=m=>n.add("".concat(ne,"-").concat(m)),r=m=>n.remove("".concat(ne,"-").concat(m)),i=c.autoFetchSvg?qa():_e.concat(Object.keys(Ka));i.includes("fa")||i.push("fa");const s=[".".concat(ze,":not([").concat(Y,"])")].concat(i.map(m=>".".concat(m,":not([").concat(Y,"])"))).join(", ");if(s.length===0)return Promise.resolve();let l=[];try{l=$(t.querySelectorAll(s))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();const u=Bt.begin("onTree"),f=l.reduce((m,g)=>{try{const p=sn(g);p&&m.push(p)}catch(p){Re||p.name==="MissingIcon"&&console.error(p)}return m},[]);return new Promise((m,g)=>{Promise.all(f).then(p=>{an(p,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),u(),m()})}).catch(p=>{u(),g(p)})})}function Qa(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;sn(t).then(n=>{n&&an([n],e)})}function Ja(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Ct(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Ct(r||{})),t(a,o(o({},n),{},{mask:r}))}}const Za=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=C,symbol:a=!1,mask:r=null,maskId:i=null,title:s=null,titleId:l=null,classes:u=[],attributes:f={},styles:m={}}=e;if(!t)return;const{prefix:g,iconName:p,icon:y}=t;return ut(o({type:"icon"},t),()=>(U("beforeDOMElementCreation",{iconDefinition:t,params:e}),c.autoA11y&&(s?f["aria-labelledby"]="".concat(c.replacementClass,"-title-").concat(l||q()):(f["aria-hidden"]="true",f.focusable="false")),$t({icons:{main:Nt(y),mask:r?Nt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:p,transform:o(o({},C),n),symbol:a,title:s,maskId:i,titleId:l,extra:{attributes:f,styles:m,classes:u}})))};var tr={mixout(){return{icon:Ja(Za)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=ge,t.nodeCallback=Qa,t}}},provides(t){t.i2svg=function(e){const{node:n=h,callback:a=()=>{}}=e;return ge(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:s,transform:l,symbol:u,mask:f,maskId:m,extra:g}=n;return new Promise((p,y)=>{Promise.all([Tt(a,s),f.iconName?Tt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[S,b]=k;p([e,$t({icons:{main:S,mask:b},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:r,titleId:i,extra:g,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:s}=e;const l=lt(s);l.length>0&&(a.style=l);let u;return Ht(i)&&(u=D("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(u||r.icon),{children:n,attributes:a}}}},er={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return ut({type:"layer"},()=>{U("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(c.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},nr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return ut({type:"counter",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:e}),Ma({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(c.cssPrefix,"-layers-counter"),...a]}})))}}}},ar={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=C,title:a=null,classes:r=[],attributes:i={},styles:s={}}=e;return ut({type:"text",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:e}),fe({content:t,transform:o(o({},C),n),title:a,extra:{attributes:i,styles:s,classes:["".concat(c.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let s=null,l=null;if(Ne){const u=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();s=f.width/u,l=f.height/u}return c.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,fe({content:e.innerHTML,width:s,height:l,transform:r,title:a,extra:i,watchable:!0})])}}};const rr=new RegExp('"',"ug"),he=[1105920,1112319],be=o(o(o(o({},{FontAwesome:{normal:"fas",400:"fas"}}),En),Gn),Rn),Mt=Object.keys(be).reduce((t,e)=>(t[e.toLowerCase()]=be[e],t),{}),ir=Object.keys(Mt).reduce((t,e)=>{const n=Mt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function sr(t){const e=t.replace(rr,""),n=ma(e,0),a=n>=he[0]&&n<=he[1],r=e.length===2?e[0]===e[1]:!1;return{value:St(r?e[0]:e),isSecondary:a||r}}function or(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Mt[n]||{})[r]||ir[n]}function ye(t,e){const n="".concat(Xn).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const s=$(t.children).filter(p=>p.getAttribute(wt)===e)[0],l=j.getComputedStyle(t,e),u=l.getPropertyValue("font-family"),f=u.match(qn),m=l.getPropertyValue("font-weight"),g=l.getPropertyValue("content");if(s&&!f)return t.removeChild(s),a();if(f&&g!=="none"&&g!==""){const p=l.getPropertyValue("content");let y=or(u,m);const{value:k,isSecondary:S}=sr(p),b=f[0].startsWith("FontAwesome");let x=Xt(y,k),v=x;if(b){const w=ya(k);w.iconName&&w.prefix&&(x=w.iconName,y=w.prefix)}if(x&&!S&&(!s||s.getAttribute(zt)!==y||s.getAttribute(Yt)!==v)){t.setAttribute(n,v),s&&t.removeChild(s);const w=Va(),{extra:T}=w;T.attributes[wt]=e,Tt(x,y).then(E=>{const cn=$t(o(o({},w),{},{icons:{main:E,mask:Ze()},prefix:y,iconName:v,extra:T,watchable:!0})),mt=h.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(mt,t.firstChild):t.appendChild(mt),mt.outerHTML=cn.map(un=>Z(un)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function lr(t){return Promise.all([ye(t,"::before"),ye(t,"::after")])}function fr(t){return t.parentNode!==document.head&&!~Bn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(wt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ve(t){if(M)return new Promise((e,n)=>{const a=$(t.querySelectorAll("*")).filter(fr).map(lr),r=Bt.begin("searchPseudoElements");rn(),Promise.all(a).then(()=>{r(),Ft(),e()}).catch(()=>{r(),Ft(),n()})})}var cr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=ve,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=h}=e;c.searchPseudoElements&&ve(n)}}};let xe=!1;var ur={mixout(){return{dom:{unwatch(){rn(),xe=!0}}}},hooks(){return{bootstrap(){de(It("mutationObserverCallbacks",{}))},noAuto(){Ga()},watch(t){const{observeMutationsRoot:e}=t;xe?Ft():de(It("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Ae=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let s=r.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var mr={mixout(){return{parse:{transform:t=>Ae(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Ae(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const s={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(f)},g={transform:"translate(".concat(i/2*-1," -256)")},p={outer:s,inner:m,path:g};return{tag:"g",attributes:o({},p.outer),children:[{tag:"g",attributes:o({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:o(o({},n.icon.attributes),p.path)}]}]}}}};const bt={x:0,y:0,width:"100%",height:"100%"};function we(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function dr(t){return t.tag==="g"?t.children:[t]}var pr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?ct(n.split(" ").map(r=>r.trim())):Ze();return a.prefix||(a.prefix=R()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:s,transform:l}=e;const{width:u,icon:f}=r,{width:m,icon:g}=i,p=sa({transform:l,containerWidth:m,iconWidth:u}),y={tag:"rect",attributes:o(o({},bt),{},{fill:"white"})},k=f.children?{children:f.children.map(we)}:{},S={tag:"g",attributes:o({},p.inner),children:[we(o({tag:f.tag,attributes:o(o({},f.attributes),p.path)},k))]},b={tag:"g",attributes:o({},p.outer),children:[S]},x="mask-".concat(s||q()),v="clip-".concat(s||q()),w={tag:"mask",attributes:o(o({},bt),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,b]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:dr(g)},w]};return n.push(T,{tag:"rect",attributes:o({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(x,")")},bt)}),{children:n,attributes:a}}}},gr={provides(t){let e=!1;j.matchMedia&&(e=j.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:o(o({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=o(o({},r),{},{attributeName:"opacity"}),s={tag:"circle",attributes:o(o({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:o(o({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:o(o({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:o(o({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:o(o({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:o(o({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:o(o({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},hr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},br=[fa,tr,er,nr,ar,cr,ur,mr,pr,gr,hr];Ea(br,{mixoutsTo:O});O.noAuto;O.config;O.library;O.dom;const Lt=O.parse;O.findIconDefinition;O.toHtml;const yr=O.icon;O.layer;O.text;O.counter;var vr=hn();const d=mn(vr);function ke(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function I(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ke(Object(n),!0).forEach(function(a){H(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ke(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function st(t){"@babel/helpers - typeof";return st=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},st(t)}function H(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function xr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Ar(t,e){if(t==null)return{};var n=xr(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function jt(t){return wr(t)||kr(t)||Or(t)||Pr()}function wr(t){if(Array.isArray(t))return Rt(t)}function kr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Or(t,e){if(t){if(typeof t=="string")return Rt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rt(t,e)}}function Rt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Pr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Sr(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,s=t.shake,l=t.flash,u=t.spin,f=t.spinPulse,m=t.spinReverse,g=t.pulse,p=t.fixedWidth,y=t.inverse,k=t.border,S=t.listItem,b=t.flip,x=t.size,v=t.rotation,w=t.pull,T=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":s,"fa-flash":l,"fa-spin":u,"fa-spin-reverse":m,"fa-spin-pulse":f,"fa-pulse":g,"fa-fw":p,"fa-inverse":y,"fa-border":k,"fa-li":S,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},H(e,"fa-".concat(x),typeof x<"u"&&x!==null),H(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),H(e,"fa-pull-".concat(w),typeof w<"u"&&w!==null),H(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(T).map(function(E){return T[E]?E:null}).filter(function(E){return E})}function Er(t){return t=t-0,t===t}function on(t){return Er(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Ir=["style"];function Cr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Nr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=on(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[Cr(r)]=i:e[r]=i,e},{})}function ln(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(u){return ln(t,u)}),r=Object.keys(e.attributes||{}).reduce(function(u,f){var m=e.attributes[f];switch(f){case"class":u.attrs.className=m,delete e.attributes.class;break;case"style":u.attrs.style=Nr(m);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?u.attrs[f.toLowerCase()]=m:u.attrs[on(f)]=m}return u},{attrs:{}}),i=n.style,s=i===void 0?{}:i,l=Ar(n,Ir);return r.attrs.style=I(I({},r.attrs.style),s),t.apply(void 0,[e.tag,I(I({},r.attrs),l)].concat(jt(a)))}var fn=!1;try{fn=!0}catch{}function Tr(){if(!fn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Oe(t){if(t&&st(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Lt.icon)return Lt.icon(t);if(t===null)return null;if(t&&st(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function yt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?H({},t,e):{}}var Pe={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Kt=Se.forwardRef(function(t,e){var n=I(I({},Pe),t),a=n.icon,r=n.mask,i=n.symbol,s=n.className,l=n.title,u=n.titleId,f=n.maskId,m=Oe(a),g=yt("classes",[].concat(jt(Sr(n)),jt((s||"").split(" ")))),p=yt("transform",typeof n.transform=="string"?Lt.transform(n.transform):n.transform),y=yt("mask",Oe(r)),k=yr(m,I(I(I(I({},g),p),y),{},{symbol:i,title:l,titleId:u,maskId:f}));if(!k)return Tr("Could not find icon",m),null;var S=k.abstract,b={ref:e};return Object.keys(n).forEach(function(x){Pe.hasOwnProperty(x)||(b[x]=n[x])}),_r(S[0],b)});Kt.displayName="FontAwesomeIcon";Kt.propTypes={beat:d.bool,border:d.bool,beatFade:d.bool,bounce:d.bool,className:d.string,fade:d.bool,flash:d.bool,mask:d.oneOfType([d.object,d.array,d.string]),maskId:d.string,fixedWidth:d.bool,inverse:d.bool,flip:d.oneOf([!0,!1,"horizontal","vertical","both"]),icon:d.oneOfType([d.object,d.array,d.string]),listItem:d.bool,pull:d.oneOf(["right","left"]),pulse:d.bool,rotation:d.oneOf([0,90,180,270]),shake:d.bool,size:d.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:d.bool,spinPulse:d.bool,spinReverse:d.bool,symbol:d.oneOfType([d.bool,d.string]),title:d.string,titleId:d.string,transform:d.oneOfType([d.string,d.object]),swapOpacity:d.bool};var _r=ln.bind(null,Se.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Fr={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]};function Mr(){return P.jsxs("form",{className:"searchbar",children:[P.jsx("button",{children:P.jsx(Kt,{icon:Fr,className:"searchbar__icon"})}),P.jsx("input",{"aria-label":"Search Events",id:"search-input",type:"text",className:"searchbar__input"})]})}const Hr=()=>{const{data:t}=pn();return P.jsxs("section",{className:"page page-all-events",children:[P.jsx("h1",{className:"page__header",children:"Events"}),P.jsx(Mr,{}),t!==null?P.jsx(bn,{events:t}):P.jsx("p",{className:"error-p",children:"Loading..."}),P.jsx(dn,{})]})};export{Hr as default};
