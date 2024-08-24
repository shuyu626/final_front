import{aF as It,E as F,n as H,s as x,g as X,a1 as xe,aG as ee,aH as Y,a0 as I,Z as Q,aI as z,aJ as J,aK as ue,aL as $e,N as Me,aM as Ne,W as ye,aN as fe,aO as re,aP as q,J as G,M as U,b as d,z as C,aQ as Ft,aR as $,aS as Vt,aT as Bt,aU as we,aV as _t,aW as Ct,ad as Ot,q as ke,aX as At,F as L,B as Ce,m as He,a as Oe,aY as Se,f as Ae,A as Rt,G as Et,aZ as $t,I as Mt,ab as Nt,ac as Ht,a_ as Lt,a$ as Le,b0 as Ge}from"./index-D2LNHcZy.js";import{V as Re}from"./VPagination-CyO1I9S2.js";import{V as je,c as pe,a as Gt}from"./VSelect-bcIupnSw.js";import{a as Ke}from"./VContainer-BgWFbPXI.js";function Ee(e,l,a){return Object.keys(e).filter(t=>It(t)&&t.endsWith(l)).reduce((t,n)=>(t[n.slice(0,-l.length)]=r=>e[n](r,a(r)),t),{})}const jt=(e,l,a)=>e==null||l==null?-1:e.toString().toLocaleLowerCase().indexOf(l.toString().toLocaleLowerCase()),Kt=F({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function Wt(e,l,a){var o;const t=[],n=(a==null?void 0:a.default)??jt,r=a!=null&&a.filterKeys?ee(a.filterKeys):!1,u=Object.keys((a==null?void 0:a.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return t;e:for(let s=0;s<e.length;s++){const[i,m=i]=ee(e[s]),v={},g={};let S=-1;if((l||u>0)&&!(a!=null&&a.noFilter)){if(typeof i=="object"){const f=r||Object.keys(m);for(const b of f){const c=Y(m,b),k=(o=a==null?void 0:a.customKeyFilter)==null?void 0:o[b];if(S=k?k(c,l,i):n(c,l,i),S!==-1&&S!==!1)k?v[b]=S:g[b]=S;else if((a==null?void 0:a.filterMode)==="every")continue e}}else S=n(i,l,i),S!==-1&&S!==!1&&(g.title=S);const h=Object.keys(g).length,y=Object.keys(v).length;if(!h&&!y||(a==null?void 0:a.filterMode)==="union"&&y!==u&&!h||(a==null?void 0:a.filterMode)==="intersection"&&(y!==u||!h))continue}t.push({index:s,matches:{...g,...v}})}return t}function zt(e,l,a,t){const n=H([]),r=H(new Map),u=x(()=>t!=null&&t.transform?X(l).map(s=>[s,t.transform(s)]):X(l));xe(()=>{const s=typeof a=="function"?a():X(a),i=typeof s!="string"&&typeof s!="number"?"":String(s),m=Wt(u.value,i,{customKeyFilter:{...e.customKeyFilter,...X(t==null?void 0:t.customKeyFilter)},default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),v=X(l),g=[],S=new Map;m.forEach(h=>{let{index:y,matches:f}=h;const b=v[y];g.push(b),S.set(b.value,f)}),n.value=g,r.value=S});function o(s){return r.value.get(s.value)}return{filteredItems:n,filteredMatches:r,getMatches:o}}const Ut=F({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),We=Symbol.for("vuetify:datatable:expanded");function ze(e){const l=I(e,"expandOnClick"),a=Q(e,"expanded",e.expanded,o=>new Set(o),o=>[...o.values()]);function t(o,s){const i=new Set(a.value);s?i.add(o.value):i.delete(o.value),a.value=i}function n(o){return a.value.has(o.value)}function r(o){t(o,!n(o))}const u={expand:t,expanded:a,expandOnClick:l,isExpanded:n,toggleExpand:r};return z(We,u),u}function Ue(){const e=J(We);if(!e)throw new Error("foo");return e}const qt=F({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),qe=Symbol.for("vuetify:data-table-group");function Qe(e){return{groupBy:Q(e,"groupBy")}}function Je(e){const{disableSort:l,groupBy:a,sortBy:t}=e,n=H(new Set),r=x(()=>a.value.map(m=>({...m,order:m.order??!1})).concat(l!=null&&l.value?[]:t.value));function u(m){return n.value.has(m.id)}function o(m){const v=new Set(n.value);u(m)?v.delete(m.id):v.add(m.id),n.value=v}function s(m){function v(g){const S=[];for(const h of g.items)"type"in h&&h.type==="group"?S.push(...v(h)):S.push(h);return S}return v({type:"group",items:m,id:"dummy",key:"dummy",value:"dummy",depth:0})}const i={sortByWithGroups:r,toggleGroup:o,opened:n,groupBy:a,extractRows:s,isGroupOpen:u};return z(qe,i),i}function Ze(){const e=J(qe);if(!e)throw new Error("Missing group!");return e}function Qt(e,l){if(!e.length)return[];const a=new Map;for(const t of e){const n=ue(t.raw,l);a.has(n)||a.set(n,[]),a.get(n).push(t)}return a}function Xe(e,l){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!l.length)return[];const n=Qt(e,l[0]),r=[],u=l.slice(1);return n.forEach((o,s)=>{const i=l[0],m=`${t}_${i}_${s}`;r.push({depth:a,id:m,key:i,value:s,items:u.length?Xe(o,u,a+1,m):o,type:"group"})}),r}function Ye(e,l){const a=[];for(const t of e)"type"in t&&t.type==="group"?(t.value!=null&&a.push(t),(l.has(t.id)||t.value==null)&&a.push(...Ye(t.items,l))):a.push(t);return a}function et(e,l,a){return{flatItems:x(()=>{if(!l.value.length)return e.value;const n=Xe(e.value,l.value.map(r=>r.key));return Ye(n,a.value)})}}function tt(e){let{page:l,itemsPerPage:a,sortBy:t,groupBy:n,search:r}=e;const u=$e("VDataTable"),o=x(()=>({page:l.value,itemsPerPage:a.value,sortBy:t.value,groupBy:n.value,search:r.value}));let s=null;Me(o,()=>{Ne(s,o.value)||(s&&s.search!==o.value.search&&(l.value=1),u.emit("update:options",o.value),s=o.value)},{deep:!0,immediate:!0})}const at=F({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),lt=Symbol.for("vuetify:data-table-pagination");function nt(e){const l=Q(e,"page",void 0,t=>+(t??1)),a=Q(e,"itemsPerPage",void 0,t=>+(t??10));return{page:l,itemsPerPage:a}}function rt(e){const{page:l,itemsPerPage:a,itemsLength:t}=e,n=x(()=>a.value===-1?0:a.value*(l.value-1)),r=x(()=>a.value===-1?t.value:Math.min(t.value,n.value+a.value)),u=x(()=>a.value===-1||t.value===0?1:Math.ceil(t.value/a.value));xe(()=>{l.value>u.value&&(l.value=u.value)});function o(g){a.value=g,l.value=1}function s(){l.value=ye(l.value+1,1,u.value)}function i(){l.value=ye(l.value-1,1,u.value)}function m(g){l.value=ye(g,1,u.value)}const v={page:l,itemsPerPage:a,startIndex:n,stopIndex:r,pageCount:u,itemsLength:t,nextPage:s,prevPage:i,setPage:m,setItemsPerPage:o};return z(lt,v),v}function Jt(){const e=J(lt);if(!e)throw new Error("Missing pagination!");return e}function Zt(e){const l=$e("usePaginatedItems"),{items:a,startIndex:t,stopIndex:n,itemsPerPage:r}=e,u=x(()=>r.value<=0?a.value:a.value.slice(t.value,n.value));return Me(u,o=>{l.emit("update:currentItems",o)}),{paginatedItems:u}}const Xt={showSelectAll:!1,allSelected:()=>[],select:e=>{var t;let{items:l,value:a}=e;return new Set(a?[(t=l[0])==null?void 0:t.value]:[])},selectAll:e=>{let{selected:l}=e;return l}},ut={showSelectAll:!0,allSelected:e=>{let{currentPage:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,currentPage:a,selected:t}=e;return ut.select({items:a,value:l,selected:t})}},ot={showSelectAll:!0,allSelected:e=>{let{allItems:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,allItems:a,selected:t}=e;return ot.select({items:a,value:l,selected:t})}},Yt=F({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:Ne}},"DataTable-select"),st=Symbol.for("vuetify:data-table-selection");function dt(e,l){let{allItems:a,currentPage:t}=l;const n=Q(e,"modelValue",e.modelValue,b=>new Set(ee(b).map(c=>{var k;return((k=a.value.find(O=>e.valueComparator(c,O.value)))==null?void 0:k.value)??c})),b=>[...b.values()]),r=x(()=>a.value.filter(b=>b.selectable)),u=x(()=>t.value.filter(b=>b.selectable)),o=x(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return Xt;case"all":return ot;case"page":default:return ut}});function s(b){return ee(b).every(c=>n.value.has(c.value))}function i(b){return ee(b).some(c=>n.value.has(c.value))}function m(b,c){const k=o.value.select({items:b,value:c,selected:new Set(n.value)});n.value=k}function v(b){m([b],!s([b]))}function g(b){const c=o.value.selectAll({value:b,allItems:r.value,currentPage:u.value,selected:new Set(n.value)});n.value=c}const S=x(()=>n.value.size>0),h=x(()=>{const b=o.value.allSelected({allItems:r.value,currentPage:u.value});return!!b.length&&s(b)}),y=x(()=>o.value.showSelectAll),f={toggleSelect:v,select:m,selectAll:g,isSelected:s,isSomeSelected:i,someSelected:S,allSelected:h,showSelectAll:y};return z(st,f),f}function me(){const e=J(st);if(!e)throw new Error("Missing selection!");return e}const ea=F({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),it=Symbol.for("vuetify:data-table-sort");function ct(e){const l=Q(e,"sortBy"),a=I(e,"mustSort"),t=I(e,"multiSort");return{sortBy:l,mustSort:a,multiSort:t}}function ft(e){const{sortBy:l,mustSort:a,multiSort:t,page:n}=e,r=s=>{if(s.key==null)return;let i=l.value.map(v=>({...v}))??[];const m=i.find(v=>v.key===s.key);m?m.order==="desc"?a.value?m.order="asc":i=i.filter(v=>v.key!==s.key):m.order="desc":t.value?i=[...i,{key:s.key,order:"asc"}]:i=[{key:s.key,order:"asc"}],l.value=i,n&&(n.value=1)};function u(s){return!!l.value.find(i=>i.key===s.key)}const o={sortBy:l,toggleSort:r,isSorted:u};return z(it,o),o}function mt(){const e=J(it);if(!e)throw new Error("Missing sort!");return e}function ta(e,l,a,t){const n=fe();return{sortedItems:x(()=>{var u,o;return a.value.length?aa(l.value,a.value,n.current.value,{transform:t==null?void 0:t.transform,sortFunctions:{...e.customKeySort,...(u=t==null?void 0:t.sortFunctions)==null?void 0:u.value},sortRawFunctions:(o=t==null?void 0:t.sortRawFunctions)==null?void 0:o.value}):l.value})}}function aa(e,l,a,t){const n=new Intl.Collator(a,{sensitivity:"accent",usage:"sort"});return e.map(u=>[u,t!=null&&t.transform?t.transform(u):u]).sort((u,o)=>{var s,i;for(let m=0;m<l.length;m++){let v=!1;const g=l[m].key,S=l[m].order??"asc";if(S===!1)continue;let h=ue(u[1],g),y=ue(o[1],g),f=u[0].raw,b=o[0].raw;if(S==="desc"&&([h,y]=[y,h],[f,b]=[b,f]),(s=t==null?void 0:t.sortRawFunctions)!=null&&s[g]){const c=t.sortRawFunctions[g](f,b);if(c==null)continue;if(v=!0,c)return c}if((i=t==null?void 0:t.sortFunctions)!=null&&i[g]){const c=t.sortFunctions[g](h,y);if(c==null)continue;if(v=!0,c)return c}if(!v){if(h instanceof Date&&y instanceof Date)return h.getTime()-y.getTime();if([h,y]=[h,y].map(c=>c!=null?c.toString().toLocaleLowerCase():c),h!==y)return re(h)&&re(y)?0:re(h)?-1:re(y)?1:!isNaN(h)&&!isNaN(y)?Number(h)-Number(y):n.compare(h,y)}}return 0}).map(u=>{let[o]=u;return o})}const De=F({prevIcon:{type:q,default:"$prev"},nextIcon:{type:q,default:"$next"},firstIcon:{type:q,default:"$first"},lastIcon:{type:q,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),oe=G()({name:"VDataTableFooter",props:De(),setup(e,l){let{slots:a}=l;const{t}=fe(),{page:n,pageCount:r,startIndex:u,stopIndex:o,itemsLength:s,itemsPerPage:i,setItemsPerPage:m}=Jt(),v=x(()=>e.itemsPerPageOptions.map(g=>typeof g=="number"?{value:g,title:g===-1?t("$vuetify.dataFooter.itemsPerPageAll"):String(g)}:{...g,title:isNaN(Number(g.title))?t(g.title):g.title}));return U(()=>{var S;const g=Re.filterProps(e);return d("div",{class:"v-data-table-footer"},[(S=a.prepend)==null?void 0:S.call(a),d("div",{class:"v-data-table-footer__items-per-page"},[d("span",null,[t(e.itemsPerPageText)]),d(je,{items:v.value,modelValue:i.value,"onUpdate:modelValue":h=>m(Number(h)),density:"compact",variant:"outlined","hide-details":!0},null)]),d("div",{class:"v-data-table-footer__info"},[d("div",null,[t(e.pageText,s.value?u.value+1:0,o.value,s.value)])]),d("div",{class:"v-data-table-footer__pagination"},[d(Re,C({modelValue:n.value,"onUpdate:modelValue":h=>n.value=h,density:"comfortable","first-aria-label":e.firstPageLabel,"last-aria-label":e.lastPageLabel,length:r.value,"next-aria-label":e.nextPageLabel,"previous-aria-label":e.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":e.showCurrentPage?1:0,variant:"plain"},g),null)])])}),{}}}),se=Ft({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String],maxWidth:[Number,String],nowrap:Boolean},(e,l)=>{let{slots:a}=l;const t=e.tag??"td";return d(t,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding,"v-data-table-column--nowrap":e.nowrap},`v-data-table-column--align-${e.align}`],style:{height:$(e.height),width:$(e.width),maxWidth:$(e.maxWidth),left:$(e.fixedOffset||null)}},{default:()=>{var n;return[(n=a.default)==null?void 0:n.call(a)]}})}),la=F({headers:Array},"DataTable-header"),vt=Symbol.for("vuetify:data-table-headers"),gt={title:"",sortable:!1},na={...gt,width:48};function ra(){const l=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).map(a=>({element:a,priority:0}));return{enqueue:(a,t)=>{let n=!1;for(let r=0;r<l.length;r++)if(l[r].priority>t){l.splice(r,0,{element:a,priority:t}),n=!0;break}n||l.push({element:a,priority:t})},size:()=>l.length,count:()=>{let a=0;if(!l.length)return 0;const t=Math.floor(l[0].priority);for(let n=0;n<l.length;n++)Math.floor(l[n].priority)===t&&(a+=1);return a},dequeue:()=>l.shift()}}function Pe(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!e.children)l.push(e);else for(const a of e.children)Pe(a,l);return l}function ht(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;for(const a of e)a.key&&l.add(a.key),a.children&&ht(a.children,l);return l}function ua(e){if(e.key){if(e.key==="data-table-group")return gt;if(["data-table-expand","data-table-select"].includes(e.key))return na}}function Te(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e.children?Math.max(l,...e.children.map(a=>Te(a,l+1))):l}function oa(e){let l=!1;function a(r){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(r)if(u&&(r.fixed=!0),r.fixed)if(r.children)for(let o=r.children.length-1;o>=0;o--)a(r.children[o],!0);else l?isNaN(+r.width)&&Bt(`Multiple fixed columns should have a static width (key: ${r.key})`):r.lastFixed=!0,l=!0;else if(r.children)for(let o=r.children.length-1;o>=0;o--)a(r.children[o]);else l=!1}for(let r=e.length-1;r>=0;r--)a(e[r]);function t(r){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!r)return u;if(r.children){r.fixedOffset=u;for(const o of r.children)u=t(o,u)}else r.fixed&&(r.fixedOffset=u,u+=parseFloat(r.width||"0")||0);return u}let n=0;for(const r of e)n=t(r,n)}function sa(e,l){const a=[];let t=0;const n=ra(e);for(;n.size()>0;){let u=n.count();const o=[];let s=1;for(;u>0;){const{element:i,priority:m}=n.dequeue(),v=l-t-Te(i);if(o.push({...i,rowspan:v??1,colspan:i.children?Pe(i).length:1}),i.children)for(const g of i.children){const S=m%1+s/Math.pow(10,t+2);n.enqueue(g,t+v+S)}s+=1,u-=1}t+=1,a.push(o)}return{columns:e.map(u=>Pe(u)).flat(),headers:a}}function bt(e){const l=[];for(const a of e){const t={...ua(a),...a},n=t.key??(typeof t.value=="string"?t.value:null),r=t.value??n??null,u={...t,key:n,value:r,sortable:t.sortable??(t.key!=null||!!t.sort),children:t.children?bt(t.children):void 0};l.push(u)}return l}function yt(e,l){const a=H([]),t=H([]),n=H({}),r=H({}),u=H({});xe(()=>{var y,f,b;const i=(e.headers||Object.keys(e.items[0]??{}).map(c=>({key:c,title:Vt(c)}))).slice(),m=ht(i);(y=l==null?void 0:l.groupBy)!=null&&y.value.length&&!m.has("data-table-group")&&i.unshift({key:"data-table-group",title:"Group"}),(f=l==null?void 0:l.showSelect)!=null&&f.value&&!m.has("data-table-select")&&i.unshift({key:"data-table-select"}),(b=l==null?void 0:l.showExpand)!=null&&b.value&&!m.has("data-table-expand")&&i.push({key:"data-table-expand"});const v=bt(i);oa(v);const g=Math.max(...v.map(c=>Te(c)))+1,S=sa(v,g);a.value=S.headers,t.value=S.columns;const h=S.headers.flat(1);for(const c of h)c.key&&(c.sortable&&(c.sort&&(n.value[c.key]=c.sort),c.sortRaw&&(r.value[c.key]=c.sortRaw)),c.filter&&(u.value[c.key]=c.filter))});const o={headers:a,columns:t,sortFunctions:n,sortRawFunctions:r,filterFunctions:u};return z(vt,o),o}function ve(){const e=J(vt);if(!e)throw new Error("Missing headers!");return e}const St=F({color:String,sticky:Boolean,disableSort:Boolean,multiSort:Boolean,sortAscIcon:{type:q,default:"$sortAsc"},sortDescIcon:{type:q,default:"$sortDesc"},headerProps:{type:Object},...we(),..._t()},"VDataTableHeaders"),de=G()({name:"VDataTableHeaders",props:St(),setup(e,l){let{slots:a}=l;const{t}=fe(),{toggleSort:n,sortBy:r,isSorted:u}=mt(),{someSelected:o,allSelected:s,selectAll:i,showSelectAll:m}=me(),{columns:v,headers:g}=ve(),{loaderClasses:S}=Ct(e);function h(D,P){if(!(!e.sticky&&!D.fixed))return{position:"sticky",left:D.fixed?$(D.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${P})`:void 0}}function y(D){const P=r.value.find(V=>V.key===D.key);return P?P.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:f,backgroundColorStyles:b}=Ot(e,"color"),{displayClasses:c,mobile:k}=ke(e),O=x(()=>({headers:g.value,columns:v.value,toggleSort:n,isSorted:u,sortBy:r.value,someSelected:o.value,allSelected:s.value,selectAll:i,getSortIcon:y})),w=x(()=>["v-data-table__th",{"v-data-table__th--sticky":e.sticky},c.value,S.value]),M=D=>{let{column:P,x:V,y:p}=D;const B=P.key==="data-table-select"||P.key==="data-table-expand",A=C(e.headerProps??{},P.headerProps??{});return d(se,C({tag:"th",align:P.align,class:[{"v-data-table__th--sortable":P.sortable&&!e.disableSort,"v-data-table__th--sorted":u(P),"v-data-table__th--fixed":P.fixed},...w.value],style:{width:$(P.width),minWidth:$(P.minWidth),maxWidth:$(P.maxWidth),...h(P,p)},colspan:P.colspan,rowspan:P.rowspan,onClick:P.sortable?()=>n(P):void 0,fixed:P.fixed,nowrap:P.nowrap,lastFixed:P.lastFixed,noPadding:B},A),{default:()=>{var T;const R=`header.${P.key}`,K={column:P,selectAll:i,isSorted:u,toggleSort:n,sortBy:r.value,someSelected:o.value,allSelected:s.value,getSortIcon:y};return a[R]?a[R](K):P.key==="data-table-select"?((T=a["header.data-table-select"])==null?void 0:T.call(a,K))??(m.value&&d(pe,{modelValue:s.value,indeterminate:o.value&&!s.value,"onUpdate:modelValue":i},null)):d("div",{class:"v-data-table-header__content"},[d("span",null,[P.title]),P.sortable&&!e.disableSort&&d(Ce,{key:"icon",class:"v-data-table-header__sort-icon",icon:y(P)},null),e.multiSort&&u(P)&&d("div",{key:"badge",class:["v-data-table-header__sort-badge",...f.value],style:b.value},[r.value.findIndex(E=>E.key===P.key)+1])])}})},j=()=>{const D=C(e.headerProps??{}??{}),P=x(()=>v.value.filter(p=>(p==null?void 0:p.sortable)&&!e.disableSort)),V=x(()=>{if(v.value.find(B=>B.key==="data-table-select")!=null)return s.value?"$checkboxOn":o.value?"$checkboxIndeterminate":"$checkboxOff"});return d(se,C({tag:"th",class:[...w.value],colspan:g.value.length+1},D),{default:()=>[d("div",{class:"v-data-table-header__content"},[d(je,{chips:!0,class:"v-data-table__td-sort-select",clearable:!0,density:"default",items:P.value,label:t("$vuetify.dataTable.sortBy"),multiple:e.multiSort,variant:"underlined","onClick:clear":()=>r.value=[],appendIcon:V.value,"onClick:append":()=>i(!s.value)},{...a,chip:p=>{var B;return d(Gt,{onClick:(B=p.item.raw)!=null&&B.sortable?()=>n(p.item.raw):void 0,onMousedown:A=>{A.preventDefault(),A.stopPropagation()}},{default:()=>[p.item.title,d(Ce,{class:["v-data-table__td-sort-icon",u(p.item.raw)&&"v-data-table__td-sort-icon-active"],icon:y(p.item.raw),size:"small"},null)]})}})])]})};U(()=>k.value?d("tr",null,[d(j,null,null)]):d(L,null,[a.headers?a.headers(O.value):g.value.map((D,P)=>d("tr",null,[D.map((V,p)=>d(M,{column:V,x:p,y:P},null))])),e.loading&&d("tr",{class:"v-data-table-progress"},[d("th",{colspan:v.value.length},[d(At,{name:"v-data-table-progress",absolute:!0,active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:a.loader})])])]))}}),da=F({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),ia=G()({name:"VDataTableGroupHeaderRow",props:da(),setup(e,l){let{slots:a}=l;const{isGroupOpen:t,toggleGroup:n,extractRows:r}=Ze(),{isSelected:u,isSomeSelected:o,select:s}=me(),{columns:i}=ve(),m=x(()=>r([e.item]));return()=>d("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[i.value.map(v=>{var g,S;if(v.key==="data-table-group"){const h=t(e.item)?"$expand":"$next",y=()=>n(e.item);return((g=a["data-table-group"])==null?void 0:g.call(a,{item:e.item,count:m.value.length,props:{icon:h,onClick:y}}))??d(se,{class:"v-data-table-group-header-row__column"},{default:()=>[d(He,{size:"small",variant:"text",icon:h,onClick:y},null),d("span",null,[e.item.value]),d("span",null,[Oe("("),m.value.length,Oe(")")])]})}if(v.key==="data-table-select"){const h=u(m.value),y=o(m.value)&&!h,f=b=>s(m.value,b);return((S=a["data-table-select"])==null?void 0:S.call(a,{props:{modelValue:h,indeterminate:y,"onUpdate:modelValue":f}}))??d("td",null,[d(pe,{modelValue:h,indeterminate:y,"onUpdate:modelValue":f},null)])}return d("td",null,null)})])}}),ca=F({index:Number,item:Object,cellProps:[Object,Function],onClick:Se(),onContextmenu:Se(),onDblclick:Se(),...we()},"VDataTableRow"),fa=G()({name:"VDataTableRow",props:ca(),setup(e,l){let{slots:a}=l;const{displayClasses:t,mobile:n}=ke(e,"v-data-table__tr"),{isSelected:r,toggleSelect:u,someSelected:o,allSelected:s,selectAll:i}=me(),{isExpanded:m,toggleExpand:v}=Ue(),{toggleSort:g,sortBy:S,isSorted:h}=mt(),{columns:y}=ve();U(()=>d("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(e.onClick||e.onContextmenu||e.onDblclick)},t.value],onClick:e.onClick,onContextmenu:e.onContextmenu,onDblclick:e.onDblclick},[e.item&&y.value.map((f,b)=>{const c=e.item,k=`item.${f.key}`,O=`header.${f.key}`,w={index:e.index,item:c.raw,internalItem:c,value:ue(c.columns,f.key),column:f,isSelected:r,toggleSelect:u,isExpanded:m,toggleExpand:v},M={column:f,selectAll:i,isSorted:h,toggleSort:g,sortBy:S.value,someSelected:o.value,allSelected:s.value,getSortIcon:()=>""},j=typeof e.cellProps=="function"?e.cellProps({index:w.index,item:w.item,internalItem:w.internalItem,value:w.value,column:f}):e.cellProps,D=typeof f.cellProps=="function"?f.cellProps({index:w.index,item:w.item,internalItem:w.internalItem,value:w.value}):f.cellProps;return d(se,C({align:f.align,class:{"v-data-table__td--expanded-row":f.key==="data-table-expand","v-data-table__td--select-row":f.key==="data-table-select"},fixed:f.fixed,fixedOffset:f.fixedOffset,lastFixed:f.lastFixed,maxWidth:n.value?void 0:f.maxWidth,noPadding:f.key==="data-table-select"||f.key==="data-table-expand",nowrap:f.nowrap,width:n.value?void 0:f.width},j,D),{default:()=>{var V,p,B,A,R;if(a[k]&&!n.value)return(V=a[k])==null?void 0:V.call(a,w);if(f.key==="data-table-select")return((p=a["item.data-table-select"])==null?void 0:p.call(a,w))??d(pe,{disabled:!c.selectable,modelValue:r([c]),onClick:Ae(()=>u(c),["stop"])},null);if(f.key==="data-table-expand")return((B=a["item.data-table-expand"])==null?void 0:B.call(a,w))??d(He,{icon:m(c)?"$collapse":"$expand",size:"small",variant:"text",onClick:Ae(()=>v(c),["stop"])},null);const P=Rt(w.value);return n.value?d(L,null,[d("div",{class:"v-data-table__td-title"},[((A=a[O])==null?void 0:A.call(a,M))??f.title]),d("div",{class:"v-data-table__td-value"},[((R=a[k])==null?void 0:R.call(a,w))??P])]):P}})})]))}}),Pt=F({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function],...we()},"VDataTableRows"),ie=G()({name:"VDataTableRows",inheritAttrs:!1,props:Pt(),setup(e,l){let{attrs:a,slots:t}=l;const{columns:n}=ve(),{expandOnClick:r,toggleExpand:u,isExpanded:o}=Ue(),{isSelected:s,toggleSelect:i}=me(),{toggleGroup:m,isGroupOpen:v}=Ze(),{t:g}=fe(),{mobile:S}=ke(e);return U(()=>{var h,y;return e.loading&&(!e.items.length||t.loading)?d("tr",{class:"v-data-table-rows-loading",key:"loading"},[d("td",{colspan:n.value.length},[((h=t.loading)==null?void 0:h.call(t))??g(e.loadingText)])]):!e.loading&&!e.items.length&&!e.hideNoData?d("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[d("td",{colspan:n.value.length},[((y=t["no-data"])==null?void 0:y.call(t))??g(e.noDataText)])]):d(L,null,[e.items.map((f,b)=>{var O;if(f.type==="group"){const w={index:b,item:f,columns:n.value,isExpanded:o,toggleExpand:u,isSelected:s,toggleSelect:i,toggleGroup:m,isGroupOpen:v};return t["group-header"]?t["group-header"](w):d(ia,C({key:`group-header_${f.id}`,item:f},Ee(a,":group-header",()=>w)),t)}const c={index:b,item:f.raw,internalItem:f,columns:n.value,isExpanded:o,toggleExpand:u,isSelected:s,toggleSelect:i},k={...c,props:C({key:`item_${f.key??f.index}`,onClick:r.value?()=>{u(f)}:void 0,index:b,item:f,cellProps:e.cellProps,mobile:S.value},Ee(a,":row",()=>c),typeof e.rowProps=="function"?e.rowProps({item:c.item,index:c.index,internalItem:c.internalItem}):e.rowProps)};return d(L,{key:k.props.key},[t.item?t.item(k):d(fa,k.props,t),o(f)&&((O=t["expanded-row"])==null?void 0:O.call(t,c))])})])}),{}}}),xt=F({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...Et(),...$t(),...Mt(),...Nt()},"VTable"),ce=G()({name:"VTable",props:xt(),setup(e,l){let{slots:a,emit:t}=l;const{themeClasses:n}=Ht(e),{densityClasses:r}=Lt(e);return U(()=>d(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!a.top,"v-table--has-bottom":!!a.bottom,"v-table--hover":e.hover},n.value,r.value,e.class],style:e.style},{default:()=>{var u,o,s;return[(u=a.top)==null?void 0:u.call(a),a.default?d("div",{class:"v-table__wrapper",style:{height:$(e.height)}},[d("table",null,[a.default()])]):(o=a.wrapper)==null?void 0:o.call(a),(s=a.bottom)==null?void 0:s.call(a)]}})),{}}}),ma=F({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items");function va(e,l,a,t){const n=e.returnObject?l:Y(l,e.itemValue),r=Y(l,e.itemSelectable,!0),u=t.reduce((o,s)=>(s.key!=null&&(o[s.key]=Y(l,s.value)),o),{});return{type:"item",key:e.returnObject?Y(l,e.itemValue):n,index:a,value:n,selectable:r,columns:u,raw:l}}function ga(e,l,a){return l.map((t,n)=>va(e,t,n,a))}function wt(e,l){return{items:x(()=>ga(e,e.items,l.value))}}const kt=F({...Pt(),hideDefaultBody:Boolean,hideDefaultFooter:Boolean,hideDefaultHeader:Boolean,width:[String,Number],search:String,...Ut(),...qt(),...la(),...ma(),...Yt(),...ea(),...St(),...xt()},"DataTable"),ha=F({...at(),...kt(),...Kt(),...De()},"VDataTable");G()({name:"VDataTable",props:ha(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0,"update:currentItems":e=>!0},setup(e,l){let{attrs:a,slots:t}=l;const{groupBy:n}=Qe(e),{sortBy:r,multiSort:u,mustSort:o}=ct(e),{page:s,itemsPerPage:i}=nt(e),{disableSort:m}=Le(e),{columns:v,headers:g,sortFunctions:S,sortRawFunctions:h,filterFunctions:y}=yt(e,{groupBy:n,showSelect:I(e,"showSelect"),showExpand:I(e,"showExpand")}),{items:f}=wt(e,v),b=I(e,"search"),{filteredItems:c}=zt(e,f,b,{transform:N=>N.columns,customKeyFilter:y}),{toggleSort:k}=ft({sortBy:r,multiSort:u,mustSort:o,page:s}),{sortByWithGroups:O,opened:w,extractRows:M,isGroupOpen:j,toggleGroup:D}=Je({groupBy:n,sortBy:r,disableSort:m}),{sortedItems:P}=ta(e,c,O,{transform:N=>({...N.raw,...N.columns}),sortFunctions:S,sortRawFunctions:h}),{flatItems:V}=et(P,n,w),p=x(()=>V.value.length),{startIndex:B,stopIndex:A,pageCount:R,setItemsPerPage:K}=rt({page:s,itemsPerPage:i,itemsLength:p}),{paginatedItems:T}=Zt({items:V,startIndex:B,stopIndex:A,itemsPerPage:i}),E=x(()=>M(T.value)),{isSelected:ge,select:he,selectAll:be,toggleSelect:W,someSelected:te,allSelected:ae}=dt(e,{allItems:f,currentPage:E}),{isExpanded:le,toggleExpand:ne}=ze(e);tt({page:s,itemsPerPage:i,sortBy:r,groupBy:n,search:b}),Ge({VDataTableRows:{hideNoData:I(e,"hideNoData"),noDataText:I(e,"noDataText"),loading:I(e,"loading"),loadingText:I(e,"loadingText")}});const _=x(()=>({page:s.value,itemsPerPage:i.value,sortBy:r.value,pageCount:R.value,toggleSort:k,setItemsPerPage:K,someSelected:te.value,allSelected:ae.value,isSelected:ge,select:he,selectAll:be,toggleSelect:W,isExpanded:le,toggleExpand:ne,isGroupOpen:j,toggleGroup:D,items:E.value.map(N=>N.raw),internalItems:E.value,groupedItems:T.value,columns:v.value,headers:g.value}));return U(()=>{const N=oe.filterProps(e),pt=de.filterProps(e),Dt=ie.filterProps(e),Tt=ce.filterProps(e);return d(ce,C({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},Tt),{top:()=>{var Z;return(Z=t.top)==null?void 0:Z.call(t,_.value)},default:()=>{var Z,Ie,Fe,Ve,Be,_e;return t.default?t.default(_.value):d(L,null,[(Z=t.colgroup)==null?void 0:Z.call(t,_.value),!e.hideDefaultHeader&&d("thead",{key:"thead"},[d(de,pt,t)]),(Ie=t.thead)==null?void 0:Ie.call(t,_.value),!e.hideDefaultBody&&d("tbody",null,[(Fe=t["body.prepend"])==null?void 0:Fe.call(t,_.value),t.body?t.body(_.value):d(ie,C(a,Dt,{items:T.value}),t),(Ve=t["body.append"])==null?void 0:Ve.call(t,_.value)]),(Be=t.tbody)==null?void 0:Be.call(t,_.value),(_e=t.tfoot)==null?void 0:_e.call(t,_.value)])},bottom:()=>t.bottom?t.bottom(_.value):!e.hideDefaultFooter&&d(L,null,[d(Ke,null,null),d(oe,N,{prepend:t["footer.prepend"]})])})}),{}}});const ba=F({itemsLength:{type:[Number,String],required:!0},...at(),...kt(),...De()},"VDataTableServer"),wa=G()({name:"VDataTableServer",props:ba(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0,"update:groupBy":e=>!0},setup(e,l){let{attrs:a,slots:t}=l;const{groupBy:n}=Qe(e),{sortBy:r,multiSort:u,mustSort:o}=ct(e),{page:s,itemsPerPage:i}=nt(e),{disableSort:m}=Le(e),v=x(()=>parseInt(e.itemsLength,10)),{columns:g,headers:S}=yt(e,{groupBy:n,showSelect:I(e,"showSelect"),showExpand:I(e,"showExpand")}),{items:h}=wt(e,g),{toggleSort:y}=ft({sortBy:r,multiSort:u,mustSort:o,page:s}),{opened:f,isGroupOpen:b,toggleGroup:c,extractRows:k}=Je({groupBy:n,sortBy:r,disableSort:m}),{pageCount:O,setItemsPerPage:w}=rt({page:s,itemsPerPage:i,itemsLength:v}),{flatItems:M}=et(h,n,f),{isSelected:j,select:D,selectAll:P,toggleSelect:V,someSelected:p,allSelected:B}=dt(e,{allItems:h,currentPage:h}),{isExpanded:A,toggleExpand:R}=ze(e),K=x(()=>k(h.value));tt({page:s,itemsPerPage:i,sortBy:r,groupBy:n,search:I(e,"search")}),z("v-data-table",{toggleSort:y,sortBy:r}),Ge({VDataTableRows:{hideNoData:I(e,"hideNoData"),noDataText:I(e,"noDataText"),loading:I(e,"loading"),loadingText:I(e,"loadingText")}});const T=x(()=>({page:s.value,itemsPerPage:i.value,sortBy:r.value,pageCount:O.value,toggleSort:y,setItemsPerPage:w,someSelected:p.value,allSelected:B.value,isSelected:j,select:D,selectAll:P,toggleSelect:V,isExpanded:A,toggleExpand:R,isGroupOpen:b,toggleGroup:c,items:K.value.map(E=>E.raw),internalItems:K.value,groupedItems:M.value,columns:g.value,headers:S.value}));U(()=>{const E=oe.filterProps(e),ge=de.filterProps(e),he=ie.filterProps(e),be=ce.filterProps(e);return d(ce,C({class:["v-data-table",{"v-data-table--loading":e.loading},e.class],style:e.style},be),{top:()=>{var W;return(W=t.top)==null?void 0:W.call(t,T.value)},default:()=>{var W,te,ae,le,ne,_;return t.default?t.default(T.value):d(L,null,[(W=t.colgroup)==null?void 0:W.call(t,T.value),!e.hideDefaultHeader&&d("thead",{key:"thead",class:"v-data-table__thead",role:"rowgroup"},[d(de,C(ge,{sticky:e.fixedHeader}),t)]),(te=t.thead)==null?void 0:te.call(t,T.value),!e.hideDefaultBody&&d("tbody",{class:"v-data-table__tbody",role:"rowgroup"},[(ae=t["body.prepend"])==null?void 0:ae.call(t,T.value),t.body?t.body(T.value):d(ie,C(a,he,{items:M.value}),t),(le=t["body.append"])==null?void 0:le.call(t,T.value)]),(ne=t.tbody)==null?void 0:ne.call(t,T.value),(_=t.tfoot)==null?void 0:_.call(t,T.value)])},bottom:()=>t.bottom?t.bottom(T.value):!e.hideDefaultFooter&&d(L,null,[d(Ke,null,null),d(oe,E,{prepend:t["footer.prepend"]})])})})}});export{wa as V};
