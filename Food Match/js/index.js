// =====================================================
// Today's Suggestion
// =====================================================

const todayImage = document.getElementById("today-image");

const todayInfo = document.getElementById("today-info");

const todayName = document.getElementById("today-name");

const todayDescription =
    document.getElementById("today-description");

const todayDetails =
    document.getElementById("today-details");


// =====================================================
// Load Random Meal
// =====================================================

async function loadTodaySuggestion() {

    try {

        const response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/random.php"
        );

        const data = await response.json();

        const meal = data.meals[0];

        console.log("Today's Suggestion:", meal);


        // =================================================
        // Image
        // =================================================

        todayImage.src = meal.strMealThumb;

        todayImage.alt = meal.strMeal;


        // =================================================
        // Area + Category
        // =================================================

        todayInfo.textContent =
            `${meal.strArea} • ${meal.strCategory}`;


        // =================================================
        // Meal Name
        // =================================================

        todayName.textContent = meal.strMeal;


        // =================================================
        // Description
        // =================================================

        todayDescription.textContent =
            `A delicious ${meal.strArea} ${meal.strCategory.toLowerCase()} dish.`;


        // =================================================
        // View Details
        // =================================================

        todayDetails.href =
            `details.html?id=${meal.idMeal}`;

    }

    catch (error) {

        console.log(error);

        todayName.textContent =
            "Unable to load today's suggestion.";

        todayDescription.textContent =
            "Please try refreshing the page.";

    }

}


// =====================================================
// Start
// =====================================================

loadTodaySuggestion();