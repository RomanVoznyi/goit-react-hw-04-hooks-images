(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3ymfv",image:"ImageGalleryItem_image__2hD8m"}},12:function(e,t,a){e.exports={buttonBox:"Button_buttonBox__172E2",Button:"Button_Button__1nYsp"}},26:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2G0bq"}},27:function(e,t,a){e.exports={Notify:"Notify_Notify__36pmP"}},28:function(e,t,a){e.exports={App:"App_App__19Its"}},34:function(e,t,a){},5:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__3vVek",SearchForm:"Searchbar_SearchForm__hvPks",button:"Searchbar_button__1qlLC",label:"Searchbar_label__3cVBX",input:"Searchbar_input__23OTU"}},74:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a.n(c),o=a(22),s=a.n(o),i=(a(34),a(13)),u=a(4),l=a(23),b=a.n(l),j=a(10),m=a.n(j),g=a(24),h=a(25),p=a.n(h),f=a(2),O=a.n(f),d=function(){var e=Object(g.a)(m.a.mark((function e(t,a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://pixabay.com/api/?q=".concat(t,"&page=").concat(a,"&key=").concat("18895827-cf969cabaa6d7255b0d8616bb","&image_type=photo&orientation=horizontal&per_page=12"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();d.propTypes={searchQuery:O.a.string.isRequired,page:O.a.number.isRequired};var _=d,x=a(5),v=a.n(x),y=function(e){var t=e.onSubmit,a=Object(c.useState)(""),r=Object(u.a)(a,2),o=r[0],s=r[1];return Object(n.jsx)("header",{className:v.a.Searchbar,children:Object(n.jsxs)("form",{className:v.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(o)},children:[Object(n.jsx)("button",{type:"submit",className:v.a.button,children:Object(n.jsx)("span",{className:v.a.label,children:"Search"})}),Object(n.jsx)("input",{className:v.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:o,onChange:function(e){s(e.target.value)}})]})})},S=a(11),N=a.n(S),w=function(e){var t=e.image,a=e.toggleModal;return Object(n.jsx)("li",{className:N.a.ImageGalleryItem,children:Object(n.jsx)("img",{className:N.a.image,src:t.webformatURL,alt:t.tags,onClick:function(){a({status:!0,src:t.largeImageURL,alt:t.tags})}})})},k=a(26),I=a.n(k),M=function(e){var t=e.images,a=e.toggleModal;return Object(n.jsx)("ul",{className:I.a.ImageGallery,children:t.map((function(e){return Object(n.jsx)(w,{image:e,toggleModal:a},e.id)}))})},B=a(27),G=a.n(B),C=function(e){var t=e.message;return Object(n.jsx)("p",{className:G.a.Notify,children:t})},E=a(8),F=a.n(E),q=function(e){var t=e.src,a=e.alt,r=e.toggleModal;Object(c.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}}));var o=function(e){"Escape"!==e.key&&e.target!==e.currentTarget||r({status:!1})};return Object(n.jsx)("div",{className:F.a.Overlay,onClick:o,children:Object(n.jsx)("div",{className:F.a.Modal,children:Object(n.jsx)("img",{className:F.a.img,src:t,alt:a})})})},L=a(12),T=a.n(L),A=function(e){var t=e.onClick;return Object(n.jsx)("div",{className:T.a.buttonBox,children:Object(n.jsx)("button",{type:"button",className:T.a.Button,onClick:t,children:"Load more"})})},R=a(28),U=a.n(R),H=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)(""),s=Object(u.a)(o,2),l=s[0],j=s[1],m=Object(c.useState)(1),g=Object(u.a)(m,2),h=g[0],p=g[1],f=Object(c.useState)(!1),O=Object(u.a)(f,2),d=O[0],x=O[1],v=Object(c.useState)(null),S=Object(u.a)(v,2),N=S[0],w=S[1],k=Object(c.useState)(!1),I=Object(u.a)(k,2),B=I[0],G=I[1],E=Object(c.useState)(""),F=Object(u.a)(E,2),L=F[0],T=F[1],R=Object(c.useState)(!1),H=Object(u.a)(R,2),P=H[0],D=H[1],J=Object(c.useState)(!1),V=Object(u.a)(J,2),Y=V[0],z=V[1],Q=Object(c.useState)(null),X=Object(u.a)(Q,2),K=X[0],W=X[1];function Z(e,t){if(""===e)return r([]),z(!1),T("Please input search request"),void G(!0);x(!0),G(!1),_(e,t).then((function(e){1===t?r(e.hits):(r((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e.hits))})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})),function(e,t){z(e>t);e?G(!1):(T("Nothing was found. Try again."),G(!0))}(e.totalHits,a.length+e.hits.length),p((function(e){return e+1}))})).catch((function(e){return w(e)})).finally((function(){return x(!1)}))}Object(c.useEffect)((function(){p(1),Z(l,1)}),[l]);var $=function(e){var t=e.status,a=e.src,n=e.alt;t?(W({src:a,alt:n}),D(!0)):(D(!1),W(null))};return Object(n.jsxs)("div",{className:U.a.App,children:[Object(n.jsx)(y,{onSubmit:j}),N&&Object(n.jsx)(C,{message:"Something wrong: ".concat(N.message)}),d&&Object(n.jsx)(b.a,{type:"Circles",color:"#00BFFF",height:80,width:80}),a.length>0&&Object(n.jsx)(M,{images:a,toggleModal:$}),B&&Object(n.jsx)(C,{message:L}),P&&Object(n.jsx)(q,{src:K.src,alt:K.alt,toggleModal:$}),Y&&Object(n.jsx)(A,{onClick:function(){return Z(l,h)}})]})};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(H,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1YbmH",Modal:"Modal_Modal__28Uk_"}}},[[74,1,2]]]);
//# sourceMappingURL=main.d1cb922b.chunk.js.map