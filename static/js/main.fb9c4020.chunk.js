(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){},107:function(e,t,a){},110:function(e,t,a){},112:function(e,t,a){},116:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(62),i=a.n(l),o=a(18),c=a(2),s=a(4),m=a(129),u=a(131),d=(a(72),function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),a=t[0],l=t[1],i=function(){a&&l(!1)};return n.a.createElement(m.a,{onToggle:function(e){l(e)},expanded:a,expand:"lg",bg:"light",variant:"light",sticky:"top"},n.a.createElement(m.a.Brand,null,n.a.createElement(o.b,{to:"/",style:{color:"inherit"},className:"text-decoration-none"},n.a.createElement("img",{src:"".concat("/kikster","/Kikster_Oficial_Recuadros_K.png"),style:{marginLeft:"20%"},width:"40",height:"40",className:"d-inline-block align-top",alt:"Kikster logo"}))),n.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),n.a.createElement(m.a.Collapse,null,n.a.createElement(u.a,{className:"justify-content-end",style:{width:"100%"}},n.a.createElement(u.a.Link,{as:"div"},n.a.createElement(o.b,{to:"about",style:{color:"inherit"},className:"text-decoration-none",onClick:i},"About Us")),n.a.createElement(u.a.Link,{as:"div"},n.a.createElement(o.b,{to:"portfolio",style:{color:"inherit"},className:"text-decoration-none",onClick:i},"Portfolio")),n.a.createElement(u.a.Link,{as:"div"},n.a.createElement(o.b,{to:"contact",style:{color:"inherit"},className:"text-decoration-none",onClick:i},"Contact Us")))))});a(79),a(81);var p=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),a=t[0],l=t[1];Object(r.useEffect)(function(){window.addEventListener("load",i),window.addEventListener("resize",i)},[]);var i=function(){window.innerWidth<720?l(!0):l(!1)};return n.a.createElement("div",{className:"App"},n.a.createElement(d,null),n.a.createElement("div",{className:"page-content"},n.a.createElement(c.a,{context:[a,l]})))},h=(a(83),function(){var e=Object(c.p)();return console.error(e),n.a.createElement("div",{id:"error-page"},n.a.createElement("h1",{className:"style-1"},"Oops!"),n.a.createElement("p",null,"Sorry, an unexpected error has occurred."),n.a.createElement("p",null,n.a.createElement("i",null,e.statusText||e.message)))}),f=a(12),g=a(33);a(85);function v(){v=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function o(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{o({},"")}catch(z){o=function(e,t,a){return e[t]=a}}function c(e,t,a,r){var n=t&&t.prototype instanceof u?t:u,l=Object.create(n.prototype),i=new k(r||[]);return l._invoke=function(e,t,a){var r="suspendedStart";return function(n,l){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw l;return L()}for(a.method=n,a.arg=l;;){var i=a.delegate;if(i){var o=b(i,a);if(o){if(o===m)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var c=s(e,t,a);if("normal"===c.type){if(r=a.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r="completed",a.method="throw",a.arg=c.arg)}}}(e,a,i),l}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(z){return{type:"throw",arg:z}}}e.wrap=c;var m={};function u(){}function d(){}function p(){}var h={};o(h,n,function(){return this});var f=Object.getPrototypeOf,g=f&&f(f(j([])));g&&g!==t&&a.call(g,n)&&(h=g);var E=p.prototype=u.prototype=Object.create(h);function x(e){["next","throw","return"].forEach(function(t){o(e,t,function(e){return this._invoke(t,e)})})}function y(e,t){var r;this._invoke=function(n,l){function i(){return new t(function(r,i){!function r(n,l,i,o){var c=s(e[n],e,l);if("throw"!==c.type){var m=c.arg,u=m.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then(function(e){r("next",e,i,o)},function(e){r("throw",e,i,o)}):t.resolve(u).then(function(e){m.value=e,i(m)},function(e){return r("throw",e,i,o)})}o(c.arg)}(n,l,r,i)})}return r=r?r.then(i,i):i()}}function b(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=s(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function j(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,l=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=p,o(E,"constructor",p),o(p,"constructor",d),d.displayName=o(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,o(e,i,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},x(y.prototype),o(y.prototype,l,function(){return this}),e.AsyncIterator=y,e.async=function(t,a,r,n,l){void 0===l&&(l=Promise);var i=new y(c(t,a,r,n),l);return e.isGeneratorFunction(a)?i:i.next().then(function(e){return e.done?e.value:i.next()})},x(E),o(E,i,"Generator"),o(E,n,function(){return this}),o(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=j,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return i.type="throw",i.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var l=this.tryEntries[n],i=l.completion;if("root"===l.tryLoc)return r("end");if(l.tryLoc<=this.prev){var o=a.call(l,"catchLoc"),c=a.call(l,"finallyLoc");if(o&&c){if(this.prev<l.catchLoc)return r(l.catchLoc,!0);if(this.prev<l.finallyLoc)return r(l.finallyLoc)}else if(o){if(this.prev<l.catchLoc)return r(l.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return r(l.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var l=n;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var i=l?l.completion:{};return i.type=e,i.arg=t,l?(this.method="next",this.next=l.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),N(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;N(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:j(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}var E=function(e){var t=e.slides,a=Object(c.n)(),l=Object(s.a)(a,2),i=l[0],m=(l[1],Object(r.useState)(0)),u=Object(s.a)(m,2),d=u[0],p=u[1],h=Object(r.useState)(0),E=Object(s.a)(h,2),x=E[0],y=E[1],b=Object(r.useState)([]),w=Object(s.a)(b,2),N=w[0],k=w[1],j=Object(r.useState)(!1),L=Object(s.a)(j,2),z=L[0],M=L[1],T=Object(r.useState)(0),O=Object(s.a)(T,2),I=O[0],S=O[1],C=Object(r.useState)(!1),A=Object(s.a)(C,2),B=A[0],P=A[1],q=Object(r.useState)(0),V=Object(s.a)(q,2),_=V[0],G=V[1],F={lead:[1,1],inner:[-1,1],outer:[1,-1],trail:[-1,-1]};Object(r.useEffect)(function(){var e=[],t=R(d,"prev"),a=R(t,"prev"),r=R(d,"next"),n=R(r,"next");!i&&e.push(a),e.push(t),e.push(d),e.push(r),!i&&e.push(n),k(e)},[d,i]),Object(r.useEffect)(function(){Object(f.a)(v().mark(function e(){return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(200);case 2:_&&(1===x?Q(void 0,_):Z(void 0,_));case 3:case"end":return e.stop()}},e)}))()},[_]);var H=function(e){return new Promise(function(t){return setTimeout(t,e)})},R=function(e,a){return"prev"===a?e-1<0?t.length-1:e-1:e+1>t.length-1?0:e+1},D=[{position:"relative",left:"10%",width:"40%",border:"none",boxShadow:"0px 5px 10px 0px #888888",backgroundPosition:"center",backgroundSize:"cover",opacity:"0.2",zIndex:"".concat(5+x)},{position:"relative",left:i?"10%":"5%",width:i?"70%":"50%",border:"none",boxShadow:"0px 5px 10px 0px #888888",backgroundPosition:"center",backgroundSize:"cover",opacity:"0.2",zIndex:"".concat(6+x)},{position:"relative",width:i?"100%":"70%",border:z&&!B?"2px solid white":"none",boxShadow:"0px 10px 10px -5px #888888",backgroundPosition:"center",backgroundSize:"cover",opacity:"1",zIndex:"".concat(7+Math.abs(x))},{position:"relative",right:i?"10%":"5%",width:i?"70%":"50%",border:"none",boxShadow:"0px 5px 10px 0px #888888",backgroundPosition:"center",backgroundSize:"cover",opacity:"0.2",zIndex:"".concat(6-x)},{position:"relative",right:"10%",width:"40%",border:"none",boxShadow:"0px 5px 10px 0px #888888",backgroundPosition:"center",backgroundSize:"cover",opacity:"0.2",zIndex:"".concat(5-x)}],J=function(e){return D[e]},K={width:"100%",pointerEvents:"none"},Y=function(e){return{position:"absolute",height:"100%",width:"100%",top:"50%",transform:"translate(0, -50%)",fontSize:"40px",cursor:"pointer",backgroundColor:"black",opacity:e?"0.0":"0.5"}},U={position:"absolute",height:"100%",width:"100%",top:"50%",transform:"translate(0, -50%)",cursor:"pointer"},Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;p(R(d,"prev")),G(t-1),y(-1),M(!1),P(!1)},Q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;p(R(d,"next")),G(t-1),y(1),M(!1),P(!1)},W=function(){var e=Object(f.a)(v().mark(function e(t,a,r){var n,l;return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a!==d&&(n=Math.ceil((N.length-1)/2),l=Math.abs(n-t),"left"===r?Z(void 0,l):Q(void 0,l),M(!0));case 1:case"end":return e.stop()}},e)}));return function(t,a,r){return e.apply(this,arguments)}}(),X=function(e){return N.findIndex(function(t){return t===e})<N.findIndex(function(e){return e===d})?"left":"right"};return n.a.createElement("div",{style:{maxWidth:"80%",margin:"0 auto",paddingBottom:"3.5%"}},n.a.createElement("div",{style:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center"}},!i&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{position:"absolute",top:"50%",transform:"translate(0, -50%)",left:"3%",fontSize:"45px",zIndex:10,cursor:"pointer",color:"white"},onClick:Z},"\u276e"),n.a.createElement("div",{style:{position:"absolute",top:"50%",transform:"translate(0, -50%)",right:"3%",fontSize:"45px",zIndex:10,cursor:"pointer",color:"white"},onClick:Q},"\u276f")),n.a.createElement(g.AnimatePresence,{initial:"false",mode:"popLayout"},N.map(function(e,a){var r=100*F.outer[0]*x,l=100*F.outer[1]*x,c=e===d;return n.a.createElement(g.motion.div,{layout:!0,key:e,onClick:function(t){return!i&&W(a,e,X(e))},onDragStart:function(e){return i&&function(e){S(e.pageX),P(!0)}(e)},onDragEnd:function(t){return i&&function(e,t,a){var r=e.pageX-I,n=r>0?N[0]:N[2],l=r>0?-1:1;Math.abs(r)>30&&(p(n),y(l),P(!0))}(t,0,X(e))},style:J(i?a+1:a),initial:{x:r,scale:.8,opacity:0},animate:{x:0,scale:1,opacity:1},exit:{x:l,scale:.8,opacity:0},transition:{opacity:{ease:"linear",duration:.3},layout:{duration:.6,type:"spring",damping:25}},dragListener:i,dragElastic:.1,dragMomentum:!1,drag:"x",dragConstraints:{left:0,right:0}},n.a.createElement(g.motion.img,{style:K,src:t[e].url}),n.a.createElement(g.motion.div,{style:Y(c)}),c&&n.a.createElement(g.motion.div,{className:"container d-flex justify-content-center",style:U},n.a.createElement("div",{className:"row align-items-end"},n.a.createElement(g.motion.div,{className:"col-sm",initial:{y:100,scale:.8,opacity:0},animate:{y:0,scale:1,opacity:1},transition:{delay:.7,type:"spring",opacity:{ease:"linear",duration:.6}}},n.a.createElement(o.a,{to:"/portfolio/project"},n.a.createElement(g.motion.button,{layout:!0,type:"button",className:"btn btn-light py-0 px-1",style:{position:"relative",fontSize:"clamp(10px, 2.5vw, 16px)",cursor:"pointer",marginBottom:"10%"},key:e,whileHover:{scale:1.2,type:"spring",backgroundColor:"gold",borderRadius:"8px"},whileTap:{scale:.9,type:"spring",backgroundColor:"rgba(255, 255, 255, 0.6)",borderRadius:"8px"},animate:{borderRadius:"1px",backgroundColor:"rgba(255, 255, 255, 0.6)"},exit:{borderRadius:"6px"},transition:{borderRadius:{ease:"linear",duration:.1,delay:.1},backgroundColor:{ease:"linear",delay:.1}}},"Ver Mas"))))))}))))},x=a(119),y=[{title:"pexels-1",url:"".concat("/kikster","/images/pexels-diego-gonzalez.jpg")},{title:"pexels-2",url:"".concat("/kikster","/images/pexels-juan-rojas.jpg")},{title:"pexels-3",url:"".concat("/kikster","/images/pexels-leticia-azevedo.jpg")},{title:"pexels-4",url:"".concat("/kikster","/images/pexels-santiago-boada.jpg")},{title:"pexels-5",url:"".concat("/kikster","/images/pexels-valentina-diaz.jpg")},{title:"pexels-6",url:"".concat("/kikster","/images/pexels-akos-helgert.jpg")},{title:"pexels-7",url:"".concat("/kikster","/images/pexels-nick-wehrli.jpg")},{title:"pexels-8",url:"".concat("/kikster","/images/pexels-osmany-mederos.jpg")}],b=[{title:"jumbotronDefault",url:"".concat("/kikster","/images/IMG_8208-min.JPG")}],w=[{title:"kite-surf",url:"".concat("/kikster","/images/IMG_5691-min.JPG")},{title:"team-photo",url:"".concat("/kikster","/images/f22d7d69-2c5e-41ab-bff9-a35076d2f0bc-min.jpg")},{title:"mujer-sombrero",url:"".concat("/kikster","/images/IMG_5131-min.JPG")},{title:"local-entreprenuers",url:"".concat("/kikster","/images/12A6031E-01BC-450A-AA39-CD11CAC325D3-min.jpg")},{title:"lake",url:"".concat("/kikster","/images/IMG_4494-min.jpg")},{title:"beach-entreprenuers",url:"".concat("/kikster","/images/IMG_5128-min.JPG")}],N=[{title:"hiking-mountain",url:"".concat("/kikster","/images/IMG_0477-min.JPG")},{title:"smoky-mountain",url:"".concat("/kikster","/images/IMG_2519_MOV_AdobeExpress.gif")}],k=(a(105),[{type:"Government",icon:"",description:"Lorem ipsum dolor sit amet, consectetur"},{type:"Local Entrepreneur",icon:"",description:"Lorem ipsum dolor sit amet, consectetur"},{type:"Nature",icon:"",description:"Lorem ipsum dolor sit amet, consectetur"}]),j=function(){return n.a.createElement("div",null,n.a.createElement(x.a,{className:"shadow-gradient card-alt"},n.a.createElement(x.a.Img,{src:b[0].url,variant:"top",className:"img-fluid test",alt:"test"})),n.a.createElement("div",{style:{height:"50vh"},className:"bg-black container-fluid d-flex align-items-center justify-content-center"},n.a.createElement("h1",{className:"my-5 text-white"},"animated KIKSTER logo")),n.a.createElement(x.a,{className:"shadow-gradient-2 card-alt"},n.a.createElement("div",{className:"ofHidden"},n.a.createElement(E,{slides:y}))),n.a.createElement("div",{className:"my-5 container-fluid border boder-1 boder-danger"},n.a.createElement("div",{className:"row d-flex justify-content-center"},n.a.createElement(x.a,{className:"mx-3",style:{width:"18rem"}},n.a.createElement(x.a.Body,null,n.a.createElement(x.a.Title,null,k[0].type),n.a.createElement(x.a.Text,null,k[0].description))),n.a.createElement(x.a,{className:"mx-3",style:{width:"18rem"}},n.a.createElement(x.a.Body,null,n.a.createElement(x.a.Title,null,k[1].type),n.a.createElement(x.a.Text,null,k[1].description))),n.a.createElement(x.a,{className:"mx-3",style:{width:"18rem"}},n.a.createElement(x.a.Body,null,n.a.createElement(x.a.Title,null,k[2].type),n.a.createElement(x.a.Text,null,k[2].description)))),n.a.createElement("div",null,n.a.createElement("h2",null,"Servicios"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus congue nunc volutpat risus fusce turpis lectus. Purus, gravida sagittis accumsan sem odio sed. Malesuada tortor nibh nibh nulla nec neque. Enim, suscipit auctor tristique pharetra, egestas risus urna imperdiet felis. Suspendisse maecenas ut egestas donec fermentum. Bibendum massa sit amet iaculis vitae. Odio elementum tincidunt id pharetra quisque in sed risus, urna. Morbi ullamcorper vestibulum maecenas molestie consequat congue."))))},L=(a(107),function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:"style-1"},"About Us"))}),z=a(109),M=a(126),T=a(130),O=a(128),I=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"my-3 row d-flex justify-content-center text-center"},n.a.createElement("div",{className:"col-12 col-md-8 col-lg-4 mt-3"},n.a.createElement(M.a,null,n.a.createElement(T.a.Control,{className:"border-1  ",placeholder:"Keyword","aria-label":"Search by keyword","aria-describedby":"basic-addon2"}),n.a.createElement(z.a,{variant:"outline-success",id:"button-addon2"},"Search"))),n.a.createElement("div",{className:"col-12 col-md-6 d-inline-flex"},n.a.createElement("div",{className:"col-6 mt-3 me-3 text-lg-end"},n.a.createElement(O.a,null,n.a.createElement(O.a.Toggle,{variant:"success",id:"dropdown-basic"},n.a.createElement("span",{className:"px-1"},"PROJECT TYPE")),n.a.createElement(O.a.Menu,null,n.a.createElement(O.a.Item,{href:"#/action-1"},"Action"),n.a.createElement(O.a.Item,{href:"#/action-2"},"Another action"),n.a.createElement(O.a.Item,{href:"#/action-3"},"Something else")))),n.a.createElement("div",{className:"col-6 mt-3 text-lg-start"},n.a.createElement(O.a,null,n.a.createElement(O.a.Toggle,{variant:"success",id:"dropdown-basic"},n.a.createElement("span",{className:"px-1"},"FILTER BY CITY")),n.a.createElement(O.a.Menu,null,n.a.createElement(O.a.Item,{href:"#/action-1"},"Action"),n.a.createElement(O.a.Item,{href:"#/action-2"},"Another action"),n.a.createElement(O.a.Item,{href:"#/action-3"},"Something else")))))))},S=(a(110),[{type:"PROJECT NAME",location:"CITY",description:"Ipsum faucibus nec tellus orci nunc facilisi aliquet sapien. Phasellus sollicitudin lorem morbi suspendisse mattis. Tellus quis venenatis interdum adipiscing sem."}]),C=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container-fluid bg-dark text-white"},n.a.createElement("div",{className:"m-4 px-5 py-3 d-flex justify-content-start align-items-center"},n.a.createElement("h1",null,"Portfolio"))),n.a.createElement("div",{className:"container"},n.a.createElement(I,null),n.a.createElement("div",{className:"row d-flex justify-content-center mt-1 mb-3 text-start"},n.a.createElement(x.a,{border:"light",className:"m-4 px-0",style:{width:"20rem"}},n.a.createElement(x.a.Img,{className:"rounded-0",style:{height:"15rem"},variant:"top",src:w[0].url}),n.a.createElement(x.a.Body,null,n.a.createElement(x.a.Title,null,S[0].type),n.a.createElement(x.a.Text,{className:"mb-0 pb-1"},S[0].location),n.a.createElement(x.a.Text,null,S[0].description),n.a.createElement(z.a,{variant:"link",className:"ps-0 text-dark"},n.a.createElement(o.a,{to:"project"},"Learn More"),n.a.createElement("span",{style:{color:"green"},className:"ps-2"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-right",viewBox:"0 0 16 16"},n.a.createElement("path",{"fill-rule":"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"})))))),n.a.createElement(x.a,{border:"light",className:"m-4 px-0",style:{width:"20rem"}},n.a.createElement(x.a.Img,{className:"rounded-0",style:{height:"15rem"},variant:"top",src:w[1].url}),n.a.createElement(x.a.Body,null,n.a.createElement(x.a.Title,null,S[0].type),n.a.createElement(x.a.Text,{className:"text-start mb-0 pb-1"},S[0].location),n.a.createElement(x.a.Text,null,S[0].description),n.a.createElement(z.a,{href:"#",variant:"link",className:"ps-0 text-dark"},"Learn More",n.a.createElement("span",{style:{color:"green"},className:"ps-2"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-right",viewBox:"0 0 16 16"},n.a.createElement("path",{"fill-rule":"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"})))))),n.a.createElement(x.a,{border:"light",className:"m-4 px-0",style:{width:"20rem"}},n.a.createElement(x.a.Img,{className:"rounded-0",style:{height:"15rem"},variant:"top",src:w[2].url}),n.a.createElement(x.a.Body,null,n.a.createElement(x.a.Title,null,S[0].type),n.a.createElement(x.a.Text,{className:"text-start mb-0 pb-1"},S[0].location),n.a.createElement(x.a.Text,null,S[0].description),n.a.createElement(z.a,{href:"#",variant:"link",className:"ps-0 text-dark"},"Learn More",n.a.createElement("span",{style:{color:"green"},className:"ps-2"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-right",viewBox:"0 0 16 16"},n.a.createElement("path",{"fill-rule":"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"}))))))),n.a.createElement("div",{className:"row d-flex justify-content-center my-3 text-start"},n.a.createElement(x.a,{border:"light",className:"m-4 px-0",style:{width:"20rem"}},n.a.createElement(x.a.Img,{className:"rounded-0",style:{height:"15rem"},variant:"top",src:w[3].url}),n.a.createElement(x.a.Body,null,n.a.createElement(x.a.Title,null,S[0].type),n.a.createElement(x.a.Text,{className:"mb-0 pb-1"},S[0].location),n.a.createElement(x.a.Text,null,S[0].description),n.a.createElement(z.a,{href:"#",variant:"link",className:"ps-0 text-dark"},"Learn More",n.a.createElement("span",{style:{color:"green"},className:"ps-2"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-right",viewBox:"0 0 16 16"},n.a.createElement("path",{"fill-rule":"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"})))))),n.a.createElement(x.a,{border:"light",className:"m-4 px-0",style:{width:"20rem"}},n.a.createElement(x.a.Img,{className:"rounded-0",style:{height:"15rem"},variant:"top",src:w[4].url}),n.a.createElement(x.a.Body,null,n.a.createElement(x.a.Title,null,S[0].type),n.a.createElement(x.a.Text,{className:"text-start mb-0 pb-1"},S[0].location),n.a.createElement(x.a.Text,null,S[0].description),n.a.createElement(z.a,{href:"#",variant:"link",className:"ps-0 text-dark"},"Learn More",n.a.createElement("span",{style:{color:"green"},className:"ps-2"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-right",viewBox:"0 0 16 16"},n.a.createElement("path",{"fill-rule":"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"})))))),n.a.createElement(x.a,{border:"light",className:"m-4 px-0",style:{width:"20rem"}},n.a.createElement(x.a.Img,{className:"rounded-0",style:{height:"15rem"},variant:"top",src:w[5].url}),n.a.createElement(x.a.Body,null,n.a.createElement(x.a.Title,null,S[0].type),n.a.createElement(x.a.Text,{className:"text-start mb-0 pb-1"},S[0].location),n.a.createElement(x.a.Text,null,S[0].description),n.a.createElement(z.a,{href:"#",variant:"link",className:"ps-0 text-dark"},"Learn More",n.a.createElement("span",{style:{color:"green"},className:"ps-2"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-right",viewBox:"0 0 16 16"},n.a.createElement("path",{"fill-rule":"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"})))))))))},A=(a(112),function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:"style-1"},"Contact Us!"))}),B=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,127)).then(function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,l=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),l(e),i(e)})},P=(a(114),a(116),function(){return n.a.createElement("div",{className:"container-fluid bg-black vh-50",style:{height:"300px",position:"absolute",zIndex:"-1",left:"0px",top:"0px"}})}),q=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(P,null),n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"text-start d-none d-md-block ms-4"},n.a.createElement(x.a.Img,{className:"rounded-0 img-fluid",style:{height:"400px",width:"auto",top:"5vh",left:"10px",position:"relative"},variant:"top",src:N[0].url}))),n.a.createElement("div",{className:"container-fluid",style:{position:"relative"}},n.a.createElement("div",{className:"row d-flex justify-content-start mt-4 mt-md-0 ms-md-2"},n.a.createElement("h2",{className:"ms-5 py-2 col-6 col-lg-4 col-xl-3 bg-success text-white"},"Project Name")),n.a.createElement("div",{className:"ms-5 my-3 row d-flex justify-content-center text-start"},n.a.createElement("div",{className:"col-6"},n.a.createElement("p",{className:"text-sm-white"},n.a.createElement("span",{className:"px-2 text-success"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-geo-alt-fill",viewBox:"0 0 16 16"},n.a.createElement("path",{d:"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"}))),"Lobortis Quisque")),n.a.createElement("div",{className:"col-6"},n.a.createElement("p",{className:"text-sm-white"},n.a.createElement("span",{className:"px-2 text-success"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-map-fill",viewBox:"0 0 16 16"},n.a.createElement("path",{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z"}))),"24,000 sq. ft."))),n.a.createElement("div",{className:"ms-5 my-2 row d-flex justify-content-center text-start"},n.a.createElement("div",{className:"col-4"},n.a.createElement("p",{className:"text-sm-white"},n.a.createElement("span",{className:"px-2 text-success"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-calendar-date-fill",viewBox:"0 0 16 16"},n.a.createElement("path",{d:"M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z"}),n.a.createElement("path",{d:"M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z"}))),"Feb 2022")),n.a.createElement("div",{className:"col-4"},n.a.createElement("p",{className:"text-sm-white"},n.a.createElement("span",{className:"px-2 text-success"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-briefcase-fill",viewBox:"0 0 16 16"},n.a.createElement("path",{d:"M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"}),n.a.createElement("path",{d:"M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"}))),"Quisque")),n.a.createElement("div",{className:"col-4"},n.a.createElement("p",{className:"text-sm-white"},n.a.createElement("span",{className:"px-2 text-success"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-coin",viewBox:"0 0 16 16"},n.a.createElement("path",{d:"M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"}),n.a.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),n.a.createElement("path",{d:"M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"}))),"570,000")))),n.a.createElement("div",{className:"container border-top border-success border-3"},n.a.createElement("div",{className:"mt-5 mt-md-0 d-flex row text-start"},n.a.createElement("h3",{className:"my-3"},"Donec Dolor Non"),n.a.createElement("p",null,"Bibendum massa sit amet iaculis vitae. Odio elementum tincidunt id pharetra quisque in sed risus, urna. Morbi ullamcorper vestibulum maecenas molestie consequat congue."),n.a.createElement("div",{className:"col-md-7"},n.a.createElement("h3",{className:"my-3"},"Vulputate morbi leo"),n.a.createElement("p",null,"Risus turpis feugiat eu, mauris etiam sit amet dolor ipsum. Pretium nunc consectetur ac quis. Neque euismod proin tortor turpis ornare magna id vestibulum. Egestas aliquam vitae, integer egestas placerat aenean vitae. Ac eget ullamcorper vestibulum et in felis, sagittis. Lorem ut morbi morbi quisque tortor at vulputate platea. Ut nisi, tellus nulla nulla molestie vulputate interdum etiam ultrices. Nunc, viverra lectus ultrices amet purus eu quam."),n.a.createElement("p",null,"Turpis sociis duis sapien et, netus morbi. Sed tristique lectus massa mattis non mattis in mus rhoncus. Volutpat mattis sociis duis aliquam. Luctus interdum ornare laoreet quam lectus amet. Imperdiet convallis pellentesque sed turpis leo posuere est. Eu vel dignissim sem massa tempus sit. Vitae, sed id nunc libero vitae ridiculus pharetra."),n.a.createElement("h3",{className:"my-3"},"Amet"),n.a.createElement("p",null,"Viverra imperdiet amet accumsan blandit quis gravida urna enim, integer. Sit tellus mi tempor libero id. Proin pharetra, vulputate nunc enim, ac, lorem quis. Fermentum proin eget in eget maecenas imperdiet tristique. Odio massa, ipsum neque molestie sit purus, diam dolor tempor.")),n.a.createElement("div",{className:"col-md-5"},n.a.createElement(x.a.Img,{className:"rounded-0",style:{height:"600px",width:"400px",padding:"12px",objectFit:"cover"},variant:"top",src:N[1].url}),n.a.createElement("p",{className:"ps-3"},n.a.createElement("span",{className:"text-success"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-envelope-fill",viewBox:"0 0 16 16"},n.a.createElement("path",{d:"M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"})))," ","Print"),n.a.createElement("p",{className:"ps-3"},n.a.createElement("span",{className:"text-success"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-file-pdf-fill",viewBox:"0 0 16 16"},n.a.createElement("path",{d:"M5.523 10.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.035 21.035 0 0 0 .5-1.05 11.96 11.96 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.888 3.888 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 4.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z"}),n.a.createElement("path",{"fill-rule":"evenodd",d:"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm.165 11.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.64 11.64 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.707 19.707 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"})))," ","Download")))))},V=i.a.createRoot(document.getElementById("root")),_=Object(o.c)([{path:"/",element:n.a.createElement(p,null),errorElement:n.a.createElement(h,null),children:[{index:!0,element:n.a.createElement(j,null)},{path:"about",element:n.a.createElement(L,null)},{path:"portfolio/",children:[{index:!0,element:n.a.createElement(C,null)},{path:"project",element:n.a.createElement(q,null)}]},{path:"contact",element:n.a.createElement(A,null)}]}],{basename:"/kikster"});V.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(c.c,{router:_}))),B()},65:function(e,t,a){e.exports=a(118)},72:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){},85:function(e,t,a){}},[[65,3,2]]]);
//# sourceMappingURL=main.fb9c4020.chunk.js.map