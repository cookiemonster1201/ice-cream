parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"F2IE":[function(require,module,exports) {
var e=document.querySelectorAll(".anim-items");if(e.length>0){function n(){for(var n=0;n<e.length;n++){var o=e[n],i=o.offsetHeight,r=t(o).top,s=window.innerHeight-i/4;i>window.innerHeight&&(s=window.innerHeight-window.innerHeight/4),pageYOffset>r-s&&pageYOffset<r+i?o.classList.add("on-screen"):o.classList.remove("on-screen")}}function t(e){var n=e.getBoundingClientRect(),t=window.pageXOffset||document.documentElement.scrollLeft,o=window.pageYOffset||document.documentElement.scrollTop;return{top:n.top+o,left:n.left+t}}window.addEventListener("scroll",n),setTimeout(function(){n()},500)}
},{}]},{},["F2IE"], null)
//# sourceMappingURL=/ice-cream/scroll-anime.d157ac70.js.map