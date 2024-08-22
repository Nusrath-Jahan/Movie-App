// Function to add event listeners for "Read More" and star rating
function addEventListeners(readMoreBtn, movieDetails, stars) {
    readMoreBtn.addEventListener("click", function () {
      this.classList.toggle("active");
      if (movieDetails.style.display === "block") {
        movieDetails.style.display = "none";
      } else {
        movieDetails.style.display = "block";
      }
    });
  
    const starClassActive = "rating__star fas fa-star";
    const starClassInactive = "rating__star far fa-star";
    stars.forEach((star, clickedStarIndex) => {
      star.onclick = () => {
        stars.forEach((star, starIndex) => {
          if (starIndex <= clickedStarIndex) {
            star.className = starClassActive;
          } else {
            star.className = starClassInactive;
          }
        });
      };
    });
  }
  //-------------------------
  document.addEventListener("DOMContentLoaded", () => {
    fetchMoviesFromAPI().then(fetchedMovies => {
      movies = fetchedMovies; // Store the fetched movies globally
      displayMovies(movies); // Display all movies initially
  
      // Search Functionality
      const searchInput = document.getElementById("keyword-search");
      searchInput.addEventListener("input", (e) => {
        searchMovies(e.target.value);
      });
  
      // Sort Functionality
      const sortSelect = document.getElementById("sort-options");
      sortSelect.addEventListener("change", (e) => {
        sortMovies(e.target.value);
      });
  
      // Example Filter by Year (You can add more filters as needed)
      const yearInput = document.getElementById("year-filter");
      yearInput.addEventListener("input", (e) => {
        filterMoviesByYear(parseInt(e.target.value, 10));
      });
    });
  });
  