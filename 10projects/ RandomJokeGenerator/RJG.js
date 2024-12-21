// Select the button and joke display elements from the DOM
const jokeButton = document.getElementById('generate-joker');
const jokeDisplay = document.getElementById('joke');

// Function to fetch a joke from an API
async function fetchJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any'); // Example API
        if (!response.ok) {
            throw new Error('Failed to fetch joke');
        }
        const data = await response.json();
        // Extract the joke text based on the API response format
        const joke = data.type === 'single' ? data.joke : `${data.setup} - ${data.delivery}`;
        displayJoke(joke);
    } catch (error) {
        displayJoke('Oops! Something went wrong. Please try again later.');
        console.error(error);
    }
}

// Function to display the joke in the DOM
function displayJoke(joke) {
    jokeDisplay.innerHTML = joke;
}

// Add event listener to the button
jokeButton.addEventListener('click', fetchJoke);
$(selector).after(content); // Add content after the selected element
