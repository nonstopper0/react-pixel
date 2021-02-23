(this["webpackJsonpreact-pixel"]=this["webpackJsonpreact-pixel"]||[]).push([[0],{228:function(e,t,n){},229:function(e,t,n){},522:function(e,t,n){},586:function(e,t,n){},587:function(e,t,n){},588:function(e,t,n){},697:function(e,t,n){},698:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),r=n(25),a=n.n(r),i=(n(228),n(6)),s=(n(229),n(216)),u=(n(522),n(4));function l(e){var t=Object(o.useState)("Room Name"),n=Object(i.a)(t,2),c=n[0],r=n[1],a=function(t){t.target.classList.contains("modal-component")||e.close()};return Object(o.useEffect)((function(){return window.addEventListener("mousedown",a),Object(s.a)((function(){window.removeEventListener("mousedown",a)}))}),[]),Object(u.jsxs)("div",{className:"Modal modal-component",children:[Object(u.jsx)("h1",{className:"modal-component",children:"Join MultiDraw Room"}),Object(u.jsx)("input",{onChange:function(e){return r((function(t){return e.target.value}))},value:c,className:"modal-component"}),Object(u.jsx)("button",{className:"modal-component",onClick:function(){return e.click(c)},children:"JOIN"})]})}var d=n(5),b=n.n(d),j=n(80),m=n(218),f=n.n(m),g=n(224);n(586);function h(e){if(!e&&0!==e)return null;try{var t=sessionStorage.getItem(e);return t?JSON.parse(t):null}catch(n){return console.log(n),null}}function O(e,t){for(var n=0;n<e.length;n++){var o=document.getElementById("[".concat(e[n][0][0],", ").concat(e[n][0][1],"]"));o.style.backgroundColor="undo"===t?e[n][1]:e[n][2]}}n(128),n(587);function v(e){var t=e.grid,n=e.backgroundColor,o=e.dimension,c=e.zoom,r=e.pid,a=e.rid;return Object(u.jsx)("div",{className:"pixel",id:"[".concat(a,", ").concat(r,"]"),onMouseOver:function(e){e.target.style.border="1px solid black"},onMouseLeave:function(e){e.target.style.border="none"},style:{boxShadow:t?"inset 0 0 1px black":"none",backgroundColor:n,width:"".concat(c/o,"px"),height:"".concat(c/o,"px")}})}n(588);function x(e){for(var t=e.backgroundColor,n=e.dimension,o=e.zoom,c=e.rid,r=e.grid,a=[],i=0;i<n;i++)a.push(Object(u.jsx)(v,{rid:c,pid:i,grid:r,zoom:o,dimension:n,backgroundColor:t},i));return Object(u.jsx)("div",{className:"row",children:a})}var p=c.a.memo((function(e){for(var t=e.dimension,n=e.backgroundColor,c=e.zoom,r=e.grid,a=Object(o.useRef)(),i=[],s=0;s<t;s++)console.log("redrawing"),i.push(Object(u.jsx)(x,{grid:r,rid:s,zoom:c,dimension:t,backgroundColor:n},s));return Object(u.jsx)("div",{id:"canvas",ref:a,children:i})})),y=n(223);function C(e){return Object(u.jsx)(y.a,{disableAlpha:!0,onChangeComplete:function(t){return e.changeColor(t.hex)}})}function k(e){var t=e.currentColor,n=e.size,c=Object(o.useState)([]),r=Object(i.a)(c,2),a=(r[0],r[1]),s=Object(o.useState)(!1),u=Object(i.a)(s,2),l=(u[0],u[1]),d=!1,m=[];Object(o.useEffect)((function(){return console.log("attaching event listener to brush with color: "+t),window.addEventListener("mousedown",O),window.addEventListener("mousemove",f),window.addEventListener("mouseleave",g),window.addEventListener("mouseup",g),function(){window.removeEventListener("mousedown",O),window.removeEventListener("mousemove",f),window.removeEventListener("mouseleave",g),window.removeEventListener("mouseup",g)}}),[t,n]);var f=function(e){d&&Math.floor(e.timeStamp)%2!==0&&l((function(t){return e.target.id===t?t:(O(e),e.target.id)}))},g=function(t){d=!1,m.length>0&&(e.history(m),m=[],a((function(e){return[]})))},h=function(e){m?e[1]!==e[2]&&m.push(e):m.push(e)},O=function(){var e=Object(j.a)(b.a.mark((function e(o){var c,r,a,i,s,u,l,j,m,f,g,O,v,x;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o.preventDefault(),o.target.classList.contains("pixel")){e.next=3;break}return e.abrupt("return");case 3:return d=!0,e.next=6,JSON.parse(o.target.id);case 6:e.t0=e.sent,e.t1=o.target.style.backgroundColor,e.t2=t,c=[e.t0,e.t1,e.t2],o.target.style.backgroundColor=t,h(c),r=c[0],2===n?(a=document.getElementById("[".concat(r[0],", ").concat(r[1]+1,"]")),i=document.getElementById("[".concat(r[0],", ").concat(r[1]-1,"]")),s=document.getElementById("[".concat(r[0]+1,", ").concat(r[1],"]")),u=document.getElementById("[".concat(r[0]-1,", ").concat(r[1],"]")),a&&(h([[r[0],r[1]+1],a.style.backgroundColor,t]),a.style.backgroundColor=t),i&&(h([[r[0],r[1]-1],i.style.backgroundColor,t]),i.style.backgroundColor=t),s&&(h([[r[0]+1,r[1]],s.style.backgroundColor,t]),s.style.backgroundColor=t),u&&(h([[r[0]-1,r[1]],u.style.backgroundColor,t]),u.style.backgroundColor=t)):3===n&&(l=document.getElementById("[".concat(r[0],", ").concat(r[1]+1,"]")),j=document.getElementById("[".concat(r[0],", ").concat(r[1]-1,"]")),m=document.getElementById("[".concat(r[0]+1,", ").concat(r[1],"]")),f=document.getElementById("[".concat(r[0]-1,", ").concat(r[1],"]")),g=document.getElementById("[".concat(r[0]+1,", ").concat(r[1]+1,"]")),O=document.getElementById("[".concat(r[0]+1,", ").concat(r[1]-1,"]")),v=document.getElementById("[".concat(r[0]-1,", ").concat(r[1]+1,"]")),x=document.getElementById("[".concat(r[0]-1,", ").concat(r[1]-1,"]")),l&&(h([[r[0],r[1]+1],l.style.backgroundColor,t]),l.style.backgroundColor=t),j&&(h([[r[0],r[1]-1],j.style.backgroundColor,t]),j.style.backgroundColor=t),m&&(h([[r[0]+1,r[1]],m.style.backgroundColor,t]),m.style.backgroundColor=t),f&&(h([[r[0]-1,r[1]],f.style.backgroundColor,t]),f.style.backgroundColor=t),g&&(h([[r[0]+1,r[1]+1],g.style.backgroundColor,t]),g.style.backgroundColor=t),O&&(h([[r[0]+1,r[1]-1],O.style.backgroundColor,t]),O.style.backgroundColor=t),v&&(h([[r[0]-1,r[1]+1],v.style.backgroundColor,t]),v.style.backgroundColor=t),x&&(h([[r[0]-1,r[1]-1],x.style.backgroundColor,t]),x.style.backgroundColor=t));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return null}var w=new f.a({dataOnly:!0});function S(e){var t=Object(o.useState)(e.dimension),n=Object(i.a)(t,2),c=n[0],r=n[1],a=Object(o.useState)(500),s=Object(i.a)(a,2),d=s[0],m=s[1],f=Object(o.useState)("#bbbbbb"),v=Object(i.a)(f,2),x=v[0],y=v[1],S=Object(o.useState)(!1),E=Object(i.a)(S,2),N=E[0],L=E[1],I=Object(o.useState)(!0),B=Object(i.a)(I,2),R=(B[0],B[1],Object(o.useState)("#ffffff")),z=Object(i.a)(R,2),M=z[0],D=(z[1],Object(o.useState)(!1)),J=Object(i.a)(D,2),F=J[0],P=J[1],T=Object(o.useState)(1),q=Object(i.a)(T,2),A=q[0],Y=q[1],U=Object(o.useState)(!1),G=Object(i.a)(U,2),H=G[0],K=G[1],W=Object(o.useState)(!1),X=Object(i.a)(W,2),$=X[0],Q=X[1],V=Object(o.useState)(!1),Z=Object(i.a)(V,2),_=Z[0],ee=Z[1],te=Object(o.useState)(0),ne=Object(i.a)(te,2),oe=ne[0],ce=ne[1],re=Object(o.useState)("Hey, I'm your alert bar..."),ae=Object(i.a)(re,2),ie=ae[0],se=ae[1],ue=Object(o.useRef)();Object(o.useEffect)((function(){return w.on("joinedRoom",(function(e){console.log("succesfully joined room ",e)})),w.on("removedPeer",(function(e){console.log(e.id," left the room"),se("User ".concat(e.id," has left the room"))})),w.on("leftRoom",(function(e){console.log("left")})),w.on("createdPeer",(function(e){console.log(e.id," joined the room!"),se("User ".concat(e.id," has joined the room"))})),w.on("receivedPeerData",(function(e,t,n){console.log("data received...."),n.id&&(console.log("data received from: ".concat(n.id,"... contains: ").concat(t)),O(t,"redo"))})),sessionStorage.clear(),w.leaveRoom(),document.addEventListener("wheel",le),function(){console.log("cleaning"),document.removeEventListener("wheel",le)}}),[]);var le=function(e){e.deltaY>0?m((function(e){return e>50?e-50:e})):e.deltaY<0&&m((function(e){return e<800?e+50:e}))},de=function(e,t,n,o){if(n&&(o(!1),document.querySelector(".".concat(n)).classList.add(t),n===e.target.id))return;o(e.target.id),document.querySelector(".".concat(e.target.id)).classList.remove(t)},be=function(){var e=Object(j.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,document.querySelector("#canvas");case 2:n=e.sent,t(n).then((function(e){var t=new Image;t.src=e,document.body.appendChild(t)})).catch((function(e){console.log("gone wrong: ",e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"editor",children:[Object(u.jsxs)("nav",{className:"top-nav",children:[Object(u.jsxs)("div",{className:"dd-wrapper",children:[Object(u.jsx)("button",{id:"File",onClick:function(e){return de(e,"hidden",$,Q)},children:"File"}),Object(u.jsx)("div",{className:"drop-down hidden File",children:Object(u.jsx)("button",{onClick:function(){return be(g.a)},children:"Download"})})]}),Object(u.jsxs)("div",{className:"dd-wrapper",children:[Object(u.jsx)("button",{id:"Edit",onClick:function(e){return de(e,"hidden",$,Q)},children:"Edit"}),Object(u.jsxs)("div",{className:"drop-down hidden Edit",children:[Object(u.jsx)("button",{style:{color:_?"grey":"white"},disabled:!!_,onClick:function(){oe>0&&ce((function(e){return O(h(e-1),"undo"),e-1}))},children:"Undo"}),Object(u.jsx)("button",{style:{color:_?"grey":"white"},disabled:!!_,onClick:function(){ce((function(e){var t=h(e);return t?(O(t,"redo"),e+1):e}))},children:"Redo"}),Object(u.jsx)("button",{style:{color:_?"grey":"white"},disabled:!!_,onClick:function(){r(2*c)},children:"Resize"}),Object(u.jsx)("button",{onClick:function(){return L(!N)},children:"Gridlines"})]})]}),Object(u.jsxs)("div",{className:"dd-wrapper",children:[Object(u.jsx)("button",{id:"MultiDraw",onClick:function(e){return de(e,"hidden",$,Q)},children:"MultiDraw"}),Object(u.jsxs)("div",{className:"drop-down hidden MultiDraw",children:[Object(u.jsx)("button",{onClick:function(){return K(!H)},children:"Join"}),Object(u.jsx)("button",{onClick:function(){_&&(w.leaveRoom(),ee(!1),se("You have disconnected from MultiDraw room..."))},children:"Leave"})]})]}),Object(u.jsx)("p",{ref:ue,className:"message-right",children:ie})]}),Object(u.jsxs)("nav",{className:"left-nav",children:[Object(u.jsx)(C,{changeColor:function(e){se("Changed Brush color"),y((function(t){return/^#([a-f0-9]{3}){1,2}$/.test(n=e)?(4==n.length&&(n="#"+[n[1],n[1],n[2],n[2],n[3],n[3]].join("")),"rgb("+[(n="0x"+n.substring(1))>>16&255,n>>8&255,255&n].join(", ")+")"):"";var n}))}}),Object(u.jsxs)("div",{className:"button-wrapper",children:[Object(u.jsx)("button",{className:"left-button",onClick:function(e){var t,n;t="brush-inactive",n="brush",P(!F),document.querySelector("#".concat(n)).classList.toggle(t)},children:"Brush"}),Object(u.jsx)("div",{style:{backgroundColor:x},id:"brush",className:"brush-button brush-inactive"})]}),Object(u.jsx)("button",{onClick:function(){return Y(A+1)},children:"Size +"}),Object(u.jsx)("button",{onClick:function(){return Y(A-1)},children:"Size -"}),F?Object(u.jsx)(k,{history:function(e){w.shout("paint-data",e),ce((function(t){return function(e,t){e||0===e||console.log("Error: Key is missing");try{sessionStorage.setItem(e,JSON.stringify(t))}catch(n){console.log(n)}}(t,e),t+1}))},size:A,currentColor:x}):null]}),Object(u.jsx)("div",{className:"canvas-container",children:Object(u.jsx)(p,{grid:N,backgroundColor:M,zoom:d,dimension:c})}),H?Object(u.jsx)(l,{close:function(){return K(!H)},click:function(e){var t;t=e,_||(w.joinRoom(t),ee(!0),se("You have succesfully joined room ".concat(t,"..."))),K(!H)}}):null]})}n(697);function E(e){return Object(u.jsx)("div",{className:"page-cover"})}var N=function(){var e=Object(o.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(o.useState)(!1),a=Object(i.a)(r,2),s=a[0],l=a[1],d=Object(o.useState)(16),b=Object(i.a)(d,2),j=b[0],m=b[1],f=function(e){e>=16&&e<=64&&m(e)};return Object(u.jsxs)("div",{className:"App",children:[n?Object(u.jsx)(S,{dimension:j}):Object(u.jsxs)("div",{className:"homepage-container",children:[Object(u.jsxs)("div",{className:"homepage-header-div",children:[Object(u.jsx)("h1",{children:"React Pixel"}),Object(u.jsx)("p",{children:"An application for creating pixel art on the web!"})]}),Object(u.jsxs)("div",{className:"dimension-div",children:[Object(u.jsxs)("h4",{children:["Canvas Size: ",Object(u.jsx)("span",{children:j})," X ",Object(u.jsx)("span",{children:j})]}),Object(u.jsx)("button",{onClick:function(){return f(j/2)},children:"-"}),Object(u.jsx)("button",{onClick:function(){return f(2*j)},children:"+"})]}),Object(u.jsx)("button",{className:"start-button",onClick:function(){return l(!0),setTimeout((function(){c(!0)}),500),void setTimeout((function(){l(!1)}),1500)},children:"START NOW"})]}),s?Object(u.jsx)(E,{}):null]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,701)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),o(e),c(e),r(e),a(e)}))};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),L()}},[[698,1,2]]]);
//# sourceMappingURL=main.b05eb1f0.chunk.js.map