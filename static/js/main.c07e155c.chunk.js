(this["webpackJsonpsocial-network-react"]=this["webpackJsonpsocial-network-react"]||[]).push([[0],{102:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var a=n(42),r=n(8),o={dialogs:[{id:10,name:"Jeniy"},{id:11,name:"Dimych"},{id:12,name:"Sveta"},{id:13,name:"Sasha"},{id:14,name:"Vika"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your day"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},s=function(e){return{type:"dialogs/SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/SEND-MESSAGE":var n=t.newMessageBody;return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[{id:6,message:n}])});default:return e}}},133:function(e,t,n){e.exports={avatar:"User_avatar__ttca8"}},134:function(e,t,n){e.exports=n.p+"static/media/user.86a3e52d.png"},135:function(e,t,n){e.exports=n.p+"static/media/preloader.2ca02761.svg"},136:function(e,t,n){e.exports={item:"Post_item__nskEi"}},137:function(e,t,n){e.exports={description:"ProfileInfo_description__1Pyx5"}},138:function(e,t,n){e.exports={formSummaryError:"Login_formSummaryError__1z14I"}},164:function(e,t,n){e.exports=n(290)},247:function(e,t,n){},251:function(e,t,n){},26:function(e,t,n){e.exports={nav:"Navbar_nav__27UmN",item:"Navbar_item__3k8Ku",active:"Navbar_active__1UVo4"}},290:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(63),s=n.n(o),u=n(6),i=n(126),c=n(127),l=n(9),p=n.n(l),m=n(21),f=n(42),d=n(8),g=n(128).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"a581eddc-6b2a-4437-9b2a-cfc6d6cb8bb3"}}),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return g.get("users?page=".concat(e,"&count=").concat(t))},v=function(e){return g.delete("follow/".concat(e))},h=function(e){return g.post("follow/".concat(e))},b=function(e){return g.get("profile/".concat(e))},O=function(e){return g.get("profile/status/".concat(e))},S=function(e){return g.put("profile/status",{status:e})},w=function(){return g.get("auth/me")},_=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return g.post("auth/login",{email:e,password:t,remeberMe:n})},j=function(){return g.delete("auth/login")},y="profile/ADD-POST",P={posts:[{id:1,message:"Hi, how are you?",likesCount:5},{id:2,message:"I'ts my first post",likesCount:3},{id:3,message:"Yo",likesCount:101}],profile:null,status:""},C=function(e){return{type:"profile/SET_STATUS",status:e}},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:var n={id:4,message:t.newPostText,likesCount:0};return Object(d.a)({},e,{posts:[].concat(Object(f.a)(e.posts),[n]),newPostText:""});case"profile/SET_USER_PROFILE":return Object(d.a)({},e,{profile:t.profile});case"profile/SET_STATUS":return Object(d.a)({},e,{status:t.status});case"profile/DELETE_POST":return Object(d.a)({},e,{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}},N=n(102),I={},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I;arguments.length>1&&arguments[1];return e},T="users/FOLLOW",U={users:[],pageSize:10,portionSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},A=function(e){return{type:T,userId:e}},F=function(e){return{type:"users/UNFOLLOW",userId:e}},L=function(e){return{type:"users/SET_CURRENT_PAGE",currentPage:e}},z=function(e){return{type:"users/TOGGLE_IS_FETCHING",isFetching:e}},G=function(e,t){return{type:"users/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(d.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(d.a)({},e,{followed:!0}):e}))});case"users/UNFOLLOW":return Object(d.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(d.a)({},e,{followed:!1}):e}))});case"users/SET_USERS":return Object(d.a)({},e,{users:t.users});case"users/SET_CURRENT_PAGE":return Object(d.a)({},e,{currentPage:t.currentPage});case"users/SET_TOTAL_USERS_COUNT":return Object(d.a)({},e,{totalUsersCount:t.count});case"users/TOGGLE_IS_FETCHING":return Object(d.a)({},e,{isFetching:t.isFetching});case"users/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(d.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(f.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},R=n(43),D={id:null,email:null,login:null,isAuth:!1},B=function(e,t,n,a){return{type:"auth/SET_USER_DATA",payload:{id:e,email:t,login:n,isAuth:a}}},W=function(){return function(){var e=Object(m.a)(p.a.mark((function e(t){var n,a,r,o,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,o=a.login,s=a.email,t(B(r,s,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(d.a)({},e,{},t.payload);default:return e}},J={initialized:!1},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCESS":return Object(d.a)({},e,{initialized:!0});default:return e}},Y=Object(u.c)({profilePage:k,dialogsPage:N.a,sidebar:x,usersPage:M,auth:H,form:i.a,app:V}),q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,K=Object(u.e)(Y,q(Object(u.a)(c.a)));window.store=K;var X=K,Q=(n(247),n(17)),Z=n(18),$=n(20),ee=n(19),te=n(27),ne=n(10),ae=(n(251),n(12)),re=n(26),oe=n.n(re),se=function(){return r.a.createElement("nav",{className:oe.a.nav},r.a.createElement("div",{className:oe.a.item},r.a.createElement(ae.b,{to:"/profile",activeClassName:oe.a.active},"Profile")),r.a.createElement("div",{className:oe.a.item},r.a.createElement(ae.b,{to:"/dialogs",activeClassName:oe.a.active},"Messages")),r.a.createElement("div",{className:oe.a.item},r.a.createElement(ae.b,{to:"/users",activeClassName:oe.a.active},"Users")),r.a.createElement("div",{className:oe.a.item},r.a.createElement(ae.b,{to:"/settings",activeClassName:oe.a.active},"Settings")))},ue=n(67),ie=n(53),ce=n(69),le=n.n(ce),pe=n(132),me=n.n(pe),fe=function(e){for(var t=e.totalUsersCount,n=e.pageSize,o=e.currentPage,s=e.onPageChanged,u=e.portionSize,i=Math.ceil(t/n),c=[],l=1;l<=i;l++)c.push(l);var p=Math.ceil(i/u),m=Object(a.useState)(1),f=Object(ie.a)(m,2),d=f[0],g=f[1],E=(d-1)*u+1,v=d*u;return r.a.createElement("div",{className:le.a.pagination},d>1&&r.a.createElement("button",{onClick:function(){return g(d-1)}},"PREV"),c.filter((function(e){return e>=E&&e<=v})).map((function(e){return r.a.createElement("span",{className:me()(Object(ue.a)({},le.a.selectedPage,o===e),le.a.pageNumber),key:e,onClick:function(){s(e)}},e)})),p>d&&r.a.createElement("button",{onClick:function(){g(d+1)}},"NEXT"))},de=n(133),ge=n.n(de),Ee=n(134),ve=n.n(Ee),he=function(e){var t=e.followingInProgress,n=e.unfollow,a=e.follow,o=e.user,s=e.index;return r.a.createElement("div",{key:s},r.a.createElement("span",null,r.a.createElement("div",{className:ge.a.avatar},r.a.createElement(ae.b,{to:"/profile/"+o.id},r.a.createElement("img",{alt:"Avatar",src:null!=o.photos.small?o.photos.small:ve.a}))),r.a.createElement("div",null,o.followed?r.a.createElement("button",{disabled:t.some((function(e){return e===o.id})),onClick:function(){n(o.id)}},"Unfollow"):r.a.createElement("button",{disabled:t.some((function(e){return e===o.id})),onClick:function(){a(o.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,o.name),r.a.createElement("div",null,o.status)),r.a.createElement("span",null,r.a.createElement("div",null,"user.location.country"),r.a.createElement("div",null,"user.location.city"))))},be=function(e){var t=e.totalUsersCount,n=e.pageSize,a=e.portionSize,o=e.currentPage,s=e.onPageChanged,u=e.users,i=e.followingInProgress,c=e.unfollow,l=e.follow;return r.a.createElement("div",null,r.a.createElement(fe,{totalUsersCount:t,pageSize:n,portionSize:a,currentPage:o,onPageChanged:s}),r.a.createElement("div",null,u.map((function(e,t){return r.a.createElement(he,{user:e,index:t,followingInProgress:i,unfollow:c,follow:l})}))))},Oe=n(135),Se=n.n(Oe),we=function(){return r.a.createElement("div",null,r.a.createElement("img",{src:Se.a,alt:"preloader"}))},_e=n(64),je=function(e){return e.usersPage.users},ye=function(e){return e.usersPage.pageSize},Pe=function(e){return e.usersPage.portionSize},Ce=function(e){return e.usersPage.totalUsersCount},ke=function(e){return e.usersPage.currentPage},Ne=function(e){return e.usersPage.isFetching},Ie=function(e){return e.usersPage.followingInProgress},xe=function(e){Object($.a)(n,e);var t=Object(ee.a)(n);function n(){var e;Object(Q.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.requestUsers(t)},e}return Object(Z.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(we,null):null,r.a.createElement(be,{users:this.props.users,pageSize:this.props.pageSize,portionSize:this.props.portionSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,unfollow:this.props.unfollow,follow:this.props.follow,isFetching:this.props.isFetching,followingInProgress:this.props.followingInProgress}))}}]),n}(a.Component),Te=Object(u.d)(Object(ne.b)((function(e){return{users:je(e),pageSize:ye(e),portionSize:Pe(e),totalUsersCount:Ce(e),currentPage:ke(e),isFetching:Ne(e),followingInProgress:Ie(e)}}),{follow:function(e){return function(){var t=Object(m.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(G(!0,e)),t.next=3,h(e);case 3:0===t.sent.data.resultCode&&n(A(e)),n(G(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(m.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(G(!0,e)),t.next=3,v(e);case 3:0===t.sent.data.resultCode&&n(F(e)),n(G(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:L,toggleFollowingProgress:G,requestUsers:function(e,t){return function(){var n=Object(m.a)(p.a.mark((function n(a){var r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(z(!0)),a(L(e)),n.next=4,E(e,t);case 4:r=n.sent,a(z(!1)),a({type:"users/SET_USERS",users:r.data.items}),a({type:"users/SET_TOTAL_USERS_COUNT",count:r.data.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}),_e.a)(xe),Ue=function(e){Object($.a)(n,e);var t=Object(ee.a)(n);function n(){var e;Object(Q.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={count:0},e.increment=function(){e.setState({count:e.state.count+1})},e}return Object(Z.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Count: ",this.state.count),r.a.createElement("button",{onClick:this.increment},"Increment"))}}]),n}(a.Component),Ae=n(124),Fe=n(125),Le=n(35),ze=n(89),Ge=n.n(ze),Me=n(136),Re=n.n(Me),De=function(e){var t=e.message,n=e.likesCount;return r.a.createElement("div",{className:Re.a.item},r.a.createElement("img",{src:"https://international-advisory-experts.com/wp-content/uploads/2019/02/avatar-1-.png"}),t,r.a.createElement("div",null,r.a.createElement("span",null,"like "),n))},Be=n(38),We=Object(Le.a)(15),He=Object(Fe.a)({form:"profileAddPostForm"})((function(e){var t=e.handleSubmit;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement(Ae.a,{type:"textarea",name:"newPostText",component:Be.b,placeholder:"Enter your text",validate:[Le.b,We]})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Add post")))})),Je=function(e){var t=e.profilePage,n=e.addPost,a=t.posts.map((function(e){return r.a.createElement(De,{message:e.message,key:e.id,likesCount:e.likesCount})}));return r.a.createElement("div",{className:Ge.a.postsBlock},r.a.createElement("h3",null,"My posts"),r.a.createElement(He,{onSubmit:function(e){n(e.newPostText)}}),r.a.createElement("div",{className:Ge.a.posts},a))},Ve=Object(ne.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addPost:function(t){e(function(e){return{type:y,newPostText:e}}(t))}}}))(Je),Ye=n(137),qe=n.n(Ye),Ke=function(e){var t=Object(a.useState)(!1),n=Object(ie.a)(t,2),o=n[0],s=n[1],u=Object(a.useState)(e.status),i=Object(ie.a)(u,2),c=i[0],l=i[1];Object(a.useEffect)((function(){l(e.status)}),[e.status]);return r.a.createElement(r.a.Fragment,null,!o&&r.a.createElement("div",null,r.a.createElement("span",{onDoubleClick:function(){s(!0)}},e.status||"not status")),o&&r.a.createElement("div",null,r.a.createElement("input",{autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(c)},onChange:function(e){l(e.currentTarget.value)},type:"text",value:c})))},Xe=function(e){var t=e.profile,n=e.status,a=e.updateStatus;if(!t)return r.a.createElement(we,null);var o=t.contacts,s=o.facebook,u=o.website,i=o.vk,c=o.twitter,l=o.instagram,p=o.youtube,m=o.github,f=o.mainLink;return r.a.createElement("div",null,r.a.createElement("div",{className:qe.a.description},r.a.createElement("img",{src:t.photos.large,alt:"Large avatar"}),r.a.createElement(Ke,{status:n,updateStatus:a}),r.a.createElement("div",null,"Full name: ",t.fullName),r.a.createElement("div",null,"About me: ",t.aboutMe),r.a.createElement("div",null,"Looking for a job: ",t.lookingForAJob?"Yes":"No"),r.a.createElement("div",null,"Looking for a job description: ",t.lookingForAJobDescription),r.a.createElement("div",null,"Contacts:",s?r.a.createElement("div",null,"Facebook: ",s):null,u?r.a.createElement("div",null,"Website: ",u):null,i?r.a.createElement("div",null,"VK: ",i):null,c?r.a.createElement("div",null,"Twitter: ",c):null,l?r.a.createElement("div",null,"Instagram: ",l):null,p?r.a.createElement("div",null,"Youtube: ",p):null,m?r.a.createElement("div",null,"Github: ",m):null,f?r.a.createElement("div",null,"MainLink: ",f):null)))},Qe=function(e){var t=e.profile,n=e.status,a=e.updateStatus;return r.a.createElement("div",null,r.a.createElement(Xe,{profile:t,status:n,updateStatus:a}),r.a.createElement(Ve,null))},Ze=function(e){Object($.a)(n,e);var t=Object(ee.a)(n);function n(){return Object(Q.a)(this,n),t.apply(this,arguments)}return Object(Z.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Qe,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})))}}]),n}(a.Component),$e=Object(u.d)(Object(ne.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(){var t=Object(m.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e);case 2:a=t.sent,n({type:"profile/SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(m.a)(p.a.mark((function t(n){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:a=t.sent,n(C(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(m.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e);case 2:0===t.sent.data.resultCode&&n(C(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),te.f,_e.a)(Ze),et=n(92),tt=n.n(et),nt=function(e){return r.a.createElement("header",{className:tt.a.header},r.a.createElement("img",{src:"https://seeklogo.net/wp-content/uploads/2017/04/New-Google-Earth-logo.png"}),r.a.createElement("div",{className:tt.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"Log out ")):r.a.createElement(ae.b,{to:"/login"},"Login")))},at=function(e){Object($.a)(n,e);var t=Object(ee.a)(n);function n(){return Object(Q.a)(this,n),t.apply(this,arguments)}return Object(Z.a)(n,[{key:"render",value:function(){return r.a.createElement(nt,this.props)}}]),n}(r.a.Component),rt=Object(ne.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:0===e.sent.data.resultCode&&t(B(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(at),ot=n(138),st=n.n(ot),ut=Object(Le.a)(30),it=Object(Fe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement(Ae.a,{name:"email",type:"text",placeholder:"Email",component:Be.a,validate:[Le.b,ut]})),r.a.createElement("div",null,r.a.createElement(Ae.a,{name:"password",type:"password",placeholder:"Password",component:Be.a,validate:[Le.b,ut]})),r.a.createElement("div",null,r.a.createElement(Ae.a,{name:"rememberMe",type:"checkbox",component:Be.a}),"remember me"),n&&r.a.createElement("div",{className:st.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Login")))})),ct=Object(ne.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var a=Object(m.a)(p.a.mark((function a(r){var o,s,u;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_(e,t,n);case 2:0===(o=a.sent).data.resultCode?r(W()):(s=o.data.messages.length>0?o.data.messages[0]:"Common error",u=Object(R.a)("login",{_error:s}),r(u));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.login;return e.isAuth?r.a.createElement(te.a,{to:"/profile"}):r.a.createElement("div",{className:""},r.a.createElement("h1",null,"Login"),r.a.createElement(it,{onSubmit:function(e){var n=e.email,a=e.password,r=e.remeberMe;t(n,a,r)}}))})),lt=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,292))})),pt=function(e){Object($.a)(n,e);var t=Object(ee.a)(n);function n(){return Object(Q.a)(this,n),t.apply(this,arguments)}return Object(Z.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(rt,null),r.a.createElement(se,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(te.b,{path:"/profile/:userId?"},r.a.createElement($e,null)),r.a.createElement(te.b,{path:"/dialogs"},r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")},r.a.createElement(lt,null))),r.a.createElement(te.b,{path:"/users"},r.a.createElement(Te,null)),r.a.createElement(te.b,{path:"/settings"},r.a.createElement(Ue,null)),r.a.createElement(te.b,{path:"/login"},r.a.createElement(ct,null)))):r.a.createElement(we,null)}}]),n}(a.Component),mt=Object(u.d)(Object(ne.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(W()).then((function(){e({type:"app/INITIALIZED_SUCCESS"})}))}}}),te.f)(pt);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(ae.a,null,r.a.createElement(ne.a,{store:X},r.a.createElement(mt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},35:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},38:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a),o=n(54),s=n.n(o),u=function(e){var t=e.input,n=e.meta,a=n.touched,o=n.error,u=e.type,i=e.placeholder,c=a&&o;return r.a.createElement("div",{className:"".concat(s.a.formControl," ").concat(c?s.a.error:"")},r.a.createElement("textarea",Object.assign({},t,{type:u,placeholder:i})),c&&r.a.createElement("span",null,o))},i=function(e){var t=e.input,n=e.meta,a=n.touched,o=n.error,u=e.type,i=e.placeholder,c=a&&o;return r.a.createElement("div",{className:"".concat(s.a.formControl," ").concat(c?s.a.error:"")},r.a.createElement("input",Object.assign({},t,{type:u,placeholder:i})),c&&r.a.createElement("span",null,o))}},54:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1jpOI",error:"FormsControls_error__31Qb6"}},64:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(17),r=n(18),o=n(20),s=n(19),u=n(0),i=n.n(u),c=n(10),l=n(27),p=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var t=function(t){Object(o.a)(u,t);var n=Object(s.a)(u);function u(){return Object(a.a)(this,u),n.apply(this,arguments)}return Object(r.a)(u,[{key:"render",value:function(){return this.props.isAuth?i.a.createElement(e,this.props):i.a.createElement(l.a,{to:"/login"})}}]),u}(i.a.Component);return Object(c.b)(p)(t)}},69:function(e,t,n){e.exports={pagination:"Pagination_pagination__3VpnW",pageNumber:"Pagination_pageNumber__syIyC",selectedPage:"Pagination_selectedPage__3Q5_N"}},89:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__1JV0J",posts:"MyPosts_posts__WxTG3"}},92:function(e,t,n){e.exports={header:"Header_header__15Miv",loginBlock:"Header_loginBlock__3cKxr"}}},[[164,1,2]]]);
//# sourceMappingURL=main.c07e155c.chunk.js.map