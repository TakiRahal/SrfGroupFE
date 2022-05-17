"use strict";(self.webpackChunksrf_group=self.webpackChunksrf_group||[]).push([[897],{64280:function(e,t,i){i.r(t),i.d(t,{MyOffers:function(){return D}});var s=i(29439),r=i(47313),n=i(55476),a=i(61750),o=i(1084),d=i(57829),c=i(43265),l=i(9019),f=i(3404),u=i(63830),x=i(28303),m=i(61113),h=i(33532),p=i(14885),g=i(48757),Z=i(94469),b=i(33604),y=i(96467),O=i(97762),v=i(4117),j=i(24193),M=i(16595),k=i(47185),S=i(20300),W=i(52951),E=i(33381),_=i(99881),C=i(64593),P=i(67245),R=i(24511),F=i(76657),w=i.n(F),G=i(31172),L=i(46417),D=function(e){var t=r.useState(!1),i=(0,s.Z)(t,2),a=i[0],o=i[1],k=r.useState(-1),S=(0,s.Z)(k,2),W=S[0],F=S[1],D=r.useState(-1),A=(0,s.Z)(D,2),N=A[0],U=A[1],H=r.useState(g.iU.Grid),T=(0,s.Z)(H,2),I=T[0],z=T[1],B=(0,u.k6)(),X=(0,R.$)().t,K=(0,u.TH)().search,Y=e.getEntitiesForCurrentUser,$=e.listMyOffers,q=e.loadingListMyOffers,J=e.totalItemsMyOffers,Q=e.deleteEntity,V=e.deleteSuccessOffer,ee=function(){e.resetPrivateEntitiesOffers(),U(0)};r.useEffect((function(){U(-1),ee()}),[]),r.useEffect((function(){if(N>=0){var e=G.parse(K),t=(0,p.ip)(e);Y(N,h.z.OFFERS_PER_PAGE,t)}}),[N]),r.useEffect((function(){V&&(U(-1),ee())}),[V]);var te=function(){o(!1)},ie=function(){o(!1),Q(W)};return(0,L.jsxs)(d.Z,{children:[(0,L.jsx)(c.Z,{maxWidth:"xl",className:"details-offer-client",children:(0,L.jsxs)(l.ZP,{container:!0,sx:{pt:1},children:[(0,L.jsx)(l.ZP,{item:!0,xs:12,sm:6,md:1}),(0,L.jsx)(l.ZP,{item:!0,xs:12,sm:6,md:2,children:(0,L.jsxs)(f.Z,{"aria-label":"breadcrumb",children:[(0,L.jsx)(x.rU,{color:"inherit",to:n.H.HOME,children:"SRF"}),(0,L.jsx)(m.Z,{color:"text.primary",children:X("my_offers.title_page")})]})}),(0,L.jsxs)(l.ZP,{container:!0,style:{paddingTop:50},children:[(0,L.jsx)(l.ZP,{item:!0,xs:12,sm:3}),(0,L.jsxs)(l.ZP,{item:!0,xs:12,sm:6,children:[(0,L.jsx)("div",{style:{maxWidth:"100%",marginBottom:100},children:(0,L.jsx)(C.n,{entitiesCategories:e.entitiesCategories.slice(),searchCalback:function(e){B.push({pathname:n.H.OFFER.MY_OFFERS,search:"?"+new URLSearchParams((0,p.ip)(e)).toString()}),U(-1),ee()},typeDisplayCallback:function(e){z(e)},listAddress:e.entitiesAddress.slice()})}),(0,L.jsxs)(m.Z,{variant:"subtitle2",color:"text.secondary",children:["Total = ",J]}),(0,L.jsxs)(w(),{pageStart:N,loadMore:function(){U(N+1)},hasMore:e.totalPagesMyOffers-1>N,loader:(0,L.jsx)("div",{className:"loader"},0),threshold:0,initialLoad:!1,children:[(0,L.jsx)(P.Z,{listOffers:$.slice(),typeDisplay:I,isOnLine:function(e){return!0},forMe:!0,callbackEditOffer:function(e){B.push("".concat(n.H.OFFER.ADD_UPDATE_OFFER,"/").concat(e.id,"/edit"))},callbackDeleteOffer:function(e){F(e.id||-1),o(!0)}}),q?(0,L.jsx)(M.Z,{typeDisplay:I}):null]}),0!==J||q?null:(0,L.jsx)(_.Z,{severity:"warning",children:"No Offers found"})]})]})]})}),(0,L.jsxs)(Z.Z,{open:a,TransitionComponent:E.P,keepMounted:!0,onClose:te,"aria-describedby":"alert-dialog-slide-description",children:[(0,L.jsx)(b.Z,{children:X("my_offers.title_dialog_delete_offer")}),(0,L.jsx)(y.Z,{children:(0,L.jsx)(O.Z,{id:"alert-dialog-slide-description",children:X("my_offers.description_dialog_delete_offer")})}),(0,L.jsxs)(v.Z,{children:[(0,L.jsx)(j.Z,{onClick:te,color:"neutral",children:X("common.label_cancel")}),(0,L.jsx)(j.Z,{onClick:ie,color:"error",children:X("common.label_delete")})]})]})]})},A={getEntitiesForCurrentUser:a.BM,deleteEntity:a.Ks,resetSellerOffer:W.mc,resetRentOffer:S.mc,resetFindOffer:k.mc,resetOffer:a.mc,resetPrivateEntitiesOffers:a.uR};t.default=(0,o.connect)((function(e){var t=e.offer,i=e.category,s=e.address;return{listMyOffers:t.entitiesMyOffers,loadingListMyOffers:t.loadingMyOffers,totalItemsMyOffers:t.totalItemsMyOffers,totalPagesMyOffers:t.totalPagesMyOffers,deleteSuccessOffer:t.deleteSuccess,entitiesCategories:i.entities,entitiesAddress:s.entities}}),A)(D)},43265:function(e,t,i){i.d(t,{Z:function(){return g}});var s=i(4942),r=i(63366),n=i(87462),a=i(47313),o=i(83061),d=i(50317),c=i(25469),l=i(88564),f=i(22131);function u(e){return(0,f.Z)("MuiContainer",e)}(0,i(655).Z)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var x=i(91615),m=i(46417),h=["className","component","disableGutters","fixed","maxWidth"],p=(0,l.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var i=e.ownerState;return[t.root,t["maxWidth".concat((0,x.Z)(String(i.maxWidth)))],i.fixed&&t.fixed,i.disableGutters&&t.disableGutters]}})((function(e){var t=e.theme,i=e.ownerState;return(0,n.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!i.disableGutters&&(0,s.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,i){var s=t.breakpoints.values[i];return 0!==s&&(e[t.breakpoints.up(i)]={maxWidth:"".concat(s).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,i=e.ownerState;return(0,n.Z)({},"xs"===i.maxWidth&&(0,s.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),i.maxWidth&&"xs"!==i.maxWidth&&(0,s.Z)({},t.breakpoints.up(i.maxWidth),{maxWidth:"".concat(t.breakpoints.values[i.maxWidth]).concat(t.breakpoints.unit)}))})),g=a.forwardRef((function(e,t){var i=(0,c.Z)({props:e,name:"MuiContainer"}),s=i.className,a=i.component,l=void 0===a?"div":a,f=i.disableGutters,g=void 0!==f&&f,Z=i.fixed,b=void 0!==Z&&Z,y=i.maxWidth,O=void 0===y?"lg":y,v=(0,r.Z)(i,h),j=(0,n.Z)({},i,{component:l,disableGutters:g,fixed:b,maxWidth:O}),M=function(e){var t=e.classes,i=e.fixed,s=e.disableGutters,r=e.maxWidth,n={root:["root",r&&"maxWidth".concat((0,x.Z)(String(r))),i&&"fixed",s&&"disableGutters"]};return(0,d.Z)(n,u,t)}(j);return(0,m.jsx)(p,(0,n.Z)({as:l,ownerState:j,className:(0,o.Z)(M.root,s),ref:t},v))}))}}]);