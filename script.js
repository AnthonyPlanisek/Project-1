


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


//gets that array
$.ajax(settings).done(function (response) {
	console.log(response);
    id = response.meals[0].id

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

$.ajax(settings2).done(function (response) {
	console.log(response);
});




});

