import{m as R,V}from"./VToolbar-Bz4z7qPG.js";import{G as P,n as I,W as f,s as o,X as E,O as y,P as L,Y as k,Z as x,K as M,_ as U,$ as z,a0 as C,a1 as w,N as F,b as O,A as W,a2 as Y}from"./index-DAotSVBs.js";import{u as q}from"./ssrBoot-CvjFJ1CD.js";const G=P({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function K(e){let b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:v}=b;let d=0,s=0;const l=I(null),u=f(0),r=f(0),m=f(0),p=f(!1),n=f(!1),i=o(()=>Number(e.scrollThreshold)),H=o(()=>E((i.value-u.value)/i.value||0)),h=()=>{const t=l.value;if(!t||v&&!v.value)return;d=u.value,u.value="window"in t?t.pageYOffset:t.scrollTop;const c=t instanceof Window?document.documentElement.scrollHeight:t.scrollHeight;if(s!==c){s=c;return}n.value=u.value<d,m.value=Math.abs(u.value-i.value)};return y(n,()=>{r.value=r.value||u.value}),y(p,()=>{r.value=0}),L(()=>{y(()=>e.scrollTarget,t=>{var S;const c=t?document.querySelector(t):window;c&&c!==l.value&&((S=l.value)==null||S.removeEventListener("scroll",h),l.value=c,l.value.addEventListener("scroll",h,{passive:!0}))},{immediate:!0})}),k(()=>{var t;(t=l.value)==null||t.removeEventListener("scroll",h)}),v&&y(v,h,{immediate:!0}),{scrollThreshold:i,currentScroll:u,currentThreshold:m,isScrollActive:p,scrollRatio:H,isScrollingUp:n,savedScroll:r}}const X=P({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...R(),...x(),...G(),height:{type:[Number,String],default:64}},"VAppBar"),j=M()({name:"VAppBar",props:X(),emits:{"update:modelValue":e=>!0},setup(e,b){let{slots:v}=b;const d=I(),s=U(e,"modelValue"),l=o(()=>{var g;const a=new Set(((g=e.scrollBehavior)==null?void 0:g.split(" "))??[]);return{hide:a.has("hide"),fullyHide:a.has("fully-hide"),inverted:a.has("inverted"),collapse:a.has("collapse"),elevate:a.has("elevate"),fadeImage:a.has("fade-image")}}),u=o(()=>{const a=l.value;return a.hide||a.fullyHide||a.inverted||a.collapse||a.elevate||a.fadeImage||!s.value}),{currentScroll:r,scrollThreshold:m,isScrollingUp:p,scrollRatio:n}=K(e,{canScroll:u}),i=o(()=>l.value.hide||l.value.fullyHide),H=o(()=>e.collapse||l.value.collapse&&(l.value.inverted?n.value>0:n.value===0)),h=o(()=>e.flat||l.value.fullyHide&&!s.value||l.value.elevate&&(l.value.inverted?r.value>0:r.value===0)),t=o(()=>l.value.fadeImage?l.value.inverted?1-n.value:n.value:void 0),c=o(()=>{var B,T;const a=Number(((B=d.value)==null?void 0:B.contentHeight)??e.height),g=Number(((T=d.value)==null?void 0:T.extensionHeight)??0);return i.value?r.value<m.value||l.value.fullyHide?a+g:a:a+g});z(o(()=>!!e.scrollBehavior),()=>{Y(()=>{i.value?l.value.inverted?s.value=r.value>m.value:s.value=p.value||r.value<m.value:s.value=!0})});const{ssrBootStyles:S}=q(),{layoutItemStyles:A,layoutIsReady:N}=C({id:e.name,order:o(()=>parseInt(e.order,10)),position:w(e,"location"),layoutSize:c,elementSize:f(void 0),active:s,absolute:w(e,"absolute")});return F(()=>{const a=V.filterProps(e);return O(V,W({ref:d,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...A.value,"--v-toolbar-image-opacity":t.value,height:void 0,...S.value},e.style]},a,{collapse:H.value,flat:h.value}),v)}),N}});export{j as V};