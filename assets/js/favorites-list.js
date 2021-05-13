function displayLocalStorage() {
    
    
    var displayFavoritesList = JSON.parse(localStorage.getItem("savedRecipe"));
    console.log("Favorites List: ", displayFavoritesList);

    for (var i = 0; i < displayFavoritesList.length ; i++) {

        var favoritesLink = displayFavoritesList[i].mealURL

        $('#past-recipes').append("<div class='favorite-recipes'>" + displayFavoritesList[i].mealTitle + "</div>", "<a id='past-urls' class='button' target='_blank' href='" + favoritesLink + "'>Recipe Link</a>")
        
        console.log(displayFavoritesList[i], "displayFavoritesList[i]") 

}};

displayLocalStorage()

