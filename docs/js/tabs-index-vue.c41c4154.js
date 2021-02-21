(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["tabs-index-vue","tabs-api-vue","tabs-examples-vue"],{"0b02":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("title-link",{attrs:{h2:""}},[t._v("Basic")]),n("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-tabs(:items="tabs")')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabs: [\n    { title: 'Tab 1', content: 'Tab 1 content.' },\n    { title: 'Tab 2', content: 'Tab 2 content.' },\n    { title: 'Tab 3 has a long title', content: 'Tab 3 content.' }\n  ]\n})\n")]},proxy:!0}])},[n("w-tabs",{attrs:{items:t.tabs1}})],1),n("title-link",{attrs:{h2:""}},[t._v("Align center and right")]),n("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-tabs(:items="tabs" center)\nw-tabs(:items="tabs" right)')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabs: [\n    { title: 'Tab 1', content: 'Tab 1 content.' },\n    { title: 'Tab 2', content: 'Tab 2 content.' },\n    { title: 'Tab 3', content: 'Tab 3 content.' }\n  ]\n})\n")]},proxy:!0}])},[n("w-tabs",{attrs:{items:t.tabs4.items,center:""}}),n("w-tabs",{staticClass:"mt4",attrs:{items:t.tabs4.items,right:""}})],1),n("title-link",{attrs:{h2:""}},[t._v("Fill bar & disabled items")]),n("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-switch.mb3(v-model="fillBar") Fill bar\nw-tabs(:items="tabs" :fill-bar="fillBar")')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabs: [\n    { title: 'Tab 1', content: 'Tab 1 content.' },\n    { title: 'Tab 2', content: 'Tab 2 content.' },\n    { title: 'Tab 3', content: 'Tab 3 content.' },\n    { title: 'Tab 4', content: 'Tab 4 content.' },\n    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }\n  ],\n  fillBar: true\n})\n")]},proxy:!0}])},[n("w-switch",{staticClass:"mb3",model:{value:t.tabs2.fillBar,callback:function(e){t.$set(t.tabs2,"fillBar",e)},expression:"tabs2.fillBar"}},[t._v("Fill bar")]),n("w-tabs",{attrs:{items:t.tabs2.items,"fill-bar":t.tabs2.fillBar}})],1),n("title-link",{attrs:{h2:""}},[t._v("V-model")]),n("alert",{attrs:{warning:""}},[n("strong",[t._v("Since version 1.21.0")]),t._v(", the v-model/value only accepts a numeric tab index (previously an array of boolean).")]),t._m(0),n("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-tabs(v-model="activeTabs" :items="tabs")\nstrong\n  | v-model:\n  code.ml2 '+t._s("{{ activeTabs }}"))]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabs: [\n    { title: 'Tab 1', content: 'Tab 1 content.' },\n    { title: 'Tab 2', content: 'Tab 2 content.' },\n    { title: 'Tab 3', content: 'Tab 3 content.' },\n    { title: 'Tab 4', content: 'Tab 4 content.' },\n    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }\n  ],\n  activeTabs: [false, false, true, false, false]\n})\n")]},proxy:!0}])},[n("w-tabs",{staticClass:"mb2",attrs:{items:t.tabs2.items},model:{value:t.tabs2.active,callback:function(e){t.$set(t.tabs2,"active",e)},expression:"tabs2.active"}}),n("strong",[t._v("v-model:"),n("code",{staticClass:"ml2"},[t._v(t._s(t.tabs2.active))])])],1),n("title-link",{attrs:{h2:""}},[t._v("Colors")]),t._m(1),n("div",{staticClass:"title3"},[t._v("Color & bg-color")]),n("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-tabs(:items="tabs" color="blue" bg-color="indigo-light5")')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabs: [\n    { title: 'Tab 1', content: 'Tab 1 content.' },\n    { title: 'Tab 2', content: 'Tab 2 content.' },\n    { title: 'Tab 3', content: 'Tab 3 content.' },\n    { title: 'Tab 4', content: 'Tab 4 content.' },\n    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }\n  ]\n})\n")]},proxy:!0}])},[n("w-tabs",{attrs:{items:t.tabs2.items,color:"blue","bg-color":"indigo-light5"}})],1),n("div",{staticClass:"title3 mt4"},[t._v("Slider color")]),n("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-tabs(:items="tabs" slider-color="blue-light2")')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabs: [\n    { title: 'Tab 1', content: 'Tab 1 content.' },\n    { title: 'Tab 2', content: 'Tab 2 content.' },\n    { title: 'Tab 3', content: 'Tab 3 content.' },\n    { title: 'Tab 4', content: 'Tab 4 content.' },\n    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }\n  ]\n})\n")]},proxy:!0}])},[n("w-tabs",{attrs:{items:t.tabs2.items,"slider-color":"blue-light2"}})],1),n("div",{staticClass:"title3"},[t._v("Active class")]),n("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-tabs(\n  :items="tabs"\n  color="blue"\n  active-class="pink"\n  slider-color="pink")')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabs: [\n    { title: 'Tab 1', content: 'Tab 1 content.' },\n    { title: 'Tab 2', content: 'Tab 2 content.' },\n    { title: 'Tab 3', content: 'Tab 3 content.' },\n    { title: 'Tab 4', content: 'Tab 4 content.' },\n    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }\n  ]\n})\n")]},proxy:!0}])},[n("w-tabs",{attrs:{items:t.tabs2.items,color:"blue","active-class":"pink","slider-color":"pink"}})],1),n("title-link",{attrs:{h2:""}},[t._v("No slider")]),n("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-switch.mb3(v-model="tabsSlider") Slider\nw-tabs(:items="tabs" :no-slider="!tabsSlider" active-class="pink")')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabsSlider: false,\n  tabs: [\n    { title: 'Tab 1', content: 'Tab 1 content.' },\n    { title: 'Tab 2', content: 'Tab 2 content.' },\n    { title: 'Tab 3', content: 'Tab 3 content.' },\n    { title: 'Tab 4', content: 'Tab 4 content.' },\n    { title: 'Tab 5', content: 'Tab 5 content.', disabled: true }\n  ]\n})\n")]},proxy:!0}])},[n("w-switch",{staticClass:"mb3",model:{value:t.tabs2.slider,callback:function(e){t.$set(t.tabs2,"slider",e)},expression:"tabs2.slider"}},[t._v("Slider")]),n("w-tabs",{attrs:{items:t.tabs2.items,"no-slider":!t.tabs2.slider,"active-class":"pink"}})],1),n("title-link",{attrs:{h2:""}},[t._v("Content transitions")]),n("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-radios.mb3(:items="transitions" v-model="transition")\nw-tabs(:items="tabs" :transition="transition")')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabs: [\n    { title: 'Tab 1', content: 'Tab 1 content.' },\n    { title: 'Tab 2', content: 'Tab 2 content.' },\n    { title: 'Tab 3', content: 'Tab 3 content.' }\n  ],\n  transition: 'fade',\n  transitions: [\n    { label: 'default', value: '' },\n    { label: 'fade' },\n    { label: 'slide-fade-up' },\n    { label: 'slide-fade-down' },\n    { label: 'slide-fade-left' },\n    { label: 'slide-fade-right' },\n    { label: 'scale-fade' },\n    { label: 'none', value: false }\n  ]\n})\n")]},proxy:!0}])},[n("w-radios",{staticClass:"mb3",attrs:{items:t.transitions},model:{value:t.tabs4.transition,callback:function(e){t.$set(t.tabs4,"transition",e)},expression:"tabs4.transition"}}),n("w-tabs",{attrs:{items:t.tabs4.items,transition:t.tabs4.transition}})],1),n("title-link",{attrs:{h2:""}},[t._v("Add / remove tabs")]),n("p",[t._v("The tabs will naturally try to fit in the available space. But if they can't fit because there are\ntoo many, a scrollbar will allow navigation to all the tabs.")]),n("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-flex.mb3(align-center)\n  | Number of tabs:\n  w-button.mx2(icon="wi-minus" sm @click="tabsCount -= tabsCount < 1 ? 0 : 1")\n  code '+t._s("{{ tabsCount }}")+'\n  w-button.mx2(icon="wi-plus" sm @click="tabsCount++")\nw-tabs(:items="tabsCount")\n  template(#item-title="{ index }") Tab '+t._s("{{ index }}")+'\n  template(#item-content="{ index }") Content '+t._s("{{ index }}"))]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabsCount: 3\n})\n")]},proxy:!0}])},[n("w-flex",{staticClass:"mb3",attrs:{"align-center":""}},[t._v("Number of tabs:"),n("w-button",{staticClass:"mx2",attrs:{icon:"wi-minus",sm:""},on:{click:function(e){t.tabs3.tabsCount-=t.tabs3.tabsCount<1?0:1}}}),n("code",[t._v(t._s(t.tabs3.tabsCount))]),n("w-button",{staticClass:"mx2",attrs:{icon:"wi-plus",sm:""},on:{click:function(e){t.tabs3.tabsCount++}}})],1),n("w-tabs",{attrs:{items:t.tabs3.tabsCount},scopedSlots:t._u([{key:"item-title",fn:function(e){var n=e.index;return[t._v("Tab "+t._s(n))]}},{key:"item-content",fn:function(e){var n=e.index;return[t._v("Content "+t._s(n))]}}])})],1),n("title-link",{attrs:{h2:""}},[t._v("Card style tabs")]),n("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-tabs(:items="tabs" card)')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabs: [\n    { title: 'Tab 1', content: 'Tab 1 content.' },\n    { title: 'Tab 2', content: 'Tab 2 content.' },\n    { title: 'Tab 3 has a long title', content: 'Tab 3 content.' }\n  ]\n})\n")]},proxy:!0}])},[n("w-tabs",{attrs:{items:t.tabs1,card:""}})],1),n("title-link",{attrs:{h2:""}},[t._v("Close button")]),n("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-tabs(:items="tabs" card)\n  template(#item-title="{ item, index }")\n    | '+t._s("{{ item.title }}")+'\n    w-button.ml1.mr-1(\n      @click="tabs = tabs.filter&#40;&#40;tab, i&#41; => i !== index - 1&#41;"\n      icon="wi-cross"\n      outline\n      xs)')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabs: [\n    { title: 'Tab 1', content: 'Tab 1 content.' },\n    { title: 'Tab 2', content: 'Tab 2 content.' },\n    { title: 'Tab 3', content: 'Tab 3 content.' }\n  ]\n})\n")]},proxy:!0}])},[n("w-tabs",{attrs:{items:t.tabs6.items,card:""},scopedSlots:t._u([{key:"item-title",fn:function(e){var a=e.item,s=e.index;return[t._v(t._s(a.title)),n("w-button",{staticClass:"ml1 mr-1",attrs:{icon:"wi-cross",outline:"",xs:""},on:{click:function(e){t.tabs6.items=t.tabs6.items.filter((function(t,e){return e!==s-1}))}}})]}}])}),n("w-button",{staticClass:"mt4",attrs:{"bg-color":"primary",disabled:3===t.tabs6.items.length},on:{click:function(e){t.tabs6.items=t.tabs6.originals}}},[t._v("Reset tabs")])],1),n("title-link",{attrs:{h2:""}},[t._v("Customizing the tabs title & contents")]),n("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-tabs(:items="tabs" card)\n  template(#item-title="{ item }")\n    w-icon.mr1.green mdi mdi-star\n    span.green '+t._s("{{ item.title }}")+'\n  template(#item-title.3="{ item }")\n    w-icon.pink mdi mdi-heart\n    span.pink.mx1 '+t._s("{{ item.title }}")+'\n    w-icon.pink mdi mdi-heart\n  template(#item-content.1="{ item }")\n    .title3 This is a custom tab content.\n    div(v-html="item.content")')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tabs: [\n    { title: 'Tab 1', content: 'Tab 1 content.' },\n    { title: 'Tab 2', content: 'Tab 2 content.' },\n    { title: 'Tab 3', content: 'Tab 3 content.' }\n  ]\n})")]},proxy:!0}])},[n("w-tabs",{attrs:{items:t.tabs5,card:""},scopedSlots:t._u([{key:"item-title",fn:function(e){var a=e.item;return[n("w-icon",{staticClass:"mr1 green"},[t._v("mdi mdi-star")]),n("span",{staticClass:"green"},[t._v(t._s(a.title))])]}},{key:"item-title.3",fn:function(e){var a=e.item;return[n("w-icon",{staticClass:"pink"},[t._v("mdi mdi-heart")]),n("span",{staticClass:"pink mx1"},[t._v(t._s(a.title))]),n("w-icon",{staticClass:"pink"},[t._v("mdi mdi-heart")])]}},{key:"item-content.1",fn:function(e){var a=e.item;return[n("div",{staticClass:"title3"},[t._v("This is a custom tab content.")]),n("div",{domProps:{innerHTML:t._s(a.content)}})]}}])})],1)],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("It is possible to open a particular tab programmatically via "),n("code",[t._v("v-model")]),t._v(" or "),n("code",[t._v("value")]),t._v(".")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Like in most components, you can set a "),n("code",[t._v("color")]),t._v(" for the text and a "),n("code",[t._v("bg-color")]),t._v(" for the\nbackground. You can also set a "),n("code",[t._v("slider-color")]),t._v(" and an "),n("code",[t._v("active-class")]),t._v(".\n")])}],i={data:function(){return{tabs1:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3 has a long title",content:"Tab 3 content."}],tabs2:{items:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."},{title:"Tab 4",content:"Tab 4 content."},{title:"Tab 5",content:"Tab 5 content.",disabled:!0}],active:2,fillBar:!0,slider:!1},tabs3:{tabsCount:3},tabs4:{items:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."}],transition:"fade"},tabs5:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."}],tabs6:{items:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."}],originals:[{title:"Tab 1",content:"Tab 1 content."},{title:"Tab 2",content:"Tab 2 content."},{title:"Tab 3",content:"Tab 3 content."}]},transitions:[{label:"default",value:""},{label:"fade"},{label:"slide-fade-up"},{label:"slide-fade-down"},{label:"slide-fade-left"},{label:"slide-fade-right"},{label:"scale-fade"},{label:"none",value:!1}]}}},o=i,l=n("2877"),c=Object(l["a"])(o,a,s,!1,null,null,null);e["default"]=c.exports},"3a5c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"w-divider my12"}),n("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),n("component-api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),n("component-api",{attrs:{items:t.slots,title:"Slots"}}),n("component-api",{attrs:{items:t.events,title:"Events"}})],1)},s=[],i=(n("13d5"),n("109e")),o={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Provide a tab index (a number starting from 0) to open it. This value gets updated when using a v-model.',color:'Applies a color to the each tab title\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a color to the each tab title\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',items:'Expecting an array of objects. Each object being an tab item, it should include a <code>title</code> and <code>content</code> attributes.<br>Alternatively, you can provide an integer number (call it <em class="code">x</em>), to loop through and create <em class="code">x</em> tabs. You can then use the individual slots <code>item-title.x</code> &amp; <code>item-content.x</code> to define each item title and content.',itemTitleKey:"Specifies the name of the attribute in each item object where to find the item's title string.",itemContentKey:"Specifies the name of the attribute in each item object where to find the item's content string.",titleClass:"Applies a custom CSS class to the tab title.",activeClass:"Applies a custom CSS class to the active tab title.",noSlider:"When set to true, removes the slider underneath the active tab title.",sliderColor:'Provide a custom color for the tabs slider (<code>primary</code> by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',contentClass:"Applies a custom CSS class to the tab content.",transition:'Applies a particular transition to the tab contents when switching tab.<br>Check all the transitions that apply to this component in the <a href="#content-transitions">Content transitions</a> example.',fillBar:"When set to true, the tabs titles will occupy the full available width.",center:"Centers the tabs titles.",right:"Aligns the tabs titles to the right.",card:"Applies the card style on all the tabs titles."},l={"item-title":{description:"Provide a custom title for every tab. Applies to all the tabs, but can be overridden by the <code>item-title.x</code> slot.",params:{item:"The current tab object.",index:"The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.",active:"A boolean representing the active state of the tab."}},"item-title.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom title for a single tab: the tab at the index <em class="code">x</em>.',params:{item:"The current tab object.",index:"The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.",active:"A boolean representing the active state of the tab."}},"item-content":{description:"Provide a custom content for every tab. Applies to all the tabs, but can be overridden by the <code>item-content.x</code> slot.",params:{item:"The current tab object.",index:"The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.",active:"A boolean representing the active state of the tab."}},"item-content.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom content for a single tab: the tab at the index <em class="code">x</em>.',params:{item:"The current tab object.",index:"The tab index in the array of tabs. Starts at 1 to be consistent with the <code>item.x</code> slot.",active:"A boolean representing the active state of the tab."}}},c={input:{description:"Emitted each time the current tab changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Array]":"An array of booleans representing the active state of each tab."}},"update:modelValue":{description:"Emitted each time the current tab changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Array]":"An array of booleans representing the active state of each tab."}},focus:{description:"Emitted on each tab title focus.",params:{"[Object]":"The focused tab item object."}}},r={data:function(){return{propsDescs:o,slots:l}},computed:{props:function(){return i["a"].props},events:function(){return i["a"].emits.reduce((function(t,e){return(t[e]=c[e]||{})&&t}),{})}}},b=r,d=n("2877"),u=Object(d["a"])(b,a,s,!1,null,null,null);e["default"]=u.exports},d0b9:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("ui-component-title",[t._v("w-tabs")]),n("examples"),n("api")],1)},s=[],i=n("0b02"),o=n("3a5c"),l={components:{Examples:i["default"],Api:o["default"]}},c=l,r=n("2877"),b=Object(r["a"])(c,a,s,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=tabs-index-vue.c41c4154.js.map