"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[1112],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>O});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,O=u["".concat(s,".").concat(g)]||u[g]||m[g]||o;return n?r.createElement(O,i(i({ref:t},p),{},{components:n})):r.createElement(O,i({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));const o={},i="C: Warm-up GOTOs",l={unversionedId:"Lab 4 - Toolchain. GOTO/GOTO statements in C/Guides/GOTO Warm-up/README",id:"Lab 4 - Toolchain. GOTO/GOTO statements in C/Guides/GOTO Warm-up/README",title:"C: Warm-up GOTOs",description:"1. Modify the source code in the support/bogosort/bogosort.c file, by replacing the break instruction with a goto instruction (Bogosort).",source:"@site/docs/Lab 4 - Toolchain. GOTO/GOTO statements in C/Guides/GOTO Warm-up/README.md",sourceDirName:"Lab 4 - Toolchain. GOTO/GOTO statements in C/Guides/GOTO Warm-up",slug:"/Lab 4 - Toolchain. GOTO/GOTO statements in C/Guides/GOTO Warm-up/",permalink:"/hardware-software-interface/26/Lab 4 - Toolchain. GOTO/GOTO statements in C/Guides/GOTO Warm-up/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Guides",permalink:"/hardware-software-interface/26/Lab 4 - Toolchain. GOTO/GOTO statements in C/Guides/"},next:{title:"Drills",permalink:"/hardware-software-interface/26/Lab 4 - Toolchain. GOTO/GOTO statements in C/Drills/"}},s={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"c-warm-up-gotos"},"C: Warm-up GOTOs"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Modify the source code in the ",(0,a.yg)("inlineCode",{parentName:"li"},"support/bogosort/bogosort.c")," file, by replacing the ",(0,a.yg)("inlineCode",{parentName:"li"},"break")," instruction with a ",(0,a.yg)("inlineCode",{parentName:"li"},"goto")," instruction (",(0,a.yg)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Bogosort"},"Bogosort"),")."),(0,a.yg)("li",{parentName:"ol"},"Similarly, replace the ",(0,a.yg)("inlineCode",{parentName:"li"},"continue")," instruction in ",(0,a.yg)("inlineCode",{parentName:"li"},"support/ignore_the_comments/ignore_the_comments.c")," with a ",(0,a.yg)("inlineCode",{parentName:"li"},"goto")," instruction without changing the functionality of the code.")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"WARNING"),": When writing code with labels, please adhere to the following indentation recommendations:")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Do not indent labels.\nKeep them aligned with the left margin of the editing screen."),(0,a.yg)("li",{parentName:"ul"},"Each label should be on its own line.\nThere is no code on the same line as the label."),(0,a.yg)("li",{parentName:"ul"},"Do not take labels into consideration when indenting the code.\nThe code should be indented in the same way whether there are labels or not."),(0,a.yg)("li",{parentName:"ul"},"Leave a blank line before the line containing a label.")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"NOTE"),": ",(0,a.yg)("a",{parentName:"p",href:"https://stackoverflow.com/questions/3517726/what-is-wrong-with-using-goto/3517765#3517765"},"Situation")," where ",(0,a.yg)("inlineCode",{parentName:"p"},"goto")," may be useful.")),(0,a.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,a.yg)("a",{parentName:"p",href:"/hardware-software-interface/26/Lab%204%20-%20Toolchain.%20GOTO/GOTO%20statements%20in%20C/Reading/#syntax"},"this")," reading material."))}m.isMDXComponent=!0}}]);