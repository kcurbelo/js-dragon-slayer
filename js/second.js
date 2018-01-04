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
    console.log('c-1-w-1 was clicked');
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



  // Misc variables
  let randomNumber = Math.random() >= 0.5; 
  
  // Dragon variables ==========
  let health = 500;
  let dodge = randomNumber;
  let dragonAtkLight = 5;
  let dragonAtkMedium = 10;
  let dragonAtkHeavy = 15;
  let dragonAtkTitle = "Light";

  // User variables ============
  let charHealth = 100;
  let charAtkTitle = "Light";
  let charAtk = 0
  // Weapon variables ==========
  // Class 1 weapon 1


  // Calculates based on what attack user chooses
  $( ".light-atk" ).click(function() {
    // console.log('1');
    charAtk = 10;
    charAtkTitle = "Light";
    userAttack();

  });
  $( ".medium-atk" ).click(function() {
    // console.log('2');
    charAtk = 20;
    charAtkTitle = "Medium";
    userAttack();

  });
  $( ".heavy-atk" ).click(function() {
    // console.log('3');
    charAtk = 30;
    charAtkTitle = "Heavy";
    userAttack();
  }); 

  // Calculates dragon dam

  // $( "#u-atk" ).click(function() {
    function userAttack() {    
      // When a dodge is unsuccessful do this:
      if (dodge === false) {
        // Random boolean generator
        randomNumber = Math.random() >= 0.8; 
        // Sets dodge equal to that boolean
        dodge = randomNumber;
        // Applys damage to health because the silly dragon forgot to dodge
        health = health - charAtk;
          $("#resp-text").html( charAtkTitle + " attack successful!" );
          $("#resp-sub-text").html("Dragon health is now " + health );        
        // Console logs health 
        console.log(health)
      }
      // When a dodge is successful do this:
      else { 
        // Random boolean generator
        randomNumber = Math.random() >= 0.8; 
        // Resets the boolean so that if it is clicked again it will be something else. 
        dodge = randomNumber;
        // Applys damage to health because the silly dragon forgot to dodge
          if (charAtk === 10){
            charHealth = charHealth - dragonAtkLight;
            dragonAtkTitle = "light";
          }
          if (charAtk === 20){
            charHealth = charHealth - dragonAtkMedium;
            dragonAtkTitle = "medium";
          }
          if (charAtk === 30){
            charHealth = charHealth - dragonAtkHeavy;
            dragonAtkTitle = "heavy";
          }
          $("#resp-text").html("Dragon dodged and countered with a " + dragonAtkTitle + " attack" );
          $("#resp-sub-text").html("Your health is now " + charHealth );
        // charHealth = charHealth - dragonDamage; 
        console.log('charHealth is now ' + charHealth)     
      }    
      // When health is 0 do this:
      if (health <= 0 ) {
        console.log('Dead');
        health = 0;
        $( ".light-atk" ).hide();
      }
      if (charHealth <= 0 ) {
        console.log('charDead');
        health = 0;
        $( ".light-atk" ).hide();
      } 
    }       
  // });







});
