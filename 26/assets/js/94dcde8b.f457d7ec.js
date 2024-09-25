"use strict";(self.webpackChunkhardware_software_interface=self.webpackChunkhardware_software_interface||[]).push([[996],{5680:(e,n,i)=>{i.d(n,{xA:()=>c,yg:()=>m});var a=i(6540);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,a,t=function(e,n){if(null==e)return{};var i,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)i=l[a],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)i=l[a],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var s=a.createContext({}),p=function(e){var n=a.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var i=e.components,t=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(i),d=t,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||l;return i?a.createElement(m,r(r({ref:n},c),{},{components:i})):a.createElement(m,r({ref:n},c))}));function m(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=i.length,r=new Array(l);r[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:t,r[1]=o;for(var p=2;p<l;p++)r[p]=i[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},1286:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=i(8168),t=(i(6540),i(5680));const l={},r="Linking",o={unversionedId:"Lab 12 - Linking/File Linking/Reading/README",id:"Lab 12 - Linking/File Linking/Reading/README",title:"Linking",description:"Linking is the final phase of the building process.",source:"@site/docs/Lab 12 - Linking/File Linking/Reading/README.md",sourceDirName:"Lab 12 - Linking/File Linking/Reading",slug:"/Lab 12 - Linking/File Linking/Reading/",permalink:"/hardware-software-interface/26/Lab 12 - Linking/File Linking/Reading/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"File Linking",permalink:"/hardware-software-interface/26/Lab 12 - Linking/File Linking/"},next:{title:"Drills",permalink:"/hardware-software-interface/26/Lab 12 - Linking/File Linking/Drills/"}},s={},p=[{value:"Linker Invocation",id:"linker-invocation",level:2},{value:"File Inspection",id:"file-inspection",level:2},{value:"Feedback",id:"feedback",level:2}],c={toc:p},u="wrapper";function g(e){let{components:n,...i}=e;return(0,t.yg)(u,(0,a.A)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"linking"},"Linking"),(0,t.yg)("p",null,"Linking is the final phase of the building process.\nLinking combines multiple object files into an executable file."),(0,t.yg)("p",null,"To obtain an executable file from object files, the linker performs the following actions:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Symbol resolution: locating the undefined symbols of one object file in other object files."),(0,t.yg)("li",{parentName:"ol"},"Section merging: merging sections of the same type from different object files into a single section in the executable file."),(0,t.yg)("li",{parentName:"ol"},"Address binding: after merging, the effective address symbols within the executable file can be established."),(0,t.yg)("li",{parentName:"ol"},"Symbol relocation: once the symbol addresses are set, the instructions and data referring to those addresses in the executable must be updated."),(0,t.yg)("li",{parentName:"ol"},"Entry point establishment: specifying the address of the first instruction to be executed.")),(0,t.yg)("h2",{id:"linker-invocation"},"Linker Invocation"),(0,t.yg)("p",null,"The linker is generally invoked by the compilation utility (",(0,t.yg)("inlineCode",{parentName:"p"},"gcc"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"clang"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"cl"),").\nThus, invoking the linker is transparent to the user.\nIn specific cases, such as creating a kernel image or images for embedded systems, the user will invoke the linker directly."),(0,t.yg)("p",null,"If we have a source C file ",(0,t.yg)("inlineCode",{parentName:"p"},"app.c"),", we will use the compiler to obtain the object file ",(0,t.yg)("inlineCode",{parentName:"p"},"app.o"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"gcc -c -o app.o app.c\n")),(0,t.yg)("p",null,"Then, to obtain the executable file ",(0,t.yg)("inlineCode",{parentName:"p"},"app")," from the object file ",(0,t.yg)("inlineCode",{parentName:"p"},"app.o"),", we use the ",(0,t.yg)("inlineCode",{parentName:"p"},"gcc")," utility again:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"gcc -o app app.o\n")),(0,t.yg)("p",null,"In the background, ",(0,t.yg)("inlineCode",{parentName:"p"},"gcc")," will invoke the linker and build the executable ",(0,t.yg)("inlineCode",{parentName:"p"},"app"),".\nThe linker will also link against the standard C library (libc)."),(0,t.yg)("p",null,"The linking process will work only if the file ",(0,t.yg)("inlineCode",{parentName:"p"},"app.c")," has the ",(0,t.yg)("inlineCode",{parentName:"p"},"main()")," function defined, which is the main function of the program. Linked files must have a single ",(0,t.yg)("inlineCode",{parentName:"p"},"main()")," function in order to produce an executable."),(0,t.yg)("p",null,"If we have multiple C source files, we invoke the compiler for each file and then the linker:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"gcc -c -o helpers.o helpers.c\ngcc -c -o app.o app.c\ngcc -o app app.o helpers.o\n")),(0,t.yg)("p",null,"The last command is the linking command, which links the object files ",(0,t.yg)("inlineCode",{parentName:"p"},"app.o")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"helpers.o")," into the executable file ",(0,t.yg)("inlineCode",{parentName:"p"},"app"),"."),(0,t.yg)("p",null,"In the case of C++ source files, we will use the ",(0,t.yg)("inlineCode",{parentName:"p"},"g++")," command:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"g++ -c -o helpers.o helpers.cpp\ng++ -c -o app.o app.cpp\ng++ -o app app.o helpers.o\n")),(0,t.yg)("p",null,"We can also use the ",(0,t.yg)("inlineCode",{parentName:"p"},"gcc")," command for linking, specifying linking with the standard C++ library (libc++):"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"gcc -o app app.o helpers.o -lstdc++\n")),(0,t.yg)("p",null,"The Linux linking utility, ",(0,t.yg)("inlineCode",{parentName:"p"},"ld"),", is invoked transparently by ",(0,t.yg)("inlineCode",{parentName:"p"},"gcc")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"g++"),".\nTo see how the linker is invoked, we use the ",(0,t.yg)("inlineCode",{parentName:"p"},"-v")," option of the ",(0,t.yg)("inlineCode",{parentName:"p"},"gcc")," utility, with the following output:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"/usr/lib/gcc/x86_64-linux-gnu/7/collect2 -plugin /usr/lib/gcc/x86_64-linux-gnu/7/liblto_plugin.so\n-plugin-opt=/usr/lib/gcc/x86_64-linux-gnu/7/lto-wrapper -plugin-opt=-fresolution=/tmp/ccwnf5NM.res\n-plugin-opt=-pass-through=-lgcc -plugin-opt=-pass-through=-lgcc_s -plugin-opt=-pass-through=-lc\n-plugin-opt=-pass-through=-lgcc -plugin-opt=-pass-through=-lgcc_s --build-id --eh-frame-hdr -m elf_i386 --hash-style=gnu\n--as-needed -dynamic-linker /lib/ld-linux.so.2 -z relro -o hello\n/usr/lib/gcc/x86_64-linux-gnu/7/../../../i386-linux-gnu/crt1.o\n/usr/lib/gcc/x86_64-linux-gnu/7/../../../i386-linux-gnu/crti.o /usr/lib/gcc/x86_64-linux-gnu/7/32/crtbegin.o\n-L/usr/lib/gcc/x86_64-linux-gnu/7/32 -L/usr/lib/gcc/x86_64-linux-gnu/7/../../../i386-linux-gnu\n-L/usr/lib/gcc/x86_64-linux-gnu/7/../../../../lib32 -L/lib/i386-linux-gnu -L/lib/../lib32 -L/usr/lib/i386-linux-gnu\n-L/usr/lib/../lib32 -L/usr/lib/gcc/x86_64-linux-gnu/7 -L/usr/lib/gcc/x86_64-linux-gnu/7/../../../i386-linux-gnu\n-L/usr/lib/gcc/x86_64-linux-gnu/7/../../.. -L/lib/i386-linux-gnu -L/usr/lib/i386-linux-gnu hello.o -lgcc --push-state\n--as-needed -lgcc_s --pop-state -lc -lgcc --push-state --as-needed -lgcc_s --pop-state\n/usr/lib/gcc/x86_64-linux-gnu/7/32/crtend.o /usr/lib/gcc/x86_64-linux-gnu/7/../../../i386-linux-gnu/crtn.o\nCOLLECT_GCC_OPTIONS='-no-pie' '-m32' '-v' '-o' 'hello' '-mtune=generic' '-march=i686'\n")),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"collect2")," utility is, in fact, a wrapper around the ",(0,t.yg)("inlineCode",{parentName:"p"},"ld"),' utility.\nThe result of running the command is complex. A "manual" invocation of the ',(0,t.yg)("inlineCode",{parentName:"p"},"ld")," command would look like this:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"ld -dynamic-linker /lib/ld-linux.so.2 -m elf_i386 -o app /usr/lib32/crt1.o /usr/lib32/crti.o app.o helpers.o -lc /usr/lib32/crtn.o\n")),(0,t.yg)("p",null,"The arguments of the above command have the following meanings:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"-dynamic-linker /lib/ld-linux.so.2"),": specifies the dynamic loader/linker used for loading the dynamic executable"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"-m elf_i386"),": links files for the x86 architecture (32-bit, i386)"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"/usr/lib32/crt1.o"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"/usr/lib32/crti.o"),", ",(0,t.yg)("inlineCode",{parentName:"li"},"/usr/lib32/crtn.o"),": represent the C runtime library (",(0,t.yg)("inlineCode",{parentName:"li"},"crt")," - ",(0,t.yg)("em",{parentName:"li"},"C runtime"),") that provides the necessary support for loading the executable"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"-lc"),": links against standard C library (libc)")),(0,t.yg)("h2",{id:"file-inspection"},"File Inspection"),(0,t.yg)("p",null,"To track the linking process, we use static analysis utilities such as ",(0,t.yg)("inlineCode",{parentName:"p"},"nm"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"objdump"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"readelf"),"."),(0,t.yg)("p",null,"We use the ",(0,t.yg)("inlineCode",{parentName:"p"},"nm")," utility to display symbols from an object file or an executable file:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"$ nm hello.o\n00000000 T main\n         U puts\n\n$ nm hello\n0804a01c B __bss_start\n0804a01c b completed.7283\n0804a014 D __data_start\n0804a014 W data_start\n08048370 t deregister_tm_clones\n08048350 T _dl_relocate_static_pie\n080483f0 t __do_global_dtors_aux\n08049f10 t __do_global_dtors_aux_fini_array_entry\n0804a018 D __dso_handle\n08049f14 d _DYNAMIC\n0804a01c D _edata\n0804a020 B _end\n080484c4 T _fini\n080484d8 R _fp_hw\n08048420 t frame_dummy\n08049f0c t __frame_dummy_init_array_entry\n0804861c r __FRAME_END__\n0804a000 d _GLOBAL_OFFSET_TABLE_\n         w __gmon_start__\n080484f0 r __GNU_EH_FRAME_HDR\n080482a8 T _init\n08049f10 t __init_array_end\n08049f0c t __init_array_start\n080484dc R _IO_stdin_used\n080484c0 T __libc_csu_fini\n08048460 T __libc_csu_init\n         U __libc_start_main@@GLIBC_2.0\n08048426 T main\n         U puts@@GLIBC_2.0\n080483b0 t register_tm_clones\n08048310 T _start\n0804a01c D __TMC_END__\n08048360 T __x86.get_pc_thunk.bx\n")),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"nm")," command displays three columns:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"the symbol's address"),(0,t.yg)("li",{parentName:"ul"},"the section and type where the symbol is located"),(0,t.yg)("li",{parentName:"ul"},"the symbol's name")),(0,t.yg)("p",null,"A symbol is the name of a global variable or function.\nIt is used by the linker to make connections between different object modules.\nSymbols are not necessary for executables, which is why executables can be stripped."),(0,t.yg)("p",null,"The symbol's address is actually the offset within a section for object files and is the effective address for executables."),(0,t.yg)("p",null,"The second column specifies the section and type of the symbol.\nIf it is uppercase, then the symbol is exported and can be used by another module.\nIf it is lowercase, then the symbol is not exported and is local to the object module, making it unusable in other modules.\nThus:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"d"),": the symbol is in the initialized data area (",(0,t.yg)("inlineCode",{parentName:"li"},".data"),"), unexported"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"D"),": the symbol is in the initialized data area (",(0,t.yg)("inlineCode",{parentName:"li"},".data"),"), exported"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"t"),": the symbol is in the code area (",(0,t.yg)("inlineCode",{parentName:"li"},".text"),"), unexported"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"T"),": the symbol is in the code area (",(0,t.yg)("inlineCode",{parentName:"li"},".text"),"), exported"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"r"),": the symbol is in the read-only data area (",(0,t.yg)("inlineCode",{parentName:"li"},".rodata"),"), unexported"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"R"),": the symbol is in the read-only data area (",(0,t.yg)("inlineCode",{parentName:"li"},".rodata"),"), exported"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"b"),": the symbol is in the uninitialized data area (",(0,t.yg)("inlineCode",{parentName:"li"},".bss"),"), unexported"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"B"),": the symbol is in the uninitialized data area (",(0,t.yg)("inlineCode",{parentName:"li"},".bss"),"), exported"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"U"),": the symbol is undefined (it is used in the current module but defined in another module)")),(0,t.yg)("p",null,"More information can be found in the manual page for the ",(0,t.yg)("inlineCode",{parentName:"p"},"nm")," utility."),(0,t.yg)("p",null,"Using the ",(0,t.yg)("inlineCode",{parentName:"p"},"objdump")," command, we can disassemble the code of object files and executables.\nThis way, we can see the assembly code and how the modules operate."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"readelf")," command is used to inspect object or executable files. With the ",(0,t.yg)("inlineCode",{parentName:"p"},"readelf")," command, we can view the headers of files.\nAn important piece of information in the header of executable files is the entry point, the address of the first instruction executed:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"$ readelf -h hello\nELF Header:\n  Magic:   7f 45 4c 46 01 01 01 00 00 00 00 00 00 00 00 00\n  Class:                             ELF32\n  Data:                              2's complement, little endian\n  Version:                           1 (current)\n  OS/ABI:                            UNIX - System V\n  ABI Version:                       0\n  Type:                              EXEC (Executable file)\n  Machine:                           Intel 80386\n  Version:                           0x1\n  Entry point address:               0x8048310\n  Start of program headers:          52 (bytes into file)\n  Start of section headers:          8076 (bytes into file)\n  Flags:                             0x0\n  Size of this header:               52 (bytes)\n  Size of program headers:           32 (bytes)\n  Number of program headers:         9\n  Size of section headers:           40 (bytes)\n  Number of section headers:         35\n  Section header string table index: 34\n")),(0,t.yg)("p",null,"Using the ",(0,t.yg)("inlineCode",{parentName:"p"},"readelf")," command, we can see the sections of an executable/object file:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"$ readelf -S hello\nThere are 35 section headers, starting at offset 0x1f8c:\nSection Headers:\n  [Nr] Name              Type            Addr     Off    Size   ES Flg Lk Inf Al\n  [ 0]                   NULL            00000000 000000 000000 00      0   0  0\n  [ 1] .interp           PROGBITS        08048154 000154 000013 00   A  0   0  1\n  [ 2] .note.ABI-tag     NOTE            08048168 000168 000020 00   A  0   0  4\n  [ 3] .note.gnu.build-i NOTE            08048188 000188 000024 00   A  0   0  4\n[...]\n")),(0,t.yg)("p",null,"Also, with the ",(0,t.yg)("inlineCode",{parentName:"p"},"readelf")," command, we can list (dump) the contents of a specific section:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"$ readelf -x .rodata hello\n\nHex dump of section '.rodata':\n  0x080484d8 03000000 01000200 48656c6c 6f2c2057 ........Hello, W\n  0x080484e8 6f726c64 2100                       orld!.\n")),(0,t.yg)("h2",{id:"feedback"},"Feedback"),(0,t.yg)("p",null,"To improve the IOCLA course, its components, and the way it is conducted, your opinions are very helpful to us.\nFor this, please access and complete the feedback form on the website ",(0,t.yg)("a",{parentName:"p",href:"https://curs.upb.ro/"},"curs.upb.ro"),".\nYou need to be logged in and enrolled in the course."),(0,t.yg)("p",null,'The form is anonymous and will be active from January 18, 2021, to January 29, 2021.\nThe results will be visible to the course team only after the exam session ends.\nYou can access the feedback form starting January 18, 2021.\nIt is available via the "Feedback Form" link on the main page of your IOCLA course series.\nIt is not available in the meta-course accessible to all series.'),(0,t.yg)("p",null,"We invite you to evaluate the performance of the IOCLA team and to specify strengths, weaknesses, and your suggestions for improving the course.\nYour feedback helps us enhance the quality of the material in the coming years and to improve the subjects you will take in the future."),(0,t.yg)("p",null,"We will publish an analysis of your feedback at the beginning of the next semester."),(0,t.yg)("p",null,"We are particularly interested in:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"What did you not like, and what do you think did not go well?"),(0,t.yg)("li",{parentName:"ol"},"Why did you not like it, and why do you think it did not go well?"),(0,t.yg)("li",{parentName:"ol"},"What should we do to make things enjoyable and to ensure they go well?")))}g.isMDXComponent=!0}}]);