$(document).ready(function(){


var state=$('[name="javax.faces.ViewState"]')[0];
//console.log(state);


var minrem=$("#minrem")[0];
//console.log(minrem);

var secondsrem=$("#secondsrem")[0];


if(minrem!==undefined && secondsrem!==undefined && state!==undefined )
{
alert("extension");
minrem.setAttribute("value","2");
secondsrem.setAttribute("value","122");
state.setAttribute("value","69kDFGU3LL2DVfyQCX5TmyRTwueFpUJme5ADncyJ2R0K04OA");

}

//$("#trem")[0].setAttribute("value","false");


//var a=$("#abc")[0];
//console.log($("#abc")[0].getAttribute("type"));
//document.body.style.backgroundColor="red";


window.onblur=function(){
//alert("extension");
return false;

};


//a.setAttribute("type","button");
//a.setAttribute("id","efg");
//console.log($("#efg")[0].getAttribute("type"));


});