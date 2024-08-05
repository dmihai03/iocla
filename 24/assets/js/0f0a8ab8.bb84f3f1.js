"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[1275],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>p});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=f(e,["components","mdxType","originalType","parentName"]),u=l(r),h=n,p=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return r?a.createElement(p,i(i({ref:t},c),{},{components:r})):a.createElement(p,i({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var f={};for(var s in t)hasOwnProperty.call(t,s)&&(f[s]=t[s]);f.originalType=e,f[u]="string"==typeof e?e:n,i[1]=f;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},1710:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>f,toc:()=>l});var a=r(8168),n=(r(6540),r(5680));const o={},i="Buffer Overflow Attacks",f={unversionedId:"Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Reading/README",id:"Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Reading/README",title:"Buffer Overflow Attacks",description:"How is Buffer Overflow Used?",source:"@site/docs/Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Reading/README.md",sourceDirName:"Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Reading",slug:"/Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Reading/",permalink:"/hardware-software-interface/24/Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Reading/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Buffer Overflow Vulnerabilities",permalink:"/hardware-software-interface/24/Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/"},next:{title:"Drills",permalink:"/hardware-software-interface/24/Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/"}},s={},l=[{value:"How is Buffer Overflow Used?",id:"how-is-buffer-overflow-used",level:2},{value:"How Do We Protect Against Buffer Overflow Attacks?",id:"how-do-we-protect-against-buffer-overflow-attacks",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"buffer-overflow-attacks"},"Buffer Overflow Attacks"),(0,n.yg)("h2",{id:"how-is-buffer-overflow-used"},"How is Buffer Overflow Used?"),(0,n.yg)("p",null,"Buffer overflow can be exploited by a potential attacker to overwrite certain data within a program, affecting the execution flow and providing specific benefits to the attacker.\nMost often, an attacker initiates a buffer overflow attack with the goal of gaining access to confidential data that a normal user would not typically have access to."),(0,n.yg)("p",null,"Buffer overflow attacks are generally used on static buffers stored at the stack level.\nThis is because the stack, in addition to program data, also stores return addresses following function calls (see laboratory 7).\nThese addresses can be overwritten through a buffer overflow attack, in which case the program's execution flow can be altered.\nBy overwriting the return address, upon completion of the current function's execution, the program will not return to the calling function's execution but will instead \"jump\" to another address within the executable where execution will continue.\nThis event can lead to undefined behavior of the program if the jump address has not been calculated correctly."),(0,n.yg)("p",null,"The goal of an attacker is to take control of a system by gaining access to a shell from which they can run commands.\nThis can be achieved by overwriting the return address, using a system call through which a shell can be opened on the system where the executable is running (more details in the OS course)."),(0,n.yg)("h2",{id:"how-do-we-protect-against-buffer-overflow-attacks"},"How Do We Protect Against Buffer Overflow Attacks?"),(0,n.yg)("p",null,"There are many ways to protect an executable from these types of attacks, most of which you will study in detail in the OS course next year.\nA good practice against this type of attack is to avoid using insecure functions, such as those mentioned above.\nMore details on best practices against buffer overflow attacks can be found ",(0,n.yg)("a",{parentName:"p",href:"https://security.web.cern.ch/recommendations/en/codetools/c.shtml"},"here"),"."),(0,n.yg)("p",null,'Often, best practices prove to be insufficient in the "battle" against hackers, which is why several executable protection mechanisms have been invented by manipulating the code and its position within the executable (',(0,n.yg)("em",{parentName:"p"},"Position Independent Code")," - ",(0,n.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Position-independent_code"},"PIC"),"), through address randomization (",(0,n.yg)("em",{parentName:"p"},"Address Space Layout Randomization")," - ",(0,n.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Address_space_layout_randomization"},"ASLR"),"), or by introducing additional checks in the code to detect potential attacks."),(0,n.yg)("p",null,"These checks are performed by introducing special values, called ",(0,n.yg)("strong",{parentName:"p"},"canaries"),", on the stack between the buffer and the function's return address.\nThese values are generated and placed within the executable by the compiler and differ with each run of the executable.\nWhen an attacker tries to overwrite the return address, they will also overwrite the canary value, and before exiting the current function call, it will be checked whether that value has been modified or not.\nIf it has been modified, it means that a buffer overflow has occurred, and the program execution will be interrupted."),(0,n.yg)("p",null,"This mechanism is called ",(0,n.yg)("strong",{parentName:"p"},"Stack Smashing Protection")," or ",(0,n.yg)("strong",{parentName:"p"},"Stack Guard"),". More details about Stack Guard and buffer overflow attacks can be found ",(0,n.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Buffer_overflow"},"here"),"."))}d.isMDXComponent=!0}}]);