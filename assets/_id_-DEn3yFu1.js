import{_ as K}from"./inputText-DjLcdiDy.js";import{_ as L}from"./appButton-63lP6Mel.js";import{a3 as O,i as P,n as f,o as H,e as Q,w as t,p as X,b as e,C as Z,l as s,y as b,V as A,T as I,a as V,B as m,k as M,m as w,h as J,f as Y,g as n,x as ee,au as k,aw as te,D as ae,E as se}from"./index-DoDZ8EiD.js";import{c as le,a as N,f as oe,u as re,b as q,V as ne}from"./index.esm-0HahmCb-.js";import{_ as de}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as $,a as z}from"./VContainer-BDGIwOX1.js";import{V as ie}from"./VBreadcrumbs-DsJCd3RV.js";import{V as o,a as g}from"./VRow-CpQrnffw.js";import{V as ce}from"./VNumberInput-BtujyfTV.js";import{V as ue}from"./VTextarea-BYvbfLs6.js";import"./_commonjsHelpers-Cpj98o6Y.js";const d=p=>(ae("data-v-3f32d157"),p=p(),se(),p),me={style:{width:"360px",height:"360px"},class:"b-1 pa-2 d-flex justify-center"},pe=d(()=>s("label",{class:"form-label"},"需求單位",-1)),_e=d(()=>s("label",{class:"form-label"},"物資類別",-1)),fe=d(()=>s("label",{class:"form-label"},"需求介紹",-1)),be=d(()=>s("label",{class:"form-label"},"所需數量",-1)),ge=d(()=>s("p",null,"2包",-1)),ve={class:"b-1 bg-white rounded-sm pt-5 mt-1"},he=d(()=>s("label",{class:"form-label"},"捐贈數量",-1)),ye=d(()=>s("label",{class:"form-label"},"單位／姓名",-1)),xe=d(()=>s("label",{class:"form-label"},"聯絡電話",-1)),Ve={class:"mx-auto"},we=d(()=>s("div",{class:"b-1 info-margin text-center text-body-1 pa-2 bg-accent rounded-t-lg",style:{width:"150px",padding:"0","border-bottom":"0px"}},"留言板",-1)),ke={class:"b-1 pa-5 info-margin"},qe={class:"pa-4"},Ce=d(()=>s("span",null,"照管中心",-1)),Se=d(()=>s("p",{class:"ml-13 text-body-2"},"您好，請問周末親送過去可以嗎?",-1)),Te={class:"pa-4"},Ae=d(()=>s("span",null,"家防中心",-1)),Ie=d(()=>s("p",{class:"ml-13 text-body-2"},"請問商品期限有限定嗎?",-1)),Me={class:"pa-4"},Ne={__name:"[id]",setup(p){const{api:B,apiAuth:D}=X(),F=O(),v=P(),_=f(!1),j=i=>{_.value=!0},C=()=>{_.value=!1},R=f([{title:"首頁",disabled:!1,href:"/"},{title:"我要分享",disabled:!1,href:"/material/share/shareMaterial"},{title:"物資詳情",disabled:!0}]),r=f({_id:"",name:"",quantity:0,category:"",description:"",image:""}),S=f(null);(async()=>{var i,a;try{const{data:l}=await B.get("/material/"+F.params.id);r.value._id=l.result._id,r.value.name=l.result.name,r.value.quantity=l.result.quantity,r.value.category=l.result.category,r.value.description=l.result.description,r.value.organizer=l.result.organizer,r.value.image=l.result.image}catch(l){console.log(l),v({text:((a=(i=l==null?void 0:l.response)==null?void 0:i.data)==null?void 0:a.message)||"發生錯誤",snackbarProps:{color:"red"}})}})();const U=le({donator:N().required("服務單位必填"),quantity:oe().min(1,"數量不符").required("數量必填"),phone:N().required("聯絡電話必填")}),{handleSubmit:W,isSubmitting:T,resetForm:ze}=re({validationSchema:U,initialValues:{donator:"",quantity:0,phone:""}}),h=q("donator"),y=q("quantity"),x=q("phone"),E=W(async i=>{var a,l;try{console.log(r.value._id);const c={donator:i.donator,quantity:i.quantity,phone:i.phone,id:r.value._id};console.log(c),await D.post("material/donate",c),v({text:"新增成功",snackbarProps:{color:"green"}}),C()}catch(c){console.log(c),v({text:((l=(a=c==null?void 0:c.response)==null?void 0:a.data)==null?void 0:l.message)||"發生錯誤",snackbarProps:{color:"red"}})}});function G(i){const a=document.querySelector(i);a&&(a.scrollIntoView({behavior:"smooth"}),te(()=>{S.value.focus()}))}return(i,a)=>{const l=L,c=K;return H(),Q($,{style:{padding:"0.5rem 15rem 3rem 15rem"}},{default:t(()=>[e(ie,{items:R.value},{divider:t(()=>[e(Z,{icon:"mdi-chevron-right"})]),_:1},8,["items"]),e(g,{"justify-center":"",class:"mt-5"},{default:t(()=>[e(o,{cols:"5",class:"d-flex justify-center align-center"},{default:t(()=>[s("div",me,[e(b,{src:r.value.image,"max-width":"330","max-height":"330",contain:""},null,8,["src"])])]),_:1}),e(o,{cols:"5"},{default:t(()=>[e(A,{variant:"flat",id:"resourceCard"},{default:t(()=>[e(I,{class:"font-weight-black mb-2 text-h5"},{default:t(()=>[V("物資名稱："+m(r.value.name),1)]),_:1}),e(z,{thickness:"0"}),e(g,null,{default:t(()=>[e(o,{cols:"12",md:"3",class:"my-auto"},{default:t(()=>[pe]),_:1}),e(o,{cols:"12",md:"9"},{default:t(()=>[s("p",null,m(r.value.organizer),1)]),_:1}),e(o,{cols:"12",md:"3",class:"my-auto"},{default:t(()=>[_e]),_:1}),e(o,{cols:"12",md:"9"},{default:t(()=>[s("p",null,m(r.value.category),1)]),_:1}),e(o,{cols:"12",md:"3"},{default:t(()=>[fe]),_:1}),e(o,{cols:"12",md:"9"},{default:t(()=>[s("p",null,m(r.value.description),1)]),_:1}),e(o,{cols:"12",md:"3",class:"my-auto"},{default:t(()=>[be]),_:1}),e(o,{cols:"12",md:"9",class:"my-auto"},{default:t(()=>[ge]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(l,{text:"我要留言",width:"90",class:"me-4 bg-third",onClick:a[0]||(a[0]=u=>G("#msg"))}),e(l,{text:"我要捐贈",width:"90",class:"bg-third",onClick:a[1]||(a[1]=u=>j(null))}),e(ee,{"max-width":"700px",modelValue:_.value,"onUpdate:modelValue":a[6]||(a[6]=u=>_.value=u)},{default:t(()=>[e(A,{class:"bg-third"},{default:t(()=>[e($,null,{default:t(()=>[e(M,{class:"pa-0"},{default:t(()=>[e(w,{id:"close",icon:"$close",variant:"text",onClick:a[2]||(a[2]=u=>C())})]),_:1}),e(I,{class:"font-weight-black text-left text-h5 py-0"},{default:t(()=>[V("物資名稱："+m(r.value.name),1)]),_:1}),s("div",ve,[e(J,null,{default:t(()=>[e(ne,{onSubmit:Y(n(E),["prevent"]),disabled:n(T)},{default:t(()=>[e(g,null,{default:t(()=>[e(o,{cols:"12",md:"3",class:"my-auto text-center"},{default:t(()=>[he]),_:1}),e(o,{cols:"12",md:"9"},{default:t(()=>[e(n(ce),{"control-variant":"stacked",variant:"outlined",density:"comfortable",inset:"",label:"輸入數量","hide-details":"",min:0,modelValue:n(y).value.value,"onUpdate:modelValue":a[3]||(a[3]=u=>n(y).value.value=u),"error-messages":n(y).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",md:"3",class:"my-auto text-center"},{default:t(()=>[ye]),_:1}),e(o,{cols:"12",md:"9"},{default:t(()=>[e(c,{modelValue:n(h).value.value,"onUpdate:modelValue":a[4]||(a[4]=u=>n(h).value.value=u),"error-messages":n(h).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),e(o,{cols:"12",md:"3",class:"my-auto text-center"},{default:t(()=>[xe]),_:1}),e(o,{cols:"12",md:"9"},{default:t(()=>[e(c,{modelValue:n(x).value.value,"onUpdate:modelValue":a[5]||(a[5]=u=>n(x).value.value=u),"error-messages":n(x).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(M,null,{default:t(()=>[s("div",Ve,[e(w,{type:"submit",text:"送出",variant:"text",class:"rounded-xl b-1 bg-primary",density:"comfortable",loading:n(T)},null,8,["loading"])])]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(g,{class:"mt-10"},{default:t(()=>[e(o,null,{default:t(()=>[we,s("div",ke,[s("div",qe,[e(k,{color:"primary b-1",class:"me-3",size:"large"},{default:t(()=>[e(b,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWAhVMz9jthsapuZL1tkdJks34QlTbXolbmg&s"})]),_:1}),Ce,Se]),s("div",Te,[e(k,{color:"secondary b-1",class:"me-3",size:"large"},{default:t(()=>[e(b,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqnRWICFHo49O2OyVoMHrqkQmAevK654iXKw&s"})]),_:1}),Ae,Ie]),e(z),s("div",Me,[e(ue,{ref_key:"textarea",ref:S,id:"msg",placeholder:"請輸入您的留言或提問",variant:"outlined",width:"600",maxlength:"20",counter:""},{prepend:t(()=>[e(k,{color:"primary ",class:"me-1 b-1",size:"large"},{default:t(()=>[e(b,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKvt7MWE2LrmiZbNLMYdnwEW-OnNf1sam1g&s"})]),_:1})]),_:1},512),e(w,{variant:"text",class:"rounded-md b-1 bg-accent mt-2",density:"comfortable",ripple:!1,id:"submit"},{default:t(()=>[V("送出")]),_:1})])])]),_:1})]),_:1})]),_:1})}}},Oe=de(Ne,[["__scopeId","data-v-3f32d157"]]);export{Oe as default};
