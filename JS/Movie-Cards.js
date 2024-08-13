// Function to create a movie card
function createMovieCard(movie) {
    const movieContainer = createMovieContainer();
    const movieElements = createMovieElements(movie);
    const movieDetails = createMovieDetails(movie);
    const commentSection = createCommentSection();
  
    movieContainer.appendChild(movieElements.img);
    movieContainer.appendChild(movieElements.readMoreBtn);
    movieContainer.appendChild(movieElements.starRating);
    movieContainer.appendChild(movieDetails);
    movieDetails.appendChild(commentSection);
  
    addEventListeners(
      movieElements.readMoreBtn,
      movieDetails,
      movieElements.stars
    );
  
    return movieContainer;
  }
  
  function createMovieContainer() {
    const movieContainer = document.createElement("div");
    movieContainer.className = "movie-container";
    return movieContainer;
  }
  
  function createMovieElements(movie) {
    const img = document.createElement("img");
    img.className = "movie-img";
    img.src = movie.poster_url;
  
    const readMoreBtn = document.createElement("button");
    readMoreBtn.textContent = "Read more";
    readMoreBtn.className = "read-more-button";
  
    const starRating = document.createElement("div");
    starRating.className = "star-rating";
  
    const numberOfStars = 5;
    let stars = [];
  
    for (let x = 0; x < numberOfStars; x++) {
      const star = document.createElement("i");
      star.className = "rating__star far fa-star";
      starRating.appendChild(star);
      stars.push(star);
    }
  
    return { img, readMoreBtn, starRating, stars };
  }
  
  function createMovieDetails(movie) {
    const movieDetails = document.createElement("div");
    movieDetails.className = "movie-details";
    movieDetails.style.display = "none";
    movieDetails.style.color = "white";
    movieDetails.innerHTML = `
      <p><strong>Title:</strong> ${movie.title}</p>
      <p><strong>Description:</strong> ${movie.description}</p>
      <p><strong>Release Year:</strong> ${movie.movie_year}</p>
      <p><strong>Director:</strong> ${movie.director}</p>
      <p><strong>Actors:</strong> ${movie.actors.join(", ")}</p>
    `;
    return movieDetails;
  }
  