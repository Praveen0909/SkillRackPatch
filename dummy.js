$(document).ready(function(){
var a=$("#abc")[0];
//console.log($("#abc")[0].getAttribute("type"));


window.onblur=function(){
//alert("extension");
return false;

};


a.setAttribute("type","button");
a.setAttribute("id","efg");
console.log($("#efg")[0].getAttribute("type"));


});