import{n as r,N as m,o as c,e as p,w as V,b as h,j as b,R as f,ap as v}from"./index-DinF4U3z.js";const x={__name:"search",props:{modelValue:{type:String},label:{type:String,default:"搜尋"}},emits:["update:modelValue","search"],setup(a,{emit:s}){const l=a,t=s,e=r(l.modelValue);m(()=>l.modelValue,n=>{e.value=n});const u=()=>{t("update:modelValue",e.value)},i=()=>{t("search",e.value)};return(n,o)=>(c(),p(v,{"max-width":"450px"},{default:V(()=>[h(b,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=d=>e.value=d),variant:"outlined",label:a.label,"prepend-inner-icon":"mdi-magnify","hide-details":"","single-line":"",density:"comfortable",clearable:"",onInput:u,onKeydown:f(i,["enter"])},null,8,["modelValue","label"])]),_:1}))}};export{x as _};
