(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{155:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),i=a.n(l),o=a(22),m=a(36),s={username:"",token:"",value:""},c=function(e){return{type:"SET_TOKEN",data:e}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NAME":return Object(m.a)({},e,{username:t.data.user.username});case"SET_TOKEN":return Object(m.a)({},e,{token:t.data.user.token});case"SET_VALUE":return Object(m.a)({},e,{value:t.data});default:return e}},d=a(66),p=Object(o.c)({mainPage:u}),b=Object(o.d)(p,Object(o.a)(d.a));window.store=b;var E=b,h=(a(86),a(87),a(17)),f=a(23),v=a.n(f),g=a(30),y=a(35),k=a(12),w=a(34),x=a(156),S=a(70).create({baseURL:"http://conduit.productionready.io"}),_=a(3),O=function(e){var t=Object(n.useState)(""),a=Object(y.a)(t,2),l=a[0],i=a[1];console.log(l.data);return 200===l.status&&function(t){e.setTokenAC(t)}(l.data),200===l.status?r.a.createElement(_.a,{to:"/forum"}):r.a.createElement("div",null,r.a.createElement(k.b,{to:"/forum/LoginPage"}," Login page"),r.a.createElement(w.a,{initialValues:{email:"1@mail.ru",name:"2",password:""},onSubmit:function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,500)}));case 2:(a={user:{email:t.email,password:t.password,username:t.name}},S.post("/api/users",a)).then((function(e){return i(e)})).catch((function(e){return i(e.response.data.errors)}));case 3:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}()},(function(e){var t=e.values,a=e.touched,n=e.errors,i=e.dirty,o=e.isSubmitting,m=e.handleChange,s=e.handleBlur,c=e.handleSubmit,u=e.handleReset;return r.a.createElement("form",{onSubmit:c},r.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"Email"),r.a.createElement(x.a,{id:"email",placeholder:"Enter your email",type:"text",value:t.email,onChange:m,onBlur:s,className:n.email&&a.email?"text-input error":"text-input"}),n.email&&a.email&&r.a.createElement("div",{className:"input-feedback"},n.email),void 0!==l.email&&r.a.createElement("div",null,"Email ".concat(String(l.email))),r.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"Name"),r.a.createElement(x.a,{id:"name",placeholder:"Enter your name",type:"text",value:t.email2,onChange:m,onBlur:s,className:n.email2&&a.email2?"text-input error":"text-input"}),n.email2&&a.email2&&r.a.createElement("div",{className:"input-feedback"},n.email2),void 0!==l.username&&r.a.createElement("div",null,"Name ".concat(String(l.username))),r.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"Password"),r.a.createElement(x.a,{id:"password",placeholder:"Enter your name",type:"text",value:t.email2,onChange:m,onBlur:s,className:n.email2&&a.email2?"text-input error":"text-input"}),n.email2&&a.email2&&r.a.createElement("div",{className:"input-feedback"},n.email2),void 0!==l.password&&r.a.createElement("div",null,"Password ".concat(String(l.password))),r.a.createElement("button",{type:"button",className:"outline",onClick:u,disabled:!i||o},"Reset"),r.a.createElement("button",{type:"submit",disabled:o},"Submit"))})))},j=Object(h.b)(null,{setTokenAC:c})(O),N=function(e){var t=Object(n.useState)(""),a=Object(y.a)(t,2),l=a[0],i=a[1];return l instanceof Object&&function(t){e.setTokenAC(t)}(l.data),200===l.status?r.a.createElement(_.a,{to:"/forum"}):r.a.createElement("div",null,r.a.createElement(k.b,{to:"/forum/Registration"}," Registration page"),r.a.createElement(w.a,{initialValues:{email:"1",password:""},onSubmit:function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,500)}));case 2:(a={user:{email:t.email,password:t.password}},S.post("/api/users/login",a)).then((function(e){return i(e)})).catch((function(e){return i(e.response.data.errors["email or password"])}));case 3:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}()},(function(e){var t=e.values,a=e.touched,n=e.errors,i=e.dirty,o=e.isSubmitting,m=e.handleChange,s=e.handleBlur,c=e.handleSubmit,u=e.handleReset;return r.a.createElement("form",{onSubmit:c},422===l&&r.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"\u041d\u0435\u0432\u0435\u0440\u043d\u043e\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"),r.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"Email"),r.a.createElement(x.a,{id:"email",placeholder:"Enter your email",type:"text",value:t.email,onChange:m,onBlur:s,className:n.email&&a.email?"text-input error":"text-input"}),n.email&&a.email&&r.a.createElement("div",{className:"input-feedback"},n.email),r.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"password"),r.a.createElement(x.a,{id:"password",placeholder:"Enter your name",type:"password",value:t.email2,onChange:m,onBlur:s,className:n.email2&&a.email2?"text-input error":"text-input"}),n.email2&&a.email2&&r.a.createElement("div",{className:"input-feedback"},n.email2),l.length>0&&r.a.createElement("div",null,"Email or Password ".concat(String(l))),r.a.createElement("button",{type:"button",className:"outline",onClick:u,disabled:!i||o},"Reset"),r.a.createElement("button",{type:"submit",disabled:o},"Submit"))})))},A=Object(h.b)(null,{setTokenAC:c})(N),C=function(e){if(console.log(e),0===e.token.length)return r.a.createElement(_.a,{to:"/forum/LoginPage"});return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.setTokenAC({user:{token:""}})}}," \u0412\u044b\u0439\u0442\u0438 "))},T=Object(h.b)((function(e){return{username:e.mainPage.username,token:e.mainPage.token}}),{setTokenAC:c})(C),P=function(){return r.a.createElement(k.a,null,r.a.createElement(_.b,{path:"/forum/LoginPage",component:A}),r.a.createElement(_.b,{path:"/forum/Registration",component:j}),r.a.createElement(_.b,{exact:!0,path:"/forum/",component:T}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k.a,null,r.a.createElement(h.a,{store:E},r.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},81:function(e,t,a){e.exports=a(155)},86:function(e,t,a){},87:function(e,t,a){e.exports={body:"App_body__3Aexq",ul:"App_ul__zXSjm",ticketsArea:"App_ticketsArea__lzTW3",wrapper:"App_wrapper__2HLsp",img:"App_img__3MMz6"}}},[[81,1,2]]]);
//# sourceMappingURL=main.9daa1220.chunk.js.map