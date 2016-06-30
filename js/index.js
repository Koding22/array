var Ingredients = ["tomatoes", "beef", "lettuce",
 "cheese", "ketchup", "mayonaise", "onions"]

 function pickIngredients(){
 	//Sets avariable called IngredientsNumber that wil have a random Whole Number
 	//Based on the length of the Ingredients array
	var ingredientsNumber = Math.floor(Math.random()*Ingredients.length);
	//Sets avariable called IngredientsNumber2 that wil have a random Whole Number
 	//Based on the length of the Ingredients array
 	var ingredientsNumber2 = Math.floor(Math.random()*Ingredients.length);
 	//Sets avariable called IngredientsNumber3 that wil have a random Whole Number
 	//Based on the length of the Ingredients array
 	var ingredientsNumber3 = Math.floor(Math.random()*Ingredients.length);

	document.getElementById('hamburger').
	innerHTML = "<h1>" + Ingredients[ingredientsNumber]
	+" and "+Ingredients[ingredientsNumber2]+"</h1>";







 }