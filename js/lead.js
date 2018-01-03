// Class 1 weapons ========================================
// if user selects class 1 then do this
function classOneSelect(){
	document.getElementById("class-one-weapons-cont").style.display = "block";
}
// Class 1 - Weapon 1
function c1WeaponOneChoose(){
	console.log('You have chosen weapon one!');
	hideClassAndWeaponsCont();
}
// Class 1 - Weapon 2
function c1WeaponTwoChoose(){
	console.log('You have chosen weapon two!');
	hideClassAndWeaponsCont();
}
// Class 1 - Weapon 3
function c1WeaponThreeChoose(){
	console.log('You have chosen weapon three!');
	hideClassAndWeaponsCont();
}

// Class 2 weapons ========================================
// if user selects class 2 then do this
function classTwoSelect(){
	document.getElementById("class-two-weapons-cont").style.display = "block";
}
// Class 2 - Weapon 1
function c2WeaponOneChoose(){
	console.log('You have chosen weapon one!');
	hideClassAndWeaponsCont();
}
// Class 2 - Weapon 2
function c2WeaponTwoChoose(){
	console.log('You have chosen weapon two!');
	hideClassAndWeaponsCont();
}
// Class 2 - Weapon 3
function c2WeaponThreeChoose(){
	console.log('You have chosen weapon three!');
	hideClassAndWeaponsCont();
}

// Class 3 weapons ========================================
// if user selects class 3 then do this
function classThreeSelect(){
	document.getElementById("class-two-weapons-cont").style.display = "block";
}
// Class 3 - Weapon 1
function c3WeaponOneChoose(){
	console.log('You have chosen weapon one!');
	hideClassAndWeaponsCont();
}
// Class 3 - Weapon 2
function c3WeaponTwoChoose(){
	console.log('You have chosen weapon two!');
	hideClassAndWeaponsCont();
}
// Class 3 - Weapon 3
function c3WeaponThreeChoose(){
	console.log('You have chosen weapon three!');
	hideClassAndWeaponsCont();
}

// Hide class and weapon select
function hideClassAndWeaponsCont(){
	document.getElementById("choose-class-cont").style.display = "none";
	document.getElementById("class-one-weapons-cont").style.display = "none";
	document.getElementById("class-two-weapons-cont").style.display = "none";
	document.getElementById("class-three-weapons-cont").style.display = "none";
}

// Show class images ==========================================
window.onload = function() {

	$( "#class-1" ).hover(
	  function() {
	    $("#class-one-img").stop( true, false ).show( "regular" );
	    $("#class-two-img").stop( true, false ).hide( "fast" );
	    $("#class-three-img").stop( true, false ).hide( "fast" );

	  }, function() {
	    $("#class-one-img").stop( true, false ).fadeOut( "regular" );
	  }
	);	

	$( "#class-2" ).hover(
	  function() {
	    $("#class-one-img").stop( true, false ).hide( "fast" );
	    $("#class-two-img").stop( true, false ).show( "regular" );
	    $("#class-three-img").stop( true, false ).hide( "fast" );

	  }, function() {
	    $("#class-two-img").stop( true, false ).fadeOut( "regular" );
	    $("#class-one-img").stop( true, false ).show( "regular" );
	  }
	);

	$( "#class-3" ).hover(
	  function() {
	    $("#class-one-img").stop( true, false ).hide( "fast" );
	    $("#class-two-img").stop( true, false ).hide( "fast" );
	    $("#class-three-img").stop( true, false ).show( "regular" );

	  }, function() {
	    $("#class-three-img").stop( true, false ).fadeOut( "regular" );
	    $("#class-one-img").stop( true, false ).show( "regular" );
	  }
	);		


// If second class is chosen 


	$('#class-2').click(function(){
  		// $(this).data('clicked', true);
		    $("#class-one-img").hide();
		    $("#class-two-img").stop( true, false ).show();
		    $("#class-three-img").hide();		
	});
}

