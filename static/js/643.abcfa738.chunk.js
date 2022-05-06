"use strict";(self.webpackChunksrf_group=self.webpackChunksrf_group||[]).push([[643],{33643:function(e,n,s){s.r(n),s.d(n,{Account:function(){return ne},default:function(){return re}});var r=s(1413),a=s(29439),t=s(47313),o=s(43265),i=s(1084),l=s(63183),c=s(57829),d=s(85281),u=s(9019),h=s(82295),m=s(48119),x=s(14885),f=s(19036),p=s(79429),Z=s(28089),w=Z.Ry({email:Z.Z_().required("Email is required"),langKey:Z.Z_().required("login is required"),firstName:Z.Z_().required("firstName is required"),lastName:Z.Z_().required("lastName is required"),phone:Z.Z_().required("Phone is required"),address:Z.Ry().nullable().notRequired(),linkProfileFacebook:Z.Z_().nullable().notRequired()}),g=Z.Ry({currentPassword:Z.Z_().required("currentPassword is required"),newPassword:Z.Z_().required("Password is required").min(5,"Min 5 digits").max(200,"Max 200 digits"),confirmNewPassword:Z.Z_().required("Password is required").oneOf([Z.iH("newPassword"),null],"Passwords must match").min(5,"Muin 5 digits").max(200,"Max 5 digits")}),j=s(47131),b=s(65954),P=s(1550),v=s(96019),_=s(49914),k=s(15480),y=s(84060),N=s(24193),A=s(32703),C=s(84764),U=s(68728),S=s(55476),F=s(61113),R=s(28303),I=s(3404),q=s(15861),E=s(87757),B=s.n(E);function D(){return(D=(0,q.Z)(B().mark((function e(n,s){return B().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W(n).then((function(e){return z(n,e||1,s||999999)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=function(e){return new Promise((function(n){var s=new FileReader;s.onload=function(){return n(function(){var e=new DataView(s.result);if(65496===e.getUint16(0,!1))for(var n=e.byteLength,r=2;r<n;){var a=e.getUint16(r,!1);if(r+=2,65505===a){if(r+=2,1165519206!==e.getUint32(r,!1))return;r+=6;var t=18761===e.getUint16(r,!1);r+=e.getUint32(r+4,t);var o=e.getUint16(r,t);r+=2;for(var i=0;i<o;i++)if(274===e.getUint16(r+12*i,t))return e.getUint16(r+12*i+8,t)}else{if(65280!==(65280&a))break;r+=e.getUint16(r,!1)}}}())},s.readAsArrayBuffer(e.slice(0,65536))}))},z=function(e,n,s){return new Promise((function(r){var t=new FileReader;t.onload=function(){var e=t.result,o=new Image;o.onload=function(){var e=document.createElement("canvas"),t=e.getContext("2d"),i=o.width,l=o.height,c=n>=5&&n<=8?[l,i]:[i,l],d=(0,a.Z)(c,2),u=d[0],h=d[1],m=u>s?s/u:1;switch(i*=m,l*=m,e.width=u*m,e.height=h*m,n){case 2:t.transform(-1,0,0,1,i,0);break;case 3:t.transform(-1,0,0,-1,i,l);break;case 4:t.transform(1,0,0,-1,0,l);break;case 5:t.transform(0,1,1,0,0,0);break;case 6:t.transform(0,1,-1,0,l,0);break;case 7:t.transform(0,-1,-1,0,l,i);break;case 8:t.transform(0,-1,1,0,0,i)}t.drawImage(o,0,0,i,l),r(e.toDataURL("image/jpeg"))},o.src=e},t.readAsDataURL(e)}))},K=s(6565),M=s(24631),V=s(41727),L=s(77406),O=s(91210),H=s(24511),T=s(88797),Q=s(51405),J=s(7537),$=s(33532),G=s(6124),X=s(46417),Y={email:"",langKey:"",firstName:"",lastName:"",phone:"",address:null,linkProfileFacebook:""},ee={currentPassword:"",newPassword:"",confirmNewPassword:""},ne=function(e){var n,s=t.useState((0,x.Dm)(e.account.id,e.account.imageUrl,e.account.sourceRegister)),i=(0,a.Z)(s,2),l=i[0],Z=i[1],q=t.useState(!1),E=(0,a.Z)(q,2),B=E[0],W=E[1],z=t.useState(null),ne=(0,a.Z)(z,2),se=ne[0],re=ne[1],ae=t.useState(!1),te=(0,a.Z)(ae,2),oe=te[0],ie=te[1],le=t.useState({showPassword:!1}),ce=(0,a.Z)(le,2),de=ce[0],ue=ce[1],he=t.useState({showPassword:!1}),me=(0,a.Z)(he,2),xe=me[0],fe=me[1],pe=t.useState({showPassword:!1}),Ze=(0,a.Z)(pe,2),we=Ze[0],ge=Ze[1],je=(0,H.$)().t,be=e.getCurrentUser,Pe=e.account,ve=e.loadingAccount,_e=e.uploadAvatar,ke=(0,p.TA)({initialValues:Y,validationSchema:w,onSubmit:function(n){var s=(0,r.Z)((0,r.Z)({},e.account),n);e.updateInfosUser(s)}}),ye=(0,p.TA)({initialValues:ee,validationSchema:g,onSubmit:function(n){e.updatePasswordUser(n)}}),Ne=function(e){e.preventDefault()};t.useEffect((function(){be()}),[]),t.useEffect((function(){e.updateSuccessPasswordAccount&&(ie(!1),ye.resetForm())}),[e.updateSuccessPasswordAccount]),t.useEffect((function(){Pe&&(Z((0,x.Dm)(e.account.id,e.account.imageUrl,e.account.sourceRegister)),ke.setValues({email:Pe.email?Pe.email:"",langKey:Pe.langKey?Pe.langKey:"",firstName:Pe.firstName?Pe.firstName:"",lastName:Pe.lastName?Pe.lastName:"",phone:Pe.phone?Pe.phone:"",address:Pe.address?Pe.address:null,linkProfileFacebook:Pe.linkProfileFacebook?Pe.linkProfileFacebook:""}))}),[Pe]),t.useEffect((function(){if(e.updateSuccessInfosAccount){W(!1);var n=JSON.parse(G.V1.local.get($.zb.VALUE_CURRENT_USER));(0,r.Z)((0,r.Z)({},n),e.entityUpdateInfosAccount);G.V1.local.set($.zb.VALUE_CURRENT_USER,JSON.stringify(Pe))}}),[e.updateSuccessInfosAccount]),t.useEffect((function(){if(se){var e=new FormData;e.append("avatar",se),_e(e)}}),[se]);return(0,X.jsxs)(o.Z,{maxWidth:"xl",className:"pt-5",children:[(0,X.jsx)(u.ZP,{container:!0,style:{paddingTop:10},children:(0,X.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,X.jsxs)(I.Z,{"aria-label":"breadcrumb",children:[(0,X.jsx)(R.rU,{color:"inherit",to:S.H.HOME,children:"SRF"}),(0,X.jsx)(R.rU,{color:"inherit",to:S.H.SEARCH,children:je("account.title")}),(0,X.jsx)(F.Z,{color:"text.primary",children:(0,x.QD)(e.account)})]})})}),ve?(0,X.jsx)(c.Z,{sx:{textAlign:"center"},children:(0,X.jsx)(d.Z,{color:"inherit"})}):(0,X.jsxs)(u.ZP,{container:!0,spacing:4,style:{paddingTop:50},children:[(0,X.jsx)(u.ZP,{item:!0,xs:12,sm:3,sx:{textAlign:"center"},children:(0,X.jsxs)(h.Z,{elevation:3,sx:{p:1},children:[(0,X.jsxs)(c.Z,{sx:{position:"relative"},children:[(0,X.jsxs)(c.Z,{sx:{position:"relative",width:"80px",marginLeft:"auto",marginRight:"auto"},children:[(0,X.jsx)(m.Z,{alt:"Remy Sharp",src:l,sx:{width:80,height:80,marginLeft:"auto",marginRight:"auto",marginBottom:2,mt:2,border:"1px solid #f2f3f7"},children:null===(n=(0,x.QD)(e.account))||void 0===n?void 0:n.charAt(0)}),(0,X.jsx)(c.Z,{sx:{position:"absolute",bottom:0,right:0},children:(0,X.jsx)(f.Z,{})})]}),(0,X.jsx)(c.Z,{children:(0,X.jsx)("input",{type:"file",onChange:function(e){(function(e,n){return D.apply(this,arguments)})(e.target.files[0],500).then((function(n){(0,x.Bo)(n,e.target.files[0].name).then((function(e){re(e)})),Z(n)}))},style:{position:"absolute",top:0,bottom:0,left:0,right:0,opacity:0}})})]}),(0,X.jsx)("h3",{children:(0,x.QD)(e.account)}),(0,X.jsx)("p",{children:e.account.email})]})}),(0,X.jsxs)(u.ZP,{item:!0,xs:12,sm:8,children:[(0,X.jsx)(h.Z,{elevation:3,sx:{p:2},children:(0,X.jsx)("form",{onSubmit:ke.handleSubmit,children:(0,X.jsxs)(c.Z,{sx:{mt:2},children:[(0,X.jsxs)("h5",{className:"mb-4",children:[je("account.label_personnel_details"),B?null:(0,X.jsx)(j.Z,{"aria-label":"upload picture",className:"float-right",component:"span",color:"success",onClick:function(){return W(!0)},children:(0,X.jsx)(b.Z,{})})]}),(0,X.jsxs)(u.ZP,{container:!0,spacing:2,children:[(0,X.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,X.jsxs)(P.Z,{fullWidth:!0,error:ke.touched.email&&Boolean(ke.errors.email),size:"small",children:[(0,X.jsx)(v.Z,{htmlFor:"outlined-adornment-title",children:je("account.label_email")}),(0,X.jsx)(_.Z,{id:"email",name:"email",label:je("account.label_email"),value:ke.values.email,onChange:ke.handleChange,disabled:!0}),(0,X.jsx)(k.Z,{id:"component-helper-text",children:ke.touched.email&&ke.errors.email})]})}),(0,X.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,X.jsxs)(P.Z,{fullWidth:!0,error:ke.touched.langKey&&Boolean(ke.errors.langKey),size:"small",children:[(0,X.jsx)(v.Z,{htmlFor:"outlined-adornment-title",children:je("account.label_languages")}),(0,X.jsx)(T.Z,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:je("account.label_languages"),value:ke.values.langKey,onChange:function(e){ke.setFieldValue("langKey",e.target.value)},disabled:!B,children:Object.keys(J.Mj).length>1?J.k1.map((function(e){return(0,X.jsx)(Q.Z,{value:e,children:J.Mj[e].name},e)})):null}),(0,X.jsx)(k.Z,{id:"component-helper-text",children:ke.touched.langKey&&ke.errors.langKey})]})})]}),(0,X.jsxs)(u.ZP,{container:!0,spacing:2,sx:{mt:1},children:[(0,X.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,X.jsxs)(P.Z,{fullWidth:!0,error:ke.touched.firstName&&Boolean(ke.errors.firstName),size:"small",children:[(0,X.jsxs)(v.Z,{htmlFor:"outlined-adornment-title",children:[je("account.label_firstname")," *"]}),(0,X.jsx)(_.Z,{id:"firstName",name:"firstName",label:je("account.label_firstname"),value:ke.values.firstName,onChange:ke.handleChange,disabled:!B}),(0,X.jsx)(k.Z,{id:"component-helper-text",children:ke.touched.firstName&&ke.errors.firstName})]})}),(0,X.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,X.jsxs)(P.Z,{fullWidth:!0,error:ke.touched.lastName&&Boolean(ke.errors.lastName),size:"small",children:[(0,X.jsxs)(v.Z,{htmlFor:"outlined-adornment-title",children:[je("account.label_lastname")," *"]}),(0,X.jsx)(_.Z,{id:"lastName",name:"lastName",label:je("account.label_lastname"),value:ke.values.lastName,onChange:ke.handleChange,disabled:!B}),(0,X.jsx)(k.Z,{id:"component-helper-text",children:ke.touched.lastName&&ke.errors.lastName})]})})]}),(0,X.jsxs)(u.ZP,{container:!0,spacing:2,sx:{mt:1},children:[(0,X.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,X.jsxs)(P.Z,{fullWidth:!0,error:ke.touched.phone&&Boolean(ke.errors.phone),size:"small",children:[(0,X.jsxs)(v.Z,{htmlFor:"outlined-adornment-title",children:[je("account.label_phone")," *"]}),(0,X.jsx)(_.Z,{id:"phone",name:"phone",label:je("account.label_phone"),type:"tel",value:ke.values.phone,onChange:ke.handleChange,disabled:!B}),(0,X.jsx)(k.Z,{id:"component-helper-text",children:ke.touched.phone&&ke.errors.phone})]})}),(0,X.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,X.jsxs)(P.Z,{fullWidth:!0,error:ke.touched.address&&Boolean(ke.errors.address),children:[(0,X.jsx)(K.Z,{id:"address",fullWidth:!0,size:"small",options:e.entitiesAddress,value:ke.values.address,onChange:function(e,n){return ke.setFieldValue("address",n||"")},autoHighlight:!0,getOptionLabel:function(e){return(null===e||void 0===e?void 0:e.city)||""},disabled:!B,renderOption:function(e,n){return(0,X.jsx)(c.Z,(0,r.Z)((0,r.Z)({component:"li"},e),{},{children:n.city}))},renderInput:function(e){return(0,X.jsx)(M.Z,(0,r.Z)((0,r.Z)({},e),{},{label:"Address",inputProps:(0,r.Z)((0,r.Z)({},e.inputProps),{},{form:{autocomplete:"off"},autoComplete:"off"})}))}}),(0,X.jsx)(k.Z,{id:"component-helper-text",children:ke.touched.address&&ke.errors.address})]})})]}),(0,X.jsxs)(u.ZP,{container:!0,spacing:2,sx:{mt:1},children:[(0,X.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,X.jsxs)(P.Z,{fullWidth:!0,error:ke.touched.linkProfileFacebook&&Boolean(ke.errors.linkProfileFacebook),size:"small",children:[(0,X.jsx)(v.Z,{htmlFor:"outlined-adornment-title",children:je("account.label_link_profile_facebook")}),(0,X.jsx)(_.Z,{id:"linkProfileFacebook",name:"linkProfileFacebook",type:"url",label:je("account.label_link_profile_facebook"),value:ke.values.linkProfileFacebook,onChange:ke.handleChange,disabled:!B}),(0,X.jsx)(k.Z,{id:"component-helper-text",children:ke.touched.linkProfileFacebook&&ke.errors.linkProfileFacebook})]})}),(0,X.jsx)(u.ZP,{item:!0,xs:12,md:6})]}),B?(0,X.jsx)(u.ZP,{container:!0,spacing:2,sx:{mt:2},children:(0,X.jsx)(u.ZP,{item:!0,xs:12,md:12,children:(0,X.jsxs)(y.Z,{variant:"contained","aria-label":"outlined primary button group",style:{float:"right"},children:[(0,X.jsx)(N.Z,{color:"neutral",variant:"outlined",startIcon:(0,X.jsx)(C.Z,{}),onClick:function(){return W(!1)},children:je("common.label_cancel")}),(0,X.jsx)(A.Z,{color:"success",type:"submit",loading:e.loadingUpdateInfosAccount,loadingPosition:"start",startIcon:(0,X.jsx)(U.Z,{}),variant:"contained",size:"small",children:je("common.label_update")})]})})}):null]})})}),(0,X.jsx)(h.Z,{elevation:3,sx:{p:2,mt:4},children:(0,X.jsx)("form",{onSubmit:ye.handleSubmit,children:(0,X.jsxs)(c.Z,{sx:{mt:2},children:[(0,X.jsxs)("h5",{className:"mb-4",children:[je("account.label_password_details"),oe?null:(0,X.jsx)(j.Z,{"aria-label":"upload picture",className:"float-right",component:"span",color:"success",onClick:function(){return ie(!0)},children:(0,X.jsx)(b.Z,{})})]}),(0,X.jsx)(u.ZP,{container:!0,spacing:2,children:(0,X.jsx)(u.ZP,{item:!0,xs:12,children:(0,X.jsxs)(P.Z,{fullWidth:!0,error:ye.touched.currentPassword&&Boolean(ye.errors.currentPassword),children:[(0,X.jsx)(v.Z,{htmlFor:"outlined-adornment-title",children:je("account.label_current_password")}),(0,X.jsx)(_.Z,{id:"currentPassword",name:"currentPassword",type:de.showPassword?"text":"password",label:je("account.label_current_password"),value:ye.values.currentPassword,onChange:ye.handleChange,disabled:!oe,endAdornment:(0,X.jsx)(V.Z,{position:"end",children:(0,X.jsx)(j.Z,{"aria-label":"toggle password visibility",onClick:function(){ue({showPassword:!de.showPassword})},onMouseDown:Ne,edge:"end",children:de.showPassword?(0,X.jsx)(L.Z,{}):(0,X.jsx)(O.Z,{})})})}),(0,X.jsx)(k.Z,{id:"component-helper-text",children:ye.touched.currentPassword&&ye.errors.currentPassword})]})})}),(0,X.jsxs)(u.ZP,{container:!0,spacing:2,sx:{mt:1},children:[(0,X.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,X.jsxs)(P.Z,{fullWidth:!0,error:ye.touched.newPassword&&Boolean(ye.errors.newPassword),children:[(0,X.jsx)(v.Z,{htmlFor:"outlined-adornment-title",children:je("account.label_new_password")}),(0,X.jsx)(_.Z,{id:"newPassword",name:"newPassword",type:xe.showPassword?"text":"password",label:je("account.label_new_password"),value:ye.values.newPassword,onChange:ye.handleChange,disabled:!oe,endAdornment:(0,X.jsx)(V.Z,{position:"end",children:(0,X.jsx)(j.Z,{"aria-label":"toggle password visibility",onClick:function(){fe({showPassword:!xe.showPassword})},onMouseDown:Ne,edge:"end",children:xe.showPassword?(0,X.jsx)(L.Z,{}):(0,X.jsx)(O.Z,{})})})}),(0,X.jsx)(k.Z,{id:"component-helper-text",children:ye.touched.newPassword&&ye.errors.newPassword})]})}),(0,X.jsx)(u.ZP,{item:!0,xs:12,md:6,children:(0,X.jsxs)(P.Z,{fullWidth:!0,error:ye.touched.confirmNewPassword&&Boolean(ye.errors.confirmNewPassword),children:[(0,X.jsx)(v.Z,{htmlFor:"outlined-adornment-title",children:je("account.label_conf_new_password")}),(0,X.jsx)(_.Z,{id:"confirmNewPassword",name:"confirmNewPassword",type:we.showPassword?"text":"password",label:je("account.label_conf_new_password"),value:ye.values.confirmNewPassword,onChange:ye.handleChange,disabled:!oe,endAdornment:(0,X.jsx)(V.Z,{position:"end",children:(0,X.jsx)(j.Z,{"aria-label":"toggle password visibility",onClick:function(){ge({showPassword:!we.showPassword})},onMouseDown:Ne,edge:"end",children:we.showPassword?(0,X.jsx)(L.Z,{}):(0,X.jsx)(O.Z,{})})})}),(0,X.jsx)(k.Z,{id:"component-helper-text",children:ye.touched.confirmNewPassword&&ye.errors.confirmNewPassword})]})})]}),oe?(0,X.jsx)(u.ZP,{container:!0,spacing:2,sx:{mt:2},children:(0,X.jsx)(u.ZP,{item:!0,xs:12,md:12,children:(0,X.jsxs)(y.Z,{variant:"contained","aria-label":"outlined primary button group",style:{float:"right"},children:[(0,X.jsx)(N.Z,{color:"neutral",variant:"outlined",startIcon:(0,X.jsx)(C.Z,{}),onClick:function(){return ie(!1)},children:je("common.label_cancel")}),(0,X.jsx)(A.Z,{color:"success",type:"submit",loading:e.loadingPasswordAccount,loadingPosition:"start",startIcon:(0,X.jsx)(U.Z,{}),variant:"contained",size:"small",children:je("account.label_update_password")})]})})}):null]})})})]})]})]})},se={getCurrentUser:l.ts,updateInfosUser:l.OC,uploadAvatar:l.gg,updatePasswordUser:l.eq},re=(0,i.connect)((function(e){var n=e.user,s=e.address;return{loadingAccount:n.loadingAccount,account:n.account,entitiesAddress:s.entities,uploadAvatarSuccess:n.uploadAvatarSuccess,entityUpdateInfosAccount:n.entityUpdateInfosAccount,loadingUpdateInfosAccount:n.loadingUpdateInfosAccount,updateSuccessInfosAccount:n.updateSuccessInfosAccount,loadingPasswordAccount:n.loadingPasswordAccount,updateSuccessPasswordAccount:n.updateSuccessPasswordAccount}}),se)(ne)}}]);