"use strict";exports.id=926,exports.ids=[926],exports.modules={90728:(e,t,r)=>{r.d(t,{a:()=>u});var n=r(17577),i=r(87275),a=r(10326);function u(e){let{children:t,defer:r=!1,fallback:u=null}=e,[o,l]=n.useState(!1);return(0,i.default)(()=>{r||l(!0)},[r]),n.useEffect(()=>{r&&l(!0)},[r]),(0,a.jsx)(n.Fragment,{children:o?t:u})}},7291:(e,t,r)=>{r.d(t,{$l:()=>u,BN:()=>j,DY:()=>E,J$:()=>q,JN:()=>p,LI:()=>k,PM:()=>s,W6:()=>b,i_:()=>a,ko:()=>K,kw:()=>S,mf:()=>l,o8:()=>o,qC:()=>D,s6:()=>H,sj:()=>P,u3:()=>A,u_:()=>$,w6:()=>L,xD:()=>Q});var n=r(17577);let i=()=>{},a=i(),u=Object,o=e=>e===a,l=e=>"function"==typeof e,s=(e,t)=>({...e,...t}),d=e=>l(e.then),c=new WeakMap,f=0,g=e=>{let t,r;let n=typeof e,i=e&&e.constructor,a=i==Date;if(u(e)!==e||a||i==RegExp)t=a?e.toJSON():"symbol"==n?e.toString():"string"==n?JSON.stringify(e):""+e;else{if(t=c.get(e))return t;if(t=++f+"~",c.set(e,t),i==Array){for(r=0,t="@";r<e.length;r++)t+=g(e[r])+",";c.set(e,t)}if(i==u){t="#";let n=u.keys(e).sort();for(;!o(r=n.pop());)o(e[r])||(t+=r+":"+g(e[r])+",");c.set(e,t)}}return t},E=new WeakMap,w={},R={},_="undefined",v=typeof window!=_,h=typeof document!=_,T=()=>v&&typeof window.requestAnimationFrame!=_,p=(e,t)=>{let r=E.get(e);return[()=>!o(t)&&e.get(t)||w,n=>{if(!o(t)){let i=e.get(t);t in R||(R[t]=i),r[5](t,s(i,n),i||w)}},r[6],()=>!o(t)&&t in R?R[t]:!o(t)&&e.get(t)||w]},m=!0,[V,y]=v&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[i,i],O={initFocus:e=>(h&&document.addEventListener("visibilitychange",e),V("focus",e),()=>{h&&document.removeEventListener("visibilitychange",e),y("focus",e)}),initReconnect:e=>{let t=()=>{m=!0,e()},r=()=>{m=!1};return V("online",t),V("offline",r),()=>{y("online",t),y("offline",r)}}},L=!n.useId,b=!v||"Deno"in window,S=e=>T()?window.requestAnimationFrame(e):setTimeout(e,1),k=b?n.useEffect:n.useLayoutEffect,C="undefined"!=typeof navigator&&navigator.connection,N=!b&&C&&(["slow-2g","2g"].includes(C.effectiveType)||C.saveData),D=e=>{if(l(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?g(e):"",t]},I=0,A=()=>++I;var P={__proto__:null,ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function j(...e){let[t,r,n,i]=e,u=s({populateCache:!0,throwOnError:!0},"boolean"==typeof i?{revalidate:i}:i||{}),c=u.populateCache,f=u.rollbackOnError,g=u.optimisticData,w=e=>"function"==typeof f?f(e):!1!==f,R=u.throwOnError;if(l(r)){let e=[];for(let n of t.keys())!/^\$(inf|sub)\$/.test(n)&&r(t.get(n)._k)&&e.push(n);return Promise.all(e.map(_))}return _(r);async function _(r){let i;let[s]=D(r);if(!s)return;let[f,_]=p(t,s),[v,h,T,m]=E.get(t),V=()=>{let e=v[s];return(l(u.revalidate)?u.revalidate(f().data,r):!1!==u.revalidate)&&(delete T[s],delete m[s],e&&e[0])?e[0](2).then(()=>f().data):f().data};if(e.length<3)return V();let y=n,O=A();h[s]=[O,0];let L=!o(g),b=f(),S=b.data,k=b._c,C=o(k)?S:k;if(L&&_({data:g=l(g)?g(C,S):g,_c:C}),l(y))try{y=y(C)}catch(e){i=e}if(y&&d(y)){if(y=await y.catch(e=>{i=e}),O!==h[s][0]){if(i)throw i;return y}i&&L&&w(i)&&(c=!0,_({data:C,_c:a}))}if(c&&!i&&(l(c)?_({data:c(y,C),error:a,_c:a}):_({data:y,error:a,_c:a})),h[s][1]=A(),Promise.resolve(V()).then(()=>{_({_c:a})}),i){if(R)throw i;return}return y}}let F=(e,t)=>{for(let r in e)e[r][0]&&e[r][0](t)},x=(e,t)=>{if(!E.has(e)){let r=s(O,t),n={},u=j.bind(a,e),o=i,l={},d=(e,t)=>{let r=l[e]||[];return l[e]=r,r.push(t),()=>r.splice(r.indexOf(t),1)},c=(t,r,n)=>{e.set(t,r);let i=l[t];if(i)for(let e of i)e(r,n)},f=()=>{if(!E.has(e)&&(E.set(e,[n,{},{},{},u,c,d]),!b)){let t=r.initFocus(setTimeout.bind(a,F.bind(a,n,0))),i=r.initReconnect(setTimeout.bind(a,F.bind(a,n,1)));o=()=>{t&&t(),i&&i(),E.delete(e)}}};return f(),[e,u,f,o]}return[e,E.get(e)[4]]},[M,W]=x(new Map),$=s({onLoadingSlow:i,onSuccess:i,onError:i,onErrorRetry:(e,t,r,n,i)=>{let a=r.errorRetryCount,u=i.retryCount,l=~~((Math.random()+.5)*(1<<(u<8?u:8)))*r.errorRetryInterval;(o(a)||!(u>a))&&setTimeout(n,l,i)},onDiscarded:i,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:N?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:N?5e3:3e3,compare:(e,t)=>g(e)==g(t),isPaused:()=>!1,cache:M,mutate:W,fallback:{}},{isOnline:()=>m,isVisible:()=>{let e=h&&document.visibilityState;return o(e)||"hidden"!==e}}),J=(e,t)=>{let r=s(e,t);if(t){let{use:n,fallback:i}=e,{use:a,fallback:u}=t;n&&a&&(r.use=n.concat(a)),i&&u&&(r.fallback=s(i,u))}return r},U=(0,n.createContext)({}),q=e=>{let{value:t}=e,r=(0,n.useContext)(U),i=l(t),u=(0,n.useMemo)(()=>i?t(r):t,[i,r,t]),o=(0,n.useMemo)(()=>i?u:J(r,u),[i,r,u]),d=u&&u.provider,c=(0,n.useRef)(a);d&&!c.current&&(c.current=x(d(o.cache||M),u));let f=c.current;return f&&(o.cache=f[0],o.mutate=f[1]),k(()=>{if(f)return f[2]&&f[2](),f[3]},[]),(0,n.createElement)(U.Provider,s(e,{value:o}))},B=v&&window.__SWR_DEVTOOLS_USE__,Y=B?window.__SWR_DEVTOOLS_USE__:[],Z=e=>l(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],z=()=>s($,(0,n.useContext)(U)),G=Y.concat(e=>(t,r,n)=>{let i=r&&((...e)=>{let[n]=D(t),[,,,i]=E.get(M);if(n.startsWith("$inf$"))return r(...e);let a=i[n];return o(a)?r(...e):(delete i[n],a)});return e(t,i,n)}),H=e=>function(...t){let r=z(),[n,i,a]=Z(t),u=J(r,a),o=e,{use:l}=u,s=(l||[]).concat(G);for(let e=s.length;e--;)o=s[e](o);return o(n,i||u.fetcher||null,u)},K=(e,t,r)=>{let n=t[e]||(t[e]=[]);return n.push(r),()=>{let e=n.indexOf(r);e>=0&&(n[e]=n[n.length-1],n.pop())}},Q=(e,t)=>(...r)=>{let[n,i,a]=Z(r),u=(a.use||[]).concat(t);return e(n,i,{...a,use:u})};B&&(window.__SWR_DEVTOOLS_REACT__=n)},12884:(e,t,r)=>{r.d(t,{ZP:()=>l});var n=r(17577),i=r(94095),a=r(7291);let u=n.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),o={dedupe:!0};a.$l.defineProperty(a.J$,"defaultValue",{value:a.u_});let l=(0,a.s6)((e,t,r)=>{let{cache:l,compare:s,suspense:d,fallbackData:c,revalidateOnMount:f,revalidateIfStale:g,refreshInterval:E,refreshWhenHidden:w,refreshWhenOffline:R,keepPreviousData:_}=r,[v,h,T,p]=a.DY.get(l),[m,V]=(0,a.qC)(e),y=(0,n.useRef)(!1),O=(0,n.useRef)(!1),L=(0,n.useRef)(m),b=(0,n.useRef)(t),S=(0,n.useRef)(r),k=()=>S.current,C=()=>k().isVisible()&&k().isOnline(),[N,D,I,A]=(0,a.JN)(l,m),P=(0,n.useRef)({}).current,j=(0,a.o8)(c)?r.fallback[m]:c,F=(e,t)=>{for(let r in P)if("data"===r){if(!s(e[r],t[r])&&(!(0,a.o8)(e[r])||!s(Y,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},x=(0,n.useMemo)(()=>{let e=!!m&&!!t&&((0,a.o8)(f)?!k().isPaused()&&!d&&(!!(0,a.o8)(g)||g):f),r=t=>{let r=(0,a.PM)(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},n=N(),i=A(),u=r(n),o=n===i?u:r(i),l=u;return[()=>{let e=r(N());return F(e,l)?(l.data=e.data,l.isLoading=e.isLoading,l.isValidating=e.isValidating,l.error=e.error,l):(l=e,e)},()=>o]},[l,m]),M=(0,i.useSyncExternalStore)((0,n.useCallback)(e=>I(m,(t,r)=>{F(r,t)||e()}),[l,m]),x[0],x[1]),W=!y.current,$=v[m]&&v[m].length>0,J=M.data,U=(0,a.o8)(J)?j:J,q=M.error,B=(0,n.useRef)(U),Y=_?(0,a.o8)(J)?B.current:J:U,Z=(!$||!!(0,a.o8)(q))&&(W&&!(0,a.o8)(f)?f:!k().isPaused()&&(d?!(0,a.o8)(U)&&g:(0,a.o8)(U)||g)),z=!!(m&&t&&W&&Z),G=(0,a.o8)(M.isValidating)?z:M.isValidating,H=(0,a.o8)(M.isLoading)?z:M.isLoading,K=(0,n.useCallback)(async e=>{let t,n;let i=b.current;if(!m||!i||O.current||k().isPaused())return!1;let u=!0,o=e||{},l=!T[m]||!o.dedupe,d=()=>a.w6?!O.current&&m===L.current&&y.current:m===L.current,c={isValidating:!1,isLoading:!1},f=()=>{D(c)},g=()=>{let e=T[m];e&&e[1]===n&&delete T[m]},E={isValidating:!0};(0,a.o8)(N().data)&&(E.isLoading=!0);try{if(l&&(D(E),r.loadingTimeout&&(0,a.o8)(N().data)&&setTimeout(()=>{u&&d()&&k().onLoadingSlow(m,r)},r.loadingTimeout),T[m]=[i(V),(0,a.u3)()]),[t,n]=T[m],t=await t,l&&setTimeout(g,r.dedupingInterval),!T[m]||T[m][1]!==n)return l&&d()&&k().onDiscarded(m),!1;c.error=a.i_;let e=h[m];if(!(0,a.o8)(e)&&(n<=e[0]||n<=e[1]||0===e[1]))return f(),l&&d()&&k().onDiscarded(m),!1;let o=N().data;c.data=s(o,t)?o:t,l&&d()&&k().onSuccess(t,m,r)}catch(r){g();let e=k(),{shouldRetryOnError:t}=e;!e.isPaused()&&(c.error=r,l&&d()&&(e.onError(r,m,e),(!0===t||(0,a.mf)(t)&&t(r))&&(!k().revalidateOnFocus||!k().revalidateOnReconnect||C())&&e.onErrorRetry(r,m,e,e=>{let t=v[m];t&&t[0]&&t[0](a.sj.ERROR_REVALIDATE_EVENT,e)},{retryCount:(o.retryCount||0)+1,dedupe:!0})))}return u=!1,f(),!0},[m,l]),Q=(0,n.useCallback)((...e)=>(0,a.BN)(l,L.current,...e),[]);if((0,a.LI)(()=>{b.current=t,S.current=r,(0,a.o8)(J)||(B.current=J)}),(0,a.LI)(()=>{if(!m)return;let e=K.bind(a.i_,o),t=0,r=(0,a.ko)(m,v,(r,n={})=>{if(r==a.sj.FOCUS_EVENT){let r=Date.now();k().revalidateOnFocus&&r>t&&C()&&(t=r+k().focusThrottleInterval,e())}else if(r==a.sj.RECONNECT_EVENT)k().revalidateOnReconnect&&C()&&e();else if(r==a.sj.MUTATE_EVENT)return K();else if(r==a.sj.ERROR_REVALIDATE_EVENT)return K(n)});return O.current=!1,L.current=m,y.current=!0,D({_k:V}),Z&&((0,a.o8)(U)||a.W6?e():(0,a.kw)(e)),()=>{O.current=!0,r()}},[m]),(0,a.LI)(()=>{let e;function t(){let t=(0,a.mf)(E)?E(N().data):E;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!N().error&&(w||k().isVisible())&&(R||k().isOnline())?K(o).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[E,w,R,m]),(0,n.useDebugValue)(Y),d&&(0,a.o8)(U)&&m){if(!a.w6&&a.W6)throw Error("Fallback data is required when using suspense in SSR.");b.current=t,S.current=r,O.current=!1;let e=p[m];if((0,a.o8)(e)||u(Q(e)),(0,a.o8)(q)){let e=K(o);(0,a.o8)(Y)||(e.status="fulfilled",e.value=!0),u(e)}else throw q}return{mutate:Q,get data(){return P.data=!0,Y},get error(){return P.error=!0,q},get isValidating(){return P.isValidating=!0,G},get isLoading(){return P.isLoading=!0,H}}})},59364:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(17577),i=r(94095),a=r(7291);let u=n.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),o={dedupe:!0};a.$l.defineProperty(a.J$,"defaultValue",{value:a.u_});let l=(0,a.s6)((e,t,r)=>{let{cache:l,compare:s,suspense:d,fallbackData:c,revalidateOnMount:f,revalidateIfStale:g,refreshInterval:E,refreshWhenHidden:w,refreshWhenOffline:R,keepPreviousData:_}=r,[v,h,T,p]=a.DY.get(l),[m,V]=(0,a.qC)(e),y=(0,n.useRef)(!1),O=(0,n.useRef)(!1),L=(0,n.useRef)(m),b=(0,n.useRef)(t),S=(0,n.useRef)(r),k=()=>S.current,C=()=>k().isVisible()&&k().isOnline(),[N,D,I,A]=(0,a.JN)(l,m),P=(0,n.useRef)({}).current,j=(0,a.o8)(c)?r.fallback[m]:c,F=(e,t)=>{for(let r in P)if("data"===r){if(!s(e[r],t[r])&&(!(0,a.o8)(e[r])||!s(Y,t[r])))return!1}else if(t[r]!==e[r])return!1;return!0},x=(0,n.useMemo)(()=>{let e=!!m&&!!t&&((0,a.o8)(f)?!k().isPaused()&&!d&&(!!(0,a.o8)(g)||g):f),r=t=>{let r=(0,a.PM)(t);return(delete r._k,e)?{isValidating:!0,isLoading:!0,...r}:r},n=N(),i=A(),u=r(n),o=n===i?u:r(i),l=u;return[()=>{let e=r(N());return F(e,l)?(l.data=e.data,l.isLoading=e.isLoading,l.isValidating=e.isValidating,l.error=e.error,l):(l=e,e)},()=>o]},[l,m]),M=(0,i.useSyncExternalStore)((0,n.useCallback)(e=>I(m,(t,r)=>{F(r,t)||e()}),[l,m]),x[0],x[1]),W=!y.current,$=v[m]&&v[m].length>0,J=M.data,U=(0,a.o8)(J)?j:J,q=M.error,B=(0,n.useRef)(U),Y=_?(0,a.o8)(J)?B.current:J:U,Z=(!$||!!(0,a.o8)(q))&&(W&&!(0,a.o8)(f)?f:!k().isPaused()&&(d?!(0,a.o8)(U)&&g:(0,a.o8)(U)||g)),z=!!(m&&t&&W&&Z),G=(0,a.o8)(M.isValidating)?z:M.isValidating,H=(0,a.o8)(M.isLoading)?z:M.isLoading,K=(0,n.useCallback)(async e=>{let t,n;let i=b.current;if(!m||!i||O.current||k().isPaused())return!1;let u=!0,o=e||{},l=!T[m]||!o.dedupe,d=()=>a.w6?!O.current&&m===L.current&&y.current:m===L.current,c={isValidating:!1,isLoading:!1},f=()=>{D(c)},g=()=>{let e=T[m];e&&e[1]===n&&delete T[m]},E={isValidating:!0};(0,a.o8)(N().data)&&(E.isLoading=!0);try{if(l&&(D(E),r.loadingTimeout&&(0,a.o8)(N().data)&&setTimeout(()=>{u&&d()&&k().onLoadingSlow(m,r)},r.loadingTimeout),T[m]=[i(V),(0,a.u3)()]),[t,n]=T[m],t=await t,l&&setTimeout(g,r.dedupingInterval),!T[m]||T[m][1]!==n)return l&&d()&&k().onDiscarded(m),!1;c.error=a.i_;let e=h[m];if(!(0,a.o8)(e)&&(n<=e[0]||n<=e[1]||0===e[1]))return f(),l&&d()&&k().onDiscarded(m),!1;let o=N().data;c.data=s(o,t)?o:t,l&&d()&&k().onSuccess(t,m,r)}catch(r){g();let e=k(),{shouldRetryOnError:t}=e;!e.isPaused()&&(c.error=r,l&&d()&&(e.onError(r,m,e),(!0===t||(0,a.mf)(t)&&t(r))&&(!k().revalidateOnFocus||!k().revalidateOnReconnect||C())&&e.onErrorRetry(r,m,e,e=>{let t=v[m];t&&t[0]&&t[0](a.sj.ERROR_REVALIDATE_EVENT,e)},{retryCount:(o.retryCount||0)+1,dedupe:!0})))}return u=!1,f(),!0},[m,l]),Q=(0,n.useCallback)((...e)=>(0,a.BN)(l,L.current,...e),[]);if((0,a.LI)(()=>{b.current=t,S.current=r,(0,a.o8)(J)||(B.current=J)}),(0,a.LI)(()=>{if(!m)return;let e=K.bind(a.i_,o),t=0,r=(0,a.ko)(m,v,(r,n={})=>{if(r==a.sj.FOCUS_EVENT){let r=Date.now();k().revalidateOnFocus&&r>t&&C()&&(t=r+k().focusThrottleInterval,e())}else if(r==a.sj.RECONNECT_EVENT)k().revalidateOnReconnect&&C()&&e();else if(r==a.sj.MUTATE_EVENT)return K();else if(r==a.sj.ERROR_REVALIDATE_EVENT)return K(n)});return O.current=!1,L.current=m,y.current=!0,D({_k:V}),Z&&((0,a.o8)(U)||a.W6?e():(0,a.kw)(e)),()=>{O.current=!0,r()}},[m]),(0,a.LI)(()=>{let e;function t(){let t=(0,a.mf)(E)?E(N().data):E;t&&-1!==e&&(e=setTimeout(r,t))}function r(){!N().error&&(w||k().isVisible())&&(R||k().isOnline())?K(o).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[E,w,R,m]),(0,n.useDebugValue)(Y),d&&(0,a.o8)(U)&&m){if(!a.w6&&a.W6)throw Error("Fallback data is required when using suspense in SSR.");b.current=t,S.current=r,O.current=!1;let e=p[m];if((0,a.o8)(e)||u(Q(e)),(0,a.o8)(q)){let e=K(o);(0,a.o8)(Y)||(e.status="fulfilled",e.value=!0),u(e)}else throw q}return{mutate:Q,get data(){return P.data=!0,Y},get error(){return P.error=!0,q},get isValidating(){return P.isValidating=!0,G},get isLoading(){return P.isLoading=!0,H}}}),s=(0,a.xD)(l,e=>(t,r,n)=>(n.revalidateOnFocus=!1,n.revalidateIfStale=!1,n.revalidateOnReconnect=!1,e(t,r,n)))}};