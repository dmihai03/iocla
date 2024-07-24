"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[5820],{5680:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>f});var t=n(6540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,f=p["".concat(s,".").concat(g)]||p[g]||d[g]||o;return n?t.createElement(f,i(i({ref:r},u),{},{components:n})):t.createElement(f,i({ref:r},u))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8449:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(8168),a=(n(6540),n(5680));const o={},i="Reverse: Old hits",l={unversionedId:"Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Drills/Tasks/Old Hits/README",id:"Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Drills/Tasks/Old Hits/README",title:"Reverse: Old hits",description:"Using Ghidra, as well as gdb, analyze the old-hits/support/old-hits binary and obtain the secret information.",source:"@site/docs/Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Drills/Tasks/Old Hits/README.md",sourceDirName:"Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Drills/Tasks/Old Hits",slug:"/Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Drills/Tasks/Old Hits/",permalink:"/hardware-software-interface/24/Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Drills/Tasks/Old Hits/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Tasks",permalink:"/hardware-software-interface/24/Lab 4 - Toolchain. GOTO/Toolchain for Reverse Engineering/Drills/Tasks/"},next:{title:"Lab 5 - Introduction to Assembly Language",permalink:"/hardware-software-interface/24/Lab 5 - Introduction to Assembly Language/"}},s={},c=[],u={toc:c},p="wrapper";function d(e){let{components:r,...n}=e;return(0,a.yg)(p,(0,t.A)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"reverse-old-hits"},"Reverse: Old hits"),(0,a.yg)("p",null,"Using ",(0,a.yg)("inlineCode",{parentName:"p"},"Ghidra"),", as well as ",(0,a.yg)("inlineCode",{parentName:"p"},"gdb"),", analyze the ",(0,a.yg)("inlineCode",{parentName:"p"},"old-hits/support/old-hits")," binary and obtain the secret information.\nThe program generates a random value and asks you to guess another value calculated based on the aforementioned one."),(0,a.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,a.yg)("a",{parentName:"p",href:"../../../Guides/Ghidra%20Tutorial/README#ghidra-tutorial-decompiling"},"this")," reading material."),(0,a.yg)("p",null,"Note: The following error can occur when running the executable if you don't have ",(0,a.yg)("inlineCode",{parentName:"p"},"libcrypto.so.1.1")," installed on your system:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"./old-hits: error while loading shared libraries: libcrypto.so.1.1: cannot open shared object file: No such file or directory\n")),(0,a.yg)("p",null,"To install ",(0,a.yg)("inlineCode",{parentName:"p"},"libcrypto.so.1.1")," run the following commands:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"wget http://nz2.archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2_amd64.deb\nsudo dpkg -i libssl1.1_1.1.1f-1ubuntu2_amd64.deb\nrm libssl1.1_1.1.1f-1ubuntu2_amd64.deb\n")))}d.isMDXComponent=!0}}]);