(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["transitions"],{"2c89":function(t,n,i){"use strict";var e=i("df11"),a=i.n(e);a.a},df11:function(t,n,i){},e66a:function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"ovh"},[i("title-link",{staticClass:"mt4",attrs:{h1:""}},[t._v("Transitions")]),i("p",[t._v("Here is a list of all the available transition components.")]),t._m(0),i("title-link",{attrs:{h2:""}},[t._v("Transitions showcase")]),i("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleFade = !toggleFade"\n    color="primary"\n    outline>\n    Fade '+t._s("{{ toggleFade ? 'out' : 'in' }}")+'\n  </w-button>\n  <w-transition-fade>\n    <div class="transition-box" v-if="toggleFade">Fading transition</div>\n  </w-transition-fade>\n</w-flex>\n\n<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleScale = !toggleScale"\n    color="primary"\n    outline>\n    Scale '+t._s("{{ toggleScale ? 'out' : 'in' }}")+'\n  </w-button>\n  <w-transition-scale>\n    <div class="transition-box" v-if="toggleScale">Scaling transition</div>\n  </w-transition-scale>\n</w-flex>\n\n<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleScaleFade = !toggleScaleFade"\n    color="primary"\n    outline>\n    Scale fade '+t._s("{{ toggleScaleFade ? 'out' : 'in' }}")+'\n  </w-button>\n  <w-transition-scale-fade>\n    <div class="transition-box" v-if="toggleScaleFade">Scaling & fading transition</div>\n  </w-transition-scale-fade>\n</w-flex>\n\n<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleBounce = !toggleBounce"\n    color="primary"\n    outline>\n    Bounce '+t._s("{{ toggleBounce ? 'out' : 'in' }}")+'\n  </w-button>\n  <w-transition-bounce>\n    <div class="transition-box" v-if="toggleBounce">Bouncing transition</div>\n  </w-transition-bounce>\n</w-flex>\n\n<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleTwist = !toggleTwist"\n    color="primary"\n    outline>\n    Twist '+t._s("{{ toggleTwist ? 'out' : 'in' }}")+'\n  </w-button>\n  <w-transition-twist>\n    <div class="transition-box" v-if="toggleTwist">Twisting transition</div>\n  </w-transition-twist>\n</w-flex>\n\n<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleExpandX = !toggleExpandX"\n    color="primary"\n    outline>\n    '+t._s("{{ toggleExpandX ? 'Collapse' : 'Expand' }}")+' X\n  </w-button>\n  <w-transition-expand x>\n    <div class="transition-box text-nowrap" v-if="toggleExpandX">X-expanding transition</div>\n  </w-transition-expand>\n</w-flex>\n\n<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleExpandY = !toggleExpandY"\n    color="primary"\n    outline>\n    '+t._s("{{ toggleExpandY ? 'Collapse' : 'Expand' }}")+' Y\n  </w-button>\n  <w-transition-expand y>\n    <div class="transition-box" v-if="toggleExpandY">Y-expanding transition</div>\n  </w-transition-expand>\n</w-flex>\n\n<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleExpandXY = !toggleExpandXY"\n    color="primary"\n    outline>\n    '+t._s("{{ toggleExpandXY ? 'Collapse' : 'Expand' }}")+' X & Y\n  </w-button>\n  <w-transition-expand>\n    <div class="transition-box text-nowrap" v-if="toggleExpandXY">X & Y expanding transition</div>\n  </w-transition-expand>\n</w-flex>\n\n<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleSlideFadeDown = !toggleSlideFadeDown"\n    color="primary"\n    outline>\n    Slide fade '+t._s("{{ toggleSlideFadeDown ? 'up' : 'down' }}")+'\n  </w-button>\n  <w-transition-slide-fade>\n    <div class="transition-box text-nowrap" v-if="toggleSlideFadeDown">Slide fade down transition</div>\n  </w-transition-slide-fade>\n</w-flex>\n\n<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleSlideFadeRight = !toggleSlideFadeRight"\n    color="primary"\n    outline>\n    Slide fade '+t._s("{{ toggleSlideFadeRight ? 'left' : 'right' }}")+'\n  </w-button>\n  <w-transition-slide-fade right>\n    <div class="transition-box text-nowrap" v-if="toggleSlideFadeRight">Slide fade down transition</div>\n  </w-transition-slide-fade>\n</w-flex>\n')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  toggleFade: false,\n  toggleScale: false,\n  toggleScaleFade: false,\n  toggleBounce: false,\n  toggleTwist: false,\n  toggleExpandX: false,\n  toggleExpandY: false,\n  toggleExpandXY: false,\n  toggleSlideFadeDown: false,\n  toggleSlideFadeRight: false\n})\n")]},proxy:!0},{key:"css",fn:function(){return[t._v(".transition-toggle {\n  margin: 12px 24px 12px 0;\n  width: 7.7em;\n}\n\n.transition-box {\n  background-color: #eee;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 1em;\n  width: 14em;\n  text-align: center;\n}\n")]},proxy:!0}])},[i("w-flex",{attrs:{"align-center":""}},[i("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(n){t.toggleFade=!t.toggleFade}}},[t._v("Fade "+t._s(t.toggleFade?"out":"in"))]),i("w-transition-fade",[t.toggleFade?i("div",{staticClass:"transition-box"},[t._v("Fading transition")]):t._e()])],1),i("w-flex",{attrs:{"align-center":""}},[i("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(n){t.toggleScale=!t.toggleScale}}},[t._v("Scale "+t._s(t.toggleScale?"out":"in"))]),i("w-transition-scale",[t.toggleScale?i("div",{staticClass:"transition-box"},[t._v("Scaling transition")]):t._e()])],1),i("w-flex",{attrs:{"align-center":""}},[i("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(n){t.toggleScaleFade=!t.toggleScaleFade}}},[t._v("Scale fade "+t._s(t.toggleScaleFade?"out":"in"))]),i("w-transition-scale-fade",[t.toggleScaleFade?i("div",{staticClass:"transition-box"},[t._v("Scaling & fading transition")]):t._e()])],1),i("w-flex",{attrs:{"align-center":""}},[i("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(n){t.toggleBounce=!t.toggleBounce}}},[t._v("Bounce "+t._s(t.toggleBounce?"out":"in"))]),i("w-transition-bounce",[t.toggleBounce?i("div",{staticClass:"transition-box"},[t._v("Bouncing transition")]):t._e()])],1),i("w-flex",{attrs:{"align-center":""}},[i("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(n){t.toggleTwist=!t.toggleTwist}}},[t._v("Twist "+t._s(t.toggleTwist?"out":"in"))]),i("w-transition-twist",[t.toggleTwist?i("div",{staticClass:"transition-box"},[t._v("Twisting transition")]):t._e()])],1),i("w-flex",{attrs:{"align-center":""}},[i("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(n){t.toggleExpandX=!t.toggleExpandX}}},[t._v(t._s(t.toggleExpandX?"Collapse":"Expand")+" X")]),i("w-transition-expand",{attrs:{x:""}},[t.toggleExpandX?i("div",{staticClass:"transition-box text-nowrap"},[t._v("X-expanding transition")]):t._e()])],1),i("w-flex",{attrs:{"align-center":""}},[i("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(n){t.toggleExpandY=!t.toggleExpandY}}},[t._v(t._s(t.toggleExpandY?"Collapse":"Expand")+" Y")]),i("w-transition-expand",{attrs:{y:""}},[t.toggleExpandY?i("div",{staticClass:"transition-box"},[t._v("Y-expanding transition")]):t._e()])],1),i("w-flex",{attrs:{"align-center":""}},[i("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(n){t.toggleExpandXY=!t.toggleExpandXY}}},[t._v(t._s(t.toggleExpandXY?"Collapse":"Expand")+" X & Y")]),i("w-transition-expand",[t.toggleExpandXY?i("div",{staticClass:"transition-box text-nowrap"},[t._v("X & Y expanding transition")]):t._e()])],1),i("w-flex",{attrs:{"align-center":""}},[i("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(n){t.toggleSlideFadeDown=!t.toggleSlideFadeDown}}},[t._v("Slide fade "+t._s(t.toggleSlideFadeDown?"up":"down"))]),i("w-transition-slide-fade",[t.toggleSlideFadeDown?i("div",{staticClass:"transition-box text-nowrap"},[t._v("Slide fade down transition")]):t._e()])],1),i("w-flex",{attrs:{"align-center":""}},[i("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:""},on:{click:function(n){t.toggleSlideFadeRight=!t.toggleSlideFadeRight}}},[t._v("Slide fade "+t._s(t.toggleSlideFadeRight?"left":"right"))]),i("w-transition-slide-fade",{attrs:{right:""}},[t.toggleSlideFadeRight?i("div",{staticClass:"transition-box text-nowrap"},[t._v("Slide fade right transition")]):t._e()])],1)],1),t._m(1),i("title-link",{attrs:{h2:"",slug:"the-expand-transition"}},[t._v("The "),i("span",{staticClass:"code"},[t._v("expand")]),t._v(" transition")]),i("p",[t._v("The great thing with Wave UI's expand transition is that it also animates any margin or padding on the\ntransitioning element! Look at this one:")]),i("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-flex align-center>\n  <w-button\n    class="transition-toggle"\n    @click="toggleExpandXY = !toggleExpandXY"\n    color="primary"\n    outline\n    width="7.3em">\n    '+t._s(t.toggleExpandXY?"Collapse":"Expand")+' X & Y\n  </w-button>\n  <w-transition-expand :duration="2000">\n    <div\n      v-if="toggleExpandXY"\n      class="transition-box pa6 ma10 yellow-light5--bg"\n      style="width: auto">\n      <div class="amber-light4--bg pa2">\n        X & Y expanding transition\n      </div>\n    </div>\n  </w-transition-expand>\n</w-flex>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  toggleExpandXY: false\n})")]},proxy:!0},{key:"css",fn:function(){return[t._v(".transition-toggle {margin: 12px 24px 12px 0;}\n\n.transition-box {\n  background-color: #eee;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 1em;\n  width: 14em;\n  text-align: center;\n}\n\n.transition-box div {\n  overflow: hidden;\n  white-space: nowrap;\n  width: 200px;\n}\n")]},proxy:!0}])},[i("w-flex",{attrs:{"align-center":""}},[i("w-button",{staticClass:"transition-toggle",attrs:{color:"primary",outline:"",width:"7.3em"},on:{click:function(n){t.toggleExpandXY2=!t.toggleExpandXY2}}},[t._v(t._s(t.toggleExpandXY2?"Collapse":"Expand")+" X & Y")]),i("w-transition-expand",{attrs:{duration:2e3}},[t.toggleExpandXY2?i("div",{staticClass:"transition-box pa6 ma10 yellow-light5--bg",staticStyle:{width:"auto"}},[i("div",{staticClass:"amber-light4--bg pa2",staticStyle:{overflow:"hidden","white-space":"nowrap",width:"200px"}},[t._v("X & Y expanding transition")])]):t._e()])],1)],1),i("alert",{attrs:{tip:""}},[t._v("When using the x or xy expand transition, you may want to prevent the content to wrap to a new line while\nthe animation, like in the above example.\nTo do so, you can add the "),i("span",{staticClass:"code"},[t._v("text-nowrap")]),t._v(" class on the element being transitioned.\n")]),i("title-link",{attrs:{h2:"",slug:"the-slide-transition"}},[t._v("The "),i("span",{staticClass:"code"},[t._v("slide")]),t._v(" transition")]),t._m(2),i("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<div style="height: 90px">\n  <w-button class="mb2" @click="showCard = !showCard">\n    '+t._s("{{ showCard ? 'Hide' : 'Show' }}")+' Card\n  </w-button>\n  <w-transition-slide left>\n    <w-card v-if="showCard" class="primary-light3--bg white">\n      <div class="title3">A sliding card.</div>\n    </w-card>\n  </w-transition-slide>\n</div>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  showCard: false\n})\n")]},proxy:!0}])},[i("div",{staticClass:"wrapper",staticStyle:{height:"90px"}},[i("w-button",{staticClass:"mb2",on:{click:function(n){t.showCard=!t.showCard}}},[t._v(t._s(t.showCard?"Hide":"Show")+" Card")]),i("w-transition-slide",{attrs:{left:""}},[t.showCard?i("w-card",{staticClass:"primary-light3--bg white"},[i("div",{staticClass:"title3"},[t._v("A sliding card.")])]):t._e()],1)],1)]),i("title-link",{attrs:{h2:""}},[t._v("Transition duration")]),t._m(3),i("p",[t._v("The expand transition being fully Javascript driven, it accepts a duration parameter in milliseconds.\nSo you don't need to override the duration from a CSS rule.")])],1)},a=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("ul",[i("li",[i("code",[t._v("w-transition-fade")])]),i("li",{staticClass:"mt1"},[i("code",[t._v("w-transition-scale")])]),i("li",{staticClass:"mt1"},[i("code",[t._v("w-transition-scale-fade")])]),i("li",{staticClass:"mt1"},[i("code",[t._v("w-transition-bounce")])]),i("li",{staticClass:"mt1"},[i("code",[t._v("w-transition-twist")])]),i("li",{staticClass:"mt1"},[i("code",[t._v("w-transition-expand")])]),i("li",{staticClass:"mt1"},[i("code",[t._v("w-transition-slide")])]),i("li",{staticClass:"mt1"},[i("code",[t._v("w-transition-slide-fade")])])])},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("p",[i("strong",{staticClass:"mr1"},[t._v("Note:")]),t._v("the "),i("span",{staticClass:"code"},[t._v("slide-fade")]),t._v(" transition take the direction in parameter, e.g. "),i("span",{staticClass:"code"},[t._v("left")]),t._v(",\n"),i("span",{staticClass:"code"},[t._v("right")]),t._v(", "),i("span",{staticClass:"code"},[t._v("up")]),t._v(", "),i("span",{staticClass:"code"},[t._v("down")]),t._v(" and defaults to "),i("span",{staticClass:"code"},[t._v("down")]),t._v(".")])},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("p",[t._v("The slide transition is only designed for elements sliding from outside the view into the view or\nvice-versa, they will slide from 0% visibility to 100% visibility."),i("br"),t._v("\nIt works well for full screen elements or elements that are in a hidden-overflow container like\nin this example.")])},function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("p",[t._v("You can easily override the default transition/animation duration by setting an explicit\nCSS transition/animation duration on the element being transitioned:\n"),i("span",{staticClass:"code"},[t._v('style="animation-duration: 3s"')]),t._v(".")])}],o={data:function(){return{toggleFade:!1,toggleScale:!1,toggleScaleFade:!1,toggleBounce:!1,toggleTwist:!1,toggleExpandX:!1,toggleExpandY:!1,toggleExpandXY:!1,toggleExpandXY2:!1,toggleSlideFadeDown:!1,toggleSlideFadeRight:!1,showCard:!1}}},l=o,s=(i("2c89"),i("2877")),r=Object(s["a"])(l,e,a,!1,null,null,null);n["default"]=r.exports}}]);
//# sourceMappingURL=transitions.6ab47294.js.map