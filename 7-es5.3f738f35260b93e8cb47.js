(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{uQ00:function(n,l,u){"use strict";u.r(l);var t,e=u("8Y7J"),s=function(){},o=u("pMnS"),i=function(){function n(n){this.messageService=n,this.message={}}return n.prototype.ngOnInit=function(){},n.prototype.addMessage=function(){console.log("hola")},n}(),a=u("lJxs"),c=u("Xr7G"),r=((t=function(){function n(n){this.db=n,this.messagesCollection=this.db.collection("messages"),this.messages=this.messagesCollection.snapshotChanges().pipe(Object(a.a)((function(n){return n.map((function(n){var l=n.payload.doc.data();return l.id=n.payload.doc.id,l}))})))}return n.prototype.getMessages=function(){return this.messages},n.prototype.addMessage=function(n){this.messagesCollection.add(n)},n.prototype.deleteMessage=function(n){this.messageDoc=this.db.doc("messages/"+n.id),this.messageDoc.delete()},n}()).ngInjectableDef=e.Rb({factory:function(){return new t(e.Sb(c.a))},token:t,providedIn:"root"}),t),b=e.qb({encapsulation:0,styles:[[""]],data:{}});function g(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,2,"form",[],null,[[null,"ngSubmit"]],(function(n,l,u){var t=!0;return"ngSubmit"===l&&(t=!1!==n.component.addMessage()&&t),t}),null,null)),(n()(),e.sb(1,0,null,null,1,"button",[["type","submit"]],null,null,null,null,null)),(n()(),e.Lb(-1,null,[" GUARDAR "]))],null,null)}var d=u("SVse"),f=function(){function n(n){this.messageService=n,this.messages=[]}return n.prototype.ngOnInit=function(){var n=this;this.messageService.getMessages().subscribe((function(l){n.messages=l}))},n.prototype.deleteMessage=function(n,l){this.messageService.deleteMessage(l)},n}(),p=e.qb({encapsulation:0,styles:[["div[_ngcontent-%COMP%]{width:70vw;margin:0;padding:0}div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none}div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:red}.table-msg[_ngcontent-%COMP%]{width:60vw;font-family:Roboto,sans-serif;font-size:1rem;border:1px solid red;text-align:justify}.btn-delete[_ngcontent-%COMP%]{width:40vw;text-align:center;margin-bottom:2rem}.asunto[_ngcontent-%COMP%]{font-weight:700;font-size:1.4rem}.texto[_ngcontent-%COMP%]{font-size:1.2rem}"]],data:{}});function m(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,7,"td",[["class","table-msg"]],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,1,"p",[["class","asunto"]],null,null,null,null,null)),(n()(),e.Lb(2,null,["Mensajes de ",""])),(n()(),e.sb(3,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.sb(4,0,null,null,1,"p",[["class","texto"]],null,null,null,null,null)),(n()(),e.Lb(5,null,["",""])),(n()(),e.sb(6,0,null,null,1,"button",[],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.deleteMessage(u,n.context.$implicit)&&t),t}),null,null)),(n()(),e.Lb(-1,null,[" Eliminar "]))],null,(function(n,l){n(l,2,0,l.context.$implicit.area),n(l,5,0,l.context.$implicit.text)}))}function h(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,2,"table",[],null,null,null,null,null)),(n()(),e.hb(16777216,null,null,1,null,m)),e.rb(3,278528,null,0,d.k,[e.O,e.L,e.r],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,3,0,l.component.messages)}),null)}function v(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.Lb(-1,null,["No hay mensajes disponibles"]))],null,null)}function M(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.hb(16777216,null,null,1,null,h)),e.rb(2,16384,null,0,d.l,[e.O,e.L],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),e.sb(3,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.hb(0,[["nomessages",2]],null,0,null,v))],(function(n,l){n(l,2,0,l.component.messages.length>0,e.Eb(l,4))}),null)}var C=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),y=e.qb({encapsulation:0,styles:[[""]],data:{}});function O(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,7,"div",[["class","container"]],null,null,null,null,null)),(n()(),e.sb(1,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(n()(),e.sb(2,0,null,null,2,"div",[["class","col-sm"]],null,null,null,null,null)),(n()(),e.sb(3,0,null,null,1,"app-message-form",[],null,null,null,g,b)),e.rb(4,114688,null,0,i,[r],null,null),(n()(),e.sb(5,0,null,null,2,"div",[["class","col-sm"]],null,null,null,null,null)),(n()(),e.sb(6,0,null,null,1,"app-messages",[],null,null,null,M,p)),e.rb(7,114688,null,0,f,[r],null,null)],(function(n,l){n(l,4,0),n(l,7,0)}),null)}var w=e.ob("app-admin",C,(function(n){return e.Nb(0,[(n()(),e.sb(0,0,null,null,1,"app-admin",[],null,null,null,O,y)),e.rb(1,114688,null,0,C,[],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),P=u("iInd"),_=function(){};u.d(l,"AdminModuleNgFactory",(function(){return I}));var I=e.pb(s,[],(function(n){return e.Bb([e.Cb(512,e.j,e.ab,[[8,[o.a,w]],[3,e.j],e.w]),e.Cb(4608,d.n,d.m,[e.t,[2,d.I]]),e.Cb(1073742336,d.c,d.c,[]),e.Cb(1073742336,P.m,P.m,[[2,P.r],[2,P.k]]),e.Cb(1073742336,_,_,[]),e.Cb(1073742336,s,s,[]),e.Cb(1024,P.i,(function(){return[[{path:"",component:C}]]}),[])])}))}}]);