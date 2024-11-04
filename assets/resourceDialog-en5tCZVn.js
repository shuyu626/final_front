import{_ as H}from"./inputText-DHQYJ15l.js";import{q as J,i as K,n as y,r as L,o as r,c as i,g as s,e as U,w as l,b as a,D as O,a as g,m as v,C as b,V as Q,T as W,h as X,f as Y,l as h,k as Z,y as ee,F as ae,p as te}from"./index-Cu09DPhf.js";import{c as le,a as V,f as se,u as oe,b as c,V as re}from"./index.esm-DbtNw748.js";import{_ as ne}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as ie}from"./VTooltip-b4k2nvyq.js";import{V as ue}from"./VContainer-DNvbWgCk.js";import{V as B,a as n}from"./VRow-zsq4zUFh.js";import{V as de}from"./VSelect-CV9II_ou.js";const me={key:0,class:"form-label"},ce={key:1,class:"form-label"},pe={class:"form-label"},fe={key:0,class:"form-label"},ye={key:1,class:"form-label"},ge={key:0,class:"form-label"},ve={key:1,class:"form-label"},be={key:0,class:"form-label"},Ve={key:1,class:"form-label"},xe={class:"mx-auto"},_e={__name:"resourceDialog",props:{cardTitle:{type:String,default:"發布需求"},numberTitle:{type:String,default:"需求量"},descriptionTitle:{type:String,default:"需求介紹"},type:{type:String,default:"share"}},emits:["update"],setup(m,{emit:A}){const{mobile:R}=J(),N=A,{apiAuth:I}=te(),C=K(),P=m,T=["食品","服飾配件","日用品","家具","輔具","教育用品","嬰幼兒用品","電器","休閒用品","其他"],p=y(!1),q=y(null),d=y([]),S=y([]),j=le({name:V().required("物品名稱必填"),quantity:se().min(1,"物品數量不符").required("物品數量必填"),category:V().required("物品分類必填").test("isCategory","商品分類錯誤",o=>T.includes(o)),description:V().required("物資介紹必填"),organizer:V().required("單位名稱必填")}),{handleSubmit:E,isSubmitting:z,resetForm:F}=oe({validationSchema:j,initialValues:{name:"",quantity:"0",category:"",description:"",organizer:""}}),x=c("name"),_=c("quantity"),k=c("category"),$=c("description"),w=c("organizer"),M=()=>{F(),p.value=!0},D=()=>{p.value=!1,F(),q.value.deleteFileRecord()},G=E(async o=>{var t,f,u;if(!((t=d.value[0])!=null&&t.error)&&!(d.value.length<1))try{const e=new FormData;e.append("name",o.name),e.append("quantity",o.quantity),e.append("category",o.category),e.append("description",o.description),e.append("organizer",o.organizer),e.append("type",P.type),d.value.length>0&&e.append("image",d.value[0].file),console.log(e),await I.post("/material",e),C({text:"新增成功",snackbarProps:{color:"green"}}),N("update"),D()}catch(e){console.log(e),C({text:((u=(f=e==null?void 0:e.response)==null?void 0:f.data)==null?void 0:u.message)||"發生錯誤",snackbarProps:{color:"red"}})}});return(o,t)=>{const f=L("vue-file-agent"),u=H;return r(),i(ae,null,[s(R)?(r(),U(v,{key:0,onClick:t[0]||(t[0]=e=>M()),class:"bg-info b-1 font-weight-black text-body-1 mt-10 sm-btn",variant:"text",ripple:!1},{default:l(()=>[a(O,{size:"x-large"},{default:l(()=>[g("mdi-plus")]),_:1}),a(ie,{activator:"parent",location:"top"})]),_:1})):(r(),U(v,{key:1,onClick:t[1]||(t[1]=e=>M()),class:"rounded-lg bg-info b-1 font-weight-black text-body-1 mt-10 lg-btn","prepend-icon":"mdi-plus",variant:"text",ripple:!1},{default:l(()=>[g(b(m.cardTitle),1)]),_:1})),a(ee,{"max-width":"600",modelValue:p.value,"onUpdate:modelValue":t[10]||(t[10]=e=>p.value=e)},{default:l(()=>[a(Q,null,{default:l(()=>[a(ue,null,{default:l(()=>[a(W,{class:"font-weight-black text-center text-h4"},{default:l(()=>[g(b(m.cardTitle),1)]),_:1}),a(X,null,{default:l(()=>[a(re,{onSubmit:Y(s(G),["prevent"]),disabled:s(z)},{default:l(()=>[a(B,null,{default:l(()=>[a(n,null,{default:l(()=>[a(f,{modelValue:d.value,"onUpdate:modelValue":t[2]||(t[2]=e=>d.value=e),"raw-model-value":S.value,"onUpdate:rawModelValue":t[3]||(t[3]=e=>S.value=e),accept:"image/jpeg,image/png",deletable:"","max-size":"1MB","help-text":"選擇檔案或拖曳到這裡","error-text":{type:"檔案格式不支援",size:"檔案大小不能超過 1MB"},ref_key:"fileAgent",ref:q},null,8,["modelValue","raw-model-value"])]),_:1})]),_:1}),a(B,null,{default:l(()=>[a(n,{cols:"4",sm:"3",class:"my-auto text-left ps-6"},{default:l(()=>[o.$vuetify.display.xs?(r(),i("label",me,"物資名")):(r(),i("label",ce,"物資名稱"))]),_:1}),a(n,{cols:"8",sm:"9"},{default:l(()=>[a(u,{modelValue:s(x).value.value,"onUpdate:modelValue":t[4]||(t[4]=e=>s(x).value.value=e),"error-messages":s(x).errorMessage.value,density:o.$vuetify.display.xs?"compact":"comfortable"},null,8,["modelValue","error-messages","density"])]),_:1}),a(n,{cols:"4",sm:"3",class:"my-auto text-left ps-6"},{default:l(()=>[h("label",pe,b(m.numberTitle),1)]),_:1}),a(n,{cols:"8",sm:"9"},{default:l(()=>[a(u,{type:"number",min:"0",modelValue:s(_).value.value,"onUpdate:modelValue":t[5]||(t[5]=e=>s(_).value.value=e),"error-messages":s(_).errorMessage.value,density:o.$vuetify.display.xs?"compact":"comfortable"},null,8,["modelValue","error-messages","density"])]),_:1}),a(n,{cols:"4",sm:"3",class:"my-auto text-left ps-6"},{default:l(()=>[o.$vuetify.display.xs?(r(),i("label",fe,"類別")):(r(),i("label",ye,"物資類別"))]),_:1}),a(n,{cols:"8",sm:"9"},{default:l(()=>[a(de,{modelValue:s(k).value.value,"onUpdate:modelValue":t[6]||(t[6]=e=>s(k).value.value=e),"error-messages":s(k).errorMessage.value,label:"選擇",variant:"outlined",density:o.$vuetify.display.xs?"compact":"comfortable",dense:"",items:T,"hide-details":""},null,8,["modelValue","error-messages","density"])]),_:1}),a(n,{cols:"4",sm:"3",class:"my-auto text-left ps-6"},{default:l(()=>[o.$vuetify.display.xs?(r(),i("label",ge,"介紹")):(r(),i("label",ve,b(m.descriptionTitle),1))]),_:1}),a(n,{cols:"8",sm:"9"},{default:l(()=>[a(u,{modelValue:s($).value.value,"onUpdate:modelValue":t[7]||(t[7]=e=>s($).value.value=e),"error-messages":s($).errorMessage.value,density:o.$vuetify.display.xs?"compact":"comfortable"},null,8,["modelValue","error-messages","density"])]),_:1}),a(n,{cols:"4",sm:"3",class:"my-auto text-left ps-6"},{default:l(()=>[o.$vuetify.display.xs?(r(),i("label",be,"單位名")):(r(),i("label",Ve,"單位名稱"))]),_:1}),a(n,{cols:"8",sm:"9"},{default:l(()=>[a(u,{modelValue:s(w).value.value,"onUpdate:modelValue":t[8]||(t[8]=e=>s(w).value.value=e),"error-messages":s(w).errorMessage.value,density:o.$vuetify.display.xs?"compact":"comfortable"},null,8,["modelValue","error-messages","density"])]),_:1})]),_:1}),a(Z,{class:"mt-2"},{default:l(()=>[h("div",xe,[a(v,{variant:"text",class:"rounded-xl b-1 bg-accent",density:"comfortable",type:"submit",loading:s(z)},{default:l(()=>[g("送出")]),_:1},8,["loading"]),a(v,{text:"取消",variant:"text",class:"rounded-xl b-1 bg-info",density:"comfortable",onClick:t[9]||(t[9]=e=>D())})])]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}},Fe=ne(_e,[["__scopeId","data-v-70e0cc75"]]);export{Fe as _};
