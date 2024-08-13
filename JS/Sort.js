// Function to sort movies by a specified property
function sortMovies(property, ascending = true) {
    return movies.slice().sort((a, b) => {
      if (a[property] < b[property]) {
        return ascending ? -1 : 1;
      }
      if (a[property] > b[property]) {
        return ascending ? 1 : -1;
      }
      return 0;
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const sortSelect = document.getElementById("sort-options");
    sortSelect.onchange = (e) => {
      const sortedMovies = sortMovies(e.target.value);
      displayMovies(sortedMovies);
    };
  });
  