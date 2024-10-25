import{_ as Q}from"./appButton-C0bbLeXm.js";import{_ as $}from"./resourceDialog-BwXkkYz4.js";import{q as O,i as H,n as u,O as I,P as J,r as K,o as i,c as V,b as e,w as t,F as h,C as W,g as X,e as g,v as Y,a6 as B,a5 as L,a as c,t as w,j as Z,p as ee,B as b,V as le,l as ae,y as te,T as se,a7 as oe,h as ne}from"./index-DW1dB4o8.js";import{_ as re}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as P,a as ue}from"./VContainer-DyOKtbrN.js";import{V as ie}from"./VNavigationDrawer-D1z81OJS.js";import{V as de}from"./VBreadcrumbs-CrvI1knf.js";import{a as me,b as U}from"./VTooltip-BpOaiswb.js";import{V as ce}from"./VSlideGroup-D3pY3IX8.js";import{a as z}from"./VSelect-GuU7lnzV.js";import{V as M,a as C}from"./VRow-AFvdTtgd.js";import{V as fe}from"./VPagination-BuIUimu_.js";import{a as pe}from"./_commonjsHelpers-BewCcMwT.js";import{V as T}from"./VCheckbox-AVVnQvAU.js";import"./inputText-D9Ci_N4Y.js";import"./index.esm-B1gMtEOJ.js";import"./ssrBoot-C2_DrOPH.js";const _e={class:"d-flex justify-content-center b-1 item-img"},A=8,ve={__name:"findMaterial",setup(Ve){const{mobile:D}=O(),{api:N}=ee(),q=H(),F=u([{title:"首頁",disabled:!1,href:"/"},{title:"我要募資",disabled:!0}]),r=u([{name:"食品",selected:!1},{name:"服飾配件",selected:!1},{name:"日用品",selected:!1},{name:"家具",selected:!1},{name:"輔具",selected:!1},{name:"教育用品",selected:!1},{name:"嬰幼兒用品",selected:!1},{name:"電器",selected:!1},{name:"休閒用品",selected:!1},{name:"其他",selected:!1}]),n=u(!0),p=u([]),f=u(""),d=()=>{const o=r.value.filter(l=>l.selected).map(l=>l.name),s=f.value?f.value.toLowerCase():"";n.value?p.value=m.value.filter(l=>l.name.toLowerCase().includes(s)||l.organizer.toLowerCase().includes(s)):o.length===0&&s.trim()===""?p.value=[]:p.value=m.value.filter(l=>{const y=o.length===0||o.includes(l.category),x=l.name.toLowerCase().includes(s)||l.organizer.toLowerCase().includes(s);return y&&x})};I(f,()=>{d()}),I(()=>r.value.map(o=>o.selected),()=>{d(),n.value=r.value.every(o=>o.selected)},{deep:!0});const E=()=>{r.value.forEach(o=>{o.selected=n.value}),d()};J(()=>{E()});const G=(o,s)=>{n.value?(n.value=!1,r.value.forEach(l=>{l.selected=l===o})):(o.selected=!o.selected,n.value=r.value.every(l=>l.selected)),s(),d()},R=o=>{n.value=!n.value,r.value.forEach(s=>{s.selected=n.value}),o&&o(),d()},k=u(1),S=u(1),m=u([]),_=async()=>{var o,s;try{const{data:l}=await N.get("/material/find",{params:{itemsPerPage:A,page:k.value}});S.value=Math.ceil(l.result.total/A),m.value.splice(0,m.value.length,...l.result.data),d(),console.log(m),console.log(m.value)}catch(l){console.log(l),q({text:((s=(o=l==null?void 0:l.response)==null?void 0:o.data)==null?void 0:s.message)||"發生錯誤",snackbarProps:{color:"red"}})}};return _(),(o,s)=>{const l=$,y=K("router-link"),x=Q;return i(),V(h,null,[e(P,{class:"h-100"},{default:t(()=>[e(de,{items:F.value},{divider:t(()=>[e(W,{icon:"mdi-chevron-right"})]),_:1},8,["items"]),X(D)?(i(),g(l,{key:0,type:"find",onUpdate:_})):Y("",!0),e(B,{"max-width":"900",class:"mx-auto d-xl-none d-lg-block"},{default:t(()=>[e(me,{class:"w-100 mx-auto d-inline-block"},{default:t(()=>[e(ce,{"show-arrows":"",multiple:"","mobile-breakpoint":"xxl"},{default:t(()=>[e(U,null,{default:t(({toggle:a})=>[e(z,{style:L({backgroundColor:n.value?"#616161":"#EEEEEE",color:n.value?"white":"black"}),class:"ma-2",onClick:()=>R(a)},{default:t(()=>[c(" 全部 ")]),_:2},1032,["style","onClick"])]),_:1}),(i(!0),V(h,null,w(r.value,a=>(i(),g(U,{key:a.name},{default:t(({isSelected:v,toggle:j})=>[e(z,{style:L({backgroundColor:n.value||v?"#616161":"#EEEEEE",color:n.value||v?"white":"black"}),class:"ma-2",onClick:()=>G(a,j)},{default:t(()=>[c(b(a.name),1)]),_:2},1032,["style","onClick"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),e(M,{class:"pl-lg-15 h-100"},{default:t(()=>[(i(!0),V(h,null,w(p.value,a=>(i(),g(C,{key:a.id,cols:"12",md:"6"},{default:t(()=>[e(le,{variant:"flat"},{default:t(()=>[e(M,{class:"align-content-center h-100 my-4"},{default:t(()=>[e(C,{cols:"6",sm:"7",md:"6",class:"ml-5 ml-sm-0"},{default:t(()=>[e(y,{to:"/material/find/"+a._id},{default:t(()=>[ae("div",_e,[e(te,{src:a.image,contain:""},null,8,["src"])])]),_:2},1032,["to"])]),_:2},1024),e(C,{cols:"5",sm:"5",md:"5"},{default:t(()=>[e(se,{class:"text-h6 text-md-h6 font-weight-bold ms-md-1"},{default:t(()=>[c(b(a.name),1)]),_:2},1024),e(oe,{style:{"font-size":"16px"},class:"ms-md-1"},{default:t(()=>[c(b(a.organizer),1)]),_:2},1024),e(ne,{style:{"font-size":"15px"},class:"ms-md-1 pt-sm-1 pb-sm-2"},{default:t(()=>[c("數量："+b(a.quantity),1)]),_:2},1024),e(x,{text:"詳細說明",class:"bg-third ms-md-4 ms-3",to:"/material/find/"+a._id},null,8,["to"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),e(C,{cols:"12"},{default:t(()=>[e(fe,{modelValue:k.value,"onUpdate:modelValue":[s[0]||(s[0]=a=>k.value=a),_],length:S.value,rounded:"circle"},null,8,["modelValue","length"])]),_:1})]),_:1})]),_:1}),e(ie,{class:"bg-primary b-1 text-center",width:"300"},{default:t(()=>[e(l,{type:"find",onUpdate:_}),e(B,null,{default:t(()=>[e(Z,{variant:"outlined",label:"搜尋","prepend-inner-icon":"mdi-magnify","hide-details":"","single-line":"",density:"comfortable",clearable:"",width:"250",class:"bg-white mx-auto mt-5 my-5",modelValue:f.value,"onUpdate:modelValue":s[1]||(s[1]=a=>f.value=a)},null,8,["modelValue"])]),_:1}),e(pe,{class:"text-h5 font-weight-black text-left ml-2"},{default:t(()=>[c("物資類別")]),_:1}),e(ue,{thickness:"2",length:"250",class:"mx-auto"}),e(P,null,{default:t(()=>[e(T,{modelValue:n.value,"onUpdate:modelValue":s[2]||(s[2]=a=>n.value=a),label:"所有物品",onChange:s[3]||(s[3]=a=>E()),"hide-details":"",density:"comfortable"},null,8,["modelValue"]),(i(!0),V(h,null,w(r.value,a=>(i(),g(T,{key:a.name,modelValue:a.selected,"onUpdate:modelValue":v=>a.selected=v,label:a.name,onChange:d,"hide-details":"",class:"ml-5",density:"comfortable"},null,8,["modelValue","onUpdate:modelValue","label"]))),128))]),_:1})]),_:1})],64)}}},Te=re(ve,[["__scopeId","data-v-e43e5797"]]);export{Te as default};
