"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[2295],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(8168),a=(n(6540),n(5680));const o={},i="Data Inspection",s={unversionedId:"Lab 2 - Memory Operations. Introduction to GDB/Introduction to GDB/Drills/Tasks/Data Inspection/README",id:"Lab 2 - Memory Operations. Introduction to GDB/Introduction to GDB/Drills/Tasks/Data Inspection/README",title:"Data Inspection",description:"You will solve this exercise starting from the inspect.c file located in the drills/tasks/inspect/support directory.",source:"@site/docs/Lab 2 - Memory Operations. Introduction to GDB/Introduction to GDB/Drills/Tasks/Data Inspection/README.md",sourceDirName:"Lab 2 - Memory Operations. Introduction to GDB/Introduction to GDB/Drills/Tasks/Data Inspection",slug:"/Lab 2 - Memory Operations. Introduction to GDB/Introduction to GDB/Drills/Tasks/Data Inspection/",permalink:"/hardware-software-interface/25/Lab 2 - Memory Operations. Introduction to GDB/Introduction to GDB/Drills/Tasks/Data Inspection/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Tasks",permalink:"/hardware-software-interface/25/Lab 2 - Memory Operations. Introduction to GDB/Introduction to GDB/Drills/Tasks/"},next:{title:"Lab 4 - Toolchain. GOTO",permalink:"/hardware-software-interface/25/Lab 4 - Toolchain. GOTO/"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"data-inspection"},"Data Inspection"),(0,a.yg)("p",null,"You will solve this exercise starting from the ",(0,a.yg)("inlineCode",{parentName:"p"},"inspect.c")," file located in the ",(0,a.yg)("inlineCode",{parentName:"p"},"drills/tasks/inspect/support")," directory."),(0,a.yg)("p",null,"Given the following declarations:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c"},"#include <stdio.h>\n\nint main() {\n    unsigned int a = 4127;\n    int b = -27714;\n    short c = 1475;\n    int v[] = {0xCAFEBABE, 0xDEADBEEF, 0x0B00B135, 0xBAADF00D, 0xDEADC0DE};\n\n    unsigned int *int_ptr = (unsigned int *) &v;\n\n    for (int i = 0 ; i < sizeof(v) / sizeof(*int_ptr) ; ++i) {\n        ++int_ptr;\n    }\n\n    return 0;\n}\n")),(0,a.yg)("p",null,"Compile the source code and run the executable with GDB.\nSet a breakpoint at ",(0,a.yg)("inlineCode",{parentName:"p"},"main")," and observe how the data is represented in memory.\nFor this task, you will use the ",(0,a.yg)("inlineCode",{parentName:"p"},"print")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"examine")," commands."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"NOTE:")),(0,a.yg)("ul",{parentName:"blockquote"},(0,a.yg)("li",{parentName:"ul"},"To display the value of a variable in hexadecimal, use ",(0,a.yg)("inlineCode",{parentName:"li"},"p/x variable_name")),(0,a.yg)("li",{parentName:"ul"},"To display the value from a pointer, use ",(0,a.yg)("inlineCode",{parentName:"li"},"p *pointer_name"),", and to inspect the data at a memory address, use ",(0,a.yg)("inlineCode",{parentName:"li"},"x memory_address"),"."))),(0,a.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,a.yg)("a",{parentName:"p",href:"/hardware-software-interface/25/Lab%202%20-%20Memory%20Operations.%20Introduction%20to%20GDB/Introduction%20to%20GDB/Reading/#inspecting-memory"},"this")," reading material."))}d.isMDXComponent=!0}}]);