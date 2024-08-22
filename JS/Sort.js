function sortMovies(property) {
  const sortedMovies = [...movies].sort((a, b) => {
    if (a[property] < b[property]) return -1;
    if (a[property] > b[property]) return 1;
    return 0;
  });
  displayMovies(sortedMovies);
}

  