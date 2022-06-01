"use strict";(self.webpackChunksrf_group=self.webpackChunksrf_group||[]).push([[725],{41872:function(e,o,r){r.d(o,{Z:function(){return b}});var t=r(87462),n=r(63366),a=r(47313),i=r(83061),s=r(17478),d=r(25363),c=r(82858),u=r(18521);function l(e){return(0,u.Z)("MuiAccordionDetails",e)}(0,r(3973).Z)("MuiAccordionDetails",["root"]);var p=r(46417),f=["className"],m=(0,d.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,o){return o.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),b=a.forwardRef((function(e,o){var r=(0,c.Z)({props:e,name:"MuiAccordionDetails"}),a=r.className,d=(0,n.Z)(r,f),u=r,b=function(e){var o=e.classes;return(0,s.Z)({root:["root"]},l,o)}(u);return(0,p.jsx)(m,(0,t.Z)({className:(0,i.Z)(b.root,a),ref:o,ownerState:u},d))}))},98492:function(e,o,r){r.d(o,{Z:function(){return R}});var t=r(4942),n=r(63366),a=r(87462),i=r(47313),s=r(83061),d=r(17478),c=r(25363),u=r(82858),l=r(38743),p=r(23417),f=r(18521);function m(e){return(0,f.Z)("MuiAccordionSummary",e)}var b=(0,r(3973).Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),Z=r(46417),g=["children","className","expandIcon","focusVisibleClassName","onClick"],v=(0,c.ZP)(l.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(e,o){return o.root}})((function(e){var o,r=e.theme,n=e.ownerState,i={duration:r.transitions.duration.shortest};return(0,a.Z)((o={display:"flex",minHeight:48,padding:r.spacing(0,2),transition:r.transitions.create(["min-height","background-color"],i)},(0,t.Z)(o,"&.".concat(b.focusVisible),{backgroundColor:r.palette.action.focus}),(0,t.Z)(o,"&.".concat(b.disabled),{opacity:r.palette.action.disabledOpacity}),(0,t.Z)(o,"&:hover:not(.".concat(b.disabled,")"),{cursor:"pointer"}),o),!n.disableGutters&&(0,t.Z)({},"&.".concat(b.expanded),{minHeight:64}))})),x=(0,c.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(e,o){return o.content}})((function(e){var o=e.theme,r=e.ownerState;return(0,a.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!r.disableGutters&&(0,t.Z)({transition:o.transitions.create(["margin"],{duration:o.transitions.duration.shortest})},"&.".concat(b.expanded),{margin:"20px 0"}))})),h=(0,c.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(e,o){return o.expandIconWrapper}})((function(e){var o=e.theme;return(0,t.Z)({display:"flex",color:o.palette.action.active,transform:"rotate(0deg)",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest})},"&.".concat(b.expanded),{transform:"rotate(180deg)"})})),R=i.forwardRef((function(e,o){var r=(0,u.Z)({props:e,name:"MuiAccordionSummary"}),t=r.children,c=r.className,l=r.expandIcon,f=r.focusVisibleClassName,b=r.onClick,R=(0,n.Z)(r,g),y=i.useContext(p.Z),C=y.disabled,A=void 0!==C&&C,w=y.disableGutters,G=y.expanded,M=y.toggle,N=(0,a.Z)({},r,{expanded:G,disabled:A,disableGutters:w}),S=function(e){var o=e.classes,r=e.expanded,t=e.disabled,n=e.disableGutters,a={root:["root",r&&"expanded",t&&"disabled",!n&&"gutters"],focusVisible:["focusVisible"],content:["content",r&&"expanded",!n&&"contentGutters"],expandIconWrapper:["expandIconWrapper",r&&"expanded"]};return(0,d.Z)(a,m,o)}(N);return(0,Z.jsxs)(v,(0,a.Z)({focusRipple:!1,disableRipple:!0,disabled:A,component:"div","aria-expanded":G,className:(0,s.Z)(S.root,c),focusVisibleClassName:(0,s.Z)(S.focusVisible,f),onClick:function(e){M&&M(e),b&&b(e)},ref:o,ownerState:N},R,{children:[(0,Z.jsx)(x,{className:S.content,ownerState:N,children:t}),l&&(0,Z.jsx)(h,{className:S.expandIconWrapper,ownerState:N,children:l})]}))}))},99956:function(e,o,r){r.d(o,{Z:function(){return G}});var t=r(83878),n=r(59199),a=r(40181),i=r(25267);var s=r(29439),d=r(4942),c=r(63366),u=r(87462),l=r(47313),p=(r(20478),r(83061)),f=r(17478),m=r(25363),b=r(82858),Z=r(65033),g=r(82295),v=r(23417),x=r(53800),h=r(18521);function R(e){return(0,h.Z)("MuiAccordion",e)}var y=(0,r(3973).Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),C=r(46417),A=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],w=(0,m.ZP)(g.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:function(e,o){var r=e.ownerState;return[(0,d.Z)({},"& .".concat(y.region),o.region),o.root,!r.square&&o.rounded,!r.disableGutters&&o.gutters]}})((function(e){var o,r=e.theme,t={duration:r.transitions.duration.shortest};return o={position:"relative",transition:r.transitions.create(["margin"],t),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:r.palette.divider,transition:r.transitions.create(["opacity","background-color"],t)},"&:first-of-type":{"&:before":{display:"none"}}},(0,d.Z)(o,"&.".concat(y.expanded),{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}}),(0,d.Z)(o,"&.".concat(y.disabled),{backgroundColor:r.palette.action.disabledBackground}),o}),(function(e){var o=e.theme,r=e.ownerState;return(0,u.Z)({},!r.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:o.shape.borderRadius,borderTopRightRadius:o.shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:o.shape.borderRadius,borderBottomRightRadius:o.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!r.disableGutters&&(0,d.Z)({},"&.".concat(y.expanded),{margin:"16px 0"}))})),G=l.forwardRef((function(e,o){var r,d=(0,b.Z)({props:e,name:"MuiAccordion"}),m=d.children,g=d.className,h=d.defaultExpanded,y=void 0!==h&&h,G=d.disabled,M=void 0!==G&&G,N=d.disableGutters,S=void 0!==N&&N,k=d.expanded,j=d.onChange,I=d.square,P=void 0!==I&&I,V=d.TransitionComponent,q=void 0===V?Z.Z:V,T=d.TransitionProps,B=(0,c.Z)(d,A),W=(0,x.Z)({controlled:k,default:y,name:"Accordion",state:"expanded"}),D=(0,s.Z)(W,2),E=D[0],L=D[1],H=l.useCallback((function(e){L(!E),j&&j(e,!E)}),[E,j,L]),_=l.Children.toArray(m),O=(r=_,(0,t.Z)(r)||(0,n.Z)(r)||(0,a.Z)(r)||(0,i.Z)()),z=O[0],F=O.slice(1),J=l.useMemo((function(){return{expanded:E,disabled:M,disableGutters:S,toggle:H}}),[E,M,S,H]),K=(0,u.Z)({},d,{square:P,disabled:M,disableGutters:S,expanded:E}),Q=function(e){var o=e.classes,r={root:["root",!e.square&&"rounded",e.expanded&&"expanded",e.disabled&&"disabled",!e.disableGutters&&"gutters"],region:["region"]};return(0,f.Z)(r,R,o)}(K);return(0,C.jsxs)(w,(0,u.Z)({className:(0,p.Z)(Q.root,g),ref:o,ownerState:K,square:P},B,{children:[(0,C.jsx)(v.Z.Provider,{value:J,children:z}),(0,C.jsx)(q,(0,u.Z)({in:E,timeout:"auto"},T,{children:(0,C.jsx)("div",{"aria-labelledby":z.props.id,id:z.props["aria-controls"],role:"region",className:Q.region,children:F})}))]}))}))},23417:function(e,o,r){var t=r(47313).createContext({});o.Z=t}}]);