// =====================================================
// Load User Preferences
// =====================================================

const preferences =
JSON.parse(sessionStorage.getItem("preferences"));

if (!preferences) {

    document.getElementById("empty-state").style.display = "block";

    document.getElementById("results-container").style.display = "none";

    document.querySelector(".result-summary").style.display = "none";

    throw new Error("No preferences found.");

}

console.log(preferences);

const mood = preferences.mood;
const budget = preferences.budget;
const cuisines = preferences.categories;


// =====================================================
// Display User Preferences
// =====================================================

const selectedOptions = document.getElementById("selected-options");

selectedOptions.innerHTML = "";

selectedOptions.innerHTML += `<span>${mood}</span>`;

selectedOptions.innerHTML += `<span>${budget}</span>`;

cuisines.forEach(cuisine => {

    selectedOptions.innerHTML += `<span>${cuisine}</span>`;

});


// =====================================================
// Calculate Recommendation Index
// =====================================================

let startIndex = 0;


// Mood

if (mood === "😊 Happy") {

    startIndex = 0;

}

else if (mood === "😌 Relaxed") {

    startIndex = 6;

}

else if (mood === "😫 Stressed") {

    startIndex = 12;

}

else if (mood === "😴 Tired") {

    startIndex = 18;

}


// Budget

if (budget === "Under $15") {

    startIndex += 0;

}

else if (budget === "$15 - $30") {

    startIndex += 2;

}

else {

    startIndex += 4;

}


console.log("Start Index:", startIndex);


// =====================================================
// Get Meals From API
// =====================================================

const resultsContainer = document.getElementById("results-container");

resultsContainer.innerHTML = "";

cuisines.forEach(cuisine => {

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine}`)

        .then(response => response.json())

        .then(data => {

            console.log("Cuisine:", cuisine);

            console.log("Total Meals:", data.meals.length);


            // Pick two meals according to Mood + Budget

            const selectedMeals = data.meals.slice(startIndex, startIndex + 2);

selectedMeals.forEach(meal => {

    resultsContainer.innerHTML += `

    <article class="restaurant-card">

        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">

        <div class="restaurant-content">

            <h3>${meal.strMeal}</h3>

            <p class="meal-category">${cuisine}</p>

            <a href="details.html?id=${meal.idMeal}">

                <button>View Details</button>

            </a>

        </div>

    </article>

    `;

});

        });

});