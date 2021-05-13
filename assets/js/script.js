

//get price
//get nutrition
//get recipe instructions



var calories
var mealType
var exclude
var quote 
const settings9 = {
	"async": true,
	"crossDomain": true,
	"url": "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "08eab0a1b7msh583dcfd3bbfa1acp16f8dcjsn0ba008005af3",
		"x-rapidapi-host": "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com"
	}
};



$.ajax(settings9).done(function (response9) {
	console.log(response9);
    quote = response9
    
    
}).then(function (){
$("#motivation").text(quote.author)
$("#motivation2").text(quote.text)


function grabMealParameters() {
    // use this to grab the parameters/entrys for meal plan out of the URL (ex: '&targetCalories=2200&diet=vegetarian&exclude=shellfish')
    // and convert it into an array: (['&targetCalories=2200', '&diet=vegetarian', '&exclude=shellfish'])
    var searchForParameters = document.location.search.split('?');

    // getting calories, mealType and exclude
    calories = searchForParameters[1].split('=').pop();
    mealType = searchForParameters[2].split('=').pop();
    exclude = searchForParameters[3].split('=').pop();

    console.log('calorie', calories);
    console.log('meal-choice', mealType);
    console.log('exclude', exclude);
    //searchApi(calories, mealType, exclude);
}
grabMealParameters()


checkUrl()


var mealPlanData
var instructionsIngredientsData
var response
var id1
var id2
var id3
var id4
var id5
var id6
var id7
var id8
var id9
var id10
var id11
var id12
var id13
var id14
var id15
var id16
var id17
var id18
var id19
var id20
var id21
var meal1
var meal2
var meal3

var display = JSON.parse(localStorage.getItem("savedData"))
console.log("dis2", display)

if (display === null) {


 
//sets meal plan for one day
const settings = {
	"async": true,
	"crossDomain": true,
	"url": `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=week&targetCalories=${calories}&diet=${mealType}&exclude=${exclude}`,
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "08eab0a1b7msh583dcfd3bbfa1acp16f8dcjsn0ba008005af3",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};


//gets meal plan data
$.ajax(settings).done(function (response) {
	console.log("meals", response);

mealPlanData = response

id1 = JSON.parse(mealPlanData.items[0].value)
id2 = JSON.parse(mealPlanData.items[1].value)
id3 = JSON.parse(mealPlanData.items[2].value)
id4 = JSON.parse(mealPlanData.items[3].value)
id5 = JSON.parse(mealPlanData.items[4].value)
id6 = JSON.parse(mealPlanData.items[5].value)
id7 = JSON.parse(mealPlanData.items[6].value)
id8 = JSON.parse(mealPlanData.items[7].value)
id9 = JSON.parse(mealPlanData.items[8].value)
id10 = JSON.parse(mealPlanData.items[9].value)
id11 = JSON.parse(mealPlanData.items[10].value)
id12 = JSON.parse(mealPlanData.items[11].value)
id13 = JSON.parse(mealPlanData.items[12].value)
id14 = JSON.parse(mealPlanData.items[13].value)
id15 = JSON.parse(mealPlanData.items[14].value)
id16 = JSON.parse(mealPlanData.items[15].value)
id17 = JSON.parse(mealPlanData.items[16].value)
id18 = JSON.parse(mealPlanData.items[17].value)
id19 = JSON.parse(mealPlanData.items[18].value)
id20 = JSON.parse(mealPlanData.items[19].value)
id21 = JSON.parse(mealPlanData.items[20].value)
}).then(function(){
    console.log("DATA", mealPlanData)

//get recipe instructions and ingredients
const settings3 = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=" + id1.id + "%2C" + id2.id + "%2C" + id3.id + "%2C" + id4.id + "%2C" + id5.id + "%2C" + id6.id
    + "%2C" + id7.id + "%2C" + id8.id + "%2C" + id9.id + "%2C" + id10.id + "%2C" + id11.id + "%2C" + id12.id + "%2C" + id13.id + "%2C" + id14.id + "%2C" + id15.id + "%2C" + id16.id + "%2C" + id17.id + "%2C" + id17.id
    + "%2C" + id18.id + "%2C" + id19.id + "%2C" + id20.id + "%2C" + id21.id,
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "08eab0a1b7msh583dcfd3bbfa1acp16f8dcjsn0ba008005af3",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};

//ajax call for everything else
$.ajax(settings3).done(function (response3) {
    instructionsIngredientsData = response3


}).then(function(){
    //saves the api call to local storage
    localStorage.setItem("savedData", JSON.stringify(instructionsIngredientsData))
    console.log("saved", JSON.parse(localStorage.getItem("savedData")))

})

})
}else{
    meal1 = display[0]
    meal2 = display[1]
    meal3 = display[2]
    displayMeals()
    function displayMeals(){
    document.getElementById("btn1").onclick = function(){
        meal1 = display[0]
        meal2 = display[1]
        meal3 = display[2]
        $("#instructions1").empty()
        $("#instructions2").empty()
        $("#instructions3").empty()
        $("#ingredients1").empty()
        $("#ingredients2").empty()
        $("#ingredients3").empty()
        $("p").empty()
        $("#motivation").text(quote.author)
        $("#motivation2").text(quote.text)
        displayMeals()
    }
    document.getElementById("btn2").onclick = function(){
        meal1 = display[3]
        meal2 = display[4]
        meal3 = display[5]
        $("#instructions1").empty()
        $("#instructions2").empty()
        $("#instructions3").empty()
        $("#ingredients1").empty()
        $("#ingredients2").empty()
        $("#ingredients3").empty()
        $("p").empty()
        $("#motivation").text(quote.author)
        $("#motivation2").text(quote.text)
        displayMeals()
    }
    document.getElementById("btn3").onclick = function(){
        meal1 = display[6]
        meal2 = display[7]
        meal3 = display[8]
        $("#instructions1").empty()
        $("#instructions2").empty()
        $("#instructions3").empty()
        $("#ingredients1").empty()
        $("#ingredients2").empty()
        $("#ingredients3").empty()
        $("p").empty()
        $("#motivation").text(quote.author)
        $("#motivation2").text(quote.text)
        displayMeals()
    }
    document.getElementById("btn4").onclick = function(){
        meal1 = display[9]
        meal2 = display[10]
        meal3 = display[11]
        $("#instructions1").empty()
        $("#instructions2").empty()
        $("#instructions3").empty()
        $("#ingredients1").empty()
        $("#ingredients2").empty()
        $("#ingredients3").empty()
        $("p").empty()
        $("#motivation").text(quote.author)
        $("#motivation2").text(quote.text)
        displayMeals()
    }
    document.getElementById("btn5").onclick = function(){
        meal1 = display[12]
        meal2 = display[13]
        meal3 = display[14]
        $("#instructions1").empty()
        $("#instructions2").empty()
        $("#instructions3").empty()
        $("#ingredients1").empty()
        $("#ingredients2").empty()
        $("#ingredients3").empty()
        $("p").empty()
        $("#motivation").text(quote.author)
        $("#motivation2").text(quote.text)
        displayMeals()
    }
    document.getElementById("btn6").onclick = function(){
        meal1 = display[15]
        meal2 = display[16]
        meal3 = display[17]
        $("#instructions1").empty()
        $("#instructions2").empty()
        $("#instructions3").empty()
        $("#ingredients1").empty()
        $("#ingredients2").empty()
        $("#ingredients3").empty()
        $("p").empty()
        $("#motivation").text(quote.author)
        $("#motivation2").text(quote.text)
        displayMeals()
    }
    document.getElementById("btn7").onclick = function(){
        meal1 = display[18]
        meal2 = display[19]
        meal3 = display[20]
        $("#instructions1").empty()
        $("#instructions2").empty()
        $("#instructions3").empty()
        $("#ingredients1").empty()
        $("#ingredients2").empty()
        $("#ingredients3").empty()
        $("p").empty()
        $("#motivation").text(quote.author)
        $("#motivation2").text(quote.text)
        displayMeals()
    }
    //recipe name
$("#recipeName1").text(meal1.title)
$("#recipeName2").text(meal2.title)
$("#recipeName3").text(meal3.title)
    //recipe image
$("#foodImage1").attr("src", meal1.image)
$("#foodImage2").attr("src", meal2.image)
$("#foodImage3").attr("src", meal3.image)
    //displays instruction steps
for (let i = 0; i < meal1.analyzedInstructions[0].steps.length; i++) {
            
    $("#instructions1").append(meal1.analyzedInstructions[0].steps[i].step + "<br>")
            
}
for (let i = 0; i < meal2.analyzedInstructions[0].steps.length; i++) {
            
    $("#instructions2").append(meal2.analyzedInstructions[0].steps[i].step + "<br>")
            
}
for (let i = 0; i < meal3.analyzedInstructions[0].steps.length; i++) {
            
    $("#instructions3").append(meal3.analyzedInstructions[0].steps[i].step + "<br>")
            
}
//lists each ingredient
for (let i = 0; i < meal1.extendedIngredients.length; i++) {
    var img = document.createElement("img")
    img.src = "https://spoonacular.com/cdn/ingredients_100x100/" + meal1.extendedIngredients[i].image
    document.getElementById("ingredients1").appendChild(img)
    var p = document.createElement("p")
    p.innerHTML = (meal1.extendedIngredients[i].original)
    document.getElementById("ingredientslist1").appendChild(p)
}

for (let i = 0; i < meal2.extendedIngredients.length; i++) {
    var img = document.createElement("img")
    img.src = "https://spoonacular.com/cdn/ingredients_100x100/" + meal2.extendedIngredients[i].image
    document.getElementById("ingredients2").appendChild(img)
    var p = document.createElement("p")
    p.innerHTML = (meal2.extendedIngredients[i].original)
    document.getElementById("ingredientslist2").appendChild(p)
}

for (let i = 0; i < meal3.extendedIngredients.length; i++) {
    var img = document.createElement("img")
    img.src = "https://spoonacular.com/cdn/ingredients_100x100/" + meal3.extendedIngredients[i].image
    document.getElementById("ingredients3").appendChild(img)
    var p = document.createElement("p")
    p.innerHTML = (meal3.extendedIngredients[i].original)
    document.getElementById("ingredientslist3").appendChild(p)
}
//ready in minutes/servings
$("#readyInMinutes1").text("Ready In: " + meal1.readyInMinutes + " Minutes")
$("#readyInMinutes2").text("Ready In: " + meal2.readyInMinutes + " Minutes")
$("#readyInMinutes3").text("Ready In: " + meal3.readyInMinutes + " Minutes")
$("#servings1").text("Serving Size: " + meal1.servings)
$("#servings2").text("Serving Size: " + meal2.servings)
$("#servings3").text("Serving Size: " + meal3.servings)


 
    }
}
})
//saves your favorite recipe


var favoritesList

function Save0() {

    var favoritesList = JSON.parse(localStorage.getItem("savedRecipe")) || []
    var recipeName = meal1.title
    var recipeLink = meal1.sourceUrl
    localStorage.setItem(("Meal Title", recipeName), ("Meal URL", recipeLink));

    var newFavorite = {mealTitle: recipeName, mealURL: recipeLink}

    favoritesList.push(newFavorite)

    window.localStorage.setItem("savedRecipe", JSON.stringify(favoritesList))
    console.log("savedfavorites", favoritesList);
}

function Save1() {

    var favoritesList = JSON.parse(localStorage.getItem("savedRecipe")) || []
    var recipeName = meal2.title
    var recipeLink = meal2.sourceUrl
    localStorage.setItem(("Meal Title", recipeName), ("Meal URL", recipeLink));

    var newFavorite = {mealTitle: recipeName, mealURL: recipeLink}

    favoritesList.push(newFavorite)

    window.localStorage.setItem("savedRecipe", JSON.stringify(favoritesList))
    console.log("savedfavorites", favoritesList);
}

function Save2() {

    var favoritesList = JSON.parse(localStorage.getItem("savedRecipe")) || []
    var recipeName = meal3.title
    var recipeLink = meal3.sourceUrl
    localStorage.setItem(("Meal Title", recipeName), ("Meal URL", recipeLink));

    var newFavorite = {mealTitle: recipeName, mealURL: recipeLink}

    favoritesList.push(newFavorite)

    window.localStorage.setItem("savedRecipe", JSON.stringify(favoritesList))
    console.log("savedfavorites", favoritesList);
}

console.log("storage", JSON.parse(localStorage.getItem("savedRecipe")))









console.log("days in month", moment("2021-06", "YYYY-MM").daysInMonth())
console.log("day of the month", moment().date())
console.log("current date", moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))

var recipe1 = $("#recipeName1")
console.log("recipe1", recipe1)
localStorage.setItem("foodName", JSON.stringify(recipe1))
console.log("name", localStorage.getItem("foodName"))

$(document).ready(function(){
    $('.collapsible').collapsible();
  });



  function checkUrl() {

      console.log('location??? ', location.search)

      // grab the calorieInput and other values from the url
      // do an api request 
  }

  checkUrl()
