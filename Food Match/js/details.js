// =====================================================
// Get Meal ID From URL
// =====================================================

const params = new URLSearchParams(window.location.search);

const mealId = params.get("id");

if (!mealId) {

    alert("Meal not found.");

    window.location.href = "results.html";

}



// =====================================================
// HTML Elements
// =====================================================

const mealImage = document.getElementById("meal-image");

const mealName = document.getElementById("meal-name");

const mealInfo = document.getElementById("meal-info");

const mealDescription = document.getElementById("meal-description");

const ingredientsList = document.getElementById("ingredients-list");

const mealInstructions = document.getElementById("meal-instructions");



// =====================================================
// Load Meal Details
// =====================================================

async function loadMeal() {

    try {

        const response = await fetch(

            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`

        );

        const data = await response.json();

        const meal = data.meals[0];

        console.log(meal);



        // =============================================
        // Meal Image
        // =============================================

        mealImage.src = meal.strMealThumb;

        mealImage.alt = meal.strMeal;



        // =============================================
        // Meal Name
        // =============================================

        mealName.textContent = meal.strMeal;



        // =============================================
        // Area + Category
        // =============================================

        mealInfo.textContent =
            `${meal.strArea} • ${meal.strCategory}`;



        // =============================================
        // Description
        // =============================================

        mealDescription.textContent =
            `A traditional ${meal.strArea} ${meal.strCategory.toLowerCase()} dish.`;



        // =============================================
        // Ingredients
        // =============================================

        ingredientsList.innerHTML = "";

        for (let i = 1; i <= 20; i++) {

            const ingredient = meal[`strIngredient${i}`];

            const measure = meal[`strMeasure${i}`];

            if (ingredient && ingredient.trim() !== "") {

                ingredientsList.innerHTML += `

                    <li>

                        ${measure} ${ingredient}

                    </li>

                `;

            }

        }



        // =============================================
        // Preparation
        // =============================================

        mealInstructions.textContent = meal.strInstructions;

    }

    catch (error) {

        console.log(error);

        alert("Unable to load meal details.");

    }

}



loadMeal();