(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{199:function(e,t,a){e.exports=a(399)},204:function(e,t,a){},399:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(195),i=a.n(c),l=(a(204),a(17)),o=a(18),s=a(20),u=a(19),m=a(21),d=a(402),h=a(404),p=a(400),E=a(211),f=a(401),b=a(8),g=Object(b.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(f.a,{to:"/create"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/",className:"btn btn-floating pink lighten-1"},e.profile.initials)))});function N(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(f.a,{to:"/signup"},"Signup")),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/signin"},"Login")))}var j=Object(b.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(g,{profile:a}):r.a.createElement(N,null);return r.a.createElement("div",null,r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(E.a,{to:"/",className:"brand-logo"},"Phu Chau Plan"),n)))}),v=a(42),O=a.n(v);function y(e){var t=e.notifications;return r.a.createElement("div",null,r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user," "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"},O()(e.time.toDate()).fromNow()))}))))))}function C(e){return r.a.createElement("div",{className:"project-list section"},r.a.createElement("div",{className:"card z-depth-0 project-sumary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},e.project.title),r.a.createElement("p",null," ","Posted by ",e.project.authorFirstName," ",e.project.authorLastName),r.a.createElement("p",{className:"grey-text"},e.project.createdAt?O()(e.project.createdAt.toDate()).calendar():"N/A"))))}var S=function(e){var t=e.projects;return r.a.createElement("div",null,t&&t.map(function(e,t){return r.a.createElement(E.a,{to:"/project/"+e.id,key:t},r.a.createElement(C,{project:e,key:e.id}))}))},w=a(23),R=a(12),F=a(403),P=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(S,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(y,{notifications:n})))):r.a.createElement(F.a,{to:"/signin"})}}]),t}(n.Component),I=Object(R.d)(Object(b.b)(function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}}),Object(w.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:5,orderBy:["time","desc"]}]))(P);var k=Object(R.d)(Object(b.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}}),Object(w.firestoreConnect)([{collection:"projects"}]))(function(e){var t=e.project;return e.auth.uid?t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"}," ",t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null," ",t.createdAt?O()(t.createdAt.toDate()).calendar():"N/A")))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading Project...")):r.a.createElement(F.a,{to:"/signin"})}),x=a(27),A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(x.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(F.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component),U=Object(b.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}));var a}}})(A),_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(x.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(F.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"SIGN UP"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null))))}}]),t}(n.Component),L=Object(b.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,i=r(),l=c();i.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return l.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})}).then(function(){t({type:"SIGNUP_SUCCESS"})}).catch(function(e){t({type:"SIGNUP_ERROR",err:e})})}}(t))}}})(_),G=a(36),T=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(x.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create New Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create")))):r.a.createElement(F.a,{to:"/signin"})}}]),t}(n.Component),z=Object(b.b)(function(e){return{auth:e.firebase.auth}},function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,i=a().firebase.auth.uid;r.collection("projects").add(Object(G.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:i,createdAt:new Date})).then(function(){t({type:"CREATE_PROJECT",project:e})}).catch(function(e){t({type:"CREATE_PROJECT_ERROR",err:e})})}}(t))}}})(T),D=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(h.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:I}),r.a.createElement(p.a,{path:"/project/:id",component:k}),r.a.createElement(p.a,{path:"/signin",component:U}),r.a.createElement(p.a,{path:"/signup",component:L}),r.a.createElement(p.a,{path:"/create",component:z}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B={authError:null},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(G.a)({},e,{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(G.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("logout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(G.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(G.a)({},e,{authError:t.err.message});default:return e}},W={},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("create project error",t.err),e;default:return e}},H=a(56),K=Object(R.c)({auth:J,project:q,firestore:H.firestoreReducer,firebase:w.firebaseReducer}),Z=a(198),$=a(82),M=a.n($);a(392),a(397);M.a.initializeApp({apiKey:"AIzaSyBJn4ICRl7vUqztHuBWtl3jg9p1RjOGPZc",authDomain:"net-ninja-phuchau.firebaseapp.com",databaseURL:"https://net-ninja-phuchau.firebaseio.com",projectId:"net-ninja-phuchau",storageBucket:"net-ninja-phuchau.appspot.com",messagingSenderId:"1086277124140"}),M.a.firestore().settings({timestampsInSnapshots:!0});var Q=M.a,V=Object(R.e)(K,Object(R.d)(Object(R.a)(Z.a.withExtraArgument({getFirestore:H.getFirestore,getFirebase:w.getFirebase})),Object(H.reduxFirestore)(Q),Object(w.reactReduxFirebase)(Q,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));V.firebaseAuthIsReady.then(function(){i.a.render(r.a.createElement(b.a,{store:V},r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})})}},[[199,2,1]]]);
//# sourceMappingURL=main.f40d85da.chunk.js.map