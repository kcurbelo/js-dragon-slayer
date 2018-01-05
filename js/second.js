$(document).ready(function() {
  // ============================================================
  // Hover css for class selection 
  // ============================================================
  // c-1 link hover ============
  $( "#c-1-link" ).hover(
    function() {
      $( "#c-1-img" ).addClass("char-select-bor");
    }, 
    function() {
      $( "#c-1-img" ).removeClass("char-select-bor");
    }
  );
  // c-2 link hover ============
  $( "#c-2-link" ).hover(
    function() {
      $( "#c-2-img" ).addClass("char-select-bor");
    }, 
    function() {
      $( "#c-2-img" ).removeClass("char-select-bor");
    }
  );
  // c-3 link hover ============
  $( "#c-3-link" ).hover(
    function() {
      $( "#c-3-img" ).addClass("char-select-bor");
    }, 
    function() {
      $( "#c-3-img" ).removeClass("char-select-bor");
    }
  );
  // ============================================================
  // Hover css for weapon selection selection - class 1
  // ============================================================
  // c-1-w-1 link hover ============
  $( "#c-1-w-1" ).hover(
    function() {
      $( "#c-1-w-1-img" ).addClass("char-select-bor");
    }, 
    function() {
      $( "#c-1-w-1-img" ).removeClass("char-select-bor");
    }
  );
  // c-1-w-2 link hover ============
  $( "#c-1-w-2" ).hover(
    function() {
      $( "#c-1-w-2-img" ).addClass("char-select-bor");
    }, 
    function() {
      $( "#c-1-w-2-img" ).removeClass("char-select-bor");
    }
  );
  // c-1-w-3 link hover ============
  $( "#c-1-w-3" ).hover(
    function() {
      $( "#c-1-w-3-img" ).addClass("char-select-bor");
    }, 
    function() {
      $( "#c-1-w-3-img" ).removeClass("char-select-bor");
    }
  );
  // ============================================================
  // Hover css for weapon selection selection - class 2
  // ============================================================
  // c-2-w-1 link hover ============
  $( "#c-2-w-1" ).hover(
    function() {
      $( "#c-2-w-1-img" ).addClass("char-select-bor");
    }, 
    function() {
      $( "#c-2-w-1-img" ).removeClass("char-select-bor");
    }
  );
  // c-2-w-2 link hover ============
  $( "#c-2-w-2" ).hover(
    function() {
      $( "#c-2-w-2-img" ).addClass("char-select-bor");
    }, 
    function() {
      $( "#c-2-w-2-img" ).removeClass("char-select-bor");
    }
  );
  // c-3-w-3 link hover ============
  $( "#c-2-w-3" ).hover(
    function() {
      $( "#c-2-w-3-img" ).addClass("char-select-bor");
    }, 
    function() {
      $( "#c-2-w-3-img" ).removeClass("char-select-bor");
    }
  );

  // ============================================================
  // Hover css for weapon selection selection - class 3
  // ============================================================
  // c-3-w-1 link hover ============
  $( "#c-3-w-1" ).hover(
    function() {
      $( "#c-3-w-1-img" ).addClass("char-select-bor");
    }, 
    function() {
      $( "#c-3-w-1-img" ).removeClass("char-select-bor");
    }
  );
  // c-3-w-2 link hover ============
  $( "#c-3-w-2" ).hover(
    function() {
      $( "#c-3-w-2-img" ).addClass("char-select-bor");
    }, 
    function() {
      $( "#c-3-w-2-img" ).removeClass("char-select-bor");
    }
  );
  // c-3-w-3 link hover ============
  $( "#c-3-w-3" ).hover(
    function() {
      $( "#c-3-w-3-img" ).addClass("char-select-bor");
    }, 
    function() {
      $( "#c-3-w-3-img" ).removeClass("char-select-bor");
    }
  );

  // ============================================================
  // Choose class functions
  // ============================================================
  $( "#c-1-link" ).click(function() {
    console.log('Class 1 link clicked');
    $( "#choice-1-cont" ).fadeOut("slow");
    $( "#c-1-w-cont" ).delay("slow").fadeIn("slow");
    // Hide other images
    hideClassesImgCont()
    showC1WImgCont();
  });

  $( "#c-2-link" ).click(function() {
    console.log('Class 2 link clicked');
    $( "#choice-1-cont" ).fadeOut("slow");
    $( "#c-2-w-cont" ).delay("slow").fadeIn("slow"); 
    // Hide other images
    hideClassesImgCont();
    showC2WImgCont();       
  });

  $( "#c-3-link" ).click(function() {
    console.log('Class 3 link clicked');
    $( "#choice-1-cont" ).fadeOut("slow");
    $( "#c-3-w-cont" ).delay("slow").fadeIn("slow"); 
    // Hide other images
    hideClassesImgCont();
    showC3WImgCont();     
  }); 

  // ============================================================
  // Show/hide images functions
  // ============================================================
  function hideClassesImgCont() {
    $( "#classes-img-cont" ).hide();
  }
  // Shows classes weapon containers ===================
  // Shows class 1 weapon cont
  function showC1WImgCont() {
    $( "#c-1-weapons-cont" ).show();
  }
  // Shows class 2 weapon cont
  function showC2WImgCont() {
    $( "#c-2-weapons-cont" ).show();
  }
  // Shows class 3 weapon cont
  function showC3WImgCont() {
    $( "#c-3-weapons-cont" ).show();
  } 
  // hides class 1 weapon images ===================
  function hideC1W1Img() {
    $( "#c-1-w-1-img" ).hide();
  } 
  function hideC1W2Img() {
    $( "#c-1-w-2-img" ).hide();
  }  
  function hideC1W3Img() {
    $( "#c-1-w-3-img" ).hide();
  }   

  // hides class 2 weapon images ===================
  function hideC2W1Img() {
    $( "#c-2-w-1-img" ).hide();
  } 
  function hideC2W2Img() {
    $( "#c-2-w-2-img" ).hide();
  }  
  function hideC2W3Img() {
    $( "#c-2-w-3-img" ).hide();
  }   

  // hides class 3 weapon images ===================
  function hideC3W1Img() {
    $( "#c-3-w-1-img" ).hide();
  } 
  function hideC3W2Img() {
    $( "#c-3-w-2-img" ).hide();
  }  
  function hideC3W3Img() {
    $( "#c-3-w-3-img" ).hide();
  }     

  // ============================================================
  // Class 1 - for countdown
  // ============================================================
  // Runs countdown after Class 1 - Weapon 1 is chosen =========================================
  $( "#c-1-w-1" ).click(function() {
    console.log('c-1-w-1 was clicked');
    // Hides class selection container
    hideClassCont();
    // Fades in battle countdown
    showBattleCDCont(); 
    // Starts countdown timer
    startCountdown();
    // Shows class 1 weapon attacks container
    showC1WAtks();
    // Hides other class 1 weapon images
    // hideC1W1Img();
    hideC1W2Img();
    hideC1W3Img(); 
  });
  // Runs countdown after Class 1 - Weapon 2 is chosen =========================================
  $( "#c-1-w-2" ).click(function() {
    console.log('c-1-w-2 was clicked');
    hideClassCont();
    showBattleCDCont(); 
    startCountdown();
    showC1WAtks();
    hideC1W1Img();
    // hideC1W2Img();
    hideC1W3Img();    
  });  
  // Runs countdown after Class 1 - Weapon 3 is chosen =========================================
  $( "#c-1-w-3" ).click(function() {
    console.log('c-1-w-3 was clicked');
    hideClassCont();
    showBattleCDCont(); 
    startCountdown();
    hideC1W1Img();
    hideC1W2Img();
    // hideC1W3Img();  
  }); 
  // ============================================================
  // Class 2 - for countdown 
  // ============================================================
  // Runs countdown after Class 2 - Weapon 1 is chosen =========================================
  $( "#c-2-w-1" ).click(function() {
    console.log('c-2-w-1 was clicked');
    hideClassCont();
    showBattleCDCont(); 
    startCountdown();
    showC2WAtks();
    // hideC2W1Img();
    hideC2W2Img();
    hideC2W3Img();
  });     
  // Runs countdown after Class 2 - Weapon 2 is chosen =========================================
  $( "#c-2-w-2" ).click(function() {
    console.log('c-2-w-2 was clicked');
    hideClassCont();
    showBattleCDCont(); 
    startCountdown();
    showC2WAtks();
    hideC2W1Img();
    // hideC2W2Img();
    hideC2W3Img();    
  }); 
  // Runs countdown after Class 2 - Weapon 3 is chosen =========================================
  $( "#c-2-w-3" ).click(function() {
    console.log('c-2-w-3 was clicked');
    hideClassCont();
    showBattleCDCont(); 
    startCountdown();
    showC2WAtks();
    hideC2W1Img();
    hideC2W2Img();
    // hideC2W3Img();    
  });
  // ============================================================
  // Class 3 - for countdown
  // ============================================================
  // Runs countdown after Class 3 - Weapon 1 is chosen =========================================
  $( "#c-3-w-1" ).click(function() {
    console.log('c-3-w-1 was clicked');
    hideClassCont();
    showBattleCDCont(); 
    startCountdown();
    showC3WAtks();
    // hideC3W1Img();
    hideC3W2Img();
    hideC3W3Img();    
  });     
  // Runs countdown after Class 3 - Weapon 2 is chosen =========================================
  $( "#c-3-w-2" ).click(function() {
    console.log('c-3-w-2 was clicked');
    hideClassCont();
    showBattleCDCont(); 
    startCountdown();
    showC3WAtks();
    hideC3W1Img();
    // hideC3W2Img();
    hideC3W3Img();     
  }); 
  // Runs countdown after Class 3 - Weapon 3 is chosen =========================================
  $( "#c-3-w-3" ).click(function() {
    console.log('c-3-w-3 was clicked');
    hideClassCont();
    showBattleCDCont(); 
    startCountdown();
    showC3WAtks();
    hideC3W1Img();
    hideC3W2Img();
    // hideC3W3Img();     
  });    

  // ============================================================
  // Misc functions to shorten things 
  // ============================================================
  // Function to hide containers after countdown
  function hideClassCont() {  
    // Fades out c-1-w cont
    $( "#c-1-w-cont" ).fadeOut("slow");
    // Fades out c-2-w cont
    $( "#c-2-w-cont" ).fadeOut("slow");
    // Fades out c-3-w cont
    $( "#c-3-w-cont" ).fadeOut("slow");
  } 
  // Show battle countdown
  function showBattleCDCont() {
    $( "#battle-countdown-cont" ).delay("slow").fadeIn("slow");
  }
  // Show class 1 attacks list
  function showC1WAtks() {
    $( "#c-1-atks-cont" ).fadeIn("slow");
  }
  // Show class 2 attacks list
  function showC2WAtks() {
    $( "#c-2-atks-cont" ).fadeIn("slow");
  }
  // Show class 3 attacks list
  function showC3WAtks() {
    $( "#c-3-atks-cont" ).fadeIn("slow");
  } 
    
  
  // ============================================================
  // Function to start coutdown
  // ============================================================
  function startCountdown() {   
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
  }


  // ============================================================
  // Attack sequence function
  // ============================================================
  // Misc variables ============
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
      $("#dragon-hp").html( health + "/500");        
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
        $("#char-hp").html( charHealth + "/100");
      // charHealth = charHealth - dragonDamage; 
      console.log('charHealth is now ' + charHealth)     
    }    
    // When health is 0 do this:
    if (health <= 0 ) {
      health = 0;        
      console.log('Dead');
      $("#dragon-hp").html( 0 + "/500");
      $( "#select-action-cont" ).hide();
      $( "#done-cont" ).show("slow");
    }
    if (charHealth <= 0 ) {
      health = 0;        
      console.log('charDead');
      $("#char-hp").html( health + "/100");
      $( "#select-action-cont" ).hide();
      $( "#done-cont" ).show("slow");
    } 
  }
  //end of userAttack(); 






});
