"use strict";(self.webpackChunksrf_group=self.webpackChunksrf_group||[]).push([[12],{32302:function(e,n,t){t.r(n),t.d(n,{DetailsOffer:function(){return Ve},default:function(){return Qe}});var i=t(1413),o=t(29439),l=t(47313),r=t(1084),s=t(29588),a=t(61750),d=t(63830),c=t(57632),u=t(43265),f=t(9019),m=t(3404),x=t(28303),v=t(55476),h=t(61113),p=t(85281),j=t(57829),Z=t(73428),g=t(93405),b=t(48757),C=t(47196),y=t(76600),k=t(72106),S=t(10189),_=t(58843),E=t(56104),O=t(24193),w=t(1065),D=t(47131),U=t(12210),L=t(80509),P=t(14885),A=(t(83151),t(9963),t(49946),t(1374),t(15671)),N=t(43144),R=t(97326),F=t(60136),I=t(29388),B=t(68278),T=(t(49640),t(46417)),M=["//placekitten.com/1500/500","//placekitten.com/4000/3000","//placekitten.com/800/1200","//placekitten.com/1500/1500"],z={images:M,thumbs:["//placekitten.com/4000/3000","https://source.unsplash.com/random","https://source.unsplash.com/random","https://source.unsplash.com/random"],titles:["",(0,T.jsxs)("span",{children:["by\xa0",(0,T.jsx)("a",{className:"creditLink",href:"http://flickr.com/photos/titrans/",children:"quatre mains"}),"\xa0 (",(0,T.jsx)("a",{className:"creditLink",href:"http://creativecommons.org/licenses/by/2.0/",title:"Attribution License",children:"Some rights reserved"}),")"]}),(0,T.jsxs)("span",{children:["by\xa0",(0,T.jsx)("a",{className:"creditLink",href:"http://flickr.com/photos/lachlanrogers/",children:"latch.r"}),"\xa0 (",(0,T.jsx)("a",{className:"creditLink",href:"http://creativecommons.org/licenses/by-sa/2.0/",title:"Attribution-ShareAlike License",children:"Some rights reserved"}),")"]}),(0,T.jsxs)("span",{children:["by\xa0",(0,T.jsx)("a",{className:"creditLink",href:"http://flickr.com/photos/fazen/",children:"fazen"}),"\xa0 (",(0,T.jsx)("a",{className:"creditLink",href:"http://creativecommons.org/licenses/by/2.0/",title:"Attribution License",children:"Some rights reserved"}),")"]})],captions:["Cat in the snow","",(0,T.jsxs)("p",{children:[".. not in the\xa0",(0,T.jsx)("em",{children:"mood"}),"\xa0for games right now",(0,T.jsx)("br",{}),"...",(0,T.jsx)("br",{}),"...",(0,T.jsx)("br",{}),"...",(0,T.jsx)("br",{}),"...",(0,T.jsx)("br",{}),"...",(0,T.jsx)("br",{}),"...",(0,T.jsx)("br",{}),"C'mon. Seriously."]}),""]},W=function(e){(0,F.Z)(t,e);var n=(0,I.Z)(t);function t(e){var i;return(0,A.Z)(this,t),(i=n.call(this,e)).state={index:0,isOpen:!1},i.openLightbox=i.openLightbox.bind((0,R.Z)(i)),i.closeLightbox=i.closeLightbox.bind((0,R.Z)(i)),i.moveNext=i.moveNext.bind((0,R.Z)(i)),i.movePrev=i.movePrev.bind((0,R.Z)(i)),i}return(0,N.Z)(t,[{key:"openLightbox",value:function(){this.setState({isOpen:!0})}},{key:"closeLightbox",value:function(){this.setState({isOpen:!1}),this.props.callbackClose()}},{key:"moveNext",value:function(){this.setState((function(e){return{index:(e.index+1)%M.length}}))}},{key:"movePrev",value:function(){this.setState((function(e){return{index:(e.index+M.length-1)%M.length}}))}},{key:"render",value:function(){var e;return this.props.openLightBox&&(e=(0,T.jsx)(B.Z,{mainSrc:z.images[this.state.index],nextSrc:z.images[(this.state.index+1)%M.length],prevSrc:z.images[(this.state.index+M.length-1)%M.length],mainSrcThumbnail:z.thumbs[this.state.index],nextSrcThumbnail:z.thumbs[(this.state.index+1)%M.length],prevSrcThumbnail:z.thumbs[(this.state.index+M.length-1)%M.length],onCloseRequest:this.closeLightbox,onMovePrevRequest:this.movePrev,onMoveNextRequest:this.moveNext,onImageLoadError:t.onImageLoadError,imageTitle:z.titles[this.state.index],imageCaption:z.captions[this.state.index]})),(0,T.jsx)("div",{children:e})}}],[{key:"onImageLoadError",value:function(){}}]),t}(l.Component);function q(e){var n=l.useState(null),t=(0,o.Z)(n,2),i=t[0],r=t[1],s=l.useState(!1),a=(0,o.Z)(s,2),d=a[0],c=a[1];return e&&e.offerImages&&e.offerImages.length>0?(0,T.jsxs)(j.Z,{children:[(0,T.jsx)(W,{openLightBox:d,callbackClose:function(){c(!1)}}),(0,T.jsxs)(Z.Z,{sx:{mb:2},children:[(0,T.jsx)(U.tq,{spaceBetween:10,navigation:!0,pagination:{clickable:!0},thumbs:{swiper:i},zoom:!0,lazy:!0,effect:"fade",loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},className:"mySwiper2",children:e.offerImages.map((function(n,t){return(0,T.jsx)(U.o5,{children:(0,T.jsx)("div",{className:"swiper-zoom-container",children:(0,T.jsx)("img",{src:(0,P.Ce)(e.id,n.path),onClick:function(){return c(!0)}})})},n.id)}))}),(0,T.jsx)(U.tq,{onSwiper:r,spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,className:"mySwiper",children:e.offerImages.map((function(n,t){return(0,T.jsx)(U.o5,{children:(0,T.jsx)("img",{src:(0,P.Ce)(e.id,n.path)})},n.id)}))})]})]}):null}L.ZP.use([L.pt,L.xW,L.oM,L.LG,L.W_,L.o3]);var H=t(48310),J=t(67216),V=t(32600),Y=t(48119),Q=t(83213),G=t(19536),$=t(24631),K=t(32703),X=t(51997),ee=t(13827),ne=t(79429),te=t(94469),ie=t(33604),oe=t(96467),le=t(97762),re=t(4117),se=t(28089),ae=se.Ry({content:se.Z_().required("Type Offer is required")}),de=se.Ry({fullName:se.Z_().required("Message is required"),email:se.Z_().email().required("email_is_required"),content:se.Z_().required("Message is required")}),ce=t(18040),ue=t(33381),fe=t(24511),me=t(33532),xe=function(e){var n=(0,l.useState)(!1),t=(0,o.Z)(n,2),i=(t[0],t[1]),r=(0,l.useState)(!1),s=(0,o.Z)(r,2),a=s[0],d=s[1],c=(0,l.useRef)(null);(0,l.useEffect)((function(){var e=c.current;e&&e.scrollHeight>e.clientHeight&&i(!0)}),[e.lines]);var u=function(){d(!a)},f=(e.type,e.text),m=void 0===f?"":f,x=e.readMoreText,v=void 0===x?"More":x,h=e.readLessText,p=void 0===h?"Less":h,j=e.onAction,Z=void 0===j?u:j,g=function(e){return e.replace(/(?:\r\n|\r|\n)/g,"<br />")}(m);return(0,T.jsxs)("span",{className:"rm-container",children:[(0,T.jsx)("span",{ref:c,className:"rm-text-wrapper",children:a?g:g.substring(0,me.zb.NBE_WORD_SHOW_MORE_LESS)}),g.length>me.zb.NBE_WORD_SHOW_MORE_LESS?(0,T.jsx)("span",{className:"rm-action-button-container",children:a?(0,T.jsx)("span",{className:"rm-less-button",onClick:u,children:p}):(0,T.jsx)("span",{className:"rm-more-button",onClick:Z,children:v})}):null]})},ve={content:""};function he(e){var n,t=e.offerEntity,i=e.listCommentsByOffer,r=e.account,s=e.isAuthenticated,a=e.loadingListComments,d=e.loadingUpdateEntity,c=e.loadingAddEntity,u=e.parentCallbackAddComment,f=e.parentCallbackDeleteComment,m=e.parentCallbackUpdateComment,x=e.parentCallbackReportComment,v=e.parentCallbackLoadMoreComments,Z=e.totalItems,g=l.useState(-1),b=(0,o.Z)(g,2),C=b[0],k=b[1],S=l.useState(-1),_=(0,o.Z)(S,2),E=_[0],U=_[1],L=l.useState(!1),A=(0,o.Z)(L,2),N=A[0],R=A[1],F=l.useState(!1),I=(0,o.Z)(F,2),B=I[0],M=I[1],z=l.useState(ce.L),W=(0,o.Z)(z,2),q=W[0],$=W[1],K=l.useState(!1),ne=(0,o.Z)(K,2),se=(ne[0],ne[1],(0,fe.$)().t),ae=function(e,n){m(e,n),U(-1)},de=l.useState(!1),me=(0,o.Z)(de,2),ve=me[0],he=me[1],Ze=function(){he(!1)},ge=function(){he(!1),f(C)},be=function(){U(-1)},Ce=function(){M(!1)},ye=function(){M(!1),x(q)};return(0,T.jsxs)(j.Z,{children:[(0,T.jsxs)(H.Z,{sx:{bgcolor:"background.paper",mt:2},children:[(0,T.jsxs)(j.Z,{children:[Z>0?(0,T.jsx)(J.ZP,{alignItems:"flex-start",button:!0,onClick:function(){return R(!N)},children:(0,T.jsx)(Q.Z,{children:(0,T.jsx)(h.Z,{variant:"subtitle1",component:"a",color:"text.secondary",sx:{mt:1},children:(0,T.jsxs)("u",{children:[se(N?"comment_offer.hide_comment_details_offer":"comment_offer.show_comment_details_offer"),"(",Z,")"]})})})}):null,N?(0,T.jsxs)(j.Z,{children:[i.map((function(e,n){var i,o,a,c,u,f,m,x;return(0,T.jsxs)("div",{children:[(0,T.jsxs)(J.ZP,{alignItems:"flex-start",secondaryAction:(0,T.jsxs)(j.Z,{children:[s&&(null===e||void 0===e||null===(i=e.user)||void 0===i?void 0:i.id)===r.id?(0,T.jsx)(D.Z,{edge:"end","aria-label":"edit",color:"success",onClick:function(){return n=e.id||-1,void U(n);var n},sx:{mr:.5,display:"block"},children:(0,T.jsx)(ee.Z,{})}):null,!s||(null===t||void 0===t||null===(o=t.user)||void 0===o?void 0:o.id)!==r.id&&(null===e||void 0===e||null===(a=e.user)||void 0===a?void 0:a.id)!==r.id?null:(0,T.jsx)(D.Z,{edge:"end","aria-label":"delete",color:"error",onClick:function(){return n=e.id||-1,k(n),void he(!0);var n},sx:{display:"block"},children:(0,T.jsx)(X.Z,{})}),s&&(null===e||void 0===e||null===(c=e.user)||void 0===c?void 0:c.id)!==r.id?(0,T.jsx)(D.Z,{edge:"end","aria-label":"report",onClick:function(){return function(e){$(e),M(!0)}(e)},sx:{mr:.5,display:"block"},children:(0,T.jsx)(w.Z,{})}):null]}),children:[(0,T.jsx)(V.Z,{children:(0,T.jsx)(Y.Z,{alt:"Avatar",src:(0,P.Dm)(null===(u=e.user)||void 0===u?void 0:u.id,null===(f=e.user)||void 0===f?void 0:f.imageUrl,null===(m=e.user)||void 0===m?void 0:m.sourceRegister),sx:{border:"1px solid #b9b9b9"},children:null===(x=(0,P.QD)(null===e||void 0===e?void 0:e.user))||void 0===x?void 0:x.charAt(0)})}),(0,T.jsx)(Q.Z,{primary:(0,P.QD)(null===e||void 0===e?void 0:e.user),secondary:(0,T.jsxs)(l.Fragment,{children:[(0,T.jsx)(h.Z,{sx:{display:"block"},component:"span",variant:"body2",color:"text.primary",children:(0,T.jsx)(y.p,{convertDate:e.createdDate})}),E!==e.id?(0,T.jsx)(xe,{lines:2,text:e.content||"",readMoreText:se("details_offer.label_show_more"),readLessText:se("details_offer.label_show_less")}):null]})})]}),E===e.id?(0,T.jsx)(j.Z,{sx:{mr:2,ml:9},children:(0,T.jsx)(je,{parentCallbackUpdateComment:function(n){return ae(n,e.id||-1)},parentCallbackCancelUpdateComment:be,defaultValueUpdate:e.content,loadingUpdateEntity:d})}):null,(0,T.jsx)(G.Z,{variant:"inset",component:"li"})]},"comment-".concat(n))})),a?(0,T.jsx)(j.Z,{sx:{display:"flex",justifyContent:"center",m:2},children:(0,T.jsx)(p.Z,{color:"inherit"})}):null,Z>i.length?(0,T.jsx)(J.ZP,{alignItems:"center",button:!0,onClick:function(){return v()},children:(0,T.jsx)(Q.Z,{children:(0,T.jsx)(h.Z,{variant:"subtitle1",component:"h5",color:"text.secondary",sx:{mt:1,textAlign:"center"},children:(0,T.jsx)("u",{children:se("comment_offer.show_more_comment")})})})}):null]}):null]}),(0,T.jsxs)(J.ZP,{alignItems:"flex-start",children:[(0,T.jsx)(V.Z,{children:(0,T.jsx)(Y.Z,{alt:r.imageUrl,src:(0,P.Dm)(r.id,r.imageUrl,null===r||void 0===r?void 0:r.sourceRegister),sx:{border:"1px solid #b9b9b9"},children:null===(n=(0,P.QD)(r))||void 0===n?void 0:n.charAt(0)})}),(0,T.jsx)(Q.Z,{children:(0,T.jsx)(pe,{parentCallbackAddComment:function(e){u(e)},loadingAddEntity:c})})]})]}),(0,T.jsx)("div",{children:(0,T.jsxs)(te.Z,{open:ve,TransitionComponent:ue.P,keepMounted:!0,onClose:Ze,"aria-describedby":"alert-dialog-slide-description",children:[(0,T.jsx)(ie.Z,{children:"Confirm delete operation"}),(0,T.jsx)(oe.Z,{children:(0,T.jsx)(le.Z,{id:"alert-dialog-slide-description",children:"Are you sure you want to delete this CommentOffer?"})}),(0,T.jsxs)(re.Z,{children:[(0,T.jsx)(O.Z,{onClick:Ze,children:"Cancel"}),(0,T.jsx)(O.Z,{onClick:ge,color:"error",children:"Delete"})]})]})}),(0,T.jsx)("div",{children:(0,T.jsxs)(te.Z,{open:B,TransitionComponent:ue.P,keepMounted:!0,onClose:Ce,"aria-describedby":"alert-dialog-slide-description",children:[(0,T.jsx)(ie.Z,{children:"Repoprt comment offer"}),(0,T.jsx)(oe.Z,{children:(0,T.jsx)(le.Z,{id:"alert-dialog-slide-description",children:"Do you want report this comment offer !"})}),(0,T.jsxs)(re.Z,{children:[(0,T.jsx)(O.Z,{onClick:Ce,children:"Cancel"}),(0,T.jsx)(O.Z,{color:"success",onClick:ye,children:"Report"})]})]})})]})}function pe(e){var n=e.parentCallbackAddComment,t=e.loadingAddEntity,i=(0,fe.$)().t,o=(0,ne.TA)({initialValues:ve,validationSchema:ae,onSubmit:function(e){n(e.content),o.setFieldValue("content","")}});return(0,T.jsx)(l.Fragment,{children:(0,T.jsxs)("form",{onSubmit:o.handleSubmit,children:[(0,T.jsx)($.Z,{id:"content",name:"content",label:i("comment_offer.label_add_comment"),value:o.values.content,onChange:o.handleChange,multiline:!0,fullWidth:!0,maxRows:4}),(0,T.jsx)(K.Z,{loading:t,variant:"outlined",size:"small",type:"submit",disabled:!o.values.content,sx:{my:1},color:"neutral",children:i("comment_offer.label_comment")})]})})}function je(e){var n=e.parentCallbackUpdateComment,t=e.parentCallbackCancelUpdateComment,i=e.defaultValueUpdate,r=e.loadingUpdateEntity,s=l.useState(i),a=(0,o.Z)(s,2),d=a[0],c=(a[1],(0,ne.TA)({initialValues:ve,validationSchema:ae,onSubmit:function(e){n(e.content)}}));(0,l.useEffect)((function(){c.setFieldValue("content",i)}),[]);return(0,T.jsx)(l.Fragment,{children:(0,T.jsxs)("form",{onSubmit:c.handleSubmit,children:[(0,T.jsx)($.Z,{id:"content",name:"content",label:"Add comment",value:c.values.content,onChange:c.handleChange,multiline:!0,fullWidth:!0,maxRows:4}),(0,T.jsxs)(j.Z,{sx:{my:1},children:[(0,T.jsx)(K.Z,{loading:!1,variant:"outlined",size:"small",type:"button",sx:{mr:1},color:"neutral",onClick:function(){t(d)},children:"Cancel"}),(0,T.jsx)(K.Z,{loading:r,variant:"outlined",size:"small",type:"submit",disabled:!c.values.content,color:"success",children:"Update"})]})]})})}var Ze=t(54641),ge=t(11069),be=t(46845),Ce=t(6306),ye=t(14281),ke=t(65053),Se=t(56199),_e=t(30040),Ee=t(76937),Oe=t(89840),we=t(45522),De=t.n(we),Ue=t(64776),Le=t.n(Ue),Pe=t(27780),Ae=function(e){(0,F.Z)(t,e);var n=(0,I.Z)(t);function t(e){var i;return(0,A.Z)(this,t),(i=n.call(this,e)).state={shareData:{title:"MDN",text:"Learn web development on MDN!",url:"https://developer.mozilla.org"}},i.handleShare=i.handleShare.bind((0,R.Z)(i)),i}return(0,N.Z)(t,[{key:"handleShare",value:function(){try{navigator.share(this.state.shareData).then((function(e){}))}catch(e){alert("Error shared: "+e)}}},{key:"render",value:function(){return(0,P.KB)()===Pe.c.MOBILE_BROWSER?(0,T.jsx)(D.Z,{onClick:this.handleShare,children:this.props.children}):(0,T.jsx)(Le(),{url:this.props.url,quote:"quote",children:this.props.children})}}]),t}(l.Component),Ne=t(51204),Re=t(25169),Fe={fullName:"",email:"",content:""};function Ie(e){var n,t,r,s,a,c,u,m,x,p,b,C,y,k,S=e.offerEntity,_=e.parentCallback,w=e.currentUser,U=e.isAuthenticated,L=e.myFavoriteUser,A=e.createConversationCallback,N=e.addSuccessConversation,R=l.useState(),F=(0,o.Z)(R,2),I=F[0],B=F[1],M=l.useState(""),z=(0,o.Z)(M,2),W=z[0],q=z[1],H=l.useState(!1),J=(0,o.Z)(H,2),V=J[0],Q=J[1],G=l.useState(!1),K=(0,o.Z)(G,2),X=K[0],ee=K[1],se=(0,d.k6)(),ae=(0,fe.$)().t,ce=(0,ne.TA)({initialValues:Fe,validationSchema:de,onSubmit:function(e){var n;w.id!==(null===S||void 0===S||null===(n=S.user)||void 0===n?void 0:n.id)&&U&&(B(e),me(e.content))}});l.useEffect((function(){De()(w)||(ce.setFieldValue("fullName",(0,P.QD)(w)),ce.setFieldValue("email",w.email))}),[w]),l.useEffect((function(){N&&ce.resetForm({values:(0,i.Z)((0,i.Z)({},I),{},{content:""})})}),[N]);var me=function(e){var n,t,i={content:e,conversation:{dateCreated:(0,P.uJ)(new Date),senderUser:null,receiverUser:{id:null===S||void 0===S||null===(n=S.user)||void 0===n?void 0:n.id,email:null===S||void 0===S||null===(t=S.user)||void 0===t?void 0:t.email}}};A(i)},xe=l.useState(!1),ve=(0,o.Z)(xe,2),he=ve[0],pe=ve[1],je=function(e){e.stopPropagation(),L||pe(!0)},we=function(){pe(!1)},Ue=function(){var e;pe(!1),_(null===S||void 0===S||null===(e=S.user)||void 0===e?void 0:e.id)},Le=function(e){setTimeout((function(){se.push(v.H.PROFILE+"/"+e)}),300)},Pe=function(){return L?"red":"color: rgba(0, 0, 0, 0.54)"};return(0,T.jsxs)(f.ZP,{item:!0,xs:12,sm:12,children:[(0,T.jsxs)(Z.Z,{children:[(0,T.jsx)(h.Z,{paragraph:!0,sx:{m:2},children:ae("details_offer.about_seller")}),(0,T.jsx)(Oe.Z,{onClick:function(){var e;return Le(null===S||void 0===S||null===(e=S.user)||void 0===e?void 0:e.id)},sx:{display:"block"},children:(0,T.jsx)(Ze.Z,{avatar:S?(0,T.jsx)(Y.Z,{"aria-label":"recipe",alt:null===(n=S.user)||void 0===n?void 0:n.imageUrl,src:(0,P.Dm)(null===(t=S.user)||void 0===t?void 0:t.id,null===(r=S.user)||void 0===r?void 0:r.imageUrl,null===(s=S.user)||void 0===s?void 0:s.sourceRegister),sx:{border:"1px solid #b9b9b9"},children:null===(a=(0,P.QD)(null===S||void 0===S?void 0:S.user))||void 0===a?void 0:a.charAt(0)}):null,action:(0,T.jsx)(D.Z,{"aria-label":"settings",sx:{color:Pe()},onClick:function(e){return je(e)},disabled:(null===S||void 0===S||null===(c=S.user)||void 0===c?void 0:c.id)===(null===w||void 0===w?void 0:w.id),children:(0,T.jsx)(ge.Z,{})}),title:(0,T.jsx)(l.Fragment,{children:(0,P.QD)(null===S||void 0===S?void 0:S.user)}),subheader:null===S||void 0===S||null===(u=S.user)||void 0===u?void 0:u.email,onClick:function(){var e;return Le(null===S||void 0===S||null===(e=S.user)||void 0===e?void 0:e.id)},role:"button"})}),null!==S&&void 0!==S&&null!==(m=S.user)&&void 0!==m&&m.address?(0,T.jsx)(g.Z,{children:(0,T.jsxs)(h.Z,{variant:"body2",color:"text.secondary",children:[null===S||void 0===S||null===(x=S.user)||void 0===x?void 0:x.address.city,", ",null===S||void 0===S||null===(p=S.user)||void 0===p?void 0:p.address.country]})}):null,(0,T.jsxs)(E.Z,{disableSpacing:!0,sx:{backgroundColor:"rgba(0, 0, 0, 0.74);"},children:[(0,T.jsx)(D.Z,{"aria-label":"add to favorites",sx:{color:Pe()},onClick:je,disabled:(null===S||void 0===S||null===(b=S.user)||void 0===b?void 0:b.id)===(null===w||void 0===w?void 0:w.id),children:(0,T.jsx)(ge.Z,{})}),(0,T.jsx)(Ae,{url:"https://github.com/nygardk/react-share/blob/master/demo/Demo.tsx",children:(0,T.jsx)(j.Z,{sx:{color:"#fff"},children:(0,T.jsx)(be.Z,{})})}),(0,T.jsx)(D.Z,{sx:{marginLeft:"auto",color:"#fff"},onClick:function(){},children:(0,T.jsx)(Ce.Z,{})})]}),(0,T.jsxs)(f.ZP,{container:!0,item:!0,sx:{mt:3},children:[(0,T.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,T.jsx)(j.Z,{sx:{"& > :not(style)":{m:1}},children:(0,T.jsxs)("form",{onSubmit:ce.handleSubmit,children:[(0,T.jsx)(h.Z,{paragraph:!0,className:"text-center",children:ae("details_offer.send_message")}),(0,T.jsxs)(j.Z,{sx:{display:"flex",alignItems:"flex-end"},children:[(0,T.jsx)(ye.Z,{sx:{color:"action.active",mr:1,my:.5}}),(0,T.jsx)($.Z,{id:"fullName",name:"fullName",label:ae("common.label_name"),variant:"standard",fullWidth:!0,disabled:!(ce.touched.fullName&&Boolean(ce.errors.fullName)),value:ce.values.fullName,onChange:ce.handleChange,error:ce.touched.fullName&&Boolean(ce.errors.fullName)})]}),(0,T.jsxs)(j.Z,{sx:{display:"flex",alignItems:"flex-end",my:2},children:[(0,T.jsx)(ke.Z,{sx:{color:"action.active",mr:1,my:.5}}),(0,T.jsx)($.Z,{id:"email",name:"email",label:ae("common.label_email"),variant:"standard",fullWidth:!0,disabled:!(ce.touched.email&&Boolean(ce.errors.email)),value:ce.values.email,onChange:ce.handleChange,error:ce.touched.email&&Boolean(ce.errors.email)})]}),(0,T.jsxs)(j.Z,{sx:{display:"flex",alignItems:"flex-end"},children:[(0,T.jsx)(Se.Z,{sx:{color:"action.active",mr:1,my:.5}}),(0,T.jsx)($.Z,{id:"content",name:"content",label:"Message",variant:"standard",fullWidth:!0,multiline:!0,rows:4,value:ce.values.content,onChange:ce.handleChange,error:ce.touched.content&&Boolean(ce.errors.content)})]}),(0,T.jsx)(j.Z,{sx:{display:"flex",alignItems:"flex-end"},children:(0,T.jsx)(O.Z,{variant:"outlined",size:"small",fullWidth:!0,sx:{mt:2,mb:2},color:"neutral",type:"submit",disabled:w.id===(null===S||void 0===S||null===(C=S.user)||void 0===C?void 0:C.id),children:ae("common.label_send")})})]})})}),(0,T.jsxs)(f.ZP,{item:!0,xs:12,sm:6,sx:{p:2,borderLeft:"1px solid #cfcbcb;"},children:[(0,T.jsx)(h.Z,{paragraph:!0,className:"text-center",children:ae("details_offer.contact_with")}),(0,T.jsx)(O.Z,{variant:"outlined",startIcon:(0,T.jsx)(_e.Z,{}),fullWidth:!0,sx:{mt:3},onClick:function(){return function(){var e,n;null!==S&&void 0!==S&&null!==(e=S.user)&&void 0!==e&&e.linkProfileFacebook?window.open(null===S||void 0===S||null===(n=S.user)||void 0===n?void 0:n.linkProfileFacebook,"_new"):(q(ae("details_offer.message_not_link_profile_facebook_exist")),Q(!0))}()},children:"Facebook"}),(0,T.jsx)(O.Z,{variant:"outlined",startIcon:(0,T.jsx)(Ee.Z,{}),fullWidth:!0,sx:{mt:3},onClick:function(){return ee(!X)},children:X?null===S||void 0===S||null===(y=S.user)||void 0===y?void 0:y.phone:ae("details_offer.show_number")}),(0,T.jsx)("a",{href:"mailto:".concat(null===S||void 0===S||null===(k=S.user)||void 0===k?void 0:k.email),style:{textDecoration:"none"},children:(0,T.jsx)(O.Z,{variant:"outlined",startIcon:(0,T.jsx)(ke.Z,{}),fullWidth:!0,sx:{mt:3},children:ae("details_offer.send_email")})})]})]})]}),(0,T.jsxs)(f.ZP,{container:!0,item:!0,spacing:2,sx:{mt:1},children:[(0,T.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,T.jsx)(Z.Z,{onClick:function(){console.log("offerEntity ",S),null!==S&&void 0!==S&&S.address?window.open("https://www.google.com/maps/@35.8235978,10.6309176,15z","_new"):(q(ae("details_offer.not_address_found_itenarary")),Q(!0))},children:(0,T.jsxs)(g.Z,{children:[(0,T.jsx)(h.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"D\xe9couvrir le quartier"}),(0,T.jsx)("div",{style:{maxHeight:400,marginTop:30},children:(0,T.jsx)("img",{className:"img-fluid",src:"".concat((0,P.K1)("/assets/images/offer/details-offer/desktop-map-neighbourhood.ext.svg")),alt:"desktop-map-neighbourhood"})})]})})}),(0,T.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,T.jsx)(Z.Z,{onClick:function(){if(console.log("offerEntity ",S),null!==S&&void 0!==S&&S.address)if(null!==w&&void 0!==w&&w.address){var e,n,t,i;window.open("https://www.google.com/maps/dir/"+(null===w||void 0===w||null===(e=w.address)||void 0===e?void 0:e.lng)+","+(null===w||void 0===w||null===(n=w.address)||void 0===n?void 0:n.lng)+"/"+(null===S||void 0===S||null===(t=S.address)||void 0===t?void 0:t.lng)+","+(null===S||void 0===S||null===(i=S.address)||void 0===i?void 0:i.lng),"_new")}else q(ae("details_offer.miss_address_account")),Q(!0);else q(ae("details_offer.not_address_found_itenarary")),Q(!0)},children:(0,T.jsxs)(g.Z,{children:[(0,T.jsx)(h.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"D\xe9couvrir le quartier"}),(0,T.jsx)("div",{style:{maxHeight:400,marginTop:30},children:(0,T.jsx)("img",{className:"img-fluid",src:"".concat((0,P.K1)("/assets/images/offer/details-offer/desktop-time-of-travel-address.ext.svg")),alt:"desktop-time-of-travel-address"})})]})})})]}),(0,T.jsx)(f.ZP,{container:!0,item:!0,spacing:2,sx:{mt:1},children:(0,T.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,T.jsx)(Re.Z,{})})}),(0,T.jsx)("div",{children:(0,T.jsxs)(te.Z,{open:he,TransitionComponent:ue.P,keepMounted:!0,onClose:we,"aria-describedby":"alert-dialog-slide-description",children:[(0,T.jsx)(ie.Z,{children:ae("details_offer.title_add_favrite_user")}),(0,T.jsx)(oe.Z,{children:(0,T.jsx)(le.Z,{id:"alert-dialog-slide-description",children:ae("details_offer.description_add_favrite_user")})}),(0,T.jsxs)(re.Z,{children:[(0,T.jsx)(O.Z,{onClick:we,color:"neutral",children:ae("common.label_cancel")}),(0,T.jsx)(O.Z,{onClick:Ue,color:"success",children:ae("common.label_favorite")})]})]})}),(0,T.jsx)("div",{children:(0,T.jsx)(Ne.Z,{open:V,autoHideDuration:5e3,onClose:function(){Q(!1)},message:W})})]})}var Be=t(66582),Te=t(77429),Me=t(64589),ze=t(35044),We=t(12954),qe=t(41872),He=t(98492),Je=t(99956),Ve=function(e){var n,t,r,s,a,U,L,A,N,R,F,I,B,M,z,W,H,J,V,Y,Q=l.useState(!1),G=(0,o.Z)(Q,2),$=G[0],K=G[1],X=l.useState(!1),ee=(0,o.Z)(X,2),ne=ee[0],se=ee[1],ae=l.useState(!1),de=(0,o.Z)(ae,2),ce=de[0],xe=de[1],ve=l.useState(-1),pe=(0,o.Z)(ve,2),je=pe[0],Ze=pe[1],ge=l.useState(!0),ye=(0,o.Z)(ge,2),ke=ye[0],Se=ye[1],_e=(0,d.UO)().id,Ee=(0,d.k6)(),Oe=(0,fe.$)().t,we=e.resetAllFavoriteOfferUser,De=e.resetCommentOffer,Ue=e.getEntitywithFavorite,Le=e.updateComment,Pe=e.favoriteUserOffer,Ne=e.loadingEntityFavoriteUserOffer,Re=e.isAuthenticated,Fe=e.getListCommentsByOffer,Be=e.loadingCommentsByOffer,Te=e.listCommentsByOffer,Me=e.account,We=e.loadingUpdateEntity,Ve=e.addSuccessComment,Ye=e.updateSuccessComment,Qe=e.addSuccessFavoriteUser,Ge=e.createEntityFavoriteUser,$e=e.loadingAddComment,Ke=e.totalItemsCommentsByOffer,Xe=e.deleteSuccessComment,en=e.deleteComment;l.useEffect((function(){we(),De()}),[]),l.useEffect((function(){var e;null!==Pe&&void 0!==Pe&&null!==(e=Pe.offer)&&void 0!==e&&e.id||!_e||(Ue(_e),Ze(0))}),[Pe]),l.useEffect((function(){je>=0&&Re&&Fe(Number(_e),je,me.zb.COMMENTS_PER_PAGE,"")}),[je]),l.useEffect((function(){Pe&&Pe.offer&&!Ne&&setTimeout((function(){K(!0),se(Pe.myFavoriteUser||!1)}),100)}),[Pe]),l.useEffect((function(){if(Ve||Ye||Xe){var e;De();var n=(null===Pe||void 0===Pe||null===(e=Pe.offer)||void 0===e?void 0:e.id)||-1;Fe(n,0,20,"")}}),[Ve,Ye,Xe]),l.useEffect((function(){Qe&&se(!0)}),[Qe]);var nn=function(){xe(!1)},tn=function(){xe(!1);var n={offer:null===Pe||void 0===Pe?void 0:Pe.offer,user:{}};e.createEntityReportOffer(n)};return(0,T.jsxs)(j.Z,{children:[(0,T.jsx)(c.Z,{in:$,children:(0,T.jsxs)(u.Z,{maxWidth:"xl",className:"details-offer-client",children:[(0,T.jsx)(f.ZP,{container:!0,style:{paddingTop:10},children:(0,T.jsx)(f.ZP,{item:!0,xs:12,sm:6,children:(0,T.jsxs)(m.Z,{"aria-label":"breadcrumb",children:[(0,T.jsx)(x.rU,{color:"inherit",to:v.H.HOME,children:"SRF"}),(0,T.jsx)(x.rU,{color:"inherit",to:v.H.SEARCH,children:Oe("common.label_search")}),(0,T.jsx)(h.Z,{color:"text.primary",children:null===Pe||void 0===Pe||null===(n=Pe.offer)||void 0===n?void 0:n.title})]})})}),Ne?(0,T.jsx)(j.Z,{sx:{paddingTop:10,textAlign:"center"},children:(0,T.jsx)(p.Z,{color:"inherit"})}):(0,T.jsxs)(f.ZP,{container:!0,style:{paddingTop:50},children:[(0,T.jsxs)(f.ZP,{item:!0,xs:12,sm:6,children:[(0,T.jsx)(q,(0,i.Z)({},null===Pe||void 0===Pe?void 0:Pe.offer)),(0,T.jsxs)(Z.Z,{sx:{mb:3},children:[(0,T.jsxs)(g.Z,{children:[null!==Pe&&void 0!==Pe&&null!==(t=Pe.offer)&&void 0!==t&&t.amount?(0,T.jsxs)(h.Z,{variant:"h4",sx:{textAlign:"center",color:"red",fontWeight:600},children:["$ ",null===Pe||void 0===Pe||null===(r=Pe.offer)||void 0===r?void 0:r.amount," DT"]}):null,(0,T.jsxs)(h.Z,{variant:"subtitle2",color:"text.secondary",display:"flex",children:[(0,T.jsx)(C.Z,{fontSize:"small",sx:{mr:.9}}),(null===Pe||void 0===Pe||null===(s=Pe.offer)||void 0===s?void 0:s.typeOffer)===b.dJ.Sell?Oe("common.for_sell"):(null===Pe||void 0===Pe||null===(a=Pe.offer)||void 0===a?void 0:a.typeOffer)===b.dJ.Rent?Oe("common.for_rent"):(null===Pe||void 0===Pe||null===(U=Pe.offer)||void 0===U?void 0:U.typeOffer)===b.dJ.Find?Oe("common.for_find"):null]}),null!==Pe&&void 0!==Pe&&null!==(L=Pe.offer)&&void 0!==L&&L.startDate&&null!==Pe&&void 0!==Pe&&null!==(A=Pe.offer)&&void 0!==A&&A.endDate?(0,T.jsxs)(j.Z,{children:[(0,T.jsxs)(h.Z,{color:"text.secondary",gutterBottom:!0,children:[Oe("common.label_start_date")," ",(0,T.jsx)("strong",{children:(0,T.jsx)(y.p,{convertDate:null===Pe||void 0===Pe||null===(N=Pe.offer)||void 0===N?void 0:N.startDate})})]}),(0,T.jsxs)(h.Z,{color:"text.secondary",gutterBottom:!0,display:"flex",children:[Oe("common.label_end_date")," ",(0,T.jsx)("strong",{children:(0,T.jsx)(y.p,{convertDate:null===Pe||void 0===Pe||null===(R=Pe.offer)||void 0===R?void 0:R.endDate})})]})]}):null,(0,T.jsx)(h.Z,{variant:"h5",component:"div",sx:{mt:2},children:null===Pe||void 0===Pe||null===(F=Pe.offer)||void 0===F?void 0:F.title}),(0,T.jsxs)(h.Z,{sx:{fontSize:"0.8rem",mt:1},color:"text.secondary",display:"flex",children:[(0,T.jsx)(k.Z,{fontSize:"small",sx:{mr:.9}})," ",(0,T.jsx)(y.p,{convertDate:null===Pe||void 0===Pe||null===(I=Pe.offer)||void 0===I?void 0:I.dateCreated})]}),null!==Pe&&void 0!==Pe&&null!==(B=Pe.offer)&&void 0!==B&&B.address?(0,T.jsxs)(h.Z,{sx:{mb:1.8,fontSize:"0.8rem",mt:1},color:"text.secondary",display:"flex",children:[(0,T.jsx)(S.Z,{fontSize:"small",sx:{mr:.9}}),null===Pe||void 0===Pe||null===(M=Pe.offer)||void 0===M||null===(z=M.address)||void 0===z?void 0:z.city,", ",null===Pe||void 0===Pe||null===(W=Pe.offer)||void 0===W||null===(H=W.address)||void 0===H?void 0:H.country]}):null,null!==Pe&&void 0!==Pe&&null!==(J=Pe.offer)&&void 0!==J&&J.category?(0,T.jsxs)(h.Z,{sx:{mb:1.8,fontSize:"0.8rem",mt:1},color:"text.secondary",display:"flex",children:[(0,T.jsx)(_.Z,{fontSize:"small",sx:{mr:.9}}),null===Pe||void 0===Pe||null===(V=Pe.offer)||void 0===V?void 0:V.category.titleEn]}):null,(0,T.jsxs)(Je.Z,{sx:{mt:"40px !important"},elevation:0,expanded:ke,onChange:function(){Se(!ke)},children:[(0,T.jsx)(He.Z,{expandIcon:(0,T.jsx)(Ce.Z,{sx:{backgroundColor:"yellow",borderRadius:"50%"}}),"aria-controls":"panel1a-content",id:"panel1a-header",className:"bg-brown",children:Oe("details_offer.label_details_offer")}),(0,T.jsx)(qe.Z,{children:(0,T.jsx)("div",{dangerouslySetInnerHTML:{__html:(null===Pe||void 0===Pe||null===(Y=Pe.offer)||void 0===Y?void 0:Y.description)||""}})})]})]}),(0,T.jsxs)(E.Z,{disableSpacing:!0,children:[(0,T.jsx)(Ae,{url:"https://github.com/nygardk/react-share/blob/master/demo/Demo.tsx",children:(0,T.jsx)(be.Z,{})}),(0,T.jsx)(D.Z,{sx:{marginLeft:"auto"},onClick:function(){xe(!0)},children:(0,T.jsx)(w.Z,{})})]})]}),Re?(0,T.jsx)(j.Z,{sx:{mb:3},children:(0,T.jsx)(he,{offerEntity:null===Pe||void 0===Pe?void 0:Pe.offer,listCommentsByOffer:Te,account:Me,isAuthenticated:Re,loadingListComments:Be,loadingUpdateEntity:We,loadingAddEntity:$e,parentCallbackAddComment:function(n){if(n){var t,i,o,l,r,s={createdDate:(0,P.uJ)(new Date),content:n,offer:{id:null===Pe||void 0===Pe||null===(t=Pe.offer)||void 0===t?void 0:t.id,user:{id:null===Pe||void 0===Pe||null===(i=Pe.offer)||void 0===i||null===(o=i.user)||void 0===o?void 0:o.id,email:null===Pe||void 0===Pe||null===(l=Pe.offer)||void 0===l||null===(r=l.user)||void 0===r?void 0:r.email}},user:{}};e.addCommentOffer(s),(0,ze.rJ)(ze.Yt.EventOffer.AddCommentOffer.eventName,ze.Yt.EventOffer.AddCommentOffer.eventCategory,ze.Yt.EventOffer.AddCommentOffer.eventLabel)}},parentCallbackDeleteComment:function(e){en(e)},parentCallbackUpdateComment:function(e,n){var t=Te.find((function(e){return e.id===n}));t=(0,i.Z)((0,i.Z)({},t),{},{content:e}),Le(t),(0,ze.rJ)(ze.Yt.EventOffer.UpdateCommentOffer.eventName,ze.Yt.EventOffer.UpdateCommentOffer.eventCategory,ze.Yt.EventOffer.UpdateCommentOffer.eventLabel)},parentCallbackReportComment:function(n){var t={commentOffer:n,user:{}};e.reportComment(t)},parentCallbackLoadMoreComments:function(){Ze(je+1)},totalItems:Ke})}):null]}),(0,T.jsx)(f.ZP,{container:!0,item:!0,xs:12,sm:6,sx:{pl:{xs:0,sm:4}},spacing:2,children:(0,T.jsx)(Ie,{parentCallback:function(e){var n,t;if(Re){if((null===Pe||void 0===Pe||null===(n=Pe.offer)||void 0===n||null===(t=n.user)||void 0===t?void 0:t.id)!==(null===Me||void 0===Me?void 0:Me.id)){var i,o,l,r,s={favoriteUser:{id:null===Pe||void 0===Pe||null===(i=Pe.offer)||void 0===i||null===(o=i.user)||void 0===o?void 0:o.id,username:null===Pe||void 0===Pe||null===(l=Pe.offer)||void 0===l||null===(r=l.user)||void 0===r?void 0:r.username},favoriteDate:(0,P.uJ)(new Date)};Ge(s)}}else Ee.push(v.H.LOGIN)},offerEntity:null===Pe||void 0===Pe?void 0:Pe.offer,currentUser:Me,isAuthenticated:Re,myFavoriteUser:ne,createConversationCallback:function(n){e.createConversation(n)},addSuccessConversation:e.addSuccessConversation})})]})]})}),(0,T.jsxs)(te.Z,{open:ce,TransitionComponent:ue.P,keepMounted:!0,onClose:nn,"aria-describedby":"alert-dialog-slide-description",children:[(0,T.jsx)(ie.Z,{children:"Repoprt offer"}),(0,T.jsx)(oe.Z,{children:(0,T.jsx)(le.Z,{id:"alert-dialog-slide-description",children:"Do you want report this offer !"})}),(0,T.jsxs)(re.Z,{children:[(0,T.jsx)(O.Z,{onClick:nn,children:"Cancel"}),(0,T.jsx)(O.Z,{color:"success",onClick:tn,children:"Report"})]})]})]})},Ye={getEntitywithFavorite:a.ZQ,getListCommentsByOffer:s.x5,addCommentOffer:s.Be,createEntityFavoriteUser:Be.JP,resetAllFavoriteOfferUser:a.mc,resetCommentOffer:s.mc,updateComment:s.i8,deleteComment:s.Ks,createEntityReportOffer:Me.JP,reportComment:Te.JP,createConversation:We.Xw},Qe=(0,r.connect)((function(e){var n=e.user,t=e.offer,i=e.comment,o=e.favoriteUser,l=e.reportOffer,r=e.reportCommentOffer,s=e.conversation;return{isAuthenticated:n.isAuthenticated,account:n.currentUser,loadingEntityFavoriteUserOffer:t.loadingEntityWithFavoriteUser,favoriteUserOffer:t.entityWithFavoriteUser,loadingCommentsByOffer:i.loadingEntitiesByOffer,listCommentsByOffer:i.entitiesByOffer,loadingUpdateEntity:i.loadingUpdateEntity,loadingAddComment:i.loadingAddEntity,addSuccessComment:i.addSuccess,updateSuccessComment:i.updateSuccess,totalItemsCommentsByOffer:i.totalItemsEntitiesByOffer,loadingDeleteComment:i.loadingDeleteEntity,deleteSuccessComment:i.deleteSuccess,loadingEntityFavoriteUser:o.loadingEntity,entityFavoriteUser:o.entity,addSuccessFavoriteUser:o.addSuccess,addSuccessReportOffer:l.reportSuccess,loadingEntityReportOffer:l.loadingReportEntity,addSuccessReportCommentOffer:r.reportSuccess,loadingEntityReportCommentOffer:r.loadingReportEntity,addSuccessConversation:s.addSuccess}}),Ye)(Ve)},25169:function(e,n,t){var i=t(57829),o=t(1084),l=t(24631),r=t(56199),s=t(73428),a=t(93405),d=t(24193),c=t(46417);n.Z=(0,o.connect)((function(e){e.user,e.offer,e.conversation;return{}}),{})((function(e){return(0,c.jsx)(i.Z,{children:(0,c.jsx)(s.Z,{children:(0,c.jsxs)(a.Z,{children:[(0,c.jsxs)(i.Z,{sx:{display:"flex",alignItems:"flex-end"},children:[(0,c.jsx)(r.Z,{sx:{color:"action.active",mr:1,my:.5}}),(0,c.jsx)(l.Z,{id:"content",name:"content",label:"Declarer votre probleme",variant:"standard",fullWidth:!0,multiline:!0,rows:4})]}),(0,c.jsx)(i.Z,{sx:{display:"flex",alignItems:"flex-end"},children:(0,c.jsx)(d.Z,{variant:"outlined",size:"small",fullWidth:!0,sx:{mt:2},color:"neutral",type:"submit",children:"Declarer"})})]})})})}))},48757:function(e,n,t){var i,o,l,r;t.d(n,{dJ:function(){return i},b1:function(){return o},DO:function(){return l},iU:function(){return r}}),function(e){e.Sell="SellOffer",e.Rent="RentOffer",e.Find="FindOffer"}(i||(i={})),function(e){e.PerYear="PER_YEAR",e.PerMonth="PER_MONTH",e.PerDay="PER_DAY"}(o||(o={})),function(e){e.Carpooling="Carpooling",e.Travels="Travels",e.Transporter="Transporter",e.Job="Job"}(l||(l={})),function(e){e.List="LIST",e.Grid="GRID"}(r||(r={}))},76600:function(e,n,t){t.d(n,{p:function(){return l}});t(47313);var i=t(18466),o=t(46417),l=function(e){return e&&e.convertDate?(0,o.jsx)(i.Z,{date:new Date(e.convertDate),locale:"en-US"}):(0,o.jsx)(o.Fragment,{})}},33381:function(e,n,t){t.d(n,{P:function(){return s}});var i=t(1413),o=t(47313),l=t(50301),r=t(46417),s=o.forwardRef((function(e,n){return(0,r.jsx)(l.Z,(0,i.Z)({direction:"up",ref:n},e))}))}}]);