(this["webpackJsonpreact-pixel"]=this["webpackJsonpreact-pixel"]||[]).push([[0],{202:function(e,t,n){},203:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),r=n(46),i=n.n(r),s=(n(84),n(6)),a=(n(85),n(86),n(3));var u=n(4),d=n.n(u),l=n(16),b=n(80);n(89),n(90),n(92);function j(e){e.currentColor;var t=e.dimension,n=e.zoom,o=e.pid,r=e.rid,i=Object(c.useState)("#fff"),u=Object(s.a)(i,2),d=u[0],l=(u[1],Object(c.useState)(d)),b=Object(s.a)(l,2),j=(b[0],b[1],Object(c.useState)(!0)),m=Object(s.a)(j,2),O=(m[0],m[1],Object(c.useState)(!1)),f=Object(s.a)(O,2),h=f[0];f[1];return Object(a.jsx)("div",{className:"pixel",id:"[".concat(r,", ").concat(o,"]"),onMouseOver:function(e){e.target.style.border="1px solid black"},onMouseLeave:function(e){e.target.style.border="none"},style:{boxShadow:h?"inset 0px 0px 0px 2px white":"",backgroundColor:d,width:"".concat(n/t,"px"),height:"".concat(n/t,"px")}})}n(93);function m(e){for(var t=e.currentColor,n=e.dimension,c=e.zoom,o=e.rid,r=[],i=0;i<n;i++)r.push(Object(a.jsx)(j,{rid:o,pid:i,zoom:c,dimension:n,currentColor:t},i));return Object(a.jsx)("div",{className:"row",children:r})}var O=o.a.memo((function(e){for(var t=e.dimension,n=e.currentColor,o=e.zoom,r=Object(c.useRef)(),i=[],s=0;s<t;s++)console.log("redrawing"),i.push(Object(a.jsx)(m,{rid:s,zoom:o,dimension:t,currentColor:n},s));return Object(a.jsx)("div",{id:"canvas",ref:r,children:i})})),f=n(79);function h(e){return Object(a.jsx)(f.a,{disableAlpha:!0,onChangeComplete:function(t){return e.changeColor(t.hex)}})}function v(e){var t=!1;Object(c.useEffect)((function(){return console.log("attaching event listener to brush with color: "+e.currentColor),window.addEventListener("mousedown",r),window.addEventListener("mousemove",n),window.addEventListener("mouseleave",o),window.addEventListener("mouseup",o),function(){window.removeEventListener("mousedown",r),window.removeEventListener("mousemove",n),window.removeEventListener("mouseleave",o),window.removeEventListener("mouseup",o)}}),[e.currentColor,e.size]);var n=function(){var e=Object(l.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&Math.floor(n.timeStamp)%3===0&&r(n);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(e){t=!1},r=function(){var n=Object(l.a)(d.a.mark((function n(c){var o,r,i,s,a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!c.target.classList.contains("pixel")){n.next=17;break}if(c.preventDefault(),t=!0,document.elementFromPoint(c.clientX,c.clientY).style.backgroundColor=e.currentColor,2!=e.size){n.next=17;break}return n.next=8,JSON.parse(c.target.id);case 8:o=n.sent,r=document.getElementById("[".concat(o[0],", ").concat(o[1]+1,"]")),i=document.getElementById("[".concat(o[0],", ").concat(o[1]-1,"]")),s=document.getElementById("[".concat(o[0]+1,", ").concat(o[1],"]")),a=document.getElementById("[".concat(o[0]-1,", ").concat(o[1],"]")),r&&(r.style.backgroundColor=e.currentColor),i&&(i.style.backgroundColor=e.currentColor),s&&(s.style.backgroundColor=e.currentColor),a&&(a.style.backgroundColor=e.currentColor);case 17:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return null}function p(e){var t=Object(c.useState)(e.dimension),n=Object(s.a)(t,2),o=n[0],r=n[1],i=Object(c.useState)(500),u=Object(s.a)(i,2),j=u[0],m=u[1],f=Object(c.useState)("#bbbbbb"),p=Object(s.a)(f,2),x=p[0],g=p[1],w=Object(c.useState)(!1),C=Object(s.a)(w,2),k=(C[0],C[1],Object(c.useState)(!0)),S=Object(s.a)(k,2),y=(S[0],S[1],Object(c.useState)(!1)),N=Object(s.a)(y,2),E=N[0],L=N[1],z=Object(c.useState)(1),F=Object(s.a)(z,2),B=F[0],I=F[1],T=Object(c.useState)(!1),q=Object(s.a)(T,2),A=q[0],M=q[1];Object(c.useEffect)((function(){return document.addEventListener("wheel",P),document.addEventListener("keypress",(function(e){return console.log(e.keyCode)})),function(){console.log("cleaning"),document.removeEventListener("wheel",P)}}),[]);var P=function(e){e.deltaY>0?m((function(e){return e>50?e-50:e})):e.deltaY<0&&m((function(e){return e<800?e+50:e}))},R=function(e,t,n,c){if(n&&(c(!1),document.querySelector(".".concat(n)).classList.add(t),n===e.target.id))return;c(e.target.id),document.querySelector(".".concat(e.target.id)).classList.remove(t)},D=function(){var e=Object(l.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,document.querySelector("#canvas");case 2:n=e.sent,t(n).then((function(e){var t=new Image;t.src=e,document.body.appendChild(t)})).catch((function(e){console.log("gone wrong: ",e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"editor",children:[Object(a.jsxs)("nav",{className:"top-nav",children:[Object(a.jsxs)("div",{className:"dd-wrapper",children:[Object(a.jsx)("button",{id:"File",onClick:function(e){return R(e,"hidden",A,M)},children:"File"}),Object(a.jsx)("div",{className:"drop-down hidden File",children:Object(a.jsx)("button",{onClick:function(){return D(b.a)},children:"Download"})})]}),Object(a.jsxs)("div",{className:"dd-wrapper",children:[Object(a.jsx)("button",{id:"Edit",onClick:function(e){return R(e,"hidden",A,M)},children:"Edit"}),Object(a.jsx)("div",{className:"drop-down hidden Edit",children:Object(a.jsx)("button",{onClick:function(){r(32)},children:"Resize"})})]}),Object(a.jsxs)("div",{className:"dd-wrapper",children:[Object(a.jsx)("button",{id:"Help",onClick:function(e){return R(e,"hidden",A,M)},children:"Help"}),Object(a.jsx)("div",{className:"drop-down hidden Help"})]})]}),Object(a.jsxs)("nav",{className:"left-nav",children:[Object(a.jsx)(h,{changeColor:function(e){g((function(){return e}))}}),Object(a.jsxs)("div",{className:"button-wrapper",children:[Object(a.jsx)("button",{className:"left-button",onClick:function(e){var t,n;t="brush-inactive",n="brush",L(!E),document.querySelector("#".concat(n)).classList.toggle(t)},children:"Brush"}),Object(a.jsx)("div",{style:{backgroundColor:x},id:"brush",className:"brush-button brush-inactive"})]}),Object(a.jsx)("button",{onClick:function(){return I(2)},children:"Size +"}),Object(a.jsx)("button",{onClick:function(){return I(1)},children:"Size -"}),E?Object(a.jsx)(v,{size:B,currentColor:x}):null]}),Object(a.jsx)("div",{className:"canvas-container",children:Object(a.jsx)(O,{currentColor:x,zoom:j,dimension:o})})]})}n(202);function x(e){return Object(a.jsx)("div",{className:"page-cover"})}var g=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(!1),u=Object(s.a)(i,2),d=u[0],l=u[1],b=Object(c.useState)(16),j=Object(s.a)(b,2),m=j[0],O=j[1],f=function(e){e>=16&&e<=64&&O(e)};return Object(a.jsxs)("div",{className:"App",children:[d?Object(a.jsx)(x,{}):null,n?Object(a.jsx)(p,{dimension:m}):Object(a.jsxs)(o.a.Fragment,{children:[Object(a.jsxs)("div",{className:"homepage-header-div",children:[Object(a.jsx)("h1",{children:"React Pixel"}),Object(a.jsx)("h3",{children:"An application for creating pixel art on the web!"})]}),Object(a.jsxs)("div",{className:"dimension-div",children:[Object(a.jsxs)("h4",{children:["Canvas Size: ",Object(a.jsx)("span",{children:m})," X ",Object(a.jsx)("span",{children:m})]}),Object(a.jsx)("button",{onClick:function(){return f(m/2)},children:"-"}),Object(a.jsx)("button",{onClick:function(){return f(2*m)},children:"+"})]}),Object(a.jsx)("button",{className:"start-button",onClick:function(){return l(!0),setTimeout((function(){r(!0)}),500),void setTimeout((function(){l(!1)}),1500)},children:"START NOW"})]})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,206)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),r(e),i(e)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),w()},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},89:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){}},[[203,1,2]]]);
//# sourceMappingURL=main.e3784ea5.chunk.js.map