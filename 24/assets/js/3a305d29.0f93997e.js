"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[3730],{5680:(e,r,n)=>{n.d(r,{xA:()=>s,yg:()=>y});var t=n(6540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=t.createContext({}),u=function(e){var r=t.useContext(f),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},s=function(e){var r=u(e.components);return t.createElement(f.Provider,{value:r},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,f=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,y=c["".concat(f,".").concat(m)]||c[m]||p[m]||i;return n?t.createElement(y,l(l({ref:r},s),{},{components:n})):t.createElement(y,l({ref:r},s))}));function y(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var f in r)hasOwnProperty.call(r,f)&&(o[f]=r[f]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1888:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>f,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var t=n(8168),a=(n(6540),n(5680));const i={},l="Writeup",o={unversionedId:"Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/Tasks/Overflow for Binary File/solution/README",id:"Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/Tasks/Overflow for Binary File/solution/README",title:"Writeup",description:"- We can use Ghidra to disassemble the exec.",source:"@site/docs/Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/Tasks/Overflow for Binary File/solution/README.md",sourceDirName:"Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/Tasks/Overflow for Binary File/solution",slug:"/Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/Tasks/Overflow for Binary File/solution/",permalink:"/hardware-software-interface/24/Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/Tasks/Overflow for Binary File/solution/",draft:!1,tags:[],version:"current",frontMatter:{}},f={},u=[],s={toc:u},c="wrapper";function p(e){let{components:r,...n}=e;return(0,a.yg)(c,(0,t.A)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"writeup"},"Writeup"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"We can use Ghidra to disassemble the exec."),(0,a.yg)("li",{parentName:"ul"},"The number of arguments given to the ",(0,a.yg)("inlineCode",{parentName:"li"},"main()")," function must be equal to 2 (one is the name of the executable file)."),(0,a.yg)("li",{parentName:"ul"},"The second argument (the one given to the executable in the command-line) is passed to the function ",(0,a.yg)("inlineCode",{parentName:"li"},"check_string()"),".")),(0,a.yg)("p",null,"In ",(0,a.yg)("inlineCode",{parentName:"p"},"check_string()"),":"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"local_10")," must be set to ",(0,a.yg)("inlineCode",{parentName:"li"},"0x4E305250")," to call ",(0,a.yg)("inlineCode",{parentName:"li"},"win()")," (carefully, use the little-endian encoding)"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"local_10")," is stored at stack - ",(0,a.yg)("inlineCode",{parentName:"li"},"0x10")),(0,a.yg)("li",{parentName:"ul"},"The buffer is stored at ",(0,a.yg)("inlineCode",{parentName:"li"},"stack - 0x30")),(0,a.yg)("li",{parentName:"ul"},"So the payload should consist of ",(0,a.yg)("inlineCode",{parentName:"li"},"32 (48 - 16)")," ",(0,a.yg)("inlineCode",{parentName:"li"},"'A'")," characters, followed by ",(0,a.yg)("inlineCode",{parentName:"li"},'"\\x50\\x52\\x30\\x4E"'))))}p.isMDXComponent=!0}}]);