"use strict";(self.webpackChunksrf_group=self.webpackChunksrf_group||[]).push([[417],{31417:function(t,n,e){e.r(n),e.d(n,{AboutUs:function(){return g}});var i=e(29439),r=e(47313),a=e(43265),o=e(9019),s=e(3404),d=e(61113),u=e(29466),c=e(92349),x=e(15723),l=e(55476),h=e(85281),f=e(10437),m=e(99881),p=e(96351),b=e(46417),g=function(t){var n=t.aboutUsEntity,e=t.loadingEntity,c=t.getEntitiyAboutUs,x=r.useState("fr"),g=(0,i.Z)(x,2),Z=g[0],v=g[1];r.useEffect((function(){p.Z.on("languageChanged",(function(t){v(t)})),c()}),[]),r.useEffect((function(){n&&W()}),[n]);var W=function(){return"en"===Z?n.contentEn||"":"fr"===Z?n.contentFr||"":n.contentAr||""};return(0,b.jsxs)(a.Z,{maxWidth:"xl",children:[(0,b.jsx)(o.ZP,{container:!0,style:{paddingTop:10},children:(0,b.jsx)(o.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsxs)(s.Z,{"aria-label":"breadcrumb",children:[(0,b.jsx)(u.rU,{color:"inherit",to:l.H.HOME,children:"SRF"}),(0,b.jsx)(d.Z,{color:"text.primary",children:"AboutUs"})]})})}),(0,b.jsxs)(o.ZP,{container:!0,style:{paddingTop:50},children:[e?(0,b.jsx)(o.ZP,{item:!0,xs:12,children:(0,b.jsx)(f.Z,{sx:{paddingTop:10,textAlign:"center"},children:(0,b.jsx)(h.Z,{color:"inherit"})})}):null,"loadingEntity = ",e.toString(),(0,b.jsx)(o.ZP,{item:!0,xs:12,children:n&&n.contentEn?(0,b.jsx)(f.Z,{dangerouslySetInnerHTML:{__html:W()}}):(0,b.jsx)(m.Z,{severity:"warning",children:"No About Us found"})})]})]})},Z={getEntitiyAboutUs:x.Hv};n.default=(0,c.connect)((function(t){var n=t.aboutUs;return{loadingEntity:n.loadingEntity,aboutUsEntity:n.entity}}),Z)(g)},43265:function(t,n,e){e.d(n,{Z:function(){return b}});var i=e(4942),r=e(63366),a=e(87462),o=e(47313),s=e(83061),d=e(17478),u=e(82858),c=e(25363),x=e(18521);function l(t){return(0,x.Z)("MuiContainer",t)}(0,e(3973).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var h=e(91615),f=e(46417),m=["className","component","disableGutters","fixed","maxWidth"],p=(0,c.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(t,n){var e=t.ownerState;return[n.root,n["maxWidth".concat((0,h.Z)(String(e.maxWidth)))],e.fixed&&n.fixed,e.disableGutters&&n.disableGutters]}})((function(t){var n=t.theme,e=t.ownerState;return(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!e.disableGutters&&(0,i.Z)({paddingLeft:n.spacing(2),paddingRight:n.spacing(2)},n.breakpoints.up("sm"),{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}))}),(function(t){var n=t.theme;return t.ownerState.fixed&&Object.keys(n.breakpoints.values).reduce((function(t,e){var i=n.breakpoints.values[e];return 0!==i&&(t[n.breakpoints.up(e)]={maxWidth:"".concat(i).concat(n.breakpoints.unit)}),t}),{})}),(function(t){var n=t.theme,e=t.ownerState;return(0,a.Z)({},"xs"===e.maxWidth&&(0,i.Z)({},n.breakpoints.up("xs"),{maxWidth:Math.max(n.breakpoints.values.xs,444)}),e.maxWidth&&"xs"!==e.maxWidth&&(0,i.Z)({},n.breakpoints.up(e.maxWidth),{maxWidth:"".concat(n.breakpoints.values[e.maxWidth]).concat(n.breakpoints.unit)}))})),b=o.forwardRef((function(t,n){var e=(0,u.Z)({props:t,name:"MuiContainer"}),i=e.className,o=e.component,c=void 0===o?"div":o,x=e.disableGutters,b=void 0!==x&&x,g=e.fixed,Z=void 0!==g&&g,v=e.maxWidth,W=void 0===v?"lg":v,k=(0,r.Z)(e,m),y=(0,a.Z)({},e,{component:c,disableGutters:b,fixed:Z,maxWidth:W}),j=function(t){var n=t.classes,e=t.fixed,i=t.disableGutters,r=t.maxWidth,a={root:["root",r&&"maxWidth".concat((0,h.Z)(String(r))),e&&"fixed",i&&"disableGutters"]};return(0,d.Z)(a,l,n)}(y);return(0,f.jsx)(p,(0,a.Z)({as:c,ownerState:y,className:(0,s.Z)(j.root,i),ref:n},k))}))}}]);