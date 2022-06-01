"use strict";(self.webpackChunksrf_group=self.webpackChunksrf_group||[]).push([[444],{19444:function(e,n,o){o.r(n),o.d(n,{SignUp:function(){return U},default:function(){return T}});var r=o(29439),i=o(47313),s=o(48119),t=o(24193),a=o(83929),c=o(44758),l=o(9019),d=o(10437),u=o(29137),h=o(61113),m=o(82295),x=o(29466),p=o(97890),Z=o(79429),f=o(1550),j=o(96019),g=o(49914),w=o(41727),v=o(47131),P=o(77406),b=o(91210),C=o(15480),S=o(3404),k=o(50301),y=o(55476),z=o(28089),M=z.Ry({email:z.Z_().email().required("Email is required"),firstPassword:z.Z_().required("Password is required").min(5,"Min 5 digits").max(200,"Max 200 digits"),secondPassword:z.Z_().required("Password is required").oneOf([z.iH("firstPassword"),null],"Passwords must match").min(5,"Muin 5 digits").max(200,"Max 5 digits"),accept:z.Xg().oneOf([!0],"Field must be checked")}),_=o(92349),I=o(63183),H=o(94469),O=o(33604),F=o(96467),R=o(97762),V=o(4117),L=o(43265),q=o(33381),B=o(24511),E=o(14885),W=o(46417),D={email:"",firstPassword:"",secondPassword:"",accept:!1},U=function(e){var n=i.useState(!1),o=(0,r.Z)(n,2),z=o[0],_=o[1],I=i.useState({showPassword:!1}),U=(0,r.Z)(I,2),A=U[0],T=U[1],G=i.useState({showPassword:!1}),N=(0,r.Z)(G,2),K=N[0],X=N[1],$=i.useState(!1),J=(0,r.Z)($,2),Q=J[0],Y=J[1],ee=(0,B.$)().t,ne=(0,p.s0)();i.useEffect((function(){_(!0)}),[]),i.useEffect((function(){console.log("props.oneSignalId ",e.oneSignalId)}),[e.oneSignalId]);var oe=e.registrationSuccess,re=(0,Z.TA)({initialValues:D,validationSchema:M,onSubmit:function(n){e.handleRegister(n.email,n.firstPassword,(0,E.KB)(),e.oneSignalId,e.currentLocale)}}),ie=function(e){e.preventDefault()};i.useEffect((function(){oe&&Y(!0)}),[oe]);var se=function(){Y(!1),e.resetRegister(),re.resetForm(),ne(y.H.LOGIN)};return(0,W.jsx)(k.Z,{direction:"up",in:z,mountOnEnter:!0,unmountOnExit:!0,children:(0,W.jsxs)(L.Z,{maxWidth:"xl",children:[(0,W.jsxs)(l.ZP,{container:!0,style:{paddingTop:10},children:[(0,W.jsx)(l.ZP,{item:!0,sm:3}),(0,W.jsx)(l.ZP,{item:!0,xs:12,sm:6,children:(0,W.jsxs)(S.Z,{"aria-label":"breadcrumb",children:[(0,W.jsx)(x.rU,{color:"inherit",to:y.H.HOME,children:"SRF"}),(0,W.jsx)(h.Z,{color:"text.primary",children:ee("signup.title-page-register")})]})})]}),(0,W.jsxs)(l.ZP,{container:!0,sx:{pt:5,pb:5},children:[(0,W.jsx)(l.ZP,{item:!0,xs:3}),(0,W.jsx)(l.ZP,{item:!0,xs:12,sm:8,md:6,component:m.Z,elevation:6,square:!0,children:(0,W.jsxs)(d.Z,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,W.jsx)(s.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,W.jsx)(u.Z,{})}),(0,W.jsx)(h.Z,{component:"h1",variant:"h5",children:ee("signup.title-page-register")}),(0,W.jsx)(d.Z,{sx:{mt:3},children:(0,W.jsxs)("form",{onSubmit:re.handleSubmit,children:[(0,W.jsxs)(l.ZP,{container:!0,spacing:2,children:[(0,W.jsx)(l.ZP,{item:!0,xs:12,children:(0,W.jsxs)(f.Z,{fullWidth:!0,error:re.touched.email&&Boolean(re.errors.email),children:[(0,W.jsx)(j.Z,{htmlFor:"outlined-adornment-title",children:ee("common.label_email")}),(0,W.jsx)(g.Z,{id:"email",name:"email",type:"email",label:ee("common.label_email"),value:re.values.email,onChange:re.handleChange}),(0,W.jsx)(C.Z,{id:"component-helper-text",children:re.touched.email&&re.errors.email})]})}),(0,W.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,W.jsxs)(f.Z,{fullWidth:!0,error:re.touched.firstPassword&&Boolean(re.errors.firstPassword),children:[(0,W.jsx)(j.Z,{htmlFor:"outlined-adornment-title",children:ee("common.label_new_password")}),(0,W.jsx)(g.Z,{id:"firstPassword",name:"firstPassword",type:A.showPassword?"text":"password",label:ee("common.label_new_password"),value:re.values.firstPassword,onChange:re.handleChange,endAdornment:(0,W.jsx)(w.Z,{position:"end",children:(0,W.jsx)(v.Z,{"aria-label":"toggle password visibility",onClick:function(){T({showPassword:!A.showPassword})},onMouseDown:ie,edge:"end",children:A.showPassword?(0,W.jsx)(P.Z,{}):(0,W.jsx)(b.Z,{})})})}),(0,W.jsx)(C.Z,{id:"component-helper-text",children:re.touched.firstPassword&&re.errors.firstPassword})]})}),(0,W.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,W.jsxs)(f.Z,{fullWidth:!0,error:re.touched.secondPassword&&Boolean(re.errors.secondPassword),children:[(0,W.jsx)(j.Z,{htmlFor:"outlined-adornment-title",children:ee("common.label_confirm_password")}),(0,W.jsx)(g.Z,{id:"secondPassword",name:"secondPassword",type:K.showPassword?"text":"password",label:ee("common.label_confirm_password"),value:re.values.secondPassword,onChange:re.handleChange,endAdornment:(0,W.jsx)(w.Z,{position:"end",children:(0,W.jsx)(v.Z,{"aria-label":"toggle password visibility",onClick:function(){X({showPassword:!K.showPassword})},onMouseDown:ie,edge:"end",children:K.showPassword?(0,W.jsx)(P.Z,{}):(0,W.jsx)(b.Z,{})})})}),(0,W.jsx)(C.Z,{id:"component-helper-text",children:re.touched.secondPassword&&re.errors.secondPassword})]})}),(0,W.jsx)(l.ZP,{item:!0,xs:12,children:(0,W.jsxs)(f.Z,{fullWidth:!0,error:Boolean(re.errors.accept),children:[(0,W.jsx)(a.Z,{control:(0,W.jsx)(c.Z,{id:"accept",name:"accept",color:"primary",checked:re.values.accept,onChange:re.handleChange}),label:(0,W.jsxs)(i.Fragment,{children:[ee("signup.accept-cgu"),(0,W.jsx)(x.rU,{to:"qsd",children:"ici"})]})}),(0,W.jsx)(C.Z,{id:"component-helper-text",children:re.touched.accept&&re.errors.accept})]})})]}),(0,W.jsx)(t.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},color:"neutral",children:ee("common.label_register")}),(0,W.jsx)(l.ZP,{container:!0,justifyContent:"flex-end",children:(0,W.jsx)(l.ZP,{item:!0,children:(0,W.jsx)(x.rU,{to:y.H.LOGIN,children:ee("signup.label-already-have-account")})})})]})})]})}),(0,W.jsx)(l.ZP,{item:!0,xs:4})]}),(0,W.jsxs)(H.Z,{open:Q,TransitionComponent:q.P,onClose:se,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,W.jsx)(O.Z,{id:"alert-dialog-title",children:ee("signup.title-dialog-register")}),(0,W.jsx)(F.Z,{children:(0,W.jsx)(R.Z,{id:"alert-dialog-description",children:ee("signup.inbox-dialog-register")})}),(0,W.jsx)(V.Z,{children:(0,W.jsx)(t.Z,{onClick:se,autoFocus:!0,color:"success",children:ee("signup.label-activation-dialog-register")})})]})]})})},A={handleRegister:I.cC,resetRegister:I.vv},T=(0,_.connect)((function(e){var n=e.user,o=e.locale;return{loading:n.registrationLoading,registrationSuccess:n.registrationSuccess,oneSignalId:n.oneSignalId,currentLocale:o.currentLocale}}),A)(U)},33381:function(e,n,o){o.d(n,{P:function(){return a}});var r=o(1413),i=o(47313),s=o(50301),t=o(46417),a=i.forwardRef((function(e,n){return(0,t.jsx)(s.Z,(0,r.Z)({direction:"up",ref:n},e))}))},29137:function(e,n,o){var r=o(95318);n.Z=void 0;var i=r(o(45045)),s=o(46417),t=(0,i.default)((0,s.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");n.Z=t},91210:function(e,n,o){var r=o(81171),i=o(46417);n.Z=(0,r.Z)((0,i.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},77406:function(e,n,o){var r=o(81171),i=o(46417);n.Z=(0,r.Z)((0,i.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")},44758:function(e,n,o){o.d(n,{Z:function(){return k}});var r=o(4942),i=o(63366),s=o(87462),t=o(47313),a=o(17478),c=o(19579),l=o(97423),d=o(81171),u=o(46417),h=(0,d.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),x=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=o(91615),Z=o(82858),f=o(25363),j=o(18521);function g(e){return(0,j.Z)("MuiCheckbox",e)}var w=(0,o(3973).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),v=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],P=(0,f.ZP)(l.Z,{shouldForwardProp:function(e){return(0,f.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,o.indeterminate&&n.indeterminate,"default"!==o.color&&n["color".concat((0,p.Z)(o.color))]]}})((function(e){var n,o=e.theme,i=e.ownerState;return(0,s.Z)({color:o.palette.text.secondary},!i.disableRipple&&{"&:hover":{backgroundColor:(0,c.Fq)("default"===i.color?o.palette.action.active:o.palette[i.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==i.color&&(n={},(0,r.Z)(n,"&.".concat(w.checked,", &.").concat(w.indeterminate),{color:o.palette[i.color].main}),(0,r.Z)(n,"&.".concat(w.disabled),{color:o.palette.action.disabled}),n))})),b=(0,u.jsx)(m,{}),C=(0,u.jsx)(h,{}),S=(0,u.jsx)(x,{}),k=t.forwardRef((function(e,n){var o,r,c=(0,Z.Z)({props:e,name:"MuiCheckbox"}),l=c.checkedIcon,d=void 0===l?b:l,h=c.color,m=void 0===h?"primary":h,x=c.icon,f=void 0===x?C:x,j=c.indeterminate,w=void 0!==j&&j,k=c.indeterminateIcon,y=void 0===k?S:k,z=c.inputProps,M=c.size,_=void 0===M?"medium":M,I=(0,i.Z)(c,v),H=w?y:f,O=w?y:d,F=(0,s.Z)({},c,{color:m,indeterminate:w,size:_}),R=function(e){var n=e.classes,o=e.indeterminate,r=e.color,i={root:["root",o&&"indeterminate","color".concat((0,p.Z)(r))]},t=(0,a.Z)(i,g,n);return(0,s.Z)({},n,t)}(F);return(0,u.jsx)(P,(0,s.Z)({type:"checkbox",inputProps:(0,s.Z)({"data-indeterminate":w},z),icon:t.cloneElement(H,{fontSize:null!=(o=H.props.fontSize)?o:_}),checkedIcon:t.cloneElement(O,{fontSize:null!=(r=O.props.fontSize)?r:_}),ownerState:F,ref:n},I,{classes:R}))}))}}]);