webpackJsonp([1],{"+h1B":function(n,l,t){"use strict";var o=t("/oeL"),r=t("aR8+"),u=t("wQAS"),i=t("q4dy"),e=t("qbdv"),s=t("fc+i"),a=t("bm2B"),c=t("5TJi");t.d(l,"a",function(){return d});var d=o.b(r.a,[u.a],function(n){return o.c([o.d(512,o.e,o.f,[[8,[i.a]],[3,o.e],o.g]),o.d(5120,o.h,o.i,[[3,o.h]]),o.d(4608,e.a,e.b,[o.h]),o.d(4608,o.j,o.j,[]),o.d(5120,o.k,o.l,[]),o.d(5120,o.m,o.n,[]),o.d(5120,o.o,o.p,[]),o.d(4608,s.b,s.c,[e.c]),o.d(6144,o.q,null,[s.b]),o.d(4608,s.d,s.e,[]),o.d(5120,s.f,function(n,l,t,o){return[new s.g(n),new s.h(l),new s.i(t,o)]},[e.c,e.c,e.c,s.d]),o.d(4608,s.j,s.j,[s.f,o.r]),o.d(135680,s.k,s.k,[e.c]),o.d(4608,s.l,s.l,[s.j,s.k]),o.d(6144,o.s,null,[s.l]),o.d(6144,s.m,null,[s.k]),o.d(4608,o.t,o.t,[o.r]),o.d(4608,s.n,s.n,[e.c]),o.d(4608,s.o,s.o,[e.c]),o.d(4608,a.a,a.a,[]),o.d(4608,c.a,c.a,[]),o.d(512,e.d,e.d,[]),o.d(1024,o.u,s.p,[]),o.d(1024,o.v,function(n,l){return[s.q(n,l)]},[[2,s.r],[2,o.w]]),o.d(512,o.x,o.x,[[2,o.v]]),o.d(131584,o.y,o.y,[o.r,o.z,o.A,o.u,o.e,o.x]),o.d(2048,o.B,null,[o.y]),o.d(512,o.C,o.C,[o.B]),o.d(512,s.s,s.s,[[3,s.s]]),o.d(512,a.b,a.b,[]),o.d(512,a.c,a.c,[]),o.d(512,r.a,r.a,[])])})},0:function(n,l,t){n.exports=t("cDNt")},"5TJi":function(n,l,t){"use strict";t.d(l,"a",function(){return r});var o=function(){function n(n){this.value=n,this.left=null,this.right=null}return n.prototype.hasLeft=function(){return!(null===this.left)},n.prototype.hasRight=function(){return!(null===this.right)},n}(),r=function(){function n(){this.root=new o(""),this.dot=".",this.dash="-",this.invalidMorseCode="#"}return n.prototype.appendMorseTranslation=function(n,l){var t;null===this.root&&(this.root=new o("")),t=this.root;for(var r=0,u=n;r<u.length;r++){var i=u[r];i===this.dot?t=t.hasLeft()?t.left:t.left=new o(""):i===this.dash&&(t=t.hasRight()?t.right:t.right=new o(""))}t.value=l},n.prototype.findMorseTranslation=function(n){var l;if(""===n)return"";if(null===this.root)return this.invalidMorseCode;l=this.root;for(var t=0,o=n;t<o.length;t++){var r=o[t];if(r===this.dot){if(!l.hasLeft())return this.invalidMorseCode;l=l.left}else{if(r!==this.dash)return this.invalidMorseCode;if(!l.hasRight())return this.invalidMorseCode;l=l.right}}return""!==l.value?l.value:this.invalidMorseCode},n.ctorParameters=function(){return[]},n}()},Ampj:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var o=function(){function n(){this.maxTranslations=10,this.translations=[],this.ids=0,this.count=0}return n.prototype.getTranslations=function(){return this.translations},n.prototype.addTranslation=function(n,l){this.count!==this.maxTranslations&&(this.translations.push({id:this.ids,morseCode:n,translation:l}),this.ids++,this.count++)},n.prototype.removeTranslation=function(n){for(var l=0,t=0,o=this.translations;t<o.length;t++){if(o[t].id===n){this.translations.splice(l,1),this.count--;break}l++}},n.prototype.deleteAllTranslations=function(){this.translations=[],this.ids=0,this.ids=0},n.ctorParameters=function(){return[]},n}()},NhKt:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var o=[""]},U9nF:function(n,l,t){"use strict";var o=t("5TJi"),r=t("z0N6");t.d(l,"a",function(){return u});var u=function(){function n(n){this.morseCodeTree=n,this.createMorseCodeTree(),this.longestMorse=6}return n.prototype.createMorseCodeTree=function(){for(var n in r.a)r.a.hasOwnProperty(n)&&this.morseCodeTree.appendMorseTranslation(r.a[n],n)},n.prototype.translateMorse=function(n){var l=this,t="";return n.split(" ").forEach(function(n){""===n?t+="":l.validateMorseCode(n)?t+=" "+l.morseCodeTree.findMorseTranslation(n):t+=" "+l.morseCodeTree.invalidMorseCode}),t},n.prototype.validateMorseCode=function(n){return/[.-]{1,6}/.test(n)},n.ctorParameters=function(){return[{type:o.a}]},n}()},"aR8+":function(n,l,t){"use strict";t.d(l,"a",function(){return o});var o=function(){function n(){}return n}()},cDNt:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var o=t("/oeL"),r=t("p5Ee"),u=t("+h1B"),i=t("fc+i");r.a.production&&t.i(o.a)(),t.i(i.a)().bootstrapModuleFactory(u.a)},p5Ee:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var o={production:!0}},q4dy:function(n,l,t){"use strict";function o(n){return e._17(0,[(n()(),e._18(0,null,null,13,"div",[["class","container-fluid"],["style","width:90vw;"]],null,null,null,null,null)),(n()(),e._19(null,["\n  "])),(n()(),e._18(0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(n()(),e._19(null,["\n    "])),(n()(),e._18(0,null,null,1,"div",[["class","col-sm-5"],["style","background-color: rgba(255,255,255,0.2); font-family: 'Roboto', sans-serif; font-size:1.5vw;"]],null,null,null,null,null)),(n()(),e._19(null,["",""])),(n()(),e._19(null,["\n    "])),(n()(),e._18(0,null,null,1,"div",[["class","col-sm-6"],["style","background-color: rgba(255,255,255,0.2); font-family: 'Roboto', sans-serif; font-size:1.5vw"]],null,null,null,null,null)),(n()(),e._19(null,[": ",""])),(n()(),e._19(null,["\n    "])),(n()(),e._18(0,null,null,1,"button",[["class","col-sm-1"],["style"," font-family: 'Roboto', sans-serif; font-size:1.5vw; background-color: rgba(255,255,255,0); border: 0px solid;"]],null,[[null,"click"]],function(n,l,t){var o=!0,r=n.component;if("click"===l){o=!1!==r.removeTranslation(n.context.$implicit.id)&&o}return o},null,null)),(n()(),e._18(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-times-circle"]],null,null,null,null,null)),(n()(),e._19(null,["\n  "])),(n()(),e._19(null,["\n"]))],null,function(n,l){n(l,5,0,l.context.$implicit.morseCode),n(l,8,0,l.context.$implicit.translation)})}function r(n){return e._17(0,[(n()(),e._18(0,null,null,4,"div",[["style","text-align:center;"]],null,null,null,null,null)),(n()(),e._19(null,["\n  "])),(n()(),e._18(0,null,null,1,"h1",[["class","strip"],["style","color: white;\n             text-align:center; font-size:7vw;\n             font-family: 'Roboto', sans-serif;\n             border-bottom: 1px solid rgba(255,255,255,.25);"]],null,null,null,null,null)),(n()(),e._19(null,["\n    ","\n  "])),(n()(),e._19(null,["\n"])),(n()(),e._19(null,["\n"])),(n()(),e._18(0,null,null,27,"div",[["style","text-align:center"]],null,null,null,null,null)),(n()(),e._19(null,["\n  "])),(n()(),e._18(0,null,null,1,"h2",[["style","font-family: 'Roboto', sans-serif;\n             font-size:4vw"]],null,null,null,null,null)),(n()(),e._19(null,["\n    ","\n  "])),(n()(),e._19(null,["\n  "])),(n()(),e._18(0,null,null,10,"div",[],null,null,null,null,null)),(n()(),e._19(null,["\n  "])),(n()(),e._18(0,[["morseInput",1]],null,7,"input",[["style","background-color: rgba(255,255,255,0.2);\n                border: 0px solid;\n                color:#ffffff;\n                padding: 0 20px;\n                width: 90vw;\n                font-size:4vw;\n                font-family: 'Roboto', sans-serif;\n                font-weight:bold;\n                text-align:center;"]],[[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keypress"],[null,"keyup"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var o=!0,r=n.component;if("input"===l){o=!1!==e._20(n,14)._handleInput(t.target.value)&&o}if("blur"===l){o=!1!==e._20(n,14).onTouched()&&o}if("compositionstart"===l){o=!1!==e._20(n,14)._compositionStart()&&o}if("compositionend"===l){o=!1!==e._20(n,14)._compositionEnd(t.target.value)&&o}if("ngModelChange"===l){o=!1!==(r.morseCode=t)&&o}if("keypress"===l){o=!1!==r._keyPress(t)&&o}if("keyup"===l){o=!1!==r.translateMorse(e._20(n,13).value)&&o}return o},null,null)),e._21(16384,null,0,a.d,[e.I,e.J,[2,a.e]],null,null),e._21(540672,null,0,a.f,[],{maxlength:[0,"maxlength"]},null),e._22(1024,null,a.g,function(n){return[n]},[a.f]),e._22(1024,null,a.h,function(n){return[n]},[a.d]),e._21(671744,null,0,a.i,[[8,null],[2,a.g],[8,null],[2,a.h]],{model:[0,"model"]},{update:"ngModelChange"}),e._22(2048,null,a.j,null,[a.i]),e._21(16384,null,0,a.k,[a.j],null,null),(n()(),e._19(null,["\n  "])),(n()(),e._19(null,["\n  "])),(n()(),e._18(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e._19(null,["\n  "])),(n()(),e._18(0,null,null,7,"div",[["style","text-align:center"]],null,null,null,null,null)),(n()(),e._19(null,["\n    "])),(n()(),e._18(0,null,null,1,"button",[["style","font-size:2.5vw; background-color: rgba(255,255,255,0.2); border: 0px solid;"]],null,[[null,"click"]],function(n,l,t){var o=!0,r=n.component;if("click"===l){o=!1!==r.saveTranslation()&&o}return o},null,null)),(n()(),e._19(null,["S A V E"])),(n()(),e._19(null,["\n    "])),(n()(),e._18(0,null,null,1,"button",[["style","font-size:2.5vw; background-color: rgba(255,255,255,0.2); border: 0px solid;"]],null,[[null,"click"]],function(n,l,t){var o=!0,r=n.component;if("click"===l){o=!1!==r.clearTranslations()&&o}return o},null,null)),(n()(),e._19(null,["C L E A R"])),(n()(),e._19(null,["\n  "])),(n()(),e._19(null,["\n"])),(n()(),e._19(null,["\n"])),(n()(),e._18(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e._19(null,["\n"])),(n()(),e._19(null,["\n"])),(n()(),e._23(16777216,null,null,1,null,o)),e._21(802816,null,0,c.h,[e._10,e._11,e.m],{ngForOf:[0,"ngForOf"]},null),(n()(),e._19(null,["\n\n"])),(n()(),e._19(null,["\n"])),(n()(),e._19(null,["\n\n"]))],function(n,l){var t=l.component;n(l,15,0,t.maxInputChars),n(l,18,0,t.morseCode),n(l,39,0,t.translations)},function(n,l){var t=l.component;n(l,3,0,t.title),n(l,9,0,t.currTranslation),n(l,13,0,e._20(l,15).maxlength?e._20(l,15).maxlength:null,e._20(l,20).ngClassUntouched,e._20(l,20).ngClassTouched,e._20(l,20).ngClassPristine,e._20(l,20).ngClassDirty,e._20(l,20).ngClassValid,e._20(l,20).ngClassInvalid,e._20(l,20).ngClassPending)})}function u(n){return e._17(0,[(n()(),e._18(0,null,null,3,"app-root",[],null,null,null,r,_)),e._22(512,null,d.a,d.a,[]),e._22(512,null,f.a,f.a,[h.a]),e._21(49152,null,0,s.a,[d.a,f.a],null,null)],null,null)}var i=t("NhKt"),e=t("/oeL"),s=t("wQAS"),a=t("bm2B"),c=t("qbdv"),d=t("Ampj"),f=t("U9nF"),h=t("5TJi");t.d(l,"a",function(){return v});var p=[i.a],_=e._16({encapsulation:0,styles:p,data:{}}),v=e._24("app-root",s.a,u,{},{},[])},qtrl:function(n,l){function t(n){throw new Error("Cannot find module '"+n+"'.")}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id="qtrl"},wQAS:function(n,l,t){"use strict";var o=t("Ampj"),r=t("U9nF");t.d(l,"a",function(){return u});var u=function(){function n(n,l){this.title="M O R S E N",this.maxInputChars=50,this.morseCode="",this.currTranslation=" ",this.error="",this.translations=n.getTranslations(),this.translationsManager=n,this.translator=l}return n.prototype.translateMorse=function(n){this.morseCode=n,this.currTranslation=this.translator.translateMorse(n)},n.prototype.saveTranslation=function(){""!==this.morseCode&&""!==this.currTranslation&&(this.translationsManager.addTranslation(this.morseCode,this.currTranslation),this.morseCode="",this.currTranslation="")},n.prototype.removeTranslation=function(n){console.log("Removed was called: "+n),this.translationsManager.removeTranslation(n),this.translations=this.translationsManager.getTranslations()},n.prototype.clearTranslations=function(){this.translationsManager.deleteAllTranslations(),this.translations=this.translationsManager.getTranslations()},n.prototype._keyPress=function(n){var l=/[\.\- ]/,t=String.fromCharCode(n.charCode);l.test(t)||n.preventDefault()},n.ctorParameters=function(){return[{type:o.a},{type:r.a}]},n}()},z0N6:function(n,l,t){"use strict";t.d(l,"a",function(){return o});var o={0:"-----",1:".----",2:"..---",3:"...--",4:"....-",5:".....",6:"-....",7:"--...",8:"---..",9:"----.",A:".-",B:"-...",C:"-.-.",D:"-..",E:".",F:"..-.",G:"--.",H:"....",I:"..",J:".---",K:"-.-",L:".-..",M:"--",N:"-.",O:"---",P:".--.",Q:"--.-",R:".-.",S:"...",T:"-",U:"..-",V:"...-",W:".--",X:"-..-",Y:"-.--",Z:"--..",".":".-.-.-",",":"--..--","?":"..--..","!":"-.-.--","-":"-....-","/":"-..-.","@":".--.-.","(":"-.--.",")":"-.--.-"}}},[0]);