import{o as r,e as l,w as n,b as i,j as o,A as m,ar as u}from"./index-CSljMwmO.js";const b={__name:"inputText",props:{label:{type:String,default:"輸入文字"},errorMessages:String},emits:["update:label"],setup(e,{emit:d}){return(a,s)=>(r(),l(u,null,{default:n(()=>[i(o,m({label:e.label,variant:"outlined","hide-details":"","single-line":"",density:"comfortable",clearable:"",dense:""},a.$attrs,{onInput:s[0]||(s[0]=t=>a.$emit("update:label",t)),"error-messages":e.errorMessages}),null,16,["label","error-messages"])]),_:1}))}};export{b as _};