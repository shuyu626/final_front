import{_ as ne}from"./inputText-DrioZ0pC.js";import{_ as re}from"./appButton-Dv0gos5k.js";import{V as c,a as y,_ as ce}from"./breadcrumbs-Ds8NVqxL.js";import{i as J,a3 as K,n as k,O as de,o as C,e as D,w as a,b as e,l as o,c as ie,F as ue,t as R,av as E,S as M,A as g,f as Q,g as n,aw as me,m as P,a as z,p as W,C as X,D as Y,V as L,T as O,k as G,h as pe,x as _e,ax as fe}from"./index-DinF4U3z.js";import{c as Z,a as U,u as ee,b as I,V as ae,f as ve}from"./index.esm--oIPo5cr.js";import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as se,V as H}from"./VContainer-UVUPIkTn.js";import{V as ge}from"./VTextarea-CJ67ppp-.js";import{V as be}from"./VNumberInput-DojIOS5-.js";import"./_commonjsHelpers-Cpj98o6Y.js";const he=f=>(X("data-v-ce3eee22"),f=f(),Y(),f),ye=he(()=>o("div",{class:"b-1 info-margin text-center text-body-1 pa-2 bg-accent rounded-t-lg",style:{width:"150px",padding:"0","border-bottom":"0px"}},"留言板",-1)),xe={class:"b-1 pa-5 info-margin"},Ve={class:"pa-4"},we={class:"ml-1"},ke={class:"ml-16 text-body-2"},Se={class:"pa-4"},$e={__name:"comment",setup(f){const{api:N,apiAuth:x}=W(),V=J(),b=K(),h=Z({comment:U().required("留言內容必填")}),{handleSubmit:T,isSubmitting:S,resetForm:A}=ee({validationSchema:h,initialValues:{comment:""}}),l=k([]),$=async()=>{try{const{data:i}=await x.get("/comment/"+b.params.id);console.log(i),l.value=i.result,console.log(l.value[0].user.username)}catch(i){console.log(i)}};de(()=>{$()});const q=I("comment"),F=T(async i=>{var d,s;try{const u={content:i.comment,materialId:b.params.id};console.log(u),await x.post("comment/",u),V({text:"新增成功",snackbarProps:{color:"green"}}),A()}catch(u){console.log(u),V({text:((s=(d=u==null?void 0:u.response)==null?void 0:d.data)==null?void 0:s.message)||"發生錯誤",snackbarProps:{color:"red"}})}}),w=k([]);return(async()=>{var i,d;try{const{data:s}=await x.get("/user/profile");w.value=[s.result],console.log(w.value)}catch(s){V({text:((d=(i=s==null?void 0:s.response)==null?void 0:i.data)==null?void 0:d.message)||"發生錯誤",snackbarProps:{color:"red"}})}})(),(i,d)=>(C(),D(y,{class:"mt-10"},{default:a(()=>[e(c,null,{default:a(()=>[ye,o("div",xe,[(C(!0),ie(ue,null,R(l.value,s=>(C(),D(y,{key:s._id},{default:a(()=>[o("div",Ve,[e(E,{color:"primary b-1",class:"me-3",size:"large"},{default:a(()=>[e(M,{src:s.user.avatar||"default-avatar-url"},null,8,["src"])]),_:2},1024),o("span",we,g(s.user.username),1),o("p",ke,g(s.content),1)])]),_:2},1024))),128)),e(se),e(y,{class:"my-2"},{default:a(()=>[o("div",Se,[e(ae,{onSubmit:Q(n(F),["prevent"]),disabled:n(S)},{default:a(()=>[e(ge,{ref:"textarea",modelValue:n(q).value.value,"onUpdate:modelValue":d[0]||(d[0]=s=>n(q).value.value=s),"error-messages":n(q).errorMessage.value,placeholder:"請輸入您的留言或提問",variant:"outlined",width:"600",maxlength:"20",counter:""},me({_:2},[R(w.value,s=>({name:"prepend",fn:a(()=>[e(E,{color:"primary ",class:"me-1 b-1",size:"large"},{default:a(()=>[e(M,{src:s.avatar},null,8,["src"])]),_:2},1024)])}))]),1032,["modelValue","error-messages"]),e(P,{type:"submit",variant:"text",class:"rounded-md b-1 bg-accent mt-2",density:"comfortable",ripple:!1},{default:a(()=>[z("送出")]),_:1})]),_:1},8,["onSubmit","disabled"])])]),_:1})])]),_:1})]),_:1}))}},qe=te($e,[["__scopeId","data-v-ce3eee22"]]),v=f=>(X("data-v-6778875d"),f=f(),Y(),f),Ce={style:{width:"360px",height:"360px"},class:"b-1 pa-2 d-flex justify-center"},Ie=v(()=>o("label",{class:"form-label"},"需求單位",-1)),Te=v(()=>o("label",{class:"form-label"},"物資類別",-1)),Ae=v(()=>o("label",{class:"form-label"},"需求介紹",-1)),Fe=v(()=>o("label",{class:"form-label"},"所需數量",-1)),Be=v(()=>o("p",null,"2包",-1)),De={class:"b-1 bg-white rounded-sm pt-5 mt-1"},Me=v(()=>o("label",{class:"form-label"},"捐贈數量",-1)),Pe=v(()=>o("label",{class:"form-label"},"單位／姓名",-1)),ze=v(()=>o("label",{class:"form-label"},"聯絡電話",-1)),Ue={class:"mx-auto"},Ne={__name:"[id]",setup(f){const{api:N,apiAuth:x}=W(),V=K(),b=J(),h=k(!1),T=m=>{h.value=!0},S=()=>{h.value=!1},A=["物資分享","我要募資","物資詳情"],l=k({_id:"",name:"",quantity:0,category:"",description:"",image:""}),$=k(null);(async()=>{var m,t;try{const{data:r}=await N.get("/material/"+V.params.id);l.value._id=r.result._id,l.value.name=r.result.name,l.value.quantity=r.result.quantity,l.value.category=r.result.category,l.value.description=r.result.description,l.value.organizer=r.result.organizer,l.value.image=r.result.image}catch(r){console.log(r),b({text:((t=(m=r==null?void 0:r.response)==null?void 0:m.data)==null?void 0:t.message)||"發生錯誤",snackbarProps:{color:"red"}})}})();const F=Z({donator:U().required("服務單位必填"),quantity:ve().min(1,"數量不符").required("數量必填"),phone:U().required("聯絡電話必填")}),{handleSubmit:w,isSubmitting:B,resetForm:i}=ee({validationSchema:F,initialValues:{donator:"",quantity:0,phone:""}}),d=I("donator"),s=I("quantity"),u=I("phone"),oe=w(async m=>{var t,r;try{console.log(l.value._id);const p={donator:m.donator,quantity:m.quantity,phone:m.phone,id:l.value._id};console.log(p),await x.post("material/donate",p),b({text:"新增成功",snackbarProps:{color:"green"}}),S()}catch(p){console.log(p),b({text:((r=(t=p==null?void 0:p.response)==null?void 0:t.data)==null?void 0:r.message)||"發生錯誤",snackbarProps:{color:"red"}})}});function le(m){const t=document.querySelector(m);t&&(t.scrollIntoView({behavior:"smooth"}),fe(()=>{$.value.focus()}))}return(m,t)=>{const r=ce,p=re,j=ne;return C(),D(H,{style:{padding:"0.5rem 15rem 3rem 15rem"}},{default:a(()=>[e(r,{title:A}),e(y,{"justify-center":"",class:"mt-5"},{default:a(()=>[e(c,{cols:"5",class:"d-flex justify-center align-center"},{default:a(()=>[o("div",Ce,[e(M,{src:l.value.image,"max-width":"330","max-height":"330",contain:""},null,8,["src"])])]),_:1}),e(c,{cols:"5"},{default:a(()=>[e(L,{variant:"flat",id:"resourceCard"},{default:a(()=>[e(O,{class:"font-weight-black mb-2"},{default:a(()=>[z("物資名稱："+g(l.value.name),1)]),_:1}),e(se,{thickness:"0"}),e(y,null,{default:a(()=>[e(c,{cols:"12",md:"3",class:"my-auto"},{default:a(()=>[Ie]),_:1}),e(c,{cols:"12",md:"9"},{default:a(()=>[o("p",null,g(l.value.organizer),1)]),_:1}),e(c,{cols:"12",md:"3",class:"my-auto"},{default:a(()=>[Te]),_:1}),e(c,{cols:"12",md:"9"},{default:a(()=>[o("p",null,g(l.value.category),1)]),_:1}),e(c,{cols:"12",md:"3"},{default:a(()=>[Ae]),_:1}),e(c,{cols:"12",md:"9"},{default:a(()=>[o("p",null,g(l.value.description),1)]),_:1}),e(c,{cols:"12",md:"3",class:"my-auto"},{default:a(()=>[Fe]),_:1}),e(c,{cols:"12",md:"9",class:"my-auto"},{default:a(()=>[Be]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(p,{text:"我要留言",width:"90",class:"me-4 bg-third",onClick:t[0]||(t[0]=_=>le("#msg"))}),e(p,{text:"我要捐贈",width:"90",class:"bg-third",onClick:t[1]||(t[1]=_=>T(null))}),e(_e,{"max-width":"700px",modelValue:h.value,"onUpdate:modelValue":t[6]||(t[6]=_=>h.value=_)},{default:a(()=>[e(L,{class:"bg-third"},{default:a(()=>[e(H,null,{default:a(()=>[e(G,{class:"pa-0"},{default:a(()=>[e(P,{id:"close",icon:"$close",variant:"text",onClick:t[2]||(t[2]=_=>S())})]),_:1}),e(O,{class:"font-weight-black text-left text-h5 py-0"},{default:a(()=>[z("物資名稱："+g(l.value.name),1)]),_:1}),o("div",De,[e(pe,null,{default:a(()=>[e(ae,{onSubmit:Q(n(oe),["prevent"]),disabled:n(B)},{default:a(()=>[e(y,null,{default:a(()=>[e(c,{cols:"12",md:"3",class:"my-auto text-center"},{default:a(()=>[Me]),_:1}),e(c,{cols:"12",md:"9"},{default:a(()=>[e(n(be),{"control-variant":"stacked",variant:"outlined",density:"comfortable",inset:"",label:"輸入數量","hide-details":"",min:0,modelValue:n(s).value.value,"onUpdate:modelValue":t[3]||(t[3]=_=>n(s).value.value=_),"error-messages":n(s).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),e(c,{cols:"12",md:"3",class:"my-auto text-center"},{default:a(()=>[Pe]),_:1}),e(c,{cols:"12",md:"9"},{default:a(()=>[e(j,{modelValue:n(d).value.value,"onUpdate:modelValue":t[4]||(t[4]=_=>n(d).value.value=_),"error-messages":n(d).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),e(c,{cols:"12",md:"3",class:"my-auto text-center"},{default:a(()=>[ze]),_:1}),e(c,{cols:"12",md:"9"},{default:a(()=>[e(j,{modelValue:n(u).value.value,"onUpdate:modelValue":t[5]||(t[5]=_=>n(u).value.value=_),"error-messages":n(u).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(G,null,{default:a(()=>[o("div",Ue,[e(P,{type:"submit",text:"送出",variant:"text",class:"rounded-xl b-1 bg-primary",density:"comfortable",loading:n(B)},null,8,["loading"])])]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(qe,{id:"msg",ref_key:"textarea",ref:$},null,512)]),_:1})}}},We=te(Ne,[["__scopeId","data-v-6778875d"]]);export{We as default};