function searchMovies(keyword) {
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(keyword.toLowerCase())
  );
  displayMovies(filteredMovies);
}
function filterMoviesByYear(year) {
  const filteredMovies = movies.filter(movie => movie.movie_year > year);
  displayMovies(filteredMovies);
}
  