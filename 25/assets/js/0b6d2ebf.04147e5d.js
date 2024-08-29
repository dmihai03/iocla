"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[1344],{5680:(e,r,n)=>{n.d(r,{xA:()=>s,yg:()=>d});var t=n(6540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),u=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},s=function(e){var r=u(e.components);return t.createElement(p.Provider,{value:r},e.children)},f="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,d=f["".concat(p,".").concat(m)]||f[m]||c[m]||i;return n?t.createElement(d,l(l({ref:r},s),{},{components:n})):t.createElement(d,l({ref:r},s))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o[f]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6813:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var t=n(8168),a=(n(6540),n(5680));const i={},l="Writeup",o={unversionedId:"Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/Tasks/Overwrite Return Address/solution/Readme",id:"Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/Tasks/Overwrite Return Address/solution/Readme",title:"Writeup",description:"- First use this command to scan the executable:",source:"@site/docs/Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/Tasks/Overwrite Return Address/solution/Readme.md",sourceDirName:"Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/Tasks/Overwrite Return Address/solution",slug:"/Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/Tasks/Overwrite Return Address/solution/",permalink:"/hardware-software-interface/25/Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/Tasks/Overwrite Return Address/solution/",draft:!1,tags:[],version:"current",frontMatter:{}},p={},u=[],s={toc:u},f="wrapper";function c(e){let{components:r,...n}=e;return(0,a.yg)(f,(0,t.A)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"writeup"},"Writeup"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"First use this command to scan the executable:")),(0,a.yg)("blockquote",null,(0,a.yg)("pre",{parentName:"blockquote"},(0,a.yg)("code",{parentName:"pre",className:"language-Bash"},"objdump -M intel -d break_this\n"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"The ",(0,a.yg)("inlineCode",{parentName:"p"},"main()")," function only calls ",(0,a.yg)("inlineCode",{parentName:"p"},"read_buffer()"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"This function reads the length of a buffer from standard input into a variable ",(0,a.yg)("inlineCode",{parentName:"p"},"n"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Then it reads the buffer itself (",(0,a.yg)("inlineCode",{parentName:"p"},"char buffer[64]"),").")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Because ",(0,a.yg)("inlineCode",{parentName:"p"},"fgets()")," reads at most ",(0,a.yg)("inlineCode",{parentName:"p"},"n - 1")," characters, we can set ",(0,a.yg)("inlineCode",{parentName:"p"},"n")," to a value bigger than the length of the buffer, so an overflow may be possible.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"We will set ",(0,a.yg)("inlineCode",{parentName:"p"},"n")," to a large enough value: ",(0,a.yg)("inlineCode",{parentName:"p"},"100"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"magic_function()")," starts at address ",(0,a.yg)("inlineCode",{parentName:"p"},"0x08048596"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"From the first 4 lines from ",(0,a.yg)("inlineCode",{parentName:"p"},"read_buffer()")," we get that: ",(0,a.yg)("inlineCode",{parentName:"p"},"ebp")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"edi")," get pushed on the stack, then the stack is extended by ",(0,a.yg)("inlineCode",{parentName:"p"},"0x54")," = ",(0,a.yg)("inlineCode",{parentName:"p"},"84"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"So we must print ",(0,a.yg)("inlineCode",{parentName:"p"},"88 + 4 + 4 = 92")," dummy characters ",(0,a.yg)("inlineCode",{parentName:"p"},"A")," and then the address of ",(0,a.yg)("inlineCode",{parentName:"p"},"magic_function()")," in little-endian encoding"))),(0,a.yg)("p",null,"For further explanation:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-C"},'int n;                                          // 4 bytes\nunsigned int disorienting_var = 0xDEADBEEF;     // 4 bytes\nchar buffer[64] = "\\0";                         // 64 bytes\nsize_t i, len;                                  // 16 bytes (8 each one)\n')),(0,a.yg)("p",null,"Sum that up and add another 4 for ",(0,a.yg)("inlineCode",{parentName:"p"},"ebp")," => 92"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Bash"},'python2.7 -c \'print "100\\n" + "A" * 92 + "\\x96\\x85\\x04\\x08"\' > payload\n')))}c.isMDXComponent=!0}}]);