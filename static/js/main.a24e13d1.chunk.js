(this["webpackJsonpreddit-save-saver"]=this["webpackJsonpreddit-save-saver"]||[]).push([[0],{107:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),o=t.n(c),l=t(163),s=t(165),i=t(11),m=t(62),u=t(164),d=t(167),p=t(154),E=t(155),f=t(66),h=t(147),v=t(169),g=t(166),b=t(153),x=t(152),y=t(151);var S=function(e){var a=e.setCreds,t=r.a.useState(!1),n=Object(i.a)(t,2),c=n[0],o=n[1],l=r.a.useState(""),s=Object(i.a)(l,2),m=s[0],u=s[1],d=r.a.useState(""),p=Object(i.a)(d,2),E=p[0],f=p[1],S=function(e){e.preventDefault(),m&&E&&(a({username:m,password:E}),w())},w=function(){o(!1)};return r.a.createElement("div",null,r.a.createElement(h.a,{onClick:function(){o(!0)}},"Login"),r.a.createElement(v.a,{open:c,onClose:w,"aria-labelledby":"form-dialog-title"},r.a.createElement(y.a,{id:"form-dialog-title"},"Login"),r.a.createElement(x.a,null,r.a.createElement("form",{onSubmit:S},r.a.createElement(g.a,{autoFocus:!0,margin:"dense",id:"username",label:"Username",className:"input",type:"text",fullWidth:!0,value:m,onChange:function(e){return u(e.target.value)}}),r.a.createElement(g.a,{margin:"dense",id:"password",label:"Password",className:"input",type:"password",fullWidth:!0,value:E,onChange:function(e){return f(e.target.value)}}))),r.a.createElement(b.a,null,r.a.createElement(h.a,{onClick:w},"Cancel"),r.a.createElement(h.a,{onClick:S},"Set"))))},w=Object(m.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,fontFamily:"Space Mono",fontWeight:"700",fontStyle:"italic"}}}));function N(e){var a=e.setCreds,t=w();return r.a.createElement("div",{className:t.root},r.a.createElement(p.a,{position:"static"},r.a.createElement(E.a,null,r.a.createElement(f.a,{variant:"h6",className:t.title},"reddit-save-saver"),r.a.createElement(S,{setCreds:a}))))}var O=t(18),j=t.n(O),k=t(157),C=t(158),B=t(156),z=t(170),M=t(88),W=Object(m.a)({popover:{pointerEvents:"none"},title:{fontSize:14}});var _=function(e){var a=e.data,t=r.a.useState(null),n=Object(i.a)(t,2),c=n[0],o=n[1],l=function(){o(null)},s=Boolean(c),m=W();return r.a.createElement(B.a,{container:!0,spacing:1},r.a.createElement(B.a,{item:!0,xs:4},r.a.createElement(k.a,{className:m.card},r.a.createElement(C.a,null,r.a.createElement(f.a,{className:m.title,color:"textSecondary",gutterBottom:!0},"Welcome"),r.a.createElement(f.a,{variant:"h5",component:"h2"},a.username)))),r.a.createElement(B.a,{item:!0,xs:4},r.a.createElement(k.a,{className:m.card},r.a.createElement(C.a,null,r.a.createElement(f.a,{className:m.title,color:"textSecondary",gutterBottom:!0},"Number of Posts"),r.a.createElement(f.a,{variant:"h5",component:"h2"},a.number_of_posts)))),r.a.createElement(B.a,{item:!0,xs:4,onMouseEnter:function(e){o(e.currentTarget)},onMouseLeave:l},r.a.createElement(k.a,{className:m.card},r.a.createElement(C.a,null,r.a.createElement(f.a,{className:m.title,color:"textSecondary",gutterBottom:!0},"Last Update"),r.a.createElement(f.a,{variant:"h6",component:"h2"},M(1e3*a.last_dump).fromNow()))),r.a.createElement(z.a,{id:"mouse-over-popover",className:m.popover,classes:{paper:m.paper},open:s,anchorEl:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:l,disableRestoreFocus:!0},r.a.createElement(f.a,null,M(1e3*a.last_dump).format("dddd, MMMM Do YYYY, h:mm:ss a")))))},D=(t(28),t(160)),L=t(171),Y=t(159),F=Object(m.a)((function(e){return{card:{display:"flex"},large:{width:"100%",height:"100%"}}})),J=t(28);function I(e){var a=e.post,t=F();return r.a.createElement("div",null,r.a.createElement(k.a,{className:t.card},r.a.createElement(B.a,{container:!0,spacing:0},r.a.createElement(B.a,{item:!0,xs:9},r.a.createElement(D.a,{href:"https://reddit.com"+a.permalink},r.a.createElement(C.a,{className:t.content},r.a.createElement(f.a,{component:"h6",variant:"h6"},a.title),r.a.createElement(f.a,{variant:"subtitle1",color:"textSecondary"},a.author),r.a.createElement(f.a,{variant:"subtitle2",color:"textSecondary"},a.subreddit," |"," ",new Date(1e3*a.created_utc).toDateString())))),r.a.createElement(B.a,{align:"right",item:!0,xs:3},r.a.createElement(L.a,{variant:"square",className:t.large,src:a.thumbnail})))),r.a.createElement("br",null))}var P=function(e){var a=e.creds,t=r.a.useState([]),n=Object(i.a)(t,2),c=n[0],o=n[1],l=r.a.useState(0),s=Object(i.a)(l,2),m=s[0],u=s[1],d=r.a.useState(!0),p=Object(i.a)(d,2),E=p[0],f=p[1];function v(e){var a=c;e.forEach((function(e){a.push(e)})),console.log("Setting Posts - ",a),o([]),o(a)}return r.a.useEffect((function(){if(""!==a.username){console.log("In useEffect -",a),f(!0);j.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.awrap(J("https://archit.xyz/rss/api/saves?skip="+m+"&limit=10",{headers:{Authorization:"Basic "+btoa(a.username+":"+a.password)}}));case 2:v(e.sent.data.saved_posts),f(!1);case 5:case"end":return e.stop()}}))}}),[a,m]),E?r.a.createElement("center",null,r.a.createElement(Y.a,{color:"secondary"})):r.a.createElement("div",null,c.map((function(e,a){return r.a.createElement(I,{post:e,key:e.id})})),r.a.createElement("center",null,r.a.createElement(h.a,{variant:"contained",onClick:function(){return u(m+10)}},"Load more")))},T=t(161),q=t(28);var A=function(e){var a=e.creds,t=r.a.useState({}),n=Object(i.a)(t,2),c=n[0],o=n[1],l=r.a.useState(""),s=Object(i.a)(l,2),m=s[0],u=s[1],d=r.a.useState(!0),p=Object(i.a)(d,2),E=p[0],h=p[1];return r.a.useEffect((function(){if(""!==a.username){(function(){var e;return j.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.awrap(q("https://archit.xyz/rss/api/debug",{headers:{Authorization:"Basic "+btoa(a.username+":"+a.password)}}));case 3:e=t.sent,o(e.data),h(!1),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(0),h(!1),console.log("Caught Error! - ",t.t0),u(t.t0.message);case 13:case"end":return t.stop()}}),null,null,[[0,8]])})().catch(console.error)}}),[a]),""===a.username?r.a.createElement("div",null,r.a.createElement(f.a,{variant:"h2",component:"h1",gutterBottom:!0},"Namaskar Mandali"),r.a.createElement(f.a,{variant:"h5",component:"h2",gutterBottom:!0},"You are not currently logged in.")):E?r.a.createElement("div",null,r.a.createElement(T.a,{color:"secondary"})):""!==m?r.a.createElement("div",null,r.a.createElement(f.a,{variant:"h5",component:"h2",gutterBottom:!0},m,"!")):r.a.createElement("div",null,r.a.createElement(_,{data:c}),r.a.createElement("br",null),r.a.createElement(P,{creds:a}))},G=t(162),R=t(28);var U=function(){var e=r.a.useState({}),a=Object(i.a)(e,2),t=a[0],n=a[1];return r.a.useEffect((function(){!function(){var e;j.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,j.a.awrap(R("https://archit.xyz/rss/api"));case 2:e=a.sent,n(e.data);case 4:case"end":return a.stop()}}))}()}),[]),r.a.createElement("div",null,r.a.createElement(B.a,{container:!0,spacing:3},r.a.createElement(B.a,{item:!0,xs:6},r.a.createElement(f.a,{variant:"body2",color:"textSecondary",align:"center"},r.a.createElement(G.a,{color:"inherit",href:"https://arkits.github.io/"},"arkits.github.io")," // ",r.a.createElement(G.a,{color:"inherit",href:"https://archit.xyz/"},"archit.xyz"))),r.a.createElement(B.a,{item:!0,xs:6,align:"right"},t.name,"/",t.version)))};var H=Object(m.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginBottom:e.spacing(2)},content:{marginTop:e.spacing(8)},footer:{padding:e.spacing(3,2),marginTop:"auto",backgroundColor:"dark"===e.palette.type?e.palette.grey[800]:e.palette.grey[200]}}})),K=function(){var e=H(),a=function(e,a){var t=r.a.useState((function(){try{var t=window.localStorage.getItem(e);return t?JSON.parse(t):a}catch(n){return console.log(n),a}})),n=Object(i.a)(t,2),c=n[0],o=n[1];return[c,function(a){try{var t=a instanceof Function?a(c):a;o(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(n){console.log(n)}}]}("creds",{username:"",password:""}),t=Object(i.a)(a,2),n=t[0],c=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(l.a,null),r.a.createElement(d.a,{component:"main",className:e.main},r.a.createElement(N,{setCreds:c}),r.a.createElement(u.a,{className:e.content,maxWidth:"sm"},r.a.createElement(A,{creds:n}))),r.a.createElement("footer",{className:e.footer},r.a.createElement(u.a,{maxWidth:"sm"},r.a.createElement(U,null))))},Q=t(63),V=Object(Q.a)({palette:{type:"dark"}});o.a.render(r.a.createElement(s.a,{theme:V},r.a.createElement(l.a,null),r.a.createElement(K,null)),document.querySelector("#root"))},79:function(e,a,t){e.exports=t(107)}},[[79,1,2]]]);
//# sourceMappingURL=main.a24e13d1.chunk.js.map