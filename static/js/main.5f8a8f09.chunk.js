(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(46),i=n.n(r),c=n(20),l=n(1),s=n(4),u=n(105),d=n(106),p=(n(55),function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],i=function(){n&&r(!1)};return o.a.createElement(u.a,{onToggle:function(e){r(e)},expanded:n,expand:"lg",bg:"light",variant:"light",sticky:"top"},o.a.createElement(u.a.Brand,null,o.a.createElement(c.a,{to:"/",style:{color:"inherit"},className:"text-decoration-none"},o.a.createElement("img",{src:"".concat("/kikster","/Kikster_Oficial_Recuadros_K.png"),style:{marginLeft:"20%"},width:"40",height:"40",className:"d-inline-block align-top",alt:"Kikster logo"}))),o.a.createElement(u.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(u.a.Collapse,null,o.a.createElement(d.a,{className:"justify-content-end",style:{width:"100%"}},o.a.createElement(d.a.Link,{as:"div"},o.a.createElement(c.a,{to:"about",style:{color:"inherit"},className:"text-decoration-none",onClick:i},"About Us")),o.a.createElement(d.a.Link,{as:"div"},o.a.createElement(c.a,{to:"portfolio",style:{color:"inherit"},className:"text-decoration-none",onClick:i},"Portfolio")),o.a.createElement(d.a.Link,{as:"div"},o.a.createElement(c.a,{to:"contact",style:{color:"inherit"},className:"text-decoration-none",onClick:i},"Contact Us")))))});n(62),n(64);var m=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p,null),o.a.createElement("div",{className:"page-content"},o.a.createElement(l.a,null)))},g=(n(66),function(){var e=Object(l.o)();return console.error(e),o.a.createElement("div",{id:"error-page"},o.a.createElement("h1",{className:"style-1"},"Oops!"),o.a.createElement("p",null,"Sorry, an unexpected error has occurred."),o.a.createElement("p",null,o.a.createElement("i",null,e.statusText||e.message)))}),f=n(30),x=(n(68),function(e){var t=e.slides,n=Object(a.useState)(0),r=Object(s.a)(n,2),i=r[0],c=r[1],l=Object(a.useState)(0),u=Object(s.a)(l,2),d=u[0],p=u[1],m=Object(a.useState)([]),g=Object(s.a)(m,2),x=g[0],b=g[1],E=Object(a.useState)(!1),h=Object(s.a)(E,2),v=h[0],k=h[1],y=Object(a.useState)(0),w=Object(s.a)(y,2),j=w[0],S=w[1],O=Object(a.useState)(!1),z=Object(s.a)(O,2),N=z[0],C=z[1],I=Object(a.useState)(!0),P=Object(s.a)(I,2),L=P[0],F=P[1],T={lead:[1,1],inner:[-1,1],outer:[1,-1],trail:[-1,-1]};Object(a.useEffect)(function(){window.addEventListener("load",B),window.addEventListener("resize",B)}),Object(a.useEffect)(function(){var e=[],t=A(i,"prev"),n=A(t,"prev"),a=A(i,"next"),o=A(a,"next");!L&&e.push(n),e.push(t),e.push(i),e.push(a),!L&&e.push(o),b(e)},[i,L]);var A=function(e,n){return"prev"===n?e-1<0?t.length-1:e-1:e+1>t.length-1?0:e+1},B=function(){window.innerWidth<720?F(!0):F(!1)},D=[{position:"relative",left:"10%",width:"40%",border:"none",boxShadow:"0px 5px 10px 0px #888888",backgroundPosition:"center",backgroundSize:"cover",opacity:"0.2",zIndex:"".concat(2+d)},{position:"relative",left:L?"10%":"5%",width:L?"70%":"50%",border:"none",boxShadow:"0px 5px 10px 0px #888888",backgroundPosition:"center",backgroundSize:"cover",opacity:"0.2",zIndex:"".concat(3+d)},{position:"relative",width:L?"100%":"70%",border:v&&!N?"2px solid white":"none",boxShadow:"0px 10px 10px -5px #888888",backgroundPosition:"center",backgroundSize:"cover",opacity:"1",zIndex:"".concat(4+Math.abs(d))},{position:"relative",right:L?"10%":"5%",width:L?"70%":"50%",border:"none",boxShadow:"0px 5px 10px 0px #888888",backgroundPosition:"center",backgroundSize:"cover",opacity:"0.2",zIndex:"".concat(3-d)},{position:"relative",right:"10%",width:"40%",border:"none",boxShadow:"0px 5px 10px 0px #888888",backgroundPosition:"center",backgroundSize:"cover",opacity:"0.2",zIndex:"".concat(2-d)}],M=function(e){return D[e]},U={width:"100%",pointerEvents:"none"},_=function(e){return{position:"absolute",height:"100%",width:"100%",top:"50%",transform:"translate(0, -50%)",fontSize:"40px",cursor:"pointer",backgroundColor:"black",opacity:e?"0.0":"0.4"}},J=function(e){return x.findIndex(function(t){return t===e})<x.findIndex(function(e){return e===i})?"left":"right"};return o.a.createElement("div",{style:{maxWidth:"80%",margin:"0 auto",paddingBottom:"3.5%"}},o.a.createElement("div",{style:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center"}},!L&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{position:"absolute",top:"50%",transform:"translate(0, -50%)",left:"0%",fontSize:"40px",zIndex:4,cursor:"pointer",color:"white"},onClick:function(){c(A(i,"prev")),p(-1),k(!1),C(!1)}},"\u276e"),o.a.createElement("div",{style:{position:"absolute",top:"50%",transform:"translate(0, -50%)",right:"0%",fontSize:"40px",zIndex:4,cursor:"pointer",color:"white"},onClick:function(){c(A(i,"next")),p(1),k(!1),C(!1)}},"\u276f")),o.a.createElement(f.AnimatePresence,{initial:"false",mode:"popLayout"},x.map(function(e,n){var a=100*T.outer[0]*d,r=100*T.outer[1]*d,l=e===i;return o.a.createElement(f.motion.div,{layout:!0,key:e,onClick:function(t){return!L&&function(e,t,n){var a="left"===n?-1:1;console.log(e),t!==i&&(c(t),k(!0),p(a))}(t,e,J(e))},onDragStart:function(e){return L&&function(e){S(e.pageX),C(!0)}(e)},onDragEnd:function(t){return L&&function(e,t,n){var a=e.pageX-j,o=a>0?x[0]:x[2],r=a>0?-1:1;Math.abs(a)>30&&(c(o),p(r),C(!0))}(t,0,J(e))},style:M(L?n+1:n),initial:{x:a,scale:.8,opacity:0},animate:{x:0,scale:1,opacity:1},exit:{x:r,scale:.8,opacity:0},transition:{opacity:{ease:"linear",duration:.3},layout:{duration:.6,type:"spring",damping:25}},drag:L?"x":"none",dragConstraints:{left:0,right:0}},o.a.createElement(f.motion.img,{style:U,src:t[e].url}),o.a.createElement(f.motion.div,{style:_(l)}))}))))}),b=n(38),E=[{title:"pexels-1",url:"".concat("/kikster","/images/pexels-diego-gonzalez.jpg")},{title:"pexels-2",url:"".concat("/kikster","/images/pexels-juan-rojas.jpg")},{title:"pexels-3",url:"".concat("/kikster","/images/pexels-leticia-azevedo.jpg")},{title:"pexels-4",url:"".concat("/kikster","/images/pexels-santiago-boada.jpg")},{title:"pexels-5",url:"".concat("/kikster","/images/pexels-valentina-diaz.jpg")}],h=[{title:"jumbotronDefault",url:"".concat("/kikster","/images/IMG_8208-min.JPG")}],v=(n(88),function(){return o.a.createElement("div",null,o.a.createElement(b.a,{className:"shadow-gradient"},o.a.createElement(b.a.Img,{src:h[0].url,variant:"top",className:"img-fluid",alt:"test"})),o.a.createElement(b.a,{className:"shadow-gradient-2"},o.a.createElement("div",{className:"ofHidden"},o.a.createElement(x,{slides:E}))))}),k=(n(90),function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"style-1"},"About Us"))}),y=(n(92),function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"style-1"},"Portfolio"))}),w=(n(94),function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"style-1"},"Contact Us!"))}),j=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,104)).then(function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),r(e),i(e)})},S=(n(96),n(98),i.a.createRoot(document.getElementById("root")));console.log("/kikster");var O=Object(c.b)([{path:"/",element:o.a.createElement(m,null),errorElement:o.a.createElement(g,null),children:[{index:!0,element:o.a.createElement(v,null)},{path:"about",element:o.a.createElement(k,null)},{path:"portfolio",element:o.a.createElement(y,null)},{path:"contact",element:o.a.createElement(w,null)}]}],{basename:"/kikster"});S.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.c,{router:O}))),j()},48:function(e,t,n){e.exports=n(100)},55:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){},88:function(e,t,n){},90:function(e,t,n){},92:function(e,t,n){},94:function(e,t,n){},98:function(e,t,n){}},[[48,3,2]]]);
//# sourceMappingURL=main.5f8a8f09.chunk.js.map