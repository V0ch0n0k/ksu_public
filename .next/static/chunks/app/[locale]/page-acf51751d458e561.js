(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{67737:function(e,t,n){var i={"./en.json":[82724,724],"./uk.json":[6583,583]};function r(e){if(!n.o(i,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=i[e],r=t[0];return n.e(t[1]).then(function(){return n.t(r,19)})}r.keys=function(){return Object.keys(i)},r.id=67737,e.exports=r},16829:function(e,t,n){Promise.resolve().then(n.bind(n,64514)),Promise.resolve().then(n.bind(n,52406)),Promise.resolve().then(n.bind(n,81358)),Promise.resolve().then(n.bind(n,48027)),Promise.resolve().then(n.bind(n,4776)),Promise.resolve().then(n.bind(n,1531)),Promise.resolve().then(n.bind(n,95062)),Promise.resolve().then(n.bind(n,57491)),Promise.resolve().then(n.bind(n,23987)),Promise.resolve().then(n.bind(n,25218)),Promise.resolve().then(n.bind(n,5415)),Promise.resolve().then(n.bind(n,82591)),Promise.resolve().then(n.bind(n,34327)),Promise.resolve().then(n.t.bind(n,38173,23)),Promise.resolve().then(n.bind(n,25981)),Promise.resolve().then(n.bind(n,81997)),Promise.resolve().then(n.bind(n,90389)),Promise.resolve().then(n.bind(n,95943)),Promise.resolve().then(n.bind(n,75928)),Promise.resolve().then(n.bind(n,51876)),Promise.resolve().then(n.bind(n,11764)),Promise.resolve().then(n.bind(n,23417)),Promise.resolve().then(n.bind(n,74354)),Promise.resolve().then(n.bind(n,29060)),Promise.resolve().then(n.bind(n,90236)),Promise.resolve().then(n.bind(n,1770))},1531:function(e,t,n){"use strict";n.d(t,{default:function(){return u}});var i=n(57437),r=n(32529),a=n(83719),o=n(42193),s=n(204),l=n(4776);let c=[{min:1,amount:0},{min:768,amount:2},{min:1500,amount:3},{min:2560,amount:4},{min:3840,amount:5}].reverse();function u(e){let{news:t}=e,n=JSON.parse(t),a=function(){var e,t;let n=(0,l.default)().innerWidth;return null!==(t=null===(e=c.find(e=>{let{min:t}=e;return n>=t}))||void 0===e?void 0:e.amount)&&void 0!==t?t:0}();return(0,i.jsx)(r.Z,{className:"w-2/3 h-full",direction:"column",children:n.slice(0,a).map((e,t)=>(0,i.jsx)(d,{news:e},t))})}function d(e){let{news:t}=e;return(0,i.jsx)(r.Z,{className:"w-full h-full border-t-[1px] border-[#AAAAAD] gap-5 pt-5 hover:scale-105",direction:"column",children:(0,i.jsxs)(s.rU,{href:"/news/".concat(t.id),className:"w-full h-full",children:[(0,i.jsx)(o.Z,{date:t.date}),(0,i.jsx)(a.Z,{variant:"h5",children:t.title})]})})}},95062:function(e,t,n){"use strict";n.d(t,{default:function(){return p}});var i=n(57437),r=n(2265),a=n(18087),o=n(32529),s=n(39581),l=n(79617),c=n(51847),u=n(83719),d=n(60335),h=n(33578),f=n(37169),A=(0,n(59018).Z)((0,i.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}),"KeyboardArrowDown"),m=n(204);function g(){return(0,i.jsxs)(o.Z,{className:"gap-1 w-full",children:[(0,i.jsx)(s.Z,{variant:"text",width:"200px"}),(0,i.jsx)(s.Z,{variant:"text",width:"200px",className:"mt-3"}),(0,i.jsx)(s.Z,{variant:"text",width:"200px"})]})}function p(e){let{index:t,partner:n}=e,[s,p]=r.useState(!1),w=(0,a.useTranslations)("partners"),b=(0,a.useTranslations)("countries");return(0,i.jsxs)(l.Z,{expanded:s,elevation:0,sx:{borderBottom:"1px solid #AAAAAD",borderTop:0,"::before":{display:"none"},margin:"0 !important"},children:[(0,i.jsx)(c.Z,{sx:{"& .MuiAccordionSummary-content":{margin:"0 !important"}},children:(0,i.jsxs)(o.Z,{direction:"row",className:"items-center justify-between w-full h-fit",onClick:()=>{p(!s)},children:[(0,i.jsx)(u.Z,{variant:"body2",className:"whitespace-pre-wrap",children:"".concat(t,".		").concat(w(n.translationKey+".title").toUpperCase(),", ").concat(b(n.country))}),(0,i.jsx)(d.Z,{children:(0,i.jsx)(A,{fontSize:"small",className:"transition-transform duration-200",style:{transform:s?"scaleY(-1)":"scaleY(1)"}})})]})}),(0,i.jsx)(h.Z,{children:(0,i.jsxs)(o.Z,{direction:"row",className:"w-fill h-[20dvh] items-center gap-[5%] bg-themed-lightgray p-[2%]",children:[(0,i.jsx)(f.Z,{className:"relative w-fit h-full",children:(0,i.jsx)("img",{src:n.logo,alt:n.translationKey,className:"max-w-[25dvw] w-auto h-full object-contain"})},n.translationKey),(0,i.jsxs)(o.Z,{className:"gap-4 w-full md:w-1/2",children:[(0,i.jsx)(m.rU,{href:n.link,children:(0,i.jsx)(u.Z,{variant:"body2",className:"text-[#012AFF]",children:n.link})}),(0,i.jsx)(o.Z,{direction:"row",className:"gap-[25%] w-fit",children:n.people?n.people.map((e,t)=>(0,i.jsx)(v,{person:e},t)):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g,{})," ",(0,i.jsx)(g,{})]})})]})]})})]})}function v(e){let{person:t}=e;return(0,i.jsxs)(o.Z,{className:"gap-1 w-full",children:[(0,i.jsx)(u.Z,{variant:"body2",bgcolor:"secondary.main",className:"w-fit",children:t.title}),(0,i.jsx)(u.Z,{variant:"body2",fontWeight:500,className:"mt-3",children:t.name}),(0,i.jsx)(u.Z,{variant:"body2",children:t.email})]})}},73105:function(e,t,n){"use strict";n.d(t,{he:function(){return o},k1:function(){return a}});var i=n(16463),r=n(65051);let a=Object.freeze(["uk","en"]),o=Object.freeze({en:"ENG",uk:"УКР"});(0,r.cF)(async e=>{let{locale:t}=e;return a.includes(t)||(0,i.notFound)(),{messages:(await n(67737)("./".concat(t,".json"))).default}})},204:function(e,t,n){"use strict";n.d(t,{jD:function(){return s},rU:function(){return a},tv:function(){return l}});var i=n(5758),r=n(73105);let{Link:a,redirect:o,usePathname:s,useRouter:l}=(0,i.iV)({locales:r.k1})},28449:function(e,t,n){"use strict";n.d(t,{Nr:function(){return a}});var i=n(37061);let r="IBM Plex Serif",a="IBM Plex Mono",o="Inter",s={palette:i,typography:{h1:{fontFamily:r,fontSize:24,"@media (min-width:600px)":{fontSize:28},"@media (min-width:960px)":{fontSize:32},"@media (min-width:1280px)":{fontSize:46},fontWeight:500,lineHeight:1.2,whiteSpace:"pre-wrap",letterSpacing:"-0.02rem"},h2:{fontFamily:r,fontSize:20,"@media (min-width:600px)":{fontSize:24},"@media (min-width:960px)":{fontSize:30},"@media (min-width:1280px)":{fontSize:38},fontWeight:500,lineHeight:1.3,whiteSpace:"pre-wrap",letterSpacing:"-0.01rem"},h3:{fontFamily:r,fontSize:16,"@media (min-width:600px)":{fontSize:20},"@media (min-width:960px)":{fontSize:24},"@media (min-width:1280px)":{fontSize:32},fontWeight:500,lineHeight:1.3,whiteSpace:"pre-wrap",letterSpacing:"-0.01rem"},h4:{fontFamily:r,fontSize:24,fontWeight:500,lineHeight:1.4,whiteSpace:"pre-wrap",letterSpacing:"-0.01rem"},h5:{fontFamily:r,fontSize:20,fontWeight:500,lineHeight:1.4,whiteSpace:"pre-wrap",letterSpacing:"-0.03rem"},h6:{fontFamily:r,fontSize:16,fontWeight:500,lineHeight:1.1,whiteSpace:"pre-wrap",letterSpacing:0},body1:{fontFamily:a,lineHeight:1.5,fontSize:18,fontWeight:400,whiteSpace:"pre-wrap",letterSpacing:0},body2:{fontFamily:o,lineHeight:1.5,fontSize:16,whiteSpace:"pre-wrap",letterSpacing:0},caption:{fontFamily:a,fontSize:14,whiteSpace:"pre-wrap",lineHeight:1.1,letterSpacing:"-0.03rem"}},components:{MuiButton:{styleOverrides:{root:{fontFamily:o,borderRadius:Number.MAX_VALUE,padding:"14px 32px 14px 32px",textTransform:"capitalize",color:(16777215^Number("0x1".concat(i.primary.main))).toString(16).substring(1).toUpperCase()}}},MuiFormLabel:{styleOverrides:{root:{fontFamily:o,fontSize:16,lineHeight:1.4,color:"black",paddingLeft:10,"&.Mui-focused":{paddingLeft:0}}}},MuiInputBase:{styleOverrides:{root:{fontFamily:o,fontSize:16,lineHeight:1.4,color:"black"}}},MuiInputLabel:{styleOverrides:{asterisk:{display:"none"},root:{padding:0,"&::after":{content:"'(optional)'",marginLeft:"0.5rem",transition:"opacity 0.25s ease-in-out, width 0s 0.25s ease-in-out"},"&.Mui-required":{"&::after":{opacity:0,width:0}},"&.Mui-focused":{"&::after":{opacity:0,width:0}}}}}}};t.ZP=s},64514:function(e,t,n){"use strict";n.d(t,{default:function(){return d}});var i=n(57437),r=n(2265),a=n(60335),o=n(32529),s=n(37169),l=(0,n(59018).Z)((0,i.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp"),c=n(67487);function u(e){let{iconRotation:t,onClick:n}=e;return(0,i.jsx)(a.Z,{className:"z-10 bg-secondary hover:bg-info",children:(0,i.jsx)(l,{sx:{transform:"rotate(".concat(t,"deg)")},onClick:n})})}function d(e){let{children:t}=e,n=r.Children.toArray(t),[a,l]=r.useState(r.Children.toArray(n)),[d,h]=r.useState(r.Children.toArray(n)),f=r.useRef(null),A=r.useRef(null),m=r.useRef(null),[g,p]=r.useState(0),v=()=>{h(d.concat(n))},w=()=>{l(a.concat(n))};return(0,i.jsxs)(o.Z,{direction:"row",className:"w-full h-full items-center overflow-x-clip px-4 gap-4",children:[(0,i.jsx)(u,{iconRotation:270,onClick:()=>{var e,t;p(g+100),(null!==(t=null===(e=A.current)||void 0===e?void 0:e.getBoundingClientRect().left)&&void 0!==t?t:0)>-(3*window.innerWidth)&&v()}}),(0,i.jsxs)(c.Z,{container:!0,ref:f,className:"w-full h-full items-center   transition-transform duration-700 justify-center gap-4",style:{transform:"translateX(".concat(g,"dvw)")},children:[(0,i.jsx)(c.Z,{xs:!0,component:s.Z,className:"flex justify-end h-full w-fit",children:(0,i.jsx)(o.Z,{ref:A,className:"gap-4 justify-end items-center min-w-fit h-full",direction:"row",children:d.map((e,t)=>(0,i.jsx)(r.Fragment,{children:e},t))})}),(0,i.jsx)(c.Z,{xs:!0,component:s.Z,className:"flex justify-start h-full w-fit",children:(0,i.jsx)(o.Z,{ref:m,direction:"row",className:"gap-4 justify-start items-center min-w-fit h-full",children:a.map((e,t)=>(0,i.jsx)(r.Fragment,{children:e},t))})})]}),(0,i.jsx)(u,{iconRotation:90,onClick:()=>{var e,t;p(g-100),(null!==(t=null===(e=m.current)||void 0===e?void 0:e.getBoundingClientRect().right)&&void 0!==t?t:0)<3*window.innerWidth&&w()}})]})}},52406:function(e,t,n){"use strict";n.d(t,{default:function(){return A}});var i=n(57437),r=n(63556),a=n(32529),o=n(83719),s=n(18087),l=n(2265),c=n(96537),u=n(37061);function d(e){let{children:t,styles:n,props:r}=e;return r=null!=r?r:{},(0,i.jsx)(c.Z,{...r,sx:{"&:hover":{backgroundColor:u.button["hover-primary"]+" !important",color:"black"},backgroundColor:u.gray.darkest+" !important",color:"white",...n},children:t})}var h=n(5864),f=n(62409);function A(){let e=(0,s.useTranslations)("feedbackForm"),[t,n]=(0,l.useState)(6),[c,u]=(0,l.useState)(!1);return(0,i.jsxs)(f.Z,{formProps:{className:"w-full h-full items-start gap-4"},onSubmit:async e=>{e.preventDefault();let t=e.currentTarget,i=new FormData(t),r=await (0,h.v)("/feedback",Object.fromEntries(i));if(!r.ok)throw f.T.ofProblemDetails(await r.json());t.reset(),n(6)},messageOverrides:{success:e("success"),error:e("error")},children:[(0,i.jsx)(r.Z,{name:"username",required:!0,label:e("name"),variant:"standard",inputProps:{minLength:1},className:"w-full"}),(0,i.jsx)(r.Z,{name:"email",required:!0,label:e("email"),variant:"standard",type:"email",className:"w-full bg-none",inputProps:{minLength:1}}),(0,i.jsx)(r.Z,{name:"message",id:"message",label:e("message"),variant:"standard",multiline:!0,className:"w-full",rows:t,required:!0,onChange:e=>{n(Math.max(e.target.value.length/47+1,6))},inputProps:{minLength:1}}),(0,i.jsx)(d,{styles:{marginTop:"1.75rem",alignSelf:"end"},props:{type:"submit",onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1)},children:(0,i.jsxs)(a.Z,{className:"w-full h-full items-center justify-center gap-4",direction:"row",children:[(0,i.jsx)(o.Z,{fontSize:"inherit",fontFamily:"inherit",children:e("send")}),(0,i.jsxs)("svg",{width:"28",height:"14",viewBox:"0 0 28 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"".concat(c?"invert":""),children:[(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.2931 7.00003L20.6465 12.6485L21.3537 13.3555L27.7071 7.00001L21.3537 0.644792L20.6465 1.3518L26.2931 7.00003Z",fill:"white"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 6.50024L27 6.50024L27 7.50024L8.74228e-08 7.50024L0 6.50024Z",fill:"white"})]})]})})]})}},62409:function(e,t,n){"use strict";n.d(t,{T:function(){return d},Z:function(){return h}});var i=n(57437),r=n(2265),a=n(63556),o=n(44812),s=n(32529),l=n(37511),c=n(27270),u=n(18087);class d extends Error{get errors(){return this._errors}static ofProblemDetails(e){return new d(e.map(e=>{let{detail:t,properties:n}=e;return{[Object.keys(n)[0]]:t}}))}constructor(e){super("Form fields validation failed"),this._errors=e}}function h(e){var t,n;let{children:h,onSubmit:f,messageOverrides:A={},formProps:m={}}=e,[g,p]=r.useState([]),[v,w]=r.useState(null),b=(0,u.useTranslations)("form"),x=r.Children.toArray(h).map(e=>(function e(t){if(t.children&&(t.children=r.Children.toArray(t.children).map(t=>e(t))),t.type===a.Z||t.type===o.Z){let e=g.find(e=>Object.keys(e)[0]===t.props.name);if(e)return r.cloneElement(t,{error:!0,helperText:Object.values(e)[0],onChange:e=>{t.props.onChange&&t.props.onChange(e),p(g.filter(e=>Object.keys(e)[0]!==t.props.name))}})}return t})(e)).map((e,t)=>r.cloneElement(e,{key:t}));return(0,i.jsxs)(s.Z,{onSubmit:async e=>{try{await f(e),w("success")}catch(e){if(!(e instanceof d))throw e;w("error"),p(e.errors)}},...m,component:"form",children:[x.map((e,t)=>e),(0,i.jsx)(l.Z,{open:"success"===v,onClose:()=>w(null),children:(0,i.jsx)(c.Z,{severity:"success",variant:"filled",onClose:()=>w(null),children:null!==(t=A.success)&&void 0!==t?t:b("success")})}),(0,i.jsx)(l.Z,{open:"error"===v,onClose:()=>w(null),children:(0,i.jsx)(c.Z,{severity:"error",variant:"filled",onClose:()=>w(null),children:null!==(n=A.error)&&void 0!==n?n:b("error")})})]})}},81358:function(e,t,n){"use strict";n.d(t,{default:function(){return c}});var i=n(57437),r=n(32529),a=n(83719),o=n(204),s=n(73105),l=n(18087);function c(){let e=(0,l.useLocale)(),t=(0,o.jD)();return(0,i.jsx)(r.Z,{direction:"row",gap:"26px",className:"pr-[5dvw]",children:s.k1.map(n=>(0,i.jsx)(o.rU,{href:t,locale:n,children:(0,i.jsx)(a.Z,{color:n===e?"primary":"#9B9B9B",fontWeight:500,children:s.he[n]})},n))})}},48027:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var i=n(57437),r=JSON.parse('{"main":"/","about":"/about","programs":"/programs","news":"/news","contacts":"/contacts"}'),a=n(18087),o=n(32529),s=n(83719),l=n(204),c=n(28449);function u(e){let{exclude:t=[],fontWeight:n=500,className:u=""}=e,d=(0,a.useTranslations)("nav"),h=(0,l.jD)();return(0,i.jsx)(o.Z,{className:"justify-start items-end gap-4",component:"nav",children:Object.entries(r).filter(e=>!t.includes(e[0])).map((e,t)=>(0,i.jsxs)(o.Z,{className:"w-fit h-fit justify-between items-center gap-4",direction:"row",children:[h===e[1]&&(0,i.jsx)("hr",{className:"w-10 h-px text-black bg-black border-0 mt-0.5"}),(0,i.jsx)(l.rU,{href:e[1],children:(0,i.jsx)(s.Z,{variant:"h6",fontSize:18,fontWeight:n,letterSpacing:"-0.03rem",fontFamily:c.Nr,className:"".concat(u," text-black hover:font-[600]"),children:d(e[0])})})]},t))})}},42193:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(57437),r=n(83719);function a(e){let{date:t,format:n,textProps:a}=e;return n=n||{year:"numeric",month:"numeric",day:"numeric"},(0,i.jsx)("time",{dateTime:t.toString(),children:(0,i.jsx)(r.Z,{variant:"body1",fontSize:"14px",lineHeight:"15px",...a,children:new Intl.DateTimeFormat("en-GB",n).format(new Date(t))})})}},5864:function(e,t,n){"use strict";async function i(e,t){return await fetch("".concat("http://localhost:8080").concat(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}n.d(t,{v:function(){return i}})},4776:function(e,t,n){"use strict";n.d(t,{default:function(){return r}});var i=n(2265);function r(){let[e,t]=(0,i.useState)({innerWidth:0,innerHeight:0});return(0,i.useEffect)(()=>{function e(){t({innerWidth:window.innerWidth,innerHeight:window.innerHeight})}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e}},57491:function(e,t,n){"use strict";n(2265);var i=n(59018),r=n(57437);t.default=(0,i.Z)((0,r.jsx)("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook")},23987:function(e,t,n){"use strict";n(2265);var i=n(59018),r=n(57437);t.default=(0,i.Z)((0,r.jsx)("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn")},39581:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var i=n(48646),r=n(23950),a=n(22988),o=n(2265),s=n(44839),l=n(63098),c=n(26259),u=n(82857),d=n(22305),h=n(48024),f=n(95885),A=n(34535),m=n(87542);function g(e){return(0,m.ZP)("MuiSkeleton",e)}(0,A.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var p=n(57437);function v(){let e=(0,i._)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"]);return v=function(){return e},e}function w(){let e=(0,i._)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"]);return w=function(){return e},e}function b(){let e=(0,i._)(["\n      animation: "," 2s ease-in-out 0.5s infinite;\n    "]);return b=function(){return e},e}function x(){let e=(0,i._)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 2s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]);return x=function(){return e},e}let y=["animation","className","component","height","style","variant","width"],j=e=>e,S,Z,C,P,R=e=>{let{classes:t,variant:n,animation:i,hasChildren:r,width:a,height:o}=e;return(0,c.Z)({root:["root",n,i,r&&"withChildren",r&&!a&&"fitContent",r&&!o&&"heightAuto"]},g,t)},N=(0,l.F4)(S||(S=j(v()))),k=(0,l.F4)(Z||(Z=j(w()))),M=(0,h.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],!1!==n.animation&&t[n.animation],n.hasChildren&&t.withChildren,n.hasChildren&&!n.width&&t.fitContent,n.hasChildren&&!n.height&&t.heightAuto]}})(e=>{let{theme:t,ownerState:n}=e,i=(0,u.Wy)(t.shape.borderRadius)||"px",r=(0,u.YL)(t.shape.borderRadius);return(0,a.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,d.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===n.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(r).concat(i,"/").concat(Math.round(r/.6*10)/10).concat(i),"&:empty:before":{content:'"\\00a0"'}},"circular"===n.variant&&{borderRadius:"50%"},"rounded"===n.variant&&{borderRadius:(t.vars||t).shape.borderRadius},n.hasChildren&&{"& > *":{visibility:"hidden"}},n.hasChildren&&!n.width&&{maxWidth:"fit-content"},n.hasChildren&&!n.height&&{height:"auto"})},e=>{let{ownerState:t}=e;return"pulse"===t.animation&&(0,l.iv)(C||(C=j(b(),0)),N)},e=>{let{ownerState:t,theme:n}=e;return"wave"===t.animation&&(0,l.iv)(P||(P=j(x(),0,0)),k,(n.vars||n).palette.action.hover)});var E=o.forwardRef(function(e,t){let n=(0,f.i)({props:e,name:"MuiSkeleton"}),{animation:i="pulse",className:o,component:l="span",height:c,style:u,variant:d="text",width:h}=n,A=(0,r.Z)(n,y),m=(0,a.Z)({},n,{animation:i,component:l,variant:d,hasChildren:!!A.children}),g=R(m);return(0,p.jsx)(M,(0,a.Z)({as:l,ref:t,className:(0,s.Z)(g.root,o),ownerState:m},A,{style:(0,a.Z)({width:h,height:c},u)}))})},67487:function(e,t,n){"use strict";var i=n(71819),r=n(48024),a=n(95885);let o=(0,i.Z)({createStyledComponent:(0,r.ZP)("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,t)=>t.root}),componentName:"MuiGrid2",useThemeProps:e=>(0,a.i)({props:e,name:"MuiGrid2"})});t.Z=o},12887:function(e,t,n){"use strict";function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}n.d(t,{g:function(){return i}})},34327:function(e,t,n){"use strict";n.d(t,{default:function(){return f}});var i=n(12887),r=n(87138),a=n(16463),o=n(2265),s=n(69773);let l="locale";function c(e){return("object"==typeof e?null==e.host&&null==e.hostname:!/^[a-z]+:/i.test(e))&&!function(e){let t="object"==typeof e?e.pathname:e;return null!=t&&!t.startsWith("/")}(e)}function u(e,t){let n;return"string"==typeof e?n=d(t,e):(n={...e},e.pathname&&(n.pathname=d(t,e.pathname))),n}function d(e,t){let n=e;return/^\/(\?.*)?$/.test(t)&&(t=t.slice(1)),n+=t}let h=(0,o.forwardRef)(function(e,t){let{href:n,locale:d,localePrefixMode:h,onClick:f,prefetch:A,prefix:m,...g}=e,p=(0,a.usePathname)(),v=function(){let e;let t=(0,a.useParams)();try{e=(0,s.useLocale)()}catch(n){if("string"!=typeof(null==t?void 0:t[l]))throw n;e=t[l]}return e}(),w=d!==v,[b,x]=(0,o.useState)(()=>c(n)&&("never"!==h||w)?u(n,m):n);return(0,o.useEffect)(()=>{p&&x(function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,i=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0;if(!c(e))return e;let a=i===r||i.startsWith("".concat(r,"/"));return(t!==n||a)&&null!=r?u(e,r):e}(n,d,v,p,m))},[v,n,d,p,m]),w&&(A&&console.error("The `prefetch` prop is currently not supported when using the `locale` prop on `Link` to switch the locale.`"),A=!1),o.createElement(r.default,(0,i.g)({ref:t,href:b,hrefLang:w?d:void 0,onClick:function(e){(function(e,t,n){if(!(n!==t&&null!=n)||!e)return;let i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.pathname;return"/"===e?t:t.replace(e,"")}(e);document.cookie="".concat("NEXT_LOCALE","=").concat(n,"; path=").concat(""!==i?i:"/","; max-age=").concat(31536e3,"; sameSite=").concat("lax")})(p,v,d),f&&f(e)},prefetch:A},g))});h.displayName="ClientLink";var f=h},25981:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/clock.40fc943d.png",height:122,width:122,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEXd4Pvh5P/f4v3e4fzd4Pvc3/ra3ffZ3PfZ3PbZ2/bY2/bLzufLzubLzebGyOHBw9u/wdm5vNO5vNK4utG3udC1uM49Ecl+AAAAAXRSTlP9g+pWxwAAAD9JREFUeNo1yzkSgDAQA0FJK2BtwGCO/3+VckA0yTQQlhwYzaQD1tTenYayncedguozL70K5nr1jUaYpYz55x83XQGKAzoc2gAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},81997:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/folders.28279f42.png",height:114,width:114,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEXe4fzd4Pvq7f/j5v/i5f/h5P/g5P/g4/7f4v7f4v3e4fzd4Pvc3/rZ3PbY2/XX2vTV2PLS1e7R1O7Q0+3Nz+jLzufKzOXDxt7Bw9u9v9e2uM+1uM6xs8mvsceusMaqrMGnqr+NjqGIEkiRAAAAAnRSTlP9/RSN3GkAAABGSURBVHjaFctZFkAwEATARsaYtCXWINb7X9JT/4XMU4wEPLVvzRN1Ec/1Cgpr7rQ/o8DNMV/eroKGI6ZNCFqYBvkb1ZUkPnuzA2t+9hleAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},90389:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/tuner.211d19db.png",height:114,width:114,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEXe4fzh5P/g4/7f4v3d4PvW2fPW2PPW2PLV2PLQ0+3Q0+zQ0uzP0uvFx9+5vNK5u9K4u9G1t820t82ztsyxs8mvssiuscausMausMWtsMVJuX3GAAAAAXRSTlP9g+pWxwAAAEBJREFUeNo1y1sSQDAQBMCZySJWvCKE+19UUZX/bsBEygALMXkMBg11v55O4Hgu85YI+rHm4oT6O5ca9ePpw62/SSwCCR8MCNsAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},95943:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/digiuni-bw.4cbd0254.svg",height:44,width:228,blurWidth:0,blurHeight:0}},75928:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/duration-time.e337b13b.svg",height:118,width:230,blurWidth:0,blurHeight:0}},51876:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/knu.29c4ad5c.png",height:38,width:112,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAATElEQVR42mMQFZVZDsRJQNwIxFVAXAjEs4C4AYjjGYDESiBuAWINMTGZfiCeKCoqqwPkdwFxGANUdSUQTwZK5gPpEiBOB+JqMTFZCQBy0BGNSjXyRgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3}},11764:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/digiuni-loading.31b8ce53.png",height:353,width:701,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAfklEQVR4nA3KsQ6CMBAG4P/uSDHUwOKivn/i5DP4FsQYGUlaSQdNwVrp6f7R+XTJKVWyLKwsDYgbfIvRetNK1zpPr+lZVJWqSrCuBTln2G0HYwXDdQBNo9cQAhRAbQwO+yPy3IM5wYVW6d7fHjHG3R+osJC1Fp+3h7BidHP5AUl7O3/Qw+Q/AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4}},23417:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/digiuni-vertical.665019d0.png",height:1475,width:282,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAICAYAAADTLS5CAAAAQElEQVR4nGNkYGCIBuJ/IEYAEHOCGN5AzApieAAxK6OkpGUIM9M/BpCIBRAzMOYXvu5jZ/3LwNja9PT///8MDAAM5gydtoJyhgAAAABJRU5ErkJggg==",blurWidth:2,blurHeight:8}},74354:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/ellipse.ef5dcba8.png",height:1261,width:1466,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAa0lEQVR42mMgCvz7bcz47zMP67/PzJxg/BbIvm/AiFDwkRcoySD07xODPBh/BLKBYggFH1jYgQqkgJLaEAxkf2VlR1IANOELUNdnoO7PUBM+IZvwWI/x32du1n8fgfZ/AuKPQPZPfUaiPAAAuTY88O4T61AAAAAASUVORK5CYII=",blurWidth:8,blurHeight:7}},29060:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/eu-partners.9b1d4ef2.png",height:135,width:151,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA10lEQVR42mMAAjYxlSXHBZVXfZFUW/lKUn3FawaJBTWiCtOsGBh8GRn4eYP4hJVXP1c32vjf3mXFf0fXFf81jdb+F1Ba+VJMJISXQUfDiYdZdvV9G6dV/3VM1/7SMFr7y95l1X8W2TWPtNTD+Rl4uQP4hVVWv1Mz3PDfAagbZIqG0Yb/QFM/CArECTAAARPQDasFlVZfllJfcUZaY8VpAaVVV8VUFq9jYJBgY2BiYOBkAAIgzcqAHTAlMLFoajAyK9ozMct6MzHLOzMyyXkyMsl6MjAwOwIAB9s92QIhBNUAAAAASUVORK5CYII=",blurWidth:8,blurHeight:7}},90236:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/funded-by-eu.cb58d2b5.png",height:95,width:466,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAO0lEQVR4nGMUFZX5wMDAwA/E9UC8GoglgPgBIyPDo///GVhACj4DBXiAuIGBgWEJEIsB8X+ggk9ABRwAcHgMyEuY6WAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:2}},1770:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/ua-partners.d5b86fec.png",height:133,width:151,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAvklEQVR42i3HsU3DQBSA4f/dnX0cViLRAAuAKBBDwBzswRoMwASUtIgKCSEQTIDoEH2is32+55dIyfdXvzw9EG+uz99DcFcC2Qw3jvV+qvo89L8v7vSE2AR33DReQDoRSV3X3qXUPr59cuRUmc0oNhu5LzXnsYoI2/oyEQLggYV4R2y3j4ETRFiEIBJax7pM+qpql8AAYkOe0jDqz8e3ZQDPziE7DeDYCylye3Hmv1ZrllVt6R1ZlYMY4e9/LhtdJEqwGVBhIgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:7}},37061:function(e){"use strict";e.exports=JSON.parse('{"primary":{"main":"#000000"},"secondary":{"main":"#FEFFE6"},"info":{"main":"#D5DAFF"},"button":{"hover-primary":"#C6FB50","hover-secondary":"white"},"gray":{"darkest":"#16161D","darker":"#62626A","default":"#AAAAAD","light":"#F7F7F7"}}')}},function(e){e.O(0,[508,136,722,619,576,139,743,406,971,23,744],function(){return e(e.s=16829)}),_N_E=e.O()}]);