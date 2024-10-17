import{G as p,aw as ee,bi as te,K as ae,bj as ne,_ as le,ax as oe,s as y,n as v,W as ue,a2 as ie,P as re,O as x,Y as se,N as ce,az as de,aA as G,bk as fe,b as l,bl as ve,A as R,F as I,b4 as T,b5 as xe,bm as me,bn as ge,aE as he,a9 as S,bo as we,aR as Ve,X as ye}from"./index-CLcJD62s.js";const be=p({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...ee(),...te()},"VTextarea"),Pe=ae()({name:"VTextarea",directives:{Intersect:ne},inheritAttrs:!1,props:be(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,E){let{attrs:b,emit:A,slots:i}=E;const o=le(e,"modelValue"),{isFocused:f,focus:D,blur:U}=oe(e),O=y(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),j=y(()=>{if(b.maxlength)return b.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function $(t,n){var a,u;!e.autofocus||!t||(u=(a=n[0].target)==null?void 0:a.focus)==null||u.call(a)}const M=v(),m=v(),N=ue(""),g=v(),K=y(()=>e.persistentPlaceholder||f.value||e.active);function F(){var t;g.value!==document.activeElement&&((t=g.value)==null||t.focus()),f.value||D()}function W(t){F(),A("click:control",t)}function X(t){A("mousedown:control",t)}function Y(t){t.stopPropagation(),F(),S(()=>{o.value="",we(e["onClick:clear"],t)})}function q(t){var a;const n=t.target;if(o.value=n.value,(a=e.modelModifiers)!=null&&a.trim){const u=[n.selectionStart,n.selectionEnd];S(()=>{n.selectionStart=u[0],n.selectionEnd=u[1]})}}const c=v(),h=v(+e.rows),P=y(()=>["plain","underlined"].includes(e.variant));ie(()=>{e.autoGrow||(h.value=+e.rows)});function d(){e.autoGrow&&S(()=>{if(!c.value||!m.value)return;const t=getComputedStyle(c.value),n=getComputedStyle(m.value.$el),a=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),u=c.value.scrollHeight,w=parseFloat(t.lineHeight),C=Math.max(parseFloat(e.rows)*w+a,parseFloat(n.getPropertyValue("--v-input-control-height"))),k=parseFloat(e.maxRows)*w+a||1/0,s=ye(u??0,C,k);h.value=Math.floor((s-a)/w),N.value=Ve(s)})}re(d),x(o,d),x(()=>e.rows,d),x(()=>e.maxRows,d),x(()=>e.density,d);let r;return x(c,t=>{t?(r=new ResizeObserver(d),r.observe(c.value)):r==null||r.disconnect()}),se(()=>{r==null||r.disconnect()}),ce(()=>{const t=!!(i.counter||e.counter||e.counterValue),n=!!(t||i.details),[a,u]=de(b),{modelValue:w,...C}=G.filterProps(e),k=fe(e);return l(G,R({ref:M,modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":P.value},e.class],style:e.style},a,C,{centerAffix:h.value===1&&!P.value,focused:f.value}),{...i,default:s=>{let{id:V,isDisabled:z,isDirty:B,isReadonly:J,isValid:L}=s;return l(ve,R({ref:m,style:{"--v-textarea-control-height":N.value},onClick:W,onMousedown:X,"onClick:clear":Y,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},k,{id:V.value,active:K.value||B.value,centerAffix:h.value===1&&!P.value,dirty:B.value||e.dirty,disabled:z.value,focused:f.value,error:L.value===!1}),{...i,default:Q=>{let{props:{class:H,..._}}=Q;return l(I,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),T(l("textarea",R({ref:g,class:H,value:o.value,onInput:q,autofocus:e.autofocus,readonly:J.value,disabled:z.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:F,onBlur:U},_,u),null),[[xe("intersect"),{handler:$},null,{once:!0}]]),e.autoGrow&&T(l("textarea",{class:[H,"v-textarea__sizer"],id:`${_.id}-sizer`,"onUpdate:modelValue":Z=>o.value=Z,ref:c,readonly:!0,"aria-hidden":"true"},null),[[me,o.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:n?s=>{var V;return l(I,null,[(V=i.details)==null?void 0:V.call(i,s),t&&l(I,null,[l("span",null,null),l(ge,{active:e.persistentCounter||f.value,value:O.value,max:j.value,disabled:e.disabled},i.counter)])])}:void 0})}),he({},M,m,g)}});export{Pe as V};