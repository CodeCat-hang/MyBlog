(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69ae33fc"],{"3bb2":function(t,e,s){},"61b7":function(t,e,s){"use strict";s("3bb2")},"8e2a":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-container page-message d-flex flex-column ai-center pt-9"},[s("div",{staticClass:"page p-5"},[t._m(0),s("div",[t._m(1),s("div",{class:{"message-box":t.parentComments.length>0}},[s("div",{staticClass:"textarea-box bg-postcolor bdr"},[s("comment-textarea",{attrs:{model:"messages",type:"parent",placeholder:"输入留言内容"},on:{toResponse:t.getMessagesList}})],1),s("div",{staticClass:"my-9",class:{"message-box":t.parentComments.length>0}},[t.parentComments?s("comment-list",{attrs:{model:"messages",commentsList:t.parentComments},on:{getCommentList:t.getMessagesList}}):t._e()],1)])])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("div",{staticClass:"text-green fs-xxxxl"},[t._v("Message")]),s("div",{staticClass:"text-grey-2 fs-sm mt-5"},[t._v("Published on March 11th 2020")]),s("div",{staticClass:"mt-5 mb-5"}),s("div",{staticClass:"py-4"},[s("span",{staticClass:"fs-xxl text-green"},[t._v("#")]),t._v(" "),s("span",{staticClass:"fs-xxl text-grey-1"},[t._v("留言前需知")])]),s("div",{staticClass:"pl-5 text-green-1"},[s("p",[t._v("• 烦请各位留言时务必填写自己真实的邮箱")]),s("p",[t._v("• 留言博主基本都会回复，并会邮件通知留言者")]),s("p",[t._v("• 请不要发广告和带有商业推广链接的无用留言")])]),s("p",{staticClass:"my-8 text-grey-2"},[t._v("希望彼此之间有好的交流。 ^_^")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mb-7"},[s("span",{staticClass:"fs-xxxl text-grey-1 text-center ml-5"},[t._v("留言板")])])}],r=s("1da1"),i=(s("96cf"),s("4de4"),s("159b"),{data:function(){return{parentComments:[]}},mounted:function(){this.getMessagesList()},methods:{getMessagesList:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("messages");case 2:s=e.sent,n=s.data,t.parentComments=n.filter((function(t){return"5ec884e3fe28d35475b43fb3"==t.parent})),t.parentComments.forEach((function(t){return t.children=n.filter((function(e){return e.parent==t._id}))}));case 6:case"end":return e.stop()}}),e)})))()}}}),c=i,o=(s("61b7"),s("2877")),l=Object(o["a"])(c,n,a,!1,null,"2cc96d00",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-69ae33fc.a873dcc6.js.map