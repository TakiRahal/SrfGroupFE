"use strict";(self.webpackChunksrf_group=self.webpackChunksrf_group||[]).push([[382],{67382:function(t,e,i){i.r(e),i.d(e,{Notification:function(){return O},default:function(){return P}});var n=i(29439),a=i(47313),o=i(1084),r=i(43265),s=i(55476),c=i(9019),l=i(3404),d=i(28303),u=i(63830),f=i(61113),m=i(48310),x=i(67216),h=i(83213),p=i(32600),g=i(19536),v=i(84488),Z=i(46417);function b(){return(0,Z.jsxs)(m.Z,{sx:{bgcolor:"background.paper"},children:[(0,Z.jsxs)(x.ZP,{button:!0,children:[(0,Z.jsx)(p.Z,{children:(0,Z.jsx)(v.Z,{variant:"circular",width:40,height:40})}),(0,Z.jsx)(h.Z,{primary:(0,Z.jsx)(v.Z,{variant:"text",height:40}),secondary:(0,Z.jsx)(v.Z,{variant:"text",height:20})})]}),(0,Z.jsx)(g.Z,{variant:"inset",component:"li"}),(0,Z.jsxs)(x.ZP,{button:!0,children:[(0,Z.jsx)(p.Z,{children:(0,Z.jsx)(v.Z,{variant:"circular",width:40,height:40})}),(0,Z.jsx)(h.Z,{primary:(0,Z.jsx)(v.Z,{variant:"text",height:40}),secondary:(0,Z.jsx)(v.Z,{variant:"text",height:20})})]})]})}var N,j=i(48119),C=i(15726),R=i(93142),S=i(24511),I=i(76600);!function(t){t.ADMIN_NOTIFICATION="AdminNotification",t.OFFER_NOTIfICATION="OfferNotification",t.COMMENT_OFFER_NOTIFICATION="CommentOfferNotification"}(N||(N={}));var k=i(33532),y=i(76657),M=i.n(y),w=i(63183),O=function(t){var e=a.useState(-1),i=(0,n.Z)(e,2),o=i[0],v=i[1],R=[],y=(0,S.$)().t,w=(0,u.k6)();a.useEffect((function(){t.resetNotification(),v(0)}),[]),a.useEffect((function(){console.log("activePage ",o),o>=0&&t.getEntitiesNotification(o,k.z.NOTIFICATIONS_PER_PAGE,"")}),[o]),a.useEffect((function(){if(t.listNotifications&&t.listNotifications.length>0){for(var e=0;e<t.listNotifications.length;e++)t.listNotifications[e].isRead||R.push({id:t.listNotifications[e].id});R.length>0&&t.setIsReadNotifications(R)}}),[t.listNotifications]),a.useEffect((function(){t.addSuccessIsRead&&t.resetNbeNotificationsNotRead()}),[t.addSuccessIsRead]);return(0,Z.jsxs)(r.Z,{children:[(0,Z.jsx)(c.ZP,{container:!0,style:{paddingTop:10},children:(0,Z.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,Z.jsxs)(l.Z,{"aria-label":"breadcrumb",children:[(0,Z.jsx)(d.rU,{color:"inherit",to:s.H.HOME,children:"SRF"}),(0,Z.jsx)(f.Z,{color:"text.primary",children:y("notification.title_page")})]})})}),(0,Z.jsxs)(c.ZP,{container:!0,spacing:6,style:{paddingTop:50},children:[(0,Z.jsx)(c.ZP,{item:!0,xs:12,sm:6,md:3}),(0,Z.jsx)(c.ZP,{item:!0,xs:12,sm:6,md:6,className:"my-container",children:(0,Z.jsx)(M(),{pageStart:o,loadMore:function(){console.log("loadMore"),v(o+1)},hasMore:t.totalPages-1>o&&!t.loadingNotificationss,loader:(0,Z.jsx)("div",{className:"loader"},0),threshold:0,initialLoad:!1,children:(0,Z.jsxs)(m.Z,{children:[t.listNotifications.map((function(t,e){return(0,Z.jsxs)(a.Fragment,{children:[(0,Z.jsxs)(x.ZP,{button:!0,sx:{bgcolor:t.isRead?"":"background.paper"},onClick:function(){return function(t){t.module===N.COMMENT_OFFER_NOTIFICATION&&setTimeout((function(){var e;w.push(s.H.DETAILS_OFFER+"/"+(null===t||void 0===t||null===(e=t.offer)||void 0===e?void 0:e.id))}),300)}(t)},children:[(0,Z.jsx)(p.Z,{children:(0,Z.jsx)(j.Z,{children:(0,Z.jsx)(C.Z,{})})}),(0,Z.jsx)(h.Z,{primary:(0,Z.jsx)(I.p,{convertDate:t.dateCreated}),secondary:t.content})]}),(0,Z.jsx)(g.Z,{variant:"inset",component:"li"})]},"notification-".concat(t.id,"-").concat(e))})),t.loadingNotificationss?(0,Z.jsx)(b,{}):null]})})})]})]})},W={getEntitiesNotification:R.uc,setIsReadNotifications:R.H5,resetNbeNotificationsNotRead:w.Bk,resetNotification:R.mc},P=(0,o.connect)((function(t){var e=t.notification;return{loadingNotificationss:e.loadingEntities,listNotifications:e.entities,totalItems:e.totalItems,totalPages:e.totalPages,addSuccessIsRead:e.addSuccessIsRead}}),W)(O)},76600:function(t,e,i){i.d(e,{p:function(){return o}});i(47313);var n=i(18466),a=i(46417),o=function(t,e){return t&&t.convertDate?(0,a.jsx)(n.Z,{date:new Date(t.convertDate),locale:"fr-FR"}):(0,a.jsx)(a.Fragment,{})}},15726:function(t,e,i){var n=i(95318);e.Z=void 0;var a=n(i(45045)),o=i(46417),r=(0,a.default)((0,o.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16.5c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5zm5-2.5H7v-1l1-1v-2.61C8 9.27 9.03 7.47 11 7v-.5c0-.57.43-1 1-1s1 .43 1 1V7c1.97.47 3 2.28 3 4.39V14l1 1v1z"}),"CircleNotifications");e.Z=r},3404:function(t,e,i){i.d(e,{Z:function(){return w}});var n=i(93433),a=i(29439),o=i(4942),r=i(87462),s=i(63366),c=i(47313),l=(i(20478),i(83061)),d=i(50317),u=i(88564),f=i(25469),m=i(61113),x=i(17551),h=i(81171),p=i(46417),g=(0,h.Z)((0,p.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),v=i(38743),Z=(0,u.ZP)(v.Z)((function(t){var e=t.theme;return(0,r.Z)({display:"flex",marginLeft:"calc(".concat(e.spacing(1)," * 0.5)"),marginRight:"calc(".concat(e.spacing(1)," * 0.5)")},"light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,r.Z)({},"light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":(0,r.Z)({boxShadow:e.shadows[0]},"light"===e.palette.mode?{backgroundColor:(0,x._4)(e.palette.grey[200],.12)}:{backgroundColor:(0,x._4)(e.palette.grey[600],.12)})})})),b=(0,u.ZP)(g)({width:24,height:16});var N=function(t){var e=t;return(0,p.jsx)("li",{children:(0,p.jsx)(Z,(0,r.Z)({focusRipple:!0},t,{ownerState:e,children:(0,p.jsx)(b,{ownerState:e})}))})},j=i(22131);function C(t){return(0,j.Z)("MuiBreadcrumbs",t)}var R=(0,i(655).Z)("MuiBreadcrumbs",["root","ol","li","separator"]),S=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],I=(0,u.ZP)(m.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(t,e){return[(0,o.Z)({},"& .".concat(R.li),e.li),e.root]}})({}),k=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(t,e){return e.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),y=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(t,e){return e.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function M(t,e,i,n){return t.reduce((function(a,o,r){return r<t.length-1?a=a.concat(o,(0,p.jsx)(y,{"aria-hidden":!0,className:e,ownerState:n,children:i},"separator-".concat(r))):a.push(o),a}),[])}var w=c.forwardRef((function(t,e){var i=(0,f.Z)({props:t,name:"MuiBreadcrumbs"}),o=i.children,u=i.className,m=i.component,x=void 0===m?"nav":m,h=i.expandText,g=void 0===h?"Show path":h,v=i.itemsAfterCollapse,Z=void 0===v?1:v,b=i.itemsBeforeCollapse,j=void 0===b?1:b,R=i.maxItems,y=void 0===R?8:R,w=i.separator,O=void 0===w?"/":w,W=(0,s.Z)(i,S),P=c.useState(!1),T=(0,a.Z)(P,2),E=T[0],F=T[1],_=(0,r.Z)({},i,{component:x,expanded:E,expandText:g,itemsAfterCollapse:Z,itemsBeforeCollapse:j,maxItems:y,separator:O}),A=function(t){var e=t.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},C,e)}(_),B=c.useRef(null),G=c.Children.toArray(o).filter((function(t){return c.isValidElement(t)})).map((function(t,e){return(0,p.jsx)("li",{className:A.li,children:t},"child-".concat(e))}));return(0,p.jsx)(I,(0,r.Z)({ref:e,component:x,color:"text.secondary",className:(0,l.Z)(A.root,u),ownerState:_},W,{children:(0,p.jsx)(k,{className:A.ol,ref:B,ownerState:_,children:M(E||y&&G.length<=y?G:function(t){return j+Z>=t.length?t:[].concat((0,n.Z)(t.slice(0,j)),[(0,p.jsx)(N,{"aria-label":g,onClick:function(){F(!0);var t=B.current.querySelector("a[href],button,[tabindex]");t&&t.focus()}},"ellipsis")],(0,n.Z)(t.slice(t.length-Z,t.length)))}(G),A.separator,O,_)})}))}))},43265:function(t,e,i){i.d(e,{Z:function(){return g}});var n=i(4942),a=i(63366),o=i(87462),r=i(47313),s=i(83061),c=i(50317),l=i(25469),d=i(88564),u=i(22131);function f(t){return(0,u.Z)("MuiContainer",t)}(0,i(655).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var m=i(91615),x=i(46417),h=["className","component","disableGutters","fixed","maxWidth"],p=(0,d.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(t,e){var i=t.ownerState;return[e.root,e["maxWidth".concat((0,m.Z)(String(i.maxWidth)))],i.fixed&&e.fixed,i.disableGutters&&e.disableGutters]}})((function(t){var e=t.theme,i=t.ownerState;return(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!i.disableGutters&&(0,n.Z)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}))}),(function(t){var e=t.theme;return t.ownerState.fixed&&Object.keys(e.breakpoints.values).reduce((function(t,i){var n=e.breakpoints.values[i];return 0!==n&&(t[e.breakpoints.up(i)]={maxWidth:"".concat(n).concat(e.breakpoints.unit)}),t}),{})}),(function(t){var e=t.theme,i=t.ownerState;return(0,o.Z)({},"xs"===i.maxWidth&&(0,n.Z)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),i.maxWidth&&"xs"!==i.maxWidth&&(0,n.Z)({},e.breakpoints.up(i.maxWidth),{maxWidth:"".concat(e.breakpoints.values[i.maxWidth]).concat(e.breakpoints.unit)}))})),g=r.forwardRef((function(t,e){var i=(0,l.Z)({props:t,name:"MuiContainer"}),n=i.className,r=i.component,d=void 0===r?"div":r,u=i.disableGutters,g=void 0!==u&&u,v=i.fixed,Z=void 0!==v&&v,b=i.maxWidth,N=void 0===b?"lg":b,j=(0,a.Z)(i,h),C=(0,o.Z)({},i,{component:d,disableGutters:g,fixed:Z,maxWidth:N}),R=function(t){var e=t.classes,i=t.fixed,n=t.disableGutters,a=t.maxWidth,o={root:["root",a&&"maxWidth".concat((0,m.Z)(String(a))),i&&"fixed",n&&"disableGutters"]};return(0,c.Z)(o,f,e)}(C);return(0,x.jsx)(p,(0,o.Z)({as:d,ownerState:C,className:(0,s.Z)(R.root,n),ref:e},j))}))}}]);