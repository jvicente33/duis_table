(function(e){function t(t){for(var n,r,o=t[0],c=t[1],l=t[2],d=0,p=[];d<o.length;d++)r=o[d],a[r]&&p.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],n=!0,o=1;o<s.length;o++){var c=s[o];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=s[0]))}return e}var n={},a={app:0},i=[];function r(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=n,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"029a":function(e,t,s){},2856:function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("097d"),s("684e"),s("6d93");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("router-view")],1)},i=[],r={},o=r,c=(s("5c0b"),s("2877")),l=Object(c["a"])(o,a,i,!1,null,null,null);l.options.__file="App.vue";var u=l.exports,d=s("8c4f"),p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-third master"},[s("section",{staticClass:"section"},[s("p",{staticClass:"title is-3 has-text-centered"},[e._v("¡Bienvenido!")]),s("b-field",[s("b-input",{attrs:{placeholder:"Username",type:"text","icon-pack":"fas",icon:"user",maxlength:"12",min:"5",rounded:""}})],1),s("b-field",[s("b-input",{attrs:{placeholder:"Contraseña",type:"password","icon-pack":"fas",icon:"key","password-reveal":"",rounded:""}})],1),s("div",{staticClass:"has-text-centered"},[s("a",{staticClass:"button is-vcentered is-primary is-outlined is-rounded",on:{click:function(t){e.go("panel")}}},[e._v("Iniciar Sesión")])])],1)]),e._m(0)])},f=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"interactive-bg column master submaster"},[s("img",{staticClass:"login-logo",attrs:{src:"img/duis-full.png"}})])}],h=(s("96cf"),s("3040")),b={name:"login",data:function(){return{show:1}},methods:{go:function(){var e=Object(h["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$router.push({name:t});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}},m=b,g=(s("d2f1"),Object(c["a"])(m,p,f,!1,null,"0c13e63a",null));g.options.__file="Login.vue";var v=g.exports,M=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"dash"}},[s("nav",{staticClass:"navbar"},[s("div",{staticClass:"navbar-brand"},[s("a",{staticClass:"navbar-item",on:{click:function(t){e.go("home")}}},[s("img",{attrs:{src:"img/duis-min.png",width:"30",height:"28"}}),s("h1",{staticClass:"title is-3 titlecolor"},[e._v("Duis")])]),s("div",{staticClass:"navbar-burger burger",attrs:{"data-target":"nav-phone"},on:{click:function(t){e.burger()}}},[s("span"),s("span"),s("span")])]),s("div",{staticClass:"navbar-menu",attrs:{id:"nav-phone"}},[s("div",{staticClass:"navbar-end"},[s("b-dropdown",{attrs:{position:"is-bottom-left"}},[s("a",{staticClass:"navbar-item is-info",attrs:{slot:"trigger"},slot:"trigger"},[s("span",[e._v("J. Daza")]),s("b-icon",{attrs:{icon:"caret-down",pack:"fas"}})],1),s("b-dropdown-item",{attrs:{value:"logout"},on:{click:function(t){e.logout()}}},[s("b-icon",{attrs:{icon:"sign-out-alt",pack:"fas"}}),e._v("\n                     Salir\n               ")],1)],1)],1)])]),s("div",{staticClass:"center"},[s("div",{staticClass:"is-main-content"},[s("router-view")],1)]),e._m(0),s("b-loading",{attrs:{"is-full-page":e.isFullPage,active:e.isLoading,"can-cancel":!1},on:{"update:active":function(t){e.isLoading=t}}})],1)},C=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"content has-text-centered"},[s("p",[e._v("\n        ©2018 — "),s("strong",[e._v("PDF-Viewer")])])])])}],y={data:function(){return{drawer:!0,preLoading:0,isLoading:!1,isFullPage:!0,userData:"",userInfoData:"",right:null,menus:[{title:"Cerrar Sesión"}]}},methods:{logout:function(){this.go("login")},go:function(e){this.$router.push({name:e})},burger:function(){var e=document.querySelector(".burger"),t=document.querySelector("#"+e.dataset.target);e.classList.toggle("is-active"),t.classList.toggle("is-active")},isNotLoading:function(){2==this.preLoading&&(this.isLoading=!1)}},created:function(){},watch:{}},w=y,_=(s("7bb6"),Object(c["a"])(w,M,C,!1,null,"e0b457e4",null));_.options.__file="Panel.vue";var j=_.exports,T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"session"},on:{error:e.errorHandler}},[s("publisher",{attrs:{session:e.session},on:{error:e.errorHandler}}),e._l(e.streams,function(t){return s("div",{key:t.streamId,attrs:{id:"subscribers"}},[s("subscriber",{attrs:{stream:t,session:e.session},on:{error:e.errorHandler}})],1)})],2)},O=[],N=s("33ba"),x=s.n(N),S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div")},k=[],D={name:"publisher",props:{session:{type:x.a.Session,required:!1},opts:{type:Object,required:!1}},mounted:function(){var e=this,t=x.a.initPublisher(this.$el,this.opts,function(t){t?e.$emit("error",t):e.$emit("publisherCompleted")});this.$emit("publisherCreated",t);var s=function(){e.session.publish(t,function(s){s?e.$emit("error",s):e.$emit("publisherConnected",t)})};this.session&&this.session.isConnected()&&s(),this.session&&this.session.on("sessionConnected",s)}},E=D,W=Object(c["a"])(E,S,k,!1,null,null,null);W.options.__file="Publisher.vue";var Z=W.exports,z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div")},U=[],I={name:"subscriber",props:{stream:{type:OT.Stream,required:!0},session:{type:OT.Session,required:!0},opts:{type:Object,required:!1}},mounted:function(){var e=this,t=this.session.subscribe(this.stream,this.$el,this.opts,function(s){s?e.$emit("error",s):e.$emit("subscriberConnected",t)});this.$emit("subscriberCreated",t)}},L=I,Y=Object(c["a"])(L,z,U,!1,null,null,null);Y.options.__file="Subscriber.vue";var P=Y.exports,V=function(e){alert(e.message)},$={name:"session",data:function(){return{apiKey:"46204402",sessionId:"2_MX40NjIwNDQwMn5-MTUzOTgxNjIzOTg1Nn4zaFBSZDQ0VHNuZG5sOFgvbFpLN3l1cHV-QX4",token:"T1==cGFydG5lcl9pZD00NjIwNDQwMiZzaWc9MzE5Y2I5MWIzNjY2MWNjY2JjYTQyN2M2Y2U1ZjNiYTI2ZWUwZDkyMDpzZXNzaW9uX2lkPTJfTVg0ME5qSXdORFF3TW41LU1UVXpPVGd4TmpJek9UZzFObjR6YUZCU1pEUTBWSE51Wkc1c09GZ3ZiRnBMTjNsMWNIVi1RWDQmY3JlYXRlX3RpbWU9MTUzOTgxNjIzOSZyb2xlPW1vZGVyYXRvciZub25jZT0xNTM5ODE2MjM5Ljg5NDExNzY5NDg0MTEzJmV4cGlyZV90aW1lPTE1NDA0MjEwMzkmY29ubmVjdGlvbl9kYXRhPW5hbWUlM0RKb2hubnk=",streams:[],session:null}},components:{Publisher:Z,Subscriber:P},created:function(){var e=this;this.session=x.a.initSession(this.apiKey,this.sessionId),this.session.connect(this.token,function(e){e&&V(e)}),this.session.on("streamCreated",function(t){e.streams.push(t.stream)}),this.session.on("streamDestroyed",function(t){var s=e.streams.indexOf(t.stream);s>-1&&e.streams.splice(s,1)})},methods:{errorHandler:V}},F=$,R=Object(c["a"])(F,T,O,!1,null,null,null);R.options.__file="Session.vue";var X=R.exports,J=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-9"},[s("section",[s("b-tabs",{attrs:{position:"is-centered",type:"is-toggle-rounded"}},[s("b-tab-item",{attrs:{label:"Tabla de Dibujo",icon:"palette","icon-pack":"fas"}}),s("b-tab-item",{attrs:{label:"Editor de Texto",icon:"edit","icon-pack":"fas"}}),s("b-tab-item",{attrs:{label:"Editor de Codigo",icon:"code","icon-pack":"fas"}})],1)],1)]),s("div",{staticClass:"column is-3"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("subscriber",{attrs:{stream:e.streams[0],session:e.session},on:{error:e.errorHandler}})],1),s("div",{staticClass:"card-content"},[s("publisher",{attrs:{session:e.session,opts:e.opts},on:{error:e.errorHandler}})],1)]),s("chat",{staticClass:"chat"})],1)])])},G=[],Q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("beautiful-chat",{attrs:{participants:e.participants,titleImageUrl:e.titleImageUrl,onMessageWasSent:e.onMessageWasSent,messageList:e.messageList,newMessagesCount:e.newMessagesCount,isOpen:e.isChatOpen,close:e.closeChat,open:e.openChat,showEmoji:!0,showFile:!0,showTypingIndicator:e.showTypingIndicator,colors:e.colors,alwaysScrollToBottom:e.alwaysScrollToBottom}})],1)},H=[],B=s("8afe"),q={name:"app",data:function(){return{participants:[{id:"user1",name:"J. Daza",imageUrl:"https://avatars3.githubusercontent.com/u/1915989?s=230&v=4"},{id:"user2",name:"Alfonso",imageUrl:"https://avatars3.githubusercontent.com/u/37018832?s=200&v=4"}],titleImageUrl:"https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png",messageList:[{type:"text",author:"me",data:{text:"Epalee!"}},{type:"text",author:"user1",data:{text:"Chao"}},{type:"text",author:"me",data:{text:":(("}}],newMessagesCount:0,isChatOpen:!1,showTypingIndicator:"",colors:{header:{bg:"#e65c00",text:"#ffffff"},launcher:{bg:"#e65c00"},messageList:{bg:"#ffffff"},sentMessage:{bg:"#e65c00",text:"#ffffff"},receivedMessage:{bg:"#eaeaea",text:"#222222"},userInput:{bg:"#f4f7f9",text:"#565867"}},alwaysScrollToBottom:!1}},methods:{sendMessage:function(e){e.length>0&&(this.newMessagesCount=this.isChatOpen?this.newMessagesCount:this.newMessagesCount+1,this.onMessageWasSent({author:"support",type:"text",data:{text:e}}))},onMessageWasSent:function(e){this.messageList=Object(B["a"])(this.messageList).concat([e])},openChat:function(){this.isChatOpen=!0,this.newMessagesCount=0},closeChat:function(){this.isChatOpen=!1}}},A=q,K=Object(c["a"])(A,Q,H,!1,null,null,null);K.options.__file="Chat.vue";var ee=K.exports,te=function(e){alert(e.message)},se={data:function(){return{apiKey:"46204402",sessionId:"2_MX40NjIwNDQwMn5-MTUzOTgxNjIzOTg1Nn4zaFBSZDQ0VHNuZG5sOFgvbFpLN3l1cHV-QX4",token:"T1==cGFydG5lcl9pZD00NjIwNDQwMiZzaWc9MzE5Y2I5MWIzNjY2MWNjY2JjYTQyN2M2Y2U1ZjNiYTI2ZWUwZDkyMDpzZXNzaW9uX2lkPTJfTVg0ME5qSXdORFF3TW41LU1UVXpPVGd4TmpJek9UZzFObjR6YUZCU1pEUTBWSE51Wkc1c09GZ3ZiRnBMTjNsMWNIVi1RWDQmY3JlYXRlX3RpbWU9MTUzOTgxNjIzOSZyb2xlPW1vZGVyYXRvciZub25jZT0xNTM5ODE2MjM5Ljg5NDExNzY5NDg0MTEzJmV4cGlyZV90aW1lPTE1NDA0MjEwMzkmY29ubmVjdGlvbl9kYXRhPW5hbWUlM0RKb2hubnk=",streams:[],session:null,opts:{publishAudio:!0,publishVideo:!0,videoSource:!0,height:"150px",width:"100%"}}},components:{Publisher:Z,Subscriber:P,Chat:ee},created:function(){var e=this;this.session=x.a.initSession(this.apiKey,this.sessionId),this.session.connect(this.token,function(e){e&&te(e)}),this.session.on("streamCreated",function(t){e.streams.push(t.stream)}),this.session.on("streamDestroyed",function(t){var s=e.streams.indexOf(t.stream);s>-1&&e.streams.splice(s,1)})},methods:{errorHandler:te,connect:function(){this.videoSource=!0,this.publishVideo=!0,this.$forceUpdate()}}},ne=se,ae=(s("a70d"),Object(c["a"])(ne,J,G,!1,null,"4f4e4c33",null));ae.options.__file="Tablero.vue";var ie=ae.exports;n["default"].use(d["a"]);var re=new d["a"]({routes:[{path:"/",name:"login",component:v},{path:"/panel",name:"panel",redirect:"/panel/tablero",component:j,children:[{path:"session",name:"session",component:X},{path:"tablero",name:"tablero",component:ie}]}]}),oe=s("00e7"),ce=s.n(oe),le=s("85ff"),ue=s.n(le),de=s("c718"),pe=s("8a03"),fe=s.n(pe);s("5abe");n["default"].use(ce.a),n["default"].use(fe.a,{defaultDayNames:["D","L","M","Mi","J","V","S"],defaultMonthNames:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],defaultFirstDayOfWeek:1,defaultDateFormatter:function(e){return e.toLocaleDateString("es-ES")}}),n["default"].use(de["a"]);var he={isEnabled:!0,logLevel:"debug",stringifyArguments:!1,showLogLevel:!1,showMethodName:!1,separator:"|",showConsoleColors:!1};n["default"].use(ue.a,he),n["default"].config.productionTip=!1,new n["default"]({router:re,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var n=s("2856"),a=s.n(n);a.a},"7bb6":function(e,t,s){"use strict";var n=s("a875"),a=s.n(n);a.a},a70d:function(e,t,s){"use strict";var n=s("029a"),a=s.n(n);a.a},a875:function(e,t,s){},b854:function(e,t,s){},d2f1:function(e,t,s){"use strict";var n=s("b854"),a=s.n(n);a.a}});
//# sourceMappingURL=app.39b438a6.js.map