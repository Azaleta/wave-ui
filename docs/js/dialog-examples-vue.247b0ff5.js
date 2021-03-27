(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["dialog-examples-vue"],{"77ae":function(e,l,n){"use strict";n.r(l);var t=function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("div",[n("p",[e._v("This dialog contains some basic options for the w-dialog.")]),n("example",{attrs:{"content-class":"pt5"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-button\n  class="px4 mr6 shrink"\n  @click="dialog.show = true"\n  bg-color="primary"\n  dark>\n  Open dialog\n</w-button>\n\n<w-dialog\n  v-model="dialog.show"\n  :fullscreen="dialog.fullscreen"\n  :width="dialog.width"\n  :persistent="dialog.persistent"\n  :persistent-no-animation="dialog.persistentNoAnimation"\n  title-class="primary-light1--bg white">\n  <template #title>\n    <w-icon class="mr2">mdi mdi-tune</w-icon>\n    Control panel\n  </template>\n\n  <w-checkbox\n    class="d-flex mt2"\n    v-model="dialog.fullscreen"\n    label="Fullscreen">\n  </w-checkbox>\n  <w-checkbox\n    class="d-flex mt2"\n    v-model="dialog.persistent"\n    label="Persistent (try to click outside)">\n  </w-checkbox>\n  <w-checkbox\n    class="d-flex mt2"\n    v-model="dialog.persistentNoAnimation"\n    :disabled="!dialog.persistent"\n    label="Persistent with no animation">\n  </w-checkbox>\n\n  <div class="w-flex mt6 no-grow">\n    <span class="mr2">Width:</span>\n    <w-radios\n      v-model="dialog.width"\n      :items="[{ value: 300, label: \'300px\' }, { value: 500, label: \'500px\' }]"\n      inline />\n  </div>\n\n  <template #actions>\n    <div class="spacer" />\n    <w-button @click="dialog.show = false">Close</w-button>\n  </template>\n</w-dialog>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  dialog: {\n    show: false,\n    fullscreen: false,\n    persistent: false,\n    persistentNoAnimation: false,\n    width: 300\n  }\n})\n")]},proxy:!0}])},[n("w-button",{staticClass:"px4 mr6 shrink",attrs:{"bg-color":"primary",dark:""},on:{click:function(l){e.dialog1.show=!0}}},[e._v("Open dialog")]),n("w-dialog",{attrs:{fullscreen:e.dialog1.fullscreen,width:e.dialog1.width,persistent:e.dialog1.persistent,"persistent-no-animation":e.dialog1.persistentNoAnimation,"title-class":"primary-light1--bg white"},scopedSlots:e._u([{key:"title",fn:function(){return[n("w-icon",{staticClass:"mr2"},[e._v("mdi mdi-tune")]),e._v("Control panel")]},proxy:!0},{key:"actions",fn:function(){return[n("div",{staticClass:"spacer"}),n("w-button",{on:{click:function(l){e.dialog1.show=!1}}},[e._v("Close")])]},proxy:!0}]),model:{value:e.dialog1.show,callback:function(l){e.$set(e.dialog1,"show",l)},expression:"dialog1.show"}},[n("w-checkbox",{staticClass:"d-flex mt2",attrs:{label:"Fullscreen"},model:{value:e.dialog1.fullscreen,callback:function(l){e.$set(e.dialog1,"fullscreen",l)},expression:"dialog1.fullscreen"}}),n("w-checkbox",{staticClass:"d-flex mt2",attrs:{label:"Persistent (try to click outside)"},model:{value:e.dialog1.persistent,callback:function(l){e.$set(e.dialog1,"persistent",l)},expression:"dialog1.persistent"}}),n("w-checkbox",{staticClass:"d-flex mt2",attrs:{disabled:!e.dialog1.persistent,label:"Persistent with no animation"},model:{value:e.dialog1.persistentNoAnimation,callback:function(l){e.$set(e.dialog1,"persistentNoAnimation",l)},expression:"dialog1.persistentNoAnimation"}}),n("div",{staticClass:"w-flex mt6 no-grow"},[n("span",{staticClass:"mr2"},[e._v("Width:")]),n("w-radios",{attrs:{items:[{value:300,label:"300px"},{value:500,label:"500px"}],inline:""},model:{value:e.dialog1.width,callback:function(l){e.$set(e.dialog1,"width",l)},expression:"dialog1.width"}})],1),n("div",{staticClass:"mt4 mb-2 grey-light1"},[e._v("The "),n("span",{staticClass:"code grey-light1"},[e._v("width")]),e._v(" prop is called so for simplicity, but it internally translates to\na "),n("span",{staticClass:"code grey-light1"},[e._v("max-width")]),e._v(" to fit on small screens.\n")])],1)],1),n("title-link",{attrs:{h2:""}},[e._v("Persistent prompt dialog")]),n("example",{attrs:{"content-class":"pt5"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-button class="px4"\n  @click="dialog.show = true"\n  bg-color="primary"\n  dark>\n  Open dialog\n</w-button>\n\n<w-dialog\n  v-model="dialog.show"\n  title="Terms and conditions"\n  persistent\n  :width="550">\n  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,\n  quisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas\n  odit dolor labore eveniet at vel sequi nostrum.<br /><br />\n  Voluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi\n  dolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi\n  aliquid dolore quo amet deserunt asperiores placeat maxime perferendis.\n\n  <template #actions>\n    <div class="spacer" />\n    <w-button\n      class="mr2"\n      @click="dialog.show = false"\n      bg-color="error">\n      I disagree\n    </w-button>\n    <w-button\n      @click="dialog.show = false"\n      bg-color="success">\n      I agree\n    </w-button>\n  </template>\n</w-dialog>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  dialog: { show: false }\n})\n")]},proxy:!0}])},[n("w-button",{staticClass:"px4",attrs:{"bg-color":"primary",dark:""},on:{click:function(l){e.dialog2.show=!0}}},[e._v("Open dialog")]),n("w-dialog",{attrs:{title:"Terms and conditions",persistent:"",width:550},scopedSlots:e._u([{key:"actions",fn:function(){return[n("div",{staticClass:"spacer"}),n("w-button",{staticClass:"mr2",attrs:{"bg-color":"error"},on:{click:function(l){e.dialog2.show=!1}}},[e._v("I disagree")]),n("w-button",{attrs:{"bg-color":"success"},on:{click:function(l){e.dialog2.show=!1}}},[e._v("I agree")])]},proxy:!0}]),model:{value:e.dialog2.show,callback:function(l){e.$set(e.dialog2,"show",l)},expression:"dialog2.show"}},[e._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore delectus,\nquisquam ipsa laudantium esse consequatur itaque similique et eligendi eum voluptas\nodit dolor labore eveniet at vel sequi nostrum."),n("br"),n("br"),e._v("\nVoluptates, aut distinctio esse quia doloribus commodi minima inventore neque sequi\ndolores perspiciatis fugiat. Fuga, reprehenderit sequi veritatis iure magnam excepturi\naliquid dolore quo amet deserunt asperiores placeat maxime perferendis.")])],1),n("title-link",{attrs:{h2:""}},[e._v("Nesting")]),n("example",{attrs:{"content-class":"pt5"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-button\n  class="px4"\n  @click="dialog1.show = true"\n  bg-color="primary"\n  dark>\n  Open dialog\n</w-button>\n\n<w-dialog\n  v-model="dialog1.show"\n  :width="600"\n  title="Dialog 1">\n  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit...</p>\n  <w-button\n    class="mt6"\n    @click="dialog2.show = true"\n    bg-color="indigo-light1"\n    dark>\n    Open dialog 2\n  </w-button>\n\n  <template #actions>\n    <div class="spacer" />\n    <w-button\n      @click="dialog1.show = false"\n      bg-color="error"\n      dark>\n      Close\n    </w-button>\n  </template>\n</w-dialog>\n\n<w-dialog\n  v-model="dialog2.show"\n  :width="250"\n  title="Dialog 2">\n  <w-button class="my6"\n    @click="dialog2.show = false"\n    bg-color="error"\n    dark>\n    Close\n  </w-button>\n</w-dialog>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  dialog1: { show: false },\n  dialog2: { show: false }\n})\n")]},proxy:!0}])},[n("w-button",{staticClass:"px4",attrs:{"bg-color":"primary",dark:""},on:{click:function(l){e.dialog3.show=!0}}},[e._v("Open dialog")]),n("w-dialog",{attrs:{width:600,title:"Dialog 1","content-class":"text-center"},scopedSlots:e._u([{key:"actions",fn:function(){return[n("div",{staticClass:"spacer"}),n("w-button",{attrs:{"bg-color":"error",dark:""},on:{click:function(l){e.dialog3.show=!1}}},[e._v("Close")])]},proxy:!0}]),model:{value:e.dialog3.show,callback:function(l){e.$set(e.dialog3,"show",l)},expression:"dialog3.show"}},[n("p",[e._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit...")]),n("w-button",{staticClass:"mt6",attrs:{"bg-color":"indigo-light1",dark:""},on:{click:function(l){e.dialog4.show=!0}}},[e._v("Open dialog 2")])],1),n("w-dialog",{attrs:{width:250,title:"Dialog 2","content-class":"text-center"},model:{value:e.dialog4.show,callback:function(l){e.$set(e.dialog4,"show",l)},expression:"dialog4.show"}},[n("w-button",{staticClass:"my6",attrs:{"bg-color":"error",dark:""},on:{click:function(l){e.dialog4.show=!1}}},[e._v("Close")])],1)],1),n("title-link",{attrs:{h2:""}},[e._v("Transitions")]),n("example",{scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<div class="w-flex">\n  <w-button\n    class="px4 mr6"\n    @click="dialog.show = true"\n    bg-color="primary"\n    dark>\n    Open dialog\n  </w-button>\n\n  <div class="w-flex wrap">\n    <div class="ma2">\n      <div class="title3 mb2">Transition names</div>\n      <w-radios\n        v-model="dialog.transition"\n        :items="transitions"\n        item-value-key="label"\n        @input="dialog.fullscreen = null">\n        <template #label="{ item }">\n          <code>'+e._s("{{ item.label }}")+'</code>\n        </template>\n      </w-radios>\n    </div>\n\n    <div class="ma2">\n      <div class="title3 mb2">\n        Slide transitions for fullscreen\n      </div>\n      <w-radios\n        v-model="dialog.transition"\n        :items="transitionsForFullscreen"\n        item-value-key="label"\n        @input="dialog.fullscreen = null">\n        <template #label="{ item }">\n          <code>'+e._s("{{ item.label }}")+'</code>\n        </template>\n      </w-radios>\n      <w-checkbox\n        class="mt2"\n        :value="dialog.fullscreen === null ? fullscreenTransition : dialog.fullscreen"\n        @input="dialog.fullscreen = $event"\n        label="Fullscreen dialog">\n      </w-checkbox>\n    </div>\n  </div>\n</div>\n\n<w-dialog\n  v-model="dialog.show"\n  :width="(dialog.fullscreen === null ? fullscreenTransition : dialog.fullscreen) ? 0 : 400"\n  :fullscreen="dialog.fullscreen === null ? fullscreenTransition : dialog.fullscreen"\n  :transition="dialog.transition"\n  title="Dialog with custom transition"\n  content-class="w-flex align-center justify-center">\n  <w-button class="my6"\n    @click="dialog.show = false"\n    bg-color="error"\n    dark>\n    Close\n  </w-button>\n</w-dialog>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  dialog: {\n    show: false,\n    fullscreen: false,\n    transition: 'fade'\n  },\n  transitions: [\n    { label: 'fade' },\n    { label: 'slide-fade-up' },\n    { label: 'slide-fade-down' },\n    { label: 'slide-fade-left' },\n    { label: 'slide-fade-right' },\n    { label: 'scale' },\n    { label: 'scale-fade' },\n    { label: 'bounce' },\n    { label: 'none', value: '' }\n  ],\n  transitionsForFullscreen: [\n    { label: 'slide-up' },\n    { label: 'slide-down' },\n    { label: 'slide-left' },\n    { label: 'slide-right' }\n  ]\n}),\n\ncomputed: {\n  fullscreenTransition () {\n    return this.transitionsForFullscreen.map(item => item.label).includes(this.dialog.transition)\n  }\n}\n")]},proxy:!0}])},[n("div",{staticClass:"w-flex"},[n("w-button",{staticClass:"px4 mr6",attrs:{"bg-color":"primary",dark:""},on:{click:function(l){e.dialog5.show=!0}}},[e._v("Open dialog")]),n("div",{staticClass:"w-flex wrap"},[n("div",{staticClass:"ma2"},[n("div",{staticClass:"title3 mb2"},[e._v("Transition names")]),n("w-radios",{attrs:{items:e.transitions,"item-value-key":"label"},on:{input:function(l){e.dialog5.fullscreen=null}},scopedSlots:e._u([{key:"label",fn:function(l){var t=l.item;return[n("code",[e._v(e._s(t.label))])]}}]),model:{value:e.dialog5.transition,callback:function(l){e.$set(e.dialog5,"transition",l)},expression:"dialog5.transition"}})],1),n("div",{staticClass:"ma2"},[n("div",{staticClass:"title3 mb2"},[e._v("Slide transitions for fullscreen")]),n("w-radios",{attrs:{items:e.transitionsForFullscreen,"item-value-key":"label"},on:{input:function(l){e.dialog5.fullscreen=null}},scopedSlots:e._u([{key:"label",fn:function(l){var t=l.item;return[n("code",[e._v(e._s(t.label))])]}}]),model:{value:e.dialog5.transition,callback:function(l){e.$set(e.dialog5,"transition",l)},expression:"dialog5.transition"}}),n("w-checkbox",{staticClass:"mt2",attrs:{value:null===e.dialog5.fullscreen?e.fullscreenTransition:e.dialog5.fullscreen,label:"Fullscreen dialog"},on:{input:function(l){e.dialog5.fullscreen=l}}})],1)])],1),n("w-dialog",{attrs:{width:(null===e.dialog5.fullscreen?e.fullscreenTransition:e.dialog5.fullscreen)?0:400,fullscreen:null===e.dialog5.fullscreen?e.fullscreenTransition:e.dialog5.fullscreen,transition:e.dialog5.transition,title:"Dialog with custom transition","content-class":"w-flex align-center justify-center"},model:{value:e.dialog5.show,callback:function(l){e.$set(e.dialog5,"show",l)},expression:"dialog5.show"}},[n("w-button",{staticClass:"my6",attrs:{"bg-color":"error",dark:""},on:{click:function(l){e.dialog5.show=!1}}},[e._v("Close")])],1)],1),n("title-link",{attrs:{h2:""}},[e._v("Overlay opacity and color")]),n("example",{attrs:{"content-class":"pt5"},scopedSlots:e._u([{key:"html",fn:function(){return[e._v('<w-button\n  class="px4"\n  @click="dialog.show = true"\n  bg-color="primary"\n  dark>\n  Open control panel\n</w-button>\n\n<w-dialog\n  v-model="dialog.show"\n  :width="500"\n  :overlay-opacity="dialog.overlayChoice === \'opacity\' && dialog.overlayOpacity"\n  :overlay-color="(dialog.overlayChoice !== \'opacity\' && dialog.overlayChoice) || \'\'">\n  <template #title>\n    <w-icon class="mr2">mdi mdi-tune</w-icon>\n    Control panel\n  </template>\n\n  <w-radio\n    class="d-flex mt1"\n    v-model="dialog.overlayChoice"\n    return-value="opacity">\n    Overlay opacity\n    <input\n      class="ml2"\n      v-model="dialog.overlayOpacity"\n      type="number"\n      step="0.1" min="0"\n      max="1" />\n  </w-radio>\n  <w-radio\n    class="d-flex mt1"\n    v-model="dialog.overlayChoice"\n    return-value="rgba(35, 71, 129, 0.5)">\n    Custom color: transparent blue\n  </w-radio>\n  <w-radio\n    class="d-flex mt1"\n    v-model="dialog.overlayChoice"\n    return-value="#e91e63">\n    Custom color: opaque pink\n  </w-radio>\n  <w-radio\n    class="d-flex mt1"\n    v-model="dialog.overlayChoice"\n    return-value="transparent">\n    Custom color: transparent\n  </w-radio>\n\n  <template #actions>\n    <div class="spacer" />\n    <w-button\n      @click="dialog.show = false"\n      bg-color="error"\n      dark>\n      Close\n    </w-button>\n  </template>\n</w-dialog>')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  dialog: {\n    show: false,\n    overlayOpacity: 0.3,\n    overlayChoice: 'opacity'\n  }\n})")]},proxy:!0}])},[n("w-button",{staticClass:"px4",attrs:{"bg-color":"primary",dark:""},on:{click:function(l){e.dialog6.show=!0}}},[e._v("Open control panel")]),n("w-dialog",{attrs:{width:500,"overlay-opacity":"opacity"===e.dialog6.overlayChoice&&e.dialog6.overlayOpacity,"overlay-color":"opacity"!==e.dialog6.overlayChoice&&e.dialog6.overlayChoice||""},scopedSlots:e._u([{key:"title",fn:function(){return[n("w-icon",{staticClass:"mr2"},[e._v("mdi mdi-tune")]),e._v("Control panel")]},proxy:!0},{key:"actions",fn:function(){return[n("div",{staticClass:"spacer"}),n("w-button",{attrs:{"bg-color":"error",dark:""},on:{click:function(l){e.dialog6.show=!1}}},[e._v("Close")])]},proxy:!0}]),model:{value:e.dialog6.show,callback:function(l){e.$set(e.dialog6,"show",l)},expression:"dialog6.show"}},[n("w-radio",{staticClass:"d-flex mt1",attrs:{"return-value":"opacity"},model:{value:e.dialog6.overlayChoice,callback:function(l){e.$set(e.dialog6,"overlayChoice",l)},expression:"dialog6.overlayChoice"}},[e._v("Overlay opacity"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.dialog6.overlayOpacity,expression:"dialog6.overlayOpacity"}],staticClass:"ml2",attrs:{type:"number",step:"0.1",min:"0",max:"1"},domProps:{value:e.dialog6.overlayOpacity},on:{input:function(l){l.target.composing||e.$set(e.dialog6,"overlayOpacity",l.target.value)}}})]),n("w-radio",{staticClass:"d-flex mt1",attrs:{"return-value":"rgba(35, 71, 129, 0.5)"},model:{value:e.dialog6.overlayChoice,callback:function(l){e.$set(e.dialog6,"overlayChoice",l)},expression:"dialog6.overlayChoice"}},[e._v("Custom color: transparent blue")]),n("w-radio",{staticClass:"d-flex mt1",attrs:{"return-value":"#e91e63"},model:{value:e.dialog6.overlayChoice,callback:function(l){e.$set(e.dialog6,"overlayChoice",l)},expression:"dialog6.overlayChoice"}},[e._v("Custom color: opaque pink")]),n("w-radio",{staticClass:"d-flex mt1",attrs:{"return-value":"transparent"},model:{value:e.dialog6.overlayChoice,callback:function(l){e.$set(e.dialog6,"overlayChoice",l)},expression:"dialog6.overlayChoice"}},[e._v("Custom color: transparent")])],1)],1)],1)},o=[],i=(n("caad"),n("d81d"),n("2532"),{data:function(){return{dialog1:{show:!1,fullscreen:!1,persistent:!1,persistentNoAnimation:!1,width:300},dialog2:{show:!1},dialog3:{show:!1},dialog4:{show:!1},dialog5:{show:!1,fullscreen:!1,transition:"fade"},dialog6:{show:!1,overlayOpacity:.3,overlayChoice:"opacity"},transitions:[{label:"fade"},{label:"slide-fade-up"},{label:"slide-fade-down"},{label:"slide-fade-left"},{label:"slide-fade-right"},{label:"scale"},{label:"scale-fade"},{label:"bounce"},{label:"none",value:""}],transitionsForFullscreen:[{label:"slide-up"},{label:"slide-down"},{label:"slide-left"},{label:"slide-right"}]}},computed:{fullscreenTransition:function(){return this.transitionsForFullscreen.map((function(e){return e.label})).includes(this.dialog5.transition)}}}),a=i,s=n("2877"),r=Object(s["a"])(a,t,o,!1,null,null,null);l["default"]=r.exports}}]);
//# sourceMappingURL=dialog-examples-vue.247b0ff5.js.map