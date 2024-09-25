"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[2429],{5680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>y});var a=n(6540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=a.createContext({}),d=function(e){var r=a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=d(e.components);return a.createElement(s.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=t,y=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(y,o(o({ref:r},c),{},{components:n})):a.createElement(y,o({ref:r},c))}));function y(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:t,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5609:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(8168),t=(n(6540),n(5680));const i={},o="Binary Even and Hexadecimal Odd",l={unversionedId:"Lab 1 - Number Representation/Binary and Hexadecimal/Drills/Tasks/Binary Even and Hexadecimal Odd/README",id:"Lab 1 - Number Representation/Binary and Hexadecimal/Drills/Tasks/Binary Even and Hexadecimal Odd/README",title:"Binary Even and Hexadecimal Odd",description:"You will solve the exercise starting from the file odd_even.c located in the directory drills/tasks/odd-even/.",source:"@site/docs/Lab 1 - Number Representation/Binary and Hexadecimal/Drills/Tasks/Binary Even and Hexadecimal Odd/README.md",sourceDirName:"Lab 1 - Number Representation/Binary and Hexadecimal/Drills/Tasks/Binary Even and Hexadecimal Odd",slug:"/Lab 1 - Number Representation/Binary and Hexadecimal/Drills/Tasks/Binary Even and Hexadecimal Odd/",permalink:"/hardware-software-interface/26/Lab 1 - Number Representation/Binary and Hexadecimal/Drills/Tasks/Binary Even and Hexadecimal Odd/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Rotations",permalink:"/hardware-software-interface/26/Lab 1 - Number Representation/Binary and Hexadecimal/Drills/Tasks/Rotations/"},next:{title:"Pointers in C",permalink:"/hardware-software-interface/26/Lab 1 - Number Representation/Pointers in C/"}},s={},d=[],c={toc:d},p="wrapper";function u(e){let{components:r,...n}=e;return(0,t.yg)(p,(0,a.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"binary-even-and-hexadecimal-odd"},"Binary Even and Hexadecimal Odd"),(0,t.yg)("p",null,"You will solve the exercise starting from the file ",(0,t.yg)("inlineCode",{parentName:"p"},"odd_even.c")," located in the directory ",(0,t.yg)("inlineCode",{parentName:"p"},"drills/tasks/odd-even/"),"."),(0,t.yg)("p",null,"Traverse an array of 32-bit integers using pointer operations and display the even numbers in binary and the odd numbers in hexadecimal."),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("strong",{parentName:"p"},"NOTE"),": Use bitwise operations wherever possible in your solution!"),(0,t.yg)("p",{parentName:"blockquote"},(0,t.yg)("strong",{parentName:"p"},"NOTE"),": For the array ",(0,t.yg)("inlineCode",{parentName:"p"},"[214, 71, 84, 134, 86]"),", the program will display:"),(0,t.yg)("pre",{parentName:"blockquote"},(0,t.yg)("code",{parentName:"pre",className:"language-text"},"0b11010110\n0x00000047\n0b01010100\n0b10000110\n0b01010110\n"))),(0,t.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,t.yg)("a",{parentName:"p",href:"/hardware-software-interface/26/Lab%201%20-%20Number%20Representation/Binary%20and%20Hexadecimal/Reading/#logical-shifts"},"this")," reading material."))}u.isMDXComponent=!0}}]);