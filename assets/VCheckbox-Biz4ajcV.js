import{m as g,a as t}from"./VSelect-DEE7wmEY.js";import{E as A,aC as I,aj as B,J as U,Z as D,aD as E,am as M,s as R,M as j,aE as z,aF as l,b as u,z as r}from"./index-DinF4U3z.js";const J=A({...I(),...B(g(),["inline"])},"VCheckbox"),$=U()({name:"VCheckbox",inheritAttrs:!1,props:J(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,d){let{attrs:c,slots:o}=d;const s=D(e,"modelValue"),{isFocused:n,focus:i,blur:m}=E(e),V=M(),b=R(()=>e.id||`checkbox-${V}`);return j(()=>{const[p,v]=z(c),f=l.filterProps(e),k=t.filterProps(e);return u(l,r({class:["v-checkbox",e.class]},p,f,{modelValue:s.value,"onUpdate:modelValue":a=>s.value=a,id:b.value,focused:n.value,style:e.style}),{...o,default:a=>{let{id:x,messagesId:h,isDisabled:P,isReadonly:C,isValid:y}=a;return u(t,r(k,{id:x.value,"aria-describedby":h.value,disabled:P.value,readonly:C.value},v,{error:y.value===!1,modelValue:s.value,"onUpdate:modelValue":F=>s.value=F,onFocus:i,onBlur:m}),o)}})}),{}}});export{$ as V};
