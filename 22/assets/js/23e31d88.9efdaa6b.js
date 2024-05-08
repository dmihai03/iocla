"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[6589],{5680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,y=p["".concat(i,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(y,s(s({ref:t},d),{},{components:n})):r.createElement(y,s({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(8168),a=(n(6540),n(5680));const o={},s="Stack addressing",c={unversionedId:"Lab 8 - The Stack/Introduction/Guides/Stack Addressing/README",id:"Lab 8 - The Stack/Introduction/Guides/Stack Addressing/README",title:"Stack addressing",description:"The stack_addressing.asm file demonstrates how data is stored on the stack, and especially in what order.",source:"@site/docs/Lab 8 - The Stack/Introduction/Guides/Stack Addressing/README.md",sourceDirName:"Lab 8 - The Stack/Introduction/Guides/Stack Addressing",slug:"/Lab 8 - The Stack/Introduction/Guides/Stack Addressing/",permalink:"/hardware-software-interface/22/Lab 8 - The Stack/Introduction/Guides/Stack Addressing/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Stack operations",permalink:"/hardware-software-interface/22/Lab 8 - The Stack/Introduction/Guides/Stack Operations/"},next:{title:"Drills",permalink:"/hardware-software-interface/22/Lab 8 - The Stack/Introduction/Drills/"}},i={},l=[],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"stack-addressing"},"Stack addressing"),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"stack_addressing.asm")," file demonstrates how data is stored on the stack, and especially in what order."),(0,a.yg)("p",null,"Here's what an usual output for the compiled program would be:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"0xff99fba8: 0xf7f46020\n0xff99fba4: 0xa\n0xff99fba0: 0xb\n0xff99fb9c: 0xc\n0xff99fb98: 0xd\n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Note:")," The last 4 values are the ones we pushed on stack.\nWhat is the first one?")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Answer:")," It is the old EBP we push at the start of the function.")),(0,a.yg)("p",null,"For covenince, here's the contents of the file.\nTo play around with it, download the lab locally."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-assembly"},'%include "printf32.asm"\n\nsection .text\n\nextern printf\nglobal main\nmain:\n    push ebp\n    mov ebp, esp\n\n    push dword 10\n    push dword 11\n    push dword 12\n    push dword 13\n\n    mov eax, ebp\nprint_stack:\n    PRINTF32 `0x\\x0`\n    PRINTF32 `%x\\x0`, eax\n    PRINTF32 `: 0x\\x0`\n    PRINTF32 `%x\\n\\x0`, [eax]\n\n    sub eax, 4\n    cmp eax, esp\n    jge print_stack\n\n    xor eax, eax\n    leave\n    ret\n')))}u.isMDXComponent=!0}}]);