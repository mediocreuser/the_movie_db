(this.webpackJsonpthe_movie_db=this.webpackJsonpthe_movie_db||[]).push([[10],{124:function(e,t,n){"use strict";var r=n(133),a=n.n(r),c=n(134),s=n(7),i=n(8),o=n(173),u=n.n(o).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"fb02210959ba63bd41cf2c22114664e4"}}),l=function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,[{key:"getTrending",value:function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("trending/".concat(t,"/").concat(n)).then((function(e){return e.data.results}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getPopular",value:function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("".concat(t,"/popular")).then((function(e){return e.data.results}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"discover",value:function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("discover/".concat(t),{params:n}).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getGenres",value:function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("genre/".concat(t,"/list")).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"searchKeywords",value:function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("search/keyword?query=".concat(t)).then((function(e){return e.data.results}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getDetails",value:function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("".concat(t,"/").concat(n)).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getVideos",value:function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("".concat(t,"/").concat(n,"/videos")).then((function(e){return e.data.results}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getCredits",value:function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("".concat(t,"/").concat(n,"/credits")).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getExternalIDs",value:function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("".concat(t,"/").concat(n,"/external_ids")).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getKeywords",value:function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("".concat(t,"/").concat(n,"/keywords")).then((function(e){var t=e.data;return(null===t||void 0===t?void 0:t.results)?t.results:(null===t||void 0===t?void 0:t.keywords)?t.keywords:void 0}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getReviews",value:function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("".concat(t,"/").concat(n,"/reviews")).then((function(e){return e.data.results}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getImages",value:function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("".concat(t,"/").concat(n,"/images")).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getRecommendations",value:function(){var e=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("".concat(t,"/").concat(n,"/recommendations")).then((function(e){return e.data.results}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}();t.a=new l},126:function(e,t,n){"use strict";n(0);var r=n(411),a=n(1);t.a=function(e){var t=e.error;return Object(a.jsx)("div",{className:"container my-3",children:Object(a.jsx)(r.a,{message:"Error",description:t.message,type:"error",showIcon:!0})})}},146:function(e,t,n){"use strict";t.a=n.p+"static/media/preloader_poster.68a725a1.jpg"},174:function(e,t,n){"use strict";var r,a=n(31),c=(n(0),n(17)),s=n(32),i=n(414),o=n(422),u=n(146),l=n(1),d=i.a.Meta;t.a=Object(s.b)((function(e){var t,n=e.item,r=e.className;return Object(l.jsx)(i.a,{style:{margin:"0 auto"},className:r,hoverable:!0,cover:Object(l.jsx)(c.b,{to:n.first_air_date?"/tv/".concat(n.id):"/movie/".concat(n.id),children:Object(l.jsx)("img",{style:{width:"100%"},alt:"Poster",src:n.poster_path?"https://image.tmdb.org/t/p/w300_and_h450_bestv2/".concat(n.poster_path):u.a})}),children:Object(l.jsx)(d,{title:Object(l.jsx)(c.b,{to:n.first_air_date?"/tv/".concat(n.id):"/movie/".concat(n.id),className:"link text-center",style:{display:"inherit"},children:null!==(t=n.original_title)&&void 0!==t?t:n.name}),description:Object(l.jsxs)("div",{className:"d-flex justify-content-between",children:[(n.release_date||n.first_air_date)&&Object(l.jsx)("span",{children:new Date(n.release_date||n.first_air_date).toLocaleString("default",{month:"short",day:"numeric",year:"numeric"})}),Object(l.jsxs)("span",{className:"d-flex align-items-center",children:[Object(l.jsx)(o.a,{style:{paddingRight:5}})," ",n.vote_average?n.vote_average:"NR"]})]})})})}))(r||(r=Object(a.a)(["\n\tpadding: 0;\n\twidth: 100%;\n\tmin-width: 190px;\n\tmax-width: 300px;\n\theight: auto;\n\n\t@media (min-width: 576px) {\n\t\twidth: 100%;\n\t}\n\n\t@media (min-width: 768px) {\n\t\tmax-width: 200px;\n\t\twidth: 25%;\n\t}\n"])))},413:function(e,t,n){"use strict";n.r(t);var r,a,c=n(0),s=n(421),i=n(31),o=n(172),u=n(41),l=n(124),d=n(32),h=["title","titleId"];function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function b(e,t){var n=e.title,s=e.titleId,i=f(e,h);return c.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 489.04 35.4",ref:t,"aria-labelledby":s},i),r||(r=c.createElement("defs",null,c.createElement("style",null,".cls-1{fill:url(#linear-gradient);}"),c.createElement("linearGradient",{id:"linear-gradient",y1:17.7,x2:489.04,y2:17.7,gradientUnits:"userSpaceOnUse"},c.createElement("stop",{offset:0,stopColor:"#90cea1"}),c.createElement("stop",{offset:.56,stopColor:"#3cbec9"}),c.createElement("stop",{offset:1,stopColor:"#00b3e5"})))),void 0===n?c.createElement("title",{id:s},"Asset 5"):n?c.createElement("title",{id:s},n):null,a||(a=c.createElement("g",{id:"Layer_2","data-name":"Layer 2"},c.createElement("g",{id:"Layer_1-2","data-name":"Layer 1"},c.createElement("path",{className:"cls-1",d:"M293.5,0h8.9l8.75,23.2h.1L320.15,0h8.35L313.9,35.4h-6.25Zm46.6,0h7.8V35.4h-7.8Zm22.2,0h24.05V7.2H370.1v6.6h15.35V21H370.1v7.2h17.15v7.2H362.3Zm55,0H429a33.54,33.54,0,0,1,8.07,1A18.55,18.55,0,0,1,443.75,4a15.1,15.1,0,0,1,4.52,5.53A18.5,18.5,0,0,1,450,17.8a16.91,16.91,0,0,1-1.63,7.58,16.37,16.37,0,0,1-4.37,5.5,19.52,19.52,0,0,1-6.35,3.37A24.59,24.59,0,0,1,430,35.4H417.29Zm7.81,28.2h4a21.57,21.57,0,0,0,5-.55,10.87,10.87,0,0,0,4-1.83,8.69,8.69,0,0,0,2.67-3.34,11.92,11.92,0,0,0,1-5.08,9.87,9.87,0,0,0-1-4.52,9,9,0,0,0-2.62-3.18,11.68,11.68,0,0,0-3.88-1.88,17.43,17.43,0,0,0-4.67-.62h-4.6ZM461.24,0h13.2a34.42,34.42,0,0,1,4.63.32,12.9,12.9,0,0,1,4.17,1.3,7.88,7.88,0,0,1,3,2.73A8.34,8.34,0,0,1,487.39,9a7.42,7.42,0,0,1-1.67,5,9.28,9.28,0,0,1-4.43,2.82v.1a10,10,0,0,1,3.18,1,8.38,8.38,0,0,1,2.45,1.85,7.79,7.79,0,0,1,1.57,2.62,9.16,9.16,0,0,1,.55,3.2,8.52,8.52,0,0,1-1.2,4.68,9.42,9.42,0,0,1-3.1,3,13.38,13.38,0,0,1-4.27,1.65,23.11,23.11,0,0,1-4.73.5h-14.5ZM469,14.15h5.65a8.16,8.16,0,0,0,1.78-.2A4.78,4.78,0,0,0,478,13.3a3.34,3.34,0,0,0,1.13-1.2,3.63,3.63,0,0,0,.42-1.8,3.22,3.22,0,0,0-.47-1.82,3.33,3.33,0,0,0-1.23-1.13,5.77,5.77,0,0,0-1.7-.58,10.79,10.79,0,0,0-1.85-.17H469Zm0,14.65h7a8.91,8.91,0,0,0,1.83-.2,4.78,4.78,0,0,0,1.67-.7,4,4,0,0,0,1.23-1.3,3.71,3.71,0,0,0,.47-2,3.13,3.13,0,0,0-.62-2A4,4,0,0,0,479,21.45,7.83,7.83,0,0,0,477,20.9a15.12,15.12,0,0,0-2.05-.15H469Zm-265,6.53H271a17.66,17.66,0,0,0,17.66-17.66h0A17.67,17.67,0,0,0,271,0H204.06A17.67,17.67,0,0,0,186.4,17.67h0A17.66,17.66,0,0,0,204.06,35.33ZM10.1,6.9H0V0H28V6.9H17.9V35.4H10.1ZM39,0h7.8V13.2H61.9V0h7.8V35.4H61.9V20.1H46.75V35.4H39ZM80.2,0h24V7.2H88v6.6h15.35V21H88v7.2h17.15v7.2h-25Zm55,0H147l8.15,23.1h.1L163.45,0H175.2V35.4h-7.8V8.25h-.1L158,35.4h-5.95l-9-27.15H143V35.4h-7.8Z"})))))}var j,v,m,g=c.forwardRef(b),x=(n.p,n(1)),w=Object(d.b)((function(e){var t=e.className,n=Object(c.useState)(null),r=Object(u.a)(n,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){l.a.getPopular("movie").then((function(e){var t,n=[],r=Object(o.a)(e);try{for(r.s();!(t=r.n()).done;){var a=t.value;a.backdrop_path&&n.push(a.backdrop_path)}}catch(c){r.e(c)}finally{r.f()}s(n[Math.floor(Math.random()*n.length)])})).catch((function(e){console.log(e)}))}),[]),Object(x.jsxs)("header",{className:t,children:[Object(x.jsxs)(O,{children:[Object(x.jsx)(g,{className:"mb-5"}),Object(x.jsx)("h1",{children:"Welcome."}),Object(x.jsx)("h2",{children:"Millions of movies, TV shows and people to discover. Explore now."})]}),Object(x.jsx)(y,{backdrop:a})]})}))(j||(j=Object(i.a)(["\n\twidth: 100%;\n\tposition: relative;\n"]))),O=d.b.div.attrs({className:"container"})(v||(v=Object(i.a)(["\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tz-index: 1000;\n\tpadding: 0 30px;\n\tcolor: white;\n\n\th1,\n\th2 {\n\t\tcolor: white;\n\t}\n\n\th1 {\n\t\tfont-size: 3rem;\n\t}\n"]))),y=d.b.div(m||(m=Object(i.a)(["\n\twidth: 100%;\n\theight: 100vh;\n\tposition: relative;\n\n\t@media (min-width: 576px) {\n\t\theight: 600px;\n\t}\n\n\t",";\n\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tbackground-position: center;\n\n\t&::before {\n\t\tcontent: '';\n\t\tdisplay: block;\n\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\n\t\twidth: 100%;\n\t\theight: 100%;\n\n\t\tbackground-color: rgba(3, 37, 65, 0.8);\n\t\tmix-blend-mode: darken;\n\t}\n\n\t&::after {\n\t\tcontent: '';\n\t\tdisplay: block;\n\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\n\t\twidth: 100%;\n\t\theight: 100%;\n\n\t\tmix-blend-mode: lighten;\n\t\tbackground-color: rgb(3, 37, 65);\n\t}\n"])),(function(e){var t=e.backdrop;return t&&"background-image: url(https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces".concat(t,")")})),k=n(388),_=n(419),V=n(406),H=n(392),E=n(393),N=n(416),P=n(394),Z=n(174),A=function(e){var t=e.items;return V.a.use([H.a,E.a]),Object(x.jsx)(N.a,{preloadImages:!1,spaceBetween:10,pagination:{dynamicBullets:!0},loop:!0,observer:!0,observeParents:!0,breakpoints:{0:{slidesPerView:1},576:{slidesPerView:2},768:{slidesPerView:3},992:{slidesPerView:4},1200:{slidesPerView:5}},children:t&&t.map((function(e){return Object(x.jsx)(P.a,{children:Object(x.jsx)(Z.a,{item:e})},Object(_.a)())}))})},M=k.a.TabPane,T=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),s=Object(u.a)(a,2),i=s[0],o=s[1];return Object(c.useEffect)((function(){l.a.getPopular("movie").then((function(e){r(e)})),l.a.getPopular("tv").then((function(e){o(e)}))}),[]),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h2",{style:{fontSize:"1.5em",fontWeight:600},children:"What's Popular"}),Object(x.jsxs)(k.a,{defaultActiveKey:"1",children:[Object(x.jsx)(M,{tab:"In Theaters",children:Object(x.jsx)(A,{items:n})},"1"),Object(x.jsx)(M,{tab:"On TV",children:Object(x.jsx)(A,{items:i})},"2")]})]})},L=n(112),S=n(77),I=n(133),z=n.n(I),R=n(14),C=n(134);var W,K=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}return e},B=n(126),D=n.p+"static/media/trending-bg.c5b8afb4.svg",U=k.a.TabPane,G=Object(d.b)((function(e){var t=e.className,n=function(){var e=arguments,t=Object(c.useState)({day:[],week:[],errors:{}}),n=Object(u.a)(t,2),r=n[0],a=n[1],s=Object(c.useCallback)(Object(C.a)(z.a.mark((function t(){var n,r,a,c;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n={day:[],week:[],errors:{day:!1,week:!1}},r=Object(o.a)(e),t.prev=2,r.s();case 4:if((a=r.n()).done){t.next=13;break}if(!(c=a.value)){t.next=11;break}return t.next=9,l.a.getTrending(c,"day").then((function(e){var t;return(t=n.day).push.apply(t,Object(R.a)(e))})).catch((function(e){return n.errors.day=e}));case 9:return t.next=11,l.a.getTrending(c,"week").then((function(e){var t;return(t=n.week).push.apply(t,Object(R.a)(e))})).catch((function(e){return n.errors.week=e}));case 11:t.next=4;break;case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(2),r.e(t.t0);case 18:return t.prev=18,r.f(),t.finish(18);case 21:return t.abrupt("return",n);case 22:case"end":return t.stop()}}),t,null,[[2,15,18,21]])}))),[]);return Object(c.useEffect)((function(){s().then((function(e){return a(e)}))}),[s]),r}("movie","tv");return n.errors.day&&n.errors.week?null:n.day.length&&n.week.length?Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h2",{style:{fontSize:"1.5em",fontWeight:600},children:"Trending"}),Object(x.jsxs)(k.a,{defaultActiveKey:"1",children:[Object(x.jsx)(U,{tab:"Today",className:t,children:n.errors.day?Object(x.jsx)(B.a,{error:n.errors.day}):!!n.day.length&&Object(x.jsx)(A,{items:K(n.day).slice(0,20)})},"1"),Object(x.jsx)(U,{tab:"This Week",className:t,children:n.errors.week?Object(x.jsx)(B.a,{error:n.errors.week}):!!n.week.length&&Object(x.jsx)(A,{items:K(n.week).slice(0,20)})},"2")]})]}):Object(x.jsx)("div",{className:"container d-flex justify-content-center",children:Object(x.jsx)(L.a,{indicator:Object(x.jsx)(S.a,{style:{fontsize:50}})})})}))(W||(W=Object(i.a)(["\n\tbackground-image: url(",");\n\tbackground-repeat: no-repeat;\n\tbackground-position: bottom;\n"])),D);t.default=function(){return Object(x.jsxs)(s.b,{direction:"vertical",size:30,style:{width:"100%"},className:"mb-5",children:[Object(x.jsx)(w,{}),Object(x.jsx)(T,{}),Object(x.jsx)(G,{})]})}}}]);
//# sourceMappingURL=10.2b5b642b.chunk.js.map