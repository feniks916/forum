(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{124:function(e,t,a){e.exports={wrapper:"main_wrapper__36HIk"}},128:function(e,t,a){e.exports=a(202)},150:function(e,t,a){},151:function(e,t,a){e.exports={body:"App_body__3Aexq",ul:"App_ul__zXSjm",ticketsArea:"App_ticketsArea__lzTW3",wrapper:"App_wrapper__2HLsp",img:"App_img__3MMz6"}},20:function(e,t,a){e.exports={wrapper:"registration_wrapper__3w-sm",form:"registration_form__1d1UH",input:"registration_input__3F6qd",buttonsArea:"registration_buttonsArea__18T8o",errors:"registration_errors__1_bjh"}},202:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(25),s=a.n(o),u=a(56),l=a(11),i=a.n(l),c=a(26),m=a(80),p=a(61),d=a.n(p),f=function(){return sessionStorage.getItem("cool-jwt")},b=function(){return sessionStorage.getItem("cool-name")},h=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return null!==f()},g=function(){return sessionStorage.removeItem("cool-jwt")},E=p.create({baseURL:"https://conduit.productionready.io"});E.interceptors.request.use((function(e){console.log(e);var t=f();return t&&(e.headers.Authorization=t,console.log("hello")),e}),(function(e){return console.log("mistake"),Promise.reject(e)})),p.interceptors.response.use((function(e){return console.log(e),e}),(function(e){return console.log(e),Promise.reject(e)}));var w={username:"",token:"",value:null,status:null,error:null},v=function(e,t,a){return{type:"SET_USER_DATA",payload:{name:t,token:e,status:a}}},_=function(e){return{type:"SET_ERROR",error:e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(m.a)({},e,{},t.payload);case"SET_STATUS":return Object(m.a)({},e,{status:t.status});case"SET_ERROR":return Object(m.a)({},e,{error:t.error});default:return e}},k=a(110),S=Object(u.c)({userData:y}),j=Object(u.d)(S,Object(u.a)(k.a)),A=(a(150),a(151),a(33)),O=a(22),x=a(74),N=a(203),T=a(4),R=a(79),C=a(20),P=a.n(C),D=Object(A.b)((function(e){return{error:e.userData.error,status:e.userData.status}}),{RegistrationThunk:function(e){return function(){var t=Object(c.a)(i.a.mark((function t(a){var r,n,o,s,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l={user:{email:e.email,password:e.password,username:e.name}},E.post("/api/users",l);case 3:r=t.sent,n=r.data.user,o=n.token,s=n.username,u=r.request.status,a(v(o,s,u)),sessionStorage.setItem("cool-jwt",r.data.user.token),sessionStorage.setItem("cool-name",r.data.user.username),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a(_(t.t0.response.data.errors));case 14:case"end":return t.stop()}var l}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.status,a=e.error,r=e.RegistrationThunk,o=Object(T.g)();return h()&&null!==b()&&o.push("/forum"),t<300&&t>199&&o.push("/forum"),n.a.createElement("div",{className:P.a.wrapper},n.a.createElement(x.a,{initialValues:{email:"",name:"",password:"",confirm_password:""},onSubmit:function(){var e=Object(c.a)(i.a.mark((function e(t,a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.setSubmitting,e.next=3,new Promise((function(e){return setTimeout(e,1e3)}));case 3:n(!1),r({email:t.email,password:t.password,name:t.name});case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),validationSchema:R.a().shape({confirm_password:R.c().oneOf([R.b("password"),null],"Passwords dont match")})},(function(e){var t=e.values,r=e.touched,o=e.errors,s=e.dirty,u=e.isSubmitting,l=e.handleChange,i=e.handleBlur,c=e.handleSubmit,m=e.handleReset;return n.a.createElement("form",{onSubmit:c,className:P.a.form},n.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"Email"),n.a.createElement(N.a,{id:"email",placeholder:"Enter your email",type:"text",value:t.email,onChange:l,onBlur:i,className:P.a.input}),null!==a&&void 0!==a.email&&n.a.createElement("div",{className:P.a.errors},n.a.createElement("p",null,"Email ".concat(String(a.email[0])))),n.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"Name"),n.a.createElement(N.a,{id:"name",placeholder:"Enter your name",type:"text",value:t.name,onChange:l,onBlur:i,className:P.a.input}),null!==a&&void 0!==a.username&&n.a.createElement("div",{className:P.a.errors},n.a.createElement("p",null,"Name ".concat(String(a.username[0])))),n.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"Password"),n.a.createElement(N.a,{id:"password",placeholder:"Enter your name",type:"password",value:t.password,onChange:l,onBlur:i,className:P.a.input}),null!==a&&void 0!==a.password&&n.a.createElement("div",{className:P.a.errors},n.a.createElement("p",null,"Password ".concat(String(a.password[0])))),n.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"Repeat Password"),n.a.createElement(N.a,{id:"confirm_password",placeholder:"Enter your name",type:"password",value:t.confirm_password,onChange:l,onBlur:i,className:P.a.input}),o.confirm_password&&r.confirm_password&&n.a.createElement("div",{className:P.a.errors},n.a.createElement("p",null,o.confirm_password)),n.a.createElement("div",{className:P.a.buttonsArea},n.a.createElement(O.b,{to:"/forum/LoginPage"}," Login page"),n.a.createElement("div",null,n.a.createElement("button",{type:"button",className:"outline",onClick:m,disabled:!s||u},"Reset"),n.a.createElement("button",{type:"submit",disabled:u},"Submit"))))})))})),B=a(42),I=a.n(B),F=Object(A.b)((function(e){return{error:e.userData.error,status:e.userData.status}}),{thunk:function(e){return function(){var t=Object(c.a)(i.a.mark((function t(a){var r,n,o,s,u;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l={user:{email:e.email,password:e.password}},E.post("/api/users/login",l);case 3:r=t.sent,n=r.data.user,o=n.token,s=n.username,u=r.request.status,a(v(o,s,u)),sessionStorage.setItem("cool-jwt",r.data.user.token),sessionStorage.setItem("cool-name",r.data.user.username),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a(_(t.t0.response.data.errors));case 14:case"end":return t.stop()}var l}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.status,a=e.error,r=e.thunk,o=Object(T.g)();return h()&&null!==b()&&o.push("/forum"),t<300&&t>199?(setTimeout((function(){return h()&&o.push("/forum")}),10),"redirecting..."):(console.log(h()),n.a.createElement("div",{className:I.a.wrapper},n.a.createElement(x.a,{initialValues:{email:"",password:""},onSubmit:function(){var e=Object(c.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,500)}));case 2:r({email:t.email,password:t.password});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},(function(e){var t=e.values,r=e.dirty,o=e.isSubmitting,s=e.handleChange,u=e.handleBlur,l=e.handleSubmit,i=e.handleReset;return n.a.createElement("form",{onSubmit:l,className:I.a.form},n.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"Email"),n.a.createElement(N.a,{id:"email",placeholder:"Enter your email",type:"text",value:t.email,onChange:s,onBlur:u,className:I.a.input}),n.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"password"),n.a.createElement(N.a,{id:"password",placeholder:"Enter your name",type:"password",value:t.password,onChange:s,onBlur:u,className:I.a.input}),null!==a&&"undefined"!==a&&n.a.createElement("div",{className:I.a.errors},n.a.createElement("p",null,"email or password ".concat(a["email or password"]))),n.a.createElement("div",{className:I.a.buttonsArea},n.a.createElement(O.b,{to:"/forum/Registration"},"Register"),n.a.createElement("div",null,n.a.createElement("button",{type:"button",className:"outline",onClick:i,disabled:!r||o},"Reset"),n.a.createElement("button",{type:"submit",disabled:o},"Submit"))))}))))})),L=a(125),U=a(124),q=a.n(U),z=Object(A.b)((function(e){return{username:e.userData.username,token:e.userData.token,status:e.userData.status}}),{setStatusAC:function(e){return{type:"SET_STATUS",status:e}}})((function(e){var t=Object(r.useState)(null),a=Object(L.a)(t,2),o=a[0],s=a[1];console.log(f());Object(T.g)();Object(r.useEffect)((function(){var t=f();null===o&&function(){var a=Object(c.a)(i.a.mark((function a(){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(null===t){a.next=11;break}return a.prev=1,a.next=4,d.a.get("https://conduit.productionready.io/api/user",{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Token ".concat(t)}});case 4:a.sent,s(b()),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),a.t0&&(g(),e.setStatusAC({data:401}),e.history.push("/forum/LoginPage"));case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(){return a.apply(this,arguments)}}()()}),[o,e,h()]);return n.a.createElement("div",{className:q.a.wrapper},n.a.createElement("h3",null," ",o," "),n.a.createElement("button",{onClick:function(){return g(),e.history.push("/forum/LoginPage"),e.setStatusAC({data:401})}}," \u0412\u044b\u0439\u0442\u0438 "))})),H=a(126),J=function(e){var t=e.component,a=Object(H.a)(e,["component"]);return n.a.createElement(T.b,Object.assign({},a,{render:function(e){return h()?n.a.createElement(t,e):n.a.createElement(T.a,{to:{pathname:"/forum/LoginPage",state:{from:e.location}}})}}))},W=function(){return n.a.createElement(T.d,null,n.a.createElement(T.b,{path:"/forum/LoginPage",component:F}),n.a.createElement(T.b,{path:"/forum/Registration",component:D}),n.a.createElement(J,{exact:!0,path:"/forum/",component:z}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(O.a,null,n.a.createElement(A.a,{store:j},n.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},42:function(e,t,a){e.exports={wrapper:"login_wrapper__1DHUi",form:"login_form__2l9yv",input:"login_input__2o3z6",buttonsArea:"login_buttonsArea__1JAdq",errors:"login_errors__H-sF-"}}},[[128,1,2]]]);
//# sourceMappingURL=main.c00d44b2.chunk.js.map