(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["slider-vue"],{"0538":function(e,t,l){"use strict";var s=l("2a38"),a=l.n(s);a.a},"2a38":function(e,t,l){},f26f:function(e,t,l){"use strict";l.r(t);var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("title-link",{staticClass:"mt4 code",attrs:{h1:"",slug:"w-slider"}},[e._v("w-slider"),l("w-tag",{staticClass:"ml3",attrs:{"bg-color":"orange",color:"white",lg:""}},[e._v("In progress")])],1),l("title-link",{attrs:{h2:""}},[e._v("Default")]),l("example",{attrs:{"content-class":"mt5"},scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-slider(:value="50")\n')]},proxy:!0}])},[l("w-slider",{attrs:{value:50}})],1),l("title-link",{attrs:{h2:""}},[e._v("V-model")]),l("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-flex(align-center)\n  w-button(@click="sliderValue -= 5" icon="wi-minus" bg-color="success" sm)\n  w-slider.mx3.grow(v-model="sliderValue" color="green")\n  w-button(@click="sliderValue += 5" icon="wi-plus" bg-color="success" sm)\ndiv.mt4\n  | v-model:\n  code.ml1 '+e._s("{{ sliderValue }}"))]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  sliderValue: 50\n})\n")]},proxy:!0}])},[l("w-flex",{attrs:{"align-center":""}},[l("w-button",{attrs:{icon:"wi-minus","bg-color":"success",sm:""},on:{click:function(t){e.sliderValue-=5}}}),l("w-slider",{staticClass:"mx3 grow",attrs:{color:"green"},model:{value:e.sliderValue,callback:function(t){e.sliderValue=t},expression:"sliderValue"}}),l("w-button",{attrs:{icon:"wi-plus","bg-color":"success",sm:""},on:{click:function(t){e.sliderValue+=5}}})],1),l("div",{staticClass:"mt4"},[e._v("v-model:"),l("code",{staticClass:"ml1"},[e._v(e._s(e.sliderValue))])])],1),l("title-link",{attrs:{h2:""}},[e._v("Label")]),l("example",{attrs:{"content-class":"pt12"}},[l("w-slider",{staticClass:"mb4",attrs:{value:24,"thumb-label":""}})],1),l("title-link",{attrs:{h3:""}},[e._v("Customize with the label slot")]),l("example",{attrs:{"content-class":"pt12 pb8"}},[l("w-slider",{attrs:{value:46.3,color:"green","thumb-label":""},scopedSlots:e._u([{key:"label",fn:function(t){var l=t.value;return[e._v(e._s(~~(10*l)/10)+"%")]}}])})],1),l("title-link",{attrs:{h3:""}},[e._v("Droplet style label")]),l("p",[e._v("With this option you can have a more modern look, but the drawback is that it can't contain long text.")]),e._m(0),e._m(1),e._m(2),l("example",{attrs:{"content-class":"pt12"},scopedSlots:e._u([{key:"pug",fn:function(){},proxy:!0}])},[l("w-slider",{staticClass:"mt2 mb12",attrs:{value:30,color:"green","thumb-label":"droplet"}}),l("w-slider",{staticClass:"big-label mt12 mb4",attrs:{value:60,color:"green","thumb-label":"droplet","thumb-label-class":"success--bg"}})],1)],1)},a=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("Of course it is a breeze to override the droplet label size via CSS. This will suffice:"),l("code",[e._v(".w-slider {font-size: 1.4em}")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("If you need you can also adjust the content font-size with:"),l("code",[e._v(".w-slider__thumb-label div {font-size: 2em;}")])])},function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("p",[e._v("It is also possible to add classes to the thumb label through the "),l("code",[e._v("thumb-label-class")]),e._v(" option\nto add a color for instance.")])}],n={data:function(){return{sliderValue:50}}},o=n,r=(l("0538"),l("2877")),i=Object(r["a"])(o,s,a,!1,null,null,null);t["default"]=i.exports}}]);
//# sourceMappingURL=slider-vue.850f9a11.js.map