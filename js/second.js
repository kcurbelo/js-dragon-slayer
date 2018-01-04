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
  


  // Class 1 - Weapon 1 ============================================================
  $( "#c-1-w-1" ).click(function() {
    console.log('Class 3 link clicked');
    // Fades out c-1-w cont
    $( "#c-1-w-cont" ).fadeOut("slow");
    // Fades out c-2-w cont
    $( "#c-2-w-cont" ).fadeOut("slow");
    // Fades out c-3-w cont
    $( "#c-3-w-cont" ).fadeOut("slow");
    // Fades in battle countdown
    $( "#battle-countdown-cont" ).delay("slow").fadeIn("slow");   
    let count=6;
    let counter=setInterval(timer, 1200); //1000 will  run it every 1 second
    function timer(){
      count=count-1;
      if (count <= 0)
      {
         clearInterval(counter);
         console.log('Counter done!')
         // Changes inner html to 'fight' when counter is done
         document.getElementById("countdown-text").innerHTML = "Fight!";
         // Fades out current container
         $( "#battle-countdown-cont" ).delay(1000).fadeOut("slow");
         $( "#select-action-cont" ).delay(2000).fadeIn("slow");
         return;
      }
      //Shows the number of seconds here
      document.getElementById("countdown-text").innerHTML = count;
      }     
  });



  //Character variables

  // Dreagon variables

  // Misc variables

  let randomNumber = Math.random() >= 0.5; 
  let health = 100;
  let damage = 10;
  let dodge = randomNumber;

  let charHealth = 100;
  let dragonDamage = 20;

  // Class 1 weapon 1
  let C1W1 = $(".delete_link").attr("data-value");


  // $(".delete_link").click(function(){
    // weapon1 = $(".delete_link").attr("data-value");
    // alert(weapon1);
  // });

  $( "#u-atk" ).click(function() {
    // When a dodge is unsuccessful do this:
    if (dodge === false) {
      // Random boolean generator
      randomNumber = Math.random() >= 0.5; 
      // Sets dodge equal to that boolean
      dodge = randomNumber;
      // Applys damage to health because the silly dragon forgot to dodge
      health = health - C1W1;
      // Console logs health 
      console.log(health)
    }
    // When a dodge is successful do this:
    else {
      console.log('Dragon dodged and countered hahahaha')
      // Random boolean generator
      randomNumber = Math.random() >= 0.5; 
      // Resets the boolean so that if it is clicked again it will be something else. 
      dodge = randomNumber;
      // Applys damage to health because the silly dragon forgot to dodge
      charHealth = charHealth - dragonDamage; 
      console.log('charHealth is now ' + charHealth)     
    }    
    // When health is 0 do this:
    if (health <= 0 ) {
      console.log('Dead');
      health = 0;
      $( "#u-atk" ).hide();
    }
    if (charHealth <= 0 ) {
      console.log('charDead');
      health = 0;
      $( "#u-atk" ).hide();
    }        
  });







});
