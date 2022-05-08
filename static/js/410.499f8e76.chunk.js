"use strict";(self.webpackChunksrf_group=self.webpackChunksrf_group||[]).push([[410],{65410:function(e,i,t){t.r(i),t.d(i,{ForgotPassword:function(){return y}});var n=t(29439),s=t(63183),r=t(1084),a=t(82295),o=t(55476),d=t(50301),c=t(43265),u=t(9019),l=t(3404),m=t(28303),x=t(61113),h=t(24511),f=t(47313),p=t(57829),Z=t(48119),g=t(32703),b=t(15480),v=t(44693),w=t(79429),j=t(29137),P=t(1550),W=t(96019),S=t(49914),_=t(99881),k=t(46417),M=v.XL,y=function(e){var i=f.useState(!1),t=(0,n.Z)(i,2),s=t[0],r=t[1],y=(0,h.$)().t;f.useEffect((function(){r(!0)}),[]);var R=(0,w.TA)({initialValues:M,validationSchema:v.Fm,onSubmit:function(i){e.handlePasswordResetInit(i.email.toString())}});return f.useEffect((function(){e.resetPasswordSuccess&&R.resetForm()}),[e.resetPasswordSuccess]),(0,k.jsx)(d.Z,{direction:"up",in:s,mountOnEnter:!0,unmountOnExit:!0,children:(0,k.jsxs)(c.Z,{maxWidth:"xl",children:[(0,k.jsxs)(u.ZP,{container:!0,style:{paddingTop:10},children:[(0,k.jsx)(u.ZP,{item:!0,sm:4}),(0,k.jsx)(u.ZP,{item:!0,xs:12,sm:6,children:(0,k.jsxs)(l.Z,{"aria-label":"breadcrumb",children:[(0,k.jsx)(m.rU,{color:"inherit",to:o.H.HOME,children:"SRF"}),(0,k.jsx)(x.Z,{color:"text.primary",children:y("signin.title_page_forgot_password")})]})})]}),(0,k.jsxs)(u.ZP,{container:!0,sx:{pt:5,pb:5},children:[(0,k.jsx)(u.ZP,{item:!0,xs:4}),(0,k.jsx)(u.ZP,{item:!0,xs:12,sm:8,md:4,component:a.Z,"md-offset":3,elevation:6,square:!0,children:(0,k.jsxs)(p.Z,{sx:{my:4,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,k.jsx)(Z.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,k.jsx)(j.Z,{})}),(0,k.jsx)(x.Z,{component:"h1",variant:"h5",children:y("signin.title_page_forgot_password")}),(0,k.jsx)(p.Z,{sx:{mt:1,pb:2},children:(0,k.jsxs)("form",{onSubmit:R.handleSubmit,children:[(0,k.jsx)(u.ZP,{container:!0,spacing:2,children:(0,k.jsxs)(u.ZP,{item:!0,xs:12,children:[e.resetPasswordSuccess?(0,k.jsx)(_.Z,{severity:"success",sx:{my:2},children:y("forgot_password_init.message_send_mail_success")}):null,(0,k.jsxs)(P.Z,{fullWidth:!0,error:R.touched.email&&Boolean(R.errors.email),children:[(0,k.jsx)(W.Z,{htmlFor:"outlined-adornment-title",children:y("common.label_email")}),(0,k.jsx)(S.Z,{id:"email",name:"email",type:"email",label:y("common.label_email"),value:R.values.email,onChange:R.handleChange}),(0,k.jsx)(b.Z,{id:"component-helper-text",children:R.touched.email&&R.errors.email})]})]})}),(0,k.jsx)(g.Z,{loading:e.loading,fullWidth:!0,variant:"contained",color:"neutral",type:"submit",sx:{mt:3,mb:2},children:y("common.label_send")})]})})]})})]})]})})},R={handlePasswordResetInit:s.xY};i.default=(0,r.connect)((function(e){var i=e.user;return{loading:i.loadingForgotPassword,resetPasswordSuccess:i.resetPasswordSuccess}}),R)(y)},44693:function(e,i,t){t.d(i,{Fd:function(){return s},fk:function(){return r},XL:function(){return a},Fm:function(){return o},gh:function(){return d},AY:function(){return c}});var n=t(28089),s={email:"",password:""},r=n.Ry({email:n.Z_().email().required("Email is required"),password:n.Z_().required("Password is required").min(5,"Min 5 digits").max(200,"Max 200 digits")}),a={email:""},o=n.Ry({email:n.Z_().email().required("Email is required")}),d={password:"",confPassword:""},c=n.Ry({password:n.Z_().required("Password is required").min(5,"Min 5 digits").max(200,"Max 200 digits"),confPassword:n.Z_().required("Password is required").oneOf([n.iH("password"),null],"Passwords must match").min(5,"Muin 5 digits").max(200,"Max 5 digits")})},29137:function(e,i,t){var n=t(95318);i.Z=void 0;var s=n(t(45045)),r=t(46417),a=(0,s.default)((0,r.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");i.Z=a},43265:function(e,i,t){t.d(i,{Z:function(){return Z}});var n=t(4942),s=t(63366),r=t(87462),a=t(47313),o=t(83061),d=t(50317),c=t(25469),u=t(88564),l=t(22131);function m(e){return(0,l.Z)("MuiContainer",e)}(0,t(655).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var x=t(91615),h=t(46417),f=["className","component","disableGutters","fixed","maxWidth"],p=(0,u.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,i){var t=e.ownerState;return[i.root,i["maxWidth".concat((0,x.Z)(String(t.maxWidth)))],t.fixed&&i.fixed,t.disableGutters&&i.disableGutters]}})((function(e){var i=e.theme,t=e.ownerState;return(0,r.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&(0,n.Z)({paddingLeft:i.spacing(2),paddingRight:i.spacing(2)},i.breakpoints.up("sm"),{paddingLeft:i.spacing(3),paddingRight:i.spacing(3)}))}),(function(e){var i=e.theme;return e.ownerState.fixed&&Object.keys(i.breakpoints.values).reduce((function(e,t){var n=i.breakpoints.values[t];return 0!==n&&(e[i.breakpoints.up(t)]={maxWidth:"".concat(n).concat(i.breakpoints.unit)}),e}),{})}),(function(e){var i=e.theme,t=e.ownerState;return(0,r.Z)({},"xs"===t.maxWidth&&(0,n.Z)({},i.breakpoints.up("xs"),{maxWidth:Math.max(i.breakpoints.values.xs,444)}),t.maxWidth&&"xs"!==t.maxWidth&&(0,n.Z)({},i.breakpoints.up(t.maxWidth),{maxWidth:"".concat(i.breakpoints.values[t.maxWidth]).concat(i.breakpoints.unit)}))})),Z=a.forwardRef((function(e,i){var t=(0,c.Z)({props:e,name:"MuiContainer"}),n=t.className,a=t.component,u=void 0===a?"div":a,l=t.disableGutters,Z=void 0!==l&&l,g=t.fixed,b=void 0!==g&&g,v=t.maxWidth,w=void 0===v?"lg":v,j=(0,s.Z)(t,f),P=(0,r.Z)({},t,{component:u,disableGutters:Z,fixed:b,maxWidth:w}),W=function(e){var i=e.classes,t=e.fixed,n=e.disableGutters,s=e.maxWidth,r={root:["root",s&&"maxWidth".concat((0,x.Z)(String(s))),t&&"fixed",n&&"disableGutters"]};return(0,d.Z)(r,m,i)}(P);return(0,h.jsx)(p,(0,r.Z)({as:u,ownerState:P,className:(0,o.Z)(W.root,n),ref:i},j))}))}}]);