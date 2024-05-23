"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[945],{4852:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(9231);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(r),f=a,d=c["".concat(s,".").concat(f)]||c[f]||u[f]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4544:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var n=r(4011),a=(r(9231),r(4852));const o={},i="format",l={unversionedId:"format/readme",id:"format/readme",title:"format",description:"patronum 1.7.0",source:"@site/../src/format/readme.md",sourceDirName:"format",slug:"/format/",permalink:"/methods/format/",draft:!1,editUrl:"https://github.com/effector/patronum/tree/main/src/../src/format/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"methodsSidebar",previous:{title:"every",permalink:"/methods/every/"},next:{title:"inFlight",permalink:"/methods/in-flight/"}},s={},m=[{value:"Motivation",id:"motivation",level:3},{value:"Formulae",id:"formulae",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Example with stores with strings",id:"example-with-stores-with-strings",level:3},{value:"Example with stores with arrays",id:"example-with-stores-with-arrays",level:3}],p={toc:m},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"format"},"format"),(0,a.kt)("admonition",{title:"since",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"patronum 1.7.0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { format } from 'patronum';\n// or\nimport { format } from 'patronum/format';\n")),(0,a.kt)("h3",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"Sometimes you need to combine several stores into one string, but without ",(0,a.kt)("inlineCode",{parentName:"p"},"format")," you need to write boring ",(0,a.kt)("inlineCode",{parentName:"p"},"combine")," with combinator-function."),(0,a.kt)("h3",{id:"formulae"},"Formulae"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"$string = format`parts${$store}`;\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"on each ",(0,a.kt)("inlineCode",{parentName:"li"},"$store")," change recalculate template and update ",(0,a.kt)("inlineCode",{parentName:"li"},"$string"))),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"format")," should be called as ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates"},"tagged template literal function")),(0,a.kt)("p",null,"Each part of template literal will be converted to string by ",(0,a.kt)("inlineCode",{parentName:"p"},"String(argument)"),",\nthat's why format supports ",(0,a.kt)("inlineCode",{parentName:"p"},"Store<boolean | string | number>"),", but also you can pass list of values, and raw values."),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,"Method always returns ",(0,a.kt)("inlineCode",{parentName:"p"},"Store<string>")),(0,a.kt)("h3",{id:"example-with-stores-with-strings"},"Example with stores with strings"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createStore } from 'effector';\nimport { format } from 'patronum';\n\nconst $firstName = createStore('John');\nconst $lastName = createStore('Doe');\n\nconst $fullName = format`${$firstName} ${$lastName}`;\n$fullName.watch(console.log);\n// => John Doe\n")),(0,a.kt)("h3",{id:"example-with-stores-with-arrays"},"Example with stores with arrays"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createStore } from 'effector';\nimport { format } from 'patronum';\n\nconst $list = createStore(['First', 'Second', 'Third']);\n\nconst $string = format`We have: \"${list}\"`;\n$string.watch(console.log);\n// => We have: \"First, Second, Third\"\n")))}u.isMDXComponent=!0}}]);