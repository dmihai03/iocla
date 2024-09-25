"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[4785],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(n),u=a,f=g["".concat(s,".").concat(u)]||g[u]||m[u]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));const i={},o="C: GOTOs",l={unversionedId:"Lab 4 - Toolchain. GOTO/GOTO statements in C/Drills/Tasks/Algorithms Using GOTO/README",id:"Lab 4 - Toolchain. GOTO/GOTO statements in C/Drills/Tasks/Algorithms Using GOTO/README",title:"C: GOTOs",description:"For the algorithms below, write C code without using:",source:"@site/docs/Lab 4 - Toolchain. GOTO/GOTO statements in C/Drills/Tasks/Algorithms Using GOTO/README.md",sourceDirName:"Lab 4 - Toolchain. GOTO/GOTO statements in C/Drills/Tasks/Algorithms Using GOTO",slug:"/Lab 4 - Toolchain. GOTO/GOTO statements in C/Drills/Tasks/Algorithms Using GOTO/",permalink:"/hardware-software-interface/26/Lab 4 - Toolchain. GOTO/GOTO statements in C/Drills/Tasks/Algorithms Using GOTO/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Tasks",permalink:"/hardware-software-interface/26/Lab 4 - Toolchain. GOTO/GOTO statements in C/Drills/Tasks/"},next:{title:"Toolchain for Reverse Engineering",permalink:"/hardware-software-interface/26/Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/"}},s={},c=[],p={toc:c},g="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"c-gotos"},"C: GOTOs"),(0,a.yg)("p",null,"For the algorithms below, write C code without using:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"function definitions/calls (except for ",(0,a.yg)("inlineCode",{parentName:"li"},"scanf()")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"printf()"),")"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"else")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"for")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"while")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"do {} while")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"if")," constructs containing return"),(0,a.yg)("li",{parentName:"ul"},"nested ",(0,a.yg)("inlineCode",{parentName:"li"},"if")," statements")),(0,a.yg)("p",null,"The only permitted statement within an ",(0,a.yg)("inlineCode",{parentName:"p"},"if")," construct is ",(0,a.yg)("inlineCode",{parentName:"p"},"goto"),"."),(0,a.yg)("p",null,"In other words, all the code must be written inside the ",(0,a.yg)("inlineCode",{parentName:"p"},"main")," function, and the control flow modification (jumping to another code area) is done only through sequences like ",(0,a.yg)("inlineCode",{parentName:"p"},"if (condition) goto label;")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"goto label;"),"."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Implement an algorithm for finding the largest element of an array using C code and the above constraints.\nThe skeleton for the code is in ",(0,a.yg)("inlineCode",{parentName:"li"},"support/vector_max/vector_max.c"),"."),(0,a.yg)("li",{parentName:"ol"},"Implement binary search using C code and the above constraints.\nThe skeleton for the code is in ",(0,a.yg)("inlineCode",{parentName:"li"},"support/binary_search/binary_search.c"),".")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"WARNING"),": We reiterate that the use cases of the goto statement are limited.\nThese exercises have educational value to get you accustomed to jump instructions that we will use in assembly language development.")),(0,a.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,a.yg)("a",{parentName:"p",href:"/hardware-software-interface/26/Lab%204%20-%20Toolchain.%20GOTO/GOTO%20statements%20in%20C/Reading/#syntax"},"this")," reading material."))}m.isMDXComponent=!0}}]);