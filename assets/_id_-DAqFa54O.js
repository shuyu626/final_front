import{_ as S}from"./appButton-CpQihlZf.js";import{V as f,a as y,_ as I}from"./breadcrumbs-BP33C3v5.js";import{d as P,i as j,n as w,O as z,o as m,e as g,w as a,b as e,S as A,V as L,T as N,a as l,A as d,h as s,c as T,t as D,F as O,g as E,a3 as R,a4 as M,v as U,l as k,a5 as $,C as q,D as G,p as H}from"./index-D2LNHcZy.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as K,V as Q}from"./VContainer-BgWFbPXI.js";const W=u=>(q("data-v-74ead913"),u=u(),G(),u),X=W(()=>k("h2",{class:"info"},"活動介紹",-1)),Y={class:"b-1 info pa-4"},Z={style:{"white-space":"pre-line"},class:"text-body-1 w-75"},ee={__name:"[id]",props:{event:Object,isFavorite:Boolean},setup(u){const v=P(),{api:x,apiAuth:h}=H(),V=$(),p=j(),C=["活動分享","活動詳情"],o=w({_id:"",title:"",date:"",address:"",category:"",organizer:"",description:"",image:""}),n=w(u.isFavorite),b=async()=>{var r,i;try{const{data:t}=await x.get("/event/"+V.params.id);Object.assign(o.value,t.result),v.isLogin&&(n.value=await F(o.value._id))}catch(t){console.log(t),p({text:((i=(r=t==null?void 0:t.response)==null?void 0:r.data)==null?void 0:i.message)||"發生錯誤",snackbarProps:{color:"red"}})}};b();const F=async r=>{var i,t;try{const{data:c}=await h.get("/user/mark");return c.some(_=>_._id===r)}catch(c){return console.log(c),p({text:((t=(i=c==null?void 0:c.response)==null?void 0:i.data)==null?void 0:t.message)||"發生錯誤",snackbarProps:{color:"red"}}),!1}},B=async()=>{if(!v.isLogin){p({text:"請登入後再收藏活動",snackbarProps:{color:"red"}});return}try{const r=await h.post("/user/toggleFavorite",{eventId:o.value._id});n.value=r.data.isFavorite,p({text:r.data.isFavorite?"已收藏":"取消收藏",snackbarProps:{color:"accent"}})}catch(r){console.error("收藏操作失败",r),p({text:"收藏操作失败",snackbarProps:{color:"red"}})}};return z(b),(r,i)=>{const t=I,c=S;return m(),g(Q,null,{default:a(()=>[e(t,{title:C}),e(y,{"justify-center":""},{default:a(()=>[e(f,{cols:"5",class:"d-flex justify-center"},{default:a(()=>[e(A,{src:o.value.image,class:"","max-width":"400","max-height":"500",contain:""},null,8,["src"])]),_:1}),e(f,{cols:"6"},{default:a(()=>[e(L,{variant:"flat"},{default:a(()=>[e(N,{class:"font-weight-black",style:{"white-space":"pre-line"}},{default:a(()=>[l("活動名稱："+d(o.value.title),1)]),_:1}),e(K,{thickness:"0"}),e(s,{class:"font-weight-black"},{default:a(()=>[l("活動時間")]),_:1}),e(s,null,{default:a(()=>[l(d(o.value.date),1)]),_:1}),e(s,{class:"font-weight-black"},{default:a(()=>[l("活動地點")]),_:1}),e(s,null,{default:a(()=>[l(d(o.value.address),1)]),_:1}),e(s,{class:"font-weight-black"},{default:a(()=>[l("活動類別")]),_:1}),(m(!0),T(O,null,D(o.value.category,_=>(m(),g(s,{key:_},{default:a(()=>[l(d(_),1)]),_:2},1024))),128)),e(s,{class:"font-weight-black"},{default:a(()=>[l("主辦單位")]),_:1}),e(s,null,{default:a(()=>[l(d(o.value.organizer),1)]),_:1}),e(s),e(s),e(s),E(v).isLogin?(m(),g(c,{key:0,"prepend-icon":n.value?"mdi-bookmark":"mdi-bookmark-outline",text:n.value?"已收藏":"我要收藏",class:R(n.value?"me-15":"me-15 bg-info"),style:M(n.value?{backgroundColor:"#F5B4B4"}:{}),onClick:B},null,8,["prepend-icon","text","class","style"])):U("",!0)]),_:1})]),_:1})]),_:1}),e(y,null,{default:a(()=>[e(f,{cols:"12",class:"mt-10"},{default:a(()=>[X]),_:1}),e(f,{cols:"12"},{default:a(()=>[k("div",Y,[k("p",Z,d(o.value.description),1)])]),_:1})]),_:1})]),_:1})}}},ce=J(ee,[["__scopeId","data-v-74ead913"]]);export{ce as default};
