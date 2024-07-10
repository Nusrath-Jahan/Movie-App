import { movies } from "./arrayList.js";

//////////////////////Streaming Function
const nowStreaming = document.querySelector(".streaming");
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
  // Create image element
  const img = document.createElement("img");
  img.width = 200;
  img.src = movie.poster_url;

  // Create button element
  const readMoreBtn = document.createElement("button");
  readMoreBtn.textContent = "Read more";
  readMoreBtn.className = "accordion";

  // Create star rating element
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

function createCommentSection() {
  const commentSection = document.createElement("div");
  commentSection.innerHTML = "Comments: ";
  commentSection.style.fontWeight = "bold";
  commentSection.className = "comment-section";

  const commentInput = document.createElement("input");
  commentInput.type = "text";
  commentInput.value = "";
  commentInput.placeholder = "Add a Comment";
  commentInput.style.color = "white";

  const commentButton = document.createElement("button");
  commentButton.className = "comment-button";
  commentButton.innerHTML = "Submit";

  const comments = document.createElement("div");
  comments.className = "comments";
  const commentUl = document.createElement("ul");

  commentButton.addEventListener("click", () => {
    if (commentInput.value) {
      const comment = document.createElement("li");
      comment.textContent = commentInput.value;
      commentUl.appendChild(comment);
      commentInput.value = "";
    }
    comments.appendChild(commentUl);
  });

  commentSection.appendChild(commentInput);
  commentSection.appendChild(commentButton);
  commentSection.appendChild(comments);

  return commentSection;
}

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

function createMoviesPage() {
  nowStreaming.innerHTML = "";
  movies.forEach((movie) => {
    const movieElement = createMovieCard(movie);
    nowStreaming.appendChild(movieElement);
  });
}
createMoviesPage();

// JS 2
const searchBtn = document.getElementById("search-icon");

// function to search
const inputField = document.getElementById("keyword-search");
searchBtn.addEventListener("click", () => {
  const inputStr = inputField.value.toLowerCase();
  nowStreaming.innerHTML = "";
  let found = false; // Flag to check if any movie is found

  movies.forEach((movie) => {
    if (
      movie.title.toLowerCase().includes(inputStr) ||
      movie.description.toLowerCase().includes(inputStr)
    ) {
      found = true;
      const searchMovieElement = createMovieCard(movie);
      nowStreaming.appendChild(searchMovieElement);
    }
    if (!found) {
      nowStreaming.innerHTML = `<p class="not-found-message">Not Found</p>`;
    }
  });
});
