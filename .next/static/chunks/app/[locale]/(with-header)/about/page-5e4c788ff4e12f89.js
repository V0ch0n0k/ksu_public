(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[430],{67737:function(e,t,n){var a={"./en.json":[82724,724],"./uk.json":[6583,583]};function r(e){if(!n.o(a,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=a[e],r=t[0];return n.e(t[1]).then(function(){return n.t(r,19)})}r.keys=function(){return Object.keys(a)},r.id=67737,e.exports=r},98501:function(e,t,n){Promise.resolve().then(n.bind(n,65205)),Promise.resolve().then(n.bind(n,43447)),Promise.resolve().then(n.bind(n,93111)),Promise.resolve().then(n.bind(n,25218)),Promise.resolve().then(n.bind(n,13180)),Promise.resolve().then(n.bind(n,42472)),Promise.resolve().then(n.bind(n,4736)),Promise.resolve().then(n.bind(n,26976)),Promise.resolve().then(n.bind(n,91442)),Promise.resolve().then(n.bind(n,70621)),Promise.resolve().then(n.bind(n,5415)),Promise.resolve().then(n.bind(n,82591)),Promise.resolve().then(n.bind(n,34327)),Promise.resolve().then(n.t.bind(n,38173,23)),Promise.resolve().then(n.bind(n,3828))},93111:function(e,t,n){"use strict";n.d(t,{default:function(){return u}});var a=n(57437),r=n(46011),i=n(83719),s=n(2265);function o(e){return(0,a.jsx)(i.Z,{variant:"h2",lineHeight:1.3,sx:{"&":{fontSize:"38px"},["@media (max-width: ".concat(r.lg,")")]:{"&":{fontSize:"34px"}},["@media (max-width: ".concat(r.md,")")]:{"&":{fontSize:"32px"}},["@media (max-width: ".concat(r.xs,")")]:{"&":{fontSize:"30px"}}},className:e.className+" max-lg:!leading-[1.2] max-w-[50dvw]\n    max-xs:!max-w-[88dvw]\n    max-lg:!max-w-[76dvw]\n    xl:max-w-[53dvw]\n    3xl:max-w-[48dvw]\n    ",children:e.children})}var l=n(37169),d=n(32529),c=n(50450),x=n(89699),m=n(18087);function u(e){let{teamJson:t}=e,n=(0,m.useTranslations)("about.team"),u=JSON.parse(t),[f,p]=(0,s.useState)(10),h=(0,s.useRef)(null);return(0,a.jsxs)(x.OB,{disableGap:!0,className:"gap-[5dvw]   max-md:gap-[8dvw]   3xl:gap-[3dvw]   ",ref1:h,children:[(0,a.jsx)(o,{className:"   max-xs:mb-[8dvw]   ",children:n("title")}),(0,a.jsx)(l.Z,{className:"grid w-full gap-[12dvw] grid-cols-1 !gap-x-[2dvw] !gap-y-[4dvw]   max-xs:!gap-y-[12dvw] max-xs:mt-[6dvw]   max-lg:gap-x-[3dvw] max-lg:gap-y-[5dvw]   xs:grid-cols-2 xs:gap-0   md:!grid-cols-3   lg:!grid-cols-4   xl:!gap-x-[3dvw]   2xl:!gap-[2dvw]   3xl:!grid-cols-5   ",sx:{["@media (max-width: ".concat(r.xs,")")]:{margin:"0"}},children:u.toSorted((e,t)=>t.priority-e.priority).toSpliced(f,u.length-f).filter(e=>!e.isMain).map((e,t)=>(0,a.jsx)(d.Z,{sx:{["@media (max-width: ".concat(r.xs,")")]:{padding:"0"}},children:(0,a.jsxs)(d.Z,{className:"gap-[2dvw]   max-xs:gap-[8dvw]   ",children:[(0,a.jsx)("img",{src:e.photo?e.photo.image:"male"===e.gender?"/images/about/man_placeholder.jpg":"/images/about/woman_placeholder.jpg",alt:"photo",width:"100%",className:"aspect-square w-[20dvw]   max-xs:!w-full   max-lg:w-auto   "}),(0,a.jsxs)(d.Z,{className:"gap-[1.5dvw]   max-xs:gap-[6dvw]   3xl:gap-[1dvw]   ",sx:{"&.MuiStack-root > .MuiTypography-root:first-letter":{textTransform:"uppercase"}},children:[(0,a.jsxs)(d.Z,{className:"gap-[1dvw]   max-xs:gap-[2dvw]   xl:gap-[0.5dvw]   ",children:[(0,a.jsx)(i.Z,{variant:"h5",lineHeight:1.3,letterSpacing:"-0.01rem",className:"   max-xs:!text-[26px]   ",children:e.name+(e.degree.startsWith("Інформація")===e.degree.startsWith("Information")?", "+e.degree:"")}),(0,a.jsx)(i.Z,{variant:"body1",fontSize:16,sx:{"&:first-letter":{textTransform:"uppercase"}},children:e.caption})]}),(0,a.jsx)(i.Z,{variant:"body2",className:"xs:!text-[14px]",lineHeight:1.5,letterSpacing:0,children:e.experience})]})]})},t))}),f<u.length&&(0,a.jsx)(c.K,{disableArrow:!0,props:{className:"flex-grow-0 mt-[2dvw] self-center !normal-case !px-[88px] xl:!px-[48px]",onClick:()=>p(Math.min(f+10,u.length))},children:(0,a.jsx)(i.Z,{variant:"body1",className:"xl:text-[14px] text-[16px] tracking-normal w-fit max-w-fit",children:n("more")})}),f>=u.length&&(0,a.jsx)(c.K,{disableArrow:!0,props:{className:"flex-grow-0 mt-[2dvw] self-center !normal-case !px-[88px] xl:!px-[48px]",onClick:()=>{var e;p(10),null===(e=h.current)||void 0===e||e.scrollIntoView({behavior:"instant"})}},children:(0,a.jsx)(i.Z,{variant:"body1",className:"xl:text-[14px] text-[16px] tracking-normal w-fit max-w-fit",children:n("collapse")})})]})}},73105:function(e,t,n){"use strict";n.d(t,{he:function(){return s},k1:function(){return i}});var a=n(16463),r=n(65051);let i=Object.freeze(["uk","en"]),s=Object.freeze({en:"ENG",uk:"УКР"});(0,r.cF)(async e=>{let{locale:t}=e;return i.includes(t)||(0,a.notFound)(),{messages:(await n(67737)("./".concat(t,".json"))).default}})},204:function(e,t,n){"use strict";n.d(t,{jD:function(){return o},rU:function(){return i},tv:function(){return l}});var a=n(5758),r=n(73105);let{Link:i,redirect:s,usePathname:o,useRouter:l}=(0,a.iV)({locales:r.k1})},65205:function(e,t,n){"use strict";n.d(t,{default:function(){return d}});var a=n(57437),r=n(204),i=n(32529),s=n(83719),o=n(18087),l=n(43447);function d(e){let{className:t=""}=e,n=["main"].concat((0,r.jD)().split("/").slice(1,-1)),d=(0,o.useTranslations)("nav");return(0,a.jsx)(l.default,{direction:"up",offset:0,duration:400,delay:800,children:(0,a.jsx)(i.Z,{direction:"row",className:t+" backwards-nav text-themed-gray items-start\n                max-lg:h-[21px]\n                ",children:n.map((e,t)=>(0,a.jsx)(r.rU,{href:"/"+n.slice(0,t+1).map(e=>"main"===e?"":e).join("/"),className:"h-full flex items-center",children:(0,a.jsx)(s.Z,{variant:"caption",className:"hover:text-[#62626a]",lineHeight:1.5,letterSpacing:0,children:d(e)||e})},t))})})}},50450:function(e,t,n){"use strict";n.d(t,{F:function(){return l},K:function(){return o}});var a=n(57437),r=n(75519),i=n(32529),s=n(37169);function o(e){var t;let{children:n,disableArrow:i,props:s={}}=e;return(0,a.jsxs)(r.Z,{...s,className:"".concat(null!==(t=s.className)&&void 0!==t?t:""," !bg-button-primary \n                !capitalize hover:!bg-button-hover-primary \n                [&>*]:!text-white \n                !px-12 !h-14 gap-4 !py-0"),sx:{"&:hover > svg":{transform:"translateX(4px)"}},children:[n,!i&&(0,a.jsxs)("svg",{height:"14",viewBox:"0 0 28 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"transition-transform ease-linear duration-200",children:[(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.2931 7.00003L20.6465 12.6485L21.3537 13.3555L27.7071 7.00001L21.3537 0.644792L20.6465 1.3518L26.2931 7.00003Z",fill:"white"}),(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 6.50024L27 6.50024L27 7.50024L8.74228e-08 7.50024L0 6.50024Z",fill:"white"})]})]})}function l(e){var t;let{children:n,props:r={},disabled:o,direction:l}=e;return(0,a.jsxs)(i.Z,{direction:"row",...r,className:"".concat(null!==(t=r.className)&&void 0!==t?t:""," gap-4 items-start h-full\n            ").concat(o?"[&>*]:!text-themed-gray [&_svg]:!text-themed-gray":"[&:hover>*]:!text-themed-blue [&:hover_svg]:!text-themed-blue","\n             transition-[color] duration-200 ease-linear order-1\n            ").concat(o?"":"cursor-pointer","\n            "),sx:{"&:hover > div":{transform:"left"===l?"translateX(-4px) scaleX(-1)":"translateX(4px)"}},children:[n,(0,a.jsx)(s.Z,{className:"pt-[3px] w-8 transition-transform duration-300 ease-linear\n                    ".concat("left"===l?"-order-1 -scale-x-100":"","\n                     max-lg:pt-0.5 max-lg:w-8\n                     2xl:pt-1\n                     "),sx:{"&::before, &::after":{content:"' '"}},children:(0,a.jsxs)("svg",{width:"auto",height:"auto",viewBox:"0 0 220 82",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"leading-5 text-themed-darker-gray",children:[(0,a.jsx)("path",{d:"M220 35V47H208V58H196V46H0V36H196V24H208V35H220Z",fill:"currentColor"}),(0,a.jsx)("path",{d:"M196 12H184V24H196V12Z",fill:"currentColor"}),(0,a.jsx)("path",{d:"M184 0H172V12H184V0Z",fill:"currentColor"}),(0,a.jsx)("path",{d:"M196 58H184V70H196V58Z",fill:"currentColor"}),(0,a.jsx)("path",{d:"M184 70H172V82H184V70Z",fill:"currentColor"})]})})]})}},43447:function(e,t,n){"use strict";n.r(t),n.d(t,{ChangeBg:function(){return c},default:function(){return d}});var a=n(57437),r=n(37169),i=n(95635),s=n(2265),o=n(17885),l=n(4776);function d(e){let{direction:t,children:n,className:d="",offset:c=30,duration:x=600,delay:m=0,grow:u=!1,fadeDuration:f,fadeDelay:p,disableReplayOnRefresh:h=!1}=e,v=(0,l.Z)().innerWidth;c instanceof o.Z&&(c=c.floor(v)),x instanceof o.Z&&(x=x.floor(v)),m instanceof o.Z&&(m=m.floor(v)),f instanceof o.Z&&(f=f.floor(v)),p instanceof o.Z&&(p=p.floor(v));let[w,g]=s.useState(!1),[b,j]=s.useState(null!=f?f:x);return(0,s.useEffect)(()=>{function e(){g(!0)}return"complete"===window.document.readyState&&e(),window.addEventListener("load",e),()=>window.removeEventListener("load",e)},[]),(0,a.jsx)(a.Fragment,{children:w&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.Z,{className:{left:"animate-slide-left",right:"animate-slide-right",up:"animate-slide-up",down:"animate-slide-down"}[t]+" "+d,style:{animationDuration:"".concat(x,"ms"),animationDelay:"".concat(m,"ms"),"--translate-offset":"string"==typeof c?c:c+"px"},children:(0,a.jsx)(r.Z,{className:"w-full h-full "+(u?"animate-grow":""),children:(0,a.jsx)(i.Z,{in:!0,timeout:b,easing:"linear",style:{transitionDelay:"".concat(null!=p?p:m,"ms")},addEndListener:()=>{h&&j(0)},children:n})},new Date().toString())},h?void 0:new Date().toString())})})}function c(e){let{children:t,className:n="",duration:i=500,delay:o=0}=e,[l,d]=s.useState(!1);return(0,s.useEffect)(()=>{function e(){d(!0)}return"complete"===window.document.readyState&&e(),window.addEventListener("load",e),()=>window.removeEventListener("load",e)},[]),l?(0,a.jsx)(r.Z,{className:"animate-change-bg "+n,style:{animationDuration:"".concat(i,"ms"),animationDelay:"".concat(o,"ms")},children:t}):(0,a.jsx)(r.Z,{className:n+" h-dvh"})}},89699:function(e,t,n){"use strict";n.d(t,{OB:function(){return l},Y_:function(){return d}});var a=n(57437);n(2265);var r=n(32529),i=n(37169),s=n(46011);function o(e){var t;return(0,a.jsx)(r.Z,{bgcolor:e.bgcolor,component:null!==(t=e.component)&&void 0!==t?t:"div",className:"".concat(e.className," h-fit\n          ").concat(!e.disableGap&&" max-xs:gap-[20dvw] gap-[12dvw] 2xl:gap-[10dvw] 3xl:gap-[7dvw]"," \n          ").concat(e.marginBasedYOffset?"w-[84dvw] mx-auto\n          max-lg:w-[90dvw]\n          xl:w-[80dvw]\n          3xl:w-[58dvw]":"px-[8dvw] w-full\n          max-lg:px-[5dvw]\n          xl:px-[10dvw]\n          3xl:px-[8.5dvw]","\n         "),direction:e.direction,dangerouslySetInnerHTML:e.innerHtml?{__html:e.innerHtml}:void 0,sx:{...e.withPadding&&!e.disableGap&&!e.disableBeforeAfter&&{"&::before":{content:"''"},...!e.disableAfter&&{"&::after":{content:"''"}}},...e.sx},ref:e.ref1,children:e.children})}function l(e){let{children:t,component:n,className:r,innerHtml:s,direction:l="column",withPadding:d,disableGap:c=!1,disableBeforeAfter:x=!1,disableAfter:m=!1,sx:u,bgcolor:f,marginBasedXOffset:p,ref1:h}=e;return p?(0,a.jsx)(i.Z,{bgcolor:f,children:(0,a.jsx)(o,{bgcolor:f,component:n,className:r,disableGap:c,marginBasedYOffset:p,direction:l,innerHtml:s,withPadding:d,disableBeforeAfter:x,disableAfter:m,sx:u,ref1:h,children:t})}):(0,a.jsx)(o,{bgcolor:f,component:n,className:r,disableGap:c,marginBasedYOffset:p,direction:l,innerHtml:s,withPadding:d,disableBeforeAfter:x,disableAfter:m,sx:u,ref1:h,children:t})}function d(e){let{children:t,className:n,bgcolor:r}=e;return(0,a.jsx)(l,{bgcolor:r,className:n+" \n        max-xs:mb-[18dvw]\n        xl:pt-[12dvw] xl:pb-[4dvw]\n        3xl:pt-[9dvw] 3xl:pb-[3dvw]\n        ",disableGap:!0,sx:{paddingTop:"13dvw",["@media (max-width: ".concat(s.xl,")")]:{paddingTop:"24dvw"},["@media (max-width: ".concat(s.md,")")]:{paddingTop:"18dvw",paddingBottom:"16dvw"},["@media (max-width: ".concat(s.xs,")")]:{paddingTop:"24dvw",paddingBottom:"12dvw"}},marginBasedXOffset:!0,children:t})}},4776:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(2265);function r(){let[e,t]=(0,a.useState)({innerWidth:0,innerHeight:0});return(0,a.useEffect)(()=>{function e(){t({innerWidth:window.innerWidth,innerHeight:window.innerHeight})}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e}},17885:function(e,t){"use strict";class n{floor(e){var t;let n=null===(t=Object.entries(this).toSorted((e,t)=>parseInt(t[0])-parseInt(e[0])).find(t=>{let[n]=t;return e>=parseInt(n)}))||void 0===t?void 0:t[1];if(void 0===n)throw Error("No breakpoint found for value ".concat(e));return n}constructor(e){Object.assign(this,e)}}t.Z=n},3828:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/timeline-dot.152bf737.svg",height:18,width:18,blurWidth:0,blurHeight:0}},46011:function(e){"use strict";e.exports=JSON.parse('{"xs":"480px","sm":"640px","md":"768px","lg":"991px","xl":"1280px","2xl":"1440px","3xl":"1920px","4xl":"2560px"}')}},function(e){e.O(0,[378,201,544,702,630,438,971,23,744],function(){return e(e.s=98501)}),_N_E=e.O()}]);