import{aK as N,W as j,aJ as K,b_ as L,aH as he,n as A,G as T,_ as H,s as m,Y as pe,aM as Ze,a1 as C,az as Ce,b$ as et,aQ as D,H as R,J as $,K as B,N as F,b as f,au as z,ba as tt,bf as nt,b5 as ke,b9 as at,c0 as lt,aZ as _,ab as we,a_ as Ie,I as Ve,ac as Ae,af as Pe,bF as it,ag as Le,bz as Oe,bg as st,bI as rt,O as Te,ah as Ee,aj as Me,bG as ut,a$ as Be,L as xe,ak as De,an as je,c1 as ot,b6 as ct,bJ as dt,F as de,av as ve,C as fe,bb as vt,A as J,aN as ft,aI as O,aq as le,ai as yt,b1 as mt,c2 as te,aC as gt,bP as bt,aD as St,c3 as ye,c4 as ht,aE as me,aF as pt,aa as Ct,bT as ge,c5 as kt}from"./index-DBcWdWYL.js";import{u as wt}from"./ssrBoot-dmkshwJM.js";import{a as It}from"./VContainer-CRu9_oW4.js";const ne=Symbol.for("vuetify:list");function Fe(){const e=N(ne,{hasPrepend:j(!1),updateHasPrepend:()=>null}),i={hasPrepend:j(!1),updateHasPrepend:t=>{t&&(i.hasPrepend.value=t)}};return K(ne,i),e}function _e(){return N(ne,null)}const ie=e=>{const i={activate:t=>{let{id:n,value:l,activated:a}=t;return n=L(n),e&&!l&&a.size===1&&a.has(n)||(l?a.add(n):a.delete(n)),a},in:(t,n,l)=>{let a=new Set;if(t!=null)for(const s of he(t))a=i.activate({id:s,value:!0,activated:new Set(a),children:n,parents:l});return a},out:t=>Array.from(t)};return i},Ge=e=>{const i=ie(e);return{activate:n=>{let{activated:l,id:a,...s}=n;a=L(a);const r=l.has(a)?new Set([a]):new Set;return i.activate({...s,id:a,activated:r})},in:(n,l,a)=>{let s=new Set;if(n!=null){const r=he(n);r.length&&(s=i.in(r.slice(0,1),l,a))}return s},out:(n,l,a)=>i.out(n,l,a)}},Vt=e=>{const i=ie(e);return{activate:n=>{let{id:l,activated:a,children:s,...r}=n;return l=L(l),s.has(l)?a:i.activate({id:l,activated:a,children:s,...r})},in:i.in,out:i.out}},At=e=>{const i=Ge(e);return{activate:n=>{let{id:l,activated:a,children:s,...r}=n;return l=L(l),s.has(l)?a:i.activate({id:l,activated:a,children:s,...r})},in:i.in,out:i.out}},Pt={open:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(t){const a=new Set;a.add(i);let s=l.get(i);for(;s!=null;)a.add(s),s=l.get(s);return a}else return n.delete(i),n},select:()=>null},Ne={open:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(t){let a=l.get(i);for(n.add(i);a!=null&&a!==i;)n.add(a),a=l.get(a);return n}else n.delete(i);return n},select:()=>null},Lt={open:Ne.open,select:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(!t)return n;const a=[];let s=l.get(i);for(;s!=null;)a.push(s),s=l.get(s);return new Set(a)}},se=e=>{const i={select:t=>{let{id:n,value:l,selected:a}=t;if(n=L(n),e&&!l){const s=Array.from(a.entries()).reduce((r,v)=>{let[y,g]=v;return g==="on"&&r.push(y),r},[]);if(s.length===1&&s[0]===n)return a}return a.set(n,l?"on":"off"),a},in:(t,n,l)=>{let a=new Map;for(const s of t||[])a=i.select({id:s,value:!0,selected:new Map(a),children:n,parents:l});return a},out:t=>{const n=[];for(const[l,a]of t.entries())a==="on"&&n.push(l);return n}};return i},Ke=e=>{const i=se(e);return{select:n=>{let{selected:l,id:a,...s}=n;a=L(a);const r=l.has(a)?new Map([[a,l.get(a)]]):new Map;return i.select({...s,id:a,selected:r})},in:(n,l,a)=>{let s=new Map;return n!=null&&n.length&&(s=i.in(n.slice(0,1),l,a)),s},out:(n,l,a)=>i.out(n,l,a)}},Ot=e=>{const i=se(e);return{select:n=>{let{id:l,selected:a,children:s,...r}=n;return l=L(l),s.has(l)?a:i.select({id:l,selected:a,children:s,...r})},in:i.in,out:i.out}},Tt=e=>{const i=Ke(e);return{select:n=>{let{id:l,selected:a,children:s,...r}=n;return l=L(l),s.has(l)?a:i.select({id:l,selected:a,children:s,...r})},in:i.in,out:i.out}},Et=e=>{const i={select:t=>{let{id:n,value:l,selected:a,children:s,parents:r}=t;n=L(n);const v=new Map(a),y=[n];for(;y.length;){const b=y.shift();a.set(b,l?"on":"off"),s.has(b)&&y.push(...s.get(b))}let g=r.get(n);for(;g;){const b=s.get(g),h=b.every(c=>a.get(c)==="on"),o=b.every(c=>!a.has(c)||a.get(c)==="off");a.set(g,h?"on":o?"off":"indeterminate"),g=r.get(g)}return e&&!l&&Array.from(a.entries()).reduce((h,o)=>{let[c,u]=o;return u==="on"&&h.push(c),h},[]).length===0?v:a},in:(t,n,l)=>{let a=new Map;for(const s of t||[])a=i.select({id:s,value:!0,selected:new Map(a),children:n,parents:l});return a},out:(t,n)=>{const l=[];for(const[a,s]of t.entries())s==="on"&&!n.has(a)&&l.push(a);return l}};return i},G=Symbol.for("vuetify:nested"),Re={id:j(),root:{register:()=>null,unregister:()=>null,parents:A(new Map),children:A(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:A(!1),selectable:A(!1),opened:A(new Set),activated:A(new Set),selected:A(new Map),selectedValues:A([])}},Mt=T({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),Bt=e=>{let i=!1;const t=A(new Map),n=A(new Map),l=H(e,"opened",e.opened,o=>new Set(o),o=>[...o.values()]),a=m(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return Vt(e.mandatory);case"single-leaf":return At(e.mandatory);case"independent":return ie(e.mandatory);case"single-independent":default:return Ge(e.mandatory)}}),s=m(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return Tt(e.mandatory);case"leaf":return Ot(e.mandatory);case"independent":return se(e.mandatory);case"single-independent":return Ke(e.mandatory);case"classic":default:return Et(e.mandatory)}}),r=m(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Lt;case"single":return Pt;case"multiple":default:return Ne}}),v=H(e,"activated",e.activated,o=>a.value.in(o,t.value,n.value),o=>a.value.out(o,t.value,n.value)),y=H(e,"selected",e.selected,o=>s.value.in(o,t.value,n.value),o=>s.value.out(o,t.value,n.value));pe(()=>{i=!0});function g(o){const c=[];let u=o;for(;u!=null;)c.unshift(u),u=n.value.get(u);return c}const b=Ze("nested"),h={id:j(),root:{opened:l,activatable:C(e,"activatable"),selectable:C(e,"selectable"),activated:v,selected:y,selectedValues:m(()=>{const o=[];for(const[c,u]of y.value.entries())u==="on"&&o.push(c);return o}),register:(o,c,u)=>{c&&o!==c&&n.value.set(o,c),u&&t.value.set(o,[]),c!=null&&t.value.set(c,[...t.value.get(c)||[],o])},unregister:o=>{if(i)return;t.value.delete(o);const c=n.value.get(o);if(c){const u=t.value.get(c)??[];t.value.set(c,u.filter(d=>d!==o))}n.value.delete(o),l.value.delete(o)},open:(o,c,u)=>{b.emit("click:open",{id:o,value:c,path:g(o),event:u});const d=r.value.open({id:o,value:c,opened:new Set(l.value),children:t.value,parents:n.value,event:u});d&&(l.value=d)},openOnSelect:(o,c,u)=>{const d=r.value.select({id:o,value:c,selected:new Map(y.value),opened:new Set(l.value),children:t.value,parents:n.value,event:u});d&&(l.value=d)},select:(o,c,u)=>{b.emit("click:select",{id:o,value:c,path:g(o),event:u});const d=s.value.select({id:o,value:c,selected:new Map(y.value),children:t.value,parents:n.value,event:u});d&&(y.value=d),h.root.openOnSelect(o,c,u)},activate:(o,c,u)=>{if(!e.activatable)return h.root.select(o,!0,u);b.emit("click:activate",{id:o,value:c,path:g(o),event:u});const d=a.value.activate({id:o,value:c,activated:new Set(v.value),children:t.value,parents:n.value,event:u});d&&(v.value=d)},children:t,parents:n}};return K(G,h),h.root},$e=(e,i)=>{const t=N(G,Re),n=Symbol(Ce()),l=m(()=>e.value!==void 0?e.value:n),a={...t,id:l,open:(s,r)=>t.root.open(l.value,s,r),openOnSelect:(s,r)=>t.root.openOnSelect(l.value,s,r),isOpen:m(()=>t.root.opened.value.has(l.value)),parent:m(()=>t.root.parents.value.get(l.value)),activate:(s,r)=>t.root.activate(l.value,s,r),isActivated:m(()=>t.root.activated.value.has(L(l.value))),select:(s,r)=>t.root.select(l.value,s,r),isSelected:m(()=>t.root.selected.value.get(L(l.value))==="on"),isIndeterminate:m(()=>t.root.selected.value.get(l.value)==="indeterminate"),isLeaf:m(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(l.value,t.id.value,i),pe(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),i&&K(G,a),a},xt=()=>{const e=N(G,Re);K(G,{...e,isGroupActivator:!0})},Dt=et({name:"VListGroupActivator",setup(e,i){let{slots:t}=i;return xt(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),jt=T({activeColor:String,baseColor:String,color:String,collapseIcon:{type:D,default:"$collapse"},expandIcon:{type:D,default:"$expand"},prependIcon:D,appendIcon:D,fluid:Boolean,subgroup:Boolean,title:String,value:null,...R(),...$()},"VListGroup"),be=B()({name:"VListGroup",props:jt(),setup(e,i){let{slots:t}=i;const{isOpen:n,open:l,id:a}=$e(C(e,"value"),!0),s=m(()=>`v-list-group--id-${String(a.value)}`),r=_e(),{isBooted:v}=wt();function y(o){o.stopPropagation(),l(!n.value,o)}const g=m(()=>({onClick:y,class:"v-list-group__header",id:s.value})),b=m(()=>n.value?e.collapseIcon:e.expandIcon),h=m(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&b.value,appendIcon:e.appendIcon||!e.subgroup&&b.value,title:e.title,value:e.value}}));return F(()=>f(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&f(z,{defaults:h.value},{default:()=>[f(Dt,null,{default:()=>[t.activator({props:g.value,isOpen:n.value})]})]}),f(tt,{transition:{component:nt},disabled:!v.value},{default:()=>{var o;return[ke(f("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(o=t.default)==null?void 0:o.call(t)]),[[at,n.value]])]}})]})),{isOpen:n}}}),Ft=T({opacity:[Number,String],...R(),...$()},"VListItemSubtitle"),_t=B()({name:"VListItemSubtitle",props:Ft(),setup(e,i){let{slots:t}=i;return F(()=>f(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Gt=lt("v-list-item-title"),Nt=T({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:D,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:D,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:_(),onClickOnce:_(),...we(),...R(),...Ie(),...Ve(),...Ae(),...Pe(),...it(),...$(),...Le(),...Oe({variant:"text"})},"VListItem"),Se=B()({name:"VListItem",directives:{Ripple:st},props:Nt(),emits:{click:e=>!0},setup(e,i){let{attrs:t,slots:n,emit:l}=i;const a=rt(e,t),s=m(()=>e.value===void 0?a.href.value:e.value),{activate:r,isActivated:v,select:y,isSelected:g,isIndeterminate:b,isGroupActivator:h,root:o,parent:c,openOnSelect:u}=$e(s,!1),d=_e(),p=m(()=>{var S;return e.active!==!1&&(e.active||((S=a.isActive)==null?void 0:S.value)||(o.activatable.value?v.value:g.value))}),k=m(()=>e.link!==!1&&a.isLink.value),w=m(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||!!d&&(o.selectable.value||o.activatable.value||e.value!=null))),V=m(()=>e.rounded||e.nav),E=m(()=>e.color??e.activeColor),q=m(()=>({color:p.value?E.value??e.baseColor:e.baseColor,variant:e.variant}));Te(()=>{var S;return(S=a.isActive)==null?void 0:S.value},S=>{S&&c.value!=null&&o.open(c.value,!0),S&&u(S)},{immediate:!0});const{themeClasses:W}=Ee(e),{borderClasses:Q}=Me(e),{colorClasses:X,colorStyles:Y,variantClasses:M}=ut(q),{densityClasses:I}=Be(e),{dimensionStyles:x}=xe(e),{elevationClasses:Je}=De(e),{roundedClasses:qe}=je(V),We=m(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),Z=m(()=>({isActive:p.value,select:y,isSelected:g.value,isIndeterminate:b.value}));function re(S){var U;l("click",S),w.value&&((U=a.navigate)==null||U.call(a,S),!h&&(o.activatable.value?r(!v.value,S):(o.selectable.value||e.value!=null)&&y(!g.value,S)))}function Qe(S){(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),re(S))}return F(()=>{const S=k.value?"a":e.tag,U=n.title||e.title!=null,Xe=n.subtitle||e.subtitle!=null,ue=!!(e.appendAvatar||e.appendIcon),Ye=!!(ue||n.append),oe=!!(e.prependAvatar||e.prependIcon),ee=!!(oe||n.prepend);return d==null||d.updateHasPrepend(ee),e.activeColor&&ot("active-color",["color","base-color"]),ke(f(S,{class:["v-list-item",{"v-list-item--active":p.value,"v-list-item--disabled":e.disabled,"v-list-item--link":w.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!ee&&(d==null?void 0:d.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&p.value},W.value,Q.value,X.value,I.value,Je.value,We.value,qe.value,M.value,e.class],style:[Y.value,x.value,e.style],href:a.href.value,tabindex:w.value?d?-2:0:void 0,onClick:re,onKeydown:w.value&&!k.value&&Qe},{default:()=>{var ce;return[dt(w.value||p.value,"v-list-item"),ee&&f("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?f(z,{key:"prepend-defaults",disabled:!oe,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var P;return[(P=n.prepend)==null?void 0:P.call(n,Z.value)]}}):f(de,null,[e.prependAvatar&&f(ve,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&f(fe,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),f("div",{class:"v-list-item__spacer"},null)]),f("div",{class:"v-list-item__content","data-no-activator":""},[U&&f(Gt,{key:"title"},{default:()=>{var P;return[((P=n.title)==null?void 0:P.call(n,{title:e.title}))??e.title]}}),Xe&&f(_t,{key:"subtitle"},{default:()=>{var P;return[((P=n.subtitle)==null?void 0:P.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(ce=n.default)==null?void 0:ce.call(n,Z.value)]),Ye&&f("div",{key:"append",class:"v-list-item__append"},[n.append?f(z,{key:"append-defaults",disabled:!ue,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var P;return[(P=n.append)==null?void 0:P.call(n,Z.value)]}}):f(de,null,[e.appendIcon&&f(fe,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&f(ve,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),f("div",{class:"v-list-item__spacer"},null)])]}}),[[ct("ripple"),w.value&&e.ripple]])}),{activate:r,isActivated:v,isGroupActivator:h,isSelected:g,list:d,select:y}}}),Kt=T({color:String,inset:Boolean,sticky:Boolean,title:String,...R(),...$()},"VListSubheader"),Rt=B()({name:"VListSubheader",props:Kt(),setup(e,i){let{slots:t}=i;const{textColorClasses:n,textColorStyles:l}=vt(C(e,"color"));return F(()=>{const a=!!(t.default||e.title);return f(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var s;return[a&&f("div",{class:"v-list-subheader__text"},[((s=t.default)==null?void 0:s.call(t))??e.title])]}})}),{}}}),$t=T({items:Array,returnObject:Boolean},"VListChildren"),Ue=B()({name:"VListChildren",props:$t(),setup(e,i){let{slots:t}=i;return Fe(),()=>{var n,l;return((n=t.default)==null?void 0:n.call(t))??((l=e.items)==null?void 0:l.map(a=>{var h,o;let{children:s,props:r,type:v,raw:y}=a;if(v==="divider")return((h=t.divider)==null?void 0:h.call(t,{props:r}))??f(It,r,null);if(v==="subheader")return((o=t.subheader)==null?void 0:o.call(t,{props:r}))??f(Rt,r,null);const g={subtitle:t.subtitle?c=>{var u;return(u=t.subtitle)==null?void 0:u.call(t,{...c,item:y})}:void 0,prepend:t.prepend?c=>{var u;return(u=t.prepend)==null?void 0:u.call(t,{...c,item:y})}:void 0,append:t.append?c=>{var u;return(u=t.append)==null?void 0:u.call(t,{...c,item:y})}:void 0,title:t.title?c=>{var u;return(u=t.title)==null?void 0:u.call(t,{...c,item:y})}:void 0},b=be.filterProps(r);return s?f(be,J({value:r==null?void 0:r.value},b),{activator:c=>{let{props:u}=c;const d={...r,...u,value:e.returnObject?y:r.value};return t.header?t.header({props:d}):f(Se,d,g)},default:()=>f(Ue,{items:s,returnObject:e.returnObject},t)}):t.item?t.item({props:r}):f(Se,J(r,{value:e.returnObject?y:r.value}),g)}))}}}),Ut=T({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:ft}},"list-items");function ae(e,i){const t=O(i,e.itemTitle,i),n=O(i,e.itemValue,t),l=O(i,e.itemChildren),a=e.itemProps===!0?typeof i=="object"&&i!=null&&!Array.isArray(i)?"children"in i?le(i,["children"]):i:void 0:O(i,e.itemProps),s={title:t,value:n,...a};return{title:String(s.title??""),value:s.value,props:s,children:Array.isArray(l)?He(e,l):void 0,raw:i}}function He(e,i){const t=[];for(const n of i)t.push(ae(e,n));return t}function Zt(e){const i=m(()=>He(e,e.items)),t=m(()=>i.value.some(a=>a.value===null));function n(a){return t.value||(a=a.filter(s=>s!==null)),a.map(s=>e.returnObject&&typeof s=="string"?ae(e,s):i.value.find(r=>e.valueComparator(s,r.value))||ae(e,s))}function l(a){return e.returnObject?a.map(s=>{let{raw:r}=s;return r}):a.map(s=>{let{value:r}=s;return r})}return{items:i,transformIn:n,transformOut:l}}function Ht(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function zt(e,i){const t=O(i,e.itemType,"item"),n=Ht(i)?i:O(i,e.itemTitle),l=O(i,e.itemValue,void 0),a=O(i,e.itemChildren),s=e.itemProps===!0?le(i,["children"]):O(i,e.itemProps),r={title:n,value:l,...s};return{type:t,title:r.title,value:r.value,props:r,children:t==="item"&&a?ze(e,a):void 0,raw:i}}function ze(e,i){const t=[];for(const n of i)t.push(zt(e,n));return t}function Jt(e){return{items:m(()=>ze(e,e.items))}}const qt=T({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,"onClick:open":_(),"onClick:select":_(),"onUpdate:opened":_(),...Mt({selectStrategy:"single-leaf",openStrategy:"list"}),...we(),...R(),...Ie(),...Ve(),...Ae(),itemType:{type:String,default:"type"},...Ut(),...Pe(),...$(),...Le(),...Oe({variant:"text"})},"VList"),en=B()({name:"VList",props:qt(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:t}=i;const{items:n}=Jt(e),{themeClasses:l}=Ee(e),{backgroundColorClasses:a,backgroundColorStyles:s}=yt(C(e,"bgColor")),{borderClasses:r}=Me(e),{densityClasses:v}=Be(e),{dimensionStyles:y}=xe(e),{elevationClasses:g}=De(e),{roundedClasses:b}=je(e),{children:h,open:o,parents:c,select:u}=Bt(e),d=m(()=>e.lines?`v-list--${e.lines}-line`:void 0),p=C(e,"activeColor"),k=C(e,"baseColor"),w=C(e,"color");Fe(),mt({VListGroup:{activeColor:p,baseColor:k,color:w,expandIcon:C(e,"expandIcon"),collapseIcon:C(e,"collapseIcon")},VListItem:{activeClass:C(e,"activeClass"),activeColor:p,baseColor:k,color:w,density:C(e,"density"),disabled:C(e,"disabled"),lines:C(e,"lines"),nav:C(e,"nav"),slim:C(e,"slim"),variant:C(e,"variant")}});const V=j(!1),E=A();function q(I){V.value=!0}function W(I){V.value=!1}function Q(I){var x;!V.value&&!(I.relatedTarget&&((x=E.value)!=null&&x.contains(I.relatedTarget)))&&M()}function X(I){const x=I.target;if(!(!E.value||["INPUT","TEXTAREA"].includes(x.tagName))){if(I.key==="ArrowDown")M("next");else if(I.key==="ArrowUp")M("prev");else if(I.key==="Home")M("first");else if(I.key==="End")M("last");else return;I.preventDefault()}}function Y(I){V.value=!0}function M(I){if(E.value)return te(E.value,I)}return F(()=>f(e.tag,{ref:E,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},l.value,a.value,r.value,v.value,g.value,d.value,b.value,e.class],style:[s.value,y.value,e.style],tabindex:e.disabled||V.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:q,onFocusout:W,onFocus:Q,onKeydown:X,onMousedown:Y},{default:()=>[f(Ue,{items:n.value,returnObject:e.returnObject},t)]})),{open:o,select:u,focus:M,children:h,parents:c}}}),Wt=T({id:String,...le(gt({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:bt}}),["absolute"])},"VMenu"),tn=B()({name:"VMenu",props:Wt(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const n=H(e,"modelValue"),{scopeId:l}=St(),a=Ce(),s=m(()=>e.id||`v-menu-${a}`),r=A(),v=N(ye,null),y=j(0);K(ye,{register(){++y.value},unregister(){--y.value},closeParents(u){setTimeout(()=>{!y.value&&!e.persistent&&(u==null||u&&!ht(u,r.value.contentEl))&&(n.value=!1,v==null||v.closeParents())},40)}});async function g(u){var k,w,V;const d=u.relatedTarget,p=u.target;await Ct(),n.value&&d!==p&&((k=r.value)!=null&&k.contentEl)&&((w=r.value)!=null&&w.globalTop)&&![document,r.value.contentEl].includes(p)&&!r.value.contentEl.contains(p)&&((V=ge(r.value.contentEl)[0])==null||V.focus())}Te(n,u=>{u?(v==null||v.register(),document.addEventListener("focusin",g,{once:!0})):(v==null||v.unregister(),document.removeEventListener("focusin",g))});function b(u){v==null||v.closeParents(u)}function h(u){var d,p,k;if(!e.disabled)if(u.key==="Tab"||u.key==="Enter"&&!e.closeOnContentClick){if(u.key==="Enter"&&(u.target instanceof HTMLTextAreaElement||u.target instanceof HTMLInputElement&&u.target.closest("form")))return;u.key==="Enter"&&u.preventDefault(),kt(ge((d=r.value)==null?void 0:d.contentEl,!1),u.shiftKey?"prev":"next",V=>V.tabIndex>=0)||(n.value=!1,(k=(p=r.value)==null?void 0:p.activatorEl)==null||k.focus())}else["Enter"," "].includes(u.key)&&e.closeOnContentClick&&(n.value=!1,v==null||v.closeParents())}function o(u){var p;if(e.disabled)return;const d=(p=r.value)==null?void 0:p.contentEl;d&&n.value?u.key==="ArrowDown"?(u.preventDefault(),te(d,"next")):u.key==="ArrowUp"&&(u.preventDefault(),te(d,"prev")):["ArrowDown","ArrowUp"].includes(u.key)&&(n.value=!0,u.preventDefault(),setTimeout(()=>setTimeout(()=>o(u))))}const c=m(()=>J({"aria-haspopup":"menu","aria-expanded":String(n.value),"aria-owns":s.value,onKeydown:o},e.activatorProps));return F(()=>{const u=me.filterProps(e);return f(me,J({ref:r,id:s.value,class:["v-menu",e.class],style:e.style},u,{modelValue:n.value,"onUpdate:modelValue":d=>n.value=d,absolute:!0,activatorProps:c.value,"onClick:outside":b,onKeydown:h},l),{activator:t.activator,default:function(){for(var d=arguments.length,p=new Array(d),k=0;k<d;k++)p[k]=arguments[k];return f(z,{root:"VMenu"},{default:()=>{var w;return[(w=t.default)==null?void 0:w.call(t,...p)]}})}})}),pt({id:s,ΨopenChildren:y},r)}});var nn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function an(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}export{en as V,Se as a,tn as b,Gt as c,nn as d,an as g,Ut as m,Zt as u};
