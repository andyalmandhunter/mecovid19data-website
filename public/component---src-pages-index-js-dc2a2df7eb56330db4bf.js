(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+VNo":function(e,n){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"0rpx":function(e,n,l){"use strict";var t=l("4v99");e.exports=function(e,n){return t(e,n.toLowerCase())}},"1nHS":function(e,n,l){"use strict";e.exports=r;var t=r.prototype;function r(e,n,l){this.property=e,this.normal=n,l&&(this.space=l)}t.space=null,t.normal={},t.property={}},"2dtT":function(e,n,l){"use strict";var t=l("Cjod"),r=l("RdQs");e.exports=function(e){var n=e||{},l=n.createElement,a=n.Fragment,i=n.components||{};function u(e,n,t){var r=o.call(i,e)?i[e]:e;return l(r,n,t)}this.Compiler=function(e){var o=t(u,r(e),n.prefix);return"root"===e.type?(o="div"!==o.type||1===e.children.length&&"element"===e.children[0].type?[o]:o.props.children,l(a||"div",{},o)):o}};var o={}.hasOwnProperty},"2qIq":function(e,n,l){"use strict";var t=l("h5Sy"),r=l("N8K4"),o=l("LyDg"),a=l("Wb05"),i=l("I7gA"),u=l("sU6V");e.exports=t([o,r,a,i,u])},"4v99":function(e,n,l){"use strict";e.exports=function(e,n){return n in e?e[n]:n}},"6B/p":function(e,n,l){"use strict";l("sC2a");var t=l("i/jK"),r=l("RH6O"),o=l("JjqA");e.exports=function(e,n){var l=t(n),p=n,d=o;if(l in e.normal)return e.property[e.normal[l]];l.length>4&&"data"===l.slice(0,4)&&a.test(n)&&("-"===n.charAt(4)?p=function(e){var n=e.slice(5).replace(i,c);return"data"+n.charAt(0).toUpperCase()+n.slice(1)}(n):n=function(e){var n=e.slice(4);if(i.test(n))return e;"-"!==(n=n.replace(u,s)).charAt(0)&&(n="-"+n);return"data"+n}(n),d=r);return new d(p,n)};var a=/^data[-a-z0-9.:_]+$/i,i=/-[a-z]/g,u=/[A-Z]/g;function s(e){return"-"+e.toLowerCase()}function c(e){return e.charAt(1).toUpperCase()}},"9phv":function(e,n,l){"use strict";l("sc67");var t=l("i/jK"),r=l("1nHS"),o=l("RH6O");e.exports=function(e){var n,l,a=e.space,i=e.mustUseProperty||[],u=e.attributes||{},s=e.properties,c=e.transform,p={},d={};for(n in s)l=new o(n,c(u,n),s[n],a),-1!==i.indexOf(n)&&(l.mustUseProperty=!0),p[n]=l,d[t(n)]=n,d[t(l.attribute)]=n;return new r(p,d,a)}},CC3I:function(e,n,l){var t=l("Lc7W");e.exports=function(e,n){var l,r=null;if(!e||"string"!=typeof e)return r;for(var o,a,i=t(e),u="function"==typeof n,s=0,c=i.length;s<c;s++)o=(l=i[s]).property,a=l.value,u?n(o,a,l):a&&(r||(r={}),r[o]=a);return r}},Cjod:function(e,n,l){"use strict";l("sC2a");var t=l("ZQof"),r=l("2qIq"),o=l("6B/p"),a=l("W+Vs"),i=l("TTG4"),u=l("vfP8"),s=l("CC3I"),c=l("qrWY"),p=l("Zasy"),d=p("root"),h=p("element"),f=p("text"),g=/-([a-z])/g;function m(e,n,l,t){var r,s=t.hyperscript||t.vdom||t.vue,c=t.schema,p=o(c,n);null==l||l!=l||s&&!1===l||s&&p.boolean&&!l||(null!==l&&"object"==typeof l&&"length"in l&&(l=(p.commaSeparated?u:i).stringify(l)),p.boolean&&!0===t.hyperscript&&(l=""),t.vue?"style"!==n&&(r="attrs"):p.mustUseProperty||(!0===t.vdom?r="attributes":!0===t.hyperscript&&(r="attrs")),r?(void 0===e[r]&&(e[r]={}),e[r][p.attribute]=l):t.react&&p.space?e[a[p.property]||p.property]=l:e[p.attribute]=l)}function v(e){return Boolean(e&&e.context&&e.cleanup)}function y(e,n){return n.toUpperCase()}e.exports=function(e,n,l){var o,a,i,u,p=l||{};if("function"!=typeof e)throw new Error("h is not a function");"string"==typeof p||"boolean"==typeof p?(o=p,p={}):o=p.prefix;a=function(e){var n=e&&e("div");return Boolean(n&&("_owner"in n||"_store"in n)&&null===n.key)}(e),i=function(e){var n=e&&e("div");return Boolean(n&&n.context&&n.context._isVue)}(e),u=function(e){return e&&"VirtualNode"===e("div").type}(e),null==o&&(o=(!0===a||!0===i||!0===u)&&"h-");if(d(n))n=1===n.children.length&&h(n.children[0])?n.children[0]:{type:"element",tagName:"div",properties:{},children:n.children};else if(!h(n))throw new Error("Expected root or element, not `"+(n&&n.type||n)+"`");return function e(n,l,t){var o,a,i,u,p,d,v,x,k,w=t.schema,b=w,S=l.tagName;"html"===w.space&&"svg"===S.toLowerCase()&&(b=r,t.schema=b);!0===t.vdom&&"html"===b.space&&(S=S.toUpperCase());for(u in o=l.properties,a={},o)m(a,u,o[u],t);"string"!=typeof a.style||!0!==t.vdom&&!0!==t.vue&&!0!==t.react||(a.style=function(e,n){var l={};try{s(e,(function(e,n){l[function(e){"-ms-"===e.slice(0,4)&&(e="ms-"+e.slice(4));return e.replace(g,y)}(e)]=n}))}catch(t){throw t.message=n+"[style]"+t.message.slice("undefined".length),t}return l}(a.style,S));t.prefix&&(t.key++,a.key=t.prefix+t.key);t.vdom&&"html"!==b.space&&(a.namespace=c[b.space]);p=[],i=l.children,d=i?i.length:0,v=-1;for(;++v<d;)x=i[v],h(x)?p.push(e(n,x,t)):f(x)&&p.push(x.value);return k=0===p.length?n(S,a):n(S,a,p),t.schema=w,k}(e,n,{schema:"svg"===p.space?r:t,prefix:o,key:0,react:a,vue:i,vdom:u,hyperscript:v(e)})}},"EU/P":function(e,n,l){var t=l("P8UN"),r=l("ap2Z"),o=l("96qb"),a=l("+VNo"),i="["+a+"]",u=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),c=function(e,n,l){var r={},i=o((function(){return!!a[e]()||"​"!="​"[e]()})),u=r[e]=i?n(p):a[e];l&&(r[l]=u),t(t.P+t.F*i,"String",r)},p=c.trim=function(e,n){return e=String(r(e)),1&n&&(e=e.replace(u,"")),2&n&&(e=e.replace(s,"")),e};e.exports=c},HXzo:function(e,n,l){"use strict";l("EU/P")("trim",(function(e){return function(){return e(this,3)}}))},I7gA:function(e,n,l){"use strict";var t=l("Yup2"),r=l("9phv"),o=t.booleanish,a=t.number,i=t.spaceSeparated;e.exports=r({transform:function(e,n){return"role"===n?n:"aria-"+n.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:o,ariaAutoComplete:null,ariaBusy:o,ariaChecked:o,ariaColCount:a,ariaColIndex:a,ariaColSpan:a,ariaControls:i,ariaCurrent:null,ariaDescribedBy:i,ariaDetails:null,ariaDisabled:o,ariaDropEffect:i,ariaErrorMessage:null,ariaExpanded:o,ariaFlowTo:i,ariaGrabbed:o,ariaHasPopup:null,ariaHidden:o,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:i,ariaLevel:a,ariaLive:null,ariaModal:o,ariaMultiLine:o,ariaMultiSelectable:o,ariaOrientation:null,ariaOwns:i,ariaPlaceholder:null,ariaPosInSet:a,ariaPressed:o,ariaReadOnly:o,ariaRelevant:null,ariaRequired:o,ariaRoleDescription:i,ariaRowCount:a,ariaRowIndex:a,ariaRowSpan:a,ariaSelected:o,ariaSetSize:a,ariaSort:null,ariaValueMax:a,ariaValueMin:a,ariaValueNow:a,ariaValueText:null,role:null}})},JjqA:function(e,n,l){"use strict";e.exports=r;var t=r.prototype;function r(e,n){this.property=e,this.attribute=n}t.space=null,t.attribute=null,t.property=null,t.boolean=!1,t.booleanish=!1,t.overloadedBoolean=!1,t.number=!1,t.commaSeparated=!1,t.spaceSeparated=!1,t.commaOrSpaceSeparated=!1,t.mustUseProperty=!1,t.defined=!1},Lc7W:function(e,n,l){l("sC2a"),l("lFjb"),l("Ll4R");var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,o=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,i=/^:\s*/,u=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,s=/^[;\s]*/,c=/^\s+|\s+$/g;function p(e){return e?e.replace(c,""):""}e.exports=function(e,n){if("string"!=typeof e)throw new TypeError("First argument must be a string");if(!e)return[];n=n||{};var l=1,c=1;function d(e){var n=e.match(r);n&&(l+=n.length);var t=e.lastIndexOf("\n");c=~t?e.length-t:c+e.length}function h(){var e={line:l,column:c};return function(n){return n.position=new f(e),y(),n}}function f(e){this.start=e,this.end={line:l,column:c},this.source=n.source}f.prototype.content=e;var g=[];function m(t){var r=new Error(n.source+":"+l+":"+c+": "+t);if(r.reason=t,r.filename=n.source,r.line=l,r.column=c,r.source=e,!n.silent)throw r;g.push(r)}function v(n){var l=n.exec(e);if(l){var t=l[0];return d(t),e=e.slice(t.length),l}}function y(){v(o)}function x(e){var n;for(e=e||[];n=k();)!1!==n&&e.push(n);return e}function k(){var n=h();if("/"==e.charAt(0)&&"*"==e.charAt(1)){for(var l=2;""!=e.charAt(l)&&("*"!=e.charAt(l)||"/"!=e.charAt(l+1));)++l;if(l+=2,""===e.charAt(l-1))return m("End of comment missing");var t=e.slice(2,l-2);return c+=2,d(t),e=e.slice(l),c+=2,n({type:"comment",comment:t})}}function w(){var e=h(),n=v(a);if(n){if(k(),!v(i))return m("property missing ':'");var l=v(u),r=e({type:"declaration",property:p(n[0].replace(t,"")),value:l?p(l[0].replace(t,"")):""});return v(s),r}}return y(),function(){var e,n=[];for(x(n);e=w();)!1!==e&&(n.push(e),x(n));return n}()}},LyDg:function(e,n,l){"use strict";var t=l("9phv");e.exports=t({space:"xml",transform:function(e,n){return"xml:"+n.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}})},N8K4:function(e,n,l){"use strict";var t=l("9phv");e.exports=t({space:"xlink",transform:function(e,n){return"xlink:"+n.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}})},RH6O:function(e,n,l){"use strict";var t=l("JjqA"),r=l("Yup2");e.exports=i,i.prototype=new t,i.prototype.defined=!0;var o=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],a=o.length;function i(e,n,l,i){var s,c=-1;for(u(this,"space",i),t.call(this,e,n);++c<a;)u(this,s=o[c],(l&r[s])===r[s])}function u(e,n,l){l&&(e[n]=l)}},RXBc:function(e,n,l){"use strict";l.r(n),l.d(n,"query",(function(){return f}));l("y7hu");var t=l("q1tI"),r=l.n(t),o=l("Bl7J"),a=l("vrFN"),i=l("rq3T"),u=(l("rzGZ"),l("Dq+y"),l("8npG"),l("Ggvi"),l("E5k/"),l("2dtT"));function s(e,n){if(null==e)return{};var l,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)l=o[t],n.indexOf(l)>=0||(r[l]=e[l]);return r}var c=new(l.n(u).a)({createElement:r.a.createElement,components:{h1:function(e){var n=e.children,l=s(e,["children"]);return r.a.createElement("h1",Object.assign({},l,{className:"px-4 mt-3 font-semibold leading-tight text-3xl"}),n)},p:function(e){var n=e.children,l=s(e,["children"]);return r.a.createElement("p",Object.assign({},l,{className:"px-4 py-1 mt-2"}),n)},a:function(e){var n=e.children,l=s(e,["children"]);return r.a.createElement("a",Object.assign({},l,{className:"text-blue-700 underline hover:no-underline"}),n)}}}).Compiler;var p=function(e){var n=e.filename,l=e.htmlAst,t=e.width<640?"small":"large";return r.a.createElement(r.a.Fragment,null,r.a.createElement("figure",{className:"py-4 max-w-screen-lg mx-auto lg:px-4"},r.a.createElement("embed",{type:"image/svg+xml",src:"/plot/"+n+"?size="+t})),r.a.createElement("div",{className:"max-w-screen-sm mx-auto"},c(l)))},d=function(){var e=i.data,n=function(){var e=Object(t.useState)(null),n=e[0],l=e[1];return Object(t.useEffect)((function(){function e(){l(window.innerWidth)}return l(window.innerWidth),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),n}();return null===n?null:r.a.createElement(r.a.Fragment,null,e.allMarkdownRemark.edges.map((function(e){var l=e.node;return r.a.createElement(p,{key:l.frontmatter.slug,filename:l.frontmatter.filename,htmlAst:l.htmlAst,width:n})})))},h=function(e){var n=e.slug,l=e.text,t=e.link,o=e.index;return r.a.createElement("p",{className:(o>0?"pt-2":"")+" pb-2 flex leading-normal text-base sm:text-lg",id:n},r.a.createElement("div",{className:"tracking-wider"},"["+(o+1)+"]"),r.a.createElement("div",{className:"ml-2 sm:ml-4"},l," ",r.a.createElement("a",{className:"text-blue-700 underline hover:no-underline",href:t.url},t.label),"."))},f="1293368830";n.default=function(e){var n=e.data;return r.a.createElement(o.a,null,r.a.createElement(a.a,{title:"Home"}),r.a.createElement("div",{className:"max-w-screen-sm mx-auto"},c(n.markdownRemark.htmlAst)),r.a.createElement(d,null),r.a.createElement("div",{className:"max-w-screen-sm mx-auto"},r.a.createElement("h1",{className:"px-4 mt-4 text-3xl font-semibold"},"References"),r.a.createElement("div",{className:"p-4"},n.allReferencesYaml.edges.map((function(e,n){var l=e.node;return r.a.createElement(h,{key:l.slug,slug:l.slug,text:l.text,link:l.link,index:n})})))))}},RdQs:function(e,n,l){"use strict";l("HXzo");var t=l("ZkSf"),r=Object.prototype.hasOwnProperty,o={align:"text-align",valign:"vertical-align",height:"height",width:"width"};function a(e){var n;if("tr"===e.tagName||"td"===e.tagName||"th"===e.tagName)for(n in o)r.call(o,n)&&void 0!==e.properties[n]&&(i(e,o[n],e.properties[n]),delete e.properties[n])}function i(e,n,l){var t=(e.properties.style||"").trim();t&&!/;\s*/.test(t)&&(t+=";"),t&&(t+=" ");var r=t+n+": "+l+";";e.properties.style=r}e.exports=function(e){return t(e,"element",a),e}},TTG4:function(e,n,l){"use strict";l("HQhv"),l("HXzo"),n.parse=function(e){var n=String(e||"").trim();return""===n?[]:n.split(t)},n.stringify=function(e){return e.join(" ").trim()};var t=/[ \t\n\r\f]+/g},U6jy:function(e,n){e.exports=function(){for(var e={},n=0;n<arguments.length;n++){var t=arguments[n];for(var r in t)l.call(t,r)&&(e[r]=t[r])}return e};var l=Object.prototype.hasOwnProperty},"W+Vs":function(e){e.exports=JSON.parse('{"classId":"classID","dataType":"datatype","itemId":"itemID","strokeDashArray":"strokeDasharray","strokeDashOffset":"strokeDashoffset","strokeLineCap":"strokeLinecap","strokeLineJoin":"strokeLinejoin","strokeMiterLimit":"strokeMiterlimit","typeOf":"typeof","xLinkActuate":"xlinkActuate","xLinkArcRole":"xlinkArcrole","xLinkHref":"xlinkHref","xLinkRole":"xlinkRole","xLinkShow":"xlinkShow","xLinkTitle":"xlinkTitle","xLinkType":"xlinkType","xmlnsXLink":"xmlnsXlink"}')},Wb05:function(e,n,l){"use strict";var t=l("9phv"),r=l("0rpx");e.exports=t({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:r,properties:{xmlns:null,xmlnsXLink:null}})},Yup2:function(e,n,l){"use strict";var t=0;function r(){return Math.pow(2,++t)}n.boolean=r(),n.booleanish=r(),n.overloadedBoolean=r(),n.number=r(),n.spaceSeparated=r(),n.commaSeparated=r(),n.commaOrSpaceSeparated=r()},ZQof:function(e,n,l){"use strict";var t=l("h5Sy"),r=l("N8K4"),o=l("LyDg"),a=l("Wb05"),i=l("I7gA"),u=l("afOB");e.exports=t([o,r,a,i,u])},Zasy:function(e,n,l){"use strict";function t(e){if("string"==typeof e)return function(e){return function(n){return Boolean(n&&n.type===e)}}(e);if(null==e)return a;if("object"==typeof e)return("length"in e?o:r)(e);if("function"==typeof e)return e;throw new Error("Expected function, string, or object as test")}function r(e){return function(n){var l;for(l in e)if(n[l]!==e[l])return!1;return!0}}function o(e){var n=function(e){for(var n=[],l=e.length,r=-1;++r<l;)n[r]=t(e[r]);return n}(e),l=n.length;return function(){var e=-1;for(;++e<l;)if(n[e].apply(this,arguments))return!0;return!1}}function a(){return!0}e.exports=t},ZkSf:function(e,n,l){"use strict";l("sc67"),e.exports=i;var t=l("uzq8"),r=t.CONTINUE,o=t.SKIP,a=t.EXIT;function i(e,n,l,r){"function"==typeof n&&"function"!=typeof l&&(r=l,l=n,n=null),t(e,n,(function(e,n){var t=n[n.length-1],r=t?t.children.indexOf(e):null;return l(e,r,t)}),r)}i.CONTINUE=r,i.SKIP=o,i.EXIT=a},afOB:function(e,n,l){"use strict";var t=l("Yup2"),r=l("9phv"),o=l("0rpx"),a=t.boolean,i=t.overloadedBoolean,u=t.booleanish,s=t.number,c=t.spaceSeparated,p=t.commaSeparated;e.exports=r({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:o,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:p,acceptCharset:c,accessKey:c,action:null,allow:null,allowFullScreen:a,allowPaymentRequest:a,allowUserMedia:a,alt:null,as:null,async:a,autoCapitalize:null,autoComplete:c,autoFocus:a,autoPlay:a,capture:a,charSet:null,checked:a,cite:null,className:c,cols:s,colSpan:null,content:null,contentEditable:u,controls:a,controlsList:c,coords:s|p,crossOrigin:null,data:null,dateTime:null,decoding:null,default:a,defer:a,dir:null,dirName:null,disabled:a,download:i,draggable:u,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:a,formTarget:null,headers:c,height:s,hidden:a,high:s,href:null,hrefLang:null,htmlFor:c,httpEquiv:c,id:null,imageSizes:null,imageSrcSet:p,inputMode:null,integrity:null,is:null,isMap:a,itemId:null,itemProp:c,itemRef:c,itemScope:a,itemType:c,kind:null,label:null,lang:null,language:null,list:null,loop:a,low:s,manifest:null,max:null,maxLength:s,media:null,method:null,min:null,minLength:s,multiple:a,muted:a,name:null,nonce:null,noModule:a,noValidate:a,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:a,optimum:s,pattern:null,ping:c,placeholder:null,playsInline:a,poster:null,preload:null,readOnly:a,referrerPolicy:null,rel:c,required:a,reversed:a,rows:s,rowSpan:s,sandbox:c,scope:null,scoped:a,seamless:a,selected:a,shape:null,size:s,sizes:null,slot:null,span:s,spellCheck:u,src:null,srcDoc:null,srcLang:null,srcSet:p,start:s,step:null,style:null,tabIndex:s,target:null,title:null,translate:null,type:null,typeMustMatch:a,useMap:null,value:u,width:s,wrap:null,align:null,aLink:null,archive:c,axis:null,background:null,bgColor:null,border:s,borderColor:null,bottomMargin:s,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:a,declare:a,event:null,face:null,frame:null,frameBorder:null,hSpace:s,leftMargin:s,link:null,longDesc:null,lowSrc:null,marginHeight:s,marginWidth:s,noResize:a,noHref:a,noShade:a,noWrap:a,object:null,profile:null,prompt:null,rev:null,rightMargin:s,rules:null,scheme:null,scrolling:u,standby:null,summary:null,text:null,topMargin:s,valueType:null,version:null,vAlign:null,vLink:null,vSpace:s,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:a,prefix:null,property:null,results:s,security:null,unselectable:null}})},h5Sy:function(e,n,l){"use strict";var t=l("U6jy"),r=l("1nHS");e.exports=function(e){var n,l,o=e.length,a=[],i=[],u=-1;for(;++u<o;)n=e[u],a.push(n.property),i.push(n.normal),l=n.space;return new r(t.apply(null,a),t.apply(null,i),l)}},"i/jK":function(e,n,l){"use strict";e.exports=function(e){return e.toLowerCase()}},lFjb:function(e,n,l){"use strict";var t=l("P8UN"),r=l("5SQf"),o=l("1Llc"),a=l("kiRH"),i=[].lastIndexOf,u=!!i&&1/[1].lastIndexOf(1,-0)<0;t(t.P+t.F*(u||!l("h/qr")(i)),"Array",{lastIndexOf:function(e){if(u)return i.apply(this,arguments)||0;var n=r(this),l=a(n.length),t=l-1;for(arguments.length>1&&(t=Math.min(t,o(arguments[1]))),t<0&&(t=l+t);t>=0;t--)if(t in n&&n[t]===e)return t||0;return-1}})},mFtL:function(e,n,l){"use strict";function t(e){if("string"==typeof e)return function(e){return function(n){return Boolean(n&&n.type===e)}}(e);if(null==e)return a;if("object"==typeof e)return("length"in e?o:r)(e);if("function"==typeof e)return e;throw new Error("Expected function, string, or object as test")}function r(e){return function(n){var l;for(l in e)if(n[l]!==e[l])return!1;return!0}}function o(e){var n=function(e){for(var n=[],l=e.length,r=-1;++r<l;)n[r]=t(e[r]);return n}(e),l=n.length;return function(){var e=-1;for(;++e<l;)if(n[e].apply(this,arguments))return!0;return!1}}function a(){return!0}e.exports=t},qrWY:function(e){e.exports=JSON.parse('{"html":"http://www.w3.org/1999/xhtml","mathml":"http://www.w3.org/1998/Math/MathML","svg":"http://www.w3.org/2000/svg","xlink":"http://www.w3.org/1999/xlink","xml":"http://www.w3.org/XML/1998/namespace","xmlns":"http://www.w3.org/2000/xmlns/"}')},rq3T:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"htmlAst":{"type":"root","children":[{"type":"element","tagName":"p","properties":{},"children":[{"type":"text","value":"As Dr. Shah, from the Maine CDC, has mentioned in his briefings, testing capacity is limited, and confirmed cases are an underestimate of the true case load. Current testing guidelines are available from the "},{"type":"element","tagName":"a","properties":{"href":"https://www.maine.gov/dhhs/mecdc/infectious-disease/epi/airborne/coronavirus.shtml#testing"},"children":[{"type":"text","value":"Maine CDC"}]},{"type":"text","value":".\\n[1] [2]"}]}],"data":{"quirksMode":false}},"frontmatter":{"filename":"case_status.svg","slug":"case-status"}}},{"node":{"htmlAst":{"type":"root","children":[{"type":"element","tagName":"p","properties":{},"children":[{"type":"text","value":"[1]"}]}],"data":{"quirksMode":false}},"frontmatter":{"filename":"new_cases_maine.svg","slug":"new-cases-maine"}}},{"node":{"htmlAst":{"type":"root","children":[{"type":"element","tagName":"p","properties":{},"children":[{"type":"text","value":"[1]"}]}],"data":{"quirksMode":false}},"frontmatter":{"filename":"total_deaths.svg","slug":"total-deaths"}}},{"node":{"htmlAst":{"type":"root","children":[{"type":"element","tagName":"p","properties":{},"children":[{"type":"text","value":"[1]"}]}],"data":{"quirksMode":false}},"frontmatter":{"filename":"new_deaths.svg","slug":"new-deaths"}}},{"node":{"htmlAst":{"type":"root","children":[{"type":"element","tagName":"p","properties":{},"children":[{"type":"text","value":"[1]"}]}],"data":{"quirksMode":false}},"frontmatter":{"filename":"cases_by_county.svg","slug":"cases-by-county"}}},{"node":{"htmlAst":{"type":"root","children":[{"type":"element","tagName":"p","properties":{},"children":[{"type":"text","value":"[1] [4]"}]}],"data":{"quirksMode":false}},"frontmatter":{"filename":"cases_per_ten_thousand_res.svg","slug":"cases-per-ten-thousand-res"}}},{"node":{"htmlAst":{"type":"root","children":[{"type":"element","tagName":"p","properties":{},"children":[{"type":"text","value":"Hover over the county names in the legend to highlight the data from each county."}]},{"type":"text","value":"\\n"},{"type":"element","tagName":"p","properties":{},"children":[{"type":"text","value":"[1]"}]}],"data":{"quirksMode":false}},"frontmatter":{"filename":"growth_by_county.svg","slug":"growth-by-county"}}},{"node":{"htmlAst":{"type":"root","children":[{"type":"element","tagName":"p","properties":{},"children":[{"type":"text","value":"Case counts are plotted on a log scale. Hover over the county names in the legend to highlight the data from each county, and compare the slope of the highlighted county line with the slope of the gray case doubling lines to get a rough estimate of how quickly cases are growing."}]},{"type":"text","value":"\\n"},{"type":"element","tagName":"p","properties":{},"children":[{"type":"text","value":"[1]"}]}],"data":{"quirksMode":false}},"frontmatter":{"filename":"growth_by_county_log.svg","slug":"growth-by-county-log"}}},{"node":{"htmlAst":{"type":"root","children":[{"type":"element","tagName":"p","properties":{},"children":[{"type":"text","value":"[3]"}]}],"data":{"quirksMode":false}},"frontmatter":{"filename":"age_range.svg","slug":"age-range"}}},{"node":{"htmlAst":{"type":"root","children":[{"type":"element","tagName":"p","properties":{},"children":[{"type":"text","value":"Dr. Nirav D. Shah states, in his briefings, that more hospitals have been reporting asset counts to the CDC, which is at least partially responsible for the increase in the number of available ventilators. Alternative ventilators are ventilators that are typically used in other parts of the hospital (e.g. surgery), which have recently been approved for use in treating COVID-19 patients. "}]},{"type":"text","value":"\\n"},{"type":"element","tagName":"p","properties":{},"children":[{"type":"text","value":"Source: Maine CDC Daily Situation Briefing Videos (new data every weekday) [3]"}]}],"data":{"quirksMode":false}},"frontmatter":{"filename":"ventilators.svg","slug":"ventilators"}}},{"node":{"htmlAst":{"type":"root","children":[{"type":"element","tagName":"p","properties":{},"children":[{"type":"text","value":"Dr. Nirav D. Shah states, in his briefings, that more hospitals have been reporting asset counts to the CDC, which is at least partially responsible for the increase in the number of available Intensive Care Unit (ICU) beds."}]},{"type":"text","value":"\\n"},{"type":"element","tagName":"p","properties":{},"children":[{"type":"text","value":"Source: Maine Daily Situation Briefing Videos (new data every weekday) [3]"}]}],"data":{"quirksMode":false}},"frontmatter":{"filename":"icu_beds.svg","slug":"icu-beds"}}}]}}}')},sU6V:function(e,n,l){"use strict";var t=l("Yup2"),r=l("9phv"),o=l("4v99"),a=t.boolean,i=t.number,u=t.spaceSeparated,s=t.commaSeparated,c=t.commaOrSpaceSeparated;e.exports=r({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:o,properties:{about:c,accentHeight:i,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:i,amplitude:i,arabicForm:null,ascent:i,attributeName:null,attributeType:null,azimuth:i,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:i,by:null,calcMode:null,capHeight:i,className:u,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:i,diffuseConstant:i,direction:null,display:null,dur:null,divisor:i,dominantBaseline:null,download:a,dx:null,dy:null,edgeMode:null,editable:null,elevation:i,enableBackground:null,end:null,event:null,exponent:i,externalResourcesRequired:null,fill:null,fillOpacity:i,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:s,g2:s,glyphName:s,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:i,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:i,horizOriginX:i,horizOriginY:i,id:null,ideographic:i,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:i,k:i,k1:i,k2:i,k3:i,k4:i,kernelMatrix:c,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:i,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:i,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:i,overlineThickness:i,paintOrder:null,panose1:null,path:null,pathLength:i,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:u,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:i,pointsAtY:i,pointsAtZ:i,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:c,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:c,rev:c,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:c,requiredFeatures:c,requiredFonts:c,requiredFormats:c,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:i,specularExponent:i,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:i,strikethroughThickness:i,string:null,stroke:null,strokeDashArray:c,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:i,strokeOpacity:i,strokeWidth:null,style:null,surfaceScale:i,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:c,tabIndex:i,tableValues:null,target:null,targetX:i,targetY:i,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:c,to:null,transform:null,u1:null,u2:null,underlinePosition:i,underlineThickness:i,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:i,values:null,vAlphabetic:i,vMathematical:i,vectorEffect:null,vHanging:i,vIdeographic:i,version:null,vertAdvY:i,vertOriginX:i,vertOriginY:i,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:i,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}})},"t+fG":function(e,n,l){var t=l("P8UN"),r=l("96qb"),o=l("ap2Z"),a=/"/g,i=function(e,n,l,t){var r=String(o(e)),i="<"+n;return""!==l&&(i+=" "+l+'="'+String(t).replace(a,"&quot;")+'"'),i+">"+r+"</"+n+">"};e.exports=function(e,n){var l={};l[e]=n(i),t(t.P+t.F*r((function(){var n=""[e]('"');return n!==n.toLowerCase()||n.split('"').length>3})),"String",l)}},uzq8:function(e,n,l){"use strict";e.exports=r;var t=l("mFtL");function r(e,n,l,r){var a;function i(e,t,u){var s,c=[];return(n&&!a(e,t,u[u.length-1]||null)||!1!==(c=o(l(e,u)))[0])&&e.children&&"skip"!==c[0]&&!1===(s=o(function(e,n){var l,t=r?-1:1,o=(r?e.length:-1)+t;for(;o>-1&&o<e.length;){if(!1===(l=i(e[o],o,n))[0])return l;o="number"==typeof l[1]?l[1]:o+t}}(e.children,u.concat(e))))[0]?s:c}"function"==typeof n&&"function"!=typeof l&&(r=l,l=n,n=null),a=t(n),i(e,null,[])}function o(e){return null!==e&&"object"==typeof e&&"length"in e?e:"number"==typeof e?[!0,e]:[e]}r.CONTINUE=!0,r.SKIP="skip",r.EXIT=!1},vfP8:function(e,n,l){"use strict";l("HXzo"),l("sc67"),n.parse=function(e){var n,l=[],t=String(e||""),r=t.indexOf(","),o=0,a=!1;for(;!a;)-1===r&&(r=t.length,a=!0),!(n=t.slice(o,r).trim())&&a||l.push(n),o=r+1,r=t.indexOf(",",o);return l},n.stringify=function(e,n){var l=n||{},t=!1===l.padLeft?"":" ",r=l.padRight?" ":"";""===e[e.length-1]&&(e=e.concat(""));return e.join(r+","+t).trim()}},y7hu:function(e,n,l){"use strict";l("t+fG")("link",(function(e){return function(n){return e(this,"a","href",n)}}))}}]);
//# sourceMappingURL=component---src-pages-index-js-dc2a2df7eb56330db4bf.js.map