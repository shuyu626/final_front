import{b3 as G,I,J as F,L as O,ar as se,M as $,as as le,b4 as ie,aP as ue,b5 as ce,p as _,z as b,W as Y,Q as re,aK as de,b as f,m as X,P as W,aF as j,b6 as ve,az as fe,b7 as he,aL as D,aA as me,b8 as be,aG as ge,b9 as ye,aT as R,ba as we,aa as U,U as Te,bb as xe,F as q,E as B,aE as Ve,bc as Ce,bd as Se,_ as J,a$ as ke,b0 as Pe,at as Be,a1 as S,aC as Ie,b2 as $e,be as We}from"./index-Cy44q8pe.js";import{u as Ee}from"./ssrBoot-BPJuN5bA.js";import{f as _e,a as L}from"./VSelect-DdDgxLNJ.js";const Xe=e=>{const{touchstartX:o,touchendX:n,touchstartY:t,touchendY:s}=e,l=.5,a=16;e.offsetX=n-o,e.offsetY=s-t,Math.abs(e.offsetY)<l*Math.abs(e.offsetX)&&(e.left&&n<o-a&&e.left(e),e.right&&n>o+a&&e.right(e)),Math.abs(e.offsetX)<l*Math.abs(e.offsetY)&&(e.up&&s<t-a&&e.up(e),e.down&&s>t+a&&e.down(e))};function Ye(e,o){var t;const n=e.changedTouches[0];o.touchstartX=n.clientX,o.touchstartY=n.clientY,(t=o.start)==null||t.call(o,{originalEvent:e,...o})}function Re(e,o){var t;const n=e.changedTouches[0];o.touchendX=n.clientX,o.touchendY=n.clientY,(t=o.end)==null||t.call(o,{originalEvent:e,...o}),Xe(o)}function He(e,o){var t;const n=e.changedTouches[0];o.touchmoveX=n.clientX,o.touchmoveY=n.clientY,(t=o.move)==null||t.call(o,{originalEvent:e,...o})}function Me(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:n=>Ye(n,o),touchend:n=>Re(n,o),touchmove:n=>He(n,o)}}function Le(e,o){var v;const n=o.value,t=n!=null&&n.parent?e.parentElement:e,s=(n==null?void 0:n.options)??{passive:!0},l=(v=o.instance)==null?void 0:v.$.uid;if(!t||!l)return;const a=Me(o.value);t._touchHandlers=t._touchHandlers??Object.create(null),t._touchHandlers[l]=a,G(a).forEach(c=>{t.addEventListener(c,a[c],s)})}function ze(e,o){var l,a;const n=(l=o.value)!=null&&l.parent?e.parentElement:e,t=(a=o.instance)==null?void 0:a.$.uid;if(!(n!=null&&n._touchHandlers)||!t)return;const s=n._touchHandlers[t];G(s).forEach(v=>{n.removeEventListener(v,s[v])}),delete n._touchHandlers[t]}const K={mounted:Le,unmounted:ze},Ae=K,Q=Symbol.for("vuetify:v-window"),N=Symbol.for("vuetify:v-window-group"),Z=I({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...F(),...O(),...se()},"VWindow"),z=$()({name:"VWindow",directives:{Touch:K},props:Z(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;const{themeClasses:t}=le(e),{isRtl:s}=ie(),{t:l}=ue(),a=ce(e,N),v=_(),c=b(()=>s.value?!e.reverse:e.reverse),m=Y(!1),x=b(()=>{const d=e.direction==="vertical"?"y":"x",w=(c.value?!m.value:m.value)?"-reverse":"";return`v-window-${d}${w}-transition`}),g=Y(0),i=_(void 0),r=b(()=>a.items.value.findIndex(d=>a.selected.value.includes(d.id)));re(r,(d,h)=>{const w=a.items.value.length,T=w-1;w<=2?m.value=d<h:d===T&&h===0?m.value=!0:d===0&&h===T?m.value=!1:m.value=d<h}),de(Q,{transition:x,isReversed:m,transitionCount:g,transitionHeight:i,rootRef:v});const u=b(()=>e.continuous||r.value!==0),y=b(()=>e.continuous||r.value!==a.items.value.length-1);function k(){u.value&&a.prev()}function E(){y.value&&a.next()}const V=b(()=>{const d=[],h={icon:s.value?e.nextIcon:e.prevIcon,class:`v-window__${c.value?"right":"left"}`,onClick:a.prev,"aria-label":l("$vuetify.carousel.prev")};d.push(u.value?n.prev?n.prev({props:h}):f(X,h,null):f("div",null,null));const w={icon:s.value?e.prevIcon:e.nextIcon,class:`v-window__${c.value?"left":"right"}`,onClick:a.next,"aria-label":l("$vuetify.carousel.next")};return d.push(y.value?n.next?n.next({props:w}):f(X,w,null):f("div",null,null)),d}),C=b(()=>e.touch===!1?e.touch:{...{left:()=>{c.value?k():E()},right:()=>{c.value?E():k()},start:h=>{let{originalEvent:w}=h;w.stopPropagation()}},...e.touch===!0?{}:e.touch});return W(()=>j(f(e.tag,{ref:v,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},t.value,e.class],style:e.style},{default:()=>{var d,h;return[f("div",{class:"v-window__container",style:{height:i.value}},[(d=n.default)==null?void 0:d.call(n,{group:a}),e.showArrows!==!1&&f("div",{class:"v-window__controls"},[V.value])]),(h=n.additional)==null?void 0:h.call(n,{group:a})]}}),[[ve("touch"),C.value]])),{group:a}}}),p=I({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...F(),...fe(),...he()},"VWindowItem"),A=$()({name:"VWindowItem",directives:{Touch:Ae},props:p(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:n}=o;const t=D(Q),s=me(e,N),{isBooted:l}=Ee();if(!t||!s)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const a=Y(!1),v=b(()=>l.value&&(t.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function c(){!a.value||!t||(a.value=!1,t.transitionCount.value>0&&(t.transitionCount.value-=1,t.transitionCount.value===0&&(t.transitionHeight.value=void 0)))}function m(){var u;a.value||!t||(a.value=!0,t.transitionCount.value===0&&(t.transitionHeight.value=R((u=t.rootRef.value)==null?void 0:u.clientHeight)),t.transitionCount.value+=1)}function x(){c()}function g(u){a.value&&we(()=>{!v.value||!a.value||!t||(t.transitionHeight.value=R(u.clientHeight))})}const i=b(()=>{const u=t.isReversed.value?e.reverseTransition:e.transition;return v.value?{name:typeof u!="string"?t.transition.value:u,onBeforeEnter:m,onAfterEnter:c,onEnterCancelled:x,onBeforeLeave:m,onAfterLeave:c,onLeaveCancelled:x,onEnter:g}:!1}),{hasContent:r}=be(e,s.isSelected);return W(()=>f(ye,{transition:i.value,disabled:!l.value},{default:()=>{var u;return[j(f("div",{class:["v-window-item",s.selectedClass.value,e.class],style:e.style},[r.value&&((u=n.default)==null?void 0:u.call(n))]),[[ge,s.isSelected.value]])]}})),{groupItem:s}}}),H=Symbol.for("vuetify:v-tabs"),Ge=I({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...U(Te({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Fe=$()({name:"VTab",props:Ge(),setup(e,o){let{slots:n,attrs:t}=o;const{textColorClasses:s,textColorStyles:l}=xe(e,"sliderColor"),a=_(),v=_(),c=b(()=>e.direction==="horizontal"),m=b(()=>{var g,i;return((i=(g=a.value)==null?void 0:g.group)==null?void 0:i.isSelected.value)??!1});function x(g){var r,u;let{value:i}=g;if(i){const y=(u=(r=a.value)==null?void 0:r.$el.parentElement)==null?void 0:u.querySelector(".v-tab--selected .v-tab__slider"),k=v.value;if(!y||!k)return;const E=getComputedStyle(y).color,V=y.getBoundingClientRect(),C=k.getBoundingClientRect(),d=c.value?"x":"y",h=c.value?"X":"Y",w=c.value?"right":"bottom",T=c.value?"width":"height",ee=V[d],te=C[d],P=ee>te?V[w]-C[w]:V[d]-C[d],ne=Math.sign(P)>0?c.value?"right":"bottom":Math.sign(P)<0?c.value?"left":"top":"center",oe=(Math.abs(P)+(Math.sign(P)<0?V[T]:C[T]))/Math.max(V[T],C[T])||0,ae=V[T]/C[T]||0,M=1.5;Ce(k,{backgroundColor:[E,"currentcolor"],transform:[`translate${h}(${P}px) scale${h}(${ae})`,`translate${h}(${P/M}px) scale${h}(${(oe-1)/M+1})`,"none"],transformOrigin:Array(3).fill(ne)},{duration:225,easing:Se})}}return W(()=>{const g=X.filterProps(e);return f(X,B({symbol:H,ref:a,class:["v-tab",e.class],style:e.style,tabindex:m.value?0:-1,role:"tab","aria-selected":String(m.value),active:!1},g,t,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":x}),{...n,default:()=>{var i;return f(q,null,[((i=n.default)==null?void 0:i.call(n))??e.text,!e.hideSlider&&f("div",{ref:v,class:["v-tab__slider",s.value],style:l.value},null)])}})}),Ve({},a)}}),Oe=I({...U(Z(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),je=$()({name:"VTabsWindow",props:Oe(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:n}=o;const t=D(H,null),s=J(e,"modelValue"),l=b({get(){var a;return s.value!=null||!t?s.value:(a=t.items.value.find(v=>t.selected.value.includes(v.id)))==null?void 0:a.value},set(a){s.value=a}});return W(()=>{const a=z.filterProps(e);return f(z,B({_as:"VTabsWindow"},a,{modelValue:l.value,"onUpdate:modelValue":v=>l.value=v,class:["v-tabs-window",e.class],style:e.style,mandatory:!1,touch:!1}),n)}),{}}}),De=I({...p()},"VTabsWindowItem"),Ue=$()({name:"VTabsWindowItem",props:De(),setup(e,o){let{slots:n}=o;return W(()=>{const t=A.filterProps(e);return f(A,B({_as:"VTabsWindowItem"},t,{class:["v-tabs-window-item",e.class],style:e.style}),n)}),{}}});function qe(e){return e?e.map(o=>We(o)?o:{text:o,value:o}):[]}const Je=I({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,..._e({mandatory:"force",selectedClass:"v-tab-item--selected"}),...ke(),...O()},"VTabs"),pe=$()({name:"VTabs",props:Je(),emits:{"update:modelValue":e=>!0},setup(e,o){let{attrs:n,slots:t}=o;const s=J(e,"modelValue"),l=b(()=>qe(e.items)),{densityClasses:a}=Pe(e),{backgroundColorClasses:v,backgroundColorStyles:c}=Be(S(e,"bgColor")),{scopeId:m}=Ie();return $e({VTab:{color:S(e,"color"),direction:S(e,"direction"),stacked:S(e,"stacked"),fixed:S(e,"fixedTabs"),sliderColor:S(e,"sliderColor"),hideSlider:S(e,"hideSlider")}}),W(()=>{const x=L.filterProps(e),g=!!(t.window||e.items.length>0);return f(q,null,[f(L,B(x,{modelValue:s.value,"onUpdate:modelValue":i=>s.value=i,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},a.value,v.value,e.class],style:[{"--v-tabs-height":R(e.height)},c.value,e.style],role:"tablist",symbol:H},m,n),{default:()=>{var i;return[((i=t.default)==null?void 0:i.call(t))??l.value.map(r=>{var u;return((u=t.tab)==null?void 0:u.call(t,{item:r}))??f(Fe,B(r,{key:r.text,value:r.value}),{default:t[`tab.${r.value}`]?()=>{var y;return(y=t[`tab.${r.value}`])==null?void 0:y.call(t,{item:r})}:void 0})})]}}),g&&f(je,B({modelValue:s.value,"onUpdate:modelValue":i=>s.value=i,key:"tabs-window"},m),{default:()=>{var i;return[l.value.map(r=>{var u;return((u=t.item)==null?void 0:u.call(t,{item:r}))??f(Ue,{value:r.value},{default:()=>{var y;return(y=t[`item.${r.value}`])==null?void 0:y.call(t,{item:r})}})}),(i=t.window)==null?void 0:i.call(t)]}})])}),{}}});export{Ue as V,pe as a,Fe as b,je as c};
