exports.id=425,exports.ids=[425],exports.modules={49401:(e,t,s)=>{Promise.resolve().then(s.bind(s,78258)),Promise.resolve().then(s.bind(s,94651)),Promise.resolve().then(s.bind(s,96508)),Promise.resolve().then(s.bind(s,5508)),Promise.resolve().then(s.bind(s,39103)),Promise.resolve().then(s.bind(s,23608))},96508:(e,t,s)=>{"use strict";s.d(t,{default:()=>h});var a=s(10326),r=s(80651),n=s(15813),i=s(25609),d=s(94651);s(17577);var l=s(24886),o=s(49463);function c({tiles:e,translations:t}){return(0,a.jsxs)(a.Fragment,{children:[e,(0,a.jsxs)(r.OB,{component:"footer",className:"!bg-themed-darkgray h-fit justify-between   max-xs:!pt-[20dvw] max-xs:!pb-[4dvw]   xl:!pt-[10dvw]   3xl:!pt-[5dvw]   ",sx:{paddingTop:"8dvw",[`@media (max-width: ${l.lg})`]:{paddingTop:"12dvw"},[`@media (max-width: ${l.md})`]:{paddingTop:"14dvw"},[`@media (max-width: ${l.xs})`]:{paddIngTop:"20dvw"}},disableGap:!0,children:[(0,a.jsxs)(n.Z,{direction:"row",className:"min-h-fit justify-between items-start xs:items-center",children:[(0,a.jsxs)(n.Z,{className:"gap-[2dvw]   3xl:gap-[1.5dvw]   ",children:[a.jsx("img",{src:"/images/header/digiuni-bw.svg",alt:"digiuni-bw",className:"max-w-full hidden xs:block"}),a.jsx(i.Z,{variant:"body1",className:"text-themed-gray w-fit !tracking-[-0.02rem]",fontSize:"16px",children:t("slogan")})]}),a.jsx(d.default,{fontWeight:400,className:"text-white !tracking-[-0.03rem]",fontSize:16,showCurrent:!1,linkContainerClassname:"!justify-end",tight:!0,containerClassName:"gap-[1.2rem]"})]}),a.jsx(o.Z,{direction:"up",offset:0,delay:800,duration:.5,children:a.jsx("img",{src:"/images/footer/digiuni-dark-purple.svg",alt:"Digiuni Logo",className:"max-w-[84dvw] mt-[8dvw] mb-[4dvw]   max-xs:!mb-[8dvw] max-xs:!mt-[12dvw]   max-md:mb-[6dvw] max-md:mt-[10dvw]   max-lg:max-w-[90dvw]   xl:max-w-[80dvw] xl:mt-[7dvw] xl:mb-[3dvw]   2xl:max-w-[82dvw]   3xl:mt-[5dvw] 3xl:mb-[2dvw]   "})}),a.jsx(i.Z,{variant:"body2",className:"w-full min-h-fit text-themed-darker-gray py-[3dvw]   max-xs:!text-[12px]   xl:pb-[5dvw]   3xl:py-[2dvw]   ",letterSpacing:"normal",fontSize:14,children:t("copyright")})]})]})}var x=s(62232);function m({className:e=""}){return(0,a.jsxs)(a.Fragment,{children:[a.jsx("img",{src:"/images/commons/bw-tiles.png",alt:"Black and white tiles",className:e+" w-full hidden xs:block"}),a.jsx("img",{src:"/images/commons/bw-tiles-xs.jpg",alt:"Black and white tiles",className:e+" w-full xs:hidden"})]})}function p({className:e=""}){return a.jsx("img",{src:"/images/commons/secondary-to-black-tiles.jpg",alt:"Secondary to black tiles",className:e+" w-full"})}var w=s(37743),v=s(23844);let g=["/news","/news/\\d+"];function h(){let e=(0,w.jD)(),t=g.some(t=>new RegExp(t).test(e));return a.jsx(c,{tiles:a.jsx(x.Z,{className:"max-xs:!bg-secondary",children:t?a.jsx(f,{}):a.jsx(m,{})}),translations:(0,v.useTranslations)("misc")})}function f(){return(0,a.jsxs)(a.Fragment,{children:[a.jsx(m,{className:"hidden xs:block"}),a.jsx(p,{className:"xs:hidden"})]})}},8505:(e,t,s)=>{"use strict";s.d(t,{F:()=>l,K:()=>d});var a=s(10326),r=s(87700),n=s(15813),i=s(62232);function d({children:e,disableArrow:t,props:s={}}){return(0,a.jsxs)(r.Z,{...s,className:`${s.className??""} !bg-button-primary 
                !capitalize hover:!bg-button-hover-primary 
                [&>*]:!text-white 
                !px-12 !h-14 gap-4 !py-0`,sx:{"&:hover > svg":{transform:"translateX(4px)"}},children:[e,!t&&(0,a.jsxs)("svg",{height:"14",viewBox:"0 0 28 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"transition-transform ease-linear duration-200",children:[a.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.2931 7.00003L20.6465 12.6485L21.3537 13.3555L27.7071 7.00001L21.3537 0.644792L20.6465 1.3518L26.2931 7.00003Z",fill:"white"}),a.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 6.50024L27 6.50024L27 7.50024L8.74228e-08 7.50024L0 6.50024Z",fill:"white"})]})]})}function l({children:e,props:t={},disabled:s,direction:r}){return(0,a.jsxs)(n.Z,{direction:"row",...t,className:`${t.className??""} gap-4 items-start h-full
            ${s?"[&>*]:!text-themed-gray [&_svg]:!text-themed-gray":"[&:hover>*]:!text-themed-blue [&:hover_svg]:!text-themed-blue"}
             transition-[color] duration-200 ease-linear order-1
            ${s?"":"cursor-pointer"}
            `,sx:{"&:hover > div":{transform:"left"===r?"translateX(-4px) scaleX(-1)":"translateX(4px)"}},children:[e,a.jsx(i.Z,{className:`pt-[3px] w-8 transition-transform duration-300 ease-linear
                    ${"left"===r?"-order-1 -scale-x-100":""}
                     max-lg:pt-0.5 max-lg:w-8
                     2xl:pt-1
                     `,sx:{"&::before, &::after":{content:"' '"}},children:(0,a.jsxs)("svg",{width:"auto",height:"auto",viewBox:"0 0 220 82",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"leading-5 text-themed-darker-gray",children:[a.jsx("path",{d:"M220 35V47H208V58H196V46H0V36H196V24H208V35H220Z",fill:"currentColor"}),a.jsx("path",{d:"M196 12H184V24H196V12Z",fill:"currentColor"}),a.jsx("path",{d:"M184 0H172V12H184V0Z",fill:"currentColor"}),a.jsx("path",{d:"M196 58H184V70H196V58Z",fill:"currentColor"}),a.jsx("path",{d:"M184 70H172V82H184V70Z",fill:"currentColor"})]})})]})}},7079:(e,t,s)=>{"use strict";s.d(t,{T:()=>m,Z:()=>p});var a=s(10326),r=s(17577),n=s.n(r),i=s(4153),d=s(52321),l=s(15813),o=s(76739),c=s(9861),x=s(23844);class m extends Error{constructor(e){super("Form fields validation failed"),this._errors=e}get errors(){return this._errors}static ofProblemDetails(e){return new m(e.map(({detail:e,properties:t})=>({[Object.keys(t)[0]]:e})))}}function p({children:e,onSubmit:t,messageOverrides:s={},formProps:r={},disableSuccessSnackbar:p=!1}){let[w,v]=n().useState([]),[g,h]=n().useState(null),f=(0,x.useTranslations)("form"),u=n().Children.toArray(e).map(e=>(function e(t){if(t.children&&(t.children=n().Children.toArray(t.children).map(t=>e(t))),t.type===i.Z||t.type===d.Z){let e=w.find(e=>Object.keys(e)[0]===t.props.name);if(e)return n().cloneElement(t,{error:!0,helperText:Object.values(e)[0],onChange:e=>{t.props.onChange&&t.props.onChange(e),v(w.filter(e=>Object.keys(e)[0]!==t.props.name))}})}return t})(e)).map((e,t)=>n().cloneElement(e,{key:t}));return(0,a.jsxs)(l.Z,{onSubmit:async e=>{try{await t(e),h("success")}catch(e){if(!(e instanceof m))throw e;h("error"),v(e.errors)}},...r,component:"form",children:[u.map((e,t)=>e),!p&&a.jsx(o.Z,{open:"success"===g,onClose:()=>h(null),children:a.jsx(c.Z,{severity:"success",variant:"filled",onClose:()=>h(null),children:s.success??f("success")})}),a.jsx(o.Z,{open:"error"===g,onClose:()=>h(null),children:a.jsx(c.Z,{severity:"error",variant:"filled",onClose:()=>h(null),children:s.error??f("error")})})]})}},80651:(e,t,s)=>{"use strict";s.d(t,{OB:()=>l,Y_:()=>o});var a=s(10326);s(17577);var r=s(15813),n=s(62232),i=s(24886);function d(e){return a.jsx(r.Z,{bgcolor:e.bgcolor,component:e.component??"div",className:`${e.className} h-fit
          ${!e.disableGap&&" max-xs:gap-[20dvw] gap-[12dvw] 2xl:gap-[10dvw] 3xl:gap-[7dvw]"} 
          ${e.marginBasedYOffset?`w-[84dvw] mx-auto
          max-lg:w-[90dvw]
          xl:w-[80dvw]
          3xl:w-[58dvw]`:`px-[8dvw] w-full
          max-lg:px-[5dvw]
          xl:px-[10dvw]
          3xl:px-[8.5dvw]`}
         `,direction:e.direction,dangerouslySetInnerHTML:e.innerHtml?{__html:e.innerHtml}:void 0,sx:{...e.withPadding&&!e.disableGap&&!e.disableBeforeAfter&&{"&::before":{content:"''"},...!e.disableAfter&&{"&::after":{content:"''"}}},...e.sx},children:e.children})}function l({children:e,component:t,className:s,innerHtml:r,direction:i="column",withPadding:l,disableGap:o=!1,disableBeforeAfter:c=!1,disableAfter:x=!1,sx:m,bgcolor:p,marginBasedYOffset:w}){return w?a.jsx(n.Z,{bgcolor:p,children:a.jsx(d,{bgcolor:p,component:t,className:s,disableGap:o,marginBasedYOffset:w,direction:i,innerHtml:r,withPadding:l,disableBeforeAfter:c,disableAfter:x,sx:m,children:e})}):a.jsx(d,{bgcolor:p,component:t,className:s,disableGap:o,marginBasedYOffset:w,direction:i,innerHtml:r,withPadding:l,disableBeforeAfter:c,disableAfter:x,sx:m,children:e})}function o({children:e,className:t,bgcolor:s,marginBasedYOffset:r}){return a.jsx(l,{bgcolor:s,className:t+` 
        max-xs:mb-[18dvw]
        xl:pt-[12dvw] xl:pb-[4dvw]
        3xl:pt-[9dvw] 3xl:pb-[3dvw]
        `,disableGap:!0,sx:{paddingTop:"13dvw",[`@media (max-width: ${i.xl})`]:{paddingTop:"24dvw"},[`@media (max-width: ${i.md})`]:{paddingTop:"18dvw",paddingBottom:"16dvw"},[`@media (max-width: ${i.xs})`]:{paddingTop:"24dvw",paddingBottom:"12dvw"}},marginBasedYOffset:!0,children:e})}},68698:(e,t,s)=>{"use strict";s.d(t,{p:()=>a});let a=e=>"NEXT_PUBLIC_API_URL"===e?"/back":process.env[e]},59494:(e,t,s)=>{"use strict";s.d(t,{r$:()=>i,v_:()=>n});var a=s(68698);let r=e=>`${(0,a.p)("SERVER_API_URL")}${e}`;async function n(e,t,s){return await fetch(`${r(e)}`,{method:"POST",headers:{"Content-Type":"application/json",...s},credentials:"include",body:JSON.stringify(t)})}async function i(e,t){return await fetch(`${r(e)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)})}},5874:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var a=s(19510);s(71159);var r=s(77040),n=s(68570);let i=(0,n.createProxy)(String.raw`C:\ksu\front\app\[locale]\(with-header)\conditional-footer.tsx`),{__esModule:d,$$typeof:l}=i;i.default;let o=(0,n.createProxy)(String.raw`C:\ksu\front\app\[locale]\(with-header)\conditional-footer.tsx#default`);async function c({children:e}){return(0,a.jsxs)(a.Fragment,{children:[a.jsx(r.Z,{}),e,a.jsx(o,{})]})}},75866:(e,t,s)=>{"use strict";s.d(t,{OB:()=>o,OP:()=>m,Y_:()=>c,tP:()=>x,vs:()=>p});var a=s(19510);s(71159);var r=s(94787),n=s(87094),i=s.n(n),d=s(21446);function l(e){return a.jsx(r.ZP,{bgcolor:e.bgcolor,component:e.component??"div",className:`${e.className} h-fit
          ${!e.disableGap&&" max-xs:gap-[20dvw] gap-[12dvw] 2xl:gap-[10dvw] 3xl:gap-[7dvw]"} 
          ${e.marginBasedYOffset?`w-[84dvw] mx-auto
          max-lg:w-[90dvw]
          xl:w-[80dvw]
          3xl:w-[58dvw]`:`px-[8dvw] w-full
          max-lg:px-[5dvw]
          xl:px-[10dvw]
          3xl:px-[8.5dvw]`}
         `,direction:e.direction,dangerouslySetInnerHTML:e.innerHtml?{__html:e.innerHtml}:void 0,sx:{...e.withPadding&&!e.disableGap&&!e.disableBeforeAfter&&{"&::before":{content:"''"},...!e.disableAfter&&{"&::after":{content:"''"}}},...e.sx},children:e.children})}function o({children:e,component:t,className:s,innerHtml:r,direction:n="column",withPadding:d,disableGap:o=!1,disableBeforeAfter:c=!1,disableAfter:x=!1,sx:m,bgcolor:p,marginBasedYOffset:w}){return w?a.jsx(i(),{bgcolor:p,children:a.jsx(l,{bgcolor:p,component:t,className:s,disableGap:o,marginBasedYOffset:w,direction:n,innerHtml:r,withPadding:d,disableBeforeAfter:c,disableAfter:x,sx:m,children:e})}):a.jsx(l,{bgcolor:p,component:t,className:s,disableGap:o,marginBasedYOffset:w,direction:n,innerHtml:r,withPadding:d,disableBeforeAfter:c,disableAfter:x,sx:m,children:e})}function c({children:e,className:t,bgcolor:s,marginBasedYOffset:r}){return a.jsx(o,{bgcolor:s,className:t+` 
        max-xs:mb-[18dvw]
        xl:pt-[12dvw] xl:pb-[4dvw]
        3xl:pt-[9dvw] 3xl:pb-[3dvw]
        `,disableGap:!0,sx:{paddingTop:"13dvw",[`@media (max-width: ${d.xl})`]:{paddingTop:"24dvw"},[`@media (max-width: ${d.md})`]:{paddingTop:"18dvw",paddingBottom:"16dvw"},[`@media (max-width: ${d.xs})`]:{paddingTop:"24dvw",paddingBottom:"12dvw"}},marginBasedYOffset:!0,children:e})}function x({children:e,className:t=""}){return a.jsx(r.ZP,{className:t+` gap-6
            max-xs:mt-[10dvw] max-xs:mb-[8dvw]
            xl:gap-[2dvw]
            2xl:gap-[1.5dvw]
            3xl:max-w-[40dvw]
            `,children:e})}function m({children:e}){return a.jsx(i(),{className:"w-[95%]   xl:w-[88%]   2x;w-[86%]   ",children:e})}function p(e){return a.jsx(r.ZP,{className:e.className+` gap-[5dvw]
        max-xs:!gap-[2.5rem]
        xl:gap-[4dvw]
        3xl:gap-[3dvw]
        `,children:e.children})}},21446:e=>{"use strict";e.exports=JSON.parse('{"xs":"480px","sm":"640px","md":"768px","lg":"991px","xl":"1280px","2xl":"1440px","3xl":"1920px","4xl":"2560px"}')}};