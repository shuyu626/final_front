import{m as x,V as P}from"./VToolbar-CuGT8u90.js";import{G as V,n as w,U as p,s as o,W as U,O as b,P as _,X as M,Y as W,K as A,Z as z,_ as C,$ as D,a0 as T,N,b as R,A as E,a1 as F,a2 as O,m as Y}from"./index-CSljMwmO.js";import{u as $}from"./ssrBoot-D0uW4jk1.js";const q=V({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function G(e){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:u}=f;let d=0,s=0;const l=w(null),n=p(0),r=p(0),m=p(0),S=p(!1),c=p(!1),v=o(()=>Number(e.scrollThreshold)),B=o(()=>U((v.value-n.value)/v.value||0)),h=()=>{const t=l.value;if(!t||u&&!u.value)return;d=n.value,n.value="window"in t?t.pageYOffset:t.scrollTop;const i=t instanceof Window?document.documentElement.scrollHeight:t.scrollHeight;if(s!==i){s=i;return}c.value=n.value<d,m.value=Math.abs(n.value-v.value)};return b(c,()=>{r.value=r.value||n.value}),b(S,()=>{r.value=0}),_(()=>{b(()=>e.scrollTarget,t=>{var y;const i=t?document.querySelector(t):window;i&&i!==l.value&&((y=l.value)==null||y.removeEventListener("scroll",h),l.value=i,l.value.addEventListener("scroll",h,{passive:!0}))},{immediate:!0})}),M(()=>{var t;(t=l.value)==null||t.removeEventListener("scroll",h)}),u&&b(u,h,{immediate:!0}),{scrollThreshold:v,currentScroll:n,currentThreshold:m,isScrollActive:S,scrollRatio:B,isScrollingUp:c,savedScroll:r}}const K=V({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...x(),...W(),...q(),height:{type:[Number,String],default:64}},"VAppBar"),Q=A()({name:"VAppBar",props:K(),emits:{"update:modelValue":e=>!0},setup(e,f){let{slots:u}=f;const d=w(),s=z(e,"modelValue"),l=o(()=>{var g;const a=new Set(((g=e.scrollBehavior)==null?void 0:g.split(" "))??[]);return{hide:a.has("hide"),fullyHide:a.has("fully-hide"),inverted:a.has("inverted"),collapse:a.has("collapse"),elevate:a.has("elevate"),fadeImage:a.has("fade-image")}}),n=o(()=>{const a=l.value;return a.hide||a.fullyHide||a.inverted||a.collapse||a.elevate||a.fadeImage||!s.value}),{currentScroll:r,scrollThreshold:m,isScrollingUp:S,scrollRatio:c}=G(e,{canScroll:n}),v=o(()=>l.value.hide||l.value.fullyHide),B=o(()=>e.collapse||l.value.collapse&&(l.value.inverted?c.value>0:c.value===0)),h=o(()=>e.flat||l.value.fullyHide&&!s.value||l.value.elevate&&(l.value.inverted?r.value>0:r.value===0)),t=o(()=>l.value.fadeImage?l.value.inverted?1-c.value:c.value:void 0),i=o(()=>{var H,I;const a=Number(((H=d.value)==null?void 0:H.contentHeight)??e.height),g=Number(((I=d.value)==null?void 0:I.extensionHeight)??0);return v.value?r.value<m.value||l.value.fullyHide?a+g:a:a+g});C(o(()=>!!e.scrollBehavior),()=>{F(()=>{v.value?l.value.inverted?s.value=r.value>m.value:s.value=S.value||r.value<m.value:s.value=!0})});const{ssrBootStyles:y}=$(),{layoutItemStyles:k,layoutIsReady:L}=D({id:e.name,order:o(()=>parseInt(e.order,10)),position:T(e,"location"),layoutSize:i,elementSize:p(void 0),active:s,absolute:T(e,"absolute")});return N(()=>{const a=P.filterProps(e);return R(P,E({ref:d,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...k.value,"--v-toolbar-image-opacity":t.value,height:void 0,...y.value},e.style]},a,{collapse:B.value,flat:h.value}),u)}),L}}),X=V({...O({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),ee=A()({name:"VAppBarNavIcon",props:X(),setup(e,f){let{slots:u}=f;return N(()=>R(Y,E(e,{class:["v-app-bar-nav-icon"]}),u)),{}}}),le=""+new URL("logo-BEDPDuaW.png",import.meta.url).href;export{ee as V,le as _,Q as a};