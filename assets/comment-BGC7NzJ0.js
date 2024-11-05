import{H as me,aa as ve,ab as fe,L as pe,_ as be,s as c,ac as Y,ad as he,a2 as ye,X as ge,O as _e,j as Z,b as e,F as I,B as ue,m as C,ae as ee,i as we,a3 as xe,n as F,t as ke,o as b,e as te,w as o,l as m,c as V,v as ae,af as ne,z as le,C as q,a as B,ag as Ve,x as Ie,f as Ce,g as M,p as $e,E as Pe,G as Ne}from"./index-BM-Z1O92.js";import{a as E}from"./VContainer-D-C1iiCU.js";import{c as De,a as ze,u as Se,b as Fe,V as Be}from"./index.esm-D6wyXeFr.js";import{_ as Me}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as A,V as K}from"./VRow-Bnu10bz3.js";import{V as se}from"./VTextarea-xYR5fM6x.js";import{b as Ae,V as Ee,a as oe,c as re}from"./_commonjsHelpers-BEJhyQ8M.js";const Ue=me({controlVariant:{type:String,default:"default"},inset:Boolean,hideInput:Boolean,min:{type:Number,default:-1/0},max:{type:Number,default:1/0},step:{type:Number,default:1},...ve(fe(),["appendInnerIcon","prependInnerIcon"])},"VNumberInput"),rt=pe()({name:"VNumberInput",props:{...Ue()},emits:{"update:modelValue":a=>!0},setup(a,h){let{attrs:v,emit:H,slots:i}=h;const l=be(a,"modelValue"),U=c(()=>Y(a.step)),g=c(()=>l.value!=null?Y(l.value):0),f=he(),_=c(()=>a.disabled||a.readonly||(f==null?void 0:f.isReadonly.value)),$=c(()=>_.value?!1:l.value==null?!0:l.value+a.step<=a.max),P=c(()=>_.value?!1:l.value==null?!0:l.value-a.step>=a.min);ye(()=>{_.value||l.value!=null&&(l.value<a.min||l.value>a.max)&&(l.value=ge(l.value,a.min,a.max))});const d=c(()=>a.hideInput?"stacked":a.controlVariant),w=c(()=>d.value==="split"?"$plus":"$collapse"),y=c(()=>d.value==="split"?"$minus":"$expand"),N=c(()=>d.value==="split"?"default":"small"),x=c(()=>d.value==="stacked"?"auto":"100%"),j=c(()=>({click:T})),L=c(()=>({click:n}));function k(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;if(_.value)return;if(l.value==null){l.value=0;return}const R=Math.max(g.value,U.value);u?$.value&&(l.value=+(l.value+a.step).toFixed(R)):P.value&&(l.value=+(l.value-a.step).toFixed(R))}function T(u){u.stopPropagation(),k()}function n(u){u.stopPropagation(),k(!1)}function s(u){if(!(["Enter","ArrowLeft","ArrowRight","Backspace","Delete","Tab"].includes(u.key)||u.ctrlKey)){if(["ArrowDown"].includes(u.key)){u.preventDefault(),k(!1);return}if(["ArrowUp"].includes(u.key)){u.preventDefault(),k();return}/^[0-9\-+.]+$/.test(u.key)||u.preventDefault()}}function t(u){l.value=u?+u:void 0}function r(u){u.stopPropagation()}_e(()=>{const{modelValue:u,...R}=Z.filterProps(a);function G(){return i.increment?e(ee,{key:"increment-defaults",defaults:{VBtn:{disabled:!$.value,flat:!0,height:x.value,size:N.value,icon:w.value}}},{default:()=>[i.increment(j.value)]}):e(C,{disabled:!$.value,flat:!0,key:"increment-btn",height:x.value,name:"increment-btn",icon:w.value,onClick:T,onMousedown:r,size:N.value,tabindex:"-1"},null)}function O(){return i.decrement?e(ee,{key:"decrement-defaults",defaults:{VBtn:{disabled:!P.value,flat:!0,height:x.value,size:N.value,icon:y.value}}},{default:()=>[i.decrement(L.value)]}):e(C,{disabled:!P.value,flat:!0,key:"decrement-btn",height:x.value,name:"decrement-btn",icon:y.value,size:N.value,tabindex:"-1",onClick:n,onMousedown:r},null)}function X(){return e("div",{class:"v-number-input__control"},[O(),e(E,{vertical:d.value!=="stacked"},null),G()])}function J(){return!a.hideInput&&!a.inset?e(E,{vertical:!0},null):void 0}const Q=d.value==="split"?e("div",{class:"v-number-input__control"},[e(E,{vertical:!0},null),G()]):a.reverse?void 0:e(I,null,[J(),X()]),de=i["append-inner"]||Q,W=d.value==="split"?e("div",{class:"v-number-input__control"},[O(),e(E,{vertical:!0},null)]):a.reverse?e(I,null,[X(),J()]):void 0,ce=i["prepend-inner"]||W;return e(Z,ue({modelValue:l.value,"onUpdate:modelValue":t,onKeydown:s,class:["v-number-input",{"v-number-input--default":d.value==="default","v-number-input--hide-input":a.hideInput,"v-number-input--inset":a.inset,"v-number-input--reverse":a.reverse,"v-number-input--split":d.value==="split","v-number-input--stacked":d.value==="stacked"},a.class]},R,{style:a.style,inputmode:"decimal"}),{...i,"append-inner":de?function(){var S;for(var D=arguments.length,z=new Array(D),p=0;p<D;p++)z[p]=arguments[p];return e(I,null,[(S=i["append-inner"])==null?void 0:S.call(i,...z),Q])}:void 0,"prepend-inner":ce?function(){var S;for(var D=arguments.length,z=new Array(D),p=0;p<D;p++)z[p]=arguments[p];return e(I,null,[W,(S=i["prepend-inner"])==null?void 0:S.call(i,...z)])}:void 0})})}}),ie=a=>(Pe("data-v-a99cafe8"),a=a(),Ne(),a),Le=ie(()=>m("div",{class:"b-1 info-margin text-center text-body-1 pa-1 pa-sm-2 bg-accent rounded-t-lg font-weight-bold comment-tag"},"留言板",-1)),Te={class:"b-1 pa-5 info-margin"},Re={class:"pa-1 pa-md-4"},Ke={class:"ml-1 font-weight-bold name-fz"},He={key:0},je={class:"mt-4 ml-4 ml-sm-16 info-fz",style:{"white-space":"pre-line","word-wrap":"break-word"}},qe={key:1,class:"w-100 h-100 mt-4"},Ge={style:{height:"35px"},class:"w-100 w-sm-75 w-md-100 pe-2 text-end"},Oe={key:0,class:"text-center text-body-2 mt-4 mx-auto"},Xe=ie(()=>m("h1",{style:{color:"#bfbfbf"},class:"mb-15"}," 目前暫無任何留言 ",-1)),Je=[Xe],Qe={class:"pa-1 pa-md-4"},We={class:"ml-1 font-weight-bold name-fz"},Ye={style:{height:"35px"},class:"pe-2 text-end w-100 w-sm-75 w-md-100"},Ze={__name:"comment",setup(a){const{apiAuth:h}=$e(),v=we(),H=xe(),i=F([]),l=F([]),U=F(null),g=F(null),f=F(""),_=De({comment:ze().required("留言內容必填")}),{handleSubmit:$,isSubmitting:P,resetForm:d}=Se({validationSchema:_,initialValues:{comment:""}}),w=Fe("comment"),y=async()=>{var n,s;try{const{data:t}=await h.get("/comment/"+H.params.id);i.value=t.result}catch(t){console.log(t),v({text:((s=(n=t==null?void 0:t.response)==null?void 0:n.data)==null?void 0:s.message)||"無法獲取留言",snackbarProps:{color:"red"}})}};ke(()=>{y()}),(async()=>{var n,s;try{const{data:t}=await h.get("/user/profile");l.value=[t.result],U.value=l.value[0].id}catch(t){v({text:((s=(n=t==null?void 0:t.response)==null?void 0:n.data)==null?void 0:s.message)||"發生錯誤",snackbarProps:{color:"red"}})}})();const x=$(async n=>{var s,t;try{const r={content:n.comment,materialId:H.params.id};await h.post("comment/",r),v({text:"新增成功",snackbarProps:{color:"green"}}),d(),y()}catch(r){console.log(r),v({text:((t=(s=r==null?void 0:r.response)==null?void 0:s.data)==null?void 0:t.message)||"發生錯誤",snackbarProps:{color:"red"}})}}),j=(n,s)=>{g.value=n,f.value=s},L=()=>{g.value=null,f.value=""},k=async()=>{var n,s;try{await h.patch(`/comment/${g.value}`,{content:f.value}),v({text:"留言已更新",snackbarProps:{color:"green"}}),y(),L()}catch(t){v({text:((s=(n=t==null?void 0:t.response)==null?void 0:n.data)==null?void 0:s.message)||"更新留言時出錯",snackbarProps:{color:"red"}})}},T=async n=>{var s,t;try{await h.delete(`/comment/${n}`),v({text:"留言已刪除",snackbarProps:{color:"green"}}),y()}catch(r){v({text:((t=(s=r==null?void 0:r.response)==null?void 0:s.data)==null?void 0:t.message)||"刪除留言時出錯",snackbarProps:{color:"red"}})}};return(n,s)=>(b(),te(K,{class:"mt-10"},{default:o(()=>[e(A,null,{default:o(()=>[Le,m("div",Te,[(b(!0),V(I,null,ae(i.value,t=>(b(),te(K,{key:t._id},{default:o(()=>[e(A,{cols:"10",md:"9"},{default:o(()=>[m("div",Re,[m("div",null,[e(ne,{color:"primary b-1",class:"me-3",size:n.$vuetify.display.xs?"default":"large"},{default:o(()=>[e(le,{src:t.user.avatar},null,8,["src"])]),_:2},1032,["size"]),m("span",Ke,q(t.user.username),1)]),g.value!==t._id?(b(),V("div",He,[m("p",je,q(t.content),1)])):(b(),V("div",qe,[e(se,{modelValue:f.value,"onUpdate:modelValue":s[0]||(s[0]=r=>f.value=r),placeholder:"請輸入新的留言內容",variant:"outlined",rows:n.$vuetify.display.xs?"3":"4",clearable:!n.$vuetify.display.xs,"hide-details":"",class:"ms-1 w-100 w-sm-75 w-md-100 px-3 pb-3","auto-grow":"",maxlength:"150",style:{"word-break":"break-word"}},null,8,["modelValue","rows","clearable"]),m("div",Ge,[e(C,{onClick:r=>k(t._id),variant:"text",class:"rounded-md b-1 bg-primary me-2 d-inline-block",height:n.$vuetify.display.xs?"25":"30"},{default:o(()=>[B("儲存")]),_:2},1032,["onClick","height"]),e(C,{onClick:L,variant:"text",class:"rounded-md b-1 bg-info d-inline-block",height:n.$vuetify.display.xs?"25":"30"},{default:o(()=>[B("取消")]),_:1},8,["height"])])]))])]),_:2},1024),e(A,{cols:"2",md:"3",class:"text-end"},{default:o(()=>[e(Ae,{location:"end",class:"cursor-pointer"},Ve({default:o(()=>[e(Ee,{density:"comfortable"},{default:o(()=>[e(oe,null,{default:o(()=>[e(re,{onClick:r=>j(t._id,t.content),variant:"text"},{default:o(()=>[B("編輯")]),_:2},1032,["onClick"])]),_:2},1024),e(oe,null,{default:o(()=>[e(re,{onClick:r=>T(t._id),variant:"text"},{default:o(()=>[B("刪除")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},[t.user._id==U.value?{name:"activator",fn:o(({props:r})=>[e(C,ue({icon:"mdi-dots-vertical",variant:"plain",ref_for:!0},r,{size:n.$vuetify.display.xs?"small":"default"}),null,16,["size"])]),key:"0"}:void 0]),1024)]),_:2},1024)]),_:2},1024))),128)),e(K,{class:"mt-4 mt-sm-5 mt-md-8 mt-lg-10 mb-2"},{default:o(()=>[i.value.length===0?(b(),V("div",Oe,Je)):Ie("",!0),e(E)]),_:1}),e(K,{class:"my-2"},{default:o(()=>[e(A,{cols:"12"},{default:o(()=>[(b(!0),V(I,null,ae(l.value,t=>(b(),V("div",Qe,[m("div",null,[e(ne,{color:"primary b-1",class:"me-3",size:n.$vuetify.display.xs?"default":"large"},{default:o(()=>[e(le,{src:t.avatar},null,8,["src"])]),_:2},1032,["size"]),m("span",We,q(t.username),1)])]))),256))]),_:1}),e(A,{cols:"12",md:"9"},{default:o(()=>[e(Be,{onSubmit:Ce(M(x),["prevent"]),disabled:M(P)},{default:o(()=>[e(se,{ref:"commentInput",modelValue:M(w).value.value,"onUpdate:modelValue":s[1]||(s[1]=t=>M(w).value.value=t),"error-messages":M(w).errorMessage.value,placeholder:"請輸入您的留言或提問",variant:"outlined",maxlength:"150",counter:"",clearable:!n.$vuetify.display.xs,rows:n.$vuetify.display.xs?"4":"5","auto-grow":"",class:"ms-1 w-100 w-sm-75 w-md-100 px-3 pb-1"},null,8,["modelValue","error-messages","clearable","rows"]),m("div",Ye,[e(C,{type:"submit",variant:"text",class:"rounded-md b-1 bg-accent",density:"comfortable",ripple:!1},{default:o(()=>[B("送出")]),_:1})])]),_:1},8,["onSubmit","disabled"])]),_:1})]),_:1})])]),_:1})]),_:1}))}},ut=Me(Ze,[["__scopeId","data-v-a99cafe8"]]);export{ut as C,rt as V};
