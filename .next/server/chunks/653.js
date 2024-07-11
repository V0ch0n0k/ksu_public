"use strict";exports.id=653,exports.ids=[653],exports.modules={87777:(e,t,r)=>{r.d(t,{default:()=>u});var i=r(10326),a=r(15540),n=r(15813),o=r(25609),s=r(23844),l=r(17577),c=r(37070),d=r(11420);function m({children:e,styles:t,props:r}){return r=r??{},i.jsx(c.Z,{...r,sx:{"&:hover":{backgroundColor:d.button["hover-primary"]+" !important",color:"black"},backgroundColor:d.gray.darkest+" !important",color:"white",...t},children:e})}async function p(e,t){return await fetch(`http://localhost:8080${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}var h=r(7079);function u(){let e=(0,s.useTranslations)("feedbackForm"),[t,r]=(0,l.useState)(6),[c,d]=(0,l.useState)(!1);return(0,i.jsxs)(h.Z,{formProps:{className:"w-full h-full items-start gap-4"},onSubmit:async e=>{e.preventDefault();let t=e.currentTarget,i=new FormData(t),a=await p("/feedback",Object.fromEntries(i));if(!a.ok)throw h.T.ofProblemDetails(await a.json());t.reset(),r(6)},messageOverrides:{success:e("success"),error:e("error")},children:[i.jsx(a.Z,{name:"username",required:!0,label:e("name"),variant:"standard",inputProps:{minLength:1},className:"w-full"}),i.jsx(a.Z,{name:"email",required:!0,label:e("email"),variant:"standard",type:"email",className:"w-full bg-none",inputProps:{minLength:1}}),i.jsx(a.Z,{name:"message",id:"message",label:e("message"),variant:"standard",multiline:!0,className:"w-full",rows:t,required:!0,onChange:e=>{r(Math.max(e.target.value.length/47+1,6))},inputProps:{minLength:1}}),i.jsx(m,{styles:{marginTop:"1.75rem",alignSelf:"end"},props:{type:"submit",onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1)},children:(0,i.jsxs)(n.Z,{className:"w-full h-full items-center justify-center gap-4",direction:"row",children:[i.jsx(o.Z,{fontSize:"inherit",fontFamily:"inherit",children:e("send")}),(0,i.jsxs)("svg",{width:"28",height:"14",viewBox:"0 0 28 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:`${c?"invert":""}`,children:[i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.2931 7.00003L20.6465 12.6485L21.3537 13.3555L27.7071 7.00001L21.3537 0.644792L20.6465 1.3518L26.2931 7.00003Z",fill:"white"}),i.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 6.50024L27 6.50024L27 7.50024L8.74228e-08 7.50024L0 6.50024Z",fill:"white"})]})]})})]})}},7079:(e,t,r)=>{r.d(t,{T:()=>p,Z:()=>h});var i=r(10326),a=r(17577),n=r.n(a),o=r(15540),s=r(52321),l=r(15813),c=r(37446),d=r(9861),m=r(23844);class p extends Error{constructor(e){super("Form fields validation failed"),this._errors=e}get errors(){return this._errors}static ofProblemDetails(e){return new p(e.map(({detail:e,properties:t})=>({[Object.keys(t)[0]]:e})))}}function h({children:e,onSubmit:t,messageOverrides:r={},formProps:a={}}){let[h,u]=n().useState([]),[f,g]=n().useState(null),w=(0,m.useTranslations)("form"),x=n().Children.toArray(e).map(e=>(function e(t){if(t.children&&(t.children=n().Children.toArray(t.children).map(t=>e(t))),t.type===o.Z||t.type===s.Z){let e=h.find(e=>Object.keys(e)[0]===t.props.name);if(e)return n().cloneElement(t,{error:!0,helperText:Object.values(e)[0],onChange:e=>{t.props.onChange&&t.props.onChange(e),u(h.filter(e=>Object.keys(e)[0]!==t.props.name))}})}return t})(e)).map((e,t)=>n().cloneElement(e,{key:t}));return(0,i.jsxs)(l.Z,{onSubmit:async e=>{try{await t(e),g("success")}catch(e){if(!(e instanceof p))throw e;g("error"),u(e.errors)}},...a,component:"form",children:[x.map((e,t)=>e),i.jsx(c.Z,{open:"success"===f,onClose:()=>g(null),children:i.jsx(d.Z,{severity:"success",variant:"filled",onClose:()=>g(null),children:r.success??w("success")})}),i.jsx(c.Z,{open:"error"===f,onClose:()=>g(null),children:i.jsx(d.Z,{severity:"error",variant:"filled",onClose:()=>g(null),children:r.error??w("error")})})]})}},9249:(e,t,r)=>{r.d(t,{default:()=>n}),r(17577);var i=r(51426),a=r(10326);let n=(0,i.Z)((0,a.jsx)("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook")},7281:(e,t,r)=>{r.d(t,{default:()=>n}),r(17577);var i=r(51426),a=r(10326);let n=(0,i.Z)((0,a.jsx)("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn")},22360:(e,t,r)=>{r.d(t,{Cc:()=>a,Nr:()=>n,UE:()=>l,ZP:()=>s});var i=r(86389);let a="IBM Plex Serif",n="IBM Plex Mono",o="Inter",s={palette:i,typography:{h1:{fontFamily:a,fontSize:24,"@media (min-width:600px)":{fontSize:28},"@media (min-width:960px)":{fontSize:32},"@media (min-width:1280px)":{fontSize:46},fontWeight:500,lineHeight:1.2,whiteSpace:"pre-wrap",letterSpacing:"-0.02rem"},h2:{fontFamily:a,fontSize:20,"@media (min-width:600px)":{fontSize:24},"@media (min-width:960px)":{fontSize:30},"@media (min-width:1280px)":{fontSize:38},fontWeight:500,lineHeight:1.3,whiteSpace:"pre-wrap",letterSpacing:"-0.01rem"},h3:{fontFamily:a,fontSize:16,"@media (min-width:600px)":{fontSize:20},"@media (min-width:960px)":{fontSize:24},"@media (min-width:1280px)":{fontSize:32},fontWeight:500,lineHeight:1.3,whiteSpace:"pre-wrap",letterSpacing:"-0.01rem"},h4:{fontFamily:a,fontSize:24,fontWeight:500,lineHeight:1.4,whiteSpace:"pre-wrap",letterSpacing:"-0.01rem"},h5:{fontFamily:a,fontSize:20,fontWeight:500,lineHeight:1.4,whiteSpace:"pre-wrap",letterSpacing:"-0.03rem"},h6:{fontFamily:a,fontSize:16,fontWeight:500,lineHeight:1.1,whiteSpace:"pre-wrap",letterSpacing:0},body1:{fontFamily:n,lineHeight:1.5,fontSize:18,fontWeight:400,whiteSpace:"pre-wrap",letterSpacing:0},body2:{fontFamily:o,lineHeight:1.5,fontSize:16,whiteSpace:"pre-wrap",letterSpacing:0},caption:{fontFamily:n,fontSize:14,whiteSpace:"pre-wrap",lineHeight:1.1,letterSpacing:"-0.03rem"}},components:{MuiButton:{styleOverrides:{root:{fontFamily:o,borderRadius:Number.MAX_VALUE,padding:"14px 32px 14px 32px",textTransform:"capitalize",color:(16777215^Number(`0x1${i.primary.main}`)).toString(16).substring(1).toUpperCase()}}},MuiFormLabel:{styleOverrides:{root:{fontFamily:o,fontSize:16,lineHeight:1.4,color:"black",paddingLeft:10,"&.Mui-focused":{paddingLeft:0}}}},MuiInputBase:{styleOverrides:{root:{fontFamily:o,fontSize:16,lineHeight:1.4,color:"black"}}},MuiInputLabel:{styleOverrides:{asterisk:{display:"none"},root:{padding:0,"&::after":{content:"'(optional)'",marginLeft:"0.5rem",transition:"opacity 0.25s ease-in-out, width 0s 0.25s ease-in-out"},"&.Mui-required":{"&::after":{opacity:0,width:0}},"&.Mui-focused":{"&::after":{opacity:0,width:0}}}}}}},l={style:{fontSize:"1.67rem"}}},61802:(e,t,r)=>{r.d(t,{Z:()=>u});var i=r(19510),a=r(94787),n=r(22112),o=r.n(n),s=r(53843),l=r(1245),c=r(68570);let d=(0,c.createProxy)(String.raw`C:\ksu\front\app\_util\components\feedback\form.tsx`),{__esModule:m,$$typeof:p}=d;d.default;let h=(0,c.createProxy)(String.raw`C:\ksu\front\app\_util\components\feedback\form.tsx#default`);async function u({captionVariant:e}){return(0,i.jsxs)(a.ZP,{className:"w-full h-full items-start gap-[20%] justify-between",direction:"row",children:[i.jsx(f,{variant:e}),i.jsx(h,{})]})}async function f({variant:e="h3"}){let t=await (0,s.Z)("feedbackForm");return(0,i.jsxs)(a.ZP,{className:"w-full h-full items-start gap-16",children:[i.jsx(o(),{variant:e,children:t("title")}),(0,i.jsxs)(a.ZP,{className:"gap-10 items-start",children:[i.jsx(g,{name:t("oleh"),email:"email_name@kpi.kharkov.ua"}),i.jsx(g,{name:t("kseniia"),email:"email_name@kpi.kharkov.ua"}),i.jsx(l.g,{direction:"row"})]})]})}function g({name:e,email:t}){return(0,i.jsxs)(a.ZP,{className:"w-full h-full items-start",children:[i.jsx(o(),{variant:"body2",fontWeight:500,children:e}),i.jsx(o(),{variant:"body2",children:t})]})}},1245:(e,t,r)=>{r.d(t,{g:()=>f});var i=r(19510),a=r(94787),n=r(68570);let o=(0,n.createProxy)(String.raw`C:\ksu\front\node_modules\@mui\icons-material\esm\Facebook.js`),{__esModule:s,$$typeof:l}=o;o.default;let c=(0,n.createProxy)(String.raw`C:\ksu\front\node_modules\@mui\icons-material\esm\Facebook.js#default`),d=(0,n.createProxy)(String.raw`C:\ksu\front\node_modules\@mui\icons-material\esm\LinkedIn.js`),{__esModule:m,$$typeof:p}=d;d.default;let h=(0,n.createProxy)(String.raw`C:\ksu\front\node_modules\@mui\icons-material\esm\LinkedIn.js#default`);var u=r(22360);function f({direction:e="column"}){return(0,i.jsxs)(a.ZP,{className:"gap-6 items-start w-[6%]",direction:e,children:[i.jsx(c,{...u.UE}),i.jsx(h,{...u.UE})]})}},86389:e=>{e.exports=JSON.parse('{"primary":{"main":"#000000"},"secondary":{"main":"#FEFFE6"},"info":{"main":"#D5DAFF"},"button":{"hover-primary":"#C6FB50","hover-secondary":"white"},"gray":{"darkest":"#16161D","darker":"#62626A","default":"#AAAAAD","light":"#F7F7F7"}}')}};