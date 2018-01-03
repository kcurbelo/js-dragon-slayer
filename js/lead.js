// if user selects class 1 then do this
function classOneSelect(){
	document.getElementById("class-one-weapons-cont").style.display = "block";
}
// Class 1 - Weapon 1
function c1WeaponOneChoose(){
	console.log('You have chosen weapon one!')
	document.getElementById("choose-class-cont").style.display = "none";
	document.getElementById("class-one-weapons-cont").style.display = "none";
}
// Class 1 - Weapon 2
function c1WeaponTwoChoose(){
	console.log('You have chosen weapon two!')
}
// Class 1 - Weapon 3
function c1WeaponThreeChoose(){
	console.log('You have chosen weapon three!')
}
