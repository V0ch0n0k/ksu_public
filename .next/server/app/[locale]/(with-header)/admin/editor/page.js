(()=>{var e={};e.id=562,e.ids=[562],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},50852:e=>{"use strict";e.exports=require("async_hooks")},6113:e=>{"use strict";e.exports=require("crypto")},12781:e=>{"use strict";e.exports=require("stream")},73837:e=>{"use strict";e.exports=require("util")},83463:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>u,routeModule:()=>h,tree:()=>d}),r(31452),r(48550),r(5874),r(78177),r(35866);var a=r(23191),s=r(88716),n=r(37922),i=r.n(n),o=r(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["[locale]",{children:["(with-header)",{children:["admin",{children:["editor",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,31452)),"C:\\ksu\\front\\app\\[locale]\\(with-header)\\admin\\editor\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,48550)),"C:\\ksu\\front\\app\\[locale]\\(with-header)\\admin\\layout.tsx"]}]},{template:[()=>Promise.resolve().then(r.bind(r,5874)),"C:\\ksu\\front\\app\\[locale]\\(with-header)\\template.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,78177)),"C:\\ksu\\front\\app\\[locale]\\layout.tsx"]}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}],u=["C:\\ksu\\front\\app\\[locale]\\(with-header)\\admin\\editor\\page.tsx"],c="/[locale]/(with-header)/admin/editor/page",p={require:r,loadChunk:()=>Promise.resolve()},h=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/[locale]/(with-header)/admin/editor/page",pathname:"/[locale]/admin/editor",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},83592:(e,t,r)=>{Promise.resolve().then(r.bind(r,91329)),Promise.resolve().then(r.bind(r,23608))},99513:(e,t,r)=>{Promise.resolve().then(r.bind(r,30509))},30509:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var a=r(10326),s=r(7079),n=r(90728),i=r(4153),o=r(25609),l=r(8505),d=r(59494),u=r(35047);function c(){let e=(0,u.useRouter)();return a.jsx(n.a,{children:(0,a.jsxs)(s.Z,{onSubmit:async t=>{t.preventDefault();let r=new FormData(t.currentTarget),a=await (0,d.v_)("/login",{},{Authorization:"Basic "+btoa(`${r.get("username")}:${r.get("password")}`)});if(!a.ok){if(401===a.status){console.log(await a.text());return}throw s.T.ofProblemDetails(await a.json())}e.refresh()},formProps:{className:"h-[80dvh] items-center justify-center pt-[10dvh] gap-4 px-[25dvw] md:px-[40dvw] 3xl:px-[30dvw]"},disableSuccessSnackbar:!0,children:[a.jsx(i.Z,{name:"username",label:"Username",variant:"outlined",fullWidth:!0,required:!0}),a.jsx(i.Z,{name:"password",label:"Password",variant:"outlined",fullWidth:!0,type:"password",required:!0}),a.jsx(l.K,{props:{type:"submit",className:"mt-6"},children:a.jsx(o.Z,{variant:"body2",children:"Login"})})]})})}r(17577);var p=r(62232),h=r(80651);function m({children:e}){return a.jsx(n.a,{fallback:a.jsx(p.Z,{className:"h-dvh"}),children:a.jsx(x,{children:e})})}function x(e){return a.jsx(a.Fragment,{children:document.cookie.includes("BearerTail")||document.cookie.includes("BearerTail")?a.jsx(h.Y_,{children:e.children}):a.jsx(c,{})})}},90728:(e,t,r)=>{"use strict";r.d(t,{a:()=>i});var a=r(17577),s=r(87275),n=r(10326);function i(e){let{children:t,defer:r=!1,fallback:i=null}=e,[o,l]=a.useState(!1);return(0,s.default)(()=>{r||l(!0)},[r]),a.useEffect(()=>{r&&l(!0)},[r]),(0,n.jsx)(a.Fragment,{children:o?t:i})}},31452:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var a=r(19510);r(71159);var s=r(97723),n=r(94787);function i(){return a.jsx(n.Z,{className:"gap-10",children:a.jsx(s.ZP,{})})}},48550:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});let a=(0,r(68570).createProxy)(String.raw`C:\ksu\front\app\[locale]\(with-header)\admin\layout.tsx#default`)}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[937,514,415,84,185,246,595,218,255,558],()=>r(83463));module.exports=a})();