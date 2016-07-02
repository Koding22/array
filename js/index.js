var Juice = ["normal peach juice", " grape Gatorade", "Perrier",
 "calamansi", "pepsi", "warm sparkling water", "lemon tea"]

 function pickJuice(){
 	//Sets avariable called JuiceNumber that wil have a random Whole Number
 	//Based on the length of the Juice array
	var JuiceNumber = Math.floor(Math.random()*Juice.length);
	//Sets avariable called JuiceNumber that wil have a random Whole Number
 	//Based on the length of the Juice array
 	var JuiceNumber2 = Math.floor(Math.random()*Juice.length);
 	//Sets avariable called JuiceNumber2 that wil have a random Whole Number
 	//Based on the length of the Juice array
 	var JuiceNumber3 = Math.floor(Math.random()*Juice.length);
 	//Sets avariable called JuiceNumber3 that wil have a random Whole Number
 	//Based on the length of the Juice array

	document.getElementById('Juice').
	innerHTML = "<h1>" + Juice[JuiceNumber]
	+" and "+Juice[JuiceNumber2]+"</h1>";
 }