"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[3332],{5680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>y});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),g=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=g(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=g(r),m=n,y=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return r?a.createElement(y,s(s({ref:t},d),{},{components:r})):a.createElement(y,s({ref:t},d))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,s[1]=o;for(var g=2;g<i;g++)s[g]=r[g];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1641:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var a=r(8168),n=(r(6540),r(5680));const i={},s="Registers",o={unversionedId:"Lab 6 - Registers and Memory Addressing/Registers/Reading/README",id:"Lab 6 - Registers and Memory Addressing/Registers/Reading/README",title:"Registers",description:'Registers are the primary "tools" used to write programs in assembly language.',source:"@site/docs/Lab 6 - Registers and Memory Addressing/Registers/Reading/README.md",sourceDirName:"Lab 6 - Registers and Memory Addressing/Registers/Reading",slug:"/Lab 6 - Registers and Memory Addressing/Registers/Reading/",permalink:"/hardware-software-interface/26/Lab 6 - Registers and Memory Addressing/Registers/Reading/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Registers",permalink:"/hardware-software-interface/26/Lab 6 - Registers and Memory Addressing/Registers/"},next:{title:"Guides",permalink:"/hardware-software-interface/26/Lab 6 - Registers and Memory Addressing/Registers/Guides/"}},l={},g=[{value:"Register Subsections",id:"register-subsections",level:2},{value:"Static Memory Region Declarations",id:"static-memory-region-declarations",level:2}],d={toc:g},p="wrapper";function c(e){let{components:t,...i}=e;return(0,n.yg)(p,(0,a.A)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"registers"},"Registers"),(0,n.yg)("p",null,'Registers are the primary "tools" used to write programs in assembly language.\nThey are like variables built into the processor.\nUsing registers instead of direct memory addressing makes developing and reading assembly-written programs faster and easier.\nThe only disadvantage of programming in x86 assembly language is that there are few registers.'),(0,n.yg)("p",null,"Modern x86 processors have 8 general-purpose registers whose size is 32 bits.\nThe names of the registers are of historical nature (for example: ",(0,n.yg)("inlineCode",{parentName:"p"},"eax")," was called the accumulator register because it is used by a series of arithmetic instructions, such as ",(0,n.yg)("a",{parentName:"p",href:"https://www.felixcloutier.com/x86/idiv"},"idiv"),').\nWhile most registers have lost their special purpose, becoming "general purpose" in the modern ISA (',(0,n.yg)("inlineCode",{parentName:"p"},"eax"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"ebx"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"ecx"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"edx"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"esi"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"edi"),"), by convention, 2 have retained their initial purpose: ",(0,n.yg)("inlineCode",{parentName:"p"},"esp")," (stack pointer) and ",(0,n.yg)("inlineCode",{parentName:"p"},"ebp")," (base pointer)."),(0,n.yg)("h2",{id:"register-subsections"},"Register Subsections"),(0,n.yg)("p",null,"In certain cases, we want to manipulate values that are represented in less than 4 bytes (for example, working with character strings).\nFor these situations, x86 processors offer us the possibility to work with subsections of 1 and 2 bytes of the ",(0,n.yg)("inlineCode",{parentName:"p"},"eax"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"ebx"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"ecx"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"edx")," registers."),(0,n.yg)("p",null,"The image below represents the registers, their subsections, and their sizes."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"x86_32 Registers",src:r(9032).A})),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"WARNING"),": Subsections are part of registers, which means that if we modify a register, we implicitly modify the value of the subsection."),(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"NOTE"),": Subsections are used in the same way as registers, only the size of the retained value is different."),(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"NOTE"),": Besides the basic registers, there are also six segment registers corresponding to certain areas as seen in the image:"),(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("img",{alt:"Segment Registers",src:r(240).A}))),(0,n.yg)("h2",{id:"static-memory-region-declarations"},"Static Memory Region Declarations"),(0,n.yg)("p",null,"Static memory declarations (analogous to declaring global variables) in the x86 world are made through special assembly directives.\nThese declarations are made in the data section (the ",(0,n.yg)("inlineCode",{parentName:"p"},".data")," region).\nNames can be attached to the declared memory portions through a label to easily reference them later in the program. Follow the example below:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-Assembly"},'.DATA\n    var        `db` 64    ; Declares a byte containing the value 64. Labels\n                        ; the memory location as "var".\n    var2       `db` ?     ; Declares an uninitialized byte labeled "var2".\n               `db` 10    ; Declares an unlabeled byte, initialized with 10. This\n                        ; byte will be placed at the address (var2 + 1).\n    X          `dw` ?     ; Declares an uninitialized word (2 bytes), labeled "X".\n    Y          `dd` 3000  ; Declares a double word (4 bytes) labeled "Y",\n                        ; initialized with the value 3000.\n    Z          `dd` 1,2,3 ; Declares 3 double words (each 4 bytes)\n                        ; starting from address "Z" and initialized with 1, 2, and 3, respectively.\n                        ; For example, 3 will be placed at the address (Z + 8).\n')),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"NOTE"),": DB, DW, DD are directives used to specify the size of the portion:"),(0,n.yg)("table",{parentName:"blockquote"},(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Directive"),(0,n.yg)("th",{parentName:"tr",align:null},"Role"),(0,n.yg)("th",{parentName:"tr",align:null},"Size"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"db")),(0,n.yg)("td",{parentName:"tr",align:null},"Define Byte"),(0,n.yg)("td",{parentName:"tr",align:null},"1 bytes (8 bits)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"dw")),(0,n.yg)("td",{parentName:"tr",align:null},"Define Word"),(0,n.yg)("td",{parentName:"tr",align:null},"2 bytes (16 bits)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"dd")),(0,n.yg)("td",{parentName:"tr",align:null},"Define Double Word"),(0,n.yg)("td",{parentName:"tr",align:null},"4 bytes (32 bits)")))),(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"NOTE"),": There are multiple types of memory regions as can be seen in the image below:"),(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("img",{alt:"Memory Sections",src:r(3769).A,width:"640",height:"480"}))),(0,n.yg)("p",null,"The last declaration in the above example represents the declaration of an array.\nUnlike higher-level languages, where arrays can have multiple dimensions and their elements are accessed by indices, in assembly language, arrays are represented as a number of cells located in a contiguous area of memory."))}c.isMDXComponent=!0},9032:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/registers-0db2e8e77041c8e0b8e0454074e866a8.svg"},3769:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/sections-bd531a20bf90f40ab1dc04a208f1264d.jpg"},240:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/segments-48963525b46d75a87b71f2fbdc282e44.svg"}}]);