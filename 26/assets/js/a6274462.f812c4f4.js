"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[7255],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>c});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=r.createContext({}),l=function(e){var t=r.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(f.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,f=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,c=u["".concat(f,".").concat(d)]||u[d]||g[d]||o;return n?r.createElement(c,i(i({ref:t},p),{},{components:n})):r.createElement(c,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var f in t)hasOwnProperty.call(t,f)&&(s[f]=t[f]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3003:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(8168),a=(n(6540),n(5680));const o={},i="Buffer Overflow with Data from Standard Input and `fgets()`",s={unversionedId:"Lab 11 - Buffer Management. Buffer Overflow/Introduction to Buffers/Drills/Tasks/Read Using fgets/README",id:"Lab 11 - Buffer Management. Buffer Overflow/Introduction to Buffers/Drills/Tasks/Read Using fgets/README",title:"Buffer Overflow with Data from Standard Input and `fgets()`",description:"As mentioned in the Read Using gets task, the gets() function is prohibited in current programs.",source:"@site/docs/Lab 11 - Buffer Management. Buffer Overflow/Introduction to Buffers/Drills/Tasks/Read Using fgets/README.md",sourceDirName:"Lab 11 - Buffer Management. Buffer Overflow/Introduction to Buffers/Drills/Tasks/Read Using fgets",slug:"/Lab 11 - Buffer Management. Buffer Overflow/Introduction to Buffers/Drills/Tasks/Read Using fgets/",permalink:"/hardware-software-interface/26/Lab 11 - Buffer Management. Buffer Overflow/Introduction to Buffers/Drills/Tasks/Read Using fgets/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Reading Data from Standard Input",permalink:"/hardware-software-interface/26/Lab 11 - Buffer Management. Buffer Overflow/Introduction to Buffers/Drills/Tasks/Read Using gets/"},next:{title:"Buffer Overflow Vulnerabilities",permalink:"/hardware-software-interface/26/Lab 11 - Buffer Management. Buffer Overflow/Buffer Overflow Vulnerabilities/"}},f={},l=[],p={toc:l},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"buffer-overflow-with-data-from-standard-input-and-fgets"},"Buffer Overflow with Data from Standard Input and ",(0,a.yg)("inlineCode",{parentName:"h1"},"fgets()")),(0,a.yg)("p",null,"As mentioned in the ",(0,a.yg)("a",{parentName:"p",href:"../Read%20Using%20gets/README"},(0,a.yg)("strong",{parentName:"a"},"Read Using gets")," task"),", the ",(0,a.yg)("inlineCode",{parentName:"p"},"gets()")," function is prohibited in current programs.\nInstead, the ",(0,a.yg)("inlineCode",{parentName:"p"},"fgets()")," function can be used.\nOpen the source code file ",(0,a.yg)("inlineCode",{parentName:"p"},"read_stdin_fgets.asm")," from the ",(0,a.yg)("inlineCode",{parentName:"p"},"drills/tasks/read-stdin-fgets/support/"),".\nIn the ",(0,a.yg)("inlineCode",{parentName:"p"},"read_stdin_fgets.asm")," source file, follow ",(0,a.yg)("strong",{parentName:"p"},"TODO 1")," and change the ",(0,a.yg)("inlineCode",{parentName:"p"},"gets()")," function call to the ",(0,a.yg)("inlineCode",{parentName:"p"},"fgets()")," function call."),(0,a.yg)("p",null,"For the ",(0,a.yg)("inlineCode",{parentName:"p"},"fgets()")," call, read from standard input.\nAs an argument for the third parameter of ",(0,a.yg)("inlineCode",{parentName:"p"},"fgets()")," (of type ",(0,a.yg)("inlineCode",{parentName:"p"},"FILE *"),") you will use standard input.\nTo specify standard input, use the ",(0,a.yg)("inlineCode",{parentName:"p"},"stdin")," stream.\nYou will need to mark it as external using, at the beginning of the assembly language file, the construction:"),(0,a.yg)("blockquote",null,(0,a.yg)("pre",{parentName:"blockquote"},(0,a.yg)("code",{parentName:"pre",className:"language-Assembly"},"extern stdin\n"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"stdin")," is an address; to call ",(0,a.yg)("inlineCode",{parentName:"p"},"fgets()")," with standard input,\nit is sufficient to pass on the stack the value from the ",(0,a.yg)("inlineCode",{parentName:"p"},"stdin")," address, i.e., using the construction:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Assembly"},"push dword [stdin]\n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"HINT")," Follow the manual page of the ",(0,a.yg)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man3/fgets.3.html"},(0,a.yg)("inlineCode",{parentName:"a"},"fgets()"))," function to find out what parameters it receives.\n",(0,a.yg)("strong",{parentName:"p"},"TIP")," Since the ",(0,a.yg)("inlineCode",{parentName:"p"},"fgets()")," function has 3 parameters (which occupy ",(0,a.yg)("inlineCode",{parentName:"p"},"3 \xd7 4 = 12")," bytes) you will need to use ",(0,a.yg)("inlineCode",{parentName:"p"},"add esp, 12")," after the function call,\nin restoring the stack, instead of ",(0,a.yg)("inlineCode",{parentName:"p"},"add esp, 4")," as in the case of the program above that used ",(0,a.yg)("inlineCode",{parentName:"p"},"gets()"),".\n",(0,a.yg)("strong",{parentName:"p"},"IMPORTANT")," Do not modify the assembly language code. Transmit the input string in the appropriate format to the standard input\nto generate a buffer overflow and to obtain the required result.")),(0,a.yg)("p",null,"Follow ",(0,a.yg)("strong",{parentName:"p"},"TODO 2")," in code and call ",(0,a.yg)("em",{parentName:"p"},"fgets()")," instead of gets, but keep in mind that you will have to push a value big enough for the buffer size in order to produce an overflow.\nThe result should be the same like in the ",(0,a.yg)("em",{parentName:"p"},"read_stdin_gets")," task."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"TIP")," As above, to transmit the input string for the program, it is recommended to write it in a file\nand then redirect that file to the corresponding program command.\nRedirecting the ",(0,a.yg)("inlineCode",{parentName:"p"},"payload")," file to the program is done using a command like:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Bash"},"./read_stdin_fgets < payload\n")),(0,a.yg)("p",null,"What happens if you push ",(0,a.yg)("em",{parentName:"p"},"buffer_length - 1"),", instead of ",(0,a.yg)("em",{parentName:"p"},"buffer_length"),".\nWhy ",(0,a.yg)("em",{parentName:"p"},"var is 0x004F4C46")," now?"),(0,a.yg)("p",null,"If you're having difficulties solving this exercise, go through ",(0,a.yg)("a",{parentName:"p",href:"/hardware-software-interface/26/Lab%2011%20-%20Buffer%20Management.%20Buffer%20Overflow/Introduction%20to%20Buffers/Reading/#How-to-make-a-Buffer-Overflow?"},"this")," reading material."))}g.isMDXComponent=!0}}]);