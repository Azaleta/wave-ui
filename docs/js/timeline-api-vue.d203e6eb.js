(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["timeline-api-vue"],{"72ee":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"w-divider my12"}),s("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),s("alert",{staticClass:"mb6",attrs:{info:""}},[t._v("The props will soon be more detailed.")]),s("api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),s("api",{attrs:{items:t.slots,title:"Slots"}}),s("api",{attrs:{items:t.events,title:"Events"}})],1)},a=[],o=(s("13d5"),s("9dce")),r={},n={item:{description:"Provide a custom template for every item. Applies to all the items, but can be overridden by the <code>item.x</code> slot.",params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot."}},"item.x":{description:'<em class="code">x</em> is an integer starting at <span class="code">1</span>.<br>Provide a custom template for a single item: the item at the index <em class="code">x</em>.',params:{item:"The current item object.",index:"The item index in the array of items. Starts at 1 to be consistent with the <code>item.x</code> slot."}}},c={},l={data:function(){return{propsDescs:r,slots:n}},computed:{props:function(){return o["a"].props},events:function(){return o["a"].emits.reduce((function(t,e){return(t[e]={description:c[e]||""})&&t}),{})}}},m=l,d=s("2877"),p=Object(d["a"])(m,i,a,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=timeline-api-vue.d203e6eb.js.map