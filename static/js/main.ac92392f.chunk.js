(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{45:function(e,t,a){e.exports=a(79)},50:function(e,t,a){},51:function(e,t,a){},56:function(e,t,a){e.exports=a.p+"static/media/car.51378c37.png"},57:function(e,t,a){e.exports=a.p+"static/media/men.f8f3cc52.png"},58:function(e,t,a){e.exports=a.p+"static/media/women.7cfda651.png"},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),o=(a(50),a(36)),s=a(37),i=a(44),m=a(42),u=(a(51),a(4)),E=a(3),d=a(15),p=function(){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"home-container"},r.a.createElement("section",{className:"top-home-container"},r.a.createElement("div",{className:"top-home-image"},r.a.createElement("div",{className:"top-home-background"}),r.a.createElement("div",{className:"top-home-image-text"},r.a.createElement("h1",null,"WITAJ W SKLEPIE!"),r.a.createElement("p",null,"SPRAWD\u0179 NASZE WSZYSTKIE PRODUKTY.")),r.a.createElement("div",{className:"top-image-holder"},r.a.createElement("img",{src:a(56),alt:"Top"})))),r.a.createElement("section",{className:"bottom-home-container"},r.a.createElement("div",{className:"bottom-men-box"},r.a.createElement("div",{className:"bottom-men-image-text"},r.a.createElement("h1",null,"M\u0118\u017bCZY\u0179NI")),r.a.createElement("div",{className:"men-image-up"}),r.a.createElement("img",{src:a(57),alt:"Men"})),r.a.createElement("div",{className:"bottom-women-box"},r.a.createElement("div",{className:"bottom-women-image-text"},r.a.createElement("h1",null,"KOBIETY")),r.a.createElement("div",{className:"women-image-up"}),r.a.createElement("img",{src:a(58),alt:"Women"})))))},f=a(11),b=a(5),h=function(){var e=Object(n.useRef)();return r.a.createElement("div",{className:"header-container"},r.a.createElement("header",null,r.a.createElement("section",{className:"top-header"},r.a.createElement("div",{className:"brand-logo"},r.a.createElement(u.b,{to:"/Shop-Project/"},r.a.createElement("h1",null,"SHOPI"))),r.a.createElement("div",{className:"search-bar-header"},r.a.createElement("input",{type:"text",ref:e,placeholder:"Wyszukaj produkt",onChange:function(){console.log(e.current.value)}}),r.a.createElement("button",{type:"submit"},"Szukaj")),r.a.createElement("div",{className:"right-center"},r.a.createElement("div",{className:"user-login-center"},r.a.createElement(u.b,{to:"/account"},r.a.createElement(f.a,{icon:b.e,size:"1x"}),r.a.createElement("p",null,"Twoje konto"))),r.a.createElement("div",{className:"user-register-center"},r.a.createElement(u.b,{to:"/register"},r.a.createElement(f.a,{icon:b.c,size:"1x"}),r.a.createElement("p",null,"Zarejestruj si\u0119"))),r.a.createElement("div",{className:"cart-center"},r.a.createElement(u.b,{to:"/cart"},r.a.createElement(f.a,{icon:b.b,size:"1x"}),r.a.createElement("p",null,"Koszyk"))))),r.a.createElement("section",{className:"bottom-header"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement(u.b,{to:"/men"},r.a.createElement("li",null,"M\u0118\u017bCZY\u0179NI")),r.a.createElement(u.b,{to:"/women"},r.a.createElement("li",null,"KOBIETY")),r.a.createElement(u.b,{to:"/accesories"},r.a.createElement("li",null,"AKCESORIA")),r.a.createElement(u.b,{to:"/contact"},r.a.createElement("li",null,"KONTAKT")))))))},v=function(e){var t=e.openSideMenu;return r.a.createElement("div",{className:"mobile-header-container"},r.a.createElement("header",{className:"mobile-header"},r.a.createElement("section",{className:"top-header"},r.a.createElement("div",{className:"brand-logo"},r.a.createElement(u.b,{to:"/Shop-Project/"},r.a.createElement("h1",null,"SHOPI"))),r.a.createElement("div",{className:"right-center"},r.a.createElement("div",{className:"user-login-center"},r.a.createElement(u.b,{to:"/account"},r.a.createElement(f.a,{icon:b.e,size:"1x"}),r.a.createElement("p",null,"Twoje konto"))),r.a.createElement("div",{className:"user-register-center"},r.a.createElement(u.b,{to:"/register"},r.a.createElement(f.a,{icon:b.c,size:"1x"}),r.a.createElement("p",null,"Zarejestruj si\u0119"))),r.a.createElement("div",{className:"cart-center"},r.a.createElement(u.b,{to:"/cart"},r.a.createElement(f.a,{icon:b.b,size:"1x"}),r.a.createElement("p",null,"Koszyk"))))),r.a.createElement("section",{className:"bottom-mobile-menu"},r.a.createElement(f.a,{icon:b.a,onClick:t}))))},g=function(e){var t=e.closeSideMenu;return r.a.createElement("div",{className:"mobile-side-menu"},r.a.createElement("div",{className:"mobile-side-dark"}),r.a.createElement("div",{className:"mobile-side-menu-light"},r.a.createElement("div",{className:"mobile-side-menu-top-close"},r.a.createElement(f.a,{icon:b.d,size:"1x",onClick:t})),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement(u.b,{to:"/men"},r.a.createElement("li",null,"M\u0118\u017bCZY\u0179NI")),r.a.createElement(u.b,{to:"/women"},r.a.createElement("li",null,"KOBIETY")),r.a.createElement(u.b,{to:"/accesories"},r.a.createElement("li",null,"AKCESORIA")),r.a.createElement(u.b,{to:"/contact"},r.a.createElement("li",null,"KONTAKT"))))))},N=a(14),O=a.n(N),j=a(18),S=a(39),w=a.n(S),x=function(e,t){return{type:"SAVE_USER",username:e,email:t}},I=function(e,t){return w.a.post("/api/user/auth/login",{username:e,password:t}).then((function(e){console.log(e);var t=e.data,a=t.accessToken,n=t.refreshToken,r=t.success;return!!(a&&n&&r)})).catch((function(e){console.log(e)}))},k=Object(d.b)((function(e){return{userInfo:e.UserInfo}}),(function(e){return{getUserFromServer:function(t,a){return e(function(e,t){return function(){var a=Object(j.a)(O.a.mark((function a(n){var r;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,I(e,t);case 2:r=a.sent,n(r?x(r.username,r.email):{type:"INVALID_USER"});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(t,a))}}}))((function(e){var t=e.userInfo,a=e.getUserFromServer,c=Object(n.useRef)(),l=Object(n.useRef)();return r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"login-area"},r.a.createElement("div",{className:"login-page-title"},r.a.createElement("h1",null,"Zaloguj si\u0119")),r.a.createElement("div",{className:"login-box"},r.a.createElement("div",{className:"login-main-box"},r.a.createElement("div",{className:"login-main-box-title"},r.a.createElement("h1",null,"Logowanie")),r.a.createElement("form",{id:"loginForm"},r.a.createElement("label",null,"Nazwa u\u017cytkownika"),r.a.createElement("input",{type:"text",name:"inputUsername",placeholder:"Nazwa u\u017cytkownika",ref:c}),r.a.createElement("label",null,"Has\u0142o"),r.a.createElement("input",{type:"password",name:"inputUsername",placeholder:"Has\u0142o",ref:l}),r.a.createElement("button",{type:"submit",onClick:function(e){return function(e){e.preventDefault(),a(c.current.value,l.current.value)}(e)}},"Zaloguj"),t.invalidUser?r.a.createElement("p",null,"B\u0142\u0119dny login lub has\u0142o."):null)))))})),y=a(43),U=function(){var e=Object(n.useState)(null),t=Object(y.a)(e,2),a=t[0],c=t[1],l=function(){var e=Object(j.a)(O.a.mark((function e(){var t,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/api/user/list2",e.next=3,fetch("/api/user/list2");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,c(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()}),[]),a?r.a.createElement("div",{className:"account-container"},r.a.createElement("h1",null,"Welcome to your account"),r.a.createElement("button",{onClick:function(){console.log(a)}},"Click!"),r.a.createElement("p",null,"Username: ",a.username),r.a.createElement("p",null,"Title: ")):r.a.createElement("div",{className:"account-container",style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("h1",null,"Loading..."))},T=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).openSideMenu=function(){n.setState({sideMenuOpen:!n.state.sideMenuOpen}),document.body.style.overflow=n.state.sideMenuOpen?"":"hidden"},n.state={title:"App",sideMenuOpen:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.authenticateUser()}},{key:"render",value:function(){var e=this.state.sideMenuOpen,t=this.props.userInfo;return r.a.createElement(u.a,null,e?r.a.createElement(g,{closeSideMenu:this.openSideMenu}):null,r.a.createElement(v,{openSideMenu:this.openSideMenu}),r.a.createElement(h,null),r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/Shop-Project/",exact:!0,render:function(e){return r.a.createElement(p,e)}}),r.a.createElement(E.a,{path:"/account",exact:!0,render:function(e){return t.isLogged?r.a.createElement(U,e):r.a.createElement(k,e)}})))}}]),a}(r.a.Component),M=Object(d.b)((function(e){return{userInfo:e.UserInfo}}),(function(e){return{authenticateUser:function(){return e(function(){var e=Object(j.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/user/auth/authenticate",{method:"POST"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}));case 2:(a=e.sent).user?t(x(a.user.username,a.user.userEmail)):t({type:"SIGN_OUT"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(T);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(13),K=a(40),z=a(12),C={email:null,username:null,isLogged:!1,invalidUser:!1},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_USER":return Object(z.a)(Object(z.a)({},e),{},{email:t.email,username:t.username,isLogged:!0,invalidUser:!1});case"SIGN_IN":return Object(z.a)(Object(z.a)({},e),{},{logged:!0,invalidUser:!1});case"SIGN_OUT":return Object(z.a)(Object(z.a)({},e),{},{logged:!1,invalidUser:!1});case"INVALID_USER":return Object(z.a)(Object(z.a)({},e),{},{email:null,username:null,isLogged:!1,invalidUser:!0});default:return e}},W=Object(A.combineReducers)({UserInfo:R}),L=a(41),P=Object(A.createStore)(W,Object(K.composeWithDevTools)(Object(A.applyMiddleware)(L.a)));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d.a,{store:P},r.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.ac92392f.chunk.js.map