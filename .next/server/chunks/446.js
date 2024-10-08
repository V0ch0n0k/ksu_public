exports.id=446,exports.ids=[446],exports.modules={54475:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i.Z,getTypographyUtilityClass:()=>n.f,typographyClasses:()=>n.Z});var i=r(25609),n=r(79986)},19822:(e,t,r)=>{"use strict";r.d(t,{default:()=>f});var i=r(19437),n=r(90434),o=r(35047),a=r(17577),l=r.n(a),s=r(39471);let u="locale";function c(e,t){let r=e;return/^\/(\?.*)?$/.test(t)&&(t=t.slice(1)),r+=t}let d=(0,a.forwardRef)(function(e,t){let{href:r,locale:d,localePrefixMode:f,onClick:m,prefetch:h,prefix:p,...g}=e,v=(0,o.usePathname)(),y=function(){let e;let t=(0,o.useParams)();try{e=(0,s.useLocale)()}catch(r){if("string"!=typeof(null==t?void 0:t[u]))throw r;e=t[u]}return e}(),w=d!==y,[b,x]=(0,a.useState)(()=>{var e;let t;return("object"==typeof(e=r)?null==e.host&&null==e.hostname:!/^[a-z]+:/i.test(e))&&!function(e){let t="object"==typeof e?e.pathname:e;return null!=t&&!t.startsWith("/")}(e)&&("never"!==f||w)?("string"==typeof r?t=c(p,r):(t={...r},r.pathname&&(t.pathname=c(p,r.pathname))),t):r});return w&&(h&&console.error("The `prefetch` prop is currently not supported when using the `locale` prop on `Link` to switch the locale.`"),h=!1),l().createElement(n.default,(0,i.g)({ref:t,href:b,hrefLang:w?d:void 0,onClick:function(e){(function(e,t,r){if(!(r!==t&&null!=r)||!e)return;let i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.pathname;return"/"===e?t:t.replace(e,"")}(e);document.cookie="".concat("NEXT_LOCALE","=").concat(r,"; path=").concat(""!==i?i:"/","; max-age=").concat(31536e3,"; sameSite=").concat("lax")})(v,y,d),m&&m(e)},prefetch:h},g))});d.displayName="ClientLink";var f=d},22112:(e,t,r)=>{let{createProxy:i}=r(68570);e.exports=i("C:\\ksu\\front\\node_modules\\@mui\\material\\Typography\\index.js")},97425:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var i=r(9090),n=r(71159),o=r.n(n);function a(e,t){var r;return"never"!==t.mode&&(null===(r=t.prefixes)||void 0===r?void 0:r[e])||"/"+e}let l=(0,r(68570).createProxy)(String.raw`C:\ksu\front\node_modules\next-intl\dist\esm\navigation\shared\BaseLink.js#default`);var s=r(91622);async function u(e){let{locale:t,localePrefix:r,...n}=e,u=t||await (0,s.Z)(),c=a(u,r);return o().createElement(l,(0,i.g)({locale:u,localePrefixMode:r.mode,prefix:c},n))}var c=r(11160),d=r(58585);function f(e){return function(t){let r;let i=a(t.locale,t.localePrefix),n="never"===t.localePrefix.mode||("object"==typeof(o=t.pathname)?null!=o.host||null!=o.hostname:/^[a-z]+:/i.test(o))?t.pathname:(l=t.pathname,r=i,/^\/(\?.*)?$/.test(l)&&(l=l.slice(1)),r+=l);for(var o,l,s=arguments.length,u=Array(s>1?s-1:0),c=1;c<s;c++)u[c-1]=arguments[c];return e(n,...u)}}let m=f(d.redirect),h=f(d.permanentRedirect);function p(e){return function(t){let r=(0,c.f)();for(var i=arguments.length,n=Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o];return e({...t,locale:r},...n)}}let g=p(m),v=p(h);function y(e){var t;let r={...e,localePrefix:"object"==typeof(t=null==e?void 0:e.localePrefix)?t:{mode:t||"always"}};function n(e){return()=>{throw Error("`".concat(e,"` is not supported in Server Components. You can use this hook if you convert the component to a Client Component."))}}return{Link:function(e){return o().createElement(u,(0,i.g)({localePrefix:r.localePrefix},e))},redirect:function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];return g({pathname:e,localePrefix:r.localePrefix},...i)},permanentRedirect:function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];return v({pathname:e,localePrefix:r.localePrefix},...i)},usePathname:n("usePathname"),useRouter:n("useRouter")}}},53843:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var i=r(71159),n=r(77872);let o=(0,i.cache)(function(){return new Map});var a=r(2003),l=(0,i.cache)(async function(e){let t,r;"string"==typeof e?t=e:e&&(r=e.locale,t=e.namespace);let i=await (0,a.Z)(r);return(0,n.eX)({...i,messageFormatCache:o(),namespace:t,messages:i.messages})})},17710:(e,t,r)=>{"use strict";r.d(t,{default:()=>n.a});var i=r(66794),n=r.n(i)},10221:(e,t,r)=>{"use strict";let{createProxy:i}=r(68570);e.exports=i("C:\\ksu\\front\\node_modules\\next\\dist\\client\\image-component.js")},79241:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(96501);let i=r(95728),n=r(29472);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,s,u,{src:c,sizes:d,unoptimized:f=!1,priority:m=!1,loading:h,className:p,quality:g,width:v,height:y,fill:w=!1,style:b,overrideSrc:x,onLoad:P,onLoadingComplete:C,placeholder:j="empty",blurDataURL:S,fetchPriority:_,layout:E,objectFit:z,objectPosition:k,lazyBoundary:O,lazyRoot:M,...R}=e,{imgConf:I,showAltText:L,blurComplete:A,defaultLoader:D}=t,N=I||n.imageConfigDefault;if("allSizes"in N)l=N;else{let e=[...N.deviceSizes,...N.imageSizes].sort((e,t)=>e-t),t=N.deviceSizes.sort((e,t)=>e-t);l={...N,allSizes:e,deviceSizes:t}}if(void 0===D)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=R.loader||D;delete R.loader,delete R.srcSet;let B="__next_img_default"in F;if(B){if("custom"===l.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...i}=t;return e(i)}}if(E){"fill"===E&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(b={...b,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!d&&(d=t)}let G="",T=a(v),W=a(y);if("object"==typeof(r=c)&&(o(r)||void 0!==r.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,u=e.blurHeight,S=S||e.blurDataURL,G=e.src,!w){if(T||W){if(T&&!W){let t=T/e.width;W=Math.round(e.height*t)}else if(!T&&W){let t=W/e.height;T=Math.round(e.width*t)}}else T=e.width,W=e.height}}let Z=!m&&("lazy"===h||void 0===h);(!(c="string"==typeof c?c:G)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,Z=!1),l.unoptimized&&(f=!0),B&&c.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),m&&(_="high");let U=a(g),V=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:k}:{},L?{}:{color:"transparent"},b),Y=A||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:T,heightInt:W,blurWidth:s,blurHeight:u,blurDataURL:S||"",objectFit:V.objectFit})+'")':'url("'+j+'")',$=Y?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},q=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:a,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,a),c=s.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:s.map((e,i)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:i+1)+u).join(", "),src:l({config:t,src:r,quality:o,width:s[c]})}}({config:l,src:c,unoptimized:f,width:T,quality:U,sizes:d,loader:F});return{props:{...R,loading:Z?"lazy":h,fetchPriority:_,width:T,height:W,decoding:"async",className:p,style:{...V,...$},sizes:q.sizes,srcSet:q.srcSet,src:x||q.src},meta:{unoptimized:f,priority:m,placeholder:j,fill:w}}}},95728:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:a}=e,l=i?40*i:t,s=n?40*n:r,u=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},29472:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return i}});let r=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},66794:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},getImageProps:function(){return l}});let i=r(53370),n=r(79241),o=r(10221),a=i._(r(52049));function l(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let s=o.Image},52049:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},96501:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}}};