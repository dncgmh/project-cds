(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,t,a){e.exports=a.p+"static/media/picture.f8c22d4f.svg"},51:function(e,t,a){e.exports=a(99)},56:function(e,t,a){},57:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),c=a.n(o),s=(a(56),a(3)),l=a(4),i=a(8),m=a(5),u=a(7),d=(a(57),a(6)),p=a(19),b=a(45),h=a(46),f=a(14),E={isAuthenticated:!1,loading:!1,message:"",user:{},_posts:[]},y={loading:!1,certs:[],posts:[]},g=Object(p.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER":return Object(f.a)({},e,{loading:!1,message:t.payload.message});case"SET_CURRENT_USER":return Object(f.a)({},e,{isAuthenticated:!!t.payload,loading:!1,user:t.payload});case"PROFILE_LOADING":return Object(f.a)({},e,{message:"",loading:!0});case"GET_POSTS":return Object(f.a)({},e,{_posts:t.payload,loading:!1});case"UPLOAD_CERT":return Object(f.a)({},e,{loading:!1,user:t.payload.data.user,message:t.payload.message});case"POST_VIDEO":return Object(f.a)({},e,{loading:!1,message:t.payload.message});default:return e}},admin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_POSTS_AD":return Object(f.a)({},e,{loading:!1,posts:t.payload});case"GET_CERT_AD":return Object(f.a)({},e,{loading:!1,certs:t.payload});case"APPROVE_POST_AD":return Object(f.a)({},e,{posts:t.payload,loading:!1});case"APPROVE_CERT_AD":return Object(f.a)({},e,{certs:t.payload,loading:!1});default:return e}}}),v=a(22),j=a.n(v),O=[h.a],N=Object(p.createStore)(g,{},Object(b.composeWithDevTools)(p.applyMiddleware.apply(void 0,O.concat([function e(t){return function(a){return function(n){localStorage.jwtToken&&j()(localStorage.jwtToken).exp<Date.now()/1e3&&(localStorage.clear(),t.dispatch(e())),a(n)}}}])))),k=a(102),w=a(104),C=a(101),S=a(100),x=a(16),T=a(2),_=a(11),P=a.n(_),A=function(e){e?P.a.defaults.headers.common.Authorization=e:delete P.a.defaults.headers.common.Authorization},R=a(15);P.a.defaults.baseURL="http://3.1.213.215:5000/";var D=function(e){return{type:"SET_CURRENT_USER",payload:e}},I=function(){return function(e){localStorage.removeItem("jwtToken"),A(!1),e(D(null))}},F=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={email:"",password:""},a.onChange=a.onChange.bind(Object(T.a)(Object(T.a)(a))),a.onSubmit=a.onSubmit.bind(Object(T.a)(Object(T.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onChange",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.login(this.state)}},{key:"render",value:function(){return r.a.createElement("form",{className:"form-row col-7 justify-center",style:{height:"35px"},onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group col-3"},r.a.createElement("input",{type:"email",name:"email",className:"form-control form-control-sm",id:"staticEmail2",placeholder:"Email",onChange:this.onChange,value:this.state.email})),r.a.createElement("div",{className:"form-group col-3"},r.a.createElement("input",{type:"password",name:"password",className:"form-control form-control-sm",id:"inputPassword2",placeholder:"Password",onChange:this.onChange,value:this.state.password})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn btn-sm btn-outline-secondary",style:{backgroundColor:"#419698",color:"white"}},"Sign in")),r.a.createElement("div",{className:"form-group pt-1 pl-2"},r.a.createElement("a",{href:!0},r.a.createElement("small",{id:"emailHelp",style:{color:"black"}},"Forgot password?"))))}}]),t}(n.Component),U=Object(d.b)(function(e){return{user:e.user,errors:e.errors}},{login:function(e){var t=e.email,a=e.password;return function(e){P.a.post("/api/auth/login",{email:t,password:a}).then(function(t){var a=t.data.data,n=a.token,r=a.user;localStorage.setItem("jwtToken",n.accessToken),A(n.accessToken),e(D(r))}).catch(function(t){e({type:"GET_ERROR",payload:t.response.data.errors}),R.toast.error(t.response.data.error)})}}})(F),G=a(47),L=a.n(G),M=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onLogout",value:function(e){e.preventDefault(),this.props.logout()}},{key:"render",value:function(){var e=this.props.user.user;return r.a.createElement("div",{className:"collapse navbar-collapse font_size_menu",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav ml-md-auto d-md-flex"},"admin"===e.role&&r.a.createElement(S.a,{to:"/admin",className:"btn btn-secondary btn-sm mr-3 my-auto"},"Admin"),r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{className:"btn btn-secondary btn-sm",type:"button"},r.a.createElement("img",{src:L.a,height:"32px"})," ".concat(e.firstName," ").concat(e.lastName)),r.a.createElement("button",{type:"button",className:"btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("span",{className:"sr-only"},"Toggle Dropdown")),r.a.createElement("div",{className:"dropdown-menu"},r.a.createElement(S.a,{to:"/my-certificate",class:"dropdown-item"},"My certifacte"),r.a.createElement(S.a,{to:"/my-post",class:"dropdown-item"},"My post"),r.a.createElement(S.a,{to:"/",class:"dropdown-item",onClick:this.onLogout.bind(this)},"Logout")))))}}]),t}(n.Component),z={logout:I},B=Object(d.b)(function(e){return{user:e.user}},z)(M),V=a(48),W=a.n(V),J=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).responseFacebook=a.responseFacebook.bind(Object(T.a)(Object(T.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"responseFacebook",value:function(e){this.props.loginFacebook(e)}},{key:"render",value:function(){var e=this.props.user.isAuthenticated;return r.a.createElement(r.a.Fragment,null,!e&&r.a.createElement("div",{className:"icon-bar"},r.a.createElement(W.a,{appId:"1930035377289135",autoLoad:!0,fields:"first_name,last_name,name,email,picture",callback:this.responseFacebook,cssClass:"facebook",icon:r.a.createElement("i",{className:"fab fa-facebook-f"},"\xa0")})))}}]),t}(n.Component),Y={loginFacebook:function(e){return function(t){P.a.post("/api/auth/facebook",e).then(function(e){var a=e.data.data,n=a.token,r=a.user;localStorage.setItem("jwtToken",n.accessToken),A(n.accessToken),t(D(r))}).catch(function(e){t({type:"GET_ERROR",payload:e.response.data.errors}),R.toast.error(e.response.data.error)})}}},H=Object(d.b)(function(e){return{user:e.user}},Y)(J),$=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.user.isAuthenticated;return console.log(e),r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark",style:{backgroundColor:"#c1cad0"}},r.a.createElement(S.a,{to:"/",className:"navbar-brand col-5",style:{height:"35px"}},"Project CDS"),e?r.a.createElement(B,null):r.a.createElement(U,null))}}]),t}(n.Component),q=Object(d.b)(function(e){return{user:e.user}},{})($);function K(){return r.a.createElement("div",{className:"container-fluid pt-4 mt-4",style:{backgroundColor:"#434649",color:"white",position:"fixed",left:0,bottom:0,width:"100%"}},r.a.createElement("small",{style:{paddingLeft:"8%",fontSize:"12px",fontWeight:"bold"}},r.a.createElement("a",{className:"text-white pr-3",href:!0},"User Agreement"),r.a.createElement("a",{className:"text-white pr-3",href:!0},"Privacy Policy"),r.a.createElement("a",{className:"text-white pr-3",href:!0},"Community Guidelines"),r.a.createElement("a",{className:"text-white pr-3",href:!0},"Cookie Policy"),r.a.createElement("a",{className:"text-white pr-3",href:!0},"Copyright Policy"),r.a.createElement("a",{className:"text-white pr-3",href:!0},"Guest Controls"),r.a.createElement("a",{className:"text-white pr-3",href:!0},"Language")))}var Q=a(105),X=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(n.Component),Z=Object(Q.a)(X),ee=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={firstName:"",lastName:"",email:"",password:""},a.onChange=a.onChange.bind(Object(T.a)(Object(T.a)(a))),a.onSubmit=a.onSubmit.bind(Object(T.a)(Object(T.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.user.message&&this.setState({firstName:"",lastName:"",email:"",password:""})}},{key:"onChange",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.register(this.state,this.props.history)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card w-50 col-5 px-0",style:{margin:"auto"}},r.a.createElement("div",{className:"card-header text-center",style:{backgroundColor:"#f6f8fa"}},r.a.createElement("p",{style:{fontSize:"21px"}},"Be great at what you do"),r.a.createElement("p",{style:{fontSize:"16px"}},"Get started - it's free.")),r.a.createElement("form",{className:"card-body",style:{backgroundColor:"#edf0f3"},onSubmit:this.onSubmit},r.a.createElement("label",null,"First name"),r.a.createElement("input",{type:"text",name:"firstName",className:"form-control form-control-sm",onChange:this.onChange,value:this.state.firstName}),r.a.createElement("label",null,"Last name"),r.a.createElement("input",{type:"text",name:"lastName",className:"form-control form-control-sm",onChange:this.onChange,value:this.state.lastName}),r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",name:"email",className:"form-control form-control-sm",onChange:this.onChange,value:this.state.email}),r.a.createElement("label",null,"Password (6 or more characters)"),r.a.createElement("input",{type:"password",name:"password",className:"form-control form-control-sm",onChange:this.onChange,value:this.state.password}),r.a.createElement("small",{className:"text-muted"},"By clicking Join now, you agree to the",r.a.createElement("a",{className:"text-muted",href:!0},"LinkedIn User Agreement"),",",r.a.createElement("a",{className:"text-muted",href:!0},"Privacy Policy"),",",r.a.createElement("a",{className:"text-muted",href:!0},"Cookie Policy"),"."),r.a.createElement("p",null,r.a.createElement("button",{type:"submit",className:"btn btn-primary w-100",style:{backgroundColor:"#419698"}},"Join now")))))}}]),t}(n.Component),te={register:function(e,t){var a=e.firstName,n=e.lastName,r=e.email,o=e.password;return function(e){P.a.post("/api/auth/register",{firstName:a,lastName:n,email:r,password:o}).then(function(t){e({type:"REGISTER",payload:t.data}),R.toast.success(t.data.message),setTimeout(function(){R.toast.info("Now you can login")},2100)}).catch(function(t){e({type:"GET_ERROR",payload:t.response.data.errors})})}}},ae=Object(d.b)(function(e){return{user:e.user,errors:e.errors}},te)(ee),ne=a(103),re=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={redirectToReferrer:!1},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=(this.props.location.state||{from:{pathname:"/"}}).from;if(this.state.redirectToReferrer)return r.a.createElement(ne.a,{to:e});var t=this.props.user.isAuthenticated;return r.a.createElement("div",{className:"container-fluid pt-4"},!t&&r.a.createElement(ae,null),r.a.createElement(H,null))}}]),t}(n.Component),oe=Object(d.b)(function(e){return{user:e.user,error:e.error}},{})(re),ce=function(e){var t=e.name,a=e.value,n=(e.error,e.onChange);e.onBlur;return r.a.createElement("div",{className:"custom-file"},r.a.createElement("input",{type:"file",className:"custom-file-input",id:"customFile",onChange:n,name:t,accept:"image/*"}),r.a.createElement("label",{className:"custom-file-label",htmlFor:"customFile"},a&&a.name||"Choose file"))},se=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length},le=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={selfie:null,front:null,back:null},e.onChange=e.onChange.bind(Object(T.a)(Object(T.a)(e))),e.onSubmit=e.onSubmit.bind(Object(T.a)(Object(T.a)(e))),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onChange",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.files[0]))}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.uploadCert(this.state)}},{key:"render",value:function(){var e=this.props.user.user.image;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card w-50 col-5 px-0",style:{margin:"auto"}},r.a.createElement("div",{className:"card-header text-center",style:{backgroundColor:"#f6f8fa"}},r.a.createElement("p",{style:{fontSize:"21px"}},"Upload your identification information"),r.a.createElement("p",{style:{fontSize:"16px"}},"Let us can understand you more.")),r.a.createElement("form",{className:"card-body",style:{backgroundColor:"#edf0f3"},onSubmit:this.onSubmit},r.a.createElement("label",null,"Selfie"),r.a.createElement(ce,{name:"selfie",value:this.state.selfie,onChange:this.onChange}),r.a.createElement("label",null,"Front of identity card"),r.a.createElement(ce,{name:"front",value:this.state.front,onChange:this.onChange}),r.a.createElement("label",null,"Back of identity card"),r.a.createElement(ce,{name:"back",value:this.state.back,onChange:this.onChange}),r.a.createElement("p",null,r.a.createElement("button",{type:"submit",className:"btn btn-primary w-100 mt-2",style:{backgroundColor:"#419698"}},se(e)?"Upload":"Update")))))}}]),t}(n.Component),ie={uploadCert:function(e){var t=e.selfie,a=e.front,n=e.back;return function(e){var r=new FormData;r.append("selfie",t),r.append("front",a),r.append("back",n),console.log(r),P.a.post("/api/user/cert-image",r,{headers:{"content-type":"multipart/form-data"}}).then(function(t){e({type:"UPLOAD_CERT",payload:t.data}),R.toast.success(t.data.message)}).catch(function(e){console.log(e.response),R.toast.error(e.response.data.error)})}}},me=Object(d.b)(function(e){return{user:e.user}},ie)(le);var ue=function(e){var t=e.image,a=e.title;return r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("div",{className:"card",style:{height:"auto",width:"200px",objectFit:"cover"}},r.a.createElement("img",{src:t,className:"card-img-top",alt:t,style:{height:"200px",width:"200px",objectFit:"cover"}}),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-title"},a))))},de=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.user.user.image;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card col-8 px-0",style:{margin:"auto"}},r.a.createElement("div",{className:"card-header text-center",style:{backgroundColor:"#f6f8fa"}},r.a.createElement("p",{style:{fontSize:"21px"}},"My certificate")),r.a.createElement("div",{className:"card-body row mx-0 py-4",style:{backgroundColor:"rgb(237, 240, 243)"}},e?r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,{image:e.selfie,title:"selfie"}),r.a.createElement(ue,{image:e.frontIdentityCard,title:"frontIdentityCard"}),r.a.createElement(ue,{image:e.backIdentityCard,title:"backIdentityCard"}),r.a.createElement(S.a,{to:"/add-certificate",className:"btn btn-primary w-100 mt-3",style:{backgroundColor:"#419698"}},"Update")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},"You have not added your certificate")),r.a.createElement(S.a,{to:"/add-certificate",className:"btn btn-primary w-100",style:{backgroundColor:"#419698"}},"Add Now")))))}}]),t}(n.Component),pe=Object(d.b)(function(e){return{user:e.user}},{})(de),be=a(50),he=Object(d.b)(function(e){return{user:e.user}})(function(e){var t=e.component,a=e.user,n=Object(be.a)(e,["component","user"]);return r.a.createElement(C.a,Object.assign({},n,{render:function(e){return console.log(a),!0===a.isAuthenticated?r.a.createElement(t,e):r.a.createElement(ne.a,{to:{pathname:"/",state:{from:e.location}}})}}))}),fe=function(e){var t=e.value,a=e.onChoose;return r.a.createElement("div",{className:"dropdown mb-3"},r.a.createElement("button",{className:"btn btn-warning dropdown-toggle shadow",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},t),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},r.a.createElement("button",{className:"dropdown-item",name:"music",onClick:a},"Music"),r.a.createElement("button",{className:"dropdown-item",name:"comedy",onClick:a},"Comedy"),r.a.createElement("button",{className:"dropdown-item",name:"film",onClick:a},"Film")))},Ee=(a(93),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={link:"",subject:"",genre:"music",description:""},e.onChange=e.onChange.bind(Object(T.a)(Object(T.a)(e))),e.onSubmit=e.onSubmit.bind(Object(T.a)(Object(T.a)(e))),e.onChoose=e.onChoose.bind(Object(T.a)(Object(T.a)(e))),e.onPaste=e.onPaste.bind(Object(T.a)(Object(T.a)(e))),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onChange",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"onChoose",value:function(e){console.log(e.target.name),this.setState({genre:e.target.name})}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.postVideo(this.state)}},{key:"onPaste",value:function(e){console.log("get");var t=e.clipboardData||window.clipboardData;console.log(t.getData("text/plain"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card w-50 col-5 px-0",style:{margin:"auto"}},r.a.createElement("div",{className:"card-header text-center",style:{backgroundColor:"#f6f8fa"}},r.a.createElement("p",{style:{fontSize:"21px"}},"Share your favorite videos to everyone"),r.a.createElement("p",{style:{fontSize:"16px"}},"And enjoy them together.")),r.a.createElement("form",{className:"card-body",style:{backgroundColor:"#edf0f3"},onSubmit:this.onSubmit},r.a.createElement("label",null,"Link"),r.a.createElement("input",{type:"text",name:"link",className:"form-control form-control-sm",onChange:this.onChange,value:this.state.link}),r.a.createElement("label",null,"Subject"),r.a.createElement("input",{type:"text",name:"subject",className:"form-control form-control-sm",onChange:this.onChange,value:this.state.subject}),r.a.createElement("label",null,"Genre"),r.a.createElement(fe,{name:"genre",onChoose:this.onChoose,value:this.state.genre}),r.a.createElement("label",null,"Description (6 or more characters)"),r.a.createElement("input",{type:"text",name:"description",className:"form-control form-control-sm",onChange:this.onChange,value:this.state.description}),r.a.createElement("button",{type:"submit",className:"btn btn-primary w-100 mt-3",style:{backgroundColor:"#419698"}},"Post"))))}}]),t}(n.Component)),ye={postVideo:function(e){return function(t){P.a.post("/api/post/post",e).then(function(e){t({type:"POST_VIDEO",payload:e.data}),R.toast.success(e.data.message)}).catch(function(e){R.toast.error(e.response.data.errors)})}}},ge=Object(d.b)(function(e){return{user:e.user}},ye)(Ee),ve=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getPosts()}},{key:"render",value:function(){var e,t=this.props.user._posts;return t.length&&(e=t.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("th",{scope:"row"},t+1),r.a.createElement("td",null,e.link),r.a.createElement("td",null,e.subject),r.a.createElement("td",null,e.genre))})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card col-8 px-0",style:{margin:"auto"}},r.a.createElement("div",{className:"card-header text-center",style:{backgroundColor:"#f6f8fa"}},r.a.createElement("p",{style:{fontSize:"21px"}},"My Post")),r.a.createElement("div",{className:"card-body row mx-0 py-4",style:{backgroundColor:"rgb(237, 240, 243)"}},t?r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Link"),r.a.createElement("th",{scope:"col"},"Subject"),r.a.createElement("th",{scope:"col"},"Genre"))),r.a.createElement("tbody",null,e)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},"You have not added your certificate"))),r.a.createElement(S.a,{to:"/add-post",className:"btn btn-primary w-100",style:{backgroundColor:"#419698"}},"Add More"))))}}]),t}(n.Component),je={getPosts:function(){return function(e){P.a.get("/api/user/posts").then(function(t){e({type:"GET_POSTS",payload:t.data.data.posts})})}}},Oe=Object(d.b)(function(e){return{user:e.user}},je)(ve),Ne=function(e){var t=e.label,a=e.to,n=e.activeOnlyWhenExact;return r.a.createElement(C.a,{path:a,exact:n,children:function(e){var n=e.match?"my-active":"";return r.a.createElement(S.a,{to:a,style:{textDecoration:"none"}},r.a.createElement("li",{className:"list-group-item dropdown-item ".concat(n)},t))}})},ke=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){"admin"!==this.props.user.user.role&&this.props.history.push("/")}},{key:"componentWillUpdate",value:function(){"/admin"===this.props.history.location.pathname&&this.props.history.push("/admin/dashboard")}},{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-3"},r.a.createElement("ul",{className:"list-group shadow-lg"},r.a.createElement(Ne,{to:"/admin/dashboard",label:"DashBoard"}),r.a.createElement(Ne,{to:"/admin/users",label:"Users"}),r.a.createElement(Ne,{to:"/admin/certs",label:"User Cert"}),r.a.createElement(Ne,{to:"/admin/posts",label:"Posts"})))}}]),t}(n.Component),we=Object(d.b)(function(e){return{user:e.user}},null,null,{pure:!1})(ke),Ce=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){a.props.getPosts()},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onApprove",value:function(e,t){this.props.approvePost({postId:e,state:t})}},{key:"render",value:function(){var e,t=this,a=this.props.admin.posts;return a.length&&(e=a.map(function(e,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",{className:"cs-td"},e.userId._id),r.a.createElement("td",{className:"cs-td"},e.link),r.a.createElement("td",{className:"cs-td"},e.subject),r.a.createElement("td",{className:"cs-td"},e.genre),r.a.createElement("td",{className:"cs-td"},e.description),r.a.createElement("td",{className:"cs-td"},r.a.createElement("button",{type:"button",className:"btn btn-outline-success btn38 text-dark",onClick:function(){return t.onApprove(e._id,"approved")}},r.a.createElement("i",{className:"fas fa-check"})),r.a.createElement("button",{type:"button",className:"btn btn-outline-warning btn38 text-danger",onClick:function(){return t.onApprove(e._id,"rejected")}},r.a.createElement("i",{className:"fas fa-times"}))))})),r.a.createElement("div",{className:"col-md-9 ts-col py-3 bg-white"},r.a.createElement("table",{className:"table table-responsive d-md-table shadow-sm"},r.a.createElement("thead",{className:"thead-inverse detail-table"},r.a.createElement("tr",null,r.a.createElement("th",{style:{width:"10%"}},"User Id"),r.a.createElement("th",{style:{width:"20%"}},"Link"),r.a.createElement("th",{style:{width:"15%"}},"Subject"),r.a.createElement("th",{style:{width:"10%"}},"Genre"),r.a.createElement("th",{style:{width:"20%"}},"Description"),r.a.createElement("th",{style:{width:"15%"}},"Action"))),r.a.createElement("tbody",null,e)))}}]),t}(n.Component),Se={getPosts:function(){return function(e){P.a.get("/api/admin/posts").then(function(t){return e({type:"GET_POSTS_AD",payload:t.data.data.posts})})}},approvePost:function(e){return function(t){P.a.post("/api/admin/approve-post",e).then(function(e){return t({type:"APPROVE_POST_AD",payload:e.data.data.posts})})}}},xe=Object(d.b)(function(e){return{admin:e.admin}},Se)(Ce),Te=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){a.props.getCerts()},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onApprove",value:function(e,t){this.props.approveCert({userId:e,state:t})}},{key:"render",value:function(){var e,t=this,a=this.props.admin.certs;return a.length&&(e=a.map(function(e,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",{className:"cs-td"},e._id),r.a.createElement("td",{className:"cs-td"},r.a.createElement("img",{className:"cs-img",src:"/".concat(e.image.selfie)})),r.a.createElement("td",{className:"cs-td"},r.a.createElement("img",{className:"cs-img",src:"/".concat(e.image.frontIdentityCard)})),r.a.createElement("td",{className:"cs-td"},r.a.createElement("img",{className:"cs-img",src:"/".concat(e.image.backIdentityCard)})),r.a.createElement("td",{className:"cs-td"},r.a.createElement("button",{type:"button",className:"btn btn-outline-success btn38 text-dark",onClick:function(){return t.onApprove(e._id,"approved")}},r.a.createElement("i",{className:"fas fa-check"})),r.a.createElement("button",{type:"button",className:"btn btn-outline-warning btn38 text-danger",onClick:function(){return t.onApprove(e._id,"rejected")}},r.a.createElement("i",{className:"fas fa-times"}))))})),r.a.createElement("div",{className:"col-md-9 ts-col py-3 bg-white"},r.a.createElement("table",{className:"table table-responsive d-md-table shadow-sm"},r.a.createElement("thead",{className:"thead-inverse detail-table"},r.a.createElement("tr",null,r.a.createElement("th",{style:{width:"15%"}},"User Id"),r.a.createElement("th",{style:{width:"20%"}},"Selfie"),r.a.createElement("th",{style:{width:"20%"}},"Front"),r.a.createElement("th",{style:{width:"20%"}},"Back"),r.a.createElement("th",{style:{width:"15%"}},"Action"))),r.a.createElement("tbody",null,e)))}}]),t}(n.Component),_e={getCerts:function(){return function(e){P.a.get("/api/admin/certs").then(function(t){return e({type:"GET_CERT_AD",payload:t.data.data.certs})})}},approveCert:function(e){return function(t){P.a.post("/api/admin/approve-cert",e).then(function(e){return t({type:"APPROVE_CERT_AD",payload:e.data.data.certs})})}}},Pe=Object(d.b)(function(e){return{admin:e.admin}},_e)(Te),Ae=function(){return r.a.createElement(k.a,null,r.a.createElement(Z,null,r.a.createElement(q,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(w.a,null,r.a.createElement(C.a,{exact:!0,path:"/",component:oe}),r.a.createElement(he,{exact:!0,path:"/add-certificate",component:me}),r.a.createElement(he,{exact:!0,path:"/my-certificate",component:pe}),r.a.createElement(he,{exact:!0,path:"/my-post",component:Oe}),r.a.createElement(he,{exact:!0,path:"/add-post",component:ge}),r.a.createElement(he,{path:"/admin",component:we})),r.a.createElement(w.a,null,r.a.createElement(he,{exact:!0,path:"/admin/posts",component:xe}),r.a.createElement(he,{exact:!0,path:"/admin/certs",component:Pe})))),r.a.createElement(K,null)))},Re=function(e){if(localStorage.jwtToken){A(localStorage.jwtToken);var t=j()(localStorage.jwtToken);localStorage.setItem("expiresAt",t.exp);var a=Date.now()/1e3;t.exp<a?(e.dispatch(I()),window.location.href="/"):((n=e.dispatch)({type:"PROFILE_LOADING"}),P.a.get("/api/auth").then(function(e){n({type:"SET_CURRENT_USER",payload:e.data.data.user})}))}var n};a(98);Re(N);var De=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{store:N},r.a.createElement(Ae,null),r.a.createElement(R.ToastContainer,{autoClose:2e3}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(De,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[51,1,2]]]);
//# sourceMappingURL=main.a9191f64.chunk.js.map