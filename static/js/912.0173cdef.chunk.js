(self.webpackChunksrf_group=self.webpackChunksrf_group||[]).push([[912],{24259:function(e,t,n){"use strict";n.r(t),n.d(t,{AddUpdateOffer:function(){return Se},default:function(){return Ee}});var r=n(37762),i=n(1413),l=n(29439),s=n(47313),o=n(28089),d=o.Ry({typeOffer:o.Z_().required("Type Offer is required"),title:o.Z_().required("Title is required"),description:o.Z_().required("Description is required"),amount:o.Rx().nullable().notRequired(),startDate:o.hT().nullable().notRequired(),endDate:o.hT().nullable().notRequired(),periodRent:o.Z_().nullable().notRequired(),address:o.Ry().nullable().notRequired().default(null),category:o.Ry().nullable().notRequired().default(null),typeFindOffer:o.Z_().nullable().notRequired()}),a=n(63830),f=n(1084),c=n(9019),u=n(43265),p=n(3404),h=n(28303),m=n(55476),x=n(61113),y=n(82295),j=n(1550),Z=n(96019),g=n(51405),O=n(48757),v=n(88797),b=n(15480),F=n(49914),S=n(73984),_=n(56854),E=n(47131),R=n(23195),C=n(99956),P=n(98492),D=n(41872),A=n(41727),k=n(57829),T=n(5178),J=n(54299),I=n(83929),w=n(74268),z=n(46417);function V(e){var t=e.formik;return(0,z.jsxs)(k.Z,{children:[(0,z.jsxs)(c.ZP,{container:!0,spacing:2,sx:{my:2},children:[(0,z.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,z.jsxs)(j.Z,{fullWidth:!0,error:t.touched.amount&&Boolean(t.errors.amount),children:[(0,z.jsx)(Z.Z,{htmlFor:"outlined-adornment-amount",children:"Amount"}),(0,z.jsx)(F.Z,{id:"amount",type:"number",value:t.values.amount,onChange:t.handleChange,startAdornment:(0,z.jsx)(A.Z,{position:"start",children:"$"}),label:"Amount",size:"small"}),(0,z.jsx)(b.Z,{id:"component-helper-text",children:t.touched.amount&&t.errors.amount})]})}),(0,z.jsx)(c.ZP,{item:!0,xs:12,md:6})]}),(0,z.jsx)(c.ZP,{container:!0,spacing:2,sx:{my:2},children:(0,z.jsx)(c.ZP,{item:!0,xs:12,children:(0,z.jsxs)(j.Z,{children:[(0,z.jsx)(T.Z,{id:"demo-radio-buttons-group-label",children:"Type de contact"}),(0,z.jsxs)(J.Z,{"aria-labelledby":"demo-radio-buttons-group-label",name:"radio-buttons-group",children:[(0,z.jsx)(I.Z,{value:"female",control:(0,z.jsx)(w.Z,{}),label:"Le client doit contacter vous directement"}),(0,z.jsx)(I.Z,{value:"male",control:(0,z.jsx)(w.Z,{}),label:"Le client peut passer une commande"})]})]})})})]})}var W=n(24631),N=n(37122),H=n(95998),M=n(84686),q=n(24511);function L(e){var t=(0,q.$)().t,n=e.formik;return(0,z.jsxs)(N.Z,{dateAdapter:H.Z,children:[(0,z.jsxs)(c.ZP,{container:!0,spacing:2,sx:{my:2},children:[(0,z.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,z.jsxs)(j.Z,{fullWidth:!0,error:n.touched.amount&&Boolean(n.errors.amount),size:"small",children:[(0,z.jsx)(Z.Z,{htmlFor:"outlined-adornment-amount",children:"Amount"}),(0,z.jsx)(F.Z,{id:"amount",type:"number",value:n.values.amount,onChange:n.handleChange,startAdornment:(0,z.jsx)(A.Z,{position:"start",children:"$"}),label:"Amount"}),(0,z.jsx)(b.Z,{id:"component-helper-text",children:n.touched.amount&&n.errors.amount})]})}),(0,z.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,z.jsxs)(j.Z,{fullWidth:!0,error:n.touched.periodRent&&Boolean(n.errors.periodRent),className:"form-control-type-offer",size:"small",children:[(0,z.jsx)(Z.Z,{id:"demo-simple-select-label",className:"type-offer-select",children:t("add_offer.per_periode")}),(0,z.jsxs)(v.Z,{id:"periodRent",name:"periodRent",label:"Type",labelId:"demo-simple-select-label",value:n.values.periodRent,onChange:n.handleChange,children:[(0,z.jsx)(g.Z,{value:O.b1.PerMonth,children:t("add_offer.per_month")}),(0,z.jsx)(g.Z,{value:O.b1.PerDay,children:t("add_offer.per_day")}),(0,z.jsx)(g.Z,{value:O.b1.PerYear,children:t("add_offer.per_year")})]}),(0,z.jsx)(b.Z,{id:"component-helper-text",children:n.touched.typeOffer&&n.errors.typeOffer})]})})]}),(0,z.jsxs)(c.ZP,{container:!0,spacing:2,children:[(0,z.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,z.jsx)(M.Z,{label:t("common.label_start_date"),value:n.values.startDate,onChange:function(e){return n.setFieldValue("startDate",e)},renderInput:function(e){return(0,z.jsx)(W.Z,(0,i.Z)((0,i.Z)({},e),{},{size:"small",fullWidth:!0,error:!1}))}})}),(0,z.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,z.jsx)(M.Z,{label:t("common.label_end_date"),value:n.values.endDate,onChange:function(e){return n.setFieldValue("endDate",e)},renderInput:function(e){return(0,z.jsx)(W.Z,(0,i.Z)((0,i.Z)({},e),{},{size:"small",fullWidth:!0,error:!1}))}})})]})]})}var B=n(6306),U=n(32703);function Y(e){var t=e.formik;return(0,z.jsx)(c.ZP,{container:!0,spacing:1,children:(0,z.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,z.jsxs)(j.Z,{fullWidth:!0,size:"small",error:t.touched.typeFindOffer&&Boolean(t.errors.typeFindOffer),className:"form-control-type-find-offer",children:[(0,z.jsx)(Z.Z,{id:"form-control-type-find-offer",className:"type-find-offer-select",children:"Type Find Offre"}),(0,z.jsxs)(v.Z,{id:"typeFindOffer",name:"typeFindOffer",label:"Type Find Offer",labelId:"demo-simple-select-label",value:t.values.typeFindOffer,onChange:t.handleChange,children:[(0,z.jsx)(g.Z,{value:O.DO.Carpooling,children:"CoVoiiturage"}),(0,z.jsx)(g.Z,{value:O.DO.Travels,children:"Travels"}),(0,z.jsx)(g.Z,{value:O.DO.Transporter,children:"Transporter: from --- to"}),(0,z.jsx)(g.Z,{value:O.DO.Job,children:"Travail"})]}),(0,z.jsx)(b.Z,{id:"form-control-type-find-offer",children:t.touched.typeFindOffer&&t.errors.typeFindOffer})]})})})}var $=n(79429),G=n(14885),K=n(33532),Q=n(94469),X=n(33604),ee=n(96467),te=n(97762),ne=n(4117),re=n(24193),ie=n(50301),le=n(61750),se=n(52951),oe=n(20300),de=n(47185),ae=n(45522),fe=n.n(ae),ce=n(6565),ue=n(96351);function pe(e){var t=e.formik,n=e.cities,r=e.listCategories,o=s.useState("fr"),d=(0,l.Z)(o,2),a=d[0],f=d[1];s.useEffect((function(){ue.Z.on("languageChanged",(function(e){console.log("lang ",e),f(e)}))}),[]);return(0,z.jsx)(k.Z,{children:(0,z.jsxs)(c.ZP,{container:!0,spacing:2,sx:{my:2},children:[(0,z.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,z.jsxs)(j.Z,{fullWidth:!0,error:t.touched.category&&Boolean(t.errors.category),children:[(0,z.jsx)(ce.Z,{id:"country-select",fullWidth:!0,size:"small",options:r,value:t.values.category,onChange:function(e,n){return t.setFieldValue("category",n||null)},autoHighlight:!0,getOptionLabel:function(e){return function(e){return"en"===a?e.titleEn||"":"fr"===a?e.titleFr||"":e.titleAr||""}(e)||""},renderOption:function(e,t){return(0,z.jsx)(k.Z,(0,i.Z)((0,i.Z)({component:"li"},e),{},{children:t.titleEn}))},renderInput:function(e){return(0,z.jsx)(W.Z,(0,i.Z)((0,i.Z)({},e),{},{label:"Category",inputProps:(0,i.Z)((0,i.Z)({},e.inputProps),{},{form:{autocomplete:"off"},autoComplete:"off"})}))}}),(0,z.jsx)(b.Z,{id:"component-helper-text",children:t.errors.category})]})}),(0,z.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,z.jsxs)(j.Z,{fullWidth:!0,error:t.touched.address&&Boolean(t.errors.address),children:[(0,z.jsx)(ce.Z,{id:"country-select",fullWidth:!0,size:"small",options:n,value:t.values.address,onChange:function(e,n){return t.setFieldValue("address",n||"")},autoHighlight:!0,getOptionLabel:function(e){return(null===e||void 0===e?void 0:e.city)||""},renderOption:function(e,t){return(0,z.jsx)(k.Z,(0,i.Z)((0,i.Z)({component:"li"},e),{},{children:t.city}))},renderInput:function(e){return(0,z.jsx)(W.Z,(0,i.Z)((0,i.Z)({},e),{},{label:"Address",inputProps:(0,i.Z)((0,i.Z)({},e.inputProps),{},{form:{autocomplete:"off"},autoComplete:"off"})}))}}),(0,z.jsx)(b.Z,{id:"component-helper-text",children:t.touched.address&&t.errors.address})]})})]})})}var he=n(33381),me=n(495),xe=n.n(me);n(75823);function ye(e){var t=e.defaultValue,n=e.callbcakHandleChange;return s.useEffect((function(){console.log("defaultValue ",t)}),[t]),(0,z.jsx)(xe(),{lang:"en",defaultValue:t||"",setOptions:{height:"200",buttonList:[["undo","redo","font","fontSize","formatBlock"]]},onChange:function(e){n(e)}})}var je=n(85281),Ze=n(35044),ge=n(97551),Oe=n(50537),ve={selectedFiles:[],progress:0,message:"",fileInfos:[]},be=[],Fe={typeOffer:"",title:"",description:"",amount:"",startDate:"",endDate:"",periodRent:"",address:null,category:null,typeFindOffer:""},Se=function(e){var t=s.useState(!1),n=(0,l.Z)(t,2),o=n[0],f=n[1],A=s.useState(ve),T=(0,l.Z)(A,2),J=T[0],I=T[1],w=s.useState(be),W=(0,l.Z)(w,2),N=W[0],H=W[1],M=s.useState(!1),le=(0,l.Z)(M,2),se=le[0],oe=le[1],de=s.useState(-1),ae=(0,l.Z)(de,2),ce=ae[0],me=ae[1],xe=s.useState("fr"),ge=(0,l.Z)(xe,2),Se=ge[0],_e=ge[1],Ee=(0,a.k6)(),Re=(0,q.$)().t,Ce=e.loadingEntitySellerOffer,Pe=e.loadingEntityRentOffer,De=e.isAuthenticated,Ae=(e.currentUser,e.getEntityOffer),ke=e.entitiesAddress,Te=e.entitiesCategory,Je=e.resetSellerOffer,Ie=e.resetRentOffer,we=e.resetFindOffer,ze=e.entityOffer,Ve=(0,$.TA)({initialValues:Fe,validationSchema:d,onSubmit:function(e){De?Ne(e):Ee.push(m.H.LOGIN)}}),We=(0,a.UO)().id;s.useEffect((function(){We?Ae(Number(We)||-1):(Ve.resetForm(),I(ve))}),[We]),s.useEffect((function(){ue.Z.on("languageChanged",(function(e){_e(e)})),setTimeout((function(){f(!0)}),300),e.getPublicEntity()}),[]),s.useEffect((function(){!fe()(ze)&&We&&(!function(e,t){e.setFieldValue("typeOffer",t.typeOffer?t.typeOffer:""),e.setFieldValue("title",t.title?t.title:""),e.setFieldValue("description",t.description?t.description:""),e.setFieldValue("address",t.address?t.address:null),e.setFieldValue("category",t.category?t.category:null)}(Ve,ze),I((0,i.Z)((0,i.Z)({},J),{},{selectedFiles:null!==ze&&void 0!==ze&&ze.offerImages&&(null===ze||void 0===ze?void 0:ze.offerImages.length)>0?null===ze||void 0===ze?void 0:ze.offerImages.map((function(e){return e.path=(0,G.Ce)(null===ze||void 0===ze?void 0:ze.id,null===e||void 0===e?void 0:e.path)})):[]})))}),[ze]),s.useEffect((function(){if(e.addSuccessSellerOffer||e.updateSuccessSellerOffer){var t,n=(null===(t=e.entitySellerOffer)||void 0===t?void 0:t.id)||-1;He(n),Je(),Ee.push(m.H.OFFER.MY_OFFERS)}else if(e.addSuccessRentOffer||e.updateSuccessRentOffer){var r,i=(null===(r=e.entityRentOffer)||void 0===r?void 0:r.id)||-1;He(i),Ie(),Ee.push(m.H.OFFER.MY_OFFERS)}else if(e.addSuccessFindOffer||e.updateSuccessFindOffer){var l,s=(null===(l=e.entityFindOffer)||void 0===l?void 0:l.id)||-1;He(s),we(),Ee.push(m.H.OFFER.MY_OFFERS)}}),[e.addSuccessSellerOffer,e.updateSuccessSellerOffer,e.addSuccessRentOffer,e.updateSuccessRentOffer,e.addSuccessFindOffer,e.updateSuccessFindOffer]);var Ne=function(t){var n=[];N.map((function(e){n.push({path:null===e||void 0===e?void 0:e.name,dateCreated:(0,G.uJ)(new Date)})}));var r,l,s,o=(0,i.Z)((0,i.Z)((0,i.Z)({},ze),{},{dateCreated:(0,G.uJ)(new Date)},t),{},{user:{},offerImages:n.slice()});null!==t&&void 0!==t&&t.address&&(o.address={id:null===t||void 0===t||null===(r=t.address)||void 0===r?void 0:r.id,city:null===t||void 0===t||null===(l=t.address)||void 0===l?void 0:l.city});null!==t&&void 0!==t&&t.category&&(o.category={id:null===t||void 0===t||null===(s=t.category)||void 0===s?void 0:s.id});o.startDate&&o.endDate&&(o.startDate=(0,G.uJ)(o.startDate),o.endDate=(0,G.uJ)(o.endDate)),We?Ve.values.typeOffer===O.dJ.Sell?e.updateEntitySell(o):Ve.values.typeOffer===O.dJ.Rent?e.updateEntityRent(o):Ve.values.typeOffer===O.dJ.Find&&e.updateEntityFind(o):Ve.values.typeOffer===O.dJ.Sell?e.createEntitySellerOffer(o):Ve.values.typeOffer===O.dJ.Rent?e.createEntityRentOffer(o):Ve.values.typeOffer===O.dJ.Find&&e.createEntityFindOffer(o)},He=function(t){if(console.log("upladAllFiles"),N.length){var n,i=new FormData,l=(0,r.Z)(N);try{for(l.s();!(n=l.n()).done;){var s=n.value;i.append("files",s,s.name),i.append("offerId",t.toString())}}catch(o){l.e(o)}finally{l.f()}e.uploadFiles(i)}},Me=function(){oe(!1),J.selectedFiles.splice(ce,1)},qe=function(){oe(!1)},Le=function(e){console.log("onChangeValue ",e),Ve.setFieldValue("description",e||"")};return(0,z.jsx)(ie.Z,{direction:"up",in:o,mountOnEnter:!0,unmountOnExit:!0,children:(0,z.jsxs)(u.Z,{maxWidth:"xl",className:"page-add-offer",children:[(0,z.jsx)(c.ZP,{container:!0,style:{paddingTop:10},children:(0,z.jsx)(c.ZP,{item:!0,xs:12,children:(0,z.jsxs)(p.Z,{"aria-label":"breadcrumb",children:[(0,z.jsx)(h.rU,{color:"inherit",to:m.H.HOME,children:"SRF"}),(0,z.jsx)(x.Z,{color:"text.primary",children:Re("add_offer.title_page")})]})})}),(0,z.jsxs)(c.ZP,{container:!0,children:[(0,z.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,z.jsx)(y.Z,{elevation:3,sx:{p:2,mt:6},children:e.loadingEntity?(0,z.jsx)(k.Z,{sx:{pt:10,pb:10,textAlign:"center"},children:(0,z.jsx)(je.Z,{color:"inherit"})}):(0,z.jsxs)(k.Z,{children:[(0,z.jsx)("h3",{className:"mb-3",children:Re("add_offer.label_publish_new_offer")}),(0,z.jsx)("form",{onSubmit:Ve.handleSubmit,children:(0,z.jsxs)(c.ZP,{container:!0,spacing:1,children:[(0,z.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,z.jsxs)(j.Z,{fullWidth:!0,size:"small",error:Ve.touched.typeOffer&&Boolean(Ve.errors.typeOffer),className:"form-control-type-offer",children:[(0,z.jsx)(Z.Z,{id:"label-component-helper-typeOffer",className:"type-offer-select",children:(0,z.jsx)("span",{children:Re("add_offer.label_type_offer")})}),(0,z.jsxs)(v.Z,{id:"typeOffer",name:"typeOffer",label:"Type",labelId:"demo-simple-select-label",value:Ve.values.typeOffer,onChange:Ve.handleChange,children:[(0,z.jsx)(g.Z,{value:O.dJ.Sell,children:Re("common.for_sell")}),(0,z.jsx)(g.Z,{value:O.dJ.Rent,children:Re("common.for_rent")}),(0,z.jsx)(g.Z,{value:O.dJ.Find,children:Re("common.for_find")})]}),(0,z.jsx)(b.Z,{id:"component-helper-text-typeOffer",children:Ve.touched.typeOffer&&Ve.errors.typeOffer})]})}),(0,z.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,z.jsxs)(j.Z,{fullWidth:!0,size:"small",error:Ve.touched.title&&Boolean(Ve.errors.title),children:[(0,z.jsx)(Z.Z,{htmlFor:"outlined-adornment-title",children:Re("add_offer.label_title_offer")}),(0,z.jsx)(F.Z,{id:"title",name:"title",label:"Title",value:Ve.values.title,onChange:Ve.handleChange}),(0,z.jsx)(b.Z,{id:"component-helper-text",children:Ve.touched.title&&Ve.errors.title})]})}),(0,z.jsx)(c.ZP,{item:!0,xs:12,md:12,children:(0,z.jsxs)(j.Z,{fullWidth:!0,sx:{mt:3},error:Ve.touched.description&&Boolean(Ve.errors.description),children:[We&&null!==ze&&void 0!==ze&&ze.description?(0,z.jsx)(ye,{defaultValue:null===ze||void 0===ze?void 0:ze.description,callbcakHandleChange:Le}):(0,z.jsx)(ye,{defaultValue:"",callbcakHandleChange:Le}),(0,z.jsx)(b.Z,{id:"component-helper-text",children:Ve.touched.description&&Ve.errors.description})]})}),(0,z.jsx)(c.ZP,{item:!0,xs:12,md:12,sx:{mb:3},children:(0,z.jsxs)(S.Z,{sx:{width:"100%",height:"auto",mt:3,mb:0},cols:5,children:[J&&J.selectedFiles&&J.selectedFiles.length>0?J.selectedFiles.map((function(e,t){return(0,z.jsxs)(_.Z,{style:{marginRight:4,borderRadius:4},children:[(0,z.jsx)("img",{src:e,srcSet:e,alt:"desc_"+t,loading:"lazy",style:{borderRadius:4,border:"1px solid #b7b1b1"}}),(0,z.jsx)(E.Z,{size:"small","aria-label":"delete",color:"error",sx:{position:"absolute",top:0,right:0,backgroundColor:"#fff"},onClick:function(){return function(e){me(e),oe(!0)}(t)},children:(0,z.jsx)(R.Z,{})})]},t)})):null,(0,z.jsxs)(_.Z,{children:[(0,z.jsx)("img",{src:"".concat((0,G.K1)("/assets/images/offer/add-offer/img_add_offer.png")),srcSet:"".concat((0,G.K1)("/assets/images/offer/add-offer/img_add_offer.png")),alt:"img_add_offer",loading:"lazy",style:{borderRadius:4,border:"1px solid #b7b1b1"}}),(0,z.jsx)("input",{id:"offer-addFiles","data-cy":"files",type:"file",name:"files",style:{position:"absolute",maxWidth:"100%",top:0,bottom:0,opacity:0},multiple:!0,accept:"image/png, image/gif, image/jpeg, image/jpg",onChange:function(e){if(e.target.files&&e.target.files.length<=K.zb.MaxNbeImagePerOffer){var t=[],n=[];Array.from(e.target.files).forEach((function(e){(0,G.y3)(e).then((function(r){(0,G.Bo)(r,e.name).then((function(e){n.push(e)})),t.push(r),I((0,i.Z)((0,i.Z)({},J),{},{selectedFiles:t.slice()})),H(n)}))}))}else alert("Ouups, max number is 5")}})]})]})}),(0,z.jsx)(c.ZP,{item:!0,xs:12,md:12,children:(0,z.jsxs)(C.Z,{sx:{width:"100%"},children:[(0,z.jsxs)(P.Z,{expandIcon:(0,z.jsx)(B.Z,{sx:{backgroundColor:"yellow",borderRadius:"50%"}}),"aria-controls":"panel1a-content",id:"panel1a-header",className:"bg-brown",onClick:function(){(0,Ze.rJ)(Ze.Yt.EventOffer.ShowMoreOption.eventName,Ze.Yt.EventOffer.ShowMoreOption.eventCategory,Ze.Yt.EventOffer.ShowMoreOption.eventLabel)},children:[(0,z.jsx)(Oe.Z,{className:"zoom-in-out-box",sx:{color:"yellow",mr:1}}),(0,z.jsx)(x.Z,{sx:{textDecoration:"underline"},children:Re("add_offer.label_more_options")})]}),(0,z.jsxs)(D.Z,{sx:{pt:4},children:[Ve.values.typeOffer?(0,z.jsx)(pe,{formik:Ve,cities:ke,listCategories:Te}):null,Ve.values.typeOffer===O.dJ.Sell?(0,z.jsx)(V,{formik:Ve}):Ve.values.typeOffer===O.dJ.Rent?(0,z.jsx)(L,{formik:Ve}):Ve.values.typeOffer===O.dJ.Find?(0,z.jsx)(Y,{formik:Ve}):(0,z.jsx)(x.Z,{variant:"subtitle2",color:"text.secondary",children:Re("add_offer.label_select_offer_plz")})]})]})}),(0,z.jsx)(c.ZP,{item:!0,xs:12,md:12,children:(0,z.jsx)(U.Z,{loading:!0===Ce||!0===Pe,fullWidth:!0,variant:"contained",color:"neutral",type:"submit",sx:{mt:3,mb:2},children:Re(We?"add_offer.label_update_offer":"add_offer.label_add_offer")})})]})})]})})}),(0,z.jsx)(c.ZP,{item:!0,xs:12,sm:6,sx:{p:2,mt:6},children:e.loadingDescriptionAddOfferEntity?(0,z.jsx)(k.Z,{sx:{textAlign:"center"},children:(0,z.jsx)(je.Z,{color:"inherit"})}):(0,z.jsx)("div",{dangerouslySetInnerHTML:{__html:"en"===Se?e.entityDescriptionAddOffer.descriptionEn||"":"fr"===Se?e.entityDescriptionAddOffer.descriptionFr||"":e.entityDescriptionAddOffer.descriptionAr||""}})})]}),(0,z.jsx)("div",{children:(0,z.jsxs)(Q.Z,{open:se,TransitionComponent:he.P,keepMounted:!0,onClose:qe,"aria-describedby":"alert-dialog-slide-description",children:[(0,z.jsx)(X.Z,{children:"Confirm delete operation"}),(0,z.jsx)(ee.Z,{children:(0,z.jsx)(te.Z,{id:"alert-dialog-slide-description",children:"Are you sure you want to delete this CommentOffer?"})}),(0,z.jsxs)(ne.Z,{children:[(0,z.jsx)(re.Z,{onClick:qe,children:"Cancel"}),(0,z.jsx)(re.Z,{onClick:Me,color:"error",children:"Delete"})]})]})})]})})},_e={createEntitySellerOffer:se.JP,resetSellerOffer:se.mc,uploadFiles:le.IL,createEntityRentOffer:oe.JP,resetRentOffer:oe.mc,createEntityFindOffer:de.JP,resetFindOffer:de.mc,getEntityOffer:le.Hv,resetOffer:le.mc,updateEntitySell:se.i8,updateEntityRent:oe.i8,updateEntityFind:de.i8,getPublicEntity:ge.dp},Ee=(0,f.connect)((function(e){var t=e.user,n=e.offer,r=e.sellOffer,i=e.rentOffer,l=e.findOffer,s=e.address,o=e.category,d=e.descriptionAddOffer;return{isAuthenticated:t.isAuthenticated,currentUser:t.currentUser,loadingEntitySellerOffer:r.loadingEntity,entitySellerOffer:r.entity,updateSuccessSellerOffer:r.updateSuccess,addSuccessSellerOffer:r.addSuccess,loadingEntityRentOffer:i.loadingEntity,entityRentOffer:i.entity,updateSuccessRentOffer:i.updateSuccess,addSuccessRentOffer:i.addSuccess,loadingEntityFindOffer:l.loadingEntity,entityFindOffer:l.entity,updateSuccessFindOffer:l.updateSuccess,addSuccessFindOffer:l.addSuccess,entityOfferWithFavoriteUser:n.entityWithFavoriteUser,entityOffer:n.entity,loadingEntity:n.loadingEntity,loadingEntitiesAddress:s.loadingEntities,entitiesAddress:s.entities,updateSuccessAddress:s.updateSuccess,loadingEntitiesCategory:o.loadingEntities,entitiesCategory:o.entities,loadingDescriptionAddOfferEntity:d.loadingEntity,entityDescriptionAddOffer:d.entity}}),_e)(Se)},48757:function(e,t,n){"use strict";var r,i,l,s;n.d(t,{dJ:function(){return r},b1:function(){return i},DO:function(){return l},iU:function(){return s}}),function(e){e.Sell="SellOffer",e.Rent="RentOffer",e.Find="FindOffer"}(r||(r={})),function(e){e.PerYear="PER_YEAR",e.PerMonth="PER_MONTH",e.PerDay="PER_DAY"}(i||(i={})),function(e){e.Carpooling="Carpooling",e.Travels="Travels",e.Transporter="Transporter",e.Job="Job"}(l||(l={})),function(e){e.List="LIST",e.Grid="GRID"}(s||(s={}))},33381:function(e,t,n){"use strict";n.d(t,{P:function(){return o}});var r=n(1413),i=n(47313),l=n(50301),s=n(46417),o=i.forwardRef((function(e,t){return(0,s.jsx)(l.Z,(0,r.Z)({direction:"up",ref:t},e))}))},3829:function(e,t,n){var r={"./ckb.js":88692,"./da.js":9065,"./de.js":82934,"./en.js":73554,"./es.js":80809,"./fr.js":58838,"./he.js":93396,"./index.js":79214,"./it.js":28056,"./ja.js":41357,"./ko.js":61934,"./lv.js":94521,"./nl.js":30306,"./pl.js":77593,"./pt_br.js":44565,"./ro.js":37395,"./ru.js":71281,"./se.js":54634,"./ua.js":68975,"./zh_cn.js":43875};function i(e){var t=l(e);return n(t)}function l(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=l,e.exports=i,i.id=3829}}]);