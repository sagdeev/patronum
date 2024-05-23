"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[609],{4852:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(9231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(4011),a=(n(9231),n(4852));const i={},l="once",o={unversionedId:"once/readme",id:"once/readme",title:"once",description:"target = once(source)",source:"@site/../src/once/readme.md",sourceDirName:"once",slug:"/once/",permalink:"/methods/once/",draft:!1,editUrl:"https://github.com/effector/patronum/tree/main/src/../src/once/readme.md",tags:[],version:"current",frontMatter:{},sidebar:"methodsSidebar",previous:{title:"not",permalink:"/methods/not/"},next:{title:"or",permalink:"/methods/or/"}},c={},s=[{value:"<code>target = once(source)</code>",id:"target--oncesource",level:2},{value:"Motivation",id:"motivation",level:3},{value:"Formulae",id:"formulae",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"Alternative",id:"alternative",level:4},{value:"<code>target = once({ source, reset })</code>",id:"target--once-source-reset-",level:2},{value:"Motivation",id:"motivation-1",level:3},{value:"Formulae",id:"formulae-1",level:3},{value:"Arguments",id:"arguments-1",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Example",id:"example-1",level:3}],u={toc:s},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"once"},"once"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { once } from 'patronum';\n// or\nimport { once } from 'patronum/once';\n")),(0,a.kt)("h2",{id:"target--oncesource"},(0,a.kt)("inlineCode",{parentName:"h2"},"target = once(source)")),(0,a.kt)("h3",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"The method allows to do something only on the first ever trigger of ",(0,a.kt)("inlineCode",{parentName:"p"},"source"),".\nIt is useful to trigger effects or other logic only once per application's lifetime."),(0,a.kt)("h3",{id:"formulae"},"Formulae"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"target = once(source);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When ",(0,a.kt)("inlineCode",{parentName:"li"},"source")," is triggered, launch ",(0,a.kt)("inlineCode",{parentName:"li"},"target")," with data from ",(0,a.kt)("inlineCode",{parentName:"li"},"source"),", but only once.")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"source")," ",(0,a.kt)("inlineCode",{parentName:"li"},"(Event<T>")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"Effect<T>")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"Store<T>)")," \u2014 Source unit, data from this unit is used by ",(0,a.kt)("inlineCode",{parentName:"li"},"target"),".")),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"target")," ",(0,a.kt)("inlineCode",{parentName:"li"},"Event<T>")," \u2014 The event that will be triggered exactly once after ",(0,a.kt)("inlineCode",{parentName:"li"},"source")," is triggered.")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const messageReceived = createEvent<string>();\nconst firstMessageReceived = once(messageReceived);\n\nfirstMessageReceived.watch((message) =>\n  console.log('First message received:', message),\n);\n\nmessageReceived('Hello'); // First message received: Hello\nmessageReceived('World');\n")),(0,a.kt)("h4",{id:"alternative"},"Alternative"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createGate } from 'effector-react';\n\nconst PageGate = createGate();\n\nsample({\n  source: once(PageGate.open),\n  target: fetchDataFx,\n});\n")),(0,a.kt)("h2",{id:"target--once-source-reset-"},(0,a.kt)("inlineCode",{parentName:"h2"},"target = once({ source, reset })")),(0,a.kt)("h3",{id:"motivation-1"},"Motivation"),(0,a.kt)("p",null,"This overload may receive ",(0,a.kt)("inlineCode",{parentName:"p"},"reset")," in addition to ",(0,a.kt)("inlineCode",{parentName:"p"},"source"),". If ",(0,a.kt)("inlineCode",{parentName:"p"},"reset")," is fired,\n",(0,a.kt)("inlineCode",{parentName:"p"},"target")," will be allowed to trigger one more time, when ",(0,a.kt)("inlineCode",{parentName:"p"},"source")," is called."),(0,a.kt)("h3",{id:"formulae-1"},"Formulae"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"target = once({ source, reset });\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When ",(0,a.kt)("inlineCode",{parentName:"li"},"source")," is triggered, launch ",(0,a.kt)("inlineCode",{parentName:"li"},"target")," with data from ",(0,a.kt)("inlineCode",{parentName:"li"},"source"),", but only once."),(0,a.kt)("li",{parentName:"ul"},"When ",(0,a.kt)("inlineCode",{parentName:"li"},"reset")," is triggered, let ",(0,a.kt)("inlineCode",{parentName:"li"},"once")," be reset to the initial state and allow ",(0,a.kt)("inlineCode",{parentName:"li"},"target")," to be triggered again upon ",(0,a.kt)("inlineCode",{parentName:"li"},"source")," being called.")),(0,a.kt)("h3",{id:"arguments-1"},"Arguments"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"source")," ",(0,a.kt)("inlineCode",{parentName:"li"},"(Event<T>")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"Effect<T>")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"Store<T>)")," \u2014 Source unit, data from this unit is used by ",(0,a.kt)("inlineCode",{parentName:"li"},"target"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"reset")," ",(0,a.kt)("inlineCode",{parentName:"li"},"(Event")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"Effect")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"Store)")," \u2014 A unit that resets ",(0,a.kt)("inlineCode",{parentName:"li"},"once")," to the initial state, allowing ",(0,a.kt)("inlineCode",{parentName:"li"},"target")," to be triggered again.")),(0,a.kt)("h3",{id:"returns-1"},"Returns"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"target")," ",(0,a.kt)("inlineCode",{parentName:"li"},"Event<T>")," \u2014 The event that will be triggered once after ",(0,a.kt)("inlineCode",{parentName:"li"},"source")," is triggered, until ",(0,a.kt)("inlineCode",{parentName:"li"},"once")," is reset by calling ",(0,a.kt)("inlineCode",{parentName:"li"},"reset"),".")),(0,a.kt)("h3",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createGate } from 'effector-react';\n\nconst PageGate = createGate();\n\nsample({\n  source: once({\n    source: PageGate.open,\n    reset: fetchDataFx.fail,\n  }),\n  target: fetchDataFx,\n});\n")))}p.isMDXComponent=!0}}]);