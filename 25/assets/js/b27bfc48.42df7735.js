"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[3401],{5680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>y});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(r),g=a,y=d["".concat(o,".").concat(g)]||d[g]||p[g]||s;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=g;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[d]="string"==typeof e?e:a,i[1]=u;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1545:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=r(8168),a=(r(6540),r(5680));const s={},i="Structured Data (Structures, Arrays and String Operations)",u={unversionedId:"Lab 7 - Structures, vectors and strings/Structures/Reading/README",id:"Lab 7 - Structures, vectors and strings/Structures/Reading/README",title:"Structured Data (Structures, Arrays and String Operations)",description:"We will introduce the concept of structures in assembly language and work with specialized operations on strings.",source:"@site/docs/Lab 7 - Structures, vectors and strings/Structures/Reading/README.md",sourceDirName:"Lab 7 - Structures, vectors and strings/Structures/Reading",slug:"/Lab 7 - Structures, vectors and strings/Structures/Reading/",permalink:"/hardware-software-interface/25/Lab 7 - Structures, vectors and strings/Structures/Reading/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Structures",permalink:"/hardware-software-interface/25/Lab 7 - Structures, vectors and strings/Structures/"},next:{title:"Guides",permalink:"/hardware-software-interface/25/Lab 7 - Structures, vectors and strings/Structures/Guides/"}},o={},c=[{value:"Structures",id:"structures",level:2},{value:"Declaring a Structure",id:"declaring-a-structure",level:3},{value:"Instantiating a Structure",id:"instantiating-a-structure",level:3},{value:"Accessing Values from a Structure",id:"accessing-values-from-a-structure",level:3}],l={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"structured-data-structures-arrays-and-string-operations"},"Structured Data (Structures, Arrays and String Operations)"),(0,a.yg)("p",null,"We will introduce the concept of structures in assembly language and work with specialized operations on strings."),(0,a.yg)("h2",{id:"structures"},"Structures"),(0,a.yg)("p",null,"Structures are used to group data of different types that can be used together to create a composite type."),(0,a.yg)("p",null,"Next, we will go through the steps necessary to use a structure: declaration, instantiation, and accessing the fields of a structure."),(0,a.yg)("h3",{id:"declaring-a-structure"},"Declaring a Structure"),(0,a.yg)("p",null,"In NASM, a structure is declared using the construction ",(0,a.yg)("inlineCode",{parentName:"p"},"struc <structure name>"),", followed by a list of fields and terminated with ",(0,a.yg)("inlineCode",{parentName:"p"},"endstruc"),"."),(0,a.yg)("p",null,"Each field of the structure is defined by the following: a label (used to access members), the type specifier, and the number of elements."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Assembly"},"struc mystruct\n    a:    resw 1    ; a will refer to a single word-sized element\n    b:    resd 1    ; b will refer to a single double-word-sized element\n    c:    resb 1    ; c will refer to a single byte-sized element\n    d:    resd 1    ; d will refer to a single double-word-sized element\n    e:    resb 6    ; e will refer to 6 byte-sized elements\nendstruc\n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"NOTE"),": Here pseudo-instructions from the NASM ",(0,a.yg)("inlineCode",{parentName:"p"},"res")," family are used to define the data type and the number of elements for each of the structure fields.\nFor more details about the ",(0,a.yg)("inlineCode",{parentName:"p"},"res")," syntax, please follow this link: ",(0,a.yg)("a",{parentName:"p",href:"https://www.nasm.us/doc/nasmdoc3.html#section-3.2.2"},"NASM Documentation"))),(0,a.yg)("p",null,"Each label defining a field represents the offset of the field within the structure.\nFor example, ",(0,a.yg)("inlineCode",{parentName:"p"},"b")," will have the value 2, because there are 2 bytes from the beginning of the structure to the ",(0,a.yg)("inlineCode",{parentName:"p"},"b")," field (the first 2 bytes are occupied by the ",(0,a.yg)("inlineCode",{parentName:"p"},"a")," word)."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"WARNING"),": If you want to use the same field name in two different structures, you must prefix the label name with a dot (",(0,a.yg)("inlineCode",{parentName:"p"},"."),") like this:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Assembly"},"struc mystruct1\n    .a:    resw 1\n    .b:    resd 1\nendstruc\n\nstruc mystruct2\n    .a:    resd 16\n    .b:    resw 1\nendstruc\n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Use the construction ",(0,a.yg)("inlineCode",{parentName:"p"},"mystruct2.b")," to find the offset value of 'b' within the structure ",(0,a.yg)("inlineCode",{parentName:"p"},"mystruct2"),".")),(0,a.yg)("h3",{id:"instantiating-a-structure"},"Instantiating a Structure"),(0,a.yg)("p",null,"One way to have a structure in memory is to declare it statically in the ",(0,a.yg)("inlineCode",{parentName:"p"},".data")," section.\nThe syntax uses NASM macros ",(0,a.yg)("inlineCode",{parentName:"p"},"istruc")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"iend")," along with the ",(0,a.yg)("inlineCode",{parentName:"p"},"at")," keyword."),(0,a.yg)("p",null,"In the following example, static instantiation of the structure declared above is presented, where ",(0,a.yg)("inlineCode",{parentName:"p"},"struct_var")," is the memory address where the data begins."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Assembly"},"struct_var:\n    istruc mystruct\n        at a, dw        -1\n        at b, dd        0x12345678\n        at c, db        ' '\n        at d, dd        23\n        at e, db        'Gary', 0\n    iend\n")),(0,a.yg)("p",null,"If you define the structure fields using a dot (",(0,a.yg)("inlineCode",{parentName:"p"},"."),"), the instantiation of the structure is done as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Assembly"},"struct_var:\n    istruc mystruct\n        at mystruct.a, dw        -1\n        at mystruct.b, dd        0x12345678\n        at mystruct.c, db        ' '\n        at mystruct.d, dd        23\n        at mystruct.e, db        'Gary', 0\n    iend\n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"WARNING"),": To avoid initializing members incorrectly, you must ensure that for each field, the data type in instantiation matches the type in declaration.")),(0,a.yg)("h3",{id:"accessing-values-from-a-structure"},"Accessing Values from a Structure"),(0,a.yg)("p",null,"To access and/or modify a specific member of the instantiated structure, we need to know its address.\nThis address can be obtained by calculating the sum of the starting address of the structure and the offset within the structure of the desired member."),(0,a.yg)("p",null,"The following code sequence demonstrates setting a value in the ",(0,a.yg)("inlineCode",{parentName:"p"},"b")," field of the structure and subsequently displaying the value of this field."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Assembly"},"mov eax, 12345\nmov dword [mystruct + b], eax ; the address of field b is the base address of the statically instantiated structure + the offset of the field (given by the label 'b')\n\nmov ebx, dword [mystruct + b] ; putting the value from field b into the ebx register for display\nPRINTF32 `%d\\n\\x0`, ebx\n")))}p.isMDXComponent=!0}}]);