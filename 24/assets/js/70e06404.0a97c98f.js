"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[8587],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(y,s(s({ref:n},c),{},{components:t})):r.createElement(y,s({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[m]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8993:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(8168),a=(t(6540),t(5680));const i={},s="Linking C and C++",o={unversionedId:"Lab 10 - C - Assembly Interaction/Compatibility Issues/Drills/Tasks/Cpp Obs/README",id:"Lab 10 - C - Assembly Interaction/Compatibility Issues/Drills/Tasks/Cpp Obs/README",title:"Linking C and C++",description:"Navigate to drills/tasks/cpp-obs/support/",source:"@site/docs/Lab 10 - C - Assembly Interaction/Compatibility Issues/Drills/Tasks/Cpp Obs/README.md",sourceDirName:"Lab 10 - C - Assembly Interaction/Compatibility Issues/Drills/Tasks/Cpp Obs",slug:"/Lab 10 - C - Assembly Interaction/Compatibility Issues/Drills/Tasks/Cpp Obs/",permalink:"/hardware-software-interface/24/Lab 10 - C - Assembly Interaction/Compatibility Issues/Drills/Tasks/Cpp Obs/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Tasks",permalink:"/hardware-software-interface/24/Lab 10 - C - Assembly Interaction/Compatibility Issues/Drills/Tasks/"},next:{title:"Repair Export Problems",permalink:"/hardware-software-interface/24/Lab 10 - C - Assembly Interaction/Compatibility Issues/Drills/Tasks/Export Fix/"}},l={},p=[],c={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"linking-c-and-c"},"Linking C and C++"),(0,a.yg)("p",null,"Navigate to ",(0,a.yg)("inlineCode",{parentName:"p"},"drills/tasks/cpp-obs/support/")),(0,a.yg)("p",null,"We want to see how linking is done from mixed sources: C and C++."),(0,a.yg)("p",null,"In the subdirectory ",(0,a.yg)("inlineCode",{parentName:"p"},"support/")," we have two directories ",(0,a.yg)("inlineCode",{parentName:"p"},"c-calls-cpp/")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"cpp-calls-c/")," in which we combine mixed C and C++ sources.\nIn both cases, using ",(0,a.yg)("inlineCode",{parentName:"p"},"make")," displays errors.\nThis is because C++ symbols are ",(0,a.yg)("em",{parentName:"p"},"mangled"),", i.e. their symbols have different names because of the classes and namespaces present in C++.\nIf we use the ",(0,a.yg)("inlineCode",{parentName:"p"},"nm")," command on object modules obtained from C source code, we get:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-asm"},"$ nm add.o\n0000000000000000 T _Z3addii\n\n$ nm sub.o\n0000000000000000 T _Z3subi\n")),(0,a.yg)("p",null,"The symbol names are not ",(0,a.yg)("inlineCode",{parentName:"p"},"add")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"sub"),", respectively, but are ",(0,a.yg)("inlineCode",{parentName:"p"},"_Z3addii")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"_Z3subii"),".\nC++ symbol names are ",(0,a.yg)("em",{parentName:"p"},"mangled")," and define the function signature.\nThis is to allow functions with the same name but different signatures.\nDetails about ",(0,a.yg)("em",{parentName:"p"},"name mangling")," can be found ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Name_mangling"},"here"),"."),(0,a.yg)("p",null,"To fix this, you need to prefix symbols defined in C and imported into C++, or vice versa, with the ",(0,a.yg)("inlineCode",{parentName:"p"},'external "C"')," directive.\nThis way, the C++ compiler will use simple names for imported/exported symbols, to be used in conjunction with C modules.\nIn this subdirectory errors in the ",(0,a.yg)("inlineCode",{parentName:"p"},"support/")," subdirectory are fixed.\nCompare the ",(0,a.yg)("inlineCode",{parentName:"p"},"ops.h"),' files in both subdirectories.\nDetails about the `external "C" directive can be found ',(0,a.yg)("a",{parentName:"p",href:"https://stackoverflow.com/a/1041880/4804196"},"here"),"."),(0,a.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,a.yg)("a",{parentName:"p",href:"/hardware-software-interface/24/Lab%2010%20-%20C%20-%20Assembly%20Interaction/Compatibility%20Issues/Reading/#calling-c-functions-from-assembly-procedures"},"this relevant section")," reading material."))}u.isMDXComponent=!0}}]);