"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[153],{4852:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(9231);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),m=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(r),c=n,h=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9524:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=r(4011),n=(r(9231),r(4852));const o={id:"methods"},i="Methods",l={unversionedId:"methods",id:"methods",title:"Methods",description:"All methods split into categories.",source:"@site/../src/index.md",sourceDirName:".",slug:"/",permalink:"/methods/",draft:!1,editUrl:"https://github.com/effector/patronum/tree/main/src/../src/index.md",tags:[],version:"current",frontMatter:{id:"methods"},sidebar:"methodsSidebar",next:{title:"and",permalink:"/methods/and/"}},s={},m=[{value:"Predicate",id:"predicate",level:3},{value:"Effect",id:"effect",level:3},{value:"Timeouts",id:"timeouts",level:3},{value:"Combination/Decomposition",id:"combinationdecomposition",level:3},{value:"Debug",id:"debug",level:3}],p={toc:m},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"methods"},"Methods"),(0,n.kt)("p",null,"All methods split into categories."),(0,n.kt)("h3",{id:"predicate"},"Predicate"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/and/"},"and")," \u2014 Checks all stores by truthy value."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/condition/"},"condition")," \u2014 Trigger then or else by condition."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/either/"},"either")," \u2014 Selects just one value based on condition."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/empty/"},"empty")," \u2014 Checks the store for ",(0,n.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/equals/"},"equals")," \u2014 Checks the store for some value."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/every/"},"every")," \u2014 Checks that state in each store passes the predicate test."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/not/"},"not")," \u2014 Inverts store boolean-value."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/or/"},"or")," \u2014 Checks at least one store for truthy value."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/once/"},"once")," \u2014 Runs only once."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/reset/"},"reset")," \u2014 Reset all passed stores by clock."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/some/"},"some")," \u2014 Checks that state in at least one store passes the predicate test.")),(0,n.kt)("h3",{id:"effect"},"Effect"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/in-flight/"},"inFlight")," \u2014 Counts all pending effects"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/pending/"},"pending")," \u2014 Checks that has effects in pending state."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/status/"},"status")," \u2014 Return text representation of effect state.")),(0,n.kt)("h3",{id:"timeouts"},"Timeouts"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/debounce/"},"debounce")," \u2014 Creates event which waits until time passes after previous trigger."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/delay/"},"delay")," \u2014 Delays the call of the event by defined timeout."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/interval/"},"interval")," \u2014 Creates a dynamic interval with any timeout."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/throttle/"},"throttle")," \u2014 Creates event which triggers at most once per timeout."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/time/"},"time")," \u2014 Allows reading current timestamp by triggering clock.")),(0,n.kt)("h3",{id:"combinationdecomposition"},"Combination/Decomposition"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/combine-events/"},"combineEvents")," \u2014 Wait for all passed events is triggered."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/format/"},"format")," \u2014 Combine stores to a string literal."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/readonly/"},"readonly")," \u2014 Create readonly version of store or event."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/reshape/"},"reshape")," \u2014 Destructure one store to different stores"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/snapshot/"},"snapshot")," \u2014 Create store value snapshot."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/split-map/"},"splitMap")," \u2014 Split event to different events and map data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/spread/"},"spread")," \u2014 Send fields from object to same targets."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/previous/"},"previous")," - Get previous value of store.")),(0,n.kt)("h3",{id:"debug"},"Debug"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/methods/debug/"},"debug")," \u2014 Log triggers of passed units.")))}d.isMDXComponent=!0}}]);