import{E as l,G as o,a9 as f,J as c,aa as g,be as y,a0 as C,s as V,aJ as n,M as d,b as r,I as b,bc as k}from"./index-B_MsKRGK.js";const _=l({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...o(),...f()},"VDivider"),P=c()({name:"VDivider",props:_(),setup(e,s){let{attrs:a,slots:i}=s;const{themeClasses:v}=g(e),{textColorClasses:u,textColorStyles:m}=y(C(e,"color")),h=V(()=>{const t={};return e.length&&(t[e.vertical?"height":"width"]=n(e.length)),e.thickness&&(t[e.vertical?"borderRightWidth":"borderTopWidth"]=n(e.thickness)),t});return d(()=>{const t=r("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},v.value,u.value,e.class],style:[h.value,m.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!a.role||a.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${a.role||"separator"}`},null);return i.default?r("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[t,r("div",{class:"v-divider__content"},[i.default()]),t]):t}),{}}}),S=l({fluid:{type:Boolean,default:!1},...o(),...b()},"VContainer"),w=c()({name:"VContainer",props:S(),setup(e,s){let{slots:a}=s;const{rtlClasses:i}=k();return d(()=>r(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},i.value,e.class],style:e.style},a)),{}}});export{w as V,P as a};
