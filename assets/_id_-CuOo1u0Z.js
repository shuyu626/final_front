import{_ as H}from"./inputText-U5k-6xhP.js";import{_ as J}from"./appButton-BSzXkyvV.js";import{a3 as K,i as L,n as g,o as h,e as O,w as a,p as Q,b as e,C as W,y as X,V as C,T as S,a as l,B as n,h as m,l as f,k as I,m as B,f as Y,g as d,c as T,x as Z,aa as ee,D as ae,E as te}from"./index-DAotSVBs.js";import{c as se,a as D,f as le,u as oe,b as k,V as re}from"./index.esm-tw-ydve1.js";import{C as ie,V as de}from"./comment-BBBNGus7.js";import{_ as ne}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as M,a as ce}from"./VContainer-DGGr1jMh.js";import{V as ue}from"./VBreadcrumbs-ClBVwiis.js";import{a as r,V as w}from"./VRow-BbB3N1UR.js";import"./_commonjsHelpers-DyTOPYWW.js";import"./ssrBoot-CvjFJ1CD.js";import"./VTextarea-8-L0_cQG.js";const z=p=>(ae("data-v-f75f59bd"),p=p(),te(),p),me={style:{width:"100%",height:"30px","text-align":"right"},class:"mt-5"},fe={class:"b-1 bg-white rounded-sm pt-5 mt-2 mb-4 mx-sm-2 mx-md-4"},pe=z(()=>f("label",{class:"form-label"},"捐贈數量",-1)),_e={key:0,class:"form-label"},ve={key:1,class:"form-label"},ge=z(()=>f("label",{class:"form-label"},"聯絡電話",-1)),xe={class:"mx-auto"},ye={__name:"[id]",setup(p){const{api:A,apiAuth:F}=Q(),N=K(),x=L(),_=g(!1),U=i=>{_.value=!0},q=()=>{_.value=!1},P=g([{title:"首頁",disabled:!1,href:"/"},{title:"我要募資",disabled:!1,href:"/material/find/findMaterial"},{title:"物資詳情",disabled:!0}]),s=g({_id:"",name:"",quantity:0,category:"",description:"",image:""});(async()=>{var i,t;try{const{data:o}=await A.get("/material/"+N.params.id);s.value._id=o.result._id,s.value.name=o.result.name,s.value.quantity=o.result.quantity,s.value.category=o.result.category,s.value.description=o.result.description,s.value.organizer=o.result.organizer,s.value.image=o.result.image}catch(o){console.log(o),x({text:((t=(i=o==null?void 0:o.response)==null?void 0:i.data)==null?void 0:t.message)||"發生錯誤",snackbarProps:{color:"red"}})}})();const j=se({donator:D().required("服務單位必填"),quantity:le().min(1,"數量不符").required("數量必填"),phone:D().required("聯絡電話必填")}),{handleSubmit:E,isSubmitting:$,resetForm:Ve}=oe({validationSchema:j,initialValues:{donator:"",quantity:0,phone:""}}),y=k("donator"),b=k("quantity"),V=k("phone"),R=E(async i=>{var t,o;try{console.log(s.value._id);const c={donator:i.donator,quantity:i.quantity,phone:i.phone,id:s.value._id};console.log(c),await F.post("material/donate",c),x({text:"新增成功",snackbarProps:{color:"green"}}),q()}catch(c){console.log(c),x({text:((o=(t=c==null?void 0:c.response)==null?void 0:t.data)==null?void 0:o.message)||"發生錯誤",snackbarProps:{color:"red"}})}}),v=g(null);function G(i){const t=document.querySelector(i);t&&(t.scrollIntoView({behavior:"smooth"}),ee(()=>{v.value&&v.value.$refs.commentInput&&v.value.$refs.commentInput.focus()}))}return(i,t)=>{const o=J,c=H;return h(),O(M,{id:"con"},{default:a(()=>[e(ue,{items:P.value},{divider:a(()=>[e(W,{icon:"mdi-chevron-right"})]),_:1},8,["items"]),e(w,{class:"mt-5 w-100 h-66 mx-auto"},{default:a(()=>[e(r,{cols:"12",sm:"6",md:"5",lg:"6",class:"w-66 w-sm-100 d-flex justify-center mt-5 mx-auto"},{default:a(()=>[e(X,{src:s.value.image,class:"image b-1",contain:""},null,8,["src"])]),_:1}),e(r,{cols:"12",sm:"6",md:"6",lg:"6"},{default:a(()=>[e(C,{variant:"flat",class:"d-none d-sm-block"},{default:a(()=>[e(S,{class:"card-title",style:{"white-space":"pre-line"}},{default:a(()=>[l("物資名稱："+n(s.value.name),1)]),_:1}),e(ce,{thickness:"0"}),e(m,{class:"card-text"},{default:a(()=>[l("需求單位")]),_:1}),e(m,{class:"card-text"},{default:a(()=>[l(n(s.value.organizer),1)]),_:1}),e(m,{class:"card-text"},{default:a(()=>[l("物資類別")]),_:1}),e(m,{class:"card-text"},{default:a(()=>[l(n(s.value.category),1)]),_:1}),e(m,{class:"card-text"},{default:a(()=>[l("需求介紹")]),_:1}),e(m,{class:"card-text"},{default:a(()=>[l(n(s.value.description),1)]),_:1}),e(m,{class:"card-text"},{default:a(()=>[l("所需數量")]),_:1}),e(m,{class:"card-text"},{default:a(()=>[l(n(s.value.quantity),1)]),_:1}),e(m)]),_:1}),e(w,{class:"pl-4 d-flex d-sm-none"},{default:a(()=>[e(r,{cols:"12",class:"font-weight-black card-title",style:{"white-space":"pre-line"}},{default:a(()=>[l("物資名稱："+n(s.value.name),1)]),_:1}),e(r,{cols:"4",class:"card-text"},{default:a(()=>[l("需求單位")]),_:1}),e(r,{cols:"8",class:"card-text"},{default:a(()=>[l(n(s.value.organizer),1)]),_:1}),e(r,{cols:"4",class:"card-text"},{default:a(()=>[l("物資類別")]),_:1}),e(r,{cols:"8",class:"card-text"},{default:a(()=>[l(n(s.value.category),1)]),_:1}),e(r,{cols:"4",class:"card-text"},{default:a(()=>[l("需求介紹")]),_:1}),e(r,{cols:"8",class:"card-text"},{default:a(()=>[l(n(s.value.description),1)]),_:1}),e(r,{cols:"4",class:"card-text"},{default:a(()=>[l("所需數量")]),_:1}),e(r,{cols:"8",class:"card-text"},{default:a(()=>[l(n(s.value.quantity),1)]),_:1})]),_:1}),f("div",me,[e(o,{text:"我要留言",width:"90",class:"bg-third d-inline-block",onClick:t[0]||(t[0]=u=>G("#msg"))}),e(o,{text:"我要捐贈",width:"90",class:"bg-third d-inline-block",onClick:t[1]||(t[1]=u=>U(null))})])]),_:1})]),_:1}),e(ie,{id:"msg",ref_key:"textarea",ref:v},null,512),e(Z,{"max-width":"700px",modelValue:_.value,"onUpdate:modelValue":t[6]||(t[6]=u=>_.value=u)},{default:a(()=>[e(C,{class:"bg-third"},{default:a(()=>[e(M,{class:"pt-0"},{default:a(()=>[e(I,{class:"pa-0 justify-end"},{default:a(()=>[e(B,{id:"close",icon:"$close",variant:"text",onClick:t[2]||(t[2]=u=>q())})]),_:1}),e(S,{class:"font-weight-black text-left text-h5 py-0"},{default:a(()=>[l("物資名稱："+n(s.value.name),1)]),_:1}),f("div",fe,[e(m,null,{default:a(()=>[e(re,{onSubmit:Y(d(R),["prevent"]),disabled:d($)},{default:a(()=>[e(w,null,{default:a(()=>[e(r,{cols:"4",sm:"3",class:"my-auto text-center"},{default:a(()=>[pe]),_:1}),e(r,{cols:"8",sm:"9"},{default:a(()=>[e(d(de),{"control-variant":"stacked",variant:"outlined",inset:"",label:"輸入數量","hide-details":"",min:0,modelValue:d(b).value.value,"onUpdate:modelValue":t[3]||(t[3]=u=>d(b).value.value=u),"error-messages":d(b).errorMessage.value,density:i.$vuetify.display.xs?"compact":"comfortable"},null,8,["modelValue","error-messages","density"])]),_:1}),e(r,{cols:"4",sm:"3",class:"my-auto text-center"},{default:a(()=>[i.$vuetify.display.xs?(h(),T("label",_e,"單位名稱")):(h(),T("label",ve,"單位／姓名"))]),_:1}),e(r,{cols:"8",sm:"9"},{default:a(()=>[e(c,{modelValue:d(y).value.value,"onUpdate:modelValue":t[4]||(t[4]=u=>d(y).value.value=u),"error-messages":d(y).errorMessage.value,density:i.$vuetify.display.xs?"compact":"comfortable"},null,8,["modelValue","error-messages","density"])]),_:1}),e(r,{cols:"4",sm:"3",class:"my-auto text-center"},{default:a(()=>[ge]),_:1}),e(r,{cols:"8",sm:"9"},{default:a(()=>[e(c,{modelValue:d(V).value.value,"onUpdate:modelValue":t[5]||(t[5]=u=>d(V).value.value=u),"error-messages":d(V).errorMessage.value,density:i.$vuetify.display.xs?"compact":"comfortable"},null,8,["modelValue","error-messages","density"])]),_:1})]),_:1}),e(I,null,{default:a(()=>[f("div",xe,[e(B,{type:"submit",text:"送出",variant:"text",class:"rounded-xl b-1 bg-primary",density:"comfortable",loading:d($)},null,8,["loading"])])]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}},ze=ne(ye,[["__scopeId","data-v-f75f59bd"]]);export{ze as default};