"use strict";(self.webpackChunksrf_group=self.webpackChunksrf_group||[]).push([[548],{95548:function(e,t,r){r.r(t),r.d(t,{Cart:function(){return v}});var o=r(47313),n=r(2213),i=r(1084),a=r(57829),s=r(9019),c=r(3404),l=r(63830),u=r(28303),d=r(55476),m=r(61113),f=r(43265),h=r(24511),p=r(73428),x=r(44183),g=r(46417);function Z(){var e=(0,l.k6)();return(0,g.jsx)(x.Z,{component:"a",onClick:function(){return t=1,void setTimeout((function(){e.push(d.H.DETAILS_OFFER+"/"+t)}),300);var t},children:(0,g.jsx)(p.Z,{sx:{display:{xs:"block",sm:"flex"}},children:"22"})})}var v=function(e){var t=(0,h.$)().t;return o.useEffect((function(){e.getEntities(0,20,"")}),[]),(0,g.jsxs)(f.Z,{maxWidth:"xl",children:[(0,g.jsx)(s.ZP,{container:!0,style:{paddingTop:10},children:(0,g.jsx)(s.ZP,{item:!0,xs:12,md:6,children:(0,g.jsxs)(c.Z,{"aria-label":"breadcrumb",children:[(0,g.jsx)(u.rU,{color:"inherit",to:d.H.HOME,children:"SRF"}),(0,g.jsx)(m.Z,{color:"text.primary",children:t("header.label_cart")})]})})}),(0,g.jsxs)(s.ZP,{container:!0,spacing:4,sx:{mt:3},children:[(0,g.jsx)(s.ZP,{item:!0,xs:12,md:2}),(0,g.jsx)(s.ZP,{item:!0,xs:12,md:6,children:e.entities.map((function(e,t){return(0,g.jsx)(a.Z,{children:(0,g.jsx)(Z,{})},"index-".concat(t))}))}),(0,g.jsx)(s.ZP,{item:!0,xs:12,md:4,children:"Details carts"})]})]})},b={getEntities:n.uc};t.default=(0,i.connect)((function(e){e.conversation,e.user,e.message;var t=e.cart;return{loadingEntities:t.loadingEntities,entities:t.entities,totalItems:t.totalItems}}),b)(v)},3404:function(e,t,r){r.d(t,{Z:function(){return N}});var o=r(93433),n=r(29439),i=r(4942),a=r(87462),s=r(63366),c=r(47313),l=(r(20478),r(83061)),u=r(50317),d=r(88564),m=r(25469),f=r(61113),h=r(17551),p=r(81171),x=r(46417),g=(0,p.Z)((0,x.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),Z=r(38743),v=(0,d.ZP)(Z.Z)((function(e){var t=e.theme;return(0,a.Z)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,a.Z)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,a.Z)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,h._4)(t.palette.grey[200],.12)}:{backgroundColor:(0,h._4)(t.palette.grey[600],.12)})})})),b=(0,d.ZP)(g)({width:24,height:16});var C=function(e){var t=e;return(0,x.jsx)("li",{children:(0,x.jsx)(v,(0,a.Z)({focusRipple:!0},e,{ownerState:t,children:(0,x.jsx)(b,{ownerState:t})}))})},j=r(22131);function k(e){return(0,j.Z)("MuiBreadcrumbs",e)}var w=(0,r(655).Z)("MuiBreadcrumbs",["root","ol","li","separator"]),y=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],R=(0,d.ZP)(f.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[(0,i.Z)({},"& .".concat(w.li),t.li),t.root]}})({}),S=(0,d.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),M=(0,d.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function W(e,t,r,o){return e.reduce((function(n,i,a){return a<e.length-1?n=n.concat(i,(0,x.jsx)(M,{"aria-hidden":!0,className:t,ownerState:o,children:r},"separator-".concat(a))):n.push(i),n}),[])}var N=c.forwardRef((function(e,t){var r=(0,m.Z)({props:e,name:"MuiBreadcrumbs"}),i=r.children,d=r.className,f=r.component,h=void 0===f?"nav":f,p=r.expandText,g=void 0===p?"Show path":p,Z=r.itemsAfterCollapse,v=void 0===Z?1:Z,b=r.itemsBeforeCollapse,j=void 0===b?1:b,w=r.maxItems,M=void 0===w?8:w,N=r.separator,A=void 0===N?"/":N,P=(0,s.Z)(r,y),H=c.useState(!1),E=(0,n.Z)(H,2),B=E[0],G=E[1],I=(0,a.Z)({},r,{component:h,expanded:B,expandText:g,itemsAfterCollapse:v,itemsBeforeCollapse:j,maxItems:M,separator:A}),L=function(e){var t=e.classes;return(0,u.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},k,t)}(I),V=c.useRef(null),O=c.Children.toArray(i).filter((function(e){return c.isValidElement(e)})).map((function(e,t){return(0,x.jsx)("li",{className:L.li,children:e},"child-".concat(t))}));return(0,x.jsx)(R,(0,a.Z)({ref:t,component:h,color:"text.secondary",className:(0,l.Z)(L.root,d),ownerState:I},P,{children:(0,x.jsx)(S,{className:L.ol,ref:V,ownerState:I,children:W(B||M&&O.length<=M?O:function(e){return j+v>=e.length?e:[].concat((0,o.Z)(e.slice(0,j)),[(0,x.jsx)(C,{"aria-label":g,onClick:function(){G(!0);var e=V.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,o.Z)(e.slice(e.length-v,e.length)))}(O),L.separator,A,I)})}))}))},44183:function(e,t,r){r.d(t,{Z:function(){return v}});var o=r(4942),n=r(87462),i=r(63366),a=r(47313),s=r(83061),c=r(50317),l=r(25469),u=r(88564),d=r(22131);function m(e){return(0,d.Z)("MuiCardActionArea",e)}var f=(0,r(655).Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),h=r(38743),p=r(46417),x=["children","className","focusVisibleClassName"],g=(0,u.ZP)(h.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,r=e.theme;return t={display:"block",textAlign:"inherit",width:"100%"},(0,o.Z)(t,"&:hover .".concat(f.focusHighlight),{opacity:r.palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}}),(0,o.Z)(t,"&.".concat(f.focusVisible," .").concat(f.focusHighlight),{opacity:r.palette.action.focusOpacity}),t})),Z=(0,u.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:function(e,t){return t.focusHighlight}})((function(e){var t=e.theme;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:t.transitions.create("opacity",{duration:t.transitions.duration.short})}})),v=a.forwardRef((function(e,t){var r=(0,l.Z)({props:e,name:"MuiCardActionArea"}),o=r.children,a=r.className,u=r.focusVisibleClassName,d=(0,i.Z)(r,x),f=r,h=function(e){var t=e.classes;return(0,c.Z)({root:["root"],focusHighlight:["focusHighlight"]},m,t)}(f);return(0,p.jsxs)(g,(0,n.Z)({className:(0,s.Z)(h.root,a),focusVisibleClassName:(0,s.Z)(u,h.focusVisible),ref:t,ownerState:f},d,{children:[o,(0,p.jsx)(Z,{className:h.focusHighlight,ownerState:f})]}))}))},73428:function(e,t,r){r.d(t,{Z:function(){return x}});var o=r(87462),n=r(63366),i=r(47313),a=r(83061),s=r(50317),c=r(88564),l=r(25469),u=r(82295),d=r(22131);function m(e){return(0,d.Z)("MuiCard",e)}(0,r(655).Z)("MuiCard",["root"]);var f=r(46417),h=["className","raised"],p=(0,c.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),x=i.forwardRef((function(e,t){var r=(0,l.Z)({props:e,name:"MuiCard"}),i=r.className,c=r.raised,u=void 0!==c&&c,d=(0,n.Z)(r,h),x=(0,o.Z)({},r,{raised:u}),g=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},m,t)}(x);return(0,f.jsx)(p,(0,o.Z)({className:(0,a.Z)(g.root,i),elevation:u?8:void 0,ref:t,ownerState:x},d))}))},43265:function(e,t,r){r.d(t,{Z:function(){return g}});var o=r(4942),n=r(63366),i=r(87462),a=r(47313),s=r(83061),c=r(50317),l=r(25469),u=r(88564),d=r(22131);function m(e){return(0,d.Z)("MuiContainer",e)}(0,r(655).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var f=r(91615),h=r(46417),p=["className","component","disableGutters","fixed","maxWidth"],x=(0,u.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["maxWidth".concat((0,f.Z)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}})((function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!r.disableGutters&&(0,o.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,r){var o=t.breakpoints.values[r];return 0!==o&&(e[t.breakpoints.up(r)]={maxWidth:"".concat(o).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,r=e.ownerState;return(0,i.Z)({},"xs"===r.maxWidth&&(0,o.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),r.maxWidth&&"xs"!==r.maxWidth&&(0,o.Z)({},t.breakpoints.up(r.maxWidth),{maxWidth:"".concat(t.breakpoints.values[r.maxWidth]).concat(t.breakpoints.unit)}))})),g=a.forwardRef((function(e,t){var r=(0,l.Z)({props:e,name:"MuiContainer"}),o=r.className,a=r.component,u=void 0===a?"div":a,d=r.disableGutters,g=void 0!==d&&d,Z=r.fixed,v=void 0!==Z&&Z,b=r.maxWidth,C=void 0===b?"lg":b,j=(0,n.Z)(r,p),k=(0,i.Z)({},r,{component:u,disableGutters:g,fixed:v,maxWidth:C}),w=function(e){var t=e.classes,r=e.fixed,o=e.disableGutters,n=e.maxWidth,i={root:["root",n&&"maxWidth".concat((0,f.Z)(String(n))),r&&"fixed",o&&"disableGutters"]};return(0,c.Z)(i,m,t)}(k);return(0,h.jsx)(x,(0,i.Z)({as:u,ownerState:k,className:(0,s.Z)(w.root,o),ref:t},j))}))}}]);