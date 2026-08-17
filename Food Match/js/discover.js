// =====================================================
// Mood Selection (Single Choice)
// =====================================================

const moodButtons = document.querySelectorAll(".mood .option-buttons button");

let selectedMood = "";

moodButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (button.classList.contains("active")) {

            button.classList.remove("active");
            selectedMood = "";

        } else {

            moodButtons.forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            selectedMood = button.textContent.trim();

        }

    });

});


// =====================================================
// Budget Selection (Single Choice)
// =====================================================

const budgetButtons = document.querySelectorAll(".budget .option-buttons button");

let selectedBudget = "";

budgetButtons.forEach(button => {

    button.addEventListener("click", () => {

        if (button.classList.contains("active")) {

            button.classList.remove("active");
            selectedBudget = "";

        } else {

            budgetButtons.forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            selectedBudget = button.textContent.trim();

        }

    });

});


// =====================================================
// Cuisine Selection (Multiple Choice)
// =====================================================

const categoryCards = document.querySelectorAll(".category-card");

let selectedCategories = [];

categoryCards.forEach(card => {

    card.addEventListener("click", () => {

        const category = card.querySelector("h3").textContent.trim();

        card.classList.toggle("active");

        if (selectedCategories.includes(category)) {

            selectedCategories = selectedCategories.filter(item => item !== category);

        } else {

            selectedCategories.push(category);

        }

    });

});


// =====================================================
// Explore Recommendations
// =====================================================

const exploreButton = document.querySelector(".discover-cta button");

exploreButton.addEventListener("click", (event) => {

    event.preventDefault();

    if (
        selectedMood === "" ||
        selectedBudget === "" ||
        selectedCategories.length === 0
    ) {

        alert("Please select your mood, budget, and at least one cuisine before continuing.");

        return;

    }

    const preferences = {

        mood: selectedMood,

        budget: selectedBudget,

        categories: selectedCategories

    };

    sessionStorage.setItem(
    "preferences",
    JSON.stringify(preferences)
);

    window.location.href = "results.html";

});