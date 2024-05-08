"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[6007],{5680:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>y});var t=n(6540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),d=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=d(e.components);return t.createElement(l.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,y=m["".concat(l,".").concat(c)]||m[c]||p[c]||o;return n?t.createElement(y,i(i({ref:r},u),{},{components:n})):t.createElement(y,i({ref:r},u))}));function y(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},816:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var t=n(8168),a=(n(6540),n(5680));const o={},i="Count Array Elements",s={unversionedId:"Lab 6 - Registers and Memory Addressing/Memory Addressing/Drills/Tasks/Count Elements of Array/README",id:"Lab 6 - Registers and Memory Addressing/Memory Addressing/Drills/Tasks/Count Elements of Array/README",title:"Count Array Elements",description:"Count Negative and Positive Numbers from Array",source:"@site/docs/Lab 6 - Registers and Memory Addressing/Memory Addressing/Drills/Tasks/Count Elements of Array/README.md",sourceDirName:"Lab 6 - Registers and Memory Addressing/Memory Addressing/Drills/Tasks/Count Elements of Array",slug:"/Lab 6 - Registers and Memory Addressing/Memory Addressing/Drills/Tasks/Count Elements of Array/",permalink:"/hardware-software-interface/22/Lab 6 - Registers and Memory Addressing/Memory Addressing/Drills/Tasks/Count Elements of Array/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Sum of Elements in an Array",permalink:"/hardware-software-interface/22/Lab 6 - Registers and Memory Addressing/Memory Addressing/Drills/Tasks/Sum Elements of Array/"},next:{title:"Lab 7 - Structures, vectors and strings",permalink:"/hardware-software-interface/22/Lab 7 - Structures, vectors and strings/"}},l={},d=[{value:"Count Negative and Positive Numbers from Array",id:"count-negative-and-positive-numbers-from-array",level:2},{value:"Count Odd and Even Numbers from Array",id:"count-odd-and-even-numbers-from-array",level:2}],u={toc:d},m="wrapper";function p(e){let{components:r,...n}=e;return(0,a.yg)(m,(0,t.A)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"count-array-elements"},"Count Array Elements"),(0,a.yg)("h2",{id:"count-negative-and-positive-numbers-from-array"},"Count Negative and Positive Numbers from Array"),(0,a.yg)("p",null,"You will solve this exercise starting from the ",(0,a.yg)("inlineCode",{parentName:"p"},"count_pos_neg.asm")," file located in the ",(0,a.yg)("inlineCode",{parentName:"p"},"drills/tasks/vec-count-if/support")," directory."),(0,a.yg)("p",null,"Your program should display the number of positive and negative values from the array."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"NOTE"),": Define a vector that contains both negative and positive numbers."),(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"TIP"),": Use the ",(0,a.yg)("inlineCode",{parentName:"p"},"cmp")," instruction and conditional jump mnemonics. See details ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/X86_instruction_listings"},"here"),"."),(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"TIP"),": The ",(0,a.yg)("inlineCode",{parentName:"p"},"inc")," instruction followed by a register increments the value stored in that register.")),(0,a.yg)("h2",{id:"count-odd-and-even-numbers-from-array"},"Count Odd and Even Numbers from Array"),(0,a.yg)("p",null,"Create a new file called ",(0,a.yg)("inlineCode",{parentName:"p"},"count_even_odd.asm")," file located in the ",(0,a.yg)("inlineCode",{parentName:"p"},"drills/tasks/vec-count-if/support")," directory."),(0,a.yg)("p",null,"Your program should display the number of even and odd values from an array."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"TIP"),": You can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"div")," instruction to divide a number by 2 and then compare the remainder of the division with 0."),(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"NOTE"),": For testing, use an array containing only positive numbers.")),(0,a.yg)("p",null,"For negative numbers, sign extension should be performed; it would work without it because we are only interested in the remainder, but let's be rigorous :-)"),(0,a.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,a.yg)("a",{parentName:"p",href:"/hardware-software-interface/22/Lab%206%20-%20Registers%20and%20Memory%20Addressing/Memory%20Addressing/Reading/"},"this")," reading material."))}p.isMDXComponent=!0}}]);