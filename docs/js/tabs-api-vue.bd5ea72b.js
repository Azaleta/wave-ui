(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["tabs-api-vue"],{"3a5c":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"w-divider my12"}),o("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),o("alert",{staticClass:"mb6",attrs:{info:""}},[t._v("The props will soon be more detailed.")]),o("api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),o("api",{attrs:{items:t.slots,title:"Slots"}}),o("api",{attrs:{items:t.events,title:"Events"}})],1)},s=[],r=(o("13d5"),o("109e")),l={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>',color:'Applies a color to the each tab title\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a color to the each tab title\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',items:"",titleClass:"Applies a custom CSS class to the tab title.",activeClass:"Applies a custom CSS class to the active tab title.",noSlider:"When set to true, removes the slider underneath the active tab title.",sliderColor:'Provide a custom color for the tabs slider (<code>primary</code> by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',contentClass:"Applies a custom CSS class to the tab content.",transition:'Applies a particular transition to the tab contents when switching tab.<br>Check all the transitions that apply to this component in the <a href="#content-transitions">Content transitions</a> example.',fillBar:"When set to true, the tabs titles will occupy the full available width.",center:"",right:"",card:"Applies the card style on all the tabs titles."},i={"item-title":{description:"Provide a custom title for every tab. Applies to all the tabs, but can be overridden by the <code>item-title.x</code> slot."},"item-title.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom title for a single tab: the tab at the index <em class="code">x</em>.'},"item-content":{description:"Provide a custom content for every tab. Applies to all the tabs, but can be overridden by the <code>item-content.x</code> slot."},"item-content.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single tab: the tab at the index <em class="code">x</em>.'}},n={input:"Emitted each time the current tab changes. It updates the v-model value in Vue 2.x only.<br>An array of booleans is passed as a parameter (representing the active state of every tab).","update:modelValue":"Emitted each time the current tab changes. It updates the v-model value in Vue 3 only.<br>An array of booleans is passed as a parameter (representing the active state of every tab).",focus:"Emitted on each tab title focus. The focus DOM event is returned as a parameter."},c={data:function(){return{propsDescs:l,slots:i}},computed:{props:function(){return r["a"].props},events:function(){return r["a"].emits.reduce((function(t,e){return(t[e]={description:n[e]||""})&&t}),{})}}},p=c,d=o("2877"),h=Object(d["a"])(p,a,s,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=tabs-api-vue.bd5ea72b.js.map