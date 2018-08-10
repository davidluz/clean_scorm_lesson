$(document).ready(function(){

// Global Variables
var myPlayer = videojs('myvideo');
var myPlayerEvents={};
var currentPage = 1;
var currentVideoTime = 0;
var events = [false,false,false,false,false];     

//Control video flow
myPlayer.ready(function () {

this.on('timeupdate', function () {
var currentVideoTime = Math.round(myPlayer.currentTime());
	
if(currentVideoTime==118){
callCustomEvent(2);
}

if(currentVideoTime==44){
$("#b1").css("color","green");
}
if(currentVideoTime==58){
$("#b2").css("color","green");
}
if(currentVideoTime==87){
$("#b3").css("color","green");
}
if(currentVideoTime==118){
$("#b4").css("color","green");
}


})
});

// Call the events 
function callCustomEvent(myEvent){

if(events[myEvent]==false){
events[myEvent]=true;
myPlayer.pause();
$(".question-container").fadeIn();

}

}



$("body").fadeIn();	
$("[data-pageID='1']").fadeIn();	

$(".next").click(function(){

if(currentPage<30){currentPage = currentPage+1;}
var t = "[data-pageID='"+currentPage+"']";
$(".pages").hide();
$(t).fadeIn();
});

$(".prev").click(function(){
if(currentPage>1){currentPage = currentPage-1;}
var t = "[data-pageID='"+currentPage+"']";
$(".pages").hide();
$(t).fadeIn();

});


$("#p1").click(function(){
myPlayer.currentTime(44);
myPlayer.play();
});

$("#p2").click(function(){
myPlayer.currentTime(58);
myPlayer.play();
});

$("#p3").click(function(){
myPlayer.currentTime(87);
});

$("#p4").click(function(){
myPlayer.currentTime(118);
myPlayer.play();
});



$(".response").click(function(){
$(".question-container").hide();	
myPlayer.play();
});


$(".block-video").click(function(){
$(".question-container").hide();
});

});	
