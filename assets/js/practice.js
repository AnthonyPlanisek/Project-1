// FOR SETTING THE NAME AND SOURCE URL TO LOCAL STORAGE
  //   add an ID into HTML that is connected up top to the variable savedMealBtn
  var data = {
    0: "meal name"
}
;
function savedMealList (event){
var id = event.target.id
var num = id[id.length - 1]
var numURL = num + "URL"

var recipeName = display[num].title
//   need to see what the variable is for the ingrediants object is
var recipeLink = display[num].sourceUrl
localStorage.setItem(("Meal Title", recipeName), ("Meal URL", recipeLink));

}
mealZeroButton.addEventListener('click', getID);
mealOneButton.addEventListener('click', getID);
mealTwoButton.addEventListener('click', getID);

var mealZeroButton = document.querySelector('#button-0');
var mealOneButton = document.querySelector('#button-1');
var mealTwoButton = document.querySelector('#button-2');

//   add to click event for daily button - toggle the ids as you change pages you can change ids to go with that page.
//   toggling - delete ID number and add new one.
//   pass a parameter like event.target.id which will give the ID of the button
function getID (event) {
    event.preventDefault();

    $(".addBtn").each(function () {
    var id = parseInt($(this).attr("id").split("-")[1]);
    console.log("ID #?!", id);
    savedFavorites (id);
    return id;
    })
}

function savedFavorites (event) {
  
  //   need to see what the variable is for the meals object is
  var recipeName = display[event].title
  //   need to see what the variable is for the ingrediants object is
  var recipeLink = display[evet].sourceUrl
  localStorage.setItem(("Meal Title", recipeName), ("Meal URL", recipeLink));

}
// mealZeroButton.addEventListener('click', getID);
// mealOneButton.addEventListener('click', getID);
// mealTwoButton.addEventListener('click', getID);

//FOR TOGGLING - CHANGING BUTTON ID NUMBER BASED ON TAB THAT IS CLICKED
// add event listener to button to call on change id # function
// create ChangeID function which:
// 1. removes current number from button id: "button-0" becomes "button-"
// 2. adds new number to button id: "button-" becomes "button-3"
// 3. does this for all 3 buttons on page.



  
var mealZeroButton = document.querySelector('#button-0');
var mealOneButton = document.querySelector('#button-1');
var mealTwoButton = document.querySelector('#button-2');

//   add to click event for daily button - toggle the ids as you change pages you can change ids to go with that page.
//   toggling - delete ID number and add new one.
//   pass a parameter like event.target.id which will give the ID of the button
//   $(".addBtn").on("click", function getID (event) {
//       event.preventDefault();

//       $(".addBtn").each(function () {
//       var id = parseInt($(this).attr("id").split("-")[1]);
//       console.log("ID #?!", id);
//     //   savedFavorites (id);
//       return id;
//       });
//   })

$(".addBtn").on("click", function savedFavorites (event) {
      event.preventDefault();
      var id = parseInt($(this).attr("id"))
      console.log("int id", id);
  //   need to see what the variable is for the meals object is
  var recipeName = display[id].title
  console.log("NAME", recipeName);
  //   need to see what the variable is for the ingrediants object is
  var recipeLink = display[id].sourceUrl
  console.log("URL", recipeLink);
  // localStorage.setItem(("Meal Title", recipeName), ("Meal URL", recipeLink));

});


