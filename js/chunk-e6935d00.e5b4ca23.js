(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e6935d00"],{3092:function(t,i,s){"use strict";var n=s("f372"),a=s.n(n);a.a},8253:function(t,i,s){},8676:function(t,i,s){"use strict";var n=s("8253"),a=s.n(n);a.a},b924:function(t,i,s){"use strict";s.r(i);var n=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"rooms"},[s("div",{staticClass:"section"},[s("h1",[t._v("QUARTOS")]),s("div",{staticClass:"container"},[s("Lightbox",{attrs:{thumbnail:t.images[0],images:t.images}})],1)])])},a=[],e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"lightbox"},[s("a",{staticClass:"w-full",attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.show(i)}}},[s("img",{staticClass:"w-64",attrs:{src:t.thumbnail}})]),t.visible?s("div",{staticClass:"lightbox-open",on:{click:t.hide}},[s("div",{staticClass:"close-light",on:{click:function(i){return i.stopPropagation(),t.hide(i)}}},[t._v("×")]),s("div",{staticClass:"flex"},[s("div",{staticClass:"arrow",class:{invisible:!t.hasPrev()},on:{click:function(i){return i.stopPropagation(),t.prev(i)}}},[s("font-awesome-icon",{attrs:{icon:"arrow-left"}})],1),s("div",{staticClass:"lightbox-image"},[s("img",{attrs:{src:t.images[t.index]}})]),s("div",{staticClass:"arrow",class:{invisible:!t.hasNext()},on:{click:function(i){return i.stopPropagation(),t.next(i)}}},[s("font-awesome-icon",{attrs:{icon:"arrow-right"}})],1)])]):t._e()])},o=[],r={name:"Lightbox",props:{thumbnail:{type:String,required:!0},images:{type:Array,required:!0}},data:function(){return{visible:!1,index:0}},methods:{show:function(){this.visible=!0},hide:function(){this.visible=!1,this.index=0},hasNext:function(){return this.index+1<this.images.length},hasPrev:function(){return this.index-1>=0},next:function(){this.hasNext()&&(this.index+=1)},prev:function(){this.hasPrev()&&(this.index-=1)}}},c=r,l=(s("8676"),s("2877")),u=Object(l["a"])(c,e,o,!1,null,"26c588ed",null),h=u.exports,p={name:"Rooms",components:{Lightbox:h},data:function(){return{images:["https://www.fundospaisagens.com/800x600/wallpaper-artistico-de-luar.jpg","https://www.fundospaisagens.com/800x600/wallpaper-artistico-de-luar.jpg","https://www.fundospaisagens.com/800x600/wallpaper-do-espaco.jpg"]}}},d=p,f=(s("3092"),Object(l["a"])(d,n,a,!1,null,"508368c4",null));i["default"]=f.exports},f372:function(t,i,s){}}]);
//# sourceMappingURL=chunk-e6935d00.e5b4ca23.js.map