//get 1 day meal day - breakfast, lunch, dinner/name and time to cook -DONE
//get ingredients - DONE
//get price
//get nutrition
//get recipe instructions




//set up a function for this to play after submitting data

//sets meal plan for one day
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=week&targetCalories=2000&diet=vegetarian&exclude=shellfish%2C%20olives",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "08eab0a1b7msh583dcfd3bbfa1acp16f8dcjsn0ba008005af3",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};


//gets meal plan data
$.ajax(settings).done(function recipe(response) {
	console.log("meals", response);
    id1 = JSON.parse(response.items[0].value)
    id2 = JSON.parse(response.items[1].value)
    id3 = JSON.parse(response.items[2].value)
$("#recipeName1").text(id1.title)
$("#recipeName2").text(id2.title)
$("#recipeName3").text(id3.title)

//get recipe instructions and ingredients
const settings3 = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=" + id1.id + "%2C" + id2.id + "%2C" + id3.id,
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "08eab0a1b7msh583dcfd3bbfa1acp16f8dcjsn0ba008005af3",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};

//displays instructions
$.ajax(settings3).done(function (response3) {
	console.log("instructions/ingredients", response3);

$("#foodImage1").attr("src", response3[0].image)
$("#foodImage2").attr("src", response3[1].image)
$("#foodImage3").attr("src", response3[2].image)

    //displays instruction steps
    for (let i = 0; i < response3[0].analyzedInstructions[0].steps.length; i++) {
        
        $("#instructions1").append(response3[0].analyzedInstructions[0].steps[i].step + "<br>")
        
    }
    
    for (let i = 0; i < response3[1].analyzedInstructions[0].steps.length; i++) {
        
        $("#instructions2").append(response3[1].analyzedInstructions[0].steps[i].step + "<br>")
        
    }

    for (let i = 0; i < response3[2].analyzedInstructions[0].steps.length; i++) {
        
        $("#instructions3").append(response3[2].analyzedInstructions[0].steps[i].step + "<br>")
        
    }

    //lists each ingredient
    for (let i = 0; i < response3[0].extendedIngredients.length; i++) {
        var img = document.createElement("img")
        img.src = "https://spoonacular.com/cdn/ingredients_100x100/" + response3[0].extendedIngredients[i].image
        document.getElementById("ingredients1").appendChild(img)
        var p = document.createElement("p")
        p.innerHTML = (response3[0].extendedIngredients[i].original)
        document.getElementById("ingredientslist1").appendChild(p)
    }
   
    for (let i = 0; i < response3[1].extendedIngredients.length; i++) {
        var img = document.createElement("img")
        img.src = "https://spoonacular.com/cdn/ingredients_100x100/" + response3[1].extendedIngredients[i].image
        document.getElementById("ingredients2").appendChild(img)
        var p = document.createElement("p")
        p.innerHTML = (response3[1].extendedIngredients[i].original)
        document.getElementById("ingredientslist2").appendChild(p)
    }

    for (let i = 0; i < response3[2].extendedIngredients.length; i++) {
        var img = document.createElement("img")
        img.src = "https://spoonacular.com/cdn/ingredients_100x100/" + response3[2].extendedIngredients[i].image
        document.getElementById("ingredients3").appendChild(img)
        var p = document.createElement("p")
        p.innerHTML = (response3[2].extendedIngredients[i].original)
        document.getElementById("ingredientslist3").appendChild(p)
    }
    //ready in minutes/servings
    $("#readyInMinutes1").text("Ready In: " + response3[0].readyInMinutes + " Minutes")
    $("#readyInMinutes2").text("Ready In: " + response3[1].readyInMinutes + " Minutes")
    $("#readyInMinutes3").text("Ready In: " + response3[2].readyInMinutes + " Minutes")
    $("#servings1").text("Serving Size: " + response3[0].servings)
    $("#servings2").text("Serving Size: " + response3[0].servings)
    $("#servings3").text("Serving Size: " + response3[0].servings)

});

//recipe nutrition - ignore
/*
const settings4 = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/1003464/nutritionWidget.json",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "08eab0a1b7msh583dcfd3bbfa1acp16f8dcjsn0ba008005af3",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
};

$.ajax(settings4).done(function (response4) {
	console.log("nutrition", response4);
});

*/



});

console.log("days in month", moment("2021-06", "YYYY-MM").daysInMonth())
console.log("day of the month", moment().date())
console.log("current date", moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
/*
$("#save").click(function data(){

    var storage = JSON.parse(localStorage.getItem('cityName')) || []
    
    storage.push(city.val())

   localStorage.setItem("cityName", JSON.stringify(storage))
    
   saved = JSON.parse(localStorage.getItem("cityName"))

        })
        //retrives data
        function checkLocalStorage() {
           var searches = JSON.parse(localStorage.getItem('cityName'))

           // make the buttons and put them on the page
           
        }

        checkLocalStorage()
        */



$(document).ready(function(){
    $('.collapsible').collapsible();
  });



  function checkUrl() {

      console.log('location??? ', location.search)

      // grab the calorieInput and other values from the url
      // do an api request 
  }

  checkUrl()