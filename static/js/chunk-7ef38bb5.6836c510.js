(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ef38bb5"],{"274b":function(s,t,a){"use strict";a("8e57")},"34cd":function(s,t,a){},"43fe":function(s,t,a){"use strict";var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"task"},[a("h4",{staticClass:"task__name"},[s._v(s._s(s.data.title))]),a("ProgressBar",{staticClass:"progressbar",attrs:{percent:s.data.progress}}),a("div",{staticClass:"task__info"},[a("p",{staticClass:"task__type"},[s._v("тип: "+s._s(s.getTaskType(s.data.taskType)))]),a("p",{staticClass:"task__deadline"},[null!==s.data.deadline?a("span",[s.showMore?a("span",[s._v("Дэдлайн: ")]):a("span",[s._v("До: ")]),s._v(" "+s._s(s.data.deadline)+" ")]):s._e()]),a("div",{staticClass:"task__awards"},[a("span",{directives:[{name:"show",rawName:"v-show",value:s.showMore,expression:"showMore"}]},[s._v("Награда:")]),a("div",{staticClass:"task__awards-content"},[a("div",{staticClass:"task__awards-content-item"},[a("CoinSvg",{staticClass:"task__awards-icon"}),s._v(" "+s._s(null===s.data.money?0:s.data.money)+" ")],1),a("div",{staticClass:"task__awards-content-item"},[a("LightningSvg",{staticClass:"task__awards-icon"}),s._v(" "+s._s(null===s.data.energy?0:s.data.energy)+" ")],1)])]),a("p",{directives:[{name:"show",rawName:"v-show",value:s.showMore,expression:"showMore"}],staticClass:"task__difficulty"},[s._v(" Сложность: "+s._s(s.data.difficulty)+" ")]),a("ol",{directives:[{name:"show",rawName:"v-show",value:s.showMore,expression:"showMore"}],staticClass:"task__subtasks"},[a("h6",{staticClass:"task__subtasks-title"},[s._v("Подзадачи")]),s._l(s.data.subTasks,(function(t,e){return a("li",{key:e,style:["done"===t.status?{"text-decoration":"line-through"}:{"text-decoration":"none"}]},[s._v(" "+s._s(e+1)+". "+s._s(t.title)+" ")])}))],2),a("div",{directives:[{name:"show",rawName:"v-show",value:s.showMore,expression:"showMore"}],staticClass:"task__desc"},[a("h6",{staticClass:"task__desc-title"},[s._v("Описание")]),a("p",{staticClass:"task__desc-text"},[s._v(s._s(s.data.description))])])]),a("input",{directives:[{name:"model",rawName:"v-model",value:s.showMore,expression:"showMore"}],staticClass:"task__toggle-inp",attrs:{id:"task__toggle"+(""===s.customId?s.data.id:s.customId),type:"checkbox"},domProps:{checked:Array.isArray(s.showMore)?s._i(s.showMore,null)>-1:s.showMore},on:{change:function(t){var a=s.showMore,e=t.target,i=!!e.checked;if(Array.isArray(a)){var n=null,r=s._i(a,n);e.checked?r<0&&(s.showMore=a.concat([n])):r>-1&&(s.showMore=a.slice(0,r).concat(a.slice(r+1)))}else s.showMore=i}}}),a("label",{staticClass:"task__toggle",attrs:{for:"task__toggle"+(""===s.customId?s.data.id:s.customId)}},[a("div",{staticClass:"arrow"}),a("div",{staticClass:"dot"})])],1)},i=[],n=a("b0cb"),r=a.n(n),c=a("4ed0"),o=a.n(c),l=a("b6b4"),d={name:"Task",components:{ProgressBar:l["a"],CoinSvg:r.a,LightningSvg:o.a},props:{data:{type:Object,default:function(){}},customId:{type:String,default:""}},data:function(){return{showMore:!1}},methods:{getTaskType:function(s){return"quest"===s?"Квест":"daily"===s?"Ежедневное":void 0===s?"Еженедельное":""}}},u=d,_=(a("274b"),a("2877")),v=Object(_["a"])(u,e,i,!1,null,"342adca2",null);t["a"]=v.exports},"4e39":function(s,t,a){"use strict";a("34cd")},"8e57":function(s,t,a){},b6b4:function(s,t,a){"use strict";var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"progressbar"},[a("span",{staticClass:"progressbar__value"},[s._v(s._s(s.percent)+"%")]),a("div",{staticClass:"progressbar__bar",style:{width:s.percent+"%"}})])},i=[],n=(a("a9e3"),{name:"ProgressBar",props:{percent:{type:Number,default:0}}}),r=n,c=(a("bbf6"),a("2877")),o=Object(c["a"])(r,e,i,!1,null,"7561fcca",null);t["a"]=o.exports},bbf6:function(s,t,a){"use strict";a("bd35")},bd35:function(s,t,a){},ffc2:function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"main"},[a("div",{staticClass:"mainQuestInfo-wrap"},["success"===s.mainQuest.status&&null!==s.mainQuest.data&&0!==s.mainQuest.data.length?[a("div",{staticClass:"text__gray__big"},[s._v("Основной квест:")]),a("h1",{staticClass:"test-headline"},[s._v(s._s(s.mainQuest.data[0].title))]),a("ProgressBar",{staticClass:"progress-bar",attrs:{percent:void 0===s.mainQuest.data[0].progress?0:s.mainQuest.data[0].progress}}),a("div",{staticClass:"text_deadline"},[a("div",{staticClass:"text__gray"},[s._v("Срок:")]),a("div",{staticClass:"date"},[s._v(" до 6.06.2021 "+s._s(s.mainQuest.data[0].deadline)+" ")])]),a("div",{staticClass:"tasks"},[a("h2",{staticClass:"tasks__title"},[s._v("Список задач")]),a("div",{staticClass:"tasks__list"},s._l(s.mainQuest.data[0].subTasks,(function(s){return a("Task",{key:s.id,staticClass:"tasks__item",attrs:{data:s}})})),1)])]:s._e(),"loading"===s.mainQuest.status||"success"===s.mainQuest.status&&(null===s.mainQuest.data||0===s.mainQuest.data.length)?a("div",{style:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},["loading"===s.mainQuest.status?a("Spinner",{attrs:{size:25,"line-bg-color":"#b1b2b7","line-fg-color":"#26bcc2"}}):s._e(),"success"!==s.mainQuest.status||null!==s.mainQuest.data&&0!==s.mainQuest.data.length?s._e():a("span",{staticStyle:{color:"#1a2740"}},[s._v("Нет активного основного квеста")])],1):s._e()],2),s._m(0)])])},i=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"tree_wrap"},[a("span",[s._v("Здесь будет граф основного квеста")])])}],n=a("1da1"),r=a("5530"),c=(a("96cf"),a("43fe")),o=a("b6b4"),l=a("2f62"),d=a("9ab8"),u=a("5b7e"),_=a.n(u),v={name:"MainQuest",components:{Task:c["a"],ProgressBar:o["a"],Spinner:_.a},computed:Object(r["a"])({},Object(l["c"])("tasks",["mainQuest"])),mounted:function(){var s=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("success"===s.mainQuest.status){t.next=3;break}return t.next=3,s.MAIN_QUEST_REQUEST();case 3:case"end":return t.stop()}}),t)})))()},methods:Object(r["a"])({},Object(l["b"])("tasks",[d["e"]]))},p=v,m=(a("4e39"),a("2877")),h=Object(m["a"])(p,e,i,!1,null,"27ce16c0",null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-7ef38bb5.6836c510.js.map