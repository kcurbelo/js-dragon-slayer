window.onload = function() {
// Class selection hovers ============================================================
// Adds hover state over first image
$( "#class-1" ).hover(
  function() {
    $( "#class-one-img" ).addClass("char-select-bor");
  }, 
  function() {
    $( "#class-one-img" ).removeClass("char-select-bor");
  }
);
// Adds hover state over second image
$( "#class-2" ).hover(
  function() {
    $( "#class-two-img" ).addClass("char-select-bor");
  }, 
  function() {
    $( "#class-two-img" ).removeClass("char-select-bor");
  }
);
// Adds hover state over third image
$( "#class-3" ).hover(
  function() {
    $( "#class-three-img" ).addClass("char-select-bor");
  }, 
  function() {
    $( "#class-three-img" ).removeClass("char-select-bor");
  }
);

// Class 1 - weapon selection hovers ============================================================
// Adds hover state over first image
$( "#c1-w-1-link" ).hover(
  function() {
    $( "#c1-w-1-img" ).addClass("char-select-bor");
  }, 
  function() {
    $( "#c1-w-1-img" ).removeClass("char-select-bor");
  }
);
// Adds hover state over second image
$( "#c1-w-2-link" ).hover(
  function() {
    $( "#c1-w-2-img" ).addClass("char-select-bor");
  }, 
  function() {
    $( "#c1-w-2-img" ).removeClass("char-select-bor");
  }
);
// Adds hover state over third image
$( "#c1-w-3-link" ).hover(
  function() {
    $( "#c1-w-3-img" ).addClass("char-select-bor");
  }, 
  function() {
    $( "#c1-w-3-img" ).removeClass("char-select-bor");
  }
);







// Selects class one and replaces title with that class name
$( "#class-1" ).click(function() {
	console.log('ss');
	$( "#char-classes-cont" ).hide("slow");
	$( "#class-1-weapons-cont" ).delay(600).show("slow");
	let classChoice = $( "#class-1" ).html();
	$( "#choose-class-title" ).animate({'opacity': 0}, 400, function(){
        $(this).html("You are now a " + classChoice).animate({'opacity': 1}, 400);    
    });
	$( ".classes-links-cont" ).hide("slow");

});

$( "#c1-w-1-link" ).click(function() {
  console.log('YES!');
  $( "#c1-w-1-img" ).addClass("show-it");
  $( "#c1-w-2-img" ).addClass("hide-it");
  $( "#c1-w-3-img" ).addClass("hide-it");
  $("#c1-w-1-link").unbind('mouseenter').unbind('mouseleave');
  $( "#c1-w-1-img" ).removeClass("char-select-bor");
  $( "#c-1-w-text-cont" ).delay(600).hide(1200);
  $( "#choose-class-title" ).delay(600).hide(1200);
  $( "#p-2-fight" ).delay(600).show(1200);
  // $( "#c1-w-1-img" ).delay(600).show(1200);
  $("#t-i").attr("src", "img/base-3.gif");
  // $( "#c1-w-1-img" ).addClass("char-position");
  // $( "#c1-w-1-img" ).animate({top: 200}, 'slow');
  // Replace image rather than have it animate
});



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

