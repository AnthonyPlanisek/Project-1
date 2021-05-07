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
    id1 = response.meals[0].id
    id2 = response.meals[1].id
    id3 = response.meals[2].id

$("#recipeName1").text(response.meals[0].title)
$("#recipeName2").text(response.meals[1].title)
$("#recipeName3").text(response.meals[2].title)


//get recipe instructions and ingredients
const settings3 = {
	"async": true,
	"crossDomain": true,
	"url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/informationBulk?ids=" + id1 + "%2C" + id2 + "%2C" + id3,
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
    }
   
    for (let i = 0; i < response3[1].extendedIngredients.length; i++) {
        var img = document.createElement("img")
        img.src = "https://spoonacular.com/cdn/ingredients_100x100/" + response3[1].extendedIngredients[i].image
        document.getElementById("ingredients2").appendChild(img)
    }

    for (let i = 0; i < response3[2].extendedIngredients.length; i++) {
        var img = document.createElement("img")
        img.src = "https://spoonacular.com/cdn/ingredients_100x100/" + response3[2].extendedIngredients[i].image
        document.getElementById("ingredients3").appendChild(img)
    }

    $("#readyInMinutes1").text(response.meals[0].readyInMinutes)
    $("#readyInMinutes2").text(response.meals[1].readyInMinutes)
    $("#readyInMinutes3").text(response.meals[2].readyInMinutes)
    $("#servings1").text(response.meals[0].servings)
    $("#servings2").text(response.meals[1].servings)
    $("#servings3").text(response.meals[2].servings)

});

//recipe nutrition - ignore
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





});

