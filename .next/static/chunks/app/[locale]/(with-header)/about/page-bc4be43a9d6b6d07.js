(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[430],{67737:function(e,n,t){var i={"./en.json":[82724,724],"./uk.json":[6583,583]};function a(e){if(!t.o(i,e))return Promise.resolve().then(function(){var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=i[e],a=n[0];return t.e(n[1]).then(function(){return t.t(a,19)})}a.keys=function(){return Object.keys(i)},a.id=67737,e.exports=a},98501:function(e,n,t){Promise.resolve().then(t.bind(t,65205)),Promise.resolve().then(t.bind(t,43447)),Promise.resolve().then(t.bind(t,93111)),Promise.resolve().then(t.bind(t,25218)),Promise.resolve().then(t.bind(t,13180)),Promise.resolve().then(t.bind(t,42472)),Promise.resolve().then(t.bind(t,4736)),Promise.resolve().then(t.bind(t,26976)),Promise.resolve().then(t.bind(t,91442)),Promise.resolve().then(t.bind(t,70621)),Promise.resolve().then(t.bind(t,5415)),Promise.resolve().then(t.bind(t,82591)),Promise.resolve().then(t.bind(t,34327)),Promise.resolve().then(t.t.bind(t,38173,23)),Promise.resolve().then(t.bind(t,3828))},93111:function(e,n,t){"use strict";t.d(n,{default:function(){return u}});var i=t(57437),a=t(46011),r=t(83719),s=t(2265);function o(e){return(0,i.jsx)(r.Z,{variant:"h2",lineHeight:1.3,sx:{"&":{fontSize:"38px"},["@media (max-width: ".concat(a.lg,")")]:{"&":{fontSize:"34px"}},["@media (max-width: ".concat(a.md,")")]:{"&":{fontSize:"32px"}},["@media (max-width: ".concat(a.xs,")")]:{"&":{fontSize:"30px"}}},className:e.className+" max-lg:!leading-[1.2] max-w-[50dvw]\n    max-xs:!max-w-[88dvw]\n    max-lg:!max-w-[76dvw]\n    xl:max-w-[53dvw]\n    3xl:max-w-[48dvw]\n    ",children:e.children})}var l=t(37169),d=t(32529),c=t(50450),x=t(89699),m=t(18087);function u(e){let{teamJson:n}=e,t=(0,m.useTranslations)("about.team"),u=JSON.parse(n),[f,p]=(0,s.useState)(10),w=(0,s.useRef)(null);return(0,i.jsxs)(x.OB,{disableGap:!0,className:"gap-[5dvw]   max-md:gap-[8dvw]   3xl:gap-[3dvw]   ",ref1:w,children:[(0,i.jsx)(o,{className:"   max-xs:mb-[8dvw]   ",children:t("title")}),(0,i.jsx)(l.Z,{className:"grid w-full gap-[12dvw] grid-cols-1 !gap-x-[2dvw] !gap-y-[4dvw]   max-xs:!gap-y-[12dvw] max-xs:mt-[6dvw]   max-lg:gap-x-[3dvw] max-lg:gap-y-[5dvw]   xs:grid-cols-2 xs:gap-0   md:!grid-cols-3   lg:!grid-cols-4   xl:!gap-x-[3dvw]   2xl:!gap-[2dvw]   3xl:!grid-cols-5   ",sx:{["@media (max-width: ".concat(a.xs,")")]:{margin:"0"}},children:u.toSorted((e,n)=>n.priority-e.priority).toSpliced(f,u.length-f).filter(e=>!e.isMain).map((e,n)=>(0,i.jsx)(d.Z,{sx:{["@media (max-width: ".concat(a.xs,")")]:{padding:"0"}},children:(0,i.jsxs)(d.Z,{className:"gap-[2dvw]   max-xs:gap-[8dvw]   ",children:[(0,i.jsx)("img",{src:e.photo?e.photo.image:"male"===e.gender?"/images/about/man_placeholder.jpg":"/images/about/woman_placeholder.jpg",alt:"photo",width:"100%",className:"aspect-square w-[20dvw]   max-xs:!w-full   max-lg:w-auto   "}),(0,i.jsxs)(d.Z,{className:"gap-[1.5dvw]   max-xs:gap-[6dvw]   3xl:gap-[1dvw]   ",sx:{"&.MuiStack-root > .MuiTypography-root:first-letter":{textTransform:"uppercase"}},children:[(0,i.jsxs)(d.Z,{className:"gap-[1dvw]   max-xs:gap-[2dvw]   xl:gap-[0.5dvw]   ",children:[(0,i.jsx)(r.Z,{variant:"h5",lineHeight:1.3,letterSpacing:"-0.01rem",className:"   max-xs:!text-[26px]   ",children:e.name+(e.degree.startsWith("Інформація")===e.degree.startsWith("Information")?", "+e.degree:"")}),(0,i.jsx)(r.Z,{variant:"body1",fontSize:16,sx:{"&:first-letter":{textTransform:"uppercase"}},children:e.caption})]}),(0,i.jsx)(r.Z,{variant:"body2",className:"xs:!text-[14px]",lineHeight:1.5,letterSpacing:0,children:e.experience})]})]})},n))}),f<u.length&&(0,i.jsx)(c.K,{disableArrow:!0,props:{className:"flex-grow-0 mt-[2dvw] self-center !normal-case !px-[88px] xl:!px-[48px]",onClick:()=>p(Math.min(f+10,u.length))},children:(0,i.jsx)(r.Z,{variant:"body1",className:"xl:text-[14px] text-[16px] tracking-normal w-fit max-w-fit",children:t("more")})}),f>=u.length&&(0,i.jsx)(c.K,{disableArrow:!0,props:{className:"flex-grow-0 mt-[2dvw] self-center !normal-case !px-[88px] xl:!px-[48px]",onClick:()=>{var e;p(10),null===(e=w.current)||void 0===e||e.scrollIntoView({behavior:"instant"})}},children:(0,i.jsx)(r.Z,{variant:"body1",className:"xl:text-[14px] text-[16px] tracking-normal w-fit max-w-fit",children:t("collapse")})})]})}},73105:function(e,n,t){"use strict";t.d(n,{he:function(){return s},k1:function(){return r}});var i=t(16463),a=t(65051);let r=Object.freeze(["uk","en"]),s=Object.freeze({en:"ENG",uk:"УКР"});(0,a.cF)(async e=>{let{locale:n}=e;return r.includes(n)||(0,i.notFound)(),{messages:(await t(67737)("./".concat(n,".json"))).default}})},204:function(e,n,t){"use strict";t.d(n,{jD:function(){return o},rU:function(){return r},tv:function(){return l}});var i=t(5758),a=t(73105);let{Link:r,redirect:s,usePathname:o,useRouter:l}=(0,i.iV)({locales:a.k1})},65205:function(e,n,t){"use strict";t.d(n,{default:function(){return d}});var i=t(57437),a=t(204),r=t(32529),s=t(83719),o=t(18087),l=t(43447);function d(e){let{className:n=""}=e,t=["main"].concat((0,a.jD)().split("/").slice(1,-1)),d=(0,o.useTranslations)("nav");return(0,i.jsx)(l.default,{direction:"up",offset:0,duration:400,delay:800,children:(0,i.jsx)(r.Z,{direction:"row",className:n+" backwards-nav text-themed-gray items-center\n                max-lg:h-[21px]\n                ",children:t.map((e,n)=>(0,i.jsx)(a.rU,{href:"/"+t.slice(0,n+1).map(e=>"main"===e?"":e).join("/"),className:"h-full flex items-center",children:(0,i.jsx)(s.Z,{variant:"caption",className:"hover:text-[#62626a]",lineHeight:1.5,letterSpacing:0,children:d(e)||e})},n))})})}},50450:function(e,n,t){"use strict";t.d(n,{K:function(){return r}});var i=t(57437),a=t(75519);function r(e){var n;let{children:t,disableArrow:r,props:s={}}=e;return(0,i.jsxs)(a.Z,{...s,className:"".concat(null!==(n=s.className)&&void 0!==n?n:""," !bg-button-primary \n                !capitalize hover:!bg-button-hover-primary \n                [&>*]:!text-white \n                !px-12 !h-14 gap-4 !py-0"),sx:{"&:hover > svg":{transform:"translateX(4px)"}},children:[t,!r&&(0,i.jsxs)("svg",{height:"14",viewBox:"0 0 28 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"transition-transform ease-linear duration-200",children:[(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.2931 7.00003L20.6465 12.6485L21.3537 13.3555L27.7071 7.00001L21.3537 0.644792L20.6465 1.3518L26.2931 7.00003Z",fill:"white"}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 6.50024L27 6.50024L27 7.50024L8.74228e-08 7.50024L0 6.50024Z",fill:"white"})]})]})}},43447:function(e,n,t){"use strict";t.r(n),t.d(n,{ChangeBg:function(){return c},default:function(){return d}});var i=t(57437),a=t(37169),r=t(95635),s=t(2265),o=t(17885),l=t(4776);function d(e){let{direction:n,children:t,className:d="",offset:c=30,duration:x=600,delay:m=0,grow:u=!1,fadeDuration:f,fadeDelay:p,disableReplayOnRefresh:w=!1}=e,h=(0,l.Z)().innerWidth;c instanceof o.Z&&(c=c.floor(h)),x instanceof o.Z&&(x=x.floor(h)),m instanceof o.Z&&(m=m.floor(h)),f instanceof o.Z&&(f=f.floor(h)),p instanceof o.Z&&(p=p.floor(h));let[v,g]=s.useState(!1),[b,j]=s.useState(null!=f?f:x);return(0,s.useEffect)(()=>{function e(){g(!0)}return"complete"===window.document.readyState&&e(),window.addEventListener("load",e),()=>window.removeEventListener("load",e)},[]),(0,i.jsx)(i.Fragment,{children:v&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a.Z,{className:{left:"animate-slide-left",right:"animate-slide-right",up:"animate-slide-up",down:"animate-slide-down"}[n]+" "+d,style:{animationDuration:"".concat(x,"ms"),animationDelay:"".concat(m,"ms"),"--translate-offset":"string"==typeof c?c:c+"px"},children:(0,i.jsx)(a.Z,{className:"w-full h-full "+(u?"animate-grow":""),children:(0,i.jsx)(r.Z,{in:!0,timeout:b,easing:"linear",style:{transitionDelay:"".concat(null!=p?p:m,"ms")},addEndListener:()=>{w&&j(0)},children:t})},new Date().toString())},w?void 0:new Date().toString())})})}function c(e){let{children:n,className:t="",duration:r=500,delay:o=0}=e,[l,d]=s.useState(!1);return(0,s.useEffect)(()=>{function e(){d(!0)}return"complete"===window.document.readyState&&e(),window.addEventListener("load",e),()=>window.removeEventListener("load",e)},[]),l?(0,i.jsx)(a.Z,{className:"animate-change-bg "+t,style:{animationDuration:"".concat(r,"ms"),animationDelay:"".concat(o,"ms")},children:n}):(0,i.jsx)(a.Z,{className:t+" h-dvh"})}},89699:function(e,n,t){"use strict";t.d(n,{OB:function(){return l},Y_:function(){return d}});var i=t(57437);t(2265);var a=t(32529),r=t(37169),s=t(46011);function o(e){var n;return(0,i.jsx)(a.Z,{bgcolor:e.bgcolor,component:null!==(n=e.component)&&void 0!==n?n:"div",className:"".concat(e.className," h-fit\n          ").concat(!e.disableGap&&" max-xs:gap-[20dvw] gap-[12dvw] 2xl:gap-[10dvw] 3xl:gap-[7dvw]"," \n          ").concat(e.marginBasedYOffset?"w-[84dvw] mx-auto\n          max-lg:w-[90dvw]\n          xl:w-[80dvw]\n          3xl:w-[58dvw]":"px-[8dvw] w-full\n          max-lg:px-[5dvw]\n          xl:px-[10dvw]\n          3xl:px-[8.5dvw]","\n         "),direction:e.direction,dangerouslySetInnerHTML:e.innerHtml?{__html:e.innerHtml}:void 0,sx:{...e.withPadding&&!e.disableGap&&!e.disableBeforeAfter&&{"&::before":{content:"''"},...!e.disableAfter&&{"&::after":{content:"''"}}},...e.sx},ref:e.ref1,children:e.children})}function l(e){let{children:n,component:t,className:a,innerHtml:s,direction:l="column",withPadding:d,disableGap:c=!1,disableBeforeAfter:x=!1,disableAfter:m=!1,sx:u,bgcolor:f,marginBasedXOffset:p,ref1:w}=e;return p?(0,i.jsx)(r.Z,{bgcolor:f,children:(0,i.jsx)(o,{bgcolor:f,component:t,className:a,disableGap:c,marginBasedYOffset:p,direction:l,innerHtml:s,withPadding:d,disableBeforeAfter:x,disableAfter:m,sx:u,ref1:w,children:n})}):(0,i.jsx)(o,{bgcolor:f,component:t,className:a,disableGap:c,marginBasedYOffset:p,direction:l,innerHtml:s,withPadding:d,disableBeforeAfter:x,disableAfter:m,sx:u,ref1:w,children:n})}function d(e){let{children:n,className:t,bgcolor:a}=e;return(0,i.jsx)(l,{bgcolor:a,className:t+" \n        max-xs:mb-[18dvw]\n        xl:pt-[12dvw] xl:pb-[4dvw]\n        3xl:pt-[9dvw] 3xl:pb-[3dvw]\n        ",disableGap:!0,sx:{paddingTop:"13dvw",["@media (max-width: ".concat(s.xl,")")]:{paddingTop:"24dvw"},["@media (max-width: ".concat(s.md,")")]:{paddingTop:"18dvw",paddingBottom:"16dvw"},["@media (max-width: ".concat(s.xs,")")]:{paddingTop:"24dvw",paddingBottom:"12dvw"}},marginBasedXOffset:!0,children:n})}},4776:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var i=t(2265);function a(){let[e,n]=(0,i.useState)({innerWidth:0,innerHeight:0});return(0,i.useEffect)(()=>{function e(){n({innerWidth:window.innerWidth,innerHeight:window.innerHeight})}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e}},17885:function(e,n){"use strict";class t{floor(e){var n;let t=null===(n=Object.entries(this).toSorted((e,n)=>parseInt(n[0])-parseInt(e[0])).find(n=>{let[t]=n;return e>=parseInt(t)}))||void 0===n?void 0:n[1];if(void 0===t)throw Error("No breakpoint found for value ".concat(e));return t}constructor(e){Object.assign(this,e)}}n.Z=t},3828:function(e,n,t){"use strict";t.r(n),n.default={src:"/_next/static/media/timeline-dot.152bf737.svg",height:18,width:18,blurWidth:0,blurHeight:0}},46011:function(e){"use strict";e.exports=JSON.parse('{"xs":"480px","sm":"640px","md":"768px","lg":"991px","xl":"1280px","2xl":"1440px","3xl":"1920px","4xl":"2560px"}')}},function(e){e.O(0,[378,201,544,702,630,438,971,23,744],function(){return e(e.s=98501)}),_N_E=e.O()}]);