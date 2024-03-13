"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[907],{5680:(e,a,t)=>{t.d(a,{xA:()=>l,yg:()=>N});var n=t(6540);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var m=n.createContext({}),o=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},l=function(e){var a=o(e.components);return n.createElement(m.Provider,{value:a},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,m=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=o(t),y=s,N=c["".concat(m,".").concat(y)]||c[y]||g[y]||r;return t?n.createElement(N,i(i({ref:a},l),{},{components:t})):n.createElement(N,i({ref:a},l))}));function N(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=y;var p={};for(var m in a)hasOwnProperty.call(a,m)&&(p[m]=a[m]);p.originalType=e,p[c]="string"==typeof e?e:s,i[1]=p;for(var o=2;o<r;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},6776:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var n=t(8168),s=(t(6540),t(5680));const r={},i="Length and Equality with Bitwise Operations",p={unversionedId:"Lab 1 - Number Representation/Pointers in C/Drills/Tasks/Length and Equality with Bitwise Operations/README",id:"Lab 1 - Number Representation/Pointers in C/Drills/Tasks/Length and Equality with Bitwise Operations/README",title:"Length and Equality with Bitwise Operations",description:"You will solve the exercise starting from the file len_xor.c located in the directory drills/tasks/len-xor/support/.",source:"@site/docs/Lab 1 - Number Representation/Pointers in C/Drills/Tasks/Length and Equality with Bitwise Operations/README.md",sourceDirName:"Lab 1 - Number Representation/Pointers in C/Drills/Tasks/Length and Equality with Bitwise Operations",slug:"/Lab 1 - Number Representation/Pointers in C/Drills/Tasks/Length and Equality with Bitwise Operations/",permalink:"/hardware-software-interface/10/Lab 1 - Number Representation/Pointers in C/Drills/Tasks/Length and Equality with Bitwise Operations/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Tasks",permalink:"/hardware-software-interface/10/Lab 1 - Number Representation/Pointers in C/Drills/Tasks/"},next:{title:"Reversing a String",permalink:"/hardware-software-interface/10/Lab 1 - Number Representation/Pointers in C/Drills/Tasks/Mirror/"}},m={},o=[],l={toc:o},c="wrapper";function g(e){let{components:a,...t}=e;return(0,s.yg)(c,(0,n.A)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,s.yg)("h1",{id:"length-and-equality-with-bitwise-operations"},"Length and Equality with Bitwise Operations"),(0,s.yg)("p",null,"You will solve the exercise starting from the file ",(0,s.yg)("inlineCode",{parentName:"p"},"len_xor.c")," located in the directory ",(0,s.yg)("inlineCode",{parentName:"p"},"drills/tasks/len-xor/support/"),"."),(0,s.yg)("p",null,"For a given string of characters, display:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"the length of the string"),(0,s.yg)("li",{parentName:"ul"},"the address of each character at position i that is equal to the character at position ",(0,s.yg)("span",{parentName:"li",className:"math math-inline"},(0,s.yg)("span",{parentName:"span",className:"katex"},(0,s.yg)("span",{parentName:"span",className:"katex-mathml"},(0,s.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.yg)("semantics",{parentName:"math"},(0,s.yg)("mrow",{parentName:"semantics"},(0,s.yg)("mi",{parentName:"mrow"},"i"),(0,s.yg)("mo",{parentName:"mrow"},"+"),(0,s.yg)("msup",{parentName:"mrow"},(0,s.yg)("mn",{parentName:"msup"},"2"),(0,s.yg)("mi",{parentName:"msup"},"i"))),(0,s.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i + 2^i")))),(0,s.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"0.7429em",verticalAlign:"-0.0833em"}}),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.yg)("span",{parentName:"span",className:"mbin"},"+"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"0.8247em"}}),(0,s.yg)("span",{parentName:"span",className:"mord"},(0,s.yg)("span",{parentName:"span",className:"mord"},"2"),(0,s.yg)("span",{parentName:"span",className:"msupsub"},(0,s.yg)("span",{parentName:"span",className:"vlist-t"},(0,s.yg)("span",{parentName:"span",className:"vlist-r"},(0,s.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8247em"}},(0,s.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.yg)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"))))))))))))," (if ",(0,s.yg)("span",{parentName:"li",className:"math math-inline"},(0,s.yg)("span",{parentName:"span",className:"katex"},(0,s.yg)("span",{parentName:"span",className:"katex-mathml"},(0,s.yg)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.yg)("semantics",{parentName:"math"},(0,s.yg)("mrow",{parentName:"semantics"},(0,s.yg)("mi",{parentName:"mrow"},"i"),(0,s.yg)("mo",{parentName:"mrow"},"+"),(0,s.yg)("msup",{parentName:"mrow"},(0,s.yg)("mn",{parentName:"msup"},"2"),(0,s.yg)("mi",{parentName:"msup"},"i"))),(0,s.yg)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"i + 2^i")))),(0,s.yg)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"0.7429em",verticalAlign:"-0.0833em"}}),(0,s.yg)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.yg)("span",{parentName:"span",className:"mbin"},"+"),(0,s.yg)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.yg)("span",{parentName:"span",className:"base"},(0,s.yg)("span",{parentName:"span",className:"strut",style:{height:"0.8247em"}}),(0,s.yg)("span",{parentName:"span",className:"mord"},(0,s.yg)("span",{parentName:"span",className:"mord"},"2"),(0,s.yg)("span",{parentName:"span",className:"msupsub"},(0,s.yg)("span",{parentName:"span",className:"vlist-t"},(0,s.yg)("span",{parentName:"span",className:"vlist-r"},(0,s.yg)("span",{parentName:"span",className:"vlist",style:{height:"0.8247em"}},(0,s.yg)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.yg)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.yg)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.yg)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"))))))))))))," exceeds the size of the string, use the modulo operation)")),(0,s.yg)("p",null,"Use pointer operations and bitwise operations as much as possible!"),(0,s.yg)("blockquote",null,(0,s.yg)("p",{parentName:"blockquote"},(0,s.yg)("strong",{parentName:"p"},"NOTE"),": Do not use functions such as ",(0,s.yg)("inlineCode",{parentName:"p"},"strlen()"),", ",(0,s.yg)("inlineCode",{parentName:"p"},"sizeof()"),", ",(0,s.yg)("inlineCode",{parentName:"p"},"pow()"),", and do not check equality using ",(0,s.yg)("inlineCode",{parentName:"p"},"=="),".\nAlso, do not access string elements in the form of ",(0,s.yg)("inlineCode",{parentName:"p"},"s[i]"),"."),(0,s.yg)("p",{parentName:"blockquote"},(0,s.yg)("strong",{parentName:"p"},"TIP"),': For the string "aac":'),(0,s.yg)("pre",{parentName:"blockquote"},(0,s.yg)("code",{parentName:"pre",className:"language-text"},"length = 3\nAddress of a: 0x564c364482a0\nAddress of a: 0x564c364482a1\n")),(0,s.yg)("p",{parentName:"blockquote"},'For the string "ababababacccbacbacbacbacbabc":'),(0,s.yg)("pre",{parentName:"blockquote"},(0,s.yg)("code",{parentName:"pre",className:"language-text"},"length = 28\nAddress of b: 0x563f0da6f2a1\nAddress of a: 0x563f0da6f2a2\nAddress of c: 0x563f0da6f2a9\nAddress of a: 0x563f0da6f2b0\nAddress of b: 0x563f0da6f2b2\nAddress of b: 0x563f0da6f2b5\nAddress of c: 0x563f0da6f2b7\nAddress of a: 0x563f0da6f2b9\n")),(0,s.yg)("p",{parentName:"blockquote"},(0,s.yg)("strong",{parentName:"p"},"The above addresses are illustrative!"))),(0,s.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,s.yg)("a",{parentName:"p",href:"/hardware-software-interface/10/Lab%201%20-%20Number%20Representation/Pointers%20in%20C/Reading/"},"this")," reading material."))}g.isMDXComponent=!0}}]);