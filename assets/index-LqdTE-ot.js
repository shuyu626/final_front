import{_ as G}from"./search-BOiWTyLp.js";import{i as R,n as i,O as J,o as $,c as U,b as e,w as l,S as Q,l as c,B as X,x as V,D as j,E as W,p as Y,y as be,r as se,a as T,m as z,V as fe,T as he,h as we,f as Ve,g as y,k as $e,A as Pe,F as D,q as Ie,u as Se,d as Ae,s as pe,C as Le,e as N,t as ce,z as te,v as Ue}from"./index-DOKjEeaw.js";import{c as Ce,a as E,u as Be,b as H,V as Te}from"./index.esm-DOR69wP7.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as Z}from"./eventTable.vue_vue_type_style_index_0_scoped_dd92091b_lang-Dt_ZCEpK.js";import{V as Me}from"./VBreadcrumbs-D7xO5Q_I.js";import{a as ze,_ as Fe,V as qe}from"./logo-Dr-MV4XS.js";import{_ as De}from"./inputText-21tOsGNw.js";import{V as me}from"./VContainer-CAztc7wg.js";import{a as ge,V as L}from"./VRow-DEu2eCRv.js";import{V as Ke}from"./VSelect-Cln8gt1B.js";import{V as Oe}from"./VTextarea-0oifa1gI.js";import{b as ve}from"./route-block-B_A1xBdJ.js";import{V as Ne}from"./VNavigationDrawer-Dtv3q0E_.js";import{a as Ee,b as ae,c as He,V as le}from"./VTabs-BzGAIIkB.js";import{a as Re,V as je,b as We,c as Ge}from"./VMenu-DznRLCu2.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./VPagination-BTJbf4B5.js";import"./VToolbar-BBlboDfp.js";import"./ssrBoot-D7mdbICF.js";const Je=p=>(j("data-v-d24aeb28"),p=p(),W(),p),Qe={class:"b-1 w-75 mx-auto"},Xe=Je(()=>c("h2",{class:"bb-1 bg-primary text-center mx-auto py-1"},"帳號管理",-1)),Ye={class:"text-center"},Ze={style:{width:"220px"}},et={style:{width:"350px"},class:"py-2"},tt={__name:"allAccountTable",setup(p){const{api:F,apiAuth:P}=Y(),x=R(),_=i(10),g=i([{key:"createdAt",order:"desc"}]),f=i(1),h=i([]),v=[{title:"圖片",align:"center",sortable:!1,key:"avatar"},{title:"使用者",align:"center",sortable:!1,key:"_id"},{title:"服務單位",align:"center",sortable:!1,key:"username"},{title:"信箱",align:"center",sortable:!1,key:"email"}],k=i(!0),w=i(0),b=i(""),m=async S=>{var o,a,t,u;S&&(f.value=1),k.value=!0;try{const{data:s}=await P.get("/user/",{params:{page:f.value,itemsPerPage:_.value,sortBy:((o=g.value[0])==null?void 0:o.key)||"createdAt",sortOrder:((a=g.value[0])==null?void 0:a.order)||"desc",search:b.value}});h.value.splice(0,h.value.length,...s.result.data),console.log(h.value),w.value=s.result.total}catch(s){console.log(s),x({text:((u=(t=s==null?void 0:s.response)==null?void 0:t.data)==null?void 0:u.message)||"發生錯誤",snackbarProps:{color:"red"}})}k.value=!1};return m(),J(b,()=>{m(!0)}),(S,o)=>{const a=G;return $(),U("div",Qe,[Xe,e(Z,{"items-per-page":_.value,"onUpdate:itemsPerPage":[o[3]||(o[3]=t=>_.value=t),o[6]||(o[6]=t=>m(!1))],"sort-by":g.value,"onUpdate:sortBy":[o[4]||(o[4]=t=>g.value=t),o[7]||(o[7]=t=>m(!1))],page:f.value,"onUpdate:page":[o[5]||(o[5]=t=>f.value=t),o[8]||(o[8]=t=>m(!1))],items:h.value,headers:v,loading:k.value,"items-length":w.value,search:b.value,hover:"",class:"mb-15 px-8 rounded-lg",style:{"font-size":"15px"}},{top:l(()=>[e(a,{class:"my-5",modelValue:b.value,"onUpdate:modelValue":o[0]||(o[0]=t=>b.value=t),onClickAppend:o[1]||(o[1]=t=>m(!0)),onKeydown:o[2]||(o[2]=Q(t=>m(!0),["enter"])),"max-width":"100%"},null,8,["modelValue"])]),"item.avatar":l(({item:t})=>[c("div",Ye,[e(X,{src:t.avatar,width:"100px","max-height":"140px",class:"my-5 mx-auto"},null,8,["src"])])]),"item.address":l(({item:t})=>[c("td",Ze,V(t.address),1)]),"item.description":l(({item:t})=>[c("td",et,V(t.description),1)]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])])}}},at=K(tt,[["__scopeId","data-v-d24aeb28"]]),lt={__name:"breadcrumbs",props:{title:{type:Array,default:()=>[""]}},setup(p){return(F,P)=>($(),U("div",null,[e(Me,{items:p.title,class:"ml-15 mt-5"},{divider:l(()=>[e(be,{icon:"mdi-chevron-right"})]),_:1},8,["items"])]))}},st=K(lt,[["__scopeId","data-v-f701aa16"]]),O=p=>(j("data-v-3e22c9bf"),p=p(),W(),p),ot={class:"b-1 w-75 mx-auto"},nt=O(()=>c("h2",{class:"bb-1 bg-primary text-center mx-auto py-1"},"活動管理",-1)),rt={style:{width:"180px"},class:"text-left"},it={style:{width:"220px"},class:"text-left"},dt={style:{width:"80px"}},ut={style:{width:"350px"},class:"py-2"},ct={style:{width:"80px"}},mt=O(()=>c("label",{class:"form-label"},"活動名稱：",-1)),pt=O(()=>c("label",{class:"form-label"},"活動地點：",-1)),gt=O(()=>c("label",{class:"form-label"},"活動類別：",-1)),vt=O(()=>c("label",{class:"form-label"},"活動時間：",-1)),bt=O(()=>c("label",{class:"form-label"},"主辦單位：",-1)),ft=O(()=>c("label",{class:"form-label"},"活動介紹：",-1)),yt={class:"mx-auto"},xt={__name:"allEventTable",setup(p){const{api:F,apiAuth:P}=Y(),x=R(),_=i(null),g=i([]),f=i([]),h=i(10),v=i([{key:"createdAt",order:"desc"}]),k=i(1),w=i([]),b=[{title:"圖片",align:"center",sortable:!1,key:"image"},{title:"活動名稱",align:"center",sortable:!1,key:"title"},{title:"活動地點",align:"center",sortable:!1,key:"address"},{title:"活動類別",align:"center",sortable:!0,key:"category"},{title:"活動時間",align:"center",sortable:!0,key:"date"},{title:"主辦單位",align:"center",sortable:!1,key:"organizer"},{title:"活動介紹",align:"center",sortable:!1,key:"description"},{title:"操作",align:"center",sortable:!1,key:"action"}],m=i(!0),S=i(0),o=i(""),a=async A=>{var n,M,C,I;A&&(k.value=1),m.value=!0;try{const{data:B}=await P.get("/event/all",{params:{page:k.value,itemsPerPage:h.value,sortBy:((n=v.value[0])==null?void 0:n.key)||"createdAt",sortOrder:((M=v.value[0])==null?void 0:M.order)||"desc",search:o.value}});w.value.splice(0,w.value.length,...B.result.data),S.value=B.result.total}catch(B){console.log(B),x({text:((I=(C=B==null?void 0:B.response)==null?void 0:C.data)==null?void 0:I.message)||"發生錯誤",snackbarProps:{color:"red"}})}m.value=!1};a();const t=["兒童","青少年","育兒","長照","精神","照顧","就學","就業","身障","親職教育","早療","紓壓","居住","醫療","司法","社工","其他"],u=i({open:!1,id:""}),s=()=>{u.value.open=!1,xe(),_.value.deleteFileRecord()},d=Ce({title:E().required("活動標題必填"),date:E().required("活動日期必填"),address:E().required("活動地點必填"),category:E().required("活動分類必填").test("isCategory","商品分類錯誤",A=>t.includes(A)),organizer:E().required("主辦單位必填"),description:E().required("活動介紹必填")}),{handleSubmit:q,isSubmitting:ee,resetForm:xe}=Be({validationSchema:d,initialValues:{title:"",date:"",address:"",category:"",organizer:"",description:""}}),oe=H("title"),ne=H("date"),re=H("address"),ie=H("category"),de=H("organizer"),ue=H("description"),_e=q(async A=>{var n,M,C;if(!((n=g.value[0])!=null&&n.error)&&!(g.value.length<1))try{const I=new FormData;I.append("title",A.title),I.append("date",A.date),I.append("address",A.address),I.append("category",A.category),I.append("organizer",A.organizer),I.append("description",A.description),g.value.length>0&&I.append("image",g.value[0].file),await P.patch("/event/"+u.value.id,I),x({text:"新增成功",snackbarProps:{color:"green"}}),s()}catch(I){console.log(I),x({text:((C=(M=I==null?void 0:I.response)==null?void 0:M.data)==null?void 0:C.message)||"發生錯誤",snackbarProps:{color:"red"}})}});J(o,()=>{a(!0)});const ke=async A=>{var n,M;try{await P.delete(`/event/${A._id}`),x({text:"刪除成功",snackbarProps:{color:"green"}}),a(!0)}catch(C){console.log(C),x({text:((M=(n=C==null?void 0:C.response)==null?void 0:n.data)==null?void 0:M.message)||"發生錯誤",snackbarProps:{color:"red"}})}};return(A,n)=>{const M=G,C=se("router-link"),I=se("vue-file-agent"),B=De;return $(),U(D,null,[c("div",ot,[nt,e(Z,{"items-per-page":h.value,"onUpdate:itemsPerPage":[n[3]||(n[3]=r=>h.value=r),n[6]||(n[6]=r=>a(!1))],"sort-by":v.value,"onUpdate:sortBy":[n[4]||(n[4]=r=>v.value=r),n[7]||(n[7]=r=>a(!1))],page:k.value,"onUpdate:page":[n[5]||(n[5]=r=>k.value=r),n[8]||(n[8]=r=>a(!1))],items:w.value,headers:b,loading:m.value,"items-length":S.value,search:o.value,hover:"",class:"mb-15 px-8 rounded-lg"},{top:l(()=>[e(M,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=r=>o.value=r),onClickAppend:n[1]||(n[1]=r=>a(!0)),onKeydown:n[2]||(n[2]=Q(r=>a(!0),["enter"])),"max-width":"100%",class:"my-5"},null,8,["modelValue"])]),"item.image":l(({item:r})=>[e(C,{to:"/event/"+r._id,style:{"text-decoration":"none"}},{default:l(()=>[e(X,{src:r.image,width:"140px","max-height":"160px",class:"my-5"},null,8,["src"])]),_:2},1032,["to"])]),"item.title":l(({item:r})=>[c("td",rt,V(r.title),1)]),"item.address":l(({item:r})=>[c("td",it,V(r.address),1)]),"item.category":l(({item:r})=>[c("td",dt,V(r.category.join(" , ")),1)]),"item.description":l(({item:r})=>[c("td",ut,V(r.description),1)]),"item.action":l(({item:r})=>[c("td",ct,[T(V(r.action)+" ",1),e(z,{icon:"mdi-delete",variant:"text",color:"red-darken-4",onClick:Yt=>ke(r)},null,8,["onClick"])])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),e(Pe,{"max-width":"700",modelValue:u.value.open,"onUpdate:modelValue":n[18]||(n[18]=r=>u.value.open=r)},{default:l(()=>[e(fe,null,{default:l(()=>[e(me,null,{default:l(()=>[e(he,{class:"font-weight-black text-center text-h4"},{default:l(()=>[T("新增活動")]),_:1}),e(we,null,{default:l(()=>[e(Te,{onSubmit:Ve(y(_e),["prevent"]),disabled:y(ee)},{default:l(()=>[e(ge,null,{default:l(()=>[e(L,null,{default:l(()=>[e(I,{modelValue:g.value,"onUpdate:modelValue":n[9]||(n[9]=r=>g.value=r),"raw-model-value":f.value,"onUpdate:rawModelValue":n[10]||(n[10]=r=>f.value=r),accept:"image/jpeg,image/png",deletable:"","max-size":"1MB","help-text":"選擇檔案或拖曳到這裡","error-text":{type:"檔案格式不支援",size:"檔案大小不能超過 1MB"},ref_key:"fileAgent",ref:_},null,8,["modelValue","raw-model-value"])]),_:1})]),_:1}),e(ge,null,{default:l(()=>[e(L,{cols:"12",md:"3",class:"my-auto text-center"},{default:l(()=>[mt]),_:1}),e(L,{cols:"12",md:"9"},{default:l(()=>[e(B,{modelValue:y(oe).value.value,"onUpdate:modelValue":n[11]||(n[11]=r=>y(oe).value.value=r),"error-messages":y(oe).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),e(L,{cols:"12",md:"3",class:"my-auto text-center"},{default:l(()=>[pt]),_:1}),e(L,{cols:"12",md:"9"},{default:l(()=>[e(B,{modelValue:y(re).value.value,"onUpdate:modelValue":n[12]||(n[12]=r=>y(re).value.value=r),"error-messages":y(re).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),e(L,{cols:"12",md:"3",class:"my-auto text-center"},{default:l(()=>[gt]),_:1}),e(L,{cols:"12",md:"3"},{default:l(()=>[e(Ke,{modelValue:y(ie).value.value,"onUpdate:modelValue":n[13]||(n[13]=r=>y(ie).value.value=r),"error-messages":y(ie).errorMessage.value,label:"選擇",variant:"outlined",density:"comfortable",dense:"",width:"140",items:t,"hide-details":""},null,8,["modelValue","error-messages"])]),_:1}),e(L,{cols:"3",class:"my-auto text-center px-0"},{default:l(()=>[vt]),_:1}),e(L,{cols:"3"},{default:l(()=>[e(B,{modelValue:y(ne).value.value,"onUpdate:modelValue":n[14]||(n[14]=r=>y(ne).value.value=r),"error-messages":y(ne).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),e(L,{cols:"12",md:"3",class:"my-auto text-center"},{default:l(()=>[bt]),_:1}),e(L,{cols:"12",md:"9"},{default:l(()=>[e(B,{modelValue:y(de).value.value,"onUpdate:modelValue":n[15]||(n[15]=r=>y(de).value.value=r),"error-messages":y(de).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),e(L,{cols:"12",md:"3",class:"text-center"},{default:l(()=>[ft]),_:1}),e(L,{cols:"12",md:"9"},{default:l(()=>[e(Oe,{label:"輸入文字",variant:"outlined",clearable:"","hide-details":"",modelValue:y(ue).value.value,"onUpdate:modelValue":n[16]||(n[16]=r=>y(ue).value.value=r),"error-messages":y(ue).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e($e,null,{default:l(()=>[c("div",yt,[e(z,{variant:"text",class:"rounded-xl b-1",density:"comfortable",type:"submit",loading:y(ee)},{default:l(()=>[T("送出")]),_:1},8,["loading"]),e(z,{text:"取消",variant:"text",class:"rounded-xl b-1",density:"comfortable",onClick:n[17]||(n[17]=r=>s())})])]),_:1})]),_:1},8,["onSubmit","disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}},_t=K(xt,[["__scopeId","data-v-3e22c9bf"]]),kt=p=>(j("data-v-2b046428"),p=p(),W(),p),ht={class:"b-1 w-75 mx-auto"},wt=kt(()=>c("h2",{class:"bb-1 bg-primary text-center mx-auto py-1"},"我要募資",-1)),Vt={style:{width:"250px"},class:"py-2"},$t={style:{width:"80px"}},Pt={__name:"allFindTable",props:{cardTitle:{type:String,default:"發布需求"},numberTitle:{type:String,default:"需求量"},descriptionTitle:{type:String,default:"需求介紹"},type:{type:String,default:"share"}},setup(p){const{api:F,apiAuth:P}=Y(),x=R(),_=i(8),g=i([{key:"createdAt",order:"desc"}]),f=i(1),h=i([]),v=[{title:"圖片",align:"center",sortable:!1,key:"image"},{title:"名稱",align:"center",sortable:!1,key:"name"},{title:"數量",align:"center",sortable:!1,key:"quantity"},{title:"分類",align:"center",sortable:!0,key:"category"},{title:"概況",align:"center",sortable:!1,key:"description"},{title:"單位",align:"center",sortable:!1,key:"organizer"},{title:"操作",align:"center",sortable:!1,key:"action"}],k=i(!0),w=i(0),b=i(""),m=async o=>{var a,t,u,s;o&&(f.value=1),k.value=!0;try{const{data:d}=await P.get("/material/find",{params:{page:f.value,itemsPerPage:_.value,sortBy:((a=g.value[0])==null?void 0:a.key)||"createdAt",sortOrder:((t=g.value[0])==null?void 0:t.order)||"desc",search:b.value}});h.value.splice(0,h.value.length,...d.result.data),w.value=d.result.total}catch(d){console.log(d),x({text:((s=(u=d==null?void 0:d.response)==null?void 0:u.data)==null?void 0:s.message)||"發生錯誤",snackbarProps:{color:"red"}})}k.value=!1};m(),J(b,()=>{m(!0)});const S=async o=>{var a,t;try{await P.delete(`/Material/${o._id}`),x({text:"刪除成功",snackbarProps:{color:"green"}}),m(!0)}catch(u){console.log(u),x({text:((t=(a=u==null?void 0:u.response)==null?void 0:a.data)==null?void 0:t.message)||"發生錯誤",snackbarProps:{color:"red"}})}};return(o,a)=>{const t=G,u=se("router-link");return $(),U("div",ht,[wt,e(Z,{"items-per-page":_.value,"onUpdate:itemsPerPage":[a[3]||(a[3]=s=>_.value=s),a[6]||(a[6]=s=>m(!1))],"sort-by":g.value,"onUpdate:sortBy":[a[4]||(a[4]=s=>g.value=s),a[7]||(a[7]=s=>m(!1))],page:f.value,"onUpdate:page":[a[5]||(a[5]=s=>f.value=s),a[8]||(a[8]=s=>m(!1))],items:h.value,headers:v,loading:k.value,"items-length":w.value,search:b.value,hover:"",class:"mb-15 px-8 rounded-lg"},{top:l(()=>[e(t,{modelValue:b.value,"onUpdate:modelValue":a[0]||(a[0]=s=>b.value=s),onClickAppend:a[1]||(a[1]=s=>m(!0)),onKeydown:a[2]||(a[2]=Q(s=>m(!0),["enter"])),"max-width":"100%",class:"my-5"},null,8,["modelValue"])]),"item.image":l(({item:s})=>[e(u,{to:"/material/find/"+s._id,style:{"text-decoration":"none"}},{default:l(()=>[e(X,{src:s.image,width:"80px","max-height":"100px"},null,8,["src"])]),_:2},1032,["to"])]),"item.description":l(({item:s})=>[c("td",Vt,V(s.description),1)]),"item.action":l(({item:s})=>[c("td",$t,[T(V(s.action)+" ",1),e(z,{icon:"mdi-delete",variant:"text",color:"red-darken-4",onClick:d=>S(s)},null,8,["onClick"])])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])])}}},It=K(Pt,[["__scopeId","data-v-2b046428"]]),St=p=>(j("data-v-ca951f5e"),p=p(),W(),p),At={class:"b-1 w-75 mx-auto"},Lt=St(()=>c("h2",{class:"bb-1 bg-primary text-center mx-auto py-1"},"我要分享",-1)),Ut={style:{width:"250px"},class:"py-2"},Ct={style:{width:"80px"}},Bt={__name:"allShareTable",props:{cardTitle:{type:String,default:"發布需求"},numberTitle:{type:String,default:"需求量"},descriptionTitle:{type:String,default:"需求介紹"},type:{type:String,default:"share"}},setup(p){const{api:F,apiAuth:P}=Y(),x=R();i(null),i([]),i([]);const _=i(8),g=i([{key:"createdAt",order:"desc"}]),f=i(1),h=i([]),v=[{title:"圖片",align:"center",sortable:!1,key:"image"},{title:"名稱",align:"center",sortable:!1,key:"name"},{title:"數量",align:"center",sortable:!1,key:"quantity"},{title:"分類",align:"center",sortable:!0,key:"category"},{title:"概況",align:"center",sortable:!1,key:"description"},{title:"單位",align:"center",sortable:!1,key:"organizer"},{title:"操作",align:"center",sortable:!1,key:"action"}],k=i(!0),w=i(0),b=i(""),m=async o=>{var a,t,u,s;o&&(f.value=1),k.value=!0;try{const{data:d}=await P.get("/material/share",{params:{page:f.value,itemsPerPage:_.value,sortBy:((a=g.value[0])==null?void 0:a.key)||"createdAt",sortOrder:((t=g.value[0])==null?void 0:t.order)||"desc",search:b.value}});h.value.splice(0,h.value.length,...d.result.data),w.value=d.result.total}catch(d){console.log(d),x({text:((s=(u=d==null?void 0:d.response)==null?void 0:u.data)==null?void 0:s.message)||"發生錯誤",snackbarProps:{color:"red"}})}k.value=!1};m(),J(b,()=>{m(!0)});const S=async o=>{var a,t;try{await P.delete(`/Material/${o._id}`),x({text:"刪除成功",snackbarProps:{color:"green"}}),m(!0)}catch(u){console.log(u),x({text:((t=(a=u==null?void 0:u.response)==null?void 0:a.data)==null?void 0:t.message)||"發生錯誤",snackbarProps:{color:"red"}})}};return(o,a)=>{const t=G,u=se("router-link");return $(),U("div",At,[Lt,e(Z,{"items-per-page":_.value,"onUpdate:itemsPerPage":[a[3]||(a[3]=s=>_.value=s),a[6]||(a[6]=s=>m(!1))],"sort-by":g.value,"onUpdate:sortBy":[a[4]||(a[4]=s=>g.value=s),a[7]||(a[7]=s=>m(!1))],page:f.value,"onUpdate:page":[a[5]||(a[5]=s=>f.value=s),a[8]||(a[8]=s=>m(!1))],items:h.value,headers:v,loading:k.value,"items-length":w.value,search:b.value,hover:"",class:"mb-15 px-8 rounded-lg"},{top:l(()=>[e(t,{modelValue:b.value,"onUpdate:modelValue":a[0]||(a[0]=s=>b.value=s),onClickAppend:a[1]||(a[1]=s=>m(!0)),onKeydown:a[2]||(a[2]=Q(s=>m(!0),["enter"])),"max-width":"100%",class:"my-5"},null,8,["modelValue"])]),"item.image":l(({item:s})=>[e(u,{to:"/material/share/"+s._id,style:{"text-decoration":"none"}},{default:l(()=>[e(X,{src:s.image,width:"80px","max-height":"100px"},null,8,["src"])]),_:2},1032,["to"])]),"item.description":l(({item:s})=>[c("td",Ut,V(s.description),1)]),"item.action":l(({item:s})=>[c("td",Ct,[T(V(s.action)+" ",1),e(z,{icon:"mdi-delete",variant:"text",color:"red-darken-4",onClick:d=>S(s)},null,8,["onClick"])])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])])}}},Tt=K(Bt,[["__scopeId","data-v-ca951f5e"]]),Mt=p=>(j("data-v-834b31c3"),p=p(),W(),p),zt={class:"b-1 w-75 mx-auto"},Ft=Mt(()=>c("h2",{class:"bb-1 bg-primary text-center mx-auto py-1"},"地標管理",-1)),qt={style:{width:"240px"}},Dt={style:{width:"120px"}},Kt={style:{width:"300px"},class:"text-left"},Ot={style:{width:"200px"},class:"text-center"},Nt={style:{width:"350px"},class:"py-2 text-left"},Et={style:{width:"80px"}},Ht={__name:"allLandmark",setup(p){const{apiAuth:F}=Y(),P=R(),x=i(10),_=i([{key:"createdAt",order:"desc"}]),g=i(1),f=i([]),h=[{title:"服務名稱",align:"center",sortable:!1,key:"name"},{title:"地址",align:"center",sortable:!0,key:"address"},{title:"聯絡電話",align:"center",sortable:!1,key:"tel"},{title:"服務項目",align:"center",sortable:!0,key:"categories"},{title:"服務介紹",align:"center",sortable:!1,key:"description"},{title:"操作",align:"center",sortable:!1,key:"action"}],v=i(!0),k=i(0),w=i(""),b=async S=>{var o,a,t,u;S&&(g.value=1),v.value=!0;try{const{data:s}=await F.get("/landmark/",{params:{page:g.value,itemsPerPage:x.value,sortBy:((o=_.value[0])==null?void 0:o.key)||"createdAt",sortOrder:((a=_.value[0])==null?void 0:a.order)||"desc",search:w.value}});console.log(s),f.value.splice(0,f.value.length,...s.result.data),k.value=s.result.total}catch(s){console.log(s),P({text:((u=(t=s==null?void 0:s.response)==null?void 0:t.data)==null?void 0:u.message)||"發生錯誤",snackbarProps:{color:"red"}})}v.value=!1};b(),J(w,()=>{b(!0)});const m=async S=>{var o,a;try{await F.delete(`/landmark/${S._id}`),P({text:"刪除成功",snackbarProps:{color:"green"}}),b(!0)}catch(t){console.log(t),P({text:((a=(o=t==null?void 0:t.response)==null?void 0:o.data)==null?void 0:a.message)||"發生錯誤",snackbarProps:{color:"red"}})}};return(S,o)=>{const a=G;return $(),U("div",zt,[Ft,e(Z,{"items-per-page":x.value,"onUpdate:itemsPerPage":[o[3]||(o[3]=t=>x.value=t),o[6]||(o[6]=t=>b(!1))],"sort-by":_.value,"onUpdate:sortBy":[o[4]||(o[4]=t=>_.value=t),o[7]||(o[7]=t=>b(!1))],page:g.value,"onUpdate:page":[o[5]||(o[5]=t=>g.value=t),o[8]||(o[8]=t=>b(!1))],items:f.value,headers:h,loading:v.value,"items-length":k.value,search:w.value,hover:"",class:"mx-auto rounded-lg mb-15 px-8"},{top:l(()=>[e(a,{modelValue:w.value,"onUpdate:modelValue":o[0]||(o[0]=t=>w.value=t),onClickAppend:o[1]||(o[1]=t=>b(!0)),onKeydown:o[2]||(o[2]=Q(t=>b(!0),["enter"])),"max-width":"100%",class:"my-5"},null,8,["modelValue"])]),"item.name":l(({item:t})=>[c("td",qt,V(t.name),1)]),"item.tel":l(({item:t})=>[c("td",Dt,V(t.tel),1)]),"item.address":l(({item:t})=>[c("td",Kt,V(t.address),1)]),"item.categories":l(({item:t})=>[c("td",Ot,V(t.categories.join(" , ")),1)]),"item.description":l(({item:t})=>[c("td",Nt,V(t.description),1)]),"item.action":l(({item:t})=>[c("td",Et,[T(V(t.action)+" ",1),e(z,{icon:"mdi-delete",variant:"text",color:"red-darken-4",onClick:u=>m(t)},null,8,["onClick"])])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])])}}},Rt=K(Ht,[["__scopeId","data-v-834b31c3"]]),jt=p=>(j("data-v-2d828a96"),p=p(),W(),p),Wt=jt(()=>c("span",{style:{"text-transform":"capitalize",color:"#474747"},class:"text-h6 pl-1"},"KeeperS",-1)),Gt={class:"d-flex flex-row"},Jt={class:"mx-auto mb-5 rounded-lg"},Qt={class:"mx-auto mb-5 rounded-lg"},Xt={class:"mx-auto mb-5 rounded-lg"},ye={__name:"index",setup(p){const F=["會員中心","基本資料"],P=["會員中心","地標管理"],x=["會員中心","貼文管理"],_=["會員中心","活動收藏"],g=i("option-1"),{mobile:f}=Ie(),h=Se(),v=Ae(),k=R(),w=i(!1),b=pe(()=>[{title:"資源地圖",icon:"mdi-map-search",show:v.isLogin,items:[{to:"/",text:"資源查詢",show:v.isLogin},{to:"/map/createMark",text:"新增資源",show:v.isLogin}]},{title:"物資分享",icon:"mdi-package-variant",show:v.isLogin,items:[{to:"/material/find/findMaterial",text:"我要募資",show:v.isLogin||v.isAdmin},{to:"/material/share/shareMaterial",text:"我要分享",show:v.isLogin||v.isAdmin}]}]),m=pe(()=>[{to:"/",text:"資源地圖",icon:"mdi-map-search",show:!v.isLogin},{to:"/event/findEvent",text:"活動分享",icon:"mdi-calendar",show:!0},{to:"/setting",text:"管理",icon:"mdi-cog",show:v.isLogin},{to:"",text:"註冊/登入",icon:"mdi-account-plus",show:!v.isLogin},{to:"/admin/",text:"管理者",icon:"mdi-face-man",show:v.isLogin&&v.isAdmin}]),S=a=>{a.text==="註冊/登入"&&(dialogOpen.value=!0)},o=async()=>{await v.logout(),k({text:"登出成功",snackbarProps:{color:"green"}}),h.push("/")};return(a,t)=>{const u=st,s=at;return $(),U(D,null,[e(ze,{color:"info","scroll-behavior":"elevate",class:"b-1"},{default:l(()=>[e(me,{class:"d-flex align-center"},{default:l(()=>[e(z,{to:"/",active:!1,class:"p-1"},{default:l(()=>[e(X,{src:Fe,width:"30",class:"d-inline-block",style:{"vertical-align":"cneter"},contain:""}),Wt]),_:1}),e(Le),y(f)?($(),N(qe,{key:0,onClick:t[0]||(t[0]=d=>w.value=!0)})):($(),U(D,{key:1},[($(!0),U(D,null,ce(b.value,d=>($(),N(Re,{key:d.title,"open-on-hover":"",transition:"slide-y-transition"},{activator:l(({props:q})=>[d.show?($(),N(z,Ue({key:0,ref_for:!0},q,{ripple:!1,"prepend-icon":d.icon,class:"font-weight-black pe-1"}),{default:l(()=>[T(V(d.title)+" ",1),e(be,null,{default:l(()=>[T("mdi-menu-down")]),_:1})]),_:2},1040,["prepend-icon"])):te("",!0)]),default:l(()=>[e(je,null,{default:l(()=>[($(!0),U(D,null,ce(d.items,(q,ee)=>($(),U(D,{key:ee},[q.show?($(),N(We,{key:0,to:q.to,link:""},{default:l(()=>[e(Ge,null,{default:l(()=>[T(V(q.text),1)]),_:2},1024)]),_:2},1032,["to"])):te("",!0)],64))),128))]),_:2},1024)]),_:2},1024))),128)),($(!0),U(D,null,ce(m.value,d=>($(),U(D,null,[d.show?($(),N(z,{key:d.to,"prepend-icon":d.icon,to:d.to,active:!1,class:"mx-1 font-weight-black pe-1",onClick:q=>S(d)},{default:l(()=>[T(V(d.text),1)]),_:2},1032,["prepend-icon","to","onClick"])):te("",!0)],64))),256)),y(v).isLogin?($(),N(z,{key:0,class:"ms-8 bg-accent b-1",elevation:"2","prepend-icon":"mdi-account-arrow-right",onClick:o},{default:l(()=>[T("登出")]),_:1})):te("",!0)],64))]),_:1})]),_:1}),e(Ne,{color:"info",class:"b-1"},{default:l(()=>[e(Ee,{modelValue:g.value,"onUpdate:modelValue":t[1]||(t[1]=d=>g.value=d),color:"black",direction:"vertical","show-arrows":""},{default:l(()=>[e(ae,{"prepend-icon":"mdi-account-wrench",text:"用戶管理",value:"option-1",height:"100",class:"text-body-1 ms-1"}),e(ae,{"prepend-icon":"mdi-map-marker-multiple",text:"資源地圖",value:"option-2",height:"100",class:"text-body-1 ms-1"}),e(ae,{"prepend-icon":"mdi-calendar-cursor",text:"活動分享",value:"option-3",height:"100",class:"text-body-1 ms-1"}),e(ae,{"prepend-icon":"mdi-gift",text:"物資分享",value:"option-4",height:"100",class:"text-body-1 ms-1"})]),_:1},8,["modelValue"])]),_:1}),e(fe,{class:"h-100"},{default:l(()=>[c("div",Gt,[e(me,null,{default:l(()=>[e(He,{modelValue:g.value,"onUpdate:modelValue":t[2]||(t[2]=d=>g.value=d),class:"my-10"},{default:l(()=>[e(le,{value:"option-1"},{default:l(()=>[e(u,{title:F}),e(s)]),_:1}),e(le,{value:"option-2"},{default:l(()=>[e(u,{title:P}),e(Rt)]),_:1}),e(le,{value:"option-3"},{default:l(()=>[e(u,{title:x}),c("div",Jt,[e(_t)])]),_:1}),e(le,{value:"option-4"},{default:l(()=>[e(u,{title:_}),c("div",Qt,[e(It)]),c("div",Xt,[e(Tt)])]),_:1})]),_:1},8,["modelValue"])]),_:1})])]),_:1})],64)}}};typeof ve=="function"&&ve(ye);const xa=K(ye,[["__scopeId","data-v-2d828a96"]]);export{xa as default};
