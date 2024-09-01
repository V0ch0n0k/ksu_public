(()=>{var e={};e.id=871,e.ids=[871],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},50852:e=>{"use strict";e.exports=require("async_hooks")},6113:e=>{"use strict";e.exports=require("crypto")},12781:e=>{"use strict";e.exports=require("stream")},73837:e=>{"use strict";e.exports=require("util")},94951:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>h,tree:()=>d}),r(28659),r(48550),r(5874),r(78177),r(35866);var a=r(23191),s=r(88716),i=r(37922),n=r.n(i),o=r(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["[locale]",{children:["(with-header)",{children:["admin",{children:["editor",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,28659)),"C:\\ksu\\front\\app\\[locale]\\(with-header)\\admin\\editor\\[id]\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,48550)),"C:\\ksu\\front\\app\\[locale]\\(with-header)\\admin\\layout.tsx"]}]},{template:[()=>Promise.resolve().then(r.bind(r,5874)),"C:\\ksu\\front\\app\\[locale]\\(with-header)\\template.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,78177)),"C:\\ksu\\front\\app\\[locale]\\layout.tsx"]}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"]}],c=["C:\\ksu\\front\\app\\[locale]\\(with-header)\\admin\\editor\\[id]\\page.tsx"],u="/[locale]/(with-header)/admin/editor/[id]/page",p={require:r,loadChunk:()=>Promise.resolve()},h=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/[locale]/(with-header)/admin/editor/[id]/page",pathname:"/[locale]/admin/editor/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},82901:(e,t,r)=>{Promise.resolve().then(r.bind(r,71846)),Promise.resolve().then(r.bind(r,91634)),Promise.resolve().then(r.bind(r,39103)),Promise.resolve().then(r.bind(r,23608)),Promise.resolve().then(r.bind(r,54475))},99513:(e,t,r)=>{Promise.resolve().then(r.bind(r,30509))},30509:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var a=r(10326),s=r(7079),i=r(90728),n=r(4153),o=r(25609),l=r(8505),d=r(59494),c=r(35047);function u(){let e=(0,c.useRouter)();return a.jsx(i.a,{children:(0,a.jsxs)(s.Z,{onSubmit:async t=>{t.preventDefault();let r=new FormData(t.currentTarget),a=await (0,d.v_)("/login",{},{Authorization:"Basic "+btoa(`${r.get("username")}:${r.get("password")}`)});if(!a.ok)throw console.log(await a.text()),s.T.ofProblemDetails(await a.json());e.refresh()},formProps:{className:"h-[80dvh] items-center justify-center pt-[10dvh] gap-4 px-[25dvw] md:px-[40dvw] 3xl:px-[30dvw]"},disableSuccessSnackbar:!0,children:[a.jsx(n.Z,{name:"username",label:"Username",variant:"outlined",fullWidth:!0,required:!0}),a.jsx(n.Z,{name:"password",label:"Password",variant:"outlined",fullWidth:!0,type:"password",required:!0}),a.jsx(l.K,{props:{type:"submit",className:"mt-6"},children:a.jsx(o.Z,{variant:"body2",children:"Login"})})]})})}r(17577);var p=r(62232),h=r(80651);function m({children:e}){return a.jsx(i.a,{fallback:a.jsx(p.Z,{className:"h-dvh"}),children:a.jsx(x,{children:e})})}function x(e){return a.jsx(a.Fragment,{children:document.cookie.includes("BearerTail")||document.cookie.includes("BearerTail")?a.jsx(h.Y_,{children:e.children}):a.jsx(u,{})})}},90728:(e,t,r)=>{"use strict";r.d(t,{a:()=>n});var a=r(17577),s=r(87275),i=r(10326);function n(e){let{children:t,defer:r=!1,fallback:n=null}=e,[o,l]=a.useState(!1);return(0,s.default)(()=>{r||l(!0)},[r]),a.useEffect(()=>{r&&l(!0)},[r]),(0,i.jsx)(a.Fragment,{children:o?t:n})}},91634:(e,t,r)=>{"use strict";r.r(t),r.d(t,{NoSsr:()=>a.a});var a=r(90728)},54475:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a.Z,getTypographyUtilityClass:()=>s.f,typographyClasses:()=>s.Z});var a=r(25609),s=r(79986)},28659:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var a=r(19510),s=r(69958),i=r(22112),n=r.n(i),o=r(87094),l=r.n(o),d=r(31045),c=r(11160),u=r(97723),p=r(75866);async function h({params:e}){(0,c.k)(e.locale);let t=await (0,s.U2)(`/publications/${e.id}`);if(!t.ok)return console.error(t.status+" "+await t.text()),a.jsx(n(),{variant:"h1",children:"Something went wrong"});let r=await t.json();for(let[e,t]of Object.entries(r.localizations))t.preview.image=t.preview.image.image,t.gallery=t.gallery.map(e=>e.image);return a.jsx(p.OB,{children:a.jsx(l(),{children:a.jsx(d.NoSsr,{children:a.jsx(u.ZP,{initialState:new Map(Object.entries(r.localizations).map(([e,t])=>[e.toLowerCase(),t])),id:r.id})})})})}},48550:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>o});var a=r(68570);let s=(0,a.createProxy)(String.raw`C:\ksu\front\app\[locale]\(with-header)\admin\layout.tsx`),{__esModule:i,$$typeof:n}=s;s.default;let o=(0,a.createProxy)(String.raw`C:\ksu\front\app\[locale]\(with-header)\admin\layout.tsx#default`)},69958:(e,t,r)=>{"use strict";r.d(t,{U2:()=>i});let a=e=>"NEXT_PUBLIC_API_URL"===e?"/back":process.env[e],s=e=>`${a("SERVER_API_URL")}${e}`;async function i(e,t){return await fetch(`${s(e)}${t?`?${Object.entries(t).map(e=>`${e[0]}=${e[1]}`).join("&")}`:""}`,{cache:"no-cache",credentials:"include"})}},31045:(e,t,r)=>{let{createProxy:a}=r(68570);e.exports=a("C:\\ksu\\front\\node_modules\\@mui\\base\\NoSsr\\index.js")},22112:(e,t,r)=>{let{createProxy:a}=r(68570);e.exports=a("C:\\ksu\\front\\node_modules\\@mui\\material\\Typography\\index.js")}};var t=require("../../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[937,514,415,185,701,387,425,284],()=>r(94951));module.exports=a})();