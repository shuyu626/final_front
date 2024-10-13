import{W as B,s as w,aR as te,P as U,O as H,Y as G,bp as ae,$ as N,a2 as ne,bq as oe,G as le,ag as ue,H as ie,br as re,aU as se,ah as ce,Z as ve,ak as de,J as me,al as he,K as fe,b2 as ge,am as ye,ao as we,an as z,a1 as q,ap as be,q as ke,as as Se,_ as pe,a8 as Ee,n as Te,bs as Me,a0 as Pe,b0 as xe,N as Ce,bt as Be,b as T,A,y as Ve,ay as Re,bu as De,F as He,bv as Ie,af as Ye}from"./index-COBXCSfB.js";import{u as Ne}from"./ssrBoot-CNgd7gji.js";function Le(e){let{rootEl:s,isSticky:i,layoutItemStyles:E}=e;const t=B(!1),r=B(0),a=w(()=>{const b=typeof t.value=="boolean"?"top":t.value;return[i.value?{top:"auto",bottom:"auto",height:void 0}:void 0,t.value?{[b]:te(r.value)}:{top:E.value.top}]});U(()=>{H(i,b=>{b?window.addEventListener("scroll",p,{passive:!0}):window.removeEventListener("scroll",p)},{immediate:!0})}),G(()=>{window.removeEventListener("scroll",p)});let g=0;function p(){const b=g>window.scrollY?"up":"down",v=s.value.getBoundingClientRect(),d=parseFloat(E.value.top??0),c=window.scrollY-Math.max(0,r.value-d),h=v.height+Math.max(r.value,d)-window.scrollY-window.innerHeight,y=parseFloat(getComputedStyle(s.value).getPropertyValue("--v-body-scroll-y"))||0;v.height<window.innerHeight-d?(t.value="top",r.value=d):b==="up"&&t.value==="bottom"||b==="down"&&t.value==="top"?(r.value=window.scrollY+v.top-y,t.value=!0):b==="down"&&h<=0?(r.value=0,t.value="bottom"):b==="up"&&c<=0&&(y?t.value!=="top"&&(r.value=-c+y+d,t.value="top"):(r.value=v.top+c,t.value="top")),g=window.scrollY}return{isStuck:t,stickyStyles:a}}const We=100,Oe=20;function F(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function Z(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let s=0;for(let i=e.length-1;i>0;i--){if(e[i].t===e[i-1].t)continue;const E=F(s),t=(e[i].d-e[i-1].d)/(e[i].t-e[i-1].t);s+=(t-E)*Math.abs(t),i===e.length-1&&(s*=.5)}return F(s)*1e3}function _e(){const e={};function s(t){Array.from(t.changedTouches).forEach(r=>{(e[r.identifier]??(e[r.identifier]=new ae(Oe))).push([t.timeStamp,r])})}function i(t){Array.from(t.changedTouches).forEach(r=>{delete e[r.identifier]})}function E(t){var b;const r=(b=e[t])==null?void 0:b.values().reverse();if(!r)throw new Error(`No samples for touch id ${t}`);const a=r[0],g=[],p=[];for(const v of r){if(a[0]-v[0]>We)break;g.push({t:v[0],d:v[1].clientX}),p.push({t:v[0],d:v[1].clientY})}return{x:Z(g),y:Z(p),get direction(){const{x:v,y:d}=this,[c,h]=[Math.abs(v),Math.abs(d)];return c>h&&v>=0?"right":c>h&&v<=0?"left":h>c&&d>=0?"down":h>c&&d<=0?"up":Xe()}}}return{addMovement:s,endTouch:i,getVelocity:E}}function Xe(){throw new Error}function $e(e){let{el:s,isActive:i,isTemporary:E,width:t,touchless:r,position:a}=e;U(()=>{window.addEventListener("touchstart",P,{passive:!0}),window.addEventListener("touchmove",M,{passive:!1}),window.addEventListener("touchend",I,{passive:!0})}),G(()=>{window.removeEventListener("touchstart",P),window.removeEventListener("touchmove",M),window.removeEventListener("touchend",I)});const g=w(()=>["left","right"].includes(a.value)),{addMovement:p,endTouch:b,getVelocity:v}=_e();let d=!1;const c=B(!1),h=B(0),y=B(0);let S;function V(n,o){return(a.value==="left"?n:a.value==="right"?document.documentElement.clientWidth-n:a.value==="top"?n:a.value==="bottom"?document.documentElement.clientHeight-n:C())-(o?t.value:0)}function R(n){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const l=a.value==="left"?(n-y.value)/t.value:a.value==="right"?(document.documentElement.clientWidth-n-y.value)/t.value:a.value==="top"?(n-y.value)/t.value:a.value==="bottom"?(document.documentElement.clientHeight-n-y.value)/t.value:C();return o?Math.max(0,Math.min(1,l)):l}function P(n){if(r.value)return;const o=n.changedTouches[0].clientX,l=n.changedTouches[0].clientY,u=25,f=a.value==="left"?o<u:a.value==="right"?o>document.documentElement.clientWidth-u:a.value==="top"?l<u:a.value==="bottom"?l>document.documentElement.clientHeight-u:C(),m=i.value&&(a.value==="left"?o<t.value:a.value==="right"?o>document.documentElement.clientWidth-t.value:a.value==="top"?l<t.value:a.value==="bottom"?l>document.documentElement.clientHeight-t.value:C());(f||m||i.value&&E.value)&&(S=[o,l],y.value=V(g.value?o:l,i.value),h.value=R(g.value?o:l),d=y.value>-20&&y.value<80,b(n),p(n))}function M(n){const o=n.changedTouches[0].clientX,l=n.changedTouches[0].clientY;if(d){if(!n.cancelable){d=!1;return}const f=Math.abs(o-S[0]),m=Math.abs(l-S[1]);(g.value?f>m&&f>3:m>f&&m>3)?(c.value=!0,d=!1):(g.value?m:f)>3&&(d=!1)}if(!c.value)return;n.preventDefault(),p(n);const u=R(g.value?o:l,!1);h.value=Math.max(0,Math.min(1,u)),u>1?y.value=V(g.value?o:l,!0):u<0&&(y.value=V(g.value?o:l,!1))}function I(n){if(d=!1,!c.value)return;p(n),c.value=!1;const o=v(n.changedTouches[0].identifier),l=Math.abs(o.x),u=Math.abs(o.y);(g.value?l>u&&l>400:u>l&&u>3)?i.value=o.direction===({left:"right",right:"left",top:"down",bottom:"up"}[a.value]||C()):i.value=h.value>.5}const D=w(()=>c.value?{transform:a.value==="left"?`translateX(calc(-100% + ${h.value*t.value}px))`:a.value==="right"?`translateX(calc(100% - ${h.value*t.value}px))`:a.value==="top"?`translateY(calc(-100% + ${h.value*t.value}px))`:a.value==="bottom"?`translateY(calc(100% - ${h.value*t.value}px))`:C(),transition:"none"}:void 0);return N(c,()=>{var l,u;const n=((l=s.value)==null?void 0:l.style.transform)??null,o=((u=s.value)==null?void 0:u.style.transition)??null;ne(()=>{var f,m,x,Y;(m=s.value)==null||m.style.setProperty("transform",((f=D.value)==null?void 0:f.transform)||"none"),(Y=s.value)==null||Y.style.setProperty("transition",((x=D.value)==null?void 0:x.transition)||null)}),oe(()=>{var f,m;(f=s.value)==null||f.style.setProperty("transform",n),(m=s.value)==null||m.style.setProperty("transition",o)})}),{isDragging:c,dragProgress:h,dragStyles:D}}function C(){throw new Error}const ze=["start","end","left","right","top","bottom"],qe=le({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,persistent:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>ze.includes(e)},sticky:Boolean,...ue(),...ie(),...re(),...se({mobile:null}),...ce(),...ve(),...de(),...me({tag:"nav"}),...he()},"VNavigationDrawer"),Ze=fe()({name:"VNavigationDrawer",props:qe(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,s){let{attrs:i,emit:E,slots:t}=s;const{isRtl:r}=ge(),{themeClasses:a}=ye(e),{borderClasses:g}=we(e),{backgroundColorClasses:p,backgroundColorStyles:b}=z(q(e,"color")),{elevationClasses:v}=be(e),{displayClasses:d,mobile:c}=ke(e),{roundedClasses:h}=Se(e),y=Be(),S=pe(e,"modelValue",null,k=>!!k),{ssrBootStyles:V}=Ne(),{scopeId:R}=Ee(),P=Te(),M=B(!1),{runOpenDelay:I,runCloseDelay:D}=Ie(e,k=>{M.value=k}),n=w(()=>e.rail&&e.expandOnHover&&M.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),o=w(()=>Me(e.location,r.value)),l=w(()=>e.persistent),u=w(()=>!e.permanent&&(c.value||e.temporary)),f=w(()=>e.sticky&&!u.value&&o.value!=="bottom");N(()=>e.expandOnHover&&e.rail!=null,()=>{H(M,k=>E("update:rail",!k))}),N(()=>!e.disableResizeWatcher,()=>{H(u,k=>!e.permanent&&Ye(()=>S.value=!k))}),N(()=>!e.disableRouteWatcher&&!!y,()=>{H(y.currentRoute,()=>u.value&&(S.value=!1))}),H(()=>e.permanent,k=>{k&&(S.value=!0)}),e.modelValue==null&&!u.value&&(S.value=e.permanent||!c.value);const{isDragging:m,dragProgress:x}=$e({el:P,isActive:S,isTemporary:u,width:n,touchless:q(e,"touchless"),position:o}),Y=w(()=>{const k=u.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):n.value;return m.value?k*x.value:k}),J=w(()=>["top","bottom"].includes(e.location)?0:n.value),{layoutItemStyles:L,layoutItemScrimStyles:K,layoutIsReady:j}=Pe({id:e.name,order:w(()=>parseInt(e.order,10)),position:o,layoutSize:Y,elementSize:J,active:w(()=>S.value||m.value),disableTransitions:w(()=>m.value),absolute:w(()=>e.absolute||f.value&&typeof W.value!="string")}),{isStuck:W,stickyStyles:Q}=Le({rootEl:P,isSticky:f,layoutItemStyles:L}),O=z(w(()=>typeof e.scrim=="string"?e.scrim:null)),ee=w(()=>({...m.value?{opacity:x.value*.2,transition:"none"}:void 0,...K.value}));return xe({VList:{bgColor:"transparent"}}),Ce(()=>{const k=t.image||e.image;return T(He,null,[T(e.tag,A({ref:P,onMouseenter:I,onMouseleave:D,class:["v-navigation-drawer",`v-navigation-drawer--${o.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":M.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":u.value,"v-navigation-drawer--persistent":l.value,"v-navigation-drawer--active":S.value,"v-navigation-drawer--sticky":f.value},a.value,p.value,g.value,d.value,v.value,h.value,e.class],style:[b.value,L.value,V.value,Q.value,e.style,["top","bottom"].includes(o.value)?{height:"auto"}:{}]},R,i),{default:()=>{var _,X,$;return[k&&T("div",{key:"image",class:"v-navigation-drawer__img"},[t.image?T(Re,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},t.image):T(Ve,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),t.prepend&&T("div",{class:"v-navigation-drawer__prepend"},[(_=t.prepend)==null?void 0:_.call(t)]),T("div",{class:"v-navigation-drawer__content"},[(X=t.default)==null?void 0:X.call(t)]),t.append&&T("div",{class:"v-navigation-drawer__append"},[($=t.append)==null?void 0:$.call(t)])]}}),T(De,{name:"fade-transition"},{default:()=>[u.value&&(m.value||S.value)&&!!e.scrim&&T("div",A({class:["v-navigation-drawer__scrim",O.backgroundColorClasses.value],style:[ee.value,O.backgroundColorStyles.value],onClick:()=>{l.value||(S.value=!1)}},R),null)]})])}),j.then(()=>({isStuck:W}))}});export{Ze as V};