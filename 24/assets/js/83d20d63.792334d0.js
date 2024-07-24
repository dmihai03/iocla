"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[383],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));const o={},i="Corrupt Stack Frame Debugging",s={unversionedId:"Lab 10 - C - Assembly Interaction/Stack Handling/Drills/Tasks/Stack Frame/README",id:"Lab 10 - C - Assembly Interaction/Stack Handling/Drills/Tasks/Stack Frame/README",title:"Corrupt Stack Frame Debugging",description:"Navigate to drills/tasks/stack-frame/support and open main.c",source:"@site/docs/Lab 10 - C - Assembly Interaction/Stack Handling/Drills/Tasks/Stack Frame/README.md",sourceDirName:"Lab 10 - C - Assembly Interaction/Stack Handling/Drills/Tasks/Stack Frame",slug:"/Lab 10 - C - Assembly Interaction/Stack Handling/Drills/Tasks/Stack Frame/",permalink:"/hardware-software-interface/24/Lab 10 - C - Assembly Interaction/Stack Handling/Drills/Tasks/Stack Frame/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Maximum Computation in Assembly with 64-bit C Call",permalink:"/hardware-software-interface/24/Lab 10 - C - Assembly Interaction/Stack Handling/Drills/Tasks/Max C Calls x64/"}},l={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"corrupt-stack-frame-debugging"},"Corrupt Stack Frame Debugging"),(0,a.yg)("p",null,"Navigate to ",(0,a.yg)("inlineCode",{parentName:"p"},"drills/tasks/stack-frame/support")," and open ",(0,a.yg)("inlineCode",{parentName:"p"},"main.c")),(0,a.yg)("p",null,"In current subdirectory of the lab's task archive you can find a C program that implements the display of the string ",(0,a.yg)("inlineCode",{parentName:"p"},"Hello world!")," by a call to the ",(0,a.yg)("inlineCode",{parentName:"p"},"print_hello()")," function defined in the assembly for the first part of the message, followed by two calls to the ",(0,a.yg)("inlineCode",{parentName:"p"},"printf()")," function directly from the C code."),(0,a.yg)("p",null,"Compile and run the program.\nWhat do you notice?\nThe printed message is not as expected because the assembly code is missing an instruction."),(0,a.yg)("p",null,"Use GDB to inspect the address at the top of the stack before executing the ",(0,a.yg)("inlineCode",{parentName:"p"},"ret")," statement in the ",(0,a.yg)("inlineCode",{parentName:"p"},"print_hello()")," function.\nWhat does it point to? Track the values of the EBP and ESP registers during the execution of this function.\nWhat should be at the top of the stack after execution of the ",(0,a.yg)("inlineCode",{parentName:"p"},"leave")," statement?"),(0,a.yg)("p",null,"Find the missing instruction and rerun the executable."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"TIP:"),"\nIn order to restore the stack to its state at the start of the current function, the ",(0,a.yg)("inlineCode",{parentName:"p"},"leave")," statement relies on the function's pointer frame having been set.")),(0,a.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,a.yg)("a",{parentName:"p",href:"/hardware-software-interface/24/Lab%2010%20-%20C%20-%20Assembly%20Interaction/Stack%20Handling/Reading/#passing-parameters-from-c-to-the-assembly-procedure"},"this relevant section")," reading material."))}m.isMDXComponent=!0}}]);