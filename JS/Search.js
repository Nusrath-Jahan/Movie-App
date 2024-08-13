// Function to search movies based on a keyword
function searchMovies(keyword) {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("keyword-search");
    searchInput.placeholder = "Search ...";
    searchInput.oninput = (e) => {
      const filteredMovies = searchMovies(e.target.value);
      displayMovies(filteredMovies);
    };
  });
  