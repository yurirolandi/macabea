(function(a){function e(e){for(var r,n,c=e[0],i=e[1],l=e[2],u=0,d=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(a[r]=i[r]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),t()}function t(){for(var a,e=0;e<s.length;e++){for(var t=s[e],r=!0,n=1;n<t.length;n++){var c=t[n];0!==o[c]&&(r=!1)}r&&(s.splice(e--,1),a=i(i.s=t[0]))}return a}var r={},n={app:0},o={app:0},s=[];function c(a){return i.p+"js/"+({}[a]||a)+"."+{"chunk-0d567cf0":"b7b5fe8e","chunk-2d21098f":"2238281b","chunk-2d22d746":"97259021","chunk-73e1a19e":"bea7626d","chunk-8cc4fea8":"784f0ae7"}[a]+".js"}function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(a){var e=[],t={"chunk-0d567cf0":1,"chunk-73e1a19e":1,"chunk-8cc4fea8":1};n[a]?e.push(n[a]):0!==n[a]&&t[a]&&e.push(n[a]=new Promise((function(e,t){for(var r="css/"+({}[a]||a)+"."+{"chunk-0d567cf0":"4a913048","chunk-2d21098f":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-73e1a19e":"2f505d99","chunk-8cc4fea8":"b5e987b2"}[a]+".css",o=i.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var l=s[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===r||u===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+a+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete n[a],p.parentNode.removeChild(p),t(s)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){n[a]=0})));var r=o[a];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,t){r=o[a]=[e,t]}));e.push(r[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(a);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var t=o[a];if(0!==t){if(t){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+a+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,t[1](d)}o[a]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},i.m=a,i.c=r,i.d=function(a,e,t){i.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:t})},i.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},i.t=function(a,e){if(1&e&&(a=i(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var r in a)i.d(t,r,function(e){return a[e]}.bind(null,r));return t},i.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return i.d(e,"a",e),e},i.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},i.p="/macabea/",i.oe=function(a){throw console.error(a),a};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;s.push([0,"chunk-vendors"]),t()})({0:function(a,e,t){a.exports=t("56d7")},"1c8c":function(a,e,t){a.exports=t.p+"img/facebook-square-brands.7df7570f.svg"},"2cf2":function(a,e,t){"use strict";var r=t("86a6"),n=t.n(r);n.a},"467e":function(a,e,t){a.exports=t.p+"img/macabea.cc071829.jpg"},"509f":function(a,e,t){},"534e":function(a,e,t){a.exports=t.p+"img/instagram-square-brands.9b9fd9cc.svg"},"56d7":function(a,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),n=t("ecee"),o=t("c074"),s=t("ad3d");n["c"].add(o["a"]),r["default"].component("font-awesome-icon",s["a"]);var c=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"app"}},[t("AppHeader"),t("router-view"),t("AppFooter")],1)},i=[],l=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"app-header"},[t("div",{staticClass:"menu"},[t("font-awesome-icon",{staticClass:"close-menu",attrs:{icon:"times"},on:{click:a.close}}),t("ul",{staticClass:"menu-content"},[t("li",{staticClass:"menu-content-item"},[t("router-link",{attrs:{to:"/"}},[a._v("INÍCIO")])],1),t("li",{staticClass:"menu-content-item"},[t("router-link",{attrs:{to:"/tour"}},[a._v("PASSEIOS")])],1),t("li",{staticClass:"menu-content-item"},[t("router-link",{attrs:{to:"/package"}},[a._v("PACOTES")])],1),t("li",{staticClass:"menu-content-item"},[t("router-link",{attrs:{to:"/rooms"}},[a._v("QUARTOS")])],1),t("li",{staticClass:"menu-content-item"},[t("router-link",{attrs:{to:"/contact"}},[a._v("CONTATO")])],1)])],1),t("h2",{staticClass:"header-logo"},[a._v(" Macabéa ")]),t("div",{staticClass:"app-header-hamburg"},[t("font-awesome-icon",{staticClass:"show-menu",attrs:{icon:"bars"},on:{click:a.open}})],1)])},u=[],d={name:"AppHeader",data:function(){return{}},methods:{open:function(){var a=document.querySelector(".app-header");a.classList.add("open")},close:function(){var a=document.querySelector(".app-header");a.classList.contains("open")&&a.classList.remove("open")}},watch:{$route:function(){this.close()}}},p=d,f=(t("2cf2"),t("2877")),m=Object(f["a"])(p,l,u,!1,null,"61ff23d4",null),h=m.exports,v=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",{staticClass:"app-footer"},[r("div",{staticClass:"container"},[r("b-row",[r("b-col",[r("h4",{staticClass:"title"},[a._v("Macabéa Hostel & Pousada")]),r("ul",{staticClass:"box-info"},[r("li",[a._v("Largo do Rozário, 373, Centro Histórico, 23970-000")]),r("li",[a._v("Paraty - Rio de Janeiro")])])]),r("b-col",[r("ul",{staticClass:"box-info"},[r("li",[a._v("Em caso de dúvidas, entre em contato:")]),r("li",[a._v("E-mail: macabea.me@gmail.com")]),r("li",[a._v("Telefone: (24) 3371-9484")])]),r("ul",{staticClass:"social-media"},[r("li",[r("a",{attrs:{href:"https://www.instagram.com/macabeahostel/?hl=pt-br",target:"blank"}},[r("img",{staticClass:"social-link",attrs:{src:t("534e")}})])]),r("li",[r("a",{attrs:{href:"https://www.facebook.com/macabeahostel/?ref=aymt_homepage_panel",target:"blank"}},[r("img",{staticClass:"social-link",attrs:{src:t("1c8c")}})])]),r("li",[r("a",{attrs:{href:"https://www.tripadvisor.com.br/Hotel_Review-g303503-d10632273-Reviews-Macabea_Hostel_Pousada-Paraty_State_of_Rio_de_Janeiro.html",target:"blank"}},[r("img",{staticClass:"social-link",attrs:{src:t("da92")}})])])])])],1)],1)])},b=[],g={name:"AppFooter"},C=g,_=(t("9a42"),Object(f["a"])(C,v,b,!1,null,"4b6d214b",null)),k=_.exports,x={components:{AppHeader:h,AppFooter:k}},w=x,y=(t("5c0b"),Object(f["a"])(w,c,i,!1,null,null,null)),T=y.exports,P=(t("d3b7"),t("8c4f")),A=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",{staticClass:"home"},[r("div",{staticClass:"section"},[a._m(0),a._m(1),r("div",{staticClass:"container"},[a._m(2),r("div",{staticClass:"card-content"},[r("Card",{attrs:{"data-aos":"flip-left",cardText:"Ar-Condicionado",cardTitle:"Macabéa Pousada e Hostel",cardIcon:"snowflake"}}),r("Card",{attrs:{"data-aos":"flip-left",cardText:"Café da manhã",cardTitle:"Macabéa Pousada e Hostel",cardIcon:"mug-hot"}}),r("Card",{attrs:{"data-aos":"flip-left",cardText:"Atendimento 24h",cardTitle:"Macabéa Pousada e Hostel",cardIcon:"clock"}}),r("Card",{attrs:{"data-aos":"flip-left",cardText:"Wi-Fi",cardTitle:"Macabéa Pousada e Hostel",cardIcon:"wifi"}}),r("Card",{attrs:{"data-aos":"flip-left",cardText:"Roupa de cama",cardTitle:"Macabéa Pousada e Hostel",cardIcon:"bed"}}),r("Card",{attrs:{"data-aos":"flip-left",cardText:"Cozinha coletiva",cardTitle:"Macabéa Pousada e Hostel",cardIcon:"utensils"}}),r("Card",{attrs:{"data-aos":"flip-left",cardText:"Bar",cardTitle:"Macabéa Pousada e Hostel",cardIcon:"glass-cheers"}}),r("Card",{attrs:{"data-aos":"flip-left",cardText:"televisão",cardTitle:"Macabéa Pousada e Hostel",cardIcon:"tv"}})],1)]),r("div",{staticClass:"container"},[r("b-card",{attrs:{"bg-variant":"dark","text-variant":"white",title:"POLÍTICAS:"}},[r("b-card-text",[r("b-row",[r("b-col",[a._v("CHECK-IN 13 HORAS")]),r("b-col",[a._v("CHECK-OUT 11 HORAS")])],1)],1),r("b-card-text",[a._v(" Cancelamento gratuito e reembolso até 5 dias antes da chegada. ")])],1)],1),r("div",{staticClass:"container"},[a._m(3),r("div",{staticClass:"box"},[r("h4",{staticClass:"subtitle"},[a._v("Nós te ajudamos a ter uma experiência completa em Paraty!")]),r("b-row",[r("b-col",{attrs:{"data-aos":"flip-left"}},[r("img",{staticClass:"box-img",attrs:{src:t("a671"),alt:""}}),r("h3",{staticClass:"title"},[a._v("EXPERIÊNCIAS"),r("span")]),r("p",[a._v(" Nossa equipe está preparada para marcar com você um encontro. Venha ter experiências conosco. Oferecemos, com agendamento, um dia de slackline na praia. Um trabalho que integra experiências corporais, como alongamentos e yoga. Marque também sua nova tatoo, o tatuador Juan Andres cuidará de todos os detalhes, garantindo segurança e qualidade no procedimento. ")])]),r("b-col",{attrs:{"data-aos":"flip-left"}},[r("img",{staticClass:"box-img",attrs:{src:t("9f47"),alt:""}}),r("h3",{staticClass:"title"},[a._v("PASSEIOS"),r("span")]),r("p",[a._v(" Um dia completo de aventura e descanso. Agendamos passeios de escuna pelas ilhas e praias paradisíacas da baía de Paraty; Jeep Tour pelas principais cachoeiras e alambique, onde poderá degustar e apreciar a fabricação de cachaça. Aluguel de bicicletas. Passeios de kaiak, stand up, cavalo,mergulho,observação de pássaros, city tour e muito mais. ")])])],1)],1)])])])},O=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("h1",{staticClass:"title"},[a._v(" MACABÉA HOSTEL & POUSADA "),t("span")])},function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"box-img"},[r("img",{staticClass:"macabea-logo",attrs:{src:t("467e"),alt:""}})]),r("div",{staticClass:"box-text"},[a._v(" Nosso hostel e pousada em Paraty é o lugar ideal para relaxar, fazer amigos e se divertir. Oferecemos conforto, segurança e facilidades. Seja para você que está mochilando, viajando sozinho, com amigos ou com amigos estamos à disposição para dar as melhores dicas do que fazer para aproveitar o melhor de Paraty. A poucos passos do hostel você encontrará uma vida noturna, com várias opções de restaurantes e bares, supermercado, praia, centro de informações turísticas e terminal rodoviário. Paraty é uma cidade pequena, histórica e inesquecível. ")])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("h1",{staticClass:"title"},[a._v(" NOSSOS DIFERENCIAIS "),t("span")])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("h1",{staticClass:"title"},[a._v(" PARCEIROS "),t("span")])}],S=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"card"},[t("b-card",{staticClass:"text-center",attrs:{"bg-variant":"dark",header:a.cardTitle,"text-variant":"white"}},[t("b-card-text",[t("font-awesome-icon",{attrs:{icon:a.cardIcon}}),a._v(" "+a._s(a.cardText)+" ")],1)],1)],1)},E=[],I={name:"Card",props:["cardText","cardIcon","cardTitle"]},H=I,j=Object(f["a"])(H,S,E,!1,null,null,null),M=j.exports,q={name:"Home",props:["cardText","cardIcon","cardTitle"],components:{Card:M}},N=q,R=(t("814a"),Object(f["a"])(N,A,O,!1,null,"7ceb6496",null)),L=R.exports;r["default"].use(P["a"]);var $=[{path:"/",name:"Home",component:L},{path:"/about",name:"About",component:function(){return t.e("chunk-2d22d746").then(t.bind(null,"f820"))}},{path:"/rooms",name:"Rooms",component:function(){return t.e("chunk-2d21098f").then(t.bind(null,"b924"))}},{path:"/tour",name:"Tour",component:function(){return t.e("chunk-8cc4fea8").then(t.bind(null,"37f6"))}},{path:"/package",name:"Package",component:function(){return t.e("chunk-73e1a19e").then(t.bind(null,"78b3"))}},{path:"/contact",name:"Contact",component:function(){return t.e("chunk-0d567cf0").then(t.bind(null,"b8fa"))}}],B=new P["a"]({mode:"history",base:"/macabea/",routes:$,scrollBehavior:function(){return{x:0,y:0}}}),F=B,J=t("5a58"),U=t.n(J),z=t("f5af"),D=t.n(z),K=t("5f5b");t("ab8b"),t("2dd8"),t("e829");r["default"].use(K["a"]),r["default"].use(U.a),D.a.init(),r["default"].config.productionTip=!1,new r["default"]({router:F,render:function(a){return a(T)}}).$mount("#app")},"5c0b":function(a,e,t){"use strict";var r=t("9c0c"),n=t.n(r);n.a},"814a":function(a,e,t){"use strict";var r=t("509f"),n=t.n(r);n.a},"86a6":function(a,e,t){},"9a42":function(a,e,t){"use strict";var r=t("bcf9"),n=t.n(r);n.a},"9c0c":function(a,e,t){},"9f47":function(a,e,t){a.exports=t.p+"img/passeios.2e5e083c.jpg"},a671:function(a,e,t){a.exports=t.p+"img/experiencia.4238a559.jpg"},bcf9:function(a,e,t){},da92:function(a,e,t){a.exports=t.p+"img/tripadvisor-brands.bca27ea6.svg"}});
//# sourceMappingURL=app.5644998b.js.map