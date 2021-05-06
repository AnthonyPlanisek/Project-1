//get 1 day meal day - breakfast, lunch, dinner/name and time to cook -DONE
//get ingredients - DONE
//get price
//get nutrition
//get recipe instructions


//sets meal plan for one day
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=day&targetCalories=2000&diet=vegetarian&exclude=shellfish%2C%20olives",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "08eab0a1b7msh583dcfd3bbfa1acp16f8dcjsn0ba008005af3",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};


//gets meal plan data
$.ajax(settings).done(function (response) {
	console.log("meals", response);
    id = response.meals[0].id

$("#recipeName1").text(response.meals[0].title)
$("#recipeName2").text(response.meals[1].title)
$("#recipeName3").text(response.meals[2].title)

//finds the ingredients for each recipe


const settings2 = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" + id + "/ingredientWidget.json",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "08eab0a1b7msh583dcfd3bbfa1acp16f8dcjsn0ba008005af3",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};

//list ingredients
$.ajax(settings2).done(function (response2) {
	console.log("ingredients", response2);
});


//get recipe instructions
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" + id + "/analyzedInstructions?stepBreakdown=true",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "08eab0a1b7msh583dcfd3bbfa1acp16f8dcjsn0ba008005af3",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response3) {
	console.log("instructions", response3);
});


});

