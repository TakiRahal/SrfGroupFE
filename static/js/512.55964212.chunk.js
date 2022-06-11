"use strict";(self.webpackChunksrf_group=self.webpackChunksrf_group||[]).push([[512],{26776:function(e,o,t){t.r(o),t.d(o,{Account:function(){return he},default:function(){return pe}});var n=t(1413),r=t(29439),a=t(72791),i=t(26445),s=t(8374),l=t(57901),d=t(98530),c=t(13239),u=t(61889),h=t(10703),m=t(93044),p=t(25901),x=t(2868),f=t(92506),g=t(62797),Z=g.Ry({email:g.Z_().required("Email is required"),langKey:g.Z_().required("login is required"),firstName:g.Z_().required("firstName is required"),lastName:g.Z_().required("lastName is required"),phone:g.Z_().required("Phone is required"),address:g.Ry().nullable().notRequired(),linkProfileFacebook:g.Z_().nullable().notRequired()}),b=g.Ry({currentPassword:g.Z_().required("currentPassword is required"),newPassword:g.Z_().required("Password is required").min(5,"Min 5 digits").max(200,"Max 200 digits"),confirmNewPassword:g.Z_().required("Password is required").oneOf([g.iH("newPassword"),null],"Passwords must match").min(5,"Muin 5 digits").max(200,"Max 5 digits")}),v=t(13400),w=t(41286),j=t(68096),P=t(30829),R=t(77196),y=t(47071),_=t(4942),C=t(63366),k=t(87462),S=t(28182),N=t(865),z=t(48),A=t(14036),B=t(20033),E=t(81894),F=t(89076);function U(e){return(0,F.Z)("MuiButtonGroup",e)}var W=(0,t(59046).Z)("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary"]),M=t(91793),L=t(80184),I=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],O=(0,B.ZP)("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[(0,_.Z)({},"& .".concat(W.grouped),o.grouped),(0,_.Z)({},"& .".concat(W.grouped),o["grouped".concat((0,A.Z)(t.orientation))]),(0,_.Z)({},"& .".concat(W.grouped),o["grouped".concat((0,A.Z)(t.variant))]),(0,_.Z)({},"& .".concat(W.grouped),o["grouped".concat((0,A.Z)(t.variant)).concat((0,A.Z)(t.orientation))]),(0,_.Z)({},"& .".concat(W.grouped),o["grouped".concat((0,A.Z)(t.variant)).concat((0,A.Z)(t.color))]),o.root,o[t.variant],!0===t.disableElevation&&o.disableElevation,t.fullWidth&&o.fullWidth,"vertical"===t.orientation&&o.vertical]}})((function(e){var o=e.theme,t=e.ownerState;return(0,k.Z)({display:"inline-flex",borderRadius:o.shape.borderRadius},"contained"===t.variant&&{boxShadow:o.shadows[2]},t.disableElevation&&{boxShadow:"none"},t.fullWidth&&{width:"100%"},"vertical"===t.orientation&&{flexDirection:"column"},(0,_.Z)({},"& .".concat(W.grouped),(0,k.Z)({minWidth:40,"&:not(:first-of-type)":(0,k.Z)({},"horizontal"===t.orientation&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},"vertical"===t.orientation&&{borderTopRightRadius:0,borderTopLeftRadius:0},"outlined"===t.variant&&"horizontal"===t.orientation&&{marginLeft:-1},"outlined"===t.variant&&"vertical"===t.orientation&&{marginTop:-1}),"&:not(:last-of-type)":(0,k.Z)({},"horizontal"===t.orientation&&{borderTopRightRadius:0,borderBottomRightRadius:0},"vertical"===t.orientation&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},"text"===t.variant&&"horizontal"===t.orientation&&{borderRight:"1px solid ".concat("light"===o.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"text"===t.variant&&"vertical"===t.orientation&&{borderBottom:"1px solid ".concat("light"===o.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"text"===t.variant&&"inherit"!==t.color&&{borderColor:(0,z.Fq)(o.palette[t.color].main,.5)},"outlined"===t.variant&&"horizontal"===t.orientation&&{borderRightColor:"transparent"},"outlined"===t.variant&&"vertical"===t.orientation&&{borderBottomColor:"transparent"},"contained"===t.variant&&"horizontal"===t.orientation&&(0,_.Z)({borderRight:"1px solid ".concat(o.palette.grey[400])},"&.".concat(W.disabled),{borderRight:"1px solid ".concat(o.palette.action.disabled)}),"contained"===t.variant&&"vertical"===t.orientation&&(0,_.Z)({borderBottom:"1px solid ".concat(o.palette.grey[400])},"&.".concat(W.disabled),{borderBottom:"1px solid ".concat(o.palette.action.disabled)}),"contained"===t.variant&&"inherit"!==t.color&&{borderColor:o.palette[t.color].dark},{"&:hover":(0,k.Z)({},"outlined"===t.variant&&"horizontal"===t.orientation&&{borderRightColor:"currentColor"},"outlined"===t.variant&&"vertical"===t.orientation&&{borderBottomColor:"currentColor"})}),"&:hover":(0,k.Z)({},"contained"===t.variant&&{boxShadow:"none"})},"contained"===t.variant&&{boxShadow:"none"})))})),q=a.forwardRef((function(e,o){var t=(0,E.Z)({props:e,name:"MuiButtonGroup"}),n=t.children,r=t.className,i=t.color,s=void 0===i?"primary":i,l=t.component,d=void 0===l?"div":l,c=t.disabled,u=void 0!==c&&c,h=t.disableElevation,m=void 0!==h&&h,p=t.disableFocusRipple,x=void 0!==p&&p,f=t.disableRipple,g=void 0!==f&&f,Z=t.fullWidth,b=void 0!==Z&&Z,v=t.orientation,w=void 0===v?"horizontal":v,j=t.size,P=void 0===j?"medium":j,R=t.variant,y=void 0===R?"outlined":R,_=(0,C.Z)(t,I),z=(0,k.Z)({},t,{color:s,component:d,disabled:u,disableElevation:m,disableFocusRipple:x,disableRipple:g,fullWidth:b,orientation:w,size:P,variant:y}),B=function(e){var o=e.classes,t=e.color,n=e.disabled,r=e.disableElevation,a=e.fullWidth,i=e.orientation,s=e.variant,l={root:["root",s,"vertical"===i&&"vertical",a&&"fullWidth",r&&"disableElevation"],grouped:["grouped","grouped".concat((0,A.Z)(i)),"grouped".concat((0,A.Z)(s)),"grouped".concat((0,A.Z)(s)).concat((0,A.Z)(i)),"grouped".concat((0,A.Z)(s)).concat((0,A.Z)(t)),n&&"disabled"]};return(0,N.Z)(l,U,o)}(z),F=a.useMemo((function(){return{className:B.grouped,color:s,disabled:u,disableElevation:m,disableFocusRipple:x,disableRipple:g,fullWidth:b,size:P,variant:y}}),[s,u,m,x,g,b,P,y,B.grouped]);return(0,L.jsx)(O,(0,k.Z)({as:d,role:"group",className:(0,S.Z)(B.root,r),ref:o,ownerState:z},_,{children:(0,L.jsx)(M.Z.Provider,{value:F,children:n})}))})),V=t(24518),T=t(39709),D=t(64558),H=t(872),K=t(53113),G=t(20890),J=t(43504),Q=t(93517),$=t(51896),X=t(62434),Y=t(48550),ee=t(63466),oe=t(29569),te=t(3710),ne=t(33168),re=t(58406),ae=t(23786),ie=t(93210),se=t(89012),le=t(70870),de=t(30716),ce={email:"",langKey:"",firstName:"",lastName:"",phone:"",address:null,linkProfileFacebook:""},ue={currentPassword:"",newPassword:"",confirmNewPassword:""},he=function(e){var o,t=a.useState((0,p.Dm)(e.account.id,e.account.imageUrl,e.account.sourceRegister)),s=(0,r.Z)(t,2),l=s[0],g=s[1],_=a.useState(!1),C=(0,r.Z)(_,2),k=C[0],S=C[1],N=a.useState(null),z=(0,r.Z)(N,2),A=z[0],B=z[1],E=a.useState(!1),F=(0,r.Z)(E,2),U=F[0],W=F[1],M=a.useState({showPassword:!1}),I=(0,r.Z)(M,2),O=I[0],he=I[1],me=a.useState({showPassword:!1}),pe=(0,r.Z)(me,2),xe=pe[0],fe=pe[1],ge=a.useState({showPassword:!1}),Ze=(0,r.Z)(ge,2),be=Ze[0],ve=Ze[1],we=(0,ne.$)().t,je=e.getCurrentUser,Pe=e.account,Re=e.loadingAccount,ye=e.uploadAvatar,_e=(0,f.TA)({initialValues:ce,validationSchema:Z,onSubmit:function(o){var t=(0,n.Z)((0,n.Z)({},e.account),o);e.updateInfosUser(t)}}),Ce=(0,f.TA)({initialValues:ue,validationSchema:b,onSubmit:function(o){e.updatePasswordUser(o)}}),ke=function(e){e.preventDefault()};a.useEffect((function(){je()}),[]),a.useEffect((function(){e.updateSuccessPasswordAccount&&(W(!1),Ce.resetForm())}),[e.updateSuccessPasswordAccount]),a.useEffect((function(){Pe&&(g((0,p.Dm)(e.account.id,e.account.imageUrl,e.account.sourceRegister)),_e.setValues({email:Pe.email?Pe.email:"",langKey:Pe.langKey?Pe.langKey:"",firstName:Pe.firstName?Pe.firstName:"",lastName:Pe.lastName?Pe.lastName:"",phone:Pe.phone?Pe.phone:"",address:Pe.address?Pe.address:null,linkProfileFacebook:Pe.linkProfileFacebook?Pe.linkProfileFacebook:""}))}),[Pe]),a.useEffect((function(){if(e.updateSuccessInfosAccount){S(!1);var o=JSON.parse(le.V1.local.get(se.z.VALUE_CURRENT_USER));(0,n.Z)((0,n.Z)({},o),e.entityUpdateInfosAccount);le.V1.local.set(se.z.VALUE_CURRENT_USER,JSON.stringify(Pe))}}),[e.updateSuccessInfosAccount]),a.useEffect((function(){if(A){var e=new FormData;e.append("avatar",A),ye(e)}}),[A]);return(0,L.jsxs)(i.Z,{maxWidth:"xl",className:"pt-5",children:[(0,L.jsx)(u.ZP,{container:!0,style:{paddingTop:10},children:(0,L.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,L.jsxs)(Q.Z,{"aria-label":"breadcrumb",children:[(0,L.jsx)(J.rU,{color:"inherit",to:K.H.HOME,children:"SRF"}),(0,L.jsx)(J.rU,{color:"inherit",to:K.H.SEARCH,children:we("account.title")}),(0,L.jsx)(G.Z,{color:"text.primary",children:(0,p.QD)(e.account)})]})})}),Re?(0,L.jsx)(d.Z,{sx:{textAlign:"center"},children:(0,L.jsx)(c.Z,{color:"inherit"})}):(0,L.jsxs)(u.ZP,{container:!0,spacing:4,style:{paddingTop:50},children:[(0,L.jsx)(u.ZP,{item:!0,xs:12,sm:3,sx:{textAlign:"center"},children:(0,L.jsxs)(h.Z,{elevation:3,sx:{p:1},children:[(0,L.jsxs)(d.Z,{sx:{position:"relative"},children:[(0,L.jsxs)(d.Z,{sx:{position:"relative",width:"80px",marginLeft:"auto",marginRight:"auto"},children:[(0,L.jsx)(m.Z,{alt:"Remy Sharp",src:l,sx:{width:80,height:80,marginLeft:"auto",marginRight:"auto",marginBottom:2,mt:2,border:"1px solid #f2f3f7"},children:null===(o=(0,p.QD)(e.account))||void 0===o?void 0:o.charAt(0)}),Pe.sourceRegister===de.c.MOBILE_BROWSER||Pe.sourceRegister===de.c.WEB_BROWSER?(0,L.jsx)(d.Z,{sx:{position:"absolute",bottom:0,right:0},children:(0,L.jsx)(x.Z,{})}):null]}),Pe.sourceRegister===de.c.MOBILE_BROWSER||Pe.sourceRegister===de.c.WEB_BROWSER?(0,L.jsx)(d.Z,{children:(0,L.jsx)("input",{type:"file",onChange:function(e){(0,$.J)(e.target.files[0],500).then((function(o){(0,p.Bo)(o,e.target.files[0].name).then((function(e){B(e)})),g(o)}))},style:{position:"absolute",top:0,bottom:0,left:0,right:0,opacity:0}})}):null]}),(0,L.jsx)("h3",{children:(0,p.QD)(e.account)}),(0,L.jsx)("p",{children:e.account.email})]})}),(0,L.jsxs)(u.ZP,{item:!0,xs:12,sm:8,children:[(0,L.jsx)(h.Z,{elevation:3,sx:{p:2},children:(0,L.jsx)("form",{onSubmit:_e.handleSubmit,children:(0,L.jsxs)(d.Z,{sx:{mt:2},children:[(0,L.jsxs)("h5",{className:"mb-4",children:[we("account.label_personnel_details"),k?null:(0,L.jsx)(v.Z,{"aria-label":"upload picture",className:"float-right",component:"span",color:"success",onClick:function(){return S(!0)},children:(0,L.jsx)(w.Z,{})})]}),(0,L.jsxs)(u.ZP,{container:!0,spacing:2,children:[(0,L.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,L.jsxs)(j.Z,{fullWidth:!0,error:_e.touched.email&&Boolean(_e.errors.email),size:"small",children:[(0,L.jsx)(P.Z,{htmlFor:"outlined-adornment-title",children:we("account.label_email")}),(0,L.jsx)(R.Z,{id:"email",name:"email",label:we("account.label_email"),value:_e.values.email,onChange:_e.handleChange,disabled:!0}),(0,L.jsx)(y.Z,{id:"component-helper-text",children:_e.touched.email&&_e.errors.email})]})}),(0,L.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,L.jsxs)(j.Z,{fullWidth:!0,error:_e.touched.langKey&&Boolean(_e.errors.langKey),size:"small",children:[(0,L.jsx)(P.Z,{htmlFor:"outlined-adornment-title",children:we("account.label_languages")}),(0,L.jsx)(re.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:we("account.label_languages"),value:_e.values.langKey,onChange:function(e){_e.setFieldValue("langKey",e.target.value)},disabled:!k,children:Object.keys(ie.Mj).length>1?ie.k1.map((function(e){return(0,L.jsx)(ae.Z,{value:e,children:ie.Mj[e].name},e)})):null}),(0,L.jsx)(y.Z,{id:"component-helper-text",children:_e.touched.langKey&&_e.errors.langKey})]})})]}),(0,L.jsxs)(u.ZP,{container:!0,spacing:2,sx:{mt:1},children:[(0,L.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,L.jsxs)(j.Z,{fullWidth:!0,error:_e.touched.firstName&&Boolean(_e.errors.firstName),size:"small",children:[(0,L.jsxs)(P.Z,{htmlFor:"outlined-adornment-title",children:[we("account.label_firstname")," *"]}),(0,L.jsx)(R.Z,{id:"firstName",name:"firstName",label:we("account.label_firstname"),value:_e.values.firstName,onChange:_e.handleChange,disabled:!k}),(0,L.jsx)(y.Z,{id:"component-helper-text",children:_e.touched.firstName&&_e.errors.firstName})]})}),(0,L.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,L.jsxs)(j.Z,{fullWidth:!0,error:_e.touched.lastName&&Boolean(_e.errors.lastName),size:"small",children:[(0,L.jsxs)(P.Z,{htmlFor:"outlined-adornment-title",children:[we("account.label_lastname")," *"]}),(0,L.jsx)(R.Z,{id:"lastName",name:"lastName",label:we("account.label_lastname"),value:_e.values.lastName,onChange:_e.handleChange,disabled:!k}),(0,L.jsx)(y.Z,{id:"component-helper-text",children:_e.touched.lastName&&_e.errors.lastName})]})})]}),(0,L.jsxs)(u.ZP,{container:!0,spacing:2,sx:{mt:1},children:[(0,L.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,L.jsxs)(j.Z,{fullWidth:!0,error:_e.touched.phone&&Boolean(_e.errors.phone),size:"small",children:[(0,L.jsxs)(P.Z,{htmlFor:"outlined-adornment-title",children:[we("account.label_phone")," *"]}),(0,L.jsx)(R.Z,{id:"phone",name:"phone",label:we("account.label_phone"),type:"tel",value:_e.values.phone,onChange:_e.handleChange,disabled:!k}),(0,L.jsx)(y.Z,{id:"component-helper-text",children:_e.touched.phone&&_e.errors.phone})]})}),(0,L.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,L.jsxs)(j.Z,{fullWidth:!0,error:_e.touched.address&&Boolean(_e.errors.address),children:[(0,L.jsx)(X.Z,{id:"address",fullWidth:!0,size:"small",options:e.entitiesAddress,value:_e.values.address,onChange:function(e,o){return _e.setFieldValue("address",o||"")},autoHighlight:!0,getOptionLabel:function(e){return(null===e||void 0===e?void 0:e.city)||""},disabled:!k,renderOption:function(e,o){return(0,L.jsx)(d.Z,(0,n.Z)((0,n.Z)({component:"li"},e),{},{children:o.city}))},renderInput:function(e){return(0,L.jsx)(Y.Z,(0,n.Z)((0,n.Z)({},e),{},{label:"Address",inputProps:(0,n.Z)((0,n.Z)({},e.inputProps),{},{form:{autocomplete:"off"},autoComplete:"off"})}))}}),(0,L.jsx)(y.Z,{id:"component-helper-text",children:_e.touched.address&&_e.errors.address})]})})]}),(0,L.jsxs)(u.ZP,{container:!0,spacing:2,sx:{mt:1},children:[(0,L.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,L.jsxs)(j.Z,{fullWidth:!0,error:_e.touched.linkProfileFacebook&&Boolean(_e.errors.linkProfileFacebook),size:"small",children:[(0,L.jsx)(P.Z,{htmlFor:"outlined-adornment-title",children:we("account.label_link_profile_facebook")}),(0,L.jsx)(R.Z,{id:"linkProfileFacebook",name:"linkProfileFacebook",type:"url",label:we("account.label_link_profile_facebook"),value:_e.values.linkProfileFacebook,onChange:_e.handleChange,disabled:!k}),(0,L.jsx)(y.Z,{id:"component-helper-text",children:_e.touched.linkProfileFacebook&&_e.errors.linkProfileFacebook})]})}),(0,L.jsx)(u.ZP,{item:!0,xs:12,md:6})]}),k?(0,L.jsx)(u.ZP,{container:!0,spacing:2,sx:{mt:2},children:(0,L.jsx)(u.ZP,{item:!0,xs:12,md:12,children:(0,L.jsxs)(q,{variant:"contained","aria-label":"outlined primary button group",style:{float:"right"},children:[(0,L.jsx)(V.Z,{color:"neutral",variant:"outlined",startIcon:(0,L.jsx)(D.Z,{}),onClick:function(){return S(!1)},children:we("common.label_cancel")}),(0,L.jsx)(T.Z,{color:"success",type:"submit",loading:e.loadingUpdateInfosAccount,loadingPosition:"start",startIcon:(0,L.jsx)(H.Z,{}),variant:"contained",size:"small",children:we("common.label_update")})]})})}):null]})})}),Pe.sourceRegister===de.c.MOBILE_BROWSER||Pe.sourceRegister===de.c.WEB_BROWSER?(0,L.jsx)(h.Z,{elevation:3,sx:{p:2,mt:4},children:(0,L.jsx)("form",{onSubmit:Ce.handleSubmit,children:(0,L.jsxs)(d.Z,{sx:{mt:2},children:[(0,L.jsxs)("h5",{className:"mb-4",children:[we("account.label_password_details"),U?null:(0,L.jsx)(v.Z,{"aria-label":"upload picture",className:"float-right",component:"span",color:"success",onClick:function(){return W(!0)},children:(0,L.jsx)(w.Z,{})})]}),(0,L.jsx)(u.ZP,{container:!0,spacing:2,children:(0,L.jsx)(u.ZP,{item:!0,xs:12,children:(0,L.jsxs)(j.Z,{fullWidth:!0,error:Ce.touched.currentPassword&&Boolean(Ce.errors.currentPassword),children:[(0,L.jsx)(P.Z,{htmlFor:"outlined-adornment-title",children:we("account.label_current_password")}),(0,L.jsx)(R.Z,{id:"currentPassword",name:"currentPassword",type:O.showPassword?"text":"password",label:we("account.label_current_password"),value:Ce.values.currentPassword,onChange:Ce.handleChange,disabled:!U,endAdornment:(0,L.jsx)(ee.Z,{position:"end",children:(0,L.jsx)(v.Z,{"aria-label":"toggle password visibility",onClick:function(){he({showPassword:!O.showPassword})},onMouseDown:ke,edge:"end",children:O.showPassword?(0,L.jsx)(oe.Z,{}):(0,L.jsx)(te.Z,{})})})}),(0,L.jsx)(y.Z,{id:"component-helper-text",children:Ce.touched.currentPassword&&Ce.errors.currentPassword})]})})}),(0,L.jsxs)(u.ZP,{container:!0,spacing:2,sx:{mt:1},children:[(0,L.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,L.jsxs)(j.Z,{fullWidth:!0,error:Ce.touched.newPassword&&Boolean(Ce.errors.newPassword),children:[(0,L.jsx)(P.Z,{htmlFor:"outlined-adornment-title",children:we("account.label_new_password")}),(0,L.jsx)(R.Z,{id:"newPassword",name:"newPassword",type:xe.showPassword?"text":"password",label:we("account.label_new_password"),value:Ce.values.newPassword,onChange:Ce.handleChange,disabled:!U,endAdornment:(0,L.jsx)(ee.Z,{position:"end",children:(0,L.jsx)(v.Z,{"aria-label":"toggle password visibility",onClick:function(){fe({showPassword:!xe.showPassword})},onMouseDown:ke,edge:"end",children:xe.showPassword?(0,L.jsx)(oe.Z,{}):(0,L.jsx)(te.Z,{})})})}),(0,L.jsx)(y.Z,{id:"component-helper-text",children:Ce.touched.newPassword&&Ce.errors.newPassword})]})}),(0,L.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,L.jsxs)(j.Z,{fullWidth:!0,error:Ce.touched.confirmNewPassword&&Boolean(Ce.errors.confirmNewPassword),children:[(0,L.jsx)(P.Z,{htmlFor:"outlined-adornment-title",children:we("account.label_conf_new_password")}),(0,L.jsx)(R.Z,{id:"confirmNewPassword",name:"confirmNewPassword",type:be.showPassword?"text":"password",label:we("account.label_conf_new_password"),value:Ce.values.confirmNewPassword,onChange:Ce.handleChange,disabled:!U,endAdornment:(0,L.jsx)(ee.Z,{position:"end",children:(0,L.jsx)(v.Z,{"aria-label":"toggle password visibility",onClick:function(){ve({showPassword:!be.showPassword})},onMouseDown:ke,edge:"end",children:be.showPassword?(0,L.jsx)(oe.Z,{}):(0,L.jsx)(te.Z,{})})})}),(0,L.jsx)(y.Z,{id:"component-helper-text",children:Ce.touched.confirmNewPassword&&Ce.errors.confirmNewPassword})]})})]}),U?(0,L.jsx)(u.ZP,{container:!0,spacing:2,sx:{mt:2},children:(0,L.jsx)(u.ZP,{item:!0,xs:12,md:12,children:(0,L.jsxs)(q,{variant:"contained","aria-label":"outlined primary button group",style:{float:"right"},children:[(0,L.jsx)(V.Z,{color:"neutral",variant:"outlined",startIcon:(0,L.jsx)(D.Z,{}),onClick:function(){return W(!1)},children:we("common.label_cancel")}),(0,L.jsx)(T.Z,{color:"success",type:"submit",loading:e.loadingPasswordAccount,loadingPosition:"start",startIcon:(0,L.jsx)(H.Z,{}),variant:"contained",size:"small",children:we("account.label_update_password")})]})})}):null]})})}):null]})]})]})},me={getCurrentUser:l.ts,updateInfosUser:l.OC,uploadAvatar:l.gg,updatePasswordUser:l.eq},pe=(0,s.connect)((function(e){var o=e.user,t=e.address;return{loadingAccount:o.loadingAccount,account:o.account,entitiesAddress:t.entities,uploadAvatarSuccess:o.uploadAvatarSuccess,entityUpdateInfosAccount:o.entityUpdateInfosAccount,loadingUpdateInfosAccount:o.loadingUpdateInfosAccount,updateSuccessInfosAccount:o.updateSuccessInfosAccount,loadingPasswordAccount:o.loadingPasswordAccount,updateSuccessPasswordAccount:o.updateSuccessPasswordAccount}}),me)(he)},51896:function(e,o,t){t.d(o,{J:function(){return s}});var n=t(29439),r=t(15861),a=t(87757),i=t.n(a);function s(e,o){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function e(o,t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d(o).then((function(e){return c(o,e||1,t||999999)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d=function(e){return new Promise((function(o){var t=new FileReader;t.onload=function(){return o(function(){var e=new DataView(t.result);if(65496===e.getUint16(0,!1))for(var o=e.byteLength,n=2;n<o;){var r=e.getUint16(n,!1);if(n+=2,65505===r){if(n+=2,1165519206!==e.getUint32(n,!1))return;n+=6;var a=18761===e.getUint16(n,!1);n+=e.getUint32(n+4,a);var i=e.getUint16(n,a);n+=2;for(var s=0;s<i;s++)if(274===e.getUint16(n+12*s,a))return e.getUint16(n+12*s+8,a)}else{if(65280!==(65280&r))break;n+=e.getUint16(n,!1)}}}())},t.readAsArrayBuffer(e.slice(0,65536))}))},c=function(e,o,t){return new Promise((function(r){var a=new FileReader;a.onload=function(){var e=a.result,i=new Image;i.onload=function(){var e=document.createElement("canvas"),a=e.getContext("2d"),s=i.width,l=i.height,d=o>=5&&o<=8?[l,s]:[s,l],c=(0,n.Z)(d,2),u=c[0],h=c[1],m=u>t?t/u:1;switch(s*=m,l*=m,e.width=u*m,e.height=h*m,o){case 2:a.transform(-1,0,0,1,s,0);break;case 3:a.transform(-1,0,0,-1,s,l);break;case 4:a.transform(1,0,0,-1,0,l);break;case 5:a.transform(0,1,1,0,0,0);break;case 6:a.transform(0,1,-1,0,l,0);break;case 7:a.transform(0,-1,-1,0,l,s);break;case 8:a.transform(0,-1,1,0,0,s)}a.drawImage(i,0,0,s,l),r(e.toDataURL("image/jpeg"))},i.src=e},a.readAsDataURL(e)}))}},64558:function(e,o,t){var n=t(95318);o.Z=void 0;var r=n(t(45649)),a=t(80184),i=(0,r.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"}),"Block");o.Z=i},2868:function(e,o,t){var n=t(95318);o.Z=void 0;var r=n(t(45649)),a=t(80184),i=(0,r.default)([(0,a.jsx)("circle",{cx:"12",cy:"12",r:"3.2"},"0"),(0,a.jsx)("path",{d:"M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"},"1")],"CameraAlt");o.Z=i},872:function(e,o,t){var n=t(95318);o.Z=void 0;var r=n(t(45649)),a=t(80184),i=(0,r.default)((0,a.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");o.Z=i},41286:function(e,o,t){var n=t(95318);o.Z=void 0;var r=n(t(45649)),a=t(80184),i=(0,r.default)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");o.Z=i},3710:function(e,o,t){var n=t(76189),r=t(80184);o.Z=(0,n.Z)((0,r.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},29569:function(e,o,t){var n=t(76189),r=t(80184);o.Z=(0,n.Z)((0,r.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")},8799:function(e,o,t){t(72791);var n=t(76189),r=t(80184);o.Z=(0,n.Z)((0,r.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")}}]);
//# sourceMappingURL=512.55964212.chunk.js.map