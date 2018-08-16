var scorm = pipwerks.SCORM;  
var lmsConnected = false;


function handleError(msg){
   alert(msg);
   window.close();
}

function finalizarScorm(){
scorm.set("cmi.core.lesson_status", "completed");
scorm.set("cmi.core.score.raw",100);
scorm.save();
}


function initCourse(){
   lmsConnected = scorm.init();
   if(lmsConnected){
      var completionstatus = scorm.get("cmi.core.lesson_status");
     
   }
}


function setComplete(){
 
   if(lmsConnected){
   var success = scorm.set("cmi.core.lesson_status", "completed");
   if(success){
    scorm.save();
    } 
   }
}

$(document).ready(function() {
initCourse();
var pontos = 0;
scorm.set("cmi.core.score.raw",70);
scorm.save();
});

