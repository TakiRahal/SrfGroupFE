"use strict";(self.webpackChunksrf_group=self.webpackChunksrf_group||[]).push([[534],{25169:function(e,n,t){var i=t(47313),r=t(57829),o=t(1084),a=t(24631),s=t(56199),c=t(73428),l=t(93405),d=t(24193),u=t(91649),h=t(79429),m=t(28089),x=t(46417),f=m.Ry({content:m.Z_().required("Message is required").min(5,"Min 5 digits").max(2e3,"Max 2000 digits")}),g={content:""},p={createEntity:u.JP};n.Z=(0,o.connect)((function(e){var n=e.reportProbleme,t=e.user;return{loading:n.loadingEntity,entity:n.entity,addSuccess:n.addSuccess,isAuthenticated:t.isAuthenticated,currentUser:t.currentUser}}),p)((function(e){var n=(0,h.TA)({initialValues:g,validationSchema:f,onSubmit:function(n){e.isAuthenticated&&(console.log("values ",n),e.createEntity(n))}});return i.useEffect((function(){e.addSuccess&&n.resetForm()}),[e.addSuccess]),(0,x.jsx)(r.Z,{children:(0,x.jsx)("form",{onSubmit:n.handleSubmit,children:(0,x.jsx)(c.Z,{children:(0,x.jsxs)(l.Z,{children:[(0,x.jsxs)(r.Z,{sx:{display:"flex",alignItems:"flex-end"},children:[(0,x.jsx)(s.Z,{sx:{color:"action.active",mr:1,my:.5}}),(0,x.jsx)(a.Z,{id:"content",name:"content",label:"Declarer votre probleme",variant:"standard",fullWidth:!0,multiline:!0,value:n.values.content,onChange:n.handleChange,error:n.touched.content&&Boolean(n.errors.content),rows:4})]}),n.touched.content&&Boolean(n.errors.content)?(0,x.jsx)(r.Z,{className:"red-color",children:n.errors.content}):null,(0,x.jsx)(r.Z,{sx:{display:"flex",alignItems:"flex-end"},children:(0,x.jsx)(d.Z,{variant:"outlined",size:"small",fullWidth:!0,sx:{mt:2},color:"neutral",type:"submit",children:"Declarer"})})]})})})})}))},68534:function(e,n,t){t.r(n),t.d(n,{Profile:function(){return ce},default:function(){return de}});var i=t(29439),r=t(47313),o=t(1084),a=t(63830),s=t(63183),c=t(43265),l=t(9019),d=t(3404),u=t(28303),h=t(55476),m=t(61113),x=t(50301),f=t(82295),g=t(48119),p=t(14885),Z=t(84488),v=t(24193),j=t(9289),b=t(76937),y=t(57829),C=t(48310),w=t(67216),S=t(83213),k=t(47131),P=t(61750),A=t(79429),M=t(28089),F=M.Ry({content:M.Z_().required("Message is required")}),_=t(12954),R=t(94469),I=t(96467),E=t(97762),W=t(1550),N=t(96019),U=t(49914),L=t(15480),D=t(4117),G=t(32703),O=t(33604),T=t(85281),H=t(16957),z=t(73428),V=t(93405),B=t(56104),X=t(33532),q=t(24511),Q=t(44183),K=t(1413),Y=t(45987),J=t(46417),$=["src","placeholderImg","errorImg"],ee=(0,p.K1)(X.zb.DEFAULT_LAZY_IMAGE_LOADING),ne=(0,p.K1)(X.zb.DEFAULT_LAZY_IMAGE),te=function(e){var n=e.src,t=e.placeholderImg,o=e.errorImg,a=(0,Y.Z)(e,$),s=r.useState(t||ee||n),c=(0,i.Z)(s,2),l=c[0],d=c[1];return r.useEffect((function(){if(n){var e=new Image;e.src=n,e.addEventListener("load",(function(){d(n)})),e.addEventListener("error",(function(){d(o||ne)}))}}),[n,t,o]),(0,J.jsx)("img",(0,K.Z)((0,K.Z)({},a),{},{src:l,className:"img-lazy-loading",alt:"Image SrfGroup"}))};function ie(e){var n=e.listOffers,t=e.loading,i=(0,a.k6)(),r=(0,q.$)().t;return(0,J.jsx)(y.Z,{children:t?(0,J.jsx)(y.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,J.jsx)(T.Z,{color:"inherit"})}):(0,J.jsxs)(c.Z,{sx:{py:4},maxWidth:"lg",children:[(0,J.jsx)("h3",{children:r("profile.title_list_offers_by_user")}),(0,J.jsx)(l.ZP,{container:!0,spacing:4,children:n.map((function(e){return(0,J.jsx)(l.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,J.jsx)(Q.Z,{component:"a",onClick:function(){return n=(null===e||void 0===e?void 0:e.id)||-1,void setTimeout((function(){i.push(h.H.DETAILS_OFFER+"/"+n)}),300);var n},children:(0,J.jsxs)(z.Z,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,J.jsx)(H.Z,{sx:{height:{xs:"100%",sm:200}},children:e.offerImages&&e.offerImages.length?(0,J.jsx)(te,{src:(0,p.Ce)(e.id,e.offerImages[0].path)}):(0,J.jsx)(y.Z,{sx:{height:"100%",display:{xs:"none",md:"block"}},children:(0,J.jsx)(te,{src:(0,p.K1)(X.zb.DEFAULT_LAZY_IMAGE)})})}),(0,J.jsxs)(V.Z,{sx:{flexGrow:1},children:[(0,J.jsx)(m.Z,{gutterBottom:!0,variant:"h5",component:"h2",className:"truncate-text",children:null===e||void 0===e?void 0:e.title}),(0,J.jsx)("div",{className:"truncate-string-two-lines",dangerouslySetInnerHTML:{__html:(null===e||void 0===e?void 0:e.description)||""}})]}),(0,J.jsx)(B.Z,{children:(0,J.jsx)(v.Z,{size:"small",children:"View"})})]})})},e.id)}))})]})})}var re=t(33381),oe=t(11069),ae=t(25169),se={content:""},ce=function(e){var n,t=r.useState(!1),o=(0,i.Z)(t,2),s=o[0],P=o[1],M=r.useState(!1),_=(0,i.Z)(M,2),T=_[0],H=_[1],z=(0,a.UO)().id,V=(0,q.$)().t,B=e.profileLoading,X=e.profile,Q=e.getProfile,K=e.currentUser,Y=e.isAuthenticated,$=e.getPublicEntitiesForUser,ee=e.listOffersForUser,ne=e.loadingEntitiesForUser,te=e.loadingConversation,ce=e.createConversation,le=(0,A.TA)({initialValues:se,validationSchema:F,onSubmit:function(e){K.id!==X.id&&Y&&de(e.content)}}),de=function(e){var n={content:e,conversation:{dateCreated:(0,p.uJ)(new Date),senderUser:null,receiverUser:{id:X.id,email:X.email}}};ce(n),H(!1)};r.useEffect((function(){X&&setTimeout((function(){P(!0)}),100)}),[X]),r.useEffect((function(){z&&(Q(Number(z)),$(1,10,"",Number(z)))}),[z]);var ue=function(){le.setFieldValue("content",""),H(!1)};return(0,J.jsxs)(y.Z,{children:[(0,J.jsxs)(c.Z,{maxWidth:"xl",children:[(0,J.jsx)(l.ZP,{container:!0,style:{paddingTop:10},children:(0,J.jsx)(l.ZP,{item:!0,xs:12,sm:6,children:(0,J.jsxs)(d.Z,{"aria-label":"breadcrumb",children:[(0,J.jsx)(u.rU,{color:"inherit",to:h.H.HOME,children:"SRF"}),(0,J.jsx)(u.rU,{color:"inherit",to:"/getting-started/installation/",children:V("profile.title_page_profile")}),(0,J.jsx)(m.Z,{color:"text.primary",children:(0,p.QD)(X)})]})})}),(0,J.jsxs)(l.ZP,{container:!0,spacing:4,style:{paddingTop:50},children:[(0,J.jsxs)(l.ZP,{item:!0,xs:12,sm:3,sx:{textAlign:"center"},children:[(0,J.jsx)(x.Z,{direction:"left",in:s,children:(0,J.jsx)(y.Z,{children:(0,J.jsxs)(f.Z,{elevation:3,sx:{p:1},children:[(0,J.jsx)(g.Z,{alt:X.imageUrl,src:(0,p.Dm)(X.id,X.imageUrl,null===X||void 0===X?void 0:X.sourceRegister),sx:{width:80,height:80,marginLeft:"auto",marginRight:"auto",marginBottom:2,mt:2,border:"1px solid #b9b9b9"},children:null===(n=(0,p.QD)(X))||void 0===n?void 0:n.charAt(0)}),(0,J.jsx)("h4",{children:B?(0,J.jsx)(Z.Z,{animation:"wave",height:30}):(0,J.jsx)(r.Fragment,{children:(0,p.QD)(X)})}),(0,J.jsx)(j.Z,{sx:{justifyContent:"center"},children:(0,J.jsx)(v.Z,{variant:"outlined",startIcon:(0,J.jsx)(b.Z,{}),color:"neutral",size:"small",onClick:function(){return le.setFieldValue("content",""),void H(!0)},disabled:K.id===X.id||!Y,children:"Send a message"})}),(0,J.jsxs)(m.Z,{component:"h5",color:"text.secondary",display:"flex",sx:{justifyContent:"center",mb:2,textDecoration:"underline",cursor:"pointer"},children:[(0,J.jsx)(oe.Z,{fontSize:"small",sx:{mr:.9}}),"Favorite user"]})]})})}),(0,J.jsx)(y.Z,{sx:{my:3},children:(0,J.jsx)(ae.Z,{})})]}),(0,J.jsx)(l.ZP,{item:!0,xs:12,sm:8,children:(0,J.jsx)(x.Z,{direction:"right",in:s,children:(0,J.jsxs)("div",{children:[(0,J.jsx)(f.Z,{elevation:3,sx:{p:2,mb:3},children:(0,J.jsxs)(y.Z,{sx:{mt:2},children:[(0,J.jsx)("h5",{children:"Personal Details"}),(0,J.jsxs)(C.Z,{sx:{bgcolor:"background.paper"},children:[(0,J.jsxs)(l.ZP,{container:!0,spacing:2,children:[(0,J.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,J.jsx)(w.ZP,{alignItems:"flex-start",children:(0,J.jsx)(S.Z,{primary:"Firstname",secondary:(0,J.jsxs)(r.Fragment,{children:[(0,J.jsx)(m.Z,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary"}),B?(0,J.jsx)(Z.Z,{animation:"wave",height:30}):X.firstName]})})})}),(0,J.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,J.jsx)(w.ZP,{alignItems:"flex-start",children:(0,J.jsx)(S.Z,{primary:"Lastname",secondary:(0,J.jsxs)(r.Fragment,{children:[(0,J.jsx)(m.Z,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary"}),B?(0,J.jsx)(Z.Z,{animation:"wave",height:30}):X.lastName]})})})})]}),(0,J.jsxs)(l.ZP,{container:!0,spacing:2,children:[(0,J.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,J.jsx)(w.ZP,{alignItems:"flex-start",children:(0,J.jsx)(S.Z,{primary:"Email",secondary:(0,J.jsx)(r.Fragment,{children:B?(0,J.jsx)(Z.Z,{animation:"wave",height:30}):X.email})})})}),(0,J.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,J.jsx)(w.ZP,{alignItems:"flex-start",secondaryAction:(0,J.jsx)(k.Z,{edge:"end","aria-label":"phone",children:(0,J.jsx)(b.Z,{})}),children:(0,J.jsx)(S.Z,{primary:"Phone number",secondary:(0,J.jsx)(r.Fragment,{children:B?(0,J.jsx)(Z.Z,{animation:"wave",height:30}):X.phone})})})})]}),(0,J.jsxs)(l.ZP,{container:!0,spacing:2,children:[(0,J.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,J.jsx)(w.ZP,{alignItems:"flex-start",children:(0,J.jsx)(S.Z,{primary:"Adresse",secondary:(0,J.jsx)(r.Fragment,{children:"Sousse"})})})}),(0,J.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,J.jsx)(w.ZP,{alignItems:"flex-start",children:(0,J.jsx)(S.Z,{primary:V("profile.label_link_profile_facebook"),secondary:(0,J.jsx)(r.Fragment,{children:(0,J.jsx)("a",{href:X.linkProfileFacebook||"",target:"_blank",children:"Facebook"})})})})})]})]})]})}),(0,J.jsx)(ie,{listOffers:ee,loading:ne})]})})})]})]}),(0,J.jsx)(r.Fragment,{children:(0,J.jsx)(R.Z,{open:T,TransitionComponent:re.P,keepMounted:!0,onClose:ue,"aria-describedby":"alert-dialog-slide-description",children:(0,J.jsxs)("form",{onSubmit:le.handleSubmit,children:[(0,J.jsx)(O.Z,{children:V("profile.title_send_message")}),(0,J.jsxs)(I.Z,{children:[(0,J.jsx)(E.Z,{id:"alert-dialog-slide-description",children:(0,p.QD)(K)}),(0,J.jsxs)(W.Z,{fullWidth:!0,sx:{mt:3,minWidth:{sx:"auto",md:400}},error:le.touched.content&&Boolean(le.errors.content),children:[(0,J.jsx)(N.Z,{htmlFor:"outlined-adornment-amount",children:V("profile.write_your_message")}),(0,J.jsx)(U.Z,{id:"content",name:"content",label:V("profile.write_your_message"),value:le.values.content,onChange:le.handleChange,size:"small",multiline:!0,maxRows:4,rows:4}),(0,J.jsx)(L.Z,{id:"component-helper-text",children:le.touched.content&&le.errors.content})]})]}),(0,J.jsxs)(D.Z,{children:[(0,J.jsx)(v.Z,{onClick:ue,color:"neutral",children:V("common.label_cancel")}),(0,J.jsx)(G.Z,{loading:te,type:"submit",color:"success",children:V("common.label_send")})]})]})})})]})},le={getProfile:s.Ai,getPublicEntitiesForUser:P.US,createConversation:_.Xw},de=(0,o.connect)((function(e){var n=e.user,t=e.offer,i=e.conversation;return{profileLoading:n.profileLoading,profile:n.profileEntity,isAuthenticated:n.isAuthenticated,currentUser:n.currentUser,listOffersForUser:t.entitiesForUser,loadingEntitiesForUser:t.loadingEntitiesForUser,loadingConversation:i.loadingEntity,entityConversation:i.entity,updateSuccessConversation:i.addSuccess}}),le)(ce)},33381:function(e,n,t){t.d(n,{P:function(){return s}});var i=t(1413),r=t(47313),o=t(50301),a=t(46417),s=r.forwardRef((function(e,n){return(0,a.jsx)(o.Z,(0,i.Z)({direction:"up",ref:n},e))}))},44183:function(e,n,t){t.d(n,{Z:function(){return v}});var i=t(4942),r=t(87462),o=t(63366),a=t(47313),s=t(83061),c=t(50317),l=t(25469),d=t(88564),u=t(22131);function h(e){return(0,u.Z)("MuiCardActionArea",e)}var m=(0,t(655).Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),x=t(38743),f=t(46417),g=["children","className","focusVisibleClassName"],p=(0,d.ZP)(x.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){var n,t=e.theme;return n={display:"block",textAlign:"inherit",width:"100%"},(0,i.Z)(n,"&:hover .".concat(m.focusHighlight),{opacity:t.palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}}),(0,i.Z)(n,"&.".concat(m.focusVisible," .").concat(m.focusHighlight),{opacity:t.palette.action.focusOpacity}),n})),Z=(0,d.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:function(e,n){return n.focusHighlight}})((function(e){var n=e.theme;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:n.transitions.create("opacity",{duration:n.transitions.duration.short})}})),v=a.forwardRef((function(e,n){var t=(0,l.Z)({props:e,name:"MuiCardActionArea"}),i=t.children,a=t.className,d=t.focusVisibleClassName,u=(0,o.Z)(t,g),m=t,x=function(e){var n=e.classes;return(0,c.Z)({root:["root"],focusHighlight:["focusHighlight"]},h,n)}(m);return(0,f.jsxs)(p,(0,r.Z)({className:(0,s.Z)(x.root,a),focusVisibleClassName:(0,s.Z)(d,x.focusVisible),ref:n,ownerState:m},u,{children:[i,(0,f.jsx)(Z,{className:x.focusHighlight,ownerState:m})]}))}))},16957:function(e,n,t){t.d(n,{Z:function(){return p}});var i=t(63366),r=t(87462),o=t(47313),a=t(83061),s=t(50317),c=t(25469),l=t(88564),d=t(22131);function u(e){return(0,d.Z)("MuiCardMedia",e)}(0,t(655).Z)("MuiCardMedia",["root","media","img"]);var h=t(46417),m=["children","className","component","image","src","style"],x=(0,l.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState,i=t.isMediaComponent,r=t.isImageComponent;return[n.root,i&&n.media,r&&n.img]}})((function(e){var n=e.ownerState;return(0,r.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},n.isMediaComponent&&{width:"100%"},n.isImageComponent&&{objectFit:"cover"})})),f=["video","audio","picture","iframe","img"],g=["picture","img"],p=o.forwardRef((function(e,n){var t=(0,c.Z)({props:e,name:"MuiCardMedia"}),o=t.children,l=t.className,d=t.component,p=void 0===d?"div":d,Z=t.image,v=t.src,j=t.style,b=(0,i.Z)(t,m),y=-1!==f.indexOf(p),C=!y&&Z?(0,r.Z)({backgroundImage:'url("'.concat(Z,'")')},j):j,w=(0,r.Z)({},t,{component:p,isMediaComponent:y,isImageComponent:-1!==g.indexOf(p)}),S=function(e){var n=e.classes,t={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return(0,s.Z)(t,u,n)}(w);return(0,h.jsx)(x,(0,r.Z)({className:(0,a.Z)(S.root,l),as:p,role:!y&&Z?"img":void 0,ref:n,style:C,ownerState:w,src:y?Z||v:void 0},b,{children:o}))}))},43265:function(e,n,t){t.d(n,{Z:function(){return p}});var i=t(4942),r=t(63366),o=t(87462),a=t(47313),s=t(83061),c=t(50317),l=t(25469),d=t(88564),u=t(22131);function h(e){return(0,u.Z)("MuiContainer",e)}(0,t(655).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var m=t(91615),x=t(46417),f=["className","component","disableGutters","fixed","maxWidth"],g=(0,d.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["maxWidth".concat((0,m.Z)(String(t.maxWidth)))],t.fixed&&n.fixed,t.disableGutters&&n.disableGutters]}})((function(e){var n=e.theme,t=e.ownerState;return(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&(0,i.Z)({paddingLeft:n.spacing(2),paddingRight:n.spacing(2)},n.breakpoints.up("sm"),{paddingLeft:n.spacing(3),paddingRight:n.spacing(3)}))}),(function(e){var n=e.theme;return e.ownerState.fixed&&Object.keys(n.breakpoints.values).reduce((function(e,t){var i=n.breakpoints.values[t];return 0!==i&&(e[n.breakpoints.up(t)]={maxWidth:"".concat(i).concat(n.breakpoints.unit)}),e}),{})}),(function(e){var n=e.theme,t=e.ownerState;return(0,o.Z)({},"xs"===t.maxWidth&&(0,i.Z)({},n.breakpoints.up("xs"),{maxWidth:Math.max(n.breakpoints.values.xs,444)}),t.maxWidth&&"xs"!==t.maxWidth&&(0,i.Z)({},n.breakpoints.up(t.maxWidth),{maxWidth:"".concat(n.breakpoints.values[t.maxWidth]).concat(n.breakpoints.unit)}))})),p=a.forwardRef((function(e,n){var t=(0,l.Z)({props:e,name:"MuiContainer"}),i=t.className,a=t.component,d=void 0===a?"div":a,u=t.disableGutters,p=void 0!==u&&u,Z=t.fixed,v=void 0!==Z&&Z,j=t.maxWidth,b=void 0===j?"lg":j,y=(0,r.Z)(t,f),C=(0,o.Z)({},t,{component:d,disableGutters:p,fixed:v,maxWidth:b}),w=function(e){var n=e.classes,t=e.fixed,i=e.disableGutters,r=e.maxWidth,o={root:["root",r&&"maxWidth".concat((0,m.Z)(String(r))),t&&"fixed",i&&"disableGutters"]};return(0,c.Z)(o,h,n)}(C);return(0,x.jsx)(g,(0,o.Z)({as:d,ownerState:C,className:(0,s.Z)(w.root,i),ref:n},y))}))},84488:function(e,n,t){t.d(n,{Z:function(){return F}});var i=t(30168),r=t(63366),o=t(87462),a=t(47313),s=t(83061),c=t(30686),l=t(50317);function d(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function u(e){return parseFloat(e)}var h=t(17551),m=t(88564),x=t(25469),f=t(22131);function g(e){return(0,f.Z)("MuiSkeleton",e)}(0,t(655).Z)("MuiSkeleton",["root","text","rectangular","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var p,Z,v,j,b,y,C,w,S=t(46417),k=["animation","className","component","height","style","variant","width"],P=(0,c.F4)(b||(b=p||(p=(0,i.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),A=(0,c.F4)(y||(y=Z||(Z=(0,i.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),M=(0,m.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],!1!==t.animation&&n[t.animation],t.hasChildren&&n.withChildren,t.hasChildren&&!t.width&&n.fitContent,t.hasChildren&&!t.height&&n.heightAuto]}})((function(e){var n=e.theme,t=e.ownerState,i=d(n.shape.borderRadius)||"px",r=u(n.shape.borderRadius);return(0,o.Z)({display:"block",backgroundColor:(0,h.Fq)(n.palette.text.primary,"light"===n.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(r).concat(i,"/").concat(Math.round(r/.6*10)/10).concat(i),"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})}),(function(e){return"pulse"===e.ownerState.animation&&(0,c.iv)(C||(C=v||(v=(0,i.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),P)}),(function(e){var n=e.ownerState,t=e.theme;return"wave"===n.animation&&(0,c.iv)(w||(w=j||(j=(0,i.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(90deg, transparent, ",", transparent);\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),A,t.palette.action.hover)})),F=a.forwardRef((function(e,n){var t=(0,x.Z)({props:e,name:"MuiSkeleton"}),i=t.animation,a=void 0===i?"pulse":i,c=t.className,d=t.component,u=void 0===d?"span":d,h=t.height,m=t.style,f=t.variant,p=void 0===f?"text":f,Z=t.width,v=(0,r.Z)(t,k),j=(0,o.Z)({},t,{animation:a,component:u,variant:p,hasChildren:Boolean(v.children)}),b=function(e){var n=e.classes,t=e.variant,i=e.animation,r=e.hasChildren,o=e.width,a=e.height,s={root:["root",t,i,r&&"withChildren",r&&!o&&"fitContent",r&&!a&&"heightAuto"]};return(0,l.Z)(s,g,n)}(j);return(0,S.jsx)(M,(0,o.Z)({as:u,ref:n,className:(0,s.Z)(b.root,c),ownerState:j},v,{style:(0,o.Z)({width:Z,height:h},m)}))}))}}]);