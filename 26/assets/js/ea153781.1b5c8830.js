"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[9480],{5680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>m});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),g=r,m=c["".concat(p,".").concat(g)]||c[g]||h[g]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},1205:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(8168),r=(a(6540),a(5680));const i={},o="Ghidra Tutorial: Decompiling",l={unversionedId:"Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Guides/Ghidra Tutorial/README",id:"Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Guides/Ghidra Tutorial/README",title:"Ghidra Tutorial: Decompiling",description:"In this tutorial, we aim to show how to analyze the functionality of a simple binary that prompts for the input of a correct password to obtain a secret value.",source:"@site/docs/Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Guides/Ghidra Tutorial/README.md",sourceDirName:"Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Guides/Ghidra Tutorial",slug:"/Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Guides/Ghidra Tutorial/",permalink:"/hardware-software-interface/26/Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Guides/Ghidra Tutorial/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Online C Compiling",permalink:"/hardware-software-interface/26/Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Guides/Compiler Explorer Tutorial/"},next:{title:"Drills",permalink:"/hardware-software-interface/26/Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Drills/"}},p={},s=[],d={toc:s},c="wrapper";function h(e){let{components:t,...i}=e;return(0,r.yg)(c,(0,n.A)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"ghidra-tutorial-decompiling"},"Ghidra Tutorial: Decompiling"),(0,r.yg)("p",null,"In this tutorial, we aim to show how to analyze the functionality of a simple binary that prompts for the input of a correct password to obtain a secret value."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"WARNING"),": In order to run Ghidra, access a terminal window and use the ",(0,r.yg)("inlineCode",{parentName:"p"},"ghidra")," command.")),(0,r.yg)("p",null,"Initially, when we run Ghidra, a window will appear showing our current projects."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"ghidra-initial.png",src:a(5132).A,width:"1920",height:"1080"})),(0,r.yg)("p",null,"We can create a new project and give it a suitable name.\nTo do this, we will use: ",(0,r.yg)("inlineCode",{parentName:"p"},"File \u2192 New Project")," (or using the keyboard shortcut CTRL + N)."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"ghidra-added-project.png",src:a(5922).A,width:"1920",height:"1080"})),(0,r.yg)("p",null,"After creating the project, to add the executable file, we can use ",(0,r.yg)("inlineCode",{parentName:"p"},"File \u2192 Import file"),", or drag the file into the directory we created.\nGhidra will suggest the detected format and the compiler used.\nIn more special cases, we may need to change these configurations, but for the purpose of this tutorial, Ghidra's suggestions are perfect."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"ghidra-added-file.png",src:a(6999).A,width:"1920",height:"1080"})),(0,r.yg)("p",null,"The next step is to analyze the imported binary.\nWe can double-click on it.\nGhidra will ask us if we want to analyze it.\nTo do this, we will click ",(0,r.yg)("inlineCode",{parentName:"p"},"Yes")," and then ",(0,r.yg)("inlineCode",{parentName:"p"},"Analyze"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"ghidra-analyzed.png",src:a(5502).A,width:"1920",height:"1080"})),(0,r.yg)("p",null,"After the executable has been analyzed, Ghidra displays an interpretation of the binary information, which includes the disassembled code of the program.\nNext, for example, we can try to decompile a function.\nIn the left part of the window, we have the ",(0,r.yg)("inlineCode",{parentName:"p"},"Symbol Tree")," section;\nif we open ",(0,r.yg)("inlineCode",{parentName:"p"},"Functions"),", we can see that Ghidra has detected certain functions, including the ",(0,r.yg)("inlineCode",{parentName:"p"},"main")," function in the case of this binary.\nTherefore, if we double-click on ",(0,r.yg)("inlineCode",{parentName:"p"},"main"),", the decompiled ",(0,r.yg)("inlineCode",{parentName:"p"},"main")," function appears on the right, and in the central window, we see the corresponding assembly code."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"ghidra-main.png",src:a(4857).A,width:"1920",height:"1080"})),(0,r.yg)("p",null,"We will notice that the decompiled code is not an exact representation of the source code from the file ",(0,r.yg)("inlineCode",{parentName:"p"},"crackme.c"),", but it gives us a fairly good idea of how it works and looks.\nLooking at the decompiled code, we notice that the ",(0,r.yg)("inlineCode",{parentName:"p"},"main")," function has two long-type parameters named ",(0,r.yg)("inlineCode",{parentName:"p"},"param_1")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"param_2"),", instead of the normal prototype ",(0,r.yg)("inlineCode",{parentName:"p"},"main(int argc, char *argv[])"),".\nThe second parameter of ",(0,r.yg)("inlineCode",{parentName:"p"},"main"),' is of type "vector of pointers to character data" (which is generically interpreted as "array of strings").\nBelow is a generic perspective on how the vector is represented for a 64-bit system.\nIn the representation on the second line, ',(0,r.yg)("inlineCode",{parentName:"p"},"argp")," should be understood as ",(0,r.yg)("inlineCode",{parentName:"p"},"char *argp = (char *)argv")," in order for the calculation ",(0,r.yg)("inlineCode",{parentName:"p"},"argp + N")," to make sense."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"argv","[0]"),(0,r.yg)("th",{parentName:"tr",align:"center"},"argv","[1]"),(0,r.yg)("th",{parentName:"tr",align:"right"},"argv","[2]"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"argp"),(0,r.yg)("td",{parentName:"tr",align:"center"},"argp + 8"),(0,r.yg)("td",{parentName:"tr",align:"right"},"argp + 16")))),(0,r.yg)("p",null,"The difference in parameter types of the ",(0,r.yg)("inlineCode",{parentName:"p"},"main")," function is due to interpretation: the binary is compiled for the amd64 architecture (which is an extension of the x86 architecture for 64-bit systems), and the size of a\n",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Word_(computer_architecture)"},"processor word"),"\nis 8 bytes (or 64 bits).\nThe size of a processor word is reflected in the size of a pointer and also in the size of a single parameter (if the parameter is smaller than a word, it is automatically extended to the size of a word).\nAdditionally, by coincidence, the size of a variable of type ",(0,r.yg)("inlineCode",{parentName:"p"},"long")," is also 64 bits (the sizes of\n",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/C_data_types"},"data types"),"\nin C are not well-defined, only some lower limits for data types are defined).\nThis causes the interpretation of both parameters as ",(0,r.yg)("inlineCode",{parentName:"p"},"long"),", as all parameters, regardless of type (int or pointer), are manipulated identically.\nThe calculation ",(0,r.yg)("inlineCode",{parentName:"p"},"param_2 + 8")," is used to calculate the address of the second pointer in the ",(0,r.yg)("inlineCode",{parentName:"p"},"argv")," vector (that is, ",(0,r.yg)("inlineCode",{parentName:"p"},"argv[1]"),").\nFor a program compiled for the 32-bit x86 architecture, the address of ",(0,r.yg)("inlineCode",{parentName:"p"},"argv[1]")," would have been ",(0,r.yg)("inlineCode",{parentName:"p"},"param_2 + 4"),"."),(0,r.yg)("p",null,"Using the information from the decompiled code, we can infer that the program expects a password as an argument, and it must be 8 characters long, with the character at position 3 being 'E' (the first character is at position zero)."))}h.isMDXComponent=!0},6999:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/ghidra-added-file-49c585a78cb743dc19ba8ed52650ba6e.png"},5922:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/ghidra-added-project-28d84e0e8d6277e786c10d5dd42a3434.png"},5502:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/ghidra-analyzed-3e67161d6951f2d6150bfde13dcd7e9b.png"},5132:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/ghidra-initial-aa83559f08ae3ed0108d66103daf16f7.png"},4857:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/ghidra-main-a7ef01832df96ad523a45514afd35cb6.png"}}]);