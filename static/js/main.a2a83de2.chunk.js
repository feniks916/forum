(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{152:function(e,t,a){e.exports={wrapper:"main_wrapper__36HIk"}},177:function(e,t,a){e.exports=a(281)},199:function(e,t,a){},20:function(e,t,a){e.exports={wrapper:"all_wrapper__1g5rn",registered:"all_registered__19mwW",ul:"all_ul__14Yu3",cardFooter:"all_cardFooter__3SmL2",change:"all_change__IzGnM",delete:"all_delete__1Yy8u",authorInfo:"all_authorInfo__3YXru",dateValue:"all_dateValue__3yyQ_",reversedDate:"all_reversedDate__3Rkt_",card:"all_card__20v59",Card_leftside:"all_Card_leftside__zZwjE",textBody:"all_textBody__XPIrQ",pagination:"all_pagination__3KTEm",form:"all_form__BeSfJ",input:"all_input__21E_i",buttonsArea:"all_buttonsArea__2Mrhu",errors:"all_errors__35JYO"}},200:function(e,t,a){e.exports={body:"App_body__3Aexq",ul:"App_ul__zXSjm",ticketsArea:"App_ticketsArea__lzTW3",wrapper:"App_wrapper__2HLsp",img:"App_img__3MMz6"}},23:function(e,t,a){e.exports={wrapper:"add_wrapper__18aeq",tagsArea:"add_tagsArea__VK1a6",tagsUl:"add_tagsUl__2iwYx",tagsInput:"add_tagsInput__uttKl",form:"add_form__2ZEfx",input:"add_input__s4GrR",buttonsArea:"add_buttonsArea__1GJgx",errors:"add_errors__2krLL"}},281:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(10),l=a.n(c),o=a(82),s=a(2),i=a.n(s),u=a(4),m=a(9),p=a(141).create({baseURL:"https://conduit.productionready.io"});p.interceptors.request.use((function(e){var t=sessionStorage.getItem("cool-jwt");return t&&(e.headers.Authorization="Token ".concat(t)),e}));var d=p,b={username:"",token:"",value:null,status:null,error:""},f=function(e){return{type:"SET_STATUS",status:e}},E=function(e,t,a){return{type:"SET_USER_DATA",payload:{name:t,token:e,status:a}}},g=function(e){return{type:"SET_ERROR",error:e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(m.a)({},e,{},t.payload);case"SET_STATUS":return Object(m.a)({},e,{status:t.status});case"SET_ERROR":return Object(m.a)({},e,{error:t.error});default:return e}},v={articles:[],isLoaded:!1,pageNumber:1,pageSize:10,error:"",articlesQuantity:0,currentArticle:{},slug:"",isCreated:!1},_=function(e){return{type:"SET_ERROR",error:e}},y=function(e){return{type:"SET_ISCREATED",isCreated:e}},O=function(e){return{type:"SET_DELETED_SLUG",slug:e}},A=function(e,t,a,r,n,c,l,o,s){return{type:"GET_CURRENT_ARTICLE",payload:{body:e,author:t,createdAt:a,description:r,favoritesCount:n,favorited:c,title:l,tagList:o,updatedAt:s}}},j=function(e){return function(){var t=Object(u.a)(i.a.mark((function t(a){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.post("api/articles/".concat(e,"/favorite"));case 3:r=t.sent,console.log(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a(_(t.t0.response.data.errors));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(u.a)(i.a.mark((function t(a){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.delete("api/articles/".concat(e,"/favorite"));case 3:r=t.sent,console.log(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a(_(t.t0.response.data.errors));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ARTICLES_DATA":return Object(m.a)({},e,{},t.payload);case"SET_ERROR":return Object(m.a)({},e,{error:t.error});case"SET_ISCREATED":return Object(m.a)({},e,{isCreated:t.isCreated});case"MAKE_FAVORITE":return Object(m.a)({},e,{articles:e.articles.map((function(e){return e.slug===t.slug?Object(m.a)({},e,{favorited:!0,favoritesCount:e.favoritesCount+1}):e}))});case"MAKE_UNFAVORITE":return Object(m.a)({},e,{articles:e.articles.map((function(e){return e.slug===t.slug?Object(m.a)({},e,{favorited:!1,favoritesCount:e.favoritesCount-1}):e}))});case"MAKE_FAVORITE_CURRENT_ARTICLE":return Object(m.a)({},e,{currentArticle:Object(m.a)({},e.currentArticle,{favorited:!0,favoritesCount:e.currentArticle.favoritesCount+1})});case"MAKE_UNFAVORITE_CURRENT_ARTICLE":return Object(m.a)({},e,{currentArticle:Object(m.a)({},e.currentArticle,{favorited:!1,favoritesCount:e.currentArticle.favoritesCount-1})});case"GET_CURRENT_ARTICLE":return Object(m.a)({},e,{currentArticle:t.payload});case"SET_DELETED_SLUG":return Object(m.a)({},e,{articles:e.articles.filter((function(e){return e.slug!==t.slug}))});case"SET_ISLOADED":return Object(m.a)({},e,{isLoaded:t.isLoaded});case"GET_SLUG":return Object(m.a)({},e,{slug:t.slug});case"SET_PAGENUMBER":return Object(m.a)({},e,{pageNumber:t.pageNumber});default:return e}},k=a(142),S=Object(o.c)({userData:h,articlesData:w}),N=Object(o.d)(S,Object(o.a)(k.a)),T=(a(199),a(200),a(17)),x=a(8),R=a(55),L=a(287),D=a(7),I=a(107),P=a(36),U=a.n(P),F=function(){return sessionStorage.getItem("cool-jwt")},B=function(){return sessionStorage.getItem("cool-name")},V=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return null!==F()},z=function(){return sessionStorage.removeItem("cool-jwt")},G=function(){return sessionStorage.getItem("slug")},K=Object(T.b)((function(e){return{error:e.userData.error,status:e.userData.status}}),{RegistrationThunk:function(e){return function(){var t=Object(u.a)(i.a.mark((function t(a){var r,n,c,l,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s={user:{email:e.email,password:e.password,username:e.name}},p.post("/api/users",s);case 3:r=t.sent,n=r.data.user,c=n.token,l=n.username,o=r.request.status,a(E(c,l,o)),sessionStorage.setItem("cool-jwt",r.data.user.token),sessionStorage.setItem("cool-name",r.data.user.username),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a(g(t.t0.response.data.errors));case 14:case"end":return t.stop()}var s}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.status,a=e.error,r=e.RegistrationThunk,c=Object(D.g)();return V()&&null!==B()&&c.push("/forum"),t<300&&t>199&&c.push("/forum"),n.a.createElement("div",{className:U.a.wrapper},n.a.createElement(R.a,{initialValues:{email:"",name:"",password:"",confirm_password:""},onSubmit:function(){var e=Object(u.a)(i.a.mark((function e(t,a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.setSubmitting,e.next=3,new Promise((function(e){return setTimeout(e,1e3)}));case 3:n(!1),r({email:t.email,password:t.password,name:t.name});case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),validationSchema:I.a().shape({confirm_password:I.c().oneOf([I.b("password"),null],"Passwords dont match")})},(function(e){var t=e.values,r=e.touched,c=e.errors,l=e.dirty,o=e.isSubmitting,s=e.handleChange,i=e.handleBlur,u=e.handleSubmit,m=e.handleReset;return n.a.createElement("form",{onSubmit:u,className:U.a.form},n.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"Email"),n.a.createElement(L.a,{id:"email",placeholder:"Enter your email",type:"text",value:t.email,onChange:s,onBlur:i,className:U.a.input}),null!==a&&void 0!==a.email&&n.a.createElement("div",{className:U.a.errors},n.a.createElement("p",null,"Email ".concat(String(a.email[0])))),n.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"Name"),n.a.createElement(L.a,{id:"name",placeholder:"Enter your name",type:"text",value:t.name,onChange:s,onBlur:i,className:U.a.input}),null!==a&&void 0!==a.username&&n.a.createElement("div",{className:U.a.errors},n.a.createElement("p",null,"Name ".concat(String(a.username[0])))),n.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"Password"),n.a.createElement(L.a,{id:"password",placeholder:"Enter your name",type:"password",value:t.password,onChange:s,onBlur:i,className:U.a.input}),null!==a&&void 0!==a.password&&n.a.createElement("div",{className:U.a.errors},n.a.createElement("p",null,"Password ".concat(String(a.password[0])))),n.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"Repeat Password"),n.a.createElement(L.a,{id:"confirm_password",placeholder:"Enter your name",type:"password",value:t.confirm_password,onChange:s,onBlur:i,className:U.a.input}),c.confirm_password&&r.confirm_password&&n.a.createElement("div",{className:U.a.errors},n.a.createElement("p",null,c.confirm_password)),n.a.createElement("div",{className:U.a.buttonsArea},n.a.createElement(x.b,{to:"/forum/LoginPage"}," Login page"),n.a.createElement("div",null,n.a.createElement("button",{type:"button",className:"outline",onClick:m,disabled:!l||o},"Reset"),n.a.createElement("button",{type:"submit",disabled:o},"Submit"))))})))})),M=a(61),q=a.n(M),Q=Object(T.b)((function(e){return{error:e.userData.error,status:e.userData.status}}),{thunk:function(e){return function(){var t=Object(u.a)(i.a.mark((function t(a){var r,n,c,l,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s={user:{email:e.email,password:e.password}},p.post("/api/users/login",s);case 3:r=t.sent,n=r.data.user,c=n.token,l=n.username,o=r.request.status,a(E(c,l,o)),sessionStorage.setItem("cool-jwt",r.data.user.token),sessionStorage.setItem("cool-name",r.data.user.username),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a(g(t.t0.response.data.errors));case 14:case"end":return t.stop()}var s}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.status,a=e.error,r=e.thunk,c=Object(D.g)();if(V()&&null!==B()&&c.push("/forum/articles"),t<300&&t>199)return setTimeout((function(){return V()&&c.push("/forum/articles")}),10),"redirecting...";return n.a.createElement("div",{className:q.a.wrapper},n.a.createElement("button",{onClick:function(){c.push("/forum/articles")},className:q.a.articles}," ",n.a.createElement("p",null," Atricles")),n.a.createElement(R.a,{initialValues:{email:"",password:""},onSubmit:function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,500)}));case 2:r({email:t.email,password:t.password});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},(function(e){var t=e.values,r=e.dirty,c=e.isSubmitting,l=e.handleChange,o=e.handleBlur,s=e.handleSubmit,i=e.handleReset;return n.a.createElement("form",{onSubmit:s,className:q.a.form},n.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"Email"),n.a.createElement(L.a,{id:"email",placeholder:"Enter your email",type:"text",value:t.email,onChange:l,onBlur:o,className:q.a.input}),n.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"password"),n.a.createElement(L.a,{id:"password",placeholder:"Enter your name",type:"password",value:t.password,onChange:l,onBlur:o,className:q.a.input}),""!==a&&"undefined"!==a&&n.a.createElement("div",{className:q.a.errors},n.a.createElement("p",null,"email or password ".concat(a["email or password"]))),n.a.createElement("div",{className:q.a.buttonsArea},n.a.createElement(x.b,{to:"/forum/Registration"},"Register"),n.a.createElement("div",null,n.a.createElement("button",{type:"button",className:"outline",onClick:i,disabled:!r||c},"Reset"),n.a.createElement("button",{type:"submit",disabled:c},"Submit"))))})))})),H=a(45),W=a(152),J=a.n(W),Y=Object(T.b)((function(e){return{username:e.userData.username,token:e.userData.token,status:e.userData.status}}),{setStatusAC:f})((function(e){var t=Object(r.useState)(null),a=Object(H.a)(t,2),c=a[0],l=a[1];Object(r.useEffect)((function(){var t=F();null===c&&function(){var a=Object(u.a)(i.a.mark((function a(){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(null===t){a.next=11;break}return a.prev=1,a.next=4,d.get("/api/user");case 4:a.sent,l(B()),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),a.t0&&(z(),e.setStatusAC({data:401}),e.history.push("/forum/LoginPage"));case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(){return a.apply(this,arguments)}}()()}),[c,e]);return n.a.createElement("div",{className:J.a.wrapper},n.a.createElement("h3",null," ",c," "),n.a.createElement(x.b,{to:"/forum/articles"},"All Articles"),n.a.createElement("button",{onClick:function(){return z(),e.history.push("/forum/LoginPage"),e.setStatusAC({data:401})}}," \u0412\u044b\u0439\u0442\u0438 "))})),X=a(20),Z=a.n(X),$=a(286),ee=a(292),te=a(295),ae=a(291),re=a(294),ne=a(283),ce=a(284),le=a(296),oe=a(285),se=a(289),ie=Object(T.b)((function(e){return{articles:e.articlesData.articles,pageSize:e.articlesData.pageSize,pageNumber:e.articlesData.pageNumber,isLoaded:e.articlesData.isLoaded,articlesQuantity:e.articlesData.articlesQuantity,favoriteArticles:e.articlesData.favoriteArticles}}),{setArticlesAC:function(e,t,a){return{type:"SET_ARTICLES_DATA",payload:{articles:e,articlesQuantity:t,isLoaded:a}}},setPageNumberAC:function(e){return{type:"SET_PAGENUMBER",pageNumber:e}},setLoadingAC:function(e){return{type:"SET_ISLOADED",isLoaded:e}},getArticle:function(e){return function(){var t=Object(u.a)(i.a.mark((function t(a){var r,n,c,l,o,s,u,m,p,b,f;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.get("/api/articles/".concat(e));case 3:r=t.sent,n=r.data.article,c=n.body,l=n.author,o=n.createdAt,s=n.description,u=n.favoritesCount,m=n.favorited,p=n.title,b=n.tagList,f=n.updatedAt,a(A(c,l,o,s,u,m,p,b,f)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),a(_(t.t0.response.data.errors));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},getSlugAC:function(e){return{type:"GET_SLUG",slug:e}},deleteArticle:function(e){return function(){var t=Object(u.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.delete("/api/articles/".concat(e));case 3:t.sent,a(O(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a(_(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},unfavoriteArticle:C,likeArticle:j,setFavoriteAC:function(e){return{type:"MAKE_FAVORITE",slug:e}},setUnfavoriteAC:function(e){return{type:"MAKE_UNFAVORITE",slug:e}},setStatusAC:f,setErrorAC:_})((function(e){var t=Object(D.g)(),a=B(),c=e.articles,l=e.pageSize,o=e.pageNumber,s=e.setArticlesAC,m=e.setLoadingAC,p=e.setPageNumberAC,b=e.getSlugAC,f=e.setFavoriteAC,E=e.setUnfavoriteAC,g=(e.setErrorAC,Date.now()),h=Object(r.useState)(1),v=Object(H.a)(h,2),_=v[0],y=v[1],O=Object(r.useState)(e.pageNumber),A=Object(H.a)(O,2),j=A[0],C=A[1];Object(r.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.get("/api/articles?offset=".concat(1===o?0:(o-1)*l,"&limit=").concat(l));case 3:t=e.sent,s(t.data.articles,t.data.articlesCount,!0,t.data.favorited),y(Math.ceil(t.data.articlesCount/l)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0&&console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[o]);var w=function(e){t.push("/forum/article"),sessionStorage.setItem("slug",e),b(e)};return n.a.createElement("div",{className:Z.a.wrapper},!V()&&n.a.createElement("div",{className:Z.a.registered}," ",n.a.createElement("button",{onClick:function(){t.push("/forum/LoginPage")},className:Z.a.articles}," ",n.a.createElement("h4",null,"Login"))," "),V()&&n.a.createElement("div",{className:Z.a.registered}," ",n.a.createElement("button",{onClick:function(){t.push("/forum/developmentPage")}}," ",n.a.createElement("h4",null,"Create Article")),n.a.createElement("button",{onClick:function(){return z(),e.history.push("/forum/LoginPage"),e.setStatusAC({data:401})}}," ",n.a.createElement("h4",null," Log Out")," ")," "),n.a.createElement("div",{className:Z.a.pagination},0!==_&&n.a.createElement($.a,{defaultCurrent:1,current:j,onChange:function(e){m(!1),p(e),C(e)},showSizeChanger:!1,pageSize:e.pageSize,total:e.articlesQuantity})),n.a.createElement("ul",{className:Z.a.ul},"undefined"!==c&&e.isLoaded&&c.map((function(r,c){return n.a.createElement("li",{key:c,onClick:function(){return w(r.slug)}},n.a.createElement("div",{className:Z.a.card},n.a.createElement("img",{src:"https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/11/2016/11/14-768x720.jpg",alt:"mountain"}),n.a.createElement("div",{className:Z.a.Card_leftside},n.a.createElement("div",{className:Z.a.authorInfo},n.a.createElement("div",{className:Z.a.dateValue},n.a.createElement("p",null,"created by ".concat(r.author.username)),n.a.createElement("div",{className:Z.a.reversedDate},Object(ne.a)(g,Object(ce.a)(Object(le.a)("".concat(r.createdAt))))>=60?n.a.createElement("h4",null,"".concat(Object(ne.a)(g,Object(ce.a)(Object(le.a)("".concat(r.createdAt))))-60*Object(oe.a)(g,Object(ce.a)(Object(le.a)("".concat(r.createdAt))))," min")):Object(ne.a)(g,Object(ce.a)(Object(le.a)("".concat(r.createdAt))))<1?n.a.createElement("h4",null,"less than minute"):n.a.createElement("h4",null,"".concat(Object(ne.a)(g,Object(ce.a)(Object(le.a)("".concat(r.createdAt))))," min")),Object(oe.a)(g,Object(ce.a)(Object(le.a)("".concat(r.createdAt))))>=24&&Object(oe.a)(g,Object(ce.a)(Object(le.a)("".concat(r.createdAt))))-24*Object(se.a)(g,Object(ce.a)(Object(le.a)("".concat(r.createdAt))))>0?n.a.createElement("h4",null,"".concat(Object(oe.a)(g,Object(ce.a)(Object(le.a)("".concat(r.createdAt))))-24*Object(se.a)(g,Object(ce.a)(Object(le.a)("".concat(r.createdAt))))," hours")):"",Object(oe.a)(g,Object(ce.a)(Object(le.a)("".concat(r.createdAt))))<24&&Object(oe.a)(g,Object(ce.a)(Object(le.a)("".concat(r.createdAt))))>0?n.a.createElement("h4",null," ","".concat(Object(oe.a)(g,Object(ce.a)(Object(le.a)("".concat(r.createdAt))))," hours")," "):"",Object(se.a)(g,Object(ce.a)(Object(le.a)("".concat(r.createdAt))))>0?n.a.createElement("h4",null,"".concat(Object(se.a)(g,Object(ce.a)(Object(le.a)("".concat(r.createdAt))))," days ")):""),n.a.createElement("h4",null,"ago")),n.a.createElement("h2",null,r.title),r.tagList.length>0?n.a.createElement("h4",null,"tags: ".concat(r.tagList.join(", "))):n.a.createElement("h4",null,"tags: -")),n.a.createElement("div",{className:Z.a.cardFooter},a===r.author.username&&n.a.createElement("button",{className:Z.a.change,onClick:function(e){e.stopPropagation(),w(r.slug),t.push("/forum/editPage")}},n.a.createElement("h4",null," Change Article ",n.a.createElement(ee.a,null))),a===r.author.username&&n.a.createElement("button",{className:Z.a.delete,onClick:function(t){var a;t.stopPropagation(),a=r.slug,e.deleteArticle(a)}},n.a.createElement("h4",null," Delete Article ",n.a.createElement(te.a,null))),V()&&n.a.createElement("div",null,r.favorited?n.a.createElement("button",{onClick:function(t){var a;t.stopPropagation(),a=r.slug,e.unfavoriteArticle(a),E(a)}},n.a.createElement("h5",null,n.a.createElement(ae.a,null)),n.a.createElement("h5",null,r.favoritesCount)):n.a.createElement("button",{onClick:function(t){var a;t.stopPropagation(),a=r.slug,e.likeArticle(a),f(a)}},n.a.createElement("h5",null,n.a.createElement(re.a,null)),n.a.createElement("h5",null,r.favoritesCount))),!V()&&n.a.createElement("h5",null,"likes: ",r.favoritesCount)))))}))),n.a.createElement("div",null,n.a.createElement("p",null,!e.isLoaded&&"...loading")))})),ue=a(175),me=function(e){var t=e.component,a=Object(ue.a)(e,["component"]);return n.a.createElement(D.b,Object.assign({},a,{render:function(e){return V()?n.a.createElement(t,e):n.a.createElement(D.a,{to:{pathname:"/forum/LoginPage",state:{from:e.location}}})}}))},pe=a(67),de=a.n(pe),be=Object(T.b)((function(e){return{article:e.articlesData.currentArticle}}),{unfavoriteArticle:C,likeArticle:j,setFavoriteCurrentAC:function(e){return{type:"MAKE_FAVORITE_CURRENT_ARTICLE",slug:e}},setUnfavoriteCurrentAC:function(e){return{type:"MAKE_UNFAVORITE_CURRENT_ARTICLE",slug:e}},getCurrentArticleAC:A})((function(e){var t=e.setFavoriteCurrentAC,a=e.setUnfavoriteCurrentAC,c=e.likeArticle,l=e.unfavoriteArticle,o=e.article,s=o.body,m=o.author,p=o.createdAt,b=o.description,f=(o.favoritesCount,o.favorited,o.title),E=o.tagList,g=(o.updatedAt,Date.now()),h=Object(D.g)(),v=sessionStorage.getItem("slug");Object(r.useEffect)((function(){null!==v&&function(){var t=Object(u.a)(i.a.mark((function t(){var a,r,n,c,l,o,s,u,m,p,b;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.get("/api/articles/".concat(v));case 3:a=t.sent,r=a.data.article,n=r.body,c=r.author,l=r.createdAt,o=r.description,s=r.favoritesCount,u=r.favorited,m=r.title,p=r.tagList,b=r.updatedAt,e.getCurrentArticleAC(n,c,l,o,s,u,m,p,b),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0&&console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}()()}),[v,s]);return o.hasOwnProperty("body")&&n.a.createElement("div",{className:de.a.wrapper},n.a.createElement("button",{className:de.a.redirect,onClick:function(){h.push("/forum/articles")},type:"primary",key:"console"},"Atricles"),n.a.createElement("div",{className:de.a.body},n.a.createElement("img",{src:"https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/28/2019/09/101_0001_alexandru-acea-bbokzTQjB9o-unsplash-1024x777.jpg",alt:"pic"}),n.a.createElement("div",{className:de.a.dateValue},n.a.createElement("p",null,"created by ".concat(m.username)),n.a.createElement("div",{className:de.a.reversedDate},Object(ne.a)(g,Object(ce.a)(Object(le.a)("".concat(p))))>=60?n.a.createElement("h4",null,"".concat(Object(ne.a)(g,Object(ce.a)(Object(le.a)("".concat(p))))-60*Object(oe.a)(g,Object(ce.a)(Object(le.a)("".concat(p))))," min")):Object(ne.a)(g,Object(ce.a)(Object(le.a)("".concat(p))))<1?n.a.createElement("h4",null,"less than minute"):n.a.createElement("h4",null,"".concat(Object(ne.a)(g,Object(ce.a)(Object(le.a)("".concat(p))))," min")),Object(oe.a)(g,Object(ce.a)(Object(le.a)("".concat(p))))>=24&&Object(oe.a)(g,Object(ce.a)(Object(le.a)("".concat(p))))-24*Object(se.a)(g,Object(ce.a)(Object(le.a)("".concat(p))))>0?n.a.createElement("h4",null,"".concat(Object(oe.a)(g,Object(ce.a)(Object(le.a)("".concat(p))))-24*Object(se.a)(g,Object(ce.a)(Object(le.a)("".concat(p))))," hours")):"",Object(oe.a)(g,Object(ce.a)(Object(le.a)("".concat(p))))<24&&Object(oe.a)(g,Object(ce.a)(Object(le.a)("".concat(p))))>0?n.a.createElement("h4",null," ","".concat(Object(oe.a)(g,Object(ce.a)(Object(le.a)("".concat(p))))," hours")," "):"",Object(se.a)(g,Object(ce.a)(Object(le.a)("".concat(p))))>0?n.a.createElement("h4",null,"".concat(Object(se.a)(g,Object(ce.a)(Object(le.a)("".concat(p))))," days ")):""),n.a.createElement("h4",null,"ago")),n.a.createElement("h2",null,f),n.a.createElement("h5",null,"description: ".concat(b)),n.a.createElement("div",{className:de.a.article_body},n.a.createElement("p",null,s)),n.a.createElement("ul",null,n.a.createElement("span",null,E.length>0?"tags:":"tags: -"),E.map((function(e,t){return n.a.createElement("li",{key:t},n.a.createElement("p",null,e))}))),V()&&n.a.createElement("div",null,o.favorited?n.a.createElement("button",{onClick:function(e){var t;e.stopPropagation(),t=G(),l(t),a(t)}},n.a.createElement("h5",null,n.a.createElement(ae.a,null)),n.a.createElement("h5",null,o.favoritesCount)):n.a.createElement("button",{disabled:!V(),onClick:function(e){var a;e.stopPropagation(),a=G(),c(a),t(a)}},n.a.createElement("h5",null,n.a.createElement(re.a,null)),n.a.createElement("h5",null,o.favoritesCount))),!V()&&n.a.createElement("h5",null,"likes: ".concat(o.favoritesCount))))})),fe=a(293),Ee=a(290),ge=a(23),he=a.n(ge),ve=Object(T.b)((function(e){return{error:e.articlesData.error,isCreated:e.articlesData.isCreated,status:e.userData.status}}),{createArticleThunk:function(e){return function(){var t=Object(u.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r=e,p.post("/api/articles",r);case 3:t.sent,a(y(!0)),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.response),a(_(t.t0.response.data.errors));case 11:case"end":return t.stop()}var r}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},setCreatedAC:y,setErrorAC:_})((function(e){var t=e.error,a=e.createArticleThunk,c=e.isCreated,l=e.setCreatedAC,o=e.setErrorAC;console.log(c);var s=Object(r.useState)([]),m=Object(H.a)(s,2),p=m[0],d=m[1],b="",f=Object(D.g)(),E=function(e){var t=p.splice(e,1);d(p.filter((function(e){return e!==t[0]})))},g=function(e){var t=e.target.value;if("Shift"===e.key&&t){if(p.find((function(e){return e.toLowerCase()===t.toLowerCase()})))return void fe.a.open({message:"Equal tags can not be added in one tags list",description:"Change or delete this tag and close this window",onClick:function(){console.log("Notification Clicked!")}});d(p.concat(t)),b.value=null}else"Backspace"!==e.key||t||E(p.length-1)},h=function(){f.push("/forum/articles"),l(!1),o("")};return n.a.createElement("div",{className:he.a.wrapper},c&&n.a.createElement(Ee.a,{status:"success",title:"Article created successfully",extra:[n.a.createElement("button",{onClick:h,type:"primary",key:"console"},"Go to Atricles page ")]}),!c&&n.a.createElement(R.a,{initialValues:{title:"",description:"",body:""},onSubmit:function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,500)}));case 2:a({article:{title:t.title,description:t.description,body:t.body,tagList:p}});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},(function(e){var a=e.values,r=e.dirty,c=e.isSubmitting,l=e.handleChange,o=e.handleBlur,s=e.handleSubmit,i=e.handleReset;return n.a.createElement("div",null,n.a.createElement("button",{onClick:h,className:he.a.articles}," ",n.a.createElement("p",null," Atricles")),n.a.createElement("form",{onSubmit:s,className:he.a.form},n.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"Title"),n.a.createElement(L.a,{id:"title",placeholder:"Enter title of article",type:"text",value:a.title,onChange:l,onBlur:o,className:he.a.input}),""!==t&&t.hasOwnProperty("title")&&n.a.createElement("div",{className:he.a.errors},n.a.createElement("p",null,"title ".concat(t.title[0]))),n.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"Description"),n.a.createElement(L.a,{id:"description",placeholder:"Enter description of article",type:"text",value:a.description,onChange:l,onBlur:o,className:he.a.input}),""!==t&&t.hasOwnProperty("description")&&n.a.createElement("div",{className:he.a.errors},n.a.createElement("p",null,"description ".concat(String(t.description[0])))),n.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"Body"),n.a.createElement(L.a.TextArea,{id:"body",placeholder:"Enter body of article",type:"text",value:a.body,onChange:l,onBlur:o,className:he.a.input}),""!==t&&t.hasOwnProperty("body")&&n.a.createElement("div",{className:he.a.errors},n.a.createElement("p",null,"body ".concat(t.body[0]))),n.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"Tags"),n.a.createElement("div",{className:he.a.tagsArea},n.a.createElement("ul",{className:he.a.tagsUl},p.map((function(e,t){return n.a.createElement("li",{key:e},n.a.createElement("h4",null,e,n.a.createElement("button",{type:"button",onClick:function(){E(t)}},n.a.createElement(te.a,null))))})),n.a.createElement("li",{className:he.a.tagsInput},n.a.createElement("input",{type:"text",placeholder:"press shift for adding tag",onKeyDown:g,ref:function(e){b=e}})))),n.a.createElement("div",{className:he.a.buttonsArea},n.a.createElement("div",null,n.a.createElement("button",{type:"button",className:"outline",onClick:i,disabled:!r||c},"Reset"),n.a.createElement("button",{type:"submit",disabled:c},"Submit")))))})))})),_e=a(29),ye=a.n(_e),Oe=Object(T.b)((function(e){return{error:e.articlesData.error,currentArticle:e.articlesData.currentArticle,isCreated:e.articlesData.isCreated,slug:e.articlesData.slug}}),{getCurrentArticleAC:A,setCreatedAC:y})((function(e){var t=e.error,a=(e.thunk,e.currentArticle),c=e.slug,l=e.isCreated,o=a.body,s=a.description,m=a.title,b=(a.tagList,sessionStorage.getItem("slug")),f=Object(r.useState)([]),E=Object(H.a)(f,2),g=E[0],h=E[1];console.log(t);var v="",_=function(e){var t=g.splice(e,1);h(g.filter((function(e){return e!==t[0]})))},y=function(e){var t=e.target.value;if("Shift"===e.key&&t){if(g.find((function(e){return e.toLowerCase()===t.toLowerCase()})))return void fe.a.open({message:"Equal tags can not be added in one tags list",description:"Change or delete this tag and close this window",onClick:function(){console.log("Notification Clicked!")}});h(g.concat(t)),v.value=null}else"Backspace"!==e.key||t||_(g.length-1)};Object(r.useEffect)((function(){null!==b&&function(){var t=Object(u.a)(i.a.mark((function t(){var a,r,n,c,l,o,s,u,m,p,f;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.get("/api/articles/".concat(b));case 3:a=t.sent,h(a.data.article.tagList),r=a.data.article,n=r.body,c=r.author,l=r.createdAt,o=r.description,s=r.favoritesCount,u=r.favorited,m=r.title,p=r.tagList,f=r.updatedAt,e.getCurrentArticleAC(n,c,l,o,s,u,m,p,f),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),t.t0&&console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}()()}),[c,o]);var O=Object(D.g)();return a.hasOwnProperty("body")&&n.a.createElement("div",{className:ye.a.wrapper},l&&n.a.createElement(Ee.a,{status:"success",title:"Article updated successfully",extra:[n.a.createElement("button",{onClick:function(){O.push("/forum/articles"),e.setCreatedAC(!1)},type:"primary",key:"console"},"Go to Atricles page ")]}),!l&&n.a.createElement(R.a,{initialValues:{title:m,description:s,body:o},onSubmit:function(){var t=Object(u.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(e){return setTimeout(e,500)}));case 2:r={article:{title:a.title,description:a.description,body:a.body,tagList:g}},p.put("/api/articles/".concat(sessionStorage.getItem("slug")),r),e.setCreatedAC(!0);case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},(function(e){var a=e.values,r=e.dirty,c=e.isSubmitting,l=e.handleChange,o=e.handleBlur,s=e.handleSubmit,i=e.handleReset;return n.a.createElement("form",{onSubmit:s,className:ye.a.form},n.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"Title"),n.a.createElement(L.a,{id:"title",placeholder:"title",type:"text",value:a.title,onChange:l,onBlur:o,className:ye.a.input}),""!==t&&t.hasOwnProperty("title")&&n.a.createElement("div",{className:ye.a.errors},n.a.createElement("p",null,"title ".concat(t.title[0]))),n.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"Description"),n.a.createElement(L.a,{id:"description",placeholder:"description",type:"text",value:a.description,onChange:l,onBlur:o,className:ye.a.input}),""!==t&&t.hasOwnProperty("description")&&n.a.createElement("div",{className:ye.a.errors},n.a.createElement("p",null,"description ".concat(String(t.description[0])))),n.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"Body"),n.a.createElement(L.a.TextArea,{id:"body",placeholder:"body",type:"text",value:a.body,onChange:l,onBlur:o,className:ye.a.input}),""!==t&&t.hasOwnProperty("body")&&n.a.createElement("div",{className:ye.a.errors},n.a.createElement("p",null,"body ".concat(t.body[0]))),n.a.createElement("label",{htmlFor:"email",style:{display:"block"}},"Tags"),n.a.createElement("div",{className:ye.a.tagsArea},n.a.createElement("ul",{className:ye.a.tagsUl},g.map((function(e,t){return n.a.createElement("li",{key:e},n.a.createElement("h4",null,e,n.a.createElement("button",{type:"button",onClick:function(){_(t)}},n.a.createElement(te.a,null))))})),n.a.createElement("li",{className:ye.a.tagsInput},n.a.createElement("input",{type:"text",placeholder:"press shift for adding tag",onKeyDown:y,ref:function(e){v=e}})))),n.a.createElement("div",{className:ye.a.buttonsArea},n.a.createElement(x.b,{to:"/forum/articles"},"All Articles"),n.a.createElement("div",null,n.a.createElement("button",{type:"button",className:"outline",onClick:i,disabled:!r||c},"Reset"),n.a.createElement("button",{type:"submit",disabled:c},"Submit"))))})))})),Ae=function(){return n.a.createElement(D.d,null,n.a.createElement(D.b,{path:"/forum/LoginPage",component:Q}),n.a.createElement(D.b,{path:"/forum/articles",component:ie}),n.a.createElement(D.b,{path:"/forum/Registration",component:K}),n.a.createElement(D.b,{path:"/forum/developmentPage",component:ve}),n.a.createElement(D.b,{path:"/forum/article",component:be}),n.a.createElement(D.b,{path:"/forum/editPage",component:Oe}),n.a.createElement(me,{exact:!0,path:"/forum/",component:Y}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(x.a,null,n.a.createElement(T.a,{store:N},n.a.createElement(Ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},29:function(e,t,a){e.exports={wrapper:"edit_wrapper__3ImOb",tagsArea:"edit_tagsArea__3dEnt",tagsUl:"edit_tagsUl__3WbYn",tagsInput:"edit_tagsInput__1L0aH",form:"edit_form__qHkBW",input:"edit_input__1WXhm",buttonsArea:"edit_buttonsArea__3l9pf",errors:"edit_errors__KsEZ5"}},36:function(e,t,a){e.exports={wrapper:"registration_wrapper__3w-sm",form:"registration_form__1d1UH",input:"registration_input__3F6qd",buttonsArea:"registration_buttonsArea__18T8o",errors:"registration_errors__1_bjh"}},61:function(e,t,a){e.exports={wrapper:"login_wrapper__1DHUi",articles:"login_articles__kOmqn",form:"login_form__2l9yv",input:"login_input__2o3z6",buttonsArea:"login_buttonsArea__1JAdq",errors:"login_errors__H-sF-"}},67:function(e,t,a){e.exports={wrapper:"current_wrapper__j5zsz",redirect:"current_redirect__ftFKT",dateValue:"current_dateValue__qcVvq",reversedDate:"current_reversedDate__1VAZB",body:"current_body__3dhTr",article_body:"current_article_body__2yqGp"}}},[[177,1,2]]]);
//# sourceMappingURL=main.a2a83de2.chunk.js.map