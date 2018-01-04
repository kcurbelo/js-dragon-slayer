$(document).ready(function() {


  // Choose class ============================================================
  $( "#c-1-link" ).click(function() {
    console.log('Class 1 link clicked');
    $( "#choice-1-cont" ).fadeOut("slow");
    $( "#c-1-w-cont" ).delay("slow").fadeIn("slow");
  });




  $( "#c-2-link" ).click(function() {
    console.log('Class 2 link clicked');
    $( "#choice-1-cont" ).fadeOut("slow");
    $( "#c-2-w-cont" ).delay("slow").fadeIn("slow");    
  });






  $( "#c-3-link" ).click(function() {
    console.log('Class 3 link clicked');
    $( "#choice-1-cont" ).fadeOut("slow");
    $( "#c-3-w-cont" ).delay("slow").fadeIn("slow");    
  }); 
  

  $( "#c-1-w-1 " ).click(function() {
    console.log('Class 3 link clicked');
    // $( "#choice-1-cont" ).fadeOut("slow");
    $( "#battle-countdown-cont" ).delay("slow").fadeIn("slow");    
  });   



  let count=6;
  let counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer(){


  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     console.log('Counter done!')
     return;
  }
  
  document.getElementById("demo").innerHTML = count;
  //Do code for showing the number of seconds here
}


});
