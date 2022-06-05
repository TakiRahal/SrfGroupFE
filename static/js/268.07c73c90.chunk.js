"use strict";(self.webpackChunksrf_group=self.webpackChunksrf_group||[]).push([[268],{25169:function(e,n,t){var r=t(47313),i=t(10437),s=t(92349),o=t(24631),a=t(56199),c=t(73428),l=t(93405),d=t(24193),u=t(91649),h=t(79429),m=t(28089),x=t(46417),f=m.Ry({content:m.Z_().required("Message is required").min(5,"Min 5 digits").max(2e3,"Max 2000 digits")}),g={content:""},p={createEntity:u.JP};n.Z=(0,s.connect)((function(e){var n=e.reportProbleme,t=e.user;return{loading:n.loadingEntity,entity:n.entity,addSuccess:n.addSuccess,isAuthenticated:t.isAuthenticated,currentUser:t.currentUser}}),p)((function(e){var n=(0,h.TA)({initialValues:g,validationSchema:f,onSubmit:function(n){e.isAuthenticated&&e.createEntity(n)}});return r.useEffect((function(){e.addSuccess&&n.resetForm()}),[e.addSuccess]),(0,x.jsx)(i.Z,{children:(0,x.jsx)("form",{onSubmit:n.handleSubmit,children:(0,x.jsx)(c.Z,{children:(0,x.jsxs)(l.Z,{children:[(0,x.jsxs)(i.Z,{sx:{display:"flex",alignItems:"flex-end"},children:[(0,x.jsx)(a.Z,{sx:{color:"action.active",mr:1,my:.5}}),(0,x.jsx)(o.Z,{id:"content",name:"content",label:"Declarer votre probleme",variant:"standard",fullWidth:!0,multiline:!0,value:n.values.content,onChange:n.handleChange,error:n.touched.content&&Boolean(n.errors.content),rows:4})]}),n.touched.content&&Boolean(n.errors.content)?(0,x.jsx)(i.Z,{className:"red-color",children:n.errors.content}):null,(0,x.jsx)(i.Z,{sx:{display:"flex",alignItems:"flex-end"},children:(0,x.jsx)(d.Z,{variant:"outlined",size:"small",fullWidth:!0,sx:{mt:2},color:"neutral",type:"submit",children:"Declarer"})})]})})})})}))},30268:function(e,n,t){t.r(n),t.d(n,{Profile:function(){return ie},default:function(){return oe}});var r=t(29439),i=t(47313),s=t(92349),o=t(97890),a=t(63183),c=t(43265),l=t(9019),d=t(3404),u=t(29466),h=t(55476),m=t(61113),x=t(50301),f=t(82295),g=t(48119),p=t(14885),j=t(84488),Z=t(24193),v=t(9289),y=t(76937),b=t(10437),S=t(48310),P=t(67216),L=t(83213),C=t(47131),E=t(61750),A=t(79429),w=t(28089),F=w.Ry({content:w.Z_().required("Message is required")}),_=t(12954),k=t(94469),U=t(96467),D=t(97762),I=t(1550),N=t(96019),z=t(49914),T=t(15480),M=t(4117),B=t(32703),V=t(33604),O=t(1413),R=t(85281),W=t(16957),Y=t(73428),G=t(93405),q=t(56104),H=t(33532),Q=t(24511),K=t(44183),J=t(15554),$=t(46417);function X(e){var n=e.listOffers,t=e.loading,r=(0,o.s0)(),i=(0,Q.$)().t;return(0,$.jsx)(b.Z,{children:t?(0,$.jsx)(b.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,$.jsx)(R.Z,{color:"inherit"})}):(0,$.jsxs)(c.Z,{sx:{py:4},maxWidth:"lg",children:[(0,$.jsx)("h3",{children:i("profile.title_list_offers_by_user")}),(0,$.jsx)(l.ZP,{container:!0,spacing:4,children:n.map((function(e){return(0,$.jsx)(l.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,$.jsx)(K.Z,{component:"a",onClick:function(){return n=(null===e||void 0===e?void 0:e.id)||-1,void setTimeout((function(){r(h.H.DETAILS_OFFER+"/"+n)}),300);var n},children:(0,$.jsxs)(Y.Z,{sx:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,$.jsx)(W.Z,{sx:{height:{xs:"100%",sm:200}},children:e.offerImages&&e.offerImages.length?(0,$.jsx)(J.wY,{src:(0,p.Ce)(e.id,e.offerImages[0].path),alt:"Buildings with tiled exteriors, lit by the sunset.",actual:function(e){var n=e.imageProps;return(0,$.jsx)("img",(0,O.Z)((0,O.Z)({},n),{},{className:"img-lazy-loading"}))},placeholder:function(e){var n=e.ref;return(0,$.jsx)("div",{ref:n})},loading:function(){return(0,$.jsx)("div",{children:(0,$.jsx)("img",{src:(0,p.K1)(H.z.DEFAULT_LAZY_IMAGE_LOADING),className:"img-lazy-loading"})})},error:function(){return(0,$.jsx)("img",{src:(0,p.K1)(H.z.DEFAULT_LAZY_IMAGE),className:"img-lazy-loading"})}}):(0,$.jsx)(b.Z,{sx:{height:"100%",display:{xs:"none",md:"block"}},children:(0,$.jsx)("img",{src:(0,p.K1)(H.z.DEFAULT_LAZY_IMAGE),className:"img-lazy-loading"})})}),(0,$.jsxs)(G.Z,{sx:{flexGrow:1},children:[(0,$.jsx)(m.Z,{gutterBottom:!0,variant:"h5",component:"h2",className:"truncate-text",children:null===e||void 0===e?void 0:e.title}),(0,$.jsx)("div",{className:"truncate-string-two-lines",dangerouslySetInnerHTML:{__html:(null===e||void 0===e?void 0:e.description)||""}})]}),(0,$.jsx)(q.Z,{children:(0,$.jsx)(Z.Z,{size:"small",children:"View"})})]})})},e.id)}))})]})})}var ee=t(33381),ne=t(11069),te=t(25169),re={content:""},ie=function(e){var n,t=i.useState(!1),s=(0,r.Z)(t,2),a=s[0],E=s[1],w=i.useState(!1),_=(0,r.Z)(w,2),O=_[0],R=_[1],W=(0,o.UO)().id,Y=(0,Q.$)().t,G=e.profileLoading,q=e.profile,H=e.getProfile,K=e.currentUser,J=e.isAuthenticated,ie=e.getPublicEntitiesForUser,se=e.listOffersForUser,oe=e.loadingEntitiesForUser,ae=e.loadingConversation,ce=e.createConversation,le=(0,A.TA)({initialValues:re,validationSchema:F,onSubmit:function(e){K.id!==q.id&&J&&de(e.content)}}),de=function(n){var t={content:n,conversation:{dateCreated:(0,p.uJ)(new Date),senderUser:null,receiverUser:{id:q.id,email:q.email}}};ce(t),R(!1),e.reset()};i.useEffect((function(){q&&setTimeout((function(){E(!0)}),100)}),[q]),i.useEffect((function(){W&&(H(Number(W)),ie(1,10,"",Number(W)))}),[W]);var ue=function(){le.setFieldValue("content",""),R(!1)};return(0,$.jsxs)(b.Z,{children:[(0,$.jsxs)(c.Z,{maxWidth:"xl",children:[(0,$.jsx)(l.ZP,{container:!0,style:{paddingTop:10},children:(0,$.jsx)(l.ZP,{item:!0,xs:12,sm:6,children:(0,$.jsxs)(d.Z,{"aria-label":"breadcrumb",children:[(0,$.jsx)(u.rU,{color:"inherit",to:h.H.HOME,children:"SRF"}),(0,$.jsx)(u.rU,{color:"inherit",to:"/getting-started/installation/",children:Y("profile.title_page_profile")}),(0,$.jsx)(m.Z,{color:"text.primary",children:(0,p.QD)(q)})]})})}),(0,$.jsxs)(l.ZP,{container:!0,spacing:4,style:{paddingTop:50},children:[(0,$.jsxs)(l.ZP,{item:!0,xs:12,sm:3,sx:{textAlign:"center"},children:[(0,$.jsx)(x.Z,{direction:"left",in:a,children:(0,$.jsx)(b.Z,{children:(0,$.jsxs)(f.Z,{elevation:3,sx:{p:1},children:[(0,$.jsx)(g.Z,{alt:q.imageUrl,src:(0,p.Dm)(q.id,q.imageUrl,null===q||void 0===q?void 0:q.sourceRegister),sx:{width:80,height:80,marginLeft:"auto",marginRight:"auto",marginBottom:2,mt:2,border:"1px solid #b9b9b9"},children:null===(n=(0,p.QD)(q))||void 0===n?void 0:n.charAt(0)}),(0,$.jsx)("h4",{children:G?(0,$.jsx)(j.Z,{animation:"wave",height:30}):(0,$.jsx)(i.Fragment,{children:(0,p.QD)(q)})}),(0,$.jsx)(v.Z,{sx:{justifyContent:"center"},children:(0,$.jsx)(Z.Z,{variant:"outlined",startIcon:(0,$.jsx)(y.Z,{}),color:"neutral",size:"small",onClick:function(){return le.setFieldValue("content",""),void R(!0)},disabled:K.id===q.id||!J,children:"Send a message"})}),(0,$.jsxs)(m.Z,{component:"h5",color:"text.secondary",display:"flex",sx:{justifyContent:"center",mb:2,textDecoration:"underline",cursor:"pointer"},children:[(0,$.jsx)(ne.Z,{fontSize:"small",sx:{mr:.9}}),"Favorite user"]})]})})}),(0,$.jsx)(b.Z,{sx:{my:3},children:(0,$.jsx)(te.Z,{})})]}),(0,$.jsx)(l.ZP,{item:!0,xs:12,sm:8,children:(0,$.jsx)(x.Z,{direction:"right",in:a,children:(0,$.jsxs)("div",{children:[(0,$.jsx)(f.Z,{elevation:3,sx:{p:2,mb:3},children:(0,$.jsxs)(b.Z,{sx:{mt:2},children:[(0,$.jsx)("h5",{children:"Personal Details"}),(0,$.jsxs)(S.Z,{sx:{bgcolor:"background.paper"},children:[(0,$.jsxs)(l.ZP,{container:!0,spacing:2,children:[(0,$.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,$.jsx)(P.ZP,{alignItems:"flex-start",children:(0,$.jsx)(L.Z,{primary:"Firstname",secondary:(0,$.jsxs)(i.Fragment,{children:[(0,$.jsx)(m.Z,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary"}),G?(0,$.jsx)(j.Z,{animation:"wave",height:30}):q.firstName]})})})}),(0,$.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,$.jsx)(P.ZP,{alignItems:"flex-start",children:(0,$.jsx)(L.Z,{primary:"Lastname",secondary:(0,$.jsxs)(i.Fragment,{children:[(0,$.jsx)(m.Z,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary"}),G?(0,$.jsx)(j.Z,{animation:"wave",height:30}):q.lastName]})})})})]}),(0,$.jsxs)(l.ZP,{container:!0,spacing:2,children:[(0,$.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,$.jsx)(P.ZP,{alignItems:"flex-start",children:(0,$.jsx)(L.Z,{primary:"Email",secondary:(0,$.jsx)(i.Fragment,{children:G?(0,$.jsx)(j.Z,{animation:"wave",height:30}):q.email})})})}),(0,$.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,$.jsx)(P.ZP,{alignItems:"flex-start",secondaryAction:(0,$.jsx)(C.Z,{edge:"end","aria-label":"phone",children:(0,$.jsx)(y.Z,{})}),children:(0,$.jsx)(L.Z,{primary:"Phone number",secondary:(0,$.jsx)(i.Fragment,{children:G?(0,$.jsx)(j.Z,{animation:"wave",height:30}):q.phone})})})})]}),(0,$.jsxs)(l.ZP,{container:!0,spacing:2,children:[(0,$.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,$.jsx)(P.ZP,{alignItems:"flex-start",children:(0,$.jsx)(L.Z,{primary:"Adresse",secondary:(0,$.jsx)(i.Fragment,{children:"Sousse"})})})}),(0,$.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,$.jsx)(P.ZP,{alignItems:"flex-start",children:(0,$.jsx)(L.Z,{primary:Y("profile.label_link_profile_facebook"),secondary:(0,$.jsx)(i.Fragment,{children:(0,$.jsx)("a",{href:q.linkProfileFacebook||"",target:"_blank",children:"Facebook"})})})})})]})]})]})}),(0,$.jsx)(X,{listOffers:se,loading:oe})]})})})]})]}),(0,$.jsx)(i.Fragment,{children:(0,$.jsx)(k.Z,{open:O,TransitionComponent:ee.P,keepMounted:!0,onClose:ue,"aria-describedby":"alert-dialog-slide-description",children:(0,$.jsxs)("form",{onSubmit:le.handleSubmit,children:[(0,$.jsx)(V.Z,{children:Y("profile.title_send_message")}),(0,$.jsxs)(U.Z,{children:[(0,$.jsx)(D.Z,{id:"alert-dialog-slide-description",children:(0,p.QD)(K)}),(0,$.jsxs)(I.Z,{fullWidth:!0,sx:{mt:3,minWidth:{sx:"auto",md:400}},error:le.touched.content&&Boolean(le.errors.content),children:[(0,$.jsx)(N.Z,{htmlFor:"outlined-adornment-amount",children:Y("profile.write_your_message")}),(0,$.jsx)(z.Z,{id:"content",name:"content",label:Y("profile.write_your_message"),value:le.values.content,onChange:le.handleChange,size:"small",multiline:!0,maxRows:4,rows:4}),(0,$.jsx)(T.Z,{id:"component-helper-text",children:le.touched.content&&le.errors.content})]})]}),(0,$.jsxs)(M.Z,{children:[(0,$.jsx)(Z.Z,{onClick:ue,color:"neutral",children:Y("common.label_cancel")}),(0,$.jsx)(B.Z,{loading:ae,type:"submit",color:"success",children:Y("common.label_send")})]})]})})})]})},se={getProfile:a.Ai,getPublicEntitiesForUser:E.US,createConversation:_.Xw,reset:_.mc},oe=(0,s.connect)((function(e){var n=e.user,t=e.offer,r=e.conversation;return{profileLoading:n.profileLoading,profile:n.profileEntity,isAuthenticated:n.isAuthenticated,currentUser:n.currentUser,listOffersForUser:t.entitiesForUser,loadingEntitiesForUser:t.loadingEntitiesForUser,loadingConversation:r.loadingEntity,entityConversation:r.entity,updateSuccessConversation:r.addSuccess}}),se)(ie)},15554:function(e,n,t){t.d(n,{wY:function(){return L}});var r,i=t(1413),s=t(45987),o=t(47313),a=t(15671),c=t(43144),l=t(97326),d=t(60136),u=t(29388),h=t(3201),m=t(31697),x=t(46417),f=["children","loadEagerly","observerProps","experimentalDecode","debounceDurationMs","debugActions"];!function(e){e.NotAsked="NotAsked",e.Loading="Loading",e.LoadSuccess="LoadSuccess",e.LoadError="LoadError"}(r||(r={}));var g=(0,m.unionize)({NotAsked:{},Buffering:{},Loading:{},LoadSuccess:{},LoadError:(0,m.ofType)()}),p=(0,m.unionize)({ViewChanged:(0,m.ofType)(),BufferingEnded:{},LoadSuccess:{},LoadError:(0,m.ofType)()}),j=function(e,n){return function(t){var r=S(y(e,n));r.promise.then((function(e){return t.update(p.LoadSuccess({}))})).catch((function(e){e.isCanceled||t.update(p.LoadError({msg:"Failed to load"}))})),t.promiseCache.loading=r}},Z=function(e){e.promiseCache.buffering.cancel()},v=function(e){(0,d.Z)(t,e);var n=(0,u.Z)(t);function t(e){var r;return(0,a.Z)(this,t),(r=n.call(this,e)).promiseCache={},r.initialState=g.NotAsked(),r.state=r.initialState,r.update=r.update.bind((0,l.Z)(r)),r}return(0,c.Z)(t,[{key:"update",value:function(e){var n=this,r=t.reducer(e,this.state,this.props),i=r.nextState,s=r.cmd;this.props.debugActions&&(console.warn('You are running LazyImage with debugActions="true" in production. This might have performance implications.'),console.log({action:e,prevState:this.state,nextState:i})),this.setState(i,(function(){return s&&s(n)}))}},{key:"componentWillUnmount",value:function(){this.promiseCache.loading&&this.promiseCache.loading.cancel(),this.promiseCache.buffering&&this.promiseCache.buffering.cancel(),this.promiseCache={}}},{key:"render",value:function(){var e=this,n=this.props,t=n.children,o=n.loadEagerly,a=n.observerProps,c=(n.experimentalDecode,n.debounceDurationMs,n.debugActions,(0,s.Z)(n,f));return o?t({imageState:g.LoadSuccess().tag,imageProps:c}):(0,x.jsx)(h.ZP,(0,i.Z)((0,i.Z)({rootMargin:"50px 0px",threshold:.01},a),{},{onChange:function(n){return e.update(p.ViewChanged({inView:n}))},children:function(n){var i=n.ref;return t({imageState:"Buffering"===e.state.tag?r.Loading:e.state.tag,imageProps:c,ref:i})}}))}}],[{key:"reducer",value:function(e,n,t){return p.match(e,{ViewChanged:function(e){return!0===e.inView?t.src?g.match(n,{NotAsked:function(){return t.debounceDurationMs?{nextState:g.Buffering(),cmd:(e=t.debounceDurationMs,function(n){var t=S(b(e));t.promise.then((function(){return n.update(p.BufferingEnded())})).catch((function(e){})),n.promiseCache.buffering=t})}:{nextState:g.Loading(),cmd:j(t,t.experimentalDecode)};var e},default:function(){return{nextState:n}}}):{nextState:g.LoadSuccess()}:g.match(n,{Buffering:function(){return{nextState:g.NotAsked(),cmd:Z}},default:function(){return{nextState:n}}})},BufferingEnded:function(){return{nextState:g.Loading(),cmd:j(t,t.experimentalDecode)}},LoadSuccess:function(){return{nextState:g.LoadSuccess()}},LoadError:function(e){return{nextState:g.LoadError(e)}}})}}]),t}(o.Component);v.displayName="LazyImageFull";var y=function(e){var n=e.src,t=e.srcSet,r=e.alt,i=e.sizes,s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new Promise((function(e,o){var a=new Image;if(t&&(a.srcset=t),r&&(a.alt=r),i&&(a.sizes=i),a.src=n,s&&"decode"in a)return a.decode().then((function(n){return e(n)})).catch((function(e){return o(e)}));a.onload=e,a.onerror=o}))},b=function(e){return new Promise((function(n){return setTimeout(n,e)}))},S=function(e){var n=!1;return{promise:new Promise((function(t,r){e.then((function(e){return n?r({isCanceled:!0}):t(e)})).catch((function(e){return r(n?{isCanceled:!0}:e)}))})),cancel:function(){n=!0}}},P=["actual","placeholder","loading","error"],L=function(e){var n=e.actual,t=e.placeholder,o=e.loading,a=e.error,c=(0,s.Z)(e,P);return(0,x.jsx)(v,(0,i.Z)((0,i.Z)({},c),{},{children:function(e){var i=e.imageState,s=e.imageProps,c=e.ref;switch(i){case r.NotAsked:return!!t&&t({imageProps:s,ref:c});case r.Loading:return o?o():!!t&&t({imageProps:s,ref:c});case r.LoadSuccess:return n({imageProps:s});case r.LoadError:return a?a():n({imageProps:s})}}}))};L.displayName="LazyImage"},33381:function(e,n,t){t.d(n,{P:function(){return a}});var r=t(1413),i=t(47313),s=t(50301),o=t(46417),a=i.forwardRef((function(e,n){return(0,o.jsx)(s.Z,(0,r.Z)({direction:"up",ref:n},e))}))}}]);