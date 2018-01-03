window.onload = function() {


$( "#class-1" ).hover(
  function() {
    $( "#class-one-img" ).addClass("char-select-bor");
    // console.log('asds');
  }, 
  function() {
    $( "#class-one-img" ).removeClass("char-select-bor");
    // console.log('asds');
  }
);

$( "#class-2" ).hover(
  function() {
    $( "#class-two-img" ).addClass("char-select-bor");
    // console.log('asds');
  }, 
  function() {
    $( "#class-two-img" ).removeClass("char-select-bor");
    // console.log('asds');
  }
);

$( "#class-3" ).hover(
  function() {
    $( "#class-three-img" ).addClass("char-select-bor");
    // console.log('asds');
  }, 
  function() {
    $( "#class-three-img" ).removeClass("char-select-bor");
    // console.log('asds');
  }
);


$( "#class-1" ).click(function() {
	console.log('ss');
	$( "#class-two-img" ).addClass("hide-it");
	$( "#class-three-img" ).addClass("hide-it");
	$( "#class-1-weapons-cont" ).delay(600).show("slow");
	let classChoice = $( "#class-1" ).html();
	// console.log(d);
	$( "#choose-class-title" ).animate({'opacity': 0}, 400, function(){
        $(this).html("You are now a " + classChoice).animate({'opacity': 1}, 400);    
    });
	$( ".classes-cont" ).hide("slow");

})


	// Class 1 weapons ========================================


	// Hide class and weapon select
	function hideClassAndWeaponsCont(){
		document.getElementById("choose-class-cont").style.display = "none";
		document.getElementById("class-one-weapons-cont").style.display = "none";
		document.getElementById("class-two-weapons-cont").style.display = "none";
		document.getElementById("class-three-weapons-cont").style.display = "none";
	}

	// Show class images ==========================================

}

