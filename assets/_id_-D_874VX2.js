import{_ as R}from"./inputText-u8j5e_M1.js";import{_ as E}from"./appButton-D4uc5r1D.js";import{a3 as G,i as H,n as p,o as J,e as K,w as a,p as L,b as e,C as O,l as r,y as Q,V as C,T as q,a as S,B as m,k as $,m as I,h as W,f as X,g as n,x as Y,af as Z,D as ee,E as ae}from"./index-BiURfRMU.js";import{c as te,a as B,f as le,u as se,b as V,V as oe}from"./index.esm-BNhHlgu4.js";import{C as re,V as ne}from"./comment-BKHJC7y8.js";import{_ as ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as T,a as de}from"./VContainer-Bnc02L_J.js";import{V as ue}from"./VBreadcrumbs-CfQyS5ML.js";import{a as s,V as y}from"./VRow-C924zwMG.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./VTextarea-Cmz_tE-y.js";const c=f=>(ee("data-v-299c8ec8"),f=f(),ae(),f),ce={class:"b-1 pa-2 d-flex justify-center img"},me=c(()=>r("label",{class:"form-label"},"需求單位",-1)),fe=c(()=>r("label",{class:"form-label"},"物資類別",-1)),_e=c(()=>r("label",{class:"form-label"},"需求介紹",-1)),pe=c(()=>r("label",{class:"form-label"},"所需數量",-1)),ve=c(()=>r("p",null,"2包",-1)),ge={class:"b-1 bg-white rounded-sm pt-5 mt-2 mb-4 mx-4"},be=c(()=>r("label",{class:"form-label"},"索取數量",-1)),he=c(()=>r("label",{class:"form-label"},"單位／姓名",-1)),Ve=c(()=>r("label",{class:"form-label"},"聯絡電話",-1)),ye={class:"mx-auto"},xe={__name:"[id]",setup(f){const{api:D,apiAuth:M}=L(),A=G(),v=H(),_=p(!1),F=i=>{_.value=!0},x=()=>{_.value=!1},N=p([{title:"首頁",disabled:!1,href:"/"},{title:"我要分享",disabled:!1,href:"/material/share/shareMaterial"},{title:"物資詳情",disabled:!0}]),o=p({_id:"",name:"",quantity:0,category:"",description:"",image:""}),k=p(null);(async()=>{var i,t;try{const{data:l}=await D.get("/material/"+A.params.id);o.value._id=l.result._id,o.value.name=l.result.name,o.value.quantity=l.result.quantity,o.value.category=l.result.category,o.value.description=l.result.description,o.value.organizer=l.result.organizer,o.value.image=l.result.image}catch(l){console.log(l),v({text:((t=(i=l==null?void 0:l.response)==null?void 0:i.data)==null?void 0:t.message)||"發生錯誤",snackbarProps:{color:"red"}})}})();const U=te({donator:B().required("服務單位必填"),quantity:le().min(1,"數量不符").required("數量必填"),phone:B().required("聯絡電話必填")}),{handleSubmit:z,isSubmitting:w,resetForm:we}=se({validationSchema:U,initialValues:{donator:"",quantity:0,phone:""}}),g=V("donator"),b=V("quantity"),h=V("phone"),P=z(async i=>{var t,l;try{console.log(o.value._id);const d={donator:i.donator,quantity:i.quantity,phone:i.phone,id:o.value._id};console.log(d),await M.post("material/donate",d),v({text:"新增成功",snackbarProps:{color:"green"}}),x()}catch(d){console.log(d),v({text:((l=(t=d==null?void 0:d.response)==null?void 0:t.data)==null?void 0:l.message)||"發生錯誤",snackbarProps:{color:"red"}})}});function j(i){const t=document.querySelector(i);t&&(t.scrollIntoView({behavior:"smooth"}),Z(()=>{k.value.focus()}))}return(i,t)=>{const l=E,d=R;return J(),K(T,{id:"con"},{default:a(()=>[e(ue,{items:N.value},{divider:a(()=>[e(O,{icon:"mdi-chevron-right"})]),_:1},8,["items"]),e(y,{class:"mt-5 w-100 h-66"},{default:a(()=>[e(s,{cols:"5",class:"d-flex justify-center align-center"},{default:a(()=>[r("div",ce,[e(Q,{src:o.value.image,"max-width":"330","max-height":"330",contain:""},null,8,["src"])])]),_:1}),e(s,{cols:"6"},{default:a(()=>[e(C,{variant:"flat",id:"resourceCard"},{default:a(()=>[e(q,{class:"font-weight-black mb-3 text-h5"},{default:a(()=>[S("物資名稱："+m(o.value.name),1)]),_:1}),e(de,{thickness:"0"}),e(y,null,{default:a(()=>[e(s,{cols:"12",md:"3",class:"my-auto"},{default:a(()=>[me]),_:1}),e(s,{cols:"12",md:"9"},{default:a(()=>[r("p",null,m(o.value.organizer),1)]),_:1}),e(s,{cols:"12",md:"3",class:"my-auto"},{default:a(()=>[fe]),_:1}),e(s,{cols:"12",md:"9"},{default:a(()=>[r("p",null,m(o.value.category),1)]),_:1}),e(s,{cols:"12",md:"3"},{default:a(()=>[_e]),_:1}),e(s,{cols:"12",md:"9"},{default:a(()=>[r("p",null,m(o.value.description),1)]),_:1}),e(s,{cols:"12",md:"3",class:"my-auto"},{default:a(()=>[pe]),_:1}),e(s,{cols:"12",md:"9",class:"my-auto"},{default:a(()=>[ve]),_:1})]),_:1})]),_:1}),e(l,{text:"我要留言",width:"90",class:"me-4 bg-third",onClick:t[0]||(t[0]=u=>j("#msg"))}),e(l,{text:"我要索取",width:"90",class:"bg-third",onClick:t[1]||(t[1]=u=>F(null))})]),_:1})]),_:1}),e(re,{id:"msg",ref_key:"textarea",ref:k},null,512),e(Y,{"max-width":"700px",modelValue:_.value,"onUpdate:modelValue":t[6]||(t[6]=u=>_.value=u)},{default:a(()=>[e(C,{class:"bg-third"},{default:a(()=>[e(T,null,{default:a(()=>[e($,{class:"pa-0"},{default:a(()=>[e(I,{id:"close",icon:"$close",variant:"text",onClick:t[2]||(t[2]=u=>x())})]),_:1}),e(q,{class:"font-weight-black text-left text-h5 py-0"},{default:a(()=>[S("物資名稱："+m(o.value.name),1)]),_:1}),r("div",ge,[e(W,null,{default:a(()=>[e(oe,{onSubmit:X(n(P),["prevent"]),disabled:n(w)},{default:a(()=>[e(y,null,{default:a(()=>[e(s,{cols:"12",md:"3",class:"my-auto text-center"},{default:a(()=>[be]),_:1}),e(s,{cols:"12",md:"9"},{default:a(()=>[e(n(ne),{"control-variant":"stacked",variant:"outlined",density:"comfortable",inset:"",label:"輸入數量","hide-details":"",min:0,modelValue:n(b).value.value,"onUpdate:modelValue":t[3]||(t[3]=u=>n(b).value.value=u),"error-messages":n(b).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),e(s,{cols:"12",md:"3",class:"my-auto text-center"},{default:a(()=>[he]),_:1}),e(s,{cols:"12",md:"9"},{default:a(()=>[e(d,{modelValue:n(g).value.value,"onUpdate:modelValue":t[4]||(t[4]=u=>n(g).value.value=u),"error-messages":n(g).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),e(s,{cols:"12",md:"3",class:"my-auto text-center"},{default:a(()=>[Ve]),_:1}),e(s,{cols:"12",md:"9"},{default:a(()=>[e(d,{modelValue:n(h).value.value,"onUpdate:modelValue":t[5]||(t[5]=u=>n(h).value.value=u),"error-messages":n(h).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e($,null,{default:a(()=>[r("div",ye,[e(I,{type:"submit",text:"送出",variant:"text",class:"rounded-xl b-1 bg-primary",density:"comfortable",loading:n(w)},null,8,["loading"])])]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}},Ne=ie(xe,[["__scopeId","data-v-299c8ec8"]]);export{Ne as default};
