"use strict";(self.webpackChunksrf_group=self.webpackChunksrf_group||[]).push([[939],{66939:function(e,t,r){r.r(t),r.d(t,{GetCardList:function(){return y},FaqClient:function(){return w}});var n=r(29439),a=r(47313),o=r(43265),i=r(9019),s=r(3404),l=r(28303),c=r(55476),d=r(61113),u=r(70349),p=r(1084),f=r(73428),m=r(56104),x=r(47131),h=r(19536),v=r(65033),Z=r(93405),g=r(6306),b=r(85281),C=r(57829),j=r(99881),S=r(96351),M=r(46417),y=function(e){var t=a.useState(!1),r=(0,n.Z)(t,2),o=r[0],i=r[1],s=e.faq,l=e.currentLocale,c=function(){i(!o)};return(0,M.jsxs)(f.Z,{children:[(0,M.jsxs)(m.Z,{disableSpacing:!0,children:[(0,M.jsx)(x.Z,{sx:{p:"10px",flex:1},"aria-label":"menu",onClick:c,children:"ar-ly"===l?s.questionAr:"fr"===l?s.questionFr:"en"===l?s.questionEn:void 0}),(0,M.jsx)(h.Z,{sx:{height:28,m:.5},orientation:"vertical"}),(0,M.jsx)(x.Z,{sx:{p:"10px"},"aria-label":"directions",onClick:c,children:(0,M.jsx)(g.Z,{})})]}),(0,M.jsx)(v.Z,{in:o,timeout:"auto",unmountOnExit:!0,children:(0,M.jsx)(Z.Z,{children:(0,M.jsx)(d.Z,{paragraph:!0,children:"ar-ly"===l?s.responseAr:"fr"===l?s.responseFr:"en"===l?s.responseEn:void 0})})})]})},w=function(e){var t=a.useState("fr"),r=(0,n.Z)(t,2),u=r[0],p=r[1],f=e.listFaq,m=e.loadingEntitiesFaq,x=e.getEntitiesFaq;return a.useEffect((function(){S.Z.on("languageChanged",(function(e){console.log("lang ",e),p(e)})),x(1,20,"")}),[]),(0,M.jsxs)(o.Z,{maxWidth:"xl",children:[(0,M.jsx)(i.ZP,{container:!0,style:{paddingTop:10},children:(0,M.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,M.jsxs)(s.Z,{"aria-label":"breadcrumb",children:[(0,M.jsx)(l.rU,{color:"inherit",to:c.H.HOME,children:"SRF"}),(0,M.jsx)(d.Z,{color:"text.primary",children:"FAQ"})]})})}),(0,M.jsxs)(i.ZP,{container:!0,spacing:4,sx:{mt:3},children:[m?(0,M.jsx)(i.ZP,{item:!0,xs:12,children:(0,M.jsx)(C.Z,{sx:{paddingTop:10,textAlign:"center"},children:(0,M.jsx)(b.Z,{color:"inherit"})})}):null,f&&f.length>0?f.map((function(e,t){return(0,M.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,M.jsx)(y,{faq:e,currentLocale:u})},"entity-".concat(t))})):!m&&(0,M.jsx)(i.ZP,{item:!0,xs:12,md:6,children:(0,M.jsx)(j.Z,{severity:"warning",children:"No Faqs found"})})]})]})},R={getEntitiesFaq:u.uc};t.default=(0,p.connect)((function(e){var t=e.faq;return{loadingEntitiesFaq:t.loadingEntities,listFaq:t.entities}}),R)(w)},99881:function(e,t,r){r.d(t,{Z:function(){return L}});var n=r(4942),a=r(63366),o=r(87462),i=r(47313),s=r(83061),l=r(50317),c=r(17551),d=r(88564),u=r(25469),p=r(91615),f=r(82295),m=r(22131);function x(e){return(0,m.Z)("MuiAlert",e)}var h,v=(0,r(655).Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),Z=r(47131),g=r(81171),b=r(46417),C=(0,g.Z)((0,b.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),j=(0,g.Z)((0,b.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),S=(0,g.Z)((0,b.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),M=(0,g.Z)((0,b.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),y=r(91251),w=["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"],R=(0,d.ZP)(f.Z,{name:"MuiAlert",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.variant],t["".concat(r.variant).concat((0,p.Z)(r.color||r.severity))]]}})((function(e){var t=e.theme,r=e.ownerState,a="light"===t.palette.mode?c._j:c.$n,i="light"===t.palette.mode?c.$n:c._j,s=r.color||r.severity;return(0,o.Z)({},t.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},s&&"standard"===r.variant&&(0,n.Z)({color:a(t.palette[s].light,.6),backgroundColor:i(t.palette[s].light,.9)},"& .".concat(v.icon),{color:"dark"===t.palette.mode?t.palette[s].main:t.palette[s].light}),s&&"outlined"===r.variant&&(0,n.Z)({color:a(t.palette[s].light,.6),border:"1px solid ".concat(t.palette[s].light)},"& .".concat(v.icon),{color:"dark"===t.palette.mode?t.palette[s].main:t.palette[s].light}),s&&"filled"===r.variant&&{color:"#fff",fontWeight:t.typography.fontWeightMedium,backgroundColor:"dark"===t.palette.mode?t.palette[s].dark:t.palette[s].main})})),k=(0,d.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:function(e,t){return t.icon}})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),A=(0,d.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:function(e,t){return t.message}})({padding:"8px 0"}),W=(0,d.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:function(e,t){return t.action}})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),N={success:(0,b.jsx)(C,{fontSize:"inherit"}),warning:(0,b.jsx)(j,{fontSize:"inherit"}),error:(0,b.jsx)(S,{fontSize:"inherit"}),info:(0,b.jsx)(M,{fontSize:"inherit"})},L=i.forwardRef((function(e,t){var r=(0,u.Z)({props:e,name:"MuiAlert"}),n=r.action,i=r.children,c=r.className,d=r.closeText,f=void 0===d?"Close":d,m=r.color,v=r.icon,g=r.iconMapping,C=void 0===g?N:g,j=r.onClose,S=r.role,M=void 0===S?"alert":S,L=r.severity,z=void 0===L?"success":L,P=r.variant,q=void 0===P?"standard":P,E=(0,a.Z)(r,w),F=(0,o.Z)({},r,{color:m,severity:z,variant:q}),I=function(e){var t=e.variant,r=e.color,n=e.severity,a=e.classes,o={root:["root","".concat(t).concat((0,p.Z)(r||n)),"".concat(t)],icon:["icon"],message:["message"],action:["action"]};return(0,l.Z)(o,x,a)}(F);return(0,b.jsxs)(R,(0,o.Z)({role:M,elevation:0,ownerState:F,className:(0,s.Z)(I.root,c),ref:t},E,{children:[!1!==v?(0,b.jsx)(k,{ownerState:F,className:I.icon,children:v||C[z]||N[z]}):null,(0,b.jsx)(A,{ownerState:F,className:I.message,children:i}),null!=n?(0,b.jsx)(W,{className:I.action,children:n}):null,null==n&&j?(0,b.jsx)(W,{ownerState:F,className:I.action,children:(0,b.jsx)(Z.Z,{size:"small","aria-label":f,title:f,color:"inherit",onClick:j,children:h||(h=(0,b.jsx)(y.Z,{fontSize:"small"}))})}):null]}))}))},3404:function(e,t,r){r.d(t,{Z:function(){return W}});var n=r(93433),a=r(29439),o=r(4942),i=r(87462),s=r(63366),l=r(47313),c=(r(20478),r(83061)),d=r(50317),u=r(88564),p=r(25469),f=r(61113),m=r(17551),x=r(81171),h=r(46417),v=(0,x.Z)((0,h.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),Z=r(38743),g=(0,u.ZP)(Z.Z)((function(e){var t=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,m._4)(t.palette.grey[200],.12)}:{backgroundColor:(0,m._4)(t.palette.grey[600],.12)})})})),b=(0,u.ZP)(v)({width:24,height:16});var C=function(e){var t=e;return(0,h.jsx)("li",{children:(0,h.jsx)(g,(0,i.Z)({focusRipple:!0},e,{ownerState:t,children:(0,h.jsx)(b,{ownerState:t})}))})},j=r(22131);function S(e){return(0,j.Z)("MuiBreadcrumbs",e)}var M=(0,r(655).Z)("MuiBreadcrumbs",["root","ol","li","separator"]),y=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],w=(0,u.ZP)(f.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[(0,o.Z)({},"& .".concat(M.li),t.li),t.root]}})({}),R=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),k=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function A(e,t,r,n){return e.reduce((function(a,o,i){return i<e.length-1?a=a.concat(o,(0,h.jsx)(k,{"aria-hidden":!0,className:t,ownerState:n,children:r},"separator-".concat(i))):a.push(o),a}),[])}var W=l.forwardRef((function(e,t){var r=(0,p.Z)({props:e,name:"MuiBreadcrumbs"}),o=r.children,u=r.className,f=r.component,m=void 0===f?"nav":f,x=r.expandText,v=void 0===x?"Show path":x,Z=r.itemsAfterCollapse,g=void 0===Z?1:Z,b=r.itemsBeforeCollapse,j=void 0===b?1:b,M=r.maxItems,k=void 0===M?8:M,W=r.separator,N=void 0===W?"/":W,L=(0,s.Z)(r,y),z=l.useState(!1),P=(0,a.Z)(z,2),q=P[0],E=P[1],F=(0,i.Z)({},r,{component:m,expanded:q,expandText:v,itemsAfterCollapse:g,itemsBeforeCollapse:j,maxItems:k,separator:N}),I=function(e){var t=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},S,t)}(F),B=l.useRef(null),G=l.Children.toArray(o).filter((function(e){return l.isValidElement(e)})).map((function(e,t){return(0,h.jsx)("li",{className:I.li,children:e},"child-".concat(t))}));return(0,h.jsx)(w,(0,i.Z)({ref:t,component:m,color:"text.secondary",className:(0,c.Z)(I.root,u),ownerState:F},L,{children:(0,h.jsx)(R,{className:I.ol,ref:B,ownerState:F,children:A(q||k&&G.length<=k?G:function(e){return j+g>=e.length?e:[].concat((0,n.Z)(e.slice(0,j)),[(0,h.jsx)(C,{"aria-label":v,onClick:function(){E(!0);var e=B.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,n.Z)(e.slice(e.length-g,e.length)))}(G),I.separator,N,F)})}))}))},56104:function(e,t,r){r.d(t,{Z:function(){return x}});var n=r(63366),a=r(87462),o=r(47313),i=r(83061),s=r(50317),l=r(88564),c=r(25469),d=r(22131);function u(e){return(0,d.Z)("MuiCardActions",e)}(0,r(655).Z)("MuiCardActions",["root","spacing"]);var p=r(46417),f=["disableSpacing","className"],m=(0,l.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,!r.disableSpacing&&t.spacing]}})((function(e){var t=e.ownerState;return(0,a.Z)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),x=o.forwardRef((function(e,t){var r=(0,c.Z)({props:e,name:"MuiCardActions"}),o=r.disableSpacing,l=void 0!==o&&o,d=r.className,x=(0,n.Z)(r,f),h=(0,a.Z)({},r,{disableSpacing:l}),v=function(e){var t=e.classes,r={root:["root",!e.disableSpacing&&"spacing"]};return(0,s.Z)(r,u,t)}(h);return(0,p.jsx)(m,(0,a.Z)({className:(0,i.Z)(v.root,d),ownerState:h,ref:t},x))}))},93405:function(e,t,r){r.d(t,{Z:function(){return x}});var n=r(87462),a=r(63366),o=r(47313),i=r(83061),s=r(50317),l=r(88564),c=r(25469),d=r(22131);function u(e){return(0,d.Z)("MuiCardContent",e)}(0,r(655).Z)("MuiCardContent",["root"]);var p=r(46417),f=["className","component"],m=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),x=o.forwardRef((function(e,t){var r=(0,c.Z)({props:e,name:"MuiCardContent"}),o=r.className,l=r.component,d=void 0===l?"div":l,x=(0,a.Z)(r,f),h=(0,n.Z)({},r,{component:d}),v=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},u,t)}(h);return(0,p.jsx)(m,(0,n.Z)({as:d,className:(0,i.Z)(v.root,o),ownerState:h,ref:t},x))}))},73428:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(87462),a=r(63366),o=r(47313),i=r(83061),s=r(50317),l=r(88564),c=r(25469),d=r(82295),u=r(22131);function p(e){return(0,u.Z)("MuiCard",e)}(0,r(655).Z)("MuiCard",["root"]);var f=r(46417),m=["className","raised"],x=(0,l.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),h=o.forwardRef((function(e,t){var r=(0,c.Z)({props:e,name:"MuiCard"}),o=r.className,l=r.raised,d=void 0!==l&&l,u=(0,a.Z)(r,m),h=(0,n.Z)({},r,{raised:d}),v=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},p,t)}(h);return(0,f.jsx)(x,(0,n.Z)({className:(0,i.Z)(v.root,o),elevation:d?8:void 0,ref:t,ownerState:h},u))}))},43265:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(4942),a=r(63366),o=r(87462),i=r(47313),s=r(83061),l=r(50317),c=r(25469),d=r(88564),u=r(22131);function p(e){return(0,u.Z)("MuiContainer",e)}(0,r(655).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var f=r(91615),m=r(46417),x=["className","component","disableGutters","fixed","maxWidth"],h=(0,d.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["maxWidth".concat((0,f.Z)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}})((function(e){var t=e.theme,r=e.ownerState;return(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!r.disableGutters&&(0,n.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,r){var n=t.breakpoints.values[r];return 0!==n&&(e[t.breakpoints.up(r)]={maxWidth:"".concat(n).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,r=e.ownerState;return(0,o.Z)({},"xs"===r.maxWidth&&(0,n.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),r.maxWidth&&"xs"!==r.maxWidth&&(0,n.Z)({},t.breakpoints.up(r.maxWidth),{maxWidth:"".concat(t.breakpoints.values[r.maxWidth]).concat(t.breakpoints.unit)}))})),v=i.forwardRef((function(e,t){var r=(0,c.Z)({props:e,name:"MuiContainer"}),n=r.className,i=r.component,d=void 0===i?"div":i,u=r.disableGutters,v=void 0!==u&&u,Z=r.fixed,g=void 0!==Z&&Z,b=r.maxWidth,C=void 0===b?"lg":b,j=(0,a.Z)(r,x),S=(0,o.Z)({},r,{component:d,disableGutters:v,fixed:g,maxWidth:C}),M=function(e){var t=e.classes,r=e.fixed,n=e.disableGutters,a=e.maxWidth,o={root:["root",a&&"maxWidth".concat((0,f.Z)(String(a))),r&&"fixed",n&&"disableGutters"]};return(0,l.Z)(o,p,t)}(S);return(0,m.jsx)(h,(0,o.Z)({as:d,ownerState:S,className:(0,s.Z)(M.root,n),ref:t},j))}))},91251:function(e,t,r){r(47313);var n=r(81171),a=r(46417);t.Z=(0,n.Z)((0,a.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")}}]);