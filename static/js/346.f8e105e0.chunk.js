(self.webpackChunksrf_group=self.webpackChunksrf_group||[]).push([[346],{39346:function(e,t,n){"use strict";n.r(t),n.d(t,{SignIn:function(){return U},default:function(){return B}});var o=n(1413),r=n(29439),i=n(47313),a=n(48119),c=n(83929),s=n(44758),l=n(82295),u=n(10437),d=n(9019),f=n(29137),p=n(61113),m=n(29466),g=n(42420),h=n(42333),y=n(79429),b=n(92349),v=n(1550),x=n(96019),j=n(49914),S=n(15480),w=n(41727),Z=n(47131),O=n(10237),k=n(22611),P=n(3404),_=n(50301),I=n(32703),M=n(55476),E=n(44693),C=n(63183),A=n(43265),L=n(33532),T=n(72338),F=n(27780),z=n(24511),R=n(46417),D=E.Fd,U=function(e){var t=i.useState(!1),n=(0,r.Z)(t,2),b=n[0],C=n[1],U=i.useState({showPassword:!1}),H=(0,r.Z)(U,2),B=H[0],q=H[1],G=(0,z.$)().t,N=e.loading;i.useEffect((function(){C(!0)}),[]);var W=(0,y.TA)({initialValues:D,validationSchema:E.fk,onSubmit:function(t){e.login(t.email.toString(),t.password.toString(),e.oneSignalId,!0)}}),V=function(t){if(!t.error){var n=(0,o.Z)((0,o.Z)({},t),{},{sourceProvider:F.c.GOOGLE_PLUS,idOneSignal:e.oneSignalId,langKey:e.currentLocale});e.loginGooglePlus(n)}};return(0,R.jsx)(_.Z,{direction:"up",in:b,mountOnEnter:!0,unmountOnExit:!0,children:(0,R.jsxs)(A.Z,{maxWidth:"xl",children:[(0,R.jsxs)(d.ZP,{container:!0,style:{paddingTop:10},children:[(0,R.jsx)(d.ZP,{item:!0,sm:4}),(0,R.jsx)(d.ZP,{item:!0,xs:12,sm:6,children:(0,R.jsxs)(P.Z,{"aria-label":"breadcrumb",children:[(0,R.jsx)(m.rU,{color:"inherit",to:M.H.HOME,children:"SRF"}),(0,R.jsx)(p.Z,{color:"text.primary",children:G("signin.title_page_signin")})]})})]}),(0,R.jsxs)(d.ZP,{container:!0,sx:{pt:5,pb:5},children:[(0,R.jsx)(d.ZP,{item:!0,xs:4}),(0,R.jsxs)(d.ZP,{item:!0,xs:12,sm:8,md:4,component:l.Z,"md-offset":3,elevation:6,square:!0,children:[(0,R.jsxs)(u.Z,{sx:{my:4,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,R.jsx)(a.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,R.jsx)(f.Z,{})}),(0,R.jsx)(p.Z,{component:"h1",variant:"h5",children:G("signin.title_page_signin")}),(0,R.jsxs)(u.Z,{sx:{mt:1,pb:2},children:[(0,R.jsxs)("form",{onSubmit:W.handleSubmit,children:[(0,R.jsxs)(d.ZP,{container:!0,spacing:2,children:[(0,R.jsx)(d.ZP,{item:!0,xs:12,children:(0,R.jsxs)(v.Z,{fullWidth:!0,error:W.touched.email&&Boolean(W.errors.email),children:[(0,R.jsx)(x.Z,{htmlFor:"outlined-adornment-title",children:G("common.label_email")}),(0,R.jsx)(j.Z,{id:"email",name:"email",type:"email",label:G("common.label_email"),value:W.values.email,onChange:W.handleChange,inputProps:{"data-testid":"email"}}),(0,R.jsx)(S.Z,{id:"component-helper-text",children:W.touched.email&&W.errors.email})]})}),(0,R.jsx)(d.ZP,{item:!0,xs:12,children:(0,R.jsxs)(v.Z,{fullWidth:!0,error:W.touched.password&&Boolean(W.errors.password),children:[(0,R.jsx)(x.Z,{htmlFor:"outlined-adornment-title",children:G("common.label_password")}),(0,R.jsx)(j.Z,{id:"password",name:"password",type:B.showPassword?"text":"password",label:G("common.label_password"),value:W.values.password,onChange:W.handleChange,inputProps:{"data-testid":"password"},endAdornment:(0,R.jsx)(w.Z,{position:"end",children:(0,R.jsx)(Z.Z,{"aria-label":"toggle password visibility",onClick:function(){q({showPassword:!B.showPassword})},onMouseDown:function(e){e.preventDefault()},edge:"end",children:B.showPassword?(0,R.jsx)(k.Z,{}):(0,R.jsx)(O.Z,{})})})}),(0,R.jsx)(S.Z,{id:"component-helper-text",children:W.touched.password&&W.errors.password})]})})]}),(0,R.jsx)(c.Z,{control:(0,R.jsx)(s.Z,{value:"remember",color:"primary"}),label:G("signin.label_remember_me").toString()}),(0,R.jsx)(I.Z,{loading:N,fullWidth:!0,variant:"contained",color:"neutral",type:"submit","data-testid":"submit",sx:{mt:3,mb:2},children:G("signin.label_login")})]}),(0,R.jsx)(d.ZP,{container:!0,children:(0,R.jsxs)(d.ZP,{item:!0,children:[(0,R.jsx)(p.Z,{variant:"subtitle2",component:"p",sx:{mt:2},children:(0,R.jsx)(m.rU,{to:M.H.FORGOT_PASSWORD_INIT,children:G("signin.label_forgot_password")})}),(0,R.jsx)(p.Z,{variant:"subtitle2",component:"p",sx:{mt:2},children:(0,R.jsx)(m.rU,{to:M.H.REGISTER,children:G("signin.label_register_account")})})]})})]})]}),(0,R.jsx)(u.Z,{sx:{textAlign:"center",my:4},children:(0,R.jsx)(T.GoogleLogin,{clientId:L.z.CLIENT_ID_GOOGLLE,onSuccess:V,onFailure:V,autoLoad:!1,render:function(e){return(0,R.jsx)(g.Z,{color:"secondary","aria-label":"google",sx:{m:1,backgroundColor:"#E93F2E"},onClick:e.onClick,disabled:e.disabled,children:(0,R.jsx)(h.Z,{})})}})})]}),(0,R.jsx)(d.ZP,{item:!0,xs:4})]})]})})},H={login:C.x4,loginGooglePlus:C.ww,loginFacebook:C.zU},B=(0,b.connect)((function(e){var t=e.user,n=e.locale;return{loading:t.loginLoading,isAuthenticated:t.isAuthenticated,currentUser:t.currentUser,loginSuccess:t.loginSuccess,oneSignalId:t.oneSignalId,currentLocale:n.currentLocale}}),H)(U)},44693:function(e,t,n){"use strict";n.d(t,{Fd:function(){return r},fk:function(){return i},XL:function(){return a},Fm:function(){return c},gh:function(){return s},AY:function(){return l}});var o=n(28089),r={email:"",password:""},i=o.Ry({email:o.Z_().email().required("Email is required"),password:o.Z_().required("Password is required").min(5,"Min 5 digits").max(200,"Max 200 digits")}),a={email:""},c=o.Ry({email:o.Z_().email().required("Email is required")}),s={password:"",confPassword:""},l=o.Ry({password:o.Z_().required("Password is required").min(5,"Min 5 digits").max(200,"Max 200 digits"),confPassword:o.Z_().required("Password is required").oneOf([o.iH("password"),null],"Passwords must match").min(5,"Muin 5 digits").max(200,"Max 5 digits")})},42333:function(e,t,n){"use strict";var o=n(95318);t.Z=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=a(t);if(n&&n.has(e))return n.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var c=r?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(o,i,c):o[i]=e[i]}o.default=e,n&&n.set(e,o)}(n(47313));var r=o(n(45045)),i=n(46417);function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}var c=(0,r.default)((0,i.jsx)("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"}),"Google");t.Z=c},29137:function(e,t,n){"use strict";var o=n(95318);t.Z=void 0;var r=o(n(45045)),i=n(46417),a=(0,r.default)((0,i.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");t.Z=a},10237:function(e,t,n){"use strict";var o=n(95318);t.Z=void 0;var r=o(n(45045)),i=n(46417),a=(0,r.default)((0,i.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");t.Z=a},22611:function(e,t,n){"use strict";var o=n(95318);t.Z=void 0;var r=o(n(45045)),i=n(46417),a=(0,r.default)((0,i.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");t.Z=a},44758:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var o=n(4942),r=n(63366),i=n(87462),a=n(47313),c=n(17478),s=n(19579),l=n(97423),u=n(81171),d=n(46417),f=(0,u.Z)((0,d.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),p=(0,u.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),m=(0,u.Z)((0,d.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),g=n(91615),h=n(82858),y=n(25363),b=n(18521);function v(e){return(0,b.Z)("MuiCheckbox",e)}var x=(0,n(3973).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),j=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],S=(0,y.ZP)(l.Z,{shouldForwardProp:function(e){return(0,y.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat((0,g.Z)(n.color))]]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,i.Z)({color:n.palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:(0,s.Fq)("default"===r.color?n.palette.action.active:n.palette[r.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(t={},(0,o.Z)(t,"&.".concat(x.checked,", &.").concat(x.indeterminate),{color:n.palette[r.color].main}),(0,o.Z)(t,"&.".concat(x.disabled),{color:n.palette.action.disabled}),t))})),w=(0,d.jsx)(p,{}),Z=(0,d.jsx)(f,{}),O=(0,d.jsx)(m,{}),k=a.forwardRef((function(e,t){var n,o,s=(0,h.Z)({props:e,name:"MuiCheckbox"}),l=s.checkedIcon,u=void 0===l?w:l,f=s.color,p=void 0===f?"primary":f,m=s.icon,y=void 0===m?Z:m,b=s.indeterminate,x=void 0!==b&&b,k=s.indeterminateIcon,P=void 0===k?O:k,_=s.inputProps,I=s.size,M=void 0===I?"medium":I,E=(0,r.Z)(s,j),C=x?P:y,A=x?P:u,L=(0,i.Z)({},s,{color:p,indeterminate:x,size:M}),T=function(e){var t=e.classes,n=e.indeterminate,o=e.color,r={root:["root",n&&"indeterminate","color".concat((0,g.Z)(o))]},a=(0,c.Z)(r,v,t);return(0,i.Z)({},t,a)}(L);return(0,d.jsx)(S,(0,i.Z)({type:"checkbox",inputProps:(0,i.Z)({"data-indeterminate":x},_),icon:a.cloneElement(C,{fontSize:null!=(n=C.props.fontSize)?n:M}),checkedIcon:a.cloneElement(A,{fontSize:null!=(o=A.props.fontSize)?o:M}),ownerState:L,ref:t},E,{classes:T}))}))},72338:function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){return o={},t.m=n=[function(t){t.exports=e},function(e,t,n){e.exports=n(2)()},function(e,t,n){"use strict";function o(){}function r(){}var i=n(3);r.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,r,a){if(a!==i){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:o};return n.PropTypes=n}},function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function d(e,t,n,o,r,i){var a=e.getElementsByTagName(t)[0],c=a,s=a;(s=e.createElement(t)).id=n,s.src=o,c&&c.parentNode?c.parentNode.insertBefore(s,c):e.head.appendChild(s),s.onerror=i,s.onload=r}function f(e,t){var n=e.getElementById(t);n&&n.parentNode.removeChild(n)}function p(e){return y.a.createElement("span",{style:{paddingRight:10,fontWeight:500,paddingLeft:e.icon?0:10,paddingTop:10,paddingBottom:10}},e.children)}function m(e){return y.a.createElement("div",{style:{marginRight:10,background:e.active?"#eee":"#fff",padding:10,borderRadius:2}},y.a.createElement("svg",{width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg"},y.a.createElement("g",{fill:"#000",fillRule:"evenodd"},y.a.createElement("path",{d:"M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z",fill:"#EA4335"}),y.a.createElement("path",{d:"M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z",fill:"#4285F4"}),y.a.createElement("path",{d:"M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z",fill:"#FBBC05"}),y.a.createElement("path",{d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z",fill:"#34A853"}),y.a.createElement("path",{fill:"none",d:"M0 0h18v18H0z"}))))}function g(e){var t=i(Object(h.useState)(!1),2),n=t[0],o=t[1],r=i(Object(h.useState)(!1),2),a=r[0],c=r[1],s=e.tag,l=e.type,u=e.className,d=e.disabledStyle,f=e.buttonText,g=e.children,v=e.render,x=e.theme,j=e.icon,S=e.disabled,w=b({onSuccess:e.onSuccess,onAutoLoadFinished:e.onAutoLoadFinished,onRequest:e.onRequest,onFailure:e.onFailure,onScriptLoadFailure:e.onScriptLoadFailure,clientId:e.clientId,cookiePolicy:e.cookiePolicy,loginHint:e.loginHint,hostedDomain:e.hostedDomain,autoLoad:e.autoLoad,isSignedIn:e.isSignedIn,fetchBasicProfile:e.fetchBasicProfile,redirectUri:e.redirectUri,discoveryDocs:e.discoveryDocs,uxMode:e.uxMode,scope:e.scope,accessType:e.accessType,responseType:e.responseType,jsSrc:e.jsSrc,prompt:e.prompt}),Z=w.signIn,O=S||!w.loaded;if(v)return v({onClick:Z,disabled:O});var k={backgroundColor:"dark"===x?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===x?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},P={cursor:"pointer",backgroundColor:"dark"===x?"#3367D6":"#eee",color:"dark"===x?"#fff":"rgba(0, 0, 0, .54)",opacity:1},_=O?Object.assign({},k,d):a?Object.assign({},k,P):n?Object.assign({},k,{cursor:"pointer",opacity:.9}):k;return y.a.createElement(s,{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){o(!1),c(!1)},onMouseDown:function(){return c(!0)},onMouseUp:function(){return c(!1)},onClick:Z,style:_,type:l,disabled:O,className:u},[j&&y.a.createElement(m,{key:1,active:a}),y.a.createElement(p,{icon:j,key:2},g||f)])}n.r(t),n.d(t,"default",(function(){return x})),n.d(t,"GoogleLogin",(function(){return x})),n.d(t,"GoogleLogout",(function(){return S})),n.d(t,"useGoogleLogin",(function(){return b})),n.d(t,"useGoogleLogout",(function(){return j}));var h=n(0),y=n.n(h),b=(n(1),function(e){function t(e){var t=e.getBasicProfile(),n=e.getAuthResponse(!0);e.googleId=t.getId(),e.tokenObj=n,e.tokenId=n.id_token,e.accessToken=n.access_token,e.profileObj={googleId:t.getId(),imageUrl:t.getImageUrl(),email:t.getEmail(),name:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName()},i(e)}function n(e){if(e&&e.preventDefault(),A){var n=window.gapi.auth2.getAuthInstance(),o={prompt:E};p(),"code"===_?n.grantOfflineAccess(o).then((function(e){return i(e)}),(function(e){return l(e)})):n.signIn(o).then((function(e){return t(e)}),(function(e){return l(e)}))}}var r=e.onSuccess,i=void 0===r?function(){}:r,a=e.onAutoLoadFinished,c=void 0===a?function(){}:a,s=e.onFailure,l=void 0===s?function(){}:s,u=e.onRequest,p=void 0===u?function(){}:u,m=e.onScriptLoadFailure,g=e.clientId,y=e.cookiePolicy,b=e.loginHint,v=e.hostedDomain,x=e.autoLoad,j=e.isSignedIn,S=e.fetchBasicProfile,w=e.redirectUri,Z=e.discoveryDocs,O=e.uxMode,k=e.scope,P=e.accessType,_=e.responseType,I=e.jsSrc,M=void 0===I?"https://apis.google.com/js/api.js":I,E=e.prompt,C=o(Object(h.useState)(!1),2),A=C[0],L=C[1];return Object(h.useEffect)((function(){var e=!1,n=m||l;return d(document,"script","google-login",M,(function(){var o={client_id:g,cookie_policy:y,login_hint:b,hosted_domain:v,fetch_basic_profile:S,discoveryDocs:Z,ux_mode:O,redirect_uri:w,scope:k,access_type:P};"code"===_&&(o.access_type="offline"),window.gapi.load("auth2",(function(){var r=window.gapi.auth2.getAuthInstance();r?r.then((function(){e||(j&&r.isSignedIn.get()?(L(!0),c(!0),t(r.currentUser.get())):(L(!0),c(!1)))}),(function(e){l(e)})):window.gapi.auth2.init(o).then((function(n){if(!e){L(!0);var o=j&&n.isSignedIn.get();c(o),o&&t(n.currentUser.get())}}),(function(e){L(!0),c(!1),n(e)}))}))}),(function(e){n(e)})),function(){e=!0,f(document,"google-login")}}),[]),Object(h.useEffect)((function(){x&&n()}),[A]),{signIn:n,loaded:A}});function v(e){var t=l(Object(h.useState)(!1),2),n=t[0],o=t[1],r=l(Object(h.useState)(!1),2),i=r[0],a=r[1],c=e.tag,s=e.type,u=e.className,d=e.disabledStyle,f=e.buttonText,g=e.children,b=e.render,v=e.theme,x=e.icon,S=e.disabled,w=j({jsSrc:e.jsSrc,onFailure:e.onFailure,onScriptLoadFailure:e.onScriptLoadFailure,clientId:e.clientId,cookiePolicy:e.cookiePolicy,loginHint:e.loginHint,hostedDomain:e.hostedDomain,fetchBasicProfile:e.fetchBasicProfile,discoveryDocs:e.discoveryDocs,uxMode:e.uxMode,redirectUri:e.redirectUri,scope:e.scope,accessType:e.accessType,onLogoutSuccess:e.onLogoutSuccess}),Z=w.signOut,O=S||!w.loaded;if(b)return b({onClick:Z,disabled:O});var k={backgroundColor:"dark"===v?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===v?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},P={cursor:"pointer",backgroundColor:"dark"===v?"#3367D6":"#eee",color:"dark"===v?"#fff":"rgba(0, 0, 0, .54)",opacity:1},_=O?Object.assign({},k,d):i?Object.assign({},k,P):n?Object.assign({},k,{cursor:"pointer",opacity:.9}):k;return y.a.createElement(c,{onMouseEnter:function(){return o(!0)},onMouseLeave:function(){o(!1),a(!1)},onMouseDown:function(){return a(!0)},onMouseUp:function(){return a(!1)},onClick:Z,style:_,type:s,disabled:O,className:u},[x&&y.a.createElement(m,{key:1,active:i}),y.a.createElement(p,{icon:x,key:2},g||f)])}g.defaultProps={type:"button",tag:"button",buttonText:"Sign in with Google",scope:"profile email",accessType:"online",prompt:"",cookiePolicy:"single_host_origin",fetchBasicProfile:!0,isSignedIn:!1,uxMode:"popup",disabledStyle:{opacity:.6},icon:!0,theme:"light",onRequest:function(){}};var x=g,j=function(e){var t=e.jsSrc,n=void 0===t?"https://apis.google.com/js/api.js":t,o=e.onFailure,r=e.onScriptLoadFailure,i=e.clientId,a=e.cookiePolicy,s=e.loginHint,l=e.hostedDomain,u=e.fetchBasicProfile,p=e.discoveryDocs,m=e.uxMode,g=e.redirectUri,y=e.scope,b=e.accessType,v=e.onLogoutSuccess,x=c(Object(h.useState)(!1),2),j=x[0],S=x[1],w=Object(h.useCallback)((function(){if(window.gapi){var e=window.gapi.auth2.getAuthInstance();null!=e&&e.then((function(){e.signOut().then((function(){e.disconnect(),v()}))}),(function(e){return o(e)}))}}),[v]);return Object(h.useEffect)((function(){var e=r||o;return d(document,"script","google-login",n,(function(){var t={client_id:i,cookie_policy:a,login_hint:s,hosted_domain:l,fetch_basic_profile:u,discoveryDocs:p,ux_mode:m,redirect_uri:g,scope:y,access_type:b};window.gapi.load("auth2",(function(){window.gapi.auth2.getAuthInstance()?S(!0):window.gapi.auth2.init(t).then((function(){return S(!0)}),(function(t){return e(t)}))}))}),(function(t){e(t)})),function(){f(document,"google-login")}}),[]),{signOut:w,loaded:j}};v.defaultProps={type:"button",tag:"button",buttonText:"Logout of Google",disabledStyle:{opacity:.6},icon:!0,theme:"light",jsSrc:"https://apis.google.com/js/api.js"};var S=v}],t.c=o,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(t){return e[t]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4);function t(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return n[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n,o}(n(47313))}}]);