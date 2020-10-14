(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["app-index-vue","app-api-vue","app-examples-vue"],{"1a4d":function(t,e,a){},ab9c:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ui-component-title",[t._v("w-app")]),a("examples"),a("api")],1)},s=[],n=a("eaa5"),l=a("fbd6"),i={components:{Examples:n["default"],Api:l["default"]}},c=i,r=a("2877"),v=Object(r["a"])(c,o,s,!1,null,null,null);e["default"]=v.exports},c6ea:function(t,e,a){"use strict";var o=a("1a4d"),s=a.n(o);s.a},eaa5:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("ssh-pre",{attrs:{language:"html-vue"}},[t._v("<w-app>\n  \x3c!-- All your app's content goes here. --\x3e\n</w-app>\n")]),a("alert",{staticClass:"mb2",attrs:{info:""}},[t._v("By default, the "),a("span",{staticClass:"code"},[t._v("w-app")]),t._v(" wrapper will have a flex layout with a column direction,\nand a height of 100% of the full HTML document."),a("br")]),t._m(1),a("title-link",{attrs:{h2:""}},[t._v("Examples of common layouts")]),a("w-flex",{staticClass:"common-layouts mt4",attrs:{gap:6,wrap:"","basis-zero":""}},[a("w-badge",{attrs:{"bg-color":"orange",color:"white",overlap:"",value:1}},[a("fieldset",{staticClass:"app"},[a("legend",[t._v("w-app")]),a("section",{staticClass:"header"},[t._v("Header")]),a("div",{staticClass:"w-flex"},[a("section",{staticClass:"nav-menu block"},[t._v("Nav menu")]),a("section",{staticClass:"content block grow"},[t._v("Main content")])]),a("section",{staticClass:"footer"},[t._v("Footer")])])]),a("w-badge",{attrs:{"bg-color":"orange",color:"white",overlap:"",value:2}},[a("fieldset",{staticClass:"app"},[a("legend",[t._v("w-app")]),a("div",{staticClass:"w-flex"},[a("section",{staticClass:"nav-menu block"},[t._v("Nav menu")]),a("div",{staticClass:"grow"},[a("section",{staticClass:"header"},[t._v("Header")]),a("section",{staticClass:"content block grow"},[t._v("Main content")]),a("section",{staticClass:"footer"},[t._v("Footer")])])])])]),a("w-badge",{attrs:{"bg-color":"orange",color:"white",overlap:"",value:3}},[a("fieldset",{staticClass:"app"},[a("legend",[t._v("w-app")]),a("section",{staticClass:"header"},[t._v("Header")]),a("section",{staticClass:"content block grow"},[t._v("Main content")]),a("section",{staticClass:"footer"},[t._v("Footer")])])]),a("w-badge",{attrs:{"bg-color":"orange",color:"white",overlap:"",value:4}},[a("fieldset",{staticClass:"app"},[a("legend",[t._v("w-app")]),a("section",{staticClass:"header"},[t._v("Header")]),a("div",{staticClass:"w-flex"},[a("section",{staticClass:"content block grow"},[t._v("Main content")]),a("section",{staticClass:"nav-menu block"},[t._v("Nav menu")])])])])],1),a("ul",{staticClass:"mt6"},[a("li",[t._v("In the above cases\n"),a("w-badge",{attrs:{inline:"","bg-color":"orange",color:"white",value:1}}),t._v(",\n"),a("w-badge",{attrs:{inline:"","bg-color":"orange",color:"white",value:2}}),t._v(",\n"),a("w-badge",{attrs:{inline:"","bg-color":"orange",color:"white",value:3}}),t._v(",\nyou always want the footer to stick to the bottom of the screen."),a("br"),t._v("\nBut if possible without covering the content (so not "),a("code",[t._v("position: absolute")]),t._v(")."),a("br"),t._v("\nAlso you don't know the exact height of the footer since it may change if the screen is too\nsmall and the content flows onto multiple lines."),a("br"),t._v("\nFor all these reasons, the best layout is to have a "),a("code",[t._v("display: flex")]),t._v(" with a\n"),a("code",[t._v("flex-direction: column")]),t._v(" and "),a("code",[t._v("flex-grow: 1")]),t._v(" on the main content\n(and on the nav-menu in case 1 and 2).\n")],1),a("li",{staticClass:"mt2"},[t._v("In "),a("w-badge",{attrs:{inline:"","bg-color":"orange",color:"white",value:4}}),t._v(", you may also want to have\na flex column layout in the case your nav menu must remain in the screen while the main content\nis scrolled, for instance.\n")],1),a("li",{staticClass:"mt2"},[t._v("In "),a("w-badge",{attrs:{inline:"","bg-color":"orange",color:"white",value:3}}),t._v(", if you don't need to have the\nfooter always at the bottom of the page, a simple block layout would suffice. For that you can add\nthe "),a("code",[t._v("block")]),t._v(" prop on the "),a("code",[t._v("w-app")]),t._v(" component.\n")],1),a("alert",{attrs:{tip:""}},[t._v("In all the layouts above, and in your app, the "),a("code",[t._v("w-flex")]),t._v(" component will be very helpful to\nquickly switch to a flex layout. You can pass it props such as "),a("code",[t._v("column")]),t._v(", "),a("code",[t._v("wrap")]),t._v(",\n"),a("code",[t._v("basis-zero")]),t._v(" and more. Discover all the options in the\n"),a("router-link",{staticClass:"mx1",attrs:{to:"/layout--flex"}},[t._v("Layout > Flex")]),t._v(" knowledge base page.")],1)],1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("This tag is required in your app for Wave UI proper functioning."),a("br"),t._v("\nYou should place it "),a("strong",[t._v("at the root of your app")]),t._v(".\n")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("That will help a faster design in most cases, allowing a footer to always stick at the bottom\nof the screen without hiding any content."),a("br"),t._v("\nIf you prefer to have a display: block layout, you can set the "),a("span",{staticClass:"code"},[t._v("block")]),t._v(" prop to true.\n")])}],n=(a("c6ea"),a("2877")),l={},i=Object(n["a"])(l,o,s,!1,null,null,null);e["default"]=i.exports},fbd6:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"w-divider my12"}),a("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),a("api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),a("api",{attrs:{items:t.slots,title:"Slots"}}),a("api",{attrs:{items:t.events,title:"Events"}})],1)},s=[],n=(a("13d5"),a("e523")),l={block:"Sets the layout to <code>display: block</code>. By default the layout is: <code>display: flex</code>, <code>flex-direction: column</code>.",dark:"Coming soon."},i={default:{description:"The content of the app."}},c={},r={data:function(){return{propsDescs:l,slots:i}},computed:{props:function(){return n["a"].props},events:function(){return(n["a"].emits||[]).reduce((function(t,e){return(t[e]={description:c[e]||""})&&t}),{})}}},v=r,u=a("2877"),p=Object(u["a"])(v,o,s,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=app-index-vue.45714984.js.map