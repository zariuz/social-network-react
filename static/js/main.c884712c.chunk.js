(this["webpackJsonpsocial-network-react"]=this["webpackJsonpsocial-network-react"]||[]).push([[0],{127:function(e,t,n){e.exports={pagination:"Pagination_pagination__26P0o",pageNumber:"Pagination_pageNumber__f5IhE",selectedPage:"Pagination_selectedPage__27dlq"}},153:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__3DmI-",posts:"MyPosts_posts__psJzG"}},161:function(e,t,n){e.exports={formSummaryError:"Login_formSummaryError__wNlzF",loginInfo:"Login_loginInfo__2jj3y"}},175:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(64),r=n(6),o={dialogs:[{id:10,name:"Jeniy"},{id:11,name:"Dimych"},{id:12,name:"Sveta"},{id:13,name:"Sasha"},{id:14,name:"Vika"}],messages:[{id:1,message:"Hi"},{id:2,message:"How is your day"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},c={sendMessage:function(e){return{type:"SEND_MESSAGE",newMessageBody:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:6,message:n}])});default:return e}}},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(232),r=n(0),o=n.n(r),c=n(18),u=n(10),l=function(e){return{isAuth:e.auth.isAuth}};function i(e){return Object(u.b)(l,{})((function(t){var n=t.isAuth,r=Object(a.a)(t,["isAuth"]);return n?o.a.createElement(e,r):o.a.createElement(c.a,{to:"/login"})}))}},212:function(e,t,n){e.exports={avatar:"User_avatar__1piZu"}},215:function(e,t,n){e.exports=n.p+"static/media/preloader.5e382d7a.svg"},216:function(e,t,n){e.exports={main:"News_main__14RZT"}},217:function(e,t,n){e.exports={item:"Post_item__akpss"}},218:function(e,t,n){e.exports={description:"ProfileInfo_description__3H_7i"}},219:function(e,t,n){e.exports={formSummaryError:"ProfileDataFormReduxForm_formSummaryError__4aq8t"}},230:function(e,t,n){e.exports={notfound:"NotFound_notfound__3OeNG"}},261:function(e,t,n){e.exports=n(418)},342:function(e,t,n){},346:function(e,t,n){},38:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),o=n(97),c=n.n(o),u=function(e){var t=e.input,n=e.meta,a=n.touched,o=n.error,u=e.type,l=e.placeholder,i=a&&o;return r.a.createElement("div",{className:"".concat(c.a.formControl," ").concat(i?c.a.error:"")},r.a.createElement("textarea",Object.assign({},t,{type:u,placeholder:l})),i&&r.a.createElement("span",null,o))},l=function(e){var t=e.input,n=e.meta,a=n.touched,o=n.error,u=e.type,l=e.placeholder,i=a&&o;return r.a.createElement("div",{className:"".concat(c.a.formControl," ").concat(i?c.a.error:"")},r.a.createElement("input",Object.assign({},t,{type:u,placeholder:l})),i&&r.a.createElement("span",null,o))}},41:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},418:function(e,t,n){"use strict";n.r(t);var a,r,o=n(0),c=n.n(o),u=n(17),l=n.n(u),i=n(14),s=n(207),m=n(208),f=n(13),d=n.n(f),p=n(33),E=n(64),b=n(6),h=n(209),v=n.n(h).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"a581eddc-6b2a-4437-9b2a-cfc6d6cb8bb3"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(a||(a={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(r||(r={}));var g=function(e){return v.get("profile/".concat(e)).then((function(e){return e.data}))},O=function(e){return v.get("profile/status/".concat(e)).then((function(e){return e.data}))},S=function(e){return v.put("profile/status",{status:e}).then((function(e){return e.data}))},j=function(e){var t=new FormData;return t.append("image",e),v.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},y=function(e){return v.put("profile",e).then((function(e){return e.data}))},_=n(60),P={posts:[{id:1,message:"Hi, how are you?",likesCount:5},{id:2,message:"I'ts my first post",likesCount:3},{id:3,message:"Yo",likesCount:101}],profile:null,status:""},w={addPostActionCreator:function(e){return{type:"ADD_POST",newPostText:e}},setUserProfile:function(e){return{type:"SET_USER_PROFILE",profile:e}},setStatus:function(e){return{type:"SET_STATUS",status:e}},deletePost:function(e){return{type:"DELETE_POST",postId:e}},savePhotoSuccess:function(e){return{type:"SAVE_PHOTO_SUCCESS",photos:e}}},k=function(e){return function(){var t=Object(p.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:a=t.sent,n(w.setUserProfile(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var n={id:4,message:t.newPostText,likesCount:0};return Object(b.a)(Object(b.a)({},e),{},{posts:[].concat(Object(E.a)(e.posts),[n])});case"SET_USER_PROFILE":return Object(b.a)(Object(b.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(b.a)(Object(b.a)({},e),{},{status:t.status});case"DELETE_POST":return Object(b.a)(Object(b.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"SAVE_PHOTO_SUCCESS":return Object(b.a)(Object(b.a)({},e),{},{profile:Object(b.a)(Object(b.a)({},e.profile),{},{photos:t.photos})});default:return e}},T=n(175),x={},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;return e},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return v.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===a?"":"&friend=".concat(a))).then((function(e){return e.data}))},U={users:[],pageSize:10,portionSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],filter:{term:"",friend:null}},N=function(e){return{type:"SET_USERS",users:e}},F=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},L=function(e){return{type:"SET_TOTAL_USERS_COUNT",count:e}},R=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},M=function(e){return{type:"SN/USERS/SET_FILTER",payload:e}},D=function(e,t,n){return function(){var a=Object(p.a)(d.a.mark((function a(r){var o;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r(R(!0)),r(F(e)),r(M(n)),a.next=5,A(e,t,n.term,n.friend);case 5:o=a.sent,r(R(!1)),r(N(o.items)),r(L(o.totalCount));case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(b.a)(Object(b.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(b.a)(Object(b.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(b.a)(Object(b.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(b.a)(Object(b.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(b.a)(Object(b.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(b.a)(Object(b.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(b.a)(Object(b.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(b.a)(Object(b.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(b.a)(Object(b.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(E.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});case"SN/USERS/SET_FILTER":return Object(b.a)(Object(b.a)({},e),{},{filter:t.payload});default:return e}},G=function(){return v.get("auth/me").then((function(e){return e.data}))},H=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return v.post("auth/login",{email:e,password:t,remeberMe:n,captcha:a}).then((function(e){return e.data}))},J=function(){return v.delete("auth/login").then((function(e){return e.data}))},V=function(){return v.get("security/get-captcha-url").then((function(e){return e.data}))},B={id:null,email:null,login:null,isAuth:!1,captchaUrl:null},Y=function(e,t,n,a){return{type:"SET_USER_DATA",payload:{id:e,email:t,login:n,isAuth:a}}},q=function(e){return{type:"SET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},W=function(){return function(){var e=Object(p.a)(d.a.mark((function e(t){var n,r,o,c,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G();case 2:(n=e.sent).resultCode===a.Success&&(r=n.data,o=r.id,c=r.login,u=r.email,t(Y(o,u,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Z=function(){return function(){var e=Object(p.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:n=e.sent,a=n.url,t(q(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":case"SET_CAPTCHA_URL_SUCCESS":return Object(b.a)(Object(b.a)({},e),t.payload);default:return e}},X={initialized:!1},Q=function(){return{type:"INITIALIZED_SUCCESS"}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(b.a)(Object(b.a)({},e),{},{initialized:!0});default:return e}},ee=Object(i.c)({profilePage:C,dialogsPage:T.b,sidebar:I,usersPage:z,auth:K,form:s.a,app:$}),te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,ne=Object(i.e)(ee,te(Object(i.a)(m.a)));window.store=ne;var ae=ne,re=(n(342),n(112)),oe=n(113),ce=n(126),ue=n(123),le=n(25),ie=n(18),se=n(10),me=(n(346),n(347),n(422)),fe=n(419),de=n(425),pe=n(426),Ee=n(111),be=n(71),he=n(127),ve=n.n(he),ge=n(5),Oe=n.n(ge),Se=function(e){for(var t=e.totalUsersCount,n=e.pageSize,a=e.currentPage,r=void 0===a?1:a,u=e.onPageChanged,l=void 0===u?function(e){return e}:u,i=e.portionSize,s=void 0===i?10:i,m=Math.ceil(t/n),f=[],d=1;d<=m;d++)f.push(d);var p=Math.ceil(m/s),E=Object(o.useState)(1),b=Object(be.a)(E,2),h=b[0],v=b[1],g=(h-1)*s+1,O=h*s;return c.a.createElement("div",{className:ve.a.pagination},h>1&&c.a.createElement("button",{onClick:function(){return v(h-1)}},"PREV"),f.filter((function(e){return e>=g&&e<=O})).map((function(e){return c.a.createElement("span",{className:Oe()(Object(Ee.a)({},ve.a.selectedPage,r===e),ve.a.pageNumber),key:e,onClick:function(){l(e)}},e)})),p>h&&c.a.createElement("button",{onClick:function(){v(h+1)}},"NEXT"))},je=n(212),ye=n.n(je),_e=n(76),Pe=n.n(_e),we=function(e){var t=e.followingInProgress,n=e.unfollow,a=e.follow,r=e.user,o=e.key;return c.a.createElement("div",{key:o},c.a.createElement("span",null,c.a.createElement("div",{className:ye.a.avatar},c.a.createElement(le.c,{to:"/profile/"+r.id},c.a.createElement("img",{alt:"Avatar",src:null!=r.photos.small?r.photos.small:Pe.a}))),c.a.createElement("div",null,r.followed?c.a.createElement("button",{disabled:t.some((function(e){return e===r.id})),onClick:function(){n(r.id)}},"Unfollow"):c.a.createElement("button",{disabled:t.some((function(e){return e===r.id})),onClick:function(){a(r.id)}},"Follow"))),c.a.createElement("span",null,c.a.createElement("span",null,c.a.createElement("div",null,r.name),c.a.createElement("div",null,r.status)),c.a.createElement("span",null,c.a.createElement("div",null,"user.location.country"),c.a.createElement("div",null,"user.location.city"))))},ke=n(99),Ce=function(e){return e.usersPage.users},Te=function(e){return e.usersPage.pageSize},xe=function(e){return e.usersPage.totalUsersCount},Ie=function(e){return e.usersPage.currentPage},Ae=function(e){return e.usersPage.isFetching},Ue=function(e){return e.usersPage.followingInProgress},Ne=function(e){return e.usersPage.filter},Fe=function(e){return{}},Le=c.a.memo((function(e){var t=Object(se.d)(Ne);return c.a.createElement("div",null,c.a.createElement(ke.c,{enableReinitialize:!0,initialValues:{term:t.term,friend:String(t.friend)},validate:Fe,onSubmit:function(t,n){var a=n.setSubmitting,r={term:t.term,friend:"null"===t.friend?null:"true"===t.friend};e.onFilterChanged(r),a(!1)}},(function(e){var t=e.isSubmitting;return c.a.createElement(ke.b,null,c.a.createElement(ke.a,{type:"text",name:"term"}),c.a.createElement(ke.a,{name:"friend",as:"select"},c.a.createElement("option",{value:"null"},"All"),c.a.createElement("option",{value:"true"},"Only followed"),c.a.createElement("option",{value:"false"},"Only unfollowed")),c.a.createElement("button",{type:"submit",disabled:t},"Find"))})))})),Re=n(152),Me=function(){var e=Object(se.d)(Ce),t=Object(se.d)(xe),n=Object(se.d)(Ie),a=Object(se.d)(Te),r=Object(se.d)(Ne),u=Object(se.d)(Ue),l=Object(se.c)(),i=Object(ie.g)();Object(o.useEffect)((function(){var e=Re.parse(i.location.search.substr(1)),t=n,o=r;switch(e.page&&(t=Number(e.page)),e.term&&(o=Object(b.a)(Object(b.a)({},o),{},{term:e.term})),e.friend){case"null":o=Object(b.a)(Object(b.a)({},o),{},{friend:null});break;case"true":o=Object(b.a)(Object(b.a)({},o),{},{friend:!0});break;case"false":o=Object(b.a)(Object(b.a)({},o),{},{friend:!1})}l(D(t,a,o))}),[l,n,r,a,i.location.search]),Object(o.useEffect)((function(){var e={};r.term&&(e.term=r.term),null!==r.friend&&(e.friend=String(r.friend)),1!==n&&(e.page=String(n)),i.push({pathname:"/users",search:Re.stringify(e)})}),[r,n,i]);var s=function e(t){l(e(t))},m=function e(t){l(e(t))};return c.a.createElement("div",null,c.a.createElement(Le,{onFilterChanged:function(e){l(D(1,a,e))}}),c.a.createElement(Se,{totalUsersCount:t,pageSize:a,currentPage:n,onPageChanged:function(e){l(D(e,a,r))}}),c.a.createElement("div",null,e.map((function(e){return c.a.createElement(we,{user:e,followingInProgress:u,key:e.id,follow:s,unfollow:m})}))))},De=n(215),ze=n.n(De),Ge=function(){return c.a.createElement("div",null,c.a.createElement("img",{src:ze.a,alt:"preloader"}))},He=function(e){var t=Object(se.d)(Ae);return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,e.pageTitle),t?c.a.createElement(Ge,null):null,c.a.createElement(Me,null))},Je=n(216),Ve=n.n(Je),Be=function(){return c.a.createElement("div",{className:Ve.a.main},c.a.createElement("p",null,"There will be news"))},Ye=n(153),qe=n.n(Ye),We=n(217),Ze=n.n(We),Ke=function(e){var t=e.message,n=e.likesCount;return c.a.createElement("div",{className:Ze.a.item},c.a.createElement("img",{src:Pe.a,alt:"user"}),t,c.a.createElement("div",null,c.a.createElement("span",null,"like "),n))},Xe=n(205),Qe=n(206),$e=n(41),et=n(38),tt=Object($e.a)(15),nt=Object(Qe.a)({form:"profileAddPostForm"})((function(e){var t=e.handleSubmit;return c.a.createElement("form",{onSubmit:t},c.a.createElement("div",null,c.a.createElement(Xe.a,{type:"textarea",name:"newPostText",component:et.b,placeholder:"Enter your text",validate:[$e.b,tt]})),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"Add post")))})),at=Object(se.b)((function(e){return{posts:e.profilePage.posts}}),{addPost:w.addPostActionCreator})((function(e){var t=Object(E.a)(e.posts).reverse().map((function(e){return c.a.createElement(Ke,{message:e.message,key:e.id,likesCount:e.likesCount})}));return c.a.createElement("div",{className:qe.a.postsBlock},c.a.createElement("h3",null,"My posts"),c.a.createElement(nt,{onSubmit:function(t){e.addPost(t.newPostText)}}),c.a.createElement("div",{className:qe.a.posts},t))})),rt=n(218),ot=n.n(rt),ct=function(e){var t=Object(o.useState)(!1),n=Object(be.a)(t,2),a=n[0],r=n[1],u=Object(o.useState)(e.status),l=Object(be.a)(u,2),i=l[0],s=l[1];Object(o.useEffect)((function(){s(e.status)}),[e.status]);return c.a.createElement(c.a.Fragment,null,!a&&c.a.createElement("div",null,c.a.createElement("b",null,"Status: "),c.a.createElement("span",{onDoubleClick:function(){r(!0)}},e.status||"not status")),a&&c.a.createElement("div",null,c.a.createElement("input",{autoFocus:!0,onBlur:function(){r(!1),e.updateStatus(i)},onChange:function(e){s(e.currentTarget.value)},type:"text",value:i})))},ut=n(219),lt=n.n(ut),it=Object($e.a)(30),st=Object(Qe.a)({form:"editProfile"})((function(e){var t=e.handleSubmit,n=e.error,a=e.profile;return c.a.createElement("form",{onSubmit:t},c.a.createElement("div",null,"Full name:",c.a.createElement(Xe.a,{name:"fullName",type:"text",placeholder:"Full name",component:et.a,validate:[$e.b,it]})),c.a.createElement("div",null,"About me:",c.a.createElement(Xe.a,{name:"aboutMe",type:"text",placeholder:"About me",component:et.a,validate:[$e.b]})),c.a.createElement("div",null,"Looking for a job:",c.a.createElement(Xe.a,{name:"lookingForAJob",type:"checkbox",component:et.a})),c.a.createElement("div",null,"My professional skills:",c.a.createElement(Xe.a,{name:"lookingForAJobDescription",type:"text",placeholder:"My professional skills",component:et.b})),c.a.createElement("div",null,"Contacts:",Object.keys(a.contacts).map((function(e){return c.a.createElement("div",{key:e},e,":",c.a.createElement(Xe.a,{name:"contacts."+e,type:"text",component:et.a}))}))),n&&c.a.createElement("div",{className:lt.a.formSummaryError},n),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"Save")))})),mt=function(e){var t=e.profile,n=e.isOwner,a=e.goToEditMode,r=t.contacts,o=r.facebook,u=r.website,l=r.vk,i=r.twitter,s=r.instagram,m=r.youtube,f=r.github,d=r.mainLink;return c.a.createElement("div",null,c.a.createElement("div",null,"Full name: ",t.fullName),c.a.createElement("div",null,"About me: ",t.aboutMe),c.a.createElement("div",null,"Looking for a job: ",t.lookingForAJob?"Yes":"No"),t.lookingForAJob&&c.a.createElement("div",null,"My professional skills: ",t.lookingForAJobDescription),c.a.createElement("div",null,"Contacts:",o?c.a.createElement("div",null,"Facebook: ",o):null,u?c.a.createElement("div",null,"Website: ",u):null,l?c.a.createElement("div",null,"VK: ",l):null,i?c.a.createElement("div",null,"Twitter: ",i):null,s?c.a.createElement("div",null,"Instagram: ",s):null,m?c.a.createElement("div",null,"Youtube: ",m):null,f?c.a.createElement("div",null,"Github: ",f):null,d?c.a.createElement("div",null,"MainLink: ",d):null),n&&c.a.createElement("div",null,c.a.createElement("button",{onClick:a},"Edit")))},ft=function(e){var t=e.profile,n=e.status,a=e.updateStatus,r=e.isOwner,u=e.savePhoto,l=e.saveProfile,i=Object(o.useState)(!1),s=Object(be.a)(i,2),m=s[0],f=s[1];if(!t)return c.a.createElement(Ge,null);return c.a.createElement("div",null,c.a.createElement("div",{className:ot.a.description},c.a.createElement("div",null,c.a.createElement("img",{src:t.photos.large||Pe.a,alt:"Large avatar"}),r&&c.a.createElement("div",null,c.a.createElement("b",null,"Change Avatar: "),c.a.createElement("input",{type:"file",onChange:function(e){e.target.files&&e.target.files.length&&u(e.target.files[0])}}))),c.a.createElement(ct,{status:n,updateStatus:a}),m?c.a.createElement(st,{initialValues:t,onSubmit:function(e){l(e).then((function(){f(!1)}))},profile:t}):c.a.createElement(mt,{profile:t,isOwner:r,goToEditMode:function(){return f(!0)}})))},dt=function(e){var t=e.profile,n=e.status,a=e.updateStatus,r=e.isOwner,o=e.savePhoto,u=e.saveProfile;return c.a.createElement("div",null,c.a.createElement(ft,{isOwner:r,profile:t,status:n,updateStatus:a,savePhoto:o,saveProfile:u}),c.a.createElement(at,null))},pt=n(196),Et=function(e){Object(ce.a)(n,e);var t=Object(ue.a)(n);function n(){return Object(re.a)(this,n),t.apply(this,arguments)}return Object(oe.a)(n,[{key:"refreshProfile",value:function(){var e=+this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),e?(this.props.getUserProfile(e),this.props.getStatus(e)):console.error("ID should exists in URI params or in state ('authorizedUserId')")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(dt,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile})))}}]),n}(o.Component),bt=Object(i.d)(Object(se.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:k,getStatus:function(e){return function(){var t=Object(p.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:a=t.sent,n(w.setStatus(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(p.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S(e);case 3:0===t.sent.resultCode&&n(w.setStatus(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(p.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:0===(a=t.sent).resultCode&&n(w.savePhotoSuccess(a.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(p.a)(d.a.mark((function t(n,a){var r,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.id,t.next=3,y(e);case 3:if(0!==(o=t.sent).resultCode){t.next=12;break}if(null==r){t.next=9;break}n(k(r)),t.next=10;break;case 9:throw new Error("userId can't be null");case 10:t.next=14;break;case 12:return n(Object(_.a)("editProfile",{_error:o.messages[0]})),t.abrupt("return",Promise.reject(o.messages[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),ie.h,pt.a)(Et),ht=n(423),vt=n(424),gt=n(421),Ot=n(420),St=function(e){return e.auth.isAuth},jt=function(e){return e.auth.login},yt=function(){var e=Object(se.d)(St),t=Object(se.d)(jt),n=Object(se.c)(),r=fe.a.Header;return c.a.createElement(r,{className:"header"},c.a.createElement("div",{className:"logo"}),c.a.createElement(ht.a,null,c.a.createElement(vt.a,{span:18},c.a.createElement(me.a,{theme:"dark",mode:"horizontal"},c.a.createElement(me.a.Item,{key:"1"},c.a.createElement(le.b,{to:"/"},"Home")))),e?c.a.createElement(c.a.Fragment,null,c.a.createElement(vt.a,{span:1},c.a.createElement(gt.a,{alt:t||"user",style:{backgroundColor:"#87d068"},icon:c.a.createElement(de.a,null)})),c.a.createElement(vt.a,{span:5},c.a.createElement(Ot.a,{onClick:function(){n(function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J();case 2:e.sent.resultCode===a.Success&&t(Y(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},"Log out "))):c.a.createElement(vt.a,{span:6},c.a.createElement(Ot.a,null,c.a.createElement(le.b,{to:"/login"},"Sign in ")))))},_t=n(161),Pt=n.n(_t),wt=Object($e.a)(30),kt=Object(Qe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:t},c.a.createElement("div",null,c.a.createElement(Xe.a,{name:"email",type:"text",placeholder:"Email",component:et.a,validate:[$e.b,wt]})),c.a.createElement("div",null,c.a.createElement(Xe.a,{name:"password",type:"password",placeholder:"Password",component:et.a,validate:[$e.b,wt]})),c.a.createElement("div",null,c.a.createElement(Xe.a,{name:"rememberMe",type:"checkbox",component:et.a}),"remember me"),a&&c.a.createElement("img",{alt:"captcha",src:a}),a&&c.a.createElement(Xe.a,{name:"captcha",type:"text",placeholder:"Enter characters",component:et.a,validate:[$e.b]}),n&&c.a.createElement("div",{className:Pt.a.formSummaryError},n),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"Login"))))})),Ct=function(){var e=Object(se.d)((function(e){return e.auth.captchaUrl})),t=Object(se.d)((function(e){return e.auth.isAuth})),n=Object(se.c)();return t?c.a.createElement(ie.a,{to:"/profile"}):c.a.createElement("div",{className:""},c.a.createElement("h1",null,"Login"),c.a.createElement(kt,{onSubmit:function(e){var t=e.email,o=e.password,c=e.remeberMe,u=e.captcha;n(function(e,t,n,o){return function(){var c=Object(p.a)(d.a.mark((function c(u){var l,i;return d.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,H(e,t,n,o);case 2:(l=c.sent).resultCode===a.Success?u(W()):(l.resultCode===r.CaptchaIsRequired&&u(Z()),i=l.messages.length>0?l.messages[0]:"Common error",u(Object(_.a)("login",{_error:i})));case 4:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}(t,o,c,u))},captchaUrl:e}),c.a.createElement("div",{className:Pt.a.loginInfo},c.a.createElement("p",null,"If you don't have an account, use test login and password."),c.a.createElement("p",null,"Login: free@samuraijs.com"),c.a.createElement("p",null,"Password: free")))},Tt=n(230),xt=n.n(Tt),It=function(){return c.a.createElement("h2",{className:xt.a.notfound},"404 Page not found")};var At,Ut=Object(o.lazy)((function(){return n.e(3).then(n.bind(null,428))})),Nt=(At=Ut,function(e){return c.a.createElement(c.a.Suspense,{fallback:c.a.createElement("div",null,"loading...")},c.a.createElement(At,e))}),Ft=function(e){Object(ce.a)(n,e);var t=Object(ue.a)(n);function n(){return Object(re.a)(this,n),t.apply(this,arguments)}return Object(oe.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){if(!this.props.initialized)return c.a.createElement(Ge,null);var e=me.a.SubMenu,t=fe.a.Content,n=fe.a.Footer,a=fe.a.Sider;return c.a.createElement(fe.a,{style:{minHeight:"100vh"}},c.a.createElement(yt,null),c.a.createElement(t,{style:{padding:"0 50px"}},c.a.createElement(fe.a,{className:"site-layout-background",style:{padding:"24px 0"}},c.a.createElement(a,{className:"site-layout-background",width:200},c.a.createElement(me.a,{mode:"inline",defaultSelectedKeys:["1"],style:{height:"100%"}},c.a.createElement(e,{key:"sub1",icon:c.a.createElement(de.a,null),title:"My Profile"},c.a.createElement(me.a.Item,{key:"1"},c.a.createElement(le.b,{to:"/profile"},"Profile")),c.a.createElement(me.a.Item,{key:"2"},c.a.createElement(le.b,{to:"/dialogs"},"Messages"))),c.a.createElement(e,{key:"sub2",icon:c.a.createElement(pe.a,null),title:"All Users"},c.a.createElement(me.a.Item,{key:"5"},c.a.createElement(le.b,{to:"/users"},"Users"))),c.a.createElement(me.a.Item,{key:"12"},c.a.createElement(le.b,{to:"/news"},"News")))),c.a.createElement(t,{style:{padding:"0 24px",minHeight:280}},c.a.createElement(ie.d,null,c.a.createElement(ie.b,{exact:!0,path:"/",render:function(){return c.a.createElement(ie.a,{to:"/profile"})}}),c.a.createElement(ie.b,{path:"/profile/:userId?",render:function(){return c.a.createElement(bt,null)}}),c.a.createElement(ie.b,{path:"/dialogs",render:function(){return c.a.createElement(Nt,null)}}),c.a.createElement(ie.b,{path:"/users",render:function(){return c.a.createElement(He,{pageTitle:"Users"})}}),c.a.createElement(ie.b,{path:"/news",render:function(){return c.a.createElement(Be,null)}}),c.a.createElement(ie.b,{path:"/login",render:function(){return c.a.createElement(Ct,null)}}),c.a.createElement(ie.b,{path:"*",render:function(){return c.a.createElement(It,null)}}))))),c.a.createElement(n,{style:{textAlign:"center"}},"Social Network \xa92020 Created by Evgeniy Nechetov"))}}]),n}(o.Component),Lt=Object(i.d)(Object(se.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(W()).then((function(){e(Q())}))}}}),ie.h)(Ft);l.a.render(c.a.createElement(le.a,null,c.a.createElement(se.a,{store:ae},c.a.createElement(Lt,null))),document.getElementById("root"))},76:function(e,t,n){e.exports=n.p+"static/media/user.86a3e52d.png"},97:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3rgEA",error:"FormsControls_error__1SmHv"}}},[[261,1,2]]]);
//# sourceMappingURL=main.c884712c.chunk.js.map