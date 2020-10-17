(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["tag-index-vue","tag-api-vue","tag-examples-vue"],{"4c63":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"w-divider my12"}),a("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),a("api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),a("api",{attrs:{items:t.slots,title:"Slots"}}),a("api",{attrs:{items:t.events,title:"Events"}})],1)},r=[],l=(a("13d5"),a("5f23")),s={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>When a tag has a <code>v-model</code> or <code>value</code>, it becomes toggleable (two different states) and clickable. When the user clicks it, its <code>v-model</code> boolean value is updated.',color:'Applies a color to the tag\'s text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Applies a color to the tag\'s background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',dark:"When set to true, the text color will be set to white.",shadow:"Applies a drop shadow to the tag and removes the default border.",tile:"Removes the default border-radius and sets sharp edges on the tag.",round:"Sets a maximum border-radius on the corners of the tag, giving it a round look.",closable:"Adds a close button in the tag. On click of that button, the <code>v-model</code> boolean value is updated. You can then decide to hide the tag with a v-if or v-show based on the <code>v-model</code> value.",outline:"The outline style applies the provided <code>color</code> (by default the color is inherited) to the text and border and no background color is set.",noBorder:"Removes the default border from the tag element.",xs:"Sets the size of the tag.",sm:"Sets the size of the tag.",md:"Sets the size of the tag.",lg:"Sets the size of the tag.",xl:"Sets the size of the tag.",width:"Sets a width on the tag.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value.",height:"Sets a height on the tag.<br>Accepts a string made of a value and a unit (e.g. <code>2.5em</code>) or a number (e.g. <code>45</code>) that will be a pixel value."},n={default:{description:"The tag content."}},i={input:"For vue 2 only.<br>If a value or v-model is provided, the tag becomes toggleable on click.<br>On click, it updates the v-model value in Vue 2.x only.<br>The boolean value is passed as a parameter.","update:modelValue":"For vue 3 only.<br>If a model-value or v-model is provided, the tag becomes toggleable on click.<br>On click, it updates the v-model value in Vue 3 only.<br>The boolean value is passed as a parameter."},c={data:function(){return{propsDescs:s,slots:n}},computed:{props:function(){return l["a"].props},events:function(){return l["a"].emits.reduce((function(t,e){return(t[e]={description:i[e]||""})&&t}),{})}}},g=c,d=a("2877"),u=Object(d["a"])(g,o,r,!1,null,null,null);e["default"]=u.exports},"527f":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ui-component-title",[t._v("w-tag")]),a("examples"),a("api")],1)},r=[],l=a("e4c5"),s=a("4c63"),n={components:{Examples:l["default"],Api:s["default"]}},i=n,c=a("2877"),g=Object(c["a"])(i,o,r,!1,null,null,null);e["default"]=g.exports},e4c5:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("title-link",{attrs:{h2:""}},[t._v("Default tag & outline")]),a("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v("w-tag.mr4 tag\nw-tag(outline) tag\n")]},proxy:!0}])},[a("w-tag",{staticClass:"mr4"},[t._v("tag")]),a("w-tag",{attrs:{outline:""}},[t._v("tag")])],1),a("title-link",{attrs:{h2:""}},[t._v("Colors")]),t._m(0),a("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-tag.mr4(color="primary") tag\nw-tag.mr4(bg-color="primary") tag\nw-tag(bg-color="primary" color="yellow") tag\n')]},proxy:!0}])},[a("w-tag",{staticClass:"mr4",attrs:{color:"primary"}},[t._v("tag")]),a("w-tag",{staticClass:"mr4",attrs:{"bg-color":"primary"}},[t._v("tag")]),a("w-tag",{attrs:{"bg-color":"primary",color:"yellow"}},[t._v("tag")])],1),a("title-link",{attrs:{h2:""}},[t._v("Round, tile & shadow")]),a("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-tag.mr4(bg-color="primary" round) round\nw-tag.mr4(bg-color="primary" tile) tile\nw-tag(color="primary" shadow) shadow\n')]},proxy:!0}])},[a("w-tag",{staticClass:"mr4",attrs:{"bg-color":"primary",round:""}},[t._v("round")]),a("w-tag",{staticClass:"mr4",attrs:{"bg-color":"primary",tile:""}},[t._v("tile")]),a("w-tag",{attrs:{color:"primary",shadow:""}},[t._v("shadow")])],1),a("title-link",{attrs:{h2:""}},[t._v("Sizes")]),a("example",{scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('.w-flex.wrap.align-center\n  w-tag.ma1(color="primary" xs) extra small\n  w-tag.ma1(color="primary" sm) small\n  w-tag.ma1(color="primary" md) medium\n  w-tag.ma1(color="primary" lg) large\n  w-tag.ma1(color="primary" xl) extra large\np.my4 You can also set a custom size using the width and height props.\nw-tag(outline color="primary" xl width="10em" height="3em") a bigger tag\n')]},proxy:!0}])},[a("div",{staticClass:"w-flex wrap align-center"},[a("w-tag",{staticClass:"ma1",attrs:{color:"primary",xs:""}},[t._v("extra small")]),a("w-tag",{staticClass:"ma1",attrs:{color:"primary",sm:""}},[t._v("small")]),a("w-tag",{staticClass:"ma1",attrs:{color:"primary",md:""}},[t._v("medium")]),a("w-tag",{staticClass:"ma1",attrs:{color:"primary",lg:""}},[t._v("large")]),a("w-tag",{staticClass:"ma1",attrs:{color:"primary",xl:""}},[t._v("extra large")])],1),a("p",{staticClass:"my4"},[t._v("You can also set a custom size using the "),a("code",[t._v("width")]),t._v(" and "),a("code",[t._v("height")]),t._v(" props.")]),a("w-tag",{attrs:{outline:"",color:"primary",xl:"",width:"10em",height:"3em"}},[t._v("a bigger tag")])],1),a("title-link",{attrs:{h2:""}},[t._v("Toggleable state & closable")]),t._m(1),a("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v("w-tag(\n  v-model=\"tagOn\"\n  :bg-color=\"tagOn ? 'primary' : 'primary-light2'\"\n  dark\n  lg\n  toggle) "+t._s("{{ tagOn ? 'active' : 'inactive' }}")+"\nspan.ml4\n  | Value:\n  code.ml1 "+t._s("{{ tagOn }}"))]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tagOn: false\n})\n")]},proxy:!0}])},[a("w-tag",{attrs:{"bg-color":t.tagOn1?"primary":"primary-light2",dark:"",lg:"",toggle:""},model:{value:t.tagOn1,callback:function(e){t.tagOn1=e},expression:"tagOn1"}},[t._v(t._s(t.tagOn1?"active":"inactive"))]),a("span",{staticClass:"ml4"},[t._v("Value:"),a("code",{staticClass:"ml1"},[t._v(t._s(t.tagOn1))])])],1),a("h3",[t._v("Closable tag")]),a("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-tag(v-model="tagOn" closable lg :outline="tagOn" color="primary" :width="145") v-model & close')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  tagOn: false\n})\n")]},proxy:!0}])},[a("w-tag",{attrs:{closable:"",lg:"",outline:t.tagOn2,color:"primary",width:145},model:{value:t.tagOn2,callback:function(e){t.tagOn2=e},expression:"tagOn2"}},[t._v("v-model & close")])],1),a("title-link",{attrs:{h2:""}},[t._v("Custom content")]),a("example",{attrs:{"content-class":"w-flex align-center"},scopedSlots:t._u([{key:"pug",fn:function(){return[t._v('w-tag(color="pink-light1" bg-color="pink-light5")\n  w-icon.mr1(sm) mdi mdi-heart\n  | like it')]},proxy:!0}])},[a("w-tag",{attrs:{color:"pink-light1","bg-color":"pink-light5"}},[a("w-icon",{staticClass:"mr1",attrs:{sm:""}},[t._v("mdi mdi-heart")]),t._v("like it")],1)],1)],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Like in most components, you can set a "),a("code",[t._v("color")]),t._v(" for the text and a "),a("code",[t._v("bg-color")]),t._v(" for the\nbackground.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("When a tag has a "),a("code",[t._v("v-model")]),t._v(" or "),a("code",[t._v("value")]),t._v(", it becomes toggleable (two different states) and clickable.\nWhen the user clicks it, its "),a("code",[t._v("v-model")]),t._v(" boolean value is updated.")])}],l={data:function(){return{tagOn1:!1,tagOn2:!0}}},s=l,n=a("2877"),i=Object(n["a"])(s,o,r,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=tag-index-vue.6d29f727.js.map