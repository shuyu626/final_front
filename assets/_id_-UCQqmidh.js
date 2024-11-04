import{_ as O}from"./inputText-DHQYJ15l.js";import{_ as H}from"./appButton-CAPEM-sw.js";import{a3 as J,i as K,n as g,o as h,e as L,w as a,p as Q,b as e,D as W,z as X,V as C,T as S,a as s,C as n,h as u,l as f,k as I,m as B,f as Y,g as r,c as T,y as Z,E as ee,G as ae}from"./index-Cu09DPhf.js";import{c as te,a as D,f as se,u as le,b as k,V as oe}from"./index.esm-DbtNw748.js";import{C as de,V as re}from"./comment-DueGlRSz.js";import{_ as ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as M,a as ne}from"./VContainer-DNvbWgCk.js";import{V as ce}from"./VBreadcrumbs-C5D2RzNc.js";import{a as l,V as w}from"./VRow-zsq4zUFh.js";import"./_commonjsHelpers-cHHQvOu9.js";import"./ssrBoot-Bc84mu-s.js";import"./VTextarea-B7rFbkbh.js";const A=p=>(ee("data-v-9b967f4f"),p=p(),ae(),p),ue={style:{width:"100%",height:"30px","text-align":"right"},class:"mt-5"},me={class:"b-1 bg-white rounded-sm pt-5 mt-2 mb-4 mx-sm-2 mx-md-4"},fe=A(()=>f("label",{class:"form-label"},"捐贈數量",-1)),pe={key:0,class:"form-label"},_e={key:1,class:"form-label"},ve=A(()=>f("label",{class:"form-label"},"聯絡電話",-1)),ge={class:"mx-auto"},be={__name:"[id]",setup(p){const{api:F,apiAuth:N}=Q(),U=J(),b=K(),_=g(!1),j=g([{title:"首頁",disabled:!1,to:"/"},{title:"我要募資",disabled:!1,to:"/material/find/findMaterial"},{title:"物資詳情",disabled:!0}]),o=g({_id:"",name:"",quantity:0,category:"",description:"",image:""}),v=g(null);(async()=>{var d,t;try{const{data:i}=await F.get("/material/"+U.params.id);Object.assign(o.value,i.result)}catch(i){console.log(i),b({text:((t=(d=i==null?void 0:i.response)==null?void 0:d.data)==null?void 0:t.message)||"發生錯誤",snackbarProps:{color:"red"}})}})();const z=te({donator:D().required("服務單位必填"),quantity:se().min(1,"數量不符").required("數量必填"),phone:D().required("聯絡電話必填")}),{handleSubmit:P,isSubmitting:$,resetForm:ye}=le({validationSchema:z,initialValues:{donator:"",quantity:0,phone:""}}),x=k("donator"),y=k("quantity"),V=k("phone"),E=P(async d=>{var t,i;try{const m={donator:d.donator,quantity:d.quantity,phone:d.phone,id:o.value._id};await N.post("material/donate",m),b({text:"新增成功",snackbarProps:{color:"green"}}),q()}catch(m){console.log(m),b({text:((i=(t=m==null?void 0:m.response)==null?void 0:t.data)==null?void 0:i.message)||"發生錯誤",snackbarProps:{color:"red"}})}}),R=()=>{_.value=!0},q=()=>{_.value=!1};function G(d){const t=document.querySelector(d);t&&(t.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{v.value&&v.value.$refs.commentInput&&v.value.$refs.commentInput.focus()},500))}return(d,t)=>{const i=H,m=O;return h(),L(M,{id:"con"},{default:a(()=>[e(ce,{items:j.value},{divider:a(()=>[e(W,{icon:"mdi-chevron-right"})]),_:1},8,["items"]),e(w,{class:"mt-5 w-100 h-66 mx-auto"},{default:a(()=>[e(l,{cols:"12",sm:"6",md:"5",lg:"6",class:"w-66 w-sm-100 d-flex justify-center align-start mx-auto"},{default:a(()=>[e(X,{src:o.value.image,class:"image b-1",contain:""},null,8,["src"])]),_:1}),e(l,{cols:"12",sm:"6",md:"6",lg:"6"},{default:a(()=>[e(C,{variant:"flat",class:"d-none d-sm-block"},{default:a(()=>[e(S,{class:"card-title",style:{"white-space":"pre-line"}},{default:a(()=>[s("物資名稱："+n(o.value.name),1)]),_:1}),e(ne,{thickness:"0"}),e(u,{class:"card-text"},{default:a(()=>[s("需求單位")]),_:1}),e(u,{class:"card-text"},{default:a(()=>[s(n(o.value.organizer),1)]),_:1}),e(u,{class:"card-text"},{default:a(()=>[s("物資類別")]),_:1}),e(u,{class:"card-text"},{default:a(()=>[s(n(o.value.category),1)]),_:1}),e(u,{class:"card-text"},{default:a(()=>[s("需求介紹")]),_:1}),e(u,{class:"card-text"},{default:a(()=>[s(n(o.value.description),1)]),_:1}),e(u,{class:"card-text"},{default:a(()=>[s("所需數量")]),_:1}),e(u,{class:"card-text"},{default:a(()=>[s(n(o.value.quantity),1)]),_:1}),e(u)]),_:1}),e(w,{class:"pl-4 d-flex d-sm-none"},{default:a(()=>[e(l,{cols:"12",class:"font-weight-black card-title",style:{"white-space":"pre-line"}},{default:a(()=>[s("物資名稱："+n(o.value.name),1)]),_:1}),e(l,{cols:"4",class:"card-text"},{default:a(()=>[s("需求單位")]),_:1}),e(l,{cols:"8",class:"card-text"},{default:a(()=>[s(n(o.value.organizer),1)]),_:1}),e(l,{cols:"4",class:"card-text"},{default:a(()=>[s("物資類別")]),_:1}),e(l,{cols:"8",class:"card-text"},{default:a(()=>[s(n(o.value.category),1)]),_:1}),e(l,{cols:"4",class:"card-text"},{default:a(()=>[s("需求介紹")]),_:1}),e(l,{cols:"8",class:"card-text"},{default:a(()=>[s(n(o.value.description),1)]),_:1}),e(l,{cols:"4",class:"card-text"},{default:a(()=>[s("所需數量")]),_:1}),e(l,{cols:"8",class:"card-text"},{default:a(()=>[s(n(o.value.quantity),1)]),_:1})]),_:1}),f("div",ue,[e(i,{text:"我要留言",width:"90",class:"bg-third d-inline-block",onClick:t[0]||(t[0]=c=>G("#msg"))}),e(i,{text:"我要捐贈",width:"90",class:"bg-third d-inline-block",onClick:t[1]||(t[1]=c=>R(null))})])]),_:1})]),_:1}),e(de,{id:"msg",ref_key:"textarea",ref:v},null,512),e(Z,{"max-width":"700px",modelValue:_.value,"onUpdate:modelValue":t[6]||(t[6]=c=>_.value=c)},{default:a(()=>[e(C,{class:"bg-third"},{default:a(()=>[e(M,{class:"pt-0"},{default:a(()=>[e(I,{class:"pa-0 justify-end"},{default:a(()=>[e(B,{id:"close",icon:"$close",variant:"text",onClick:t[2]||(t[2]=c=>q())})]),_:1}),e(S,{class:"font-weight-black text-left text-h5 py-0"},{default:a(()=>[s("物資名稱："+n(o.value.name),1)]),_:1}),f("div",me,[e(u,null,{default:a(()=>[e(oe,{onSubmit:Y(r(E),["prevent"]),disabled:r($)},{default:a(()=>[e(w,null,{default:a(()=>[e(l,{cols:"4",sm:"3",class:"my-auto text-center"},{default:a(()=>[fe]),_:1}),e(l,{cols:"8",sm:"9"},{default:a(()=>[e(r(re),{"control-variant":"stacked",variant:"outlined",inset:"",label:"輸入數量","hide-details":"",min:0,modelValue:r(y).value.value,"onUpdate:modelValue":t[3]||(t[3]=c=>r(y).value.value=c),"error-messages":r(y).errorMessage.value,density:d.$vuetify.display.xs?"compact":"comfortable"},null,8,["modelValue","error-messages","density"])]),_:1}),e(l,{cols:"4",sm:"3",class:"my-auto text-center"},{default:a(()=>[d.$vuetify.display.xs?(h(),T("label",pe,"單位名稱")):(h(),T("label",_e,"單位／姓名"))]),_:1}),e(l,{cols:"8",sm:"9"},{default:a(()=>[e(m,{modelValue:r(x).value.value,"onUpdate:modelValue":t[4]||(t[4]=c=>r(x).value.value=c),"error-messages":r(x).errorMessage.value,density:d.$vuetify.display.xs?"compact":"comfortable"},null,8,["modelValue","error-messages","density"])]),_:1}),e(l,{cols:"4",sm:"3",class:"my-auto text-center"},{default:a(()=>[ve]),_:1}),e(l,{cols:"8",sm:"9"},{default:a(()=>[e(m,{modelValue:r(V).value.value,"onUpdate:modelValue":t[5]||(t[5]=c=>r(V).value.value=c),"error-messages":r(V).errorMessage.value,density:d.$vuetify.display.xs?"compact":"comfortable"},null,8,["modelValue","error-messages","density"])]),_:1})]),_:1}),e(I,null,{default:a(()=>[f("div",ge,[e(B,{type:"submit",text:"送出",variant:"text",class:"rounded-xl b-1 bg-primary",density:"comfortable",loading:r($)},null,8,["loading"])])]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}},Me=ie(be,[["__scopeId","data-v-9b967f4f"]]);export{Me as default};
