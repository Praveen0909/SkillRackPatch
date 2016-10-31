$(document).ready(function(){
var a=$("#mp")[0];
//console.log($("#mp")[0].getAttribute("type"));


window.onblur=function(){
return false;

};
console.log($("#changed")[0]);
if($("#changed")[0]==undefined)
{
var newBoxDiv = $(document.createElement('div'));
newBoxDiv.after().html('<input type="hidden" id="changed" value="yup">');
newBoxDiv.appendTo("form");

a.setAttribute("type","button");
a.setAttribute("id","efg");
a.setAttribute("name","efg");
console.log("removed");
alert("Patch added successfully");
}
else
{
a=$("#efg")[0];
a.setAttribute("type","submit");
a.setAttribute("id","mp");
a.setAttribute("name","mp");
$("#changed").remove();
console.log("added back");
alert("Patch Removed");
}
//console.log($("#efg")[0].getAttribute("type"));


});