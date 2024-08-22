import{E as v,G as y,J as C,M as B,b as i,bM as z,I as S,bN as K,s as b,be as J,az as H,b8 as W,a8 as Y,ab as q,a0 as f,b9 as Q,ag as X,aH as Z,B as I,aC as p,F as ee,z as te,c4 as V,b1 as _,c5 as $,o as ae,c as ne,w as se}from"./index-B_MsKRGK.js";import{_ as le}from"./_plugin-vue_export-helper-DlAUqK2U.js";const re=v({divider:[Number,String],...y()},"VBreadcrumbsDivider"),ie=C()({name:"VBreadcrumbsDivider",props:re(),setup(e,n){let{slots:t}=n;return B(()=>{var s;return i("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((s=t==null?void 0:t.default)==null?void 0:s.call(t))??e.divider])}),{}}}),ce=v({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...y(),...z(),...S({tag:"li"})},"VBreadcrumbsItem"),oe=C()({name:"VBreadcrumbsItem",props:ce(),setup(e,n){let{slots:t,attrs:s}=n;const a=K(e,s),l=b(()=>{var c;return e.active||((c=a.isActive)==null?void 0:c.value)}),u=b(()=>l.value?e.activeColor:e.color),{textColorClasses:o,textColorStyles:r}=J(u);return B(()=>i(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":l.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:l.value&&e.activeClass},o.value,e.class],style:[r.value,e.style],"aria-current":l.value?"page":void 0},{default:()=>{var c,k;return[a.isLink.value?i("a",{class:"v-breadcrumbs-item--link",href:a.href.value,"aria-current":l.value?"page":void 0,onClick:a.navigate},[((k=t.default)==null?void 0:k.call(t))??e.title]):((c=t.default)==null?void 0:c.call(t))??e.title]}})),{}}}),ue=v({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:H,items:{type:Array,default:()=>[]},...y(),...W(),...Y(),...S({tag:"ul"})},"VBreadcrumbs"),de=C()({name:"VBreadcrumbs",props:ue(),setup(e,n){let{slots:t}=n;const{backgroundColorClasses:s,backgroundColorStyles:a}=q(f(e,"bgColor")),{densityClasses:l}=Q(e),{roundedClasses:u}=X(e);Z({VBreadcrumbsDivider:{divider:f(e,"divider")},VBreadcrumbsItem:{activeClass:f(e,"activeClass"),activeColor:f(e,"activeColor"),color:f(e,"color"),disabled:f(e,"disabled")}});const o=b(()=>e.items.map(r=>typeof r=="string"?{item:{title:r},raw:r}:{item:r,raw:r}));return B(()=>{const r=!!(t.prepend||e.icon);return i(e.tag,{class:["v-breadcrumbs",s.value,l.value,u.value,e.class],style:[a.value,e.style]},{default:()=>{var c;return[r&&i("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[t.prepend?i(p,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},t.prepend):i(I,{key:"prepend-icon",start:!0,icon:e.icon},null)]),o.value.map((k,d,N)=>{var w;let{item:m,raw:x}=k;return i(ee,null,[((w=t.item)==null?void 0:w.call(t,{item:m,index:d}))??i(oe,te({key:d,disabled:d>=N.length-1},typeof m=="string"?{title:m}:m),{default:t.title?()=>{var g;return(g=t.title)==null?void 0:g.call(t,{item:m,index:d})}:void 0}),d<N.length-1&&i(ie,null,{default:t.divider?()=>{var g;return(g=t.divider)==null?void 0:g.call(t,{item:x,index:d})}:void 0})])}),(c=t.default)==null?void 0:c.call(t)]}})}),{}}}),A=V.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}),E=V.reduce((e,n)=>{const t="offset"+_(n);return e[t]={type:[String,Number],default:null},e},{}),R=V.reduce((e,n)=>{const t="order"+_(n);return e[t]={type:[String,Number],default:null},e},{}),j={col:Object.keys(A),offset:Object.keys(E),order:Object.keys(R)};function fe(e,n,t){let s=e;if(!(t==null||t===!1)){if(n){const a=n.replace(e,"");s+=`-${a}`}return e==="col"&&(s="v-"+s),e==="col"&&(t===""||t===!0)||(s+=`-${t}`),s.toLowerCase()}}const me=["auto","start","end","center","baseline","stretch"],ge=v({cols:{type:[Boolean,String,Number],default:!1},...A,offset:{type:[String,Number],default:null},...E,order:{type:[String,Number],default:null},...R,alignSelf:{type:String,default:null,validator:e=>me.includes(e)},...y(),...S()},"VCol"),he=C()({name:"VCol",props:ge(),setup(e,n){let{slots:t}=n;const s=b(()=>{const a=[];let l;for(l in j)j[l].forEach(o=>{const r=e[o],c=fe(l,o,r);c&&a.push(c)});const u=a.some(o=>o.startsWith("v-col-"));return a.push({"v-col":!u||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),a});return()=>{var a;return $(e.tag,{class:[s.value,e.class],style:e.style},(a=t.default)==null?void 0:a.call(t))}}}),h=["start","end","center"],D=["space-between","space-around","space-evenly"];function P(e,n){return V.reduce((t,s)=>{const a=e+_(s);return t[a]=n(),t},{})}const be=[...h,"baseline","stretch"],G=e=>be.includes(e),O=P("align",()=>({type:String,default:null,validator:G})),ve=[...h,...D],M=e=>ve.includes(e),T=P("justify",()=>({type:String,default:null,validator:M})),ye=[...h,...D,"stretch"],F=e=>ye.includes(e),U=P("alignContent",()=>({type:String,default:null,validator:F})),L={align:Object.keys(O),justify:Object.keys(T),alignContent:Object.keys(U)},Ce={align:"align",justify:"justify",alignContent:"align-content"};function ke(e,n,t){let s=Ce[e];if(t!=null){if(n){const a=n.replace(e,"");s+=`-${a}`}return s+=`-${t}`,s.toLowerCase()}}const Se=v({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:G},...O,justify:{type:String,default:null,validator:M},...T,alignContent:{type:String,default:null,validator:F},...U,...y(),...S()},"VRow"),Pe=C()({name:"VRow",props:Se(),setup(e,n){let{slots:t}=n;const s=b(()=>{const a=[];let l;for(l in L)L[l].forEach(u=>{const o=e[u],r=ke(l,u,o);r&&a.push(r)});return a.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),a});return()=>{var a;return $(e.tag,{class:["v-row",s.value,e.class],style:e.style},(a=t.default)==null?void 0:a.call(t))}}}),Ve={__name:"breadcrumbs",props:{title:{type:Array,default:()=>[""]}},setup(e){return(n,t)=>(ae(),ne("div",null,[i(de,{items:e.title,class:"ml-15 mt-5"},{divider:se(()=>[i(I,{icon:"mdi-chevron-right"})]),_:1},8,["items"])]))}},Ne=le(Ve,[["__scopeId","data-v-f701aa16"]]);export{he as V,Ne as _,Pe as a};
