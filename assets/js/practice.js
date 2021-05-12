
  //   add an ID into HTML that is connected up top to the variable savedMealBtn
  var data = {
    0: "meal name"
}
;
function savedMealList (event){
var id = event.target.id
var num = id[id.length -1]
var numURL = num + "URL"
localStorage.setItem(num, data[num].title)
localStorage.setItem(numURL, data[num].sourceUrl)
//   need to see what the variable is for the meals object is
var recipeName = display[0].title
//   need to see what the variable is for the ingrediants object is
var recipeLink = display[0].sourceUrl
}
mealOneButton.addEventListener('click', savedMealList);
mealTwoButton.addEventListener('click', savedMealList);
mealThreeButton.addEventListener('click', savedMealList);

//   add to click event for daily button - toogle the ids as you change pages you can change ids to go with that page.
//   toogling - delete ID number and add new one.
//   pass a parameter like event.target.id which will give the ID of the button