"use strict";(self.webpackChunksrf_group=self.webpackChunksrf_group||[]).push([[268],{30268:function(e,n,t){t.r(n),t.d(n,{Profile:function(){return ee},default:function(){return te}});var r=t(29439),i=t(47313),a=t(1084),o=t(63830),s=t(63183),l=t(43265),c=t(9019),d=t(3404),u=t(28303),m=t(55476),h=t(61113),x=t(50301),f=t(82295),p=t(48119),g=t(14885),Z=t(84488),v=t(24193),j=t(9289),b=t(76937),y=t(57829),w=t(48310),C=t(67216),k=t(83213),S=t(47131),P=t(61750),M=t(79429),R=t(28089),F=R.Ry({content:R.Z_().required("Message is required")}),I=t(12954),N=t(94469),W=t(96467),_=t(97762),A=t(1550),U=t(23306),L=t(49914),E=t(15480),B=t(4117),O=t(32703),z=t(33604),G=t(85281),T=t(16957),D=t(73428),X=t(93405),V=t(56104),q=t(33532),H=t(77607),Q=t(46417);function K(e){var n=e.listOffers,t=e.loading;return(0,Q.jsx)(y.Z,{children:t?(0,Q.jsx)(y.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,Q.jsx)(G.Z,{color:"inherit"})}):(0,Q.jsxs)(l.Z,{sx:{py:4},maxWidth:"lg",className:"pl-0 pr-0",children:[(0,Q.jsx)("h3",{children:"List of offers by user"}),(0,Q.jsx)(c.ZP,{container:!0,spacing:4,children:n.map((function(e){return(0,Q.jsx)(c.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,Q.jsxs)(D.Z,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,Q.jsx)(T.Z,{sx:{height:150},children:e.offerImages&&e.offerImages.length?(0,Q.jsx)(H.w,{className:"img-fluid",src:(0,g.Ce)(e.id,e.offerImages[0].path),alt:e.offerImages[0].path}):(0,Q.jsx)(y.Z,{sx:{display:{xs:"none",md:"block"}},children:(0,Q.jsx)(H.w,{className:"img-fluid",src:(0,g.K1)(q.zb.DEFAULT_LAZY_IMAGE),alt:"Offer"})})}),(0,Q.jsxs)(X.Z,{sx:{flexGrow:1},children:[(0,Q.jsx)(h.Z,{gutterBottom:!0,variant:"h5",component:"h2",className:"truncate-text",children:null===e||void 0===e?void 0:e.title}),(0,Q.jsx)("div",{className:"truncate-text",dangerouslySetInnerHTML:{__html:(null===e||void 0===e?void 0:e.description)||""}})]}),(0,Q.jsx)(V.Z,{children:(0,Q.jsx)(v.Z,{size:"small",children:"View"})})]})},e.id)}))})]})})}var Y=t(33381),J=t(24511),$={content:""},ee=function(e){var n,t=i.useState(!1),a=(0,r.Z)(t,2),s=a[0],P=a[1],R=i.useState(!1),I=(0,r.Z)(R,2),G=I[0],T=I[1],D=(0,o.UO)().id,X=(0,J.$)().t,V=e.profileLoading,q=e.profile,H=e.getProfile,ee=e.currentUser,ne=e.isAuthenticated,te=e.getPublicEntitiesForUser,re=e.listOffersForUser,ie=e.loadingEntitiesForUser,ae=e.loadingConversation,oe=e.createConversation,se=(0,M.TA)({initialValues:$,validationSchema:F,onSubmit:function(e){ee.id!==q.id&&ne&&le(e.content)}}),le=function(e){var n={content:e,conversation:{dateCreated:(0,g.uJ)(new Date),senderUser:null,receiverUser:{id:q.id,email:q.email}}};oe(n),T(!1)};i.useEffect((function(){q&&setTimeout((function(){P(!0)}),100)}),[q]),i.useEffect((function(){D&&(H(Number(D)),te(1,10,"",Number(D)))}),[D]);var ce=function(){se.setFieldValue("content",""),T(!1)};return(0,Q.jsxs)(y.Z,{children:[(0,Q.jsxs)(l.Z,{maxWidth:"xl",children:[(0,Q.jsx)(c.ZP,{container:!0,style:{paddingTop:10},children:(0,Q.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,Q.jsxs)(d.Z,{"aria-label":"breadcrumb",children:[(0,Q.jsx)(u.rU,{color:"inherit",to:m.H.HOME,children:"SRF"}),(0,Q.jsx)(u.rU,{color:"inherit",to:"/getting-started/installation/",children:X("profile.title_page_profile")}),(0,Q.jsx)(h.Z,{color:"text.primary",children:(0,g.QD)(q)})]})})}),(0,Q.jsxs)(c.ZP,{container:!0,spacing:4,style:{paddingTop:50},children:[(0,Q.jsx)(c.ZP,{item:!0,xs:12,sm:3,sx:{textAlign:"center"},children:(0,Q.jsx)(x.Z,{direction:"left",in:s,children:(0,Q.jsx)("div",{children:(0,Q.jsxs)(f.Z,{elevation:3,sx:{p:1},children:[(0,Q.jsx)(p.Z,{alt:q.imageUrl,src:(0,g.Dm)(q.id,q.imageUrl,null===q||void 0===q?void 0:q.sourceRegister),sx:{width:80,height:80,marginLeft:"auto",marginRight:"auto",marginBottom:2,mt:2,border:"1px solid #b9b9b9"},children:null===(n=(0,g.QD)(q))||void 0===n?void 0:n.charAt(0)}),(0,Q.jsx)("h4",{children:V?(0,Q.jsx)(Z.Z,{animation:"wave",height:30}):(0,Q.jsx)(i.Fragment,{children:(0,g.QD)(q)})}),(0,Q.jsx)("p",{children:V?(0,Q.jsx)(Z.Z,{animation:"wave",height:30}):q.email}),(0,Q.jsx)(j.Z,{sx:{justifyContent:"center"},children:(0,Q.jsx)(v.Z,{variant:"outlined",startIcon:(0,Q.jsx)(b.Z,{}),color:"neutral",size:"small",onClick:function(){return se.setFieldValue("content",""),void T(!0)},disabled:ee.id===q.id||!ne,children:"Send a message"})})]})})})}),(0,Q.jsx)(c.ZP,{item:!0,xs:12,sm:8,children:(0,Q.jsx)(x.Z,{direction:"right",in:s,children:(0,Q.jsxs)("div",{children:[(0,Q.jsx)(f.Z,{elevation:3,sx:{p:2,mb:3},children:(0,Q.jsxs)(y.Z,{sx:{mt:2},children:[(0,Q.jsx)("h5",{children:"Personal Details"}),(0,Q.jsxs)(w.Z,{sx:{bgcolor:"background.paper"},children:[(0,Q.jsxs)(c.ZP,{container:!0,spacing:2,children:[(0,Q.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,Q.jsx)(C.ZP,{alignItems:"flex-start",children:(0,Q.jsx)(k.Z,{primary:"Firstname",secondary:(0,Q.jsxs)(i.Fragment,{children:[(0,Q.jsx)(h.Z,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary"}),V?(0,Q.jsx)(Z.Z,{animation:"wave",height:30}):q.firstName]})})})}),(0,Q.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,Q.jsx)(C.ZP,{alignItems:"flex-start",children:(0,Q.jsx)(k.Z,{primary:"Lastname",secondary:(0,Q.jsxs)(i.Fragment,{children:[(0,Q.jsx)(h.Z,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary"}),V?(0,Q.jsx)(Z.Z,{animation:"wave",height:30}):q.lastName]})})})})]}),(0,Q.jsxs)(c.ZP,{container:!0,spacing:2,children:[(0,Q.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,Q.jsx)(C.ZP,{alignItems:"flex-start",children:(0,Q.jsx)(k.Z,{primary:"Email",secondary:(0,Q.jsx)(i.Fragment,{children:V?(0,Q.jsx)(Z.Z,{animation:"wave",height:30}):q.email})})})}),(0,Q.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,Q.jsx)(C.ZP,{alignItems:"flex-start",secondaryAction:(0,Q.jsx)(S.Z,{edge:"end","aria-label":"phone",children:(0,Q.jsx)(b.Z,{})}),children:(0,Q.jsx)(k.Z,{primary:"Phone number",secondary:(0,Q.jsx)(i.Fragment,{children:V?(0,Q.jsx)(Z.Z,{animation:"wave",height:30}):q.phone})})})})]}),(0,Q.jsxs)(c.ZP,{container:!0,spacing:2,children:[(0,Q.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,Q.jsx)(C.ZP,{alignItems:"flex-start",children:(0,Q.jsx)(k.Z,{primary:"Adresse",secondary:(0,Q.jsx)(i.Fragment,{children:"Sousse"})})})}),(0,Q.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,Q.jsx)(C.ZP,{alignItems:"flex-start",children:(0,Q.jsx)(k.Z,{primary:X("profile.label_link_profile_facebook"),secondary:(0,Q.jsx)(i.Fragment,{children:(0,Q.jsx)("a",{href:q.linkProfileFacebook||"",target:"_blank",children:"Facebook"})})})})})]})]})]})}),(0,Q.jsx)(K,{listOffers:re,loading:ie})]})})})]})]}),(0,Q.jsx)(i.Fragment,{children:(0,Q.jsx)(N.Z,{open:G,TransitionComponent:Y.P,keepMounted:!0,onClose:ce,"aria-describedby":"alert-dialog-slide-description",children:(0,Q.jsxs)("form",{onSubmit:se.handleSubmit,children:[(0,Q.jsx)(z.Z,{children:X("profile.title_send_message")}),(0,Q.jsxs)(W.Z,{children:[(0,Q.jsx)(_.Z,{id:"alert-dialog-slide-description",children:(0,g.QD)(ee)}),(0,Q.jsxs)(A.Z,{fullWidth:!0,sx:{mt:3,minWidth:{sx:"auto",md:400}},error:se.touched.content&&Boolean(se.errors.content),children:[(0,Q.jsx)(U.Z,{htmlFor:"outlined-adornment-amount",children:X("profile.write_your_message")}),(0,Q.jsx)(L.Z,{id:"content",name:"content",label:X("profile.write_your_message"),value:se.values.content,onChange:se.handleChange,size:"small",multiline:!0,maxRows:4,rows:4}),(0,Q.jsx)(E.Z,{id:"component-helper-text",children:se.touched.content&&se.errors.content})]})]}),(0,Q.jsxs)(B.Z,{children:[(0,Q.jsx)(v.Z,{onClick:ce,color:"neutral",children:X("common.label_cancel")}),(0,Q.jsx)(O.Z,{loading:ae,type:"submit",color:"success",children:X("common.label_send")})]})]})})})]})},ne={getProfile:s.Ai,getPublicEntitiesForUser:P.US,createConversation:I.Xw},te=(0,a.connect)((function(e){var n=e.user,t=e.offer,r=e.conversation;return{profileLoading:n.profileLoading,profile:n.profileEntity,isAuthenticated:n.isAuthenticated,currentUser:n.currentUser,listOffersForUser:t.entitiesForUser,loadingEntitiesForUser:t.loadingEntitiesForUser,loadingConversation:r.loadingEntity,entityConversation:r.entity,updateSuccessConversation:r.addSuccess}}),ne)(ee)},77607:function(e,n,t){t.d(n,{w:function(){return h}});var r,i=t(29439),a=t(30168),o=t(47313),s=t(49814),l=t(33532),c=t(14885),d=t(46417),u=(0,c.K1)(l.zb.DEFAULT_LAZY_IMAGE),m=s.ZP.img(r||(r=(0,a.Z)(["\n  // display: block;\n  height: 100%;\n  width: 100%;\n  // Add a smooth animation on loading\n  @keyframes loaded {\n    0% {\n      opacity: 0.1;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  // I use utilitary classes instead of props to avoid style regenerating\n  &.loaded:not(.has-error) {\n    animation: loaded 300ms ease-in-out;\n  }\n  &.has-error {\n    // fallback to placeholder image on error\n    content: url(",");\n  }\n"])),u),h=function(e){var n=e.src,t=e.alt,r=e.className,a=o.useState(u),s=(0,i.Z)(a,2),l=s[0],c=s[1],h=o.useState(null),x=(0,i.Z)(h,2),f=x[0],p=x[1];return o.useEffect((function(){var e,t=!1;return f&&l!==n&&(IntersectionObserver?(e=new IntersectionObserver((function(r){r.forEach((function(r){!t&&(r.intersectionRatio>0||r.isIntersecting)&&(c(n),e.unobserve(f))}))}),{threshold:.01,rootMargin:"75%"})).observe(f):c(n)),function(){t=!0,e&&e.unobserve&&e.unobserve(f)}}),[n,l,f]),(0,d.jsx)(m,{className:r,ref:p,src:l,alt:t,onLoad:function(e){e.target.classList.add("loaded")},onError:function(e){e.target.classList.add("has-error")}})}},33381:function(e,n,t){t.d(n,{P:function(){return s}});var r=t(1413),i=t(47313),a=t(50301),o=t(46417),s=i.forwardRef((function(e,n){return(0,o.jsx)(a.Z,(0,r.Z)({direction:"up",ref:n},e))}))},76937:function(e,n,t){var r=t(95318);n.Z=void 0;var i=r(t(45045)),a=t(46417),o=(0,i.default)((0,a.jsx)("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"}),"Phone");n.Z=o},3404:function(e,n,t){t.d(n,{Z:function(){return F}});var r=t(93433),i=t(29439),a=t(4942),o=t(87462),s=t(63366),l=t(47313),c=(t(20478),t(83061)),d=t(50317),u=t(88564),m=t(25469),h=t(61113),x=t(17551),f=t(81171),p=t(46417),g=(0,f.Z)((0,p.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),Z=t(38743),v=(0,u.ZP)(Z.Z)((function(e){var n=e.theme;return(0,o.Z)({display:"flex",marginLeft:"calc(".concat(n.spacing(1)," * 0.5)"),marginRight:"calc(".concat(n.spacing(1)," * 0.5)")},"light"===n.palette.mode?{backgroundColor:n.palette.grey[100],color:n.palette.grey[700]}:{backgroundColor:n.palette.grey[700],color:n.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,o.Z)({},"light"===n.palette.mode?{backgroundColor:n.palette.grey[200]}:{backgroundColor:n.palette.grey[600]}),"&:active":(0,o.Z)({boxShadow:n.shadows[0]},"light"===n.palette.mode?{backgroundColor:(0,x._4)(n.palette.grey[200],.12)}:{backgroundColor:(0,x._4)(n.palette.grey[600],.12)})})})),j=(0,u.ZP)(g)({width:24,height:16});var b=function(e){var n=e;return(0,p.jsx)("li",{children:(0,p.jsx)(v,(0,o.Z)({focusRipple:!0},e,{ownerState:n,children:(0,p.jsx)(j,{ownerState:n})}))})},y=t(22131);function w(e){return(0,y.Z)("MuiBreadcrumbs",e)}var C=(0,t(655).Z)("MuiBreadcrumbs",["root","ol","li","separator"]),k=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],S=(0,u.ZP)(h.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,n){return[(0,a.Z)({},"& .".concat(C.li),n.li),n.root]}})({}),P=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,n){return n.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),M=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,n){return n.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function R(e,n,t,r){return e.reduce((function(i,a,o){return o<e.length-1?i=i.concat(a,(0,p.jsx)(M,{"aria-hidden":!0,className:n,ownerState:r,children:t},"separator-".concat(o))):i.push(a),i}),[])}var F=l.forwardRef((function(e,n){var t=(0,m.Z)({props:e,name:"MuiBreadcrumbs"}),a=t.children,u=t.className,h=t.component,x=void 0===h?"nav":h,f=t.expandText,g=void 0===f?"Show path":f,Z=t.itemsAfterCollapse,v=void 0===Z?1:Z,j=t.itemsBeforeCollapse,y=void 0===j?1:j,C=t.maxItems,M=void 0===C?8:C,F=t.separator,I=void 0===F?"/":F,N=(0,s.Z)(t,k),W=l.useState(!1),_=(0,i.Z)(W,2),A=_[0],U=_[1],L=(0,o.Z)({},t,{component:x,expanded:A,expandText:g,itemsAfterCollapse:v,itemsBeforeCollapse:y,maxItems:M,separator:I}),E=function(e){var n=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},w,n)}(L),B=l.useRef(null),O=l.Children.toArray(a).filter((function(e){return l.isValidElement(e)})).map((function(e,n){return(0,p.jsx)("li",{className:E.li,children:e},"child-".concat(n))}));return(0,p.jsx)(S,(0,o.Z)({ref:n,component:x,color:"text.secondary",className:(0,c.Z)(E.root,u),ownerState:L},N,{children:(0,p.jsx)(P,{className:E.ol,ref:B,ownerState:L,children:R(A||M&&O.length<=M?O:function(e){return y+v>=e.length?e:[].concat((0,r.Z)(e.slice(0,y)),[(0,p.jsx)(b,{"aria-label":g,onClick:function(){U(!0);var e=B.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,r.Z)(e.slice(e.length-v,e.length)))}(O),E.separator,I,L)})}))}))},16957:function(e,n,t){t.d(n,{Z:function(){return g}});var r=t(63366),i=t(87462),a=t(47313),o=t(83061),s=t(50317),l=t(25469),c=t(88564),d=t(22131);function u(e){return(0,d.Z)("MuiCardMedia",e)}(0,t(655).Z)("MuiCardMedia",["root","media","img"]);var m=t(46417),h=["children","className","component","image","src","style"],x=(0,c.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState,r=t.isMediaComponent,i=t.isImageComponent;return[n.root,r&&n.media,i&&n.img]}})((function(e){var n=e.ownerState;return(0,i.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},n.isMediaComponent&&{width:"100%"},n.isImageComponent&&{objectFit:"cover"})})),f=["video","audio","picture","iframe","img"],p=["picture","img"],g=a.forwardRef((function(e,n){var t=(0,l.Z)({props:e,name:"MuiCardMedia"}),a=t.children,c=t.className,d=t.component,g=void 0===d?"div":d,Z=t.image,v=t.src,j=t.style,b=(0,r.Z)(t,h),y=-1!==f.indexOf(g),w=!y&&Z?(0,i.Z)({backgroundImage:'url("'.concat(Z,'")')},j):j,C=(0,i.Z)({},t,{component:g,isMediaComponent:y,isImageComponent:-1!==p.indexOf(g)}),k=function(e){var n=e.classes,t={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,s.Z)(t,u,n)}(C);return(0,m.jsx)(x,(0,i.Z)({className:(0,o.Z)(k.root,c),as:g,role:!y&&Z?"img":void 0,ref:n,style:w,ownerState:C,src:y?Z||v:void 0},b,{children:a}))}))},43265:function(e,n,t){t.d(n,{Z:function(){return g}});var r=t(4942),i=t(63366),a=t(87462),o=t(47313),s=t(83061),l=t(50317),c=t(25469),d=t(88564),u=t(22131);function m(e){return(0,u.Z)("MuiContainer",e)}(0,t(655).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var h=t(91615),x=t(46417),f=["className","component","disableGutters","fixed","maxWidth"],p=(0,d.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["maxWidth".concat((0,h.Z)(String(t.maxWidth)))],t.fixed&&n.fixed,t.disableGutters&&n.disableGutters]}})((function(e){var n=e.theme,t=e.ownerState;return(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&(0,r.Z)({paddingLeft:n.spacing(2),paddingRight:n.spacing(2)},n.breakpoints.up("sm"),{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}))}),(function(e){var n=e.theme;return e.ownerState.fixed&&Object.keys(n.breakpoints.values).reduce((function(e,t){var r=n.breakpoints.values[t];return 0!==r&&(e[n.breakpoints.up(t)]={maxWidth:"".concat(r).concat(n.breakpoints.unit)}),e}),{})}),(function(e){var n=e.theme,t=e.ownerState;return(0,a.Z)({},"xs"===t.maxWidth&&(0,r.Z)({},n.breakpoints.up("xs"),{maxWidth:Math.max(n.breakpoints.values.xs,444)}),t.maxWidth&&"xs"!==t.maxWidth&&(0,r.Z)({},n.breakpoints.up(t.maxWidth),{maxWidth:"".concat(n.breakpoints.values[t.maxWidth]).concat(n.breakpoints.unit)}))})),g=o.forwardRef((function(e,n){var t=(0,c.Z)({props:e,name:"MuiContainer"}),r=t.className,o=t.component,d=void 0===o?"div":o,u=t.disableGutters,g=void 0!==u&&u,Z=t.fixed,v=void 0!==Z&&Z,j=t.maxWidth,b=void 0===j?"lg":j,y=(0,i.Z)(t,f),w=(0,a.Z)({},t,{component:d,disableGutters:g,fixed:v,maxWidth:b}),C=function(e){var n=e.classes,t=e.fixed,r=e.disableGutters,i=e.maxWidth,a={root:["root",i&&"maxWidth".concat((0,h.Z)(String(i))),t&&"fixed",r&&"disableGutters"]};return(0,l.Z)(a,m,n)}(w);return(0,x.jsx)(p,(0,a.Z)({as:d,ownerState:w,className:(0,s.Z)(C.root,r),ref:n},y))}))},84488:function(e,n,t){t.d(n,{Z:function(){return F}});var r=t(30168),i=t(63366),a=t(87462),o=t(47313),s=t(83061),l=t(30686),c=t(50317);function d(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function u(e){return parseFloat(e)}var m=t(17551),h=t(88564),x=t(25469),f=t(22131);function p(e){return(0,f.Z)("MuiSkeleton",e)}(0,t(655).Z)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var g,Z,v,j,b,y,w,C,k=t(46417),S=["animation","className","component","height","style","variant","width"],P=(0,l.F4)(b||(b=g||(g=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),M=(0,l.F4)(y||(y=Z||(Z=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),R=(0,h.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],!1!==t.animation&&n[t.animation],t.hasChildren&&n.withChildren,t.hasChildren&&!t.width&&n.fitContent,t.hasChildren&&!t.height&&n.heightAuto]}})((function(e){var n=e.theme,t=e.ownerState,r=d(n.shape.borderRadius)||"px",i=u(n.shape.borderRadius);return(0,a.Z)({display:"block",backgroundColor:(0,m.Fq)(n.palette.text.primary,"light"===n.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(i).concat(r,"/").concat(Math.round(i/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})}),(function(e){return"pulse"===e.ownerState.animation&&(0,l.iv)(w||(w=v||(v=(0,r.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),P)}),(function(e){var n=e.ownerState,t=e.theme;return"wave"===n.animation&&(0,l.iv)(C||(C=j||(j=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(90deg, transparent, ",", transparent);\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),M,t.palette.action.hover)})),F=o.forwardRef((function(e,n){var t=(0,x.Z)({props:e,name:"MuiSkeleton"}),r=t.animation,o=void 0===r?"pulse":r,l=t.className,d=t.component,u=void 0===d?"span":d,m=t.height,h=t.style,f=t.variant,g=void 0===f?"text":f,Z=t.width,v=(0,i.Z)(t,S),j=(0,a.Z)({},t,{animation:o,component:u,variant:g,hasChildren:Boolean(v.children)}),b=function(e){var n=e.classes,t=e.variant,r=e.animation,i=e.hasChildren,a=e.width,o=e.height,s={root:["root",t,r,i&&"withChildren",i&&!a&&"fitContent",i&&!o&&"heightAuto"]};return(0,c.Z)(s,p,n)}(j);return(0,k.jsx)(R,(0,a.Z)({as:u,ref:n,className:(0,s.Z)(b.root,l),ownerState:j},v,{style:(0,a.Z)({width:Z,height:m},h)}))}))}}]);