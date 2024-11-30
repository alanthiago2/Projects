// Array of quotes categorized
const quotesArray = [
    {
        category: "motivational",
        quotes: [
            "Believe you can and you're halfway there.",
            "Success is not final, failure is not fatal: it is the courage to continue that counts.",
            "The only way to do great work is to love what you do."
        ]
    },
    {
        category: "inspirational",
        quotes: [
            "You are never too old to set another goal or to dream a new dream.",
            "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
            "Keep your face always toward the sunshine—and shadows will fall behind you."
        ]
    },
    {
        category: "wisdom",
        quotes: [
            "The only true wisdom is in knowing you know nothing.",
            "In the middle of every difficulty lies opportunity.",
            "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment."
        ]
    }
];

// Function to get a random quote based on the selected category
function getRandomQuote(category) {
    let filteredQuotes;

    // Filter quotes based on the selected category or include all if 'all' is selected
    if (category === "all") {
        filteredQuotes = quotesArray.flatMap(item => item.quotes);
    } else {
        const categoryObj = quotesArray.find(item => item.category === category);
        filteredQuotes = categoryObj ? categoryObj.quotes : [];
    }

    // Generate a random index to pick a quote
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    return filteredQuotes[randomIndex];
}

// DOM Elements
const quoteElement = document.getElementById("quote"); // Quote display area
const authorElement = document.getElementById("author"); // Author display area (optional)
const generateButton = document.getElementById("generate-quote"); // Generate button
const categoryDropdown = document.getElementById("category-select"); // Dropdown menu

// Event listener for generating a quote
generateButton.addEventListener("click", () => {
    const selectedCategory = categoryDropdown.value; // Get the selected category
    const randomQuote = getRandomQuote(selectedCategory); // Get a random quote
    quoteElement.textContent = randomQuote || "No quotes available for this category."; // Update the quote area
    authorElement.textContent = selectedCategory !== "all" ? `— ${selectedCategory}` : ""; // Optionally add category as "author"
});

// Generate an initial quote on page load
document.addEventListener("DOMContentLoaded", () => {
    const initialQuote = getRandomQuote("all"); // Get a random quote from all categories
    quoteElement.textContent = initialQuote; // Display the initial quote
});
