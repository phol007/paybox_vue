webpackJsonp([6],{117:function(A,s,t){"use strict";var i=t(1),n=t(136),g=function(){return t.e(1).then(t.bind(null,143))},I=function(){return t.e(0).then(t.bind(null,142))},e=function(){return t.e(2).then(t.bind(null,144))},E=function(){return t.e(4).then(t.bind(null,145))},B=function(){return t.e(3).then(t.bind(null,141))};i.a.use(n.a),s.a=new n.a({routes:[{path:"/",name:"Menu",component:g},{path:"/items/menu/langID",name:"items",component:I},{path:"/payment/items/langID/oldMenu",name:"payment",component:e},{path:"/setting",name:"setting",component:E},{path:"/addMoney",name:"addMoney",component:B}]})},118:function(A,s){},119:function(A,s){},120:function(A,s){},121:function(A,s){},122:function(A,s,t){var i=t(125)(t(128),t(135),null,null,null);A.exports=i.exports},127:function(A,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=t(1),n=t(122),g=t.n(n),I=t(117),e=t(118),E=(t.n(e),t(120)),B=(t.n(E),t(121)),o=(t.n(B),t(119)),a=(t.n(o),t(123)),C=t.n(a),c=t(124),Q=t.n(c);i.a.config.productionTip=!1,i.a.use(C.a,"ws://localhost:8888/web",{format:"json"}),i.a.use(Q.a),new i.a({el:"#app",router:I.a,template:"<App/>",components:{App:g.a}})},128:function(A,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=t(0),n=t.n(i),g=t(126),I=t.n(g);s.default={name:"app",data:function(){return{time:"",data_socket:{},sale:0,file1:t(134),screen:"width "+screen.availWidth+", height "+screen.availHeight}},methods:{websocket_onmessage:function(){var A=this;this.$options.sockets.onmessage=function(s){return A.userTest_sale(JSON.parse(s.data))}},userTest_sale:function(A){switch(A.command){case"print":this.sale+=1}},inputPassword:function(){I()("#setting").addClass("is-active"),document.getElementById("PasswordKey").value=""},closeModal:function(){I()("#setting").removeClass("is-active")},addKey:function(A){this.stopSound(),this.Soundclick(),document.getElementById("PasswordKey").value+=A.toString()},removeKey:function(){this.stopSound(),this.Soundclick();var A=document.getElementById("PasswordKey").value;document.getElementById("PasswordKey").value=A.substring(A.length-1,0)},gotoSetting:function(){this.stopSound(),this.Soundclick(),this.$router.push("/setting"),this.closeModal()},Soundclick:function(){document.getElementById("audio").play()},stopSound:function(){document.getElementById("audio").currentTime=0}},beforeDestroy:function(){return{sockets:null}},mounted:function(){setInterval(function(){this.time=n()(new Date).format("h:mm:ss")}.bind(this),1e3),this.websocket_onmessage()}}},129:function(A,s,t){function i(A){return t(n(A))}function n(A){var s=g[A];if(!(s+1))throw new Error("Cannot find module '"+A+"'.");return s}var g={"./af":2,"./af.js":2,"./ar":9,"./ar-dz":3,"./ar-dz.js":3,"./ar-kw":4,"./ar-kw.js":4,"./ar-ly":5,"./ar-ly.js":5,"./ar-ma":6,"./ar-ma.js":6,"./ar-sa":7,"./ar-sa.js":7,"./ar-tn":8,"./ar-tn.js":8,"./ar.js":9,"./az":10,"./az.js":10,"./be":11,"./be.js":11,"./bg":12,"./bg.js":12,"./bn":13,"./bn.js":13,"./bo":14,"./bo.js":14,"./br":15,"./br.js":15,"./bs":16,"./bs.js":16,"./ca":17,"./ca.js":17,"./cs":18,"./cs.js":18,"./cv":19,"./cv.js":19,"./cy":20,"./cy.js":20,"./da":21,"./da.js":21,"./de":24,"./de-at":22,"./de-at.js":22,"./de-ch":23,"./de-ch.js":23,"./de.js":24,"./dv":25,"./dv.js":25,"./el":26,"./el.js":26,"./en-au":27,"./en-au.js":27,"./en-ca":28,"./en-ca.js":28,"./en-gb":29,"./en-gb.js":29,"./en-ie":30,"./en-ie.js":30,"./en-nz":31,"./en-nz.js":31,"./eo":32,"./eo.js":32,"./es":34,"./es-do":33,"./es-do.js":33,"./es.js":34,"./et":35,"./et.js":35,"./eu":36,"./eu.js":36,"./fa":37,"./fa.js":37,"./fi":38,"./fi.js":38,"./fo":39,"./fo.js":39,"./fr":42,"./fr-ca":40,"./fr-ca.js":40,"./fr-ch":41,"./fr-ch.js":41,"./fr.js":42,"./fy":43,"./fy.js":43,"./gd":44,"./gd.js":44,"./gl":45,"./gl.js":45,"./gom-latn":46,"./gom-latn.js":46,"./he":47,"./he.js":47,"./hi":48,"./hi.js":48,"./hr":49,"./hr.js":49,"./hu":50,"./hu.js":50,"./hy-am":51,"./hy-am.js":51,"./id":52,"./id.js":52,"./is":53,"./is.js":53,"./it":54,"./it.js":54,"./ja":55,"./ja.js":55,"./jv":56,"./jv.js":56,"./ka":57,"./ka.js":57,"./kk":58,"./kk.js":58,"./km":59,"./km.js":59,"./kn":60,"./kn.js":60,"./ko":61,"./ko.js":61,"./ky":62,"./ky.js":62,"./lb":63,"./lb.js":63,"./lo":64,"./lo.js":64,"./lt":65,"./lt.js":65,"./lv":66,"./lv.js":66,"./me":67,"./me.js":67,"./mi":68,"./mi.js":68,"./mk":69,"./mk.js":69,"./ml":70,"./ml.js":70,"./mr":71,"./mr.js":71,"./ms":73,"./ms-my":72,"./ms-my.js":72,"./ms.js":73,"./my":74,"./my.js":74,"./nb":75,"./nb.js":75,"./ne":76,"./ne.js":76,"./nl":78,"./nl-be":77,"./nl-be.js":77,"./nl.js":78,"./nn":79,"./nn.js":79,"./pa-in":80,"./pa-in.js":80,"./pl":81,"./pl.js":81,"./pt":83,"./pt-br":82,"./pt-br.js":82,"./pt.js":83,"./ro":84,"./ro.js":84,"./ru":85,"./ru.js":85,"./sd":86,"./sd.js":86,"./se":87,"./se.js":87,"./si":88,"./si.js":88,"./sk":89,"./sk.js":89,"./sl":90,"./sl.js":90,"./sq":91,"./sq.js":91,"./sr":93,"./sr-cyrl":92,"./sr-cyrl.js":92,"./sr.js":93,"./ss":94,"./ss.js":94,"./sv":95,"./sv.js":95,"./sw":96,"./sw.js":96,"./ta":97,"./ta.js":97,"./te":98,"./te.js":98,"./tet":99,"./tet.js":99,"./th":100,"./th.js":100,"./tl-ph":101,"./tl-ph.js":101,"./tlh":102,"./tlh.js":102,"./tr":103,"./tr.js":103,"./tzl":104,"./tzl.js":104,"./tzm":106,"./tzm-latn":105,"./tzm-latn.js":105,"./tzm.js":106,"./uk":107,"./uk.js":107,"./ur":108,"./ur.js":108,"./uz":110,"./uz-latn":109,"./uz-latn.js":109,"./uz.js":110,"./vi":111,"./vi.js":111,"./x-pseudo":112,"./x-pseudo.js":112,"./yo":113,"./yo.js":113,"./zh-cn":114,"./zh-cn.js":114,"./zh-hk":115,"./zh-hk.js":115,"./zh-tw":116,"./zh-tw.js":116};i.keys=function(){return Object.keys(g)},i.resolve=n,A.exports=i,i.id=129},130:function(A,s,t){A.exports=t.p+"static/img/logo_paybox.92db140.png"},131:function(A,s){A.exports="data:image/png;base64,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"},132:function(A,s){A.exports="data:image/png;base64,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"},133:function(A,s){A.exports="data:image/png;base64,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"},134:function(A,s,t){A.exports=t.p+"static/media/click.c42bd94.mp3"},135:function(A,s,t){A.exports={render:function(){var A=this,s=A.$createElement,i=A._self._c||s;return i("div",{attrs:{id:"app"}},[i("nav",{staticClass:"navbar"},[i("div",{staticClass:"head-left"},[i("img",{directives:[{name:"touch",rawName:"v-touch:hold.prevenDefualt",value:A.inputPassword,expression:"inputPassword",arg:"hold",modifiers:{prevenDefualt:!0}}],attrs:{src:t(130)}})]),A._v(" "),i("div",{staticClass:"head-right"},[i("span",[A._v("Time "+A._s(A.time)+" น.")]),A._v(" "),i("audio",{attrs:{id:"audio",src:A.file1}})])]),A._v(" "),i("router-view"),A._v(" "),i("footer",{staticClass:"fot"},[i("marquee",{staticStyle:{width:"80%",float:"left"},attrs:{name:"status"}},[A._v("\n      ** โปรแกรมพร้อมใช้งานแล้ว [ ทดสอบสั่งซื้อสินค้าไปแล้ว "+A._s(A.sale)+" รายการ ] "+A._s(A.screen)+"\n    ")]),A._v(" "),A._m(0)],1),A._v(" "),i("div",{staticClass:"modal",attrs:{id:"setting"}},[i("div",{staticClass:"modal-background"}),A._v(" "),i("div",{staticClass:"modal-content"},[i("input",{staticClass:"setting_input",attrs:{type:"password",id:"PasswordKey",readonly:"true",maxlength:"13",size:"13"}}),A._v(" "),i("button",{staticClass:"button is-info bt-setting",on:{click:function(s){A.addKey(1)}}},[A._v("1")]),A._v(" "),i("button",{staticClass:"button is-info bt-setting",on:{click:function(s){A.addKey(2)}}},[A._v("2")]),A._v(" "),i("button",{staticClass:"button is-info bt-setting",on:{click:function(s){A.addKey(3)}}},[A._v("3")]),A._v(" "),i("button",{staticClass:"button is-info bt-setting",on:{click:function(s){A.addKey(4)}}},[A._v("4")]),A._v(" "),i("button",{staticClass:"button is-info bt-setting",on:{click:function(s){A.addKey(5)}}},[A._v("5")]),A._v(" "),i("button",{staticClass:"button is-info bt-setting",on:{click:function(s){A.addKey(6)}}},[A._v("6")]),A._v(" "),i("button",{staticClass:"button is-info bt-setting",on:{click:function(s){A.addKey(7)}}},[A._v("7")]),A._v(" "),i("button",{staticClass:"button is-info bt-setting",on:{click:function(s){A.addKey(8)}}},[A._v("8")]),A._v(" "),i("button",{staticClass:"button is-info bt-setting",on:{click:function(s){A.addKey(9)}}},[A._v("9")]),A._v(" "),i("button",{staticClass:"button is-info bt-setting",on:{click:function(s){A.addKey(0)}}},[A._v("0")]),A._v(" "),i("button",{staticClass:"button is-info bt-setting",on:{click:A.removeKey}},[A._v("Del")]),A._v(" "),i("button",{staticClass:"button is-info bt-setting",on:{click:A.gotoSetting}},[A._v("Go!")])]),A._v(" "),i("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{click:A.closeModal}})])],1)},staticRenderFns:[function(){var A=this,s=A.$createElement,i=A._self._c||s;return i("div",{staticClass:"fstatus"},[i("img",{staticStyle:{margin:"2% 5%"},attrs:{src:t(131),width:"30"}}),A._v(" "),i("img",{staticStyle:{margin:"2% 5%"},attrs:{src:t(132),width:"30"}}),A._v(" "),i("img",{staticStyle:{margin:"2% 5%"},attrs:{src:t(133),width:"30"}})])}]}}},[127]);
//# sourceMappingURL=app.f8410b4b0ff80cd6cdc3.js.map