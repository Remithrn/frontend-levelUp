import{g as pe,m as ge,r as N,M as me,h as be,k as fe,l as xe,n as re,o as he,j as o,p as I,c as ye,G as ve,L as we,R as oe,b as ke,a as je}from"./index-BrrnQTzj.js";function O(e){const t=pe(()=>ge(e)),{isStatic:r}=N.useContext(me);if(r){const[,n]=N.useState(e);N.useEffect(()=>t.on("change",n),[])}return t}function Ce(e,t){const r=O(t()),n=()=>r.set(t());return n(),be(()=>{const i=()=>xe.preRender(n,!1,!0),s=e.map(a=>a.on("change",i));return()=>{s.forEach(a=>a()),fe(n)}}),r}function ne(e,...t){const r=e.length;function n(){let i="";for(let s=0;s<r;s++){i+=e[s];const a=t[s];a&&(i+=re(a)?a.get():a)}return i}return Ce(t.filter(re),n)}const J="-",Ne=e=>{const t=Me(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=e;return{getClassGroupId:a=>{const l=a.split(J);return l[0]===""&&l.length!==1&&l.shift(),ie(l,t)||ze(a)},getConflictingClassGroupIds:(a,l)=>{const d=r[a]||[];return l&&n[a]?[...d,...n[a]]:d}}},ie=(e,t)=>{var a;if(e.length===0)return t.classGroupId;const r=e[0],n=t.nextPart.get(r),i=n?ie(e.slice(1),n):void 0;if(i)return i;if(t.validators.length===0)return;const s=e.join(J);return(a=t.validators.find(({validator:l})=>l(s)))==null?void 0:a.classGroupId},se=/^\[(.+)\]$/,ze=e=>{if(se.test(e)){const t=se.exec(e)[1],r=t==null?void 0:t.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},Me=e=>{const{theme:t,prefix:r}=e,n={nextPart:new Map,validators:[]};return _e(Object.entries(e.classGroups),r).forEach(([s,a])=>{Y(a,n,s,t)}),n},Y=(e,t,r,n)=>{e.forEach(i=>{if(typeof i=="string"){const s=i===""?t:ae(t,i);s.classGroupId=r;return}if(typeof i=="function"){if(Se(i)){Y(i(n),t,r,n);return}t.validators.push({validator:i,classGroupId:r});return}Object.entries(i).forEach(([s,a])=>{Y(a,ae(t,s),r,n)})})},ae=(e,t)=>{let r=e;return t.split(J).forEach(n=>{r.nextPart.has(n)||r.nextPart.set(n,{nextPart:new Map,validators:[]}),r=r.nextPart.get(n)}),r},Se=e=>e.isThemeGetter,_e=(e,t)=>t?e.map(([r,n])=>{const i=n.map(s=>typeof s=="string"?t+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([a,l])=>[t+a,l])):s);return[r,i]}):e,Ie=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,n=new Map;const i=(s,a)=>{r.set(s,a),t++,t>e&&(t=0,n=r,r=new Map)};return{get(s){let a=r.get(s);if(a!==void 0)return a;if((a=n.get(s))!==void 0)return i(s,a),a},set(s,a){r.has(s)?r.set(s,a):i(s,a)}}},le="!",Ae=e=>{const{separator:t,experimentalParseClassName:r}=e,n=t.length===1,i=t[0],s=t.length,a=l=>{const d=[];let g=0,m=0,x;for(let b=0;b<l.length;b++){let y=l[b];if(g===0){if(y===i&&(n||l.slice(b,b+s)===t)){d.push(l.slice(m,b)),m=b+s;continue}if(y==="/"){x=b;continue}}y==="["?g++:y==="]"&&g--}const f=d.length===0?l:l.substring(m),v=f.startsWith(le),w=v?f.substring(1):f,h=x&&x>m?x-m:void 0;return{modifiers:d,hasImportantModifier:v,baseClassName:w,maybePostfixModifierPosition:h}};return r?l=>r({className:l,parseClassName:a}):a},Re=e=>{if(e.length<=1)return e;const t=[];let r=[];return e.forEach(n=>{n[0]==="["?(t.push(...r.sort(),n),r=[]):r.push(n)}),t.push(...r.sort()),t},Pe=e=>({cache:Ie(e.cacheSize),parseClassName:Ae(e),...Ne(e)}),Ee=/\s+/,Ge=(e,t)=>{const{parseClassName:r,getClassGroupId:n,getConflictingClassGroupIds:i}=t,s=[],a=e.trim().split(Ee);let l="";for(let d=a.length-1;d>=0;d-=1){const g=a[d],{modifiers:m,hasImportantModifier:x,baseClassName:f,maybePostfixModifierPosition:v}=r(g);let w=!!v,h=n(w?f.substring(0,v):f);if(!h){if(!w){l=g+(l.length>0?" "+l:l);continue}if(h=n(f),!h){l=g+(l.length>0?" "+l:l);continue}w=!1}const b=Re(m).join(":"),y=x?b+le:b,k=y+h;if(s.includes(k))continue;s.push(k);const P=i(h,w);for(let _=0;_<P.length;++_){const T=P[_];s.push(y+T)}l=g+(l.length>0?" "+l:l)}return l};function Le(){let e=0,t,r,n="";for(;e<arguments.length;)(t=arguments[e++])&&(r=ce(t))&&(n&&(n+=" "),n+=r);return n}const ce=e=>{if(typeof e=="string")return e;let t,r="";for(let n=0;n<e.length;n++)e[n]&&(t=ce(e[n]))&&(r&&(r+=" "),r+=t);return r};function Te(e,...t){let r,n,i,s=a;function a(d){const g=t.reduce((m,x)=>x(m),e());return r=Pe(g),n=r.cache.get,i=r.cache.set,s=l,l(d)}function l(d){const g=n(d);if(g)return g;const m=Ge(d,r);return i(d,m),m}return function(){return s(Le.apply(null,arguments))}}const u=e=>{const t=r=>r[e]||[];return t.isThemeGetter=!0,t},de=/^\[(?:([a-z-]+):)?(.+)\]$/i,Fe=/^\d+\/\d+$/,Be=new Set(["px","full","screen"]),$e=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ve=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,We=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Ue=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,qe=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,C=e=>A(e)||Be.has(e)||Fe.test(e),M=e=>R(e,"length",Ze),A=e=>!!e&&!Number.isNaN(Number(e)),q=e=>R(e,"number",A),G=e=>!!e&&Number.isInteger(Number(e)),He=e=>e.endsWith("%")&&A(e.slice(0,-1)),c=e=>de.test(e),S=e=>$e.test(e),Oe=new Set(["length","size","percentage"]),Ye=e=>R(e,Oe,ue),Je=e=>R(e,"position",ue),Xe=new Set(["image","url"]),Ke=e=>R(e,Xe,et),Qe=e=>R(e,"",De),L=()=>!0,R=(e,t,r)=>{const n=de.exec(e);return n?n[1]?typeof t=="string"?n[1]===t:t.has(n[1]):r(n[2]):!1},Ze=e=>Ve.test(e)&&!We.test(e),ue=()=>!1,De=e=>Ue.test(e),et=e=>qe.test(e),tt=()=>{const e=u("colors"),t=u("spacing"),r=u("blur"),n=u("brightness"),i=u("borderColor"),s=u("borderRadius"),a=u("borderSpacing"),l=u("borderWidth"),d=u("contrast"),g=u("grayscale"),m=u("hueRotate"),x=u("invert"),f=u("gap"),v=u("gradientColorStops"),w=u("gradientColorStopPositions"),h=u("inset"),b=u("margin"),y=u("opacity"),k=u("padding"),P=u("saturate"),_=u("scale"),T=u("sepia"),X=u("skew"),K=u("space"),Q=u("translate"),$=()=>["auto","contain","none"],V=()=>["auto","hidden","clip","visible","scroll"],W=()=>["auto",c,t],p=()=>[c,t],Z=()=>["",C,M],F=()=>["auto",A,c],D=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],B=()=>["solid","dashed","dotted","double","none"],ee=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],U=()=>["start","end","center","between","around","evenly","stretch"],E=()=>["","0",c],te=()=>["auto","avoid","all","avoid-page","page","left","right","column"],j=()=>[A,c];return{cacheSize:500,separator:":",theme:{colors:[L],spacing:[C,M],blur:["none","",S,c],brightness:j(),borderColor:[e],borderRadius:["none","","full",S,c],borderSpacing:p(),borderWidth:Z(),contrast:j(),grayscale:E(),hueRotate:j(),invert:E(),gap:p(),gradientColorStops:[e],gradientColorStopPositions:[He,M],inset:W(),margin:W(),opacity:j(),padding:p(),saturate:j(),scale:j(),sepia:E(),skew:j(),space:p(),translate:p()},classGroups:{aspect:[{aspect:["auto","square","video",c]}],container:["container"],columns:[{columns:[S]}],"break-after":[{"break-after":te()}],"break-before":[{"break-before":te()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...D(),c]}],overflow:[{overflow:V()}],"overflow-x":[{"overflow-x":V()}],"overflow-y":[{"overflow-y":V()}],overscroll:[{overscroll:$()}],"overscroll-x":[{"overscroll-x":$()}],"overscroll-y":[{"overscroll-y":$()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[h]}],"inset-x":[{"inset-x":[h]}],"inset-y":[{"inset-y":[h]}],start:[{start:[h]}],end:[{end:[h]}],top:[{top:[h]}],right:[{right:[h]}],bottom:[{bottom:[h]}],left:[{left:[h]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",G,c]}],basis:[{basis:W()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",c]}],grow:[{grow:E()}],shrink:[{shrink:E()}],order:[{order:["first","last","none",G,c]}],"grid-cols":[{"grid-cols":[L]}],"col-start-end":[{col:["auto",{span:["full",G,c]},c]}],"col-start":[{"col-start":F()}],"col-end":[{"col-end":F()}],"grid-rows":[{"grid-rows":[L]}],"row-start-end":[{row:["auto",{span:[G,c]},c]}],"row-start":[{"row-start":F()}],"row-end":[{"row-end":F()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",c]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",c]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...U()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...U(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...U(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[k]}],px:[{px:[k]}],py:[{py:[k]}],ps:[{ps:[k]}],pe:[{pe:[k]}],pt:[{pt:[k]}],pr:[{pr:[k]}],pb:[{pb:[k]}],pl:[{pl:[k]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[K]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[K]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",c,t]}],"min-w":[{"min-w":[c,t,"min","max","fit"]}],"max-w":[{"max-w":[c,t,"none","full","min","max","fit","prose",{screen:[S]},S]}],h:[{h:[c,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[c,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[c,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[c,t,"auto","min","max","fit"]}],"font-size":[{text:["base",S,M]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",q]}],"font-family":[{font:[L]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",c]}],"line-clamp":[{"line-clamp":["none",A,q]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",C,c]}],"list-image":[{"list-image":["none",c]}],"list-style-type":[{list:["none","disc","decimal",c]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[y]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[y]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...B(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",C,M]}],"underline-offset":[{"underline-offset":["auto",C,c]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:p()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",c]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",c]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[y]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...D(),Je]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Ye]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Ke]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[v]}],"gradient-via":[{via:[v]}],"gradient-to":[{to:[v]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[y]}],"border-style":[{border:[...B(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[y]}],"divide-style":[{divide:B()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...B()]}],"outline-offset":[{"outline-offset":[C,c]}],"outline-w":[{outline:[C,M]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:Z()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[y]}],"ring-offset-w":[{"ring-offset":[C,M]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",S,Qe]}],"shadow-color":[{shadow:[L]}],opacity:[{opacity:[y]}],"mix-blend":[{"mix-blend":[...ee(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ee()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[n]}],contrast:[{contrast:[d]}],"drop-shadow":[{"drop-shadow":["","none",S,c]}],grayscale:[{grayscale:[g]}],"hue-rotate":[{"hue-rotate":[m]}],invert:[{invert:[x]}],saturate:[{saturate:[P]}],sepia:[{sepia:[T]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[d]}],"backdrop-grayscale":[{"backdrop-grayscale":[g]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[m]}],"backdrop-invert":[{"backdrop-invert":[x]}],"backdrop-opacity":[{"backdrop-opacity":[y]}],"backdrop-saturate":[{"backdrop-saturate":[P]}],"backdrop-sepia":[{"backdrop-sepia":[T]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",c]}],duration:[{duration:j()}],ease:[{ease:["linear","in","out","in-out",c]}],delay:[{delay:j()}],animate:[{animate:["none","spin","ping","pulse","bounce",c]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[_]}],"scale-x":[{"scale-x":[_]}],"scale-y":[{"scale-y":[_]}],rotate:[{rotate:[G,c]}],"translate-x":[{"translate-x":[Q]}],"translate-y":[{"translate-y":[Q]}],"skew-x":[{"skew-x":[X]}],"skew-y":[{"skew-y":[X]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",c]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",c]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":p()}],"scroll-mx":[{"scroll-mx":p()}],"scroll-my":[{"scroll-my":p()}],"scroll-ms":[{"scroll-ms":p()}],"scroll-me":[{"scroll-me":p()}],"scroll-mt":[{"scroll-mt":p()}],"scroll-mr":[{"scroll-mr":p()}],"scroll-mb":[{"scroll-mb":p()}],"scroll-ml":[{"scroll-ml":p()}],"scroll-p":[{"scroll-p":p()}],"scroll-px":[{"scroll-px":p()}],"scroll-py":[{"scroll-py":p()}],"scroll-ps":[{"scroll-ps":p()}],"scroll-pe":[{"scroll-pe":p()}],"scroll-pt":[{"scroll-pt":p()}],"scroll-pr":[{"scroll-pr":p()}],"scroll-pb":[{"scroll-pb":p()}],"scroll-pl":[{"scroll-pl":p()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",c]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[C,M,q]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},rt=Te(tt);function z(...e){return rt(he(e))}const ot=({children:e,className:t,containerClassName:r})=>{let n=O(0),i=O(0);function s({currentTarget:a,clientX:l,clientY:d}){if(!a)return;let{left:g,top:m}=a.getBoundingClientRect();n.set(l-g),i.set(d-m)}return o.jsxs("div",{className:z("relative h-[40rem] flex items-center justify-center w-full group",r),onMouseMove:s,children:[o.jsx("div",{className:"absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800  pointer-events-none"}),o.jsx(I.div,{className:"pointer-events-none bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500   absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100",style:{WebkitMaskImage:ne`
            radial-gradient(
              200px circle at ${n}px ${i}px,
              black 0%,
              transparent 100%
            )
          `,maskImage:ne`
            radial-gradient(
              200px circle at ${n}px ${i}px,
              black 0%,
              transparent 100%
            )
          `}}),o.jsx("div",{className:z("relative z-20",t),children:e})]})},nt=({children:e,className:t})=>o.jsx(I.span,{initial:{backgroundSize:"0% 100%"},animate:{backgroundSize:"100% 100%"},transition:{duration:2,ease:"linear",delay:.5},style:{backgroundRepeat:"no-repeat",backgroundPosition:"left center",display:"inline"},className:z("relative inline-block pb-1   px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500",t),children:e});function st(){return o.jsxs(ot,{children:[o.jsxs(I.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:[20,-5,0]},transition:{duration:.5,ease:[.4,0,.2,1]},className:"text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto",children:["Connect, Learn, and Innovate with",o.jsx(nt,{children:"AI-Powered Insights"})]}),o.jsx(I.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:[20,-5,0]},transition:{duration:.5,ease:[.4,0,.2,1]},className:"flex justify-center mt-10",children:o.jsx(ye,{as:"a",href:"/signup",color:"primary",size:"xl",className:"text-lg px-8 py-4",children:"Sign Up Now"})})]})}const H=({children:e,containerClassName:t,className:r})=>{const[n,i]=N.useState({x:0,y:0}),[s,a]=N.useState(!1),l=d=>{const{clientX:g,clientY:m}=d,x=d.currentTarget.getBoundingClientRect(),f=(g-(x.left+x.width/2))/20,v=(m-(x.top+x.height/2))/20;i({x:f,y:v})};return o.jsx(I.section,{onMouseMove:l,onMouseEnter:()=>a(!0),onMouseLeave:()=>{a(!1),i({x:0,y:0})},style:{transform:s?`translate3d(${n.x}px, ${n.y}px, 0) scale3d(1, 1, 1)`:"translate3d(0px, 0px, 0) scale3d(1, 1, 1)",transition:"transform 0.1s ease-out"},className:z("mx-auto w-full bg-indigo-800  relative rounded-2xl overflow-hidden",t),children:o.jsx("div",{className:"relative  h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))]  sm:mx-0 sm:rounded-2xl overflow-hidden",style:{boxShadow:"0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)"},children:o.jsxs(I.div,{style:{transform:s?`translate3d(${-n.x}px, ${-n.y}px, 0) scale3d(1.03, 1.03, 1)`:"translate3d(0px, 0px, 0) scale3d(1, 1, 1)",transition:"transform 0.1s ease-out"},className:z("h-full px-4 py-20 sm:px-10",r),children:[o.jsx(at,{}),e]})})})},at=()=>o.jsx("div",{className:"absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]",style:{backgroundImage:"url(/noise.webp)",backgroundSize:"30%"}});function it(){return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"text-3xl md:text-7xl font-bold dark:text-white text-center mb-2",children:"Features"}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full",children:[o.jsxs(H,{containerClassName:"col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]",className:"",children:[o.jsxs("div",{className:"max-w-xs",children:[o.jsx("h2",{className:"text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white",children:"Connect with Friends:"}),o.jsx("p",{className:"mt-4 text-left  text-base/6 text-neutral-200",children:"Chat, share ideas, and collaborate on topics that matter to you. Engage in group discussions, share insights, and learn from peers."})]}),o.jsx("img",{src:"/linear.webp",width:500,height:500,alt:"linear demo image",className:"absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"})]}),o.jsxs(H,{containerClassName:"col-span-1 min-h-[300px]",children:[o.jsx("h2",{className:"max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white",children:"AI-Powered Mock Interviews:"}),o.jsx("p",{className:"mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200",children:"Get personalized interview practice and feedback to land your dream job."})]}),o.jsxs(H,{containerClassName:"col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]",children:[o.jsxs("div",{className:"max-w-sm",children:[o.jsx("h2",{className:"max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white",children:"Daily Quizzes & Coding Reminders:"}),o.jsx("p",{className:"mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200",children:"Stay sharp with daily ai quizzes and get reminders for LeetCode challenges."})]}),o.jsx("img",{src:"/linear.webp",width:500,height:500,alt:"linear demo image",className:"absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"})]})]})]})}const lt=({className:e,children:t,showRadialGradient:r=!0,...n})=>o.jsx("main",{children:o.jsxs("div",{className:z("relative flex flex-col  h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900  text-slate-950 transition-bg",e),...n,children:[o.jsx("div",{className:"absolute inset-0 overflow-hidden",children:o.jsx("div",{className:z(`
          [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
          [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
          [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
          [background-image:var(--white-gradient),var(--aurora)]
          dark:[background-image:var(--dark-gradient),var(--aurora)]
          [background-size:300%,_200%]
          [background-position:50%_50%,50%_50%]
          filter blur-[10px] invert dark:invert-0
          after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
          after:dark:[background-image:var(--dark-gradient),var(--aurora)]
          after:[background-size:200%,_100%] 
          after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
          pointer-events-none
          absolute -inset-[10px] opacity-50 will-change-transform`,r&&"[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]")})}),t]})});function ct(){return o.jsx(lt,{children:o.jsx(I.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{delay:.3,duration:.8,ease:"easeInOut"},className:"relative flex flex-col gap-4 items-center justify-center px-4",children:o.jsx("div",{className:"text-3xl md:text-7xl font-bold dark:text-white text-center",children:o.jsx(st,{})})})})}function dt(e){return ve({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"},child:[]}]})(e)}const ut=({title:e,icon:t,position:r,handleClick:n,otherClasses:i})=>o.jsxs("button",{className:"relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none",onClick:n,children:[o.jsx("span",{className:"absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"}),o.jsxs("span",{className:`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${i}`,children:[r==="left"&&t,e,r==="right"&&t]})]}),pt=()=>{const e=[{id:1,img:"/git.svg"},{id:2,img:"/twit.svg"},{id:3,img:"/link.svg"}];return o.jsxs("footer",{className:"w-full pt-20 pb-10",id:"contact",children:[o.jsx("div",{className:"w-full absolute left-0 -bottom-72 min-h-96",children:o.jsx("img",{src:"/footer-grid.svg",alt:"grid",className:"w-full h-full opacity-50 "})}),o.jsxs("div",{className:"flex flex-col items-center",children:[o.jsxs("h1",{className:"heading lg:max-w-[45vw]",children:[o.jsx("span",{className:"text-purple",children:" Your Insights Matter:"})," Help Us Improve with Your Feedback!"]}),o.jsx("p",{className:"text-white-200 md:mt-10 my-5 text-center",children:"Reach out to me today and let's discuss how I can help you achieve your goals."}),o.jsx("a",{href:"#",children:o.jsx(ut,{title:"Let's get in touch",icon:o.jsx(dt,{}),position:"right"})})]}),o.jsxs("div",{className:"flex mt-16 md:flex-row flex-col justify-between items-center",children:[o.jsx("p",{className:"md:text-base text-sm md:font-normal font-light",children:o.jsx(we,{to:"/admin/login",children:"Copyright © 2024 Level Up"})}),o.jsx("div",{className:"flex items-center md:gap-3 gap-6",children:e.map(t=>o.jsx("div",{className:"w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300",children:o.jsx("img",{src:t.img,alt:"icons",width:20,height:20})},t.id))})]})]})},gt=({items:e,direction:t="left",speed:r="fast",pauseOnHover:n=!0,className:i})=>{const s=oe.useRef(null),a=oe.useRef(null);N.useEffect(()=>{g()},[]);const[l,d]=N.useState(!1);function g(){s.current&&a.current&&(Array.from(a.current.children).forEach(v=>{const w=v.cloneNode(!0);a.current&&a.current.appendChild(w)}),m(),x(),d(!0))}const m=()=>{s.current&&(t==="left"?s.current.style.setProperty("--animation-direction","forwards"):s.current.style.setProperty("--animation-direction","reverse"))},x=()=>{s.current&&(r==="fast"?s.current.style.setProperty("--animation-duration","20s"):r==="normal"?s.current.style.setProperty("--animation-duration","40s"):s.current.style.setProperty("--animation-duration","80s"))};return o.jsx("div",{ref:s,className:z("scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",i),children:o.jsx("ul",{ref:a,className:z(" flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",l&&"animate-scroll ",n&&"hover:[animation-play-state:paused]"),children:e.map((f,v)=>o.jsx("li",{className:"w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]",style:{background:"linear-gradient(180deg, var(--slate-800), var(--slate-900)"},children:o.jsxs("blockquote",{children:[o.jsx("div",{"aria-hidden":"true",className:"user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"}),o.jsx("span",{className:" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal",children:f.quote}),o.jsx("div",{className:"relative z-20 mt-6 flex flex-row items-center",children:o.jsxs("span",{className:"flex flex-col gap-1",children:[o.jsx("span",{className:" text-sm leading-[1.6] text-gray-400 font-normal",children:f.name}),o.jsx("span",{className:" text-sm leading-[1.6] text-gray-400 font-normal",children:f.title})]})})]})},f.name))})})};function mt(){return o.jsxs("div",{className:"h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden",children:[o.jsx("div",{className:"text-3xl md:text-7xl font-bold dark:text-white text-center mb-2",children:"Testimonials"}),o.jsx(gt,{items:bt,direction:"right",speed:"slow"})]})}const bt=[{quote:"Level Up has transformed the way I approach my studies. The AI mock interviews are a game changer!",name:"Alex Johnson",title:"Student"},{quote:"The streaks feature keeps me motivated. It's exactly what I needed to stay on track with my learning goals.",name:"Jordan Lee",title:"Professional Developer"},{quote:"I love the social aspects of Level Up. Being able to connect with other learners has been a huge boost.",name:"Sam Taylor",title:"Engineering Student"},{quote:"The daily quizzes and LeetCode reminders are incredibly helpful for maintaining a regular study routine.",name:"Morgan Kim",title:"Software Engineer"},{quote:"Level Up's user-friendly interface and effective learning tools have made studying more enjoyable.",name:"Riley Martinez",title:"Computer Science Major"}],xt=()=>{const{isAuthenticated:e}=ke(i=>i.auth),t=je(),[r,n]=N.useState(!0);return N.useEffect(()=>{e?t("/"):n(!1)},[e,t]),r?o.jsx("div",{children:"Loading..."}):o.jsxs(o.Fragment,{children:[o.jsx(ct,{}),o.jsx(it,{}),o.jsx(mt,{}),o.jsx(pt,{})]})};export{xt as default};
