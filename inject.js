$(document).ready(function(){
function tempAlert(msg,duration)
{
 var el = document.createElement("div");
 el.setAttribute("style","position:absolute;top:40%;left:50%;background-color:white;height:100px;-webkit-box-shadow: 0px 0px 13px 12px rgba(161,161,161,1);-moz-box-shadow: 0px 0px 13px 12px rgba(161,161,161,1);box-shadow: 0px 0px 13px 12px rgba(161,161,161,1);");
 el.innerHTML = "<div style='margin-top:25%;margin-left:25%;'>"+msg+"</div>";
 setTimeout(function(){
  el.parentNode.removeChild(el);
 },duration);
 document.body.appendChild(el);
}

function remover(){
  $("#j_id_2o").remove();
  $("#j_id_29").remove();
  $("#j_id_2t").remove();	
  $("#j_id_2o_modal").remove();
  $(".ui-dialog-mask").remove();
	setTimeout(remover,1001);	
 }

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
 setTimeout(remover,1001);
}
else
{
a=$("#efg")[0];
a.setAttribute("type","submit");
a.setAttribute("id","mp");
a.setAttribute("name","mp");
$("#changed").remove();
console.log("added back");
//alert("Patch Removed");
tempAlert("Patch Removed",2000);
}
//console.log($("#efg")[0].getAttribute("type"));


});
