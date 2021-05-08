// "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=day&targetCalories=2000&diet=vegetarian&exclude=shellfish%2C%20olives",
// Calories=2000
// diet=vegetarian
// exclude=shellfish

var mealFormEl = $('#meal-form') 
var calorieInput = $('#calorie-entry').value;
var dietInput = $('#diet-input').value;
var excludeInput = $('#exclude-entry').value;

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
    var dietInput = $('#diet-input').val();
    var excludeInput = $('#exclude-entry').val();

    // check that you have values on all variables on lines 25-27
    // put them in the location.assign

    var queryString = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=week&targetCalories=${calorieInput}&diet=${dietInput}&exclude=${excludeInput}`;

    console.log('about to change pages')
    location.assign(`./index.html?calorieInput=${calorieInput}?dietInput=${dietInput}`);
    console.log("3 inputs", queryString );
});

function searchAPI(calories, diet, exclude) {
    var locQueryUrl = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=week&&targetCalories=&diet=&exclude="
    locQueryUrl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=week&targetCalories=${calories}&diet=${diet}&exclude=${exclude}`

    fetch(locQueryUrl)
        .then(function (response) {
            console.log("w/o json", response)
            return response.json();
           
        });
        console.log("json", response.json());

}

// mealFormEl.addEventListener('submit', handleMealFormSubmit);



// "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=day&targetCalories=" + calorieInput + "&diet=" + dietInput + "&exclude=" + exludeInput
// &targetCalories=2000&diet=vegetarian&exclude=shellfish%2C%20olives"

// {
//     "info": {
//         "_postman_id": "ca618759-d2ca-41a9-b7a7-a2a7984d5b44",
//         "name": "Project 1",
//         "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
//     },
//     "item": [
//         {
//             "name": "Get mealplan",
//             "request": {
//                 "method": "GET",
//                 "header": [
//                     {
//                         "key": "x-rapidapi-key",
//                         "value": "08eab0a1b7msh583dcfd3bbfa1acp16f8dcjsn0ba008005af3",
//                         "type": "text"
//                     },
//                     {
//                         "key": "x-rapidapi-host",
//                         "value": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//                         "type": "text"
//                     }
//                 ],
//                 "url": {
//                     "raw": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=week&targetCalories=2000&diet=vegetarian&exclude=shellfish%2C%20olives",
//                     "protocol": "https",
//                     "host": [
//                         "spoonacular-recipe-food-nutrition-v1",
//                         "p",
//                         "rapidapi",
//                         "com"
//                     ],
//                     "path": [
//                         "recipes",
//                         "mealplans",
//                         "generate"
//                     ],
//                     "query": [
//                         {
//                             "key": "timeFrame",
//                             "value": "week"
//                         },
//                         {
//                             "key": "targetCalories",
//                             "value": "2000"
//                         },
//                         {
//                             "key": "diet",
//                             "value": "vegetarian"
//                         },
//                         {
//                             "key": "exclude",
//                             "value": "shellfish%2C%20olives"
//                         }
//                     ]
//                 }
//             },
//             "response": []
//         }
//     ]