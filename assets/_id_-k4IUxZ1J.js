import{_ as de}from"./inputText-Xya9-mid.js";import{_ as ce}from"./appButton-codKl3Ww.js";import{i as W,a3 as X,n as f,P as ie,o as h,e as z,w as a,b as e,l as n,c as B,F as ue,t as L,au as G,y as N,B as y,m as x,a as q,v as me,f as Y,g as c,av as _e,p as Z,D as ee,E as te,C as pe,V as H,T as J,k as K,h as fe,x as ve,aw as be}from"./index-CSljMwmO.js";import{c as ae,a as j,u as se,b as M,V as le,f as ge}from"./index.esm-CyKl8JvG.js";import{_ as oe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as d,a as p}from"./VRow-BLOyIGaR.js";import{V as O}from"./VTextarea-CC-FuFO4.js";import{a as ne,V as Q}from"./VContainer-BnOmXG2O.js";import{V as he}from"./VBreadcrumbs-CGO2YFZR.js";import{V as ye}from"./VNumberInput-DlfXt9EB.js";import"./_commonjsHelpers-Cpj98o6Y.js";const re=u=>(ee("data-v-fcd90799"),u=u(),te(),u),xe=re(()=>n("div",{class:"b-1 info-margin text-center text-body-1 pa-2 bg-accent rounded-t-lg font-weight-bold",style:{width:"150px",padding:"0","border-bottom":"0px"}},"留言板",-1)),Ve={class:"b-1 pa-5 info-margin"},ke={class:"pa-4"},we={class:"ml-1"},$e={key:0},Ce={class:"ml-16 text-body-2 d-inline"},Se={key:1,style:{width:"800"}},qe={class:"pa-4"},Ie={style:{width:"500px"}},Pe={key:0,class:"text-center text-body-2 mt-4 mx-auto"},Be=re(()=>n("h1",{style:{color:"#bfbfbf"},class:"mb-15"}," 目前暫無任何留言 ",-1)),Me=[Be],Te={class:"pa-4"},Ee={__name:"comment",setup(u){const{api:R,apiAuth:b}=Z(),m=W(),V=X(),k=ae({comment:j().required("留言內容必填")}),{handleSubmit:T,isSubmitting:I,resetForm:E}=se({validationSchema:k,initialValues:{comment:""}}),r=f([]),g=async()=>{try{const{data:l}=await b.get("/comment/"+V.params.id);console.log(l),r.value=l.result,console.log(r.value[0].user.username)}catch(l){console.log(l)}};ie(()=>{g()});const P=M("comment"),F=T(async l=>{var s,t;try{const o={content:l.comment,materialId:V.params.id};console.log(o),await b.post("comment/",o),m({text:"新增成功",snackbarProps:{color:"green"}}),E(),g()}catch(o){console.log(o),m({text:((t=(s=o==null?void 0:o.response)==null?void 0:s.data)==null?void 0:t.message)||"發生錯誤",snackbarProps:{color:"red"}})}}),$=f([]);(async()=>{var l,s;try{const{data:t}=await b.get("/user/profile");$.value=[t.result],console.log($.value)}catch(t){m({text:((s=(l=t==null?void 0:t.response)==null?void 0:l.data)==null?void 0:s.message)||"發生錯誤",snackbarProps:{color:"red"}})}})();const C=f(null),_=f(""),S=(l,s)=>{C.value=l,_.value=s},w=()=>{C.value=null,_.value=""},D=async()=>{var l,s;try{await b.patch(`/comment/${C.value}`,{content:_.value}),m({text:"留言已更新",snackbarProps:{color:"green"}}),g(),w()}catch(t){m({text:((s=(l=t==null?void 0:t.response)==null?void 0:l.data)==null?void 0:s.message)||"更新留言時出錯",snackbarProps:{color:"red"}})}},U=async l=>{var s,t;try{await b.delete(`/comment/${l}`),m({text:"留言已刪除",snackbarProps:{color:"green"}}),g()}catch(o){m({text:((t=(s=o==null?void 0:o.response)==null?void 0:s.data)==null?void 0:t.message)||"刪除留言時出錯",snackbarProps:{color:"red"}})}};return(l,s)=>(h(),z(p,{class:"mt-10"},{default:a(()=>[e(d,null,{default:a(()=>[xe,n("div",Ve,[(h(!0),B(ue,null,L(r.value,t=>(h(),z(p,{key:t._id},{default:a(()=>[e(d,{cols:"5"},{default:a(()=>[n("div",ke,[n("div",null,[e(G,{color:"primary b-1",class:"me-3",size:"large"},{default:a(()=>[e(N,{src:t.user.avatar||"default-avatar-url"},null,8,["src"])]),_:2},1024),n("span",we,y(t.user.username),1)]),C.value!==t._id?(h(),B("div",$e,[n("p",Ce,y(t.content),1),e(x,{icon:"mdi-pencil",onClick:o=>S(t._id,t.content),variant:"text",class:"d-inline",color:"grey"},null,8,["onClick"]),e(x,{icon:"mdi-delete",onClick:o=>U(t._id),variant:"text",class:"d-inline",color:"grey"},null,8,["onClick"])])):(h(),B("div",Se,[e(p,{class:"mt-2 mx-8"},{default:a(()=>[n("div",qe,[e(O,{modelValue:_.value,"onUpdate:modelValue":s[0]||(s[0]=o=>_.value=o),placeholder:"請輸入新的留言內容",rows:"4",variant:"outlined",width:"530",clearable:"","hide-details":"",class:"ms-1"},null,8,["modelValue"])])]),_:1}),e(p,null,{default:a(()=>[e(d,{cols:"12"},{default:a(()=>[n("div",Ie,[e(x,{onClick:o=>D(t._id),variant:"text",class:"rounded-md b-1 bg-primary me-2",height:"30"},{default:a(()=>[q("儲存")]),_:2},1032,["onClick"]),e(x,{onClick:w,variant:"text",class:"rounded-md b-1 bg-info",height:"30"},{default:a(()=>[q("取消")]),_:1})])]),_:2},1024)]),_:2},1024)]))])]),_:2},1024)]),_:2},1024))),128)),e(p,{class:"my-10"},{default:a(()=>[r.value.length===0?(h(),B("div",Pe,Me)):me("",!0),e(ne)]),_:1}),e(p,{class:"my-2"},{default:a(()=>[n("div",Te,[e(le,{onSubmit:Y(c(F),["prevent"]),disabled:c(I)},{default:a(()=>[e(O,{ref:"commentInput",modelValue:c(P).value.value,"onUpdate:modelValue":s[1]||(s[1]=t=>c(P).value.value=t),"error-messages":c(P).errorMessage.value,placeholder:"請輸入您的留言或提問",variant:"outlined",width:"600",maxlength:"20",counter:"",clearable:""},_e({_:2},[L($.value,t=>({name:"prepend",fn:a(()=>[e(G,{color:"primary ",class:"me-1 b-1",size:"large"},{default:a(()=>[e(N,{src:t.avatar},null,8,["src"])]),_:2},1024)])}))]),1032,["modelValue","error-messages"]),e(x,{type:"submit",variant:"text",class:"rounded-md b-1 bg-accent mt-2",density:"comfortable",ripple:!1},{default:a(()=>[q("送出")]),_:1})]),_:1},8,["onSubmit","disabled"])])]),_:1})])]),_:1})]),_:1}))}},Fe=oe(Ee,[["__scopeId","data-v-fcd90799"]]),v=u=>(ee("data-v-1e026cec"),u=u(),te(),u),Ae={style:{width:"360px",height:"360px"},class:"b-1 pa-2 d-flex justify-center"},De=v(()=>n("label",{class:"form-label"},"需求單位",-1)),Ue=v(()=>n("label",{class:"form-label"},"物資類別",-1)),ze=v(()=>n("label",{class:"form-label"},"需求介紹",-1)),Ne=v(()=>n("label",{class:"form-label"},"所需數量",-1)),je=v(()=>n("p",null,"2包",-1)),Re={class:"b-1 bg-white rounded-sm pt-5 mt-1"},Le=v(()=>n("label",{class:"form-label"},"捐贈數量",-1)),Ge=v(()=>n("label",{class:"form-label"},"單位／姓名",-1)),He=v(()=>n("label",{class:"form-label"},"聯絡電話",-1)),Je={class:"mx-auto"},Ke={__name:"[id]",setup(u){const{api:R,apiAuth:b}=Z(),m=X(),V=W(),k=f(!1),T=l=>{k.value=!0},I=()=>{k.value=!1},E=f([{title:"首頁",disabled:!1,href:"/"},{title:"我要募資",disabled:!1,href:"/material/find/findMaterial"},{title:"物資詳情",disabled:!0}]),r=f({_id:"",name:"",quantity:0,category:"",description:"",image:""}),g=f(null);(async()=>{var l,s;try{const{data:t}=await R.get("/material/"+m.params.id);r.value._id=t.result._id,r.value.name=t.result.name,r.value.quantity=t.result.quantity,r.value.category=t.result.category,r.value.description=t.result.description,r.value.organizer=t.result.organizer,r.value.image=t.result.image}catch(t){console.log(t),V({text:((s=(l=t==null?void 0:t.response)==null?void 0:l.data)==null?void 0:s.message)||"發生錯誤",snackbarProps:{color:"red"}})}})();const F=ae({donator:j().required("服務單位必填"),quantity:ge().min(1,"數量不符").required("數量必填"),phone:j().required("聯絡電話必填")}),{handleSubmit:$,isSubmitting:A,resetForm:C}=se({validationSchema:F,initialValues:{donator:"",quantity:0,phone:""}}),_=M("donator"),S=M("quantity"),w=M("phone"),D=$(async l=>{var s,t;try{console.log(r.value._id);const o={donator:l.donator,quantity:l.quantity,phone:l.phone,id:r.value._id};console.log(o),await b.post("material/donate",o),V({text:"新增成功",snackbarProps:{color:"green"}}),I()}catch(o){console.log(o),V({text:((t=(s=o==null?void 0:o.response)==null?void 0:s.data)==null?void 0:t.message)||"發生錯誤",snackbarProps:{color:"red"}})}});function U(l){const s=document.querySelector(l);s&&(s.scrollIntoView({behavior:"smooth"}),be(()=>{g.value.focus()}))}return(l,s)=>{const t=ce,o=de;return h(),z(Q,{style:{padding:"0.5rem 15rem 3rem 15rem"}},{default:a(()=>[e(he,{items:E.value},{divider:a(()=>[e(pe,{icon:"mdi-chevron-right"})]),_:1},8,["items"]),e(p,{"justify-center":"",class:"mt-5"},{default:a(()=>[e(d,{cols:"5",class:"d-flex justify-center align-center"},{default:a(()=>[n("div",Ae,[e(N,{src:r.value.image,"max-width":"330","max-height":"330",contain:""},null,8,["src"])])]),_:1}),e(d,{cols:"5"},{default:a(()=>[e(H,{variant:"flat",id:"resourceCard"},{default:a(()=>[e(J,{class:"font-weight-black mb-3 text-h5"},{default:a(()=>[q("物資名稱："+y(r.value.name),1)]),_:1}),e(ne,{thickness:"0"}),e(p,null,{default:a(()=>[e(d,{cols:"12",md:"3",class:"my-auto"},{default:a(()=>[De]),_:1}),e(d,{cols:"12",md:"9"},{default:a(()=>[n("p",null,y(r.value.organizer),1)]),_:1}),e(d,{cols:"12",md:"3",class:"my-auto"},{default:a(()=>[Ue]),_:1}),e(d,{cols:"12",md:"9"},{default:a(()=>[n("p",null,y(r.value.category),1)]),_:1}),e(d,{cols:"12",md:"3"},{default:a(()=>[ze]),_:1}),e(d,{cols:"12",md:"9"},{default:a(()=>[n("p",null,y(r.value.description),1)]),_:1}),e(d,{cols:"12",md:"3",class:"my-auto"},{default:a(()=>[Ne]),_:1}),e(d,{cols:"12",md:"9",class:"my-auto"},{default:a(()=>[je]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(t,{text:"我要留言",width:"90",class:"me-4 bg-third",onClick:s[0]||(s[0]=i=>U("#msg"))}),e(t,{text:"我要捐贈",width:"90",class:"bg-third",onClick:s[1]||(s[1]=i=>T(null))}),e(ve,{"max-width":"700px",modelValue:k.value,"onUpdate:modelValue":s[6]||(s[6]=i=>k.value=i)},{default:a(()=>[e(H,{class:"bg-third"},{default:a(()=>[e(Q,null,{default:a(()=>[e(K,{class:"pa-0"},{default:a(()=>[e(x,{id:"close",icon:"$close",variant:"text",onClick:s[2]||(s[2]=i=>I())})]),_:1}),e(J,{class:"font-weight-black text-left text-h5 py-0"},{default:a(()=>[q("物資名稱："+y(r.value.name),1)]),_:1}),n("div",Re,[e(fe,null,{default:a(()=>[e(le,{onSubmit:Y(c(D),["prevent"]),disabled:c(A)},{default:a(()=>[e(p,null,{default:a(()=>[e(d,{cols:"12",md:"3",class:"my-auto text-center"},{default:a(()=>[Le]),_:1}),e(d,{cols:"12",md:"9"},{default:a(()=>[e(c(ye),{"control-variant":"stacked",variant:"outlined",density:"comfortable",inset:"",label:"輸入數量","hide-details":"",min:0,modelValue:c(S).value.value,"onUpdate:modelValue":s[3]||(s[3]=i=>c(S).value.value=i),"error-messages":c(S).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),e(d,{cols:"12",md:"3",class:"my-auto text-center"},{default:a(()=>[Ge]),_:1}),e(d,{cols:"12",md:"9"},{default:a(()=>[e(o,{modelValue:c(_).value.value,"onUpdate:modelValue":s[4]||(s[4]=i=>c(_).value.value=i),"error-messages":c(_).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),e(d,{cols:"12",md:"3",class:"my-auto text-center"},{default:a(()=>[He]),_:1}),e(d,{cols:"12",md:"9"},{default:a(()=>[e(o,{modelValue:c(w).value.value,"onUpdate:modelValue":s[5]||(s[5]=i=>c(w).value.value=i),"error-messages":c(w).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(K,null,{default:a(()=>[n("div",Je,[e(x,{type:"submit",text:"送出",variant:"text",class:"rounded-xl b-1 bg-primary",density:"comfortable",loading:c(A)},null,8,["loading"])])]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(Fe,{id:"msg",ref_key:"textarea",ref:g},null,512)]),_:1})}}},ot=oe(Ke,[["__scopeId","data-v-1e026cec"]]);export{ot as default};
