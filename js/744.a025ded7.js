"use strict";(self["webpackChunkday_shopping"]=self["webpackChunkday_shopping"]||[]).push([[744],{5744:function(t,e,i){i.r(e),i.d(e,{default:function(){return h}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login"},[e("van-nav-bar",{attrs:{title:"会员登录","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"form"},[e("div",{staticClass:"form-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],staticClass:"inp",attrs:{maxlength:"11",placeholder:"请输入手机号码",type:"text"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}})]),e("div",{staticClass:"form-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.picCode,expression:"picCode"}],staticClass:"inp",attrs:{maxlength:"5",placeholder:"请输入图形验证码",type:"text"},domProps:{value:t.picCode},on:{input:function(e){e.target.composing||(t.picCode=e.target.value)}}}),t.picUrl?e("img",{attrs:{src:t.picUrl,alt:""},on:{click:t.getPicCode}}):t._e()]),e("div",{staticClass:"form-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.msgCode,expression:"msgCode"}],staticClass:"inp",attrs:{placeholder:"请输入短信验证码",type:"text"},domProps:{value:t.msgCode},on:{input:function(e){e.target.composing||(t.msgCode=e.target.value)}}}),e("button",{on:{click:t.getCode}},[t._v(t._s(t.second===t.totalSecond?"获取验证码":t.second+"秒后重新获取"))])])]),e("div",{staticClass:"login-btn",on:{click:t.login}},[t._v("登录")])])],1)},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("h3",[t._v("手机号登录")]),e("p",[t._v("未注册的手机号登录后将自动注册")])])}],o=i(5720);const n=()=>o.A.get("/captcha/image"),c=(t,e,i)=>o.A.post("/captcha/sendSmsCaptcha",{form:{captchaCode:t,captchaKey:e,mobile:i}}),r=(t,e)=>o.A.post("/passport/login",{form:{isParty:!1,mobile:t,partyData:{},smsCode:e}});var l={name:"LoginPage",data(){return{picUrl:"",picKey:"",totalSecond:5,second:5,timer:null,picCode:"1111",mobile:"13132999844",msgCode:"246810"}},created(){this.getPicCode()},methods:{async getPicCode(){const{data:{base64:t,key:e}}=await n();this.picUrl=t,this.picKey=e},async getCode(){this.validFn()&&(this.timer||this.second!==this.totalSecond||(await c(this.picCode,this.picKey,this.mobile),this.$toast("获取信息成功"),this.timer=setInterval((()=>{this.second--,this.second<1&&(clearInterval(this.timer),this.timer=null,this.second=this.totalSecond)}),1e3)))},validFn(){return/^1[3-9]\d{9}$/.test(this.mobile)?!!/^\w{4}$/.test(this.picCode)||(this.$toast("图形验证码输入不正确"),!1):(this.$toast("手机号输入不正确"),!1)},async login(){if(!this.validFn())return;if(!/^\d{6}$/.test(this.msgCode))return void this.$toast("请输入正确的手机验证码");const t=await r(this.mobile,this.msgCode);this.$store.commit("user/setUserInfo",t.data),this.$toast("登录成功");const e=this.$route.query.backUrl||"/";this.$router.replace(e)}},destroyed(){clearInterval(this.timer)}},d=l,m=i(1656),p=(0,m.A)(d,s,a,!1,null,"e8f8c636",null),h=p.exports}}]);
//# sourceMappingURL=744.a025ded7.js.map