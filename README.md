# Weekly Meal Plan

https://anthonyplanisek.github.io/Project-1/

Our goal was to create a website that provides users a way to get a personalized meal plan for the week based on the user's daily calorie goal, diet, and any food they would want to exclude. Also, they can save their favorite recipes on a separate page for later. 
The website should suggest an easy to digest meal plan that would make it simple to get a curated list of recipes that fit the users preferences. 
Every day the user gets a new motivational quote to inspire them.

We found our main API on rapidAPI.com, and it is called The spoonacular API Recipe - Food - Nutrition.
https://rapidapi.com/spoonacular/api/recipe-food-nutrition

This API provides searches that give lots of different information based on the three factors previously mentioned (Nutrion, Food and Recipes). We decided to use two of their APIS: GET Generate Meal Plan and GET Recipe Information Bulk.

## Homepage: Meal Prep Search

 On the homepage the user provides information that is then plugged into the GET Generate Meal Plan API. This API provides four parameters for meal planning: time frame in days, weeks, etc. (*timeFrame*), the user's daily calorie goal (*targetCalories*), type of meals/diet the user needs, such as vegan, paleo, pescatarian, etc. (*diet*), and finally what food items should be excluded, such as eggs and/or shellfish (*exclude)*. We set the *timeFrame* parameter to one week but allow the user to enter in information for the other three parameters. The user can leave any or all three of the parameters blank and will still be provided meal plans. The homepage is coded to the index.html file.

The homepage of our site provides three places for the user to enter their: "Daily Calorie Goal", "Foods to Exclude" and a pull down menu "Select a Meal Preference" with all the different types of diets the spoonacular API is able to filter for.

![HomePage](https://github.com/AnthonyPlanisek/Project-1/blob/main/assets/ReadMe%20images/WeeklyHomePage.png)

This information is then attached to the meal-plan.html through location.assign, and when the "Create Meals" button is clicked the user is directed to their personal weekly meal plan page, which is coded on the meal-plan.html.

## Main Page: Weekly Meal Plan

We decided to display all the information someone would need to successfully create each meal. This means we needed: the meal title/name, the ingredients, the instructions, estimated prep/cooking time, number of servings and images of the meal and its ingredients. 

In order to get all the information we needed for 21 meals we had to run two API searches:

* First, the 3 parameters gathered on the index.html page are plugged into the spoonacular "GET: Generate Meal Plan" API and twenty one meals are generated.

* Second, this meal plan data is then taken from each of these 21 recipes and is plugged into the spoonacular "GET: Get Recipe Information Bulk" API. This search provides the recipes' instructions and ingredients’ data.
    - This second API search gives us all the additional data about each meal that we want to display on the website.
    - All of this information is saved in local storage under "savedData".

Our main webpage, coded on the meal-plan.html, provides alot of information and is basically 7 pages in one.
![meal-plan-page](https://github.com/AnthonyPlanisek/Project-1/blob/main/assets/ReadMe%20images/MealPlanPage.png)

1. **Top of Website**
At the top of the page on the far left shows the current day's date and on the far right shows our second API (not part of spoonacular) called "Quotes Inspirational Quotes Motivational Quotes" API Documentation also found under rapidAPI.com.
https://rapidapi.com/ipworld/api/quotes-inspirational-quotes-motivational-quotes

* We used their "GET: Quote of The Day auto changes daily" to provide a daily quote. Every time the user has a new list of meals to look at they have a new quote to either inspire them to cook, maybe motivate them in another aspect of their life or maybe just to make them giggle.

2. **Nav Bar**
Right below the date and quote is a nav bar with seven buttons representing the seven days of the week and a Saved Recipes button.
Our site is setup to show 3 meals and the user can click between the day buttons "Day 1" through "Day 7" to show 3 different meals suggested for that particular day.

3. **Daily Meals**
- The meals are stacked in a column and ordered how you would expect them to be: 1. Breakfast 2. Lunch 3. Dinner.
- For each meal on the left-hand side is a picture of the meal and to the right side of each image (from top to bottom) are the: Meal name, Meal prep/cook time, Serving size, Instructions, and then the ingredients.
- The ingredients are in a pull-down menu which displays the ingredients amounts and images.
- On the fair right-hand side is the save recipe button, which will save the particular recipe to the user's favorites list. This information is held in local storage under "savedRecipe".

## Favorites Page
To visit the saved recipes page, the user can click the saved recipes button at the end of the nav bar and they are taken to the website's third page attached to the favorites-list.html. 
![Favorites-page](https://github.com/AnthonyPlanisek/Project-1/blob/main/assets/ReadMe%20images/FavoritesPage.png)
- This page displays all of the favorite recipes stored in local storage. 
- It displays the name of each recipe and a button that opens a new tab with the original webpage for that recipe, that the spoonacular API was able to gather it from. 
- At the top of the page there is a button to clear your favorites, which only clears the "savedRecipe" from local storage. And at the bottom of the list is a return button which takes the user back to the meal-plan page.

---
Licensed under the [MIT License](https://choosealicense.com/licenses/mit/#).




