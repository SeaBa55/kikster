(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(48),i=a.n(o),c=a(14),s=a(1),l=a(5),m=a(110),u=a(111),d=(a(57),function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),a=t[0],o=t[1],i=function(){a&&o(!1)};return n.a.createElement(m.a,{onToggle:function(e){o(e)},expanded:a,expand:"lg",bg:"light",variant:"light",sticky:"top"},n.a.createElement(m.a.Brand,null,n.a.createElement(c.b,{to:"/",style:{color:"inherit"},className:"text-decoration-none"},n.a.createElement("img",{src:"".concat("","/Kikster_Oficial_Recuadros_K.png"),style:{marginLeft:"20%"},width:"40",height:"40",className:"d-inline-block align-top",alt:"Kikster logo"}))),n.a.createElement(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),n.a.createElement(m.a.Collapse,null,n.a.createElement(u.a,{className:"justify-content-end",style:{width:"100%"}},n.a.createElement(u.a.Link,{as:"div"},n.a.createElement(c.b,{to:"about",style:{color:"inherit"},className:"text-decoration-none",onClick:i},"About Us")),n.a.createElement(u.a.Link,{as:"div"},n.a.createElement(c.b,{to:"portfolio",style:{color:"inherit"},className:"text-decoration-none",onClick:i},"Portfolio")),n.a.createElement(u.a.Link,{as:"div"},n.a.createElement(c.b,{to:"contact",style:{color:"inherit"},className:"text-decoration-none",onClick:i},"Contact Us")))))});a(64),a(66);var p=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),a=t[0],o=t[1];Object(r.useEffect)(function(){window.addEventListener("load",i),window.addEventListener("resize",i)},[]);var i=function(){window.innerWidth<720?o(!0):o(!1)};return n.a.createElement("div",{className:"App"},n.a.createElement(d,null),n.a.createElement("div",{className:"page-content"},n.a.createElement(s.a,{context:[a,o]})))},g=(a(68),function(){var e=Object(s.p)();return console.error(e),n.a.createElement("div",{id:"error-page"},n.a.createElement("h1",{className:"style-1"},"Oops!"),n.a.createElement("p",null,"Sorry, an unexpected error has occurred."),n.a.createElement("p",null,n.a.createElement("i",null,e.statusText||e.message)))}),h=a(4),f=a(10),v=a(19);a(70);function y(){y=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,a){return e[t]=a}}function s(e,t,a,r){var n=t&&t.prototype instanceof u?t:u,o=Object.create(n.prototype),i=new P(r||[]);return o._invoke=function(e,t,a){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return S()}for(a.method=n,a.arg=o;;){var i=a.delegate;if(i){var c=x(i,a);if(c){if(c===m)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var s=l(e,t,a);if("normal"===s.type){if(r=a.done?"completed":"suspendedYield",s.arg===m)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(r="completed",a.method="throw",a.arg=s.arg)}}}(e,a,i),o}function l(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(L){return{type:"throw",arg:L}}}e.wrap=s;var m={};function u(){}function d(){}function p(){}var g={};c(g,n,function(){return this});var h=Object.getPrototypeOf,f=h&&h(h(j([])));f&&f!==t&&a.call(f,n)&&(g=f);var v=p.prototype=u.prototype=Object.create(g);function E(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var r;this._invoke=function(n,o){function i(){return new t(function(r,i){!function r(n,o,i,c){var s=l(e[n],e,o);if("throw"!==s.type){var m=s.arg,u=m.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(u).then(function(e){m.value=e,i(m)},function(e){return r("throw",e,i,c)})}c(s.arg)}(n,o,r,i)})}return r=r?r.then(i,i):i()}}function x(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=l(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function j(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=p,c(v,"constructor",p),c(p,"constructor",d),d.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},E(b.prototype),c(b.prototype,o,function(){return this}),e.AsyncIterator=b,e.async=function(t,a,r,n,o){void 0===o&&(o=Promise);var i=new b(s(t,a,r,n),o);return e.isGeneratorFunction(a)?i:i.next().then(function(e){return e.done?e.value:i.next()})},E(v),c(v,i,"Generator"),c(v,n,function(){return this}),c(v,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=j,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return i.type="throw",i.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),s=a.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),N(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;N(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:j(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}var E=function(e){var t=e.slides,a=Object(s.n)(),o=Object(l.a)(a,2),i=o[0],m=(o[1],Object(r.useState)(0)),u=Object(l.a)(m,2),d=u[0],p=u[1],g=Object(r.useState)(0),E=Object(l.a)(g,2),b=E[0],x=E[1],w=Object(r.useState)([]),N=Object(l.a)(w,2),P=N[0],j=N[1],S=Object(r.useState)({state:!1,index:0}),L=Object(l.a)(S,2),z=L[0],A=L[1],C=Object(r.useState)(0),k=Object(l.a)(C,2),G=k[0],_=k[1],O=Object(r.useState)(!1),M=Object(l.a)(O,2),I=M[0],q=M[1],T=Object(r.useState)(0),V=Object(l.a)(T,2),B=V[0],R=V[1],J={lead:[1,1],inner:[-1,1],outer:[1,-1],trail:[-1,-1]};Object(r.useEffect)(function(){var e=[],t=F(d,"prev"),a=F(t,"prev"),r=F(d,"next"),n=F(r,"next");!i&&e.push(a),e.push(t),e.push(d),e.push(r),!i&&e.push(n),j(e)},[d,i]),Object(r.useEffect)(function(){Object(f.a)(y().mark(function e(){return y().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(400);case 2:B&&A(Object(h.a)({},z,{index:z.index-b})),B&&(1===b?Y(void 0,B):X(void 0,B));case 4:case"end":return e.stop()}},e)}))()},[B]);var D=function(e){return new Promise(function(t){return setTimeout(t,e)})},F=function(e,a){return"prev"===a?e-1<0?t.length-1:e-1:e+1>t.length-1?0:e+1},H=function(e){return z.state&&z.index===e&&!I?"2px solid white":"none"},U=[{position:"relative",left:"10%",width:"40%",border:H(0),boxShadow:"0px 5px 10px 0px #888888",backgroundPosition:"center",backgroundSize:"cover",userSelect:"none",opacity:"0.2",zIndex:"".concat(2+b)},{position:"relative",left:i?"10%":"5%",width:i?"70%":"50%",border:H(1),boxShadow:"0px 5px 10px 0px #888888",backgroundPosition:"center",backgroundSize:"cover",userSelect:"none",opacity:"0.2",zIndex:"".concat(3+b)},{position:"relative",width:i?"100%":"70%",border:H(2),boxShadow:"0px 10px 10px -5px #888888",backgroundPosition:"center",backgroundSize:"cover",userSelect:"none",opacity:"1",zIndex:"".concat(4+Math.abs(b))},{position:"relative",right:i?"10%":"5%",width:i?"70%":"50%",border:H(3),boxShadow:"0px 5px 10px 0px #888888",backgroundPosition:"center",backgroundSize:"cover",userSelect:"none",opacity:"0.2",zIndex:"".concat(3-b)},{position:"relative",right:"10%",width:"40%",border:H(4),backgroundPosition:"center",backgroundSize:"cover",userSelect:"none",opacity:"0.2",zIndex:"".concat(2-b)}],K=function(e){return U[e]},W={width:"100%",pointerEvents:"none"},Z=function(e){return{position:"absolute",height:"100%",width:"100%",top:"50%",transform:"translate(0, -50%)",fontSize:"40px",cursor:"pointer",backgroundColor:"black",opacity:e?"0.0":"0.5",userSelect:"none"}},Q={position:"absolute",height:"100%",width:"100%",top:"50%",transform:"translate(0, -50%)",cursor:"pointer"},X=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;p(F(d,"prev")),R(t-1),x(-1),e&&A(Object(h.a)({},z,{state:!1})),q(!1)},Y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;p(F(d,"next")),R(t-1),x(1),e&&A(Object(h.a)({},z,{state:!1})),q(!1)},$=function(){var e=Object(f.a)(y().mark(function e(t,a,r){var n,o;return y().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a!==d&&(n=Math.ceil((P.length-1)/2),o=Math.abs(n-t),A({state:!0,index:t-("left"===r?-1:1)}),"left"===r?X(void 0,o):Y(void 0,o));case 1:case"end":return e.stop()}},e)}));return function(t,a,r){return e.apply(this,arguments)}}(),ee=function(e){return P.findIndex(function(t){return t===e})<P.findIndex(function(e){return e===d})?"left":"right"};return n.a.createElement("div",{style:{maxWidth:"80%",margin:"0 auto",paddingBottom:"3.5%"}},n.a.createElement("div",{style:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center"}},!i&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{position:"absolute",top:"50%",transform:"translate(0, -50%)",left:"3%",fontSize:"45px",zIndex:10,cursor:"pointer",color:"white",userSelect:"none"},onClick:X},"\u276e"),n.a.createElement("div",{style:{position:"absolute",top:"50%",transform:"translate(0, -50%)",right:"3%",fontSize:"45px",zIndex:10,cursor:"pointer",color:"white",userSelect:"none"},onClick:Y},"\u276f")),n.a.createElement(v.AnimatePresence,{initial:"false",mode:"popLayout"},P.map(function(e,a){var r=100*J.outer[0]*b,o=100*J.outer[1]*b,s=e===d;return n.a.createElement(v.motion.div,{layout:!0,key:e,onClick:function(t){return!i&&$(a,e,ee(e))},onDragStart:function(e){return i&&function(e){_(e.pageX),q(!0)}(e)},onDragEnd:function(t){return i&&function(e,t,a){var r=e.pageX-G,n=r>0?P[0]:P[2],o=r>0?-1:1;Math.abs(r)>30&&(p(n),x(o),q(!0))}(t,0,ee(e))},style:K(i?a+1:a),initial:{x:r,scale:.8,opacity:0},animate:{x:0,scale:1,opacity:1},exit:{x:o,scale:.8,opacity:0,zIndex:1},transition:{opacity:{ease:"linear",duration:.3},layout:{duration:.6,type:"spring",damping:25}},dragListener:i,dragElastic:.2,dragMomentum:!1,drag:"x",dragConstraints:{left:0,right:0}},n.a.createElement(v.motion.img,{style:W,src:t[e].carousel_img}),n.a.createElement(v.motion.div,{style:Z(s)}),s&&n.a.createElement(v.motion.div,{className:"container d-flex justify-content-center",style:Q},n.a.createElement("div",{className:"row align-items-end"},n.a.createElement(v.motion.div,{className:"col-sm",initial:{y:100,scale:.8,opacity:0},animate:{y:0,scale:1,opacity:1},transition:{delay:.7,type:"spring",opacity:{ease:"linear",duration:.6}}},n.a.createElement(c.a,{to:"/portfolio/project"},n.a.createElement(v.motion.button,{layout:!0,type:"button",className:"btn btn-light py-0 px-1",style:{position:"relative",fontSize:"clamp(10px, 2.5vw, 16px)",cursor:"pointer",marginBottom:"10%"},key:e,whileHover:{scale:1.2,type:"spring",backgroundColor:"gold",borderRadius:"8px"},whileTap:{scale:.9,type:"spring",backgroundColor:"rgba(255, 255, 255, 0.6)",borderRadius:"8px"},animate:{borderRadius:"1px",backgroundColor:"rgba(255, 255, 255, 0.6)"},exit:{borderRadius:"6px"},transition:{borderRadius:{ease:"linear",duration:.1,delay:.1},backgroundColor:{ease:"linear",delay:.1}}},"Ver Mas"))))))}))))},b=a(112),x=a(105),w=a(106),N=a(107),P=[{id:"cerros-orientales",title:"Cerros Orientales de Bogot\xe1",primary_img:"".concat("","/images/cerros-orientales-primary.PNG"),carousel_img:"".concat("","/images/cerros-orientales-primary-resize.PNG"),secondary_img:"".concat("","/images/cerros-orientales-secondary.JPG"),location:"Bogot\xe1",desciption:"Estructuraci\xf3n y planteamiento del modelo de operaci\xf3n del \u201cProyecto Sendero de Las Mariposas\u201d,  Corporaci\xf3n Aut\xf3noma Regional de Cundinamarca \u2013 CAR. Uso P\xfablico de Cerros Orientales. Desarrollo realizado para el \u201cConsorcio Sendero Las Mariposas 2017\u201d (HMV Consultor\xeda \u2013 WSP Consultor\xeda \u2013 Concol). A\xf1os 2018 - 2019."},{id:"corredor-ambiental",title:"Corredor Ambiental del R\xedo Arzobispo",primary_img:"".concat("","/images/corredor-ambiental-primary.PNG"),carousel_img:"".concat("","/images/corredor-ambiental-secondary-resize.JPG"),secondary_img:"".concat("","/images/corredor-ambiental-secondary.JPG"),location:"Bogot\xe1",desciption:"Estructuraci\xf3n y planteamiento del modelo de operaci\xf3n para el proyecto \u201cPaseo del R\xedo Arzobispo - Un corredor para la vida\u201d  de la Empresa de Acueducto y Alcantarillado de Bogot\xe1 - EAAB ESP, para el \u201cConsorcio DARP 2017\u201d. A\xf1o 2019."},{id:"r\xedo-bogot\xe1",title:"R\xedo Bogot\xe1",primary_img:"".concat("","/images/rio-bogota-primary.PNG"),carousel_img:"".concat("","/images/rio-bogota-primary-resize.PNG"),secondary_img:"".concat("","/images/rio-bogota-secondary.PNG"),location:"Bogot\xe1",desciption:"Elaboraci\xf3n de los estudios de capacidad de carga para los componentes terrestre y fluvial del proyecto \u201cParque Lineal del R\xedo Bogot\xe1\u201d de la Secretar\xeda Distrital de Planeaci\xf3n, para el \u201cConsorcio R\xedo Bogot\xe1 2019\u201d (HMV Consultor\xeda \u2013 HMV Proyectos \u2013 WSP Consultor\xeda). A\xf1o 2020."},{id:"senderos-quebrada-las-delicias",title:"Senderos Quebrada Las Delicias y Cerro Guadalupe - Aguanoso",primary_img:"".concat("","/images/senderos-quebrada-primary.JPG"),carousel_img:"".concat("","/images/senderos-quebrada-secondary-resize.JPG"),secondary_img:"".concat("","/images/senderos-quebrada-secondary.JPG"),location:"Bogot\xe1",desciption:"Elaboraci\xf3n de los \u201cPlanes de Desarrollo Ecotur\xedstico y de Gesti\xf3n Socioambiental para cada sendero\u201d  Secretar\xeda Distrital de Ambiente - SDA, la Empresa de Acueducto y Alcantarillado de Bogot\xe1 - EAAB ESP, el Instituto Distrital de Turismo - IDT y Aguas Bogot\xe1 SA ESP. Desarrollo llevado a cabo con la empresa Ecosimple SAS. A\xf1os 2019 \u2013 2020."},{id:"embalse-del-neusa",title:"Embalse del Neusa, Cogua",primary_img:"".concat("","/images/embalse-del-neusa-primary.JPG"),carousel_img:"".concat("","/images/embalse-del-neusa-primary-resize.JPG"),secondary_img:"".concat("","/images/embalse-del-neusa-secondary.JPG"),location:"Cundinamarca",desciption:"Dise\xf1ar el Plan de Fortalecimiento y Gesti\xf3n Ecotur\xedstica para Destinos de Naturaleza - Guacat\xe1 Ecotravel Experience, municipio de Tausa y municipios con vocaci\xf3n tur\xedstica de su entorno cercano, para el disfrute de la naturaleza y el patrimonio hist\xf3rico, ambiental y cultural de la regi\xf3. Ecoplanet Solutions SAS. A\xf1os 2020 \u2013 2021 \u2013 2022."},{id:"la-guajira",title:"La Guajira",primary_img:"".concat("","/images/la-guajira-primary.JPG"),carousel_img:"".concat("","/images/la-guajira-primary-resize.JPG"),secondary_img:"",location:"Nari\xf1o",desciption:"Dibulla (sendero del r\xedo Palomino), San Juan del Cesar (Totumo), Manaure (playa Mayapo), Riohacha y Uribia (Cabo de La Vela - Pil\xf3n de Az\xfacar. Nari\xf1o:  Sandon\xe1, Cumbal (Volc\xe1n Cumbal), Ipiales (Santuario de Las Lajas), Pasto (Laguna de La Cocha) y Tumaco (Playa del Morro). Proyectos de Reactivaci\xf3n Tur\xedstica. Formulaci\xf3n y planteamiento de la puesta en marcha de los  Protocolos de Uso y Seguridad. Ciclos de capacitaci\xf3n en operaci\xf3n, sostenibilidad y negocios verdes. Grupo Empresarial - GEAM Consultores. A\xf1os 2021 - 2022."},{id:"red-de-miradores-de-flora",title:"Red de Miradores de Flora y Fauna de Nari\xf1o",primary_img:"".concat("","/images/red-de-miradores-primary.PNG"),carousel_img:"".concat("","/images/red-de-miradores-primary-resize.PNG"),secondary_img:"".concat("","/images/red-de-miradores-secondary.PNG"),location:"Flora",desciption:"Fortalecimiento del Turismo de Naturaleza. 4 Lugares priorizados: Laguna de La Cocha, Laguna de la Bolsa \u2013 Reserva Natural de Los Capotes, Tumaco - Isla Bocagrande y Reserva Natural R\xedo \xd1amb\xed. Dise\xf1os, formulaci\xf3n del Plan Maestro y estructuraci\xf3n del proyecto para acceder a los recursos de inversi\xf3n nacional (Sistema General de Regal\xedas - SGR | Fase III) y otras fuentes de financiamiento.  Gobernaci\xf3n de Nari\xf1o|Instituto Global para el Crecimiento Verde \u2013 GGGI \u2013 Reino de Noruega. A\xf1os 2021 \u2013 2022."},{id:"salto-del-tequendama",title:"Salto del Tequendama, Soacha | Cundinamarca",primary_img:"".concat("","/images/salto-del-tequendama-primary.JPG"),carousel_img:"".concat("","/images/salto-del-tequendama-secondary-resize.JPG"),secondary_img:"".concat("","/images/salto-del-tequendama-secondary.JPG"),location:"Cundinamarca",desciption:"Elaboraci\xf3n de los estudios de capacidad de carga del puente peatonal y dem\xe1s \xe1reas de espacios log\xedsticos complementarios, proyecto \u201cJardines Colgantes del Tequendama\u201d del municipio de Soacha. Taller Arquitectos. A\xf1o 2022."},{id:"pasto-nari\xf1o",title:"Pasto | Nari\xf1o",primary_img:"".concat("","/images/pasto-narino-primary.JPG"),carousel_img:"".concat("","/images/pasto-narino-primary-resize.JPG"),secondary_img:"".concat("","/images/pasto-narino-secondary.JPG"),location:"Nari\xf1o",desciption:"Acompa\xf1amiento para la formalizaci\xf3n empresarial ante la C\xe1mara de Comercio de Pasto de 8 organizaciones con vocaci\xf3n de turismo comunitario, quienes se constituyeron como Prestadores de Servicios Tur\xedsticos - PST, obteniendo el Registro Nacional de Turismo \u2013 RNT en el marco del Plan de Fortalecimiento de las actividades de la Mesa Intersectorial de Turismo de Pasto y la promoci\xf3n de iniciativas de turismo comunitario en la regi\xf3n. PDT Nari\xf1o y Subsecretar\xeda de Turismo Alcald\xeda de Pasto. A\xf1o 2022."}],j=("".concat("","/images/pexels-diego-gonzalez.jpg"),"".concat("","/images/pexels-juan-rojas.jpg"),"".concat("","/images/pexels-leticia-azevedo.jpg"),"".concat("","/images/pexels-santiago-boada.jpg"),"".concat("","/images/pexels-valentina-diaz.jpg"),"".concat("","/images/pexels-akos-helgert.jpg"),"".concat("","/images/pexels-nick-wehrli.jpg"),"".concat("","/images/pexels-osmany-mederos.jpg"),[{title:"jumbotronDefault",url:"".concat("","/images/IMG_8208.JPG")}]),S=("".concat("","/images/IMG_5691-min.JPG"),"".concat("","/images/f22d7d69-2c5e-41ab-bff9-a35076d2f0bc-min.jpg"),"".concat("","/images/IMG_5131-min.JPG"),"".concat("","/images/12A6031E-01BC-450A-AA39-CD11CAC325D3-min.jpg"),"".concat("","/images/IMG_4494-min.jpg"),"".concat("","/images/IMG_5128-min.JPG"),[{title:"hiking-mountain",url:"".concat("","/images/IMG_0477-min.JPG")},{title:"smoky-mountain",url:"".concat("","/images/IMG_2519_MOV_AdobeExpress.gif")}]),L={gov:"".concat("","/icons/capitol-washington-svgrepo-com.svg"),bus:"".concat("","/icons/store-coffee-shop-svgrepo-com.svg"),nat:"".concat("","/icons/pines-tree-svgrepo-com.svg")},z=(a(90),[{decloration:"Kikster provides services for",type:"Government",icon:"",description:"Lorem ipsum dolor sit amet, consectetur 1"},{decloration:" Kikster is here to assist",type:"Local Entrepreneurs",icon:"",description:"Lorem ipsum dolor sit amet, consectetur 2"},{decloration:"At the core of Kikster is",type:"Nature",icon:"",description:"Lorem ipsum dolor sit amet, consectetur 3"}]),A=function(){var e=Object(r.useState)(0),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(r.useState)(0),c=Object(l.a)(i,2),s=c[0],m=c[1];return n.a.createElement("div",null,n.a.createElement(b.a,{className:"shadow-gradient card-alt"},n.a.createElement(b.a.Img,{src:j[0].url,variant:"top",className:"test",alt:"test"})),n.a.createElement("div",{style:{height:"20vh"},className:"bg-black container-fluid d-flex flex-column align-items-center justify-content-center"},n.a.createElement(x.a,null,n.a.createElement("img",{src:"".concat("","/Kikster_Oficial_Transparente_Name.png"),width:"386",height:"59",className:"d-inline-block align-top",alt:"Kikster logo"})),n.a.createElement(x.a,null,n.a.createElement(v.AnimatePresence,{initial:"false",mode:"popLayout"},n.a.createElement(v.motion.div,{initial:{y:10},animate:{y:20},exit:{y:0},transition:{delay:.7,type:"spring",opacity:{ease:"linear",duration:1}}},"\u2bc6")))),n.a.createElement(b.a,{className:"shadow-gradient-2 card-alt"},n.a.createElement("div",{className:"ofHidden"},n.a.createElement(E,{slides:P}))),n.a.createElement("div",{className:"my-5 container-fluid"},n.a.createElement(w.a,{className:"services-container d-flex align-items-center"},n.a.createElement(w.a,{className:""},n.a.createElement(x.a,null,n.a.createElement(N.a,{className:"d-flex justify-content-start align-items-end"},n.a.createElement("h3",{className:"style-1",style:{color:"darkblue"}},z[s].decloration))),n.a.createElement(x.a,{className:"services-container-partition"},n.a.createElement(N.a,{className:"d-flex justify-content-center align-items-center"},n.a.createElement("div",{className:"spinner-container"},n.a.createElement("div",{className:"circle-path",style:{transform:"rotate(".concat(a,"deg)")},onClick:function(){o(a+120),m(2===s?0:s+1)}},n.a.createElement("div",{className:"child",style:{transform:"rotate(".concat(-a,"deg)")}},n.a.createElement("img",{src:L.gov})),n.a.createElement("div",{className:"child1",style:{transform:"rotate(".concat(-a,"deg)")}},n.a.createElement("img",{src:L.nat})),n.a.createElement("div",{className:"child2",style:{transform:"rotate(".concat(-a,"deg)")}},n.a.createElement("img",{src:L.bus}))),n.a.createElement("div",{className:"entity-name-container"},n.a.createElement("h2",{className:"entity-name style-1"},z[s].type))))),n.a.createElement(x.a,null,n.a.createElement(N.a,{className:"d-flex justify-content-end"},n.a.createElement("h3",{className:"style-1",style:{color:"darkblue"}},z[s].description))))),n.a.createElement("div",null,n.a.createElement("h2",null,"Servicios"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus congue nunc volutpat risus fusce turpis lectus. Purus, gravida sagittis accumsan sem odio sed. Malesuada tortor nibh nibh nulla nec neque. Enim, suscipit auctor tristique pharetra, egestas risus urna imperdiet felis. Suspendisse maecenas ut egestas donec fermentum. Bibendum massa sit amet iaculis vitae. Odio elementum tincidunt id pharetra quisque in sed risus, urna. Morbi ullamcorper vestibulum maecenas molestie consequat congue."))))},C=(a(92),function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:"style-1"},"About Us"))}),k=a(108),G=(a(94),function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container-fluid bg-dark text-white"},n.a.createElement("div",{className:"m-4 px-5 py-3 d-flex justify-content-start align-items-center"},n.a.createElement("h1",null,"Portfolio"))),n.a.createElement("div",{className:"container"},function(){for(var e=[],t=P.length-1,a=[],r=0;r<=t;r++){var o=r&&r%3===0,i=P[r],s=n.a.createElement(b.a,{border:"light",className:"m-4 px-0",style:{width:"20rem"}},n.a.createElement(b.a.Img,{className:"rounded-0 test2",style:{height:"10rem"},variant:"top",src:i.primary_img}),n.a.createElement(b.a.Body,null,n.a.createElement(b.a.Title,null,i.title),n.a.createElement(b.a.Text,{className:"mb-0 pb-1"},i.location),n.a.createElement(b.a.Text,null,i.desciption),n.a.createElement(k.a,{variant:"link",className:"ps-0 text-dark"},n.a.createElement(c.a,{to:"project"},"Learn More"),n.a.createElement("span",{style:{color:"green"},className:"ps-2"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-right",viewBox:"0 0 16 16"},n.a.createElement("path",{"fill-rule":"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"}))))));o?(a.push([n.a.createElement("div",{className:"row d-flex justify-content-center mt-1 mb-3 text-start"},e)]),e=[s]):e.push(s)}return a.push([n.a.createElement("div",{className:"row d-flex justify-content-center mt-1 mb-3 text-start"},e)]),a}()))}),_=(a(96),function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:"style-1"},"Contact Us!"))}),O=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,109)).then(function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),o(e),i(e)})},M=(a(98),a(100),function(){return n.a.createElement("div",{className:"container-fluid bg-black vh-50",style:{height:"300px",position:"absolute",zIndex:"-1",left:"0px",top:"0px"}})}),I=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(M,null),n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"text-start d-none d-md-block ms-4"},n.a.createElement(b.a.Img,{className:"rounded-0 img-fluid",style:{height:"400px",width:"auto",top:"5vh",left:"10px",position:"relative"},variant:"top",src:S[0].url}))),n.a.createElement("div",{className:"container-fluid",style:{position:"relative"}},n.a.createElement("div",{className:"row d-flex justify-content-start mt-4 mt-md-0 ms-md-2"},n.a.createElement("h2",{className:"ms-5 py-2 col-6 col-lg-4 col-xl-3 bg-success text-white"},"Project Name")),n.a.createElement("div",{className:"ms-5 my-3 row d-flex justify-content-center text-start"},n.a.createElement("div",{className:"col-6"},n.a.createElement("p",{className:"text-sm-white"},n.a.createElement("span",{className:"px-2 text-success"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-geo-alt-fill",viewBox:"0 0 16 16"},n.a.createElement("path",{d:"M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"}))),"Lobortis Quisque")),n.a.createElement("div",{className:"col-6"},n.a.createElement("p",{className:"text-sm-white"},n.a.createElement("span",{className:"px-2 text-success"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-map-fill",viewBox:"0 0 16 16"},n.a.createElement("path",{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z"}))),"24,000 sq. ft."))),n.a.createElement("div",{className:"ms-5 my-2 row d-flex justify-content-center text-start"},n.a.createElement("div",{className:"col-4"},n.a.createElement("p",{className:"text-sm-white"},n.a.createElement("span",{className:"px-2 text-success"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-calendar-date-fill",viewBox:"0 0 16 16"},n.a.createElement("path",{d:"M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2z"}),n.a.createElement("path",{d:"M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a12.6 12.6 0 0 1 1.313-.805h.632z"}))),"Feb 2022")),n.a.createElement("div",{className:"col-4"},n.a.createElement("p",{className:"text-sm-white"},n.a.createElement("span",{className:"px-2 text-success"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-briefcase-fill",viewBox:"0 0 16 16"},n.a.createElement("path",{d:"M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"}),n.a.createElement("path",{d:"M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"}))),"Quisque")),n.a.createElement("div",{className:"col-4"},n.a.createElement("p",{className:"text-sm-white"},n.a.createElement("span",{className:"px-2 text-success"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-coin",viewBox:"0 0 16 16"},n.a.createElement("path",{d:"M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"}),n.a.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),n.a.createElement("path",{d:"M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"}))),"570,000")))),n.a.createElement("div",{className:"container border-top border-success border-3"},n.a.createElement("div",{className:"mt-5 mt-md-0 d-flex row text-start"},n.a.createElement("h3",{className:"my-3"},"Donec Dolor Non"),n.a.createElement("p",null,"Bibendum massa sit amet iaculis vitae. Odio elementum tincidunt id pharetra quisque in sed risus, urna. Morbi ullamcorper vestibulum maecenas molestie consequat congue."),n.a.createElement("div",{className:"col-md-7"},n.a.createElement("h3",{className:"my-3"},"Vulputate morbi leo"),n.a.createElement("p",null,"Risus turpis feugiat eu, mauris etiam sit amet dolor ipsum. Pretium nunc consectetur ac quis. Neque euismod proin tortor turpis ornare magna id vestibulum. Egestas aliquam vitae, integer egestas placerat aenean vitae. Ac eget ullamcorper vestibulum et in felis, sagittis. Lorem ut morbi morbi quisque tortor at vulputate platea. Ut nisi, tellus nulla nulla molestie vulputate interdum etiam ultrices. Nunc, viverra lectus ultrices amet purus eu quam."),n.a.createElement("p",null,"Turpis sociis duis sapien et, netus morbi. Sed tristique lectus massa mattis non mattis in mus rhoncus. Volutpat mattis sociis duis aliquam. Luctus interdum ornare laoreet quam lectus amet. Imperdiet convallis pellentesque sed turpis leo posuere est. Eu vel dignissim sem massa tempus sit. Vitae, sed id nunc libero vitae ridiculus pharetra."),n.a.createElement("h3",{className:"my-3"},"Amet"),n.a.createElement("p",null,"Viverra imperdiet amet accumsan blandit quis gravida urna enim, integer. Sit tellus mi tempor libero id. Proin pharetra, vulputate nunc enim, ac, lorem quis. Fermentum proin eget in eget maecenas imperdiet tristique. Odio massa, ipsum neque molestie sit purus, diam dolor tempor.")),n.a.createElement("div",{className:"col-md-5"},n.a.createElement(b.a.Img,{className:"rounded-0",style:{height:"600px",width:"400px",padding:"12px",objectFit:"cover"},variant:"top",src:S[1].url}),n.a.createElement("p",{className:"ps-3"},n.a.createElement("span",{className:"text-success"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-envelope-fill",viewBox:"0 0 16 16"},n.a.createElement("path",{d:"M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"})))," ","Print"),n.a.createElement("p",{className:"ps-3"},n.a.createElement("span",{className:"text-success"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-file-pdf-fill",viewBox:"0 0 16 16"},n.a.createElement("path",{d:"M5.523 10.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.035 21.035 0 0 0 .5-1.05 11.96 11.96 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.888 3.888 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 4.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z"}),n.a.createElement("path",{"fill-rule":"evenodd",d:"M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm.165 11.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.64 11.64 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.707 19.707 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"})))," ","Download")))))},q=i.a.createRoot(document.getElementById("root")),T=Object(c.c)([{path:"/",element:n.a.createElement(p,null),errorElement:n.a.createElement(g,null),children:[{index:!0,element:n.a.createElement(A,null)},{path:"about",element:n.a.createElement(C,null)},{path:"portfolio/",children:[{index:!0,element:n.a.createElement(G,null)},{path:"project",element:n.a.createElement(I,null)}]},{path:"contact",element:n.a.createElement(_,null)}]}],{basename:""});q.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(s.c,{router:T}))),O()},50:function(e,t,a){e.exports=a(102)},57:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},90:function(e,t,a){},92:function(e,t,a){},94:function(e,t,a){},96:function(e,t,a){}},[[50,3,2]]]);
//# sourceMappingURL=main.e5801aa5.chunk.js.map