// "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=day&targetCalories=2000&diet=vegetarian&exclude=shellfish%2C%20olives",
// Calories=2000
// diet=vegetarian
// exclude=shellfish

var mealFormEl = $('#meal-form') 
var calorieInput = $('#calorie-entry').value;
var excludeInput = $('#exclude-entry').value;
var dietInput = $('meal-choice').value;

const settings = {
	"async": true,
	"crossDomain": true,
	"url": `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=week&targetCalories=${calorieInput}&diet=${dietInput}&exclude=${excludeInput}`,
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "08eab0a1b7msh583dcfd3bbfa1acp16f8dcjsn0ba008005af3",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};

$(".btn").on("click", function handleMealFormSubmit(event) {
    event.preventDefault()

    var calorieInput = $('#calorie-entry').val();
    var dietInput = $('#meal-choice').val();
    var excludeInput = $('#exclude-entry').val();

    // check that you have values on all variables on lines 25-27
    console.log('calorie', calorieInput);
    console.log('meal-choice', dietInput);
    console.log('exclude', excludeInput);
    // put them in the location.assign

    //might not need the var queryString variable
    var queryString = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=week&targetCalories=${calorieInput}&diet=${dietInput}&exclude=${excludeInput}`;

    console.log('about to change pages')
    location.assign(`./meal-plan.html?targetCalories=${calorieInput}?diet=${dietInput}?exclude=${excludeInput}`);
    console.log("3 inputs", queryString );
});
