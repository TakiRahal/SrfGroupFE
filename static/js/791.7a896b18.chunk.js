"use strict";(self.webpackChunksrf_group=self.webpackChunksrf_group||[]).push([[791],{90178:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ze}});var s=n(1413),i=n(47313),r=n(57829),o=n(43265),l=n(9019),a=n(44183),c=n(73428),d=n(16957),x=n(93405),f=n(61113),u=n(33532),m=n(14885),h=n(55476),g=n(63830),p=n(1084),j=n(52951),Z=n(24511),v=n(28303),y=n(48757),b=n(12210),_=n(80509),I=n(76600),S=n(15216),E=n(46417);function w(e){var t,n,s,i=e.offer,o=e.index,l=e.rediretTo;return(0,E.jsxs)(a.Z,{component:"a",onClick:function(){return l(i.id)},children:[(0,E.jsxs)(c.Z,{sx:{display:{xs:"none",sm:"flex"}},children:[o%2===0?i.offerImages&&i.offerImages.length?(0,E.jsx)(d.Z,{sx:{width:{xs:"100%",sm:250},height:{xs:"100%",sm:200}},children:(0,E.jsx)(S.l,{src:(0,m.Ce)(i.id,null===i||void 0===i||null===(t=i.offerImages[0])||void 0===t?void 0:t.path)})}):(0,E.jsx)(d.Z,{sx:{width:{xs:"100%",sm:250},height:{xs:"100%",sm:200}},children:(0,E.jsx)(S.l,{src:(0,m.K1)(u.zb.DEFAULT_LAZY_IMAGE)})}):null,(0,E.jsxs)(x.Z,{sx:{flex:1},children:[(0,E.jsx)(f.Z,{component:"h2",variant:"h5",children:i.title}),(0,E.jsx)(f.Z,{variant:"subtitle1",color:"text.secondary",children:(0,E.jsx)(I.p,{convertDate:i.dateCreated})}),(0,E.jsx)(r.Z,{className:"truncate-string-two-lines",style:{maxWidth:400},children:(0,E.jsx)("div",{dangerouslySetInnerHTML:{__html:i.description||""}})})]}),o%2!==0?i.offerImages&&i.offerImages.length?(0,E.jsx)(d.Z,{sx:{width:{xs:"100%",sm:250},height:{xs:"100%",sm:200}},children:(0,E.jsx)(S.l,{src:(0,m.Ce)(i.id,null===i||void 0===i||null===(n=i.offerImages[0])||void 0===n?void 0:n.path)})}):(0,E.jsx)(d.Z,{sx:{width:{xs:"100%",sm:250},height:{xs:"100%",sm:200}},children:(0,E.jsx)(S.l,{src:(0,m.K1)(u.zb.DEFAULT_LAZY_IMAGE)})}):null]}),(0,E.jsxs)(c.Z,{sx:{display:{xs:"block",sm:"none"}},children:[i.offerImages&&i.offerImages.length?(0,E.jsx)(d.Z,{sx:{width:{xs:"100%",sm:250},height:{xs:"100%",sm:200}},children:(0,E.jsx)(S.l,{src:(0,m.Ce)(i.id,null===i||void 0===i||null===(s=i.offerImages[0])||void 0===s?void 0:s.path)})}):(0,E.jsx)(d.Z,{sx:{width:{xs:"100%",sm:250},height:{xs:"100%",sm:200}},children:(0,E.jsx)(S.l,{src:(0,m.K1)(u.zb.DEFAULT_LAZY_IMAGE)})}),(0,E.jsxs)(x.Z,{sx:{flex:1},children:[(0,E.jsx)(f.Z,{component:"h2",variant:"h5",children:i.title}),(0,E.jsx)(f.Z,{variant:"subtitle1",color:"text.secondary",children:(0,E.jsx)(I.p,{convertDate:i.dateCreated})}),(0,E.jsx)(r.Z,{className:"truncate-string-two-lines",style:{maxWidth:400},children:(0,E.jsx)("div",{dangerouslySetInnerHTML:{__html:i.description||""}})})]})]})]})}var T={getEntitiesForSell:j.E0},C=(0,p.connect)((function(e){return{listSellOffers:e.sellOffer.entitiesSellOffers}}),T)((function(e){var t=(0,g.k6)(),n=(0,Z.$)().t,s=function(e){setTimeout((function(){t.push(h.H.OFFER.DEAILS_OFFER+"/"+e)}),300)},a=e.listSellOffers,c=e.getEntitiesForSell;return i.useEffect((function(){c(0,4,"id,asc")}),[]),(0,E.jsxs)(o.Z,{maxWidth:"xl",sx:{my:20},className:"container-for-sell-home",children:[(0,E.jsx)("h3",{children:(0,E.jsx)(v.rU,{to:"".concat(h.H.OFFER.LIST,"?typeOffer=").concat(y.dJ.Sell),children:n("common.for_sell")})}),(0,E.jsx)(l.ZP,{container:!0,rowSpacing:2,columnSpacing:{xs:1,sm:2,md:3},sx:{display:{xs:"none",md:"flex"}},children:a.map((function(e,t){return(0,E.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,E.jsx)(w,{offer:e,index:t,rediretTo:s})},"offer-".concat(t))}))}),(0,E.jsx)(r.Z,{sx:{display:{md:"none"}},className:"box-swiper",children:(0,E.jsx)(b.tq,{pagination:!0,loop:!0,autoplay:{delay:3500,disableOnInteraction:!1},modules:[_.tl],className:"mySwiper",children:a.map((function(e,t){return(0,E.jsx)(b.o5,{children:(0,E.jsx)(w,{offer:e,index:t,rediretTo:s})},"offer-".concat(t))}))})})]})})),F=n(35898),O=n(48119),L=n(88564),A=n(82295),R=n(55788),P=(0,L.ZP)(A.Z)((function(e){var t=e.theme;return(0,s.Z)((0,s.Z)({},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})}));function k(){var e=[{img:(0,m.K1)("/assets/images/home/categories/home.png"),title:(0,E.jsx)(R.W,{children:function(e,t){t.i18n;return(0,E.jsx)(E.Fragment,{children:e("home.label_category_immovable")})}})},{img:(0,m.K1)("/assets/images/home/categories/cars.png"),title:(0,E.jsx)(R.W,{children:function(e,t){t.i18n;return(0,E.jsx)(E.Fragment,{children:e("home.label_category_cars")})}})},{img:(0,m.K1)("/assets/images/home/categories/phones.png"),title:(0,E.jsx)(R.W,{children:function(e,t){t.i18n;return(0,E.jsx)(E.Fragment,{children:e("home.label_category_phones")})}})},{img:(0,m.K1)("/assets/images/home/categories/services.png"),title:(0,E.jsx)(R.W,{children:function(e,t){t.i18n;return(0,E.jsx)(E.Fragment,{children:e("home.label_category_services")})}})},{img:(0,m.K1)("/assets/images/home/categories/search.png"),title:(0,E.jsx)(R.W,{children:function(e,t){t.i18n;return(0,E.jsx)(E.Fragment,{children:e("home.label_category_search")})}})}];return(0,E.jsx)(r.Z,{className:"bg-brown",sx:{p:8,my:10},children:(0,E.jsx)(F.Z,{sx:{my:"4rem",px:{xs:0,md:2},justifyContent:"center"},direction:{xs:"column",sm:"row"},spacing:{xs:1,sm:2,md:4},children:e.map((function(e,t){return(0,E.jsxs)(P,{sx:{flex:1},children:[(0,E.jsx)(O.Z,{alt:"Remy Sharp",src:e.img,sx:{width:56,height:56,marginLeft:"auto",marginRight:"auto"}}),(0,E.jsx)("h3",{className:"mt-2",children:e.title})]},"category-".concat(t))}))})})}var N=n(67216),D=n(32600),H=n(83213);function z(){var e=[{img:(0,m.K1)("/assets/images/home/services/delivery.png"),primaryTitle:"Livraison Express 24/48H",secondTitle:"Livraison rapide sur toute la Tunisie"},{img:(0,m.K1)("/assets/images/home/services/euro.png"),primaryTitle:"Satisfait ou Rembours\xe9",secondTitle:"Satisfait ou rembours\xe9 sans poser de questions ! (5Jours)"},{img:(0,m.K1)("/assets/images/home/services/money.png"),primaryTitle:"Paiement \xe0 la livraison",secondTitle:"Achetez et payez \xe0 la livraison"},{img:(0,m.K1)("/assets/images/home/services/chat.png"),primaryTitle:"Service Client 24/7",secondTitle:"Nous sommes \xe0 votre disposition pour r\xe9pondre \xe0 vos questions"}];return(0,E.jsx)(r.Z,{sx:{p:8,my:10},className:"bg-brown",children:(0,E.jsx)(l.ZP,{container:!0,rowSpacing:2,columnSpacing:{xs:1,sm:2,md:3},children:e.map((function(e,t){return(0,E.jsx)(l.ZP,{item:!0,xs:12,md:3,children:(0,E.jsx)(c.Z,{sx:{display:"flex",flexDirection:"column"},children:(0,E.jsx)(x.Z,{sx:{flexGrow:1,minHeight:130},children:(0,E.jsxs)(N.ZP,{alignItems:"flex-start",children:[(0,E.jsx)(D.Z,{children:(0,E.jsx)(O.Z,{alt:e.primaryTitle,src:e.img})}),(0,E.jsx)(H.Z,{primary:e.primaryTitle,secondary:e.secondTitle})]})})})},"service-".concat(t))}))})})}function M(){var e=(0,Z.$)().t;return(0,E.jsx)(r.Z,{sx:{my:10},style:{backgroundColor:"rgb(0 0 0 / 74%)",color:"#fff",textAlign:"center"},children:(0,E.jsxs)(o.Z,{maxWidth:"xl",className:"container-full-slide",children:[(0,E.jsxs)(l.ZP,{container:!0,className:"grid-full-slide",sx:{display:{xs:"none",md:"flex"}},children:[(0,E.jsxs)(l.ZP,{item:!0,xs:12,md:3,className:"text-center item-full-slide",children:[(0,E.jsx)(O.Z,{sx:{width:56,height:56,marginLeft:"auto",marginRight:"auto",marginTop:5,bgcolor:"#fff",color:"#000",fontSize:"25px"},children:"01"}),(0,E.jsx)("h2",{className:"mt-2",children:e("home.steps.title_create_account")}),(0,E.jsx)("p",{children:e("home.steps.sub_title_create_account")})]}),(0,E.jsxs)(l.ZP,{item:!0,xs:12,md:3,className:"text-center item-full-slide",children:[(0,E.jsx)(O.Z,{sx:{width:56,height:56,marginLeft:"auto",marginRight:"auto",marginTop:5,bgcolor:"#fff",color:"#000",fontSize:"25px"},children:"02"}),(0,E.jsx)("h2",{className:"mt-2",children:e("home.steps.title_login")}),(0,E.jsx)("p",{children:e("home.steps.sub_title_login")})]}),(0,E.jsxs)(l.ZP,{item:!0,xs:12,md:3,className:"text-center item-full-slide",children:[(0,E.jsx)(O.Z,{sx:{width:56,height:56,marginLeft:"auto",marginRight:"auto",marginTop:5,bgcolor:"#fff",color:"#000",fontSize:"25px"},children:"03"}),(0,E.jsx)("h2",{className:"mt-2",children:e("home.steps.title_participate")}),(0,E.jsx)("p",{children:e("home.steps.sub_title_participate")})]}),(0,E.jsxs)(l.ZP,{item:!0,xs:12,md:3,className:"text-center item-full-slide",children:[(0,E.jsx)(O.Z,{sx:{width:56,height:56,marginLeft:"auto",marginRight:"auto",marginTop:5,bgcolor:"#fff",color:"#000",fontSize:"25px"},children:"04"}),(0,E.jsx)("h2",{className:"mt-2",children:e("home.steps.title_win_auction")}),(0,E.jsx)("p",{children:e("home.steps.sub_title_win_auction")})]})]}),(0,E.jsx)(r.Z,{sx:{display:{md:"none"}},className:"box-swiper",children:(0,E.jsxs)(b.tq,{slidesPerView:"auto",spaceBetween:30,pagination:{clickable:!0},loop:!0,modules:[_.tl],className:"mySwiper",children:[(0,E.jsx)(b.o5,{children:(0,E.jsxs)(l.ZP,{item:!0,xs:12,md:3,className:"text-center item-full-slide",children:[(0,E.jsx)(O.Z,{sx:{width:56,height:56,marginLeft:"auto",marginRight:"auto",marginTop:5,bgcolor:"#fff",color:"#000",fontSize:"25px"},children:"01"}),(0,E.jsx)("h2",{className:"mt-2",children:e("home.steps.title_create_account")}),(0,E.jsx)("p",{children:e("home.steps.sub_title_create_account")})]})}),(0,E.jsx)(b.o5,{children:(0,E.jsxs)(l.ZP,{item:!0,xs:12,md:3,className:"text-center item-full-slide",children:[(0,E.jsx)(O.Z,{sx:{width:56,height:56,marginLeft:"auto",marginRight:"auto",marginTop:5,bgcolor:"#fff",color:"#000",fontSize:"25px"},children:"02"}),(0,E.jsx)("h2",{className:"mt-2",children:e("home.steps.title_login")}),(0,E.jsx)("p",{children:e("home.steps.sub_title_login")})]})}),(0,E.jsx)(b.o5,{children:(0,E.jsxs)(l.ZP,{item:!0,xs:12,md:3,className:"text-center item-full-slide",children:[(0,E.jsx)(O.Z,{sx:{width:56,height:56,marginLeft:"auto",marginRight:"auto",marginTop:5,bgcolor:"#fff",color:"#000",fontSize:"25px"},children:"03"}),(0,E.jsx)("h2",{className:"mt-2",children:e("home.steps.title_participate")}),(0,E.jsx)("p",{children:e("home.steps.sub_title_participate")})]})}),(0,E.jsx)(b.o5,{children:(0,E.jsxs)(l.ZP,{item:!0,xs:12,md:3,className:"text-center item-full-slide",children:[(0,E.jsx)(O.Z,{sx:{width:56,height:56,marginLeft:"auto",marginRight:"auto",marginTop:5,bgcolor:"#fff",color:"#000",fontSize:"25px"},children:"04"}),(0,E.jsx)("h2",{className:"mt-2",children:e("home.steps.title_win_auction")}),(0,E.jsx)("p",{children:e("home.steps.sub_title_win_auction")})]})})]})})]})})}var U=n(29439),G=n(45987),W=n(56104),K=n(54641),V=n(47131),J=n(11069),Y=n(46845),q=n(6306),B=n(43997),$=n(61750),Q=["expand"];function X(e){var t,n,s,i,r=e.offer,o=e.index,l=e.rediretTo;return(0,E.jsx)(a.Z,{component:"a",onClick:function(){return l(r.id)},children:(0,E.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,E.jsx)(K.Z,{avatar:(0,E.jsx)(O.Z,{"aria-label":"recipe",src:(0,m.Dm)(null===(t=r.user)||void 0===t?void 0:t.id,null===(n=r.user)||void 0===n?void 0:n.imageUrl,null===(s=r.user)||void 0===s?void 0:s.sourceRegister),children:null===(i=(0,m.QD)(r.user))||void 0===i?void 0:i.charAt(0)}),action:(0,E.jsx)(V.Z,{"aria-label":"settings",children:(0,E.jsx)(B.Z,{})}),title:(0,m.QD)(null===r||void 0===r?void 0:r.user),subheader:(0,E.jsx)(I.p,{convertDate:r.dateCreated})}),(0,E.jsx)(d.Z,{component:"img",height:"194",image:(0,m.Ce)(null===r||void 0===r?void 0:r.id,function(e){var t;return e&&null!==e&&void 0!==e&&e.offerImages&&null!==e&&void 0!==e&&e.offerImages[0]?null===e||void 0===e||null===(t=e.offerImages[0])||void 0===t?void 0:t.path:""}(r)||""),alt:"Image Offer"}),(0,E.jsx)(x.Z,{className:"card-content-offer",children:(0,E.jsx)(f.Z,{variant:"body2",color:"text.secondary",className:"truncate-string-two-lines",children:(0,E.jsx)("span",{dangerouslySetInnerHTML:{__html:r.description||""}})})}),(0,E.jsxs)(W.Z,{disableSpacing:!0,children:[(0,E.jsx)(V.Z,{"aria-label":"add to favorites",children:(0,E.jsx)(J.Z,{})}),(0,E.jsx)(V.Z,{"aria-label":"share",children:(0,E.jsx)(Y.Z,{})}),(0,E.jsx)(ee,{"aria-label":"show more",children:(0,E.jsx)(q.Z,{})})]})]})},"entity-".concat(o))}var ee=(0,L.ZP)((function(e){e.expand;var t=(0,G.Z)(e,Q);return(0,E.jsx)(V.Z,(0,s.Z)({},t))}))((function(e){var t=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}})),te={getEntitiesRecentlyAdded:$.Jd},ne=(0,p.connect)((function(e){return{listOffers:e.offer.entitiesRecentlyAddedOffers}}),te)((function(e){var t=i.useState(!1),n=(0,U.Z)(t,2),s=(n[0],n[1],(0,g.k6)()),a=e.listOffers,c=e.getEntitiesRecentlyAdded;i.useEffect((function(){c(0,9,"id,asc")}),[]);var d=function(e){setTimeout((function(){s.push(h.H.DETAILS_OFFER+"/"+e)}),300)};return(0,E.jsxs)(o.Z,{maxWidth:"xl",sx:{mt:5},className:"container-recently-added-home",children:[(0,E.jsx)("h3",{children:(0,E.jsx)("u",{children:"R\xe9cemment ajout\xe9s"})}),(0,E.jsx)(l.ZP,{container:!0,spacing:4,sx:{display:{xs:"none",md:"flex"}},children:a.map((function(e,t){return(0,E.jsx)(l.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,E.jsx)(X,{offer:e,index:t,rediretTo:d})},"offer-".concat(t))}))}),(0,E.jsx)(r.Z,{sx:{display:{md:"none"}},className:"box-swiper",children:(0,E.jsx)(b.tq,{pagination:!0,modules:[_.tl],className:"mySwiper",children:a.map((function(e,t){return(0,E.jsx)(b.o5,{children:(0,E.jsx)(X,{offer:e,index:t,rediretTo:d})},"offer-".concat(t))}))})})]})}));function se(e){var t,n,s,i=e.offer,o=e.index,l=e.rediretTo;return(0,E.jsxs)(a.Z,{component:"a",onClick:function(){return l(i.id)},children:[(0,E.jsxs)(c.Z,{sx:{display:{xs:"none",sm:"flex"}},children:[o%2===0?i.offerImages&&i.offerImages.length?(0,E.jsx)(d.Z,{sx:{width:{xs:"100%",sm:250},height:{xs:"100%",sm:200},backgroundColor:"#0000004f"},children:(0,E.jsx)(S.l,{src:(0,m.Ce)(i.id,null===i||void 0===i||null===(t=i.offerImages[0])||void 0===t?void 0:t.path)})}):(0,E.jsx)(d.Z,{sx:{width:{xs:"100%",sm:250},height:{xs:"100%",sm:200},backgroundColor:"#0000004f"},children:(0,E.jsx)(S.l,{src:(0,m.K1)(u.zb.DEFAULT_LAZY_IMAGE)})}):null,(0,E.jsxs)(x.Z,{sx:{flex:1},children:[(0,E.jsx)(f.Z,{component:"h2",variant:"h5",children:i.title}),(0,E.jsx)(f.Z,{variant:"subtitle1",color:"text.secondary",children:(0,E.jsx)(I.p,{convertDate:i.dateCreated})}),(0,E.jsx)(r.Z,{className:"truncate-string-two-lines",style:{maxWidth:400},children:(0,E.jsx)("div",{dangerouslySetInnerHTML:{__html:i.description||""}})})]}),o%2!==0?i.offerImages&&i.offerImages.length?(0,E.jsx)(d.Z,{sx:{width:{xs:"100%",sm:250},height:{xs:"100%",sm:200},backgroundColor:"#0000004f"},children:(0,E.jsx)(S.l,{src:(0,m.Ce)(i.id,null===i||void 0===i||null===(n=i.offerImages[0])||void 0===n?void 0:n.path)})}):(0,E.jsx)(d.Z,{sx:{width:{xs:"100%",sm:250},height:{xs:"100%",sm:200},backgroundColor:"#0000004f"},children:(0,E.jsx)(S.l,{src:(0,m.K1)(u.zb.DEFAULT_LAZY_IMAGE)})}):null]}),(0,E.jsxs)(c.Z,{sx:{display:{xs:"block",sm:"none"}},children:[i.offerImages&&i.offerImages.length?(0,E.jsx)(d.Z,{sx:{width:{xs:"100%",sm:250},height:{xs:"100%",sm:200},backgroundColor:"#0000004f"},children:(0,E.jsx)(S.l,{src:(0,m.Ce)(i.id,null===i||void 0===i||null===(s=i.offerImages[0])||void 0===s?void 0:s.path)})}):(0,E.jsx)(d.Z,{sx:{width:{xs:"100%",sm:250},height:{xs:"100%",sm:200},backgroundColor:"#0000004f"},children:(0,E.jsx)(S.l,{src:(0,m.K1)(u.zb.DEFAULT_LAZY_IMAGE)})}),(0,E.jsxs)(x.Z,{sx:{flex:1},children:[(0,E.jsx)(f.Z,{component:"h2",variant:"h5",children:i.title}),(0,E.jsx)(f.Z,{variant:"subtitle1",color:"text.secondary",children:(0,E.jsx)(I.p,{convertDate:i.dateCreated})}),(0,E.jsx)(r.Z,{className:"truncate-string-two-lines",style:{maxWidth:400},children:(0,E.jsx)("div",{dangerouslySetInnerHTML:{__html:i.description||""}})})]})]})]})}var ie={getEntitiesForRent:n(20300).IU},re=(0,p.connect)((function(e){return{listRentOffers:e.rentOffer.entitiesRentOffers}}),ie)((function(e){var t=(0,g.k6)(),n=(0,Z.$)().t,s=e.getEntitiesForRent,a=e.listRentOffers;i.useEffect((function(){s(0,4,"id,asc")}),[]);var c=function(e){setTimeout((function(){t.push(h.H.OFFER.DEAILS_OFFER+"/"+e)}),300)};return(0,E.jsxs)(o.Z,{maxWidth:"xl",className:"container-for-rent-home",children:[(0,E.jsx)("h3",{children:(0,E.jsx)(v.rU,{to:"".concat(h.H.OFFER.LIST,"?typeOffer=").concat(y.dJ.Rent),children:n("common.for_rent")})}),(0,E.jsx)(l.ZP,{container:!0,rowSpacing:2,columnSpacing:{xs:1,sm:2,md:3},sx:{display:{xs:"none",md:"flex"}},children:a.map((function(e,t){return(0,E.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,E.jsx)(se,{offer:e,index:t,rediretTo:c})},"offer-".concat(t))}))}),(0,E.jsx)(r.Z,{sx:{display:{md:"none"}},className:"box-swiper",children:(0,E.jsx)(b.tq,{pagination:!0,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},modules:[_.tl],className:"mySwiper",children:a.map((function(e,t){return(0,E.jsx)(b.o5,{children:(0,E.jsx)(se,{offer:e,index:t,rediretTo:c})},"offer-".concat(t))}))})})]})}));function oe(e){var t,n,s,i=e.offer,o=e.index,l=e.rediretTo;return(0,E.jsxs)(a.Z,{component:"a",onClick:function(){return l(i.id)},children:[(0,E.jsxs)(c.Z,{sx:{display:{xs:"none",sm:"flex"}},children:[o%2===0?i.offerImages&&i.offerImages.length?(0,E.jsx)(d.Z,{sx:{width:{xs:"100%",sm:250},height:{xs:"100%",sm:200},backgroundColor:"#0000004f"},children:(0,E.jsx)(S.l,{src:(0,m.Ce)(i.id,null===i||void 0===i||null===(t=i.offerImages[0])||void 0===t?void 0:t.path)})}):(0,E.jsx)(d.Z,{sx:{width:{xs:"100%",sm:250},height:{xs:"100%",sm:200},backgroundColor:"#0000004f"},children:(0,E.jsx)(S.l,{src:(0,m.K1)(u.zb.DEFAULT_LAZY_IMAGE)})}):null,(0,E.jsxs)(x.Z,{sx:{flex:1},children:[(0,E.jsx)(f.Z,{component:"h2",variant:"h5",children:i.title}),(0,E.jsx)(f.Z,{variant:"subtitle1",color:"text.secondary",children:(0,E.jsx)(I.p,{convertDate:i.dateCreated})}),(0,E.jsx)(r.Z,{className:"truncate-string-two-lines",style:{maxWidth:400},children:(0,E.jsx)("div",{dangerouslySetInnerHTML:{__html:i.description||""}})})]}),o%2!==0?i.offerImages&&i.offerImages.length?(0,E.jsx)(d.Z,{sx:{width:{xs:"100%",sm:250},height:{xs:"100%",sm:200},backgroundColor:"#0000004f"},children:(0,E.jsx)(S.l,{src:(0,m.Ce)(i.id,null===i||void 0===i||null===(n=i.offerImages[0])||void 0===n?void 0:n.path)})}):(0,E.jsx)(d.Z,{sx:{width:{xs:"100%",sm:250},height:{xs:"100%",sm:200},backgroundColor:"#0000004f"},children:(0,E.jsx)(S.l,{src:(0,m.K1)(u.zb.DEFAULT_LAZY_IMAGE)})}):null]}),(0,E.jsxs)(c.Z,{sx:{display:{xs:"block",sm:"none"}},children:[i.offerImages&&i.offerImages.length?(0,E.jsx)(d.Z,{sx:{width:{xs:"100%",sm:250},height:{xs:"100%",sm:200},backgroundColor:"#0000004f"},children:(0,E.jsx)(S.l,{src:(0,m.Ce)(i.id,null===i||void 0===i||null===(s=i.offerImages[0])||void 0===s?void 0:s.path)})}):(0,E.jsx)(d.Z,{sx:{width:{xs:"100%",sm:250},height:{xs:"100%",sm:200},backgroundColor:"#0000004f"},children:(0,E.jsx)(S.l,{src:(0,m.K1)(u.zb.DEFAULT_LAZY_IMAGE)})}),(0,E.jsxs)(x.Z,{sx:{flex:1},children:[(0,E.jsx)(f.Z,{component:"h2",variant:"h5",children:i.title}),(0,E.jsx)(f.Z,{variant:"subtitle1",color:"text.secondary",children:(0,E.jsx)(I.p,{convertDate:i.dateCreated})}),(0,E.jsx)(r.Z,{className:"truncate-string-two-lines",style:{maxWidth:400},children:(0,E.jsx)("div",{dangerouslySetInnerHTML:{__html:i.description||""}})})]})]})]})}var le={getEntitiesForFind:n(47185).d7},ae=(0,p.connect)((function(e){return{listFindOffers:e.findOffer.entitiesFindOffers}}),le)((function(e){var t=(0,g.k6)(),n=(0,Z.$)().t,s=e.listFindOffers,a=e.getEntitiesForFind;i.useEffect((function(){a(0,4,"id,asc")}),[]);var c=function(e){setTimeout((function(){t.push(h.H.OFFER.DEAILS_OFFER+"/"+e)}),300)};return(0,E.jsxs)(o.Z,{maxWidth:"xl",className:"container-for-find-home",children:[(0,E.jsx)("h3",{children:(0,E.jsx)(v.rU,{to:"".concat(h.H.OFFER.LIST,"?typeOffer=").concat(y.dJ.Find),children:n("common.for_find")})}),(0,E.jsx)(l.ZP,{container:!0,rowSpacing:2,columnSpacing:{xs:1,sm:2,md:3},sx:{display:{xs:"none",md:"flex"}},children:s.map((function(e,t){return(0,E.jsx)(l.ZP,{item:!0,xs:12,md:6,children:(0,E.jsx)(oe,{offer:e,index:t,rediretTo:c})},"offer-".concat(t))}))}),(0,E.jsx)(r.Z,{sx:{display:{md:"none"}},className:"box-swiper",children:(0,E.jsx)(b.tq,{pagination:!0,loop:!0,autoplay:{delay:3500,disableOnInteraction:!1},modules:[_.tl],className:"mySwiper",children:s.map((function(e,t){return(0,E.jsx)(b.o5,{children:(0,E.jsx)(oe,{offer:e,index:t,rediretTo:c})},"offer-".concat(t))}))})})]})})),ce=n(6124),de=n(37517);_.ZP.use([_.lI,_.tl,_.W_,_.pt]);var xe={getEntitiesExistOfferImages:de.vR},fe=(0,p.connect)((function(e){var t=e.offerImages;return{listExistOfferImages:t.entitiesExistOfferImages,loadingExistOfferImages:t.loadingExistOfferImages}}),xe)((function(e){var t=i.useState(ce.V1.local.get(u.zb.SlideListBottom)),n=(0,U.Z)(t,2),s=n[0],o=n[1],l=(0,g.k6)(),a=e.listExistOfferImages,c=e.loadingExistOfferImages,d=e.getEntitiesExistOfferImages;i.useEffect((function(){d(0,5,"id,asc")}),[]),i.useEffect((function(){a&&a.length>0&&(o(a.slice()),ce.V1.local.set(u.zb.SlideListBottom,a))}),[a]),i.useEffect((function(){}),[s]);return s&&s.length>0&&!c?(0,E.jsx)(r.Z,{sx:{my:5},className:"bottom-home-slides",children:(0,E.jsx)(b.tq,{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:!0,modules:[_.lI,_.tl],className:"mySwiper",autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0,children:s.map((function(e,t){return(0,E.jsx)("div",{children:(0,E.jsx)(b.o5,{onClick:function(){return t=e[0],void setTimeout((function(){l.push(h.H.OFFER.DEAILS_OFFER+"/"+t)}),300);var t},children:(0,E.jsx)("img",{src:(0,m.Ce)(e[0],e[1])})},"slide-".concat(t,"-").concat(e[0]))},"".concat(t,"-").concat(e[0]))}))})}):(0,E.jsx)(r.Z,{})})),ue=n(64593),me=n(96351),he=(0,p.connect)((function(e){var t=e.category,n=e.topHomeSlidesImages,s=e.address;return{entitiesCategories:t.entities,entitiesTopHomeSlidesImages:n.entities,entitiesAddress:s.entities}}),{})((function(e){var t=i.useState(ce.V1.local.get(u.zb.HOME_TOP_SLIDES_IMAGE)),n=(0,U.Z)(t,2),s=n[0],o=(n[1],i.useState("fr")),l=(0,U.Z)(o,2),a=l[0],c=l[1],d=(0,g.k6)();i.useEffect((function(){me.Z.on("languageChanged",(function(e){c(e)}))}),[]);i.useEffect((function(){e.entitiesTopHomeSlidesImages&&e.entitiesTopHomeSlidesImages.length&&ce.V1.local.set(u.zb.HOME_TOP_SLIDES_IMAGE,e.entitiesTopHomeSlidesImages.slice())}),[e.entitiesTopHomeSlidesImages]);var x=function(e){return"en"===a?e.descriptionEn||"":"fr"===a?e.descriptionFr||"":e.descriptionAr||""};return(0,E.jsxs)("div",{className:"top-home-slides",children:[s&&s.length?(0,E.jsxs)(b.tq,{speed:600,parallax:!0,pagination:{clickable:!0},navigation:!1,modules:[_.VS,_.tl,_.W_],className:"mySwiper",loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},children:[(0,E.jsx)("div",{slot:"container-start",className:"parallax-bg",style:{backgroundImage:"url(".concat(function(){for(var e=0;e<s.length;e++){var t,n;if(null!==(t=s[e])&&void 0!==t&&t.image)return null===(n=s[e])||void 0===n?void 0:n.image}}(),")")},"data-swiper-parallax":"-23%"}),s.map((function(e,t){return(0,E.jsx)(b.o5,{children:(0,E.jsx)("div",{className:"text","data-swiper-parallax":"-300",children:(0,E.jsx)("div",{dangerouslySetInnerHTML:{__html:x(e)}})})},"index-".concat(t))}))]}):null,(0,E.jsx)(r.Z,{sx:{position:{xs:"relative",md:"absolute"},bottom:-50,right:0,left:0,marginRight:"auto",marginLeft:"auto",backgroundColor:"#fff",maxWidth:959,height:{sx:"auto",md:100},zIndex:9},children:(0,E.jsx)(ue.n,{entitiesCategories:e.entitiesCategories.slice(),searchCalback:function(e){d.push({pathname:h.H.SEARCH,search:"?"+new URLSearchParams((0,m.ip)(e)).toString()})},listAddress:e.entitiesAddress.slice(),hideFilter:!0})})]})})),ge=n(45522),pe=n.n(ge),je=(0,p.connect)((function(e){return{entity:e.postHomeFeature.entity}}),{})((function(e){var t=i.useState(ce.V1.local.get(u.zb.POST_HOME_FEATURE)),n=(0,U.Z)(t,2),s=n[0],r=(n[1],i.useState("fr")),a=(0,U.Z)(r,2),c=a[0],d=a[1];i.useEffect((function(){me.Z.on("languageChanged",(function(e){d(e)}))}),[]),i.useEffect((function(){pe()(e.entity)||ce.V1.local.set(u.zb.POST_HOME_FEATURE,e.entity)}),[e.entity]);return(0,E.jsx)(o.Z,{maxWidth:"xl",sx:{my:10},children:pe()(s)?null:(0,E.jsxs)(l.ZP,{container:!0,spacing:4,children:[(0,E.jsx)(l.ZP,{item:!0,xs:12,sm:6,children:(0,E.jsx)("img",{style:{maxWidth:"100%"},src:s.image,alt:"bg",onError:function(e){e.target.onerror=null,e.target.src=s.image}})}),(0,E.jsx)(l.ZP,{item:!0,xs:12,sm:6,children:(0,E.jsx)("div",{dangerouslySetInnerHTML:{__html:"en"===c?s.descriptionEn||"":"fr"===c?s.descriptionFr||"":s.descriptionAr||""}})})]})})}));function Ze(e){return(0,E.jsxs)(r.Z,{children:[(0,E.jsx)(he,{}),(0,E.jsx)(C,(0,s.Z)({},e)),(0,E.jsx)(k,{}),(0,E.jsx)(re,(0,s.Z)({},e)),(0,E.jsx)(z,{}),(0,E.jsx)(ae,(0,s.Z)({},e)),(0,E.jsx)(M,{}),(0,E.jsx)(ne,{}),(0,E.jsx)(je,{}),(0,E.jsx)(fe,(0,s.Z)({},e))]})}},51185:function(e,t,n){n.d(t,{a:function(){return v}});var s=n(1413),i=n(29439),r=n(48310),o=n(58800),l=n(67216),a=n(1550),c=n(6565),d=n(57829),x=n(24631),f=n(24511),u=n(61113),m=n(9019),h=n(84503),g=n(47313),p=n(89840),j=n(46417);function Z(e){return"".concat(e,"\xb0C")}function v(e){var t=e.listAddress,n=g.useState([20,50]),v=(0,i.Z)(n,2),y=v[0],b=v[1],_=(0,f.$)().t;return(0,j.jsx)(d.Z,{children:(0,j.jsxs)(r.Z,{sx:{width:"100%",mb:4},component:"nav","aria-labelledby":"nested-list-subheader",subheader:(0,j.jsx)(o.Z,{component:"div",id:"nested-list-subheader",children:"FILTRER PAR"}),children:[(0,j.jsx)(l.ZP,{sx:{my:2},children:(0,j.jsx)(a.Z,{fullWidth:!0,variant:"standard",children:(0,j.jsx)(c.Z,{id:"addressOffer",options:t,autoHighlight:!0,getOptionLabel:function(e){return e.city||""},renderOption:function(e,t){return(0,j.jsx)(d.Z,(0,s.Z)((0,s.Z)({component:"li"},e),{},{children:t.city}))},renderInput:function(e){return(0,j.jsx)(x.Z,(0,s.Z)((0,s.Z)({},e),{},{label:_("common.address"),variant:"standard",inputProps:(0,s.Z)((0,s.Z)({},e.inputProps),{},{form:{autocomplete:"off"},autoComplete:"off"})}))}})})}),(0,j.jsx)(l.ZP,{children:(0,j.jsxs)(d.Z,{sx:{width:"100%",my:2},children:[(0,j.jsx)(u.Z,{id:"input-slider",gutterBottom:!0,children:"Price"}),(0,j.jsxs)(m.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,j.jsx)(m.ZP,{item:!0,children:"min"}),(0,j.jsx)(m.ZP,{item:!0,xs:!0,children:(0,j.jsx)(h.ZP,{getAriaLabel:function(){return"Temperature range"},value:y,onChange:function(e,t){b(t)},valueLabelDisplay:"auto",getAriaValueText:Z,color:"secondary"})}),(0,j.jsx)(m.ZP,{item:!0,children:"max"})]})]})}),(0,j.jsx)(p.Z,{children:"Drafts"})]})})}},48757:function(e,t,n){var s,i,r,o;n.d(t,{dJ:function(){return s},b1:function(){return i},DO:function(){return r},iU:function(){return o}}),function(e){e.Sell="SellOffer",e.Rent="RentOffer",e.Find="FindOffer"}(s||(s={})),function(e){e.PerYear="PER_YEAR",e.PerMonth="PER_MONTH",e.PerDay="PER_DAY"}(i||(i={})),function(e){e.Carpooling="Carpooling",e.Travels="Travels",e.Transporter="Transporter",e.Job="Job"}(r||(r={})),function(e){e.List="LIST",e.Grid="GRID"}(o||(o={}))},64593:function(e,t,n){n.d(t,{n:function(){return D}});var s=n(1413),i=n(29439),r=n(47313),o=n(57829),l=n(24193),a=n(1550),c=n(24631),d=n(9289),x=n(47131),f=n(57983),u=n(98240),m=n(6565),h=n(11198),g=n(28089),p=g.Ry({title:g.Z_().nullable().notRequired().default(""),typeOffer:g.Z_().nullable().notRequired(),category:g.Ry().nullable().notRequired().default(null)}),j=n(79429),Z=n(63830),v=n(48757),y=n(31172),b=n(24511),_=n(75908),I=n(42766),S=n(17760),E=n(96351),w=n(33381),T=n(94469),C=n(33604),F=n(96467),O=n(97762),L=n(4117),A=n(51185),R=n(61113),P=n(46417),k=[v.dJ.Sell,v.dJ.Rent,v.dJ.Find],N={title:"",typeOffer:"",category:null};function D(e){var t=e.entitiesCategories,n=e.searchCalback,g=e.typeDisplayCallback,D=e.listAddress,H=e.hideFilter,z=r.useState(v.iU.Grid),M=(0,i.Z)(z,2),U=M[0],G=M[1],W=r.useState("fr"),K=(0,i.Z)(W,2),V=K[0],J=K[1],Y=r.useState(!1),q=(0,i.Z)(Y,2),B=q[0],$=q[1],Q=(0,Z.TH)().search,X=(0,b.$)().t,ee=(0,j.TA)({initialValues:N,validationSchema:p,onSubmit:function(e){n(e)}});r.useEffect((function(){E.Z.on("languageChanged",(function(e){J(e)}))}),[]),r.useEffect((function(){var e=y.parse(Q);ee.setFieldValue("title",e.title||""),ee.setFieldValue("typeOffer",e.typeOffer||"")}),[Q]),r.useEffect((function(){var e=y.parse(Q);Object.keys(e).map((function(n){"category.id"===n&&ee.setFieldValue("category",t.find((function(t){var s,i;return(null===t||void 0===t||null===(s=t.id)||void 0===s?void 0:s.toString())===(null===(i=e[n])||void 0===i?void 0:i.toString())}))||null)}))}),[t]);var te=function(){G(U===v.iU.Grid?v.iU.List:v.iU.Grid),g(U===v.iU.Grid?v.iU.List:v.iU.Grid)},ne=function(e){return"en"===V?e.titleEn||"":"fr"===V?e.titleFr||"":e.titleAr||""},se=function(){$(!1)};return(0,P.jsxs)(o.Z,{children:[(0,P.jsx)("form",{onSubmit:ee.handleSubmit,children:(0,P.jsx)(o.Z,{sx:{flexGrow:1},children:(0,P.jsx)(_.Z,{position:"static",color:"default",sx:{backgroundColor:"#fff"},children:(0,P.jsxs)(d.Z,{sx:{display:{xs:"block",sm:"flex"},paddingRight:{md:0},paddingLeft:{md:0}},children:[H?null:(0,P.jsx)(x.Z,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mx:1,display:{xs:"none",md:"inline-flex"}},onClick:function(){return te()},children:U===v.iU.Grid?(0,P.jsx)(I.Z,{}):(0,P.jsx)(S.Z,{})}),(0,P.jsx)(a.Z,{variant:"standard",sx:{flexGrow:1,flexShrink:1,flexBasis:0,mx:1,width:{xs:"100%",md:"auto"}},children:(0,P.jsx)(c.Z,{id:"title",name:"title",type:"search",label:X("common.label_search"),variant:"standard",value:ee.values.title,onChange:ee.handleChange})}),(0,P.jsx)(a.Z,{variant:"standard",sx:{flexGrow:1,flexShrink:1,flexBasis:0,mx:1,width:{xs:"100%",md:"auto"}},children:(0,P.jsx)(m.Z,{id:"typeOffer",options:k,value:ee.values.typeOffer,onChange:function(e,t){return ee.setFieldValue("typeOffer",t||null)},autoHighlight:!0,getOptionLabel:function(e){return function(e){return e===v.dJ.Sell?X("common.for_sell"):e===v.dJ.Rent?X("common.for_rent"):e===v.dJ.Find?X("common.for_find"):""}(e)},renderOption:function(e,t){return(0,P.jsx)(o.Z,(0,s.Z)((0,s.Z)({component:"li"},e),{},{children:t}))},renderInput:function(e){return(0,P.jsx)(c.Z,(0,s.Z)((0,s.Z)({},e),{},{label:X("common.type_offer"),variant:"standard",inputProps:(0,s.Z)((0,s.Z)({},e.inputProps),{},{form:{autoComplete:"off"},autoComplete:"off"})}))}})}),(0,P.jsx)(a.Z,{variant:"standard",sx:{flexGrow:1,flexShrink:1,flexBasis:0,mx:1,width:{xs:"100%",md:"auto"}},children:(0,P.jsx)(m.Z,{id:"category-select",options:t,value:ee.values.category,onChange:function(e,t){return ee.setFieldValue("category",t||"")},autoHighlight:!0,getOptionLabel:function(e){return ne(e)},renderOption:function(e,t){return(0,P.jsx)(o.Z,(0,s.Z)((0,s.Z)({component:"li"},e),{},{children:ne(t)}))},renderInput:function(e){return(0,P.jsx)(c.Z,(0,s.Z)((0,s.Z)({},e),{},{label:X("common.cateory"),variant:"standard",inputProps:(0,s.Z)((0,s.Z)({},e.inputProps),{},{form:{autoComplete:"off"},name:"category-name",autoComplete:"off"})}))}})}),(0,P.jsxs)(o.Z,{sx:{my:{xs:2,md:"auto"}},children:[(0,P.jsx)(x.Z,{size:"large",edge:"start",color:"inherit","aria-label":"open drawer",sx:{mx:1,display:{xs:"inline-flex",md:"none"}},onClick:function(){return te()},children:U===v.iU.Grid?(0,P.jsx)(I.Z,{}):(0,P.jsx)(S.Z,{})}),(0,P.jsx)(l.Z,{variant:"contained",sx:{width:100,height:{xs:"auto",md:100},borderRadius:"unset",backgroundColor:"#3f3f40",marginRight:"0.8rem",color:"#fff",display:{xs:"inline-flex",md:"none"}},color:"neutral",onClick:function(){return $(!0)},children:(0,P.jsx)(u.Z,{})}),(0,P.jsx)(l.Z,{variant:"contained",sx:{height:{xs:"auto",md:100},borderRadius:"unset",backgroundColor:"#3f3f40",color:"#fff"},startIcon:(0,P.jsx)(f.Z,{}),color:"neutral",type:"submit",children:X("common.label_search")})]})]})})})}),(0,P.jsxs)(T.Z,{fullScreen:!0,open:B,TransitionComponent:w.P,keepMounted:!0,onClose:se,"aria-describedby":"alert-dialog-slide-description",children:[(0,P.jsx)(_.Z,{sx:{position:"relative"},children:(0,P.jsxs)(d.Z,{children:[(0,P.jsx)(x.Z,{edge:"start",color:"inherit",onClick:se,"aria-label":"close",children:(0,P.jsx)(h.Z,{})}),(0,P.jsx)(R.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:"Sound"}),(0,P.jsx)(l.Z,{autoFocus:!0,color:"inherit",onClick:se,children:"save"})]})}),(0,P.jsx)(C.Z,{children:"Filter offers"}),(0,P.jsxs)(F.Z,{children:[(0,P.jsx)(O.Z,{children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),(0,P.jsx)(A.a,{listAddress:D})]}),(0,P.jsxs)(L.Z,{children:[(0,P.jsx)(l.Z,{onClick:se,children:"Cancel"}),(0,P.jsx)(l.Z,{color:"success",children:"Filter"})]})]})]})}},15216:function(e,t,n){n.d(t,{l:function(){return u}});var s=n(1413),i=n(29439),r=n(45987),o=n(47313),l=n(14885),a=n(33532),c=n(46417),d=["src","placeholderImg","errorImg"],x=(0,l.K1)(a.zb.DEFAULT_LAZY_IMAGE_LOADING),f=(0,l.K1)(a.zb.DEFAULT_LAZY_IMAGE),u=function(e){var t=e.src,n=e.placeholderImg,l=e.errorImg,a=(0,r.Z)(e,d),u=(0,o.useState)(n||x||t),m=(0,i.Z)(u,2),h=m[0],g=m[1];return(0,o.useEffect)((function(){var e=new Image;e.src=t,e.addEventListener("load",(function(){g(t)})),e.addEventListener("error",(function(){g(l||f)}))}),[t,n,l]),(0,c.jsx)("img",(0,s.Z)((0,s.Z)({},a),{},{src:h,className:"img-lazy-loading",alt:"Image SrfGroup"}))}},76600:function(e,t,n){n.d(t,{p:function(){return r}});n(47313);var s=n(18466),i=n(46417),r=function(e){return e&&e.convertDate?(0,i.jsx)(s.Z,{date:new Date(e.convertDate),locale:"en-US"}):(0,i.jsx)(i.Fragment,{})}},33381:function(e,t,n){n.d(t,{P:function(){return l}});var s=n(1413),i=n(47313),r=n(50301),o=n(46417),l=i.forwardRef((function(e,t){return(0,o.jsx)(r.Z,(0,s.Z)({direction:"up",ref:t},e))}))},43997:function(e,t,n){var s=n(95318);t.Z=void 0;var i=s(n(45045)),r=n(46417),o=(0,i.default)((0,r.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");t.Z=o},91251:function(e,t,n){n(47313);var s=n(81171),i=n(46417);t.Z=(0,s.Z)((0,i.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")}}]);