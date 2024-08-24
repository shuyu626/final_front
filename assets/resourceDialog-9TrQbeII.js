import{_ as j}from"./inputText-CMS_nxIL.js";import{i as E,n as f,r as G,o as H,c as J,b as a,w as l,a as w,A as g,m as S,V as K,T as L,h as O,f as Q,g as o,l as i,k as W,x as X,F as Y,p as Z,C as ee,D as ae}from"./index-D-zaGDru.js";import{c as te,a as v,f as le,u as oe,b as m,V as se}from"./index.esm-CjRbiz_X.js";import{_ as re}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as ne}from"./VContainer-DvbIreSZ.js";import{a as z,V as s}from"./breadcrumbs-B6eWjn-N.js";import{V as de}from"./VSelect-CJ6fwJJm.js";const C=r=>(ee("data-v-f59075bd"),r=r(),ae(),r),ue=C(()=>i("label",{class:"form-label"},"物資名稱",-1)),ie={class:"form-label"},me=C(()=>i("label",{class:"form-label"},"物資類別",-1)),ce={class:"form-label"},pe=C(()=>i("label",{class:"form-label"},"單位名稱",-1)),fe={class:"mx-auto"},ge={__name:"resourceDialog",props:{cardTitle:{type:String,default:"發布需求"},numberTitle:{type:String,default:"需求量"},descriptionTitle:{type:String,default:"需求介紹"},type:{type:String,default:"share"}},emits:["update"],setup(r,{emit:U}){const D=U,{apiAuth:A}=Z(),T=E(),B=r,k=["食品","服飾配件","日用品","家具","輔具","教育用品","嬰幼兒用品","電器","休閒用品","其他"],c=f(!1),$=n=>{c.value=!0},q=()=>{c.value=!1,N(),h.value.deleteFileRecord()},h=f(null),u=f([]),F=f([]),I=te({name:v().required("物品名稱必填"),quantity:le().min(1,"物品數量不符").required("物品數量必填"),category:v().required("物品分類必填").test("isCategory","商品分類錯誤",n=>k.includes(n)),description:v().required("物資介紹必填"),organizer:v().required("單位名稱必填")}),{handleSubmit:R,isSubmitting:M,resetForm:N}=oe({validationSchema:I,initialValues:{name:"",quantity:"0",category:"",description:"",organizer:""}}),V=m("name"),b=m("quantity"),y=m("category"),_=m("description"),x=m("organizer"),P=R(async n=>{var t,p,d;if(!((t=u.value[0])!=null&&t.error)&&!(u.value.length<1))try{const e=new FormData;e.append("name",n.name),e.append("quantity",n.quantity),e.append("category",n.category),e.append("description",n.description),e.append("organizer",n.organizer),e.append("type",B.type),u.value.length>0&&e.append("image",u.value[0].file),console.log(e),await A.post("/material",e),T({text:"新增成功",snackbarProps:{color:"green"}}),D("update"),q()}catch(e){console.log(e),T({text:((d=(p=e==null?void 0:e.response)==null?void 0:p.data)==null?void 0:d.message)||"發生錯誤",snackbarProps:{color:"red"}})}});return(n,t)=>{const p=G("vue-file-agent"),d=j;return H(),J(Y,null,[a(S,{onClick:t[0]||(t[0]=e=>$()),class:"rounded-lg bg-info b-1 font-weight-black text-body-1 mt-10","prepend-icon":"mdi-plus",variant:"text",height:"50",width:"150",id:"create",ripple:!1},{default:l(()=>[w(g(r.cardTitle),1)]),_:1}),a(X,{"max-width":"600",modelValue:c.value,"onUpdate:modelValue":t[9]||(t[9]=e=>c.value=e)},{default:l(()=>[a(K,null,{default:l(()=>[a(ne,null,{default:l(()=>[a(L,{class:"font-weight-black text-center text-h4"},{default:l(()=>[w(g(r.cardTitle),1)]),_:1}),a(O,null,{default:l(()=>[a(se,{onSubmit:Q(o(P),["prevent"]),disabled:o(M)},{default:l(()=>[a(z,null,{default:l(()=>[a(s,null,{default:l(()=>[a(p,{modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=e=>u.value=e),"raw-model-value":F.value,"onUpdate:rawModelValue":t[2]||(t[2]=e=>F.value=e),accept:"image/jpeg,image/png",deletable:"","max-size":"1MB","help-text":"選擇檔案或拖曳到這裡","error-text":{type:"檔案格式不支援",size:"檔案大小不能超過 1MB"},ref_key:"fileAgent",ref:h},null,8,["modelValue","raw-model-value"])]),_:1})]),_:1}),a(z,null,{default:l(()=>[a(s,{cols:"12",md:"3",class:"my-auto text-left ps-6"},{default:l(()=>[ue]),_:1}),a(s,{cols:"12",md:"9"},{default:l(()=>[a(d,{modelValue:o(V).value.value,"onUpdate:modelValue":t[3]||(t[3]=e=>o(V).value.value=e),"error-messages":o(V).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),a(s,{cols:"12",md:"3",class:"my-auto text-left ps-6"},{default:l(()=>[i("label",ie,g(r.numberTitle),1)]),_:1}),a(s,{cols:"12",md:"9"},{default:l(()=>[a(d,{type:"number",min:"0",modelValue:o(b).value.value,"onUpdate:modelValue":t[4]||(t[4]=e=>o(b).value.value=e),"error-messages":o(b).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),a(s,{cols:"12",md:"3",class:"my-auto text-left ps-6"},{default:l(()=>[me]),_:1}),a(s,{cols:"12",md:"9"},{default:l(()=>[a(de,{modelValue:o(y).value.value,"onUpdate:modelValue":t[5]||(t[5]=e=>o(y).value.value=e),"error-messages":o(y).errorMessage.value,label:"選擇",variant:"outlined",density:"comfortable",dense:"",items:k,"hide-details":""},null,8,["modelValue","error-messages"])]),_:1}),a(s,{cols:"12",md:"3",class:"my-auto text-left ps-6"},{default:l(()=>[i("label",ce,g(r.descriptionTitle),1)]),_:1}),a(s,{cols:"12",md:"9"},{default:l(()=>[a(d,{modelValue:o(_).value.value,"onUpdate:modelValue":t[6]||(t[6]=e=>o(_).value.value=e),"error-messages":o(_).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),a(s,{cols:"12",md:"3",class:"my-auto text-left ps-6"},{default:l(()=>[pe]),_:1}),a(s,{cols:"12",md:"9"},{default:l(()=>[a(d,{modelValue:o(x).value.value,"onUpdate:modelValue":t[7]||(t[7]=e=>o(x).value.value=e),"error-messages":o(x).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),a(W,null,{default:l(()=>[i("div",fe,[a(S,{variant:"text",class:"rounded-xl b-1",density:"comfortable",type:"submit",loading:o(M)},{default:l(()=>[w("送出")]),_:1},8,["loading"]),a(S,{text:"取消",variant:"text",class:"rounded-xl b-1",density:"comfortable",onClick:t[8]||(t[8]=e=>q())})])]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}},Se=re(ge,[["__scopeId","data-v-f59075bd"]]);export{Se as _};