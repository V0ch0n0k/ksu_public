(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[957],{67737:function(e,t,n){var i={"./en.json":[82724,724],"./uk.json":[6583,583]};function r(e){if(!n.o(i,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=i[e],r=t[0];return n.e(t[1]).then(function(){return n.t(r,19)})}r.keys=function(){return Object.keys(i)},r.id=67737,e.exports=r},13790:function(e,t,n){Promise.resolve().then(n.bind(n,81358)),Promise.resolve().then(n.bind(n,48027)),Promise.resolve().then(n.bind(n,25218)),Promise.resolve().then(n.bind(n,42472)),Promise.resolve().then(n.bind(n,5415)),Promise.resolve().then(n.bind(n,82591))},73105:function(e,t,n){"use strict";n.d(t,{he:function(){return o},k1:function(){return a}});var i=n(16463),r=n(65051);let a=Object.freeze(["uk","en"]),o=Object.freeze({en:"ENG",uk:"УКР"});(0,r.cF)(async e=>{let{locale:t}=e;return a.includes(t)||(0,i.notFound)(),{messages:(await n(67737)("./".concat(t,".json"))).default}})},204:function(e,t,n){"use strict";n.d(t,{jD:function(){return l},rU:function(){return a},tv:function(){return s}});var i=n(5758),r=n(73105);let{Link:a,redirect:o,usePathname:l,useRouter:s}=(0,i.iV)({locales:r.k1})},28449:function(e,t,n){"use strict";n.d(t,{Nr:function(){return o}});var i=n(37061),r=n(46011);let a="IBM Plex Serif",o="IBM Plex Mono",l="Inter",s=i.gray.darkest,c={palette:i,typography:{h1:{fontFamily:a,fontSize:"9dvw",fontWeight:600,lineHeight:1.2,whiteSpace:"pre-wrap",letterSpacing:"-0.02rem",["@media (min-width: ".concat(r.sm,")")]:{fontSize:36},["@media (min-width: ".concat(r.md,")")]:{fontSize:46},["@media (min-width: ".concat(r.lg,")")]:{fontSize:49},color:s},h2:{fontFamily:a,fontSize:30,fontWeight:500,lineHeight:1.3,whiteSpace:"pre-wrap",letterSpacing:"-0.01rem",["@media (min-width: ".concat(r.sm,")")]:{fontSize:32},["@media (m-width: ".concat(r.md,")")]:{fontSize:34},["@media (min-width: ".concat(r.lg,")")]:{fontSize:36},color:s},h3:{fontFamily:a,fontSize:22,fontWeight:500,lineHeight:1.3,whiteSpace:"pre-wrap",letterSpacing:"-0.01rem",["@media (min-width: ".concat(r.lg,")")]:{fontSize:32},color:s},h4:{fontFamily:a,fontSize:24,fontWeight:500,lineHeight:1.4,whiteSpace:"pre-wrap",letterSpacing:"-0.01rem",color:s},h5:{fontFamily:a,fontSize:20,fontWeight:500,lineHeight:1.4,whiteSpace:"pre-wrap",letterSpacing:"-0.03rem",color:s},h6:{fontFamily:a,fontSize:16,fontWeight:500,lineHeight:1.1,whiteSpace:"pre-wrap",letterSpacing:0,color:s},body1:{fontFamily:o,lineHeight:1.5,fontSize:18,fontWeight:400,whiteSpace:"pre-wrap",letterSpacing:"-0.03rem"},body2:{fontFamily:l,lineHeight:1.5,fontSize:16,whiteSpace:"pre-wrap",letterSpacing:"-0.03rem",color:s},caption:{fontFamily:o,fontSize:14,whiteSpace:"pre-wrap",lineHeight:1.1,letterSpacing:"-0.03rem",color:s}},components:{MuiButton:{styleOverrides:{root:{fontFamily:l,borderRadius:Number.MAX_VALUE,padding:"14px 32px 14px 32px",textTransform:"capitalize",color:(16777215^Number("0x1".concat(i.primary.main))).toString(16).substring(1).toUpperCase()}}},MuiFormLabel:{styleOverrides:{root:{fontFamily:l,fontSize:16,lineHeight:1.4,color:"black",paddingLeft:10,"&.Mui-focused":{paddingLeft:0}}}},MuiInputBase:{styleOverrides:{root:{fontFamily:l,fontSize:16,marginTop:"0 !important",lineHeight:1.4,color:"black",paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.5rem",paddingBottom:"calc(0.5rem + 0.4dvw)","&::after":{borderColor:i.blue+" !important",borderBottomWidth:"1px !important"},"& *":{padding:"0 !important"},["@media (max-width: ".concat(r.xs,")")]:{paddingLeft:"0.5rem",paddingRight:"0.5rem"}},multiline:{paddingBottom:"calc(0.5rem + 0.4dvw + 10px)",height:"auto"}}},MuiFormControl:{styleOverrides:{root:{paddingTop:"0",lineHeight:"1.42857",letterSpacing:"normal","& *":{lineHeight:"1.42857",letterSpacing:"normal"}}}},MuiInputLabel:{styleOverrides:{fontSize:"22px !important",asterisk:{display:"none"},root:{paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.5rem !important",paddingBottom:"calc(0.5rem + 0.4dvw)",["@media (max-width: ".concat(r.xs,")")]:{paddingLeft:"0.5rem",paddingRight:"0.5rem"},"&::after":{content:"'(optional)'",marginLeft:"0.5rem",transition:"opacity 0.25s ease-in-out, width 0s 0.25s ease-in-out"},transform:"none","&.Mui-required":{"&::after":{opacity:0,width:0}},"&.MuiFormLabel-filled":{display:"none !important"},"&.Mui-focused":{"&::after":{opacity:0,width:0}}}}}},breakpoints:{keys:Object.keys(r),values:{...Object.entries(r).map(e=>{let[t,n]=e;return{[t]:parseInt(n)}}).reduce((e,t)=>({...e,...t}),{})}}};t.ZP=c},43447:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=n(57437),r=n(37169),a=n(95635);function o(e){let{direction:t,children:n,className:o="",loaded:l=!0,offset:s=30,duration:c=600,delay:d=0,grow:u=!1,fadeDuration:f,fadeDelay:m}=e;return(0,i.jsxs)(i.Fragment,{children:[l&&(0,i.jsx)(r.Z,{className:{left:"animate-slide-left",right:"animate-slide-right",up:"animate-slide-up",down:"animate-slide-down"}[t]+" translate-".concat(s," ")+o,style:{animationDuration:"".concat(c,"ms"),animationDelay:"".concat(d,"ms")},children:(0,i.jsx)(r.Z,{className:"w-full h-full "+(u?"animate-grow":""),children:(0,i.jsx)(a.Z,{in:!0,timeout:null!=f?f:c,easing:"ease-out",style:{transitionDelay:"".concat(null!=m?m:d,"ms")},children:n})})}),!l&&(0,i.jsx)(r.Z,{className:o+" invisible",children:n})]})}n(2265)},81358:function(e,t,n){"use strict";n.d(t,{default:function(){return u}});var i=n(57437),r=n(32529),a=n(83719),o=n(204),l=n(73105),s=n(18087),c=n(43447),d=n(37061);function u(e){let{color:t}=e,n=(0,s.useLocale)(),u=(0,o.jD)();return(0,i.jsx)(c.Z,{direction:"left",duration:300,delay:800,offset:0,children:(0,i.jsx)(r.Z,{direction:"row",className:"gap-6 h-8   max-xs:!gap-[4dvw]   max-lg:gap-[3dvw]   ",children:l.k1.map(e=>(0,i.jsx)(o.rU,{href:u,locale:e,className:"h-full flex items-center",children:(0,i.jsx)(a.Z,{color:e===n?null!=t?t:"primary":d.gray.default,variant:"body1",fontSize:"1rem",lineHeight:1.5,letterSpacing:"0",className:"transition-colors duration-200",children:l.he[e]})},e))})})}},48027:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var i=n(57437),r=JSON.parse('{"main":"/","about":"/about","news":"/news","contacts":"/contacts"}'),a=n(18087),o=n(37169),l=n(32529),s=n(95635),c=n(83719),d=n(204),u=n(28449),f=n(43447);function m(e){let{exclude:t=[],fontWeight:n=500,fontSize:m=18,className:p="",containerClassName:h="",showCurrent:g=!0,linkContainerClassname:x="",tight:w=!1}=e,y=(0,a.useTranslations)("nav"),S=(0,d.jD)();return(0,i.jsx)(o.Z,{component:"nav",children:(0,i.jsx)(l.Z,{component:"ul",className:h+" justify-between items-end flex-nowrap",children:Object.entries(r).filter(e=>!t.includes(e[0])).map((e,t)=>(0,i.jsxs)(l.Z,{className:x+" w-fit h-fit items-center gap-6",direction:"row",component:"li",children:[S===e[1]&&g?(0,i.jsx)(s.Z,{in:!0,timeout:500,easing:"ease-out",style:{transitionDelay:"".concat(200*t,"ms")},children:(0,i.jsxs)("svg",{width:"27",height:"14",viewBox:"0 0 220 82",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M220 35V47H208V58H196V46H0V36H196V24H208V35H220Z",fill:"currentColor"}),(0,i.jsx)("path",{d:"M196 12H184V24H196V12Z",fill:"currentColor"}),(0,i.jsx)("path",{d:"M184 0H172V12H184V0Z",fill:"currentColor"}),(0,i.jsx)("path",{d:"M196 58H184V70H196V58Z",fill:"currentColor"}),(0,i.jsx)("path",{d:"M184 70H172V82H184V70Z",fill:"currentColor"})]})}):(0,i.jsx)(o.Z,{className:w?"hidden":"w-[27px] h-[14px]"}),(0,i.jsx)(f.Z,{direction:"left",duration:500,delay:200*t,offset:20,className:w?void 0:"h-8",children:(0,i.jsx)(d.rU,{href:e[1],className:"h-full flex items-center",children:(0,i.jsx)(c.Z,{variant:"h6",fontSize:m,fontWeight:n,letterSpacing:"-0.32px",fontFamily:u.Nr,className:"".concat(p," text-black hover:font-[600]"),children:y(e[0])})})},t)]},t))})})}},25218:function(e,t,n){"use strict";n.r(t),n.d(t,{boxClasses:function(){return r.Z},default:function(){return i.Z}});var i=n(37169),r=n(77126)},42472:function(e,t,n){"use strict";n.d(t,{default:function(){return i.Z}});var i=n(95635)},5415:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i.Z},stackClasses:function(){return r}});var i=n(32529),r=(0,n(34535).Z)("MuiStack",["root"])},82591:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i.Z},getTypographyUtilityClass:function(){return r.f},typographyClasses:function(){return r.Z}});var i=n(83719),r=n(98958)},37061:function(e){"use strict";e.exports=JSON.parse('{"primary":{"main":"#000000"},"secondary":{"main":"#FEFFE6"},"info":{"main":"#D5DAFF"},"button":{"hover-primary":"#2B48FF","hover-secondary":"white"},"gray":{"darkest":"#16161D","darker":"#62626A","default":"#AAAAAD","light":"#F7F7F7"},"blue":"#2B48FF"}')},46011:function(e){"use strict";e.exports=JSON.parse('{"xs":"460px","sm":"640px","md":"768px","lg":"991px","xl":"1280px","2xl":"1440px","3xl":"1920px","4xl":"2560px"}')}},function(e){e.O(0,[395,971,23,744],function(){return e(e.s=13790)}),_N_E=e.O()}]);