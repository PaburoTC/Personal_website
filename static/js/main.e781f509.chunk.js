(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n(2),i=n.n(s),o=n(12),r=n.n(o),a=(n(20),n(21),n(14)),l=n(13),u=n.n(l),j=(n(40),function(t){return Object(c.jsxs)("div",{className:"post",onClick:function(){return window.open(t.url,"")},children:[Object(c.jsxs)("div",{className:"post-body",children:[Object(c.jsx)("h3",{className:"post-title",children:t.title}),Object(c.jsx)("div",{className:"post-content",children:t.content})]}),Object(c.jsx)("img",{className:"post-image",src:t.img,alt:t.title})]})}),d=function(){var t=Object(s.useState)([]),e=Object(a.a)(t,2),n=e[0],i=e[1];return Object(s.useEffect)((function(){u.a.get("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40pablotcampos25").then((function(t){return i(t.data.items)})).catch(console.error)}),[]),Object(c.jsxs)("div",{id:"medium-posts",children:[Object(c.jsx)("h2",{children:"Medium Posts"}),n.map((function(t){return Object(c.jsx)(j,{title:t.title,img:t.thumbnail,content:"",url:t.link},t.title)}))]})};var b=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("header",{className:"App-header",children:Object(c.jsx)(d,{})})})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),c(t),s(t),i(t),o(t)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),m()}},[[41,1,2]]]);
//# sourceMappingURL=main.e781f509.chunk.js.map