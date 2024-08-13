let movies = []; // Initialize empty array to store movies
const nowStreaming = document.querySelector(".streaming");
// Function to fetch data from API
async function fetchMoviesFromAPI() {
  try {
    const response = await fetch("https://raw.githubusercontent.com/Nusrath-Jahan/Nusrath-Jahan.github.io/main/data.json");
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
}

// Function to process fetched movies and create movie cards
function processMovies() {
  fetchMoviesFromAPI()
    .then(function(data) {
      movies = data; // Store fetched movies in the 'movies' array
      displayMovies(movies); // Display movies after fetching
    })
    .catch(function(error) {
      console.error('Error processing movies:', error);
    });
}

// Function to display movies
function displayMovies(moviesArray) {
  nowStreaming.innerHTML = "";
  moviesArray.forEach((movie) => {
    const movieElement = createMovieCard(movie);
    nowStreaming.appendChild(movieElement);
  });
}

// Call processMovies to initiate fetching and processing
processMovies();
