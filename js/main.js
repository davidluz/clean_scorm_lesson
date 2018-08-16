$(document).ready(function(){

/*Configurações iniciais*/
currentPage = 1;
setProgressBar();
$("body").fadeIn();	
$("[data-pageID='1']").fadeIn();	

/*Avança telas*/
$(".next").click(function(){
if(currentPage<30){currentPage = currentPage+1;}
var t = "[data-pageID='"+currentPage+"']";
$(".pages").hide();
$(t).fadeIn();
setProgressBar();
});

/*Volta telas*/
$(".prev").click(function(){
if(currentPage>1){currentPage = currentPage-1;}
var t = "[data-pageID='"+currentPage+"']";
$(".pages").hide();
$(t).fadeIn();
setProgressBar();
});

});	


/*Ajusta barra de progresso*/
function setProgressBar(){
//Pega o número de páginas
var numArticles=0;
$(".pages").each(function(i, elem){
numArticles = numArticles+1;
});

//Pega a página atual
var currentArticle=0;
$(".pages").each(function(i, elem){
if($(elem).css("display")=='block'){
currentArticle = $(elem).attr('data-pageID');
}

//Ajusta barra de progresso
var screenCurrentPercent = (currentPage*100)/numArticles;
screenCurrent = screenCurrentPercent+'%';
$("#myBar").css('width',screenCurrent);
});

if(currentArticle==numArticles){
$(".next").hide();
}

else{
$(".next").show();
}

$(".scurrent").html(currentPage);
$(".stotal").html(numArticles);
}
