(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[172],{67737:function(e,t,i){var n={"./en.json":[82724,724],"./uk.json":[6583,583]};function r(e){if(!i.o(n,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],r=t[0];return i.e(t[1]).then(function(){return i.t(r,19)})}r.keys=function(){return Object.keys(n)},r.id=67737,e.exports=r},3875:function(e,t,i){Promise.resolve().then(i.bind(i,33364)),Promise.resolve().then(i.bind(i,81358)),Promise.resolve().then(i.bind(i,48027)),Promise.resolve().then(i.bind(i,41558)),Promise.resolve().then(i.bind(i,25218)),Promise.resolve().then(i.bind(i,5415)),Promise.resolve().then(i.bind(i,82591)),Promise.resolve().then(i.t.bind(i,38173,23)),Promise.resolve().then(i.bind(i,95943))},41558:function(e,t,i){"use strict";i.d(t,{Logo:function(){return c}});var n=i(57437),r=i(4776),a=i(46011),o={width:209},s=i(37169);function c(){let e=(0,r.default)().innerWidth;return(0,n.jsxs)(s.Z,{className:"w-fit h-fit",children:[(0,n.jsx)("img",{src:"/images/header/digiuni.svg",alt:"DigiUni",width:"0",height:"0"}),(0,n.jsx)("img",{src:"/images/header/digiuni-vertical.png",alt:"DigiUni",width:"0",height:"0"}),!e||e>parseInt(a.md)?(0,n.jsx)("img",{src:"/images/header/digiuni.svg",alt:"DigiUni"}):(0,n.jsx)("img",{src:"/images/header/digiuni-vertical.png",alt:"DigiUni",style:{height:o.width+"px",width:"auto"}})]})}},73105:function(e,t,i){"use strict";i.d(t,{he:function(){return o},k1:function(){return a}});var n=i(16463),r=i(65051);let a=Object.freeze(["uk","en"]),o=Object.freeze({en:"ENG",uk:"УКР"});(0,r.cF)(async e=>{let{locale:t}=e;return a.includes(t)||(0,n.notFound)(),{messages:(await i(67737)("./".concat(t,".json"))).default}})},204:function(e,t,i){"use strict";i.d(t,{jD:function(){return s},rU:function(){return a},tv:function(){return c}});var n=i(5758),r=i(73105);let{Link:a,redirect:o,usePathname:s,useRouter:c}=(0,n.iV)({locales:r.k1})},28449:function(e,t,i){"use strict";i.d(t,{Nr:function(){return a}});var n=i(37061);let r="IBM Plex Serif",a="IBM Plex Mono",o="Inter",s={palette:n,typography:{h1:{fontFamily:r,fontSize:24,"@media (min-width:600px)":{fontSize:28},"@media (min-width:960px)":{fontSize:32},"@media (min-width:1280px)":{fontSize:46},fontWeight:500,lineHeight:1.2,whiteSpace:"pre-wrap",letterSpacing:"-0.02rem"},h2:{fontFamily:r,fontSize:20,"@media (min-width:600px)":{fontSize:24},"@media (min-width:960px)":{fontSize:30},"@media (min-width:1280px)":{fontSize:38},fontWeight:500,lineHeight:1.3,whiteSpace:"pre-wrap",letterSpacing:"-0.01rem"},h3:{fontFamily:r,fontSize:16,"@media (min-width:600px)":{fontSize:20},"@media (min-width:960px)":{fontSize:24},"@media (min-width:1280px)":{fontSize:32},fontWeight:500,lineHeight:1.3,whiteSpace:"pre-wrap",letterSpacing:"-0.01rem"},h4:{fontFamily:r,fontSize:24,fontWeight:500,lineHeight:1.4,whiteSpace:"pre-wrap",letterSpacing:"-0.01rem"},h5:{fontFamily:r,fontSize:20,fontWeight:500,lineHeight:1.4,whiteSpace:"pre-wrap",letterSpacing:"-0.03rem"},h6:{fontFamily:r,fontSize:16,fontWeight:500,lineHeight:1.1,whiteSpace:"pre-wrap",letterSpacing:0},body1:{fontFamily:a,lineHeight:1.5,fontSize:18,fontWeight:400,whiteSpace:"pre-wrap",letterSpacing:0},body2:{fontFamily:o,lineHeight:1.5,fontSize:16,whiteSpace:"pre-wrap",letterSpacing:0},caption:{fontFamily:a,fontSize:14,whiteSpace:"pre-wrap",lineHeight:1.1,letterSpacing:"-0.03rem"}},components:{MuiButton:{styleOverrides:{root:{fontFamily:o,borderRadius:Number.MAX_VALUE,padding:"14px 32px 14px 32px",textTransform:"capitalize",color:(16777215^Number("0x1".concat(n.primary.main))).toString(16).substring(1).toUpperCase()}}},MuiFormLabel:{styleOverrides:{root:{fontFamily:o,fontSize:16,lineHeight:1.4,color:"black",paddingLeft:10,"&.Mui-focused":{paddingLeft:0}}}},MuiInputBase:{styleOverrides:{root:{fontFamily:o,fontSize:16,lineHeight:1.4,color:"black"}}},MuiInputLabel:{styleOverrides:{asterisk:{display:"none"},root:{padding:0,"&::after":{content:"'(optional)'",marginLeft:"0.5rem",transition:"opacity 0.25s ease-in-out, width 0s 0.25s ease-in-out"},"&.Mui-required":{"&::after":{opacity:0,width:0}},"&.Mui-focused":{"&::after":{opacity:0,width:0}}}}}}};t.ZP=s},33364:function(e,t,i){"use strict";i.d(t,{default:function(){return c}});var n=i(57437),r=i(204),a=i(32529),o=i(83719),s=i(18087);function c(){let e=["main"].concat((0,r.jD)().split("/").slice(1,-1)),t=(0,s.useTranslations)("nav");return(0,n.jsx)(a.Z,{direction:"row",className:"backwards-nav text-themed-gray",children:e.map((i,a)=>(0,n.jsx)(r.rU,{href:"/"+e.slice(0,a+1).map(e=>"main"===e?"":e).join("/"),children:(0,n.jsx)(o.Z,{variant:"caption",className:"hover:text-themed-darker-gray",fontWeight:500,children:t(i)||i})},a))})}},81358:function(e,t,i){"use strict";i.d(t,{default:function(){return l}});var n=i(57437),r=i(32529),a=i(83719),o=i(204),s=i(73105),c=i(18087);function l(){let e=(0,c.useLocale)(),t=(0,o.jD)();return(0,n.jsx)(r.Z,{direction:"row",gap:"26px",className:"pr-[5dvw]",children:s.k1.map(i=>(0,n.jsx)(o.rU,{href:t,locale:i,children:(0,n.jsx)(a.Z,{color:i===e?"primary":"#9B9B9B",fontWeight:500,children:s.he[i]})},i))})}},48027:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return d}});var n=i(57437),r=JSON.parse('{"main":"/","about":"/about","programs":"/programs","news":"/news","contacts":"/contacts"}'),a=i(18087),o=i(32529),s=i(83719),c=i(204),l=i(28449);function d(e){let{exclude:t=[],fontWeight:i=500,className:d=""}=e,u=(0,a.useTranslations)("nav"),h=(0,c.jD)();return(0,n.jsx)(o.Z,{className:"justify-start items-end gap-4",component:"nav",children:Object.entries(r).filter(e=>!t.includes(e[0])).map((e,t)=>(0,n.jsxs)(o.Z,{className:"w-fit h-fit justify-between items-center gap-4",direction:"row",children:[h===e[1]&&(0,n.jsx)("hr",{className:"w-10 h-px text-black bg-black border-0 mt-0.5"}),(0,n.jsx)(c.rU,{href:e[1],children:(0,n.jsx)(s.Z,{variant:"h6",fontSize:18,fontWeight:i,letterSpacing:"-0.03rem",fontFamily:l.Nr,className:"".concat(d," text-black hover:font-[600]"),children:u(e[0])})})]},t))})}},4776:function(e,t,i){"use strict";i.d(t,{default:function(){return r}});var n=i(2265);function r(){let[e,t]=(0,n.useState)({innerWidth:0,innerHeight:0});return(0,n.useEffect)(()=>{function e(){t({innerWidth:window.innerWidth,innerHeight:window.innerHeight})}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e}},95943:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/digiuni-bw.4cbd0254.svg",height:44,width:228,blurWidth:0,blurHeight:0}},37061:function(e){"use strict";e.exports=JSON.parse('{"primary":{"main":"#000000"},"secondary":{"main":"#FEFFE6"},"info":{"main":"#D5DAFF"},"button":{"hover-primary":"#C6FB50","hover-secondary":"white"},"gray":{"darkest":"#16161D","darker":"#62626A","default":"#AAAAAD","light":"#F7F7F7"}}')},46011:function(e){"use strict";e.exports=JSON.parse('{"sm":"640px","md":"768px","lg":"1024px","xl":"1280px","2xl":"1536px","3xl":"1920px","4xl":"2560px"}')}},function(e){e.O(0,[508,136,722,743,971,23,744],function(){return e(e.s=3875)}),_N_E=e.O()}]);