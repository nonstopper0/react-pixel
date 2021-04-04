(this["webpackJsonpreact-pixel"]=this["webpackJsonpreact-pixel"]||[]).push([[0],{103:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},180:function(e,t,n){},183:function(e,t,n){},185:function(e,t,n){},294:function(e,t,n){},295:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),r=n(61),a=n.n(r),s=(n(114),n(5)),i=(n(115),n(4)),u=n.n(i),l=n(15),d=n(104),b=n.n(d),j=n(110),f=n(63);n(180);function m(e){if(!e&&0!==e)return null;try{var t=sessionStorage.getItem(e);return t?JSON.parse(t):null}catch(n){return console.log(n),null}}function h(e,t){for(var n=0;n<e.length;n++){var o=document.getElementById("[".concat(e[n][0][0],", ").concat(e[n][0][1],"]"));o.style.backgroundColor="undo"===t?e[n][1]:e[n][2]}}n(181),n(183);var g=n(3);function v(e){var t=e.grid,n=e.backgroundColor,o=e.dimension,c=e.zoom,r=e.pid,a=e.rid;return Object(g.jsx)("div",{className:"pixel",id:"[".concat(a,", ").concat(r,"]"),onMouseOver:function(e){e.target.style.border="1px solid black"},onMouseLeave:function(e){e.target.style.border="none"},style:{boxShadow:t?"inset 0 0 1px black":"none",backgroundColor:n,width:"".concat(c/o,"px"),height:"".concat(c/o,"px")}})}n(185);function O(e){for(var t=e.backgroundColor,n=e.dimension,o=e.zoom,c=e.rid,r=e.grid,a=[],s=0;s<n;s++)a.push(Object(g.jsx)(v,{rid:c,pid:s,grid:r,zoom:o,dimension:n,backgroundColor:t},s));return Object(g.jsx)("div",{className:"row",children:a})}var x=c.a.memo((function(e){for(var t=e.dimension,n=e.backgroundColor,c=e.zoom,r=e.grid,a=Object(o.useRef)(),s=[],i=0;i<t;i++)console.log("redrawing"),s.push(Object(g.jsx)(O,{grid:r,rid:i,zoom:c,dimension:t,backgroundColor:n},i));return Object(g.jsx)("div",{id:"canvas",ref:a,children:s})})),p=n(109);function C(e){return Object(g.jsx)(p.a,{disableAlpha:!0,onChangeComplete:function(t){return e.changeColor(t.hex,!0)},colors:["#FFFFFF","#E8E8E8","#E0E0E0","#C0C0C0","#888888","#585858","#202020","#000000","#ff0000","#ff4800","#ffdd00","#00ff04","#00e7ff","#0079ff","#005fff","#8000ff","#B80000","#DB3E00","#FCCB00","#008B02","#006B76","#1273DE","#004DCF","#350096","#EB9694","#FAD0C3","#FEF3BD","#C1E1C5","#BEDADC","#C4DEF6","#BED3F3","#D4C4FB"]})}function y(e){var t=e.currentColor,n=e.size,c=Object(o.useState)([]),r=Object(s.a)(c,2),a=(r[0],r[1]),i=Object(o.useState)(!1),d=Object(s.a)(i,2),b=(d[0],d[1]),j=!1,f=[];Object(o.useEffect)((function(){return console.log("attaching event listener to brush with color: "+t),window.addEventListener("mousedown",v),window.addEventListener("mousemove",m),window.addEventListener("mouseleave",h),window.addEventListener("mouseup",h),function(){console.log("removing event listeners"),window.removeEventListener("mousedown",v),window.removeEventListener("mousemove",m),window.removeEventListener("mouseleave",h),window.removeEventListener("mouseup",h)}}),[t,n]);var m=function(e){j&&Math.floor(e.timeStamp)%2!==0&&b((function(t){return e.target.id===t?t:(v(e),e.target.id)}))},h=function(t){j=!1,f.length>0&&(e.history(f),f=[],a((function(e){return[]})))},g=function(e){f?e[1]!==e[2]&&f.push(e):f.push(e)},v=function(){var e=Object(l.a)(u.a.mark((function e(o){var c,r,a,s,i,l,d,b,f,m,h,v,O,x;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o.preventDefault(),o.target.classList.contains("pixel")){e.next=3;break}return e.abrupt("return");case 3:return j=!0,e.next=6,JSON.parse(o.target.id);case 6:e.t0=e.sent,e.t1=o.target.style.backgroundColor,e.t2=t,c=[e.t0,e.t1,e.t2],o.target.style.backgroundColor=t,g(c),r=c[0],2===n?(a=document.getElementById("[".concat(r[0],", ").concat(r[1]+1,"]")),s=document.getElementById("[".concat(r[0],", ").concat(r[1]-1,"]")),i=document.getElementById("[".concat(r[0]+1,", ").concat(r[1],"]")),l=document.getElementById("[".concat(r[0]-1,", ").concat(r[1],"]")),a&&(g([[r[0],r[1]+1],a.style.backgroundColor,t]),a.style.backgroundColor=t),s&&(g([[r[0],r[1]-1],s.style.backgroundColor,t]),s.style.backgroundColor=t),i&&(g([[r[0]+1,r[1]],i.style.backgroundColor,t]),i.style.backgroundColor=t),l&&(g([[r[0]-1,r[1]],l.style.backgroundColor,t]),l.style.backgroundColor=t)):3===n&&(d=document.getElementById("[".concat(r[0],", ").concat(r[1]+1,"]")),b=document.getElementById("[".concat(r[0],", ").concat(r[1]-1,"]")),f=document.getElementById("[".concat(r[0]+1,", ").concat(r[1],"]")),m=document.getElementById("[".concat(r[0]-1,", ").concat(r[1],"]")),h=document.getElementById("[".concat(r[0]+1,", ").concat(r[1]+1,"]")),v=document.getElementById("[".concat(r[0]+1,", ").concat(r[1]-1,"]")),O=document.getElementById("[".concat(r[0]-1,", ").concat(r[1]+1,"]")),x=document.getElementById("[".concat(r[0]-1,", ").concat(r[1]-1,"]")),d&&(g([[r[0],r[1]+1],d.style.backgroundColor,t]),d.style.backgroundColor=t),b&&(g([[r[0],r[1]-1],b.style.backgroundColor,t]),b.style.backgroundColor=t),f&&(g([[r[0]+1,r[1]],f.style.backgroundColor,t]),f.style.backgroundColor=t),m&&(g([[r[0]-1,r[1]],m.style.backgroundColor,t]),m.style.backgroundColor=t),h&&(g([[r[0]+1,r[1]+1],h.style.backgroundColor,t]),h.style.backgroundColor=t),v&&(g([[r[0]+1,r[1]-1],v.style.backgroundColor,t]),v.style.backgroundColor=t),O&&(g([[r[0]-1,r[1]+1],O.style.backgroundColor,t]),O.style.backgroundColor=t),x&&(g([[r[0]-1,r[1]-1],x.style.backgroundColor,t]),x.style.backgroundColor=t));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return null}n(103);function k(e){var t=Object(o.useState)(""),n=Object(s.a)(t,2),c=n[0],r=n[1];Object(o.useEffect)((function(){return window.addEventListener("mousedown",a),function(){window.removeEventListener("mousedown",a)}}),[]);var a=function(t){t.target.classList.contains("modal-component")||e.close()};return Object(g.jsxs)("div",{className:"Modal modal-component",children:[Object(g.jsx)("h1",{className:"modal-component",children:"Join/Create MultiDraw Room"}),Object(g.jsx)("input",{onChange:function(e){e.preventDefault(),r((function(t){return e.target.value}))},placeholder:"Room Name",value:c,className:"modal-component"}),Object(g.jsx)("button",{className:"modal-component",onClick:function(){return e.handleNetwork(c)},children:"Join"})]})}function w(e){var t=Object(o.useState)(e.dimension),n=Object(s.a)(t,2),c=n[0],r=n[1];Object(o.useEffect)((function(){return window.addEventListener("mousedown",a),function(){window.removeEventListener("mousedown",a)}}),[]);var a=function(t){t.target.classList.contains("modal-component")||e.close()};return Object(g.jsxs)("div",{className:"Modal modal-component",children:[Object(g.jsx)("h1",{className:"h12 modal-component",children:"Resize"}),Object(g.jsxs)("p",{children:["current size: ",e.dimension," x ",e.dimension]}),Object(g.jsxs)("h2",{children:[c," x ",c]}),Object(g.jsxs)("div",{className:"modal-component modal-buttons",children:[Object(g.jsx)("button",{onClick:function(){r((function(e){return e>16?e/2:e}))},className:"modal-component",children:"-"}),Object(g.jsx)("button",{onClick:function(){r((function(e){return e<64?2*e:e}))},className:"modal-component",children:"+"})]}),Object(g.jsx)("button",{onClick:function(){e.close(),e.handleResize(c)},className:"modal-component b2",children:"Resize"})]})}var E=new b.a({dataOnly:!0});function N(e){var t=Object(o.useState)(e.dimension),n=Object(s.a)(t,2),c=n[0],r=n[1],a=Object(o.useState)(500),i=Object(s.a)(a,2),d=i[0],b=i[1],v=Object(o.useState)("rgb(255, 0, 0)"),O=Object(s.a)(v,2),p=O[0],N=O[1],S=Object(o.useState)(["rgb(220, 0, 0)","rgb(0, 220, 0)","rgb(0, 0, 220)"]),B=Object(s.a)(S,2),L=B[0],I=B[1],D=Object(o.useState)(!1),F=Object(s.a)(D,2),R=F[0],z=F[1],M=Object(o.useState)("rgb(255,255,255)"),J=Object(s.a)(M,2),A=J[0],P=(J[1],Object(o.useState)("brush")),q=Object(s.a)(P,2),T=q[0],Y=q[1],U=Object(o.useState)(1),W=Object(s.a)(U,2),G=W[0],K=W[1],X=Object(o.useState)(!1),$=Object(s.a)(X,2),H=$[0],Q=$[1],V=Object(o.useState)(!1),Z=Object(s.a)(V,2),_=Z[0],ee=Z[1],te=Object(o.useState)(!1),ne=Object(s.a)(te,2),oe=ne[0],ce=ne[1],re=Object(o.useState)(0),ae=Object(s.a)(re,2),se=ae[0],ie=ae[1],ue=Object(o.useState)("Select a brush to get started!"),le=Object(s.a)(ue,2),de=le[0],be=le[1],je=Object(o.useRef)();Object(o.useEffect)((function(){return E.on("joinedRoom",(function(e){console.log("succesfully joined room ",e)})),E.on("removedPeer",(function(e){console.log(e.id," left the room"),be("User ".concat(e.id," has left the room"))})),E.on("leftRoom",(function(e){console.log("left")})),E.on("createdPeer",(function(e){console.log(e.id," joined the room!"),be("User ".concat(e.id," has joined the room"))})),E.on("receivedPeerData",(function(e,t,n){console.log("data received...."),n.id&&(console.log("data received from: ".concat(n.id,"... contains: ").concat(t)),h(t,"redo"))})),sessionStorage.clear(),E.leaveRoom(),document.addEventListener("wheel",fe),function(){document.removeEventListener("wheel",fe)}}),[]);var fe=function(e){e.deltaY>0?b((function(e){return e>50?e-50:e})):e.deltaY<0&&b((function(e){return e<800?e+50:e}))},me=function(e,t){be("Changed Brush color");var n,o=t?/^#([a-f0-9]{3}){1,2}$/.test(n=e)?(4==n.length&&(n="#"+[n[1],n[1],n[2],n[2],n[3],n[3]].join("")),"rgb("+[(n="0x"+n.substring(1))>>16&255,n>>8&255,255&n].join(", ")+")"):"":e;N((function(e){return o})),I((function(e){var t=e.indexOf(o);return o===e[0]?e:-1===t?[o,e[0],e[1]]:2===t?[o,e[0],e[1]]:[o,e[0],e[2]]}))},he=function(e,t,n){Y((function(e){return e?e===n?(console.log("second"),e):(console.log("third previous: "+e+" to add: "+t+" to find: "+n),document.querySelector("#".concat(e)).classList.add(t),document.querySelector("#".concat(n)).classList.remove(t),n):(console.log("first"),document.querySelector("#".concat(n)).classList.toggle(t),n)}))},ge=function(e,t,n,o){if(n&&(o(!1),document.querySelector(".".concat(n)).classList.add(t),n===e.target.id))return;o(e.target.id),document.querySelector(".".concat(e.target.id)).classList.remove(t)},ve=function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,document.querySelector("#canvas");case 2:n=e.sent,t(n).then((function(e){(new Image).src=e;var t=document.createElement("a");t.style.display="none",console.log(e),t.setAttribute("download","image"),t.setAttribute("href",e),document.body.appendChild(t),t.click(),t.remove()})).catch((function(e){console.log("gone wrong: ",e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,o,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=[],n=0;n<c;n++)for(o=0;o<c;o++)r=document.getElementById("[".concat(n,", ").concat(o,"]")).style["background-color"],t.push(r);return e.next=4,JSON.stringify(t);case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),xe=function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=localStorage,e.next=3,Oe();case 3:e.t1=e.sent,e.t0.setItem.call(e.t0,"save",e.t1),be("Canvas Saved...");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),pe=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,o,r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,JSON.parse(localStorage.getItem("save"));case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return");case 5:if(c*c===n.length){e.next=8;break}return be("Your save file is not the same dimension as your current canvas (".concat(c," x ").concat(c,") ")),e.abrupt("return");case 8:for(Ce(),o=0,r=0;r<c;r++)for(a=0;a<c;a++)document.getElementById("[".concat(r,", ").concat(a,"]")).style["background-color"]=n[o],o+=1;be("Canvas Loaded...");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ce=function(){sessionStorage.clear(),ie(0);for(var e=0;e<c;e++)for(var t=0;t<c;t++){document.getElementById("[".concat(e,", ").concat(t,"]")).style["background-color"]="rgb(255,255,255)"}};return Object(g.jsxs)("div",{className:"editor",children:[Object(g.jsxs)("nav",{className:"top-nav",children:[Object(g.jsxs)("div",{className:"dd-wrapper",children:[Object(g.jsx)("button",{id:"File",onClick:function(e){return ge(e,"hidden",_,ee)},children:"File"}),Object(g.jsxs)("div",{className:"drop-down hidden File",children:[Object(g.jsx)("button",{onClick:function(){return ve(j.a)},children:"Download"}),Object(g.jsx)("button",{onClick:function(){return xe("save")},children:"Save"}),Object(g.jsx)("button",{onClick:function(){return pe("save")},children:"Load"})]})]}),Object(g.jsxs)("div",{className:"dd-wrapper",children:[Object(g.jsx)("button",{id:"Edit",onClick:function(e){return ge(e,"hidden",_,ee)},children:"Edit"}),Object(g.jsxs)("div",{className:"drop-down hidden Edit",children:[Object(g.jsx)("button",{style:{color:oe?"grey":"white"},disabled:!!oe,onClick:function(){se>0&&(be("Undo..."),ie((function(e){return h(m(e-1),"undo"),e-1})))},children:"Undo"}),Object(g.jsx)("button",{style:{color:oe?"grey":"white"},disabled:!!oe,onClick:function(){return be("Redo..."),void ie((function(e){var t=m(e);return t?(h(t,"redo"),e+1):e}))},children:"Redo"}),Object(g.jsx)("button",{style:{color:oe?"grey":"white"},disabled:!!oe,onClick:function(){return Q("Resize")},children:"Resize"}),Object(g.jsx)("button",{onClick:function(){return Ce()},children:"Reset"}),Object(g.jsx)("button",{onClick:function(){return z(!R)},children:"Gridlines"})]})]}),Object(g.jsxs)("div",{className:"dd-wrapper",children:[Object(g.jsx)("button",{id:"MultiDraw",onClick:function(e){return ge(e,"hidden",_,ee)},children:"MultiDraw"}),Object(g.jsxs)("div",{className:"drop-down hidden MultiDraw",children:[Object(g.jsx)("button",{style:{color:oe?"grey":"white"},disabled:!!oe,onClick:function(){return Q("MultiDraw")},children:"Join"}),Object(g.jsx)("button",{onClick:function(){oe&&(E.leaveRoom(),ce(!1),be("You have disconnected from MultiDraw room..."))},children:"Leave"})]})]}),Object(g.jsx)("p",{ref:je,className:"message-right",children:de})]}),Object(g.jsxs)("nav",{className:"left-nav",children:[Object(g.jsxs)("div",{className:"current-color",children:[Object(g.jsx)("div",{className:"color color-main",style:{backgroundColor:L[0]}}),Object(g.jsx)("div",{className:"color",onClick:function(){return me(L[1],!1)},style:{backgroundColor:L[1]}}),Object(g.jsx)("div",{className:"color",onClick:function(){return me(L[2],!1)},style:{backgroundColor:L[2]}})]}),Object(g.jsx)(C,{changeColor:me}),Object(g.jsxs)("div",{className:"button-wrapper",children:[Object(g.jsx)("button",{id:"brush",className:"left-button",onClick:function(e){he(0,"left-inactive","brush")},children:Object(g.jsx)(f.a,{})}),Object(g.jsx)("button",{onClick:function(){return G<3?K(G+1):null},children:"+"}),Object(g.jsx)("button",{onClick:function(){return G>1?K(G-1):null},children:"-"})]}),"brush"===T&&Object(g.jsx)(y,{history:function(e){E.shout("paint-data",e),ie((function(t){return function(e,t){e||0===e||console.log("Error: Key is missing");try{sessionStorage.setItem(e,JSON.stringify(t))}catch(n){console.log(n)}}(t,e),t+1}))},size:G,currentColor:p}),Object(g.jsx)("div",{className:"button-wrapper",children:Object(g.jsxs)("button",{id:"bucket",className:"left-button left-inactive",onClick:function(e){he(0,"left-inactive","bucket")},children:[Object(g.jsx)(f.b,{}),"WIP"]})})]}),Object(g.jsx)("div",{className:"canvas-container",children:Object(g.jsx)(x,{grid:R,backgroundColor:A,zoom:d,dimension:c})}),"MultiDraw"===H&&Object(g.jsx)(k,{close:function(){return Q(!H)},handleNetwork:function(e){var t;t=e,oe||(E.joinRoom(t),ce(!0),be("You have succesfully joined room ".concat(t,"..."))),Q(!H)}}),"Resize"===H&&Object(g.jsx)(w,{dimension:c,close:function(){return Q(!H)},handleResize:function(e){r((function(t){return e}))}})]})}n(294);function S(e){return Object(g.jsx)("div",{className:"page-cover"})}var B=function(){var e=Object(o.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(o.useState)(!1),a=Object(s.a)(r,2),i=a[0],u=a[1],l=Object(o.useState)(16),d=Object(s.a)(l,2),b=d[0],j=d[1],f=function(e){e>=16&&e<=64&&j(e)};return Object(g.jsxs)("div",{className:"App",children:[n?Object(g.jsx)(N,{dimension:b}):Object(g.jsxs)("div",{className:"homepage-container",children:[Object(g.jsxs)("div",{className:"homepage-header-div",children:[Object(g.jsx)("h1",{children:"React Pixel"}),Object(g.jsx)("p",{children:"An application for creating pixel art on the web!"})]}),Object(g.jsxs)("div",{className:"dimension-div",children:[Object(g.jsxs)("h4",{children:["Canvas Size: ",Object(g.jsx)("span",{children:b})," X ",Object(g.jsx)("span",{children:b})]}),Object(g.jsx)("button",{onClick:function(){return f(b/2)},children:"-"}),Object(g.jsx)("button",{onClick:function(){return f(2*b)},children:"+"})]}),Object(g.jsx)("button",{className:"start-button",onClick:function(){return u(!0),setTimeout((function(){c(!0)}),500),void setTimeout((function(){u(!1)}),1500)},children:"START NOW"})]}),i?Object(g.jsx)(S,{}):null]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,297)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),o(e),c(e),r(e),a(e)}))};a.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(B,{})}),document.getElementById("root")),L()}},[[295,1,2]]]);
//# sourceMappingURL=main.f15887e4.chunk.js.map