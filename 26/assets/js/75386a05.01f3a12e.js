"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[3216],{5680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>d});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var f=n.createContext({}),s=function(e){var r=n.useContext(f),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(f.Provider,{value:r},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,f=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),y=a,d=c["".concat(f,".").concat(y)]||c[y]||p[y]||o;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var f in r)hasOwnProperty.call(r,f)&&(l[f]=r[f]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},2274:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>f,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(8168),a=(t(6540),t(5680));const o={},i="Buffer Overflow for Binary",l={unversionedId:"Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/Tasks/Overflow for Binary File/README",id:"Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/Tasks/Overflow for Binary File/README",title:"Buffer Overflow for Binary",description:"Often, we don't have access to source code and want to discover vulnerabilities in executable files.",source:"@site/docs/Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/Tasks/Overflow for Binary File/README.md",sourceDirName:"Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/Tasks/Overflow for Binary File",slug:"/Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/Tasks/Overflow for Binary File/",permalink:"/hardware-software-interface/26/Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/Tasks/Overflow for Binary File/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Overwrite Return Address",permalink:"/hardware-software-interface/26/Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/Drills/Tasks/Overwrite Return Address/"},next:{title:"Lab 12 - Linking",permalink:"/hardware-software-interface/26/Lab 12 - Linking/"}},f={},s=[{value:"Resources",id:"resources",level:2}],u={toc:s},c="wrapper";function p(e){let{components:r,...t}=e;return(0,a.yg)(c,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"buffer-overflow-for-binary"},"Buffer Overflow for Binary"),(0,a.yg)("p",null,"Often, we don't have access to source code and want to discover vulnerabilities in executable files.\nIn the ",(0,a.yg)("inlineCode",{parentName:"p"},"drills/tasks/overflow-for-binary/support/")," directory of the laboratory resource archive, you will find an executable file.\nUsing ",(0,a.yg)("inlineCode",{parentName:"p"},"ghidra")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"gdb")," for investigation, discover how to exploit the buffer overflow vulnerability to make the program display the message ",(0,a.yg)("strong",{parentName:"p"},"Great success"),"."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"IMPORTANT")," To run ",(0,a.yg)("inlineCode",{parentName:"p"},"ghidra")," on the ",(0,a.yg)("inlineCode",{parentName:"p"},"overflow_in_binary")," executable file, you need to create a new project and import the executable file.\nGhidra will automatically detect the file format.\nRun the analysis of the executable, then search in the Symbol Tree for the ",(0,a.yg)("inlineCode",{parentName:"p"},"main")," function.\n",(0,a.yg)("strong",{parentName:"p"},"HINT")," Identify in the disassembled code how input is passed to the program.\nIdentify where the buffer overflow occurs.\nIdentify the comparison condition you want to trigger.\nThen build the corresponding payload and deliver it in the appropriate format to the program.")),(0,a.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,a.yg)("a",{parentName:"p",href:"/hardware-software-interface/26/Lab%2011%20-%20Buffer%20Management.%20Buffer%20Overflow/Buffer%20Overflow%20Vulnerabilities/Reading/"},"this")," reading material."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"WARNING")," If you try using a payload generated with python and it doesn't work, try simply copying its content in the terminal")),(0,a.yg)("h2",{id:"resources"},"Resources"),(0,a.yg)("p",null,"If you found the laboratory interesting in a positive way, you can learn more about this type of attack, as well as cybersecurity in general, on this ",(0,a.yg)("a",{parentName:"p",href:"https://www.youtube.com/c/LiveOverflow"},"channel"),"."))}p.isMDXComponent=!0}}]);