(this["webpackJsonpsocial-network-react"]=this["webpackJsonpsocial-network-react"]||[]).push([[3],{291:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__3LQIZ",dialogsItems:"Dialogs_dialogsItems__30SzP",active:"Dialogs_active__7ksxA",dialog:"Dialogs_dialog__3yeRh",messages:"Dialogs_messages__2AiY_",message:"Dialogs_message__2Lz5t"}},292:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(102),o=t(124),c=t(125),l=t(291),m=t.n(l),r=t(12),d=function(e){return n.a.createElement("div",{className:"".concat(m.a.dialog," ").concat(m.a.active)},n.a.createElement(r.b,{to:"".concat(/dialogs/,e.id)},e.name))},g=function(e){return n.a.createElement("div",{className:m.a.message},e.message)},u=t(35),_=t(38),b=Object(u.a)(10),E=Object(c.a)({form:"dialogAddMessageForm"})((function(e){var a=e.handleSubmit;return n.a.createElement("form",{onSubmit:a},n.a.createElement("div",null,n.a.createElement(o.a,{type:"textarea",name:"newMessageBody",component:_.b,placeholder:"Enter your message",validate:[u.b,b]})),n.a.createElement("div",null,n.a.createElement("button",{type:"submit"},"Send")))})),f=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return n.a.createElement(d,{name:e.name,key:e.id,id:e.id})})),s=a.messages.map((function(e){return n.a.createElement(g,{message:e.message,key:e.id,id:e.id})}));return n.a.createElement("div",{className:m.a.dialogs},n.a.createElement("div",{className:m.a.dialogsItems},t),n.a.createElement("div",{className:m.a.messages},n.a.createElement("div",null,s),n.a.createElement(E,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}})))},v=t(10),p=t(64),y=t(6);a.default=Object(y.d)(Object(v.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(i.b)(a))}}})),p.a)(f)}}]);
//# sourceMappingURL=3.ed4b437b.chunk.js.map