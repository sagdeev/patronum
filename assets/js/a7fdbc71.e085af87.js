"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[732],{4852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var i=n(9231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=i.createContext({}),p=function(e){var t=i.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(m.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,k=u["".concat(m,".").concat(d)]||u[d]||s[d]||r;return n?i.createElement(k,l(l({ref:t},c),{},{components:n})):i.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(4011),a=(n(9231),n(4852));const r={},l="time",o={unversionedId:"time/readme",id:"time/readme",title:"time",description:"time(clock)",source:"@site/../src/time/readme.md",sourceDirName:"time",slug:"/time/",permalink:"/methods/time/",draft:!1,editUrl:"https://github.com/effector/patronum/tree/main/src/../src/time/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"methodsSidebar",previous:{title:"throttle",permalink:"/methods/throttle/"}},m={},p=[{value:"<code>time(clock)</code>",id:"timeclock",level:2},{value:"Motivation",id:"motivation",level:3},{value:"Formulae",id:"formulae",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"<code>time({clock, getNow, initial})</code>",id:"timeclock-getnow-initial",level:2},{value:"Motivation",id:"motivation-1",level:3},{value:"Formulae",id:"formulae-1",level:3},{value:"Arguments",id:"arguments-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3}],c={toc:p},u="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"time"},"time"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { time } from 'patronum';\n// or\nimport { time } from 'patronum/time';\n")),(0,a.kt)("h2",{id:"timeclock"},(0,a.kt)("inlineCode",{parentName:"h2"},"time(clock)")),(0,a.kt)("admonition",{title:"since",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"patronum 2.1.0\nUse ",(0,a.kt)("inlineCode",{parentName:"p"},"time({ clock })")," with patronum < 2.1.0")),(0,a.kt)("h3",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"The method allow to read current time and write it to store"),(0,a.kt)("h3",{id:"formulae"},"Formulae"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"$time = time(clock);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Initialize ",(0,a.kt)("inlineCode",{parentName:"li"},"$time")," with ",(0,a.kt)("inlineCode",{parentName:"li"},"Date.now()")),(0,a.kt)("li",{parentName:"ul"},"When ",(0,a.kt)("inlineCode",{parentName:"li"},"clock")," is triggered, call ",(0,a.kt)("inlineCode",{parentName:"li"},"Date.now()")," to update ",(0,a.kt)("inlineCode",{parentName:"li"},"$time")," with results")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"clock: Event<any> | Effect<any, any, any> | Store<any>")," \u2014 The unit triggers time reading and updates ",(0,a.kt)("inlineCode",{parentName:"li"},"$time")," store")),(0,a.kt)("p",null,"\u2014 ",(0,a.kt)("inlineCode",{parentName:"p"},"Time")," is a generic type argument used for overriding time reader function. By default, it is ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$time: Store<Time>")," \u2014 Store contains unix timestamp snapshot, updates when ",(0,a.kt)("inlineCode",{parentName:"p"},"clock")," triggers.\nInitialized with ",(0,a.kt)("inlineCode",{parentName:"p"},"Date.now()")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { time } from 'patronum';\n\nconst tick = createEvent();\nconst $time = time(tick);\n\n$time.watch((time) => console.log('time', time));\n// => time 1660293358847\n\ntick();\n// => time 1660293358848\nawait new Promise((res) => setTimeout(res, 100));\ntick();\n// => 1660293358952\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://share.effector.dev/ZKcm1ebv"},"Try it")),(0,a.kt)("h2",{id:"timeclock-getnow-initial"},(0,a.kt)("inlineCode",{parentName:"h2"},"time({clock, getNow, initial})")),(0,a.kt)("admonition",{title:"since",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"patronum 1.7.0")),(0,a.kt)("h3",{id:"motivation-1"},"Motivation"),(0,a.kt)("p",null,"The method allow to read current time and write it to store. Object form allows to use additional parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"getNow")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"initial")),(0,a.kt)("h3",{id:"formulae-1"},"Formulae"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"$time = time({ clock, getNow, initial });\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Initialize ",(0,a.kt)("inlineCode",{parentName:"li"},"$time")," with ",(0,a.kt)("inlineCode",{parentName:"li"},"initial"),", if not present call ",(0,a.kt)("inlineCode",{parentName:"li"},"getNow"),", if not present call ",(0,a.kt)("inlineCode",{parentName:"li"},"Date.now()")),(0,a.kt)("li",{parentName:"ul"},"When ",(0,a.kt)("inlineCode",{parentName:"li"},"clock")," is triggered, call ",(0,a.kt)("inlineCode",{parentName:"li"},"getNow")," to update ",(0,a.kt)("inlineCode",{parentName:"li"},"$time")," with results, if not present use ",(0,a.kt)("inlineCode",{parentName:"li"},"Date.now()"))),(0,a.kt)("h3",{id:"arguments-1"},"Arguments"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"clock: Event<any> | Effect<any, any, any> | Store<any>")," \u2014 The unit triggers time reading and updates ",(0,a.kt)("inlineCode",{parentName:"li"},"$time")," store"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"getNow: () => Time")," \u2014 Optional. A custom function to read time when ",(0,a.kt)("inlineCode",{parentName:"li"},"clock")," triggers. ",(0,a.kt)("strong",{parentName:"li"},"Must be synchronous"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"initial: Time")," \u2014 Optional. Initial state for ",(0,a.kt)("inlineCode",{parentName:"li"},"$time")," store. If not passed ",(0,a.kt)("inlineCode",{parentName:"li"},"getNow")," is called.")),(0,a.kt)("p",null,"\u2014 ",(0,a.kt)("inlineCode",{parentName:"p"},"Time")," is a generic type argument used for overriding time reader function. By default, it is ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h3",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$time: Store<Time>")," \u2014 Store contains unix timestamp snapshot, updates when ",(0,a.kt)("inlineCode",{parentName:"p"},"clock")," triggers.\nIf ",(0,a.kt)("inlineCode",{parentName:"p"},"getNow")," is overridden, contains value this function returns.\nBy default, it is ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),".\nInitialized with ",(0,a.kt)("inlineCode",{parentName:"p"},"initial"),", by default, it is ",(0,a.kt)("inlineCode",{parentName:"p"},"Date.now()")),(0,a.kt)("h3",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { time } from 'patronum';\n\nconst tick = createEvent();\nconst $time = time({ clock: tick });\n\n$time.watch((time) => console.log('time', time));\n// => time 1660293358847\n\ntick();\n// => time 1660293358848\nawait new Promise((res) => setTimeout(res, 100));\ntick();\n// => 1660293358952\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://share.effector.dev/VuhhzWKE"},"Try it")))}s.isMDXComponent=!0}}]);