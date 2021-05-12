//get 1 day meal day - breakfast, lunch, dinner/name and time to cook -DONE
//get ingredients - DONE
//get price
//get nutrition
//get recipe instructions



var calories
var mealType
var exclude

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
    $("#motivation").text(response9.author)
    $("#motivation2").text(response9.text)
});



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
var display


var display = JSON.parse(localStorage.getItem("savedData"))
console.log("dis2", display)
console.log("dis", display.length)

if (display.length != 22) {


 
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
    //recipe name
$("#recipeName1").text(display[0].title)
$("#recipeName2").text(display[1].title)
$("#recipeName3").text(display[2].title)
    //recipe image
$("#foodImage1").attr("src", display[0].image)
$("#foodImage2").attr("src", display[1].image)
$("#foodImage3").attr("src", display[2].image)
    //displays instruction steps
for (let i = 0; i < display[0].analyzedInstructions[0].steps.length; i++) {
            
    $("#instructions1").append(display[0].analyzedInstructions[0].steps[i].step + "<br>")
            
}
for (let i = 0; i < display[1].analyzedInstructions[0].steps.length; i++) {
            
    $("#instructions2").append(display[1].analyzedInstructions[0].steps[i].step + "<br>")
            
}
for (let i = 0; i < display[2].analyzedInstructions[0].steps.length; i++) {
            
    $("#instructions3").append(display[2].analyzedInstructions[0].steps[i].step + "<br>")
            
}
//lists each ingredient
for (let i = 0; i < display[0].extendedIngredients.length; i++) {
    var img = document.createElement("img")
    img.src = "https://spoonacular.com/cdn/ingredients_100x100/" + display[0].extendedIngredients[i].image
    document.getElementById("ingredients1").appendChild(img)
    var p = document.createElement("p")
    p.innerHTML = (display[0].extendedIngredients[i].original)
    document.getElementById("ingredientslist1").appendChild(p)
}

for (let i = 0; i < display[1].extendedIngredients.length; i++) {
    var img = document.createElement("img")
    img.src = "https://spoonacular.com/cdn/ingredients_100x100/" + display[1].extendedIngredients[i].image
    document.getElementById("ingredients2").appendChild(img)
    var p = document.createElement("p")
    p.innerHTML = (display[1].extendedIngredients[i].original)
    document.getElementById("ingredientslist2").appendChild(p)
}

for (let i = 0; i < display[2].extendedIngredients.length; i++) {
    var img = document.createElement("img")
    img.src = "https://spoonacular.com/cdn/ingredients_100x100/" + display[2].extendedIngredients[i].image
    document.getElementById("ingredients3").appendChild(img)
    var p = document.createElement("p")
    p.innerHTML = (display[2].extendedIngredients[i].original)
    document.getElementById("ingredientslist3").appendChild(p)
}
//ready in minutes/servings
$("#readyInMinutes1").text("Ready In: " + display[0].readyInMinutes + " Minutes")
$("#readyInMinutes2").text("Ready In: " + display[1].readyInMinutes + " Minutes")
$("#readyInMinutes3").text("Ready In: " + display[2].readyInMinutes + " Minutes")
$("#servings1").text("Serving Size: " + display[0].servings)
$("#servings2").text("Serving Size: " + display[1].servings)
$("#servings3").text("Serving Size: " + display[2].servings)
}
//add changes to HTML
















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
  
