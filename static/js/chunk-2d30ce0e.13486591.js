(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d30ce0e"],{2532:function(t,e,s){"use strict";var n=s("23e7"),i=s("5a34"),a=s("1d80"),r=s("ab13");n({target:"String",proto:!0,forced:!r("includes")},{includes:function(t){return!!~String(a(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},4844:function(t,e,s){var n=s("ded3").default,i=s("4082").default,a=["class","staticClass","style","staticStyle","attrs"];s("99af"),t.exports={functional:!0,render:function(t,e){var s=e._c,r=(e._v,e.data),o=e.children,u=void 0===o?[]:o,c=r.class,l=r.staticClass,d=r.style,p=r.staticStyle,h=r.attrs,w=void 0===h?{}:h,f=i(r,a);return s("svg",n({class:[c,l],style:[d,p],attrs:Object.assign({viewBox:"0 0 151 151",fill:"none",xmlns:"http://www.w3.org/2000/svg"},w)},f),u.concat([s("path",{attrs:{d:"M75.366 119.908c33.112 0 59.954-26.842 59.954-59.954S108.478 0 75.366 0C42.255 0 15.412 26.842 15.412 59.954s26.843 59.954 59.954 59.954z",fill:"#FFD15C"}}),s("path",{attrs:{d:"M26.797 95.029l-20.63 35.758 24.078-1.278L41.182 151l19.083-33.083c-13.673-3.538-25.414-11.771-33.47-22.888zM124.055 94.85c-7.996 11.147-19.737 19.411-33.38 23.007L109.816 151l10.938-21.491 24.077 1.278-20.777-35.936z",fill:"#1A2740"}}),s("path",{attrs:{d:"M75.366 103.411c24.001 0 43.457-19.456 43.457-43.457 0-24-19.456-43.457-43.457-43.457-24 0-43.457 19.456-43.457 43.457 0 24 19.457 43.457 43.457 43.457z",fill:"#F8B64C"}}),s("path",{attrs:{d:"M105.15 55.258c1.338-1.308.594-3.597-1.248-3.865l-17.151-2.496a2.236 2.236 0 01-1.695-1.249l-7.669-15.546c-.832-1.694-3.24-1.694-4.072 0l-7.639 15.546a2.36 2.36 0 01-1.694 1.249L46.83 51.393c-1.843.268-2.586 2.557-1.249 3.865l12.395 12.097a2.29 2.29 0 01.654 1.992l-2.913 17.062c-.327 1.843 1.635 3.27 3.3 2.378l15.338-8.056a2.215 2.215 0 012.11 0l15.338 8.056c1.664.862 3.596-.535 3.3-2.378L92.16 69.347a2.236 2.236 0 01.654-1.992l12.336-12.097z",fill:"#fff"}})]))}}},"55c2":function(t,e,s){var n=s("ded3").default,i=s("4082").default,a=["class","staticClass","style","staticStyle","attrs"];s("99af"),t.exports={functional:!0,render:function(t,e){var s=e._c,r=(e._v,e.data),o=e.children,u=void 0===o?[]:o,c=r.class,l=r.staticClass,d=r.style,p=r.staticStyle,h=r.attrs,w=void 0===h?{}:h,f=i(r,a);return s("svg",n({class:[c,l],style:[d,p],attrs:Object.assign({viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},w)},f),u.concat([s("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm8.796-17.895a1 1 0 00-1.592-1.21l-8.717 11.47-4.7-5.983a1 1 0 10-1.573 1.236l5.5 7 .8 1.017.782-1.03 9.5-12.5z",fill:"#26BCC2"}})]))}}},"5a34":function(t,e,s){var n=s("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},"67fd":function(t,e,s){"use strict";s("8b64")},8384:function(t,e,s){"use strict";s("d79c")},"8b64":function(t,e,s){},a36c:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("div",{staticClass:"test-container"},["notReady"===t.getAnswersResult.status?s("div",{staticClass:"test"},["loading"===t.getQuestionsList.status?s("Spinner",{staticClass:"loading",style:{margin:"auto",width:"50px"},attrs:{size:25,"line-bg-color":"#b1b2b7","line-fg-color":"#26bcc2"}}):"error"===t.getQuestionsList.status?s("span",{style:{margin:"auto",color:"#545969"}},[t._v("Тест не найден")]):"success"===t.getQuestionsList.status?[s("div",{staticClass:"test-block"},[s("div",{staticClass:"test__progress"},[s("router-link",{staticClass:"progress-close",attrs:{to:"/tests"}},[s("Close")],1),s("progress",{staticClass:"progress-bar",attrs:{max:t.getQuestionsList.data.questions.length},domProps:{value:t.openedQuestionInd+1}})],1),s("h2",{staticClass:"test__name"},[t._v(" "+t._s(t.getQuestionsList.data.testInfo.title)+" ")])]),s("QuestionBlock",{attrs:{"question-number":t.openedQuestionInd+1,"question-info":t.getQuestionsList.data.questions[t.openedQuestionInd],"select-option":t.selectOption,"choosed-answer":t.userAnswers[t.openedQuestionInd]}}),s("div",{staticClass:"test__nav-btns-container"},[0!==t.openedQuestionInd?s("button",{staticClass:"nav-btn prev active",on:{click:function(e){return t.prevQuestion()}}},[t._v(" Назад ")]):t._e(),t.openedQuestionInd<t.getQuestionsList.data.questions.length-1?s("button",{staticClass:"nav-btn active",attrs:{disabled:!t.userAnswers[t.openedQuestionInd]||!t.userAnswers[t.openedQuestionInd].answer},on:{click:function(e){return t.nextQuestion()}}},[t._v(" Дальше ")]):s("button",{staticClass:"nav-btn active",attrs:{disabled:!t.isCompleted},on:{click:function(e){return t.endTest()}}},[t._v(" Завершить тест ")])])]:t._e()],2):s("div",{staticClass:"test-passed"},["loading"===t.getAnswersResult.status?s("Spinner",{staticClass:"loading",style:{margin:"auto",width:"50px"},attrs:{size:25,"line-bg-color":"#b1b2b7","line-fg-color":"#26bcc2"}}):t._e(),"success"===t.getAnswersResult.status?["done"===t.getAnswersResult.data.status?s("Medal",{staticClass:"test-passed__medal"}):t._e(),s("h2",{staticClass:"test-passed__headline"},[t._v(" "+t._s("done"===t.getAnswersResult.data.status?"Тест пройден":"Тест провален")+" ")]),s("div",{staticClass:"test-passed__statistic"},[s("div",{staticClass:"statistic__rights-answers"},[s("Complete",{staticClass:"rights-answers__icon"}),t._v(" Правильных "+t._s(t.getAnswersResult.data.right_answers)+" из "+t._s(t.getAnswersResult.data.total_questions)+" ")],1)]),"done"===t.getAnswersResult.data.status?s("div",{staticClass:"test-passed__reward"},[s("div",{staticClass:"reward__coins"},[s("CoinSvg",{staticClass:"coins__icon"}),t._v(t._s(t.getAnswersResult.data.money)+" ")],1),s("div",{staticClass:"reward__lightning"},[s("LightningSvg",{staticClass:"lightning__icon"}),t._v(t._s(t.getAnswersResult.data.energy)+" ")],1)]):t._e(),s("router-link",{staticClass:"test-passed__back",attrs:{to:"/tests"}},[t._v("К списку тестов")])]:t._e()],2)])])},i=[],a=s("1da1"),r=s("5530"),o=(s("96cf"),s("4de4"),s("159b"),s("caad"),s("2532"),s("ff22")),u=s.n(o),c=s("4844"),l=s.n(c),d=s("4ed0"),p=s.n(d),h=s("b0cb"),w=s.n(h),f=s("55c2"),v=s.n(f),_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"question"},[s("h3",{staticClass:"question__number"},[t._v("Вопрос "+t._s(t.questionNumber))]),s("p",{staticClass:"question__description"},[t._v(" "+t._s(t.questionInfo.question.title)+" ")]),"one_choice"===t.questionInfo.question.answerType||"multi_choice"===t.questionInfo.question.answerType?s("div",{staticClass:"question__answer-options"},t._l(t.questionInfo.answerOptions,(function(e){return s("button",{key:e.id,staticClass:"answer-option",class:{active:!!t.choosedAnswer&&(null!==t.choosedAnswer.answer&&"multi_choice"===t.questionInfo.question.answerType?t.choosedAnswer.answer.includes(e.id):t.choosedAnswer.answer===e.id)},on:{click:function(s){return t.chooseOption(e.id)}}},[t._v(" "+t._s(e.text)+" ")])})),0):s("div",{staticClass:"question__input"},["enter_number"===t.questionInfo.question.answerType?s("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],staticClass:"input",class:{active:""!==t.number},attrs:{type:"number",placeholder:"Введите число"},domProps:{value:t.number},on:{input:function(e){e.target.composing||(t.number=e.target.value)}}}):"enter_text"===t.questionInfo.question.answerType?s("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"input",class:{active:""!==t.text},attrs:{type:"text",placeholder:"Введите текст"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}):t._e()])])},g=[],b=(s("a9e3"),{name:"QuestionBlock",props:{questionInfo:{type:Object,default:function(){}},questionNumber:{type:Number,default:0},selectOption:{type:Function,default:function(){}},choosedAnswer:{type:[Object,null],default:null}},data:function(){return{number:this.choosedAnswer?this.choosedAnswer.answer:"",text:this.choosedAnswer?this.choosedAnswer.answer:""}},watch:{text:function(t){this.selectOption(t)},number:function(t){this.selectOption(t)}},methods:{chooseOption:function(t){this.selectOption(t)}}}),m=b,C=(s("8384"),s("2877")),A=Object(C["a"])(m,_,g,!1,null,"52a1b6e9",null),Q=A.exports,y=s("e172"),I=s("255e"),x=s("2f62"),q=s("5b7e"),O=s.n(q),k={components:{Close:u.a,Medal:l.a,LightningSvg:p.a,CoinSvg:w.a,Complete:v.a,QuestionBlock:Q,Spinner:O.a},props:{id:{default:"0",type:String}},data:function(){return{testStatus:!0,openedQuestionInd:0,selectedValue:null,currentQuestionNumber:0,rightAnswers:0,userAnswers:[],reward:{},isCompleted:!1}},computed:Object(r["a"])(Object(r["a"])({},Object(x["c"])("tests",["getTests","getQuestionsList","getAnswersResult"])),{},{test:function(){var t=this;return this.getTests.filter((function(e){return e.id===parseInt(t.id,10)}))[0]}}),watch:{userAnswers:function(t){console.log(t)}},mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.QUESTIONS_REQUEST(t.id);case 2:null!==t.getQuestionsList.data&&t.getQuestionsList.data.questions.forEach((function(e){t.userAnswers.push({question:e.question.id,answerType:e.question.answerType,answer:null})}));case 3:case"end":return e.stop()}}),e)})))()},methods:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(x["b"])("tests",[y["a"],y["d"]])),Object(x["b"])("profile",[I["d"]])),{},{checkIsCompleted:function(){return 0===this.userAnswers.filter((function(t){return null===t.answer})).length},selectOption:function(t){switch(this.userAnswers[this.openedQuestionInd].answerType){case"one_choice":this.userAnswers[this.openedQuestionInd].answer===t?this.userAnswers[this.openedQuestionInd].answer=null:this.userAnswers[this.openedQuestionInd].answer=t;break;case"multi_choice":null===this.userAnswers[this.openedQuestionInd].answer?this.userAnswers[this.openedQuestionInd].answer=[t]:1===this.userAnswers[this.openedQuestionInd].answer.length&&this.userAnswers[this.openedQuestionInd].answer[0]===t?this.userAnswers[this.openedQuestionInd].answer=null:this.userAnswers[this.openedQuestionInd].answer.includes(t)?this.userAnswers[this.openedQuestionInd].answer=this.userAnswers[this.openedQuestionInd].answer.filter((function(e){return e!==t})):this.userAnswers[this.openedQuestionInd].answer.push(t);break;case"enter_text":case"enter_number":this.userAnswers[this.openedQuestionInd].answer=""===t?null:t;break;default:break}this.isCompleted=this.checkIsCompleted()},nextQuestion:function(){this.openedQuestionInd+=1},prevQuestion:function(){this.openedQuestionInd-=1},endTest:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.SEND_ANSWERS_REQUEST({answers:this.userAnswers,testId:this.id});case 2:return t.next=4,this.PROFILE_UPDATE();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()})},S=k,R=(s("67fd"),Object(C["a"])(S,n,i,!1,null,"15c0ae8c",null));e["default"]=R.exports},ab13:function(t,e,s){var n=s("b622"),i=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(s){try{return e[i]=!1,"/./"[t](e)}catch(n){}}return!1}},caad:function(t,e,s){"use strict";var n=s("23e7"),i=s("4d64").includes,a=s("44d2");n({target:"Array",proto:!0},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},d79c:function(t,e,s){},ff22:function(t,e,s){var n=s("ded3").default,i=s("4082").default,a=["class","staticClass","style","staticStyle","attrs"];s("99af"),t.exports={functional:!0,render:function(t,e){var s=e._c,r=(e._v,e.data),o=e.children,u=void 0===o?[]:o,c=r.class,l=r.staticClass,d=r.style,p=r.staticStyle,h=r.attrs,w=void 0===h?{}:h,f=i(r,a);return s("svg",n({class:[c,l],style:[d,p],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22.27 20",fill:"none"},w)},f),u.concat([s("path",{attrs:{stroke:"#545969","stroke-width":"1.996","stroke-linecap":"round",d:"M21.177 1.093L1.031 18.727M1.107 1.044l20.146 17.634"}})]))}}}}]);
//# sourceMappingURL=chunk-2d30ce0e.13486591.js.map