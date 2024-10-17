import{_ as E}from"./appButton-B0kB_3Y_.js";import{d as L,a3 as N,i as T,n as x,P as A,o as m,e as _,w as a,b as e,C as D,y as O,V as R,T as M,a as t,B as n,h as i,c as k,t as V,F as w,g as U,a4 as B,a5 as $,v as q,m as G,l as v,p as H,D as J,E as K}from"./index-CLcJD62s.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as W,a as X}from"./VContainer-fv7sSjsE.js";import{V as Y}from"./VBreadcrumbs-DUMhYA76.js";import{a as l,V as b}from"./VRow-D6Zqt0U_.js";const F=f=>(J("data-v-c8e9b19a"),f=f(),K(),f),Z=F(()=>v("h2",{class:"info"},"活動介紹",-1)),ee={class:"b-1 info pa-4 mb-5"},ae=F(()=>v("h3",{class:"info d-sm-none mb-2"},"活動介紹",-1)),te={style:{"white-space":"pre-line"},class:"text-sm-body-1 w-100"},se={__name:"[id]",props:{event:Object,isFavorite:Boolean},setup(f){const g=L(),{api:C,apiAuth:h}=H(),I=N(),p=T(),S=x([{title:"首頁",disabled:!1,href:"/"},{title:"活動分享",disabled:!1,href:"../event/findEvent.vue"},{title:"物資詳情",disabled:!0}]),s=x({_id:"",title:"",date:"",address:"",category:"",organizer:"",description:"",image:""}),d=x(f.isFavorite),z=async()=>{var c,u;try{const{data:r}=await C.get("/event/"+I.params.id);Object.assign(s.value,r.result),g.isLogin&&(d.value=await P(s.value._id))}catch(r){console.log(r),p({text:((u=(c=r==null?void 0:r.response)==null?void 0:c.data)==null?void 0:u.message)||"發生錯誤",snackbarProps:{color:"red"}})}},P=async c=>{var u,r;try{const{data:o}=await h.get("/user/mark");return o.some(j=>j._id===c)}catch(o){return console.log(o),p({text:((r=(u=o==null?void 0:o.response)==null?void 0:u.data)==null?void 0:r.message)||"發生錯誤",snackbarProps:{color:"red"}}),!1}},y=async()=>{if(!g.isLogin){p({text:"請登入後再收藏活動",snackbarProps:{color:"red"}});return}try{const c=await h.post("/user/toggleFavorite",{eventId:s.value._id});d.value=c.data.isFavorite,console.log(d.value),p({text:c.data.isFavorite?"已收藏":"取消收藏",snackbarProps:{color:c.data.isFavorite?"#F5B4B4":"info"}})}catch(c){console.error("收藏操作失败",c),p({text:"收藏操作失败",snackbarProps:{color:"red"}})}};return A(z),(c,u)=>{const r=E;return m(),_(W,null,{default:a(()=>[e(Y,{items:S.value},{divider:a(()=>[e(D,{icon:"mdi-chevron-right"})]),_:1},8,["items"]),e(b,{"justify-center":"",class:"mt-2 flex-column flex-sm-row"},{default:a(()=>[e(l,{cols:"12",sm:"6",md:"5",lg:"6",class:"w-66 w-sm-100 d-flex justify-center align-start mx-auto",style:{"margin-top":"20px"}},{default:a(()=>[e(O,{src:s.value.image,class:"image",contain:""},null,8,["src"])]),_:1}),e(l,{cols:"12",sm:"6",md:"7",lg:"6"},{default:a(()=>[e(R,{variant:"flat",class:"d-none d-sm-block"},{default:a(()=>[e(M,{class:"card-title",style:{"white-space":"pre-line"}},{default:a(()=>[t("活動名稱："+n(s.value.title),1)]),_:1}),e(X,{thickness:"0"}),e(i,{class:"card-text"},{default:a(()=>[t("活動時間")]),_:1}),e(i,{class:"card-text"},{default:a(()=>[t(n(s.value.date),1)]),_:1}),e(i,{class:"card-text"},{default:a(()=>[t("活動地點")]),_:1}),e(i,{class:"card-text"},{default:a(()=>[t(n(s.value.address),1)]),_:1}),e(i,{class:"card-text"},{default:a(()=>[t("活動類別")]),_:1}),(m(!0),k(w,null,V(s.value.category,o=>(m(),_(i,{class:"card-text",key:o},{default:a(()=>[t(n(o),1)]),_:2},1024))),128)),e(i,{class:"card-text"},{default:a(()=>[t("主辦單位")]),_:1}),e(i,{class:"card-text"},{default:a(()=>[t(n(s.value.organizer),1)]),_:1}),e(i),e(i),e(i),U(g).isLogin?(m(),_(r,{key:0,"prepend-icon":d.value?"mdi-bookmark":"mdi-bookmark-outline",text:d.value?"已收藏":"我要收藏",class:B([d.value?"me-15":"me-15 bg-info","text-body-3"]),style:$(d.value?{backgroundColor:"#F5B4B4"}:{}),onClick:y,width:"125",height:"32",ripple:!1},null,8,["prepend-icon","text","class","style"])):q("",!0)]),_:1}),e(b,{class:"pl-4 d-flex d-sm-none"},{default:a(()=>[e(l,{cols:"12",class:"font-weight-black card-title",style:{"white-space":"pre-line"}},{default:a(()=>[t("活動名稱："+n(s.value.title),1)]),_:1}),e(l,{cols:"3",class:"card-text"},{default:a(()=>[t("活動時間")]),_:1}),e(l,{cols:"9",class:"card-text"},{default:a(()=>[t(n(s.value.date),1)]),_:1}),e(l,{cols:"3",class:"card-text"},{default:a(()=>[t("活動地點")]),_:1}),e(l,{cols:"9",class:"card-text"},{default:a(()=>[t(n(s.value.address),1)]),_:1}),e(l,{cols:"3",class:"card-text"},{default:a(()=>[t("活動類別")]),_:1}),(m(!0),k(w,null,V(s.value.category,o=>(m(),_(l,{cols:"9",class:"card-text",key:o},{default:a(()=>[t(n(o),1)]),_:2},1024))),128)),e(l,{cols:"3",class:"card-text"},{default:a(()=>[t("主辦單位")]),_:1}),e(l,{cols:"9",class:"card-text"},{default:a(()=>[t(n(s.value.organizer),1)]),_:1}),e(l,{cols:"12",class:"mt-6",style:{position:"relative"}},{default:a(()=>[e(G,{color:"medium-emphasis",icon:d.value?"mdi-heart":"mdi-heart-outline",class:B([d.value?"me-5 mb-2 bg-red-lighten-4":"me-5 mb-2 bg-info","bg-transparent xs-btn m-0"]),size:"small",onClick:y,elevation:"0",variant:"text"},null,8,["icon","class"])]),_:1})]),_:1})]),_:1})]),_:1}),e(b,null,{default:a(()=>[e(l,{cols:"12",class:"d-none d-sm-flex mt-lg-2 py-0"},{default:a(()=>[Z]),_:1}),e(l,{cols:"12"},{default:a(()=>[v("div",ee,[ae,v("p",te,n(s.value.description),1)])]),_:1})]),_:1})]),_:1})}}},ue=Q(se,[["__scopeId","data-v-c8e9b19a"]]);export{ue as default};