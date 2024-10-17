import{_ as H}from"./inputText-BJbqElAX.js";import{q as J,i as K,n as y,r as L,o as S,c as O,g as s,e as U,w as l,a as d,B as c,b as a,C as Q,m as v,V as W,T as X,h as Y,f as Z,l as m,k as ee,x as ae,F as te,p as le,D as se,E as oe}from"./index-B48YCZ9Z.js";import{c as re,a as b,f as ne,u as ie,b as p,V as ue}from"./index.esm-CO7hphL7.js";import{_ as de}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as me}from"./VTooltip-DZnzTsxP.js";import{V as ce}from"./VContainer-LbBbi1zP.js";import{V as h,a as r}from"./VRow-lGLSltiD.js";import{V as pe}from"./VSelect-E0cpSPTS.js";const T=n=>(se("data-v-e80ea1e8"),n=n(),oe(),n),fe=T(()=>m("label",{class:"form-label"},"物資名稱",-1)),ge={class:"form-label"},ye=T(()=>m("label",{class:"form-label"},"物資類別",-1)),ve={class:"form-label"},be=T(()=>m("label",{class:"form-label"},"單位名稱",-1)),Ve={class:"mx-auto"},xe={__name:"resourceDialog",props:{cardTitle:{type:String,default:"發布需求"},numberTitle:{type:String,default:"需求量"},descriptionTitle:{type:String,default:"需求介紹"},type:{type:String,default:"share"}},emits:["update"],setup(n,{emit:A}){const{mobile:I}=J(),R=A,{apiAuth:N}=le(),C=K(),E=n,q=["食品","服飾配件","日用品","家具","輔具","教育用品","嬰幼兒用品","電器","休閒用品","其他"],f=y(!1),$=o=>{D(),f.value=!0},z=()=>{f.value=!1,D(),F.value.deleteFileRecord()},F=y(null),u=y([]),M=y([]),P=re({name:b().required("物品名稱必填"),quantity:ne().min(1,"物品數量不符").required("物品數量必填"),category:b().required("物品分類必填").test("isCategory","商品分類錯誤",o=>q.includes(o)),description:b().required("物資介紹必填"),organizer:b().required("單位名稱必填")}),{handleSubmit:j,isSubmitting:B,resetForm:D}=ie({validationSchema:P,initialValues:{name:"",quantity:"0",category:"",description:"",organizer:""}}),V=p("name"),x=p("quantity"),_=p("category"),k=p("description"),w=p("organizer"),G=j(async o=>{var t,g,i;if(!((t=u.value[0])!=null&&t.error)&&!(u.value.length<1))try{const e=new FormData;e.append("name",o.name),e.append("quantity",o.quantity),e.append("category",o.category),e.append("description",o.description),e.append("organizer",o.organizer),e.append("type",E.type),u.value.length>0&&e.append("image",u.value[0].file),console.log(e),await N.post("/material",e),C({text:"新增成功",snackbarProps:{color:"green"}}),R("update"),z()}catch(e){console.log(e),C({text:((i=(g=e==null?void 0:e.response)==null?void 0:g.data)==null?void 0:i.message)||"發生錯誤",snackbarProps:{color:"red"}})}});return(o,t)=>{const g=L("vue-file-agent"),i=H;return S(),O(te,null,[s(I)?(S(),U(v,{key:0,onClick:t[0]||(t[0]=e=>$()),class:"bg-info b-1 font-weight-black text-body-1 mt-10 sm-btn",variant:"text",ripple:!1},{default:l(()=>[d(c(n.cardTitle)+" ",1),a(Q,{size:"x-large"},{default:l(()=>[d("mdi-plus")]),_:1}),a(me,{activator:"parent",location:"top"},{default:l(()=>[d(" 發布需求 ")]),_:1})]),_:1})):(S(),U(v,{key:1,onClick:t[1]||(t[1]=e=>$()),class:"rounded-lg bg-info b-1 font-weight-black text-body-1 mt-10 lg-btn","prepend-icon":"mdi-plus",variant:"text",ripple:!1},{default:l(()=>[d(c(n.cardTitle),1)]),_:1})),a(ae,{"max-width":"600",modelValue:f.value,"onUpdate:modelValue":t[10]||(t[10]=e=>f.value=e)},{default:l(()=>[a(W,null,{default:l(()=>[a(ce,null,{default:l(()=>[a(X,{class:"font-weight-black text-center text-h4"},{default:l(()=>[d(c(n.cardTitle),1)]),_:1}),a(Y,null,{default:l(()=>[a(ue,{onSubmit:Z(s(G),["prevent"]),disabled:s(B)},{default:l(()=>[a(h,null,{default:l(()=>[a(r,null,{default:l(()=>[a(g,{modelValue:u.value,"onUpdate:modelValue":t[2]||(t[2]=e=>u.value=e),"raw-model-value":M.value,"onUpdate:rawModelValue":t[3]||(t[3]=e=>M.value=e),accept:"image/jpeg,image/png",deletable:"","max-size":"1MB","help-text":"選擇檔案或拖曳到這裡","error-text":{type:"檔案格式不支援",size:"檔案大小不能超過 1MB"},ref_key:"fileAgent",ref:F},null,8,["modelValue","raw-model-value"])]),_:1})]),_:1}),a(h,null,{default:l(()=>[a(r,{cols:"4",sm:"3",class:"my-auto text-left ps-6"},{default:l(()=>[fe]),_:1}),a(r,{cols:"8",sm:"9"},{default:l(()=>[a(i,{modelValue:s(V).value.value,"onUpdate:modelValue":t[4]||(t[4]=e=>s(V).value.value=e),"error-messages":s(V).errorMessage.value,density:o.$vuetify.display.xs?"compact":"comfortable"},null,8,["modelValue","error-messages","density"])]),_:1}),a(r,{cols:"4",sm:"3",class:"my-auto text-left ps-6"},{default:l(()=>[m("label",ge,c(n.numberTitle),1)]),_:1}),a(r,{cols:"8",sm:"9"},{default:l(()=>[a(i,{type:"number",min:"0",modelValue:s(x).value.value,"onUpdate:modelValue":t[5]||(t[5]=e=>s(x).value.value=e),"error-messages":s(x).errorMessage.value,density:o.$vuetify.display.xs?"compact":"comfortable"},null,8,["modelValue","error-messages","density"])]),_:1}),a(r,{cols:"4",sm:"3",class:"my-auto text-left ps-6"},{default:l(()=>[ye]),_:1}),a(r,{cols:"8",sm:"9"},{default:l(()=>[a(pe,{modelValue:s(_).value.value,"onUpdate:modelValue":t[6]||(t[6]=e=>s(_).value.value=e),"error-messages":s(_).errorMessage.value,label:"選擇",variant:"outlined",density:o.$vuetify.display.xs?"compact":"comfortable",dense:"",items:q,"hide-details":""},null,8,["modelValue","error-messages","density"])]),_:1}),a(r,{cols:"4",sm:"3",class:"my-auto text-left ps-6"},{default:l(()=>[m("label",ve,c(n.descriptionTitle),1)]),_:1}),a(r,{cols:"8",sm:"9"},{default:l(()=>[a(i,{modelValue:s(k).value.value,"onUpdate:modelValue":t[7]||(t[7]=e=>s(k).value.value=e),"error-messages":s(k).errorMessage.value,density:o.$vuetify.display.xs?"compact":"comfortable"},null,8,["modelValue","error-messages","density"])]),_:1}),a(r,{cols:"4",sm:"3",class:"my-auto text-left ps-6"},{default:l(()=>[be]),_:1}),a(r,{cols:"8",sm:"9"},{default:l(()=>[a(i,{modelValue:s(w).value.value,"onUpdate:modelValue":t[8]||(t[8]=e=>s(w).value.value=e),"error-messages":s(w).errorMessage.value,density:o.$vuetify.display.xs?"compact":"comfortable"},null,8,["modelValue","error-messages","density"])]),_:1})]),_:1}),a(ee,{class:"mt-2"},{default:l(()=>[m("div",Ve,[a(v,{variant:"text",class:"rounded-xl b-1 bg-accent",density:"comfortable",type:"submit",loading:s(B)},{default:l(()=>[d("送出")]),_:1},8,["loading"]),a(v,{text:"取消",variant:"text",class:"rounded-xl b-1 bg-info",density:"comfortable",onClick:t[9]||(t[9]=e=>z())})])]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}},ze=de(xe,[["__scopeId","data-v-e80ea1e8"]]);export{ze as _};
