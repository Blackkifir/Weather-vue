(function(){"use strict";var e={5663:function(e,t,a){var i=a(5130),s=a(6768);const r={class:"wrapper"};function o(e,t,a,i,o,d){const n=(0,s.g2)("home-page");return(0,s.uX)(),(0,s.CE)("div",r,[(0,s.bF)(n)])}function d(e,t,a,i,r,o){const d=(0,s.g2)("header-static"),n=(0,s.g2)("main-static"),l=(0,s.g2)("footer-static");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(d),(0,s.bF)(n),(0,s.bF)(l)],64)}var n=a.p+"img/logo.df0e8acb.jpg";const l={class:"header"},c=(0,s.Lk)("img",{class:"header_logo",src:n,alt:"logo-notFound"},null,-1),u=[c];function m(e,t,a,i,r,o){return(0,s.uX)(),(0,s.CE)("header",l,u)}var h={name:"header-static"},v=a(1241);const p=(0,v.A)(h,[["render",m]]);var y=p;a(4114);const f={class:"main"},C={class:"weather"},b={class:"weather_buttons"};function g(e,t,a,i,r,o){const d=(0,s.g2)("primary-block"),n=(0,s.g2)("favorites-block");return(0,s.uX)(),(0,s.CE)("main",f,[(0,s.Lk)("div",C,[(0,s.Lk)("div",b,[(0,s.Lk)("button",{class:"weather_buttons_primaryBtn",type:"button",onClick:t[0]||(t[0]=t=>e.$router.push("/"))}," Home "),(0,s.Lk)("button",{class:"weather_buttons_favoritesBtn",type:"button",onClick:t[1]||(t[1]=t=>e.$router.push("/favorites"))}," Favorites ")])]),o.isHomeRoute?((0,s.uX)(),(0,s.Wv)(d,{key:0})):(0,s.Q3)("",!0),o.isFavoritesRoute?((0,s.uX)(),(0,s.Wv)(n,{key:1})):(0,s.Q3)("",!0)])}const k={key:0},w={class:"primary"},_={key:1};function A(e,t,a,i,r,o){const d=(0,s.g2)("form-searchCity"),n=(0,s.g2)("primary-dayOfWeek"),l=(0,s.g2)("primary-chart"),c=(0,s.g2)("rainbow-loader");return e.isLoading?((0,s.uX)(),(0,s.CE)("div",_,[(0,s.bF)(c)])):((0,s.uX)(),(0,s.CE)("div",k,[(0,s.Lk)("div",w,[(0,s.bF)(d,{searchCitySubmit:o.searchCitySubmit,modelValue:e.searchCity,"onUpdate:modelValue":e.setSearchCity},null,8,["searchCitySubmit","modelValue","onUpdate:modelValue"]),(0,s.bF)(n),(0,s.bF)(l)])]))}var F=a(782),L=a(4232);const M={class:"form_chooseBlock"},S=["value"],O={id:"cityList"},P=["value"],V={class:"form_favoritesBlock"},W={class:"form_favoritesBlock_count"};function E(e,t,a,r,o,d){const n=(0,s.g2)("modal-alert");return(0,s.uX)(),(0,s.CE)("form",{class:"form",name:"search",onSubmit:t[3]||(t[3]=(0,i.D$)(((...e)=>a.searchCitySubmit&&a.searchCitySubmit(...e)),["prevent"]))},[(0,s.Lk)("div",M,[(0,s.Lk)("input",{class:"form_chooseBlock_inputSearchCity",placeholder:"Choose a city...",id:"searchCity",name:"searchCity",type:"text",list:"cityList",value:a.modelValue,onInput:t[0]||(t[0]=(...e)=>d.updateSearchCity&&d.updateSearchCity(...e))},null,40,S),(0,s.Lk)("datalist",O,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.allCities,(e=>((0,s.uX)(),(0,s.CE)("option",{value:e,key:e},null,8,P)))),128))]),(0,s.Lk)("button",{class:"form_chooseBlock_searchSubmitBtn",type:"submit",onSubmit:t[1]||(t[1]=(...e)=>a.searchCitySubmit&&a.searchCitySubmit(...e))}," Search ",32)]),(0,s.Lk)("div",V,[(0,s.Lk)("button",{class:"form_favoritesBlock_toFavoritesAddBtn",type:"button",onClick:t[2]||(t[2]=(...e)=>d.addToFavoritesCard&&d.addToFavoritesCard(...e))},(0,L.v_)(o.isAddToFavorites?"The card is added":"Add to favorites"),1),(0,s.Lk)("span",W,(0,L.v_)(e.favoritesCards.length),1)]),e.favoritesCards.length>=5||o.isAlreadyAdded?((0,s.uX)(),(0,s.Wv)(n,{key:0,isAlreadyAdded:o.isAlreadyAdded},null,8,["isAlreadyAdded"])):(0,s.Q3)("",!0)],32)}const D={key:0,class:"modalAlert"},X={class:"modalAlert_window"},I={class:"modalAlert_window_content"},x={key:0,class:"modalAlert_window_content_text"},T={key:1,class:"modalAlert_window_content_text"};function H(e,t,a,i,r,o){return e.isModalAlertVisible?((0,s.uX)(),(0,s.CE)("div",D,[(0,s.Lk)("div",X,[(0,s.Lk)("div",I,[a.isAlreadyAdded?((0,s.uX)(),(0,s.CE)("p",x," You already have this card ")):e.favoritesCards.length>=5?((0,s.uX)(),(0,s.CE)("p",T," Maximum of 5 cards ")):(0,s.Q3)("",!0),(0,s.Lk)("div",null,[(0,s.Lk)("button",{class:"modalAlert_window_okay",onClick:t[0]||(t[0]=(...e)=>o.setModalAlertHidden&&o.setModalAlertHidden(...e))}," Okay ")])])])])):(0,s.Q3)("",!0)}var N={name:"ModalWindow",props:{isAlreadyAdded:Boolean},computed:{...(0,F.aH)({isModalAlertVisible:e=>e.weather.isModalAlertVisible,favoritesCards:e=>e.weather.favoritesCards})},methods:{...(0,F.PY)({setModalAlertVisible:"weather/setModalAlertVisible"}),setModalAlertHidden(){this.setModalAlertVisible(!1)}}};const $=(0,v.A)(N,[["render",H]]);var B=$,j={name:"form-searchCity",components:{ModalAlert:B},props:{modelValue:[String,Number],searchCitySubmit:Function},data(){return{allCities:["New York","Los Angeles","Chicago","Houston","California","Washington","Texas","Las Vegas","Detroit"],isAddToFavorites:!1,isAlreadyAdded:null}},computed:{...(0,F.aH)({itemsProperties:e=>e.weather.itemsProperties,favoritesCards:e=>e.weather.favoritesCards})},methods:{...(0,F.PY)({setFavoritesCards:"weather/setFavoritesCards",setModalAlertVisible:"weather/setModalAlertVisible"}),updateSearchCity(e){this.$emit("update:modelValue",e.target.value)},addToFavoritesCard(){this.isAlreadyAdded=this.favoritesCards.some((e=>e.name===this.itemsProperties.name)),this.favoritesCards.length>=5||this.isAlreadyAdded?this.setModalAlertVisible(!0):(this.setFavoritesCards(this.itemsProperties),this.isAddToFavorites=!0,setTimeout((()=>{this.isAddToFavorites=!1}),1500))}}};const Y=(0,v.A)(j,[["render",E]]);var R=Y;const Q={class:"dayOfWeek"},K={class:"dayOfWeek_date"},J={class:"dayOfWeek_date_day"},U={class:"dayOfWeek_date_currentDay"};function q(e,t,a,i,r,o){const d=(0,s.g2)("primary-card");return(0,s.uX)(),(0,s.CE)("div",Q,[(0,s.Lk)("div",K,[(0,s.Lk)("p",J,(0,L.v_)(this.dayOfMonth),1),(0,s.Lk)("p",U,(0,L.v_)(this.dayOfWeek),1)]),(0,s.bF)(d,{id:e.itemsProperties.id,description:e.itemsProperties.description,temp:e.itemsProperties.temp,humidity:e.itemsProperties.humidity,wind:e.itemsProperties.wind,name:e.itemsProperties.name},null,8,["id","description","temp","humidity","wind","name"])])}var z=a.p+"img/cardImg.55bc107a.png";const G={class:"bigCard"},Z=(0,s.Lk)("div",{class:"bigCard_icons"},[(0,s.Lk)("img",{class:"bigCard_icons_img",src:z,alt:"Weather icon not found"})],-1),ee={class:"bigCard_details"},te={class:"bigCard_details_text"},ae={class:"bigCard_details_text"},ie={class:"bigCard_details_text"},se={class:"bigCard_details_text"},re={class:"bigCard_details_text"};function oe(e,t,a,i,r,o){return(0,s.uX)(),(0,s.CE)("div",G,[Z,(0,s.Lk)("div",ee,[(0,s.Lk)("p",te,"Description: "+(0,L.v_)(a.description),1),(0,s.Lk)("p",ae,"Temperature: "+(0,L.v_)(`${a.temp}°C`),1),(0,s.Lk)("p",ie,"Humidity: "+(0,L.v_)(`${a.humidity}%`),1),(0,s.Lk)("p",se,"Wind: "+(0,L.v_)(a.wind)+" m/s",1),(0,s.Lk)("p",re,"Location: "+(0,L.v_)(a.name),1)])])}var de={name:"primary-card",props:{id:[Number],description:[String],temp:[Number],humidity:[Number],wind:[Number],name:[String]}};const ne=(0,v.A)(de,[["render",oe]]);var le=ne,ce={name:"primary_dayOfWeek",components:{PrimaryCard:le},data(){return{date:{},days:[],dayOfWeek:"",dayOfMonth:0}},computed:{...(0,F.aH)({items:e=>e.weather.items,itemsProperties:e=>e.weather.itemsProperties})},methods:{...(0,F.PY)({setItems:"weather/setItems",setItemsProperties:"weather/setItemsProperties"}),loadDataItems(){if(0!==this.items.length){this.date=new Date(this.items.list[0].dt_txt),this.days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],this.dayOfWeek=this.days[this.date.getDay()],this.dayOfMonth=this.date.getDate();const e={id:this.items.city.id,name:this.items.city.name,description:this.items.list[0].weather[0].description,temp:Math.round(this.items.list[0].main.temp-273.15),humidity:this.items.list[0].main.humidity,wind:Math.round(this.items.list[0].wind.speed)};this.setItemsProperties(e)}}},mounted(){this.loadDataItems()}};const ue=(0,v.A)(ce,[["render",q]]);var me=ue;const he={class:"chart"},ve={class:"chart_flex"};function pe(e,t,a,i,r,o){const d=(0,s.g2)("Bar");return(0,s.uX)(),(0,s.CE)("div",he,[(0,s.Lk)("div",ve,[(0,s.bF)(d,{id:"my-chart-id",options:r.chartOptions,data:r.chartData},null,8,["options","data"])])])}var ye=a(1010),fe=a(6912);fe.t1.register(fe.hE,fe.m_,fe.s$,fe.E8,fe.PP,fe.kc);var Ce={name:"BarChart",components:{Bar:ye.yP},data(){return{chartData:{labels:[],datasets:[]},chartOptions:{responsive:!0,maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{display:!0,position:"top",labels:{color:"#FFFFFF",usePointStyle:!0,pointStyle:"circle"}}},scales:{x:{grid:{color:"rgba(255, 255, 255, 0.5)"},ticks:{color:"#FFFFFF"}},y:{grid:{color:"rgba(255, 255, 255, 0.5)"},ticks:{color:"#FFFFFF"}}}}}},computed:{...(0,F.aH)({items:e=>e.weather.items})},mounted(){this.updateChartData()},methods:{updateChartData(){if(this.items&&this.items.list){const e=this.items.list.map((e=>new Date(1e3*e.dt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}))),t=this.items.list.map((e=>e.main.temp-273.15));this.chartData={labels:e,datasets:[{label:"Temperature (°C)",data:t,backgroundColor:"rgba(255, 255, 255, 0.5)",borderColor:"rgba(255, 255, 255, 1)",borderWidth:1,borderRadius:5}]}}}}};const be=(0,v.A)(Ce,[["render",pe]]);var ge=be;const ke={class:"loader"},we=(0,s.Fv)('<div class="loader-inner"><div class="loader-line-wrap"><div class="loader-line"></div></div><div class="loader-line-wrap"><div class="loader-line"></div></div><div class="loader-line-wrap"><div class="loader-line"></div></div><div class="loader-line-wrap"><div class="loader-line"></div></div><div class="loader-line-wrap"><div class="loader-line"></div></div></div>',1),_e=[we];function Ae(e,t,a,i,r,o){return(0,s.uX)(),(0,s.CE)("div",ke,_e)}var Fe={name:"rainbow-loader"};const Le=(0,v.A)(Fe,[["render",Ae]]);var Me=Le,Se={name:"primary-block",components:{FormSearchCity:R,PrimaryDayOfWeek:me,PrimaryChart:ge,RainbowLoader:Me},computed:{...(0,F.aH)({items:e=>e.weather.items,isLoading:e=>e.weather.isLoading,searchCity:e=>e.weather.searchCity})},methods:{...(0,F.PY)({setLoading:"weather/setLoading",setSearchCity:"weather/setSearchCity"}),...(0,F.i0)({getDayOfWeek:"weather/getDayOfWeek"}),searchCitySubmit(){0!==this.searchCity.length&&this.getDayOfWeek(this.searchCity)}},mounted(){0===this.items.length&&this.getDayOfWeek()}};const Oe=(0,v.A)(Se,[["render",A]]);var Pe=Oe;const Ve={class:"favorites"};function We(e,t,a,i,r,o){const d=(0,s.g2)("favorites-all-cards");return(0,s.uX)(),(0,s.CE)("div",Ve,[(0,s.bF)(d)])}const Ee={key:0,class:"favorites_allCards"},De={key:1,class:"favorites_allCardsNotElements"},Xe=(0,s.Lk)("p",{class:"favorites_allCardsNotElements_text"}," Nothing has been added to favorites 😔 ",-1),Ie=[Xe];function xe(e,t,a,i,r,o){const d=(0,s.g2)("favorites-card"),n=(0,s.g2)("favorites-modalWindow");return e.favoritesCards.length>0?((0,s.uX)(),(0,s.CE)("div",Ee,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.favoritesCards,(e=>((0,s.uX)(),(0,s.Wv)(d,{key:e.id,id:e.id,description:e.description,temp:e.temp,humidity:e.humidity,wind:e.wind,name:e.name},null,8,["id","description","temp","humidity","wind","name"])))),128)),(0,s.bF)(n)])):((0,s.uX)(),(0,s.CE)("div",De,Ie))}const Te={class:"card"},He=(0,s.Lk)("span",{class:"card_deleteCard_cross"}," ✕ ",-1),Ne=[He],$e=(0,s.Lk)("div",{class:"card_icons"},[(0,s.Lk)("img",{class:"card_icons_img",src:z,alt:"icon-notFound"})],-1),Be={class:"card_details"};function je(e,t,a,i,r,o){return(0,s.uX)(),(0,s.CE)("div",Te,[(0,s.Lk)("button",{class:"card_deleteCard",type:"button",onClick:t[0]||(t[0]=(...e)=>o.openModalWindow&&o.openModalWindow(...e))},Ne),$e,(0,s.Lk)("div",Be,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(r.allDetails,(e=>((0,s.uX)(),(0,s.CE)("p",{key:e,class:"card_text"},(0,L.v_)(e),1)))),128))])])}var Ye={name:"favorites-card",props:{id:Number,description:String,temp:Number,humidity:Number,wind:Number,name:String},data(){return{allDetails:[`Description: ${this.description}`,`Temperature: ${this.temp}°C`,`Humidity: ${this.humidity}%`,`Wind: ${this.wind} m/s`,`Location: ${this.name}`]}},computed:{...(0,F.aH)({isModalVisible:e=>e.weather.isModalVisible,idCard:e=>e.weather.idCard})},methods:{...(0,F.PY)({setModalVisible:"weather/setModalVisible",setIdCard:"weather/setIdCard"}),openModalWindow(){this.setIdCard(this.id),this.setModalVisible(!0)}}};const Re=(0,v.A)(Ye,[["render",je]]);var Qe=Re;const Ke={key:0,class:"modalOverlay"},Je={class:"modalOverlay_window"},Ue={class:"modalOverlay_window_content"},qe=(0,s.Lk)("p",{class:"modalOverlay_window_content_text"}," Do you really want to delete this card ? ",-1),ze={class:"modalOverlay_window_buttons"};function Ge(e,t,a,i,r,o){return e.isModalVisible?((0,s.uX)(),(0,s.CE)("div",Ke,[(0,s.Lk)("div",Je,[(0,s.Lk)("div",Ue,[qe,(0,s.Lk)("div",ze,[(0,s.Lk)("button",{class:"modalOverlay_window_buttons_button confirm_button",onClick:t[0]||(t[0]=(...e)=>o.confirm&&o.confirm(...e))}," Confirm "),(0,s.Lk)("button",{class:"modalOverlay_window_buttons_button cancel_button",onClick:t[1]||(t[1]=(...e)=>o.cancel&&o.cancel(...e))}," Cancel ")])])])])):(0,s.Q3)("",!0)}var Ze={name:"ModalWindow",computed:{...(0,F.aH)({isModalVisible:e=>e.weather.isModalVisible,idCard:e=>e.weather.idCard})},methods:{...(0,F.PY)({setDeleteCard:"weather/setDeleteCard",setModalVisible:"weather/setModalVisible"}),cancel(){this.setModalVisible(!1)},confirm(){this.setDeleteCard(this.idCard),this.setModalVisible(!1)}}};const et=(0,v.A)(Ze,[["render",Ge]]);var tt=et,at={name:"favorites-allCarts",components:{FavoritesCard:Qe,FavoritesModalWindow:tt},computed:{...(0,F.aH)({favoritesCards:e=>e.weather.favoritesCards})},mounted(){this.$store.dispatch("weather/loadFavoritesCards")}};const it=(0,v.A)(at,[["render",xe]]);var st=it,rt={name:"favorites-block",components:{FavoritesAllCards:st}};const ot=(0,v.A)(rt,[["render",We]]);var dt=ot,nt={name:"main-static",components:{PrimaryBlock:Pe,FavoritesBlock:dt},computed:{isHomeRoute(){return"/"===this.$route.path},isFavoritesRoute(){return"/favorites"===this.$route.path}}};const lt=(0,v.A)(nt,[["render",g]]);var ct=lt;const ut={class:"footer"};function mt(e,t,a,i,r,o){return(0,s.uX)(),(0,s.CE)("footer",ut)}var ht={name:"footer-static"};const vt=(0,v.A)(ht,[["render",mt]]);var pt=vt,yt={name:"home-page",components:{HeaderStatic:y,MainStatic:ct,FooterStatic:pt}};const ft=(0,v.A)(yt,[["render",d]]);var Ct=ft,bt={name:"App",components:{HomePage:Ct}};const gt=(0,v.A)(bt,[["render",o]]);var kt=gt,wt=a(1387);const _t=[{path:"/",component:Ct},{path:"/favorites",component:dt}],At=(0,wt.aE)({routes:_t,history:(0,wt.LA)("/Weather-vue/")});var Ft=At,Lt=a(8355);const Mt={state:()=>({items:[],itemsProperties:{},isLoading:!1,searchCity:"",favoritesCards:[],isModalAlertVisible:!0,isModalVisible:!1,idCard:0}),mutations:{setItems(e,t){e.items=t},setItemsProperties(e,t){e.itemsProperties=t},setLoading(e,t){e.isLoading=t},setSearchCity(e,t){e.searchCity=t},setFavoritesCards(e,t){e.favoritesCards.push(t),localStorage.setItem("favoritesCards",JSON.stringify(e.favoritesCards))},setModalAlertVisible(e,t){e.isModalAlertVisible=t},setModalVisible(e,t){e.isModalVisible=t},setIdCard(e,t){e.idCard=t},setDeleteCard(e,t){e.favoritesCards=e.favoritesCards.filter((e=>e.id!==t)),localStorage.setItem("favoritesCards",JSON.stringify(e.favoritesCards))},storageFavoritesCards(e,t){e.favoritesCards=t}},actions:{async getDayOfWeek({commit:e},t="New York"){try{e("setLoading",!0);const a=`https://api.openweathermap.org/data/2.5/forecast?q=${t}&appid=6552610f79c2b672097111aa772032b1`,i=await Lt.A.get(a);e("setItems",i.data)}catch(a){console.log(a)}finally{e("setLoading",!1)}},loadFavoritesCards({commit:e}){const t=localStorage.getItem("favoritesCards");t&&e("storageFavoritesCards",JSON.parse(t))}},namespaced:!0};var St=(0,F.y$)({modules:{weather:Mt}});const Ot=(0,i.Ef)(kt);Ot.use(Ft).use(St).mount("#app")}},t={};function a(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,i,s,r){if(!i){var o=1/0;for(c=0;c<e.length;c++){i=e[c][0],s=e[c][1],r=e[c][2];for(var d=!0,n=0;n<i.length;n++)(!1&r||o>=r)&&Object.keys(a.O).every((function(e){return a.O[e](i[n])}))?i.splice(n--,1):(d=!1,r<o&&(o=r));if(d){e.splice(c--,1);var l=s();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[i,s,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/Weather-vue/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,r,o=i[0],d=i[1],n=i[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(s in d)a.o(d,s)&&(a.m[s]=d[s]);if(n)var c=n(a)}for(t&&t(i);l<o.length;l++)r=o[l],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(c)},i=self["webpackChunkweather_vue"]=self["webpackChunkweather_vue"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[504],(function(){return a(5663)}));i=a.O(i)})();
//# sourceMappingURL=app.b48b9405.js.map