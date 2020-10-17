(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["overlay-api-vue"],{d5ed:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"w-divider my12"}),o("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),o("alert",{staticClass:"mb6",attrs:{info:""}},[e._v("The props will soon be more detailed.")]),o("api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),o("api",{attrs:{items:e.slots,title:"Slots"}}),o("api",{attrs:{items:e.events,title:"Events"}})],1)},i=[],r=(o("13d5"),o("bc92")),a={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>This prop controls the visibility of the overlay. Any truthy value will show the overlay whereas any falsy value will hide it.',opacity:"Sets a custom opacity on the overlay.",bgColor:'Applies a color to the overlay\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',zIndex:"Applies a z-index (positive or negative integer) to the overlay.",persistent:"When set to true, clicking outside of the overlay or pressing the escape key will not close the overlay.<br>A bounce animation will give the user a feedback that the overlay content needs attention and cannot be closed.",persistentNoAnimation:"When this and the <code>persistent</code> props are set to true, clicking outside of the overlay or pressing the escape key will not trigger the default bounce animation (no feedback is given to the user)."},l={default:{description:"The overlay content, if any."}},n={input:"Emitted on overlay hide. It updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted on overlay hide. It updates the v-model value in Vue 3 only.",close:"Emitted on overlay hide.",click:"Emitted on every overlay click. Whether the <code>persistent</code> option is set to true or false."},c={data:function(){return{propsDescs:a,slots:l}},computed:{props:function(){return r["a"].props},events:function(){return r["a"].emits.reduce((function(e,t){return(e[t]={description:n[t]||""})&&e}),{})}}},d=c,p=o("2877"),u=Object(p["a"])(d,s,i,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=overlay-api-vue.8dff7895.js.map