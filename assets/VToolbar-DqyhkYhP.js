import{G as y,H as x,J as T,K as V,N as k,b as a,an as R,ao as I,ar as E,as as w,au as D,a1 as U,av as z,aw as F,az as G,at as J,b5 as K,W,s as h,b3 as $,y as j,af as u,aU as n,bf as q}from"./index-DW1dB4o8.js";const A=y({text:String,...x(),...T()},"VToolbarTitle"),L=V()({name:"VToolbarTitle",props:A(),setup(e,o){let{slots:t}=o;return k(()=>{const s=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[s&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(l=t.default)==null?void 0:l.call(t)])]}})}),{}}}),M=[null,"prominent","default","comfortable","compact"],O=y({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>M.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...R(),...x(),...I(),...E(),...T({tag:"header"}),...w()},"VToolbar"),X=V()({name:"VToolbar",props:O(),setup(e,o){var c;let{slots:t}=o;const{backgroundColorClasses:s,backgroundColorStyles:l}=D(U(e,"color")),{borderClasses:_}=z(e),{elevationClasses:C}=F(e),{roundedClasses:B}=G(e),{themeClasses:P}=J(e),{rtlClasses:N}=K(),i=W(!!(e.extended||(c=t.extension)!=null&&c.call(t))),d=h(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),r=h(()=>i.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return $({VBtn:{variant:"text"}}),k(()=>{var g;const S=!!(e.title||t.title),H=!!(t.image||e.image),m=(g=t.extension)==null?void 0:g.call(t);return i.value=!!(e.extended||m),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},s.value,_.value,C.value,B.value,P.value,N.value,e.class],style:[l.value,e.style]},{default:()=>[H&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(u,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(j,{key:"image-img",cover:!0,src:e.image},null)]),a(u,{defaults:{VTabs:{height:n(d.value)}}},{default:()=>{var v,b,f;return[a("div",{class:"v-toolbar__content",style:{height:n(d.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(v=t.prepend)==null?void 0:v.call(t)]),S&&a(L,{key:"title",text:e.title},{text:t.title}),(b=t.default)==null?void 0:b.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(f=t.append)==null?void 0:f.call(t)])])]}}),a(u,{defaults:{VTabs:{height:n(r.value)}}},{default:()=>[a(q,null,{default:()=>[i.value&&a("div",{class:"v-toolbar__extension",style:{height:n(r.value)}},[m])]})]})]})}),{contentHeight:d,extensionHeight:r}}});export{X as V,L as a,O as m};
