(this["webpackJsonpreddit-save-saver"]=this["webpackJsonpreddit-save-saver"]||[]).push([[0],{107:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),o=t.n(c),l=t(163),s=t(165),i=t(10),m=t(64),u=t(164),d=t(167),p=t(154),E=t(155),v=t(68),h=t(147),f=t(169),g=t(166),b=t(153),x=t(152),y=t(151);var S=function(e){var a=e.setCreds,t=r.a.useState(!1),n=Object(i.a)(t,2),c=n[0],o=n[1],l=r.a.useState(""),s=Object(i.a)(l,2),m=s[0],u=s[1],d=r.a.useState(""),p=Object(i.a)(d,2),E=p[0],v=p[1],S=function(e){e.preventDefault(),m&&E&&(a({username:m,password:E}),w())},w=function(){o(!1)};return r.a.createElement("div",null,r.a.createElement(h.a,{onClick:function(){o(!0)}},"Login"),r.a.createElement(f.a,{open:c,onClose:w,"aria-labelledby":"form-dialog-title"},r.a.createElement(y.a,{id:"form-dialog-title"},"Login"),r.a.createElement(x.a,null,r.a.createElement("form",{onSubmit:S},r.a.createElement(g.a,{variant:"outlined",autoFocus:!0,margin:"dense",id:"username",label:"Username",type:"text",fullWidth:!0,value:m,className:"input",onChange:function(e){return u(e.target.value)}}),r.a.createElement(g.a,{variant:"outlined",margin:"dense",id:"password",label:"Password",className:"input",type:"password",fullWidth:!0,value:E,onChange:function(e){return v(e.target.value)}}))),r.a.createElement(b.a,null,r.a.createElement(h.a,{onClick:w},"Cancel"),r.a.createElement(h.a,{onClick:S},"Set"))))},w=Object(m.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,fontFamily:"Space Mono",fontWeight:"700",fontStyle:"italic"}}}));function O(e){var a=e.setCreds,t=w();return r.a.createElement("div",{className:t.root},r.a.createElement(p.a,{position:"static"},r.a.createElement(E.a,null,r.a.createElement(v.a,{variant:"h6",className:t.title},"reddit-save-saver"),r.a.createElement(S,{setCreds:a}))))}var N=t(16),k=t.n(N),j=t(157),C=t(158),z=t(156),B=t(170),_=t(88),M=Object(m.a)({popover:{pointerEvents:"none"},title:{fontSize:14}});var W=function(e){var a=e.data,t=r.a.useState(null),n=Object(i.a)(t,2),c=n[0],o=n[1],l=function(){o(null)},s=Boolean(c),m=M();return r.a.createElement(z.a,{container:!0,spacing:1},r.a.createElement(z.a,{item:!0,xs:4},r.a.createElement(j.a,{className:m.card},r.a.createElement(C.a,null,r.a.createElement(v.a,{className:m.title,color:"textSecondary",gutterBottom:!0},"Welcome"),r.a.createElement(v.a,{variant:"h5",component:"h2"},a.username)))),r.a.createElement(z.a,{item:!0,xs:4},r.a.createElement(j.a,{className:m.card},r.a.createElement(C.a,null,r.a.createElement(v.a,{className:m.title,color:"textSecondary",gutterBottom:!0},"Number of Posts"),r.a.createElement(v.a,{variant:"h5",component:"h2"},a.number_of_posts)))),r.a.createElement(z.a,{item:!0,xs:4,onMouseEnter:function(e){o(e.currentTarget)},onMouseLeave:l},r.a.createElement(j.a,{className:m.card},r.a.createElement(C.a,null,r.a.createElement(v.a,{className:m.title,color:"textSecondary",gutterBottom:!0},"Last Update"),r.a.createElement(v.a,{variant:"h6",component:"h2"},_(1e3*a.last_dump).fromNow()))),r.a.createElement(B.a,{id:"mouse-over-popover",className:m.popover,classes:{paper:m.paper},open:s,anchorEl:c,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:l,disableRestoreFocus:!0},r.a.createElement(v.a,null,_(1e3*a.last_dump).format("dddd, MMMM Do YYYY, h:mm:ss a")))))},L=t(160),D=t(159),Y=t(171),F=Object(m.a)((function(e){return{card:{display:"flex"},large:{width:"100%",height:"100%"}}}));var I=function(e){var a=e.post,t=F();return r.a.createElement("div",null,r.a.createElement(j.a,{className:t.card},r.a.createElement(D.a,{target:"_blank",href:"https://reddit.com"+a.permalink},r.a.createElement(z.a,{container:!0,spacing:0},r.a.createElement(z.a,{item:!0,xs:9},r.a.createElement(C.a,{className:t.content},r.a.createElement(v.a,{component:"h6",variant:"h6"},a.title),r.a.createElement(v.a,{variant:"subtitle1",color:"textSecondary"},a.author),r.a.createElement(v.a,{variant:"subtitle2",color:"textSecondary"},a.subreddit," |"," ",new Date(1e3*a.created_utc).toDateString()))),r.a.createElement(z.a,{align:"right",item:!0,xs:3},r.a.createElement(Y.a,{variant:"square",className:t.large,src:a.thumbnail}))))),r.a.createElement("br",null))},J=(t(28),t(28));var P=function(e){var a=e.creds,t=r.a.useState([]),n=Object(i.a)(t,2),c=n[0],o=n[1],l=r.a.useState(0),s=Object(i.a)(l,2),m=s[0],u=s[1],d=r.a.useState(!0),p=Object(i.a)(d,2),E=p[0],f=p[1],g=r.a.useState("https://archit.xyz/rss/api/saves"),b=Object(i.a)(g,1)[0],x=r.a.useState(""),y=Object(i.a)(x,2),S=y[0],w=y[1];r.a.useEffect((function(){""!==a.username&&O()}),[a,m]);var O=function(){var e;return k.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("In fetchPosts - ",a),f(!0),t.prev=2,t.next=5,k.a.awrap(J(b+"?skip="+m+"&limit=10",{headers:{Authorization:"Basic "+btoa(a.username+":"+a.password)}}));case 5:e=t.sent,console.log("Setting posts - ",e.data.saved_posts),n=e.data.saved_posts,o(n),f(!1),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(2),console.log("Caught Error - ",t.t0),f(!1),w(t.t0.message);case 16:case"end":return t.stop()}var n}),null,null,[[2,11]])};return E?r.a.createElement("center",null,r.a.createElement(L.a,{color:"secondary"})):S?r.a.createElement("div",null,r.a.createElement(j.a,null,r.a.createElement(C.a,null,r.a.createElement("div",{align:"center"},r.a.createElement(v.a,{color:"textSecondary",gutterBottom:!0},"Whoops!"),r.a.createElement(v.a,{variant:"h5",component:"h2"},S))))):r.a.createElement("div",null,r.a.createElement(j.a,null,r.a.createElement(C.a,null,r.a.createElement("div",{align:"center"},r.a.createElement(h.a,{variant:"contained",onClick:function(){O(!0)}},"Latest")," ",r.a.createElement(h.a,{variant:"contained",onClick:function(){var e;return k.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("In fetchRandomPosts - ",a),"https://archit.xyz/rss/api/saves/random",f(!0),t.prev=3,t.next=6,k.a.awrap(J("https://archit.xyz/rss/api/saves/random",{headers:{Authorization:"Basic "+btoa(a.username+":"+a.password)}}));case 6:e=t.sent,console.log("Setting random posts - ",e.data.saved_posts),o(e.data.saved_posts),f(!1),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(3),console.log("Caught Error - ",t.t0),f(!1),w(t.t0.message);case 17:case"end":return t.stop()}}),null,null,[[3,12]])}},"Random")))),r.a.createElement("br",null),c.map((function(e,a){return r.a.createElement(I,{post:e,key:e.id})})),r.a.createElement("center",null,r.a.createElement(h.a,{variant:"contained",onClick:function(){return u(m+10)}},"Load more")))},R=t(161),A=t(28);var T=function(e){var a=e.creds,t=r.a.useState({}),n=Object(i.a)(t,2),c=n[0],o=n[1],l=r.a.useState(""),s=Object(i.a)(l,2),m=s[0],u=s[1],d=r.a.useState(!0),p=Object(i.a)(d,2),E=p[0],h=p[1];return r.a.useEffect((function(){if(""!==a.username){(function(){var e;return k.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k.a.awrap(A("https://archit.xyz/rss/api/debug",{headers:{Authorization:"Basic "+btoa(a.username+":"+a.password)}}));case 3:e=t.sent,o(e.data),h(!1),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(0),h(!1),console.log("Caught Error! - ",t.t0),u(t.t0.message);case 13:case"end":return t.stop()}}),null,null,[[0,8]])})().catch(console.error)}}),[a]),""===a.username?r.a.createElement("div",null,r.a.createElement(v.a,{variant:"h2",component:"h1",gutterBottom:!0},"Namaskar Mandali"),r.a.createElement(v.a,{variant:"h5",component:"h2",gutterBottom:!0},"You are not currently logged in.")):E?r.a.createElement("div",null,r.a.createElement(R.a,{color:"secondary"})):""!==m?r.a.createElement("div",null,r.a.createElement(v.a,{variant:"h5",component:"h2",gutterBottom:!0},m,"!")):r.a.createElement("div",null,r.a.createElement(W,{data:c}),r.a.createElement("br",null),r.a.createElement(P,{creds:a}))},q=t(162),G=t(28);var U=function(){var e=r.a.useState({}),a=Object(i.a)(e,2),t=a[0],n=a[1];return r.a.useEffect((function(){!function(){var e;k.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,k.a.awrap(G("https://archit.xyz/rss/api"));case 2:e=a.sent,n(e.data);case 4:case"end":return a.stop()}}))}()}),[]),r.a.createElement("div",null,r.a.createElement(z.a,{container:!0,spacing:3},r.a.createElement(z.a,{item:!0,xs:6},r.a.createElement(v.a,{variant:"body2",color:"textSecondary",align:"center"},r.a.createElement(q.a,{color:"inherit",href:"https://arkits.github.io/"},"arkits.github.io")," // ",r.a.createElement(q.a,{color:"inherit",href:"https://archit.xyz/"},"archit.xyz"))),r.a.createElement(z.a,{item:!0,xs:6,align:"right"},t.name,"/",t.version)))};var H=Object(m.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},main:{marginBottom:e.spacing(2)},content:{marginTop:e.spacing(8)},footer:{padding:e.spacing(3,2),marginTop:"auto",backgroundColor:"dark"===e.palette.type?e.palette.grey[800]:e.palette.grey[200]}}})),K=function(){var e=H(),a=function(e,a){var t=r.a.useState((function(){try{var t=window.localStorage.getItem(e);return t?JSON.parse(t):a}catch(n){return console.log(n),a}})),n=Object(i.a)(t,2),c=n[0],o=n[1];return[c,function(a){try{var t=a instanceof Function?a(c):a;o(t),window.localStorage.setItem(e,JSON.stringify(t))}catch(n){console.log(n)}}]}("creds",{username:"",password:""}),t=Object(i.a)(a,2),n=t[0],c=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(l.a,null),r.a.createElement(d.a,{component:"main",className:e.main},r.a.createElement(O,{setCreds:c}),r.a.createElement(u.a,{className:e.content,maxWidth:"sm"},r.a.createElement(T,{creds:n}))),r.a.createElement("footer",{className:e.footer},r.a.createElement(u.a,{maxWidth:"sm"},r.a.createElement(U,null))))},Q=t(65),V=Object(Q.a)({palette:{type:"dark"}});o.a.render(r.a.createElement(s.a,{theme:V},r.a.createElement(l.a,null),r.a.createElement(K,null)),document.querySelector("#root"))},79:function(e,a,t){e.exports=t(107)}},[[79,1,2]]]);
//# sourceMappingURL=main.32a9c28b.chunk.js.map