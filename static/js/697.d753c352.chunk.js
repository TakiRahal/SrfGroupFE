"use strict";(self.webpackChunksrf_group=self.webpackChunksrf_group||[]).push([[697],{19697:function(s,e,n){n.r(e),n.d(e,{ForgotPasswordFinish:function(){return H}});var r=n(29439),o=n(63183),i=n(1084),a=n(82295),t=n(55476),d=n(50301),l=n(43265),c=n(9019),u=n(3404),h=n(28303),m=n(61113),w=n(24511),x=n(47313),f=n(57829),p=n(48119),Z=n(32703),j=n(15480),P=n(44693),g=n(79429),v=n(29137),b=n(1550),_=n(23306),y=n(49914),M=n(63830),S=n(14885),F=n(41727),k=n(47131),q=n(10237),z=n(22611),C=n(46417),E=P.gh,H=function(s){var e=x.useState(!1),n=(0,r.Z)(e,2),o=n[0],i=n[1],H=x.useState({showPassword:!1}),O=(0,r.Z)(H,2),V=O[0],R=O[1],A=x.useState({showPassword:!1}),D=(0,r.Z)(A,2),L=D[0],W=D[1],G=x.useState(""),I=(0,r.Z)(G,2),B=I[0],N=I[1],T=(0,S.aM)();x.useEffect((function(){var s=T.get("key");console.log("key ",s),s&&N(s)}),[T]);var Y=(0,w.$)().t,U=(0,M.k6)();x.useEffect((function(){i(!0)}),[]);var X=(0,g.TA)({initialValues:E,validationSchema:P.AY,onSubmit:function(e){B?s.handlePasswordResetFinish(B,e.password.toString()):U.push(t.H.LOGIN)}});x.useEffect((function(){s.resetPasswordSuccess&&(X.resetForm(),U.push(t.H.LOGIN))}),[s.resetPasswordSuccess]);return(0,C.jsx)(d.Z,{direction:"up",in:o,mountOnEnter:!0,unmountOnExit:!0,children:(0,C.jsxs)(l.Z,{maxWidth:"xl",children:[(0,C.jsxs)(c.ZP,{container:!0,style:{paddingTop:10},children:[(0,C.jsx)(c.ZP,{item:!0,sm:4}),(0,C.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,C.jsxs)(u.Z,{"aria-label":"breadcrumb",children:[(0,C.jsx)(h.rU,{color:"inherit",to:t.H.HOME,children:"SRF"}),(0,C.jsx)(m.Z,{color:"text.primary",children:Y("signin.title_page_forgot_password")})]})})]}),(0,C.jsxs)(c.ZP,{container:!0,sx:{pt:5,pb:5},children:[(0,C.jsx)(c.ZP,{item:!0,xs:4}),(0,C.jsx)(c.ZP,{item:!0,xs:12,sm:8,md:4,component:a.Z,"md-offset":3,elevation:6,square:!0,children:(0,C.jsxs)(f.Z,{sx:{my:4,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,C.jsx)(p.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,C.jsx)(v.Z,{})}),(0,C.jsx)(m.Z,{component:"h1",variant:"h5",children:Y("signin.title_page_forgot_password")}),(0,C.jsx)(f.Z,{sx:{mt:1,pb:2},children:(0,C.jsxs)("form",{onSubmit:X.handleSubmit,children:[(0,C.jsxs)(c.ZP,{container:!0,spacing:2,children:[(0,C.jsx)(c.ZP,{item:!0,xs:12,children:(0,C.jsxs)(b.Z,{fullWidth:!0,error:X.touched.password&&Boolean(X.errors.password),children:[(0,C.jsx)(_.Z,{htmlFor:"outlined-adornment-title",children:Y("common.label_password")}),(0,C.jsx)(y.Z,{id:"password",name:"password",type:V.showPassword?"text":"password",label:Y("common.label_password"),value:X.values.password,onChange:X.handleChange,endAdornment:(0,C.jsx)(F.Z,{position:"end",children:(0,C.jsx)(k.Z,{"aria-label":"toggle password visibility",onClick:function(){R({showPassword:!V.showPassword})},onMouseDown:function(s){s.preventDefault()},edge:"end",children:V.showPassword?(0,C.jsx)(z.Z,{}):(0,C.jsx)(q.Z,{})})})}),(0,C.jsx)(j.Z,{id:"component-helper-text",children:X.touched.password&&X.errors.password})]})}),(0,C.jsx)(c.ZP,{item:!0,xs:12,children:(0,C.jsxs)(b.Z,{fullWidth:!0,error:X.touched.confPassword&&Boolean(X.errors.confPassword),children:[(0,C.jsx)(_.Z,{htmlFor:"outlined-adornment-title",children:Y("common.label_password")}),(0,C.jsx)(y.Z,{id:"confPassword",name:"confPassword",type:L.showPassword?"text":"password",label:Y("common.label_password"),value:X.values.confPassword,onChange:X.handleChange,endAdornment:(0,C.jsx)(F.Z,{position:"end",children:(0,C.jsx)(k.Z,{"aria-label":"toggle password visibility",onClick:function(){W({showPassword:!L.showPassword})},onMouseDown:function(s){s.preventDefault()},edge:"end",children:V.showPassword?(0,C.jsx)(z.Z,{}):(0,C.jsx)(q.Z,{})})})}),(0,C.jsx)(j.Z,{id:"component-helper-text",children:X.touched.confPassword&&X.errors.confPassword})]})})]}),(0,C.jsx)(Z.Z,{loading:s.loading,fullWidth:!0,variant:"contained",color:"neutral",type:"submit",sx:{mt:3,mb:2},children:Y("common.label_update")})]})})]})})]})]})})},O={handlePasswordResetFinish:o.GV};e.default=(0,i.connect)((function(s){var e=s.user;return{loading:e.loadingForgotPasswordFinish,resetPasswordSuccess:e.resetPasswordSuccessFinish}}),O)(H)},44693:function(s,e,n){n.d(e,{Fd:function(){return o},fk:function(){return i},XL:function(){return a},Fm:function(){return t},gh:function(){return d},AY:function(){return l}});var r=n(28089),o={email:"",password:""},i=r.Ry({email:r.Z_().email().required("Email is required"),password:r.Z_().required("Password is required").min(5,"Min 5 digits").max(200,"Max 200 digits")}),a={email:""},t=r.Ry({email:r.Z_().email().required("Email is required")}),d={password:"",confPassword:""},l=r.Ry({password:r.Z_().required("Password is required").min(5,"Min 5 digits").max(200,"Max 200 digits"),confPassword:r.Z_().required("Password is required").oneOf([r.iH("password"),null],"Passwords must match").min(5,"Muin 5 digits").max(200,"Max 5 digits")})},29137:function(s,e,n){var r=n(95318);e.Z=void 0;var o=r(n(45045)),i=n(46417),a=(0,o.default)((0,i.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");e.Z=a},10237:function(s,e,n){var r=n(95318);e.Z=void 0;var o=r(n(45045)),i=n(46417),a=(0,o.default)((0,i.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");e.Z=a},22611:function(s,e,n){var r=n(95318);e.Z=void 0;var o=r(n(45045)),i=n(46417),a=(0,o.default)((0,i.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");e.Z=a}}]);