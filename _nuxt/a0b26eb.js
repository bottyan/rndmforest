(window.webpackJsonp=window.webpackJsonp||[]).push([[8,5],{240:function(t,e,o){var content=o(245);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(70).default)("180b5d56",content,!0,{sourceMap:!1})},244:function(t,e,o){"use strict";o(240)},245:function(t,e,o){var n=o(69)(!1);n.push([t.i,".modal[data-v-785181ff]{background-color:#fff;max-height:90vh;padding:2rem;border-radius:2rem;border:2px solid #000;box-shadow:1rem 1rem 4px 0 rgba(0,0,0,.72)}.modal[data-v-785181ff],.modal form[data-v-785181ff]{position:relative}.modal form .field[data-v-785181ff]{margin-top:.5rem;width:100%}.modal form .field .label[data-v-785181ff]{width:100%;margin-bottom:.2rem}.modal form .field input[data-v-785181ff]{width:calc(100% - 8px);line-height:1.5em}.modal .submit[data-v-785181ff]{margin-top:2rem;margin-bottom:.5rem;width:100%;position:relative;padding:.5rem;border:1px solid #000;text-align:center;cursor:pointer;background-color:rgba(0,0,0,.7);color:#fff}.modal .submit[data-v-785181ff]:hover{background-color:transparent;color:#000}.close[data-v-785181ff]{position:absolute;top:1rem;right:1rem;cursor:pointer}.close-img[data-v-785181ff]{width:25px}h6[data-v-785181ff]{font-weight:500;font-size:28px}h6[data-v-785181ff],p[data-v-785181ff]{margin:20px 0}p[data-v-785181ff]{font-size:16px}",""]),t.exports=n},250:function(t,e,o){var content=o(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(70).default)("ebe788ca",content,!0,{sourceMap:!1})},256:function(t,e,o){"use strict";o.r(e);var n,r=o(8),l=(o(39),{props:["formId"],data:function(){return{isSubmitted:!1,form:{firstname:"",lastname:"",email:"",url:""}}},methods:{handleSubmit:(n=Object(r.a)(regeneratorRuntime.mark((function t(){var e,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e="default_form",this.formId&&""!==this.formId&&(e=this.formId),o=this.handleSubmitEnd,this.$dialogityFormsSubmit("d09fbd61d20c42de9023c7a8f2b0154e",e,this.form,(function(){o()}));case 5:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),handleSubmitEnd:function(){this.isSubmitted=!0},handleClose:function(){this.isSubmitted=!1,this.$emit("close-modal")}}}),d=l,c=(o(244),o(30)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal-overlay"},[o("div",{staticClass:"modal"},[t.isSubmitted?t._e():o("div",[o("h6",[t._v("Register for beta")]),t._v(" "),o("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[o("p",[t._v("\n                  Please fill all fields below\n              ")]),t._v(" "),o("div",{staticClass:"field"},[o("div",{staticClass:"label"},[t._v("First name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.firstname,expression:"form.firstname"}],attrs:{type:"text",name:"firstname"},domProps:{value:t.form.firstname},on:{input:function(e){e.target.composing||t.$set(t.form,"firstname",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"field"},[o("div",{staticClass:"label"},[t._v("Last name")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.lastname,expression:"form.lastname"}],attrs:{type:"text",name:"lastname"},domProps:{value:t.form.lastname},on:{input:function(e){e.target.composing||t.$set(t.form,"lastname",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"field"},[o("div",{staticClass:"label"},[t._v("Email")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"field"},[o("div",{staticClass:"label"},[t._v("Company URL")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.url,expression:"form.url"}],attrs:{type:"text",name:"url"},domProps:{value:t.form.url},on:{input:function(e){e.target.composing||t.$set(t.form,"url",e.target.value)}}})]),t._v(" "),o("input",{staticClass:"submit",attrs:{type:"submit"}})])]),t._v(" "),t.isSubmitted?o("div",{staticClass:"frame"},[o("div",{staticClass:"content"},[o("h6",[t._v("Thank you for contacting us. We will reach out to you in a couple of days.")]),t._v(" "),o("div",{staticClass:"submit",on:{click:function(e){return t.handleClose()}}},[t._v("Close")])])]):t._e()])])}),[],!1,null,"785181ff",null);e.default=component.exports},257:function(t,e,o){t.exports=o.p+"img/same.87d8088.png"},258:function(t,e,o){t.exports=o.p+"img/example2.cacfab8.png"},259:function(t,e,o){t.exports=o.p+"img/robot2.26c2339.png"},260:function(t,e,o){"use strict";o(250)},261:function(t,e,o){var n=o(69)(!1);n.push([t.i,'.min-width[data-v-0d4786a3]{min-width:min(50rem,80%)}.container[data-v-0d4786a3]{width:100%;background-attachment:fixed}.bg[data-v-0d4786a3]{z-index:1;height:115vh;width:100%;background:linear-gradient(75deg,rgba(0,160,176,.3),rgba(245,223,77,.3) 60%);position:fixed;top:0;left:0}.section[data-v-0d4786a3]{position:relative;width:100%;height:100vh;z-index:10}.bottom[data-v-0d4786a3]{position:absolute;width:100%;padding:1rem 0;left:0;bottom:0}.bottom .bottom-container[data-v-0d4786a3]{display:flex;align-items:center;justify-content:center}.bottom .bottom-container .next[data-v-0d4786a3]{flex:1 1 auto;margin-bottom:5rem}@media only screen and (max-width:768px){.bottom .bottom-container .next[data-v-0d4786a3]{margin-bottom:5rem}}.content-parent[data-v-0d4786a3]{display:flex;align-items:center;justify-content:center;height:100%}.content-parent .block[data-v-0d4786a3]{display:flex;flex-direction:row}@media only screen and (max-width:768px){.content-parent .block[data-v-0d4786a3]{flex-direction:column;align-items:center}}[dir=ltr] .content-parent .block .p[data-v-0d4786a3]{margin-left:0}[dir=ltr] .content-parent .block .p[data-v-0d4786a3],[dir=rtl] .content-parent .block .p[data-v-0d4786a3]{margin-right:0}[dir=rtl] .content-parent .block .p[data-v-0d4786a3]{margin-left:0}.content-parent .block .p[data-v-0d4786a3]{display:block;margin-top:1em;margin-bottom:1em}.content-parent .block .s[data-v-0d4786a3]{display:inline;font-size:1.3em;font-weight:600}.content-parent .block .block-subtitle[data-v-0d4786a3]{font-family:"hand3";font-size:min(2rem,min(4.5454545455vh,6.6666666667vw))}.content-parent .block .block-title[data-v-0d4786a3]{font-size:min(4rem,min(5.5555555556vh,7.6923076923vw));font-family:"Gotham-Black","Roboto",sans-serif;margin-bottom:1rem}.content-parent .block .read-more[data-v-0d4786a3]{display:flex;align-content:center}.content-parent .block .read-more .text[data-v-0d4786a3]{display:inline-block;font-family:"hand3";font-size:min(2rem,min(5.5555555556vh,6.6666666667vw));color:#000}.content-parent .block .read-more .pointer[data-v-0d4786a3]{display:inline-block;margin-left:.5rem;font-size:min(2rem,min(5.5555555556vh,6.6666666667vw))}.content-parent .block .l-image[data-v-0d4786a3]{position:relative;width:40%;display:flex;align-content:center;justify-content:center}@media only screen and (max-width:768px){.content-parent .block .l-image[data-v-0d4786a3]{width:60%;padding-bottom:2rem}}.content-parent .block .l-image img[data-v-0d4786a3]{max-width:100%;height:auto;margin:auto}.content-parent .block .r-text[data-v-0d4786a3]{width:60%;padding-left:10%}@media only screen and (max-width:768px){.content-parent .block .r-text[data-v-0d4786a3]{width:80%;padding-left:0}}.content-parent .header .title h1[data-v-0d4786a3]{margin-top:.3em;margin-bottom:.3em}.content-parent .header .below-title h2[data-v-0d4786a3]{margin-top:.3em;margin-bottom:.3em;font-size:1em}',""]),t.exports=n},294:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"section section1"},[o("div",{staticClass:"content-parent"},[o("div",{staticClass:"header max-width"},[o("div",{staticClass:"above-title"}),t._v(" "),o("div",{staticClass:"title font-XXL"},[o("h1",[o("div",[t._v("AI Sales Assisstant\n            ")])])]),t._v(" "),o("div",{staticClass:"below-title font-XL"},[o("h2",[t._v("a chatbot who learns to deal with your customers")])])])]),t._v(" "),o("div",{staticClass:"bottom"},[o("div",{staticClass:"bottom-container max-width"},[o("div",{staticClass:"flex-space"}),t._v(" "),o("div",{staticClass:"next font-hand-L",attrs:{id:"hide"}},[t._v("\n          learn more 👇\n        ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section section2"},[n("div",{staticClass:"content-parent"},[n("div",{staticClass:"block max-width"},[n("div",{staticClass:"l-image"},[n("img",{attrs:{src:o(257)}})]),t._v(" "),n("div",{staticClass:"r-text"},[n("div",{staticClass:"block-subtitle"},[t._v("Marketer's new challenge")]),t._v(" "),n("div",{staticClass:"block-title"},[t._v("Shrinking attention span")]),t._v(" "),n("div",{staticClass:"block-content"},[n("div",{staticClass:"p"},[t._v("It is hard retain that attention for the length of time it takes to have an impact and to be unique.")]),t._v(" "),n("div",{staticClass:"p"},[t._v("Dialogity helps to engage and differentiate.")]),t._v(" "),n("div",{staticClass:"read-more"},[n("div",{staticClass:"text"},[t._v("How?")]),n("div",{staticClass:"pointer"},[t._v("👇")])])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section section3"},[n("div",{staticClass:"content-parent"},[n("div",{staticClass:"block max-width"},[n("div",{staticClass:"l-image"},[n("img",{attrs:{src:o(258)}})]),t._v(" "),n("div",{staticClass:"r-text"},[n("div",{staticClass:"block-subtitle"},[t._v("Higher engagement through")]),t._v(" "),n("div",{staticClass:"block-title"},[t._v("Conversational experience")]),t._v(" "),n("div",{staticClass:"block-content"},[n("div",{staticClass:"p"},[t._v("AI automatically finds the best content for the customers from the companies knowledge base.")]),t._v(" "),n("div",{staticClass:"p"},[t._v("Improves by constantly optimizing the conversation by learning from live customer interactions.")]),t._v(" "),n("div",{staticClass:"read-more"},[n("div",{staticClass:"text"},[t._v("Why is it good?")]),n("div",{staticClass:"pointer"},[t._v("👇")])])])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section section4"},[n("div",{staticClass:"content-parent"},[n("div",{staticClass:"block max-width"},[n("div",{staticClass:"l-image"},[n("img",{attrs:{src:o(259)}})]),t._v(" "),n("div",{staticClass:"r-text"},[n("div",{staticClass:"block-subtitle"},[t._v("From a passive receiver")]),t._v(" "),n("div",{staticClass:"block-title"},[t._v("Customers turn into an active player")]),t._v(" "),n("div",{staticClass:"block-content"},[n("div",{staticClass:"p"},[t._v("Dialogity transforms a complex knowledge base to conversations automatically using AI / ML.")]),t._v(" "),n("div",{staticClass:"p"},[t._v("Companies benefit from customers’ better understanding of their complex market offerings, thus they differentiate themselves from competitors and increase the probability of customer acquisition.")]),t._v(" "),n("div",{staticClass:"read-more"},[n("div",{staticClass:"text"},[t._v("Subscribe for BETA")]),n("div",{staticClass:"pointer"},[t._v("👇")])])])])])])])}],r={layout:"dialogity",mounted:function(){this.animateOnScroll()},beforeDestroy:function(){this.$gsap.killTweensOf(".container"),this.$gsap.killTweensOf(".section")},methods:{animateOnScroll:function(){document.querySelector(".container");var header=document.querySelector("#menu-main"),t=(document.querySelector(".footer"),document.querySelector(".bg")),e=document.querySelector("#hide"),o=this.$gsap;this.$gsap.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:".section1",start:"top top",end:"bottom top",scrub:!0}}).fromTo(t,{},{duration:1,ease:"none",onUpdate:function(element){if(void 0!==this.ratio&&1!==this.ratio){var e=.3*(1-this.ratio);o.set(t,{background:"linear-gradient(75deg, rgba(0,160,176,"+e+") 0%, rgba(245, 223, 77,"+e+") 60%)"})}}}),this.$gsap.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:".section1",start:"top top",end:"bottom top",scrub:!0}}).fromTo(header,{background:"rgba(255, 255, 255, 0.0)"},{duration:1,background:"rgba(255, 255, 255, 1)",ease:"none"}).to(e,{duration:1,opacity:0,ease:"none"},"<"),this.$gsap.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:".section3",start:"top bottom",end:"bottom top",scrub:!0}}).to(t,{duration:1,background:"rgba(0,88,155,0.2)",ease:"none"}),this.$gsap.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:".section4",start:"top bottom",end:"top top",scrub:!0}}).to(t,{duration:1,background:"rgba(207,92,120,0.1)",ease:"none"}),this.$gsap.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:".footer",start:"top bottom",end:"bottom bottom",scrub:!0}}).to(t,{duration:1,background:"rgba(245,223,77,0.549918014012026)",ease:"none"})}}},l=(o(260),o(30)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container",attrs:{id:"scrollDist"}},[o("div",{staticClass:"bg"}),t._v(" "),o("div",{attrs:{id:"trigger"}}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),o("div",{staticClass:"section section5"},[o("div",{staticClass:"content-parent"},[o("div",{staticClass:"max-width min-width"},[o("SimpleForm",{attrs:{formId:"AI_sales_agent_registration"}})],1)])])])}),n,!1,null,"0d4786a3",null);e.default=component.exports;installComponents(component,{SimpleForm:o(256).default})}}]);