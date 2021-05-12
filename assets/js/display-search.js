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

// ** EVERYTHING BELOW LINE NEEDS TO BE MOVED TO MAIN JS, SCRIPT.JS**
function grabMealParameters() {
    // use this to grab the parameters/entrys for meal plan out of the URL (ex: '&targetCalories=2200&diet=vegetarian&exclude=shellfish')
    // and convert it into an array: (['&targetCalories=2200', '&diet=vegetarian', '&exclude=shellfish'])
    var searchForParameters = document.location.search.split('?');

    // getting calories, mealType and exclude
    var calories = searchForParameters[0].split('=').pop();
    var mealType = searchForParameters[1].split('=').pop();
    var exclude = searchForParameters[2].split('=').pop();

    console.log('calorie', calories);
    console.log('meal-choice', mealType);
    console.log('exclude', exclude);
    searchApi(calories, mealType, exclude);
}

function searchAPI(calories, mealType, exclude) {
    var locQueryUrl = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=week&&targetCalories=&diet=&exclude="
    locQueryUrl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=week&targetCalories=${calories}&diet=${mealType}&exclude=${exclude}`

    fetch(locQueryUrl)
        .then(function (locResponse) {
            // query will on page - dont think we need? woudl need to creat a div in html with the id "result-content" -
            // create a global variable called resultTextEl that would call on the "result-content" id
            // resultTextEl.textContent = locRes.search.query;
            console.log("w/o json: ", locResponse)
            console.log("json: ", locResponse.json());
            return response.json();
            

});

}
// function grabMealParameters() {
//     // use this to grab the parameters/entrys for meal plan out of the URL (ex: '&targetCalories=2200&diet=vegetarian&exclude=shellfish')
//     // and convert it into an array: (['&targetCalories=2200', '&diet=vegetarian', '&exclude=shellfish'])
//     var searchForParameters = document.location.search.split('&');

//     // getting calories, mealType and exclude
//     var calories = searchForParameters[0].split('=').pop();
//     var mealType = searchForParameters[1].split('=').pop();
//     var exclude = searchForParameters[2].split('=').pop();

//     console.log('calorie', calories);
//     console.log('meal-choice', mealType);
//     console.log('exclude', exclude);
//     // searchApi(calories, mealType, exclude);
// }

// function searchAPI(calories, mealType, exclude) {
//     var locQueryUrl = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=week&&targetCalories=&diet=&exclude="
//     locQueryUrl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=week&targetCalories=${calories}&diet=${mealType}&exclude=${exclude}`

//     fetch(locQueryUrl)
//         .then(function (locResponse) {
//             // query will on page - dont think we need? woudl need to creat a div in html with the id "result-content" -
//             // create a global variable called resultTextEl that would call on the "result-content" id
//             // resultTextEl.textContent = locRes.search.query;
//             console.log("w/o json: ", locResponse)
//             console.log("json: ", locResponse.json());
//             return response.json();
            

// });

// }

// mealFormEl.addEventListener('submit', handleMealFormSubmit);