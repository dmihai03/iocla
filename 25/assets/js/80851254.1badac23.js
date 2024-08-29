"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[1956],{5680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>g});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),f=a,g=c["".concat(l,".").concat(f)]||c[f]||u[f]||i;return t?r.createElement(g,o(o({ref:n},d),{},{components:t})):r.createElement(g,o({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6004:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(8168),a=(t(6540),t(5680));const i={},o="Pointers in C",s={unversionedId:"Lab 1 - Number Representation/Pointers in C/Reading/README",id:"Lab 1 - Number Representation/Pointers in C/Reading/README",title:"Pointers in C",description:"In the C language, a pointer is a variable whose value is the address of another variable.",source:"@site/docs/Lab 1 - Number Representation/Pointers in C/Reading/README.md",sourceDirName:"Lab 1 - Number Representation/Pointers in C/Reading",slug:"/Lab 1 - Number Representation/Pointers in C/Reading/",permalink:"/hardware-software-interface/25/Lab 1 - Number Representation/Pointers in C/Reading/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Pointers in C",permalink:"/hardware-software-interface/25/Lab 1 - Number Representation/Pointers in C/"},next:{title:"Drills",permalink:"/hardware-software-interface/25/Lab 1 - Number Representation/Pointers in C/Drills/"}},l={},p=[{value:"Advantages of Pointers",id:"advantages-of-pointers",level:2},{value:"Disadvantages of Pointers",id:"disadvantages-of-pointers",level:2}],d={toc:p},c="wrapper";function u(e){let{components:n,...i}=e;return(0,a.yg)(c,(0,r.A)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"pointers-in-c"},"Pointers in C"),(0,a.yg)("p",null,"In the C language, a pointer is a variable whose value is the address of another variable.\nWe can think of a pointer as an intermediary, namely a variable that points to a final location or to another intermediary as shown in the image and code below."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Simple and double pointer",src:t(5455).A})),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c"},"#include <stdio.h>\n\nint main()\n{\n    int v;\n    int *p;  /* pointer to a 32-bit integer */\n    int **pp;  /* pointer to a pointer holding the address of a 32-bit integer */\n\n    /* To access the address of a variable in C, we use the address-of operator '&' */\n    p = &v;  /* p holds the address of value v */\n    pp = &p;  /* pp holds the address of the address of value v */\n\n    v = 69;\n    /* To access the value at the address stored by a pointer, we use the dereference operator '*' */\n    printf(\"v(%d) - *p(%d) - **pp(%d)\\n\", v, *p, *(*pp));  /* outputs v(69) - *p(69) - **pp(69) */\n\n    return 0;\n}\n")),(0,a.yg)("h2",{id:"advantages-of-pointers"},"Advantages of Pointers"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Pointers are used in creating complex data structures such as linked lists, trees, graphs, hash tables, etc."),(0,a.yg)("li",{parentName:"ul"},"Pointers are used to transfer information between different functions or recursive calls without using global variables."),(0,a.yg)("li",{parentName:"ul"},"By using pointers, we can dynamically allocate memory."),(0,a.yg)("li",{parentName:"ul"},"We can have other functions, strings, complex data structures as parameters for functions.")),(0,a.yg)("h2",{id:"disadvantages-of-pointers"},"Disadvantages of Pointers"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Using an uninitialized pointer in a program leads to a ",(0,a.yg)("strong",{parentName:"li"},"segmentation fault")," by accessing a restricted memory area."),(0,a.yg)("li",{parentName:"ul"},"Manual memory deallocation is required by the programmer for dynamically allocated memory."),(0,a.yg)("li",{parentName:"ul"},"Dereferencing is needed to access a value, which is slower than direct access.")),(0,a.yg)("p",null,"In C, a pointer can be defined for any of the data types existing in the language as well as for ",(0,a.yg)("inlineCode",{parentName:"p"},"void"),".\nA ",(0,a.yg)("inlineCode",{parentName:"p"},"void")," pointer differs from a pointer to an explicit data type in that a void pointer ",(0,a.yg)("strong",{parentName:"p"},"CANNOT")," be used in pointer operations, as void does not have a clear size.\nA basic example where pointers and pointer operations are used is the allocation and traversal of an array of values:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#include <stdlib.h>\n\n#define ARR_LENGTH 5\n\nint main()\n{\n   int *arr, i;\n\n   arr = (int *)malloc(sizeof(int) * ARR_LENGTH);\n   // arr = (int *)calloc(ARR_LENGTH, sizeof(int));\n\n   for (i = 0; i < ARR_LENGTH; ++i) {\n       /*\n        * arr + i iterates through the addresses of each element in the array, but the address arr + i doesn\'t increase by i but by i * sizeof(int), as arr is a pointer to int\n        * This operation is not visible or necessary in C but will be required later in assembly language\n        */\n       printf("arr[%d] = %d: ", i, *(arr + i));\n   }\n\n   free(arr);\n   return 0;\n}\n')),(0,a.yg)("p",null,"Pointers offer great flexibility regarding memory access.\nBelow is an example that checks if a system is little or big endian using casting between different types of pointers."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n\nint main()\n{\n    int v = 0x00000001;\n    unsigned char *first_byte = (unsigned char *)&v;\n\n    if (*first_byte == 0x01)\n        printf("little-endian\\n");\n    else\n        printf("big-endian\\n");\n\n    return 0;\n}\n')))}u.isMDXComponent=!0},5455:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/simple-double-pointer-be5d7f5c690a7a911d9143a94d2f3e7c.svg"}}]);